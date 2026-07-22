import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/path";
import { coreCapabilities } from "@/lib/seo";

function Icon({ type }: { type: string }) {
  const common = "stroke-[#0B5FFF]";

  if (type === "wireless")
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
        <path
          className={common}
          strokeWidth="3"
          strokeLinecap="round"
          d="M18 18a9 9 0 0 0 0 12M13 13a16 16 0 0 0 0 22M8 8a23 23 0 0 0 0 32M30 18a9 9 0 0 1 0 12M35 13a16 16 0 0 1 0 22M40 8a23 23 0 0 1 0 32"
        />
        <circle cx="24" cy="24" r="3" fill="#0B5FFF" />
      </svg>
    );

  if (type === "station")
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
        <rect x="8" y="28" width="32" height="8" rx="2" className={common} strokeWidth="3" />
        <path className={common} strokeWidth="3" strokeLinecap="round" d="M16 28V20a8 8 0 0 1 16 0v8" />
        <path className={common} strokeWidth="3" strokeLinecap="round" d="M24 12v4M18 14l2 3M30 14l-2 3" />
      </svg>
    );

  if (type === "ai")
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
        <rect x="12" y="12" width="24" height="24" rx="2" className={common} strokeWidth="3" />
        <rect x="19" y="19" width="10" height="10" className={common} strokeWidth="3" />
        <path
          className={common}
          strokeWidth="3"
          strokeLinecap="round"
          d="M18 4v8m12-8v8M18 36v8m12-8v8M4 18h8m-8 12h8m24-12h8m-8 12h8"
        />
      </svg>
    );

  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12">
      <path
        className={common}
        strokeWidth="3"
        strokeLinejoin="round"
        d="m27 3-17 24h13l-2 18 17-26H25L27 3Z"
      />
      <rect x="6" y="34" width="36" height="6" rx="1" className={common} strokeWidth="3" />
    </svg>
  );
}

export default function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const L = (href: string) => withLocale(href, locale);

  const capabilities = [
    {
      ...coreCapabilities[0],
      label: dict.home.capWireless,
      text: dict.home.capWirelessText,
    },
    {
      ...coreCapabilities[1],
      label: dict.home.capIntelligent,
      text: dict.home.capIntelligentText,
    },
    {
      ...coreCapabilities[2],
      label: dict.home.capDocking,
      text: dict.home.capDockingText,
    },
    {
      ...coreCapabilities[3],
      label: dict.home.capIndustrial,
      text: dict.home.capIndustrialText,
    },
  ];

  return (
    <section
      id="home"
      className="relative px-0 pb-10 pt-8 lg:pb-12 lg:pt-10"
      aria-labelledby="hero-heading"
    >
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_32px_80px_rgba(11,95,255,0.08)]">
          <div className="tech-grid absolute inset-0 opacity-60" aria-hidden="true" />

          <div className="relative min-h-[480px] md:min-h-[500px] lg:min-h-[520px]">
            <Image
              src="/images/plug-free-docking/hero.png"
              alt="SiCore Dynamics plug-free wireless charging — AMR docking over an industrial floor charging pad"
              fill
              priority
              sizes="100vw"
              className="scale-[1.1] object-cover object-[68%_58%] animate-hero-drift"
            />

            <div className="absolute inset-0 hero-glow-strong" />

            <div className="pointer-events-none absolute right-[22%] top-[16%] hidden h-[280px] w-[280px] rounded-full border border-blue-400/25 shadow-[0_0_80px_rgba(11,95,255,0.22)] lg:block animate-pulse-ring" />

            <div className="pointer-events-none absolute right-[31%] top-[8%] hidden h-[430px] w-[2px] bg-gradient-to-b from-transparent via-blue-400/45 to-transparent lg:block animate-energy-beam" />

            <div className="pointer-events-none absolute right-[34%] top-[11%] hidden h-[360px] w-[2px] bg-gradient-to-b from-transparent via-cyan-300/35 to-transparent lg:block animate-energy-beam-slow" />

            <div className="relative z-10 grid min-h-[480px] items-center py-14 md:min-h-[500px] lg:min-h-[520px] lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
              <div className="max-w-3xl px-6 animate-fade-up md:px-10">
                <div className="ai-badge mb-6">{dict.home.heroBadge}</div>

                <h1
                  id="hero-heading"
                  className="hero-speakable font-display text-[30px] font-black leading-[1.08] tracking-[-0.04em] text-[#0B0F19] md:text-[42px] lg:text-[50px]"
                >
                  {dict.home.heroTitleBefore}{" "}
                  <span className="text-gradient-ai">{dict.home.heroTitleAccent}</span>
                </h1>

                <p className="hero-speakable mt-7 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                  {dict.home.heroBody}
                </p>

                <p className="seo-core-phrase mt-4 max-w-2xl text-sm font-semibold leading-6 text-slate-700 md:text-base">
                  {dict.site.seoCorePhrase}.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <Link href={L("/#solutions")} className="btn-primary">
                    {dict.home.exploreSolutions} <span>→</span>
                  </Link>
                  <Link href={L("/products")} className="btn-ghost">
                    {dict.home.viewProducts} <span>→</span>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block" />
            </div>

            <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full transition ${
                    i === 0
                      ? "w-6 bg-gradient-to-r from-[#0B5FFF] to-cyan-400"
                      : "bg-slate-300/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div
            className="glass-panel grid gap-0 rounded-2xl px-6 py-6 md:grid-cols-2 xl:grid-cols-4 xl:px-8"
            role="list"
          >
            {capabilities.map((item, index) => (
              <Link
                key={item.label}
                href={L(item.href)}
                role="listitem"
                className={`group flex gap-5 p-4 transition hover:bg-blue-50/30 ${
                  index < capabilities.length - 1 ? "xl:border-r xl:border-slate-200/80" : ""
                }`}
              >
                <div className="shrink-0 transition group-hover:scale-105">
                  <Icon type={item.icon} />
                </div>

                <div>
                  <h2 className="font-display text-base font-bold text-slate-950 transition group-hover:text-[#0B5FFF]">
                    {item.label}
                  </h2>
                  <p className="mt-3 text-xs leading-5 text-slate-600">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
