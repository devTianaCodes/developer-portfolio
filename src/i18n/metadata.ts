import type { Metadata } from "next";
import { defaultLocale, enabledLocales, type Locale } from "./config";

export const siteUrl = "https://developer-portfolio.vercel.app";
export const socialImagePath = "/opengraph-image";
export const socialImageSize = { width: 1200, height: 630 } as const;

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  it: "it_IT",
  ro: "ro_RO"
};

function normalizePath(path: string) {
  if (!path || path === "/") {
    return "";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

export function getLocalizedUrl(path: string, locale: Locale) {
  const normalizedPath = normalizePath(path);
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;

  return `${siteUrl}${localePrefix}${normalizedPath}`;
}

export function getLanguageAlternates(path: string) {
  return {
    ...Object.fromEntries(enabledLocales.map((locale) => [locale, getLocalizedUrl(path, locale)])),
    "x-default": getLocalizedUrl(path, defaultLocale)
  };
}

export function getPageAlternates(path: string, locale: Locale): Metadata["alternates"] {
  return {
    canonical: getLocalizedUrl(path, locale),
    languages: getLanguageAlternates(path)
  };
}

type PageMetadataOptions = {
  path: string;
  locale: Locale;
  title: string;
  description?: string;
};

export function createPageMetadata({
  path,
  locale,
  title,
  description
}: PageMetadataOptions): Metadata {
  const url = getLocalizedUrl(path, locale);
  const image = {
    url: getLocalizedUrl(socialImagePath, locale),
    ...socialImageSize,
    alt: title
  };

  return {
    title,
    description,
    alternates: getPageAlternates(path, locale),
    openGraph: {
      title,
      description,
      url,
      locale: openGraphLocales[locale],
      alternateLocale: enabledLocales
        .filter((candidate) => candidate !== locale)
        .map((candidate) => openGraphLocales[candidate]),
      type: "website",
      images: [image]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}
