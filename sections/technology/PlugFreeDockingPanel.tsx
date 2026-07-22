import Image from "next/image";
import Link from "next/link";
import SectionEyebrow from "@/components/SectionEyebrow";
import type { Locale } from "@/lib/i18n/config";
import { getPlugFreeDockingPage, getTechnologyPlatforms } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import ContactDockSection from "@/sections/technology/ContactDockSection";
import DockMechanicsSection from "@/sections/technology/DockMechanicsSection";
import OutdoorReliabilitySection from "@/sections/technology/OutdoorReliabilitySection";
import PositionDetectionSection from "@/sections/technology/PositionDetectionSection";
import WirelessDockSection from "@/sections/technology/WirelessDockSection";

export default function PlugFreeDockingPanel({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);
  const content = getPlugFreeDockingPage(locale);
  const others = getTechnologyPlatforms(locale).filter((item) => item.id !== "plug-free-docking");

  return (
    <div className="bg-white">
      {/* Page hero */}
      <section className="relative overflow-hidden" aria-labelledby="pfd-heading">
        <div className="absolute inset-0">
          <Image
            src={content.heroImage}
            alt="Autonomous robot docking on a wireless charging pad"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/92 to-[#F8FAFC]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-[#F8FAFC]/40" />
        </div>

        <div className="container-page relative py-20 lg:py-28">
          <h1
            id="pfd-heading"
            className="font-display max-w-3xl text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-[#0B0F19] md:text-[48px]"
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

      <DockMechanicsSection locale={locale} />
      <ContactDockSection locale={locale} />
      <WirelessDockSection locale={locale} />
      <PositionDetectionSection locale={locale} />
      <OutdoorReliabilitySection locale={locale} />

      {/* More platforms */}
      <section className="border-t border-slate-200/70 bg-[#F8FAFC] py-16 lg:py-20">
        <div className="container-page">
          <SectionEyebrow bgClassName="bg-[#F8FAFC]">
            {t("更多技术平台", "Más plataformas tecnológicas", "More Technology Platforms")}
          </SectionEyebrow>
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
                "准备好将免插拔对接技术集成到您的自主平台中了吗？",
                "¿Listo para integrar el acoplamiento sin enchufe en su plataforma autónoma?",
                "Ready to integrate plug-free docking into your autonomous platform?",
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
