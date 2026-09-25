import folderImages from "@/content/catalog/folder-images.json";

type FolderImageManifest = {
  covers: Record<string, string>;
  products: Record<string, string>;
  galleries?: Record<string, string[]>;
};

const manifest = folderImages as FolderImageManifest;

export function resolveProductImage(catalogId: string, productId: string, fallback = "") {
  return manifest.products[`${catalogId}/${productId}`] || fallback;
}

export function resolveCatalogCover(catalogId: string, fallback = "") {
  return manifest.covers[catalogId] || fallback;
}

export function listFolderProductFiles(catalogId: string) {
  const prefix = `${catalogId}/`;
  return Object.entries(manifest.products)
    .filter(([key]) => key.startsWith(prefix))
    .map(([key, src]) => ({
      fileId: key.slice(prefix.length),
      src,
    }));
}

export function getFolderGallery(catalogId: string, productId: string) {
  const key = `${catalogId}/${productId}`;
  const gallery = manifest.galleries?.[key];
  if (gallery?.length) return gallery;
  const cover = manifest.products[key];
  return cover ? [cover] : [];
}
