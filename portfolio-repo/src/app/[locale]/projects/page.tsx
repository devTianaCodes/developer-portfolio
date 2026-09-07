import { use } from "react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FeaturedProjectsRail } from "@/components/FeaturedProjectsRail";
import { enabledLocales } from "@/i18n/config";
import { createPageMetadata } from "@/i18n/metadata";

type ProjectsPageProps = {
  params: Promise<{ locale: (typeof enabledLocales)[number] }>;
};

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return createPageMetadata({
    path: "/projects",
    locale,
    title: t("projectsTitle"),
    description: t("siteDescription")
  });
}

export default function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);
  return (
    <div className="space-y-10">
      <FeaturedProjectsRail />
    </div>
  );
}
