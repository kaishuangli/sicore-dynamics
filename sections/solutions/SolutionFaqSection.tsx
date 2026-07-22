import type { Locale } from "@/lib/i18n/config";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { getSolutionFaqsForIndustry, type LocalizedIndustry } from "@/lib/i18n/content";

function formatFaqNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function SolutionFaqSection({
  industry,
  locale,
}: {
  industry: LocalizedIndustry;
  locale: Locale;
}) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const faqs = getSolutionFaqsForIndustry(industry.id, locale);

  return (
    <section
      className="border-t border-slate-200 bg-white py-14 lg:py-20"
      aria-labelledby="solution-faq-heading"
    >
      <div className="container-page">
        <h2
          id="solution-faq-heading"
          className="font-display max-w-4xl text-2xl font-bold leading-snug tracking-[-0.02em] text-[#0B0F19] md:text-[32px] lg:text-[36px]"
        >
          {t(
            `关于${industry.title}解决方案的常见问题`,
            `Preguntas frecuentes sobre soluciones de ${industry.title}`,
            `Frequently Asked Questions About ${industry.title} Solutions`,
          )}
        </h2>

        <div className="mt-8 border-t-2 border-[#0B0F19]" aria-hidden="true" />

        <ol className="mt-0 divide-y divide-slate-200">
          {faqs.map((item, index) => (
            <li key={item.question}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start gap-6 py-6 md:gap-10 md:py-8 [&::-webkit-details-marker]:hidden">
                  <span className="w-10 shrink-0 font-display text-lg font-bold text-[#0B0F19] md:text-xl">
                    {formatFaqNumber(index)}
                  </span>
                  <span className="flex-1 pt-0.5 text-base leading-7 text-[#0B0F19] md:text-lg md:leading-8">
                    {item.question}
                  </span>
                </summary>
                <div className="pb-6 pl-16 pr-0 md:pb-8 md:pl-[4.5rem]">
                  <p className="max-w-3xl text-base leading-[1.75] text-[#3a3a3a] md:text-[17px]">
                    {item.answer}
                  </p>
                </div>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
