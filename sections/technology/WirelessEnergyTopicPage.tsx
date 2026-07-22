import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import type { WirelessEnergyTopic } from "@/lib/wireless-energy-platform-topics";

type WirelessEnergyTopicPageProps = {
  topic: WirelessEnergyTopic;
  locale: Locale;
};

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-6 text-slate-700 md:text-[15px]">
          <span
            className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B5FFF]"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function WirelessEnergyTopicPage({ topic, locale }: WirelessEnergyTopicPageProps) {
  const L = (href: string) => withLocale(href, locale);
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);

  return (
    <main className="bg-white">
      <section className="border-b border-slate-200/70 bg-[#F8FAFC] py-10 lg:py-14">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={L("/technology")} className="transition hover:text-[#0B5FFF]">
                  {t("技术", "Tecnología", "Technology")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={L("/technology/wireless-energy-platform")}
                  className="transition hover:text-[#0B5FFF]"
                >
                  {t("无线能量平台", "Plataforma de energía inalámbrica", "Wireless Energy Platform")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={L(`/technology/wireless-energy-platform#${topic.sectionId}`)}
                  className="transition hover:text-[#0B5FFF]"
                >
                  {topic.sectionTitle}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-slate-700">{topic.title}</li>
            </ol>
          </nav>

          <p className="font-display mt-8 text-4xl font-black tabular-nums text-[#0B5FFF] md:text-5xl">
            {topic.number}
          </p>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
            {topic.sectionTitle}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-[#0B0F19] md:text-[48px]">
            {topic.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            {topic.description}
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page space-y-12">
          {topic.image ? (
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-slate-200 bg-[#0B1220] md:aspect-[21/9]">
              <Image
                src={topic.image}
                alt={topic.imageAlt ?? topic.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1100px"
                quality={92}
                priority
              />
            </div>
          ) : null}

          <div className="grid gap-8 lg:grid-cols-2">
            {topic.technologies?.length ? (
              <div className="border border-slate-200 bg-white px-5 py-6 md:px-6">
                <h2 className="text-sm font-bold text-[#0B5FFF]">
                  {topic.technologiesLabel ?? t("核心技术", "Tecnologías principales", "Core Technologies")}
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {topic.technologies.map((item) => (
                    <li
                      key={item}
                      className="border border-slate-200 bg-[#F8FAFC] px-3 py-2 text-xs font-semibold text-slate-700 md:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {topic.benefits?.length ? (
              <div className="bg-[#EFF6FF] px-5 py-6 md:px-6">
                <h2 className="text-sm font-bold text-[#0B5FFF]">
                  {topic.benefitsLabel ?? t("关键优势", "Ventajas clave", "Key Benefits")}
                </h2>
                <BulletList items={topic.benefits} />
              </div>
            ) : null}
          </div>

          <div className="flex flex-col items-start justify-between gap-6 border-t border-slate-200 pt-10 md:flex-row md:items-center">
            <div>
              <p className="font-display text-xl font-bold tracking-[-0.02em] text-[#0B0F19]">
                {t(
                  `想将${topic.title}应用到您的平台？`,
                  `¿Desea aplicar ${topic.title} a su plataforma?`,
                  `Want to apply ${topic.title} to your platform?`,
                )}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t(
                  "与我们的团队沟通，了解如何将这一能力集成到您的无线电力系统中。",
                  "Hable con nuestro equipo sobre cómo integrar esta capacidad en su sistema de energía inalámbrica.",
                  "Talk with our team about integrating this capability into your wireless power system.",
                )}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={L(`/technology/wireless-energy-platform#${topic.sectionId}`)}
                className="inline-flex items-center border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-[#0B5FFF] hover:text-[#0B5FFF]"
              >
                {t("返回该板块", "Volver a la sección", "Back to section")}
              </Link>
              <Link href={L("/contact")} className="btn-primary shrink-0">
                {t("联系我们的团队", "Contacte a nuestro equipo", "Contact Our Team")} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
