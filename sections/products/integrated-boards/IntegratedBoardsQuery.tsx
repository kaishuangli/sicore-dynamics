"use client";

import { useSearchParams } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import IntegratedBoardsCatalog from "@/sections/products/integrated-boards/IntegratedBoardsCatalog";

export default function IntegratedBoardsQuery({ locale }: { locale: Locale }) {
  const params = useSearchParams();
  const sort = params.get("sort") === "name" ? "name" : "newest";
  return (
    <IntegratedBoardsCatalog
      locale={locale}
      category={params.get("category") ?? undefined}
      sort={sort}
    />
  );
}
