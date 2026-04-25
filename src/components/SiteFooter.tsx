import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-[rgba(255,250,244,0.84)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-[1.15fr_0.85fr] md:px-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Tiana Oblasser</p>
          <h2 className="font-display text-4xl text-ink">{siteConfig.headline}</h2>
          <p className="max-w-2xl text-sm leading-7 text-muted">
            Built as a Vercel-ready case-study portfolio with a GitHub-first identity, stronger flagship work hierarchy, and professional project storytelling.
          </p>
        </div>

        <div className="space-y-4 text-sm text-muted">
          <Link href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="block hover:text-ink">
            GitHub / {siteConfig.githubHandle}
          </Link>
          <Link href="/projects" className="block hover:text-ink">
            Selected projects
          </Link>
          <Link href="/about" className="block hover:text-ink">
            About Tiana
          </Link>
          <Link href="/contact" className="block hover:text-ink">
            Contact
          </Link>
          <p className="pt-4 text-xs uppercase tracking-[0.22em] text-muted">
            Designed for professional review and Vercel deployment
          </p>
        </div>
      </div>
    </footer>
  );
}
