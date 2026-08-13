import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { MediaAsset } from "@/content/projects";
import {
  getPreferredMediaSrc,
  getProjectHeroMedia,
  getProjectStructuredImageSrc
} from "./projectMedia";

const baseAsset = {
  kind: "image",
  alt: "Project preview",
  width: 1600,
  height: 900
} as const satisfies Omit<MediaAsset, "src">;

describe("project media selection", () => {
  it("prefers optimized media, then poster media, then the original source", () => {
    assert.equal(
      getPreferredMediaSrc({
        ...baseAsset,
        src: "/original.png",
        poster: "/poster.webp",
        optimizedSrc: "/optimized.webp"
      }),
      "/optimized.webp"
    );
    assert.equal(
      getPreferredMediaSrc({ ...baseAsset, src: "/original.mp4", poster: "/poster.webp" }),
      "/poster.webp"
    );
    assert.equal(getPreferredMediaSrc({ ...baseAsset, src: "/original.png" }), "/original.png");
  });

  it("uses the featured asset as the project hero regardless of its position", () => {
    const first = { ...baseAsset, src: "/first.png" };
    const featured = { ...baseAsset, src: "/featured.png", featured: true };

    assert.equal(getProjectHeroMedia({ media: [first, featured] }), featured);
  });

  it("falls back to the first asset and returns undefined for an empty gallery", () => {
    const first = { ...baseAsset, src: "/first.png" };

    assert.equal(getProjectHeroMedia({ media: [first] }), first);
    assert.equal(getProjectHeroMedia({ media: [] }), undefined);
  });

  it("selects the first publishable image for structured data", () => {
    assert.equal(
      getProjectStructuredImageSrc({
        media: [
          { ...baseAsset, src: "/planned.png", status: "capture-planned" },
          { ...baseAsset, kind: "video", src: "/demo.mp4" },
          { ...baseAsset, src: "/ready.png", optimizedSrc: "/ready.webp", status: "ready" }
        ]
      }),
      "/ready.webp"
    );
    assert.equal(getProjectStructuredImageSrc({ media: [] }), undefined);
  });
});
