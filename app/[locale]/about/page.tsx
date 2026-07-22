import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AboutTabPanels from "@/sections/about/AboutTabPanels";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getAboutSicoreBundle } from "@/lib/i18n/content";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const { aboutSicorePageMeta } = getAboutSicoreBundle(locale);

  return {
    title: aboutSicorePageMeta.title,
    description: aboutSicorePageMeta.description,
    keywords: [
      "SiCore Dynamics",
      "about SiCore",
      "autonomous charging infrastructure",
      "wireless power company",
      "robotics charging",
      "intelligent energy systems",
    ],
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <main>
      <AboutTabPanels locale={locale} />
    </main>
  );
}
