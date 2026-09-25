export const productTiers = [
  {
    id: "60w",
    label: "60W",
    title: "60W Wireless Power System",
    tagline: "Compact wireless power for lightweight intelligent machines.",
    description:
      "The 60W platform delivers efficient wireless charging for small robots, drones, and portable automation devices where space, weight, and integration simplicity are critical.",
    applications: ["Service robots", "Drone docking", "Portable AMRs", "Lab automation"],
    highlights: ["High efficiency resonant transfer", "Compact TX/RX modules", "OEM integration ready"],
    image: "/images/product-rx.png",
  },
  {
    id: "200w",
    label: "200W",
    title: "200W Wireless Power System",
    tagline: "Reliable mid-power wireless charging for mobile platforms.",
    description:
      "The 200W system supports continuous operation for mobile robots and automated equipment that require dependable stop-and-charge performance in commercial environments.",
    applications: ["Mobile robots", "Warehouse AMRs", "Inspection robots", "Smart factory devices"],
    highlights: ["Alignment-tolerant charging", "Industrial communication ready", "Scalable firmware control"],
    image: "/images/product-tx.png",
  },
  {
    id: "800w",
    label: "800W",
    title: "800W Wireless Power System",
    tagline: "High-throughput wireless power for AGVs and industrial mobility.",
    description:
      "The 800W platform is engineered for AGVs and industrial mobile systems that demand faster energy delivery, robust thermal performance, and mission-critical uptime.",
    applications: ["AGV fleets", "Industrial AMRs", "Automated logistics", "Factory mobility systems"],
    highlights: ["Fast charging throughput", "Industrial-grade protection", "Fleet-ready architecture"],
    image: "/images/mobile-robots.jpg",
  },
  {
    id: "1500w",
    label: "1500W",
    title: "1500W Wireless Power System",
    tagline: "Heavy-duty wireless charging for demanding automation workloads.",
    description:
      "The 1500W solution supports high-duty industrial platforms with advanced power electronics, thermal management, and system-level safety for continuous automation.",
    applications: ["Heavy-duty AGVs", "Industrial charging docks", "Large mobile platforms", "24/7 automation lines"],
    highlights: ["High power density", "Advanced thermal design", "Safety and FOD monitoring"],
    image: "/images/product-controller.png",
  },
  {
    id: "3000w",
    label: "3000W",
    title: "3000W Wireless Power System",
    tagline: "Maximum-power wireless platform for industrial energy infrastructure.",
    description:
      "The 3000W system delivers SiCore's highest-power wireless charging capability for large-scale industrial deployments, charging platforms, and high-energy automation systems. It provides up to 3 kW output with up to 87% full-load efficiency, 35–80 mm charging distance, CV/CC charging, and CAN / RS485 communication for enterprise integration.",
    applications: ["Industrial charging platforms", "High-power AGV systems", "Large robot fleets", "Energy-intensive automation"],
    highlights: [
      "3 kW max output with up to 87% full-load efficiency",
      "35–80 mm wireless charging distance at 85 kHz",
      "CV/CC charging with automatic detection & startup",
      "CAN / RS485 interfaces and IP65 potted coils",
    ],
    image: "/images/product-3000w.png",
  },
] as const;

export type ProductTierId = (typeof productTiers)[number]["id"];

export const wirelessLowPowerTier = {
  id: "30w-or-less",
  label: "30W or less",
  title: "30W or Less Wireless Power Modules",
  tagline: "Qi and embedded wireless charging modules rated 30 W and below.",
  description:
    "Compact transmitter, receiver, controller, and coil modules for consumer electronics, furniture, and OEM products that need wireless charging at 30 W or less.",
  applications: ["Consumer electronics", "Furniture embedding", "Qi receivers", "Desktop charging"],
  highlights: ["Qi / Qi2 class modules", "5 W to 15 W typical", "TX, RX, and controller boards"],
  image:
    "/images/products/wireless-power-modules/30w-or-less/long-range-wireless-charging-module/01_complete_wireless_charging_assembly.png",
} as const;

export type WirelessPowerNavId = typeof wirelessLowPowerTier.id | ProductTierId;

export function isWirelessLowPowerTierId(value: string): value is typeof wirelessLowPowerTier.id {
  return value === wirelessLowPowerTier.id;
}

/** Power-tier links used by product pages / home showcase (not the Products nav menu). */
export const productTierNavLinks = productTiers.map((tier) => ({
  label: tier.label,
  href:
    tier.id === "60w"
      ? "/products/60w"
      : tier.id === "200w"
        ? "/products/200w"
        : tier.id === "800w"
          ? "/products/800w"
          : tier.id === "1500w"
            ? "/products/1500w"
            : `/products/wireless-power-modules/${tier.id}`,
  id: tier.id,
}));

/** Categories hidden from customer menus, hub, and sitemap. Pages stay for preview. */
export const publicHiddenProductCategoryIds = new Set<string>([]);

export function isProductCategoryPublic(id: string) {
  return !publicHiddenProductCategoryIds.has(id);
}

export function getPublicProductNavLinks() {
  return productNavLinks.filter((item) => isProductCategoryPublic(item.id));
}

/** Products dropdown / footer menu. */
export const productNavLinks = [
  {
    id: "wireless-power-modules",
    label: "Wireless Power Modules",
    href: "/products/wireless-power-modules",
  },
  {
    id: "integrated-boards",
    label: "Integrated Boards",
    href: "/products/integrated-boards",
  },
  {
    id: "autonomous-software",
    label: "Autonomous Software",
    href: "/products/autonomous-software",
  },
  {
    id: "docking",
    label: "Docking",
    href: "/products/docking",
  },
  {
    id: "consumer-oriented-products",
    label: "Consumer Oriented Products",
    href: "/products/consumer-oriented-products",
  },
  {
    id: "ev-charging-gun",
    label: "EV Charging Gun",
    href: "/products/ev-charging-gun",
  },
] as const;

export function getProductTierFromHash(hash: string): ProductTierId | null {
  const id = hash.replace(/^#/, "");
  return productTiers.some((tier) => tier.id === id) ? (id as ProductTierId) : null;
}

export const productsPageMeta = {
  title: "Wireless Power Products",
  description:
    "Explore SiCore Dynamics wireless power products from 60W to 3000W for robotics, AGVs, drones, and industrial automation systems.",
};
