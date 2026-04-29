import Link from "next/link";
import { CapabilityBand } from "@/components/CapabilityBand";
import { FeaturedProjectsRail } from "@/components/FeaturedProjectsRail";
import { GithubCallout } from "@/components/GithubCallout";
import { InteractiveHero } from "@/components/InteractiveHero";
import { PageReveal } from "@/components/PageReveal";
import { siteConfig } from "@/content/site";

const proofPoints = [
  {
    label: "Product judgment",
    text: "Case studies explain how the interface, business logic, and implementation choices work together."
  },
  {
    label: "Review velocity",
    text: "Recruiters and engineers can scan the strongest signals quickly, then open deeper project pages."
  },
  {
    label: "Interaction range",
    text: "The mix of product apps and playable frontend builds shows breadth without scattering the narrative."
  }
];

export default function HomePage() {
  return (
    <PageReveal>
      <div className="space-y-20">
        <InteractiveHero />

        <section className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Professional approach</p>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              A portfolio that behaves more like a product surface than a static gallery.
            </h2>
            <p className="max-w-xl text-base leading-8 text-muted">
              The first pass now emphasizes hierarchy, interaction, and proof. Every section is designed to answer what reviewers usually ask next: what was built, why it matters, and how deep the implementation goes.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {proofPoints.map((item) => (
              <div key={item.label} className="rounded-[1.25rem] border border-line bg-white/76 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">{item.label}</p>
                <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Selected work</p>
              <h2 className="max-w-4xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Flagship apps up front, interactive demos close enough to test.
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
