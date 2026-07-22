import type { MetadataRoute } from "next";
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
    "/knowledge",
    "/download",
    "/contact",
    ...industries.map((item) => `/solutions/${item.id}`),
  ];

  return routes.flatMap((route) => {
    const enUrl = `${site.url}${route}`;
    const zhUrl = `${site.url}/zh${route || ""}`;
    const esUrl = `${site.url}/es${route || ""}`;
    const changeFrequency = route === "" ? ("weekly" as const) : ("monthly" as const);
    const priority = route === "" ? 1 : route.startsWith("/solutions/") ? 0.85 : 0.8;

    return [
      { url: enUrl, lastModified: new Date(), changeFrequency, priority },
      { url: zhUrl, lastModified: new Date(), changeFrequency, priority: priority * 0.95 },
      { url: esUrl, lastModified: new Date(), changeFrequency, priority: priority * 0.95 },
    ];
  });
}
