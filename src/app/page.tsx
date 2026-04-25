import Link from "next/link";
import { CapabilityBand } from "@/components/CapabilityBand";
import { FeaturedProjectsRail } from "@/components/FeaturedProjectsRail";
import { GithubCallout } from "@/components/GithubCallout";
import { Hero } from "@/components/Hero";
import { PageReveal } from "@/components/PageReveal";
import { siteConfig } from "@/content/site";

export default function HomePage() {
  return (
    <PageReveal>
      <div className="space-y-20">
        <Hero />

        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Professional approach</p>
            <h2 className="font-display text-4xl text-ink md:text-5xl">
              A portfolio designed like a product presentation, not a default template.
            </h2>
            <p className="max-w-xl text-base leading-8 text-muted">
              The strongest portfolio work does not just list technologies. It shows hierarchy,
              product judgment, and the ability to explain how design quality and implementation fit
              together. That is the bar this site is built around.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {siteConfig.principles.map((item) => (
              <div
                key={item}
                className="rounded-[1.8rem] border border-line bg-[rgba(255,252,248,0.82)] p-6 shadow-editorial"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-muted">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Selected work</p>
              <h2 className="font-display text-4xl text-ink md:text-5xl">
                Two flagship case studies, three supporting portfolio pieces.
              </h2>
            </div>
            <Link
              href="/projects"
              className="w-fit rounded-full border border-line bg-panel px-5 py-3 text-sm uppercase tracking-[0.2em] text-ink transition hover:border-accent hover:text-accent"
            >
              View all projects
            </Link>
          </div>
          <FeaturedProjectsRail />
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[2.2rem] border border-line bg-[rgba(255,252,248,0.8)] p-8 shadow-editorial">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">About Tiana</p>
            <h2 className="mt-4 font-display text-4xl text-ink">Design-minded frontend craft with full-stack range.</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Tiana Oblasser builds web experiences that are visually refined, product-aware, and
              grounded in real implementation detail. The work spans commerce, education, adoption,
              and browser-based interaction systems.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex rounded-full border border-[rgba(154,98,57,0.24)] bg-[rgba(226,202,181,0.72)] px-5 py-3 text-sm uppercase tracking-[0.18em] text-[#4a2c1c] transition hover:bg-[rgba(214,184,156,0.94)] hover:text-[#27170f]"
            >
              Read profile
            </Link>
          </div>

          <div className="rounded-[2.2rem] border border-line bg-[rgba(255,252,248,0.72)] p-8 shadow-editorial">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">What this portfolio shows</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Case studies with stronger product storytelling and cleaner technical framing.",
                "A visible GitHub-first identity instead of anonymous portfolio language.",
                "Project selection that balances business apps with interactive frontend builds.",
                "A Vercel-friendly implementation that remains practical to maintain and extend."
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-line bg-background p-5 text-sm leading-7 text-muted"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <CapabilityBand />
        <GithubCallout />
      </div>
    </PageReveal>
  );
}
