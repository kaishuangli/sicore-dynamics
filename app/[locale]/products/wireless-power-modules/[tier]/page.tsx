import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getProduct200w, getProduct800w, getProduct1500w } from "@/lib/i18n/content";
import { getProductTiers } from "@/lib/i18n/product-content";
import { getUploadedProduct, getUploadedProducts } from "@/lib/catalog/products";
import { pickLocalized } from "@/lib/catalog/types";
import { isWirelessLowPowerTierId, productTiers, type ProductTierId } from "@/lib/products";
import { site } from "@/lib/site";
import CatalogProductPage from "@/sections/catalog/CatalogProductPage";
import Wireless30wCatalog from "@/sections/products/wireless30w/Wireless30wCatalog";
import WirelessPowerModulesShell from "@/sections/products/WirelessPowerModulesShell";

type PageProps = {
  params: Promise<{ locale: string; tier: string }>;
};

const tierIds = productTiers.map((tier) => tier.id);

function isProductTierId(value: string): value is ProductTierId {
  return tierIds.includes(value as ProductTierId);
}

export const dynamicParams = true;

export function generateStaticParams() {
  return [
    { tier: "30w-or-less" },
    ...tierIds.map((tier) => ({ tier })),
    ...getUploadedProducts("wireless-power-modules").map((item) => ({ tier: item.id })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, tier } = await params;
  if (!isLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const category = dict.navProducts["wireless-power-modules"];
  const uploaded = getUploadedProduct(tier);

  if (uploaded?.catalogId === "wireless-power-modules") {
    return {
      title: `${pickLocalized(uploaded.name, locale)} | ${category}`,
      description: pickLocalized(uploaded.tagline, locale) || pickLocalized(uploaded.description, locale),
    };
  }

  if (isWirelessLowPowerTierId(tier)) {
    const url =
      locale === "zh"
        ? `${site.url}/zh/products/wireless-power-modules/${tier}`
        : locale === "es"
          ? `${site.url}/es/products/wireless-power-modules/${tier}`
          : `${site.url}/products/wireless-power-modules/${tier}`;
    return {
      title: `${locale === "zh" ? "30W 及以下" : locale === "es" ? "30W o menos" : "30W or less"} | ${category}`,
      description:
        locale === "zh"
          ? "额定 30 W 及以下的 Qi 与嵌入式无线充电模块。"
          : locale === "es"
            ? "Módulos Qi y embebidos de carga inalámbrica de 30 W o menos."
            : "Qi and embedded wireless charging modules rated 30 W and below.",
      alternates: { canonical: url },
    };
  }

  if (!isProductTierId(tier)) return {};

  if (tier === "200w") {
    const { wireless200wMeta } = getProduct200w(locale);
    return {
      title: `${wireless200wMeta.title} | ${category}`,
      description: wireless200wMeta.description,
    };
  }
  if (tier === "800w") {
    const { wireless800wMeta } = getProduct800w(locale);
    return {
      title: `${wireless800wMeta.title} | ${category}`,
      description: wireless800wMeta.description,
    };
  }
  if (tier === "1500w") {
    const { wireless1500wMeta } = getProduct1500w(locale);
    return {
      title: `${wireless1500wMeta.title} | ${category}`,
      description: wireless1500wMeta.description,
    };
  }

  const product = getProductTiers(locale).find((item) => item.id === tier);
  if (!product) return {};

  const url =
    locale === "zh"
      ? `${site.url}/zh/products/wireless-power-modules/${tier}`
      : locale === "es"
        ? `${site.url}/es/products/wireless-power-modules/${tier}`
        : `${site.url}/products/wireless-power-modules/${tier}`;

  return {
    title: `${product.label} | ${category}`,
    description: product.description,
    alternates: { canonical: url },
  };
}

async function ProductDetail({ locale, tier }: { locale: Locale; tier: ProductTierId }) {
  if (tier === "60w") {
    const { default: Page } = await import("@/sections/products/wireless60w/Wireless60wModulePage");
    return <Page locale={locale} />;
  }
  if (tier === "200w") {
    const { default: Page } = await import("@/sections/products/wireless200w/Wireless200wProductPage");
    return <Page locale={locale} />;
  }
  if (tier === "800w") {
    const { default: Page } = await import("@/sections/products/wireless800w/Wireless800wProductPage");
    return <Page locale={locale} />;
  }
  if (tier === "1500w") {
    const { default: Page } = await import("@/sections/products/wireless1500w/Wireless1500wProductPage");
    return <Page locale={locale} />;
  }
  if (tier === "3000w") {
    const { default: Page } = await import("@/sections/products/wireless3000w/Wireless3000wProductPage");
    return <Page locale={locale} />;
  }
  return null;
}

export default async function WirelessPowerModuleTierPage({ params }: PageProps) {
  const { locale: rawLocale, tier } = await params;
  if (!isLocale(rawLocale)) notFound();

  if (isWirelessLowPowerTierId(tier)) {
    return (
      <WirelessPowerModulesShell locale={rawLocale} activeTierId={tier}>
        <Wireless30wCatalog locale={rawLocale} />
      </WirelessPowerModulesShell>
    );
  }

  if (isProductTierId(tier)) {
    return (
      <WirelessPowerModulesShell locale={rawLocale} activeTierId={tier}>
        <ProductDetail locale={rawLocale} tier={tier} />
      </WirelessPowerModulesShell>
    );
  }

  const uploaded = getUploadedProduct(tier);
  if (!uploaded || uploaded.catalogId !== "wireless-power-modules") notFound();

  return (
    <WirelessPowerModulesShell locale={rawLocale} activeTierId={uploaded.subcategoryId || tier}>
      <CatalogProductPage locale={rawLocale} product={uploaded} embedded />
    </WirelessPowerModulesShell>
  );
}
