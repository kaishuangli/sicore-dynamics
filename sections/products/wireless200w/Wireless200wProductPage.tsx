import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getProduct200w } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";

function FeatureIcon({ type }: { type: string }) {
  const common = "h-8 w-8 text-[#0B5FFF]";

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
        <path d="M8 10c3 2 5 5 8 12M24 10c-3 2-5 5-8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "safe") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <path d="M16 4 26 8v8c0 6-4.5 10.5-10 12-5.5-1.5-10-6-10-12V8l10-4Z" stroke="currentColor" strokeWidth="2" />
        <path d="M16 11v6M16 21h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
        <path d="M16 12h3M16 8h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
  const common = "h-6 w-6 text-[#38bdf8]";

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
      <path d="M8 11h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ModuleDiagram({ isZh }: { isZh: boolean }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
        {isZh ? "模块外形图" : "Module Outline"}
      </p>
      <div className="mt-6 space-y-8">
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">{isZh ? "俯视图" : "Top View"}</p>
          <svg viewBox="0 0 320 220" className="h-auto w-full" aria-hidden="true">
            <rect x="40" y="30" width="240" height="160" rx="10" fill="#fff" stroke="#0B5FFF" strokeWidth="2.5" />
            <rect x="70" y="60" width="180" height="100" rx="6" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="160" cy="110" r="28" fill="none" stroke="#0B5FFF" strokeWidth="2" />
            <circle cx="160" cy="110" r="10" fill="#0B5FFF" opacity="0.2" />
            <path d="M40 210h240" stroke="#64748b" strokeWidth="1.5" />
            <path d="M40 204v12M280 204v12" stroke="#64748b" strokeWidth="1.5" />
            <text x="160" y="205" textAnchor="middle" className="fill-slate-600" fontSize="12" fontFamily="inherit">
              160 mm
            </text>
            <path d="M300 30v160" stroke="#64748b" strokeWidth="1.5" />
            <path d="M294 30h12M294 190h12" stroke="#64748b" strokeWidth="1.5" />
            <text x="308" y="115" textAnchor="start" className="fill-slate-600" fontSize="12" fontFamily="inherit">
              160
            </text>
          </svg>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">{isZh ? "侧视图" : "Side View"}</p>
          <svg viewBox="0 0 320 90" className="h-auto w-full" aria-hidden="true">
            <rect x="40" y="28" width="240" height="28" rx="4" fill="#fff" stroke="#0B5FFF" strokeWidth="2.5" />
            <path d="M40 72h240" stroke="#64748b" strokeWidth="1.5" />
            <path d="M40 66v12M280 66v12" stroke="#64748b" strokeWidth="1.5" />
            <text x="160" y="86" textAnchor="middle" className="fill-slate-600" fontSize="12" fontFamily="inherit">
              160 mm
            </text>
            <path d="M300 28v28" stroke="#64748b" strokeWidth="1.5" />
            <path d="M294 28h12M294 56h12" stroke="#64748b" strokeWidth="1.5" />
            <text x="308" y="46" textAnchor="start" className="fill-slate-600" fontSize="12" fontFamily="inherit">
              11 mm
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Wireless200wProductPage({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const L = (href: string) => withLocale(href, locale);
  const {
    wireless200wApplications,
    wireless200wCta,
    wireless200wFeatures,
    wireless200wHero,
    wireless200wSpecs,
  } = getProduct200w(locale);

  return (
    <div className="wireless-200w-page">
      <section className="relative overflow-hidden bg-[#071225] py-16 text-white lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 72% 42%, rgba(11,95,255,0.35), transparent 34%), radial-gradient(circle at 78% 58%, rgba(56,189,248,0.18), transparent 28%)",
          }}
          aria-hidden="true"
        />
        <div className="container-page relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="font-display text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl lg:text-[52px]">
              <span className="text-white">200W </span>
              <span className="text-[#38bdf8]">
                {isZh ? "无线充电模块" : "Wireless Charging Module"}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">{wireless200wHero.subtitle}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {wireless200wHero.highlights.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5">
                    <HeroHighlightIcon type={item.icon} />
                  </div>
                  <p className="text-sm font-semibold leading-6 text-white/90">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-[12%] rounded-full border border-[#0B5FFF]/30" aria-hidden="true" />
            <div className="absolute inset-[4%] rounded-full border border-[#38bdf8]/15" aria-hidden="true" />
            <div className="relative h-full w-full">
              <Image
                src={wireless200wHero.image}
                alt={wireless200wHero.imageAlt}
                fill
                priority
                className="object-contain drop-shadow-[0_0_48px_rgba(56,189,248,0.35)]"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-center text-3xl font-bold text-[#0B0F19] md:text-4xl">
            {isZh ? "技术规格" : "Technical Specifications"}
          </h2>
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <tbody>
                  {wireless200wSpecs.map((spec, index) => (
                    <tr key={spec.label} className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                      <th className="w-[46%] px-5 py-3.5 font-semibold text-slate-700">{spec.label}</th>
                      <td className="px-5 py-3.5 text-slate-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ModuleDiagram isZh={isZh} />
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-center text-3xl font-bold text-[#0B0F19] md:text-4xl">
            {isZh ? "核心特性" : "Key Features"}
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {wireless200wFeatures.map((feature) => (
              <div key={feature.title} className="text-center lg:text-left">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF] lg:mx-0">
                  <FeatureIcon type={feature.icon} />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#0B0F19]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-center text-3xl font-bold text-[#0B0F19] md:text-4xl">
            {isZh ? "应用场景" : "Applications"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-8 text-slate-600">
            {isZh
              ? "适用于广泛的智能系统场景。"
              : "Perfectly suited for a wide range of intelligent systems."}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wireless200wApplications.map((app) => (
              <article key={app.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[16/11] bg-[#0f172a]">
                  <Image src={app.image} alt={app.imageAlt} fill className="object-contain" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#0B5FFF]">{app.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{app.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B5FFF] py-10 text-white lg:py-12">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">{wireless200wCta.title}</h2>
            <p className="mt-2 text-base text-white/90">{wireless200wCta.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
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
        </div>
      </section>
    </div>
  );
}
