import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import Wireless200wProductPage from "@/sections/products/wireless200w/Wireless200wProductPage";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getProduct200w } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";
import { getProductSchema } from "@/lib/seo";

type Product200wPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Product200wPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const { wireless200wMeta } = getProduct200w(locale);

  return {
    title: wireless200wMeta.title,
    description: wireless200wMeta.description,
    keywords: [
      "200W wireless charging",
      "wireless charging module",
      "AMR wireless charging",
      "robot wireless charger",
      "industrial wireless power",
    ],
  };
}

export default async function Product200wPage({ params }: Product200wPageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  const { wireless200wMeta, wireless200wHero } = getProduct200w(locale);

  return (
    <>
      <JsonLd
        data={getProductSchema({
          name: wireless200wHero.title,
          description: wireless200wMeta.description,
          path: withLocale("/products/200w", locale),
          image: wireless200wHero.image,
          category: "Wireless Power Modules",
        })}
      />
      <Wireless200wProductPage locale={locale} />
    </>
  );
}
