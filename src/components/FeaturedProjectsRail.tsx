import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjectsRail() {
  const fullStackProjects = projects.filter((project) => project.category === "full-stack");
  const gameProjects = projects.filter((project) => project.category === "game");
  const displayProjects = [...fullStackProjects, ...gameProjects];

  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="section-label text-accent">Full-stack web apps</p>
        <h3 className="minimal-heading text-3xl md:text-4xl">Product-focused applications and playable systems.</h3>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {displayProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            prominent={Boolean(project.flagship)}
            tallMedia={project.category === "full-stack"}
          />
        ))}
      </div>
    </section>
  );
}
