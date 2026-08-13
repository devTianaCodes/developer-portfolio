"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { useTranslations } from "next-intl";
import type { UxUiCredential } from "@/content/credentials";
import { circularOffset, wrapIndex } from "@/lib/carousel";

type UxCertificateCarouselProps = {
  credentials: readonly UxUiCredential[];
};

const navigationButtonClass =
  "absolute top-1/2 z-30 inline-flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center rounded-[3px] border-2 border-white bg-[#262626] text-3xl leading-none text-white shadow-[0_8px_24px_rgba(15,23,42,0.35)] transition hover:scale-105 hover:bg-white hover:text-[#262626] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 sm:h-12 sm:w-12 sm:text-4xl";

export function UxCertificateCarousel({ credentials }: UxCertificateCarouselProps) {
  const [{ activeIndex, direction }, setCarousel] = useState({ activeIndex: 0, direction: 1 });
  const reduceMotion = useReducedMotion();
  const tCommon = useTranslations("Common");
  const tCredentials = useTranslations("Credentials");

  if (!credentials.length) return null;

  const activeCredential = credentials[activeIndex];

  function move(nextDirection: -1 | 1) {
    setCarousel((current) => ({
      activeIndex: wrapIndex(current.activeIndex + nextDirection, credentials.length),
      direction: nextDirection
    }));
  }

  function selectCredential(index: number) {
    setCarousel((current) => ({
      activeIndex: index,
      direction: circularOffset(index, current.activeIndex, credentials.length) >= 0 ? 1 : -1
    }));
  }

  function handleDragEnd(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (info.offset.x < -54 || info.velocity.x < -360) move(1);
    if (info.offset.x > 54 || info.velocity.x > 360) move(-1);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
  }

  return (
    <section
      data-testid="ux-certificate-carousel"
      aria-label={tCredentials("carouselLabel")}
      aria-roledescription={tCommon("carousel")}
      className="render-deferred-section space-y-6"
      onKeyDown={handleKeyDown}
    >
      <p className="section-label">{tCredentials("uxUiCertificates")}</p>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {tCredentials("activeCertificateAnnouncement", {
          title: activeCredential.title,
          current: activeIndex + 1,
          total: credentials.length
        })}
      </p>

      <div className="overflow-hidden sharp-panel">
        <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#e8eef5_50%,#f8fafc_100%)] sm:aspect-[16/10] lg:aspect-[16/9]">
          <motion.div
            className="absolute inset-0"
            drag={reduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence initial={false}>
              {credentials.map((credential, index) => {
                const offset = circularOffset(index, activeIndex, credentials.length);
                const isActive = offset === 0;
                const isVisible = Math.abs(offset) <= 1;

                if (!isVisible) return null;

                return (
                  <motion.div
                    layout
                    key={credential.slug}
                    role="group"
                    aria-roledescription={tCommon("slide")}
                    aria-label={tCredentials("certificateSlide", {
                      title: credential.title,
                      current: index + 1,
                      total: credentials.length
                    })}
                    className={`absolute inset-y-0 flex items-center ${
                      isActive
                        ? "left-[11%] z-20 w-[78%] sm:left-[18%] sm:w-[64%]"
                        : offset < 0
                          ? "-left-[36%] z-10 w-[72%] sm:-left-[29%] sm:w-[58%]"
                          : "-right-[36%] z-10 w-[72%] sm:-right-[29%] sm:w-[58%]"
                    }`}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.82,
                            x: offset < 0 ? -120 : offset > 0 ? 120 : direction * 80
                          }
                    }
                    animate={{
                      opacity: isActive ? 1 : 0.62,
                      scale: isActive ? 1 : 0.88,
                      x: 0
                    }}
                    exit={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            scale: 0.82,
                            x: offset < 0 ? -120 : 120
                          }
                    }
                    whileHover={isActive || reduceMotion ? undefined : { opacity: 0.78, scale: 0.9 }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : {
                            layout: { type: "spring", stiffness: 245, damping: 34, mass: 0.9 },
                            opacity: { duration: 0.28 },
                            scale: { type: "spring", stiffness: 245, damping: 34, mass: 0.9 },
                            x: { type: "spring", stiffness: 245, damping: 34, mass: 0.9 }
                          }
                    }
                  >
                    <button
                      type="button"
                      disabled={isActive}
                      onClick={() => {
                        if (!isActive) selectCredential(index);
                      }}
                      aria-label={
                        isActive
                          ? tCredentials("currentCertificate", { title: credential.title })
                          : tCredentials("centerCertificate", { title: credential.title })
                      }
                      aria-current={isActive ? "true" : undefined}
                      className={`relative aspect-[4001/2933] w-full overflow-hidden border border-line bg-white shadow-[0_24px_65px_rgba(15,23,42,0.20)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${
                        isActive ? "cursor-default" : "cursor-pointer"
                      }`}
                    >
                      <Image
                        src={credential.image}
                        alt={credential.imageAlt}
                        fill
                        loading="lazy"
                        className="pointer-events-none select-none object-contain"
                        sizes={isActive ? "(max-width: 640px) 78vw, 64vw" : "(max-width: 640px) 72vw, 58vw"}
                        draggable={false}
                      />
                      {!isActive ? <span className="absolute inset-0 bg-slate-950/10" aria-hidden="true" /> : null}
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          <button
            type="button"
            onClick={() => move(-1)}
            aria-label={tCredentials("previousCertificate")}
            className={`${navigationButtonClass} left-[7%] sm:left-[14%]`}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label={tCredentials("nextCertificate")}
            className={`${navigationButtonClass} right-[7%] sm:right-[14%]`}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <div className="border-t border-line p-5 sm:p-7">
          <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div className="min-w-0">
              <p className="section-label">{activeCredential.issuer}</p>
              <h2 className="minimal-heading mt-3 text-2xl sm:text-3xl">{activeCredential.title}</h2>
            </div>

            <a
              href={activeCredential.image}
              target="_blank"
              rel="noreferrer"
              className="sharp-button shrink-0 self-center md:self-auto"
            >
              {tCommon("viewCertificate")}
            </a>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5">
            <div
              role="group"
              className="flex min-w-0 gap-0.5 overflow-x-auto py-1"
              aria-label={tCredentials("chooseCertificate")}
            >
              {credentials.map((credential, index) => (
                <button
                  key={credential.slug}
                  type="button"
                  onClick={() => selectCredential(index)}
                  aria-label={tCredentials("showCertificate", { title: credential.title })}
                  aria-pressed={index === activeIndex}
                  className="group inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  <span
                    aria-hidden="true"
                    className={`h-2.5 rounded-full transition-[width,background-color] ${
                      index === activeIndex
                        ? "w-8 bg-[#262626]"
                        : "w-2.5 bg-[#262626]/50 group-hover:bg-[#262626]/75"
                    }`}
                  />
                </button>
              ))}
            </div>
            <p className="shrink-0 font-sans text-xs font-bold tracking-[0.16em] text-muted">
              {String(activeIndex + 1).padStart(2, "0")} / {String(credentials.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
