import Link from "next/link";
import { GithubIcon } from "@/components/GithubIcon";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white/82 backdrop-blur">
      <div className="mx-auto grid max-w-[96rem] gap-8 px-2.5 py-10 md:grid-cols-[1.15fr_0.85fr] md:px-4">
        <div className="space-y-3">
          <p className="section-label">Tiana Oblasser</p>
          <h2 className="minimal-heading max-w-2xl text-3xl md:text-4xl">Sharp web products, built for review.</h2>
          <p className="minimal-text max-w-xl text-sm">Selected full-stack apps, interactive games, and case studies with a GitHub-first identity.</p>
        </div>

        <div className="space-y-3 text-sm text-muted">
          <Link href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
            <GithubIcon className="h-4 w-4" />
            {siteConfig.githubHandle}
          </Link>
          <Link href="/projects" className="block hover:text-accent">Projects</Link>
          <Link href="/about" className="block hover:text-accent">About</Link>
          <Link href="/contact" className="block hover:text-accent">Contact</Link>
          <p className="pt-3 text-xs uppercase tracking-[0.22em] text-muted">Professional review and Vercel deployment</p>
        </div>
      </div>
    </footer>
  );
}
