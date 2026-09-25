import type { IndustryId } from "@/lib/industries";

export type SolutionLayoutConfig = {
  applicationsTitle?: string;
  sceneUseCaseImages?: boolean;
  heroMedia?: "video" | "image";
  heroImage?: string;
  heroImageFullBleed?: boolean;
  heroImageContain?: boolean;
  heroAspect?: "ultrawide" | "wide" | "photo" | "banner" | "square";
  wideHeroMedia?: boolean;
  /** When true, the solution body renders its own hero; default page hero is skipped. */
  bodyOwnsHero?: boolean;
};

export const solutionLayoutConfig: Partial<Record<IndustryId, SolutionLayoutConfig>> = {
  "automation-robotics": {
    sceneUseCaseImages: true,
  },
  "unmanned-aerial-vehicles": {
    heroMedia: "image",
    heroImage: "/images/uav-drone-delivery-hero-v2.png",
    heroImageFullBleed: false,
    heroAspect: "banner",
    wideHeroMedia: true,
  },
  "medical-equipment": {
    bodyOwnsHero: true,
  },
  "agricultural-automation": {
    bodyOwnsHero: true,
  },
  "smart-furniture": {
    heroMedia: "image",
    heroImage: "/images/smart-furniture-conference-v2.png",
    heroImageContain: true,
    heroAspect: "square",
    wideHeroMedia: true,
  },
  "smart-test-equipments": {
    bodyOwnsHero: true,
  },
  "consumer-electronics": {
    heroMedia: "video",
    heroImage: "/images/product-rx.png",
  },
  "customized-solutions": {
    heroMedia: "image",
    heroImage: "/images/product-coils.png",
    heroImageFullBleed: true,
  },
};

export function getSolutionLayoutConfig(id: IndustryId): SolutionLayoutConfig {
  return solutionLayoutConfig[id] ?? {};
}
