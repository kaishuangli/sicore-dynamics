import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Wireless800wProductPage from "@/sections/products/wireless800w/Wireless800wProductPage";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getProduct800w } from "@/lib/i18n/content";

type Product800wPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Product800wPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const { wireless800wMeta } = getProduct800w(locale);

  return {
    title: wireless800wMeta.title,
    description: wireless800wMeta.description,
    keywords: [
      "800W wireless charging",
      "AGV wireless charger",
      "industrial wireless power",
      "AMR wireless charging module",
      "high power wireless charging",
    ],
  };
}

export default async function Product800wPage({ params }: Product800wPageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return <Wireless800wProductPage locale={locale} />;
}
