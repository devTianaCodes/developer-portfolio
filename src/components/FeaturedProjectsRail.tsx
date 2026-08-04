import { useTranslations } from "next-intl";
import { projects, sortProjectsForDisplay } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjectsRail() {
  const t = useTranslations("Home");
  const orderedProjects = sortProjectsForDisplay(projects);
  const fullStackProjects = orderedProjects.filter((project) => project.category === "full-stack");
  const gameProjects = orderedProjects.filter((project) => project.category === "game");
  const displayProjects = [...fullStackProjects, ...gameProjects];
  const compactMediaProjects = new Set(["english4u", "paytrack", "ai-comparator"]);

  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="section-label text-accent">{t("projectsEyebrow")}</p>
        <h1 className="minimal-heading text-3xl md:text-4xl">{t("projectsHeading")}</h1>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {displayProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            prominent={Boolean(project.flagship)}
            tallMedia={project.category === "full-stack" && !compactMediaProjects.has(project.slug)}
          />
        ))}
      </div>
    </section>
  );
}
