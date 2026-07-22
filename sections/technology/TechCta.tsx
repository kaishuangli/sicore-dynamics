import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";

export default function TechCta({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);

  return (
    <section
      className="border-t border-slate-200/80 bg-[#F8FAFC] py-20 lg:py-28"
      aria-labelledby="tech-cta-heading"
    >
      <div className="container-page text-center">
        <h2
          id="tech-cta-heading"
          className="font-display mx-auto max-w-3xl text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl lg:text-4xl"
        >
          {t(
            "准备好打造下一代无线充电系统了吗？",
            "¿Listo para crear la próxima generación de sistemas de carga inalámbrica?",
            "Ready to Build the Next Generation of Wireless Charging Systems?",
          )}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#64748B] md:text-base">
          {t(
            "与 SiCore Dynamics 合作，将先进的无线充电、智能充电站与 AI 电力系统集成到您的下一代智能机器平台中。",
            "Asóciese con SiCore Dynamics para integrar carga inalámbrica avanzada, estaciones inteligentes y sistemas de energía con IA en su próxima plataforma de máquinas inteligentes.",
            "Partner with SiCore Dynamics to integrate advanced wireless charging, intelligent stations, and AI power systems into your next intelligent machine platform.",
          )}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href={L("/contact")} className="btn-primary">
            {t("联系工程团队", "Contacte al equipo de ingeniería", "Contact Engineering Team")} <span aria-hidden="true">→</span>
          </Link>
          <Link href={L("/products")} className="btn-ghost">
            {t("探索产品平台", "Explorar plataformas de productos", "Explore Product Platforms")} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
