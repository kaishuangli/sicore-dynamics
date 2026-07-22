"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { getKnowledgeCategoryFromHash, type KnowledgeCategoryId } from "@/lib/knowledge";
import { isKnowledgeCategoryId, knowledgeCollectionPath } from "@/lib/knowledge-path";
import type { Locale } from "@/lib/i18n/config";
import { getKnowledgeCategories } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";
import {
  KnowledgeCatalogGrid,
  KnowledgeCategoryPanel,
  KnowledgeSidebar,
} from "@/sections/knowledge/KnowledgeLibrary";

function KnowledgeLibraryPanelsInner({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const L = (href: string) => withLocale(href, locale);
  const knowledgeCategories = getKnowledgeCategories(locale);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<KnowledgeCategoryId | null>(null);
  const libraryRef = useRef<HTMLDivElement>(null);

  const resolveCategory = useCallback((): KnowledgeCategoryId | null => {
    const fromQuery = searchParams.get("collection");
    if (isKnowledgeCategoryId(fromQuery)) return fromQuery;

    if (typeof window !== "undefined") {
      return getKnowledgeCategoryFromHash(window.location.hash);
    }

    return null;
  }, [searchParams]);

  const syncFromUrl = useCallback(() => {
    setActiveCategory(resolveCategory());
  }, [resolveCategory]);

  useEffect(() => {
    syncFromUrl();
    window.addEventListener("hashchange", syncFromUrl);
    return () => window.removeEventListener("hashchange", syncFromUrl);
  }, [syncFromUrl]);

  const selectCategory = useCallback(
    (id: string) => {
      if (!isKnowledgeCategoryId(id)) return;
      setActiveCategory(id);
      router.replace(withLocale(knowledgeCollectionPath(id), locale), { scroll: false });
      libraryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [locale, router],
  );

  const clearCategory = useCallback(() => {
    setActiveCategory(null);
    router.replace(withLocale("/knowledge", locale), { scroll: false });
  }, [locale, router]);

  const category =
    activeCategory != null
      ? knowledgeCategories.find((item) => item.id === activeCategory)
      : null;

  return (
    <section ref={libraryRef} className="scroll-mt-[190px] bg-[#F8FAFC] py-12 lg:py-16">
      <div className="container-page">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">
              {isZh ? "工程 Wiki" : locale === "es" ? "Wiki de ingeniería" : "Engineering Wiki"}
            </p>
            <h2 className="font-display mt-2 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl">
              {activeCategory
                ? isZh
                  ? "系列知识页"
                  : locale === "es"
                    ? "Página wiki de la colección"
                    : "Collection wiki page"
                : isZh
                  ? "像 Wiki 一样阅读工程知识"
                  : locale === "es"
                    ? "Lea conocimiento de ingeniería como una wiki"
                    : "Read engineering knowledge like a wiki"}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              {activeCategory
                ? isZh
                  ? "左侧选择知识分类后，右侧显示该分类的全部文章目录，点击标题再进入正文。"
                  : locale === "es"
                    ? "Al elegir una colección, verá el índice completo de artículos. Abra un título para leer."
                    : "Select a collection on the left to see its full article directory. Open a title to read."
                : isZh
                  ? "选择一个系列开始。每篇文章都有详细文本、目录与配图，便于连续学习。"
                  : locale === "es"
                    ? "Elija una colección para empezar. Cada artículo incluye texto detallado, contenidos y figuras."
                    : "Choose a collection to begin. Each article includes detailed text, contents, and figures for continuous learning."}
            </p>
          </div>
          {activeCategory ? (
            <button
              type="button"
              onClick={clearCategory}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#0B5FFF] transition hover:gap-3"
            >
              {isZh ? "← 返回全部系列" : "← Back to all collections"}
            </button>
          ) : null}
        </div>

        <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div
              className={`sticky top-[190px] relative overflow-hidden rounded-2xl bg-gradient-to-br p-4 shadow-lg ring-1 ring-black/10 ${
                category?.accent ?? "from-[#0B5FFF] to-cyan-400"
              }`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(255,255,255,0.28),transparent_55%)]"
              />
              <div className="relative">
                <KnowledgeSidebar
                  categories={knowledgeCategories}
                  locale={locale}
                  activeId={activeCategory}
                  onSelect={selectCategory}
                />
              </div>
            </div>
          </aside>

          <div>
            {category ? (
              <KnowledgeCategoryPanel category={category} locale={locale} />
            ) : (
              <>
                <KnowledgeCatalogGrid
                  categories={knowledgeCategories}
                  locale={locale}
                  activeId={activeCategory}
                  onSelect={selectCategory}
                />
                <div className="mt-12 rounded-2xl border border-dashed border-slate-200 bg-white/70 p-8 text-center">
                  <p className="font-display text-lg font-bold text-[#0B0F19]">
                    {isZh ? "需要超出文库范围的工程支持？" : "Need engineering support beyond the library?"}
                  </p>
                  <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
                    {isZh
                      ? "SiCore 团队可协助定制集成、产品选型与部署规划。"
                      : "SiCore's team can help with custom integration, product selection, and deployment planning."}
                  </p>
                  <Link href={L("/contact")} className="btn-primary mt-6 inline-flex">
                    {isZh ? "联系我们" : "Contact us"} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function KnowledgeLibraryPanels({ locale }: { locale: Locale }) {
  return (
    <Suspense fallback={<div className="bg-[#F8FAFC] py-24" aria-hidden="true" />}>
      <KnowledgeLibraryPanelsInner locale={locale} />
    </Suspense>
  );
}
