import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { site } from "@/lib/site";
import IntegratedBoardsQuery from "@/sections/products/integrated-boards/IntegratedBoardsQuery";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const title = dict.navProducts["integrated-boards"];
  const description =
    locale === "zh"
      ? "面向 OEM 嵌入、对接系统与量产组装的集成电源与控制板卡。"
      : locale === "es"
        ? "Placas integradas de potencia y control diseñadas para integración OEM, sistemas de acoplamiento y ensambles listos para producción."
        : "Integrated power and control boards engineered for OEM embedding, docking systems, and production-ready assemblies.";

  const url =
    locale === "zh"
      ? `${site.url}/zh/products/integrated-boards`
      : locale === "es"
        ? `${site.url}/es/products/integrated-boards`
        : `${site.url}/products/integrated-boards`;

  return {
    title,
    description,
    alternates: { canonical: url },
  };
}

export default async function IntegratedBoardsIndexPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  return (
    <Suspense fallback={null}>
      <IntegratedBoardsQuery locale={rawLocale} />
    </Suspense>
  );
}
