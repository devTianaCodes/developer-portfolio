import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { GithubIcon } from "@/components/GithubIcon";
import { PageReveal } from "@/components/PageReveal";
import { SocialIcon } from "@/components/SocialIcon";
import { siteConfig } from "@/content/site";
import { enabledLocales } from "@/i18n/config";
import { Link } from "@/i18n/navigation";

type ContactPageProps = {
  params: Promise<{ locale: (typeof enabledLocales)[number] }>;
};

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("contactTitle")
  };
}

export default function ContactPage() {
  const t = useTranslations("Contact");
  const tCommon = useTranslations("Common");

  return (
    <PageReveal>
      <section className="space-y-6">
        <div className="space-y-4">
          <p className="section-label">{t("eyebrow")}</p>
        </div>

        <div className="space-y-4">
          <div className="max-w-4xl space-y-5">
            <h1 className="minimal-heading text-5xl md:text-6xl">{t("title")}</h1>
            <p className="minimal-text max-w-2xl">{t("description")}</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-5 lg:flex-nowrap">
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
              {tCommon("email")}
            </Link>
            <Link href="/projects" className="sharp-button justify-start">{t("viewProjects")}</Link>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
