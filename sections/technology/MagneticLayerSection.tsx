import Image from "next/image";
import LearnMoreLink from "@/components/LearnMoreLink";
import SectionEyebrow from "@/components/SectionEyebrow";
import type { Locale } from "@/lib/i18n/config";
import { getWirelessEnergyPlatformPage } from "@/lib/i18n/content";
import { getWirelessEnergyTopicHref } from "@/lib/wireless-energy-platform-topics";

export default function MagneticLayerSection({ locale }: { locale: Locale }) {
  const content = getWirelessEnergyPlatformPage(locale).magneticLayer;

  return (
    <section id="magnetic" className="border-t border-slate-200/70" aria-labelledby="magnetic-heading">
      {/* Section directory label + contained dark hero (no side black bleed) */}
      <div className="bg-white pt-10 pb-2 lg:pt-12">
        <div className="container-page">
          <SectionEyebrow>{content.eyebrow}</SectionEyebrow>

          <div className="relative mt-6 overflow-hidden bg-[#071225]">
            <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="relative grid items-center gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:px-12 lg:py-16">
              <div>
                <h2
                  id="magnetic-heading"
                  className="font-display max-w-xl text-[28px] font-black leading-[1.1] tracking-[-0.04em] text-white md:text-[40px]"
                >
                  {content.title}
                </h2>
                <p className="mt-4 max-w-lg text-lg font-semibold leading-8 text-slate-100">
                  {content.subtitle}
                </p>
                <p className="mt-5 max-w-lg text-base leading-8 text-slate-300">{content.description}</p>
              </div>

              <div className="relative aspect-[5/3] w-full overflow-hidden">
                <Image
                  src={content.heroImage}
                  alt="Transmitter and receiver coils with magnetic flux path"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Five pillars */}
      <div className="bg-white py-14 lg:py-20">
        <div className="container-page">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.capabilitiesEyebrow}
            </p>
            <h3 className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl">
              {content.capabilitiesTitle}
            </h3>
            <div className="mx-auto mt-4 h-1 w-12 bg-[#0B5FFF]" aria-hidden="true" />
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-5 xl:gap-5">
            {content.pillars.map((pillar) => (
              <article
                key={pillar.id}
                id={`magnetic-${pillar.id}`}
                className="flex flex-col border border-slate-200/80 bg-white p-4"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F8FAFC]">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
                    quality={100}
                  />
                </div>

                <p className="mt-5 font-display text-sm font-bold tabular-nums text-[#38BDF8]">
                  {pillar.number}
                </p>
                <h4 className="font-display mt-2 text-base font-extrabold tracking-[-0.02em] text-[#0B0F19]">
                  {pillar.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">{pillar.description}</p>
                <LearnMoreLink href={getWirelessEnergyTopicHref(pillar.id, locale)} locale={locale} />

                <ul className="mt-4 space-y-1.5">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-6 text-slate-600">
                      <span
                        className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#0B5FFF]"
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
