import assert from "node:assert/strict";
import { access, readdir, readFile } from "node:fs/promises";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";
import {
  degreeCredentials,
  professionalCredentials,
  uxUiCredentials
} from "./credentials";
import { projectPresentations } from "./projectPresentation";
import { projects } from "./projects";
import type { MediaAsset } from "./projects/types";
import { findDuplicates } from "@/test/findDuplicates";

type ImageDimensions = {
  width: number;
  height: number;
};

type AssetReference = {
  path: string;
  expectedDimensions?: ImageDimensions;
};

const publicDirectory = fileURLToPath(new URL("../../public/", import.meta.url));
const sourceDirectory = fileURLToPath(new URL("../", import.meta.url));

function getPublicFilePath(publicPath: string) {
  assert.match(publicPath, /^\//, `Public asset path must begin with a slash: ${publicPath}`);
  return fileURLToPath(new URL(`.${publicPath}`, new URL("../../public/", import.meta.url)));
}

async function findReferencedPublicAssets(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const references = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) return findReferencedPublicAssets(entryPath);
      if (!/\.(?:css|ts|tsx)$/.test(entry.name) || entry.name.endsWith(".test.ts")) return [];

      const source = await readFile(entryPath, "utf8");
      return [...source.matchAll(/(?:["'(])((?:\/media|\/demos)\/[^"')\s]+)/g)].map(
        (match) => match[1]
      ).filter((reference): reference is string => Boolean(reference));
    })
  );

  return references.flat();
}

const projectAssets: AssetReference[] = projects.flatMap((project) =>
  (project.media as readonly MediaAsset[]).flatMap((asset) => [
    {
      path: asset.src,
      expectedDimensions:
        asset.kind === "image" ? { width: asset.width, height: asset.height } : undefined
    },
    ...(asset.poster ? [{ path: asset.poster }] : []),
    ...(asset.optimizedSrc ? [{ path: asset.optimizedSrc }] : [])
  ])
);

const presentationAssets: AssetReference[] = Object.values(projectPresentations).map(
  ({ logicMap }) => ({
    path: logicMap.src,
    expectedDimensions: { width: logicMap.width, height: logicMap.height }
  })
);

const credentialAssets: AssetReference[] = [
  ...professionalCredentials,
  ...degreeCredentials,
  ...uxUiCredentials
].map(({ image }) => ({ path: image }));

const localDemoAssets: AssetReference[] = projects.flatMap((project) =>
  project.links.flatMap(({ href }) =>
    href?.startsWith("/demos/") ? [{ path: href }] : []
  )
);

const assetReferences = [
  ...projectAssets,
  ...presentationAssets,
  ...credentialAssets,
  ...localDemoAssets
];

describe("portfolio asset references", () => {
  it("points every source and canonical asset reference to an existing public file", async () => {
    assert.equal(publicDirectory.endsWith("/public/"), true);

    const referencedPaths = [
      ...new Set([
        ...assetReferences.map(({ path }) => path),
        ...(await findReferencedPublicAssets(sourceDirectory))
      ])
    ];

    await Promise.all(referencedPaths.map((publicPath) => access(getPublicFilePath(publicPath))));
  });

  it("does not reuse one asset path for multiple content records", () => {
    assert.deepEqual(findDuplicates(assetReferences.map(({ path }) => path)), []);
  });

  it("uses valid dimensions for every referenced image", async () => {
    const sourceAssets: AssetReference[] = (await findReferencedPublicAssets(sourceDirectory)).map(
      (assetPath) => ({ path: assetPath })
    );
    const imageAssets = [...assetReferences, ...sourceAssets]
      .filter(({ path: assetPath }) => /\.(?:jpe?g|png|webp)$/i.test(assetPath))
      .filter(
        ({ path: assetPath }, index, assets) =>
          assets.findIndex(({ path: candidatePath }) => candidatePath === assetPath) === index
      );

    for (const asset of imageAssets) {
      const { width, height } = await sharp(getPublicFilePath(asset.path)).metadata();

      assert.ok(width && height, `Invalid dimensions: ${asset.path}`);

      if (asset.expectedDimensions) {
        assert.deepEqual(
          { width, height },
          asset.expectedDimensions,
          `Declared dimensions do not match ${asset.path}`
        );
      }
    }
  });
});
