import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/GithubIcon";
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
  "botanical-gold": {
    shell: "bg-[#f8edc6]",
    hero: "bg-[#f2e2ad] text-[#262626]",
    panel: "bg-[rgba(255,254,244,0.84)]",
    tile: "bg-[rgba(252,246,221,0.76)]",
    accent: "#7d6814",
    accentSoft: "#e5cf82",
    line: "rgba(125,104,20,0.15)"
  },
  "finance-peach": {
    shell: "bg-[#f4d8c8]",
    hero: "bg-[#f0c2aa] text-[#101828]",
    panel: "bg-[rgba(255,250,246,0.8)]",
    tile: "bg-[rgba(255,239,229,0.72)]",
    accent: "#c65345",
    accentSoft: "#f3a88c",
    line: "rgba(198,83,69,0.18)"
  },
  "ai-lilac": {
    shell: "bg-[#f6e4ea]",
    hero: "bg-[#f1d4df] text-[#262626]",
    panel: "bg-[rgba(255,249,251,0.84)]",
    tile: "bg-[rgba(250,231,238,0.7)]",
    accent: "#9b6475",
    accentSoft: "#dba2b2",
    line: "rgba(155,100,117,0.18)"
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

const logicMaps: Partial<Record<ProjectEntry["slug"], { src: string; width: number; height: number }>> = {
  chocolate: { src: "/media/projects/chocolate/logic-map.png", width: 1536, height: 1024 },
  english4u: { src: "/media/projects/english4u/logic-map.png", width: 1536, height: 1024 },
  orchidcare: { src: "/media/projects/orchidcare/logic-map.webp", width: 1536, height: 1024 },
  petnest: { src: "/media/projects/petnest/logic-map.png", width: 1672, height: 941 },
  paytrack: { src: "/media/projects/paytrack/logic-map.png", width: 1536, height: 1024 },
  "ai-comparator": { src: "/media/projects/ai-comparator/logic-map.png", width: 1536, height: 1024 },
  brickdrop: { src: "/media/projects/brickdrop/logic-map.png", width: 1536, height: 1024 },
  "sea-battle": { src: "/media/projects/sea-battle/logic-map.png", width: 1672, height: 941 }
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

function repositoryLabel(label: string) {
  return label
    .replace(/^Frontend/, "front-end")
    .replace(/^Backend/, "back-end")
    .replace(/^Game/, "game")
    .replace(/^Project/, "project");
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const images = project.media.filter((item) => item.kind === "image");
  const videos = project.media.filter((item) => item.kind === "video");
  const actionLinks = project.links.filter((link) => link.kind !== "case-study");
  const liveLink = actionLinks.find((link) => link.kind === "live" && link.href);
  const lowerHeroLiveButton = liveLink?.label === "Open Web App" && (project.slug === "chocolate" || project.slug === "petnest");
  const hasResourceBlock = Boolean(project.repositories || project.repositoryRoots);
  const logicMap = logicMaps[project.slug];
  const theme = caseStudyThemes[project.visualTone];
  const themeStyle = {
    "--case-accent": theme.accent,
    "--case-accent-soft": theme.accentSoft,
    "--case-line": theme.line
  } as CSSProperties;
  const panelClass = `rounded-[6px] border border-[color:var(--case-line)] ${theme.panel} p-8 shadow-[0_18px_48px_rgba(15,23,42,0.08)]`;
  const tileClass = `rounded-[6px] border border-[color:var(--case-line)] ${theme.tile} p-4 text-sm leading-7 text-muted`;

  return (
    <div style={themeStyle} className={`-mx-2.5 -my-10 overflow-hidden px-2.5 py-10 md:-mx-4 md:-my-14 md:px-4 md:py-14 ${theme.shell}`}>
      <div className="mx-auto max-w-[96rem] space-y-6 md:space-y-16">
        <section className={`grid gap-8 overflow-hidden rounded-[6px] border border-[color:var(--case-line)] p-4 shadow-[0_32px_100px_rgba(15,23,42,0.12)] sm:p-5 md:grid-cols-2 md:items-stretch md:p-8 ${theme.hero}`}>
          <div className="flex min-w-0 flex-col gap-5">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-[3px] border border-[color:var(--case-line)] bg-white/24 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#262626]/76 sm:px-4 sm:text-xs sm:tracking-[0.26em]">
                  {project.category}
                </span>
                <span className="rounded-[3px] border border-[color:var(--case-line)] bg-white/24 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#262626]/76 sm:px-4 sm:text-xs sm:tracking-[0.26em]">
                  {project.year}
                </span>
                <span className="rounded-[3px] border border-[color:var(--case-line)] bg-white/24 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#262626]/76 sm:px-4 sm:text-xs sm:tracking-[0.26em]">
                  {project.deploymentMode}
                </span>
              </div>
              <h1 className="max-w-full text-balance font-sans text-[clamp(2.45rem,13vw,4.35rem)] font-medium leading-[0.96] tracking-[-0.01em] md:text-7xl">{project.name}</h1>
              <p className="max-w-2xl text-lg font-normal leading-7 text-[#262626]/88 sm:text-xl">{project.tagline}</p>
            </div>

            {liveLink ? (
              <div className={`hidden justify-start pt-2 md:flex ${lowerHeroLiveButton ? "md:translate-y-[15px] md:pb-5" : "md:pb-3"}`}>
                <Link
                  href={liveLink.href!}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[4px] border-2 border-[#262626]/72 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] transition hover:bg-[#262626] hover:text-white"
                >
                  {liveLink.label}
                </Link>
              </div>
            ) : null}

            {logicMap ? (
              <figure className="overflow-hidden rounded-[6px] border border-[color:var(--case-line)] bg-white/70 shadow-[0_18px_54px_rgba(15,23,42,0.1)] md:hidden">
                <Image
                  src={logicMap.src}
                  alt={`${project.name} logic flow map`}
                  width={logicMap.width}
                  height={logicMap.height}
                  className="h-auto w-full object-cover"
                  priority
                  quality={82}
                  sizes="100vw"
                />
              </figure>
            ) : null}

            <div className="space-y-5 md:mt-auto">
              {hasResourceBlock ? (
                <div className="max-w-3xl space-y-3 rounded-[6px] border border-[color:var(--case-line)] bg-white/24 p-3 sm:p-4 md:h-[11.5rem] md:overflow-hidden">
                  {project.repositories ? (
                    <div className="flex flex-wrap justify-start gap-x-6 gap-y-3">
                      {project.repositories.map((repo) => (
                        <Link
                          key={repo.href}
                          href={repo.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-2 text-sm font-semibold lowercase tracking-[0.02em] text-[#262626]/74 underline-offset-4 transition hover:text-[var(--case-accent)] hover:underline"
                        >
                          <GithubIcon className="h-4 w-4 transition group-hover:scale-110" />
                          {repositoryLabel(repo.label)}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                  {project.repositoryRoots ? (
                    <div className="hidden gap-3 sm:grid sm:grid-cols-2">
                      {project.repositoryRoots.map((root) => (
                        <div key={root.path} className="min-w-0 rounded-[4px] border border-[color:var(--case-line)] bg-white/30 px-3 py-2 sm:px-3">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#262626]/58">{root.label} root</p>
                          <p className="mt-1 break-words font-mono text-[11px] leading-5 text-[#262626]/78">{root.path}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>

            {actionLinks.length > 0 ? (
              <div className="flex flex-wrap justify-start gap-3 md:hidden">
                {actionLinks.map((link) =>
                  link.href ? (
                    <Link
                      key={`${project.slug}-${link.label}`}
                      href={link.href}
                      target={link.kind === "live" || link.kind === "code" ? "_blank" : undefined}
                      rel={link.kind === "live" || link.kind === "code" ? "noreferrer" : undefined}
                      className="rounded-[4px] border-2 border-[#262626]/72 px-3 py-3 text-xs font-bold uppercase tracking-[0.12em] transition hover:bg-[#262626] hover:text-white sm:px-4 sm:text-sm sm:tracking-[0.18em]"
                    >
                      {link.label}
                    </Link>
                  ) : null
                )}
              </div>
            ) : null}
          </div>

          <div className="hidden min-w-0 grid-rows-[auto_11.5rem] gap-4 md:grid md:justify-self-stretch">
            {logicMap ? (
              <figure className="overflow-hidden rounded-[6px] border border-[color:var(--case-line)] bg-white/70 shadow-[0_18px_54px_rgba(15,23,42,0.1)]">
                <Image
                  src={logicMap.src}
                  alt={`${project.name} logic flow map`}
                  width={logicMap.width}
                  height={logicMap.height}
                  className="h-auto w-full object-cover"
                  priority
                  quality={82}
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </figure>
            ) : null}

            <div className="self-end rounded-[6px] border border-[color:var(--case-line)] bg-white/58 p-4 md:h-[11.5rem] md:overflow-hidden">
              <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#262626]/62">Tech stack</p>
              <div className="mt-3 flex max-h-[8.25rem] flex-wrap gap-2 overflow-hidden">
                {project.techStack.map((item) => (
                  <ProjectTechBadge
                    key={item}
                    tech={item}
                    compact
                    className="border-[color:var(--case-line)] bg-white/78 text-[#262626]"
                  />
                ))}
              </div>
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
                    src={asset.optimizedSrc ?? asset.poster ?? asset.src}
                    alt={asset.alt}
                    width={asset.width}
                    height={asset.height}
                    className="h-auto w-full object-cover"
                    priority={index === 0}
                    quality={82}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <figcaption className="px-5 py-4 text-xs uppercase tracking-[0.18em] text-muted">
                    {asset.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {project.workflowHighlights ? (
          <section>
            <div className="grid gap-6 lg:grid-cols-3">
              {project.workflowHighlights.map((group) => (
                <div key={group.title} className={`space-y-5 ${panelClass}`}>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--case-accent)]">{group.title}</p>
                    <p className="mt-3 text-sm leading-7 text-muted">{group.text}</p>
                  </div>
                  <div className="grid gap-3">
                    {group.items.map((item) => (
                      <p key={item} className={tileClass}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="grid gap-8 lg:grid-cols-2">
            <div className={panelClass}>
              <SectionTitle eyebrow="Challenge" title="What needed to work" text={project.challenge} />
            </div>
            <div className={panelClass}>
              <SectionTitle eyebrow="Solution" title="How it was built" text={project.solution} />
            </div>
          </section>
        )}

        {project.apiDomains || project.qualitySignals ? (
          <section className="space-y-8">
            {project.qualitySignals ? (
              <div className={`space-y-6 ${panelClass}`}>
                <SectionTitle
                  eyebrow={project.qualityIntro?.eyebrow ?? "Engineering quality"}
                  title={project.qualityIntro?.title ?? "Testing and coverage gates"}
                  text={
                    project.qualityIntro?.text ??
                    "The backend is presented as an interview-ready system with automated tests and measurable quality thresholds."
                  }
                />
                <div className="grid gap-4 md:grid-cols-2">
                  {project.qualitySignals.map((group) => (
                    <div key={group.title} className={tileClass}>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--case-accent)]">{group.title}</p>
                      <p className="mt-2">{group.text}</p>
                      <ul className="mt-3 space-y-2">
                        {group.items.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {project.apiDomains ? (
              <div className={`space-y-5 ${panelClass}`}>
                <SectionTitle
                  eyebrow={project.apiIntro?.eyebrow ?? "Backend surface"}
                  title={project.apiIntro?.title ?? "API domains"}
                  text={
                    project.apiIntro?.text ??
                    "The backend exposes dedicated REST domains for customer, commerce, admin, payment, and health workflows."
                  }
                />
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {project.apiDomains.map((domain) => (
                    <p key={domain} className="rounded-[6px] border border-[color:var(--case-line)] bg-white/72 px-4 py-3 font-mono text-sm text-muted">
                      {domain}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        ) : (
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
        )}

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
                      src={asset.optimizedSrc ?? asset.poster}
                      alt={asset.alt}
                      width={asset.width}
                      height={asset.height}
                      className="h-auto w-full rounded-[6px] object-cover"
                      quality={82}
                      sizes="(max-width: 1024px) 100vw, 50vw"
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

        <section>
          <div className={panelClass}>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--case-accent)]">Tech stack</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.techStack.map((item) => (
                <ProjectTechBadge key={item} tech={item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
