import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { autonomousSoftwareIds } from "@/lib/autonomous-software";
import { catalogDefinitions, isCatalogId, isCatalogSubcategory } from "@/lib/catalog/catalogs";
import { refreshFolderImageManifestIfNeeded } from "@/lib/catalog/folder-images";
import type { CatalogFile, CatalogProduct } from "@/lib/catalog/types";
import { consumerProductIds } from "@/lib/consumer-products";
import { dockingSkuIds } from "@/lib/docking-skus";
import { dockingProductIds } from "@/lib/docking-products";
import { integratedBoardIds } from "@/lib/integrated-boards";
import { productTiers } from "@/lib/products";
import { fastChargingProducts } from "@/lib/fast-charging-catalog";
import { thirdPartyProducts } from "@/lib/third-party-products";

const FILE_PATH = path.join(process.cwd(), "content/catalog/products.json");
const IMAGE_DIR = path.join(process.cwd(), "public/images/catalog");

const reservedIds = new Set<string>([
  ...productTiers.map((item) => item.id),
  ...integratedBoardIds,
  ...autonomousSoftwareIds,
  ...consumerProductIds,
  ...dockingProductIds,
  ...dockingSkuIds,
  ...thirdPartyProducts.map((item) => item.id),
  ...fastChargingProducts.map((item) => item.id),
  ...catalogDefinitions.flatMap((item) => item.subcategories.map((sub) => sub.id)),
]);

function emptyFile(): CatalogFile {
  return { version: 1, products: [] };
}

export async function readCatalogFile(): Promise<CatalogFile> {
  try {
    const raw = await readFile(FILE_PATH, "utf8");
    const parsed = JSON.parse(raw) as CatalogFile;
    if (!parsed || !Array.isArray(parsed.products)) return emptyFile();
    return { version: 1, products: parsed.products };
  } catch {
    return emptyFile();
  }
}

async function writeCatalogFile(file: CatalogFile) {
  await mkdir(path.dirname(FILE_PATH), { recursive: true });
  await writeFile(FILE_PATH, `${JSON.stringify(file, null, 2)}\n`, "utf8");
}

export function isValidProductId(id: string) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id) && id.length >= 2 && id.length <= 80;
}

export function isReservedProductId(id: string) {
  return reservedIds.has(id);
}

export type ProductInput = Omit<CatalogProduct, "createdAt" | "updatedAt"> & {
  createdAt?: string;
};

export async function upsertCatalogProduct(input: ProductInput) {
  if (!isCatalogId(input.catalogId)) throw new Error("Unknown catalog.");
  if (!isCatalogSubcategory(input.catalogId, input.subcategoryId)) {
    throw new Error("Unknown subcategory for this catalog.");
  }
  if (!isValidProductId(input.id)) {
    throw new Error("Product id must be lowercase letters, numbers, and hyphens.");
  }

  const file = await readCatalogFile();
  const existing = file.products.find((item) => item.id === input.id);
  if (!existing && isReservedProductId(input.id)) {
    throw new Error("This id is already used by a built-in product. Choose another slug.");
  }

  const now = new Date().toISOString();
  const next: CatalogProduct = {
    ...input,
    createdAt: existing?.createdAt || input.createdAt || now,
    updatedAt: now,
  };

  file.products = existing
    ? file.products.map((item) => (item.id === input.id ? next : item))
    : [next, ...file.products];

  await writeCatalogFile(file);
  return next;
}

export async function deleteCatalogProduct(id: string) {
  const file = await readCatalogFile();
  const existing = file.products.find((item) => item.id === id);
  if (!existing) return false;

  file.products = file.products.filter((item) => item.id !== id);
  await writeCatalogFile(file);

  if (existing.image.startsWith("/images/catalog/")) {
    const abs = path.join(process.cwd(), "public", existing.image.replace(/^\//, ""));
    await unlink(abs).catch(() => undefined);
  }

  return true;
}

const allowedTypes: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

export async function saveCatalogImage(file: File, productId: string, catalogId?: string) {
  const ext = allowedTypes[file.type];
  if (!ext) throw new Error("Use a JPG, PNG, WEBP, or GIF image.");
  if (file.size > 8 * 1024 * 1024) throw new Error("Image must be 8MB or smaller.");

  const safeId = productId.replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80) || "product";
  const folder = catalogId && isCatalogId(catalogId) ? catalogId : null;
  const dir = folder ? path.join(process.cwd(), "public/images/products", folder) : IMAGE_DIR;
  await mkdir(dir, { recursive: true });
  const filename = folder ? `${safeId}.${ext}` : `${safeId}-${Date.now()}.${ext}`;
  const abs = path.join(dir, filename);
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(abs, buffer);
  refreshFolderImageManifestIfNeeded();
  return folder ? `/images/products/${folder}/${filename}` : `/images/catalog/${filename}`;
}
