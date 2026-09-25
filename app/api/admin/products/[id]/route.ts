import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/catalog/auth";
import { deleteCatalogProduct } from "@/lib/catalog/store";

type RouteProps = {
  params: Promise<{ id: string }>;
};

export async function DELETE(_request: Request, { params }: RouteProps) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const removed = await deleteCatalogProduct(id);
  if (!removed) return NextResponse.json({ error: "Product not found." }, { status: 404 });
  return NextResponse.json({ ok: true });
}
