import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const mediaRoot = path.resolve("public/media");
const ordinaryAssetLimit = 1_500 * 1_024;
const totalMediaLimit = 60 * 1_024 * 1_024;

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory() ? listFiles(entryPath) : [entryPath];
    })
  );

  return nestedFiles.flat();
}

const files = await listFiles(mediaRoot);
const measuredFiles = await Promise.all(
  files.map(async (filePath) => ({
    path: path.relative(mediaRoot, filePath),
    size: (await stat(filePath)).size
  }))
);
const totalSize = measuredFiles.reduce((total, file) => total + file.size, 0);
const oversizedAssets = measuredFiles.filter((file) => file.size > ordinaryAssetLimit);

if (totalSize > totalMediaLimit || oversizedAssets.length > 0) {
  console.error(`Media budget exceeded: ${(totalSize / 1_048_576).toFixed(1)} MB total.`);

  for (const file of oversizedAssets) {
    console.error(`- ${file.path}: ${(file.size / 1_048_576).toFixed(2)} MB`);
  }

  process.exit(1);
}

console.log(
  `Media budget passed: ${measuredFiles.length} files, ${(totalSize / 1_048_576).toFixed(1)} MB total.`
);
