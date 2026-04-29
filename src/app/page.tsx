import Link from "next/link";
import { CapabilityBand } from "@/components/CapabilityBand";
import { FeaturedProjectsRail } from "@/components/FeaturedProjectsRail";
import { GithubCallout } from "@/components/GithubCallout";
import { InteractiveHero } from "@/components/InteractiveHero";
import { PageReveal } from "@/components/PageReveal";
import { siteConfig } from "@/content/site";

export default function HomePage() {
  return (
    <PageReveal>
      <div className="space-y-20">
        <InteractiveHero />


        <section className="space-y-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <h2 className="max-w-4xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Custom professional web design with real product depth.
              </h2>
            </div>
            <Link
              href="/projects"
              className="w-fit rounded-full border border-line bg-[linear-gradient(135deg,#2563eb,#315f9f)] px-5 py-3 text-sm uppercase tracking-[0.18em] text-white shadow-[0_14px_34px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(49,95,159,0.22)]"
            >
              Open explorer
            </Link>
          </div>
          <FeaturedProjectsRail />
        </section>

        <CapabilityBand />

        <section className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[1.5rem] border border-line bg-white/78 p-8 shadow-editorial">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">About Tiana</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink">Design-minded frontend craft with full-stack range.</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Tiana Oblasser builds web experiences that are visually refined, product-aware, and grounded in real implementation detail. The work spans commerce, education, adoption, and browser-based interaction systems.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex rounded-full border border-line bg-white px-5 py-3 text-sm uppercase tracking-[0.18em] text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Read profile
            </Link>
          </div>

          <div className="rounded-[1.5rem] border border-line bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(239,246,255,0.82))] p-8 shadow-editorial">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">What this portfolio shows</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {siteConfig.principles.map((item) => (
                <div key={item} className="rounded-[1rem] border border-line bg-white/74 p-5 text-sm leading-7 text-muted">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <GithubCallout />
      </div>
    </PageReveal>
  );
}
