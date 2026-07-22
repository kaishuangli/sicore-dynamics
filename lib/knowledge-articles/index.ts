import type { Locale } from "@/lib/i18n/config";
import type { KnowledgeArticle } from "@/lib/knowledge-articles/types";
import { getArticleKnowledgeFigures } from "@/lib/knowledge-article-media";
import { coilEngineeringArticles } from "@/lib/knowledge-articles/coil-engineering";
import { powerElectronicsArticles } from "@/lib/knowledge-articles/power-electronics";
import { intelligentPowerControlArticles } from "@/lib/knowledge-articles/intelligent-power-control";
import { chargingStationsArticles } from "@/lib/knowledge-articles/charging-stations";
import { batteryEnergyManagementArticles } from "@/lib/knowledge-articles/battery-energy-management";
import { embeddedSystemsArticles } from "@/lib/knowledge-articles/embedded-systems";
import { thermalEngineeringArticles } from "@/lib/knowledge-articles/thermal-engineering";
import { emiEmcEngineeringArticles } from "@/lib/knowledge-articles/emi-emc-engineering";
import { safetyEngineeringArticles } from "@/lib/knowledge-articles/safety-engineering";
import { industryStandardsArticles } from "@/lib/knowledge-articles/industry-standards";
import { resonantWirelessPowerArticles } from "@/lib/knowledge-articles/resonant-wireless-power";
import { wirelessChargingFundamentalsArticles } from "@/lib/knowledge-articles/wireless-charging-fundamentals";

const articlesByCategory: Record<string, readonly KnowledgeArticle[]> = {
  "wireless-charging-fundamentals": wirelessChargingFundamentalsArticles,
  "resonant-wireless-power": resonantWirelessPowerArticles,
  "coil-engineering": coilEngineeringArticles,
  "power-electronics": powerElectronicsArticles,
  "intelligent-power-control": intelligentPowerControlArticles,
  "charging-stations": chargingStationsArticles,
  "battery-energy-management": batteryEnergyManagementArticles,
  "embedded-systems": embeddedSystemsArticles,
  "thermal-engineering": thermalEngineeringArticles,
  "emi-emc-engineering": emiEmcEngineeringArticles,
  "safety-engineering": safetyEngineeringArticles,
  "industry-standards": industryStandardsArticles,
};

const allArticles: readonly KnowledgeArticle[] = Object.values(articlesByCategory).flat();

function enrichArticle(article: KnowledgeArticle, locale: Locale = "en"): KnowledgeArticle {
  const figures = getArticleKnowledgeFigures(
    article.categoryId,
    article.slug,
    article.title,
    locale,
  );
  const firstHeadedIndex = article.sections.findIndex((section) => Boolean(section.heading));

  return {
    ...article,
    heroFigure: article.heroFigure ?? figures.heroFigure,
    sections: article.sections.map((section, index) => {
      if (section.figure) return section;
      if (index === firstHeadedIndex) {
        return { ...section, figure: figures.inlineFigure };
      }
      return section;
    }),
  };
}

export function getKnowledgeArticlesForCategory(categoryId: string): readonly KnowledgeArticle[] {
  return articlesByCategory[categoryId] ?? [];
}

export function getKnowledgeArticle(
  categoryId: string,
  slug: string,
  locale: Locale = "en",
): KnowledgeArticle | undefined {
  const article = getKnowledgeArticlesForCategory(categoryId).find((item) => item.slug === slug);
  return article ? enrichArticle(article, locale) : undefined;
}

export function hasKnowledgeArticle(categoryId: string, slug: string): boolean {
  return getKnowledgeArticlesForCategory(categoryId).some((article) => article.slug === slug);
}

export function getAllKnowledgeArticles(): readonly KnowledgeArticle[] {
  return allArticles;
}

export function getKnowledgeArticleStaticParams(): { category: string; slug: string }[] {
  return allArticles.map((article) => ({
    category: article.categoryId,
    slug: article.slug,
  }));
}

export type {
  KnowledgeArticle,
  KnowledgeArticleSection,
  KnowledgeFigure,
} from "@/lib/knowledge-articles/types";
