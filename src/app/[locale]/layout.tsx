import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata, siteUrl } from "@/i18n/metadata";
import { routing } from "@/i18n/routing";

type LocaleParamsProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocaleParamsProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t("siteTitle");
  const description = t("siteDescription");
  const localizedMetadata = createPageMetadata({ path: "/", locale, title, description });

  return {
    ...localizedMetadata,
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s | Tatiana Oblasser"
    },
    openGraph: localizedMetadata.openGraph
      ? { ...localizedMetadata.openGraph, siteName: title }
      : undefined,
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-background font-sans text-ink antialiased">
        <NextIntlClientProvider>
          <div className="relative min-h-screen overflow-x-clip">
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1 bg-[var(--color-main-background)]">
                <div className="mx-auto max-w-[96rem] px-2.5 py-10 md:px-4 md:py-14">{children}</div>
              </main>
              <SiteFooter />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
