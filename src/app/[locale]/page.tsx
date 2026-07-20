import { useTranslations } from "next-intl";
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
