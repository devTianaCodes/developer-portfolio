import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { SocialLinks } from "@/components/SocialLinks";
import { siteConfig } from "@/content/site";
import { enabledLocales } from "@/i18n/config";
import { createPageMetadata } from "@/i18n/metadata";
import { Link } from "@/i18n/navigation";

type ContactPageProps = {
  params: Promise<{ locale: (typeof enabledLocales)[number] }>;
};

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return createPageMetadata({
    path: "/contact",
    locale,
    title: t("contactTitle"),
    description: t("siteDescription")
  });
}

export default function ContactPage() {
  const t = useTranslations("Contact");
  const tCommon = useTranslations("Common");

  return (
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
            <SocialLinks linkClassName="sharp-button justify-start" labels={{ github: siteConfig.githubHandle, email: tCommon("email") }} />
            <Link href="/projects" className="sharp-button justify-start">{t("viewProjects")}</Link>
          </div>
        </div>
    </section>
  );
}
