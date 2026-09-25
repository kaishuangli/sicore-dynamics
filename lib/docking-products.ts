export const dockingProducts = [
  {
    id: "pogo-pin-charging-dock",
    label: "Pogo Pin Charging Dock",
    tagline: "Compact spring-loaded pins for precise, repeatable charging.",
  },
  {
    id: "spring-contact-charging-dock",
    label: "Spring Contact Charging Dock",
    tagline: "Compliant spring contacts for reliable high-cycle docking.",
  },
  {
    id: "contact-pad-charging-dock",
    label: "Contact Pad Charging Dock",
    tagline: "Rugged high-current contact pads for industrial and robotic charging.",
  },
  {
    id: "connector-charging-dock",
    label: "Connector Charging Dock",
    tagline: "Positive-mating connectors for reliable power and optional signal transfer.",
  },
  {
    id: "wireless-charging-dock",
    label: "Wireless Charging Dock",
    tagline: "Contactless power transfer for sealed and autonomous systems.",
  },
] as const;

export type DockingProductId = (typeof dockingProducts)[number]["id"];

export const dockingProductIds = dockingProducts.map((item) => item.id);

export const dockingCategoryRedirects: Record<string, DockingProductId> = {
  "metal-contact-charging-dock": "contact-pad-charging-dock",
  "magnetic-contact-charging-dock": "contact-pad-charging-dock",
};

export function isDockingProductId(value: string): value is DockingProductId {
  return dockingProductIds.includes(value as DockingProductId);
}

export function resolveDockingCategoryId(value: string): DockingProductId | undefined {
  if (isDockingProductId(value)) return value;
  return dockingCategoryRedirects[value];
}

export function getDockingProduct(id: DockingProductId) {
  return dockingProducts.find((item) => item.id === id)!;
}
