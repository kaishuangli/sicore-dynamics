import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Hero from "@/sections/Hero";
import TechnologySection from "@/sections/TechnologySection";
import IndustriesSection from "@/sections/IndustriesSection";
import PartnersSection from "@/sections/PartnersSection";
import FeaturedProductSection from "@/sections/FeaturedProductSection";
import AboutSection from "@/sections/AboutSection";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getFaqPageSchema } from "@/lib/geo";
import { site } from "@/lib/site";
import {
  getItemListSchema,
  getOrganizationSchema,
  getServiceSchema,
  getWebPageSchema,
  getWebsiteSchema,
  homeDescription,
  homeTitle,
  seoKeywords,
} from "@/lib/seo";
import { notFound } from "next/navigation";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const title = locale === "zh" ? "机器人与 AI 充电系统的无线能量传输" : homeTitle;
  const description = locale === "zh" ? `${dict.site.seoCorePhrase}。${dict.home.heroBody}` : homeDescription;

  return {
    title,
    description,
    keywords: seoKeywords,
    alternates: {
      canonical: locale === "zh" ? `${site.url}/zh` : locale === "es" ? `${site.url}/es` : site.url,
      languages: {
        en: site.url,
        es: `${site.url}/es`,
        "x-default": site.url,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: locale === "zh" ? `${site.url}/zh` : locale === "es" ? `${site.url}/es` : site.url,
      siteName: site.name,
      type: "website",
      locale: locale === "zh" ? "zh_CN" : locale === "es" ? "es_ES" : "en_US",
      images: [
        {
          url: `${site.url}/images/plug-free-docking/hero.png`,
          width: 1200,
          height: 630,
          alt: "SiCore Dynamics wireless charging for robotics and intelligent machines",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [`${site.url}/images/plug-free-docking/hero.png`],
    },
  };
}

export default async function Home({ params }: HomePageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <>
      <JsonLd data={getOrganizationSchema()} />
      <JsonLd data={getWebsiteSchema()} />
      <JsonLd data={getWebPageSchema()} />
      <JsonLd data={getItemListSchema()} />
      <JsonLd data={getServiceSchema()} />
      <JsonLd data={getFaqPageSchema()} />
      <main id="main-content">
        <Hero locale={locale} />
        <TechnologySection locale={locale} />
        <IndustriesSection locale={locale} />
        <FeaturedProductSection locale={locale} />
        <AboutSection locale={locale} />
        <PartnersSection locale={locale} />
      </main>
    </>
  );
}
