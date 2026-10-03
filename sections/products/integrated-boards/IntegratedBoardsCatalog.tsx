import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getIntegratedBoardCategories } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";
import { getUploadedProducts, getWirelessInterfaceSharedProducts } from "@/lib/catalog/products";
import { pickLocalized } from "@/lib/catalog/types";
import {
  isIntegratedBoardCategoryId,
  type IntegratedBoardCategoryId,
} from "@/lib/integrated-boards";

type SortKey = "newest" | "name";

export default function IntegratedBoardsCatalog({
  locale,
  category,
  sort = "newest",
}: {
  locale: Locale;
  category?: string;
  sort?: SortKey;
}) {
  const L = (href: string) => withLocale(href, locale);
  const isZh = locale === "zh";
  const isEs = locale === "es";
  const boards = [
    ...getUploadedProducts("integrated-boards"),
    ...getWirelessInterfaceSharedProducts(),
  ].map((item) => ({
    id: item.id,
    categoryId: item.catalogId === "wireless-power-modules" ? "wireless-interface" : item.subcategoryId,
    brand: item.brand,
    title: pickLocalized(item.name, locale),
    image: item.image,
    imageAlt: pickLocalized(item.imageAlt, locale) || pickLocalized(item.name, locale),
    specs: item.specs,
  }));
  const coveredCategoryIds = new Set(boards.map((item) => item.categoryId));
  const categories = getIntegratedBoardCategories(locale).filter((item) =>
    coveredCategoryIds.has(item.id),
  );

  const activeCategory =
    category && isIntegratedBoardCategoryId(category) ? category : undefined;

  const filtered = activeCategory
    ? boards.filter((board) => board.categoryId === activeCategory)
    : [...boards];

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "name") return a.title.localeCompare(b.title, locale);
    return 0;
  });

  const title = activeCategory
    ? categories.find((item) => item.id === activeCategory)?.label ??
      (isZh ? "集成板卡" : isEs ? "Placas integradas" : "Integrated Boards")
    : isZh
      ? "集成板卡"
      : isEs
        ? "Placas integradas"
        : "Integrated Boards";
  const allLabel = isZh ? "全部板卡" : isEs ? "Todas las placas" : "All Boards";
  const sortLabel = isZh ? "排序" : isEs ? "Ordenar" : "Sort by";
  const newestLabel = isZh ? "最新" : isEs ? "Más recientes" : "Newest";
  const nameLabel = isZh ? "名称" : isEs ? "Nombre" : "Name";
  const filterLabel = isZh ? "筛选" : isEs ? "Filtros" : "Filters";
  const categoryNavLabel = isZh ? "板卡分类" : isEs ? "Categorías" : "Board Categories";
  const viewLabel = isZh ? "查看详情" : isEs ? "Ver detalles" : "View details";
  const countLabel = isZh
    ? `共 ${sorted.length} 款产品`
    : isEs
      ? `${sorted.length} productos`
      : `${sorted.length} products`;

  const hrefFor = (nextCategory?: IntegratedBoardCategoryId, nextSort: SortKey = sort) => {
    const params = new URLSearchParams();
    if (nextCategory) params.set("category", nextCategory);
    if (nextSort !== "newest") params.set("sort", nextSort);
    const qs = params.toString();
    return L(`/products/integrated-boards${qs ? `?${qs}` : ""}`);
  };

  return (
    <main className="bg-white pb-16">
      <div className="container-page pt-10 lg:pt-14">
        <h1 className="font-display text-3xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl">
          {title}
        </h1>

        {/* Category banners — text only */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <Link
              key={item.id}
              href={L(`/products/integrated-boards/${item.id}`)}
              className="rounded-lg border border-slate-200 bg-white px-5 py-5 transition hover:border-[#0B5FFF]/50 hover:bg-[#F8FAFC]"
            >
              <p className="text-base font-bold text-[#0B0F19]">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          {/* Left sidebar */}
          <aside className="space-y-8">
            <div>
              <p className="text-sm font-bold text-[#0B0F19]">{filterLabel}</p>
              <div className="mt-4 space-y-3">
                <label className="block text-xs font-semibold text-slate-500">{sortLabel}</label>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={hrefFor(activeCategory, "newest")}
                    className={`rounded border px-3 py-2 text-xs font-bold transition ${
                      sort === "newest"
                        ? "border-[#0B5FFF] bg-[#EFF6FF] text-[#0B5FFF]"
                        : "border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    {newestLabel}
                  </Link>
                  <Link
                    href={hrefFor(activeCategory, "name")}
                    className={`rounded border px-3 py-2 text-xs font-bold transition ${
                      sort === "name"
                        ? "border-[#0B5FFF] bg-[#EFF6FF] text-[#0B5FFF]"
                        : "border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    {nameLabel}
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold text-[#0B0F19]">{categoryNavLabel}</p>
              <ul className="mt-4 space-y-1 border-t border-slate-200 pt-3">
                <li>
                  <Link
                    href={hrefFor(undefined, sort)}
                    className={`block py-2 text-sm transition ${
                      !activeCategory
                        ? "font-bold text-[#0B5FFF]"
                        : "text-slate-700 hover:text-[#0B5FFF]"
                    }`}
                  >
                    {allLabel}
                  </Link>
                </li>
                {categories.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={L(`/products/integrated-boards/${item.id}`)}
                      className={`block py-2 text-sm transition ${
                        activeCategory === item.id
                          ? "font-bold text-[#0B5FFF]"
                          : "text-slate-700 hover:text-[#0B5FFF]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product grid */}
          <section>
            <p className="mb-5 text-sm text-slate-500">{countLabel}</p>
            <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              {sorted.map((board) => (
                <article key={board.id} className="group">
                  <Link href={L(`/products/integrated-boards/${board.id}`)} className="block">
                    <div className="relative aspect-square overflow-hidden rounded-md border border-slate-200 bg-[#F8FAFC]">
                      <Image
                        src={board.image}
                        alt={board.imageAlt}
                        fill
                        className="object-contain p-6 transition duration-300 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </div>
                    <h2 className="mt-4 text-base font-bold text-[#0B0F19] transition group-hover:text-[#0B5FFF]">
                      {board.title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">{board.brand}</p>
                    <ul className="mt-3 space-y-1">
                      {board.specs.slice(0, 3).map((spec) => (
                        <li key={spec.label} className="text-xs leading-5 text-slate-600">
                          <span className="font-semibold text-slate-700">{spec.label}:</span>{" "}
                          {spec.value}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-sm font-bold text-[#0B5FFF]">
                      {viewLabel} <span aria-hidden="true">→</span>
                    </p>
                  </Link>
                </article>
              ))}
            </div>

            {sorted.length === 0 ? (
              <p className="rounded-lg border border-dashed border-slate-300 px-6 py-16 text-center text-sm text-slate-500">
                {isZh
                  ? "该分类下暂无产品。"
                  : isEs
                    ? "No hay productos en esta categoría."
                    : "No products in this category."}
              </p>
            ) : null}
          </section>
        </div>
      </div>
    </main>
  );
}
