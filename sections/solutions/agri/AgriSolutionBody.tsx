import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getAgriculturalAutomationBundle, type LocalizedIndustry } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import AgriApplications from "@/sections/solutions/agri/AgriApplications";

const accent = "#2F6B3A";

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
      <path
        d="M4 10.5 8 14.5 16 5.5"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AgriSolutionBody({
  industry: _industry,
  locale,
}: {
  industry: LocalizedIndustry;
  locale: Locale;
}) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);
  const { agriculturalAutomation: agri } = getAgriculturalAutomationBundle(locale);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#132015]" aria-labelledby="agri-hero-heading">
        <div className="relative aspect-[21/9] min-h-[320px] w-full sm:min-h-[380px] lg:min-h-[460px]">
          <Image
            src={agri.hero.image}
            alt={agri.hero.imageAlt}
            fill
            priority
            className="object-cover object-[center_45%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
          <div className="container-page relative flex h-full min-h-[320px] flex-col justify-center py-12 sm:min-h-[380px] lg:min-h-[460px] lg:py-16">
            <nav className="mb-8 text-xs text-white/75" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href={L("/")} className="transition hover:text-white">
                    {t("首页", "Inicio", "Home")}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>{t("应用场景", "Applications", "Applications")}</li>
                <li aria-hidden="true">/</li>
                <li className="font-semibold text-white">
                  {t("农业自动化", "Automatización agrícola", "Agricultural Automation")}
                </li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <h1
                id="agri-hero-heading"
                className="font-display text-3xl font-black leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-[52px]"
              >
                {agri.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/90 sm:text-base md:text-lg">
                {agri.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#agri-solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
                  style={{ backgroundColor: accent }}
                >
                  {t("探索解决方案", "Explorar soluciones", "Explore Solutions")} <span aria-hidden="true">→</span>
                </a>
                <Link
                  href={L("/contact")}
                  className="inline-flex items-center justify-center rounded-sm border border-white/80 bg-transparent px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  {t("联系我们的工程师", "Hable con nuestros ingenieros", "Talk to Our Engineers")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Autonomous Charging Matters */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="agri-why-heading">
        <div className="container-page">
          <h2
            id="agri-why-heading"
            className="font-display text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[32px]"
          >
            {agri.whyTitle}
          </h2>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#F3F6F2]">
              <Image
                src={agri.whyImage}
                alt={agri.whyImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {agri.whyPoints.map((point) => (
                <article key={point.title}>
                  <div
                    className="mb-3 h-9 w-9 rounded-sm border"
                    style={{ borderColor: `${accent}55`, backgroundColor: `${accent}12` }}
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-base font-bold text-[#0B0F19]">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#3a3a3a]">{point.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="border-y border-slate-200 bg-[#F7FAF6] py-14 lg:py-20" aria-labelledby="agri-eco-heading">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <h2
                id="agri-eco-heading"
                className="font-display text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[32px]"
              >
                {agri.ecosystemTitle}
              </h2>
              <p className="mt-5 text-base leading-7 text-[#3a3a3a]">{agri.ecosystemCopy}</p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-slate-200 bg-white">
              <Image
                src={agri.ecosystemImage}
                alt={agri.ecosystemImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      <AgriApplications locale={locale} />

      {/* Process */}
      <section className="border-y border-slate-200 bg-[#F7FAF6] py-14 lg:py-20" aria-labelledby="agri-process-heading">
        <div className="container-page">
          <h2
            id="agri-process-heading"
            className="font-display text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[32px]"
          >
            {agri.processTitle}
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {agri.processSteps.map((step, index) => (
              <li key={step.label} className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: accent }}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="font-display mt-3 text-base font-bold text-[#0B0F19]">{step.label}</p>
                <p className="mt-2 text-sm leading-6 text-[#3a3a3a]">{step.detail}</p>
                {index < agri.processSteps.length - 1 ? (
                  <span
                    className="absolute -right-2 top-8 hidden text-lg font-bold lg:inline"
                    style={{ color: accent }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Farm Charging Solutions */}
      <section id="agri-solutions" className="bg-white py-14 lg:py-20" aria-labelledby="agri-solutions-heading">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2
              id="agri-solutions-heading"
              className="font-display text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[32px]"
            >
              {agri.solutionsTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#3a3a3a]">{agri.solutionsIntro}</p>
          </div>

          <div className="mt-12 space-y-8">
            {agri.solutions.map((solution, index) => (
              <article
                key={solution.title}
                className="border-t border-slate-200 pt-8 lg:pt-10"
              >
                <div className="relative aspect-[21/9] min-h-[220px] overflow-hidden bg-[#F3F6F2] sm:min-h-[280px] lg:min-h-[360px]">
                  <Image
                    src={solution.image}
                    alt={solution.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                </div>
                <div className="mt-6 max-w-3xl">
                  <p
                    className="text-xs font-bold uppercase tracking-[0.14em]"
                    style={{ color: accent }}
                  >
                    {t(
                      `解决方案 ${String(index + 1).padStart(2, "0")}`,
                      `Solución ${String(index + 1).padStart(2, "0")}`,
                      `Solution ${String(index + 1).padStart(2, "0")}`,
                    )}
                  </p>
                  <h3 className="font-display mt-2 text-xl font-bold text-[#0B0F19] md:text-2xl">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#3a3a3a] md:text-base md:leading-7">
                    {solution.description}
                  </p>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {solution.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-6 text-[#3a3a3a]">
                        <CheckIcon />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 max-w-3xl text-sm leading-7 text-[#3a3a3a] md:text-base">
            {agri.solutionsNote}
          </p>
        </div>
      </section>

      {/* Why SiCore */}
      <section className="border-t border-slate-200 bg-[#F7FAF6] py-14 lg:py-20" aria-labelledby="agri-sicore-heading">
        <div className="container-page">
          <h2
            id="agri-sicore-heading"
            className="font-display text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[32px]"
          >
            {agri.whySicoreTitle}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {agri.whySicore.map((item) => (
              <article key={item.title}>
                <div
                  className="mb-4 h-10 w-10 rounded-sm"
                  style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}40` }}
                  aria-hidden="true"
                />
                <h3 className="font-display text-base font-bold text-[#0B0F19]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#3a3a3a]">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 lg:py-20" aria-labelledby="agri-cta-heading">
        <Image
          src={agri.cta.image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#132015]/80" />
        <div className="container-page relative">
          <div className="max-w-2xl">
            <h2
              id="agri-cta-heading"
              className="font-display text-2xl font-bold tracking-[-0.02em] text-white md:text-[34px]"
            >
              {agri.cta.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90">{agri.cta.description}</p>
            <Link
              href={L("/contact")}
              className="mt-8 inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
              style={{ backgroundColor: accent }}
            >
              {t("联系我们的工程师", "Hable con nuestros ingenieros", "Talk with Our Engineers")} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
