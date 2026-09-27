import type { Locale } from "@/lib/i18n/config";
import { getGeoFaqs } from "@/lib/geo";
import { uiLabel } from "@/lib/i18n/pick-locale";

export default function GeoFaqSection({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const faqs = getGeoFaqs(locale);

  return (
    <section
      id="faq"
      className="border-t border-slate-200 bg-white py-14 lg:py-20"
      aria-labelledby="geo-faq-heading"
    >
      <div className="container-page">
        <h2
          id="geo-faq-heading"
          className="font-display max-w-3xl text-3xl font-black tracking-[-0.03em] text-slate-950 md:text-4xl"
        >
          {t("常见问题", "Preguntas frecuentes", "Frequently asked questions")}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
          {t(
            "关于 SiCore Dynamics 与自主充电的直接说明。",
            "Respuestas directas sobre SiCore Dynamics y la carga autónoma.",
            "Direct answers about SiCore Dynamics and autonomous charging.",
          )}
        </p>
        <ol className="mt-10 max-w-3xl divide-y divide-slate-200 border-t border-slate-200">
          {faqs.map((item) => (
            <li key={item.question} className="py-6">
              <h3 className="font-display text-lg font-bold text-slate-950">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base md:leading-8">{item.answer}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
