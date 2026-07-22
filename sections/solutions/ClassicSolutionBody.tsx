import SolutionApplicationsSection from "@/sections/solutions/SolutionApplicationsSection";
import SolutionContactBand from "@/sections/solutions/SolutionContactBand";
import SolutionFaqSection from "@/sections/solutions/SolutionFaqSection";
import SolutionWhyWirelessSection from "@/sections/solutions/SolutionWhyWirelessSection";
import type { Locale } from "@/lib/i18n/config";
import type { LocalizedIndustry } from "@/lib/i18n/content";

export default function ClassicSolutionBody({
  industry,
  locale,
}: {
  industry: LocalizedIndustry;
  locale: Locale;
}) {
  return (
    <>
      <SolutionWhyWirelessSection industryId={industry.id} locale={locale} />
      <SolutionApplicationsSection industry={industry} locale={locale} />
      <SolutionFaqSection industry={industry} locale={locale} />
      <SolutionContactBand locale={locale} />
    </>
  );
}
