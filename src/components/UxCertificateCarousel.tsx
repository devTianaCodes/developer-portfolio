"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { PanInfo } from "framer-motion";
import type { UxUiCredential } from "@/content/credentials";

type UxCertificateCarouselProps = {
  credentials: readonly UxUiCredential[];
};

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

export function UxCertificateCarousel({ credentials }: UxCertificateCarouselProps) {
  const [{ activeIndex, direction }, setCarousel] = useState({ activeIndex: 0, direction: 1 });
  const reduceMotion = useReducedMotion();

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
      direction: index >= current.activeIndex ? 1 : -1
    }));
  }

  function handleDragEnd(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (info.offset.x < -54 || info.velocity.x < -360) move(1);
    if (info.offset.x > 54 || info.velocity.x > 360) move(-1);
  }

  return (
    <section data-testid="ux-certificate-carousel" className="space-y-6">
      <p className="section-label">UX/UI certificates</p>

      <div className="overflow-hidden sharp-panel">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 sm:aspect-[16/10] lg:aspect-[16/9]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeCredential.slug}
              custom={direction}
              className="absolute inset-0"
              drag={reduceMotion ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              dragMomentum={false}
              onDragEnd={handleDragEnd}
              initial={reduceMotion ? false : { x: direction * 58 + "%", opacity: 0.82 }}
              animate={{ x: 0, opacity: 1 }}
              exit={reduceMotion ? undefined : { x: direction * -48 + "%", opacity: 0.68 }}
              transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 38 }}
            >
              <Image
                src={activeCredential.image}
                alt={activeCredential.imageAlt}
                fill
                priority
                className="select-none object-contain p-3 sm:p-6 lg:p-8"
                sizes="(max-width: 768px) 96vw, 88vw"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Show previous UX/UI certificate"
            className="absolute left-2 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[3px] border-2 border-[#262626] bg-white/94 text-4xl leading-none text-[#262626] shadow-md transition hover:scale-105 hover:bg-[#262626] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 sm:left-5"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Show next UX/UI certificate"
            className="absolute right-2 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[3px] border-2 border-[#262626] bg-white/94 text-4xl leading-none text-[#262626] shadow-md transition hover:scale-105 hover:bg-[#262626] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 sm:right-5"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <div className="border-t border-line p-5 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <p className="section-label">{activeCredential.issuer}</p>
              <h2 className="minimal-heading mt-3 text-2xl sm:text-3xl">{activeCredential.title}</h2>
            </div>

            <a
              href={activeCredential.image}
              target="_blank"
              rel="noreferrer"
              className="sharp-button shrink-0 self-start sm:self-auto"
            >
              View certificate
            </a>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5">
            <div className="flex min-w-0 gap-2 overflow-x-auto py-1" aria-label="Choose a UX/UI certificate">
              {credentials.map((credential, index) => (
                <button
                  key={credential.slug}
                  type="button"
                  onClick={() => selectCredential(index)}
                  aria-label={`Show ${credential.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`h-2.5 shrink-0 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
                    index === activeIndex ? "w-8 bg-[#262626]" : "w-2.5 bg-[#262626]/28 hover:bg-[#262626]/55"
                  }`}
                />
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
