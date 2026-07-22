import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Wireless200wProductPage from "@/sections/products/wireless200w/Wireless200wProductPage";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getProduct200w } from "@/lib/i18n/content";

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

  return <Wireless200wProductPage locale={locale} />;
}
