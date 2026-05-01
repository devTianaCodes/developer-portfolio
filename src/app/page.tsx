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
      <div className="space-y-16">
        <InteractiveHero />

        <section>
          <FeaturedProjectsRail />
        </section>

        <CapabilityBand />

        <section className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="sharp-panel p-8">
            <p className="section-label">About Tiana</p>
            <h2 className="minimal-heading mt-4 text-4xl">Frontend craft with full-stack range.</h2>
            <p className="minimal-text mt-4">Design-led web experiences across commerce, education, adoption, and browser games.</p>
            <Link href="/about" className="sharp-button mt-6">Read profile</Link>
          </div>

          <div className="sharp-panel p-8">
            <p className="section-label">Portfolio signals</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {siteConfig.principles.map((item) => (
                <div key={item} className="sharp-panel-soft p-4 text-sm leading-7 text-muted">
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
