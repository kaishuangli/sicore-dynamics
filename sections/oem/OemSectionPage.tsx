import Link from "next/link";
import type { OemSectionId } from "@/lib/oem-program";
import { getOemSection } from "@/lib/oem-program";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import OemWhySicorePanel from "@/sections/oem/OemWhySicorePanel";
import OemDevelopmentProcessPanel from "@/sections/oem/OemDevelopmentProcessPanel";
import OemModularEngineeringPanel from "@/sections/oem/OemModularEngineeringPanel";
import OemManufacturingPanel from "@/sections/oem/OemManufacturingPanel";

export default function OemSectionPage({
  locale,
  sectionId,
}: {
  locale: Locale;
  sectionId: OemSectionId;
}) {
  if (sectionId === "why-sicore") {
    return <OemWhySicorePanel locale={locale} />;
  }

  if (sectionId === "development-process") {
    return <OemDevelopmentProcessPanel locale={locale} />;
  }

  if (sectionId === "design-services") {
    return <OemModularEngineeringPanel locale={locale} />;
  }

  if (sectionId === "manufacturing") {
    return <OemManufacturingPanel locale={locale} />;
  }

  const dict = getDictionary(locale);
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);
  const section = getOemSection(sectionId);
  if (!section) return null;

  return (
    <section className="bg-white pb-16 pt-10 lg:pb-24 lg:pt-14">
      <div className="container-page">
        <nav className="text-xs text-slate-500" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href={L("/")} className="transition hover:text-[#0B0F19]">
                {t("首页", "Inicio", "Home")}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={L("/oem/why-sicore")} className="transition hover:text-[#0B0F19]">
                {dict.nav.oem}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-[#0B0F19]">
              {dict.navOem[section.id as keyof typeof dict.navOem] ?? section.label}
            </li>
          </ol>
        </nav>

        <div className="solution-abb-accent mt-8" aria-hidden="true" />

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">{dict.nav.oem}</p>
        <h1 className="font-display mt-3 max-w-4xl text-[36px] font-black leading-[1.08] tracking-[-0.03em] text-[#0B0F19] md:text-[48px]">
          {section.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{section.tagline}</p>

        <p className="mt-10 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">{section.description}</p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {section.highlights.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 border border-slate-200/80 bg-[#F8FAFC] px-4 py-3 text-sm leading-6 text-slate-700"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B5FFF]" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item) => (
            <article
              key={item.title}
              className="border border-slate-200/80 bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.04)]"
            >
              <h2 className="font-display text-lg font-bold text-[#0B0F19]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 bg-[#071225] px-8 py-10 text-white">
          <h2 className="font-display text-2xl font-bold">
            {t("开始 OEM 合作洽谈", "Iniciar conversación OEM", "Start an OEM conversation")}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            {t(
              "告诉我们您的设备类型、功率需求与对接方式，我们将给出自动充电方案与下一步工程路径。",
              "Cuéntenos el tipo de máquina, potencia y método de acoplamiento; propondremos un sistema de carga automática y los siguientes pasos de ingeniería.",
              "Tell us your machine type, power need, and docking approach — we will propose an automatic charging system and next engineering steps.",
            )}
          </p>
          <Link href={L("/contact")} className="btn-primary mt-6 inline-flex">
            {dict.common.contactUs} →
          </Link>
        </div>
      </div>
    </section>
  );
}
