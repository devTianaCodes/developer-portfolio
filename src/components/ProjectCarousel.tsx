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

const pastelPanels: Record<ProjectEntry["visualTone"], string> = {
  "warm-luxury": "bg-[#e6c9bc]",
  "clean-learning": "bg-[#d9e8ff]",
  "soft-utility": "bg-[#dcefe6]",
  arcade: "bg-[#e2dcff]",
  "naval-tech": "bg-[#d8edf7]"
};

const imageGlow: Record<ProjectEntry["visualTone"], string> = {
  "warm-luxury": "from-[#7a3f2a]/16 via-transparent to-[#f5e4d6]/50",
  "clean-learning": "from-[#2d67b8]/14 via-transparent to-[#f4f8ff]/56",
  "soft-utility": "from-[#2f765d]/14 via-transparent to-[#f4fff8]/56",
  arcade: "from-[#5547b8]/14 via-transparent to-[#f7f3ff]/56",
  "naval-tech": "from-[#1f6d94]/14 via-transparent to-[#f5fbff]/56"
};

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function circularOffset(index: number, activeIndex: number, length: number) {
  const raw = index - activeIndex;
  if (raw > length / 2) return raw - length;
  if (raw < -length / 2) return raw + length;
  return raw;
}

function projectPanel(project: ProjectEntry, isActive: boolean, isHovered: boolean, shadeOpacity: number) {
  const hero = project.media.find((item) => item.featured) ?? project.media[0];

  return (
    <>
      <div className={classNames("absolute inset-0", pastelPanels[project.visualTone])} />
      <div className={classNames("absolute inset-0 bg-gradient-to-b", imageGlow[project.visualTone])} />

      {hero ? (
        <motion.div
          className="absolute inset-x-0 top-0 h-[67%] px-8 pt-12 md:px-10 md:pt-16"
          animate={{
            scale: isHovered ? 1.065 : isActive ? 1.018 : 0.99,
            y: isHovered ? -18 : 0,
            filter: isHovered ? "saturate(1.12) contrast(1.04)" : isActive ? "saturate(1.04)" : "saturate(0.92)"
          }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <Image
            src={hero.poster ?? hero.src}
            alt={hero.alt}
            fill
            priority={isActive}
            className="object-contain p-8 drop-shadow-[0_28px_42px_rgba(16,24,40,0.22)] transition-transform duration-500 ease-out group-hover:scale-[1.035] md:p-10"
            sizes="(max-width: 768px) 100vw, 34vw"
          />
        </motion.div>
      ) : null}

      <div className="absolute inset-x-0 bottom-10 z-20 mx-auto flex max-w-[82%] flex-col items-center text-center text-[#202124] md:bottom-14">
        <p className="font-sans text-[14px] font-bold uppercase leading-[1.2] tracking-[2px] text-[#262626]">About project</p>
        <h2 className="mt-[10px] max-w-xl text-balance font-sans text-3xl font-medium leading-[1.32] text-[#262626] md:text-[2.05rem]">
          {project.name}
        </h2>
        <p className="mt-[12px] line-clamp-2 max-w-xl font-sans text-[20px] font-normal leading-[1.55] text-[#262626]/82">
          {project.tagline}
        </p>
        <span
          className={classNames(
            "mt-[10px] inline-flex items-center justify-center rounded-[3px] border-2 border-[#262626] bg-transparent px-[1.4em] py-[1em] font-sans text-[14px] font-bold leading-[1.2] tracking-[1px] text-[#262626] transition group-hover:scale-[1.03] group-hover:shadow-[0_2px_10px_rgba(0,0,0,0.13)]",
            isActive && "group-hover:bg-[#262626] group-hover:text-white"
          )}
        >
          View WebApp
        </span>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-30 bg-slate-950"
        initial={false}
        animate={{ opacity: shadeOpacity }}
        transition={{ duration: 0.72, ease: [0, 0, 1, 1] as const }}
      />
    </>
  );
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const orderedProjects = useMemo(
    () => [...projects].sort((a, b) => Number(Boolean(b.flagship)) - Number(Boolean(a.flagship))),
    [projects]
  );
  const [{ activeIndex, direction }, setCarousel] = useState({ activeIndex: 1, direction: 1 });
  const reduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!orderedProjects.length) return null;

  function setActiveProject(index: number) {
    setCarousel((current) => {
      const forwardDistance = wrapIndex(index - current.activeIndex, orderedProjects.length);
      const backwardDistance = wrapIndex(current.activeIndex - index, orderedProjects.length);
      return {
        activeIndex: index,
        direction: forwardDistance <= backwardDistance ? 1 : -1
      };
    });
  }

  function move(nextDirection: -1 | 1) {
    setCarousel((current) => ({
      activeIndex: wrapIndex(current.activeIndex + nextDirection, orderedProjects.length),
      direction: nextDirection
    }));
  }

  const activeProject = orderedProjects[activeIndex];
  const panelTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.72, ease: [0, 0, 1, 1] as const };

  return (
    <section data-testid="project-carousel" className="relative -mx-2.5 overflow-hidden md:-mx-4">
      <div className="relative mx-auto h-[650px] max-w-[128rem] overflow-hidden bg-slate-950/20 md:h-[760px]">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Show previous project"
          className="absolute left-4 top-1/2 z-[80] flex -translate-y-1/2 items-center justify-center px-2 py-5 text-5xl font-extralight leading-none text-white/90 drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)] transition hover:-translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:left-7 md:text-7xl"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Show next project"
          className="absolute right-4 top-1/2 z-[80] flex -translate-y-1/2 items-center justify-center px-2 py-5 text-5xl font-extralight leading-none text-white/90 drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)] transition hover:translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:right-7 md:text-7xl"
        >
          <span aria-hidden="true">›</span>
        </button>

        <div className="relative hidden h-full md:block">
          {orderedProjects.map((project, index) => {
            const offset = circularOffset(index, activeIndex, orderedProjects.length);
            const absOffset = Math.abs(offset);
            const isActive = offset === 0;
            const isVisible = absOffset <= 2;
            const isHovered = hoveredIndex === index;
            const left = offset === 0 ? "31.25%" : offset < 0 ? (offset === -1 ? "0%" : "-31.25%") : offset === 1 ? "68.75%" : "100%";
            const width = isActive ? "37.5%" : "31.25%";
            const top = "0%";
            const height = "100%";

            return (
              <motion.div
                key={project.slug}
                className={classNames(
                  "absolute overflow-hidden transition-shadow duration-500 ease-out",
                  isVisible ? "pointer-events-auto" : "pointer-events-none",
                  pastelPanels[project.visualTone]
                )}
                initial={false}
                animate={{
                  left,
                  width,
                  top,
                  height,
                  opacity: absOffset <= 1 ? 1 : 0,
                  scale: isHovered ? (isActive ? 1.035 : 1.075) : 1,
                  y: isHovered ? (isActive ? -8 : -16) : 0,
                  boxShadow: isHovered ? "0 34px 90px rgba(15, 23, 42, 0.26)" : "0 0 0 rgba(15, 23, 42, 0)"
                }}
                transition={panelTransition}
                style={{ left, top, width, height, zIndex: isHovered ? 45 : isActive ? 30 : 20 - absOffset }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
              >
                {isActive ? (
                  <Link
                    href={"/projects/" + project.slug}
                    aria-label={"Open " + project.name + " project"}
                    className="group relative block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    {projectPanel(project, true, isHovered, 0)}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveProject(index)}
                    className="group relative block h-full w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    aria-label={"Center " + project.name}
                    tabIndex={absOffset === 1 ? 0 : -1}
                  >
                    {projectPanel(project, false, isHovered, isHovered ? 0.18 : 0.45)}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          key={activeProject.slug}
          className={classNames("relative block h-full overflow-hidden md:hidden", pastelPanels[activeProject.visualTone])}
          initial={reduceMotion ? false : { x: direction * 42, opacity: 0.72 }}
          animate={{ x: 0, opacity: 1 }}
          transition={panelTransition}
        >
          <Link
            href={"/projects/" + activeProject.slug}
            aria-label={"Open " + activeProject.name + " project"}
            className="group relative block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            {projectPanel(activeProject, true, false, 0)}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
