import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getUploadedProduct, getUploadedProducts, getWirelessInterfaceSharedProducts } from "@/lib/catalog/products";
import { pickLocalized } from "@/lib/catalog/types";
import {
  integratedBoardCategories,
  isIntegratedBoardCategoryId,
  isIntegratedBoardId,
} from "@/lib/integrated-boards";
import CatalogProductPage from "@/sections/catalog/CatalogProductPage";
import IntegratedBoardsCatalog from "@/sections/products/integrated-boards/IntegratedBoardsCatalog";

type PageProps = {
  params: Promise<{ locale: string; board: string }>;
};

export const dynamicParams = true;

function hasWirelessInterfaceSharedUploads() {
  return getWirelessInterfaceSharedProducts().length > 0;
}

function isWirelessInterfaceSharedProduct(id: string) {
  return getWirelessInterfaceSharedProducts().some((item) => item.id === id);
}

export function generateStaticParams() {
  const uploaded = getUploadedProducts("integrated-boards");
  const categories = new Set(uploaded.map((item) => item.subcategoryId));
  if (hasWirelessInterfaceSharedUploads()) categories.add("wireless-interface");
  return [
    ...[...categories].map((board) => ({ board })),
    ...uploaded.map((item) => ({ board: item.id })),
    ...getWirelessInterfaceSharedProducts().map((item) => ({ board: item.id })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, board } = await params;
  if (!isLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const category = dict.navProducts["integrated-boards"];
  const uploaded = getUploadedProduct(board);
  if (
    uploaded &&
    (uploaded.catalogId === "integrated-boards" || isWirelessInterfaceSharedProduct(board))
  ) {
    return {
      title: `${pickLocalized(uploaded.name, locale)} | ${category}`,
      description: pickLocalized(uploaded.description, locale),
    };
  }
  const hasCategoryUploads =
    getUploadedProducts("integrated-boards").some((item) => item.subcategoryId === board) ||
    (board === "wireless-interface" && hasWirelessInterfaceSharedUploads());
  if (isIntegratedBoardCategoryId(board) && hasCategoryUploads) {
    const label = integratedBoardCategories.find((item) => item.id === board)?.label ?? board;
    return {
      title: `${label} | ${category}`,
      description:
        locale === "zh"
          ? `${label} 分类下的集成板卡产品。`
          : locale === "es"
            ? `Placas integradas en la categoría ${label}.`
            : `Integrated board products in the ${label} category.`,
    };
  }
  return {};
}

export default async function IntegratedBoardDetailPage({ params }: PageProps) {
  const { locale: rawLocale, board } = await params;
  if (!isLocale(rawLocale)) notFound();

  const hasCategoryUploads =
    getUploadedProducts("integrated-boards").some((item) => item.subcategoryId === board) ||
    (board === "wireless-interface" && hasWirelessInterfaceSharedUploads());
  if (isIntegratedBoardCategoryId(board) && hasCategoryUploads) {
    return <IntegratedBoardsCatalog locale={rawLocale} category={board} />;
  }

  if (isIntegratedBoardId(board)) notFound();

  const uploaded = getUploadedProduct(board);
  if (uploaded?.catalogId === "integrated-boards") {
    return <CatalogProductPage locale={rawLocale} product={uploaded} />;
  }
  if (uploaded && isWirelessInterfaceSharedProduct(board)) {
    return (
      <CatalogProductPage
        locale={rawLocale}
        product={uploaded}
        catalogHref="/products/integrated-boards/wireless-interface"
      />
    );
  }
  notFound();
}
