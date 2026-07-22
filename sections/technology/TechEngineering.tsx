import TechIcon from "@/components/TechIcon";
import type { Locale } from "@/lib/i18n/config";
import { getTechnologyExtras } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";

export default function TechEngineering({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const { engineeringCapabilities } = getTechnologyExtras(locale);

  return (
    <section
      id="engineering"
      className="bg-[#F8FAFC] py-20 lg:py-28"
      aria-labelledby="tech-engineering-heading"
    >
      <div className="container-page">
        <h2
          id="tech-engineering-heading"
          className="font-display text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl lg:text-4xl"
        >
          {t("核心工程能力", "Capacidades de ingeniería principales", "Core Engineering Capabilities")}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#64748B] md:text-base">
          {t(
            "从磁路设计、功率电子到固件、安全与工业通信的全栈工程能力——助力 OEM 客户从概念走向量产。",
            "Capacidades de ingeniería de extremo a extremo, desde diseño magnético y electrónica de potencia hasta firmware, seguridad y comunicación industrial, que ayudan a los clientes OEM del concepto a la producción.",
            "Full-stack engineering from magnetic design and power electronics to firmware, safety, and industrial communication — supporting OEM customers from concept to production.",
          )}
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {engineeringCapabilities.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-start rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition hover:border-[#0B5FFF]/20 hover:shadow-[0_12px_32px_rgba(11,95,255,0.08)]"
            >
              <TechIcon type={item.icon} className="h-9 w-9" />
              <h3 className="font-display mt-5 text-sm font-bold text-[#0B0F19]">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
