import Image from "next/image";
import Link from "next/link";
import { getPrincipleSteps } from "@/lib/solution-page-registry";
import { getSolutionWhyWirelessForIndustry } from "@/lib/i18n/content";
import type { Industry } from "@/lib/industries";
import type { Locale } from "@/lib/i18n/config";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import { MetricsStrip, SolutionCtaBlock, SolutionFaqBlock } from "@/sections/solutions/shared/SolutionBlocks";

export default function AutomationSolutionBody({
  industry,
  locale,
}: {
  industry: Industry;
  locale: Locale;
}) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);
  const analysis = getSolutionWhyWirelessForIndustry(industry.id, locale);
  const [whyRow, principleRow] = analysis.rows;
  const principleSteps = getPrincipleSteps(principleRow);
  const whyImage = whyRow.visual.type === "image" ? whyRow.visual : null;

  return (
    <>
      <MetricsStrip
        theme="blue"
        items={[
          { value: "24/7", label: "Continuous robotic cell operation" },
          { value: "IP-rated", label: "Sealed charging in harsh environments" },
          { value: "Zero wear", label: "No connector fatigue from vibration" },
          { value: "60W–3kW", label: "Scalable power for robot platforms" },
        ]}
      />

      <section className="border-t border-slate-200 bg-white py-14 lg:py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="solution-abb-accent !bg-[#0B5FFF]" aria-hidden="true" />
            <h2 className="font-display mt-6 text-2xl font-bold text-[#0B0F19] md:text-[30px]">{whyRow.title}</h2>
            <div className="mt-6 space-y-5 text-base leading-[1.75] text-[#3a3a3a] md:text-[17px]">
              {whyRow.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          {whyImage ? (
            <div className="relative aspect-[4/3] overflow-hidden bg-[#F8FAFC]">
              <Image src={whyImage.src} alt={whyImage.alt} fill className="object-cover" />
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-[#0B0F19] md:text-[30px]">{principleRow.title}</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-[1.75] text-[#3a3a3a]">
            {principleRow.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {principleSteps.map((step, i) => (
              <div key={step.label} className="rounded-sm border border-slate-200 bg-white p-5">
                <span className="font-display text-2xl font-black text-[#0B5FFF]/30">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-display mt-3 font-bold text-[#0B0F19]">{step.label}</p>
                <p className="mt-2 text-sm leading-6 text-[#3a3a3a]">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20" aria-labelledby="robotics-timeline-heading">
        <div className="container-page">
          <div className="solution-abb-accent !bg-[#0B5FFF]" aria-hidden="true" />
          <h2 id="robotics-timeline-heading" className="font-display mt-6 text-2xl font-bold text-[#0B0F19] md:text-[34px]">
            {t("机器人充电应用", "Aplicaciones de carga robótica", "Robotic charging applications")}
          </h2>
          <ol className="relative mt-12 space-y-0">
            {industry.useCases.map((useCase, index) => (
              <li key={useCase.title} className="relative grid gap-8 border-t border-slate-200 py-10 lg:grid-cols-[120px_1fr_280px] lg:items-center lg:gap-12">
                <span className="font-display text-4xl font-black text-[#0B5FFF]/25">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#0B0F19]">{useCase.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#3a3a3a]">{useCase.description}</p>
                  <Link href={L("/contact")} className="mt-4 inline-flex text-sm font-bold text-[#0B5FFF]">
                    {t("了解更多 →", "Más información →", "Learn more →")}
                  </Link>
                </div>
                <div className="relative h-36 overflow-hidden rounded-sm bg-[#F8FAFC] lg:h-40">
                  <Image src={useCase.image} alt={useCase.alt} fill className={useCase.image.endsWith(".png") ? "object-contain p-4" : "object-cover"} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SolutionFaqBlock
        industryId={industry.id}
        title={t(
          `关于${industry.title}方案的常见问题`,
          `Preguntas frecuentes sobre soluciones de ${industry.title}`,
          `Frequently Asked Questions About ${industry.title} Solutions`,
        )}
        locale={locale}
      />
      <SolutionCtaBlock
        theme="brand"
        title={t(
          "将无线充电融入您的机器人平台",
          "Integre carga inalámbrica en su plataforma robótica",
          "Engineer wireless charging into your robotic platform",
        )}
        description={t(
          "联系 SiCore，探讨协作机器人单元、产线充电与工业机器人的 OEM 接收端集成方案。",
          "Contacte a SiCore para analizar celdas de cobots, carga en línea de producción e integración OEM de receptores para robots industriales.",
          "Contact SiCore to discuss cobot cells, production line charging, and OEM receiver integration for industrial robots.",
        )}
        ctaLabel={t("咨询机器人充电工程", "Consultar ingeniería de carga robótica", "Talk to Robotics Engineering")}
        secondaryHref="/products"
        secondaryLabel={t("查看电源平台", "Ver plataformas de energía", "View power platforms")}
        locale={locale}
      />
    </>
  );
}
