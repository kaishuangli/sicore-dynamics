import { getUploadedProduct, getUploadedProducts } from "@/lib/catalog/products";
import { resolveProductImage } from "@/lib/catalog/resolve-product-image";
import { pickLocalized } from "@/lib/catalog/types";
import type { Locale } from "@/lib/i18n/config";

export const consumerProductSubcategories = [
  {
    id: "consumer-electronics",
    label: "Consumer Electronics",
    labelZh: "消费电子",
    labelEs: "Electrónica de consumo",
    description: "Wireless charging for phones, tablets, and everyday consumer devices.",
    descriptionZh: "面向手机、平板与日常消费电子设备的无线充电。",
    descriptionEs: "Carga inalámbrica para teléfonos, tabletas y dispositivos de consumo cotidianos.",
    image: "/images/products/consumer-oriented-products/consumer-electronics/gaming-mouse-wireless-charging-dock/1.png",
  },
  {
    id: "medical",
    label: "Medical",
    labelZh: "医疗",
    labelEs: "Médico",
    description: "Consumer-facing wireless charging for medical and personal-care devices.",
    descriptionZh: "面向医疗与个人护理设备的消费类无线充电。",
    descriptionEs: "Carga inalámbrica de consumo para dispositivos médicos y de cuidado personal.",
    image: "/images/products/consumer-oriented-products/medical/medcharge-carehub-120/1.png",
  },
  {
    id: "furniture",
    label: "Furniture",
    labelZh: "家具",
    labelEs: "Mobiliario",
    description: "Embed-ready wireless charging for desks, nightstands, tables, and interiors.",
    descriptionZh: "可嵌入桌面、床头柜、会议桌与室内家具的无线充电。",
    descriptionEs: "Carga inalámbrica integrable en escritorios, mesitas, mesas e interiores.",
    image: "/images/products/consumer-oriented-products/furniture/multifunction-conference-power-hub/1.png",
  },
  {
    id: "dc-dc-module",
    label: "DC-DC Module",
    labelZh: "DC-DC 模块",
    labelEs: "Módulo DC-DC",
    description: "Compact DC-DC converters for consumer charging and embedded power designs.",
    descriptionZh: "面向消费类充电与嵌入式电源设计的紧凑型 DC-DC 转换模块。",
    descriptionEs: "Convertidores DC-DC compactos para carga de consumo y diseños de alimentación embebida.",
    image: "/images/products/consumer-oriented-products/dc-dc-module/wide-input-usb-pd-dc-dc-converter/1.png",
  },
  {
    id: "component",
    label: "Component",
    labelZh: "元器件",
    labelEs: "Componentes",
    description: "OEM kits, coils, and integration components for consumer product makers.",
    descriptionZh: "面向消费类产品制造商的 OEM 套件、线圈与集成元器件。",
    descriptionEs: "Kits OEM, bobinas y componentes de integración para fabricantes de consumo.",
    image: "/images/product-coils.png",
  },
] as const;

export type ConsumerSubcategoryId = (typeof consumerProductSubcategories)[number]["id"];

export const consumerSubcategoryIds = consumerProductSubcategories.map((item) => item.id);

export function getConsumerSubcategory(id: ConsumerSubcategoryId) {
  return consumerProductSubcategories.find((item) => item.id === id)!;
}

export function getConsumerSubcategoryLabel(id: ConsumerSubcategoryId, locale: Locale) {
  const item = getConsumerSubcategory(id);
  if (locale === "zh") return item.labelZh;
  if (locale === "es") return item.labelEs;
  return item.label;
}

export function getConsumerSubcategoryDescription(id: ConsumerSubcategoryId, locale: Locale) {
  const item = getConsumerSubcategory(id);
  if (locale === "zh") return item.descriptionZh;
  if (locale === "es") return item.descriptionEs;
  return item.description;
}

export type ConsumerAvailability = "in-stock" | "available" | "oem";

export type ConsumerProduct = {
  id: string;
  subcategoryId: ConsumerSubcategoryId;
  name: string;
  image: string;
  imageAlt: string;
  priceLabel: string;
  availability: ConsumerAvailability;
  href?: string;
  description: string;
};

export const consumerProducts: ConsumerProduct[] = [
  {
    id: "stealth-under-desk-60w",
    subcategoryId: "consumer-electronics",
    name: "Stealth Under-Desk 60W",
    image: "/images/stealth-60w-hero-module.png",
    imageAlt: "Stealth under-desk wireless charger",
    priceLabel: "Quote",
    availability: "in-stock",
    href: "/products/60w",
    description: "Invisible under-desk wireless charger for Qi phones through non-metal surfaces.",
  },
  {
    id: "stealth-qb06",
    subcategoryId: "consumer-electronics",
    name: "Stealth QB06 Desk Pad",
    image: "/images/product-tx.png",
    imageAlt: "Stealth QB06 desk pad",
    priceLabel: "Quote",
    availability: "in-stock",
    description: "Compact under-desk pad for 1–3 cm tabletops and everyday Qi devices.",
  },
  {
    id: "stealth-qb21",
    subcategoryId: "consumer-electronics",
    name: "Stealth QB21 Long-Range",
    image: "/images/product-rx.png",
    imageAlt: "Stealth QB21 long-range charger",
    priceLabel: "Quote",
    availability: "available",
    description: "Longer-range under-desk charger for thicker non-metal surfaces up to 5 cm.",
  },
  {
    id: "furniture-flush-module",
    subcategoryId: "furniture",
    name: "Flush Furniture Module",
    image: "/images/product-coils.png",
    imageAlt: "Flush furniture wireless module",
    priceLabel: "Quote",
    availability: "oem",
    description: "Embed-ready coil module for desks, nightstands, and cabinetry OEMs.",
  },
  {
    id: "furniture-slim-coil",
    subcategoryId: "furniture",
    name: "Slim Embed Coil Set",
    image: "/images/stealth-800w-coils.png",
    imageAlt: "Slim embed coil set",
    priceLabel: "Quote",
    availability: "oem",
    description: "Low-profile TX coil kit for furniture makers and interior integrators.",
  },
  {
    id: "hospitality-nightstand",
    subcategoryId: "furniture",
    name: "Hospitality Nightstand Pad",
    image: "/images/stealth-60w-hero-module.png",
    imageAlt: "Hospitality nightstand wireless pad",
    priceLabel: "Quote",
    availability: "available",
    description: "Guest-room nightstand wireless charging with clean, cable-free surfaces.",
  },
  {
    id: "hospitality-lobby",
    subcategoryId: "consumer-electronics",
    name: "Lobby Charge Spot",
    image: "/images/product-controller.png",
    imageAlt: "Lobby wireless charge spot",
    priceLabel: "Quote",
    availability: "available",
    description: "Lobby and lounge charge spots for phones and everyday devices.",
  },
  {
    id: "countertop-quartz",
    subcategoryId: "furniture",
    name: "Countertop Invisible Pad",
    image: "/images/product-tx.png",
    imageAlt: "Countertop invisible wireless pad",
    priceLabel: "Quote",
    availability: "in-stock",
    description: "Invisible charging for quartz, wood, and glass countertop installs.",
  },
  {
    id: "conference-table-kit",
    subcategoryId: "furniture",
    name: "Conference Table Kit",
    image: "/images/product-rx.png",
    imageAlt: "Conference table wireless kit",
    priceLabel: "Quote",
    availability: "oem",
    description: "Multi-spot wireless kit for meeting tables and shared work surfaces.",
  },
  {
    id: "oem-eval-kit",
    subcategoryId: "component",
    name: "Consumer OEM Eval Kit",
    image: "/images/product-coils.png",
    imageAlt: "Consumer OEM evaluation kit",
    priceLabel: "Quote",
    availability: "in-stock",
    description: "Evaluation kit for furniture and hospitality OEM bring-up.",
  },
  {
    id: "oem-integration-kit",
    subcategoryId: "component",
    name: "Furniture Integration Kit",
    image: "/images/stealth-800w-coil-craft.png",
    imageAlt: "Furniture integration kit",
    priceLabel: "Quote",
    availability: "oem",
    description: "Integration pack with coil, driver guidance, and mounting notes.",
  },
  {
    id: "retail-display-pad",
    subcategoryId: "consumer-electronics",
    name: "Retail Display Charger",
    image: "/images/product-3000w.png",
    imageAlt: "Retail display wireless charger",
    priceLabel: "Quote",
    availability: "available",
    description: "Display-ready wireless pad for showrooms and retail demos.",
  },
];

export type ConsumerProductId = (typeof consumerProducts)[number]["id"];

export const consumerProductIds = consumerProducts.map((item) => item.id);

export function isConsumerProductId(value: string): value is ConsumerProductId {
  return consumerProductIds.includes(value as ConsumerProductId);
}

export function isConsumerSubcategoryId(value: string): value is ConsumerSubcategoryId {
  return consumerProductSubcategories.some((item) => item.id === value);
}

export function getConsumerProduct(id: ConsumerProductId) {
  return consumerProducts.find((item) => item.id === id)!;
}

export function getConsumerCatalogProducts(): ConsumerProduct[] {
  const extras = getUploadedProducts("consumer-oriented-products")
    .filter((item) => isConsumerSubcategoryId(item.subcategoryId))
    .map((item) => ({
      id: item.id,
      subcategoryId: item.subcategoryId as ConsumerSubcategoryId,
      name: item.name.en,
      image: resolveProductImage("consumer-oriented-products", item.id, item.image),
      imageAlt: item.imageAlt.en || item.name.en,
      priceLabel: item.priceLabel || "Quote",
      availability: item.availability,
      description: item.description.en,
    }));
  const extraSubs = new Set(extras.map((item) => item.subcategoryId));
  const builtIns = consumerProducts.filter((item) => !extraSubs.has(item.subcategoryId));
  return [...extras, ...builtIns].map((item) => ({
    ...item,
    image: resolveProductImage("consumer-oriented-products", item.id, item.image),
  }));
}

export function getConsumerCatalogProduct(id: string, locale: Locale = "en"): ConsumerProduct | undefined {
  const uploaded = getUploadedProduct(id);
  if (uploaded && uploaded.catalogId === "consumer-oriented-products") {
    return {
      id: uploaded.id,
      subcategoryId: uploaded.subcategoryId as ConsumerSubcategoryId,
      name: pickLocalized(uploaded.name, locale),
      image: resolveProductImage("consumer-oriented-products", uploaded.id, uploaded.image),
      imageAlt: pickLocalized(uploaded.imageAlt, locale) || pickLocalized(uploaded.name, locale),
      priceLabel: uploaded.priceLabel || "Quote",
      availability: uploaded.availability,
      description: pickLocalized(uploaded.description, locale),
    };
  }
  const builtIn = consumerProducts.find((item) => item.id === id);
  if (!builtIn) return undefined;
  return {
    ...builtIn,
    image: resolveProductImage("consumer-oriented-products", builtIn.id, builtIn.image),
  };
}

export function countBySubcategory() {
  const list = getConsumerCatalogProducts();
  return consumerProductSubcategories.map((sub) => ({
    ...sub,
    count: list.filter((item) => item.subcategoryId === sub.id).length,
  }));
}
