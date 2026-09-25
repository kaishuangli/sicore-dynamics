import { getUploadedProduct, getUploadedProducts } from "@/lib/catalog/products";
import { resolveProductImage } from "@/lib/catalog/resolve-product-image";
import type { CatalogProduct } from "@/lib/catalog/types";
import { pickLocalized } from "@/lib/catalog/types";
import { getDockingSku } from "@/lib/docking-skus";

export const thirdPartyCategories = [
  {
    id: "partner-power-modules",
    label: "Partner Power Modules",
    labelZh: "合作伙伴功率模块",
    labelEs: "Módulos de potencia partners",
    description: "Third-party power modules for OEM and system integration.",
    descriptionZh: "面向 OEM 与系统集成的第三方功率模块。",
    descriptionEs: "Módulos de potencia de terceros para OEM e integración de sistemas.",
  },
  {
    id: "controllers-gateways",
    label: "Controllers & Gateways",
    labelZh: "控制器与网关",
    labelEs: "Controladores y gateways",
    description: "Partner controllers and gateways for charging and docking systems.",
    descriptionZh: "用于充电与对接系统的合作伙伴控制器与网关。",
    descriptionEs: "Controladores y gateways partners para sistemas de carga y acoplamiento.",
  },
  {
    id: "cables-connectors",
    label: "Cables & Connectors",
    labelZh: "线缆与连接器",
    labelEs: "Cables y conectores",
    description: "Interconnect accessories from qualified third-party suppliers.",
    descriptionZh: "来自合格第三方供应商的互连配件。",
    descriptionEs: "Accesorios de interconexión de proveedores terceros cualificados.",
  },
  {
    id: "sensors-sensing",
    label: "Sensors & Sensing",
    labelZh: "传感器与感知",
    labelEs: "Sensores y detección",
    description: "Sensing modules for alignment, temperature, and status feedback.",
    descriptionZh: "用于对准、温度与状态反馈的传感模块。",
    descriptionEs: "Módulos de detección para alineación, temperatura y estado.",
  },
  {
    id: "enclosures-hardware",
    label: "Enclosures & Hardware",
    labelZh: "外壳与结构件",
    labelEs: "Carcasas y hardware",
    description: "Mechanical housings and mounting hardware for partner builds.",
    descriptionZh: "面向合作伙伴整机的外壳与安装结构件。",
    descriptionEs: "Carcasas y herrajes de montaje para integraciones partners.",
  },
  {
    id: "evaluation-kits",
    label: "Evaluation Kits",
    labelZh: "评估套件",
    labelEs: "Kits de evaluación",
    description: "Evaluation and sample kits for third-party product trials.",
    descriptionZh: "用于第三方产品试用的评估与样品套件。",
    descriptionEs: "Kits de evaluación y muestras para pruebas de productos terceros.",
  },
] as const;

export type ThirdPartyCategoryId = (typeof thirdPartyCategories)[number]["id"];

export const thirdPartyCategoryIds = thirdPartyCategories.map((item) => item.id);

export function isThirdPartyCategoryId(value: string): value is ThirdPartyCategoryId {
  return thirdPartyCategoryIds.includes(value as ThirdPartyCategoryId);
}

export type ThirdPartyProduct = {
  id: string;
  categoryId: ThirdPartyCategoryId | string;
  brand: string;
  title: string;
  titleZh: string;
  titleEs: string;
  tagline: string;
  /** Retail price in USD cents for cart / checkout. */
  priceCents: number;
  currency: "USD";
  inStock: boolean;
  specs: { label: string; value: string }[];
  image?: string;
};

const categoryPriceBase: Record<ThirdPartyCategoryId, number> = {
  "partner-power-modules": 14900,
  "controllers-gateways": 9900,
  "cables-connectors": 2900,
  "sensors-sensing": 5900,
  "enclosures-hardware": 7900,
  "evaluation-kits": 24900,
};

function makeProducts(
  categoryId: ThirdPartyCategoryId,
  prefix: string,
  titleEn: string,
  titleZh: string,
  titleEs: string,
  count = 4,
): ThirdPartyProduct[] {
  const base = categoryPriceBase[categoryId];
  return Array.from({ length: count }, (_, index) => {
    const n = String(index + 1).padStart(2, "0");
    const priceCents = base + index * 1500;
    return {
      id: `${prefix}-${n}`,
      categoryId,
      brand: "Partner Brand",
      title: `${titleEn} ${n}`,
      titleZh: `${titleZh} ${n}`,
      titleEs: `${titleEs} ${n}`,
      tagline: "Ready-to-order third-party product available for online purchase.",
      priceCents,
      currency: "USD" as const,
      inStock: true,
      specs: [
        { label: "Type", value: "Retail SKU" },
        { label: "Availability", value: "In stock" },
        { label: "Fulfillment", value: "Ships from SiCore" },
      ],
    };
  });
}

/** Buyable third-party catalog products. */
export const thirdPartyProducts: ThirdPartyProduct[] = [
  ...makeProducts("partner-power-modules", "tpm", "Partner Power Module", "合作伙伴功率模块", "Módulo de potencia partner"),
  ...makeProducts("controllers-gateways", "tcg", "Controller / Gateway", "控制器 / 网关", "Controlador / Gateway"),
  ...makeProducts("cables-connectors", "tcc", "Cable / Connector Kit", "线缆 / 连接器套件", "Kit cable / conector"),
  ...makeProducts("sensors-sensing", "tss", "Sensor Module", "传感器模块", "Módulo sensor"),
  ...makeProducts("enclosures-hardware", "teh", "Enclosure / Hardware", "外壳 / 结构件", "Carcasa / hardware"),
  ...makeProducts("evaluation-kits", "tek", "Evaluation Kit", "评估套件", "Kit de evaluación"),
];

export function getThirdPartyProduct(id: string) {
  const builtIn = thirdPartyProducts.find((item) => item.id === id);
  if (builtIn) return builtIn;

  const docking = getDockingSku(id);
  if (docking && docking.priceCents > 0) {
    return {
      id: docking.id,
      categoryId: docking.categoryId,
      brand: "SiCore Dynamics",
      title: docking.name.en,
      titleZh: docking.name.zh,
      titleEs: docking.name.es,
      tagline: docking.tagline.en,
      priceCents: docking.priceCents,
      currency: "USD" as const,
      inStock: true,
      specs: docking.specs.map((row) => ({ label: row.label.en, value: row.value.en })),
      image: docking.image,
    } satisfies ThirdPartyProduct;
  }

  const uploaded = getUploadedProduct(id);
  if (!uploaded?.buyable || !uploaded.priceCents) return undefined;
  return uploadedToThirdParty(uploaded);
}

export function getThirdPartyCatalogItems(): ThirdPartyProduct[] {
  const extras = getUploadedProducts("third-party-products").map(uploadedToThirdParty);
  return [...extras, ...thirdPartyProducts];
}

function uploadedToThirdParty(item: CatalogProduct): ThirdPartyProduct {
  return {
    id: item.id,
    categoryId: item.subcategoryId,
    brand: item.brand,
    title: item.name.en,
    titleZh: item.name.zh || item.name.en,
    titleEs: item.name.es || item.name.en,
    tagline: pickLocalized(item.tagline, "en"),
    priceCents: item.priceCents ?? 0,
    currency: "USD",
    inStock: item.availability === "in-stock",
    specs: item.specs,
    image: resolveProductImage("third-party-products", item.id, item.image),
  };
}

export function getThirdPartyCategoryLabel(
  item: (typeof thirdPartyCategories)[number],
  locale: "en" | "zh" | "es",
) {
  if (locale === "zh") return item.labelZh;
  if (locale === "es") return item.labelEs;
  return item.label;
}

export function getThirdPartyCategoryDescription(
  item: (typeof thirdPartyCategories)[number],
  locale: "en" | "zh" | "es",
) {
  if (locale === "zh") return item.descriptionZh;
  if (locale === "es") return item.descriptionEs;
  return item.description;
}

export function getThirdPartyProductTitle(item: ThirdPartyProduct, locale: "en" | "zh" | "es") {
  if (locale === "zh") return item.titleZh;
  if (locale === "es") return item.titleEs;
  return item.title;
}

export function formatUsd(cents: number, locale: "en" | "zh" | "es" = "en") {
  return new Intl.NumberFormat(locale === "zh" ? "zh-CN" : locale === "es" ? "es-ES" : "en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}
