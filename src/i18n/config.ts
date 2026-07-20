export const locales = ["en", "it", "ro"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale = "en" as const;

export const enabledLocales = ["en", "it"] as const satisfies readonly Locale[];

export function isLocale(value: string | null | undefined): value is Locale {
  return locales.includes(value as Locale);
}
