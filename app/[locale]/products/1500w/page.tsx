import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import Wireless1500wProductPage from "@/sections/products/wireless1500w/Wireless1500wProductPage";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getProduct1500w } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";
import { getProductSchema } from "@/lib/seo";

type Product1500wPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Product1500wPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const { wireless1500wMeta } = getProduct1500w(locale);

  return {
    title: wireless1500wMeta.title,
    description: wireless1500wMeta.description,
    keywords: [
      "1500W wireless charging",
      "heavy-duty AGV wireless charger",
      "industrial wireless power",
      "AMR wireless charging module",
      "high power wireless charging",
    ],
  };
}

export default async function Product1500wPage({ params }: Product1500wPageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  const { wireless1500wMeta, wireless1500wHero } = getProduct1500w(locale);

  return (
    <>
      <JsonLd
        data={getProductSchema({
          name: `${wireless1500wHero.titleLead} ${wireless1500wHero.titleRest}`,
          description: wireless1500wMeta.description,
          path: withLocale("/products/1500w", locale),
          image: wireless1500wHero.image,
          category: "Wireless Power Modules",
        })}
      />
      <Wireless1500wProductPage locale={locale} />
    </>
  );
}
