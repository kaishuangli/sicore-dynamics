import Link from "next/link";
import { pickLocalized } from "@/lib/catalog/types";
import type { DockingProductId } from "@/lib/docking-products";
import {
  dockingCategoryIntro,
  getDockingSkusForCategory,
  localizeDockingSku,
} from "@/lib/docking-skus";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";
import DockingProductPhotos from "@/sections/products/docking/DockingProductPhotos";

export default function DockingCategoryCatalog({
  locale,
  categoryId,
}: {
  locale: Locale;
  categoryId: DockingProductId;
}) {
  const intro = dockingCategoryIntro[categoryId];
  const skus = getDockingSkusForCategory(categoryId).map((sku) => localizeDockingSku(sku, locale));
  const L = (href: string) => withLocale(href, locale);
  const isZh = locale === "zh";
  const isEs = locale === "es";
  const t = (en: string, zh: string, es: string) => (isZh ? zh : isEs ? es : en);

  const specsLabel = t("Specifications", "规格", "Especificaciones");
  const dimsLabel = t("Dimensions", "尺寸", "Dimensiones");
  const featuresLabel = t("Features", "功能", "Funciones");
  const widthLabel = t("Width", "宽", "Ancho");
  const depthLabel = t("Depth", "深", "Fondo");
  const heightLabel = t("Height", "高", "Alto");
  const quoteLabel = t("Request Quote", "询价", "Solicitar cotización");
  const designsLabel = t("Designs on this page", "本页设计", "Diseños en esta página");
  const photoSize =
    categoryId === "contact-pad-charging-dock"
      ? "large"
      : categoryId === "spring-contact-charging-dock"
        ? "medium"
        : "compact";

  return (
    <div className="bg-white">
      <header className="border-b border-slate-100 px-6 py-10 lg:px-10 xl:px-12">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-[#0B0F19] md:text-4xl">
          {pickLocalized(intro.title, locale)}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
          {pickLocalized(intro.description, locale)}
        </p>
        {skus.length > 1 ? (
          <nav aria-label={designsLabel} className="mt-6 flex flex-wrap gap-2">
            {skus.map((sku) => (
              <a
                key={sku.id}
                href={`#${sku.id}`}
                className="rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:border-[#0B5FFF] hover:text-[#0B5FFF]"
              >
                {sku.model}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <div>
        {skus.map((sku, index) => {
          const hasDimensions = [sku.dimensions.width, sku.dimensions.depth, sku.dimensions.height].some(
            (value) => value && value !== "—",
          );
          return (
            <section
              key={sku.id}
              id={sku.id}
              className={`scroll-mt-40 border-b border-slate-200 px-6 py-12 lg:px-10 lg:py-14 xl:px-12 ${
                index % 2 === 1 ? "bg-[#F8FAFC]" : "bg-white"
              }`}
            >
              <div
                className={
                  photoSize === "compact"
                    ? "grid items-start gap-8 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:gap-12"
                    : "grid items-start gap-8"
                }
              >
              <DockingProductPhotos
                images={[sku.image, ...(sku.gallery ?? [])]}
                alt={sku.imageAlt}
                size={photoSize}
              />

                <div>
                  <p className="text-sm font-bold tracking-[0.14em] text-[#0B5FFF]">{sku.model}</p>
                  <h2 className="font-display mt-2 text-2xl font-extrabold tracking-tight text-[#0B0F19] md:text-3xl">
                    {sku.name}
                  </h2>
                  <p className="mt-2 text-base font-medium text-slate-500">{sku.tagline}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{sku.description}</p>

                  {sku.features.length > 0 ? (
                    <div className="mt-6">
                      <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                        {featuresLabel}
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {sku.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B5FFF] text-white">
                              <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden="true">
                                <path
                                  d="M3.5 8.2 6.4 11l6.1-6.4"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={L("/contact")} className="btn-primary">
                      {quoteLabel}
                    </Link>
                    {sku.datasheetHref ? (
                      <a
                        href={sku.datasheetHref}
                        download
                        className="inline-flex items-center rounded-xl border border-[#0B5FFF] px-5 py-3 text-sm font-bold text-[#0B5FFF] transition hover:bg-[#EFF6FF]"
                      >
                        {t("Download Datasheet", "下载规格书", "Descargar hoja de datos")}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className={`mt-10 grid gap-6 ${hasDimensions ? "lg:grid-cols-2" : ""}`}>
                {sku.specs.length > 0 ? (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{specsLabel}</h3>
                  <dl className="mt-3 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
                    {sku.specs.map((row) => (
                      <div key={`${row.label}-${row.value}`} className="grid grid-cols-[140px_minmax(0,1fr)] gap-3 px-4 py-2.5">
                        <dt className="text-xs font-semibold text-slate-500">{row.label}</dt>
                        <dd className="text-sm font-medium text-[#0B0F19]">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                ) : null}
                {hasDimensions ? (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{dimsLabel}</h3>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {[
                      { label: widthLabel, value: sku.dimensions.width },
                      { label: depthLabel, value: sku.dimensions.depth },
                      { label: heightLabel, value: sku.dimensions.height },
                    ].map((item) => (
                      <div key={item.label} className="rounded-xl border border-slate-200 bg-white px-3 py-4 text-center">
                        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">{item.label}</p>
                        <p className="mt-2 text-base font-extrabold text-[#0B0F19]">{item.value}</p>
                      </div>
                    ))}
                  </div>
                  {sku.dimensionNote ? (
                    <p className="mt-3 text-xs leading-5 text-slate-500">{sku.dimensionNote}</p>
                  ) : null}
                </div>
                ) : null}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
