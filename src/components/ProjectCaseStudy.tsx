import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { GithubIcon } from "@/components/GithubIcon";
import { ProjectTechBadge } from "@/components/ProjectTechBadge";
import type { ProjectEntry } from "@/content/projects";
import { projectPresentations, type ProjectLogicMap } from "@/content/projectPresentation";
import { getPreferredMediaSrc } from "@/lib/projectMedia";
import { projectCaseStudyThemes, projectSurfaces } from "@/lib/projectThemes";

type ProjectCaseStudyProps = {
  project: ProjectEntry;
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

function LogicMapFigure({
  logicMap,
  alt,
  className,
  sizes
}: {
  logicMap: ProjectLogicMap;
  alt: string;
  className: string;
  sizes: string;
}) {
  return (
    <figure className={className}>
      <Image
        src={logicMap.src}
        alt={alt}
        width={logicMap.width}
        height={logicMap.height}
        className="h-auto w-full object-cover"
        priority
        quality={82}
        sizes={sizes}
      />
    </figure>
  );
}

function repositoryLabel(label: string) {
  return label.toLocaleLowerCase();
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const t = useTranslations("ProjectCaseStudy");
  const images = project.media.filter((item) => item.kind === "image");
  const videos = project.media.filter((item) => item.kind === "video");
  const actionLinks = project.links.filter((link) => link.kind !== "case-study");
  const liveLink = actionLinks.find((link) => link.kind === "live" && link.href);
  const presentation = projectPresentations[project.slug];
  const lowerHeroLiveButton = Boolean(liveLink && presentation.lowerHeroLiveButton);
  const hasResourceBlock = Boolean(project.repositories || project.repositoryRoots);
  const logicMap = presentation.logicMap;
  const logicMapAlt = t("logicMapAlt", { project: project.name });
  const theme = projectCaseStudyThemes[project.visualTone];
  const surface = projectSurfaces[project.visualTone];
  const themeStyle = {
    "--case-accent": theme.accent,
    "--case-accent-soft": theme.accentSoft,
    "--case-line": theme.line
  } as CSSProperties;
  const panelClass = `rounded-[6px] border border-[color:var(--case-line)] ${theme.panel} p-8 shadow-[0_18px_48px_rgba(15,23,42,0.08)]`;
  const tileClass = `rounded-[6px] border border-[color:var(--case-line)] ${theme.tile} p-4 text-sm leading-7 text-muted`;
  const categoryLabel =
    project.category === "full-stack"
      ? t("categories.fullStack")
      : project.category === "frontend"
        ? t("categories.frontend")
        : t("categories.game");
  const deploymentLabel =
    project.deploymentMode === "hybrid"
      ? t("deployment.hybrid")
      : project.deploymentMode === "media"
        ? t("deployment.media")
        : t("deployment.live");

  return (
    <div style={themeStyle} className={`-mx-2.5 -my-10 overflow-hidden px-2.5 py-10 md:-mx-4 md:-my-14 md:px-4 md:py-14 ${surface}`}>
      <div className="mx-auto max-w-[96rem] space-y-6 md:space-y-16">
        <section className={`grid gap-5 overflow-hidden rounded-[6px] border border-[color:var(--case-line)] p-4 shadow-[0_32px_100px_rgba(15,23,42,0.12)] sm:p-5 md:grid-cols-2 md:grid-rows-[auto_11.5rem] md:items-stretch md:gap-x-8 md:gap-y-4 md:p-8 ${theme.hero}`}>
          <div className="flex min-w-0 flex-col gap-5 md:col-start-1 md:row-start-1">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-[3px] border border-[color:var(--case-line)] bg-white/24 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#262626]/76 sm:px-4 sm:text-xs sm:tracking-[0.26em]">
                  {categoryLabel}
                </span>
                <span className="rounded-[3px] border border-[color:var(--case-line)] bg-white/24 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#262626]/76 sm:px-4 sm:text-xs sm:tracking-[0.26em]">
                  {project.year}
                </span>
                <span className="rounded-[3px] border border-[color:var(--case-line)] bg-white/24 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#262626]/76 sm:px-4 sm:text-xs sm:tracking-[0.26em]">
                  {deploymentLabel}
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
          </div>

          <LogicMapFigure
            logicMap={logicMap}
            alt={logicMapAlt}
            className="overflow-hidden rounded-[6px] border border-[color:var(--case-line)] bg-white/70 shadow-[0_18px_54px_rgba(15,23,42,0.1)] md:col-start-2 md:row-start-1"
            sizes="(max-width: 767px) 100vw, 48vw"
          />

          <div className="space-y-5 md:col-start-1 md:row-start-2">
            {hasResourceBlock ? (
              <div className="max-w-3xl space-y-3 rounded-[6px] border border-[color:var(--case-line)] bg-white/24 p-3 sm:p-4 md:h-[11.5rem] md:overflow-hidden">
                {project.repositories ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.repositories.map((repo) => (
                      <Link
                        key={repo.href}
                        href={repo.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex min-w-0 w-full items-center gap-2 px-3 text-sm font-semibold lowercase tracking-[0.02em] text-[#262626]/74 underline-offset-4 transition hover:text-[var(--case-accent)] hover:underline"
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
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#262626]/58">
                          {t("repositoryRoot", { label: root.label })}
                        </p>
                        <p className="mt-1 break-words font-mono text-[11px] leading-5 text-[#262626]/78">{root.path}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}

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

          <div className="hidden min-w-0 self-end rounded-[6px] border border-[color:var(--case-line)] bg-white/58 p-4 md:col-start-2 md:row-start-2 md:block md:h-[11.5rem] md:overflow-hidden">
            <p className="text-center text-[11px] font-bold uppercase tracking-[2px] text-[#262626]/62">{t("techStack")}</p>
            <div className="mt-3 flex max-h-[8.25rem] flex-wrap justify-center gap-2 overflow-hidden">
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
        </section>

        {images.length > 0 ? (
          <section className="render-deferred-section space-y-5">
            <div className="grid gap-6 md:grid-cols-2">
              {images.map((asset) => (
                <figure
                  key={asset.src}
                  className={`overflow-hidden rounded-[6px] border border-[color:var(--case-line)] ${theme.panel} shadow-[0_18px_48px_rgba(15,23,42,0.1)]`}
                >
                  <Image
                    src={getPreferredMediaSrc(asset)}
                    alt={asset.alt}
                    width={asset.width}
                    height={asset.height}
                    className="h-auto w-full object-cover"
                    loading="lazy"
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
          <section className="render-deferred-section grid gap-8 lg:grid-cols-2">
            <div className={panelClass}>
              <SectionTitle eyebrow={t("challengeEyebrow")} title={t("challengeTitle")} text={project.challenge} />
            </div>
            <div className={panelClass}>
              <SectionTitle eyebrow={t("solutionEyebrow")} title={t("solutionTitle")} text={project.solution} />
            </div>
          </section>
        )}

        {project.apiDomains || project.qualitySignals ? (
          <section className="render-deferred-section space-y-8">
            {project.qualitySignals ? (
              <div className={`space-y-6 ${panelClass}`}>
                <SectionTitle
                  eyebrow={project.qualityIntro?.eyebrow ?? t("qualityEyebrow")}
                  title={project.qualityIntro?.title ?? t("qualityTitle")}
                  text={
                    project.qualityIntro?.text ??
                    t("qualityDescription")
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
                  eyebrow={project.apiIntro?.eyebrow ?? t("apiEyebrow")}
                  title={project.apiIntro?.title ?? t("apiTitle")}
                  text={
                    project.apiIntro?.text ??
                    t("apiDescription")
                  }
                />
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {project.apiDomains.map((domain) => (
                    <p key={domain} className="min-w-0 break-all rounded-[6px] border border-[color:var(--case-line)] bg-white/72 px-4 py-3 font-mono text-sm text-muted">
                      {domain}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        ) : (
          <section className="render-deferred-section grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className={`space-y-5 ${panelClass}`}>
              <SectionTitle eyebrow={t("outcomeEyebrow")} title={t("outcomeTitle")} text={project.outcome} />
            </div>

            <div className={`space-y-6 ${panelClass}`}>
              <div>
                <p className="font-sans text-xs font-bold uppercase tracking-[2px] text-[var(--case-accent)]">{t("impactEyebrow")}</p>
                <h2 className="minimal-heading mt-3 text-4xl">{t("impactTitle")}</h2>
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

        <section className="render-deferred-section space-y-6">
          <SectionTitle
            eyebrow={t("featuresEyebrow")}
            title={t("featuresTitle")}
            text={t("featuresDescription")}
          />
          <div className="grid gap-4 md:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className={tileClass}>
                {feature}
              </div>
            ))}
          </div>
        </section>

        <section className="render-deferred-section space-y-6">
          <SectionTitle
            eyebrow={t("architectureEyebrow")}
            title={t("architectureTitle")}
            text={t("architectureDescription")}
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
          <section className="render-deferred-section space-y-6">
            <SectionTitle
              eyebrow={t("demoEyebrow")}
              title={t("demoTitle")}
              text={t("demoDescription")}
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
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--case-accent)]">{t("demoVideo")}</p>
                    <p className="text-sm leading-7 text-muted">
                      {asset.note ?? t("demoPlaceholder")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section>
          <div className={panelClass}>
            <p className="text-center text-xs uppercase tracking-[0.3em] text-[var(--case-accent)]">{t("techStack")}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
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
