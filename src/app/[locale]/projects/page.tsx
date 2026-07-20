import { PageReveal } from "@/components/PageReveal";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <PageReveal>
      <div className="space-y-10">
        <ProjectCarousel projects={projects} />
      </div>
    </PageReveal>
  );
}
