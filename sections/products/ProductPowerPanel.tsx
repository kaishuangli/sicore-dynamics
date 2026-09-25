import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getProduct3000w } from "@/lib/i18n/content";
import { getProductTiers } from "@/lib/i18n/product-content";
import { withLocale } from "@/lib/i18n/path";

type ProductTier = ReturnType<typeof getProductTiers>[number];

export default function ProductPowerPanel({
  tier,
  locale,
  embedded = false,
}: {
  tier: ProductTier;
  locale: Locale;
  embedded?: boolean;
}) {
  const isZh = locale === "zh";
  const L = (href: string) => withLocale(href, locale);
  const show3000wSpecs = tier.id === "3000w";
  const { wireless3000wSpecGroups } = getProduct3000w(locale);

  return (
    <div className={embedded ? "px-5 py-8 md:px-8 lg:px-10 lg:py-12" : "py-12 lg:py-16"}>
      <div className={embedded ? undefined : "container-page"}>
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">
          {tier.label} {isZh ? "产品" : "Product"}
        </p>
        <h2 className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl lg:text-4xl">
          {tier.title}
        </h2>
        <p className="mt-3 text-base font-semibold text-[#334155]">{tier.tagline}</p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#64748B] md:text-base">{tier.description}</p>

        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-[#0B0F19]">
                {isZh ? "应用场景" : "Applications"}
              </h3>
              <ul className="mt-4 space-y-3">
                {tier.applications.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#64748B]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B5FFF]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-[#0B0F19]">
                {isZh ? "核心特性" : "Key Features"}
              </h3>
              <ul className="mt-4 space-y-4">
                {tier.highlights.map((item) => (
                  <li key={item} className="border-l-2 border-[#0B5FFF]/30 pl-5 text-sm leading-6 text-[#64748B]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link href={L("/contact")} className="btn-primary inline-flex">
              {isZh ? `申请 ${tier.label} 规格` : `Request ${tier.label} Specs`} <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="tech-dark-panel relative overflow-hidden rounded-[28px] p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,0.18),transparent_45%)]" />
            <div className="relative mx-auto h-[440px] max-w-lg">
              <Image
                src={tier.image}
                alt={tier.title}
                fill
                className="object-contain scale-[1.08] drop-shadow-[0_20px_60px_rgba(56,189,248,0.25)]"
              />
            </div>
            <div className="relative mt-6 grid grid-cols-3 gap-3">
              {[tier.label, isZh ? "OEM 就绪" : "OEM Ready", isZh ? "工业级" : "Industrial Grade"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-cyan-400/20 bg-white/5 px-3 py-3 text-center text-[11px] font-black text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {show3000wSpecs ? (
          <div className="mt-16 border-t border-slate-200 pt-12">
            <h3 className="font-display text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl">
              {isZh ? "技术规格" : "Technical Specifications"}
            </h3>
            <div className="mt-3 h-1 w-14 rounded-full bg-[#0B5FFF]" aria-hidden="true" />

            <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
              {wireless3000wSpecGroups.map((group, groupIndex) => (
                <div key={group.title} className={groupIndex > 0 ? "border-t border-slate-200" : undefined}>
                  <h4 className="bg-[#F1F5F9] px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.12em] text-[#0B0F19]">
                    {group.title}
                  </h4>
                  <table className="w-full table-fixed text-left text-sm">
                    <colgroup>
                      <col className="w-[42%]" />
                      <col className="w-[58%]" />
                    </colgroup>
                    <tbody>
                      {group.specs.map((spec, index) => (
                        <tr
                          key={spec.label}
                          className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
                        >
                          <th className="px-5 py-3 font-semibold text-slate-700">{spec.label}</th>
                          <td className="px-5 py-3 text-slate-600">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
