"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { useTranslations } from "next-intl";
import { projectCarouselGlows, projectSurfaces } from "@/lib/projectThemes";
import type { CarouselProject } from "@/lib/projectCarousel";
import {
  circularOffset,
  getArrowDirection,
  getSwipeDirection,
  wrapIndex
} from "@/lib/carousel";
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

const polishedEase = [0.25, 0.8, 0.25, 1] as const;
const carouselEase = [0.4, 0, 0.2, 1] as const;
const carouselEaseCss = `cubic-bezier(${carouselEase.join(",")})`;
const desktopCarouselTransitionMs = 2800;
const mobileCarouselTransitionMs = 700;
const autoplayIntervalMs = 5000;

function ProjectPanel({ project, isHovered, transitionMs, copy }: ProjectPanelProps) {
  const surface = projectSurfaces[project.visualTone];
  const glow = projectCarouselGlows[project.visualTone];

  return (
    <>
      <div className={classNames("absolute inset-0", surface)} />
      <div className={classNames("absolute inset-0 bg-gradient-to-b", glow)} />

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
              draggable={false}
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
  const carouselRef = useRef<HTMLElement>(null);
  const announceNextChangeRef = useRef(false);
  const carouselInView = useInView(carouselRef, { margin: "200px 0px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [shadeFreeIndex, setShadeFreeIndex] = useState(0);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const reduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const tCommon = useTranslations("Common");
  const tProjects = useTranslations("Projects");
  const transitionMs = isMobileViewport ? mobileCarouselTransitionMs : desktopCarouselTransitionMs;
  const transitionSeconds = transitionMs / 1000;
  // With this ease curve, 45% elapsed is roughly 70% of the visual travel.
  const shadeHandoffMs = transitionMs * 0.45;
  const shadeRemovalSeconds = isMobileViewport ? 0.4 : 0.85;
  const shadeApplicationSeconds = isMobileViewport ? 0.5 : 1.1;
  useEffect(() => {
    const mobileViewport = window.matchMedia("(max-width: 767px)");
    const syncViewport = () => setIsMobileViewport(mobileViewport.matches);

    syncViewport();
    mobileViewport.addEventListener("change", syncViewport);

    return () => mobileViewport.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    const syncVisibility = () => setPageVisible(document.visibilityState === "visible");

    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);

    return () => document.removeEventListener("visibilitychange", syncVisibility);
  }, []);

  useEffect(() => {
    if (
      reduceMotion ||
      !autoplayEnabled ||
      !carouselInView ||
      !pageVisible ||
      projects.length < 2
    ) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => wrapIndex(current + 1, projects.length));
    }, autoplayIntervalMs);

    return () => window.clearInterval(intervalId);
  }, [autoplayEnabled, carouselInView, pageVisible, projects.length, reduceMotion]);

  useEffect(() => {
    if (reduceMotion || shadeFreeIndex === activeIndex) return;

    const timeoutId = window.setTimeout(() => {
      setShadeFreeIndex(activeIndex);
    }, shadeHandoffMs);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, reduceMotion, shadeFreeIndex, shadeHandoffMs]);

  useEffect(() => {
    if (!announceNextChangeRef.current) return;

    announceNextChangeRef.current = false;
    setAnnouncement(
      tProjects("activeProjectAnnouncement", {
        project: projects[activeIndex].name,
        current: activeIndex + 1,
        total: projects.length
      })
    );
  }, [activeIndex, projects, tProjects]);

  if (!projects.length) return null;

  function move(direction: -1 | 1, announce = true) {
    announceNextChangeRef.current = announce;
    setActiveIndex((current) => wrapIndex(current + direction, projects.length));
  }

  function selectProject(index: number) {
    announceNextChangeRef.current = true;
    setActiveIndex(index);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    const direction = getArrowDirection(event.key);
    if (!direction) return;

    event.preventDefault();
    move(direction);
  }

  function handleDragEnd(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    const direction = getSwipeDirection(info.offset.x, info.velocity.x);
    if (direction) move(direction);
  }

  const panelTransition = reduceMotion
    ? { duration: 0 }
    : isMobileViewport
      ? {
          scale: { duration: 0.3, ease: polishedEase },
          y: { duration: 0.3, ease: polishedEase },
          z: { duration: 0 },
          boxShadow: { duration: 0.3, ease: polishedEase }
        }
    : {
        scale: { duration: 0.45, ease: polishedEase },
        y: { duration: 0.45, ease: polishedEase },
        z: { duration: transitionSeconds, ease: carouselEase },
        boxShadow: { duration: transitionSeconds, ease: carouselEase }
      };
  return (
    <section
      id="project-carousel"
      ref={carouselRef}
      data-testid="project-carousel"
      aria-label={tProjects("carouselLabel")}
      aria-roledescription={tCommon("carousel")}
      className="project-carousel--immersive relative m-0 touch-pan-y overflow-hidden p-0"
      onKeyDown={handleKeyDown}
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>
      <div className="project-carousel-viewport relative mx-auto max-w-none overflow-hidden bg-slate-950/20">
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
        <motion.div
          className="project-carousel-3d-stage relative h-full overflow-hidden"
          drag={reduceMotion ? false : "x"}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.05}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
        >
          {projects.map((project, index) => {
            const offset = circularOffset(index, activeIndex, projects.length);
            const absOffset = Math.abs(offset);

            if (absOffset > 2) return null;

            const isActive = offset === 0;
            const isShadeFree = reduceMotion
              ? index === activeIndex
              : index === shadeFreeIndex;
            const isHovered = hoveredIndex === index;
            const panelCopy = {
              viewProject: tCommon("viewProject"),
              projectType: project.category === "game" ? tProjects("gameType") : tProjects("fullStackType"),
              mobileSummary: tProjects(`projectCards.${project.slug}.mobileSummary`),
              tagline: tProjects(`projectCards.${project.slug}.tagline`),
              imageAlt: tProjects("projectImageAlt", { project: project.name })
            };

            return (
              <motion.div
                key={project.slug}
                role="group"
                aria-roledescription={tCommon("slide")}
                aria-label={tProjects("projectSlide", {
                  project: project.name,
                  current: index + 1,
                  total: projects.length
                })}
                data-loop-offset={String(offset)}
                className={classNames(
                  "project-carousel-loop-card group pointer-events-auto absolute overflow-hidden rounded-[6px] transition-[left,top,width,height]",
                  projectSurfaces[project.visualTone]
                )}
                data-active={isActive ? "true" : "false"}
                initial={false}
                animate={{
                  opacity: 1,
                  scale: isHovered ? 1.015 : 1,
                  y: isHovered ? (isActive ? -4 : -7) : 0,
                  z: isMobileViewport
                    ? 0
                    : isActive
                      ? isHovered
                        ? 72
                        : 56
                      : isHovered
                        ? -8
                        : -34,
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
                    draggable={false}
                    aria-label={tProjects("openProject", { project: project.name })}
                    className="absolute inset-0 z-40 block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => selectProject(index)}
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

        </motion.div>

      </div>

      <div className="flex flex-col items-center gap-2 py-3 md:py-4">
          {!reduceMotion ? (
            <button
              type="button"
              onClick={() => setAutoplayEnabled((enabled) => !enabled)}
              aria-pressed={!autoplayEnabled}
              aria-label={tProjects(autoplayEnabled ? "pauseCarousel" : "resumeCarousel")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-bold text-black shadow-sm transition hover:scale-105 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/70"
            >
              <span
                aria-hidden="true"
                className={classNames(!autoplayEnabled && "translate-x-[2px] translate-y-[1px]")}
              >
                {autoplayEnabled ? "Ⅱ" : "▶"}
              </span>
            </button>
          ) : null}

          <div
            aria-label={tProjects("projectCount", {
              current: activeIndex + 1,
              total: projects.length
            })}
            className="project-carousel-counter pointer-events-none rounded-full bg-white px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-black shadow-sm"
          >
            {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </div>
      </div>
    </section>
  );
}
