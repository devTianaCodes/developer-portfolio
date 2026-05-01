"use client";

import Link from "next/link";
import { GithubIcon } from "@/components/GithubIcon";
import { motion, useReducedMotion } from "framer-motion";
import { ProjectTechBadge } from "@/components/ProjectTechBadge";
import { siteConfig } from "@/content/site";

const proofMetrics = [
  { label: "selected work", value: "5", detail: "case studies spanning product and play" },
  { label: "full-stack apps", value: "3", detail: "commerce, learning, and adoption workflows" },
  { label: "live demos", value: "2", detail: "interactive browser games ready to test" }
];

export function InteractiveHero() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
      };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-x-4 -top-4 h-24 rounded-[6px] bg-[#dce7f2] blur-2xl" />
      <div className="pointer-events-none absolute -inset-x-6 -bottom-12 h-36 rounded-[6px] bg-[#d7e2ee] blur-2xl" />
      <section className="relative overflow-hidden rounded-[6px] bg-[#2f4c73] px-4 py-8 text-white shadow-[0_24px_70px_rgba(31,49,78,0.18)] sm:px-5 md:px-8 md:py-12">
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute -right-24 top-12 h-72 w-72 rounded-[3px] bg-blue-200/12 blur-3xl" />
      <div className="absolute -bottom-28 left-16 h-72 w-72 rounded-[3px] bg-blue-400/10 blur-3xl" />

      <div className="relative min-w-0 space-y-10">
      <div className="grid min-w-0 gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
        <motion.div className="flex min-w-0 flex-col justify-between gap-9" {...reveal}>
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="max-w-5xl font-sans text-[3.2rem] leading-[1.02] tracking-normal text-white md:text-[5.2rem]">
                Bring your idea, I&apos;ll build the web experience.
              </h1>
            </div>

            <div className="max-w-3xl space-y-4">
              <p className="text-base leading-8 text-slate-200 md:text-lg">{siteConfig.subheadline}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={siteConfig.secondaryCta.href}
                className="sharp-button-dark border-white bg-transparent"
              >
                Explore projects
              </Link>
              <Link
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="sharp-button-dark border-white bg-transparent"
              >
                <GithubIcon className="h-4 w-4" />
                Open GitHub
              </Link>
            </div>

          </div>
        </motion.div>

        <motion.div
          className="flex min-w-0 items-stretch justify-center lg:h-full lg:justify-end"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex min-w-0 w-full max-w-xl flex-col justify-between gap-6">
            <div className="flex min-w-0 flex-wrap items-center justify-center gap-2 lg:justify-start">
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
                  className="min-w-0 rounded-[6px] border border-white/12 bg-white/[0.07] p-4 backdrop-blur"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-blue-100/72">{metric.label}</p>
                  <div className="mt-3 flex min-w-0 items-baseline gap-3">
                    <span className="font-sans text-[1.75rem] leading-none text-white">{metric.value}</span>
                    <span className="min-w-0 text-sm leading-6 text-slate-300 lg:whitespace-nowrap">{metric.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      </div>
      </section>
    </div>
  );
}
