import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getUploadedProduct, getUploadedProducts } from "@/lib/catalog/products";
import { pickLocalized } from "@/lib/catalog/types";
import type { CatalogProduct } from "@/lib/catalog/types";
import { site } from "@/lib/site";
import CatalogProductPage from "@/sections/catalog/CatalogProductPage";
import { getThirdPartyProduct, thirdPartyProducts } from "@/lib/third-party-products";

type PageProps = {
  params: Promise<{ locale: string; product: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return [
    ...thirdPartyProducts.map((item) => ({ product: item.id })),
    ...getUploadedProducts("third-party-products").map((item) => ({ product: item.id })),
  ];
}

function builtInAsCatalog(id: string): CatalogProduct | undefined {
  const item = getThirdPartyProduct(id);
  if (!item) return undefined;
  return {
    id: item.id,
    catalogId: "third-party-products",
    subcategoryId: String(item.categoryId),
    brand: item.brand,
    name: { en: item.title, zh: item.titleZh, es: item.titleEs },
    tagline: { en: item.tagline, zh: item.tagline, es: item.tagline },
    description: { en: item.tagline, zh: item.tagline, es: item.tagline },
    image: item.image || "/images/product-tx.png",
    imageAlt: { en: item.title, zh: item.titleZh, es: item.titleEs },
    availability: item.inStock ? "in-stock" : "available",
    priceLabel: "",
    priceCents: item.priceCents,
    buyable: item.priceCents > 0,
    specs: item.specs,
    published: true,
    createdAt: "",
    updatedAt: "",
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, product } = await params;
  if (!isLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const uploaded = getUploadedProduct(product);
  const title = uploaded
    ? pickLocalized(uploaded.name, locale)
    : getThirdPartyProduct(product)
      ? locale === "zh"
        ? getThirdPartyProduct(product)!.titleZh
        : locale === "es"
          ? getThirdPartyProduct(product)!.titleEs
          : getThirdPartyProduct(product)!.title
      : "";
  if (!title) return {};

  const url =
    locale === "zh"
      ? `${site.url}/zh/third-party-products/${product}`
      : locale === "es"
        ? `${site.url}/es/third-party-products/${product}`
        : `${site.url}/third-party-products/${product}`;

  return {
    title: `${title} | ${dict.nav.thirdPartyProducts}`,
    alternates: { canonical: url },
  };
}

export default async function ThirdPartyProductDetailPage({ params }: PageProps) {
  const { locale: rawLocale, product } = await params;
  if (!isLocale(rawLocale)) notFound();

  const uploaded = getUploadedProduct(product);
  if (uploaded?.catalogId === "third-party-products") {
    return <CatalogProductPage locale={rawLocale} product={uploaded} />;
  }

  const builtIn = builtInAsCatalog(product);
  if (!builtIn) notFound();
  return <CatalogProductPage locale={rawLocale} product={builtIn} />;
}
