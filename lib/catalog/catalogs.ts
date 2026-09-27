import { autonomousSoftwareSections } from "@/lib/autonomous-software";
import type { CatalogDefinition, CatalogId } from "@/lib/catalog/types";
import { visibleConsumerProductSubcategories } from "@/lib/consumer-products";
import { dockingProducts } from "@/lib/docking-products";
import { fastChargingCategories } from "@/lib/fast-charging-catalog";
import { integratedBoardCategories } from "@/lib/integrated-boards";
import { productTiers, wirelessLowPowerTier } from "@/lib/products";
import { thirdPartyCategories } from "@/lib/third-party-products";

function L(en: string, zh: string, es: string) {
  return { en, zh, es };
}

export const catalogDefinitions: CatalogDefinition[] = [
  {
    id: "wireless-power-modules",
    label: L("Wireless Power Modules", "无线功率模块", "Módulos de potencia inalámbrica"),
    href: "/products/wireless-power-modules",
    subcategories: [
      {
        id: wirelessLowPowerTier.id,
        label: L(wirelessLowPowerTier.label, "30W 及以下", "30 W o menos"),
      },
      ...productTiers.map((tier) => ({
        id: tier.id,
        label: L(`${tier.label} Series`, `${tier.label} 系列`, `Serie ${tier.label}`),
      })),
    ],
  },
  {
    id: "integrated-boards",
    label: L("Integrated Boards", "集成板卡", "Placas integradas"),
    href: "/products/integrated-boards",
    subcategories: integratedBoardCategories.map((item) => ({
      id: item.id,
      label: L(item.label, item.label, item.label),
    })),
  },
  {
    id: "autonomous-software",
    label: L("Autonomous Software", "自主软件", "Software autónomo"),
    href: "/products/autonomous-software",
    subcategories: autonomousSoftwareSections.map((item) => ({
      id: item.id,
      label: L(item.label, item.label, item.label),
    })),
  },
  {
    id: "docking",
    label: L("Docking", "对接充电", "Acoplamiento"),
    href: "/products/docking",
    subcategories: dockingProducts.map((item) => ({
      id: item.id,
      label: L(item.label, item.label, item.label),
    })),
  },
  {
    id: "consumer-oriented-products",
    label: L("Consumer Oriented Products", "消费类产品", "Productos orientados al consumidor"),
    href: "/products/consumer-oriented-products",
    subcategories: visibleConsumerProductSubcategories.map((item) => ({
      id: item.id,
      label: L(item.label, item.labelZh, item.labelEs),
    })),
  },
  {
    id: "ev-charging-gun",
    label: L("EV Charging Gun", "电动汽车充电枪", "Pistolas de carga EV"),
    href: "/products/ev-charging-gun",
    subcategories: fastChargingCategories.map((item) => ({
      id: item.id,
      label: L(item.title, item.titleZh, item.titleEs),
    })),
  },
  {
    id: "third-party-products",
    label: L("Third Party Products", "第三方产品", "Productos de terceros"),
    href: "/third-party-products",
    subcategories: thirdPartyCategories.map((item) => ({
      id: item.id,
      label: L(item.label, item.labelZh, item.labelEs),
    })),
  },
];

export function isCatalogId(value: string): value is CatalogId {
  return catalogDefinitions.some((item) => item.id === value);
}

export function getCatalogDefinition(id: CatalogId) {
  return catalogDefinitions.find((item) => item.id === id)!;
}

export function isCatalogSubcategory(catalogId: CatalogId, subcategoryId: string) {
  return getCatalogDefinition(catalogId).subcategories.some((item) => item.id === subcategoryId);
}

export function catalogProductPath(catalogId: CatalogId, productId: string) {
  const base = getCatalogDefinition(catalogId).href;
  return `${base}/${productId}`;
}
