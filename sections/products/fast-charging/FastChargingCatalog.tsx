"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/path";
import {
  fastChargingCategories,
  getFastChargingCatalogProducts,
  getFastChargingCategoryLabel,
  getFastChargingProductName,
  isFastChargingCategoryId,
  type FastChargingAvailability,
  type FastChargingCategoryId,
} from "@/lib/fast-charging-catalog";

type SortKey = "name" | "newest";

function availabilityCopy(
  value: FastChargingAvailability,
  locale: Locale,
): { label: string; className: string } {
  if (value === "in-stock") {
    return {
      label: locale === "zh" ? "有货" : locale === "es" ? "EN STOCK" : "IN STOCK",
      className: "border-emerald-500 text-emerald-600",
    };
  }
  if (value === "oem") {
    return {
      label: "OEM",
      className: "border-[#0B5FFF] text-[#0B5FFF]",
    };
  }
  return {
    label: locale === "zh" ? "可询" : locale === "es" ? "DISPONIBLE" : "AVAILABLE",
    className: "border-teal-600 text-teal-700",
  };
}

export default function FastChargingCatalog({ locale }: { locale: Locale }) {
  const category = useSearchParams().get("category") ?? undefined;
  const L = (href: string) => withLocale(href, locale);
  const dict = getDictionary(locale);
  const navProducts = dict.navProducts as Record<string, string>;
  const isZh = locale === "zh";
  const isEs = locale === "es";
  const t = (en: string, zh: string, es: string) => (isZh ? zh : isEs ? es : en);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("newest");
  const [perPage, setPerPage] = useState(24);

  const catalogProducts = useMemo(() => getFastChargingCatalogProducts(), []);
  const activeCategory: FastChargingCategoryId =
    category && isFastChargingCategoryId(category) ? category : "ac-ev-chargers";

  const title = navProducts["ev-charging-gun"] ?? "EV Charging Gun";
  const searchHeading = isZh
    ? `在「${title}」中搜索`
    : isEs
      ? `Buscar en ${title}`
      : `Search within ${title}`;
  const searchPlaceholder = t("Enter keyword(s)", "输入关键词", "Introducir palabra(s)");
  const searchButton = t("Search", "搜索", "Buscar");
  const categoryLabel = t("Category", "产品分类", "Categorías");

  const hrefFor = (nextCategory: FastChargingCategoryId) => {
    if (nextCategory === "ac-ev-chargers") return L("/products/ev-charging-gun");
    return L(`/products/ev-charging-gun?category=${nextCategory}`);
  };

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return fastChargingCategories;
    return fastChargingCategories.filter((item) => {
      const label = getFastChargingCategoryLabel(item, locale).toLowerCase();
      return label.includes(q) || item.id.includes(q);
    });
  }, [locale, query]);

  const counts = useMemo(
    () =>
      fastChargingCategories.map((item) => ({
        id: item.id,
        label: getFastChargingCategoryLabel(item, locale),
        count: catalogProducts.filter((product) => product.categoryId === item.id).length,
      })),
    [locale, catalogProducts],
  );

  const filteredProducts = useMemo(() => {
    const list = catalogProducts.filter((item) => item.categoryId === activeCategory);
    list.sort((a, b) => {
      if (sort === "name") {
        return getFastChargingProductName(a, locale).localeCompare(
          getFastChargingProductName(b, locale),
          locale,
        );
      }
      return 0;
    });
    return list.slice(0, perPage);
  }, [activeCategory, sort, perPage, locale, catalogProducts]);

  const subcategoryHeading = getFastChargingCategoryLabel(
    fastChargingCategories.find((item) => item.id === activeCategory)!,
    locale,
  );

  return (
    <main className="min-h-[70vh] bg-white">
      <div className="border-b border-slate-200 bg-white">
        <div className="container-page py-5">
          <h1 className="font-display text-2xl font-extrabold tracking-tight text-[#0B0F19] md:text-3xl">
            {title}
          </h1>
        </div>
      </div>

      <div className="container-page py-8 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
          {/* Left — page categories only */}
          <aside className="space-y-6">
            <div className="border border-slate-200 bg-[#F7F9FC] p-4">
              <p className="text-xs font-bold leading-5 text-[#0B0F19]">{searchHeading}</p>
              <form
                className="mt-3 flex gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={searchPlaceholder}
                  className="min-w-0 flex-1 border border-slate-300 bg-white px-3 py-2 text-sm text-[#0B0F19] outline-none ring-[#0B5FFF] placeholder:text-slate-400 focus:ring-2"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-[#0B0F19] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#1a2233]"
                >
                  {searchButton}
                </button>
              </form>
            </div>

            <div>
              <p className="border-b border-slate-200 pb-2 text-sm font-bold text-[#0B0F19]">
                {categoryLabel}
              </p>
              <nav aria-label={categoryLabel} className="mt-1">
                <ul>
                  {filteredCategories.map((item) => {
                    const active = activeCategory === item.id;
                    const label = getFastChargingCategoryLabel(item, locale);
                    return (
                      <li key={item.id} className="border-b border-slate-200">
                        <Link
                          href={hrefFor(item.id)}
                          className={`flex items-center justify-between gap-2 px-1 py-3 text-sm transition ${
                            active
                              ? "bg-slate-100 font-bold text-[#0B5FFF]"
                              : "font-medium text-[#0B0F19] hover:bg-slate-50 hover:text-[#0B5FFF]"
                          }`}
                          aria-current={active ? "page" : undefined}
                        >
                          <span className="flex items-center gap-2">
                            {active ? (
                              <span className="text-[#E11D48]" aria-hidden="true">
                                ▸
                              </span>
                            ) : null}
                            {label}
                          </span>
                          <span className="text-slate-400" aria-hidden="true">
                            ›
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          <div className="min-w-0">
            <section>
                <h2 className="font-display text-3xl font-black tracking-[-0.03em] text-[#1F2937] md:text-4xl">
                  {subcategoryHeading}
                </h2>

                <div className="mt-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    {t("Jump to subcategory:", "跳转到子分类：", "Ir a subcategoría:")}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {counts.map((item) => (
                      <Link
                        key={item.id}
                        href={hrefFor(item.id)}
                        className={`rounded-md px-3 py-2 text-xs font-bold transition ${
                          activeCategory === item.id
                            ? "bg-[#0B5FFF] text-white"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {item.label} ({item.count})
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-slate-100 px-4 py-3">
                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      {t("Sort By:", "排序：", "Ordenar:")}
                      <select
                        value={sort}
                        onChange={(event) => setSort(event.target.value as SortKey)}
                        className="rounded border border-slate-300 bg-white px-2 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        <option value="newest">{t("Newest", "最新", "Más recientes")}</option>
                        <option value="name">{t("Name", "名称", "Nombre")}</option>
                      </select>
                    </label>
                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      {t("Items per page:", "每页数量：", "Artículos por página:")}
                      <select
                        value={perPage}
                        onChange={(event) => setPerPage(Number(event.target.value))}
                        className="rounded border border-slate-300 bg-white px-2 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        <option value={12}>12</option>
                        <option value={20}>20</option>
                        <option value={24}>24</option>
                      </select>
                    </label>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 xl:grid-cols-4">
                    {filteredProducts.map((item) => {
                      const stock = availabilityCopy(item.availability, locale);
                      const name = getFastChargingProductName(item, locale);
                      const price =
                        isZh && item.priceLabel === "Quote"
                          ? "询价"
                          : isEs && item.priceLabel === "Quote"
                            ? "Cotizar"
                            : item.priceLabel;
                      const href = item.image
                        ? L(`/products/ev-charging-gun/${item.id}`)
                        : L("/contact");
                      return (
                        <article key={item.id} className="group">
                          <Link href={href} className="block">
                            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-md border border-slate-200 bg-[#F8FAFC]">
                              {item.image ? (
                                <Image
                                  src={item.image}
                                  alt={name}
                                  fill
                                  className="object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
                                  sizes="(max-width: 768px) 50vw, 25vw"
                                />
                              ) : (
                                <div className="px-4 text-center">
                                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                                    {t("Product template", "产品模板", "Plantilla")}
                                  </p>
                                  <p className="mt-2 text-sm font-semibold text-slate-500">{name}</p>
                                </div>
                              )}
                            </div>
                            <h3 className="mt-3 text-sm font-semibold leading-5 text-[#0B5FFF] transition group-hover:underline">
                              {name}
                            </h3>
                          </Link>
                          <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                            {item.tagline}
                          </p>
                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            <span className="text-sm font-bold text-[#0F766E]">{price}</span>
                            <span
                              className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] ${stock.className}`}
                            >
                              {stock.label}
                            </span>
                          </div>
                          <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                            <button
                              type="button"
                              className="inline-flex items-center gap-1 hover:text-[#0B5FFF]"
                            >
                              <span aria-hidden="true">⇄</span>
                              {t("Compare", "对比", "Comparar")}
                            </button>
                            <button
                              type="button"
                              className="text-slate-400 transition hover:text-rose-500"
                              aria-label="Favorite"
                            >
                              ♡
                            </button>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </section>
          </div>
        </div>
      </div>
    </main>
  );
}
