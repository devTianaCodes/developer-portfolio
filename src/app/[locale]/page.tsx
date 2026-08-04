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

        <section aria-label="Core web development technologies" className="-mx-2.5 overflow-hidden bg-white px-2.5 py-6 shadow-[0_18px_54px_rgba(15,23,42,0.08)] md:-mx-4 md:px-4">
          <Image
            src="/media/hero/technology-stack-banner.webp"
            alt="HTML, CSS, JavaScript, Node.js, Express, React, and MySQL logos"
            width={1430}
            height={93}
            className="h-auto w-full"
            sizes="100vw"
          />
        </section>

        <section className="sharp-panel p-8">
          <p className="section-label">{t("aboutEyebrow")}</p>
          <h2 className="minimal-heading mt-4 text-4xl">{t("aboutTitle")}</h2>
          <p className="minimal-text mt-4 max-w-2xl">{t("aboutDescription")}</p>
          <Link href="/about" className="sharp-button mt-6">{t("readProfile")}</Link>
        </section>

        <GithubCallout />
      </div>
    </PageReveal>
  );
}
