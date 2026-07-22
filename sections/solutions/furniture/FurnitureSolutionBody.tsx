import Image from "next/image";
import Link from "next/link";
import { getPrincipleSteps } from "@/lib/solution-page-registry";
import type { Locale } from "@/lib/i18n/config";
import { getSolutionWhyWirelessForIndustry, type LocalizedIndustry } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import { SolutionCtaBlock, SolutionFaqBlock } from "@/sections/solutions/shared/SolutionBlocks";

export default function FurnitureSolutionBody({
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
  const [heroCase, ...restCases] = industry.useCases;

  return (
    <>
      <section className="border-t border-slate-200 bg-white py-14 lg:py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <div className="solution-abb-accent" aria-hidden="true" />
            <h2 className="font-display mt-6 text-3xl font-bold leading-tight text-[#0B0F19] md:text-[40px]">{whyRow.title}</h2>
            <p className="mt-8 text-xl leading-relaxed text-[#3a3a3a] md:text-2xl md:leading-9">{whyRow.paragraphs[0]}</p>
          </div>
          {whyRow.paragraphs.slice(1).map((p) => (
            <p key={p} className="mt-6 max-w-3xl text-base leading-[1.75] text-[#3a3a3a]">
              {p}
            </p>
          ))}
        </div>
      </section>

      {heroCase ? (
        <section className="bg-[#F8FAFC] py-14 lg:py-16">
          <div className="container-page">
            <div className="relative mx-auto aspect-[16/9] w-full max-w-6xl overflow-hidden rounded-sm bg-white">
              <Image
                src={heroCase.image}
                alt={heroCase.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1152px"
              />
            </div>
            <div className="mx-auto mt-10 max-w-3xl text-center">
              <h3 className="font-display text-2xl font-bold text-[#0B0F19] md:text-3xl">{heroCase.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#3a3a3a] md:text-lg">{heroCase.description}</p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white py-14 lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-[#0B0F19]">{principleRow.title}</h2>
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-stretch md:gap-0">
            {principleSteps.map((step, i) => (
              <div key={step.label} className="flex flex-1 items-stretch md:min-w-0">
                <div className="flex-1 border-t-2 border-[#E2232A] pt-4">
                  <span className="text-xs font-bold text-slate-500">
                    {t(`步骤 ${i + 1}`, `Paso ${i + 1}`, `Step ${i + 1}`)}
                  </span>
                  <p className="font-display mt-2 font-bold text-[#0B0F19]">{step.label}</p>
                  <p className="mt-2 text-sm leading-6 text-[#3a3a3a]">{step.detail}</p>
                </div>
                {i < principleSteps.length - 1 ? (
                  <div
                    className="flex shrink-0 items-center justify-center px-2 text-[#E2232A] md:px-3"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 rotate-90 md:rotate-0" aria-hidden="true">
                      <path
                        d="M5 12h12M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 py-14 lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-[#0B0F19]">
            {t("应用场景", "Escenarios de aplicación", "Application Scenarios")}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {restCases.map((useCase) => (
              <Link
                key={useCase.title}
                href={withLocale("/contact", locale)}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-[#F8FAFC]"
              >
                <Image
                  src={useCase.image}
                  alt={useCase.alt}
                  fill
                  className="object-cover brightness-110 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/45 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 right-4 font-display text-sm font-bold text-white drop-shadow md:text-base">
                  {useCase.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SolutionFaqBlock
        industryId={industry.id}
        title={t(
          `关于${industry.title}的常见问题`,
          `Preguntas sobre ${industry.title}`,
          `Questions about ${industry.title}`,
        )}
        locale={locale}
      />
      <SolutionCtaBlock
        theme="light"
        title={t(
          "将隐形无线充电嵌入您的家具产品线",
          "Integre carga invisible en su línea de mobiliario",
          "Embed invisible charging into your furniture line",
        )}
        description={t(
          "与 SiCore 合作，为酒店、办公室和公共空间家具项目集成隐蔽式发射端方案。",
          "Colabore con SiCore en programas de mobiliario para hostelería, oficinas y espacios públicos con transmisores integrados de forma oculta.",
          "Partner with SiCore on hospitality, office, and public-space furniture programs with concealed transmitter integration.",
        )}
        ctaLabel={t("开启家具 OEM 洽谈", "Iniciar conversación OEM de mobiliario", "Start Furniture OEM Discussion")}
        locale={locale}
      />
    </>
  );
}
