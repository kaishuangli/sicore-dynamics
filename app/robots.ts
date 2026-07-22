import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Allow major search + AI/answer-engine crawlers for GEO visibility. */
export default function robots(): MetadataRoute.Robots {
  const allowAll = {
    userAgent: "*" as const,
    allow: "/",
  };

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
      allowAll,
      ...aiAgents.map((userAgent) => ({
        userAgent,
        allow: "/" as const,
      })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
