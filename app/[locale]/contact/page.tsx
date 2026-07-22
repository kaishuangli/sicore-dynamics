import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ContactPageBody from "@/sections/contact/ContactPageBody";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getContactBundle } from "@/lib/i18n/content";
import { getOrganizationSchema, seoKeywords } from "@/lib/seo";
import { site } from "@/lib/site";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const { contactPageMeta } = getContactBundle(locale);

  return {
    title: contactPageMeta.title,
    description: contactPageMeta.description,
    keywords: [
      ...seoKeywords,
      "contact SiCore Dynamics",
      "wireless charging OEM",
      "technical support",
      "partnership inquiry",
    ],
    alternates: {
      canonical: locale === "zh" ? `${site.url}/zh/contact` : `${site.url}/contact`,
    },
    openGraph: {
      title: `${contactPageMeta.title} | ${site.name}`,
      description: contactPageMeta.description,
      url: locale === "zh" ? `${site.url}/zh/contact` : `${site.url}/contact`,
      siteName: site.name,
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
    },
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const { contactPageMeta, contactFaqs } = getContactBundle(locale);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: contactPageMeta.title,
    url: `${site.url}/contact`,
    description: contactPageMeta.description,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    inLanguage: locale === "zh" ? "zh-CN" : "en-US",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: contactFaqs.map((item) => ({
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
      <JsonLd data={faqSchema} />
      <main id="main-content">
        <ContactPageBody locale={locale} />
      </main>
    </>
  );
}
