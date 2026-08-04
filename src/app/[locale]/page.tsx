import { useTranslations } from "next-intl";
import Image from "next/image";
import { FeaturedProjectsRail } from "@/components/FeaturedProjectsRail";
import { GithubCallout } from "@/components/GithubCallout";
import { InteractiveHero } from "@/components/InteractiveHero";
import { PageReveal } from "@/components/PageReveal";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <PageReveal>
      <div className="space-y-16">
        <InteractiveHero />

        <section>
          <FeaturedProjectsRail />
        </section>

        <section aria-labelledby="technology-about-title" className="technology-parallax">
          <div className="technology-parallax__card">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:gap-8">
              <div className="min-w-0">
                <p className="section-label">{t("aboutEyebrow")}</p>
                <h2 id="technology-about-title" className="minimal-heading mt-4 text-3xl sm:text-4xl">
                  {t("aboutTitle")}
                </h2>
              </div>

              <Link href="/about" className="sharp-button justify-self-end">
                {t("readProfile")}
              </Link>
            </div>

            <p className="minimal-text mt-5 max-w-3xl">{t("aboutDescription")}</p>

            <div className="mx-auto mt-8 max-w-5xl border-t border-line pt-6">
              <Image
                src="/media/hero/technology-stack-banner.webp"
                alt="HTML, CSS, JavaScript, Node.js, Express, React, and MySQL logos"
                width={1430}
                height={128}
                className="h-auto w-full"
                sizes="(max-width: 768px) 84vw, 1024px"
              />
            </div>
          </div>
        </section>

        <GithubCallout />
      </div>
    </PageReveal>
  );
}
