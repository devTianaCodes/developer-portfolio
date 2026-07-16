import Link from "next/link";
import { FeaturedProjectsRail } from "@/components/FeaturedProjectsRail";
import { GithubCallout } from "@/components/GithubCallout";
import { InteractiveHero } from "@/components/InteractiveHero";
import { PageReveal } from "@/components/PageReveal";

export default function HomePage() {
  return (
    <PageReveal>
      <div className="space-y-16">
        <InteractiveHero />

        <section>
          <FeaturedProjectsRail />
        </section>

        <section className="sharp-panel p-8">
          <p className="section-label">About Tiana</p>
          <h2 className="minimal-heading mt-4 text-4xl">Frontend craft with full-stack range.</h2>
          <p className="minimal-text mt-4 max-w-2xl">Design-led web experiences across commerce, education, adoption, plant care, AI tools, and browser games.</p>
          <Link href="/about" className="sharp-button mt-6">Read profile</Link>
        </section>

        <GithubCallout />
      </div>
    </PageReveal>
  );
}
