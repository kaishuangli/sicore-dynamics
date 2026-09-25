import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { site } from "@/lib/site";
import CartPageClient from "@/sections/cart/CartPageClient";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const title = locale === "zh" ? "购物车" : locale === "es" ? "Carrito" : "Shopping Cart";
  const url =
    locale === "zh"
      ? `${site.url}/zh/cart`
      : locale === "es"
        ? `${site.url}/es/cart`
        : `${site.url}/cart`;
  return { title, alternates: { canonical: url } };
}

export default async function CartPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  return <CartPageClient locale={raw} />;
}
