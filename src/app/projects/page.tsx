import { PageReveal } from "@/components/PageReveal";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  const productProjects = projects.filter((project) => project.category === "full-stack");
  const interactionProjects = projects.filter((project) => project.category !== "full-stack");

  return (
    <PageReveal>
      <div className="space-y-14">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Projects</p>
          <h1 className="max-w-5xl font-display text-5xl text-ink md:text-6xl">
            Selected work across full-stack product systems and interactive frontend experiences.
          </h1>
          <p className="max-w-3xl text-base leading-8 text-muted">
            The portfolio is grouped to make the strongest product work immediately legible while
            still giving the frontend/game builds enough presence to show a broader interaction range.
          </p>
        </div>

        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Full-stack products</p>
            <h2 className="font-display text-4xl text-ink">Apps with product logic, admin flows, and system depth.</h2>
          </div>
          <ProjectGrid projects={productProjects} />
        </section>

        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Interactive frontend</p>
            <h2 className="font-display text-4xl text-ink">Projects that focus on gameplay, motion, and UI systems.</h2>
          </div>
          <ProjectGrid projects={interactionProjects} />
        </section>
      </div>
    </PageReveal>
  );
}
