import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjectsRail() {
  const fullStackProjects = projects.filter((project) => project.category === "full-stack");
  const gameProjects = projects.filter((project) => project.category === "game");

  return (
    <div className="space-y-14">
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-white">Full-stack web apps</p>
          <h3 className="font-display text-3xl leading-tight text-ink md:text-4xl">
            Product-focused applications.
          </h3>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {fullStackProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} prominent={Boolean(project.flagship)} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Games</p>
          <h3 className="font-display text-3xl leading-tight text-ink md:text-4xl">
            Interactive frontend builds with playable logic and polished UI systems.
          </h3>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {gameProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
