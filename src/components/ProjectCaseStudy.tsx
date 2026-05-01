import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectTechBadge } from "@/components/ProjectTechBadge";
import type { ProjectEntry } from "@/content/projects";

type ProjectCaseStudyProps = {
  project: ProjectEntry;
};

type CaseTheme = {
  shell: string;
  hero: string;
  panel: string;
  tile: string;
  accent: string;
  accentSoft: string;
  line: string;
};

const caseStudyThemes: Record<ProjectEntry["visualTone"], CaseTheme> = {
  "warm-luxury": {
    shell: "bg-[#e6c9bc]",
    hero: "bg-[#d7ad9b] text-[#262626]",
    panel: "bg-[rgba(255,248,244,0.78)]",
    tile: "bg-[rgba(255,241,234,0.68)]",
    accent: "#7a3f2a",
    accentSoft: "#d8aa95",
    line: "rgba(122,63,42,0.22)"
  },
  "clean-learning": {
    shell: "bg-[#d9e8ff]",
    hero: "bg-[#c6dcff] text-[#262626]",
    panel: "bg-[rgba(247,251,255,0.76)]",
    tile: "bg-[rgba(235,244,255,0.7)]",
    accent: "#2d67b8",
    accentSoft: "#9fc3f2",
    line: "rgba(45,103,184,0.2)"
  },
  "soft-utility": {
    shell: "bg-[#dcefe6]",
    hero: "bg-[#c8e6d8] text-[#262626]",
    panel: "bg-[rgba(250,255,252,0.76)]",
    tile: "bg-[rgba(235,248,240,0.68)]",
    accent: "#2f765d",
    accentSoft: "#a6d7ba",
    line: "rgba(47,118,93,0.2)"
  },
  arcade: {
    shell: "bg-[#e2dcff]",
    hero: "bg-[#d3c9ff] text-[#262626]",
    panel: "bg-[rgba(250,250,255,0.78)]",
    tile: "bg-[rgba(241,238,255,0.7)]",
    accent: "#5547b8",
    accentSoft: "#b9aff2",
    line: "rgba(85,71,184,0.2)"
  },
  "naval-tech": {
    shell: "bg-[#d8edf7]",
    hero: "bg-[#c2e0ef] text-[#262626]",
    panel: "bg-[rgba(248,252,255,0.78)]",
    tile: "bg-[rgba(230,242,251,0.7)]",
    accent: "#1f6d94",
    accentSoft: "#93c9e3",
    line: "rgba(31,109,148,0.2)"
  }
};

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="space-y-3">
      <p className="font-sans text-xs font-bold uppercase leading-[1.2] tracking-[2px] text-[var(--case-accent)]">{eyebrow}</p>
      <h2 className="minimal-heading text-4xl md:text-5xl">{title}</h2>
      <p className="minimal-text max-w-3xl">{text}</p>
    </div>
  );
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const images = project.media.filter((item) => item.kind === "image");
  const videos = project.media.filter((item) => item.kind === "video");
  const theme = caseStudyThemes[project.visualTone];
  const themeStyle = {
    "--case-accent": theme.accent,
    "--case-accent-soft": theme.accentSoft,
    "--case-line": theme.line
  } as CSSProperties;
  const panelClass = `rounded-[6px] border border-[color:var(--case-line)] ${theme.panel} p-8 shadow-[0_18px_48px_rgba(15,23,42,0.08)] backdrop-blur`;
  const tileClass = `rounded-[6px] border border-[color:var(--case-line)] ${theme.tile} p-4 text-sm leading-7 text-muted`;

  return (
    <div style={themeStyle} className={`-mx-2.5 -my-10 overflow-hidden px-2.5 py-10 md:-mx-4 md:-my-14 md:px-4 md:py-14 ${theme.shell}`}>
      <div className="mx-auto max-w-[96rem] space-y-16">
        <section className={`grid gap-8 overflow-hidden rounded-[6px] border border-[color:var(--case-line)] p-8 shadow-[0_32px_100px_rgba(15,23,42,0.12)] lg:grid-cols-[minmax(0,1fr)_minmax(320px,430px)] lg:items-end ${theme.hero}`}>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-[3px] border border-[color:var(--case-line)] bg-white/24 px-4 py-2 text-xs uppercase tracking-[0.26em] text-[#262626]/76">
                {project.category}
              </span>
              <span className="rounded-[3px] border border-[color:var(--case-line)] bg-white/24 px-4 py-2 text-xs uppercase tracking-[0.26em] text-[#262626]/76">
                {project.year}
              </span>
              <span className="rounded-[3px] border border-[color:var(--case-line)] bg-white/24 px-4 py-2 text-xs uppercase tracking-[0.26em] text-[#262626]/76">
                {project.deploymentMode}
              </span>
            </div>
            <h1 className="font-sans text-5xl font-medium leading-none md:text-7xl">{project.name}</h1>
            <p className="max-w-2xl text-xl font-normal text-[#262626]/88">{project.tagline}</p>
            <p className="max-w-2xl text-base leading-7 text-[#262626]/72">{project.hook}</p>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) =>
                link.href ? (
                  <Link
                    key={`${project.slug}-${link.label}`}
                    href={link.href}
                    target={link.kind === "live" || link.kind === "code" ? "_blank" : undefined}
                    rel={link.kind === "live" || link.kind === "code" ? "noreferrer" : undefined}
                    className="sharp-button"
                  >
                    {link.label}
                  </Link>
                ) : null
              )}
            </div>
          </div>

          <div className="flex w-full max-w-[430px] flex-col justify-center justify-self-center rounded-[6px] border border-[color:var(--case-line)] bg-white/24 p-6 backdrop-blur lg:aspect-square lg:justify-self-end">
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#262626]/62">Tech stack</p>
            <div className="mt-5 flex flex-wrap content-center gap-3">
              {project.techStack.map((item) => (
                <ProjectTechBadge
                  key={item}
                  tech={item}
                  className="border-[color:var(--case-line)] bg-white/72 text-[#262626]"
                />
              ))}
            </div>
          </div>
        </section>

        {images.length > 0 ? (
          <section className="space-y-5">
            <div className="grid gap-6 md:grid-cols-2">
              {images.map((asset, index) => (
                <figure
                  key={asset.src}
                  className={`overflow-hidden rounded-[6px] border border-[color:var(--case-line)] ${theme.panel} shadow-[0_18px_48px_rgba(15,23,42,0.1)]`}
                >
                  <Image
                    src={asset.poster ?? asset.src}
                    alt={asset.alt}
                    width={asset.width}
                    height={asset.height}
                    className="h-auto w-full object-cover"
                    priority={index === 0}
                  />
                  <figcaption className="px-5 py-4 text-xs uppercase tracking-[0.18em] text-muted">
                    {asset.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <section className="grid gap-8 lg:grid-cols-2">
          <div className={panelClass}>
            <SectionTitle eyebrow="Challenge" title="What needed to work" text={project.challenge} />
          </div>
          <div className={panelClass}>
            <SectionTitle eyebrow="Solution" title="How it was built" text={project.solution} />
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className={`space-y-5 ${panelClass}`}>
            <SectionTitle eyebrow="Outcome" title="Why this project stands out" text={project.outcome} />
            <p className="text-sm uppercase tracking-[0.24em] text-muted">Repository roots</p>
            <p className="rounded-[6px] border border-[color:var(--case-line)] bg-white/72 px-4 py-4 font-mono text-sm text-muted">
              {project.repoPath}
            </p>
          </div>

          <div className={`space-y-6 ${panelClass}`}>
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-[2px] text-[var(--case-accent)]">What this demonstrates</p>
              <h2 className="minimal-heading mt-3 text-4xl">Project impact</h2>
            </div>
            <div className="grid gap-4">
              {project.impactBullets.map((item) => (
                <div key={item} className={tileClass}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <SectionTitle
            eyebrow="Product walkthrough"
            title="Feature highlights"
            text="The case study surfaces how the experience works for a real user, admin, or player, rather than stopping at visuals."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className={tileClass}>
                {feature}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionTitle
            eyebrow="Technical decisions"
            title="Architecture and implementation"
            text="These notes focus on why the structure matters, not only what technologies were chosen."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {project.architecture.map((item) => (
              <div key={item} className={`p-6 ${tileClass}`}>
                {item}
              </div>
            ))}
          </div>
        </section>



        {videos.length > 0 ? (
          <section className="space-y-6">
            <SectionTitle
              eyebrow="Demo capture"
              title="Video walkthrough"
              text="Planned clips remain first-class so the page structure stays stable when final media is dropped in."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {videos.map((asset) => (
                <div key={asset.src} className={`rounded-[6px] border border-dashed border-[color:var(--case-line)] ${theme.panel} p-6 shadow-[0_18px_60px_rgba(15,23,42,0.1)]`}>
                  {asset.poster ? (
                    <Image
                      src={asset.poster}
                      alt={asset.alt}
                      width={asset.width}
                      height={asset.height}
                      className="h-auto w-full rounded-[6px] object-cover"
                    />
                  ) : null}
                  <div className="mt-4 space-y-2">
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--case-accent)]">Demo video</p>
                    <p className="text-sm leading-7 text-muted">
                      {asset.note ?? "Clip placeholder ready for upload to Vercel-hosted media path."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="grid gap-8 lg:grid-cols-2">
          <div className={panelClass}>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--case-accent)]">Tech stack</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.techStack.map((item) => (
                <ProjectTechBadge key={item} tech={item} />
              ))}
            </div>
          </div>

          <div className={panelClass}>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--case-accent)]">Demo notes</p>
            <div className="mt-6 space-y-4">
              {project.demoNotes.map((note) => (
                <p key={note} className={tileClass}>
                  {note}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className={panelClass}>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--case-accent)]">Capture checklist</p>
          <h2 className="minimal-heading mt-3 text-4xl">Production-ready shot list</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {project.captureChecklist.map((item) => (
              <div key={item} className={tileClass}>
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
