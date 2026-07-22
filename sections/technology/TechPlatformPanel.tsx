import Link from "next/link";
import TechIcon from "@/components/TechIcon";
import type { Locale } from "@/lib/i18n/config";
import { getTechnologyPlatforms } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import type { TechnologyPlatform } from "@/lib/technology";

export default function TechPlatformPanel({
  platform,
  locale,
}: {
  platform: TechnologyPlatform;
  locale: Locale;
}) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);
  const others = getTechnologyPlatforms(locale).filter((item) => item.id !== platform.id);

  return (
    <div className="bg-white">
      <section className="border-b border-slate-200/70 bg-[#F8FAFC]" aria-labelledby="tech-platform-heading">
        <div className="container-page py-16 lg:py-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
            {platform.eyebrow}
          </p>
          <div className="mt-6 flex items-start gap-5">
            <TechIcon type={platform.icon} className="mt-1 h-12 w-12 shrink-0" />
            <div className="max-w-3xl">
              <h1
                id="tech-platform-heading"
                className="font-display text-[32px] font-black leading-[1.08] tracking-[-0.04em] text-[#0B0F19] md:text-[42px]"
              >
                {platform.title}
              </h1>
              <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                {platform.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20" aria-label={`${platform.title} capabilities`}>
        <div className="container-page">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
            {t("能力", "Capacidades", "Capabilities")}
          </p>
          <ul className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {platform.topics.map((topic, index) => (
              <li key={topic} className="flex items-baseline gap-6 py-5 md:gap-10 md:py-6">
                <span className="font-display w-8 shrink-0 text-sm font-bold tabular-nums text-[#0B5FFF]/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base font-semibold tracking-[-0.01em] text-[#0B0F19] md:text-lg">
                  {topic}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-slate-200/70 bg-[#F8FAFC] py-16 lg:py-20">
        <div className="container-page">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
            {t("更多技术平台", "Más plataformas tecnológicas", "More Technology Platforms")}
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.id}
                href={L(`/technology/${item.id}`)}
                className="group border-t border-slate-300 pt-5 transition"
              >
                <h3 className="font-display text-base font-extrabold text-[#0B0F19] transition group-hover:text-[#0B5FFF]">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                <span className="mt-4 inline-flex text-xs font-bold text-[#0B5FFF]">
                  {t("探索 →", "Explorar →", "Explore →")}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/70 py-14 lg:py-16">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="font-display max-w-xl text-xl font-bold tracking-[-0.02em] text-[#0B0F19]">
            {t(
              "准备好将这一平台集成到您的产品中了吗？",
              "¿Listo para integrar esta plataforma en su producto?",
              "Ready to integrate this platform into your product?",
            )}
          </p>
          <Link href={L("/contact")} className="btn-primary shrink-0">
            {t("联系我们的团队", "Contacte a nuestro equipo", "Contact Our Team")} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
