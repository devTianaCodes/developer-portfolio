import Link from "next/link";
import { GithubIcon } from "@/components/GithubIcon";
import { PageReveal } from "@/components/PageReveal";
import { SocialIcon } from "@/components/SocialIcon";
import { siteConfig } from "@/content/site";

export const metadata = { title: "About" };

const workingStyle = [
  "Interface quality and product structure belong together.",
  "Projects need to be demoable, explainable, and credible.",
  "Strong presentation should support technical review."
];

export default function AboutPage() {
  return (
    <PageReveal>
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="section-label">About</p>
          <h1 className="minimal-heading max-w-4xl text-5xl md:text-6xl">
            Web products with considered design and practical engineering.
          </h1>
          <p className="minimal-text max-w-3xl">
            I focus on clean interfaces, real product flows, and implementation choices that hold up in review.
          </p>
        </div>

        <section className="grid gap-4 lg:grid-cols-3">
          {workingStyle.map((item) => (
            <div key={item} className="sharp-panel p-6">
              <p className="text-sm leading-7 text-muted">{item}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="sharp-panel p-8">
            <p className="section-label">Current focus</p>
            <h2 className="minimal-heading mt-3 text-4xl">Case-study quality over noise.</h2>
            <p className="minimal-text mt-4">Five selected projects, each with a clear role, interaction model, and review narrative.</p>
          </div>

          <div className="sharp-panel p-8">
            <p className="section-label">Public identity</p>
            <h2 className="minimal-heading mt-3 inline-flex items-center gap-3 text-4xl"><GithubIcon className="h-8 w-8 text-accent" />{siteConfig.githubHandle}</h2>
            <p className="minimal-text mt-4 max-w-2xl">GitHub, LinkedIn, and email provide clear paths for code review, professional context, and direct contact.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="sharp-button">
                <GithubIcon className="h-4 w-4" />
                GitHub
              </Link>
              <Link href={siteConfig.linkedInUrl} target="_blank" rel="noreferrer" className="sharp-button">
                <SocialIcon kind="linkedin" />
                LinkedIn
              </Link>
              <Link href={siteConfig.emailUrl} className="sharp-button">
                <SocialIcon kind="email" />
                Email
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageReveal>
  );
}
