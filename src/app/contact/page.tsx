import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/GithubIcon";
import { PageReveal } from "@/components/PageReveal";
import { SocialIcon } from "@/components/SocialIcon";
import { siteConfig } from "@/content/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PageReveal>
      <section className="space-y-6">
        <div className="space-y-4">
          <p className="section-label">Contact</p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-8 md:flex-row md:items-start lg:gap-12">
            <div className="sharp-panel w-fit rounded-[8px] p-4">
              <div className="relative aspect-square w-[120px] overflow-hidden rounded-[8px] border border-line shadow-[0_14px_34px_rgba(15,23,42,0.12)] sm:w-[130px]">
                <Image
                  src="/media/profile/tiana-contact.jpg"
                  alt="Tiana Oblasser portrait"
                  fill
                  sizes="130px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            <div className="max-w-4xl space-y-5">
              <h1 className="minimal-heading text-5xl md:text-6xl">Open to frontend and full-stack web work.</h1>
              <p className="minimal-text max-w-2xl">Review the selected projects, connect on LinkedIn, or send a direct email.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 lg:flex-nowrap">
            <Link href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="sharp-button justify-start">
              <GithubIcon className="h-4 w-4" />
              {siteConfig.githubHandle}
            </Link>
            <Link href={siteConfig.linkedInUrl} target="_blank" rel="noreferrer" className="sharp-button justify-start">
              <SocialIcon kind="linkedin" />
              LinkedIn
            </Link>
            <Link href={siteConfig.emailUrl} className="sharp-button justify-start">
              <SocialIcon kind="email" />
              Email
            </Link>
            <Link href="/projects" className="sharp-button justify-start">View projects</Link>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
