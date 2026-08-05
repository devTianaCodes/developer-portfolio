"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { CarouselProject } from "@/lib/projectCarousel";
import { circularOffset, wrapIndex } from "@/lib/carousel";
import { Link } from "@/i18n/navigation";
import { classNames } from "@/lib/classNames";

type ProjectCarouselProps = {
  projects: readonly CarouselProject[];
};

type ProjectPanelProps = {
  project: CarouselProject;
  isHovered: boolean;
  transitionMs: number;
  copy: {
    viewProject: string;
    projectType: string;
    mobileSummary: string;
    tagline: string;
    imageAlt: string;
  };
};

const pastelPanels: Record<CarouselProject["visualTone"], string> = {
  "warm-luxury": "bg-[#e6c9bc]",
  "clean-learning": "bg-[#d9e8ff]",
  "soft-utility": "bg-[#dcefe6]",
  "botanical-gold": "bg-[#f8edc6]",
  "finance-peach": "bg-[#f4d8c8]",
  "ai-lilac": "bg-[#f6e4ea]",
  arcade: "bg-[#e2dcff]",
  "naval-tech": "bg-[#d8edf7]"
};

const imageGlow: Record<CarouselProject["visualTone"], string> = {
  "warm-luxury": "from-[#7a3f2a]/16 via-transparent to-[#f5e4d6]/50",
  "clean-learning": "from-[#2d67b8]/14 via-transparent to-[#f4f8ff]/56",
  "soft-utility": "from-[#2f765d]/14 via-transparent to-[#f4fff8]/56",
  "botanical-gold": "from-[#cdb365]/9 via-transparent to-[#fffbea]/72",
  "finance-peach": "from-[#ff6b5f]/18 via-transparent to-[#fff3e8]/60",
  "ai-lilac": "from-[#c98298]/16 via-transparent to-[#fff6f8]/64",
  arcade: "from-[#5547b8]/14 via-transparent to-[#f7f3ff]/56",
  "naval-tech": "from-[#1f6d94]/14 via-transparent to-[#f5fbff]/56"
};

const polishedEase = [0.25, 0.8, 0.25, 1] as const;
const carouselEase = [0.4, 0, 0.2, 1] as const;
const carouselEaseCss = `cubic-bezier(${carouselEase.join(",")})`;
const desktopCarouselTransitionMs = 2800;
const mobileCarouselTransitionMs = 1200;
const autoplayIntervalMs = 5000;

function ProjectPanel({ project, isHovered, transitionMs, copy }: ProjectPanelProps) {
  return (
    <>
      <div className={classNames("absolute inset-0", pastelPanels[project.visualTone])} />
      <div className={classNames("absolute inset-0 bg-gradient-to-b", imageGlow[project.visualTone])} />

      <div
        className="project-carousel-card-content absolute z-20 flex flex-col items-center justify-center px-3 py-6 text-center text-[#202124] ease-[cubic-bezier(0.4,0,0.2,1)] md:px-5 md:py-8"
        style={{ transitionDuration: `${transitionMs}ms` }}
      >
        {project.imageSrc ? (
          <motion.div
            className="relative h-[42%] max-h-[23rem] w-full shrink-0"
            animate={{
              scale: isHovered ? 1.035 : 1.01,
              y: isHovered ? -5 : 0
            }}
            transition={{
              duration: 0.32,
              ease: polishedEase
            }}
          >
            <Image
              src={project.imageSrc}
              alt={copy.imageAlt}
              fill
              loading="lazy"
              quality={82}
              className="object-contain px-2 pb-2 transition-transform duration-500 ease-out group-hover:scale-[1.025] md:px-4 md:pb-3 xl:drop-shadow-[0_24px_36px_rgba(16,24,40,0.2)]"
              sizes="(max-width: 640px) 82vw, (max-width: 1024px) 48vw, 34vw"
            />
          </motion.div>
        ) : null}

        <div className="mt-2 w-full shrink-0 md:mt-3">
          <h2 className="max-w-xl text-balance font-sans text-[1.84rem] font-medium leading-[1.18] text-[#262626] md:text-[2.05rem]">
            {project.name}
          </h2>
          <p className="mt-3 font-sans text-[11px] font-bold uppercase leading-[1.2] tracking-[1.8px] text-[#262626]/70 md:text-[12px]">
            {copy.projectType}
          </p>
          <p className="mt-3 line-clamp-3 max-w-xl font-sans text-[15px] font-normal leading-[1.38] text-[#262626]/82 md:hidden">
            {copy.mobileSummary}
          </p>
          <p className="mt-3 hidden max-w-xl font-sans text-[19px] font-normal leading-[1.45] text-[#262626]/82 md:line-clamp-2">
            {copy.tagline}
          </p>
        </div>
        <span className="mb-6 mt-5 inline-flex items-center justify-center rounded-[3px] border-2 border-[#262626] bg-transparent px-[1.25em] py-[0.85em] font-sans text-[13px] font-bold leading-[1.2] tracking-[1px] text-[#262626] transition duration-300 group-hover:scale-[1.03] group-hover:bg-[#262626] group-hover:text-white group-hover:shadow-[0_2px_10px_rgba(0,0,0,0.13)] md:mb-8 md:text-[14px]">
          {copy.viewProject}
        </span>
      </div>

    </>
  );
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shadeActiveIndex, setShadeActiveIndex] = useState(0);
  const [revealedActiveIndex, setRevealedActiveIndex] = useState(0);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const reduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const tCommon = useTranslations("Common");
  const tProjects = useTranslations("Projects");
  const transitionMs = isMobileViewport ? mobileCarouselTransitionMs : desktopCarouselTransitionMs;
  const transitionSeconds = transitionMs / 1000;
  // With this ease curve, 45% elapsed is roughly 70% of the visual travel.
  const shadeHandoffMs = transitionMs * 0.45;
  const shadeRemovalSeconds = isMobileViewport ? 0.4 : 0.85;
  const shadeApplicationSeconds = isMobileViewport ? 0.5 : 1.1;
  const localizedProjectCopy = {
    chocolate: {
      tagline: tProjects("projectCards.chocolate.tagline"),
      mobileSummary: tProjects("projectCards.chocolate.mobileSummary")
    },
    english4u: {
      tagline: tProjects("projectCards.english4u.tagline"),
      mobileSummary: tProjects("projectCards.english4u.mobileSummary")
    },
    orchidcare: {
      tagline: tProjects("projectCards.orchidcare.tagline"),
      mobileSummary: tProjects("projectCards.orchidcare.mobileSummary")
    },
    petnest: {
      tagline: tProjects("projectCards.petnest.tagline"),
      mobileSummary: tProjects("projectCards.petnest.mobileSummary")
    },
    paytrack: {
      tagline: tProjects("projectCards.paytrack.tagline"),
      mobileSummary: tProjects("projectCards.paytrack.mobileSummary")
    },
    "ai-comparator": {
      tagline: tProjects("projectCards.ai-comparator.tagline"),
      mobileSummary: tProjects("projectCards.ai-comparator.mobileSummary")
    },
    brickdrop: {
      tagline: tProjects("projectCards.brickdrop.tagline"),
      mobileSummary: tProjects("projectCards.brickdrop.mobileSummary")
    },
    "sea-battle": {
      tagline: tProjects("projectCards.sea-battle.tagline"),
      mobileSummary: tProjects("projectCards.sea-battle.mobileSummary")
    }
  };

  useEffect(() => {
    const mobileViewport = window.matchMedia("(max-width: 767px)");
    const syncViewport = () => setIsMobileViewport(mobileViewport.matches);

    syncViewport();
    mobileViewport.addEventListener("change", syncViewport);

    return () => mobileViewport.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    if (reduceMotion || isMobileViewport || projects.length < 2) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => wrapIndex(current - 1, projects.length));
    }, autoplayIntervalMs);

    return () => window.clearInterval(intervalId);
  }, [isMobileViewport, projects.length, reduceMotion]);

  useEffect(() => {
    if (reduceMotion || shadeActiveIndex === activeIndex) return;

    const timeoutId = window.setTimeout(() => {
      setShadeActiveIndex(activeIndex);
    }, shadeHandoffMs);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, reduceMotion, shadeActiveIndex, shadeHandoffMs]);

  useEffect(() => {
    if (reduceMotion || revealedActiveIndex === activeIndex) return;

    const timeoutId = window.setTimeout(() => {
      setRevealedActiveIndex(activeIndex);
    }, shadeHandoffMs);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, reduceMotion, revealedActiveIndex, shadeHandoffMs]);

  if (!projects.length) return null;

  function move(direction: -1 | 1) {
    setActiveIndex((current) => wrapIndex(current + direction, projects.length));
  }

  const panelTransition = reduceMotion
    ? { duration: 0 }
    : {
        scale: { duration: 0.45, ease: polishedEase },
        y: { duration: 0.45, ease: polishedEase },
        z: { duration: transitionSeconds, ease: carouselEase },
        boxShadow: { duration: transitionSeconds, ease: carouselEase }
      };
  return (
    <section data-testid="project-carousel" className="project-carousel--immersive relative m-0 overflow-hidden p-0">
      <div className="relative mx-auto max-w-none overflow-hidden bg-slate-950/20">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label={tProjects("previousProject")}
          className="absolute left-1 top-[48%] z-[80] flex h-16 w-16 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full text-[3.78rem] font-medium leading-none text-white/95 drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)] transition hover:-translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:left-6 md:h-20 md:w-20 md:text-[5.04rem] xl:left-[3.75rem]"
        >
          <span aria-hidden="true" className="-translate-x-5 md:translate-x-0">‹</span>
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label={tProjects("nextProject")}
          className="absolute right-1 top-[48%] z-[80] flex h-16 w-16 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full text-[3.78rem] font-medium leading-none text-white/95 drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)] transition hover:translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 md:right-6 md:h-20 md:w-20 md:text-[5.04rem] xl:right-[3.75rem]"
        >
          <span aria-hidden="true" className="translate-x-5 md:translate-x-0">›</span>
        </button>

        <div className="project-carousel-3d-stage relative h-full overflow-hidden">
          {projects.map((project, index) => {
            const localizedCopy = localizedProjectCopy[project.slug];
            const offset = circularOffset(index, activeIndex, projects.length);
            const absOffset = Math.abs(offset);

            if (absOffset > 2) return null;

            const isActive = offset === 0;
            const isShadeFree = reduceMotion
              ? index === activeIndex
              : index === revealedActiveIndex || index === shadeActiveIndex;
            const isHovered = hoveredIndex === index;
            const panelCopy = {
              viewProject: tCommon("viewProject"),
              projectType: project.category === "game" ? tProjects("gameType") : tProjects("fullStackType"),
              mobileSummary: localizedCopy.mobileSummary,
              tagline: localizedCopy.tagline,
              imageAlt: tProjects("projectImageAlt", { project: project.name })
            };

            return (
              <motion.div
                key={project.slug}
                data-loop-offset={String(offset)}
                className={classNames(
                  "project-carousel-loop-card group pointer-events-auto absolute overflow-hidden rounded-[6px] transition-[left,top,width,height]",
                  pastelPanels[project.visualTone]
                )}
                data-active={isActive ? "true" : "false"}
                initial={false}
                animate={{
                  opacity: 1,
                  scale: isHovered ? 1.015 : 1,
                  y: isHovered ? (isActive ? -4 : -7) : 0,
                  z: isActive ? (isHovered ? 72 : 56) : isHovered ? -8 : -34,
                  boxShadow: isActive
                    ? "0 42px 110px rgba(0,8,28,0.58)"
                    : "0 28px 72px rgba(0,8,28,0.44)"
                }}
                transition={panelTransition}
                style={{
                  zIndex: isActive ? 40 : 25 - absOffset,
                  transitionDuration: reduceMotion ? "0ms" : `${transitionMs}ms`,
                  transitionTimingFunction: carouselEaseCss
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
              >
                <ProjectPanel
                  project={project}
                  isHovered={isHovered}
                  transitionMs={transitionMs}
                  copy={panelCopy}
                />
                {isActive ? (
                  <Link
                    href={`/projects/${project.slug}`}
                    aria-label={tProjects("openProject", { project: project.name })}
                    className="absolute inset-0 z-40 block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="absolute inset-0 z-40 block text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    aria-label={tProjects("centerProject", { project: project.name })}
                  />
                )}
                <motion.div
                  className="pointer-events-none absolute inset-0 z-30 bg-slate-950"
                  initial={false}
                  animate={{ opacity: isShadeFree ? 0 : 0.56 }}
                  transition={{
                    duration: isShadeFree ? shadeRemovalSeconds : shadeApplicationSeconds,
                    ease: carouselEase
                  }}
                />
              </motion.div>
            );
          })}

          <div className="project-carousel-counter pointer-events-none absolute bottom-0 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-black/45 px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-white/90 md:backdrop-blur-md">
            {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
}
