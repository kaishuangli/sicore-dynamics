import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import DownloadHero from "@/sections/download/DownloadHero";
import DownloadPageContent from "@/sections/download/DownloadPageContent";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDownloadsBundle } from "@/lib/i18n/content";
import { getOrganizationSchema, seoKeywords } from "@/lib/seo";
import { site } from "@/lib/site";

type DownloadPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: DownloadPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const { downloadPageMeta } = getDownloadsBundle(locale);

  return {
    title: downloadPageMeta.title,
    description: downloadPageMeta.description,
    keywords: [
      ...seoKeywords,
      "wireless charging datasheet",
      "wireless power brochure download",
      "AGV charging documentation",
      "robotics wireless charging software",
      "product documentation download",
      "compliance certificates",
    ],
    alternates: {
      canonical: locale === "zh" ? `${site.url}/zh/download` : `${site.url}/download`,
    },
    openGraph: {
      title: `${downloadPageMeta.title} | ${site.name}`,
      description: downloadPageMeta.description,
      url: locale === "zh" ? `${site.url}/zh/download` : `${site.url}/download`,
      siteName: site.name,
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${downloadPageMeta.title} | ${site.name}`,
      description: downloadPageMeta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function DownloadPage({ params }: DownloadPageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const { downloadPageMeta, downloadCategories, downloadFaqs } = getDownloadsBundle(locale);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: downloadPageMeta.title,
    url: `${site.url}/download`,
    description: downloadPageMeta.description,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    inLanguage: locale === "zh" ? "zh-CN" : "en-US",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".download-hero-title", ".download-hero-copy"],
    },
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SiCore Download Center Categories",
    description: downloadPageMeta.description,
    numberOfItems: downloadCategories.length,
    itemListElement: downloadCategories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.label,
      description: category.description,
      url: `${site.url}/download#${category.id}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: downloadFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={getOrganizationSchema()} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={collectionSchema} />
      <JsonLd data={faqSchema} />
      <main id="main-content">
        <DownloadHero locale={locale} />
        <DownloadPageContent locale={locale} />
      </main>
    </>
  );
}
