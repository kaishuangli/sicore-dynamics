import Image from "next/image";
import Link from "next/link";
import { getPrincipleSteps } from "@/lib/solution-page-registry";
import type { Locale } from "@/lib/i18n/config";
import { getSolutionWhyWirelessForIndustry, type LocalizedIndustry } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import { SolutionCtaBlock, SolutionFaqBlock } from "@/sections/solutions/shared/SolutionBlocks";

export default function CustomSolutionBody({
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
  const services = industry.listSections[0]?.items ?? [];
  const whyImage = whyRow.visual.type === "image" ? whyRow.visual : null;

  return (
    <>
      <section className="border-t border-slate-200 bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container-page">
          <div className="solution-abb-accent" aria-hidden="true" />
          <h2 className="font-display mt-6 text-2xl font-bold text-[#0B0F19] md:text-[34px]">
            {t("工程服务", "Servicios de ingeniería", "Engineering services")}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#3a3a3a]">
            {t(
              "从需求分析到量产的端到端无线充电开发服务。",
              "Desarrollo integral de carga inalámbrica, desde el análisis de requisitos hasta la producción en serie.",
              "End-to-end wireless charging development from requirements through mass production.",
            )}
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => (
              <div key={item} className="rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#0B0F19]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          {whyImage ? (
            <div className="relative aspect-square max-h-[480px] overflow-hidden bg-[#F8FAFC] lg:order-2">
              <Image src={whyImage.src} alt={whyImage.alt} fill className="object-cover" />
            </div>
          ) : null}
          <div className={whyImage ? "lg:order-1" : ""}>
            <h2 className="font-display text-2xl font-bold text-[#0B0F19]">{whyRow.title}</h2>
            <div className="mt-6 space-y-5 text-base leading-[1.75] text-[#3a3a3a]">
              {whyRow.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-14 lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-[#0B0F19]">{principleRow.title}</h2>
          <ol className="mt-12 grid gap-0 md:grid-cols-4">
            {principleSteps.map((step, index) => (
              <li key={step.label} className="relative border-t border-slate-200 py-8 md:border-t-0 md:border-l md:px-6 md:first:border-l-0">
                <span className="font-display text-5xl font-black text-[#E2232A]/20">{String(index + 1).padStart(2, "0")}</span>
                <p className="font-display mt-4 font-bold text-[#0B0F19]">{step.label}</p>
                <p className="mt-2 text-sm leading-6 text-[#3a3a3a]">{step.detail}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl text-base leading-[1.75] text-[#3a3a3a]">{principleRow.paragraphs[1]}</p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-14 lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-[#0B0F19]">
            {t("定制项目交付内容", "Entregables de programas personalizados", "Custom program deliverables")}
          </h2>
          <div className="mt-10 space-y-6">
            {industry.useCases.map((useCase, index) => (
              <article key={useCase.title} className="grid gap-6 rounded-sm border border-slate-200 bg-white p-6 md:grid-cols-[64px_1fr_200px] md:items-center">
                <span className="font-display text-3xl font-black text-[#E2232A]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#0B0F19]">{useCase.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#3a3a3a]">{useCase.description}</p>
                </div>
                <div className="relative h-32 overflow-hidden rounded-sm bg-[#F8FAFC]">
                  <Image src={useCase.image} alt={useCase.alt} fill className="object-contain p-3" />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href={withLocale("/contact", locale)} className="solution-abb-link text-sm font-bold">
              {t("开启定制工程项目 →", "Iniciar un programa de ingeniería personalizado →", "Start a custom engineering program →")}
            </Link>
          </div>
        </div>
      </section>

      <SolutionFaqBlock
        industryId={industry.id}
        title={t(
          "常见问题 — 定制无线方案",
          "Preguntas frecuentes — Programas inalámbricos personalizados",
          "FAQ — Custom Wireless Programs",
        )}
        variant="split"
        locale={locale}
      />
      <SolutionCtaBlock
        theme="dark"
        title={t(
          "为您的产品构建无线充电子系统",
          "Construya un subsistema de carga inalámbrica para su producto",
          "Build a wireless charging subsystem for your product",
        )}
        description={t(
          "从线圈设计、PCB 开发到验证与量产——SiCore 为 60W 至 3000W 全功率段提供定制化工程方案。",
          "Desde el diseño de bobinas y el desarrollo de PCB hasta la validación y la producción: SiCore diseña plataformas a medida de 60W a 3000W.",
          "From coil design and PCB development to validation and production — SiCore engineers tailored platforms across 60W to 3000W.",
        )}
        ctaLabel={t("预约工程咨询", "Reservar consulta de ingeniería", "Book Engineering Consultation")}
        secondaryHref="/download"
        secondaryLabel={t("下载资料", "Descargar recursos", "Download resources")}
        locale={locale}
      />
    </>
  );
}
