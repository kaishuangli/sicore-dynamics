import { getUploadedProducts } from "@/lib/catalog/products";
import { getFolderGallery, listFolderProductFiles, resolveProductImage } from "@/lib/catalog/resolve-product-image";
import { pickLocalized } from "@/lib/catalog/types";
import type { CatalogProduct } from "@/lib/catalog/types";

/** Subcategories under EV Charging Gun. */
export const fastChargingCategories = [
  {
    id: "ac-ev-chargers",
    title: "AC EV Chargers",
    titleZh: "交流 EV 充电器",
    titleEs: "Cargadores EV de CA",
  },
  {
    id: "dc-fast-chargers",
    title: "DC Fast Chargers",
    titleZh: "直流快充桩",
    titleEs: "Cargadores rápidos de CC",
  },
  {
    id: "ultra-fast-dc-chargers",
    title: "Ultra-Fast DC Chargers",
    titleZh: "超充直流桩",
    titleEs: "Cargadores ultra rápidos de CC",
  },
  {
    id: "portable-ev-chargers",
    title: "Portable EV Chargers",
    titleZh: "便携式 EV 充电器",
    titleEs: "Cargadores EV portátiles",
  },
  {
    id: "charging-accessories",
    title: "Charging Accessories",
    titleZh: "充电配件",
    titleEs: "Accesorios de carga",
  },
] as const;

export type FastChargingCategoryId = (typeof fastChargingCategories)[number]["id"];

export const fastChargingCategoryIds = fastChargingCategories.map((item) => item.id);

export function isFastChargingCategoryId(value: string): value is FastChargingCategoryId {
  return fastChargingCategoryIds.includes(value as FastChargingCategoryId);
}

export function getFastChargingCategoryLabel(
  item: (typeof fastChargingCategories)[number],
  locale: "en" | "zh" | "es",
) {
  if (locale === "zh") return item.titleZh;
  if (locale === "es") return item.titleEs;
  return item.title;
}

export type FastChargingAvailability = "in-stock" | "available" | "oem";

export type FastChargingProduct = {
  id: string;
  categoryId: FastChargingCategoryId;
  name: string;
  nameZh: string;
  nameEs: string;
  tagline: string;
  priceLabel: string;
  availability: FastChargingAvailability;
  image?: string;
  gallery?: string[];
};

const availabilityCycle: FastChargingAvailability[] = ["in-stock", "available", "oem"];

type CategoryTemplate = {
  categoryId: FastChargingCategoryId;
  prefix: string;
  name: (n: number) => string;
  nameZh: (n: number) => string;
  nameEs: (n: number) => string;
  tagline: string;
};

const categoryTemplates: CategoryTemplate[] = [
  {
    categoryId: "ac-ev-chargers",
    prefix: "ac",
    name: (n) => `AC EV Charger Template ${String(n).padStart(2, "0")}`,
    nameZh: (n) => `交流 EV 充电器模板 ${String(n).padStart(2, "0")}`,
    nameEs: (n) => `Plantilla cargador EV CA ${String(n).padStart(2, "0")}`,
    tagline: "AC EV charger product template placeholder.",
  },
  {
    categoryId: "dc-fast-chargers",
    prefix: "dc",
    name: (n) => `DC Fast Charger Template ${String(n).padStart(2, "0")}`,
    nameZh: (n) => `直流快充模板 ${String(n).padStart(2, "0")}`,
    nameEs: (n) => `Plantilla cargador rápido CC ${String(n).padStart(2, "0")}`,
    tagline: "DC fast charger product template placeholder.",
  },
  {
    categoryId: "ultra-fast-dc-chargers",
    prefix: "ufc",
    name: (n) => `Ultra-Fast DC Template ${String(n).padStart(2, "0")}`,
    nameZh: (n) => `超充直流模板 ${String(n).padStart(2, "0")}`,
    nameEs: (n) => `Plantilla ultra rápida CC ${String(n).padStart(2, "0")}`,
    tagline: "Ultra-fast DC charger product template placeholder.",
  },
  {
    categoryId: "portable-ev-chargers",
    prefix: "portable",
    name: (n) => `Portable EV Charger Template ${String(n).padStart(2, "0")}`,
    nameZh: (n) => `便携 EV 充电器模板 ${String(n).padStart(2, "0")}`,
    nameEs: (n) => `Plantilla cargador EV portátil ${String(n).padStart(2, "0")}`,
    tagline: "Portable EV charger product template placeholder.",
  },
  {
    categoryId: "charging-accessories",
    prefix: "acc",
    name: (n) => `Charging Accessory Template ${String(n).padStart(2, "0")}`,
    nameZh: (n) => `充电配件模板 ${String(n).padStart(2, "0")}`,
    nameEs: (n) => `Plantilla accesorio de carga ${String(n).padStart(2, "0")}`,
    tagline: "Charging accessory product template placeholder.",
  },
];

const PRODUCTS_PER_CATEGORY = 20;

/** Placeholder product templates for catalog layout (replace with real SKUs later). */
export const fastChargingProducts: FastChargingProduct[] = categoryTemplates.flatMap((template) =>
  Array.from({ length: PRODUCTS_PER_CATEGORY }, (_, index) => {
    const n = index + 1;
    return {
      id: `${template.prefix}-template-${String(n).padStart(2, "0")}`,
      categoryId: template.categoryId,
      name: template.name(n),
      nameZh: template.nameZh(n),
      nameEs: template.nameEs(n),
      tagline: template.tagline,
      priceLabel: "Quote",
      availability: availabilityCycle[index % availabilityCycle.length]!,
    };
  }),
);

export function getFastChargingProductName(
  item: FastChargingProduct,
  locale: "en" | "zh" | "es",
) {
  if (locale === "zh") return item.nameZh;
  if (locale === "es") return item.nameEs;
  return item.name;
}

const EV_AC_FILE = /^ev-ac(\d+)(?:-(wall|pedestal))?(?:-(home|public))?$/i;

type EvAcMount = "wall" | "pedestal";
type EvAcUse = "home" | "public";

function evAcDisplayNames(code: number, mount?: EvAcMount, use?: EvAcUse) {
  const model = `EV-AC${code}`;
  const mountEn = mount === "pedestal" ? "pedestal" : mount === "wall" ? "wall-mounted" : "";
  const useEn = use === "public" ? "public" : use === "home" ? "home use" : "";
  const mountZh = mount === "pedestal" ? "立式" : mount === "wall" ? "壁挂" : "";
  const useZh = use === "public" ? "公用" : use === "home" ? "家用" : "";
  const mountEs = mount === "pedestal" ? "de pedestal" : mount === "wall" ? "de pared" : "";
  const useEs = use === "public" ? "uso público" : use === "home" ? "uso doméstico" : "";
  return {
    model,
    name: ["7KW EV AC charging gun", mountEn, useEn].filter(Boolean).join(" "),
    nameZh: ["7kW 电动汽车交流充电枪", mountZh, useZh].filter(Boolean).join(" "),
    nameEs: ["Pistola de carga EV CA 7kW", mountEs, useEs].filter(Boolean).join(" "),
  };
}

function evDcDisplayNames(code: number) {
  const model = `EV-DC${code}`;
  return {
    model,
    name: "DC EV charger",
    nameZh: "直流 EV 充电器",
    nameEs: "Cargador EV de CC",
  };
}

function evPtDisplayNames(code: number) {
  const model = `EV-PT${code}`;
  return {
    model,
    name: "Portable EV charger",
    nameZh: "便携式 EV 充电器",
    nameEs: "Cargador EV portátil",
  };
}

function evCaDisplayNames(code: number) {
  const model = `EV-CA${code}`;
  return {
    model,
    name: "EV charging accessory",
    nameZh: "充电配件",
    nameEs: "Accesorio de carga",
  };
}

function folderProduct(
  id: string,
  categoryId: FastChargingCategoryId,
  names: { model: string; name: string; nameZh: string; nameEs: string },
  image: string,
  gallery: string[],
): FastChargingProduct {
  return {
    id,
    categoryId,
    name: names.name,
    nameZh: names.nameZh,
    nameEs: names.nameEs,
    tagline: names.model,
    priceLabel: "Quote",
    availability: "available",
    image,
    gallery,
  };
}

export function getEvAcFolderProducts(): FastChargingProduct[] {
  const byCode = new Map<number, FastChargingProduct>();

  for (const file of listFolderProductFiles("ev-charging-gun")) {
    const folderMatch = file.fileId.match(/^ev-ac(\d+)$/i);
    if (folderMatch) {
      const code = Number(folderMatch[1]);
      byCode.set(
        code,
        folderProduct(
          `ev-ac${code}`,
          "ac-ev-chargers",
          evAcDisplayNames(code),
          file.src,
          getFolderGallery("ev-charging-gun", `ev-ac${code}`),
        ),
      );
      continue;
    }

    const match = file.fileId.match(EV_AC_FILE);
    if (!match) continue;
    const code = Number(match[1]);
    if (byCode.has(code)) continue;
    const mount = (match[2]?.toLowerCase() as EvAcMount | undefined) || undefined;
    const use = (match[3]?.toLowerCase() as EvAcUse | undefined) || undefined;
    byCode.set(
      code,
      folderProduct(
        `ev-ac${code}`,
        "ac-ev-chargers",
        evAcDisplayNames(code, mount, use),
        file.src,
        [file.src],
      ),
    );
  }

  return [...byCode.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, item]) => item);
}

export function getEvDcFolderProducts(): FastChargingProduct[] {
  const byCode = new Map<number, FastChargingProduct>();

  for (const file of listFolderProductFiles("ev-charging-gun")) {
    const match = file.fileId.match(/^ev-dc(\d+)$/i);
    if (!match) continue;
    const code = Number(match[1]);
    byCode.set(
      code,
      folderProduct(
        `ev-dc${code}`,
        "dc-fast-chargers",
        evDcDisplayNames(code),
        file.src,
        getFolderGallery("ev-charging-gun", `ev-dc${code}`),
      ),
    );
  }

  return [...byCode.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, item]) => item);
}

export function getEvPtFolderProducts(): FastChargingProduct[] {
  const byCode = new Map<number, FastChargingProduct>();

  for (const file of listFolderProductFiles("ev-charging-gun")) {
    const match = file.fileId.match(/^ev-pt(\d+)$/i);
    if (!match) continue;
    const code = Number(match[1]);
    byCode.set(
      code,
      folderProduct(
        `ev-pt${code}`,
        "portable-ev-chargers",
        evPtDisplayNames(code),
        file.src,
        getFolderGallery("ev-charging-gun", `ev-pt${code}`),
      ),
    );
  }

  return [...byCode.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, item]) => item);
}

export function getEvCaFolderProducts(): FastChargingProduct[] {
  const byCode = new Map<number, FastChargingProduct>();

  for (const file of listFolderProductFiles("ev-charging-gun")) {
    const match = file.fileId.match(/^ev-ca(\d+)$/i);
    if (!match) continue;
    const code = Number(match[1]);
    if (code === 104) continue;
    byCode.set(
      code,
      folderProduct(
        `ev-ca${code}`,
        "charging-accessories",
        evCaDisplayNames(code),
        file.src,
        getFolderGallery("ev-charging-gun", `ev-ca${code}`),
      ),
    );
  }

  return [...byCode.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, item]) => item);
}

export function getFastChargingFolderProducts(): FastChargingProduct[] {
  return [
    ...getEvAcFolderProducts(),
    ...getEvDcFolderProducts(),
    ...getEvPtFolderProducts(),
    ...getEvCaFolderProducts(),
  ];
}

export function getFastChargingCatalogProducts(): FastChargingProduct[] {
  const folder = getFastChargingFolderProducts();
  const folderIds = new Set(folder.map((item) => item.id));
  const folderCategories = new Set(folder.map((item) => item.categoryId));
  const extras = getUploadedProducts("ev-charging-gun")
    .filter((item) => isFastChargingCategoryId(item.subcategoryId))
    .filter((item) => !folderIds.has(item.id))
    .map((item) => ({
      id: item.id,
      categoryId: item.subcategoryId as FastChargingCategoryId,
      name: item.name.en,
      nameZh: item.name.zh || item.name.en,
      nameEs: item.name.es || item.name.en,
      tagline: pickLocalized(item.tagline, "en"),
      priceLabel: item.priceLabel || "Quote",
      availability: item.availability,
      image: resolveProductImage("ev-charging-gun", item.id, item.image),
    }));
  const templates = fastChargingProducts.filter((item) => !folderCategories.has(item.categoryId));
  return [...folder, ...extras, ...templates].map((item) => ({
    ...item,
    image: item.image || resolveProductImage("ev-charging-gun", item.id, item.image),
  }));
}

export function getFastChargingProduct(id: string) {
  return getFastChargingCatalogProducts().find((item) => item.id === id);
}

export function fastChargingToCatalogProduct(item: FastChargingProduct): CatalogProduct {
  const now = new Date().toISOString();
  return {
    id: item.id,
    catalogId: "ev-charging-gun",
    subcategoryId: item.categoryId,
    brand: "SiCore Dynamics",
    name: { en: item.name, zh: item.nameZh, es: item.nameEs },
    tagline: { en: item.tagline, zh: item.tagline, es: item.tagline },
    description: { en: item.name, zh: item.nameZh, es: item.nameEs },
    image: item.image || "",
    gallery: item.gallery,
    imageAlt: { en: item.name, zh: item.nameZh, es: item.nameEs },
    availability: item.availability,
    priceLabel: item.priceLabel,
    buyable: false,
    specs:
      item.categoryId === "ac-ev-chargers"
        ? [
            { label: "Model", value: item.tagline },
            { label: "Power", value: "7kW" },
            { label: "Standard", value: "US / Type 1" },
          ]
        : [{ label: "Model", value: item.tagline }],
    published: true,
    createdAt: now,
    updatedAt: now,
  };
}
