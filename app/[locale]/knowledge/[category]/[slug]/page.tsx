import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getKnowledgeArticle,
  getKnowledgeArticleStaticParams,
  hasKnowledgeArticle,
} from "@/lib/knowledge-articles";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getKnowledgeCategories } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";
import { site } from "@/lib/site";
import KnowledgeArticlePage from "@/sections/knowledge/KnowledgeArticlePage";

type ArticlePageProps = {
  params: Promise<{ locale: string; category: string; slug: string }>;
};

export function generateStaticParams() {
  return getKnowledgeArticleStaticParams();
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { locale: rawLocale, category: categoryId, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const article = getKnowledgeArticle(categoryId, slug, locale);
  const categories = getKnowledgeCategories(locale);
  const category = categories.find((item) => item.id === categoryId);

  if (!article || !category) {
    return {
      title:
        locale === "zh" ? "知识文章" : locale === "es" ? "Artículo" : "Knowledge Article",
    };
  }

  const path = withLocale(`/knowledge/${categoryId}/${slug}`, locale);

  return {
    title: `${article.title} | ${category.title} | SiCore Dynamics`,
    description: article.summary,
    alternates: {
      canonical: `${site.url}${path}`,
    },
    openGraph: {
      title: `${article.title} | ${site.name}`,
      description: article.summary,
      url: `${site.url}${path}`,
    },
  };
}

export default async function KnowledgeArticleRoute({ params }: ArticlePageProps) {
  const { locale: rawLocale, category: categoryId, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;

  const article = getKnowledgeArticle(categoryId, slug, locale);
  const categories = getKnowledgeCategories(locale);
  const category = categories.find((item) => item.id === categoryId);

  if (!article || !category) notFound();

  const catalogArticles = category.articles;
  const readyLinks = catalogArticles
    .filter((item) => hasKnowledgeArticle(categoryId, item.slug))
    .map((item) => ({ title: item.title, slug: item.slug }));

  const readyIndex = readyLinks.findIndex((item) => item.slug === slug);
  const catalogIndex = catalogArticles.findIndex((item) => item.slug === slug);

  const prev = readyIndex > 0 ? readyLinks[readyIndex - 1] : null;
  const next =
    readyIndex >= 0 && readyIndex < readyLinks.length - 1
      ? readyLinks[readyIndex + 1]
      : null;

  return (
    <KnowledgeArticlePage
      article={{
        ...article,
        title: catalogArticles[catalogIndex]?.title ?? article.title,
        summary: catalogArticles[catalogIndex]?.summary ?? article.summary,
        readTime: catalogArticles[catalogIndex]?.readTime ?? article.readTime,
      }}
      category={{
        id: category.id,
        index: category.index,
        title: category.title,
        shortLabel: category.shortLabel,
        accent: category.accent,
        description: category.description,
      }}
      locale={locale}
      articleNumber={readyIndex >= 0 ? readyIndex + 1 : catalogIndex + 1}
      articleCount={readyLinks.length || catalogArticles.length}
      seriesLinks={readyLinks}
      prev={prev}
      next={next}
    />
  );
}
