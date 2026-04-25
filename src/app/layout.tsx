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
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,142,97,0.14),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(74,45,28,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(101,73,56,0.12),transparent_32%)]" />
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
              <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">{children}</div>
            </main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
