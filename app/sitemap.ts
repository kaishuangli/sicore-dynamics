import type { MetadataRoute } from "next";
import { catalogProductPath } from "@/lib/catalog/catalogs";
import { getUploadedProducts, getWirelessInterfaceSharedProducts } from "@/lib/catalog/products";
import { publicAutonomousSoftwareIds } from "@/lib/autonomous-software";
import { consumerProductIds, consumerSubcategoryIds } from "@/lib/consumer-products";
import { dockingProductIds } from "@/lib/docking-products";
import { chineseLocaleEnabled } from "@/lib/i18n/config";
import { industries } from "@/lib/industries";
import { integratedBoardIds } from "@/lib/integrated-boards";
import { isProductCategoryPublic, productTiers, wirelessLowPowerTier } from "@/lib/products";
import { site } from "@/lib/site";
import { technologyPlatforms } from "@/lib/technology";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/about/investor",
    "/about/news",
    "/oem",
    "/oem/why-sicore",
    "/oem/development-process",
    "/oem/design-services",
    "/oem/manufacturing",
    "/oem/faq",
    "/technology",
    ...technologyPlatforms.map((item) => `/technology/${item.id}`),
    "/products",
    "/products/60w",
    "/products/200w",
    "/products/800w",
    "/products/1500w",
    "/products/3000w",
    "/products/wireless-power-modules",
    `/products/wireless-power-modules/${wirelessLowPowerTier.id}`,
    ...productTiers.map((tier) => `/products/wireless-power-modules/${tier.id}`),
    "/products/integrated-boards",
    ...integratedBoardIds.map((id) => `/products/integrated-boards/${id}`),
    ...getWirelessInterfaceSharedProducts().map((item) => `/products/integrated-boards/${item.id}`),
    "/products/autonomous-software",
    ...publicAutonomousSoftwareIds.map((id) => `/products/autonomous-software/${id}`),
    "/products/consumer-oriented-products",
    ...consumerSubcategoryIds.map((id) => `/products/consumer-oriented-products/${id}`),
    ...consumerProductIds
      .filter((id) => id !== "stealth-under-desk-60w")
      .map((id) => `/products/consumer-oriented-products/${id}`),
    "/products/ev-charging-gun",
    "/products/docking",
    ...dockingProductIds.map((id) => `/products/docking/${id}`),
    "/knowledge",
    "/download",
    "/contact",
    "/third-party-products",
    ...getUploadedProducts()
      .filter((item) => isProductCategoryPublic(item.catalogId))
      .map((item) => catalogProductPath(item.catalogId, item.id)),
    "/cart",
    "/checkout",
    "/solutions",
    ...industries.map((item) => `/solutions/${item.id}`),
  ];

  const publicLocales = chineseLocaleEnabled ? (["en", "zh", "es"] as const) : (["en", "es"] as const);

  return routes.flatMap((route) => {
    const changeFrequency = route === "" ? ("weekly" as const) : ("monthly" as const);
    const priority = route === "" ? 1 : route.startsWith("/solutions/") ? 0.85 : 0.8;

    return publicLocales.map((locale) => {
      const prefix = locale === "en" ? "" : `/${locale}`;
      const url = `${site.url}${prefix}${route}`;
      return {
        url,
        lastModified: new Date(),
        changeFrequency,
        priority: locale === "en" ? priority : priority * 0.95,
      };
    });
  });
}
