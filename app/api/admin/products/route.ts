import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/catalog/auth";
import { catalogDefinitions, isCatalogId } from "@/lib/catalog/catalogs";
import type { CatalogProduct, LocalizedText } from "@/lib/catalog/types";
import { readCatalogFile, upsertCatalogProduct } from "@/lib/catalog/store";

export const dynamic = "force-dynamic";

function asText(value: unknown, fallback: LocalizedText = { en: "", zh: "", es: "" }): LocalizedText {
  if (!value || typeof value !== "object") return fallback;
  const record = value as Record<string, unknown>;
  return {
    en: typeof record.en === "string" ? record.en : fallback.en,
    zh: typeof record.zh === "string" ? record.zh : fallback.zh,
    es: typeof record.es === "string" ? record.es : fallback.es,
  };
}

function parseProduct(body: unknown): Omit<CatalogProduct, "createdAt" | "updatedAt"> {
  if (!body || typeof body !== "object") throw new Error("Invalid product payload.");
  const data = body as Record<string, unknown>;
  const catalogId = typeof data.catalogId === "string" ? data.catalogId : "";
  if (!isCatalogId(catalogId)) throw new Error("Unknown catalog.");

  const name = asText(data.name);
  if (!name.en.trim()) throw new Error("English name is required.");

  const specs = Array.isArray(data.specs)
    ? data.specs
        .map((item) => {
          if (!item || typeof item !== "object") return null;
          const row = item as Record<string, unknown>;
          const label = typeof row.label === "string" ? row.label.trim() : "";
          const value = typeof row.value === "string" ? row.value.trim() : "";
          if (!label || !value) return null;
          return { label, value };
        })
        .filter((item): item is { label: string; value: string } => Boolean(item))
    : [];

  const priceCents =
    typeof data.priceCents === "number" && Number.isFinite(data.priceCents)
      ? Math.max(0, Math.round(data.priceCents))
      : undefined;

  return {
    id: typeof data.id === "string" ? data.id.trim() : "",
    catalogId,
    subcategoryId: typeof data.subcategoryId === "string" ? data.subcategoryId : "",
    brand: typeof data.brand === "string" && data.brand.trim() ? data.brand.trim() : "SiCore Dynamics",
    name,
    tagline: asText(data.tagline),
    description: asText(data.description),
    image: typeof data.image === "string" && data.image.trim() ? data.image.trim() : "/images/product-tx.png",
    imageAlt: asText(data.imageAlt, name),
    gallery: Array.isArray(data.gallery)
      ? data.gallery.filter((item): item is string => typeof item === "string" && item.trim().length > 0)
      : undefined,
    datasheetHref:
      typeof data.datasheetHref === "string" && data.datasheetHref.trim() ? data.datasheetHref.trim() : undefined,
    availability:
      data.availability === "in-stock" || data.availability === "oem" || data.availability === "available"
        ? data.availability
        : "available",
    priceLabel: typeof data.priceLabel === "string" && data.priceLabel.trim() ? data.priceLabel.trim() : "Quote",
    priceCents,
    buyable: Boolean(data.buyable) && priceCents != null && priceCents > 0,
    specs,
    published: data.published !== false,
  };
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const file = await readCatalogFile();
  return NextResponse.json({
    catalogs: catalogDefinitions,
    products: file.products,
  });
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const product = await upsertCatalogProduct(parseProduct(await request.json()));
    return NextResponse.json({ product });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not save product.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
