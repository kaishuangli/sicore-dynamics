import type { Locale } from "@/lib/i18n/config";
import { getTechnologyExtras } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";

export default function TechAdvantages({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const { technologyAdvantages } = getTechnologyExtras(locale);

  return (
    <section
      id="advantages"
      className="bg-white py-20 lg:py-28"
      aria-labelledby="tech-advantages-heading"
    >
      <div className="container-page">
        <h2
          id="tech-advantages-heading"
          className="font-display text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl lg:text-4xl"
        >
          {t("OEM 客户为何选择 SiCore", "Por qué los clientes OEM eligen SiCore", "Why OEM Customers Choose SiCore")}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#64748B] md:text-base">
          {t(
            "SiCore Dynamics 不仅提供充电器——我们为智能机器提供无线充电技术平台。",
            "SiCore Dynamics no solo vende cargadores: ofrecemos plataformas tecnológicas de carga inalámbrica para máquinas inteligentes.",
            "SiCore Dynamics is not just selling chargers — we provide wireless charging technology platforms for intelligent machines.",
          )}
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologyAdvantages.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-100 bg-[#F8FAFC] px-8 py-10 text-center shadow-[0_4px_24px_rgba(15,23,42,0.04)]"
            >
              <p className="font-display text-3xl font-black tracking-tight text-[#0B5FFF] md:text-4xl">
                {item.value}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#64748B]">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
