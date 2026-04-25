import type { ProjectEntry } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

type ProjectGridProps = {
  projects: ProjectEntry[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-8 xl:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} prominent={Boolean(project.flagship)} />
      ))}
    </div>
  );
}
