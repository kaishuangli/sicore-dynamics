import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getAutonomousSoftwareContent } from "@/lib/i18n/content";
import { getUploadedProduct, getUploadedProducts } from "@/lib/catalog/products";
import { pickLocalized } from "@/lib/catalog/types";
import {
  autonomousSoftwareIds,
  isAutonomousSoftwareId,
  isAutonomousSoftwareProductPublic,
  type AutonomousSoftwareId,
} from "@/lib/autonomous-software";
import { site } from "@/lib/site";
import CatalogProductPage from "@/sections/catalog/CatalogProductPage";
import AutonomousSoftwareProductPage from "@/sections/products/autonomous-software/AutonomousSoftwareProductPage";

type PageProps = {
  params: Promise<{ locale: string; product: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return [
    ...autonomousSoftwareIds.map((product) => ({ product })),
    ...getUploadedProducts("autonomous-software").map((item) => ({ product: item.id })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, product } = await params;
  if (!isLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const category = dict.navProducts["autonomous-software"];
  const uploaded = getUploadedProduct(product);
  if (uploaded?.catalogId === "autonomous-software") {
    return {
      title: `${pickLocalized(uploaded.name, locale)} | ${category}`,
      description: pickLocalized(uploaded.description, locale),
    };
  }
  if (!isAutonomousSoftwareId(product) || !isAutonomousSoftwareProductPublic(product)) return {};
  const item = getAutonomousSoftwareContent(locale, product);
  if (!item) return {};

  const url =
    locale === "zh"
      ? `${site.url}/zh/products/autonomous-software/${product}`
      : locale === "es"
        ? `${site.url}/es/products/autonomous-software/${product}`
        : `${site.url}/products/autonomous-software/${product}`;

  return {
    title: `${item.title} | ${category}`,
    description: item.description,
    alternates: { canonical: url },
  };
}

export default async function AutonomousSoftwareDetailPage({ params }: PageProps) {
  const { locale: rawLocale, product } = await params;
  if (!isLocale(rawLocale)) notFound();

  if (isAutonomousSoftwareId(product)) {
    if (!isAutonomousSoftwareProductPublic(product)) notFound();
    return (
      <AutonomousSoftwareProductPage
        locale={rawLocale as Locale}
        productId={product as AutonomousSoftwareId}
      />
    );
  }

  const uploaded = getUploadedProduct(product);
  if (!uploaded || uploaded.catalogId !== "autonomous-software") notFound();
  return <CatalogProductPage locale={rawLocale} product={uploaded} />;
}
