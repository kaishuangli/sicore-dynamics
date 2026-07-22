import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";

export default function SolutionContactBand({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);

  return (
    <section className="border-t border-slate-200 bg-[#F8FAFC] py-16 lg:py-20" aria-labelledby="solution-contact-heading">
      <div className="container-page text-center">
        <div className="solution-abb-accent mx-auto" aria-hidden="true" />
        <h2
          id="solution-contact-heading"
          className="font-display mt-6 text-2xl font-black tracking-[-0.02em] text-[#0B0F19] md:text-3xl"
        >
          {t("准备好探讨您的应用需求了吗？", "¿Listo para hablar sobre su aplicación?", "Ready to discuss your application?")}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-700">
          {t(
            "联系 SiCore Dynamics，探索无线充电集成、OEM 开发以及为您的产品定制的电力平台方案。",
            "Contacte a SiCore Dynamics para explorar la integración de carga inalámbrica, el desarrollo OEM y plataformas de energía personalizadas para su producto.",
            "Contact SiCore Dynamics to explore wireless charging integration, OEM development, and customized power platforms for your product.",
          )}
        </p>
        <Link href={withLocale("/contact", locale)} className="btn-primary mt-8 inline-flex">
          {t("联系我们的团队", "Contacte a nuestro equipo", "Contact Our Team")} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
