import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/path";
import AddToCartButton from "@/components/cart/AddToCartButton";
import {
  formatUsd,
  getThirdPartyCategoryDescription,
  getThirdPartyCategoryLabel,
  getThirdPartyCatalogItems,
  getThirdPartyProductTitle,
  isThirdPartyCategoryId,
  thirdPartyCategories,
  type ThirdPartyCategoryId,
} from "@/lib/third-party-products";

type SortKey = "newest" | "name";

export default function ThirdPartyProductsCatalog({
  locale,
  category,
  sort = "newest",
}: {
  locale: Locale;
  category?: string;
  sort?: SortKey;
}) {
  const L = (href: string) => withLocale(href, locale);
  const dict = getDictionary(locale);
  const isZh = locale === "zh";
  const isEs = locale === "es";

  const activeCategory =
    category && isThirdPartyCategoryId(category) ? category : undefined;

  const catalogItems = getThirdPartyCatalogItems();
  const filtered = activeCategory
    ? catalogItems.filter((item) => item.categoryId === activeCategory)
    : [...catalogItems];

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "name") {
      return getThirdPartyProductTitle(a, locale).localeCompare(
        getThirdPartyProductTitle(b, locale),
        locale,
      );
    }
    return 0;
  });

  const title = dict.nav.thirdPartyProducts;
  const allLabel = isZh ? "全部产品" : isEs ? "Todos los productos" : "All Products";
  const sortLabel = isZh ? "排序" : isEs ? "Ordenar" : "Sort by";
  const newestLabel = isZh ? "最新" : isEs ? "Más recientes" : "Newest";
  const nameLabel = isZh ? "名称" : isEs ? "Nombre" : "Name";
  const filterLabel = isZh ? "筛选" : isEs ? "Filtros" : "Filters";
  const categoryNavLabel = isZh ? "产品分类" : isEs ? "Categorías" : "Categories";
  const buyOnlineLabel = isZh ? "现货可购" : isEs ? "Compra online" : "Buy online";
  const stockLabel = isZh ? "有货" : isEs ? "EN STOCK" : "IN STOCK";
  const quoteLabel = isZh ? "询价" : isEs ? "Cotizar" : "Quote";
  const countLabel = isZh
    ? `共 ${sorted.length} 款产品`
    : isEs
      ? `${sorted.length} productos`
      : `${sorted.length} products`;

  const hrefFor = (nextCategory?: ThirdPartyCategoryId, nextSort: SortKey = sort) => {
    const params = new URLSearchParams();
    if (nextCategory) params.set("category", nextCategory);
    if (nextSort !== "newest") params.set("sort", nextSort);
    const qs = params.toString();
    return L(`/third-party-products${qs ? `?${qs}` : ""}`);
  };

  return (
    <main className="bg-white pb-16">
      <div className="container-page pt-10 lg:pt-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h1 className="font-display text-3xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl">
            {title}
          </h1>
          <Link
            href={L("/cart")}
            className="text-sm font-bold text-[#0B5FFF] transition hover:text-[#0847cc]"
          >
            {isZh ? "查看购物车 →" : isEs ? "Ver carrito →" : "View cart →"}
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {thirdPartyCategories.map((item) => (
            <Link
              key={item.id}
              href={hrefFor(item.id, sort)}
              className="rounded-lg border border-slate-200 bg-white px-5 py-5 transition hover:border-[#0B5FFF]/50 hover:bg-[#F8FAFC]"
            >
              <p className="text-base font-bold text-[#0B0F19]">
                {getThirdPartyCategoryLabel(item, locale)}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {getThirdPartyCategoryDescription(item, locale)}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
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
                {thirdPartyCategories.map((item) => {
                  const active = activeCategory === item.id;
                  return (
                    <li key={item.id}>
                      <Link
                        href={hrefFor(item.id, sort)}
                        className={`block py-2 text-sm transition ${
                          active
                            ? "font-bold text-[#0B5FFF]"
                            : "text-slate-700 hover:text-[#0B5FFF]"
                        }`}
                      >
                        {getThirdPartyCategoryLabel(item, locale)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          <section>
            <p className="mb-5 text-sm text-slate-500">{countLabel}</p>
            <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              {sorted.map((item) => {
                const productTitle = getThirdPartyProductTitle(item, locale);
                const priced = item.priceCents > 0;
                return (
                  <article key={item.id} className="group flex flex-col">
                    <Link href={L(`/third-party-products/${item.id}`)} className="block">
                      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-md border border-slate-200 bg-[#F8FAFC]">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={productTitle}
                            fill
                            className="object-contain p-6 transition duration-300 group-hover:scale-[1.03]"
                            sizes="(max-width: 640px) 100vw, 33vw"
                          />
                        ) : (
                          <div className="px-4 text-center">
                            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                              {buyOnlineLabel}
                            </p>
                            <p className="mt-2 text-sm font-semibold text-slate-500">{productTitle}</p>
                          </div>
                        )}
                      </div>
                      <h2 className="mt-4 text-base font-bold text-[#0B0F19] transition group-hover:text-[#0B5FFF]">
                        {productTitle}
                      </h2>
                    </Link>
                    <p className="mt-1 text-sm text-slate-500">{item.brand}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="text-base font-bold text-[#0F766E]">
                        {priced ? formatUsd(item.priceCents, locale) : quoteLabel}
                      </span>
                      {item.inStock ? (
                        <span className="rounded-full border border-emerald-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-emerald-600">
                          {stockLabel}
                        </span>
                      ) : null}
                    </div>
                    <ul className="mt-3 space-y-1">
                      {item.specs.slice(0, 3).map((spec) => (
                        <li key={spec.label} className="text-xs leading-5 text-slate-600">
                          <span className="font-semibold text-slate-700">{spec.label}:</span>{" "}
                          {spec.value}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-1">
                      {priced ? (
                        <AddToCartButton productId={item.id} locale={locale} />
                      ) : (
                        <Link
                          href={L(`/third-party-products/${item.id}`)}
                          className="mt-3 inline-flex w-full items-center justify-center border border-[#0B5FFF] px-4 py-2.5 text-xs font-bold text-[#0B5FFF] transition hover:bg-[#0B5FFF] hover:text-white"
                        >
                          {quoteLabel}
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
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
