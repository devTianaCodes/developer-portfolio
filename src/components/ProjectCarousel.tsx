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

const toneOverlay: Record<ProjectEntry["visualTone"], string> = {
  "warm-luxury": "from-[#21100c]/92 via-[#6f3924]/34 to-transparent",
  "clean-learning": "from-[#123261]/92 via-[#2563eb]/28 to-transparent",
  "soft-utility": "from-[#17372f]/92 via-[#2f765d]/30 to-transparent",
  arcade: "from-[#140b2e]/92 via-[#4f46e5]/30 to-transparent",
  "naval-tech": "from-[#061827]/92 via-[#1d5f92]/30 to-transparent"
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
  const reduceMotion = useReducedMotion();
  const activeProject = orderedProjects[activeIndex];

  function move(direction: "previous" | "next") {
    setActiveIndex((current) => {
      if (direction === "previous") return current === 0 ? orderedProjects.length - 1 : current - 1;
      return current === orderedProjects.length - 1 ? 0 : current + 1;
    });
  }

  return (
    <section className="relative -mx-2.5 overflow-hidden py-4 md:-mx-4">
      <div className="mx-auto mb-7 max-w-3xl px-4 text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-white/72">Portfolio showcase</p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-white md:text-6xl">{activeProject.name}</h1>
      </div>

      <div className="relative min-h-[660px] overflow-hidden md:min-h-[720px]">
        <button
          type="button"
          onClick={() => move("previous")}
          aria-label="Show previous project"
          className="absolute left-3 top-1/2 z-40 flex -translate-y-1/2 items-center justify-center px-3 py-5 text-4xl font-extralight leading-none text-white/72 transition hover:-translate-x-1 hover:text-white md:left-8 md:text-6xl"
        >
          <span aria-hidden="true">&lt;</span>
        </button>
        <button
          type="button"
          onClick={() => move("next")}
          aria-label="Show next project"
          className="absolute right-3 top-1/2 z-40 flex -translate-y-1/2 items-center justify-center px-3 py-5 text-4xl font-extralight leading-none text-white/72 transition hover:translate-x-1 hover:text-white md:right-8 md:text-6xl"
        >
          <span aria-hidden="true">&gt;</span>
        </button>

        <div className="relative mx-auto h-[610px] max-w-[118rem] md:h-[680px]">
          {orderedProjects.map((project, index) => {
            const offset = circularOffset(index, activeIndex, orderedProjects.length);
            const absOffset = Math.abs(offset);
            const isVisible = absOffset <= 2;
            const isActive = absOffset === 0;
            const hero = project.media.find((item) => item.featured) ?? project.media[0];
            const x = offset * 430;
            const scale = isActive ? 1 : absOffset === 1 ? 0.78 : 0.64;
            const opacity = isActive ? 1 : absOffset === 1 ? 0.66 : 0.28;
            const zIndex = 30 - absOffset;

            return (
              <motion.article
                key={project.slug}
                className={classNames(
                  "absolute left-1/2 top-4 h-[560px] w-[min(760px,82vw)] -translate-x-1/2 overflow-hidden rounded-[0.9rem] bg-slate-950 shadow-[0_34px_100px_rgba(5,16,35,0.34)] outline outline-1 outline-white/12 md:h-[620px]",
                  isVisible ? "pointer-events-auto" : "pointer-events-none",
                  isActive ? "cursor-pointer" : "cursor-pointer"
                )}
                animate={{ x, scale, opacity }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => {
                  if (!isActive) setActiveIndex(index);
                }}
                onKeyDown={(event) => {
                  if (isActive) return;
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveIndex(index);
                  }
                }}
                role={isActive ? undefined : "button"}
                tabIndex={isActive || !isVisible ? undefined : 0}
                style={{ zIndex, display: isVisible ? "block" : "none" }}
              >
                {isActive ? <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-20" aria-label={`Open ${project.name} case study`} /> : null}
                {hero ? (
                  <Image
                    src={hero.poster ?? hero.src}
                    alt={hero.alt}
                    fill
                    priority={isActive}
                    className="object-cover"
                    sizes="(max-width: 768px) 82vw, 760px"
                  />
                ) : null}
                <div className={`absolute inset-0 bg-gradient-to-t ${toneOverlay[project.visualTone]}`} />
                {!isActive ? <div className="absolute inset-0 bg-slate-950/50" /> : null}

                <div className={classNames("absolute inset-x-0 bottom-0 z-10 p-6 text-white md:p-9", isActive ? "opacity-100" : "opacity-0")}> 
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">About project</p>
                  <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight md:text-5xl">{project.name}</h2>
                  <p className="mt-3 max-w-xl text-base leading-8 text-white/82">{project.tagline}</p>
                  <span className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm uppercase tracking-[0.18em] text-slate-950 transition group-hover:bg-blue-50">
                    Learn more
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap justify-center gap-2 px-4">
        {orderedProjects.map((project, index) => (
          <button
            key={project.slug}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${project.name}`}
            className={classNames(
              "h-2 rounded-full transition-all",
              activeIndex === index ? "w-12 bg-white" : "w-2 bg-white/34 hover:bg-white/62"
            )}
          />
        ))}
      </div>
    </section>
  );
}
