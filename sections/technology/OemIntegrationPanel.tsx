import Image from "next/image";
import Link from "next/link";
import SectionEyebrow from "@/components/SectionEyebrow";
import type { Locale } from "@/lib/i18n/config";
import { getOemIntegrationPage, getTechnologyPlatforms } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";

export default function OemIntegrationPanel({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);
  const content = getOemIntegrationPage(locale);
  const others = getTechnologyPlatforms(locale).filter((item) => item.id !== "oem-integration");

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden" aria-labelledby="oem-heading">
        <div className="absolute inset-0">
          <Image
            src={content.heroImage}
            alt="Wireless charging receiver and dock integrated into an OEM mobile robot platform"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/92 to-[#F8FAFC]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-[#F8FAFC]/35" />
        </div>

        <div className="container-page relative py-20 lg:py-28">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
            {content.eyebrow}
          </p>
          <h1
            id="oem-heading"
            className="font-display mt-4 max-w-3xl text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-[#0B0F19] md:text-[48px]"
          >
            {content.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-semibold text-slate-700 md:text-xl">
            {content.subtitle}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            {content.description}
          </p>
        </div>
      </section>

      <section
        className="border-t border-slate-200/70 bg-[#F8FAFC] pb-16 pt-14 lg:pb-20 lg:pt-16"
        aria-labelledby="oem-modules-heading"
      >
        <div className="container-page">
          <header className="max-w-3xl">
            <p className="font-display text-xl font-extrabold tracking-[-0.02em] text-[#0B5FFF] md:text-2xl">
              {content.modulesEyebrow}
            </p>
            <h2
              id="oem-modules-heading"
              className="font-display mt-2 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl"
            >
              {content.modulesTitle}
            </h2>
          </header>

          <div className="mt-12 space-y-8">
            {content.modules.map((module) => (
              <article
                key={module.id}
                id={module.id}
                className="border border-slate-200 bg-white px-5 py-7 md:px-8 md:py-9"
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <p className="font-display text-5xl font-black tabular-nums leading-none text-[#0B5FFF] md:text-6xl">
                    {module.number}
                  </p>
                  <h3 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-[#0B0F19] md:text-3xl">
                    {module.title}
                  </h3>
                </div>

                <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                  {module.description}
                </p>

                {"image" in module && module.image ? (
                  <div className="relative mt-7 aspect-[16/9] w-full overflow-hidden border border-slate-200 bg-[#F8FAFC] md:aspect-[21/9]">
                    <Image
                      src={module.image}
                      alt={module.imageAlt}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 1024px) 100vw, 1100px"
                      quality={95}
                    />
                  </div>
                ) : null}

                <div className="mt-8 max-w-3xl">
                  <p className="text-sm font-bold text-[#0B5FFF]">{module.technologiesLabel}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {module.technologies.map((item) => (
                      <li
                        key={item}
                        className="border border-slate-200 bg-[#F8FAFC] px-3 py-2 text-xs font-semibold text-slate-700 md:text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/70 bg-white py-16 lg:py-20">
        <div className="container-page">
          <SectionEyebrow>{t("更多技术平台", "Más plataformas tecnológicas", "More Technology Platforms")}</SectionEyebrow>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.id}
                href={L(`/technology/${item.id}`)}
                className="group border-t border-slate-300 pt-5"
              >
                <h3 className="font-display text-base font-extrabold text-[#0B0F19] transition group-hover:text-[#0B5FFF]">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-slate-200 pt-10 md:flex-row md:items-center">
            <p className="font-display max-w-xl text-xl font-bold tracking-[-0.02em] text-[#0B0F19]">
              {t(
                "准备好将 SiCore 充电方案集成到您的 OEM 产品中了吗？",
                "¿Listo para integrar la solución de carga SiCore en su producto OEM?",
                "Ready to integrate SiCore charging into your OEM product?",
              )}
            </p>
            <Link href={L("/contact")} className="btn-primary shrink-0">
              {t("联系我们的团队", "Contacte a nuestro equipo", "Contact Our Team")} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
