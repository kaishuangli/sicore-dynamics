import KnowledgeIcon from "@/components/KnowledgeIcon";
import Link from "next/link";
import type { knowledgeCategories as KnowledgeCategoriesType } from "@/lib/knowledge";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";
import { hasKnowledgeArticle } from "@/lib/knowledge-articles";
import { getKnowledgeWikiOverview } from "@/lib/knowledge-wiki";

type KnowledgeCategory = (typeof KnowledgeCategoriesType)[number];

type KnowledgeCatalogGridProps = {
  categories: readonly KnowledgeCategory[];
  locale: Locale;
  activeId?: string | null;
  onSelect: (id: string) => void;
};

export function KnowledgeCatalogGrid({
  categories,
  locale,
  activeId,
  onSelect,
}: KnowledgeCatalogGridProps) {
  const isZh = locale === "zh";

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {categories.map((category) => {
        const isActive = activeId === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelect(category.id)}
            className={`knowledge-shelf-card group relative overflow-hidden rounded-2xl border bg-white p-6 text-left transition duration-300 ${
              category.featured
                ? "ring-1 ring-violet-300/60"
                : ""
            } ${
              isActive
                ? "border-[#0B5FFF]/40 shadow-[0_20px_50px_rgba(11,95,255,0.12)]"
                : "border-slate-200/80 shadow-[0_8px_32px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:border-[#0B5FFF]/25 hover:shadow-[0_20px_50px_rgba(11,95,255,0.1)]"
            }`}
          >
            <div
              className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${category.accent}`}
              aria-hidden="true"
            />
            <div className="absolute right-4 top-4 flex h-16 w-12 flex-col justify-end gap-1 opacity-[0.12] transition group-hover:opacity-20">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`block h-2 rounded-sm bg-gradient-to-r ${category.accent}`}
                  style={{ width: `${70 - i * 8}%`, marginLeft: "auto" }}
                />
              ))}
            </div>

            <div className="relative pl-3">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B5FFF]">
                      {isZh ? `系列 ${category.index}` : `Collection ${category.index}`}
                    </p>
                    {category.featured ? (
                      <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-violet-700">
                        {isZh ? "SiCore 核心" : "SiCore Core"}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="font-display mt-2 text-lg font-extrabold leading-snug text-[#0B0F19]">
                    {category.title}
                  </h3>
                </div>
                <div className={`shrink-0 rounded-xl bg-gradient-to-br ${category.accent} p-2.5 text-white shadow-lg`}>
                  <KnowledgeIcon type={category.icon} className="h-6 w-6" />
                </div>
              </div>

              <p className="mt-3 min-h-[44px] text-sm leading-6 text-slate-600">{category.description}</p>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                  {isZh ? `${category.articles.length} 个主题` : `${category.articles.length} topics`}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-[#0B5FFF] transition group-hover:gap-2">
                  {isZh ? "浏览" : "Browse"}
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export function KnowledgeSidebar({
  categories,
  locale,
  activeId,
  onSelect,
}: {
  categories: readonly KnowledgeCategory[];
  locale: Locale;
  activeId?: string | null;
  onSelect: (id: string) => void;
}) {
  const isZh = locale === "zh";

  return (
    <nav className="max-h-[calc(100vh-220px)] space-y-1 overflow-y-auto pr-1" aria-label="Knowledge library catalog">
      <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
        {isZh ? "Wiki 系列索引" : "Wiki collections"}
      </p>
      {categories.map((category) => {
        const isActive = activeId === category.id;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelect(category.id)}
            className={`relative flex w-full items-start gap-3 overflow-hidden rounded-xl py-2.5 pl-4 pr-3 text-left transition ${
              isActive
                ? "bg-white text-[#0B0F19] shadow-md"
                : "text-white/85 hover:bg-white/15 hover:text-white"
            }`}
          >
            {isActive ? (
              <span
                aria-hidden="true"
                className={`absolute inset-y-1.5 left-0 w-1.5 rounded-full bg-gradient-to-b ${category.accent}`}
              />
            ) : null}
            <span
              className={`mt-0.5 shrink-0 font-mono text-[11px] font-bold tabular-nums ${
                isActive ? "text-[#0B5FFF]" : "text-white/60"
              }`}
            >
              {category.index}
            </span>
            <span className="min-w-0">
              <span
                className={`block text-[13px] leading-snug ${
                  isActive ? "font-extrabold text-[#0B0F19]" : "font-bold"
                }`}
              >
                {category.shortLabel}
              </span>
            </span>
          </button>
        );
      })}
    </nav>
  );
}

export function KnowledgeCategoryPanel({
  category,
  locale,
}: {
  category: KnowledgeCategory;
  locale: Locale;
}) {
  const isZh = locale === "zh";
  const isEs = locale === "es";
  const L = (href: string) => withLocale(href, locale);
  const wiki = getKnowledgeWikiOverview(category.id, locale);
  const readyCount = category.articles.filter((article) =>
    hasKnowledgeArticle(category.id, article.slug),
  ).length;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_40px_rgba(15,23,42,0.05)]">
      <div className={`border-b border-slate-200 bg-gradient-to-r ${category.accent} px-6 py-7 text-white md:px-10`}>
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-xl bg-white/15 p-2.5 backdrop-blur-sm">
            <KnowledgeIcon type={category.icon} className="h-7 w-7" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">
              {isZh ? `系列 ${category.index}` : isEs ? `Colección ${category.index}` : `Collection ${category.index}`}
              {" · "}
              {isZh ? "文章目录" : isEs ? "Índice de artículos" : "Article directory"}
            </p>
            <h2 className="font-display mt-1 text-2xl font-black tracking-[-0.03em] md:text-3xl">
              {category.title}
            </h2>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90 md:text-base md:leading-8">
          {wiki.lead}
        </p>
        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
          {isZh
            ? `${category.articles.length} 篇文章 · ${readyCount} 篇可阅读`
            : isEs
              ? `${category.articles.length} artículos · ${readyCount} publicados`
              : `${category.articles.length} articles · ${readyCount} ready to read`}
        </p>
      </div>

      <div className="border-b border-slate-100 bg-[#F8FAFC] px-6 py-4 md:px-10">
        <p className="text-sm leading-6 text-slate-600">
          {isZh
            ? "以下为本系列全部文章目录。点击任一标题进入完整知识解说页。"
            : isEs
              ? "Índice completo de esta colección. Abra un título para leer el artículo completo."
              : "Full article directory for this collection. Open any title to read the full knowledge page."}
        </p>
      </div>

      <ol className="divide-y divide-slate-200/90">
        {category.articles.map((article, index) => {
          const ready = hasKnowledgeArticle(category.id, article.slug);
          const row = (
            <>
              <span className="w-12 shrink-0 font-mono text-sm font-bold tabular-nums text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className={`font-display block text-base font-extrabold leading-snug md:text-lg ${
                    ready
                      ? "text-[#0B0F19] transition group-hover:text-[#0B5FFF]"
                      : "text-slate-700"
                  }`}
                >
                  {article.title}
                </span>
                <span className="mt-1.5 block max-w-3xl text-sm leading-6 text-slate-500">
                  {article.summary}
                </span>
              </span>
              <span
                className={`hidden shrink-0 text-xs font-bold uppercase tracking-[0.1em] sm:inline-flex ${
                  ready ? "text-[#0B5FFF]" : "text-slate-400"
                }`}
              >
                {ready
                  ? isZh
                    ? "阅读 →"
                    : isEs
                      ? "Leer →"
                      : "Read →"
                  : isZh
                    ? "撰写中"
                    : isEs
                      ? "En curso"
                      : "In progress"}
              </span>
            </>
          );

          return (
            <li key={article.slug}>
              {ready ? (
                <Link
                  href={L(`/knowledge/${category.id}/${article.slug}`)}
                  className="group flex items-start gap-4 px-6 py-5 transition hover:bg-[#F8FAFC] md:gap-5 md:px-10"
                >
                  {row}
                </Link>
              ) : (
                <div className="flex items-start gap-4 px-6 py-5 opacity-70 md:gap-5 md:px-10">
                  {row}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
