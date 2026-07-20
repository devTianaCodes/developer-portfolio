import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageReveal } from "@/components/PageReveal";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { getProjectBySlug, projects } from "@/content/projects";
import { getItalianProject } from "@/content/projects.it";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project"
    };
  }

  const localizedProject = locale === "it" ? getItalianProject(project) : project;

  return {
    title: localizedProject.name,
    description: localizedProject.summary
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const localizedProject = locale === "it" ? getItalianProject(project) : project;

  return (
    <PageReveal>
      <ProjectCaseStudy project={localizedProject} />
    </PageReveal>
  );
}
