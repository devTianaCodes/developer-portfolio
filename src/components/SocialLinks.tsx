import NextLink from "next/link";
import { GithubIcon } from "@/components/GithubIcon";
import { SocialIcon } from "@/components/SocialIcon";
import { siteConfig, type SocialLink } from "@/content/site";

type SocialLinksProps = {
  labels?: Partial<Record<SocialLink["kind"], string>>;
  linkClassName: string;
};

export function SocialLinks({ labels, linkClassName }: SocialLinksProps) {
  return siteConfig.socialLinks.map((link) => {
    const external = link.href.startsWith("http");

    return (
      <NextLink
        key={link.kind}
        href={link.href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={linkClassName}
      >
        {link.kind === "github" ? <GithubIcon className="h-4 w-4" /> : <SocialIcon kind={link.kind} />}
        {labels?.[link.kind] ?? link.label}
      </NextLink>
    );
  });
}
