import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://developer-portfolio.vercel.app"),
  title: {
    default: "Tiana Oblasser | Modern Web Developer Portfolio",
    template: "%s | Tiana Oblasser"
  },
  description: siteConfig.description,
  openGraph: {
    title: "Tiana Oblasser | Modern Web Developer Portfolio",
    description: siteConfig.description,
    url: "https://developer-portfolio.vercel.app",
    siteName: "Tiana Oblasser Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiana Oblasser | Modern Web Developer Portfolio",
    description: siteConfig.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans text-ink antialiased">
        <div className="relative min-h-screen overflow-hidden">
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
              <div className="mx-auto max-w-[96rem] px-2.5 py-10 md:px-4 md:py-14">{children}</div>
            </main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
