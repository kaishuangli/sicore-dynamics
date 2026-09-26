"use client";

import { useSearchParams } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import ConsumerProductsCatalog from "@/sections/products/consumer/ConsumerProductsCatalog";

export default function ConsumerCatalogQuery({ locale }: { locale: Locale }) {
  const subcategory = useSearchParams().get("subcategory") ?? undefined;
  return <ConsumerProductsCatalog locale={locale} initialSubcategory={subcategory} />;
}
