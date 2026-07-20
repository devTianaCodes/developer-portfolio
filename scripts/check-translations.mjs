import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const messagesDirectory = path.resolve("src/i18n/messages");
const locales = ["it", "ro"];
const strict = process.argv.includes("--strict");

function flattenKeys(value, prefix = "") {
  return Object.entries(value).flatMap(([key, child]) => {
    const pathKey = prefix ? `${prefix}.${key}` : key;

    if (child && typeof child === "object" && !Array.isArray(child)) {
      return flattenKeys(child, pathKey);
    }

    return [pathKey];
  });
}

async function readMessages(locale) {
  const file = await readFile(path.join(messagesDirectory, `${locale}.json`), "utf8");
  return JSON.parse(file);
}

const sourceKeys = new Set(flattenKeys(await readMessages("en")));
let hasStrictFailure = false;

for (const locale of locales) {
  const localeKeys = new Set(flattenKeys(await readMessages(locale)));
  const missing = [...sourceKeys].filter((key) => !localeKeys.has(key));
  const extra = [...localeKeys].filter((key) => !sourceKeys.has(key));
  const translated = sourceKeys.size - missing.length;

  console.log(`${locale}: ${translated}/${sourceKeys.size} keys present`);

  if (missing.length > 0) {
    console.log(`  Missing: ${missing.join(", ")}`);
  }

  if (extra.length > 0) {
    console.log(`  Extra: ${extra.join(", ")}`);
  }

  if (strict && (missing.length > 0 || extra.length > 0)) {
    hasStrictFailure = true;
  }
}

if (hasStrictFailure) {
  process.exitCode = 1;
}
