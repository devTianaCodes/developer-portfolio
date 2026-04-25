import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjectsRail() {
  const flagshipProjects = projects.filter((project) => project.flagship);
  const supportingProjects = projects.filter((project) => !project.flagship);

  return (
    <div className="space-y-8">
      <div className="grid gap-8 xl:grid-cols-2">
        {flagshipProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} prominent />
        ))}
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {supportingProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
