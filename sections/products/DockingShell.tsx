"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import { getDockingProducts } from "@/lib/i18n/product-content";
import { withLocale } from "@/lib/i18n/path";

const BASE = "/products/docking";

export default function DockingShell({
  locale,
  activeProductId,
  children,
}: {
  locale: Locale;
  activeProductId: string;
  children: ReactNode;
}) {
  const L = (href: string) => withLocale(href, locale);
  const products = getDockingProducts(locale);
  const isZh = locale === "zh";
  const isEs = locale === "es";

  const catalogLabel = isZh ? "产品目录" : isEs ? "Catálogo de productos" : "Product catalog";
  const overviewLabel = isZh ? "对接充电" : isEs ? "Acoplamiento" : "Docking";

  return (
    <div className="relative min-h-[70vh] bg-white">
      <div className="sticky top-[118px] z-30 border-b border-slate-200 bg-white/95 px-4 py-2.5 backdrop-blur lg:px-6">
        <p className="font-display text-lg font-extrabold tracking-tight text-[#0B0F19] md:text-xl">
          {overviewLabel}
        </p>

        <ul className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {products.map((item) => {
            const activeItem = item.id === activeProductId;
            return (
              <li key={item.id} className="shrink-0">
                <Link
                  href={L(`${BASE}/${item.id}`)}
                  className={`inline-flex rounded-full px-3.5 py-2 text-xs font-bold transition ${
                    activeItem
                      ? "bg-[#0B5FFF] text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="lg:flex">
        <aside
          id="docking-product-catalog"
          className="relative hidden shrink-0 lg:sticky lg:top-[170px] lg:block lg:h-[calc(100vh-170px)] lg:w-[300px] lg:overflow-y-auto"
        >
          <div
            className="relative h-full w-[300px] border-r border-slate-300/80"
            style={{
              background: "linear-gradient(180deg, #E8EEF6 0%, #F1F5F9 42%, #E2E8F0 100%)",
              boxShadow:
                "inset -10px 0 18px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255,255,255,0.75)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-3"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(15, 23, 42, 0.08))",
              }}
              aria-hidden="true"
            />

            <div className="relative px-4 pb-5 pt-4">
              <div
                className="rounded-xl border border-white/80 px-4 py-3.5"
                style={{
                  background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
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
                  {products.map((item) => {
                    const activeItem = item.id === activeProductId;
                    return (
                      <li key={item.id}>
                        <Link
                          href={L(`${BASE}/${item.id}`)}
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
                            {item.label}
                          </span>
                          <span className="mt-0.5 block pl-2 text-xs leading-5 text-slate-500">
                            {item.tagline}
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

        <div className="min-w-0 flex-1 border-t border-slate-200 lg:border-t-0">{children}</div>
      </div>
    </div>
  );
}
