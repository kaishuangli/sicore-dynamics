import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductTabPanels from "@/sections/products/ProductTabPanels";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getProductsPageMeta } from "@/lib/i18n/content";

type ProductsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ProductsPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const productsPageMeta = getProductsPageMeta(locale);

  return {
    title: productsPageMeta.title,
    description: productsPageMeta.description,
    keywords: [
      "wireless power products",
      "60W wireless charging",
      "200W wireless charging",
      "800W wireless charging",
      "1500W wireless charging",
      "3000W wireless charging",
    ],
  };
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <main>
      <ProductTabPanels locale={locale} />
    </main>
  );
}
