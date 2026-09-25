import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { site } from "@/lib/site";
import ConsumerProductsCatalog from "@/sections/products/consumer/ConsumerProductsCatalog";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ subcategory?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const title = dict.navProducts["consumer-oriented-products"];
  const description =
    locale === "zh"
        ? "面向消费电子、医疗、家具、DC-DC 模块与元器件的消费类无线充电产品。"
      : locale === "es"
        ? "Productos de carga inalámbrica orientados al consumidor para electrónica, médico, mobiliario, módulos DC-DC y componentes."
        : "Consumer-oriented wireless charging products across consumer electronics, medical, furniture, DC-DC modules, and component categories.";

  const url =
    locale === "zh"
      ? `${site.url}/zh/products/consumer-oriented-products`
      : locale === "es"
        ? `${site.url}/es/products/consumer-oriented-products`
        : `${site.url}/products/consumer-oriented-products`;

  return {
    title,
    description,
    alternates: { canonical: url },
  };
}

export default async function ConsumerOrientedProductsPage({ params, searchParams }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const { subcategory } = await searchParams;

  return (
    <ConsumerProductsCatalog locale={rawLocale} initialSubcategory={subcategory} />
  );
}
