import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { site } from "@/lib/site";
import CheckoutPageClient from "@/sections/cart/CheckoutPageClient";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const title = locale === "zh" ? "结算下单" : locale === "es" ? "Checkout" : "Checkout";
  const url =
    locale === "zh"
      ? `${site.url}/zh/checkout`
      : locale === "es"
        ? `${site.url}/es/checkout`
        : `${site.url}/checkout`;
  return { title, alternates: { canonical: url } };
}

export default async function CheckoutPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  return <CheckoutPageClient locale={raw} />;
}
