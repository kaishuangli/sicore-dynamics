"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SectionEyebrow from "@/components/SectionEyebrow";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/path";
import {
  getProductCategoryCard,
  getProductCategoryDescription,
} from "@/lib/product-categories";
import { getPublicProductNavLinks } from "@/lib/products";

export default function FeaturedProductSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const L = (href: string) => withLocale(href, locale);
  const categories = getPublicProductNavLinks().flatMap((item) => {
    const card = getProductCategoryCard(item.id);
    if (!card) return [];
    return [
      {
        id: item.id,
        href: item.href,
        label: dict.navProducts[item.id],
        description: getProductCategoryDescription(item.id, locale),
        image: card.image,
        imageAlt: card.imageAlt,
      },
    ];
  });
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "wireless-power-modules");
  const active = categories.find((item) => item.id === activeId) ?? categories[0];

  if (!active) return null;

  return (
    <section id="products" className="relative overflow-hidden pt-12 pb-10 lg:pt-14 lg:pb-12">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="container-page relative">
        <SectionEyebrow>{dict.home.productsEyebrow}</SectionEyebrow>

        <div className="mt-4 grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-[32px] font-black leading-tight tracking-[-0.045em] text-[#0B0F19] md:text-[42px]">
              {dict.home.productsTitleBefore}{" "}
              <span className="text-gradient-ai">{dict.home.productsTitleAccent}</span>
              {locale === "zh" ? "" : "."}
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600">{dict.home.productsBody}</p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-5">
              <p className="font-display text-xl font-extrabold text-[#0B0F19]">{active.label}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{active.description}</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={L(active.href)} className="btn-primary">
                {dict.home.viewTier} {active.label} <span>→</span>
              </Link>
              <Link href={L("/products")} className="btn-ghost">
                {dict.home.allProducts} <span>→</span>
              </Link>
            </div>
          </div>

          <div className="tech-dark-panel relative overflow-hidden rounded-[32px] p-8 md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,0.2),transparent_45%)]" />
            <div className="tech-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-2xl bg-white">
              <div className="relative h-[320px] sm:h-[380px] md:h-[420px]">
                <Image
                  key={active.id}
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  className="object-contain p-6 drop-shadow-[0_20px_60px_rgba(56,189,248,0.18)]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={active.id === categories[0]?.id}
                />
              </div>
            </div>

            <div
              className="relative mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3"
              role="tablist"
              aria-label={dict.home.productsEyebrow}
            >
              {categories.map((item) => {
                const selected = item.id === active.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveId(item.id)}
                    className={`rounded-2xl border px-2 py-3 text-center text-xs font-black backdrop-blur transition sm:px-3 sm:text-sm ${
                      selected
                        ? "border-cyan-400/60 bg-cyan-400/20 text-white"
                        : "border-cyan-400/20 bg-white/5 text-white/80 hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
