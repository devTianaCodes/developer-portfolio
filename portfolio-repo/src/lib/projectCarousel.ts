import type { ProjectEntry } from "@/content/projects";
import { getPreferredMediaSrc, getProjectHeroMedia } from "@/lib/projectMedia";
import { sortProjectsForDisplay } from "@/lib/projectOrdering";

export type CarouselProject = Pick<ProjectEntry, "slug" | "name" | "category" | "visualTone"> & {
  imageSrc: string;
};

export function createCarouselProjects(projectList: readonly ProjectEntry[]): CarouselProject[] {
  return sortProjectsForDisplay(projectList).map((project) => {
    const hero = getProjectHeroMedia(project);

    return {
      slug: project.slug,
      name: project.name,
      category: project.category,
      visualTone: project.visualTone,
      imageSrc: hero ? getPreferredMediaSrc(hero) : ""
    };
  });
}
