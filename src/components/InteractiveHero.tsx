import NextLink from "next/link";
import { useTranslations } from "next-intl";
import { GithubIcon } from "@/components/GithubIcon";
import { siteConfig } from "@/content/site";

export function InteractiveHero() {
  const t = useTranslations("Home");
  const proofMetrics = [
    { label: t("selectedWork"), value: "8", detail: t("selectedWorkDetail") },
    { label: t("fullStackApps"), value: "6", detail: t("fullStackAppsDetail") },
    { label: t("liveDemos"), value: "2", detail: t("liveDemosDetail") }
  ];
  return (
    <div className="hero-parallax__content mx-auto min-w-0 max-w-[96rem] px-4 text-white sm:px-5 md:px-8">
      <div className="hero-parallax__layout grid w-full min-w-0 gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="flex min-w-0 flex-col items-center justify-center py-2 text-center lg:py-8">
            <h1 className="max-w-5xl font-sans text-[clamp(3rem,13vw,4.5rem)] font-normal leading-[0.98] tracking-[-0.025em] text-white [text-shadow:0_4px_28px_rgba(0,0,0,0.48)] lg:text-[clamp(3.5rem,4.25vw,4.5rem)]">
              <span className="block lg:whitespace-nowrap">
                {t("heroLineOne")}
              </span>
              <span className="mt-3 block sm:mt-4 lg:whitespace-nowrap">
                {t("heroLineTwo")}
              </span>
            </h1>

            <div className="mt-[43px] flex flex-col items-center">
              <NextLink
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-sans text-[1.1375rem] font-semibold tracking-[0.06em] text-white underline-offset-4 transition duration-200 hover:scale-105 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <GithubIcon className="h-5 w-5" />
                {siteConfig.githubHandle}
              </NextLink>
            </div>
          </div>

          <div className="flex min-w-0 items-stretch justify-center lg:h-full lg:justify-end">
            <div className="flex min-w-0 w-full max-w-xl flex-col justify-center gap-6 md:-translate-x-6 lg:-translate-x-8 xl:-translate-x-12">
              <div className="grid w-full gap-3">
                {proofMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="min-w-0 rounded-[6px] border border-white/80 bg-white/90 p-4 shadow-[0_12px_32px_rgba(0,12,32,0.22)] backdrop-blur-[3px]"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#123457]/75">{metric.label}</p>
                    <div className="mt-3 flex min-w-0 items-baseline gap-3">
                      <span className="font-sans text-[1.75rem] leading-none text-[#06152f]">{metric.value}</span>
                      <span className="min-w-0 flex-1 break-words text-sm leading-6 text-[#173a5e]">{metric.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}
