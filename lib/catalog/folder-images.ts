import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { catalogIds } from "./types";

const ROOT = path.join(process.cwd(), "public/images/products");
const PUBLIC_ROOT = path.join(process.cwd(), "public");
const MANIFEST = path.join(process.cwd(), "content/catalog/folder-images.json");
const EXTS = [".webp", ".png", ".jpg", ".jpeg", ".gif"] as const;

function isImageName(name: string) {
  return EXTS.includes(path.extname(name).toLowerCase() as (typeof EXTS)[number]);
}

function naturalSort(a: string, b: string) {
  const pad = (value: string) => value.replace(/\d+/g, (digit) => digit.padStart(8, "0"));
  return pad(a).localeCompare(pad(b), undefined, { sensitivity: "base" });
}

function toPublicUrl(absPath: string) {
  const rel = path.relative(PUBLIC_ROOT, absPath).replace(/\\/g, "/");
  return `/${rel}`;
}

function listImageFiles(dir: string) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((name) => {
    const abs = path.join(dir, name);
    return statSync(abs).isFile() && isImageName(name);
  }).sort(naturalSort);
}

function pickCoverFile(files: string[]) {
  const cover = files.find((name) => path.parse(name).name.toLowerCase() === "cover");
  return cover || files[0];
}

function registerProductFolder(
  products: Record<string, string>,
  galleries: Record<string, string[]>,
  catalogId: string,
  productId: string,
  dir: string,
) {
  const files = listImageFiles(dir);
  if (!files.length) return;
  const cover = pickCoverFile(files)!;
  const rest = files.filter((name) => name !== cover);
  const ordered = [cover, ...rest];
  const key = `${catalogId}/${productId}`;
  products[key] = toPublicUrl(path.join(dir, cover));
  galleries[key] = ordered.map((name) => toPublicUrl(path.join(dir, name)));
}

/** Folder 1–4 → EV-AC100–103. Folder 9+ → EV-AC105, 106, … */
function acEvFolderToModelCode(folder: number) {
  if (folder >= 9) return 96 + folder;
  return 99 + folder;
}

/** Folder 1 → EV-DC100, folder 2 → EV-DC101, … */
function dcEvFolderToModelCode(folder: number) {
  return 99 + folder;
}

/** Folder 1 → EV-PT100, folder 2 → EV-PT101, … */
function portableEvFolderToModelCode(folder: number) {
  return 99 + folder;
}

/** Folder 1 → EV-CA100, folder 2 → EV-CA101, … */
function accessoryFolderToModelCode(folder: number) {
  return 99 + folder;
}

function findNamedDir(parentDir: string, expectedName: string) {
  return readdirSync(parentDir).find(
    (name) =>
      name.trim().toLowerCase() === expectedName &&
      statSync(path.join(parentDir, name)).isDirectory(),
  );
}

function scanNumberedProductFolders(
  products: Record<string, string>,
  galleries: Record<string, string[]>,
  catalogDir: string,
  dirName: string,
  toProductId: (folder: number) => string,
) {
  const parent = findNamedDir(catalogDir, dirName);
  if (!parent) return;
  const parentDir = path.join(catalogDir, parent);
  for (const child of readdirSync(parentDir)) {
    const childDir = path.join(parentDir, child);
    if (!statSync(childDir).isDirectory()) continue;
    if (!/^\d+$/.test(child)) continue;
    const productId = toProductId(Number(child));
    if (!productId) continue;
    registerProductFolder(products, galleries, "ev-charging-gun", productId, childDir);
  }
}

function scanFastChargingFolders(
  products: Record<string, string>,
  galleries: Record<string, string[]>,
  catalogDir: string,
) {
  scanNumberedProductFolders(products, galleries, catalogDir, "ac ev chargers", (folder) => `ev-ac${acEvFolderToModelCode(folder)}`);
  scanNumberedProductFolders(products, galleries, catalogDir, "dc ev chargers", (folder) => `ev-dc${dcEvFolderToModelCode(folder)}`);
  scanNumberedProductFolders(products, galleries, catalogDir, "portable ev chargers", (folder) => `ev-pt${portableEvFolderToModelCode(folder)}`);
  scanNumberedProductFolders(products, galleries, catalogDir, "charging accessories", (folder) =>
    folder === 5 ? "" : `ev-ca${accessoryFolderToModelCode(folder)}`,
  );
}

function scan() {
  const covers: Record<string, string> = {};
  const products: Record<string, string> = {};
  const galleries: Record<string, string[]> = {};

  for (const catalogId of catalogIds) {
    const dir = path.join(ROOT, catalogId);
    mkdirSync(dir, { recursive: true });
    if (!existsSync(dir)) continue;

    if (catalogId === "ev-charging-gun") {
      scanFastChargingFolders(products, galleries, dir);
    }

    for (const name of readdirSync(dir)) {
      const abs = path.join(dir, name);
      const st = statSync(abs);
      if (st.isDirectory()) continue;
      if (!isImageName(name)) continue;
      const base = path.parse(name).name.trim();
      if (!base) continue;
      const src = toPublicUrl(abs);
      if (base.toLowerCase() === "cover") {
        covers[catalogId] = src;
        continue;
      }
      const key = `${catalogId}/${base}`;
      if (!products[key]) products[key] = src;
    }
  }

  return { covers, products, galleries };
}

export function refreshFolderImageManifestIfNeeded() {
  try {
    const next = scan();
    let prev: unknown = { covers: {}, products: {}, galleries: {} };
    try {
      prev = JSON.parse(readFileSync(MANIFEST, "utf8"));
    } catch {
      prev = { covers: {}, products: {}, galleries: {} };
    }
    if (JSON.stringify(next) === JSON.stringify(prev)) return false;
    mkdirSync(path.dirname(MANIFEST), { recursive: true });
    writeFileSync(MANIFEST, `${JSON.stringify(next, null, 2)}\n`, "utf8");
    return true;
  } catch {
    return false;
  }
}
