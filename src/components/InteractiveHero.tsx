"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/content/site";

const proofMetrics = [
  { label: "selected work", value: "5", detail: "case studies spanning product and play" },
  { label: "full-stack apps", value: "3", detail: "commerce, learning, and adoption workflows" },
  { label: "live demos", value: "2", detail: "interactive browser games ready to test" }
];

const cockpitRows = [
  { label: "Product depth", value: "Auth, admin, payments, moderation" },
  { label: "Frontend craft", value: "Motion, responsive systems, game state" },
  { label: "Review ready", value: "Case-study framing and public code identity" }
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
    <section className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-[linear-gradient(135deg,rgba(32,54,86,0.98),rgba(49,95,159,0.94))] px-5 py-7 text-white shadow-[0_24px_70px_rgba(31,49,78,0.22)] md:px-8 md:py-9">
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-blue-200/12 blur-3xl" />
      <div className="absolute -bottom-28 left-16 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
        <motion.div className="flex flex-col justify-between gap-9" {...reveal}>
          <div className="space-y-7">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.22em] text-blue-100">
              <span className="h-2 w-2 rounded-full bg-blue-200 shadow-[0_0_14px_rgba(147,197,253,0.55)]" />
              {siteConfig.role}
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.34em] text-blue-100/78">{siteConfig.name}</p>
              <h1 className="max-w-5xl font-display text-[3.2rem] leading-[0.94] tracking-normal text-white md:text-[5.6rem]">
                Product-minded web experiences with standout interface craft.
              </h1>
            </div>

            <div className="max-w-3xl space-y-4">
              <p className="text-lg font-medium leading-8 text-white/90">{siteConfig.identityStatement}</p>
              <p className="text-base leading-8 text-slate-200 md:text-lg">{siteConfig.subheadline}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={siteConfig.secondaryCta.href}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Explore projects
              </Link>
              <Link
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/18 bg-white/8 px-6 py-3 text-sm uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:border-blue-100 hover:bg-white/14"
              >
                View GitHub
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {proofMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="rounded-[1.1rem] border border-white/12 bg-white/[0.07] p-4 backdrop-blur"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-blue-100/72">{metric.label}</p>
                <p className="mt-3 font-display text-4xl leading-none text-white">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{metric.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid gap-4"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-[1.5rem] border border-white/14 bg-slate-950/42 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-blue-100/72">Portfolio cockpit</p>
                <p className="mt-2 font-display text-3xl text-white">Built to be reviewed.</p>
              </div>
              <span className="rounded-full border border-blue-200/20 bg-blue-200/12 px-3 py-1 text-xs uppercase tracking-[0.18em] text-blue-100">
                active
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {cockpitRows.map((row) => (
                <div key={row.label} className="rounded-[1rem] border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-blue-100/62">{row.label}</p>
                  <p className="mt-2 text-sm leading-6 text-white/88">{row.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {siteConfig.stackBands.slice(0, 6).map((band) => (
              <span
                key={band}
                className="rounded-[1rem] border border-white/12 bg-white/[0.08] px-4 py-3 text-xs uppercase tracking-[0.18em] text-slate-200 backdrop-blur"
              >
                {band}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
