import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { site } from "@/lib/site";
import ThirdPartyProductsQuery from "@/sections/third-party/ThirdPartyProductsQuery";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};

  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const title = dict.nav.thirdPartyProducts;
  const description =
    locale === "zh"
      ? "SiCore Dynamics 第三方产品目录：合作伙伴功率模块、控制器、线缆、传感器与评估套件。"
      : locale === "es"
        ? "Catálogo de productos de terceros SiCore Dynamics: módulos, controladores, cables, sensores y kits."
        : "SiCore Dynamics third party products catalog: partner modules, controllers, cables, sensors, and kits.";

  const url =
    locale === "zh"
      ? `${site.url}/zh/third-party-products`
      : locale === "es"
        ? `${site.url}/es/third-party-products`
        : `${site.url}/third-party-products`;

  return {
    title,
    description,
    alternates: { canonical: url },
  };
}

export default async function ThirdPartyProductsPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  return (
    <Suspense fallback={null}>
      <ThirdPartyProductsQuery locale={raw} />
    </Suspense>
  );
}
