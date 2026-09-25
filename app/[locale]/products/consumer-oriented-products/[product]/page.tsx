import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/path";
import { getUploadedProduct, getUploadedProducts } from "@/lib/catalog/products";
import { pickLocalized } from "@/lib/catalog/types";
import { site } from "@/lib/site";
import {
  consumerProductIds,
  consumerProductSubcategories,
  consumerSubcategoryIds,
  getConsumerProduct,
  getConsumerSubcategoryDescription,
  getConsumerSubcategoryLabel,
  isConsumerProductId,
  isConsumerSubcategoryId,
} from "@/lib/consumer-products";
import ConsumerProductDetail from "@/sections/products/consumer/ConsumerProductDetail";
import ConsumerProductsCatalog from "@/sections/products/consumer/ConsumerProductsCatalog";
import ProductCatalogShell from "@/sections/products/ProductCatalogShell";
type PageProps = {
  params: Promise<{ locale: string; product: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return [
    ...consumerSubcategoryIds.map((product) => ({ product })),
    ...consumerProductIds
      .filter((id) => id !== "stealth-under-desk-60w")
      .map((product) => ({ product })),
    ...getUploadedProducts("consumer-oriented-products").map((item) => ({ product: item.id })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, product } = await params;
  if (!isLocale(rawLocale)) return {};

  const uploaded = getUploadedProduct(product);
  if (uploaded?.catalogId === "consumer-oriented-products") {
    const locale = rawLocale as Locale;
    const dict = getDictionary(locale);
    const category = dict.navProducts["consumer-oriented-products"];
    return {
      title: `${pickLocalized(uploaded.name, locale)} | ${category}`,
      description: pickLocalized(uploaded.description, locale),
    };
  }

  if (isConsumerSubcategoryId(product)) {
    const locale = rawLocale as Locale;
    const dict = getDictionary(locale);
    const category = dict.navProducts["consumer-oriented-products"];
    const label = getConsumerSubcategoryLabel(product, locale);
    const url =
      locale === "zh"
        ? `${site.url}/zh/products/consumer-oriented-products/${product}`
        : locale === "es"
          ? `${site.url}/es/products/consumer-oriented-products/${product}`
          : `${site.url}/products/consumer-oriented-products/${product}`;
    return {
      title: `${label} | ${category}`,
      description: getConsumerSubcategoryDescription(product, locale),
      alternates: { canonical: url },
    };
  }

  if (!isConsumerProductId(product)) return {};

  const item = getConsumerProduct(product);
  const dict = getDictionary(rawLocale as Locale);
  const category = dict.navProducts["consumer-oriented-products"];

  return {
    title: `${item.name} | ${category}`,
    description: item.description,
  };
}

export default async function ConsumerProductDetailPage({ params }: PageProps) {
  const { locale: rawLocale, product } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale as Locale;
  if (isConsumerSubcategoryId(product)) {
    return <ConsumerProductsCatalog locale={locale} initialSubcategory={product} />;
  }

  const uploaded = getUploadedProduct(product);
  if (uploaded?.catalogId === "consumer-oriented-products") {
    const isZh = locale === "zh";
    const isEs = locale === "es";
    return (
      <ProductCatalogShell
        locale={locale}
        title={isZh ? "消费类产品" : isEs ? "Productos orientados al consumidor" : "Consumer Oriented Products"}
        catalogLabel={isZh ? "产品目录" : isEs ? "Catálogo de productos" : "Product catalog"}
        basePath="/products/consumer-oriented-products"
        activeId={uploaded.subcategoryId}
        items={[
          {
            id: "all",
            label: isZh ? "全部产品" : isEs ? "Todos los productos" : "All Products",
            tagline: isZh
              ? "返回消费类产品目录"
              : isEs
                ? "Volver al catálogo"
                : "Back to the full catalog",
            href: "/products/consumer-oriented-products",
          },
          ...consumerProductSubcategories.map((item) => ({
            id: item.id,
            label: getConsumerSubcategoryLabel(item.id, locale),
            tagline: getConsumerSubcategoryDescription(item.id, locale),
          })),
        ]}
      >
        <ConsumerProductDetail locale={locale} product={uploaded} />
      </ProductCatalogShell>
    );
  }

  if (!isConsumerProductId(product)) notFound();

  const item = getConsumerProduct(product);

  if (item.href) {
    redirect(withLocale(item.href, locale));
  }

  const L = (href: string) => withLocale(href, locale);
  const isZh = locale === "zh";
  const isEs = locale === "es";

  return (
    <main className="bg-white py-12 lg:py-16">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC]">
          <Image src={item.image} alt={item.imageAlt} fill className="object-contain p-8" />
        </div>
        <div>
          <Link
            href={L(`/products/consumer-oriented-products/${item.subcategoryId}`)}
            className="text-sm font-bold text-[#0B5FFF] hover:text-[#0847cc]"
          >
            ← {isZh ? "返回消费类产品" : isEs ? "Volver al catálogo" : "Back to catalog"}
          </Link>
          <h1 className="font-display mt-4 text-3xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl">
            {item.name}
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600">{item.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={L("/contact")} className="btn-primary">
              {isZh ? "询价" : isEs ? "Solicitar cotización" : "Request Quote"}
            </Link>
            <Link
              href={L("/download")}
              className="inline-flex items-center rounded-md border border-[#0B5FFF] px-5 py-3 text-sm font-bold text-[#0B5FFF]"
            >
              {isZh ? "下载资料" : isEs ? "Descargar" : "Download Specs"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
