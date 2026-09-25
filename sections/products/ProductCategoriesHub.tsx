import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getProductsPageMeta } from "@/lib/i18n/product-content";
import { withLocale } from "@/lib/i18n/path";
import {
  getProductCategoryDescription,
  getProductCategoryHref,
  productCategoryCards,
} from "@/lib/product-categories";
import { isProductCategoryPublic } from "@/lib/products";
import { resolveCatalogCover } from "@/lib/catalog/resolve-product-image";

export default function ProductCategoriesHub({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const meta = getProductsPageMeta(locale);
  const L = (href: string) => withLocale(href, locale);
  const navProducts = dict.navProducts as Record<string, string>;
  const browseLabel =
    locale === "zh" ? "查看产品" : locale === "es" ? "Ver productos" : "View products";

  return (
    <section className="bg-white pb-16 pt-10 lg:pb-20 lg:pt-14">
      <div className="container-page">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
          {dict.nav.products}
        </p>
        <h1 className="font-display mt-3 text-3xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-5xl">
          {meta.title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">{meta.description}</p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {productCategoryCards.filter((card) => isProductCategoryPublic(card.id)).map((card) => {
            const href = L(getProductCategoryHref(card.id));
            const title = navProducts[card.id] ?? card.id;
            return (
              <Link
                key={card.id}
                href={href}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition hover:border-[#0B5FFF]/40 hover:shadow-[0_16px_48px_rgba(11,95,255,0.12)]"
              >
                <div className="relative h-44 bg-[#F8FAFC]">
                  <Image
                    src={resolveCatalogCover(card.id, card.image)}
                    alt={card.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-lg font-extrabold tracking-tight text-[#0B0F19] transition group-hover:text-[#0B5FFF]">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {getProductCategoryDescription(card.id, locale)}
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.08em] text-[#0B5FFF]">
                    {browseLabel} <span aria-hidden="true">→</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
