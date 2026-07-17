"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ProjectTechBadge } from "@/components/ProjectTechBadge";
import { siteConfig } from "@/content/site";

const proofMetrics = [
  { label: "selected work", value: "8", detail: "case studies spanning product and play" },
  { label: "full-stack apps", value: "6", detail: "commerce, learning, adoption, orchid care, subscription, and AI workflows" },
  { label: "live demos", value: "2", detail: "interactive browser games ready to test" }
];

export function InteractiveHero() {
  const reduceMotion = useReducedMotion();
  const reveal = {
    initial: false,
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] as const }
  };

  return (
    <section className="relative left-1/2 -mt-10 flex min-h-[74rem] w-screen -translate-x-1/2 items-center overflow-hidden bg-[#06152f] py-8 text-white shadow-[0_24px_70px_rgba(31,49,78,0.18)] sm:min-h-[55.5rem] md:-mt-14 md:min-h-[57.5rem] md:py-12 lg:min-h-[37.25rem]">
      <Image
        src="/media/hero/technology-network.png"
        alt=""
        fill
        priority
        quality={82}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#020817]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/55 via-[#06152f]/20 to-transparent" />

      <div className="relative mx-auto min-w-0 max-w-[96rem] px-4 sm:px-5 md:px-8">
        <div className="grid min-w-0 gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <motion.div
            className="flex min-w-0 flex-col items-center justify-center py-2 text-center lg:py-8"
            {...reveal}
          >
            <h1 className="max-w-5xl font-sans text-[clamp(3rem,13vw,4.5rem)] font-normal leading-[0.98] tracking-[-0.025em] text-white [text-shadow:0_4px_28px_rgba(0,0,0,0.48)] lg:text-[clamp(3.5rem,4.25vw,4.5rem)]">
              <span className="block lg:whitespace-nowrap">
                Have a project in mind?
              </span>
              <span className="mt-3 block sm:mt-4 lg:whitespace-nowrap">
                Let&apos;s bring it to life
              </span>
            </h1>

            <Link
              href={siteConfig.secondaryCta.href}
              className="sharp-button-dark mt-[43px] border-white bg-white px-[1.8em] py-[1.1em] text-base text-[#06152f] shadow-[0_12px_30px_rgba(0,0,0,0.24)]"
            >
              Explore projects
            </Link>
          </motion.div>

          <motion.div
            className="flex min-w-0 items-stretch justify-center lg:h-full lg:justify-end"
            initial={false}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex min-w-0 w-full max-w-xl flex-col justify-between gap-6">
              <div className="flex w-full min-w-0 flex-wrap items-center justify-center gap-x-2 gap-y-2">
                {siteConfig.stackBands.map((tech) => (
                  <ProjectTechBadge
                    key={tech}
                    tech={tech}
                    compact
                    className="max-w-full border-white/18 bg-white/90 px-2 py-1.5 text-[8px] text-black shadow-[0_10px_24px_rgba(15,23,42,0.12)] backdrop-blur sm:px-2.5 sm:text-[9px] xl:px-3 xl:text-[10px]"
                  />
                ))}
              </div>

              <div className="grid w-full gap-3">
                {proofMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    className="min-w-0 rounded-[6px] border border-white/16 bg-[#031127]/65 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-md"
                    initial={false}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-blue-100/72">{metric.label}</p>
                    <div className="mt-3 flex min-w-0 items-baseline gap-3">
                      <span className="font-sans text-[1.75rem] leading-none text-white">{metric.value}</span>
                      <span className="min-w-0 flex-1 break-words text-sm leading-6 text-slate-200">{metric.detail}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
