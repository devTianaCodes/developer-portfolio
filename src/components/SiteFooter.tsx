import NextLink from "next/link";
import { useTranslations } from "next-intl";
import { GithubIcon } from "@/components/GithubIcon";
import { SocialIcon } from "@/components/SocialIcon";
import { siteConfig } from "@/content/site";
import { Link } from "@/i18n/navigation";

export function SiteFooter() {
  const t = useTranslations("Footer");
  const tNavigation = useTranslations("Navigation");
  const tCommon = useTranslations("Common");

  return (
    <footer className="border-t border-line bg-white/95">
      <div className="mx-auto grid max-w-[96rem] gap-8 px-2.5 py-10 md:grid-cols-[1.15fr_0.85fr] md:px-4">
        <div className="space-y-3">
          <p className="section-label">{t("eyebrow")}</p>
          <h2 className="minimal-heading max-w-2xl text-3xl md:text-4xl">{t("headline")}</h2>
          <p className="minimal-text max-w-xl text-sm">{t("description")}</p>
        </div>

        <div className="space-y-3 text-sm text-muted">
          <NextLink href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
            <GithubIcon className="h-4 w-4" />
            {siteConfig.githubHandle}
          </NextLink>
          <NextLink href={siteConfig.linkedInUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent">
            <SocialIcon kind="linkedin" />
            {tCommon("linkedin")}
          </NextLink>
          <NextLink href={siteConfig.emailUrl} className="flex items-center gap-2 hover:text-accent">
            <SocialIcon kind="email" />
            {siteConfig.email}
          </NextLink>
          <Link href="/projects" className="block hover:text-accent">{tNavigation("projects")}</Link>
          <Link href="/about" className="block hover:text-accent">{tNavigation("about")}</Link>
          <Link href="/credentials" className="block hover:text-accent">{tNavigation("credentials")}</Link>
          <Link href="/contact" className="block hover:text-accent">{tNavigation("contact")}</Link>
        </div>
      </div>
    </footer>
  );
}
