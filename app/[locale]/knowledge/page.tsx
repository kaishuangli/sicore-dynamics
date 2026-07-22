import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getKnowledgeCategories, getKnowledgePageMeta } from "@/lib/i18n/content";
import { site } from "@/lib/site";
import KnowledgeHero from "@/sections/knowledge/KnowledgeHero";
import KnowledgeLibraryPanels from "@/sections/knowledge/KnowledgeLibraryPanels";

type KnowledgePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: KnowledgePageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const { title, description } = getKnowledgePageMeta(locale);

  return {
    title,
    description,
    keywords: [
      "wireless power knowledge",
      "wireless charging articles",
      "AGV charging guide",
      "power electronics engineering",
      "wireless power fundamentals",
    ],
    alternates: {
      canonical: locale === "zh" ? `${site.url}/zh/knowledge` : `${site.url}/knowledge`,
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: locale === "zh" ? `${site.url}/zh/knowledge` : `${site.url}/knowledge`,
    },
  };
}

export default async function KnowledgePage({ params }: KnowledgePageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const isZh = locale === "zh";
  const knowledgeCategories = getKnowledgeCategories(locale);
  const totalKnowledgeArticles = knowledgeCategories.reduce(
    (count, category) => count + category.articles.length,
    0,
  );
  const { title, description } = getKnowledgePageMeta(locale);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: `${site.url}/knowledge`,
    description,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    inLanguage: isZh ? "zh-CN" : "en-US",
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SiCore Knowledge Library Collections",
    numberOfItems: knowledgeCategories.length,
    itemListElement: knowledgeCategories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.title,
      description: category.description,
      url: `${site.url}/knowledge?collection=${category.id}`,
    })),
  };

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={collectionSchema} />
      <main id="main-content" className="knowledge-page">
        <KnowledgeHero locale={locale} />
        <KnowledgeLibraryPanels locale={locale} />
        <section className="border-t border-slate-200/80 bg-white py-10">
          <div className="container-page flex flex-wrap items-center justify-between gap-4 text-sm text-slate-600">
            <p>
              <span className="font-bold text-[#0B0F19]">
                {isZh ? `${knowledgeCategories.length} 个系列` : `${knowledgeCategories.length} collections`}
              </span>
              {" · "}
              <span className="font-bold text-[#0B0F19]">
                {isZh ? `${totalKnowledgeArticles} 个主题` : `${totalKnowledgeArticles} topics`}
              </span>
              {" · "}
              {isZh ? "工程级参考文库" : "Engineering-grade reference library"}
            </p>
            <p className="text-xs uppercase tracking-[0.12em] text-slate-400">
              {isZh ? "SiCore 知识库" : "SiCore Knowledge Library"}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
