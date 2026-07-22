import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PartnersSection from "@/sections/PartnersSection";
import { isLocale, type Locale } from "@/lib/i18n/config";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const isZh = locale === "zh";

  return {
    title: isZh ? "合作伙伴" : "Partners",
    description: isZh
      ? "与 SiCore Dynamics 展开合作——成为 OEM、系统集成商、分销商或技术合作伙伴。"
      : "Partner with SiCore Dynamics as an OEM, system integrator, distributor, or technology collaborator.",
  };
}

export default async function PartnersPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;

  return (
    <main>
      <PartnersSection locale={locale} />
    </main>
  );
}
