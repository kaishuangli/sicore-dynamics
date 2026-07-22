import Image from "next/image";
import LearnMoreLink from "@/components/LearnMoreLink";
import SectionEyebrow from "@/components/SectionEyebrow";
import TechIcon from "@/components/TechIcon";
import type { Locale } from "@/lib/i18n/config";
import { getWirelessEnergyPlatformPage } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { getWirelessEnergyTopicHref } from "@/lib/wireless-energy-platform-topics";

export default function PhysicsLayerSection({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const content = getWirelessEnergyPlatformPage(locale).physicsLayer;

  return (
    <section id="physics" className="border-t border-slate-200/70 bg-white" aria-labelledby="physics-heading">
      {/* Hero — full composition image */}
      <div className="border-b border-slate-200/70 bg-white">
        <div className="container-page pt-10 lg:pt-12">
          <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
          <h2 id="physics-heading" className="sr-only">
            {content.title}
          </h2>
        </div>
        <div className="mt-4 w-full bg-white pb-6 md:pb-8">
          <Image
            src={content.heroImage}
            alt={`${content.title}. ${content.description}`}
            width={1024}
            height={561}
            className="mx-auto h-auto w-full max-w-6xl"
            sizes="(max-width: 1152px) 100vw, 1152px"
            quality={100}
            priority
          />
        </div>
      </div>

      {/* Five mechanisms — stacked vertically, one by one */}
      <div className="container-page py-14 lg:py-20">
        <h3 className="font-display max-w-3xl text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl">
          {content.mechanismsTitle}
        </h3>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{content.mechanismsIntro}</p>
      </div>

      {content.mechanisms.map((mechanism, index) => (
        <article
          key={mechanism.id}
          id={mechanism.id}
          className={`border-t border-slate-200/70 py-14 lg:py-20 ${
            index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
          }`}
        >
          <div className="container-page">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#0B5FFF] text-xs font-bold text-white">
                {mechanism.number}
              </span>
              <h4 className="font-display text-xl font-extrabold tracking-[-0.03em] text-[#0B0F19] md:text-2xl">
                {mechanism.title}
              </h4>
            </div>

            <div className="mt-8 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                <Image
                  src={mechanism.image}
                  alt={mechanism.title}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={100}
                />
              </div>

              <div>
                <p className="text-base leading-8 text-slate-600">{mechanism.description}</p>
                <LearnMoreLink href={getWirelessEnergyTopicHref(mechanism.id, locale)} locale={locale} />

                <div className="mt-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">
                    {t("典型应用", "Aplicaciones típicas", "Typical Applications")}
                  </p>
                  <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {mechanism.applications.map((app) => (
                      <li key={app.label} className="flex flex-col items-start gap-2">
                        <TechIcon type={app.icon} className="h-8 w-8" />
                        <span className="text-xs font-semibold leading-tight text-slate-700">
                          {app.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">
                    {t("关键研究方向", "Áreas clave de investigación", "Key Research Areas")}
                  </p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {mechanism.research.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600">
                        <span
                          className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#0B5FFF]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {"deepDive" in mechanism && mechanism.deepDive ? (
              <div className="mt-14 border-t border-slate-200 pt-12">
                <h5 className="font-display text-xl font-extrabold tracking-[-0.03em] text-[#0B0F19] md:text-2xl">
                  {mechanism.deepDive.title}
                </h5>
                <div className="mt-5 max-w-3xl space-y-4">
                  {mechanism.deepDive.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="text-base leading-8 text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-10 space-y-12">
                  {mechanism.deepDive.images.map((image) => (
                    <figure key={image.src} className="mx-auto w-full max-w-4xl">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1024}
                        height={600}
                        className="h-auto w-full"
                        sizes="(max-width: 896px) 100vw, 896px"
                        quality={100}
                      />
                      {"figureExplanation" in image && image.figureExplanation ? (
                        <figcaption className="mt-8">
                          <p className="font-display text-base font-extrabold tracking-[-0.02em] text-[#0B0F19]">
                            {image.figureExplanation.title}
                          </p>
                          <div className="mt-5 space-y-5">
                            {image.figureExplanation.items.map((item) => (
                              <div key={item.label}>
                                <p className="text-sm font-bold text-[#0B5FFF]">{item.label}</p>
                                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                              </div>
                            ))}
                          </div>
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </section>
  );
}
