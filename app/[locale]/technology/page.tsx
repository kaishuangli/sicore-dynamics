import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import TechHero from "@/sections/technology/TechHero";
import TechnologyTabPanels from "@/sections/technology/TechnologyTabPanels";
import TechEngineering from "@/sections/technology/TechEngineering";
import TechAdvantages from "@/sections/technology/TechAdvantages";
import TechCta from "@/sections/technology/TechCta";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getTechnologyPageMeta } from "@/lib/i18n/content";
import { site } from "@/lib/site";
import { getOrganizationSchema, seoKeywords } from "@/lib/seo";

type TechnologyPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: TechnologyPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const technologyPageMeta = getTechnologyPageMeta(locale);

  return {
    title: technologyPageMeta.title,
    description: technologyPageMeta.description,
    keywords: [
      ...seoKeywords,
      "wireless charging technology",
      "intelligent charging stations",
      "AI power management",
      "OEM wireless charging",
    ],
    alternates: {
      canonical: locale === "zh" ? `${site.url}/zh/technology` : `${site.url}/technology`,
    },
    openGraph: {
      title: `${technologyPageMeta.title} | ${site.name}`,
      description: technologyPageMeta.description,
      url: locale === "zh" ? `${site.url}/zh/technology` : `${site.url}/technology`,
      images: [
        {
          url: `${site.url}/images/hero-wireless-robotics.jpg`,
          alt: "SiCore Dynamics autonomous charging technology platform",
        },
      ],
    },
  };
}

export default async function TechnologyPage({ params }: TechnologyPageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const technologyPageMeta = getTechnologyPageMeta(locale);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: technologyPageMeta.title,
    url: `${site.url}/technology`,
    description: technologyPageMeta.description,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    inLanguage: locale === "zh" ? "zh-CN" : "en-US",
  };

  return (
    <>
      <JsonLd data={getOrganizationSchema()} />
      <JsonLd data={webPageSchema} />
      <main id="main-content" className="tech-page">
        <TechHero locale={locale} />
        <TechnologyTabPanels locale={locale} />
        <TechEngineering locale={locale} />
        <TechAdvantages locale={locale} />
        <TechCta locale={locale} />
      </main>
    </>
  );
}
