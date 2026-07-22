import Link from "next/link";
import SectionEyebrow from "@/components/SectionEyebrow";
import TechIcon from "@/components/TechIcon";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getTechnologyPortfolio } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";

export default function TechnologySection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const L = (href: string) => withLocale(href, locale);
  const technologyPortfolio = getTechnologyPortfolio(locale);

  const descriptions: Record<string, string> = {
    "wireless-energy-platform": dict.home.techDescWireless,
    "intelligent-charging": dict.home.techDescIntelligent,
    "plug-free-docking": dict.home.techDescDocking,
    "oem-integration": dict.home.techDescOem,
  };

  const platformLinks =
    locale === "zh" ? (
      <>
        探索 SiCore 技术平台：涵盖{" "}
        <Link
          href={L("/technology/wireless-energy-platform")}
          className="font-semibold text-[#0B5FFF] underline-offset-2 transition hover:underline"
        >
          {dict.home.techWireless}
        </Link>
        、
        <Link
          href={L("/technology/intelligent-charging")}
          className="font-semibold text-[#0B5FFF] underline-offset-2 transition hover:underline"
        >
          {dict.home.techIntelligent}
        </Link>
        、
        <Link
          href={L("/technology/plug-free-docking")}
          className="font-semibold text-[#0B5FFF] underline-offset-2 transition hover:underline"
        >
          {dict.home.techDocking}
        </Link>
        与{" "}
        <Link
          href={L("/technology/oem-integration")}
          className="font-semibold text-[#0B5FFF] underline-offset-2 transition hover:underline"
        >
          {dict.home.techOem}
        </Link>
        。
      </>
    ) : locale === "es" ? (
      <>
        Explore las plataformas tecnológicas de SiCore:{" "}
        <Link
          href={L("/technology/wireless-energy-platform")}
          className="font-semibold text-[#0B5FFF] underline-offset-2 transition hover:underline"
        >
          {dict.home.techWireless}
        </Link>
        ,{" "}
        <Link
          href={L("/technology/intelligent-charging")}
          className="font-semibold text-[#0B5FFF] underline-offset-2 transition hover:underline"
        >
          {dict.home.techIntelligent}
        </Link>
        ,{" "}
        <Link
          href={L("/technology/plug-free-docking")}
          className="font-semibold text-[#0B5FFF] underline-offset-2 transition hover:underline"
        >
          {dict.home.techDocking}
        </Link>
        {" y "}
        <Link
          href={L("/technology/oem-integration")}
          className="font-semibold text-[#0B5FFF] underline-offset-2 transition hover:underline"
        >
          {dict.home.techOem}
        </Link>
        .
      </>
    ) : (
      <>
        Explore SiCore technology platforms spanning{" "}
        <Link
          href={L("/technology/wireless-energy-platform")}
          className="font-semibold text-[#0B5FFF] underline-offset-2 transition hover:underline"
        >
          {dict.home.techWireless}
        </Link>
        ,{" "}
        <Link
          href={L("/technology/intelligent-charging")}
          className="font-semibold text-[#0B5FFF] underline-offset-2 transition hover:underline"
        >
          {dict.home.techIntelligent}
        </Link>
        ,{" "}
        <Link
          href={L("/technology/plug-free-docking")}
          className="font-semibold text-[#0B5FFF] underline-offset-2 transition hover:underline"
        >
          {dict.home.techDocking}
        </Link>
        , and{" "}
        <Link
          href={L("/technology/oem-integration")}
          className="font-semibold text-[#0B5FFF] underline-offset-2 transition hover:underline"
        >
          {dict.home.techOem}
        </Link>
        .
      </>
    );

  return (
    <section
      id="technology"
      className="relative overflow-hidden pt-12 pb-10 mesh-bg-subtle lg:pt-14 lg:pb-12"
    >
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="container-page relative">
        <SectionEyebrow>{dict.home.techEyebrow}</SectionEyebrow>

        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display max-w-2xl text-[34px] font-black leading-tight tracking-[-0.04em] text-[#0B0F19] md:text-[44px]">
            {dict.home.techTitle}{" "}
            <span className="text-gradient-blue">{dict.home.techTitleAccent}</span>
          </h2>
          <Link
            href={L("/technology")}
            className="shrink-0 text-base font-bold text-[#0B5FFF] transition hover:opacity-80"
          >
            {dict.home.learnMoreArrow}
          </Link>
        </div>

        <div className="mt-8 space-y-10">
          {[
            { title: dict.home.techPillar1Title, body: dict.home.techPillar1Body },
            { title: dict.home.techPillar2Title, body: dict.home.techPillar2Body },
            { title: dict.home.techPillar3Title, body: dict.home.techPillar3Body },
          ].map((pillar) => (
            <div key={pillar.title}>
              <h3 className="font-display text-xl font-bold leading-snug tracking-[-0.02em] text-[#0B0F19] md:text-2xl">
                {pillar.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg md:leading-8">{pillar.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-base leading-8 text-slate-500 md:text-lg">{platformLinks}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {technologyPortfolio.map((item) => (
            <Link
              key={item.href}
              href={L(item.href)}
              className="tech-card group flex flex-col rounded-3xl p-6 transition hover:-translate-y-1"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 ring-1 ring-blue-100 transition group-hover:bg-[#0B5FFF]/10">
                <TechIcon type={item.icon} className="h-9 w-9" />
              </div>

              <h3 className="font-display text-lg font-bold leading-7 text-[#0B0F19] md:text-xl">
                {dict.navTech[item.tabId as keyof typeof dict.navTech] ?? item.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                {descriptions[item.tabId] ?? item.description}
              </p>

              <span className="mt-5 inline-flex text-sm font-bold text-[#0B5FFF] transition group-hover:gap-2">
                {dict.home.exploreArrow}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
