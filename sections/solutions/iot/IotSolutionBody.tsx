import Image from "next/image";
import Link from "next/link";
import { getPrincipleSteps } from "@/lib/solution-page-registry";
import { getSolutionWhyWirelessForIndustry } from "@/lib/i18n/content";
import type { Industry } from "@/lib/industries";
import type { Locale } from "@/lib/i18n/config";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import { MetricsStrip, SolutionCtaBlock, SolutionFaqBlock } from "@/sections/solutions/shared/SolutionBlocks";

export default function IotSolutionBody({
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

  return (
    <>
      <MetricsStrip
        theme="slate"
        items={[
          { value: "Outdoor", label: "Dust, mud, and all-weather duty" },
          { value: "Sealed", label: "No exposed charging contacts" },
          { value: "200–1500W", label: "Field robot power classes" },
          { value: "24/7", label: "Autonomous opportunity charging" },
        ]}
      />

      <section className="tech-grid border-t border-slate-200 bg-white py-14 lg:py-20">
        <div className="container-page grid gap-14 lg:grid-cols-[240px_1fr] lg:gap-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
              {t("农业机器人", "Robótica agrícola", "Agricultural Robotics")}
            </p>
            <nav className="mt-4 space-y-3 text-sm font-semibold text-slate-600">
              <p className="text-[#0B0F19]">{t("为何选择无线", "Por qué inalámbrico", "Why wireless")}</p>
              <p>{t("原理", "Principio", "Principle")}</p>
              <p>{t("部署案例", "Implementaciones", "Deployments")}</p>
            </nav>
          </aside>
          <div className="space-y-16">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#0B0F19] md:text-[30px]">{whyRow.title}</h2>
              <div className="mt-6 space-y-5 text-base leading-[1.75] text-[#3a3a3a]">
                {whyRow.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div className="border-t border-slate-200 pt-12">
              <h2 className="font-display text-2xl font-bold text-[#0B0F19]">{principleRow.title}</h2>
              <ol className="mt-8 space-y-4">
                {principleSteps.map((step, i) => (
                  <li key={step.label} className="flex gap-4 rounded-sm border border-slate-200 bg-[#F8FAFC] p-4">
                    <span className="font-mono text-sm font-bold text-[#0B5FFF]">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="font-bold text-[#0B0F19]">{step.label}</p>
                      <p className="mt-1 text-sm text-[#3a3a3a]">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-[#0B0F19]">
            {t("农业机器人部署案例", "Implementaciones de robótica agrícola", "Agricultural robotics deployments")}
          </h2>
          <ul className="mt-8 divide-y divide-slate-200 rounded-sm border border-slate-200 bg-white">
            {industry.useCases.map((useCase) => (
              <li key={useCase.title} className="flex gap-5 p-5">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm bg-[#F8FAFC]">
                  <Image src={useCase.image} alt={useCase.alt} fill className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display font-bold text-[#0B0F19]">{useCase.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#3a3a3a]">{useCase.description}</p>
                </div>
                <Link href={L("/contact")} className="shrink-0 self-center text-xs font-bold text-[#0B5FFF]">
                  →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SolutionFaqBlock
        industryId={industry.id}
        title={t(
          `常见问题 — ${industry.title}`,
          `Preguntas frecuentes — ${industry.title}`,
          `FAQ — ${industry.title}`,
        )}
        variant="split"
        locale={locale}
      />
      <SolutionCtaBlock
        theme="dark"
        title={t(
          "让农业机器人车队持续户外充电",
          "Mantenga flotas de robots agrícolas cargando al aire libre",
          "Keep agricultural robot fleets charging outdoors",
        )}
        description={t(
          "与 SiCore 探讨面向田间机器人、喷洒车队、温室移动设备与收割平台的密封式无线对接方案。",
          "Hable con SiCore sobre bases inalámbricas selladas para robots de campo, flotas de pulverización, movilidad en invernaderos y plataformas de cosecha.",
          "Talk with SiCore about sealed wireless docks for field robots, spraying fleets, greenhouse mobility, and harvest platforms.",
        )}
        ctaLabel={t(
          "咨询农业机器人充电方案",
          "Consultar carga para robótica agrícola",
          "Discuss Farm Robotics Charging",
        )}
        secondaryHref="/products"
        secondaryLabel={t("查看产品平台", "Ver plataformas de productos", "View product platforms")}
        locale={locale}
      />
    </>
  );
}
