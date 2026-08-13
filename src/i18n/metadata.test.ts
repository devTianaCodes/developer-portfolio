import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  createPageMetadata,
  getLanguageAlternates,
  getLocalizedUrl,
  siteUrl
} from "./metadata";

describe("localized metadata URLs", () => {
  it("keeps English unprefixed and prefixes the translated locales", () => {
    assert.equal(getLocalizedUrl("/projects", "en"), `${siteUrl}/projects`);
    assert.equal(getLocalizedUrl("projects", "it"), `${siteUrl}/it/projects`);
    assert.equal(getLocalizedUrl("/", "ro"), `${siteUrl}/ro`);
  });

  it("generates alternates for every public locale and the default language", () => {
    assert.deepEqual(getLanguageAlternates("/about"), {
      en: `${siteUrl}/about`,
      it: `${siteUrl}/it/about`,
      ro: `${siteUrl}/ro/about`,
      "x-default": `${siteUrl}/about`
    });
  });

  it("uses the localized URL consistently in canonical and Open Graph metadata", () => {
    const metadata = createPageMetadata({
      path: "/credentials",
      locale: "it",
      title: "Certificazioni",
      description: "Formazione professionale"
    });

    assert.equal(metadata.alternates?.canonical, `${siteUrl}/it/credentials`);
    assert.equal(metadata.openGraph?.url, `${siteUrl}/it/credentials`);
    assert.equal(metadata.openGraph?.locale, "it_IT");
  });
});
