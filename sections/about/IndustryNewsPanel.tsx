"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getIndustryNewsBundle } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";

function formatNewsDate(value: string, locale: Locale) {
  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleDateString(locale === "zh" ? "zh-CN" : "en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function IndustryNewsPanel({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const L = (href: string) => withLocale(href, locale);
  const { industryNewsCategories, industryNewsHero, industryNewsItems, industryNewsTopics } =
    getIndustryNewsBundle(locale);
  const allCategory: string = industryNewsCategories[0];
  const [activeCategory, setActiveCategory] = useState<string>(allCategory);

  const filteredItems = useMemo(() => {
    if (activeCategory === allCategory) return industryNewsItems;
    return industryNewsItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, industryNewsItems, allCategory]);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="border-b border-slate-200/70 bg-[#F8FAFC]"
        aria-labelledby="industry-news-heading"
      >
        <div className="container-page py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {industryNewsHero.eyebrow}
            </p>
            <h1
              id="industry-news-heading"
              className="font-display mt-4 text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-[#0B0F19] md:text-[44px]"
            >
              {industryNewsHero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              {industryNewsHero.body}
            </p>
          </div>
        </div>
      </section>

      {/* Filters + list */}
      <section className="py-14 lg:py-20" aria-label="Industry news list">
        <div className="container-page">
          <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-6">
            {industryNewsCategories.map((category) => {
              const active = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] transition ${
                    active
                      ? "bg-[#0B5FFF] text-white"
                      : "bg-transparent text-slate-500 hover:text-[#0B5FFF]"
                  }`}
                  aria-pressed={active}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <ul className="mt-2 divide-y divide-slate-200">
            {filteredItems.map((item) => (
              <li key={item.id} className="grid gap-4 py-8 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-10">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    {formatNewsDate(item.date, locale)}
                  </p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
                    {item.category}
                  </p>
                </div>
                <article>
                  <h2 className="font-display text-xl font-extrabold tracking-[-0.02em] text-[#0B0F19] md:text-2xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                    {item.summary}
                  </p>
                </article>
              </li>
            ))}
          </ul>

          {filteredItems.length === 0 ? (
            <p className="py-16 text-center text-sm text-slate-500">
              {isZh ? "此分类下暂无内容。" : "No items in this category yet."}
            </p>
          ) : null}
        </div>
      </section>

      {/* Coverage focus */}
      <section className="border-t border-slate-200/70 bg-[#F8FAFC] py-16 lg:py-20" aria-labelledby="topics-heading">
        <div className="container-page">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
            {industryNewsTopics.eyebrow}
          </p>
          <h2
            id="topics-heading"
            className="font-display mt-3 max-w-xl text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl"
          >
            {industryNewsTopics.title}
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {industryNewsTopics.items.map((item) => (
              <article key={item.title} className="border-t border-slate-300 pt-5">
                <h3 className="font-display text-base font-extrabold text-[#0B0F19]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200/70 py-16 lg:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl">
              {isZh ? "想了解这些趋势对您的产品意味着什么？" : "Exploring what these shifts mean for your product?"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
              {isZh
                ? "与 SiCore 探讨面向机器人、自动化与 OEM 平台的无线与免插拔充电方案。"
                : "Talk with SiCore about wireless and plug-free charging for robotics, automation, and OEM platforms."}
            </p>
          </div>
          <Link href={L("/contact")} className="btn-primary shrink-0">
            {isZh ? "联系我们的团队" : "Contact Our Team"} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
