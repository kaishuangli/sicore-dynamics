import type { Locale } from "@/lib/i18n/config";
import type { KnowledgeFigure } from "@/lib/knowledge-articles/types";

function knowledgeAsset(categoryId: string, file: string): string {
  return `/images/knowledge/${categoryId}/${file}`;
}

export function getCollectionWikiFigures(
  categoryId: string,
  locale: Locale = "en",
): {
  heroFigure: KnowledgeFigure;
  inlineFigure: KnowledgeFigure;
} {
  const captionHero =
    locale === "zh"
      ? "本系列知识概述示意图（知识库专用，非产品营销图）。"
      : locale === "es"
        ? "Diagrama de resumen de la colección (solo Knowledge Center)."
        : "Collection overview diagram created for the Knowledge Center.";
  const captionInline =
    locale === "zh"
      ? "本系列支撑概念示意图。"
      : locale === "es"
        ? "Diagrama de apoyo de la colección."
        : "Supporting concept diagram for this collection.";

  return {
    heroFigure: {
      src: knowledgeAsset(categoryId, "_collection-hero.svg"),
      alt: `${categoryId} collection overview diagram`,
      caption: captionHero,
    },
    inlineFigure: {
      src: knowledgeAsset(categoryId, "_collection-inline.svg"),
      alt: `${categoryId} supporting concept diagram`,
      caption: captionInline,
    },
  };
}

export function getArticleKnowledgeFigures(
  categoryId: string,
  slug: string,
  title: string,
  locale: Locale = "en",
): {
  heroFigure: KnowledgeFigure;
  inlineFigure: KnowledgeFigure;
} {
  const captionHero =
    locale === "zh"
      ? `「${title}」知识点示意图。`
      : locale === "es"
        ? `Diagrama educativo de “${title}”.`
        : `Educational diagram for “${title}”.`;
  const captionInline =
    locale === "zh"
      ? `「${title}」正文配图。`
      : locale === "es"
        ? `Ilustración de apoyo para “${title}”.`
        : `Supporting illustration for “${title}”.`;

  return {
    heroFigure: {
      src: knowledgeAsset(categoryId, `${slug}-hero.svg`),
      alt: `${title} — educational diagram`,
      caption: captionHero,
    },
    inlineFigure: {
      src: knowledgeAsset(categoryId, `${slug}-diagram.svg`),
      alt: `${title} — supporting diagram`,
      caption: captionInline,
    },
  };
}
