import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="sharp-panel p-10">
      <p className="section-label">404</p>
      <h1 className="minimal-heading mt-4 text-5xl">{t("title")}</h1>
      <p className="minimal-text mt-4 max-w-2xl">{t("description")}</p>
      <Link href="/projects" className="sharp-button mt-8">
        {t("backToProjects")}
      </Link>
    </div>
  );
}
