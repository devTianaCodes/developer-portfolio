"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { PanInfo } from "framer-motion";
import type { ProjectEntry } from "@/content/projects";
import { sortProjectsForDisplay } from "@/content/projects";
import { classNames } from "@/lib/classNames";

type ProjectCarouselProps = {
  projects: ProjectEntry[];
};

const pastelPanels: Record<ProjectEntry["visualTone"], string> = {
  "warm-luxury": "bg-[#e6c9bc]",
  "clean-learning": "bg-[#d9e8ff]",
  "soft-utility": "bg-[#dcefe6]",
  "finance-peach": "bg-[#f4d8c8]",
  "ai-lilac": "bg-[#f6e4ea]",
  arcade: "bg-[#e2dcff]",
  "naval-tech": "bg-[#d8edf7]"
};

const imageGlow: Record<ProjectEntry["visualTone"], string> = {
  "warm-luxury": "from-[#7a3f2a]/16 via-transparent to-[#f5e4d6]/50",
  "clean-learning": "from-[#2d67b8]/14 via-transparent to-[#f4f8ff]/56",
  "soft-utility": "from-[#2f765d]/14 via-transparent to-[#f4fff8]/56",
  "finance-peach": "from-[#ff6b5f]/18 via-transparent to-[#fff3e8]/60",
  "ai-lilac": "from-[#c98298]/16 via-transparent to-[#fff6f8]/64",
  arcade: "from-[#5547b8]/14 via-transparent to-[#f7f3ff]/56",
  "naval-tech": "from-[#1f6d94]/14 via-transparent to-[#f5fbff]/56"
};

const polishedEase = [0.25, 0.8, 0.25, 1] as const;
const desktopPanelSpring = {
  type: "spring",
  stiffness: 220,
  damping: 34,
  mass: 0.95
} as const;
const mobilePanelSpring = {
  type: "spring",
  stiffness: 520,
  damping: 44,
  mass: 0.52
} as const;

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function circularOffset(index: number, activeIndex: number, length: number) {
  const raw = index - activeIndex;
  if (raw > length / 2) return raw - length;
  if (raw < -length / 2) return raw + length;
  return raw;
}

const mobileSummaries: Partial<Record<ProjectEntry["slug"], string>> = {
  chocolate: "E-commerce web app with catalog, cart, checkout, and admin operations.",
  english4u: "Learning platform with course journeys, quizzes, dashboards, and admin content tools.",
  petnest: "Adoption workflow app with animal listings, profiles, favourites, and request flows.",
  paytrack: "Mobile-first subscription tracker with reminders, dashboard insights, and secure account flows.",
  "ai-comparator": "AI model comparison SPA with search, filters, favourites, and side-by-side analysis.",
  brickdrop: "Playable puzzle game with clean controls, scoring, levels, and responsive browser play.",
  "sea-battle": "Interactive Battleship game with board logic, turn flow, and polished browser gameplay."
};

function projectPanel(project: ProjectEntry, isActive: boolean, isHovered: boolean, shadeOpacity: number) {
  const hero = project.media.find((item) => item.featured) ?? project.media[0];
  const heroSrc = hero?.optimizedSrc ?? hero?.poster ?? hero?.src;
  const mobileSummary = mobileSummaries[project.slug] ?? project.tagline;
  const projectTypeLabel = project.category === "game" ? "Web application game" : "Full stack web application";

  return (
    <>
      <div className={classNames("absolute inset-0", pastelPanels[project.visualTone])} />
      <div className={classNames("absolute inset-0 bg-gradient-to-b", imageGlow[project.visualTone])} />

      {hero ? (
        <motion.div
          className="absolute inset-x-0 top-[calc(6%-2.5rem)] h-[66%] px-7 pt-0 md:top-[calc(6%-1.5rem)] md:px-9"
          animate={{
            scale: isHovered ? 1.045 : isActive ? 1.014 : 0.99,
            y: isHovered ? -10 : 0,
            filter: isHovered ? "saturate(1.12) contrast(1.04)" : isActive ? "saturate(1.04)" : "saturate(0.92)"
          }}
          transition={{ duration: 0.24, ease: polishedEase }}
        >
          <Image
            src={heroSrc}
            alt={hero.alt}
            fill
            priority={isActive}
            loading={isActive ? undefined : "eager"}
            unoptimized
            quality={82}
            className="object-contain px-7 pb-6 pt-0 drop-shadow-[0_28px_42px_rgba(16,24,40,0.22)] transition-transform duration-500 ease-out group-hover:scale-[1.035] md:px-9 md:pb-8"
            sizes="(max-width: 640px) 82vw, (max-width: 1024px) 48vw, 34vw"
          />
        </motion.div>
      ) : null}

      <div
        className={classNames(
          "absolute inset-x-0 bottom-[3.9rem] z-20 mx-auto flex max-w-[82%] flex-col items-center text-center text-[#202124]",
          isActive ? "md:bottom-[2.9rem]" : "md:bottom-[3.9rem]"
        )}
      >
        <div className="-translate-y-[88px] md:translate-y-0">
          <h2 className="max-w-xl text-balance font-sans text-[1.84rem] font-medium leading-[1.18] text-[#262626] md:text-[2.05rem]">
            {project.name}
          </h2>
          <p className="mt-5 font-sans text-[11px] font-bold uppercase leading-[1.2] tracking-[1.8px] text-[#262626]/70 md:mt-5 md:text-[12px]">
            {projectTypeLabel}
          </p>
          <p className="mt-4 line-clamp-3 max-w-xl font-sans text-[15px] font-normal leading-[1.38] text-[#262626]/82 md:hidden">
            {mobileSummary}
          </p>
          <p className="mt-[12px] hidden max-w-xl font-sans text-[19px] font-normal leading-[1.45] text-[#262626]/82 md:line-clamp-2 md:block">
            {project.tagline}
          </p>
        </div>
        <span
          className={classNames(
            "-mt-3 inline-flex items-center justify-center rounded-[3px] border-2 border-[#262626] bg-transparent px-[1.25em] py-[0.85em] font-sans text-[13px] font-bold leading-[1.2] tracking-[1px] text-[#262626] transition group-hover:scale-[1.03] group-hover:shadow-[0_2px_10px_rgba(0,0,0,0.13)] md:mt-[14px] md:text-[14px]",
            isActive && "group-hover:bg-[#262626] group-hover:text-white"
          )}
        >
          View Project
        </span>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-30 bg-slate-950"
        initial={false}
        animate={{ opacity: shadeOpacity }}
        transition={{ duration: 0.28, ease: polishedEase }}
      />
    </>
  );
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const orderedProjects = useMemo(() => sortProjectsForDisplay(projects), [projects]);
  const [{ activeIndex, direction }, setCarousel] = useState({ activeIndex: 0, direction: 1 });
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

  function handleMobileDragEnd(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    const swipeDistance = info.offset.x;
    const swipeVelocity = info.velocity.x;

    if (swipeDistance < -54 || swipeVelocity < -360) {
      move(1);
    }

    if (swipeDistance > 54 || swipeVelocity > 360) {
      move(-1);
    }
  }

  const activeProject = orderedProjects[activeIndex];
  const panelTransition = reduceMotion
    ? { duration: 0 }
    : desktopPanelSpring;
  const mobilePanelTransition = reduceMotion
    ? { duration: 0 }
    : mobilePanelSpring;

  return (
    <section data-testid="project-carousel" className="relative -mb-6 -mt-6 overflow-hidden p-1.5 md:mb-0 md:mt-0 md:px-4 md:py-0 lg:-mx-4 lg:px-0">
      <div className="relative mx-auto h-[560px] max-w-[128rem] overflow-hidden bg-slate-950/20 md:h-[680px]">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Show previous project"
          className="absolute left-4 top-1/2 z-[80] flex -translate-y-1/2 items-center justify-center px-2 py-5 text-5xl font-medium leading-none text-white/95 drop-shadow-[0_3px_12px_rgba(0,0,0,0.48)] transition hover:-translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:left-7 md:text-7xl"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Show next project"
          className="absolute right-4 top-1/2 z-[80] flex -translate-y-1/2 items-center justify-center px-2 py-5 text-5xl font-medium leading-none text-white/95 drop-shadow-[0_3px_12px_rgba(0,0,0,0.48)] transition hover:translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:right-7 md:text-7xl"
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
                  scale: isHovered ? (isActive ? 1.022 : 1.04) : 1,
                  y: isHovered ? (isActive ? -5 : -9) : 0,
                  boxShadow: isHovered ? "0 26px 70px rgba(15, 23, 42, 0.22)" : "0 0 0 rgba(15, 23, 42, 0)"
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

        <div className="relative block h-full overflow-hidden md:hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeProject.slug}
              custom={direction}
              className={classNames("absolute inset-0 overflow-hidden", pastelPanels[activeProject.visualTone])}
              drag={reduceMotion ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              dragMomentum={false}
              onDragEnd={handleMobileDragEnd}
              initial={reduceMotion ? false : { x: direction * 68 + "%", opacity: 0.92, scale: 1.006 }}
              animate={{ x: "0%", opacity: 1, scale: 1, zIndex: 2 }}
              exit={reduceMotion ? undefined : { x: direction * -58 + "%", opacity: 0.72, scale: 0.992, zIndex: 1 }}
              whileDrag={reduceMotion ? undefined : { scale: 0.988 }}
              transition={mobilePanelTransition}
            >
              <Link
                href={"/projects/" + activeProject.slug}
                aria-label={"Open " + activeProject.name + " project"}
                className="group relative block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                {projectPanel(activeProject, true, false, 0)}
              </Link>
            </motion.div>
          </AnimatePresence>
          <div className="pointer-events-none absolute bottom-5 left-1/2 z-[70] -translate-x-1/2 font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#262626]/72">
            {String(activeIndex + 1).padStart(2, "0")} / {String(orderedProjects.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
}
