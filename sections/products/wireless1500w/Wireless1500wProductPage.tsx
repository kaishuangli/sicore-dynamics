import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getProduct1500w } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";

function SectionTitle({ children }: { children: React.ReactNode }) {
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
        <path d="M6 16h20M16 6c3 3.5 4.5 6.5 4.5 10S19 22.5 16 26c-3-3.5-4.5-6.5-4.5-10S13 9.5 16 6Z" stroke="currentColor" strokeWidth="2" />
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
  const common = "h-6 w-6 text-[#fda4af]";
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
        <path d="M6 16h20M16 6c3 3.5 4.5 6.5 4.5 10S19 22.5 16 26c-3-3.5-4.5-6.5-4.5-10S13 9.5 16 6Z" stroke="currentColor" strokeWidth="2" />
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

function ModuleDiagram({ isZh }: { isZh: boolean }) {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
        {isZh ? "模块外形图" : "Module Outline"}
      </p>
      <div className="mt-6 space-y-8">
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">{isZh ? "俯视图" : "Top View"}</p>
          <div className="relative aspect-[320/240] w-full overflow-hidden rounded-xl bg-[#0B0F19]">
            <Image
              src="/images/stealth-1500w-pcb-top.png"
              alt="1500W wireless charging module PCB board top view, 320mm x 240mm"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">{isZh ? "侧视图" : "Side View"}</p>
          <div className="relative aspect-[320/160] w-full overflow-hidden rounded-xl bg-[#0B0F19]">
            <Image
              src="/images/stealth-1500w-pcb-side.png"
              alt="1500W wireless charging module PCB board side view, 80mm height"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">
            {isZh ? "线圈工艺" : "Coil Craftsmanship"}
          </p>
          <div className="overflow-hidden rounded-xl bg-[#0B0F19]">
            <Image
              src="/images/stealth-1500w-coil-craft.png"
              alt="1500W coil side view and cable connection detail"
              width={960}
              height={540}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Wireless1500wProductPage({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const L = (href: string) => withLocale(href, locale);
  const {
    wireless1500wApplications,
    wireless1500wCta,
    wireless1500wFeatures,
    wireless1500wHero,
    wireless1500wSpecs,
  } = getProduct1500w(locale);

  return (
    <div className="wireless-1500w-page">
      {/* Hero */}
      <section className="relative overflow-x-clip bg-[#5c0a12] py-16 text-white lg:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 72% 42%, rgba(226,35,42,0.55), transparent 36%), radial-gradient(circle at 18% 70%, rgba(226,35,42,0.28), transparent 32%), linear-gradient(135deg, #3a070c 0%, #7a1018 48%, #E2232A 100%)",
          }}
          aria-hidden="true"
        />
        <div className="container-page relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#fecdd3]">{wireless1500wHero.eyebrow}</p>
            <h1 className="font-display mt-4 text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl lg:text-[52px]">
              <span className="text-[#fecdd3]">{wireless1500wHero.titleLead} </span>
              <span className="text-white">{wireless1500wHero.titleRest}</span>
            </h1>
            <p className="mt-5 text-lg font-semibold text-white md:text-xl">{wireless1500wHero.tagline}</p>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/80">{wireless1500wHero.description}</p>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {wireless1500wHero.highlights.map((item) => (
                <div key={item.label} className="text-center sm:text-left">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 sm:mx-0">
                    <HeroHighlightIcon type={item.icon} />
                  </div>
                  <p className="mt-3 text-xs font-semibold leading-5 text-white/90">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[84rem]">
            <div className="absolute inset-[8%] rounded-full border border-white/20" aria-hidden="true" />
            <div className="absolute inset-[1%] rounded-full border border-[#E2232A]/40" aria-hidden="true" />
            <div className="relative h-full w-full">
              <Image
                src={wireless1500wHero.image}
                alt={wireless1500wHero.imageAlt}
                fill
                priority
                className="object-contain drop-shadow-[0_0_48px_rgba(226,35,42,0.45)]"
                sizes="(max-width: 768px) 100vw, 1344px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications ??specs left + buttons under specs, diagram right */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <SectionTitle>{isZh ? "技术规格" : "Technical Specifications"}</SectionTitle>
          <div className="mt-10 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="flex h-full flex-col">
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {wireless1500wSpecs.map((spec, index) => (
                      <tr key={spec.label} className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                        <th className="w-[48%] px-5 py-3 font-semibold text-slate-700">{spec.label}</th>
                        <td className="px-5 py-3 text-slate-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
              <div className="mt-auto pt-8">
                <p className="mb-3 text-sm font-semibold text-slate-700">
                  {isZh ? "发射与接收线圈" : "Transmitter & Receiver Coils"}
                </p>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#0B0F19]">
                  <Image
                    src="/images/stealth-1500w-coils.png"
                    alt="1500W transmitter and receiver coils, 320mm x 260mm"
                    width={960}
                    height={540}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            <ModuleDiagram isZh={isZh} />
          </div>
        </div>
      </section>

      {/* Key Features ??2x3 cards with icon left */}
      <section className="bg-[#F8FAFC] py-16 lg:py-20">
        <div className="container-page">
          <SectionTitle>{isZh ? "核心特性" : "Key Features"}</SectionTitle>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {wireless1500wFeatures.map((feature) => (
              <article key={feature.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
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

      {/* Applications ??six equal cards in a row */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <SectionTitle>{isZh ? "应用场景" : "Applications"}</SectionTitle>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {wireless1500wApplications.map((app) => (
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

      {/* CTA ??text left, four icons right */}
      <section className="bg-[#0a2a6b] py-12 text-white lg:py-14">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">{wireless1500wCta.title}</h2>
            <p className="mt-3 max-w-xl text-base leading-8 text-white/85">{wireless1500wCta.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {wireless1500wCta.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/5">
                  <CtaIcon type={stat.icon} />
                </div>
                <p className="mt-3 text-xs font-semibold leading-5 text-white">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
