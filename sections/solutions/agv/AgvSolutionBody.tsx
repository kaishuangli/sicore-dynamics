import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { uiLabel } from "@/lib/i18n/pick-locale";
import {
  getSolutionFaqsForIndustry,
  getSolutionWhyWirelessForIndustry,
  getUavContactDockBundle,
  type LocalizedIndustry,
} from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";

function getFleetMetrics(locale: Locale) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  return [
    { value: "24/7", label: t("多班次车队利用率", "Utilización de flota en varios turnos", "Multi-shift fleet utilization") },
    {
      value: t("0 针脚", "0 pines", "0 pins"),
      label: t("无机械连接器磨损", "Sin desgaste de conectores mecánicos", "No mechanical connector wear"),
    },
    {
      value: t("防水防尘", "Resistente a la intemperie", "Weatherproof"),
      label: t("全天候稳定运行", "Funcionamiento estable en cualquier clima", "Stands all weather"),
    },
    {
      value: t("车队级", "Flota", "Fleet"),
      label: t("标准化充电区域", "Zonas de carga estandarizadas", "Standardized charging zones"),
    },
  ] as const;
}

function AgvFleetMetrics({ locale }: { locale: Locale }) {
  const fleetMetrics = getFleetMetrics(locale);
  return (
    <section className="bg-[#071225] py-12 lg:py-14" aria-label="Fleet charging metrics">
      <div className="container-page">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {fleetMetrics.map((item) => (
            <div key={item.label} className="border-l-2 border-[#E2232A] pl-5">
              <p className="font-display text-3xl font-black tracking-[-0.03em] text-white md:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300 md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AgvEditorialSplit({
  industry,
  locale,
}: {
  industry: LocalizedIndustry;
  locale: Locale;
}) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const analysis = getSolutionWhyWirelessForIndustry("unmanned-aerial-vehicles", locale);
  const whyRow = analysis.rows[0];
  const principleRow = analysis.rows[1];
  const principleImage = principleRow.visual.type === "image" ? principleRow.visual : null;
  const principleSteps =
    principleRow.visual.type === "principle" ? principleRow.visual.steps : [];

  return (
    <section className="bg-white" aria-label="Why autonomous drone fleets need wireless charging">
      <div className="relative min-h-[420px] overflow-hidden bg-[#0B1220] lg:min-h-[560px]">
        <Image
          src="/images/uav-industrial-charging-dock.jpg"
          alt="Industrial inspection drone on a SiCore wireless charging pad"
          fill
          className="object-cover object-[70%_center]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071225]/85 via-[#071225]/45 to-transparent" />

        <div className="container-page relative flex min-h-[420px] items-center py-16 lg:min-h-[560px] lg:py-20">
          <div className="max-w-2xl">
            <div className="solution-abb-accent" aria-hidden="true" />
            <h2 className="font-display mt-6 text-2xl font-bold leading-snug tracking-[-0.02em] text-white md:text-[32px] lg:text-[36px]">
              {whyRow.title}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-[1.75] text-slate-200 md:text-[17px]">
              {whyRow.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-page py-14 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div className="solution-abb-accent" aria-hidden="true" />
            <h2 className="font-display mt-6 text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[30px]">
              {principleRow.title}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-[1.75] text-[#3a3a3a] md:text-[17px]">
              {principleRow.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {principleImage ? (
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-slate-200 bg-[#0B1220]">
              <Image
                src={principleImage.src}
                alt={principleImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="rounded-sm border border-slate-200 bg-[#F8FAFC] p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                {t("充电原理", "Principio de carga", "Charging Principle")}
              </p>
              <ol className="mt-6 space-y-0">
                {principleSteps.map((step, index) => (
                  <li key={step.label} className="relative flex gap-4 pb-7 last:pb-0">
                    {index < principleSteps.length - 1 ? (
                      <span
                        className="absolute left-[15px] top-8 h-[calc(100%-8px)] w-px bg-[#E2232A]/35"
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#E2232A] bg-white text-xs font-bold text-[#E2232A]">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-display font-bold text-[#0B0F19]">{step.label}</p>
                      <p className="mt-1.5 text-sm leading-6 text-[#3a3a3a]">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function AgvChargingJourney({ industry, locale }: { industry: LocalizedIndustry; locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const flowSteps = (industry as { flowSteps?: readonly string[] }).flowSteps;
  if (!flowSteps?.length) return null;

  return (
    <section
      className="border-y border-slate-200 bg-[#F8FAFC] py-14 lg:py-20"
      aria-labelledby="agv-journey-heading"
    >
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="solution-abb-accent mx-auto" aria-hidden="true" />
          <h2
            id="agv-journey-heading"
            className="font-display mt-6 text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[32px]"
          >
            {t("从任务到充电——再回到任务", "De la misión a la carga — y de vuelta", "From mission to charge — and back")}
          </h2>
          <p className="mt-5 text-base leading-[1.75] text-[#3a3a3a] md:text-[17px]">
            {t(
              "无线机会充电让自主无人机机队无需人工换电池或每次能量补给都进行插拔对接，从而保持持续飞行。",
              "La carga oportunista inalámbrica mantiene las flotas de drones autónomos en vuelo sin cambios manuales de batería ni acoplamiento con conectores en cada parada energética.",
              "Wireless opportunity charging keeps autonomous drone fleets flying without manual battery swaps or connector docking at every energy stop.",
            )}
          </p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {flowSteps.map((step, index) => (
            <li
              key={step}
              className="relative rounded-sm border border-slate-200 bg-white p-6 shadow-sm lg:p-7"
            >
              <span className="font-display text-4xl font-black leading-none text-[#E2232A]/25">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-display mt-4 text-lg font-bold text-[#0B0F19]">{step}</p>
              {index < flowSteps.length - 1 ? (
                <span
                  className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-xl font-bold text-[#E2232A] lg:inline"
                  aria-hidden="true"
                >
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function UavContactChargingDockSection({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const { uavContactDock: dock } = getUavContactDockBundle(locale);

  return (
    <section className="bg-white py-14 lg:py-20" aria-labelledby="uav-contact-dock-heading">
      <div className="container-page space-y-16 lg:space-y-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-slate-200 bg-[#F8FAFC]">
            <Image
              src={dock.image}
              alt={dock.imageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <div className="solution-abb-accent" aria-hidden="true" />
            <h2
              id="uav-contact-dock-heading"
              className="font-display mt-6 text-3xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[40px]"
            >
              {dock.title}
            </h2>
            <p className="mt-5 text-base leading-[1.75] text-[#3a3a3a] md:text-[17px]">{dock.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {dock.features.map((feature) => (
                <div key={feature.title} className="rounded-sm border border-slate-200 bg-[#F8FAFC] p-4">
                  <p className="font-display text-sm font-bold text-[#0B0F19]">{feature.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#3a3a3a]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-sm bg-[#0B5FFF] px-6 py-10 text-white md:px-10">
          <h3 className="font-display text-center text-xl font-bold md:text-2xl">{dock.processTitle}</h3>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {dock.processSteps.map((step, index) => (
              <li key={step.label} className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-display text-sm font-bold md:text-base">{step.label}</p>
                <p className="mt-2 text-xs leading-5 text-white/85 md:text-sm">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-[#0B0F19]">{dock.insideTitle}</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {dock.insidePoints.map((point) => (
                <div key={point.label} className="border-l-2 border-[#0B5FFF] bg-[#F8FAFC] px-4 py-4">
                  <p className="font-display text-sm font-bold text-[#0B0F19]">{point.label}</p>
                  <p className="mt-2 text-sm leading-6 text-[#3a3a3a]">{point.detail}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-sm border border-slate-200 bg-[#0B1220]">
              <Image
                src={dock.insideImage}
                alt={dock.insideImageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-sm border border-slate-200">
            <div className="bg-[#0B0F19] px-5 py-4">
              <h3 className="font-display text-lg font-bold text-white">
                {t("典型技术规格", "Especificaciones técnicas (típicas)", "Tech Specifications (Typical)")}
              </h3>
            </div>
            <table className="w-full table-fixed text-left text-sm">
              <tbody>
                {dock.specs.map((spec, index) => (
                  <tr key={spec.label} className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <th className="px-5 py-3 font-semibold text-slate-700">{spec.label}</th>
                    <td className="px-5 py-3 text-slate-600">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold text-[#0B0F19]">{dock.interfaceTitle}</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[dock.basePlate, dock.droneSide].map((block) => (
              <article key={block.title} className="rounded-sm border border-slate-200 bg-[#F8FAFC] p-6">
                <h4 className="font-display text-lg font-bold text-[#0B0F19]">{block.title}</h4>
                <ul className="mt-4 space-y-3">
                  {block.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-[#3a3a3a]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B5FFF]" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold text-[#0B0F19]">{dock.comparisonTitle}</h3>

          <div className="mt-6 border-y border-slate-300 py-8 md:py-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="font-display text-lg font-bold text-[#0B0F19]">{dock.wirelessLabel}</p>
                <ul className="mt-5 space-y-3.5">
                  {dock.wireless.map((item) => (
                    <li key={item} className="text-base leading-7 text-[#3a3a3a]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-[#0B0F19]">{dock.contactLabel}</p>
                <ul className="mt-5 space-y-3.5">
                  {dock.contact.map((item) => (
                    <li key={item} className="text-base leading-7 text-[#3a3a3a]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-2 text-base leading-7 text-[#3a3a3a]">
            {dock.comparisonNote.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AgvFaqSection({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const faqs = getSolutionFaqsForIndustry("unmanned-aerial-vehicles", locale);

  return (
    <section
      className="border-t border-slate-200 bg-white py-14 lg:py-20"
      aria-labelledby="agv-faq-heading"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <div className="solution-abb-accent" aria-hidden="true" />
            <h2
              id="agv-faq-heading"
              className="font-display mt-6 text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[32px] lg:sticky lg:top-28"
            >
              {t(
                "关于无人机的常见问题",
                "Preguntas frecuentes sobre vehículos aéreos no tripulados",
                "Frequently Asked Questions About Unmanned Aerial Vehicles",
              )}
            </h2>
          </div>

          <ol className="divide-y divide-slate-200 border-t-2 border-[#0B0F19]">
            {faqs.map((item, index) => (
              <li key={item.question}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start gap-5 py-6 md:py-7 [&::-webkit-details-marker]:hidden">
                    <span className="w-8 shrink-0 font-display text-base font-bold text-[#0B0F19] md:text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-base leading-7 text-[#0B0F19] md:text-lg">
                      {item.question}
                    </span>
                  </summary>
                  <div className="pb-6 pl-[3.25rem] md:pb-7">
                    <p className="text-base leading-[1.75] text-[#3a3a3a]">{item.answer}</p>
                  </div>
                </details>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function AgvFleetCta({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);

  return (
    <section
      className="relative overflow-hidden bg-[#071225] py-16 lg:py-24"
      aria-labelledby="agv-cta-heading"
    >
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <div className="container-page relative text-center">
        <div className="solution-abb-accent mx-auto" aria-hidden="true" />
        <h2
          id="agv-cta-heading"
          className="font-display mt-6 text-2xl font-bold tracking-[-0.02em] text-white md:text-[34px]"
        >
          {t(
            "以自主充电基础设施扩展您的无人机机队",
            "Amplíe su flota de drones con infraestructura de carga autónoma",
            "Scale your drone fleet with autonomous charging infrastructure",
          )}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          {t(
            "与 SiCore Dynamics 探讨无线与接触式对接架构、功率等级选择，以及面向无人机配送、巡检与巡逻项目的 OEM 集成。",
            "Hable con SiCore Dynamics sobre arquitecturas de acoplamiento inalámbrico y por contacto, selección de clases de potencia e integración OEM para programas de entrega, inspección y patrulla con UAV.",
            "Talk to SiCore Dynamics about wireless and contact dock architecture, power class selection, and OEM integration for UAV delivery, inspection, and patrol programs.",
          )}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={L("/contact")} className="btn-primary inline-flex">
            {t("规划您的无人机充电方案", "Planifique su solución de carga para drones", "Plan Your Drone Charging")} <span aria-hidden="true">→</span>
          </Link>
          <Link
            href={L("/products")}
            className="inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-[#E2232A]"
          >
            {t("查看产品平台", "Ver plataformas de productos", "View product platforms")} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function AgvSolutionBody({
  industry,
  locale,
}: {
  industry: LocalizedIndustry;
  locale: Locale;
}) {
  return (
    <>
      <AgvFleetMetrics locale={locale} />
      <AgvEditorialSplit industry={industry} locale={locale} />
      <AgvChargingJourney industry={industry} locale={locale} />
      <UavContactChargingDockSection locale={locale} />
      <AgvFaqSection locale={locale} />
      <AgvFleetCta locale={locale} />
    </>
  );
}
