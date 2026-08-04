import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
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

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <FeaturedProjectsRail />
    </div>
  );
}
