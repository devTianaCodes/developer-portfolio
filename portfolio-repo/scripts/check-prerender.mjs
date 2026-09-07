import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { projects } from "../src/content/projects.ts";
import { enabledLocales } from "../src/i18n/config.ts";

const manifest = JSON.parse(await readFile(".next/prerender-manifest.json", "utf8"));
const paths = ["", "/about", "/contact", "/credentials", "/projects",
  ...projects.map(({ slug }) => `/projects/${slug}`)];

for (const locale of enabledLocales) {
  for (const path of paths) {
    const route = `/${locale}${path}`;
    const entry = manifest.routes[route];
    assert.ok(entry, `${route} is missing from the prerender manifest`);
    assert.equal(entry.initialRevalidateSeconds, false, `${route} should be fully static`);
    assert.ok(!entry.initialStatus || entry.initialStatus === 200, `${route} did not render successfully`);
    const html = await readFile(`.next/server/app${route}.html`, "utf8");
    assert.ok(html.includes(`<html lang="${locale}"`), `${route} has the wrong document language`);
  }
}

console.log(`Prerender check passed: ${paths.length * enabledLocales.length} localized pages.`);
