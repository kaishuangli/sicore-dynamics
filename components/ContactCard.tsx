import type { Locale } from "@/lib/i18n/config";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { site } from "@/lib/site";

type ContactCardProps = {
  className?: string;
  locale?: Locale;
};

export default function ContactCard({ className = "", locale = "en" }: ContactCardProps) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);

  return (
    <div
      className={`glass-panel relative overflow-hidden rounded-2xl p-8 lg:p-10 ${className}`}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl" />

      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
        {t("联系我们", "Póngase en contacto", "Get in Touch")}
      </p>
      <h2 className="font-display mt-3 text-xl font-black tracking-[-0.03em] text-slate-950 md:text-2xl">
        {t(
          "一起打造无线供电的未来。",
          "Construyamos juntos el futuro de la energía inalámbrica.",
          "Let's build the future of wireless power together.",
        )}
      </h2>
      <p className="mt-4 text-xs leading-6 text-slate-600 md:text-sm">
        {t(
          "欢迎联系 SiCore Dynamics，咨询产品、工程协作、OEM 项目与合作伙伴机会。",
          "Contacte a SiCore Dynamics para consultas sobre productos, colaboración de ingeniería, proyectos OEM y oportunidades de asociación.",
          "Contact SiCore Dynamics for product inquiries, engineering collaboration, OEM projects, and partnership opportunities.",
        )}
      </p>

      <div className="mt-8 space-y-4">
        <a href={`mailto:${site.email}`} className="btn-primary w-full justify-center">
          {t("联系我们", "Contáctenos", "Contact Us")} <span aria-hidden="true">→</span>
        </a>
        <a
          href={`mailto:${site.email}`}
          className="block text-center text-xs font-semibold text-[#0B5FFF] transition hover:underline"
        >
          {site.email}
        </a>
      </div>
    </div>
  );
}
