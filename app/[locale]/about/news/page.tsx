import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryNewsPanel from "@/sections/about/IndustryNewsPanel";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getIndustryNewsBundle } from "@/lib/i18n/content";

type IndustryNewsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: IndustryNewsPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const { industryNewsPageMeta } = getIndustryNewsBundle(locale);

  return {
    title: industryNewsPageMeta.title,
    description: industryNewsPageMeta.description,
    keywords: [
      "industry news",
      "robotics charging",
      "wireless power industry",
      "industrial automation",
      "autonomous machines",
      "AGV AMR charging",
    ],
  };
}

export default async function IndustryNewsPage({ params }: IndustryNewsPageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <main>
      <IndustryNewsPanel locale={locale} />
    </main>
  );
}
