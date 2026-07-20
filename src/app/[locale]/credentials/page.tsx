import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { CredentialGallery, DegreeCredentialGallery } from "@/components/CredentialGallery";
import { PageReveal } from "@/components/PageReveal";
import { UxCertificateCarousel } from "@/components/UxCertificateCarousel";
import { degreeCredentials, professionalCredentials, uxUiCredentials } from "@/content/credentials";
import { enabledLocales } from "@/i18n/config";

type CredentialsPageProps = {
  params: Promise<{ locale: (typeof enabledLocales)[number] }>;
};

export async function generateMetadata({ params }: CredentialsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("credentialsTitle")
  };
}

export default function CredentialsPage() {
  const t = useTranslations("Credentials");
  const professionalCopy = {
    "boolean-web-development": {
      date: t("professional.booleanWebDevelopment.date"),
      imageAlt: t("professional.booleanWebDevelopment.imageAlt"),
      description: t("professional.booleanWebDevelopment.description")
    },
    "boolean-ai-days": {
      date: t("professional.booleanAiDays.date"),
      imageAlt: t("professional.booleanAiDays.imageAlt"),
      description: t("professional.booleanAiDays.description")
    },
    "aulab-html-css": {
      date: t("professional.aulabHtmlCss.date"),
      imageAlt: t("professional.aulabHtmlCss.imageAlt"),
      description: t("professional.aulabHtmlCss.description")
    },
    "ntt-data-inspireher": {
      date: t("professional.nttDataInspireHer.date"),
      imageAlt: t("professional.nttDataInspireHer.imageAlt"),
      description: t("professional.nttDataInspireHer.description")
    }
  };
  const degreeCopy = {
    "economic-sciences-business-administration": {
      level: t("degrees.economicSciencesBachelor.level"),
      field: t("degrees.economicSciencesBachelor.field"),
      specialization: t("degrees.economicSciencesBachelor.specialization"),
      imageAlt: t("degrees.economicSciencesBachelor.imageAlt")
    },
    "economic-sciences-commercial-transactions": {
      level: t("degrees.economicSciencesMaster.level"),
      field: t("degrees.economicSciencesMaster.field"),
      specialization: t("degrees.economicSciencesMaster.specialization"),
      imageAlt: t("degrees.economicSciencesMaster.imageAlt")
    },
    "education-sciences-languages": {
      level: t("degrees.educationSciencesBachelor.level"),
      field: t("degrees.educationSciencesBachelor.field"),
      specialization: t("degrees.educationSciencesBachelor.specialization"),
      imageAlt: t("degrees.educationSciencesBachelor.imageAlt")
    }
  };
  const localizedProfessionalCredentials = professionalCredentials.map((credential) => ({
    ...credential,
    ...professionalCopy[credential.slug as keyof typeof professionalCopy]
  }));
  const localizedDegreeCredentials = degreeCredentials.map((credential) => ({
    ...credential,
    ...degreeCopy[credential.slug as keyof typeof degreeCopy]
  }));
  const localizedUxUiCredentials = uxUiCredentials.map((credential) => ({
    ...credential,
    imageAlt: t("uxCertificateImageAlt", { title: credential.title })
  }));

  return (
    <PageReveal>
      <div className="space-y-10">
        <section className="space-y-4">
          <p className="section-label">{t("eyebrow")}</p>
          <h1 className="minimal-heading max-w-5xl text-5xl md:text-6xl">{t("title")}</h1>
        </section>

        <CredentialGallery credentials={localizedProfessionalCredentials} />

        <UxCertificateCarousel credentials={localizedUxUiCredentials} />

        <DegreeCredentialGallery credentials={localizedDegreeCredentials} />
      </div>
    </PageReveal>
  );
}
