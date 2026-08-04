import NextLink from "next/link";
import { useTranslations } from "next-intl";
import { GithubIcon } from "@/components/GithubIcon";
import { ProjectTechBadge } from "@/components/ProjectTechBadge";
import { siteConfig } from "@/content/site";
import { Link } from "@/i18n/navigation";

export function InteractiveHero() {
  const tCommon = useTranslations("Common");
  const t = useTranslations("Home");
  const proofMetrics = [
    { label: t("selectedWork"), value: "8", detail: t("selectedWorkDetail") },
    { label: t("fullStackApps"), value: "6", detail: t("fullStackAppsDetail") },
    { label: t("liveDemos"), value: "2", detail: t("liveDemosDetail") }
  ];
  return (
    <section className="hero-parallax relative -mt-10 text-white shadow-[0_24px_70px_rgba(31,49,78,0.18)] md:-mt-14">
      <div className="hero-parallax__background" aria-hidden="true" />

      <div className="hero-parallax__content mx-auto min-w-0 max-w-[96rem] px-4 sm:px-5 md:px-8">
        <div className="grid w-full min-w-0 gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
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
              <Link
                href={siteConfig.secondaryCta.href}
                className="sharp-button-dark min-w-52 border-white bg-white px-[1.8em] py-[1.1em] text-base text-[#06152f] shadow-[0_12px_30px_rgba(0,0,0,0.24)] transition duration-200 hover:scale-105"
              >
                {tCommon("exploreProjects")}
              </Link>
              <NextLink
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-[43px] inline-flex items-center gap-2 font-sans text-[1.1375rem] font-semibold tracking-[0.06em] text-white underline-offset-4 transition duration-200 hover:scale-105 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <GithubIcon className="h-5 w-5" />
                {siteConfig.githubHandle}
              </NextLink>
            </div>
          </div>

          <div className="flex min-w-0 items-stretch justify-center lg:h-full lg:justify-end">
            <div className="flex min-w-0 w-full max-w-xl flex-col justify-between gap-6">
              <div className="flex w-full min-w-0 flex-wrap items-center justify-center gap-x-2 gap-y-2">
                {siteConfig.stackBands.map((tech) => (
                  <ProjectTechBadge
                    key={tech}
                    tech={tech}
                    compact
                    className="max-w-full border-white/18 bg-white/95 px-2 py-1.5 text-[8px] text-black shadow-[0_10px_24px_rgba(15,23,42,0.12)] sm:px-2.5 sm:text-[9px] xl:px-3 xl:text-[10px]"
                  />
                ))}
              </div>

              <div className="grid w-full gap-3">
                {proofMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="min-w-0 rounded-[6px] border border-white/16 bg-[#031127]/90 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.16)]"
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-blue-100/72">{metric.label}</p>
                    <div className="mt-3 flex min-w-0 items-baseline gap-3">
                      <span className="font-sans text-[1.75rem] leading-none text-white">{metric.value}</span>
                      <span className="min-w-0 flex-1 break-words text-sm leading-6 text-slate-200">{metric.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
