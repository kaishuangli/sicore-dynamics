import Image from "next/image";
import LearnMoreLink from "@/components/LearnMoreLink";
import SectionEyebrow from "@/components/SectionEyebrow";
import TechIcon from "@/components/TechIcon";
import type { Locale } from "@/lib/i18n/config";
import { getWirelessEnergyPlatformPage } from "@/lib/i18n/content";
import { getWirelessEnergyTopicHref } from "@/lib/wireless-energy-platform-topics";
import ControlFeatureVisual from "@/sections/technology/ControlFeatureVisual";

export default function ControlLayerSection({ locale }: { locale: Locale }) {
  const content = getWirelessEnergyPlatformPage(locale).controlLayer;

  return (
    <section id="control" className="border-t border-slate-200/70" aria-labelledby="control-heading">
      <div className="bg-white pt-10 pb-2 lg:pt-12">
        <div className="container-page">
          <SectionEyebrow>{content.eyebrow}</SectionEyebrow>

          <div className="relative mt-6 overflow-hidden bg-[#071225]">
            <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="relative grid items-center gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10 lg:px-12 lg:py-14">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300/90">
                  {content.heroLabel}
                </p>
                <h2
                  id="control-heading"
                  className="font-display mt-3 max-w-xl text-[26px] font-black leading-[1.12] tracking-[-0.04em] text-white md:text-[34px]"
                >
                  {content.title}
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                  {content.description}
                </p>

                <ul className="mt-8 grid grid-cols-2 gap-4">
                  {content.highlights.map((item) => (
                    <li key={item.label} className="flex items-start gap-2.5">
                      <TechIcon type={item.icon} className="h-7 w-7 shrink-0" />
                      <span className="text-xs font-semibold leading-snug text-slate-200">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src={content.heroImage}
                  alt="Intelligent control architecture with TX driver, RX system, and MCU"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F8FAFC] py-12 lg:py-16">
        <div className="container-page">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.featuresEyebrow}
            </p>
            <h3 className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl">
              {content.featuresTitle}
            </h3>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {content.features.map((feature) => (
              <article
                key={feature.id}
                id={`control-${feature.id}`}
                className="flex flex-col border border-slate-200/80 bg-white p-4"
              >
                <div className="border border-slate-200/80 bg-[#F8FAFC] px-3 py-3">
                  <p className="font-display text-3xl font-black tabular-nums text-[#0B5FFF] md:text-4xl">
                    {feature.number}
                  </p>
                  <h4 className="font-display mt-1.5 text-lg font-extrabold tracking-[-0.02em] text-[#0B0F19] md:text-xl">
                    {feature.title}
                  </h4>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
                <LearnMoreLink href={getWirelessEnergyTopicHref(feature.id, locale)} locale={locale} />

                <div className="mt-4 aspect-[16/10] w-full overflow-hidden">
                  <ControlFeatureVisual type={feature.visual} />
                </div>

                <ul className="mt-4 space-y-1.5">
                  {feature.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-6 text-slate-700">
                      <span
                        className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B5FFF]"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
