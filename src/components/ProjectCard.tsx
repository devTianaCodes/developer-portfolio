import Image from "next/image";
import Link from "next/link";
import type { ProjectEntry } from "@/content/projects";

type ProjectCardProps = {
  project: ProjectEntry;
  prominent?: boolean;
};

const toneClasses: Record<ProjectEntry["visualTone"], string> = {
  "warm-luxury": "from-[rgba(42,23,14,0.84)] via-[rgba(71,43,28,0.18)] to-transparent",
  "clean-learning": "from-[rgba(23,38,72,0.82)] via-[rgba(90,115,168,0.18)] to-transparent",
  "soft-utility": "from-[rgba(33,63,58,0.8)] via-[rgba(123,158,139,0.16)] to-transparent",
  arcade: "from-[rgba(6,17,30,0.86)] via-[rgba(24,118,158,0.18)] to-transparent",
  "naval-tech": "from-[rgba(4,17,31,0.9)] via-[rgba(18,135,160,0.16)] to-transparent"
};

export function ProjectCard({ project, prominent = false }: ProjectCardProps) {
  const hero = project.media.find((item) => item.featured) ?? project.media[0];
  const heightClass = prominent ? "min-h-[640px]" : "min-h-[560px]";
  const liveLink = project.links.find((link) => link.kind === "live" && link.href);

  return (
    <article
      className={`group flex ${heightClass} flex-col overflow-hidden rounded-[2.2rem] border border-line bg-panel shadow-editorial transition duration-300 hover:-translate-y-1`}
    >
      {hero ? (
        <div className={`relative ${prominent ? "aspect-[16/11]" : "aspect-[16/10]"} overflow-hidden`}>
          <Image
            src={hero.poster ?? hero.src}
            alt={hero.alt}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
            sizes={prominent ? "(max-width: 1280px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${toneClasses[project.visualTone]}`} />
          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            <span className="inline-flex rounded-full border border-white/15 bg-[rgba(16,13,11,0.38)] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white">
              {project.category}
            </span>
            <span className="inline-flex rounded-full border border-white/15 bg-[rgba(16,13,11,0.38)] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white">
              {project.year}
            </span>
          </div>
        </div>
      ) : null}

      <div className="flex flex-1 flex-col justify-between gap-6 p-7">
        <div className="space-y-5">
          <div className="space-y-3">
            <h3 className={`${prominent ? "text-4xl md:text-5xl" : "text-3xl"} font-display text-ink`}>
              {project.name}
            </h3>
            <p className="text-sm uppercase tracking-[0.26em] text-accent">{project.tagline}</p>
          </div>

          <p className="text-base leading-8 text-ink/90">{project.hook}</p>
          <p className="text-sm leading-7 text-muted">{project.summary}</p>

          <div className="grid gap-3">
            {project.impactBullets.slice(0, prominent ? 3 : 2).map((item) => (
              <div
                key={item}
                className="rounded-[1.35rem] border border-line bg-[rgba(255,255,255,0.56)] px-4 py-4 text-sm leading-7 text-muted"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <ul className="flex flex-wrap gap-2">
            {project.techStack.slice(0, prominent ? 6 : 4).map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line bg-background px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
            <span className="text-xs uppercase tracking-[0.24em] text-muted">
              {project.deploymentMode === "live"
                ? "Live now"
                : project.deploymentMode === "hybrid"
                  ? "Hybrid demo"
                  : "Media-first"}
            </span>
            <div className="flex flex-wrap gap-3">
              {liveLink ? (
                <Link
                  href={liveLink.href!}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[rgba(154,98,57,0.16)] bg-[rgba(255,247,238,0.96)] px-5 py-3 text-sm uppercase tracking-[0.18em] text-[#4a2c1c] transition hover:border-[rgba(154,98,57,0.28)] hover:bg-[rgba(244,231,216,0.96)] hover:text-[#241a12]"
                >
                  Live demo
                </Link>
              ) : null}
              <Link
                href={`/projects/${project.slug}`}
                className="rounded-full border border-[rgba(154,98,57,0.24)] bg-[rgba(226,202,181,0.72)] px-5 py-3 text-sm uppercase tracking-[0.18em] text-[#4a2c1c] transition hover:bg-[rgba(214,184,156,0.94)] hover:text-[#241a12]"
              >
                View case study
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
