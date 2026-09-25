import Image from "next/image";
import Link from "next/link";
import TechIcon from "@/components/TechIcon";
import type { Locale } from "@/lib/i18n/config";
import { getIntelligentChargingPage, getTechnologyPlatforms } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import IntelligentChargingVisual from "@/sections/technology/IntelligentChargingVisual";

export default function IntelligentChargingPanel({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);
  const content = getIntelligentChargingPage(locale);
  const others = getTechnologyPlatforms(locale).filter((item) => item.id !== "intelligent-charging");

  return (
    <div className="bg-white">
      {/* Hero — dark photo only in this band */}
      <section className="relative overflow-hidden" aria-labelledby="ics-heading">
        <div className="absolute inset-0">
          <Image
            src={content.heroImage}
            alt="Autonomous robots and AGVs on wireless charging pads"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071225]/95 via-[#071225]/80 to-[#071225]/35" />
        </div>

        <div className="container-page relative py-12 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300/90">
                {content.eyebrow}
              </p>
              <h1
                id="ics-heading"
                className="font-display mt-4 max-w-xl text-[34px] font-black leading-[1.05] tracking-[-0.04em] text-white md:text-[48px]"
              >
                {content.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-200">{content.description}</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{content.supporting}</p>

              <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {content.highlights.map((item) => (
                  <li key={item.label} className="flex flex-col items-start gap-2">
                    <TechIcon type={item.icon} className="h-8 w-8" />
                    <span className="text-xs font-semibold leading-snug text-slate-100">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/15 bg-white/95 p-5 text-[#0B0F19] shadow-lg md:p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B5FFF]">
                  {t("车队管理", "Gestión de flotas", "Fleet Management")}
                </p>
                <p className="text-sm font-bold text-[#0B0F19]">
                  {t("可用率", "Disponibilidad", "Availability")}{" "}
                  <span className="text-[#0B5FFF]">{content.fleetAvailability}</span>
                </p>
              </div>
              <div className="mt-5 grid grid-cols-4 gap-3">
                {content.fleetStats.map((stat) => (
                  <div key={stat.label} className="border border-slate-200 bg-[#F8FAFC] px-2 py-3 text-center">
                    <p className="font-display text-xl font-black text-[#0B0F19]">{stat.value}</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-2">
                {(locale === "zh"
                  ? [
                      { name: "机器人 01", status: "充电中 72%", color: "text-[#0B5FFF]" },
                      { name: "机器人 02", status: "充电中 48%", color: "text-[#0B5FFF]" },
                      { name: "机器人 03", status: "已就绪 90%", color: "text-emerald-600" },
                      { name: "机器人 04", status: "已排队 35%", color: "text-amber-600" },
                    ]
                  : locale === "es"
                    ? [
                        { name: "Robot 01", status: "Cargando 72%", color: "text-[#0B5FFF]" },
                        { name: "Robot 02", status: "Cargando 48%", color: "text-[#0B5FFF]" },
                        { name: "Robot 03", status: "Listo 90%", color: "text-emerald-600" },
                        { name: "Robot 04", status: "Programado 35%", color: "text-amber-600" },
                      ]
                    : [
                      { name: "Robot 01", status: "Charging 72%", color: "text-[#0B5FFF]" },
                      { name: "Robot 02", status: "Charging 48%", color: "text-[#0B5FFF]" },
                      { name: "Robot 03", status: "Ready 90%", color: "text-emerald-600" },
                      { name: "Robot 04", status: "Scheduled 35%", color: "text-amber-600" },
                    ]
                ).map((robot) => (
                  <div
                    key={robot.name}
                    className="flex items-center justify-between border border-slate-200 bg-white px-3 py-2.5"
                  >
                    <span className="text-sm font-semibold text-slate-800">{robot.name}</span>
                    <span className={`text-sm font-bold ${robot.color}`}>{robot.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow — light */}
      <section className="border-b border-slate-200/70 bg-[#F8FAFC] py-14 lg:py-16" aria-labelledby="ics-workflow-heading">
        <div className="container-page">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
            {content.workflowEyebrow}
          </p>
          <h2
            id="ics-workflow-heading"
            className="font-display mt-3 max-w-3xl text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl"
          >
            {content.workflowTitle}
          </h2>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {content.workflow.map((step, index) => (
              <li key={step.label} className="relative border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between gap-2">
                  <TechIcon type={step.icon} className="h-8 w-8" />
                  <span className="font-display text-xs font-bold tabular-nums text-[#0B5FFF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="font-display mt-4 text-sm font-extrabold text-[#0B0F19]">{step.label}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Modules — light alternating, dark dashboards only as visuals */}
      {content.modules.map((module, index) => {
        const imageLeft = index % 2 === 1;

        return (
          <section
            key={module.id}
            id={module.id}
            className={`scroll-mt-[190px] border-b border-slate-200/70 py-14 lg:py-20 ${
              index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
            }`}
            aria-labelledby={`${module.id}-heading`}
          >
            <div className="container-page">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div className={imageLeft ? "lg:order-2" : undefined}>
                  <div className="inline-block border border-slate-200 bg-[#F8FAFC] px-4 py-4">
                    <p className="font-display text-3xl font-black tabular-nums text-[#0B5FFF] md:text-4xl">
                      {module.number}
                    </p>
                    <h2
                      id={`${module.id}-heading`}
                      className="font-display mt-2 text-xl font-extrabold tracking-[-0.02em] text-[#0B0F19] md:text-2xl"
                    >
                      {module.title}
                    </h2>
                  </div>
                  <p className="mt-5 text-base font-semibold text-slate-800">{module.subtitle}</p>
                  <p className="mt-4 text-base leading-8 text-slate-600">{module.description}</p>
                  <p className="mt-4 text-base leading-8 text-slate-600">{module.detail}</p>

                  <ul className="mt-6 space-y-2">
                    {module.technologies.map((tech) => (
                      <li key={tech} className="flex gap-2 text-sm leading-6 text-slate-700">
                        <span
                          className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B5FFF]"
                          aria-hidden="true"
                        />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={L("/contact")}
                    className="mt-6 inline-flex text-sm font-bold text-[#0B5FFF] transition hover:text-[#0847cc]"
                  >
                    {t("了解更多", "Más información", "Learn more")} <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <div
                  className={`overflow-hidden border border-slate-200 ${imageLeft ? "lg:order-1" : ""}`}
                >
                  <div className="aspect-[14/9] w-full">
                    <IntelligentChargingVisual type={module.visual} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Benefits — light */}
      <section className="border-b border-slate-200/70 bg-white py-14 lg:py-16" aria-labelledby="ics-benefits-heading">
        <div className="container-page">
          <p
            id="ics-benefits-heading"
            className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]"
          >
            {content.benefitsEyebrow}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {content.benefits.map((benefit) => (
              <article key={benefit.title} className="border border-slate-200 bg-[#F8FAFC] p-5">
                <TechIcon type={benefit.icon} className="h-8 w-8" />
                <h3 className="font-display mt-4 text-base font-extrabold text-[#0B0F19]">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B5FFF] py-12 lg:py-14">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-black tracking-[-0.03em] text-white md:text-3xl">
              {content.ctaTitle}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100 md:text-base">{content.ctaText}</p>
          </div>
          <Link
            href={L("/contact")}
            className="inline-flex shrink-0 items-center bg-white px-5 py-3 text-sm font-bold text-[#0B5FFF] transition hover:bg-slate-100"
          >
            {content.ctaLabel} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* More platforms */}
      <section className="bg-white py-14 lg:py-16">
        <div className="container-page">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
            {t("更多技术平台", "Más plataformas tecnológicas", "More Technology Platforms")}
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.id}
                href={L(`/technology/${item.id}`)}
                className="group border-t border-slate-300 pt-5"
              >
                <h3 className="font-display text-base font-extrabold text-[#0B0F19] transition group-hover:text-[#0B5FFF]">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
