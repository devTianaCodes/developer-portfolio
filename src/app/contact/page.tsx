import Link from "next/link";
import { GithubIcon } from "@/components/GithubIcon";
import { PageReveal } from "@/components/PageReveal";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Contact"
};

const nextSteps = [
  "GitHub is the primary public contact surface today.",
  "LinkedIn and public email can be added later without changing the portfolio structure.",
  "Project-specific repository links can be wired in once the public repo set is finalized."
];

export default function ContactPage() {
  return (
    <PageReveal>
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <section className="space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Contact</p>
          <h1 className="font-display text-5xl text-ink md:text-6xl">
            Open to frontend, full-stack, and product-focused web work.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-muted">
            The clearest way to review my work right now is through the portfolio case studies and my
            GitHub profile. This site is intentionally structured so the public identity feels clean,
            professional, and easy to follow.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-blue-50 px-6 py-3 text-sm uppercase tracking-[0.18em] text-accent transition hover:-translate-y-0.5 hover:bg-blue-100"
            >
              <GithubIcon className="h-4 w-4" />
              {siteConfig.githubHandle}
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-line bg-panel px-6 py-3 text-sm uppercase tracking-[0.2em] text-ink transition hover:border-accent hover:text-accent"
            >
              View projects
            </Link>
          </div>
        </section>

        <section className="rounded-[2rem] border border-line bg-panel p-8 shadow-editorial">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Public profile status</p>
          <div className="mt-6 space-y-4">
            {nextSteps.map((item) => (
              <p key={item} className="rounded-[1.5rem] border border-line bg-background p-4 text-sm leading-7 text-muted">
                {item}
              </p>
            ))}
          </div>
        </section>
      </div>
    </PageReveal>
  );
}
