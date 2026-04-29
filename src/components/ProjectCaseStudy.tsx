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
  imageFrame: string;
  accent: string;
  accentSoft: string;
  line: string;
  darkText?: boolean;
};

const caseStudyThemes: Record<ProjectEntry["visualTone"], CaseTheme> = {
  "warm-luxury": {
    shell:
      "bg-[radial-gradient(circle_at_14%_8%,rgba(157,183,216,0.2),transparent_32%),radial-gradient(circle_at_86%_16%,rgba(49,95,159,0.12),transparent_32%),linear-gradient(180deg,#203656_0%,#dce7f5_58%,#f7f9fc_100%)]",
    hero: "bg-[linear-gradient(135deg,rgba(32,54,86,0.98),rgba(49,95,159,0.84))] text-white",
    panel: "bg-[rgba(255,255,255,0.9)]",
    tile: "bg-[rgba(247,249,252,0.86)]",
    imageFrame: "bg-[rgba(32,54,86,0.18)]",
    accent: "#315f9f",
    accentSoft: "#9db7d8",
    line: "rgba(49,95,159,0.16)"
  },
  "clean-learning": {
    shell:
      "bg-[radial-gradient(circle_at_14%_8%,rgba(157,183,216,0.22),transparent_32%),radial-gradient(circle_at_86%_16%,rgba(49,95,159,0.14),transparent_32%),linear-gradient(180deg,#203656_0%,#dce7f5_58%,#f7f9fc_100%)]",
    hero: "bg-[linear-gradient(135deg,rgba(32,54,86,0.98),rgba(49,95,159,0.84))] text-white",
    panel: "bg-[rgba(255,255,255,0.9)]",
    tile: "bg-[rgba(247,249,252,0.86)]",
    imageFrame: "bg-[rgba(32,54,86,0.18)]",
    accent: "#315f9f",
    accentSoft: "#9db7d8",
    line: "rgba(49,95,159,0.16)"
  },
  "soft-utility": {
    shell:
      "bg-[radial-gradient(circle_at_14%_8%,rgba(157,183,216,0.22),transparent_32%),radial-gradient(circle_at_86%_16%,rgba(49,95,159,0.14),transparent_32%),linear-gradient(180deg,#203656_0%,#dce7f5_58%,#f7f9fc_100%)]",
    hero: "bg-[linear-gradient(135deg,rgba(32,54,86,0.98),rgba(49,95,159,0.84))] text-white",
    panel: "bg-[rgba(255,255,255,0.9)]",
    tile: "bg-[rgba(247,249,252,0.86)]",
    imageFrame: "bg-[rgba(32,54,86,0.18)]",
    accent: "#315f9f",
    accentSoft: "#9db7d8",
    line: "rgba(49,95,159,0.16)"
  },
  arcade: {
    shell:
      "bg-[radial-gradient(circle_at_14%_8%,rgba(157,183,216,0.2),transparent_32%),radial-gradient(circle_at_86%_16%,rgba(49,95,159,0.14),transparent_32%),linear-gradient(180deg,#203656_0%,#dce7f5_58%,#f7f9fc_100%)]",
    hero: "bg-[linear-gradient(135deg,rgba(32,54,86,0.98),rgba(49,95,159,0.84))] text-white",
    panel: "bg-[rgba(255,255,255,0.9)]",
    tile: "bg-[rgba(247,249,252,0.86)]",
    imageFrame: "bg-[rgba(32,54,86,0.18)]",
    accent: "#315f9f",
    accentSoft: "#9db7d8",
    line: "rgba(49,95,159,0.16)"
  },
  "naval-tech": {
    shell:
      "bg-[radial-gradient(circle_at_14%_8%,rgba(157,183,216,0.2),transparent_32%),radial-gradient(circle_at_86%_16%,rgba(49,95,159,0.14),transparent_32%),linear-gradient(180deg,#203656_0%,#dce7f5_58%,#f7f9fc_100%)]",
    hero: "bg-[linear-gradient(135deg,rgba(32,54,86,0.98),rgba(49,95,159,0.84))] text-white",
    panel: "bg-[rgba(255,255,255,0.9)]",
    tile: "bg-[rgba(247,249,252,0.86)]",
    imageFrame: "bg-[rgba(32,54,86,0.18)]",
    accent: "#315f9f",
    accentSoft: "#9db7d8",
    line: "rgba(49,95,159,0.16)"
  }
};

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--case-accent)]">{eyebrow}</p>
      <h2 className="font-display text-4xl text-ink md:text-5xl">{title}</h2>
      <p className="max-w-3xl text-base leading-8 text-muted">{text}</p>
    </div>
  );
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const images = project.media.filter((item) => item.kind === "image");
  const videos = project.media.filter((item) => item.kind === "video");
  const featured = images.find((item) => item.featured) ?? images[0];
  const theme = caseStudyThemes[project.visualTone];
  const themeStyle = {
    "--case-accent": theme.accent,
    "--case-accent-soft": theme.accentSoft,
    "--case-line": theme.line
  } as CSSProperties;
  const panelClass = `rounded-[2rem] border border-[color:var(--case-line)] ${theme.panel} p-8 shadow-editorial backdrop-blur`;
  const tileClass = `rounded-[1.4rem] border border-[color:var(--case-line)] ${theme.tile} p-4 text-sm leading-7 text-muted`;

  return (
    <div style={themeStyle} className={`-mx-2.5 -my-10 overflow-hidden px-2.5 py-10 md:-mx-4 md:-my-14 md:px-4 md:py-14 ${theme.shell}`}>
      <div className="mx-auto max-w-7xl space-y-16">
        <section className={`grid gap-8 overflow-hidden rounded-[2.2rem] border border-white/18 p-8 shadow-[0_32px_100px_rgba(15,23,42,0.24)] lg:grid-cols-[1.05fr_0.95fr] lg:items-end ${theme.hero}`}>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 bg-[rgba(255,255,255,0.08)] px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/80">
                {project.category}
              </span>
              <span className="rounded-full border border-white/15 bg-[rgba(255,255,255,0.08)] px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/80">
                {project.year}
              </span>
              <span className="rounded-full border border-white/15 bg-[rgba(255,255,255,0.08)] px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/80">
                {project.deploymentMode}
              </span>
            </div>
            <h1 className="font-display text-5xl leading-none md:text-7xl">{project.name}</h1>
            <p className="max-w-2xl text-xl text-white/90">{project.tagline}</p>
            <p className="max-w-2xl text-base leading-8 text-white/76">{project.hook}</p>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) =>
                link.href ? (
                  <Link
                    key={`${project.slug}-${link.label}`}
                    href={link.href}
                    target={link.kind === "live" || link.kind === "code" ? "_blank" : undefined}
                    rel={link.kind === "live" || link.kind === "code" ? "noreferrer" : undefined}
                    className="rounded-full border border-white/20 bg-[rgba(255,255,255,0.1)] px-5 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
                  >
                    {link.label}
                  </Link>
                ) : null
              )}
            </div>
          </div>

          <div className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.08)] p-6 backdrop-blur sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="space-y-3 rounded-[1.1rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-white/68">{metric.label}</p>
                <p className="font-display text-3xl text-white">{metric.value}</p>
              </div>
            ))}
          </div>
        </section>

        {featured ? (
          <section className={`relative overflow-hidden rounded-[1.75rem] border border-[color:var(--case-line)] p-3 shadow-editorial ${theme.imageFrame}`}>
            <Image
              src={featured.poster ?? featured.src}
              alt={featured.alt}
              width={featured.width}
              height={featured.height}
              className="h-auto w-full rounded-[1.25rem] object-cover"
              priority
            />
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
            <p className="rounded-2xl border border-[color:var(--case-line)] bg-white/72 px-4 py-4 font-mono text-sm text-muted">
              {project.repoPath}
            </p>
          </div>

          <div className={`space-y-6 ${panelClass}`}>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--case-accent)]">What this demonstrates</p>
              <h2 className="mt-3 font-display text-4xl text-ink">Project impact</h2>
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

        <section className="space-y-6">
          <SectionTitle
            eyebrow="Interview angles"
            title="What I would talk through in a review"
            text="Each project is positioned to support technical discussion about decisions, tradeoffs, and execution quality."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {project.interviewAngles.map((item) => (
              <div key={item} className={`p-6 ${tileClass}`}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionTitle
            eyebrow="Media"
            title="Screenshots and demo capture"
            text="Ready assets are already wired into the portfolio. Planned clips remain first-class so the page structure stays stable when final media is dropped in."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {images.map((asset) => (
              <figure key={asset.src} className={`overflow-hidden rounded-[1.5rem] border border-[color:var(--case-line)] ${theme.panel} shadow-[0_18px_60px_rgba(15,23,42,0.12)]`}>
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  width={asset.width}
                  height={asset.height}
                  className="h-auto w-full object-cover"
                />
                <figcaption className="flex items-center justify-between gap-4 px-5 py-4 text-xs uppercase tracking-[0.18em] text-muted">
                  <span>{asset.alt}</span>
                  <span className="text-[var(--case-accent)]">{asset.status === "ready" ? "Ready" : "Capture planned"}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          {videos.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {videos.map((asset) => (
                <div key={asset.src} className={`rounded-[1.5rem] border border-dashed border-[color:var(--case-line)] ${theme.panel} p-6 shadow-[0_18px_60px_rgba(15,23,42,0.1)]`}>
                  {asset.poster ? (
                    <Image
                      src={asset.poster}
                      alt={asset.alt}
                      width={asset.width}
                      height={asset.height}
                      className="h-auto w-full rounded-[1.25rem] object-cover"
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
          ) : null}
        </section>

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
          <h2 className="mt-3 font-display text-4xl text-ink">Production-ready shot list</h2>
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
