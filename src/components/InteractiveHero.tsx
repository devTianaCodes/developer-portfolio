"use client";

import Image from "next/image";
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

const projectCollage = [
  { src: "/media/projects/english4u/showcase/01.png", alt: "English4U project screenshot" },
  { src: "/media/projects/chocolate/showcase/01.png", alt: "Chocolate Craft House project screenshot" },
  { src: "/media/projects/petnest/showcase/01.png", alt: "PetNest project screenshot" },
  { src: "/media/projects/brickdrop/showcase/01.png", alt: "BrickDrop project screenshot" },
  { src: "/media/projects/sea-battle/showcase/01.png", alt: "Sea Battle project screenshot" }
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
      <section className="relative overflow-hidden rounded-[6px] bg-[#2f4c73] px-5 py-7 text-white shadow-[0_24px_70px_rgba(31,49,78,0.18)] md:px-8 md:py-9">
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute -right-24 top-12 h-72 w-72 rounded-[3px] bg-blue-200/12 blur-3xl" />
      <div className="absolute -bottom-28 left-16 h-72 w-72 rounded-[3px] bg-blue-400/10 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
        <motion.div className="flex flex-col justify-between gap-9" {...reveal}>
          <div className="space-y-7">
            <div className="space-y-4">
              <h1 className="max-w-5xl font-sans text-[3.2rem] leading-[1.02] tracking-normal text-white md:text-[5.2rem]">
                Product-minded web experiences.
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

          <div className="grid gap-3 sm:grid-cols-3">
            {proofMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="rounded-[6px] border border-white/12 bg-white/[0.07] p-4 backdrop-blur"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-blue-100/72">{metric.label}</p>
                <p className="mt-3 font-sans text-4xl leading-none text-white">{metric.value}</p>
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
          <div className="hero-scroll-gallery group/gallery relative min-h-[430px] overflow-hidden rounded-[6px] border border-white/14 bg-slate-950/42 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl md:min-h-[520px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_78%_74%,rgba(147,197,253,0.16),transparent_30%)]" />
            <div className="absolute inset-5 rounded-[6px] border border-white/10 bg-white/[0.04]" />
            <div className="hero-scroll-track absolute left-0 top-[31%] flex w-max gap-5 pr-5 will-change-transform">
              {[...projectCollage, ...projectCollage].map((item, index) => (
                <div
                  key={`top-${item.src}-${index}`}
                  className={`hero-scroll-card relative w-[290px] shrink-0 overflow-hidden rounded-[6px] border border-white/20 bg-white shadow-[0_22px_55px_rgba(0,0,0,0.3)] md:w-[380px] ${index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"}`}
                >
                  <div className="relative aspect-[16/10]">
                    <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 380px" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/24 to-transparent" />
                </div>
              ))}
            </div>
            <div className="hero-scroll-track hero-scroll-track-reverse absolute left-0 top-[66%] flex w-max gap-5 pr-5 will-change-transform">
              {[...projectCollage.slice().reverse(), ...projectCollage.slice().reverse()].map((item, index) => (
                <div
                  key={`bottom-${item.src}-${index}`}
                  className={`hero-scroll-card relative w-[250px] shrink-0 overflow-hidden rounded-[6px] border border-white/20 bg-white shadow-[0_22px_55px_rgba(0,0,0,0.28)] md:w-[330px] ${index % 2 === 0 ? "rotate-[2deg]" : "rotate-[-2deg]"}`}
                >
                  <div className="relative aspect-[16/10]">
                    <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 1024px) 44vw, 330px" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/24 to-transparent" />
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950/40 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950/40 to-transparent" />
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-2.5 justify-self-center px-2">
            {siteConfig.stackBands.map((band) => (
              <ProjectTechBadge
                key={band}
                tech={band}
                compact
                className="border-white/18 bg-white/90 px-3 py-1.5 text-[10px] text-black shadow-[0_10px_24px_rgba(15,23,42,0.12)] backdrop-blur"
              />
            ))}
          </div>
        </motion.div>
      </div>
      </section>
    </div>
  );
}
