import type { ProjectEntry, ProjectSlug } from "@/content/projects";

const projectDisplayOrder: readonly ProjectSlug[] = [
  "chocolate",
  "petnest",
  "orchidcare",
  "english4u",
  "paytrack",
  "ai-comparator",
  "brickdrop",
  "sea-battle"
];

const projectOrderIndex = new Map(projectDisplayOrder.map((slug, index) => [slug, index]));

export function sortProjectsForDisplay<T extends Pick<ProjectEntry, "slug">>(projectList: readonly T[]) {
  return [...projectList].sort((a, b) => {
    const aIndex = projectOrderIndex.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = projectOrderIndex.get(b.slug) ?? Number.MAX_SAFE_INTEGER;

    return aIndex - bIndex;
  });
}
