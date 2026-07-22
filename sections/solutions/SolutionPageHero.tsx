import Link from "next/link";
import SolutionHeroImage from "@/components/SolutionHeroImage";
import SolutionHeroVideo from "@/components/SolutionHeroVideo";
import SolutionIntroBand from "@/sections/solutions/SolutionIntroBand";
import { getIndustryHeroVideo, getIndustryPageHeading } from "@/lib/industries";
import { getSolutionLayoutConfig } from "@/lib/solution-layout";
import type { Locale } from "@/lib/i18n/config";
import { uiLabel } from "@/lib/i18n/pick-locale";
import type { LocalizedIndustry } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";

export default function SolutionPageHero({
  industry,
  locale,
}: {
  industry: LocalizedIndustry;
  locale: Locale;
}) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const heading = getIndustryPageHeading(industry);
  const heroVideo = getIndustryHeroVideo(industry);
  const layout = getSolutionLayoutConfig(industry.id);
  const useHeroImage = layout.heroMedia === "image";
  const heroImageSrc = layout.heroImage ?? industry.image;
  const fullBleedImage = useHeroImage && layout.heroImageFullBleed;

  if (layout.bodyOwnsHero) {
    return null;
  }

  return (
    <section className="bg-white pb-16 pt-10 lg:pb-24 lg:pt-14" aria-labelledby="solution-page-heading">
      <div className="container-page">
        <nav className="text-xs text-slate-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href={withLocale("/", locale)} className="transition hover:text-[#0B0F19]">
                {t("首页", "Inicio", "Home")}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span>{t("行业解决方案", "Soluciones industriales", "Industrial Solutions")}</span>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-[#0B0F19]">{industry.title}</li>
          </ol>
        </nav>

        <div className="solution-abb-accent mt-8" aria-hidden="true" />

        <h1
          id="solution-page-heading"
          className="solution-page-title font-display mt-6 max-w-4xl text-[36px] font-black leading-[1.08] tracking-[-0.03em] text-[#0B0F19] md:text-[48px] lg:text-[56px]"
        >
          {heading}
        </h1>

        {!fullBleedImage ? (
          <div className="mt-10 lg:mt-12">
            {useHeroImage ? (
              <SolutionHeroImage
                src={heroImageSrc}
                alt={industry.alt}
                wide={layout.wideHeroMedia}
                contain={layout.heroImageContain}
                aspect={layout.heroAspect}
              />
            ) : (
              <SolutionHeroVideo
                src={heroVideo}
                poster={industry.image}
                title={industry.alt}
                wide={layout.wideHeroMedia}
              />
            )}
          </div>
        ) : null}

        {!fullBleedImage ? <SolutionIntroBand industry={industry} /> : null}
      </div>

      {fullBleedImage ? (
        <>
          <SolutionHeroImage
            src={heroImageSrc}
            alt={industry.alt}
            fullBleed
            contain={layout.heroImageContain}
            aspect={layout.heroAspect}
          />
          <div className="container-page">
            <SolutionIntroBand industry={industry} />
          </div>
        </>
      ) : null}
    </section>
  );
}
