import { redirect } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";
import { dockingProductIds } from "@/lib/docking-products";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const defaultProduct = dockingProductIds[0] ?? "pogo-pin-charging-dock";

export default async function DockingIndexPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    redirect(`/products/docking/${defaultProduct}`);
  }

  redirect(withLocale(`/products/docking/${defaultProduct}`, raw));
}
