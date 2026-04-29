"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { hasKnownTechIcon, ProjectTechBadge } from "@/components/ProjectTechBadge";
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
  const activeTechIcons = activeProject.techStack.filter(hasKnownTechIcon);

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
              <ProjectTechBadge key={tech} tech={tech} />
            ))}
          </div>
        ) : null}
      </div>

      <div className="relative min-h-[700px] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(32,54,86,0.08),rgba(255,255,255,0.36))] px-12 py-10 md:px-20">
        <button
          type="button"
          onClick={() => move("previous")}
          aria-label="Show previous project"
          className="absolute left-1 top-1/2 z-40 flex -translate-y-1/2 items-center justify-center px-2 py-4 text-4xl font-extralight leading-none text-accent transition hover:-translate-x-1 hover:text-[#203656] md:left-2 md:text-5xl"
        >
          <span aria-hidden="true">&lt;</span>
        </button>
        <button
          type="button"
          onClick={() => move("next")}
          aria-label="Show next project"
          className="absolute right-1 top-1/2 z-40 flex -translate-y-1/2 items-center justify-center px-2 py-4 text-4xl font-extralight leading-none text-accent transition hover:translate-x-1 hover:text-[#203656] md:right-2 md:text-5xl"
        >
          <span aria-hidden="true">&gt;</span>
        </button>

        <div className="relative mx-auto h-[640px] max-w-[88rem]">
          {orderedProjects.map((project, index) => {
            const offset = circularOffset(index, activeIndex, orderedProjects.length);
            const absOffset = Math.abs(offset);
            const isVisible = absOffset <= 1;
            const hero = project.media.find((item) => item.featured) ?? project.media[0];
            const x = offset * 330 + cursorShift * (absOffset === 0 ? 12 : 7);
            const scale = absOffset === 0 ? 1 : 0.74;
            const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.68 : 0;
            const zIndex = 30 - absOffset;

            return (
              <motion.article
                key={project.slug}
                className={classNames(
                  "absolute top-4 w-[min(680px,64vw)] overflow-hidden rounded-[1.45rem] border border-white/80 bg-white shadow-[0_28px_80px_rgba(31,49,78,0.18)]",
                  absOffset === 0 ? "pointer-events-auto" : "pointer-events-none"
                )}
                animate={{
                  x,
                  scale,
                  opacity,
                  rotateY: reduceMotion ? 0 : cursorShift * (absOffset === 0 ? -3 : -1.5)
                }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                style={{ left: "calc(50% - min(340px, 32vw))", zIndex, display: isVisible ? "block" : "none" }}
              >
                <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" aria-label={`Open ${project.name} case study`} />
                {hero ? (
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                    <Image
                      src={hero.poster ?? hero.src}
                      alt={hero.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 64vw, 680px"
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

                <div className="relative p-6">
                  <p className="text-xs uppercase tracking-[0.26em] text-accent">{project.year}</p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">{project.name}</h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted">{project.tagline}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <ProjectTechBadge key={tech} tech={tech} compact />
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
