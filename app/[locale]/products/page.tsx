import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductCategoriesHub from "@/sections/products/ProductCategoriesHub";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getProductsPageMeta } from "@/lib/i18n/product-content";

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
      "wireless charging modules",
      "integrated boards",
      "autonomous charging software",
      "docking systems",
      "fast charging products",
    ],
  };
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <main>
      <ProductCategoriesHub locale={locale} />
    </main>
  );
}
