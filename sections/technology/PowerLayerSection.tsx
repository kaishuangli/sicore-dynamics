import Image from "next/image";
import LearnMoreLink from "@/components/LearnMoreLink";
import SectionEyebrow from "@/components/SectionEyebrow";
import TechIcon from "@/components/TechIcon";
import type { Locale } from "@/lib/i18n/config";
import { getWirelessEnergyPlatformPage } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { getWirelessEnergyTopicHref } from "@/lib/wireless-energy-platform-topics";

export default function PowerLayerSection({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const content = getWirelessEnergyPlatformPage(locale).powerLayer;

  return (
    <section id="power" className="border-t border-slate-200/70" aria-labelledby="power-heading">
      {/* Directory label + contained dark hero */}
      <div className="bg-white pt-10 pb-2 lg:pt-12">
        <div className="container-page">
          <SectionEyebrow>{content.eyebrow}</SectionEyebrow>

          <div className="relative mt-6 overflow-hidden bg-[#071225]">
            <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="relative grid items-center gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10 lg:px-12 lg:py-14">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300/90">
                  {content.heroLabel}
                </p>
                <h2
                  id="power-heading"
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

              <div className="relative aspect-[2/1] w-full overflow-hidden">
                <Image
                  src={content.heroImage}
                  alt="Power conversion architecture from DC input through wireless transfer to battery"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module rows — compact title + image + detail + tech */}
      <div className="bg-[#F8FAFC] py-12 lg:py-16">
        <div className="container-page space-y-4">
          {content.modules.map((module) => (
            <article
              key={module.id}
              id={`power-${module.id}`}
              className="border border-slate-200/80 bg-white px-4 py-4 md:px-5 md:py-5"
            >
              <div className="grid gap-5 lg:grid-cols-[200px_0.9fr_1.2fr_0.75fr] lg:items-center lg:gap-6">
                <div className="border border-slate-200/80 bg-[#F8FAFC] px-4 py-4">
                  <p className="font-display text-3xl font-black tabular-nums text-[#0B5FFF] md:text-4xl">
                    {module.number}
                  </p>
                  <h3 className="font-display mt-2 text-xl font-extrabold tracking-[-0.02em] text-[#0B0F19] md:text-2xl">
                    {module.title}
                  </h3>
                </div>

                <div className="relative aspect-[5/3] w-full overflow-hidden bg-[#0B1220]">
                  <Image
                    src={module.image}
                    alt={module.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 22vw"
                    quality={100}
                  />
                </div>

                <div>
                  <p className="text-sm leading-7 text-slate-600 lg:text-[15px] lg:leading-8">
                    {module.detail}
                  </p>
                  <LearnMoreLink href={getWirelessEnergyTopicHref(module.id, locale)} locale={locale} />
                </div>

                <div className="border-t border-slate-200 pt-3 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">
                    {t("核心技术", "Tecnologías principales", "Core Technologies")}
                  </p>
                  <ul className="mt-2.5 space-y-1.5">
                    {module.checks.map((check) => (
                      <li key={check} className="flex gap-2 text-sm leading-6 text-slate-700">
                        <span
                          className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B5FFF]"
                          aria-hidden="true"
                        />
                        <span>{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
