import type { Metadata } from "next";
import { inter, spaceGrotesk } from "@/lib/fonts";
import { site } from "@/lib/site";
import { homeDescription, homeTitle, seoKeywords } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${homeTitle} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: homeDescription,
  keywords: seoKeywords,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: `${homeTitle} | ${site.name}`,
    description: homeDescription,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/plug-free-docking/hero.png",
        width: 1200,
        height: 630,
        alt: "SiCore Dynamics autonomous charging for robotics and intelligent machines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${homeTitle} | ${site.name}`,
    description: homeDescription,
    images: ["/images/plug-free-docking/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "ai-content": "allowed",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM site summary" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
