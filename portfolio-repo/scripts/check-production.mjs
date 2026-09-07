import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { enabledLocales } from "../src/i18n/config.ts";

const origin = process.argv[2] ?? "http://localhost:5300";
const require = createRequire(import.meta.url);
const { default: sitemap } = require("../src/app/sitemap.ts");
const entries = sitemap();

for (const entry of entries) {
  const path = new URL(entry.url).pathname;
  const locale = enabledLocales.find((candidate) => entry.alternates.languages[candidate] === entry.url);
  const response = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(15_000) });
  assert.equal(response.status, 200, `${path} must load successfully`);
  const html = await response.text();
  assert.ok(html.includes(`<html lang="${locale}"`), `${path} has the wrong locale`);
  assert.ok(html.includes(`rel="canonical" href="${entry.url}"`), `${path} has the wrong canonical URL`);
  assert.equal(response.headers.get("x-nextjs-cache"), "HIT", `${path} was not served from the prerender cache`);
}

for (const path of ["/missing-page", "/it/missing-page", "/ro/missing-page", "/projects/missing-project"]) {
  const response = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(15_000) });
  assert.equal(response.status, 404, `${path} must return 404`);
}

for (const path of ["/demos/brickdrop.html", "/demos/sea-battle.html", "/sitemap.xml", "/robots.txt"]) {
  const response = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(15_000) });
  assert.equal(response.status, 200, `${path} must be available`);
}

for (const prefix of ["", "/it", "/ro"]) {
  const response = await fetch(new URL(`${prefix}/opengraph-image`, origin), { signal: AbortSignal.timeout(15_000) });
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("content-type"), "image/png");
}

console.log(`Production smoke check passed: ${entries.length} cached pages, four 404s, demos, metadata, and social images.`);
