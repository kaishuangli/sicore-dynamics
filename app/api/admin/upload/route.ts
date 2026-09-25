import { NextResponse } from "next/server";
import { isAdminAuthenticated, newProductId } from "@/lib/catalog/auth";
import { saveCatalogImage } from "@/lib/catalog/store";

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const form = await request.formData();
  const file = form.get("file");
  const hint = typeof form.get("productId") === "string" ? String(form.get("productId")) : "";
  const catalogId = typeof form.get("catalogId") === "string" ? String(form.get("catalogId")) : "";

  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "Choose an image file." }, { status: 400 });
  }

  try {
    const image = await saveCatalogImage(file, hint || newProductId(file.name), catalogId);
    return NextResponse.json({ image });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not save image.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
