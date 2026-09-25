import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { site } from "@/lib/site";
import AutonomousSoftwareCatalog from "@/sections/products/autonomous-software/AutonomousSoftwareCatalog";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const title = dict.navProducts["autonomous-software"];
  const description =
    locale === "zh"
      ? "面向充电控制、车队可视、任务调度与无人值守连续运行的自主软件。"
      : locale === "es"
        ? "Software autónomo para control de carga, visibilidad de flota, programación y operación continua sin intervención."
        : "Autonomous software for charging control, fleet visibility, scheduling, and continuous unattended operation.";

  const url =
    locale === "zh"
      ? `${site.url}/zh/products/autonomous-software`
      : locale === "es"
        ? `${site.url}/es/products/autonomous-software`
        : `${site.url}/products/autonomous-software`;

  return {
    title,
    description,
    alternates: { canonical: url },
  };
}

export default async function AutonomousSoftwareIndexPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  return <AutonomousSoftwareCatalog locale={rawLocale} />;
}
