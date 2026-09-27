import Link from "next/link";
import AddToCartButton from "@/components/cart/AddToCartButton";
import JsonLd from "@/components/JsonLd";
import { catalogProductPath, getCatalogDefinition } from "@/lib/catalog/catalogs";
import type { CatalogProduct } from "@/lib/catalog/types";
import { pickLocalized } from "@/lib/catalog/types";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";
import { getProductSchema } from "@/lib/seo";
import { formatUsd } from "@/lib/third-party-products";
import ProductImageGallery from "@/sections/catalog/ProductImageGallery";

export default function CatalogProductPage({
  locale,
  product,
  embedded = false,
  catalogHref: catalogHrefOverride,
}: {
  locale: Locale;
  product: CatalogProduct;
  embedded?: boolean;
  catalogHref?: string;
}) {
  const L = (href: string) => withLocale(href, locale);
  const isZh = locale === "zh";
  const isEs = locale === "es";
  const t = (en: string, zh: string, es: string) => (isZh ? zh : isEs ? es : en);
  const name = pickLocalized(product.name, locale);
  const tagline = pickLocalized(product.tagline, locale);
  const description = pickLocalized(product.description, locale);
  const imageAlt = pickLocalized(product.imageAlt, locale) || name;
  const catalog = getCatalogDefinition(product.catalogId);
  const catalogHref =
    catalogHrefOverride ??
    ((product.catalogId === "integrated-boards" ||
      product.catalogId === "docking" ||
      product.catalogId === "consumer-oriented-products" ||
      product.catalogId === "wireless-power-modules") &&
    product.subcategoryId
      ? `${catalog.href}/${product.subcategoryId}`
      : catalog.href || "/products");
  const price =
    product.catalogId === "docking"
      ? ""
      : product.buyable && product.priceCents
        ? formatUsd(product.priceCents, locale)
        : product.priceLabel === "Quote"
          ? t("Quote", "询价", "Cotizar")
          : product.priceLabel;

  const gallery = product.gallery?.length ? product.gallery : [product.image || "/images/product-tx.png"];

  const Frame = embedded ? "section" : "main";
  const categoryLabel = pickLocalized(catalog.label, locale);

  return (
    <Frame className={embedded ? "bg-white px-6 py-12 lg:px-12 lg:py-16" : "bg-white py-12 lg:py-16"}>
      <JsonLd
        data={getProductSchema({
          name,
          description: description || tagline || name,
          path: L(catalogProductPath(product.catalogId, product.id)),
          image: product.image || gallery[0],
          category: categoryLabel,
          brand: product.brand,
        })}
      />
      <div className={`${embedded ? "" : "container-page "}grid gap-10 lg:grid-cols-2 lg:items-start`}>
        <ProductImageGallery images={gallery} alt={imageAlt} />
        <div>
          {embedded ? null : (
            <Link href={L(catalogHref || "/products")} className="text-sm font-bold text-[#0B5FFF] hover:text-[#0847cc]">
              ← {t("Back to catalog", "返回产品目录", "Volver al catálogo")}
            </Link>
          )}
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{product.brand}</p>
          <h1 className="font-display mt-2 text-3xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl">
            {name}
          </h1>
          {tagline ? <p className="mt-3 text-base font-semibold text-slate-600">{tagline}</p> : null}
          {description ? <p className="mt-4 text-base leading-8 text-slate-600">{description}</p> : null}
          {price ? <p className="mt-6 text-xl font-black text-[#0F766E]">{price}</p> : null}

          {product.specs.length > 0 ? (
            <dl className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              {product.specs.map((spec) => (
                <div key={`${spec.label}-${spec.value}`} className="grid grid-cols-[140px_minmax(0,1fr)] gap-4 py-3">
                  <dt className="text-sm font-semibold text-slate-500">{spec.label}</dt>
                  <dd className="text-sm font-medium text-[#0B0F19]">{spec.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3">
            {product.catalogId !== "docking" && product.buyable && product.priceCents ? (
              <AddToCartButton productId={product.id} locale={locale} className="inline-flex items-center justify-center bg-[#0B5FFF] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0847cc]" />
            ) : (
              <Link href={L("/contact")} className="btn-primary">
                {t("Request Quote", "询价", "Solicitar cotización")}
              </Link>
            )}
            {product.datasheetHref ? (
              <a
                href={product.datasheetHref}
                download
                className="inline-flex items-center rounded-md border border-[#0B5FFF] px-5 py-3 text-sm font-bold text-[#0B5FFF]"
              >
                {t("Download Datasheet", "下载规格书", "Descargar hoja de datos")}
              </a>
            ) : (
              <Link
                href={L("/download")}
                className="inline-flex items-center rounded-md border border-[#0B5FFF] px-5 py-3 text-sm font-bold text-[#0B5FFF]"
              >
                {t("Download Specs", "下载资料", "Descargar")}
              </Link>
            )}
          </div>
        </div>
      </div>
    </Frame>
  );
}
