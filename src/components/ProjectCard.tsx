import Image from "next/image";
import Link from "next/link";
import type { ProjectEntry } from "@/content/projects";

type ProjectCardProps = {
  project: ProjectEntry;
  prominent?: boolean;
};

const toneClasses: Record<ProjectEntry["visualTone"], string> = {
  "warm-luxury": "from-[rgba(39,23,18,0.88)] via-[rgba(116,60,38,0.22)] to-transparent",
  "clean-learning": "from-[rgba(15,23,42,0.84)] via-[rgba(37,99,235,0.22)] to-transparent",
  "soft-utility": "from-[rgba(15,54,50,0.82)] via-[rgba(49,95,159,0.16)] to-transparent",
  arcade: "from-[rgba(32,54,86,0.92)] via-[rgba(49,95,159,0.24)] to-transparent",
  "naval-tech": "from-[rgba(3,16,28,0.92)] via-[rgba(49,95,159,0.16)] to-transparent"
};

const categoryLabels: Record<ProjectEntry["category"], string> = {
  "full-stack": "Full-stack",
  frontend: "Frontend",
  game: "Game"
};

export function ProjectCard({ project, prominent = false }: ProjectCardProps) {
  const hero = project.media.find((item) => item.featured) ?? project.media[0];
  const heightClass = prominent ? "min-h-[620px]" : "min-h-[520px]";
  const liveLink = project.links.find((link) => link.kind === "live" && link.href);

  return (
    <article
      className={`group relative flex ${heightClass} cursor-pointer flex-col overflow-hidden rounded-[1.5rem] border border-line bg-white/82 shadow-[0_24px_70px_rgba(15,23,42,0.11)] transition duration-300 hover:-translate-y-1 hover:border-accent/28 hover:shadow-[0_30px_90px_rgba(37,99,235,0.16)]`}
    >
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`Open ${project.name} case study`}
        className="absolute inset-0 z-10"
      />
      {hero ? (
        <div className={`relative ${prominent ? "aspect-[16/10]" : "aspect-[16/9]"} overflow-hidden bg-slate-900`}>
          <Image
            src={hero.poster ?? hero.src}
            alt={hero.alt}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
            sizes={prominent ? "(max-width: 1280px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${toneClasses[project.visualTone]}`} />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {[categoryLabels[project.category], project.year, project.deploymentMode === "live" ? "Live" : project.deploymentMode === "hybrid" ? "Hybrid" : "Media"].map((item) => (
              <span key={item} className="inline-flex rounded-full border border-white/15 bg-slate-950/42 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white backdrop-blur">
                {item}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <div className="flex flex-1 flex-col justify-between gap-6 p-6">
        <div className="space-y-5">
          <div className="space-y-3">
            <h3 className={`${prominent ? "text-4xl md:text-5xl" : "text-3xl"} font-display leading-tight text-ink`}>
              {project.name}
            </h3>
            <p className="text-sm uppercase tracking-[0.22em] text-accent">{project.tagline}</p>
          </div>

          <p className="text-base leading-8 text-ink/90">{project.hook}</p>
          <p className="text-sm leading-7 text-muted">{project.summary}</p>

          <div className="grid gap-3">
            {project.impactBullets.slice(0, prominent ? 3 : 2).map((item) => (
              <div key={item} className="rounded-[1rem] border border-line bg-slate-50/80 px-4 py-4 text-sm leading-7 text-muted">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <ul className="flex flex-wrap gap-2">
            {project.techStack.slice(0, prominent ? 6 : 4).map((tech) => (
              <li key={tech} className="rounded-full border border-line bg-white px-3 py-1 text-xs uppercase tracking-[0.12em] text-muted">
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
            <span className="text-xs uppercase tracking-[0.22em] text-muted">
              {project.flagship ? "Flagship case study" : project.role}
            </span>
            <div className="relative z-20 flex flex-wrap gap-3">
              {liveLink ? (
                <Link
                  href={liveLink.href!}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-accent/20 bg-blue-50 px-5 py-3 text-sm uppercase tracking-[0.16em] text-accent transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-blue-100"
                >
                  Live demo
                </Link>
              ) : null}
              <Link
                href={`/projects/${project.slug}`}
                className="rounded-full bg-[linear-gradient(135deg,#2563eb,#315f9f)] px-5 py-3 text-sm uppercase tracking-[0.16em] text-white shadow-[0_14px_34px_rgba(37,99,235,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(49,95,159,0.22)]"
              >
                Case study
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
