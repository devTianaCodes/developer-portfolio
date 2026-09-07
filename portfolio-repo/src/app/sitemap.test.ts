import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { projects } from "@/content/projects";
import { enabledLocales } from "@/i18n/config";
import { getLanguageAlternates, getLocalizedUrl } from "@/i18n/metadata";
import sitemap from "./sitemap";

const publicPaths = [
  "/",
  "/about",
  "/projects",
  "/credentials",
  "/contact",
  ...projects.map(({ slug }) => `/projects/${slug}`)
];

describe("portfolio sitemap", () => {
  it("covers every public route in every enabled locale exactly once", () => {
    const entries = sitemap();
    const actualUrls = entries.map(({ url }) => url.toString());
    const expectedUrls = publicPaths.flatMap((path) =>
      enabledLocales.map((locale) => getLocalizedUrl(path, locale))
    );

    assert.equal(new Set(actualUrls).size, actualUrls.length, "Sitemap contains duplicate URLs");
    assert.deepEqual(actualUrls.sort(), expectedUrls.sort());
  });

  it("provides complete language alternates for every sitemap entry", () => {
    const entries = sitemap();

    for (const path of publicPaths) {
      const expectedAlternates = getLanguageAlternates(path);

      for (const locale of enabledLocales) {
        const url = getLocalizedUrl(path, locale);
        const entry = entries.find((candidate) => candidate.url.toString() === url);

        assert.ok(entry, `Missing sitemap entry for ${url}`);
        assert.deepEqual(entry.alternates?.languages, expectedAlternates);
      }
    }
  });
});
