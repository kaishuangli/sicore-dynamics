"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import { getProductTiers, getWirelessPowerNavItems } from "@/lib/i18n/product-content";
import { withLocale } from "@/lib/i18n/path";

const MODULE_BASE = "/products/wireless-power-modules";

export default function WirelessPowerModulesShell({
  locale,
  activeTierId,
  children,
}: {
  locale: Locale;
  activeTierId: string;
  children: ReactNode;
}) {
  const L = (href: string) => withLocale(href, locale);
  const productTiers = getProductTiers(locale);
  const catalogItems = getWirelessPowerNavItems(locale);
  const isZh = locale === "zh";
  const isEs = locale === "es";

  const catalogLabel = isZh ? "产品目录" : isEs ? "Catálogo de productos" : "Product catalog";
  const overviewLabel = isZh
    ? "无线功率模块"
    : isEs
      ? "Módulos de potencia inalámbrica"
      : "Wireless Power Modules";
  const fullPageLabel = isZh ? "独立打开" : isEs ? "Abrir sola" : "Open full page";

  const flagshipIds = new Set<string>(productTiers.map((item) => item.id));
  const standaloneHref = flagshipIds.has(activeTierId)
    ? activeTierId === "3000w"
      ? L(`${MODULE_BASE}/${activeTierId}`)
      : L(`/products/${activeTierId}`)
    : null;

  return (
    <div className="relative min-h-[70vh] bg-white">
      {/* Floating control: keep catalog and product page as separate surfaces */}
      <div className="sticky top-[118px] z-30 border-b border-slate-200 bg-white/95 px-4 py-2.5 backdrop-blur lg:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-display text-lg font-extrabold tracking-tight text-[#0B0F19] md:text-xl">
            {overviewLabel}
          </p>

          {standaloneHref ? (
            <Link
              href={standaloneHref}
              className="text-xs font-bold text-[#0B5FFF] transition hover:text-[#0847cc]"
            >
              {fullPageLabel} <span aria-hidden="true">↗</span>
            </Link>
          ) : null}
        </div>

        {/* Mobile product switcher — always separate from page body */}
        <ul className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {catalogItems.map((tier) => {
            const activeItem = tier.id === activeTierId;
            return (
              <li key={tier.id} className="shrink-0">
                <Link
                  href={L(`${MODULE_BASE}/${tier.id}`)}
                  className={`inline-flex rounded-full px-3.5 py-2 text-xs font-bold transition ${
                    activeItem
                      ? "bg-[#0B5FFF] text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {tier.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="lg:flex">
        {/* Catalog panel — recessed rail with raised product tiles */}
        <aside
          id="wpm-product-catalog"
          className="relative hidden shrink-0 lg:sticky lg:top-[170px] lg:block lg:h-[calc(100vh-170px)] lg:w-[300px] lg:overflow-y-auto"
        >
          <div
            className="relative h-full w-[300px] border-r border-slate-300/80"
            style={{
              background:
                "linear-gradient(180deg, #E8EEF6 0%, #F1F5F9 42%, #E2E8F0 100%)",
              boxShadow:
                "inset -10px 0 18px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255,255,255,0.75)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-3"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(15, 23, 42, 0.08))",
              }}
              aria-hidden="true"
            />

            <div className="relative px-4 pb-5 pt-4">
              <div
                className="rounded-xl border border-white/80 px-4 py-3.5"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.9) inset, 0 8px 18px rgba(15, 23, 42, 0.08), 0 2px 4px rgba(15, 23, 42, 0.04)",
                }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">
                  {catalogLabel}
                </p>
                <p className="font-display mt-1 text-base font-extrabold text-[#0B0F19]">
                  {overviewLabel}
                </p>
              </div>

              <nav aria-label={catalogLabel} className="mt-4">
                <ul className="space-y-2.5">
                  {catalogItems.map((tier) => {
                    const activeItem = tier.id === activeTierId;
                    return (
                      <li key={tier.id}>
                        <Link
                          href={L(`${MODULE_BASE}/${tier.id}`)}
                          className={`group relative block rounded-xl border px-3.5 py-3.5 transition duration-200 ${
                            activeItem
                              ? "border-[#0B5FFF]/35 bg-white text-[#0B5FFF]"
                              : "border-white/70 bg-white/75 text-[#0B0F19] hover:-translate-y-0.5 hover:border-white hover:bg-white"
                          }`}
                          style={
                            activeItem
                              ? {
                                  boxShadow:
                                    "0 1px 0 rgba(255,255,255,0.95) inset, 0 10px 22px rgba(11, 95, 255, 0.16), 0 3px 8px rgba(15, 23, 42, 0.08)",
                                }
                              : {
                                  boxShadow:
                                    "0 1px 0 rgba(255,255,255,0.85) inset, 0 4px 10px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)",
                                }
                          }
                          aria-current={activeItem ? "page" : undefined}
                        >
                          <span
                            className={`absolute left-0 top-2.5 bottom-2.5 w-[3px] rounded-r-full transition ${
                              activeItem
                                ? "bg-[#0B5FFF]"
                                : "bg-slate-300/80 group-hover:bg-[#0B5FFF]/50"
                            }`}
                            aria-hidden="true"
                          />
                          <span
                            className={`block pl-2 text-sm font-bold ${
                              activeItem ? "text-[#0B5FFF]" : "text-[#0B0F19]"
                            }`}
                          >
                            {tier.label}
                          </span>
                          <span className="mt-0.5 block pl-2 text-xs leading-5 text-slate-500">
                            {tier.tagline}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </aside>

        {/* Product page — full remaining width, visually separate from catalog */}
        <div className="min-w-0 flex-1 border-t border-slate-200 lg:border-t-0">
          {children}
        </div>
      </div>
    </div>
  );
}
