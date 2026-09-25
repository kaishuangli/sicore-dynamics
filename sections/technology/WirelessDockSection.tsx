import Image from "next/image";
import Link from "next/link";
import LearnMoreLink from "@/components/LearnMoreLink";
import SectionEyebrow from "@/components/SectionEyebrow";
import TechIcon from "@/components/TechIcon";
import type { Locale } from "@/lib/i18n/config";
import { getPlugFreeDockingPage } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import { getPlugFreeTopicHref } from "@/lib/plug-free-docking-topics";

function ModuleHeading({
  id,
  number,
  title,
  description,
  locale,
}: {
  id: string;
  number: string;
  title: string;
  description: string;
  locale: Locale;
}) {
  return (
    <header id={id} className="max-w-3xl scroll-mt-28">
      <h3 className="font-display text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-[32px]">
        <span className="text-[#0B5FFF]">{number}</span> {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base md:leading-8">{description}</p>
      <LearnMoreLink href={getPlugFreeTopicHref(id, locale)} locale={locale} />
    </header>
  );
}

export default function WirelessDockSection({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const content = getPlugFreeDockingPage(locale).wirelessDock;
  const { architecture, alignment, surface, fod, sealed, cta } = content;

  return (
    <section id={content.id} className="border-t border-slate-200/70" aria-labelledby="wireless-dock-heading">
      <div className="bg-white pt-10 lg:pt-12">
        <div className="container-page">
          <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
        </div>
      </div>

      {/* Full-bleed cinematic intro */}
      <div className="relative min-h-[420px] overflow-hidden bg-[#071225] md:min-h-[520px]">
        <Image
          src={content.heroImage}
          alt="Wireless dock autonomous contactless charging"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={95}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071225] via-[#071225]/85 to-[#071225]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/80 via-transparent to-[#071225]/40" />

        <div className="container-page relative flex min-h-[420px] items-center py-16 md:min-h-[520px] md:py-20">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#38BDF8]">
              {t("对接技术", "Docking Technology", "Docking Technology")}
            </p>
            <h2
              id="wireless-dock-heading"
              className="font-display mt-4 text-[34px] font-black leading-[1.05] tracking-[-0.04em] text-white md:text-[48px]"
            >
              {content.title}
            </h2>
            <p className="mt-3 text-xl font-semibold text-white/90">{content.subtitle}</p>
            <p className="mt-5 text-sm leading-7 text-slate-300 md:text-base md:leading-8">
              {content.description}
            </p>
          </div>
        </div>
      </div>

      {/* 01 Dock Architecture */}
      <div className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <ModuleHeading
            id={architecture.id}
            number={architecture.number}
            title={architecture.title}
            description={architecture.description}
            locale={locale}
          />

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.25fr_0.85fr] lg:gap-14">
            <div className="relative aspect-[16/11] overflow-hidden bg-[#F1F5F9]">
              <Image
                src={architecture.image}
                alt={architecture.imageAlt}
                fill
                className="object-contain object-center p-4"
                sizes="(max-width: 1024px) 100vw, 58vw"
                quality={95}
              />
            </div>

            <ol className="space-y-0">
              {architecture.layers.map((layer, index) => (
                <li
                  key={layer.label}
                  className="group grid grid-cols-[auto_1fr] gap-4 border-b border-slate-200 py-4 last:border-b-0"
                >
                  <span className="font-display pt-0.5 text-sm font-bold tabular-nums text-[#0B5FFF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-base font-extrabold text-[#0B0F19] transition group-hover:text-[#0B5FFF]">
                      {layer.label}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-500">{layer.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* 02 Coil Alignment */}
      <div className="bg-[#F8FAFC] py-16 lg:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <ModuleHeading
              id={alignment.id}
              number={alignment.number}
              title={alignment.title}
              description={alignment.description}
              locale={locale}
            />
            <ul className="grid w-full gap-3 sm:grid-cols-2 lg:w-[340px] lg:shrink-0">
              {alignment.stats.map((stat) => (
                <li key={stat.label} className="bg-white px-5 py-4 shadow-[0_1px_0_rgba(15,23,42,0.06)]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="font-display mt-2 text-2xl font-black text-[#0B5FFF]">{stat.value}</p>
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {alignment.cases.map((item, index) => (
              <li key={item.label} className="bg-white shadow-[0_1px_0_rgba(15,23,42,0.06)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0B1220]">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={92}
                  />
                  <span className="absolute left-3 top-3 bg-[#0B5FFF] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="px-5 py-5">
                  <p className="font-display text-lg font-extrabold text-[#0B0F19]">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 03 Charging Surface */}
      <div className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <ModuleHeading
            id={surface.id}
            number={surface.number}
            title={surface.title}
            description={surface.description}
            locale={locale}
          />

          <ul className="mt-10 grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {surface.features.map((item) => (
              <li key={item.label} className="bg-white px-5 py-6">
                <div className="flex h-11 w-11 items-center justify-center bg-[#EFF6FF]">
                  <TechIcon type={item.icon} className="h-7 w-7" />
                </div>
                <p className="font-display mt-4 text-base font-extrabold text-[#0B0F19]">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.detail}</p>
              </li>
            ))}
          </ul>

          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {surface.materials.map((item) => (
              <li key={item.label} className="group overflow-hidden bg-[#F8FAFC]">
                <div className="relative aspect-[5/4] overflow-hidden bg-[#0B1220]">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={92}
                  />
                </div>
                <div className="px-5 py-5">
                  <p className="font-display text-lg font-extrabold text-[#0B0F19]">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 04 FOD */}
      <div className="bg-[#F8FAFC] py-16 lg:py-20">
        <div className="container-page">
          <ModuleHeading
            id={fod.id}
            number={fod.number}
            title={fod.title}
            description={fod.description}
            locale={locale}
          />

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.35fr_0.75fr] lg:gap-12">
            <ul className="grid gap-4 sm:grid-cols-2">
              {fod.cases.map((item) => (
                <li key={item.label} className="overflow-hidden bg-white shadow-[0_1px_0_rgba(15,23,42,0.06)]">
                  <div className="relative aspect-square overflow-hidden bg-[#0B1220]">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 30vw"
                      quality={92}
                    />
                    <span
                      className={`absolute right-3 top-3 inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white ${
                        item.safe ? "bg-emerald-600" : "bg-rose-600"
                      }`}
                    >
                      <span aria-hidden="true">{item.safe ? "✓" : "✕"}</span>
                      {t(
                        item.safe ? "无遮挡" : "被遮挡",
                        item.safe ? "Despejado" : "Obstruido",
                        item.safe ? "Clear" : "Blocked",
                      )}
                    </span>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-sm font-extrabold text-[#0B0F19]">{item.label}</p>
                    <p
                      className={`mt-1 text-xs font-semibold ${
                        item.safe ? "text-emerald-600" : "text-rose-600"
                      }`}
                    >
                      {item.status}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="bg-[#071225] px-6 py-7 text-white lg:sticky lg:top-24">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#38BDF8]">
                {t("防护能力", "Capacidades de protección", "Protection Capabilities")}
              </p>
              <ul className="mt-6 space-y-5">
                {fod.features.map((item) => (
                  <li key={item.label} className="flex items-start gap-3 border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                    <TechIcon type={item.icon} className="h-8 w-8 shrink-0" />
                    <span>
                      <span className="block text-sm font-bold text-white">{item.label}</span>
                      <span className="mt-1 block text-sm leading-6 text-slate-300">{item.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>

      {/* 05 Sealed Dock Design */}
      <div className="bg-white py-16 lg:py-20">
        <div className="container-page">
          <ModuleHeading
            id={sealed.id}
            number={sealed.number}
            title={sealed.title}
            description={sealed.description}
            locale={locale}
          />

          <ul className="mt-10 grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {sealed.protections.map((item) => (
              <li key={item.label} className="bg-[#F8FAFC] px-5 py-6">
                <div className="flex h-11 w-11 items-center justify-center bg-white">
                  <TechIcon type={item.icon} className="h-7 w-7" />
                </div>
                <p className="font-display mt-4 text-base font-extrabold text-[#0B0F19]">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.detail}</p>
              </li>
            ))}
          </ul>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sealed.environments.map((item) => (
              <li key={item.label} className="group relative overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0B1220]">
                  <Image
                    src={item.image}
                    alt={`${item.label} environment`}
                    fill
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    quality={92}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-display text-base font-extrabold text-white">
                    {item.label}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden bg-[#071225] py-14 lg:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
          <div className="tech-grid absolute inset-0" />
        </div>
        <div className="container-page relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="font-display text-2xl font-black tracking-[-0.03em] text-white md:text-3xl">
              {cta.title}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base md:leading-8">{cta.text}</p>
          </div>
          <Link href={withLocale("/contact", locale)} className="btn-primary shrink-0">
            {t("联系我们的工程师", "Contacte a nuestros ingenieros", "Contact Our Engineers")} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
