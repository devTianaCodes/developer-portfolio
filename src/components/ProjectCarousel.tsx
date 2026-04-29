"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ProjectEntry } from "@/content/projects";
import { classNames } from "@/lib/classNames";

type ProjectCarouselProps = {
  projects: ProjectEntry[];
};

const toneGlow: Record<ProjectEntry["visualTone"], string> = {
  "warm-luxury": "from-[#203656]/88 via-[#315f9f]/28 to-transparent",
  "clean-learning": "from-[#203656]/88 via-[#315f9f]/28 to-transparent",
  "soft-utility": "from-[#203656]/88 via-[#315f9f]/28 to-transparent",
  arcade: "from-[#203656]/90 via-[#315f9f]/30 to-transparent",
  "naval-tech": "from-[#203656]/88 via-[#315f9f]/28 to-transparent"
};

type TechIconKey = "react" | "node" | "express";

const featuredTech: Array<{ key: TechIconKey; label: string; match: string[] }> = [
  { key: "react", label: "React", match: ["react"] },
  { key: "node", label: "Node", match: ["node"] },
  { key: "express", label: "Express", match: ["express"] }
];

function TechIcon({ type }: { type: TechIconKey }) {
  if (type === "react") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  if (type === "node") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <path d="M12 2.8 20 7.4v9.2l-8 4.6-8-4.6V7.4l8-4.6Z" />
        <path d="M8.4 15.2V8.8h1.8l3.6 4.9V8.8h1.8v6.4h-1.8l-3.6-4.9v4.9H8.4Z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7.5h16" />
      <path d="M4 12h10.5" />
      <path d="M4 16.5h8" />
      <path d="m14.5 16.5 5-5" />
      <path d="m14.5 11.5 5 5" />
    </svg>
  );
}

function projectTechIcons(project: ProjectEntry) {
  const stack = project.techStack.map((tech) => tech.toLowerCase());
  return featuredTech.filter((tech) => tech.match.some((needle) => stack.some((item) => item.includes(needle))));
}

function circularOffset(index: number, activeIndex: number, length: number) {
  const raw = index - activeIndex;
  if (raw > length / 2) return raw - length;
  if (raw < -length / 2) return raw + length;
  return raw;
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const orderedProjects = useMemo(
    () => [...projects].sort((a, b) => Number(Boolean(b.flagship)) - Number(Boolean(a.flagship))),
    [projects]
  );
  const [activeIndex, setActiveIndex] = useState(1);
  const [cursorShift, setCursorShift] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeProject = orderedProjects[activeIndex];
  const activeTechIcons = projectTechIcons(activeProject);

  function move(direction: "previous" | "next") {
    setActiveIndex((current) => {
      if (direction === "previous") {
        return current === 0 ? orderedProjects.length - 1 : current - 1;
      }

      return current === orderedProjects.length - 1 ? 0 : current + 1;
    });
  }

  return (
    <section
      className="relative overflow-hidden rounded-[1.75rem] border border-line bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(226,236,248,0.78))] p-4 shadow-[0_24px_70px_rgba(31,49,78,0.13)] md:p-6"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setCursorShift(((event.clientX - rect.left) / rect.width - 0.5) * 2);
      }}
      onPointerLeave={() => setCursorShift(0)}
    >
      <div className="mb-6 mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">{activeProject.name}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted md:text-base">
          {activeProject.summary}
        </p>
        {activeTechIcons.length > 0 ? (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {activeTechIcons.map((tech) => (
              <span
                key={tech.key}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white/74 px-4 py-2 text-xs uppercase tracking-[0.16em] text-accent shadow-[0_10px_24px_rgba(49,95,159,0.08)]"
              >
                <TechIcon type={tech.key} />
                {tech.label}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="relative min-h-[620px] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(32,54,86,0.08),rgba(255,255,255,0.36))] px-10 py-8 md:px-16">
        <button
          type="button"
          onClick={() => move("previous")}
          aria-label="Show previous project"
          className="absolute left-3 top-1/2 z-40 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/86 text-5xl font-light leading-none text-accent shadow-[0_18px_40px_rgba(31,49,78,0.16)] transition hover:-translate-x-1 hover:bg-blue-50 md:left-5 md:h-20 md:w-20"
        >
          <span className="-mt-1">&lt;</span>
        </button>
        <button
          type="button"
          onClick={() => move("next")}
          aria-label="Show next project"
          className="absolute right-3 top-1/2 z-40 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/86 text-5xl font-light leading-none text-accent shadow-[0_18px_40px_rgba(31,49,78,0.16)] transition hover:translate-x-1 hover:bg-blue-50 md:right-5 md:h-20 md:w-20"
        >
          <span className="-mt-1">&gt;</span>
        </button>

        <div className="relative mx-auto h-[560px] max-w-6xl">
          {orderedProjects.map((project, index) => {
            const offset = circularOffset(index, activeIndex, orderedProjects.length);
            const absOffset = Math.abs(offset);
            const isVisible = absOffset <= 1;
            const hero = project.media.find((item) => item.featured) ?? project.media[0];
            const x = offset * 285 + cursorShift * (absOffset === 0 ? 14 : 8);
            const scale = absOffset === 0 ? 1 : 0.72;
            const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.68 : 0;
            const zIndex = 30 - absOffset;

            return (
              <motion.article
                key={project.slug}
                className={classNames(
                  "absolute top-0 w-[min(600px,68vw)] overflow-hidden rounded-[1.45rem] border border-white/80 bg-white shadow-[0_28px_80px_rgba(31,49,78,0.18)]",
                  absOffset === 0 ? "pointer-events-auto" : "pointer-events-none"
                )}
                animate={{
                  x,
                  scale,
                  opacity,
                  rotateY: reduceMotion ? 0 : cursorShift * (absOffset === 0 ? -3 : -1.5)
                }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                style={{ left: "calc(50% - min(300px, 34vw))", zIndex, display: isVisible ? "block" : "none" }}
              >
                <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" aria-label={`Open ${project.name} case study`} />
                {hero ? (
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                    <Image
                      src={hero.poster ?? hero.src}
                      alt={hero.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 68vw, 600px"
                      priority={absOffset === 0}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${toneGlow[project.visualTone]}`} />
                    <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/15 bg-slate-950/40 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white backdrop-blur">
                        {project.category}
                      </span>
                      <span className="rounded-full border border-white/15 bg-slate-950/40 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white backdrop-blur">
                        {project.deploymentMode}
                      </span>
                    </div>
                  </div>
                ) : null}

                <div className="relative p-5">
                  <p className="text-xs uppercase tracking-[0.26em] text-accent">{project.year}</p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">{project.name}</h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted">{project.tagline}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/88">{project.hook}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span key={tech} className="rounded-full border border-line bg-slate-50 px-3 py-1 text-xs uppercase tracking-[0.12em] text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {orderedProjects.map((project, index) => (
          <button
            key={project.slug}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${project.name}`}
            className={classNames(
              "h-2.5 rounded-full transition-all",
              activeIndex === index ? "w-10 bg-accent" : "w-2.5 bg-slate-300 hover:bg-slate-400"
            )}
          />
        ))}
      </div>
    </section>
  );
}
