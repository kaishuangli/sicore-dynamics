import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InvestorOpportunityPanel from "@/sections/about/InvestorOpportunityPanel";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getInvestorBundle } from "@/lib/i18n/content";

type InvestorPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: InvestorPageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const { investorPageMeta } = getInvestorBundle(locale);

  return {
    title: investorPageMeta.title,
    description: investorPageMeta.description,
    keywords: [
      "SiCore Dynamics",
      "investors",
      "wireless charging investment",
      "autonomous energy infrastructure",
      "intelligent power",
    ],
  };
}

export default async function InvestorOpportunityPage({ params }: InvestorPageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <main>
      <InvestorOpportunityPanel locale={locale} />
    </main>
  );
}
