import Image from "next/image";
import Link from "next/link";
import { getUploadedProducts } from "@/lib/catalog/products";
import { pickLocalized } from "@/lib/catalog/types";
import type { Locale } from "@/lib/i18n/config";
import { getWirelessLowPowerTier } from "@/lib/i18n/product-content";
import { withLocale } from "@/lib/i18n/path";
import { wirelessLowPowerTier } from "@/lib/products";

export default function Wireless30wCatalog({ locale }: { locale: Locale }) {
  const L = (href: string) => withLocale(href, locale);
  const isZh = locale === "zh";
  const isEs = locale === "es";
  const t = (en: string, zh: string, es: string) => (isZh ? zh : isEs ? es : en);
  const tier = getWirelessLowPowerTier(locale);
  const products = getUploadedProducts("wireless-power-modules").filter(
    (item) => item.subcategoryId === wirelessLowPowerTier.id,
  );

  return (
    <div className="bg-white px-6 pb-16 pt-8 lg:px-10 lg:pb-20 lg:pt-10 xl:px-12">
      <h1 className="font-display text-3xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl">
        {tier.label}
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">{tier.description}</p>
      <p className="mt-6 text-sm text-slate-500">
        {t(
          `${products.length} products`,
          `共 ${products.length} 款产品`,
          `${products.length} productos`,
        )}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 xl:grid-cols-4">
        {products.map((item) => (
          <article key={item.id} className="group">
            <Link href={L(`/products/wireless-power-modules/${item.id}`)} className="block">
              <div className="relative aspect-square overflow-hidden rounded-md border border-slate-200 bg-[#F8FAFC]">
                <Image
                  src={item.image}
                  alt={pickLocalized(item.imageAlt, locale) || pickLocalized(item.name, locale)}
                  fill
                  className="object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h2 className="mt-3 text-sm font-semibold leading-5 text-[#0B5FFF] transition group-hover:underline">
                {pickLocalized(item.name, locale)}
              </h2>
            </Link>
            <p className="mt-2 text-sm font-bold text-[#0F766E]">
              {item.priceLabel === "Quote" ? t("Quote", "询价", "Cotizar") : item.priceLabel}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
