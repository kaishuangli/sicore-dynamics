import Image from "next/image";
import LearnMoreLink from "@/components/LearnMoreLink";
import SectionEyebrow from "@/components/SectionEyebrow";
import type { Locale } from "@/lib/i18n/config";
import { getPlugFreeDockingPage } from "@/lib/i18n/content";
import { getPlugFreeTopicHref } from "@/lib/plug-free-docking-topics";

export default function OutdoorReliabilitySection({ locale }: { locale: Locale }) {
  const content = getPlugFreeDockingPage(locale).outdoorReliability;

  return (
    <section
      id={content.id}
      className="border-t border-slate-200/70"
      aria-labelledby="outdoor-reliability-heading"
    >
      <div className="bg-white pt-10 lg:pt-12">
        <div className="container-page">
          <SectionEyebrow>{content.eyebrow}</SectionEyebrow>

          <div className="mt-6 max-w-3xl">
            <p className="font-display text-3xl font-black tabular-nums text-[#0B5FFF] md:text-4xl">
              {content.number}
            </p>
            <h2
              id="outdoor-reliability-heading"
              className="font-display mt-3 text-[26px] font-black leading-[1.12] tracking-[-0.04em] text-[#0B0F19] md:text-[34px]"
            >
              {content.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
              {content.description}
            </p>
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
            {content.methods.map((method) => (
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

                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                  {method.gallery.map((image) => (
                    <div
                      key={image.src}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-[#F8FAFC]"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, 33vw"
                        quality={95}
                      />
                    </div>
                  ))}
                </div>

                <p className="mt-7 max-w-3xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                  {method.description}
                </p>
                <LearnMoreLink href={getPlugFreeTopicHref(method.id, locale)} locale={locale} />

                <div className="mt-8 max-w-3xl">
                  <p className="text-sm font-bold text-[#0B5FFF]">{method.technologiesLabel}</p>
                  <ul className="mt-4 space-y-2.5">
                    {method.technologies.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm leading-6 text-slate-700 md:text-[15px]"
                      >
                        <span
                          className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B5FFF]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
