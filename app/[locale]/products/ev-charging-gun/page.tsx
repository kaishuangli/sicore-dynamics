import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { site } from "@/lib/site";
import FastChargingCatalog from "@/sections/products/fast-charging/FastChargingCatalog";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const title = dict.navProducts["ev-charging-gun"];
  const description =
    locale === "zh"
      ? "SiCore Dynamics 电动汽车充电枪：交流与直流 EV 充电枪。"
      : locale === "es"
        ? "Pistolas de carga EV de SiCore Dynamics: CA y CC."
        : "SiCore Dynamics EV charging guns: AC and DC charging guns for vehicles.";

  const url =
    locale === "zh"
      ? `${site.url}/zh/products/ev-charging-gun`
      : locale === "es"
        ? `${site.url}/es/products/ev-charging-gun`
        : `${site.url}/products/ev-charging-gun`;

  return {
    title,
    description,
    alternates: { canonical: url },
  };
}

export default async function EvChargingGunPage({ params, searchParams }: PageProps) {
  const { locale: rawLocale } = await params;
  const { category } = await searchParams;
  if (!isLocale(rawLocale)) notFound();

  return <FastChargingCatalog locale={rawLocale} category={category} />;
}
