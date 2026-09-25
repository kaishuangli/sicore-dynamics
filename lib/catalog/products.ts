import catalogFile from "@/content/catalog/products.json";
import { resolveProductImage } from "@/lib/catalog/resolve-product-image";
import type { CatalogFile, CatalogId, CatalogProduct } from "@/lib/catalog/types";

const file = catalogFile as CatalogFile;

export function getUploadedProducts(catalogId?: CatalogId): CatalogProduct[] {
  const products = Array.isArray(file.products) ? file.products : [];
  return products
    .filter((item) => {
      if (!item?.published) return false;
      if (catalogId && item.catalogId !== catalogId) return false;
      return true;
    })
    .map((item) => ({
      ...item,
      image: resolveProductImage(item.catalogId, item.id, item.image),
    }));
}

export function getUploadedProduct(id: string): CatalogProduct | undefined {
  return getUploadedProducts().find((item) => item.id === id);
}

export function getAllUploadedProducts(): CatalogProduct[] {
  return Array.isArray(file.products) ? file.products : [];
}

export function getWirelessInterfaceSharedProducts(): CatalogProduct[] {
  return getUploadedProducts("wireless-power-modules").filter(
    (item) => item.subcategoryId === "30w-or-less",
  );
}
