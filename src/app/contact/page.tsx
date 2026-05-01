import Link from "next/link";
import { GithubIcon } from "@/components/GithubIcon";
import { PageReveal } from "@/components/PageReveal";
import { siteConfig } from "@/content/site";

export const metadata = { title: "Contact" };

const nextSteps = [
  "GitHub is the primary public contact surface.",
  "LinkedIn and public email can be added later.",
  "Repository links can be wired once public repos are finalized."
];

export default function ContactPage() {
  return (
    <PageReveal>
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <section className="space-y-5">
          <p className="section-label">Contact</p>
          <h1 className="minimal-heading text-5xl md:text-6xl">Open to frontend and full-stack web work.</h1>
          <p className="minimal-text max-w-2xl">Review the selected projects or start with GitHub for the clearest code context.</p>
          <div className="flex flex-wrap gap-4">
            <Link href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="sharp-button">
              <GithubIcon className="h-4 w-4" />
              {siteConfig.githubHandle}
            </Link>
            <Link href="/projects" className="sharp-button">View projects</Link>
          </div>
        </section>

        <section className="sharp-panel p-8">
          <p className="section-label">Public profile status</p>
          <div className="mt-6 space-y-3">
            {nextSteps.map((item) => (
              <p key={item} className="sharp-panel-soft p-4 text-sm leading-7 text-muted">{item}</p>
            ))}
          </div>
        </section>
      </div>
    </PageReveal>
  );
}
