import Image from "next/image";
import Link from "next/link";
import LearnMoreLink from "@/components/LearnMoreLink";
import SectionEyebrow from "@/components/SectionEyebrow";
import type { Locale } from "@/lib/i18n/config";
import { getTechnologyPlatforms, getWirelessEnergyPlatformPage } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import { getWirelessEnergyTopicHref } from "@/lib/wireless-energy-platform-topics";
import ControlLayerSection from "@/sections/technology/ControlLayerSection";
import MagneticLayerSection from "@/sections/technology/MagneticLayerSection";
import PhysicsLayerSection from "@/sections/technology/PhysicsLayerSection";
import PowerLayerSection from "@/sections/technology/PowerLayerSection";

export default function WirelessEnergyPlatformPanel({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);
  const content = getWirelessEnergyPlatformPage(locale);
  const others = getTechnologyPlatforms(locale).filter(
    (item) => item.id !== "wireless-energy-platform",
  );
  const otherLayers = content.layers.filter(
    (layer) =>
      layer.id !== "physics" &&
      layer.id !== "magnetic" &&
      layer.id !== "power" &&
      layer.id !== "control",
  );

  return (
    <div className="bg-white">
      {/* 1. Hero */}
      <section className="border-b border-slate-200/70 bg-[#F8FAFC]" aria-labelledby="wep-heading">
        <div className="container-page py-16 lg:py-20">
          <SectionEyebrow bgClassName="bg-[#F8FAFC]">{content.eyebrow}</SectionEyebrow>
          <h1
            id="wep-heading"
            className="font-display mt-4 max-w-3xl text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-[#0B0F19] md:text-[44px]"
          >
            {content.title}
          </h1>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
            {content.subtitle}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            {content.description}
          </p>
        </div>
      </section>

      {/* Architecture diagram — larger display, centered */}
      <section className="w-full bg-white py-6 md:py-8" aria-label="Wireless Energy Platform Architecture">
        <Image
          src="/images/wireless-energy-platform-architecture.png"
          alt="Wireless Energy Platform Architecture: five layers covering physics, magnetic, power, control, and system design"
          width={932}
          height={1024}
          className="mx-auto h-auto w-[85%] max-w-5xl"
          sizes="(max-width: 1024px) 85vw, 1024px"
          quality={100}
          priority
        />
      </section>

      <PhysicsLayerSection locale={locale} />
      <MagneticLayerSection locale={locale} />
      <PowerLayerSection locale={locale} />
      <ControlLayerSection locale={locale} />

      {/* Remaining architecture layers */}
      {otherLayers.map((layer, index) => {
        const sectionBg = index % 2 === 0 ? "bg-[#F8FAFC]" : "bg-white";

        return (
          <section
            key={layer.id}
            id={layer.id}
            className={`border-t border-slate-200/70 py-16 lg:py-20 ${sectionBg}`}
            aria-labelledby={`${layer.id}-heading`}
          >
            <div className="container-page">
              <SectionEyebrow bgClassName={sectionBg}>{layer.name}</SectionEyebrow>
              <div className="mt-4 max-w-3xl">
                <h2
                  id={`${layer.id}-heading`}
                  className="font-display text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl"
                >
                  {layer.name}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{layer.description}</p>
              </div>

              {(() => {
                const flow = (layer as { flow?: readonly string[] }).flow;
                if (!flow) return null;
                return (
                  <div className="mt-10 overflow-x-auto">
                    <div className="flex min-w-max items-center gap-2 md:min-w-0 md:flex-wrap">
                      {flow.map((step: string, stepIndex: number) => (
                        <div key={step} className="inline-flex items-center gap-2">
                          <span className="border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-800">
                            {step}
                          </span>
                          {stepIndex < flow.length - 1 ? (
                            <span className="text-slate-400" aria-hidden="true">
                              →
                            </span>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {layer.items.map((item) => (
                  <article key={item.title} className="border-t border-slate-300 pt-5">
                    <h3 className="font-display text-base font-extrabold text-[#0B0F19]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                    {"id" in item && item.id ? (
                      <LearnMoreLink href={getWirelessEnergyTopicHref(item.id, locale)} locale={locale} />
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* 4. Platform outcomes */}
      <section className="border-t border-slate-200/70 bg-[#071225] py-16 lg:py-20" aria-labelledby="outcomes-heading">
        <div className="container-page">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300/90">
            {t("平台成果", "Resultados de la plataforma", "Platform Outcomes")}
          </p>
          <h2
            id="outcomes-heading"
            className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-white md:text-3xl"
          >
            {t("该平台带来的价值。", "Lo que ofrece la plataforma.", "What the platform delivers.")}
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {content.outcomes.map((outcome) => (
              <article key={outcome.title} className="border-t border-white/20 pt-5">
                <h3 className="font-display text-base font-extrabold text-white">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{outcome.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. More platforms + CTA */}
      <section className="py-16 lg:py-20">
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
                "准备好将无线能量平台集成到您的产品中了吗？",
                "¿Listo para integrar la plataforma de energía inalámbrica en su producto?",
                "Ready to integrate the Wireless Energy Platform into your product?",
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
