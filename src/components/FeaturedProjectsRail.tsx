import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjectsRail() {
  const fullStackProjects = projects.filter((project) => project.category === "full-stack");
  const gameProjects = projects.filter((project) => project.category === "game");

  return (
    <div className="space-y-12">
      <section className="space-y-5">
        <div className="space-y-2">
          <p className="section-label text-accent">Full-stack web apps</p>
          <h3 className="minimal-heading text-3xl md:text-4xl">Product-focused applications.</h3>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {fullStackProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} prominent={Boolean(project.flagship)} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <p className="section-label">Games</p>
          <h3 className="minimal-heading text-3xl md:text-4xl">Playable frontend systems.</h3>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {gameProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
