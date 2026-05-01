import Image from "next/image";
import Link from "next/link";
import { ProjectTechBadge } from "@/components/ProjectTechBadge";
import type { ProjectEntry } from "@/content/projects";

type ProjectCardProps = {
  project: ProjectEntry;
  prominent?: boolean;
};

const toneClasses: Record<ProjectEntry["visualTone"], string> = {
  "warm-luxury": "from-[rgba(39,23,18,0.78)] via-[rgba(116,60,38,0.2)] to-transparent",
  "clean-learning": "from-[rgba(15,23,42,0.72)] via-[rgba(37,99,235,0.18)] to-transparent",
  "soft-utility": "from-[rgba(15,54,50,0.72)] via-[rgba(49,95,159,0.14)] to-transparent",
  arcade: "from-[rgba(32,54,86,0.82)] via-[rgba(49,95,159,0.2)] to-transparent",
  "naval-tech": "from-[rgba(3,16,28,0.82)] via-[rgba(49,95,159,0.14)] to-transparent"
};

const categoryLabels: Record<ProjectEntry["category"], string> = {
  "full-stack": "Full-stack",
  frontend: "Frontend",
  game: "Game"
};

export function ProjectCard({ project, prominent = false }: ProjectCardProps) {
  const hero = project.media.find((item) => item.featured) ?? project.media[0];
  const heightClass = prominent ? "min-h-[560px]" : "min-h-[500px]";
  const liveLink = project.links.find((link) => link.kind === "live" && link.href);

  return (
    <article className={"group relative flex " + heightClass + " cursor-pointer flex-col overflow-hidden sharp-panel transition duration-300 hover:border-[#262626]/34 hover:shadow-[0_22px_58px_rgba(15,23,42,0.12)]"}>
      <Link href={"/projects/" + project.slug} aria-label={"Open " + project.name + " case study"} className="absolute inset-0 z-10" />
      {hero ? (
        <div className={"relative " + (prominent ? "aspect-[16/10]" : "aspect-[16/9]") + " overflow-hidden bg-slate-900"}>
          <Image
            src={hero.poster ?? hero.src}
            alt={hero.alt}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.025]"
            sizes={prominent ? "(max-width: 1280px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className={"absolute inset-0 bg-gradient-to-t " + toneClasses[project.visualTone]} />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {[categoryLabels[project.category], project.year, project.deploymentMode === "live" ? "Live" : project.deploymentMode === "hybrid" ? "Hybrid" : "Media"].map((item) => (
              <span key={item} className="inline-flex rounded-[3px] border border-white/30 bg-slate-950/46 px-3 py-1 text-[11px] uppercase tracking-[2px] text-white backdrop-blur">
                {item}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <div className="flex flex-1 flex-col justify-between gap-5 p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className={(prominent ? "text-4xl" : "text-3xl") + " minimal-heading"}>{project.name}</h3>
            <p className="section-label">{project.category === "game" ? "Playable build" : "Product app"}</p>
          </div>

          <p className="minimal-text text-ink/86">{project.hook}</p>

          <div className="grid gap-2">
            {project.impactBullets.slice(0, prominent ? 2 : 1).map((item) => (
              <div key={item} className="sharp-panel-soft px-4 py-3 text-sm leading-6 text-muted">{item}</div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <ul className="flex flex-wrap gap-2">
            {project.techStack.slice(0, prominent ? 6 : 4).map((tech) => (
              <li key={tech}><ProjectTechBadge tech={tech} compact /></li>
            ))}
          </ul>

          <div className="relative z-20 flex flex-wrap justify-end gap-3 border-t border-line pt-4">
            {liveLink ? (
              <Link href={liveLink.href!} target="_blank" rel="noreferrer" className="sharp-button">Live demo</Link>
            ) : null}
            <Link href={"/projects/" + project.slug} className="sharp-button">View</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
