import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageReveal } from "@/components/PageReveal";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { projects } from "@/content/projects";
import { enabledLocales } from "@/i18n/config";

type ProjectsPageProps = {
  params: Promise<{ locale: (typeof enabledLocales)[number] }>;
};

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("projectsTitle")
  };
}

export default function ProjectsPage() {
  return (
    <PageReveal>
      <div className="space-y-10">
        <ProjectCarousel projects={projects} />
      </div>
    </PageReveal>
  );
}
