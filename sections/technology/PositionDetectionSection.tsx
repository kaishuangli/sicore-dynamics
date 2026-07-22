import Image from "next/image";
import LearnMoreLink from "@/components/LearnMoreLink";
import SectionEyebrow from "@/components/SectionEyebrow";
import TechIcon from "@/components/TechIcon";
import type { Locale } from "@/lib/i18n/config";
import { getPlugFreeDockingPage } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { getPlugFreeTopicHref } from "@/lib/plug-free-docking-topics";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-6 text-slate-700 md:text-[15px]">
          <span
            className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B5FFF]"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PositionDetectionSection({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const content = getPlugFreeDockingPage(locale).positionDetection;

  return (
    <section
      id={content.id}
      className="border-t border-slate-200/70"
      aria-labelledby="position-detection-heading"
    >
      <div className="bg-white pt-10 lg:pt-12">
        <div className="container-page">
          <SectionEyebrow>{content.eyebrow}</SectionEyebrow>

          <div className="relative mt-6 overflow-hidden bg-[#071225]">
            <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
            <div className="relative grid items-center gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:px-12 lg:py-14">
              <div>
                <p className="font-display text-3xl font-black tabular-nums text-[#38BDF8] md:text-4xl">
                  {content.number}
                </p>
                <h2
                  id="position-detection-heading"
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
                      <span>
                        <span className="block text-xs font-bold text-white">{item.label}</span>
                        <span className="mt-1 block text-[11px] leading-4 text-slate-400">{item.text}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a1a33]">
                <Image
                  src={content.heroImage}
                  alt="Position detection guiding autonomous docking alignment"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={92}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F8FAFC] pb-16 pt-14 lg:pb-20 lg:pt-16">
        <div className="container-page">
          <header className="max-w-3xl">
            <p className="font-display text-xl font-extrabold tracking-[-0.02em] text-[#0B5FFF] md:text-2xl">
              {content.methodsEyebrow}
            </p>
            <h3 className="font-display mt-2 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl">
              {content.methodsTitle}
            </h3>
          </header>

          <div className="mt-12 space-y-8">
            {content.methods.map((method) => {
              if ("layout" in method && method.layout === "stacked") {
                return (
                  <article
                    key={method.id}
                    id={method.id}
                    className="border border-slate-200 bg-white px-5 py-7 md:px-8 md:py-9"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <p className="font-display text-5xl font-black tabular-nums leading-none text-[#0B5FFF] md:text-6xl">
                        {method.number}
                      </p>
                      <h4 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-[#0B0F19] md:text-3xl">
                        {method.title}
                      </h4>
                    </div>

                    <div
                      className={`mt-7 grid grid-cols-1 gap-3 md:gap-4 ${
                        method.gallery.length >= 3
                          ? "sm:grid-cols-3"
                          : method.gallery.length === 2
                            ? "sm:grid-cols-2"
                            : "md:grid-cols-[1.55fr_1fr]"
                      }`}
                    >
                      {method.gallery.map((image) => (
                        <div
                          key={image.src}
                          className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-white"
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover object-center"
                            sizes={
                              method.gallery.length >= 3
                                ? "(max-width: 640px) 100vw, 33vw"
                                : "(max-width: 768px) 100vw, 50vw"
                            }
                            quality={95}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 max-w-3xl">
                      <h5 className="font-display text-lg font-extrabold tracking-[-0.02em] text-[#0B0F19] md:text-xl">
                        {method.whatIsTitle}
                      </h5>
                      <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                        {method.description}
                      </p>
                    </div>

                    <div className="mt-8 max-w-3xl">
                      <h5 className="font-display text-lg font-extrabold tracking-[-0.02em] text-[#0B0F19] md:text-xl">
                        {method.advantagesLabel}
                      </h5>
                      <BulletList items={method.advantages} />
                    </div>

                    <div className="mt-8 max-w-3xl">
                      <h5 className="font-display text-lg font-extrabold tracking-[-0.02em] text-[#0B0F19] md:text-xl">
                        {method.applicationsLabel}
                      </h5>
                      <BulletList items={method.applications} />
                    </div>

                    <LearnMoreLink href={getPlugFreeTopicHref(method.id, locale)} locale={locale} />
                  </article>
                );
              }

              if (!("technologies" in method)) return null;

              return (
                <article
                  key={method.id}
                  id={method.id}
                  className="border border-slate-200 bg-white px-5 py-7 md:px-8 md:py-9"
                >
                  <div className="grid gap-4 lg:grid-cols-[120px_1fr] lg:items-start lg:gap-8">
                    <p className="font-display text-5xl font-black tabular-nums leading-none text-[#0B5FFF] md:text-6xl">
                      {method.number}
                    </p>
                    <div>
                      <h4 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-[#0B0F19] md:text-3xl">
                        {method.title}
                      </h4>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                        {method.description}
                      </p>
                      {"descriptionSecondary" in method && method.descriptionSecondary ? (
                        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                          {method.descriptionSecondary}
                        </p>
                      ) : null}
                      <LearnMoreLink href={getPlugFreeTopicHref(method.id, locale)} locale={locale} />
                    </div>
                  </div>

                  {"image" in method && method.image ? (
                    <div className="relative mt-7 aspect-[16/9] w-full overflow-hidden bg-[#0B1220] md:aspect-[21/9]">
                      <Image
                        src={method.image}
                        alt={method.imageAlt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 1100px"
                        quality={92}
                      />
                    </div>
                  ) : null}

                  <div className="mt-7 grid gap-6 border-t border-slate-200/80 pt-7 lg:grid-cols-[1.2fr_0.9fr] lg:gap-10">
                    <div>
                      <p className="text-sm font-bold text-[#0B5FFF]">{method.technologiesLabel}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {method.technologies.map((item) => (
                          <li
                            key={item}
                            className="border border-slate-200 bg-[#F8FAFC] px-3 py-2 text-xs font-semibold text-slate-700 md:text-sm"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#EFF6FF] px-5 py-5 md:px-6">
                      <p className="text-sm font-bold text-[#0B5FFF]">
                        {t("关键优势", "Ventajas clave", "Key Benefits")}
                      </p>
                      <BulletList items={method.benefits} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
