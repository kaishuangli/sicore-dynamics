import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Allow major search + AI/answer-engine crawlers for GEO visibility. */
export default function robots(): MetadataRoute.Robots {
  const aiAgents = [
    "GPTBot",
    "ChatGPT-User",
    "Google-Extended",
    "Googlebot",
    "Bingbot",
    "PerplexityBot",
    "ClaudeBot",
    "Anthropic-AI",
    "CCBot",
    "Bytespider",
    "meta-externalagent",
    "FacebookBot",
    "Applebot",
    "Applebot-Extended",
  ];

  return {
    rules: [
      {
        userAgent: "*" as const,
        allow: "/",
        disallow: ["/admin", "/api/admin"],
      },
      ...aiAgents.map((userAgent) => ({
        userAgent,
        allow: "/" as const,
      })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
