import type { Locale } from "@/lib/i18n/config";
import { resolveProductImage } from "@/lib/catalog/resolve-product-image";
import { getProduct200w } from "@/lib/i18n/content";
import WirelessModuleProductLayout from "@/sections/products/WirelessModuleProductLayout";

function ModuleDiagram({ isZh }: { isZh: boolean }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
        {isZh ? "模块外形图" : "Module Outline"}
      </p>
      <div className="mt-6 space-y-8">
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">{isZh ? "俯视图" : "Top View"}</p>
          <svg viewBox="0 0 320 220" className="h-auto w-full" aria-hidden="true">
            <rect x="40" y="30" width="240" height="160" rx="10" fill="#fff" stroke="#0B5FFF" strokeWidth="2.5" />
            <rect
              x="70"
              y="60"
              width="180"
              height="100"
              rx="6"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <circle cx="160" cy="110" r="28" fill="none" stroke="#0B5FFF" strokeWidth="2" />
            <circle cx="160" cy="110" r="10" fill="#0B5FFF" opacity="0.2" />
            <path d="M40 210h240" stroke="#64748b" strokeWidth="1.5" />
            <path d="M40 204v12M280 204v12" stroke="#64748b" strokeWidth="1.5" />
            <text x="160" y="205" textAnchor="middle" className="fill-slate-600" fontSize="12" fontFamily="inherit">
              160 mm
            </text>
            <path d="M300 30v160" stroke="#64748b" strokeWidth="1.5" />
            <path d="M294 30h12M294 190h12" stroke="#64748b" strokeWidth="1.5" />
            <text x="308" y="115" textAnchor="start" className="fill-slate-600" fontSize="12" fontFamily="inherit">
              160
            </text>
          </svg>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">{isZh ? "侧视图" : "Side View"}</p>
          <svg viewBox="0 0 320 90" className="h-auto w-full" aria-hidden="true">
            <rect x="40" y="28" width="240" height="28" rx="4" fill="#fff" stroke="#0B5FFF" strokeWidth="2.5" />
            <path d="M40 72h240" stroke="#64748b" strokeWidth="1.5" />
            <path d="M40 66v12M280 66v12" stroke="#64748b" strokeWidth="1.5" />
            <text x="160" y="86" textAnchor="middle" className="fill-slate-600" fontSize="12" fontFamily="inherit">
              160 mm
            </text>
            <path d="M300 28v28" stroke="#64748b" strokeWidth="1.5" />
            <path d="M294 28h12M294 56h12" stroke="#64748b" strokeWidth="1.5" />
            <text x="308" y="46" textAnchor="start" className="fill-slate-600" fontSize="12" fontFamily="inherit">
              11 mm
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Wireless200wProductPage({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const {
    wireless200wApplications,
    wireless200wCta,
    wireless200wFeatures,
    wireless200wHero,
    wireless200wSpecs,
  } = getProduct200w(locale);

  return (
    <WirelessModuleProductLayout
      locale={locale}
      hero={{
        titleLead: "200W",
        titleRest: isZh ? "无线充电模块" : "Wireless Charging Module",
        subtitle: wireless200wHero.subtitle,
        image: resolveProductImage("wireless-power-modules", "200w", wireless200wHero.image),
        imageAlt: wireless200wHero.imageAlt,
        highlights: wireless200wHero.highlights,
      }}
      specs={wireless200wSpecs}
      specsAside={<ModuleDiagram isZh={isZh} />}
      features={wireless200wFeatures}
      applications={wireless200wApplications}
      applicationsIntro={
        isZh ? "适用于广泛的智能系统场景。" : "Perfectly suited for a wide range of intelligent systems."
      }
      cta={wireless200wCta}
    />
  );
}
