import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getKnowledgeCategories } from "@/lib/i18n/content";

export default function KnowledgeHero({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const knowledgeCategories = getKnowledgeCategories(locale);
  const totalKnowledgeArticles = knowledgeCategories.reduce(
    (count, category) => count + category.articles.length,
    0,
  );

  return (
    <section
      className="relative overflow-hidden bg-[#0B0F19] py-16 lg:py-22"
      aria-labelledby="knowledge-hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#0a1628] to-[#071225]" />
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 80px)",
        }}
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
            {isZh ? "SiCore 知识库" : "SiCore Knowledge Library"}
          </p>
          <h1
            id="knowledge-hero-heading"
            className="font-display mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.04em] text-white md:text-[42px] lg:text-[48px]"
          >
            {isZh ? "知识中心" : "Knowledge Center"}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
            {isZh
              ? "工程系列涵盖自主充电、无线供电、智能功率控制、充电站与行业标准。"
              : "Engineering collections covering autonomous charging, wireless power, intelligent power control, charging stations, and industry standards."}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {[
              { value: String(knowledgeCategories.length), label: isZh ? "系列" : "Collections" },
              { value: `${totalKnowledgeArticles}`, label: isZh ? "主题" : "Topics" },
              { value: "SiCore Core", label: isZh ? "AI 电力控制" : "AI Power Control" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-xl">
            <label className="sr-only" htmlFor="knowledge-search">
              {isZh ? "搜索知识库" : "Search the knowledge library"}
            </label>
            <div className="flex overflow-hidden rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-sm">
              <input
                id="knowledge-search"
                type="search"
                placeholder={isZh ? "搜索系列、主题或关键词…" : "Search collections, topics, or keywords..."}
                className="min-w-0 flex-1 border-0 bg-transparent px-5 py-3.5 text-sm text-white outline-none placeholder:text-slate-500"
              />
              <button
                type="button"
                className="shrink-0 bg-[#0B5FFF] px-5 text-xs font-bold uppercase tracking-wide text-white"
              >
                {isZh ? "搜索" : "Search"}
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {knowledgeCategories.slice(0, 5).map((category) => (
              <Link
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-[11px] font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
              >
                {category.shortLabel}
              </Link>
            ))}
            <span className="rounded-full px-3 py-1.5 text-[11px] text-slate-500">
              {isZh ? "+8 更多" : "+8 more"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
