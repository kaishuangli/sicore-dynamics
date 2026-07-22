import Link from "next/link";
import TechIcon from "@/components/TechIcon";
import type { Locale } from "@/lib/i18n/config";
import { getTechnologyPlatforms } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";

export default function TechPurpose({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);
  const technologyPortfolio = getTechnologyPlatforms(locale).map((platform) => ({
    title: platform.label,
    description: platform.description,
    href: `/technology/${platform.id}`,
    icon: platform.icon,
  }));

  return (
    <div className="py-12 lg:py-16">
      <div className="container-page">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
          {t("技术平台", "Plataformas tecnológicas", "Technology Platforms")}
        </p>
        <h2 className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl lg:text-4xl">
          {t("四大平台，一套自主能源体系。", "Cuatro plataformas. Un ecosistema energético autónomo.", "Four platforms. One autonomous energy stack.")}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#64748B] md:text-base">
          {t(
            "SiCore Dynamics 打造的技术平台，让自主机器从人工插拔充电迈向可靠、集成、免插拔的能量传输。",
            "SiCore Dynamics desarrolla plataformas tecnológicas que llevan a las máquinas autónomas de la carga manual con enchufe a una entrega de energía fiable, integrada y sin enchufe.",
            "SiCore Dynamics builds technology platforms that move autonomous machines from manual plug-in charging to reliable, integrated, plug-free energy delivery.",
          )}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {technologyPortfolio.map((item) => (
            <Link
              key={item.title}
              href={L(item.href)}
              className="rounded-2xl border border-slate-100 bg-white p-8 text-left shadow-[0_8px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-[#0B5FFF]/25 hover:shadow-[0_16px_48px_rgba(11,95,255,0.1)]"
            >
              <TechIcon type={item.icon} className="h-10 w-10" />
              <h3 className="font-display mt-6 text-base font-bold leading-snug text-[#0B0F19]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#64748B]">{item.description}</p>
              <span className="mt-5 inline-flex text-xs font-bold text-[#0B5FFF]">
                {t("探索 →", "Explorar →", "Explore →")}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
