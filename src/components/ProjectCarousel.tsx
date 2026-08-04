"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { useTranslations } from "next-intl";
import type { ProjectEntry } from "@/content/projects";
import { sortProjectsForDisplay } from "@/content/projects";
import { Link } from "@/i18n/navigation";
import { classNames } from "@/lib/classNames";

type ProjectCarouselProps = {
  projects: ProjectEntry[];
  immersive?: boolean;
};

const pastelPanels: Record<ProjectEntry["visualTone"], string> = {
  "warm-luxury": "bg-[#e6c9bc]",
  "clean-learning": "bg-[#d9e8ff]",
  "soft-utility": "bg-[#dcefe6]",
  "botanical-gold": "bg-[#f8edc6]",
  "finance-peach": "bg-[#f4d8c8]",
  "ai-lilac": "bg-[#f6e4ea]",
  arcade: "bg-[#e2dcff]",
  "naval-tech": "bg-[#d8edf7]"
};

const imageGlow: Record<ProjectEntry["visualTone"], string> = {
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

function projectPanel(
  project: ProjectEntry,
  isActive: boolean,
  isHovered: boolean,
  shadeOpacity: number,
  viewProjectLabel: string,
  projectTypeLabel: string,
  mobileSummary: string,
  tagline: string,
  imageAlt: string
) {
  const hero = project.media.find((item) => item.featured) ?? project.media[0];
  const heroSrc = hero?.optimizedSrc ?? hero?.poster ?? hero?.src;

  return (
    <>
      <div className={classNames("absolute inset-0", pastelPanels[project.visualTone])} />
      <div className={classNames("absolute inset-0 bg-gradient-to-b", imageGlow[project.visualTone])} />

      {hero ? (
        <motion.div
          className={classNames(
            "absolute inset-x-0 top-0 pt-0",
            isActive
              ? "h-[48%] px-7 sm:h-[50%] md:h-[53%] md:px-9 lg:top-[calc(6%-1.5rem)] lg:h-[55%]"
              : "h-[58%] px-3 md:h-[46%] md:px-4 lg:top-0 lg:h-[48%]"
          )}
          animate={{
            scale: isHovered ? 1.045 : isActive ? 1.014 : 0.99,
            y: isHovered ? -10 : 0
          }}
          transition={{ duration: 0.24, ease: polishedEase }}
        >
          <Image
            src={heroSrc}
            alt={imageAlt}
            fill
            priority={isActive}
            loading={isActive ? undefined : "eager"}
            unoptimized
            quality={82}
            className={classNames(
              "object-contain pt-0 transition-transform duration-500 ease-out group-hover:scale-[1.035]",
              isActive
                ? "px-7 pb-6 md:px-9 md:pb-8 xl:drop-shadow-[0_28px_42px_rgba(16,24,40,0.22)]"
                : "px-2 pb-3 md:px-4 md:pb-4"
            )}
            sizes="(max-width: 640px) 82vw, (max-width: 1024px) 48vw, 34vw"
          />
        </motion.div>
      ) : null}

      <div
        className={classNames(
          "absolute inset-x-0 z-20 mx-auto flex flex-col items-center text-center text-[#202124]",
          isActive
            ? "bottom-[3.9rem] max-w-[82%] md:bottom-[2.9rem]"
            : "bottom-5 max-w-[88%] md:bottom-6"
        )}
      >
        <div className={classNames("w-full", isActive && "-translate-y-[44px] md:translate-y-0")}>
          <h2
            className={classNames(
              "max-w-xl text-balance font-sans font-medium text-[#262626]",
              isActive
                ? "text-[1.84rem] leading-[1.18] md:text-[2.05rem]"
                : "text-[1.05rem] leading-[1.15] md:text-[1.35rem] xl:text-[1.5rem]"
            )}
          >
            {project.name}
          </h2>
          <p
            className={classNames(
              "font-sans font-bold uppercase leading-[1.2] text-[#262626]/70",
              isActive
                ? "mt-5 text-[11px] tracking-[1.8px] md:text-[12px]"
                : "hidden md:mt-2 md:block md:text-[9px] md:tracking-[1.3px] xl:text-[10px]"
            )}
          >
            {projectTypeLabel}
          </p>
          <p className={classNames("mt-4 line-clamp-3 max-w-xl font-sans text-[15px] font-normal leading-[1.38] text-[#262626]/82 md:hidden", !isActive && "hidden")}>
            {mobileSummary}
          </p>
          <p
            className={classNames(
              "hidden max-w-xl font-sans font-normal text-[#262626]/82 md:line-clamp-2 md:block",
              isActive
                ? "mt-[12px] text-[19px] leading-[1.45]"
                : "mt-2 text-[12px] leading-[1.35] xl:text-[14px]"
            )}
          >
            {tagline}
          </p>
        </div>
        <span
          className={classNames(
            "items-center justify-center rounded-[3px] border-2 border-[#262626] bg-transparent font-sans font-bold leading-[1.2] tracking-[1px] text-[#262626] transition group-hover:scale-[1.03] group-hover:shadow-[0_2px_10px_rgba(0,0,0,0.13)]",
            isActive
              ? "-mt-3 inline-flex px-[1.25em] py-[0.85em] text-[13px] md:mt-[14px] md:text-[14px]"
              : "mt-3 hidden px-[0.9em] py-[0.65em] text-[11px] md:inline-flex xl:text-[12px]",
            isActive && "group-hover:bg-[#262626] group-hover:text-white"
          )}
        >
          {viewProjectLabel}
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

export function ProjectCarousel({ projects, immersive = false }: ProjectCarouselProps) {
  const orderedProjects = useMemo(() => sortProjectsForDisplay(projects), [projects]);
  const [{ activeIndex, direction }, setCarousel] = useState({ activeIndex: 0, direction: 1 });
  const reduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const tCommon = useTranslations("Common");
  const tProjects = useTranslations("Projects");
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
    <section
      data-testid="project-carousel"
      className={classNames(
        "relative overflow-hidden",
        immersive
          ? "project-carousel--immersive m-0 p-0"
          : "-mb-6 -mt-6 p-1.5 md:mb-0 md:mt-0 md:px-4 md:py-0 lg:-mx-4 lg:px-0"
      )}
    >
      <div
        className={classNames(
          "relative mx-auto overflow-hidden bg-slate-950/20",
          immersive ? "max-w-none" : "h-[560px] max-w-[128rem] md:h-[680px]"
        )}
      >
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label={tProjects("previousProject")}
          className={classNames(
            "absolute top-1/2 z-[80] flex -translate-y-1/2 items-center justify-center font-medium leading-none text-white/95 transition hover:-translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
            immersive
              ? "left-3 h-12 w-12 text-[2.7rem] md:left-6 md:h-14 md:w-14 md:text-[3.6rem]"
              : "left-4 px-2 py-5 text-5xl drop-shadow-[0_3px_12px_rgba(0,0,0,0.48)] md:left-7 md:text-7xl"
          )}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label={tProjects("nextProject")}
          className={classNames(
            "absolute top-1/2 z-[80] flex -translate-y-1/2 items-center justify-center font-medium leading-none text-white/95 transition hover:translate-x-1 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
            immersive
              ? "right-3 h-12 w-12 text-[2.7rem] md:right-6 md:h-14 md:w-14 md:text-[3.6rem]"
              : "right-4 px-2 py-5 text-5xl drop-shadow-[0_3px_12px_rgba(0,0,0,0.48)] md:right-7 md:text-7xl"
          )}
        >
          <span aria-hidden="true">›</span>
        </button>

        {immersive ? (
          <div className="relative h-full overflow-hidden">
            {orderedProjects.map((project, index) => {
              const localizedCopy = localizedProjectCopy[project.slug];
              const offset = circularOffset(index, activeIndex, orderedProjects.length);
              const absOffset = Math.abs(offset);

              if (absOffset > 1) return null;

              const isActive = offset === 0;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={project.slug}
                  data-loop-offset={String(offset)}
                  className={classNames(
                    "project-carousel-loop-card absolute overflow-hidden rounded-[10px] transition-[left,top,width,height] duration-500 ease-out",
                    "pointer-events-auto",
                    pastelPanels[project.visualTone]
                  )}
                  initial={false}
                  animate={{
                    opacity: 1,
                    scale: isHovered ? 1.015 : 1,
                    y: isHovered ? (isActive ? -4 : -7) : 0,
                    boxShadow: isActive
                      ? "0 34px 90px rgba(0,8,28,0.52)"
                      : "0 22px 62px rgba(0,8,28,0.4)"
                  }}
                  transition={panelTransition}
                  style={{ zIndex: isActive ? 40 : 25 - absOffset }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(index)}
                  onBlur={() => setHoveredIndex(null)}
                >
                  {isActive ? (
                    <Link
                      href={"/projects/" + project.slug}
                      aria-label={tProjects("openProject", { project: project.name })}
                      className="group relative block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      {projectPanel(
                        project,
                        true,
                        isHovered,
                        0,
                        tCommon("viewProject"),
                        project.category === "game" ? tProjects("gameType") : tProjects("fullStackType"),
                        localizedCopy.mobileSummary,
                        localizedCopy.tagline,
                        tProjects("projectImageAlt", { project: project.name })
                      )}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveProject(index)}
                      className="group relative block h-full w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                      aria-label={tProjects("centerProject", { project: project.name })}
                      tabIndex={absOffset <= 1 ? 0 : -1}
                    >
                      {projectPanel(
                        project,
                        false,
                        isHovered,
                        absOffset === 1 ? 0.56 : 0.74,
                        tCommon("viewProject"),
                        project.category === "game" ? tProjects("gameType") : tProjects("fullStackType"),
                        localizedCopy.mobileSummary,
                        localizedCopy.tagline,
                        tProjects("projectImageAlt", { project: project.name })
                      )}
                    </button>
                  )}
                </motion.div>
              );
            })}

            <div className="pointer-events-none absolute bottom-3 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-black/45 px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-white/90 backdrop-blur-md">
              {String(activeIndex + 1).padStart(2, "0")} / {String(orderedProjects.length).padStart(2, "0")}
            </div>
          </div>
        ) : (
          <>
            <div className="relative hidden h-full xl:block">
          {orderedProjects.map((project, index) => {
            const localizedCopy = localizedProjectCopy[project.slug];
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
                    aria-label={tProjects("openProject", { project: project.name })}
                    className="group relative block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    {projectPanel(
                      project,
                      true,
                      isHovered,
                      0,
                      tCommon("viewProject"),
                      project.category === "game" ? tProjects("gameType") : tProjects("fullStackType"),
                      localizedCopy.mobileSummary,
                      localizedCopy.tagline,
                      tProjects("projectImageAlt", { project: project.name })
                    )}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveProject(index)}
                    className="group relative block h-full w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    aria-label={tProjects("centerProject", { project: project.name })}
                    tabIndex={absOffset === 1 ? 0 : -1}
                  >
                    {projectPanel(
                      project,
                      false,
                      isHovered,
                      isHovered ? 0.18 : 0.45,
                      tCommon("viewProject"),
                      project.category === "game" ? tProjects("gameType") : tProjects("fullStackType"),
                      localizedCopy.mobileSummary,
                      localizedCopy.tagline,
                      tProjects("projectImageAlt", { project: project.name })
                    )}
                  </button>
                )}
              </motion.div>
            );
          })}
            </div>

            <div className="relative block h-full overflow-hidden xl:hidden">
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
                aria-label={tProjects("openProject", { project: activeProject.name })}
                className="group relative block h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                {projectPanel(
                  activeProject,
                  true,
                  false,
                  0,
                  tCommon("viewProject"),
                  activeProject.category === "game" ? tProjects("gameType") : tProjects("fullStackType"),
                  localizedProjectCopy[activeProject.slug].mobileSummary,
                  localizedProjectCopy[activeProject.slug].tagline,
                  tProjects("projectImageAlt", { project: activeProject.name })
                )}
              </Link>
            </motion.div>
          </AnimatePresence>
          <div className="pointer-events-none absolute bottom-5 left-1/2 z-[70] -translate-x-1/2 font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#262626]/72">
            {String(activeIndex + 1).padStart(2, "0")} / {String(orderedProjects.length).padStart(2, "0")}
          </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
