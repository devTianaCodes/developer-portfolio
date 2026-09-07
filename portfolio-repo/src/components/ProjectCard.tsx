import Image from "next/image";
import { useTranslations } from "next-intl";
import { ProjectTechBadge } from "@/components/ProjectTechBadge";
import type { ProjectEntry } from "@/content/projects";
import { projectCardOverlays } from "@/lib/projectThemes";
import { Link } from "@/i18n/navigation";
import { getPreferredMediaSrc, getProjectHeroMedia } from "@/lib/projectMedia";

type ProjectCardProps = {
  project: ProjectEntry;
  prominent?: boolean;
  tallMedia?: boolean;
};

export function ProjectCard({ project, prominent = false, tallMedia = false }: ProjectCardProps) {
  const tCommon = useTranslations("Common");
  const tHome = useTranslations("Home");
  const tProjectCard = useTranslations("Home.projectCards");
  const tProjects = useTranslations("Projects");
  const hero = getProjectHeroMedia(project);
  const heroSrc = hero ? getPreferredMediaSrc(hero) : "";
  const heightClass = prominent ? "min-h-[560px]" : "min-h-[500px]";
  const mediaAspect = tallMedia ? "aspect-[16/10]" : "aspect-[16/9]";
  const localizedImpactBullets = [
    tProjectCard(`${project.slug}.impactOne`)
  ];

  if (prominent) {
    localizedImpactBullets.push(tProjectCard(`${project.slug}.impactTwo`));
  }

  return (
    <article className={"render-deferred-card group relative flex " + heightClass + " cursor-pointer flex-col overflow-hidden sharp-panel transition duration-300 hover:border-[#262626]/34 hover:shadow-[0_22px_58px_rgba(15,23,42,0.12)]"}>
      {hero ? (
        <div className={"relative " + mediaAspect + " overflow-hidden bg-slate-900"}>
          <Image
            src={heroSrc}
            alt={tProjects("projectImageAlt", { project: project.name })}
            fill
            quality={82}
            className="object-cover transition duration-700 group-hover:scale-[1.025]"
            sizes={
              prominent
                ? "(max-width: 768px) 100vw, (max-width: 1280px) 48vw, 44vw"
                : "(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 31vw"
            }
          />
          <div className={"absolute inset-0 bg-gradient-to-t " + projectCardOverlays[project.visualTone]} />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col justify-between gap-5 p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className={(prominent ? "text-4xl" : "text-3xl") + " minimal-heading"}>{project.name}</h3>
            <p className="section-label">{project.category === "game" ? tHome("playableBuild") : tHome("productApp")}</p>
          </div>

          <p className="minimal-text text-ink/86">{tProjectCard(`${project.slug}.hook`)}</p>

          <div className="grid gap-2">
            {localizedImpactBullets.map((item) => (
              <div key={item} className="sharp-panel-soft px-4 py-3 text-sm leading-6 text-muted">{item}</div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <ul className="flex flex-wrap justify-center gap-2">
            {project.techStack.map((tech) => (
              <li key={tech}><ProjectTechBadge tech={tech} compact /></li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center gap-3 border-t border-line pt-4">
            <Link
              href={"/projects/" + project.slug}
              aria-label={tProjects("openProject", { project: project.name })}
              className="sharp-button after:absolute after:inset-0 after:z-10"
            >
              {tCommon("viewProject")}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
