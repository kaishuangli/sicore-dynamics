import { getUploadedProduct, getUploadedProducts } from "@/lib/catalog/products";
import { resolveProductImage } from "@/lib/catalog/resolve-product-image";
import type { CatalogProduct } from "@/lib/catalog/types";
import { pickLocalized } from "@/lib/catalog/types";
import { getDockingSku } from "@/lib/docking-skus";

export const thirdPartyCategories = [
  {
    id: "sensors-sensing",
    label: "Sensors & Sensing",
    labelZh: "传感器与感知",
    labelEs: "Sensores y detección",
    description: "Sensing modules for alignment, temperature, and status feedback.",
    descriptionZh: "用于对准、温度与状态反馈的传感模块。",
    descriptionEs: "Módulos de detección para alineación, temperatura y estado.",
  },
] as const;

export type ThirdPartyCategoryId = (typeof thirdPartyCategories)[number]["id"];

export const thirdPartyCategoryIds = thirdPartyCategories.map((item) => item.id);

export function isThirdPartyCategoryId(value: string): value is ThirdPartyCategoryId {
  return thirdPartyCategoryIds.includes(value as ThirdPartyCategoryId);
}

export type ThirdPartyProduct = {
  id: string;
  categoryId: ThirdPartyCategoryId | string;
  brand: string;
  title: string;
  titleZh: string;
  titleEs: string;
  tagline: string;
  /** Retail price in USD cents for cart / checkout. */
  priceCents: number;
  currency: "USD";
  inStock: boolean;
  specs: { label: string; value: string }[];
  image?: string;
};

/**
 * Placeholder kits (Partner Power Module, Cable / Connector Kit, Enclosure / Hardware,
 * Evaluation Kit, and so on) are not listed. The catalog shows uploaded products only.
 */
export const thirdPartyProducts: ThirdPartyProduct[] = [];

export function getThirdPartyProduct(id: string) {
  const builtIn = thirdPartyProducts.find((item) => item.id === id);
  if (builtIn) return builtIn;

  const docking = getDockingSku(id);
  if (docking && docking.priceCents > 0) {
    return {
      id: docking.id,
      categoryId: docking.categoryId,
      brand: "SiCore Dynamics",
      title: docking.name.en,
      titleZh: docking.name.zh,
      titleEs: docking.name.es,
      tagline: docking.tagline.en,
      priceCents: docking.priceCents,
      currency: "USD" as const,
      inStock: true,
      specs: docking.specs.map((row) => ({ label: row.label.en, value: row.value.en })),
      image: docking.image,
    } satisfies ThirdPartyProduct;
  }

  const uploaded = getUploadedProduct(id);
  if (!uploaded?.buyable || !uploaded.priceCents) return undefined;
  return uploadedToThirdParty(uploaded);
}

export function getThirdPartyCatalogItems(): ThirdPartyProduct[] {
  const extras = getUploadedProducts("third-party-products").map(uploadedToThirdParty);
  return [...extras, ...thirdPartyProducts];
}

function uploadedToThirdParty(item: CatalogProduct): ThirdPartyProduct {
  return {
    id: item.id,
    categoryId: item.subcategoryId,
    brand: item.brand,
    title: item.name.en,
    titleZh: item.name.zh || item.name.en,
    titleEs: item.name.es || item.name.en,
    tagline: pickLocalized(item.tagline, "en"),
    priceCents: item.priceCents ?? 0,
    currency: "USD",
    inStock: item.availability === "in-stock",
    specs: item.specs,
    image: resolveProductImage("third-party-products", item.id, item.image),
  };
}

export function getThirdPartyCategoryLabel(
  item: (typeof thirdPartyCategories)[number],
  locale: "en" | "zh" | "es",
) {
  if (locale === "zh") return item.labelZh;
  if (locale === "es") return item.labelEs;
  return item.label;
}

export function getThirdPartyCategoryDescription(
  item: (typeof thirdPartyCategories)[number],
  locale: "en" | "zh" | "es",
) {
  if (locale === "zh") return item.descriptionZh;
  if (locale === "es") return item.descriptionEs;
  return item.description;
}

export function getThirdPartyProductTitle(item: ThirdPartyProduct, locale: "en" | "zh" | "es") {
  if (locale === "zh") return item.titleZh;
  if (locale === "es") return item.titleEs;
  return item.title;
}

export function formatUsd(cents: number, locale: "en" | "zh" | "es" = "en") {
  return new Intl.NumberFormat(locale === "zh" ? "zh-CN" : locale === "es" ? "es-ES" : "en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}
