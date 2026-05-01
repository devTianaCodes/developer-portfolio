import { createRequire } from "node:module";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const requireFromBundle = createRequire(
  "/Users/parents/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/"
);
const { firefox } = requireFromBundle("playwright");

const url = process.argv[2] ?? "http://localhost:5300/projects";
const output = resolve(process.argv[3] ?? "/private/tmp/portfolio-visual-checks/projects.png");
const selector = process.argv[4];
const width = Number(process.env.VISUAL_WIDTH ?? 1600);
const height = Number(process.env.VISUAL_HEIGHT ?? 1000);
const fullPage = process.env.VISUAL_FULL_PAGE === "1";

await mkdir(dirname(output), { recursive: true });

const browser = await firefox.launch({ headless: true });
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });

try {
  await page.goto(url, { waitUntil: "networkidle", timeout: 20000 });
  await page.evaluate(() => document.fonts?.ready);
  await page.waitForLoadState("networkidle", { timeout: 10000 });
  await page.waitForTimeout(650);

  if (selector) {
    const target = page.locator(selector).first();
    await target.waitFor({ state: "visible", timeout: 10000 });
    await target.screenshot({ path: output });
  } else {
    await page.screenshot({ path: output, fullPage });
  }

  console.log(output);
} finally {
  await browser.close();
}
