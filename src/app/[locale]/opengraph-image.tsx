import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { isLocale } from "@/i18n/config";

export const alt = "Tatiana Oblasser developer portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type OpenGraphImageProps = {
  params: Promise<{ locale: string }>;
};

export default async function OpenGraphImage({ params }: OpenGraphImageProps) {
  const { locale } = await params;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  const tMetadata = await getTranslations({ locale: resolvedLocale, namespace: "Metadata" });
  const tNavigation = await getTranslations({ locale: resolvedLocale, namespace: "Navigation" });

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "linear-gradient(135deg, #020817 0%, #061b42 54%, #0758b8 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px 80px",
          position: "relative",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "rgba(56, 189, 248, 0.16)",
            border: "2px solid rgba(125, 211, 252, 0.32)",
            borderRadius: 999,
            height: 420,
            position: "absolute",
            right: -110,
            top: -160,
            width: 420
          }}
        />
        <div style={{ alignItems: "center", display: "flex", fontSize: 28, fontWeight: 700 }}>
          <span
            style={{
              alignItems: "center",
              background: "#1389ff",
              borderRadius: 18,
              display: "flex",
              height: 64,
              justifyContent: "center",
              marginRight: 22,
              width: 64
            }}
          >
            TO
          </span>
          TATIANA OBLASSER
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 950 }}>
          <div style={{ color: "#7dd3fc", display: "flex", fontSize: 34, marginBottom: 20 }}>
            {tNavigation("role")}
          </div>
          <div style={{ display: "flex", fontSize: 62, fontWeight: 800, lineHeight: 1.08 }}>
            {tMetadata("siteDescription")}
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            borderTop: "2px solid rgba(255, 255, 255, 0.18)",
            color: "#dbeafe",
            display: "flex",
            fontSize: 24,
            justifyContent: "space-between",
            paddingTop: 24
          }}
        >
          <span>React · Next.js · Node.js · REST APIs</span>
          <span>developer-portfolio.vercel.app</span>
        </div>
      </div>
    ),
    size
  );
}
