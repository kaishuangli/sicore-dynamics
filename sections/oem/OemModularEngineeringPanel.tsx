import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import { oemModularEngineeringPage as content } from "@/lib/oem-modular-engineering";

export default function OemModularEngineeringPanel({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="oem-modular-heading">
        <div className="absolute inset-0">
          <Image
            src={content.heroImage}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={95}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071225]/96 via-[#071225]/84 to-[#071225]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/75 via-transparent to-[#071225]/30" />
        </div>

        <div className="container-page relative pb-16 pt-10 lg:pb-24 lg:pt-14">
          <nav className="text-xs text-white/70" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={L("/")} className="transition hover:text-white">
                  {t("首页", "Inicio", "Home")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={L("/oem/why-sicore")} className="transition hover:text-white">
                  {dict.nav.oem}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-white">
                {dict.navOem["design-services"]}
              </li>
            </ol>
          </nav>

          <div className="mt-10 max-w-3xl animate-fade-up">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300/90">
              {content.eyebrow}
            </p>
            <h1
              id="oem-modular-heading"
              className="font-display mt-4 text-[34px] font-black leading-[1.06] tracking-[-0.04em] text-white md:text-[48px] lg:text-[52px]"
            >
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-100 md:text-xl">
              {content.subtitle}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              {content.description}
            </p>
            <p className="mt-8 max-w-2xl border-l-2 border-[#0B5FFF] pl-4 text-base font-semibold leading-8 text-[#86efac] md:text-lg">
              {content.slogan}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section
        className="border-b border-slate-200/70 bg-white py-14 lg:py-16"
        aria-labelledby="oem-modular-intro-heading"
      >
        <div className="container-page max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
            {content.intro.eyebrow}
          </p>
          <h2
            id="oem-modular-intro-heading"
            className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
          >
            {content.intro.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{content.intro.lead}</p>
        </div>
      </section>

      {/* Building-block map */}
      <section
        className="border-b border-slate-200/70 bg-[#F8FAFC] py-16 lg:py-20"
        aria-labelledby="oem-modular-diagram-heading"
      >
        <div className="container-page">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.diagram.eyebrow}
            </p>
            <h2
              id="oem-modular-diagram-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
            >
              {content.diagram.title}
            </h2>
          </header>

          <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center">
            <div className="w-full max-w-md border border-[#0B5FFF] bg-[#0B5FFF] px-5 py-4 text-center text-white">
              <p className="font-display text-base font-extrabold md:text-lg">{content.diagram.top}</p>
            </div>

            <div className="flex flex-col items-center py-2" aria-hidden="true">
              <span className="h-5 w-px bg-slate-300" />
              <span className="text-slate-400">▼</span>
            </div>

            <p className="mb-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-slate-500">
              {content.diagram.middle}
            </p>

            <p className="mb-5 text-center font-display text-sm font-extrabold text-[#0B5FFF] md:text-base">
              {content.diagram.completeLabel}
            </p>

            <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
              {content.modules.items.map((module) => (
                <a
                  key={module.id}
                  href={`#${module.id}`}
                  className="group flex min-h-[88px] flex-col justify-between border border-slate-200 bg-white p-4 transition hover:border-[#0B5FFF] hover:shadow-[0_10px_30px_rgba(11,95,255,0.08)]"
                >
                  <p className="font-display text-[11px] font-bold tabular-nums text-[#0B5FFF]">
                    {module.number}
                  </p>
                  <p className="font-display mt-2 text-sm font-extrabold leading-snug text-[#0B0F19] transition group-hover:text-[#0B5FFF]">
                    {module.shortLabel}
                  </p>
                </a>
              ))}
            </div>

            <div className="flex flex-col items-center py-2" aria-hidden="true">
              <span className="h-5 w-px bg-slate-300" />
              <span className="text-slate-400">▼</span>
            </div>

            <div className="w-full max-w-md border border-[#0B5FFF] bg-[#0B5FFF] px-5 py-4 text-center text-white">
              <p className="font-display text-base font-extrabold md:text-lg">{content.diagram.bottom}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Module details */}
      <section
        className="border-b border-slate-200/70 bg-white py-16 lg:py-24"
        aria-labelledby="oem-modules-heading"
      >
        <div className="container-page">
          <header className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.modules.eyebrow}
            </p>
            <h2
              id="oem-modules-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
            >
              {content.modules.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{content.modules.lead}</p>
          </header>

          <div className="mt-14 space-y-6">
            {content.modules.items.map((module) => (
              <article
                key={module.id}
                id={module.id}
                className="scroll-mt-[190px] border border-slate-200 bg-[#F8FAFC] p-6 md:p-8 lg:p-10"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-xs font-bold tabular-nums text-[#0B5FFF]">
                      Module {module.number}
                    </p>
                    <h3 className="font-display mt-2 text-2xl font-extrabold tracking-[-0.03em] text-[#0B0F19] md:text-3xl">
                      {module.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-base font-semibold text-slate-800">
                      {module.headline}
                    </p>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                      {module.note}
                    </p>
                  </div>
                  <p className="shrink-0 border border-[#0B5FFF]/25 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#0B5FFF]">
                    {module.standalone}
                  </p>
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
                      Includes
                    </p>
                    <ul className="mt-4 space-y-2">
                      {module.topics.map((topic) => (
                        <li key={topic} className="flex gap-2.5 text-sm leading-6 text-slate-700">
                          <span
                            className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B5FFF]"
                            aria-hidden="true"
                          />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-slate-200 bg-white p-5 md:p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
                      Deliverables
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {module.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 border-b border-slate-100 pb-2.5 text-sm font-semibold text-slate-800 last:border-b-0 last:pb-0"
                        >
                          <span className="text-[#0B5FFF]" aria-hidden="true">
                            ✔
                          </span>
                          {item}
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

      {/* Engagement models */}
      <section
        className="border-b border-slate-200/70 bg-[#F8FAFC] py-16 lg:py-24"
        aria-labelledby="oem-models-heading"
      >
        <div className="container-page">
          <header className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.models.eyebrow}
            </p>
            <h2
              id="oem-models-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
            >
              {content.models.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{content.models.lead}</p>
          </header>

          <ol className="mt-12 grid gap-5 md:grid-cols-2">
            {content.models.items.map((model) => (
              <li key={model.title} className="border border-slate-200 bg-white p-6 md:p-7">
                <p className="font-display text-xs font-bold tabular-nums text-[#0B5FFF]">
                  Option {model.number}
                </p>
                <h3 className="font-display mt-3 text-xl font-extrabold text-[#0B0F19]">
                  {model.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{model.text}</p>
                <p className="mt-4 text-sm font-semibold text-slate-800">{model.example}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071225] py-16 text-white lg:py-20" aria-labelledby="oem-modular-close">
        <div className="container-page max-w-3xl">
          <h2
            id="oem-modular-close"
            className="font-display text-2xl font-black tracking-[-0.03em] md:text-4xl"
          >
            {content.close.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{content.close.body}</p>
          <Link href={L(content.close.cta.href)} className="btn-primary mt-10 inline-flex">
            {t("讨论设计服务", "Hablar sobre Design Service", content.close.cta.label)}{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
