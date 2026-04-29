"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { classNames } from "@/lib/classNames";

const capabilities = [
  {
    title: "Product systems",
    eyebrow: "Full-stack depth",
    text: "Commerce, education, and adoption products with auth, admin workflows, checkout logic, moderation, and realistic data paths.",
    proof: ["Operational dashboards", "Role-aware flows", "Backend-backed product logic"]
  },
  {
    title: "Interface craft",
    eyebrow: "Frontend polish",
    text: "Responsive layouts, interaction states, motion, and visual hierarchy shaped around how reviewers actually scan a portfolio.",
    proof: ["Motion with restraint", "Stronger visual rhythm", "Mobile-first controls"]
  },
  {
    title: "Interactive builds",
    eyebrow: "Playable proof",
    text: "Browser games add immediate evidence of state management, feedback loops, and UI systems beyond conventional CRUD screens.",
    proof: ["Live Vercel demos", "Game-state logic", "Polished feedback loops"]
  }
];

export function CapabilityBand() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = capabilities[activeIndex];

  return (
    <section className="grid gap-6 rounded-[1.75rem] border border-line bg-white/70 p-5 shadow-editorial backdrop-blur lg:grid-cols-[0.72fr_1.28fr] md:p-7">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Capability map</p>
        <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">Proof that feels usable, not just pretty.</h2>
        <div className="grid gap-2 pt-3">
          {capabilities.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={classNames(
                "rounded-[1rem] border px-4 py-3 text-left transition",
                activeIndex === index
                  ? "border-accent/30 bg-[linear-gradient(135deg,#2563eb,#315f9f)] text-white shadow-[0_18px_42px_rgba(37,99,235,0.22)]"
                  : "border-line bg-white/70 text-muted hover:border-accent/30 hover:text-ink"
              )}
            >
              <span className="block text-xs uppercase tracking-[0.2em] opacity-70">{item.eyebrow}</span>
              <span className="mt-1 block font-display text-2xl">{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={active.title}
        className="flex min-h-[320px] flex-col justify-between rounded-[1.35rem] border border-line bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(239,246,255,0.86))] p-6"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">{active.eyebrow}</p>
          <h3 className="mt-4 font-display text-4xl text-ink md:text-5xl">{active.title}</h3>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{active.text}</p>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {active.proof.map((item) => (
            <div key={item} className="rounded-[1rem] border border-line bg-white/78 p-4 text-sm leading-6 text-muted">
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
