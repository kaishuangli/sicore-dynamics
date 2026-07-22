import Image from "next/image";
import Link from "next/link";
import { getPrincipleSteps } from "@/lib/solution-page-registry";
import type { Locale } from "@/lib/i18n/config";
import { getSolutionWhyWirelessForIndustry, type LocalizedIndustry } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { SolutionCtaBlock, SolutionFaqBlock } from "@/sections/solutions/shared/SolutionBlocks";

export default function ConsumerSolutionBody({
  industry,
  locale,
}: {
  industry: LocalizedIndustry;
  locale: Locale;
}) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const analysis = getSolutionWhyWirelessForIndustry(industry.id, locale);
  const [whyRow, principleRow] = analysis.rows;
  const principleSteps = getPrincipleSteps(principleRow);

  return (
    <>
      <section className="border-t border-slate-200 bg-white py-14 lg:py-20">
        <div className="container-page">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
            {t("兼容 Qi 标准的 OEM 平台", "Plataformas OEM compatibles con Qi", "Qi-compatible OEM platforms")}
          </p>
          <h2 className="font-display mt-3 text-2xl font-bold text-[#0B0F19] md:text-[32px]">
            {t("产品集成场景", "Escenarios de integración de productos", "Product integration scenarios")}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industry.useCases.map((useCase) => (
              <article key={useCase.title} className="rounded-sm border border-slate-200 bg-[#F8FAFC] p-4 text-center">
                <div className="relative mx-auto h-28 w-full">
                  <Image src={useCase.image} alt={useCase.alt} fill className="object-contain" />
                </div>
                <h3 className="font-display mt-4 text-sm font-bold text-[#0B0F19]">{useCase.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#3a3a3a]">{useCase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071225] py-14 text-white lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-[30px]">{whyRow.title}</h2>
            <div className="mt-6 space-y-4 text-base leading-[1.75] text-slate-300">
              {whyRow.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-wider text-[#E2232A]">
              {t("能量流", "Flujo de energía", "Power flow")}
            </p>
            <ul className="mt-6 space-y-3">
              {principleSteps.map((step) => (
                <li key={step.label} className="border-b border-white/10 pb-3 last:border-0">
                  <p className="font-bold">{step.label}</p>
                  <p className="mt-1 text-sm text-slate-400">{step.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-xl font-bold text-[#0B0F19]">{principleRow.title}</h2>
          <p className="mt-4 text-base leading-[1.75] text-[#3a3a3a]">{principleRow.paragraphs.join(" ")}</p>
        </div>
      </section>

      <SolutionFaqBlock
        industryId={industry.id}
        title={t(
          "常见问题 — 消费电子无线充电",
          "Preguntas frecuentes — Carga inalámbrica para electrónica de consumo",
          "FAQ — Consumer Wireless Charging",
        )}
        variant="compact"
        locale={locale}
      />
      <SolutionCtaBlock
        theme="brand"
        title={t(
          "将 Qi 无线充电集成到您的产品中",
          "Integre la carga inalámbrica Qi en su producto",
          "Integrate Qi wireless charging into your product",
        )}
        description={t(
          "SiCore 60W 与 200W 发射/接收模块，适用于手机、可穿戴设备、耳机充电盒及手持式 OEM 平台。",
          "Módulos TX/RX SiCore de 60W y 200W para teléfonos, wearables, estuches de auriculares y plataformas OEM portátiles.",
          "SiCore 60W and 200W TX/RX modules for phones, wearables, earbuds cases, and handheld OEM platforms.",
        )}
        ctaLabel={t("申请 OEM 样品", "Solicitar muestras OEM", "Request OEM Samples")}
        secondaryHref="/products"
        secondaryLabel={t("浏览模块", "Ver módulos", "Browse modules")}
        locale={locale}
      />
    </>
  );
}
