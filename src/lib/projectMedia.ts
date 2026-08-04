import type { MediaAsset, ProjectEntry } from "@/content/projects";

export function getPreferredMediaSrc(asset: MediaAsset) {
  return asset.optimizedSrc ?? asset.poster ?? asset.src;
}

export function getProjectHeroMedia(project: Pick<ProjectEntry, "media">) {
  return project.media.find((asset) => asset.featured) ?? project.media[0];
}
