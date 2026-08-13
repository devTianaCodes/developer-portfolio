import assert from "node:assert/strict";
import { describe, it } from "node:test";
import englishMessages from "./messages/en.json";
import italianMessages from "./messages/it.json";
import romanianMessages from "./messages/ro.json";

function flattenMessages(
  value: unknown,
  prefix = "",
  result = new Map<string, unknown>()
) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    if (prefix) result.set(prefix, value);
    return result;
  }

  for (const [key, child] of Object.entries(value)) {
    flattenMessages(child, prefix ? `${prefix}.${key}` : key, result);
  }

  return result;
}

function getPlaceholders(value: unknown) {
  if (typeof value !== "string") return [];

  return [...value.matchAll(/\{([^},]+)(?:,[^}]*)?\}/g)]
    .map((match) => match[1])
    .filter((placeholder): placeholder is string => Boolean(placeholder))
    .sort();
}

const messagesByLocale = {
  en: flattenMessages(englishMessages),
  it: flattenMessages(italianMessages),
  ro: flattenMessages(romanianMessages)
} as const;

describe("translation messages", () => {
  it("uses the same message keys and value types in every locale", () => {
    const englishEntries = [...messagesByLocale.en.entries()];
    const englishKeys = englishEntries.map(([key]) => key).sort();

    for (const [locale, messages] of Object.entries(messagesByLocale)) {
      assert.deepEqual(
        [...messages.keys()].sort(),
        englishKeys,
        `${locale} message keys do not match English`
      );

      for (const [key, englishValue] of englishEntries) {
        assert.equal(
          typeof messages.get(key),
          typeof englishValue,
          `${locale}.${key} does not match the English value type`
        );
      }
    }
  });

  it("preserves every English ICU placeholder in translated messages", () => {
    for (const [key, englishValue] of messagesByLocale.en) {
      const expectedPlaceholders = getPlaceholders(englishValue);

      for (const locale of ["it", "ro"] as const) {
        assert.deepEqual(
          getPlaceholders(messagesByLocale[locale].get(key)),
          expectedPlaceholders,
          `${locale}.${key} does not preserve the English placeholders`
        );
      }
    }
  });
});
