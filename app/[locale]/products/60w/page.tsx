import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Stealth60wProductPage from "@/sections/products/stealth60w/Stealth60wProductPage";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getProduct60w } from "@/lib/i18n/content";

type Product60wPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Product60wPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const { stealth60wMeta } = getProduct60w(locale);

  return {
    title: stealth60wMeta.title,
    description: stealth60wMeta.description,
    keywords: [
      "under desk wireless charger",
      "stealth wireless charger",
      "invisible wireless charger",
      "60W wireless charging",
      "Qi charger",
      "furniture wireless charging",
    ],
  };
}

export default async function Product60wPage({ params }: Product60wPageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return <Stealth60wProductPage locale={locale} />;
}
