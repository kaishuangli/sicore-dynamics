import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import { oemManufacturingPage as content } from "@/lib/oem-manufacturing";

export default function OemManufacturingPanel({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="oem-mfg-heading">
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
              <li className="font-semibold text-white">{dict.navOem.manufacturing}</li>
            </ol>
          </nav>

          <div className="mt-10 max-w-3xl animate-fade-up">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300/90">
              {content.eyebrow}
            </p>
            <h1
              id="oem-mfg-heading"
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
          </div>
        </div>
      </section>

      {/* What we manufacture */}
      <section
        className="border-b border-slate-200/70 bg-white py-16 lg:py-20"
        aria-labelledby="oem-mfg-products-heading"
      >
        <div className="container-page">
          <header className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.products.eyebrow}
            </p>
            <h2
              id="oem-mfg-products-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
            >
              {content.products.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{content.products.lead}</p>
          </header>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {content.products.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 border border-slate-200 bg-[#F8FAFC] px-4 py-4 text-sm font-semibold text-slate-800"
              >
                <span className="text-[#0B5FFF]" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Factory flowchart */}
      <section
        className="border-b border-slate-200/70 bg-[#F8FAFC] py-16 lg:py-20"
        aria-labelledby="oem-mfg-flow-heading"
      >
        <div className="container-page">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.flow.eyebrow}
            </p>
            <h2
              id="oem-mfg-flow-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
            >
              {content.flow.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">{content.flow.lead}</p>
          </header>

          <ol className="mx-auto mt-12 flex max-w-xl flex-col items-center">
            {content.flow.nodes.map((node, index) => {
              const isFirst = index === 0;
              const isLast = index === content.flow.nodes.length - 1;

              return (
                <li key={node} className="flex w-full flex-col items-center">
                  <div
                    className={`w-full max-w-sm border px-5 py-3.5 text-center ${
                      isFirst || isLast
                        ? "border-[#0B5FFF] bg-[#0B5FFF] text-white"
                        : "border-slate-200 bg-white text-[#0B0F19]"
                    }`}
                  >
                    <p className="font-display text-sm font-extrabold tracking-[-0.02em] md:text-base">
                      {node}
                    </p>
                  </div>
                  {!isLast ? (
                    <div className="flex flex-col items-center py-1" aria-hidden="true">
                      <span className="h-4 w-px bg-slate-300" />
                      <span className="text-slate-400">▼</span>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Seven modules */}
      <section
        className="border-b border-slate-200/70 bg-white py-16 lg:py-24"
        aria-labelledby="oem-mfg-modules-heading"
      >
        <div className="container-page">
          <header className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.modules.eyebrow}
            </p>
            <h2
              id="oem-mfg-modules-heading"
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
                className="scroll-mt-[190px] border border-slate-200 bg-[#F8FAFC] p-6 md:p-8"
              >
                <p className="font-display text-xs font-bold tabular-nums text-[#0B5FFF]">
                  {module.number}
                </p>
                <h3 className="font-display mt-2 text-2xl font-extrabold tracking-[-0.03em] text-[#0B0F19] md:text-3xl">
                  {module.title}
                </h3>
                <p className="mt-3 text-base font-semibold text-slate-800">{module.headline}</p>
                <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">{module.intro}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {module.topics.map((topic) => (
                    <li
                      key={topic}
                      className="border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 md:text-sm"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        className="border-b border-slate-200/70 bg-[#F8FAFC] py-16 lg:py-24"
        aria-labelledby="oem-mfg-capabilities-heading"
      >
        <div className="container-page">
          <header className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.capabilities.eyebrow}
            </p>
            <h2
              id="oem-mfg-capabilities-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
            >
              {content.capabilities.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              {content.capabilities.lead}
            </p>
          </header>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.capabilities.columns.map((column) => (
              <div key={column.title} className="border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-extrabold text-[#0B0F19]">{column.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {column.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-6 text-slate-700">
                      <span
                        className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B5FFF]"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071225] py-16 text-white lg:py-20" aria-labelledby="oem-mfg-close">
        <div className="container-page max-w-3xl">
          <h2
            id="oem-mfg-close"
            className="font-display text-2xl font-black tracking-[-0.03em] md:text-4xl"
          >
            {content.close.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{content.close.body}</p>
          <Link href={L(content.close.cta.href)} className="btn-primary mt-10 inline-flex">
            {t("开始制造合作洽谈", "Iniciar conversación de manufactura", content.close.cta.label)}{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
