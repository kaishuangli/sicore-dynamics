import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";

export default function TechHero({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);

  return (
    <section
      className="relative overflow-hidden bg-[#0B0F19] py-16 lg:py-24"
      aria-labelledby="tech-hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0a1628] to-[#071225]" />
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />

      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full border border-[#0B5FFF]/20 shadow-[0_0_80px_rgba(11,95,255,0.15)] animate-pulse-ring" />
      <div className="pointer-events-none absolute right-[18%] top-[20%] h-48 w-48 rounded-full border border-cyan-400/20 shadow-[0_0_60px_rgba(56,189,248,0.12)] animate-pulse-ring" />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400">
              {t("技术平台", "Plataforma tecnológica", "Technology Platform")}
            </p>
            <h1
              id="tech-hero-heading"
              className="font-display mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.04em] text-white md:text-[42px] lg:text-[48px]"
            >
              {t(
                "自主充电技术平台",
                "Plataforma tecnológica de carga autónoma",
                "Autonomous Charging Technology Platform",
              )}
            </h1>
            <p className="mt-6 text-base leading-7 text-slate-400 md:text-lg">
              {t(
                "从功率传输与对接到充电智能和 OEM 集成，SiCore 提供机器自主充电所需的完整技术栈。",
                "Desde la transferencia de energía y el acoplamiento hasta la inteligencia de carga y la integración OEM, SiCore proporciona la pila tecnológica necesaria para que las máquinas se carguen de forma autónoma.",
                "From power transfer and docking to charging intelligence and OEM integration, SiCore provides the technology stack required for machines to charge autonomously.",
              )}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href={L("/products")} className="btn-primary">
                {t("探索产品", "Explorar productos", "Explore Products")} <span aria-hidden="true">→</span>
              </Link>
              <Link
                href={L("/contact")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                {t("联系工程团队", "Contacte al equipo de ingeniería", "Contact Engineering")} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(11,95,255,0.25),transparent_65%)]" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[4/3] min-h-[280px]">
                <Image
                  src="/images/hero-wireless-robotics.jpg"
                  alt="Autonomous charging for industrial robots and mobile machines"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[70%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
