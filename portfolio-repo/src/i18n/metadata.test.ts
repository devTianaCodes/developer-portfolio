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
    assert.deepEqual(metadata.openGraph?.alternateLocale, ["en_US", "ro_RO"]);
    assert.deepEqual(metadata.openGraph?.images, [
      {
        url: `${siteUrl}/it/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Certificazioni"
      }
    ]);
    assert.ok(metadata.twitter && "card" in metadata.twitter);
    assert.equal(metadata.twitter.card, "summary_large_image");
    assert.deepEqual(metadata.twitter.images, [
      {
        url: `${siteUrl}/it/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Certificazioni"
      }
    ]);
  });
});
