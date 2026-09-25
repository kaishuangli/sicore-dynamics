import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { LocalizedIndustry } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import { smartTestEquipmentsPage as content } from "@/lib/smart-test-equipments";
import { SolutionFaqBlock } from "@/sections/solutions/shared/SolutionBlocks";

type FeatureIcon = (typeof content.features.items)[number]["icon"];

function FeatureIconMark({ type }: { type: FeatureIcon }) {
  const common = "h-9 w-9 stroke-[#0B5FFF]";

  if (type === "nav") {
    return (
      <svg viewBox="0 0 36 36" fill="none" className={common} aria-hidden="true">
        <circle cx="18" cy="18" r="10" strokeWidth="1.8" />
        <circle cx="18" cy="18" r="3" strokeWidth="1.8" />
        <path d="M18 6v3M18 27v3M6 18h3M27 18h3" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "pin") {
    return (
      <svg viewBox="0 0 36 36" fill="none" className={common} aria-hidden="true">
        <path
          strokeWidth="1.8"
          strokeLinejoin="round"
          d="M18 30s-8-8.2-8-14a8 8 0 1 1 16 0c0 5.8-8 14-8 14Z"
        />
        <circle cx="18" cy="16" r="2.5" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === "dock") {
    return (
      <svg viewBox="0 0 36 36" fill="none" className={common} aria-hidden="true">
        <rect x="8" y="12" width="20" height="12" rx="2" strokeWidth="1.8" />
        <path d="M12 24v4h12v-4M18 8v4" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "charge") {
    return (
      <svg viewBox="0 0 36 36" fill="none" className={common} aria-hidden="true">
        <path
          d="M18 7 11 19h6l-1 10 9-14h-6l-1-8Z"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 36 36" fill="none" className={common} aria-hidden="true">
      <rect x="10" y="8" width="16" height="20" rx="2" strokeWidth="1.8" />
      <path d="M14 13h8M14 18h8M14 23h5" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
      <path
        d="M4 10.5 8 14.5 16 5.5"
        stroke="#0B5FFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SmartTestSolutionBody({
  industry,
  locale,
}: {
  industry: LocalizedIndustry;
  locale: Locale;
}) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);

  return (
    <div className="bg-[#050A18] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="ste-hero-heading">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 75% 40%, rgba(11,95,255,0.35), transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="container-page relative grid items-center gap-10 py-16 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:py-24">
          <div className="animate-fade-up">
            <h1
              id="ste-hero-heading"
              className="font-display text-[40px] font-black uppercase leading-[0.98] tracking-[-0.04em] text-white md:text-[56px] lg:text-[64px]"
            >
              {content.hero.title}
            </h1>
            <p className="mt-5 text-lg font-semibold text-sky-300 md:text-xl">
              {content.hero.subtitle}
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              {content.hero.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={L(content.hero.secondaryCta.href)}
                className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/5"
              >
                <span
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/50 text-[10px]"
                  aria-hidden="true"
                >
                  ▶
                </span>
                {t("观看视频", "Ver video", content.hero.secondaryCta.label)}
              </Link>
              <Link href={L(content.hero.primaryCta.href)} className="btn-primary">
                {t("申请演示", "Solicitar demo", content.hero.primaryCta.label)}{" "}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/11] overflow-hidden">
            <Image
              src={content.hero.image}
              alt={content.hero.imageAlt}
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 560px"
              quality={95}
            />
          </div>
        </div>
      </section>

      {/* Key features */}
      <section
        className="border-y border-white/10 bg-[#071225] py-12 lg:py-14"
        aria-label="Key features"
      >
        <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {content.features.items.map((item) => (
            <div key={item.id} className="text-center lg:text-left">
              <div className="mx-auto flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 lg:mx-0">
                <FeatureIconMark type={item.icon} />
              </div>
              <h2 className="font-display mt-4 text-sm font-extrabold text-white md:text-base">
                {item.title}
              </h2>
              <p className="mt-2 text-xs leading-6 text-slate-400 md:text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet management */}
      <section
        className="border-b border-white/10 py-16 lg:py-24"
        aria-labelledby="ste-fleet-heading"
      >
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.fleet.eyebrow}
            </p>
            <h2
              id="ste-fleet-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-white md:text-4xl"
            >
              {content.fleet.title}
            </h2>
            <ul className="mt-8 space-y-3">
              {content.fleet.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm font-semibold text-slate-200 md:text-base">
                  <CheckIcon />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link
              href={L(content.fleet.exploreHref)}
              className="mt-8 inline-flex text-sm font-bold text-[#0B5FFF] transition hover:text-sky-300"
            >
              {t("探索软件", "Explorar software", content.fleet.exploreLabel)}{" "}
              <span aria-hidden="true">&gt;</span>
            </Link>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#071225]">
            <Image
              src={content.fleet.image}
              alt={content.fleet.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 560px"
              quality={95}
            />
          </div>
        </div>

        <div className="container-page mt-10">
          <div className="flex flex-col gap-6 border border-white/10 bg-[#071225] px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8">
            <dl className="grid flex-1 grid-cols-2 gap-5 sm:grid-cols-4">
              {content.fleet.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    {stat.label}
                  </dt>
                  <dd className="font-display mt-1 text-2xl font-black text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <Link href={L(content.fleet.dashboardCta.href)} className="btn-primary shrink-0">
              {t("查看仪表盘", "Ver panel", content.fleet.dashboardCta.label)}
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Management detail — same layout as Autonomous / Hardware */}
      <section
        className="border-b border-white/10 bg-[#071225] py-16 lg:py-24"
        aria-labelledby="ste-fleet-management-heading"
      >
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.fleetManagement.eyebrow}
            </p>
            <h2
              id="ste-fleet-management-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-white md:text-4xl"
            >
              {content.fleetManagement.title}
            </h2>
            <p className="mt-8 text-sm leading-7 text-slate-400 md:text-base">
              {content.fleetManagement.body}
            </p>
          </div>

          <div>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#050A18]">
              <Image
                src={content.fleetManagement.image}
                alt={content.fleetManagement.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 560px"
                quality={95}
              />
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {content.fleetManagement.callouts.map((callout) => (
                <li key={callout.title} className="border border-white/10 bg-[#050A18] px-4 py-3">
                  <p className="text-sm font-bold text-[#0B5FFF]">{callout.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{callout.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Autonomous Movement */}
      <section
        className="border-b border-white/10 py-16 lg:py-24"
        aria-labelledby="ste-autonomous-heading"
      >
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.autonomous.eyebrow}
            </p>
            <h2
              id="ste-autonomous-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-white md:text-4xl"
            >
              {content.autonomous.title}
            </h2>
            <p className="mt-8 text-sm leading-7 text-slate-400 md:text-base">
              {content.autonomous.body}
            </p>
          </div>

          <div>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#050A18]">
              <Image
                src={content.autonomous.image}
                alt={content.autonomous.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 560px"
                quality={95}
              />
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {content.autonomous.callouts.map((callout) => (
                <li key={callout.title} className="border border-white/10 bg-[#071225] px-4 py-3">
                  <p className="text-sm font-bold text-[#0B5FFF]">{callout.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{callout.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section
        className="border-b border-white/10 bg-[#071225] py-16 lg:py-24"
        aria-labelledby="ste-hardware-heading"
      >
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.hardware.eyebrow}
            </p>
            <h2
              id="ste-hardware-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-white md:text-4xl"
            >
              {content.hardware.title}
            </h2>
            <ul className="mt-8 space-y-5">
              {content.hardware.pillars.map((pillar) => (
                <li key={pillar.title}>
                  <h3 className="font-display text-base font-extrabold text-white">{pillar.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-400">{pillar.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#050A18]">
              <Image
                src={content.hardware.image}
                alt={content.hardware.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 560px"
                quality={95}
              />
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {content.hardware.callouts.map((callout) => (
                <li key={callout.title} className="border border-white/10 bg-[#050A18] px-4 py-3">
                  <p className="text-sm font-bold text-[#0B5FFF]">{callout.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{callout.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Smart Test Equipment — four illustrated viewpoints */}
      <section
        className="relative border-t border-b border-white/20 bg-[#050A18] pt-20 pb-16 lg:pt-28 lg:pb-24"
        aria-labelledby="ste-why-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0B5FFF]/70 to-transparent"
          aria-hidden="true"
        />
        <div className="container-page">
          <header className="max-w-4xl border-b border-white/10 pb-12 lg:pb-16">
            <h2
              id="ste-why-heading"
              className="font-display text-4xl font-black tracking-[-0.04em] text-white md:text-5xl lg:text-6xl"
            >
              {content.why.eyebrow}
            </h2>
            <p className="font-display mt-5 text-xl font-extrabold leading-snug tracking-[-0.02em] text-sky-300 md:text-2xl lg:text-3xl">
              {content.why.title}
            </p>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
              {content.why.lead}
            </p>
          </header>

          <div className="mt-14 space-y-16 lg:mt-20 lg:space-y-24">
            {content.why.points.map((point, index) => {
              const isWide = "layout" in point && point.layout === "wide";

              if (isWide) {
                return (
                  <article key={point.title} className="space-y-8 lg:space-y-10">
                    <div className="max-w-3xl">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B5FFF]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-display mt-3 text-xl font-extrabold text-white md:text-3xl">
                        {point.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base md:leading-8">
                        {point.text}
                      </p>
                    </div>
                    <div className="relative w-full overflow-hidden border border-white/10 bg-white">
                      <Image
                        src={point.image}
                        alt={point.imageAlt}
                        width={1600}
                        height={900}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 1280px) 100vw, 1200px"
                        quality={95}
                        priority={false}
                      />
                    </div>
                  </article>
                );
              }

              const imageRight = index % 2 === 0;
              return (
                <article
                  key={point.title}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <div className={imageRight ? "lg:order-1" : "lg:order-2"}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B5FFF]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display mt-3 text-xl font-extrabold text-white md:text-2xl">
                      {point.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base md:leading-8">
                      {point.text}
                    </p>
                  </div>
                  <div
                    className={`relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#071225] ${
                      imageRight ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={point.image}
                      alt={point.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 560px"
                      quality={90}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div className="bg-white text-[#0B0F19]">
        <SolutionFaqBlock
          industryId={industry.id}
          locale={locale}
          title={t("常见问题", "Preguntas frecuentes", "Frequently Asked Questions")}
        />
      </div>
    </div>
  );
}
