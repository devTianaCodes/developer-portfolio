"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { classNames } from "@/lib/classNames";

const capabilities = [
  {
    title: "Product systems",
    eyebrow: "Full-stack depth",
    text: "Commerce, learning, and adoption workflows with real product logic.",
    proof: ["Admin workflows", "Role-aware flows", "Backend-backed logic"]
  },
  {
    title: "Interface craft",
    eyebrow: "Frontend polish",
    text: "Responsive surfaces, clear hierarchy, and restrained interaction states.",
    proof: ["Sharp visual rhythm", "Mobile-first controls", "Motion with purpose"]
  },
  {
    title: "Interactive builds",
    eyebrow: "Playable proof",
    text: "Browser games that show state, feedback loops, and UI systems beyond CRUD.",
    proof: ["Live demos", "Game logic", "Polished feedback"]
  }
];

export function CapabilityBand() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = capabilities[activeIndex];

  return (
    <section className="grid gap-6 sharp-panel p-5 backdrop-blur lg:grid-cols-[0.72fr_1.28fr] md:p-7">
      <div className="space-y-3">
        <p className="section-label">Capability map</p>
        <h2 className="minimal-heading text-4xl md:text-5xl">Proof with product shape.</h2>
        <div className="grid gap-2 pt-3">
          {capabilities.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={classNames(
                "rounded-[3px] border-2 px-4 py-3 text-left transition",
                activeIndex === index
                  ? "border-[#262626] bg-[#262626] text-white shadow-[0_2px_10px_rgba(0,0,0,0.13)]"
                  : "border-[#262626]/30 bg-transparent text-muted hover:border-[#262626] hover:text-ink"
              )}
            >
              <span className="block text-xs font-bold uppercase tracking-[2px] opacity-70">{item.eyebrow}</span>
              <span className="mt-1 block font-sans text-2xl font-medium">{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={active.title}
        className="flex min-h-[300px] flex-col justify-between sharp-panel-soft p-6"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="section-label">{active.eyebrow}</p>
          <h3 className="minimal-heading mt-4 text-4xl md:text-5xl">{active.title}</h3>
          <p className="minimal-text mt-5 max-w-2xl">{active.text}</p>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {active.proof.map((item) => (
            <div key={item} className="sharp-panel-soft p-4 text-sm leading-6 text-muted">{item}</div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
