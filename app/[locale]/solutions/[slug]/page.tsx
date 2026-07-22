import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import SolutionPageHero from "@/sections/solutions/SolutionPageHero";
import SolutionPageMain from "@/sections/solutions/SolutionPageMain";
import { getIndustryPageHeading, industries, type IndustryId } from "@/lib/industries";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getIndustryBySlugLocalized, getSolutionFaqsForIndustry } from "@/lib/i18n/content";
import { getBreadcrumbSchema } from "@/lib/geo";
import { getOrganizationSchema, seoKeywords } from "@/lib/seo";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ locale: string; slug: IndustryId }>;
};

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const industry = getIndustryBySlugLocalized(slug, locale);

  if (!industry) {
    return { title: "Solution Not Found" };
  }

  const title = getIndustryPageHeading(industry);
  const description = `${industry.description} ${industry.content[0]}`;
  const url =
    locale === "zh"
      ? `${site.url}/zh/solutions/${industry.id}`
      : `${site.url}/solutions/${industry.id}`;

  return {
    title,
    description,
    keywords: [...seoKeywords, title, industry.title],
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      images: [{ url: `${site.url}${industry.image}`, alt: industry.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [`${site.url}${industry.image}`],
    },
    robots: { index: true, follow: true },
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const industry = getIndustryBySlugLocalized(slug, locale);

  if (!industry) {
    notFound();
  }

  const title = getIndustryPageHeading(industry);
  const url =
    locale === "zh"
      ? `${site.url}/zh/solutions/${industry.id}`
      : `${site.url}/solutions/${industry.id}`;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url,
    description: industry.description,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    inLanguage: locale === "zh" ? "zh-CN" : "en-US",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".solution-page-title", ".solution-page-copy"],
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: industry.description,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: "Worldwide",
    serviceType: "Wireless Charging Solutions",
    url,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: getSolutionFaqsForIndustry(industry.id, locale).map((item) => ({
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
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industrial Solutions", path: "/solutions" },
          { name: industry.title, path: `/solutions/${industry.id}` },
        ])}
      />
      <main id="main-content" className="bg-white">
        <SolutionPageHero industry={industry} locale={locale} />
        <SolutionPageMain industry={industry} locale={locale} />
      </main>
    </>
  );
}
