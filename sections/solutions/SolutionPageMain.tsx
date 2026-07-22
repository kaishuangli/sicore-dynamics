import { getSolutionBody } from "@/lib/solution-page-registry";
import type { Locale } from "@/lib/i18n/config";
import type { LocalizedIndustry } from "@/lib/i18n/content";

export default function SolutionPageMain({
  industry,
  locale,
}: {
  industry: LocalizedIndustry;
  locale: Locale;
}) {
  const Body = getSolutionBody(industry.id);
  return <Body industry={industry} locale={locale} />;
}
