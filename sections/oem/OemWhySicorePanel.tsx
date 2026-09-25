import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import { oemWhySicorePage as content } from "@/lib/oem-why-sicore";

export default function OemWhySicorePanel({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="oem-why-heading">
        <div className="absolute inset-0">
          <Image
            src={content.heroImage}
            alt={content.heroImageAlt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071225]/96 via-[#071225]/82 to-[#071225]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/70 via-transparent to-[#071225]/25" />
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
                {dict.navOem["why-sicore"]}
              </li>
            </ol>
          </nav>

          <div className="mt-10 max-w-3xl animate-fade-up">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300/90">
              {content.eyebrow}
            </p>
            <h1
              id="oem-why-heading"
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
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              {content.supporting}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href={L(content.ctaPrimary.href)} className="btn-primary">
                {t("开始 OEM 合作洽谈", "Iniciar conversación OEM", content.ctaPrimary.label)}{" "}
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href={L(content.ctaSecondary.href)}
                className="text-sm font-semibold text-white/90 underline-offset-4 transition hover:text-white hover:underline"
              >
                {t("查看开发流程", "Ver proceso de desarrollo", content.ctaSecondary.label)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section
        className="border-b border-slate-200/70 bg-white py-16 lg:py-24"
        aria-labelledby="oem-challenge-heading"
      >
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
                {content.challenge.eyebrow}
              </p>
              <h2
                id="oem-challenge-heading"
                className="font-display mt-3 max-w-xl text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
              >
                {content.challenge.title}
              </h2>
              <p className="mt-6 text-base font-semibold leading-8 text-slate-800 md:text-lg">
                {content.challenge.lead}
              </p>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                {content.challenge.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <ul className="space-y-0 border-t border-slate-200">
              {content.challenge.points.map((point, index) => (
                <li
                  key={point.title}
                  className="border-b border-slate-200 py-6 animate-fade-up"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <p className="font-display text-lg font-extrabold tracking-[-0.02em] text-[#0B0F19]">
                    <span className="mr-3 text-[#0B5FFF]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {point.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">{point.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Positioning + stats */}
      <section
        className="relative overflow-hidden border-b border-slate-200/70 bg-[#071225] py-16 text-white lg:py-20"
        aria-labelledby="oem-positioning-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(11,95,255,0.35), transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="container-page relative">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300/90">
            {content.positioning.eyebrow}
          </p>
          <h2
            id="oem-positioning-heading"
            className="font-display mt-3 max-w-3xl text-2xl font-black tracking-[-0.03em] md:text-4xl"
          >
            {content.positioning.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            {content.positioning.body}
          </p>

          <dl className="mt-12 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {content.positioning.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-black tracking-[-0.03em] text-white md:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Pillars intro */}
      <section
        className="border-b border-slate-200/70 bg-[#F8FAFC] py-14 lg:py-16"
        aria-labelledby="oem-pillars-heading"
      >
        <div className="container-page max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
            {content.pillars.eyebrow}
          </p>
          <h2
            id="oem-pillars-heading"
            className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
          >
            {content.pillars.title}
          </h2>
        </div>
      </section>

      {/* Pillars — alternating long modules */}
      {content.pillars.items.map((pillar, index) => {
        const imageLeft = index % 2 === 1;

        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`scroll-mt-[190px] border-b border-slate-200/70 py-14 lg:py-20 ${
              index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
            }`}
            aria-labelledby={`${pillar.id}-heading`}
          >
            <div className="container-page">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div className={imageLeft ? "lg:order-2" : undefined}>
                  <p className="font-display text-4xl font-black tabular-nums text-[#0B5FFF] md:text-5xl">
                    {pillar.number}
                  </p>
                  <h3
                    id={`${pillar.id}-heading`}
                    className="font-display mt-3 text-2xl font-extrabold tracking-[-0.03em] text-[#0B0F19] md:text-3xl"
                  >
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base font-semibold text-slate-800">{pillar.subtitle}</p>
                  <p className="mt-5 text-base leading-8 text-slate-600">{pillar.description}</p>
                  <p className="mt-4 text-base leading-8 text-slate-600">{pillar.detail}</p>

                  <ul className="mt-8 space-y-2.5">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-6 text-slate-700">
                        <span
                          className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B5FFF]"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={imageLeft ? "lg:order-1" : undefined}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-slate-200 bg-slate-100 md:aspect-[5/4]">
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      fill
                      className="object-cover object-center transition duration-700 hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 640px"
                      quality={95}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Industries */}
      <section
        className="border-b border-slate-200/70 bg-white py-16 lg:py-24"
        aria-labelledby="oem-industries-heading"
      >
        <div className="container-page">
          <header className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.industries.eyebrow}
            </p>
            <h2
              id="oem-industries-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
            >
              {content.industries.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{content.industries.lead}</p>
          </header>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {content.industries.items.map((item) => (
              <article key={item.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-display mt-5 text-lg font-extrabold tracking-[-0.02em] text-[#0B0F19]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        className="border-b border-slate-200/70 bg-[#F8FAFC] py-16 lg:py-24"
        aria-labelledby="oem-capabilities-heading"
      >
        <div className="container-page">
          <header className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.capabilities.eyebrow}
            </p>
            <h2
              id="oem-capabilities-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
            >
              {content.capabilities.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{content.capabilities.lead}</p>
          </header>

          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {content.capabilities.items.map((item, index) => (
              <li key={item.title} className="border-t border-slate-300 pt-5">
                <p className="font-display text-xs font-bold tabular-nums text-[#0B5FFF]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-3 text-lg font-extrabold text-[#0B0F19]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Journey */}
      <section
        className="border-b border-slate-200/70 bg-white py-16 lg:py-24"
        aria-labelledby="oem-journey-heading"
      >
        <div className="container-page">
          <header className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.journey.eyebrow}
            </p>
            <h2
              id="oem-journey-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
            >
              {content.journey.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{content.journey.lead}</p>
          </header>

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.journey.steps.map((step) => (
              <li key={step.title}>
                <Link
                  href={L(step.href)}
                  className="group block h-full border border-slate-200 bg-[#F8FAFC] p-6 transition hover:border-[#0B5FFF]/40 hover:bg-white"
                >
                  <p className="font-display text-3xl font-black tabular-nums text-[#0B5FFF]">
                    {step.number}
                  </p>
                  <h3 className="font-display mt-4 text-lg font-extrabold text-[#0B0F19] transition group-hover:text-[#0B5FFF]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-[#0B5FFF]">
                    {t("了解更多", "Saber más", "Learn more")} →
                  </p>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Close CTA */}
      <section className="bg-[#071225] py-16 text-white lg:py-20" aria-labelledby="oem-close-heading">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2
              id="oem-close-heading"
              className="font-display text-2xl font-black tracking-[-0.03em] md:text-4xl"
            >
              {content.close.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{content.close.body}</p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link href={L(content.close.primary.href)} className="btn-primary">
                {t("联系 OEM 团队", "Contactar al equipo OEM", content.close.primary.label)}{" "}
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href={L(content.close.secondary.href)}
                className="text-sm font-semibold text-white/85 underline-offset-4 transition hover:text-white hover:underline"
              >
                {t("OEM 常见问题", "FAQ OEM", content.close.secondary.label)}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
