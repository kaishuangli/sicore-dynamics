import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogProductPage from "@/sections/catalog/CatalogProductPage";
import { getUploadedProduct, getUploadedProducts } from "@/lib/catalog/products";
import { pickLocalized } from "@/lib/catalog/types";
import {
  fastChargingToCatalogProduct,
  getFastChargingFolderProducts,
  getFastChargingProduct,
} from "@/lib/fast-charging-catalog";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ locale: string; product: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  const uploaded = getUploadedProducts("ev-charging-gun").map((item) => ({ product: item.id }));
  const folder = getFastChargingFolderProducts().map((item) => ({ product: item.id }));
  return [...folder, ...uploaded];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, product } = await params;
  if (!isLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const category = dict.navProducts["ev-charging-gun"];
  const uploaded = getUploadedProduct(product);
  const folder = getFastChargingProduct(product);
  const title = uploaded?.catalogId === "ev-charging-gun"
    ? pickLocalized(uploaded.name, locale)
    : folder
      ? getFastChargingProductNameForLocale(folder, locale)
      : "";
  if (!title) return {};

  const description =
    uploaded?.catalogId === "ev-charging-gun"
      ? pickLocalized(uploaded.description, locale) || pickLocalized(uploaded.tagline, locale)
      : folder?.name || "";

  const url =
    locale === "zh"
      ? `${site.url}/zh/products/ev-charging-gun/${product}`
      : locale === "es"
        ? `${site.url}/es/products/ev-charging-gun/${product}`
        : `${site.url}/products/ev-charging-gun/${product}`;

  return {
    title: `${title} | ${category}`,
    description,
    alternates: { canonical: url },
  };
}

function getFastChargingProductNameForLocale(
  item: NonNullable<ReturnType<typeof getFastChargingProduct>>,
  locale: Locale,
) {
  if (locale === "zh") return item.nameZh;
  if (locale === "es") return item.nameEs;
  return item.name;
}

export default async function EvChargingGunProductPage({ params }: PageProps) {
  const { locale: rawLocale, product } = await params;
  if (!isLocale(rawLocale)) notFound();

  const uploaded = getUploadedProduct(product);
  if (uploaded?.catalogId === "ev-charging-gun") {
    return <CatalogProductPage locale={rawLocale} product={uploaded} />;
  }

  const folder = getFastChargingProduct(product);
  if (!folder?.image) notFound();
  return <CatalogProductPage locale={rawLocale} product={fastChargingToCatalogProduct(folder)} />;
}
