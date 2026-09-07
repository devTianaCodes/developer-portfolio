type SluggedEntry = Readonly<{ slug: string }>;

export type ProjectRegistry<Entry extends SluggedEntry> = Readonly<{
  entries: readonly Entry[];
  getBySlug: (slug: string) => Entry | undefined;
}>;

export function createProjectRegistry<Entry extends SluggedEntry>(
  entries: readonly Entry[]
): ProjectRegistry<Entry> {
  const entriesBySlug = new Map<string, Entry>();

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
