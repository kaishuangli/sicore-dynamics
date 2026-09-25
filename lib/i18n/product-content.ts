import { resolveProductImage } from "@/lib/catalog/resolve-product-image";
import { dockingProducts as dockingProductsEn } from "@/lib/docking-products";
import { dockingProducts as dockingProductsEs } from "@/lib/i18n/es/docking-products";
import {
  productsPageMeta as productsPageMetaEs,
  productTiers as productTiersEs,
  wirelessLowPowerTier as wirelessLowPowerTierEs,
} from "@/lib/i18n/es/products";
import type { Locale } from "@/lib/i18n/config";
import { pickLocale } from "@/lib/i18n/pick-locale";
import { dockingProducts as dockingProductsZh } from "@/lib/i18n/zh/docking-products";
import {
  productsPageMeta as productsPageMetaZh,
  productTiers as productTiersZh,
  wirelessLowPowerTier as wirelessLowPowerTierZh,
} from "@/lib/i18n/zh/products";
import {
  productsPageMeta as productsPageMetaEn,
  productTiers as productTiersEn,
  wirelessLowPowerTier as wirelessLowPowerTierEn,
} from "@/lib/products";

export function getProductTiers(locale: Locale) {
  return pickLocale(productTiersEn, productTiersZh, locale, productTiersEs).map((tier) => ({
    ...tier,
    image: resolveProductImage("wireless-power-modules", tier.id, tier.image),
  }));
}

export function getWirelessLowPowerTier(locale: Locale) {
  return pickLocale(wirelessLowPowerTierEn, wirelessLowPowerTierZh, locale, wirelessLowPowerTierEs);
}

export function getWirelessPowerNavItems(locale: Locale) {
  const lowPower = getWirelessLowPowerTier(locale);
  return [
    {
      ...lowPower,
      image: resolveProductImage("wireless-power-modules", lowPower.id, lowPower.image),
    },
    ...getProductTiers(locale),
  ];
}

export function getProductsPageMeta(locale: Locale) {
  return pickLocale(productsPageMetaEn, productsPageMetaZh, locale, productsPageMetaEs);
}

export function getDockingProducts(locale: Locale) {
  return pickLocale(dockingProductsEn, dockingProductsZh, locale, dockingProductsEs);
}
