import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";

export type ModuleHighlight = { label: string; icon: string };
export type ModuleFeature = { title: string; description: string; icon: string };
export type ModuleApplication = {
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
};
export type ModuleSpec = { label: string; value: string };
export type ModuleCtaStat = { label: string; icon: string };

export type ModuleSpecGroup = {
  title: string;
  specs: readonly ModuleSpec[];
};

export type WirelessModuleProductLayoutProps = {
  locale: Locale;
  hero: {
    eyebrow?: string;
    titleLead: string;
    titleRest: string;
    tagline?: string;
    subtitle?: string;
    description?: string;
    image: string;
    imageAlt: string;
    highlights: readonly ModuleHighlight[];
  };
  /** Flat specs table (200W / 800W / 1500W) */
  specs?: readonly ModuleSpec[];
  /** Grouped specs (3000W) — used when `specs` is omitted */
  specGroups?: readonly ModuleSpecGroup[];
  features: readonly ModuleFeature[];
  applications: readonly ModuleApplication[];
  applicationsIntro?: string;
  cta: {
    title: string;
    description: string;
    stats?: readonly ModuleCtaStat[];
  };
  /** Optional diagram / media shown beside the specs table */
  specsAside?: ReactNode;
  /** Optional media block under the specs CTAs */
  specsExtra?: ReactNode;
};

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-3xl font-bold text-[#0B0F19] md:text-4xl">{children}</h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-[#0B5FFF]" aria-hidden="true" />
    </div>
  );
}

function FeatureIcon({ type }: { type: string }) {
  const common = "h-7 w-7 text-[#0B5FFF]";
  if (type === "power") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <path d="M18 4 8 18h7l-1 10 10-14h-7l1-10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "efficiency") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <path d="M6 22c4-8 8-12 10-12s6 4 10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "safe") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <path d="M16 4 26 8v8c0 6-4.5 10.5-10 12-5.5-1.5-10-6-10-12V8l10-4Z" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (type === "alignment") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <circle cx="11" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="21" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M11 16h10" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (type === "thermal") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <path d="M16 5v14.5a4.5 4.5 0 1 0 0 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "comms") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <path d="M8 16h16M10 11h12M12 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="5" y="7" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (type === "support") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M6 16h20M16 6c3 3.5 4.5 6.5 4.5 10S19 22.5 16 26c-3-3.5-4.5-6.5-4.5-10S13 9.5 16 6Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
      <rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M10 14h12M10 18h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HeroHighlightIcon({ type }: { type: string }) {
  const common = "h-6 w-6 text-[#0B5FFF]";
  if (type === "power") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "efficiency") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M4 17c3-6 6-9 8-9s5 3 8 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "safe") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M12 3 20 6v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function CtaIcon({ type }: { type: string }) {
  const common = "h-8 w-8 text-white";
  if (type === "power") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <path d="M18 4 8 18h7l-1 10 10-14h-7l1-10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "efficiency") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <path d="M6 22c4-8 8-12 10-12s6 4 10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "support") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M6 16h20M16 6c3 3.5 4.5 6.5 4.5 10S19 22.5 16 26c-3-3.5-4.5-6.5-4.5-10S13 9.5 16 6Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
      <rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SpecsTable({ specs }: { specs: readonly ModuleSpec[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <table className="w-full text-left text-sm">
        <tbody>
          {specs.map((spec, index) => (
            <tr key={`${spec.label}-${index}`} className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
              <th className="w-[48%] px-5 py-3 font-semibold text-slate-700">{spec.label}</th>
              <td className="px-5 py-3 text-slate-600">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function WirelessModuleProductLayout({
  locale,
  hero,
  specs,
  specGroups,
  features,
  applications,
  applicationsIntro,
  cta,
  specsAside,
  specsExtra,
}: WirelessModuleProductLayoutProps) {
  const isZh = locale === "zh";
  const L = (href: string) => withLocale(href, locale);

  return (
    <div className="wireless-module-product-page">
      {/* Hero — white */}
      <section className="relative overflow-x-clip border-b border-slate-200 bg-white py-16 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 78% 40%, rgba(11,95,255,0.08), transparent 36%), radial-gradient(circle at 12% 80%, rgba(56,189,248,0.06), transparent 28%)",
          }}
          aria-hidden="true"
        />
        <div className="container-page relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            {hero.eyebrow ? (
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B5FFF]">{hero.eyebrow}</p>
            ) : null}
            <h1
              className={`font-display text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl lg:text-[52px] ${
                hero.eyebrow ? "mt-4" : ""
              }`}
            >
              <span className="text-[#0B5FFF]">{hero.titleLead} </span>
              <span className="text-[#0B0F19]">{hero.titleRest}</span>
            </h1>
            {hero.tagline ? (
              <p className="mt-5 text-lg font-semibold text-[#0B0F19] md:text-xl">{hero.tagline}</p>
            ) : null}
            {hero.subtitle ? (
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">{hero.subtitle}</p>
            ) : null}
            {hero.description ? (
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">{hero.description}</p>
            ) : null}

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {hero.highlights.map((item) => (
                <div key={item.label} className="text-center sm:text-left">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#0B5FFF]/20 bg-[#EFF6FF] sm:mx-0">
                    <HeroHighlightIcon type={item.icon} />
                  </div>
                  <p className="mt-3 text-xs font-semibold leading-5 text-slate-700">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
            <div className="absolute inset-[12%] rounded-full border border-[#0B5FFF]/20" aria-hidden="true" />
            <div className="absolute inset-[4%] rounded-full border border-slate-200" aria-hidden="true" />
            <div className="relative h-full w-full">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority
                className="object-contain drop-shadow-[0_16px_40px_rgba(15,23,42,0.12)]"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <SectionTitle>{isZh ? "技术规格" : "Technical Specifications"}</SectionTitle>
          <div
            className={`mt-10 grid items-start gap-10 ${specsAside ? "lg:grid-cols-2 lg:gap-14" : ""}`}
          >
            <div>
              {specGroups?.length ? (
                <div className="space-y-8">
                  {specGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[#0B0F19]">
                        {group.title}
                      </h3>
                      <SpecsTable specs={group.specs} />
                    </div>
                  ))}
                </div>
              ) : (
                <SpecsTable specs={specs ?? []} />
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={L("/download")}
                  className="inline-flex items-center gap-2 rounded-md bg-[#0B5FFF] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600"
                >
                  {isZh ? "下载数据表" : "Download Datasheet"}
                </Link>
                <Link
                  href={L("/contact")}
                  className="inline-flex items-center gap-2 rounded-md border border-[#0B5FFF] px-5 py-3 text-sm font-bold text-[#0B5FFF] transition hover:bg-[#EFF6FF]"
                >
                  {isZh ? "联系工程团队" : "Contact Engineering"}
                </Link>
              </div>
              {specsExtra ? <div className="mt-8">{specsExtra}</div> : null}
            </div>
            {specsAside ? <div>{specsAside}</div> : null}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#F8FAFC] py-16 lg:py-20">
        <div className="container-page">
          <SectionTitle>{isZh ? "核心特性" : "Key Features"}</SectionTitle>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#0B5FFF]/25 bg-[#EFF6FF]">
                  <FeatureIcon type={feature.icon} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0B0F19]">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <SectionTitle>{isZh ? "应用场景" : "Applications"}</SectionTitle>
          {applicationsIntro ? (
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">{applicationsIntro}</p>
          ) : null}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {applications.map((app) => (
              <article key={app.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image src={app.image} alt={app.imageAlt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#0B5FFF]">{app.title}</h3>
                  {app.description ? (
                    <p className="mt-2 text-sm leading-7 text-slate-600">{app.description}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a2a6b] py-12 text-white lg:py-14">
        <div
          className={`container-page ${
            cta.stats?.length ? "grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]" : ""
          }`}
        >
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">{cta.title}</h2>
            <p className="mt-3 max-w-xl text-base leading-8 text-white/85">{cta.description}</p>
            {!cta.stats?.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={L("/download")}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#0B5FFF] transition hover:bg-slate-100"
                >
                  {isZh ? "下载数据表" : "Download Datasheet"}
                </Link>
                <Link
                  href={L("/contact")}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/70 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  {isZh ? "联系工程团队" : "Contact Engineering"}
                </Link>
              </div>
            ) : null}
          </div>
          {cta.stats?.length ? (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {cta.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/5">
                    <CtaIcon type={stat.icon} />
                  </div>
                  <p className="mt-3 text-xs font-semibold leading-5 text-white">{stat.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
