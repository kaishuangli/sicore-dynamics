import type { Locale } from "@/lib/i18n/config";

export const catalogIds = [
  "wireless-power-modules",
  "integrated-boards",
  "autonomous-software",
  "docking",
  "consumer-oriented-products",
  "ev-charging-gun",
  "third-party-products",
] as const;

export type CatalogId = (typeof catalogIds)[number];

export type CatalogAvailability = "in-stock" | "available" | "oem";

export type LocalizedText = {
  en: string;
  zh: string;
  es: string;
};

export type CatalogSpec = {
  label: string;
  value: string;
};

export type CatalogProduct = {
  id: string;
  catalogId: CatalogId;
  subcategoryId: string;
  brand: string;
  name: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  gallery?: string[];
  datasheetHref?: string;
  availability: CatalogAvailability;
  priceLabel: string;
  priceCents?: number;
  buyable: boolean;
  specs: CatalogSpec[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CatalogFile = {
  version: 1;
  products: CatalogProduct[];
};

export type CatalogDefinition = {
  id: CatalogId;
  label: LocalizedText;
  href: string;
  subcategories: { id: string; label: LocalizedText }[];
};

export function pickLocalized(text: LocalizedText, locale: Locale) {
  if (locale === "zh") return text.zh.trim() || text.en;
  if (locale === "es") return text.es.trim() || text.en;
  return text.en;
}

export function emptyLocalized(): LocalizedText {
  return { en: "", zh: "", es: "" };
}
