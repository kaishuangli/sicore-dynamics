import type { MetadataRoute } from "next";
import { chineseLocaleEnabled } from "@/lib/i18n/config";
import { industries } from "@/lib/industries";
import { technologyPlatforms } from "@/lib/technology";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/about/investor",
    "/about/news",
    "/technology",
    ...technologyPlatforms.map((item) => `/technology/${item.id}`),
    "/products",
    "/products/60w",
    "/products/200w",
    "/products/800w",
    "/products/1500w",
    "/products/3000w",
    "/knowledge",
    "/download",
    "/contact",
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
