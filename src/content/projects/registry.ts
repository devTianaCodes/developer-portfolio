import type { ProjectEntry } from "./types";

export type ProjectRegistry = Readonly<{
  entries: readonly ProjectEntry[];
  getBySlug: (slug: string) => ProjectEntry | undefined;
}>;

export function createProjectRegistry(entries: readonly ProjectEntry[]): ProjectRegistry {
  const entriesBySlug = new Map<string, ProjectEntry>();

  for (const entry of entries) {
    if (entriesBySlug.has(entry.slug)) {
      throw new Error(`Duplicate project slug: ${entry.slug}`);
    }

    entriesBySlug.set(entry.slug, entry);
  }

  return {
    entries: Object.freeze([...entries]),
    getBySlug: (slug) => entriesBySlug.get(slug)
  };
}
