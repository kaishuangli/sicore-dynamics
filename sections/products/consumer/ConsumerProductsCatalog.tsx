"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";
import {
  visibleConsumerProductSubcategories,
  getConsumerCatalogProducts,
  getConsumerSubcategoryDescription,
  getConsumerSubcategoryLabel,
  isConsumerSubcategoryId,
  type ConsumerAvailability,
  type ConsumerSubcategoryId,
} from "@/lib/consumer-products";
import { getUploadedProduct } from "@/lib/catalog/products";
import { pickLocalized } from "@/lib/catalog/types";
import ProductCatalogShell from "@/sections/products/ProductCatalogShell";

type SortKey = "name" | "newest";

const productNameZh: Record<string, string> = {
  "stealth-under-desk-60w": "Stealth 桌下 60W",
  "stealth-qb06": "Stealth QB06 桌垫",
  "stealth-qb21": "Stealth QB21 远距版",
  "furniture-flush-module": "齐平家具模块",
  "furniture-slim-coil": "超薄嵌入线圈组",
  "hospitality-nightstand": "酒店床头充电垫",
  "hospitality-lobby": "大堂充电点",
  "countertop-quartz": "台面隐形充电垫",
  "conference-table-kit": "会议桌套件",
  "oem-eval-kit": "消费类 OEM 评估套件",
  "oem-integration-kit": "家具集成套件",
  "retail-display-pad": "零售展示充电器",
};

const productNameEs: Record<string, string> = {
  "stealth-under-desk-60w": "Stealth bajo escritorio 60W",
  "stealth-qb06": "Stealth QB06 pad",
  "stealth-qb21": "Stealth QB21 largo alcance",
  "furniture-flush-module": "Módulo flush para muebles",
  "furniture-slim-coil": "Set de bobina slim",
  "hospitality-nightstand": "Pad de mesita hospitality",
  "hospitality-lobby": "Punto de carga de lobby",
  "countertop-quartz": "Pad invisible para encimera",
  "conference-table-kit": "Kit para mesa de reuniones",
  "oem-eval-kit": "Kit de evaluación OEM",
  "oem-integration-kit": "Kit de integración para muebles",
  "retail-display-pad": "Cargador para display retail",
};

function catalogProductName(id: string, fallback: string, locale: Locale) {
  const uploaded = getUploadedProduct(id);
  if (uploaded) return pickLocalized(uploaded.name, locale);
  if (locale === "zh") return productNameZh[id] ?? fallback;
  if (locale === "es") return productNameEs[id] ?? fallback;
  return fallback;
}

function availabilityCopy(
  value: ConsumerAvailability,
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
      label: locale === "zh" ? "OEM" : "OEM",
      className: "border-[#0B5FFF] text-[#0B5FFF]",
    };
  }
  return {
    label: locale === "zh" ? "可询" : locale === "es" ? "DISPONIBLE" : "AVAILABLE",
    className: "border-teal-600 text-teal-700",
  };
}

export default function ConsumerProductsCatalog({
  locale,
  initialSubcategory,
}: {
  locale: Locale;
  initialSubcategory?: string;
}) {
  const L = (href: string) => withLocale(href, locale);
  const isZh = locale === "zh";
  const isEs = locale === "es";
  const t = (en: string, zh: string, es: string) => (isZh ? zh : isEs ? es : en);

  const subcategory: ConsumerSubcategoryId | "all" =
    initialSubcategory && isConsumerSubcategoryId(initialSubcategory)
      ? initialSubcategory
      : "all";
  const [sort, setSort] = useState<SortKey>("newest");
  const [perPage, setPerPage] = useState(12);

  const catalogProducts = useMemo(() => getConsumerCatalogProducts(), []);

  const counts = useMemo(
    () =>
      visibleConsumerProductSubcategories.map((sub) => ({
        id: sub.id,
        label: getConsumerSubcategoryLabel(sub.id, locale),
        description: getConsumerSubcategoryDescription(sub.id, locale),
        image: sub.image,
        count: catalogProducts.filter((item) => item.subcategoryId === sub.id).length,
      })),
    [locale, catalogProducts],
  );

  const filtered = useMemo(() => {
    const list =
      subcategory === "all"
        ? [...catalogProducts]
        : catalogProducts.filter((item) => item.subcategoryId === subcategory);
    list.sort((a, b) => {
      if (sort === "name") {
        const an = catalogProductName(a.id, a.name, locale);
        const bn = catalogProductName(b.id, b.name, locale);
        return an.localeCompare(bn, locale);
      }
      return 0;
    });
    return list.slice(0, perPage);
  }, [subcategory, sort, perPage, locale, catalogProducts]);

  const hubTitle = t("Consumer Oriented Products", "消费类产品", "Productos orientados al consumidor");
  const title =
    subcategory === "all" ? hubTitle : getConsumerSubcategoryLabel(subcategory, locale);
  const emptyLabel = t(
    "No products in this subcategory yet. Contact us for OEM options.",
    "该子类暂无产品。如需 OEM 方案请联系我们。",
    "Aún no hay productos en esta subcategoría. Contáctenos para opciones OEM.",
  );
  const allLabel = t("All Products", "全部产品", "Todos los productos");
  const sortLabel = t("Sort By:", "排序：", "Ordenar:");
  const perPageLabel = t("Items per page:", "每页数量：", "Artículos por página:");
  const compareLabel = t("Compare", "对比", "Comparar");
  const catalogLabel = t("Product catalog", "产品目录", "Catálogo de productos");

  const productHref = (id: string, href?: string) =>
    href ? L(href) : L(`/products/consumer-oriented-products/${id}`);
  const categoryHref = (id?: ConsumerSubcategoryId) =>
    L(id ? `/products/consumer-oriented-products/${id}` : "/products/consumer-oriented-products");

  return (
    <ProductCatalogShell
      locale={locale}
      title={hubTitle}
      catalogLabel={catalogLabel}
      basePath="/products/consumer-oriented-products"
      activeId={subcategory === "all" ? "all" : subcategory}
      items={[
        {
          id: "all",
          label: allLabel,
          tagline: t(
            `${catalogProducts.length} products across all categories`,
            `全部 ${catalogProducts.length} 款产品`,
            `${catalogProducts.length} productos en todas las categorías`,
          ),
          href: "/products/consumer-oriented-products",
        },
        ...counts
          .filter((item) => item.count > 0)
          .map((item) => ({
          id: item.id,
          label: item.label,
          tagline: t(
            item.count === 1 ? "1 product" : `${item.count} products`,
            `${item.count} 款产品`,
            item.count === 1 ? "1 producto" : `${item.count} productos`,
          ),
        })),
      ]}
    >
      <div className="bg-white px-6 pb-16 pt-8 lg:px-10 lg:pb-20 lg:pt-10 xl:px-12">
        {subcategory !== "all" ? (
          <Link
            href={categoryHref()}
            className="text-sm font-bold text-[#0B5FFF] hover:text-[#0847cc]"
          >
            ← {hubTitle}
          </Link>
        ) : null}
        <h1 className={`font-display text-3xl font-black tracking-[-0.03em] text-[#1F2937] md:text-4xl ${subcategory !== "all" ? "mt-3" : ""}`}>
          {title}
        </h1>
        {subcategory !== "all" ? (
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            {getConsumerSubcategoryDescription(subcategory, locale)}
          </p>
        ) : null}

        {subcategory === "all" ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {counts
              .filter((item) => item.count > 0)
              .map((item) => (
              <Link
                key={item.id}
                href={categoryHref(item.id)}
                className="rounded-xl border border-slate-200 bg-white px-5 py-5 transition hover:border-[#0B5FFF]/50 hover:bg-[#F8FAFC]"
              >
                <p className="text-base font-bold text-[#0B0F19]">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.08em] text-[#0B5FFF]">
                  {item.count} {t("products", "款产品", "productos")} →
                </p>
              </Link>
            ))}
          </div>
        ) : null}

        <section className="mt-8">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-slate-100 px-4 py-3">
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                {sortLabel}
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
                {perPageLabel}
                <select
                  value={perPage}
                  onChange={(event) => setPerPage(Number(event.target.value))}
                  className="rounded border border-slate-300 bg-white px-2 py-1.5 text-xs font-semibold text-slate-700"
                >
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                </select>
              </label>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 xl:grid-cols-4">
              {filtered.length === 0 ? (
                <p className="col-span-full rounded-xl border border-dashed border-slate-200 bg-[#F8FAFC] px-5 py-10 text-sm leading-7 text-slate-600">
                  {emptyLabel}
                </p>
              ) : null}
              {filtered.map((item) => {
                const stock = availabilityCopy(item.availability, locale);
                return (
                  <article key={item.id} className="group">
                    <Link href={productHref(item.id, item.href)} className="block">
                      <div className="relative aspect-square overflow-hidden rounded-md border border-slate-200 bg-[#F8FAFC]">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          className="object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                      <h2 className="mt-3 text-sm font-semibold leading-5 text-[#0B5FFF] transition group-hover:underline">
                        {catalogProductName(item.id, item.name, locale)}
                      </h2>
                    </Link>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-[#0F766E]">{item.priceLabel}</span>
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] ${stock.className}`}
                      >
                        {stock.label}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                      <button type="button" className="inline-flex items-center gap-1 hover:text-[#0B5FFF]">
                        <span aria-hidden="true">⇄</span>
                        {compareLabel}
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
        </section>
      </div>
    </ProductCatalogShell>
  );
}
