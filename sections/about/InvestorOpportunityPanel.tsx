import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getInvestorBundle } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";

export default function InvestorOpportunityPanel({ locale }: { locale: Locale }) {
  const L = (href: string) => withLocale(href, locale);
  const {
    investorContact,
    investorHero,
    investorMarket,
    investorTechnology,
    investorVision,
    investorWhy,
  } = getInvestorBundle(locale);

  return (
    <div className="bg-white">
      {/* 1. Hero */}
      <section
        className="relative overflow-hidden border-b border-slate-200/70"
        aria-labelledby="investor-hero-heading"
      >
        <div className="absolute inset-0 bg-[#071225]" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 85% 35%, rgba(11,95,255,0.32), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-15" aria-hidden="true" />

        <div className="container-page relative py-24 lg:py-32">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300/90">
              {investorHero.eyebrow}
            </p>
            <h1
              id="investor-hero-heading"
              className="font-display mt-5 text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-white md:text-[46px] lg:text-[52px]"
            >
              {investorHero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              {investorHero.body}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Why SiCore */}
      <section className="py-20 lg:py-24" aria-labelledby="why-sicore-heading">
        <div className="container-page">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
            {investorWhy.eyebrow}
          </p>
          <h2
            id="why-sicore-heading"
            className="font-display mt-4 max-w-3xl text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl lg:leading-[1.2]"
          >
            {investorWhy.intro}
          </h2>

          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {investorWhy.items.map((item, index) => (
              <article key={item.title} className="border-t border-slate-300 pt-6">
                <span className="font-display text-xs font-bold tabular-nums text-[#0B5FFF]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-base font-extrabold tracking-[-0.02em] text-[#0B0F19]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Market Opportunity */}
      <section className="border-y border-slate-200/70 bg-[#F8FAFC] py-20 lg:py-24" aria-labelledby="market-heading">
        <div className="container-page">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
            {investorMarket.eyebrow}
          </p>
          <h2
            id="market-heading"
            className="font-display mt-4 max-w-3xl text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl lg:leading-[1.2]"
          >
            {investorMarket.title}
          </h2>

          <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-slate-300 pt-10">
            {investorMarket.industries.map((industry) => (
              <li
                key={industry}
                className="font-display text-lg font-bold tracking-[-0.02em] text-[#0B0F19] md:text-xl"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Technology & IP */}
      <section className="py-20 lg:py-28" aria-labelledby="technology-heading">
        <div className="container-page max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
            {investorTechnology.eyebrow}
          </p>
          <h2
            id="technology-heading"
            className="font-display mt-5 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl lg:text-[2.15rem] lg:leading-[1.25]"
          >
            {investorTechnology.title}
          </h2>
        </div>
      </section>

      {/* 5. Growth Vision */}
      <section
        className="relative overflow-hidden border-y border-slate-200/70 bg-[#F8FAFC] py-20 lg:py-28"
        aria-labelledby="vision-heading"
      >
        <div className="mesh-bg-subtle pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-page relative max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
            {investorVision.eyebrow}
          </p>
          <h2
            id="vision-heading"
            className="font-display mt-5 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl lg:text-[2.15rem] lg:leading-[1.25]"
          >
            {investorVision.title}
          </h2>
        </div>
      </section>

      {/* 6. Contact */}
      <section
        className="relative overflow-hidden bg-[#071225] py-20 lg:py-24"
        aria-labelledby="investor-contact-heading"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(11,95,255,0.28), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div className="container-page relative max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300/90">
            {investorContact.eyebrow}
          </p>
          <h2
            id="investor-contact-heading"
            className="font-display mt-4 text-2xl font-black tracking-[-0.03em] text-white md:text-3xl lg:leading-[1.25]"
          >
            {investorContact.title}
          </h2>
          <Link href={L(investorContact.cta.href)} className="btn-primary mt-10 inline-flex">
            {investorContact.cta.label} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
