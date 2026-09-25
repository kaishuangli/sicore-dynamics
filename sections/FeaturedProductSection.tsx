"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SectionEyebrow from "@/components/SectionEyebrow";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getProductTiers } from "@/lib/i18n/product-content";
import { resolveProductImage } from "@/lib/catalog/resolve-product-image";
import { withLocale } from "@/lib/i18n/path";
import { productTierNavLinks, type ProductTierId } from "@/lib/products";

const showcaseImages: Record<ProductTierId, string> = {
  "60w": "/images/stealth-60w-hero.png",
  "200w": "/images/stealth-200w-module-coil.png",
  "800w": "/images/stealth-800w-hero.png",
  "1500w": "/images/stealth-1500w-hero.png",
  "3000w": "/images/product-3000w.png",
};

export default function FeaturedProductSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const L = (href: string) => withLocale(href, locale);
  const productTiers = getProductTiers(locale);
  const [activeId, setActiveId] = useState<ProductTierId>("60w");
  const active = productTiers.find((tier) => tier.id === activeId) ?? productTiers[0];
  const activeHref = L(
    productTierNavLinks.find((link) => link.id === active.id)?.href ?? "/products",
  );

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
              <p className="font-display text-xl font-extrabold text-[#0B0F19]">{active.title}</p>
              <p className="mt-2 text-sm font-semibold text-[#0B5FFF]">{active.tagline}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{active.description}</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={activeHref} className="btn-primary">
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
                  src={resolveProductImage("wireless-power-modules", active.id, showcaseImages[active.id])}
                  alt={active.title}
                  fill
                  className="object-contain p-6 drop-shadow-[0_20px_60px_rgba(56,189,248,0.18)]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={active.id === "60w"}
                />
              </div>
            </div>

            <div
              className="relative mt-6 grid grid-cols-5 gap-2"
              role="tablist"
              aria-label="Product power tiers"
            >
              {productTiers.map((tier) => {
                const selected = tier.id === active.id;

                return (
                  <button
                    key={tier.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveId(tier.id)}
                    className={`rounded-2xl border px-2 py-3 text-center text-xs font-black backdrop-blur transition sm:px-3 sm:text-sm ${
                      selected
                        ? "border-cyan-400/60 bg-cyan-400/20 text-white"
                        : "border-cyan-400/20 bg-white/5 text-white/80 hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {tier.label}
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
