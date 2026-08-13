import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { StructuredData } from "@/components/StructuredData";
import { getProjectBySlug, projects } from "@/content/projects";
import { isLocale } from "@/i18n/config";
import { createPageMetadata } from "@/i18n/metadata";
import { localizeProject } from "@/lib/localizeProject";
import { createProjectStructuredData } from "@/lib/structuredData";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !isLocale(locale)) {
    return {
      title: "Project",
    };
  }

  const localizedProject = localizeProject(project, locale);

  return createPageMetadata({
    path: `/projects/${slug}`,
    locale,
    title: localizedProject.name,
    description: localizedProject.summary
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  if (!isLocale(locale)) {
    notFound();
  }

  const localizedProject = localizeProject(project, locale);

  return (
    <>
      <StructuredData data={createProjectStructuredData(localizedProject, locale)} />
      <ProjectCaseStudy project={localizedProject} />
    </>
  );
}
