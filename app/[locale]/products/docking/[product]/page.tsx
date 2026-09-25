import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getDockingProductContent } from "@/lib/i18n/content";
import { getUploadedProduct, getUploadedProducts } from "@/lib/catalog/products";
import { pickLocalized } from "@/lib/catalog/types";
import {
  dockingProductIds,
  resolveDockingCategoryId,
  type DockingProductId,
} from "@/lib/docking-products";
import { withLocale } from "@/lib/i18n/path";
import { site } from "@/lib/site";
import CatalogProductPage from "@/sections/catalog/CatalogProductPage";
import DockingShell from "@/sections/products/DockingShell";
import DockingCategoryCatalog from "@/sections/products/docking/DockingCategoryCatalog";

type PageProps = {
  params: Promise<{ locale: string; product: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return [
    ...dockingProductIds.map((product) => ({ product })),
    ...getUploadedProducts("docking").map((item) => ({ product: item.id })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, product } = await params;
  if (!isLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const category = dict.navProducts.docking;
  const uploaded = getUploadedProduct(product);
  if (uploaded?.catalogId === "docking") {
    return {
      title: `${pickLocalized(uploaded.name, locale)} | ${category}`,
      description: pickLocalized(uploaded.tagline, locale),
    };
  }
  const categoryId = resolveDockingCategoryId(product);
  if (!categoryId) return {};
  const item = getDockingProductContent(locale, categoryId);
  if (!item) return {};

  const url =
    locale === "zh"
      ? `${site.url}/zh/products/docking/${categoryId}`
      : locale === "es"
        ? `${site.url}/es/products/docking/${categoryId}`
        : `${site.url}/products/docking/${categoryId}`;

  return {
    title: `${item.label} | ${category}`,
    description: item.tagline,
    alternates: { canonical: url },
  };
}

export default async function DockingProductDetailPage({ params }: PageProps) {
  const { locale: rawLocale, product } = await params;
  if (!isLocale(rawLocale)) notFound();

  const categoryId = resolveDockingCategoryId(product);
  if (categoryId && categoryId !== product) {
    redirect(withLocale(`/products/docking/${categoryId}`, rawLocale));
  }

  if (categoryId) {
    const productId = categoryId as DockingProductId;
    return (
      <DockingShell locale={rawLocale} activeProductId={productId}>
        <DockingCategoryCatalog locale={rawLocale} categoryId={productId} />
      </DockingShell>
    );
  }

  const uploaded = getUploadedProduct(product);
  if (!uploaded || uploaded.catalogId !== "docking") notFound();

  return (
    <DockingShell
      locale={rawLocale}
      activeProductId={resolveDockingCategoryId(uploaded.subcategoryId) ?? uploaded.subcategoryId}
    >
      <CatalogProductPage locale={rawLocale} product={uploaded} embedded />
    </DockingShell>
  );
}
