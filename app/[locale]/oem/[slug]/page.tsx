import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OemSectionPage from "@/sections/oem/OemSectionPage";
import {
  getOemSection,
  getOemSectionSeo,
  oemPageMeta,
  oemSections,
  type OemSectionId,
} from "@/lib/oem-program";
import { isLocale, type Locale } from "@/lib/i18n/config";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return oemSections.map((section) => ({ slug: section.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const section = getOemSection(slug);
  if (!section) return { title: "OEM" };
  const seo = getOemSectionSeo(slug) ?? {
    title: section.title,
    description: section.description,
  };

  return {
    title: `${seo.title} | OEM`,
    description: seo.description,
    keywords: [
      "SiCore Dynamics OEM",
      "autonomous charging",
      "OEM wireless charging",
      section.label,
      oemPageMeta.title,
    ],
  };
}

export default async function OemSlugPage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const section = getOemSection(slug);
  if (!section) notFound();

  return (
    <main>
      <OemSectionPage locale={locale} sectionId={section.id as OemSectionId} />
    </main>
  );
}
