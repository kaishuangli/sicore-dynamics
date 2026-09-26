"use client";

import { useSearchParams } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import ThirdPartyProductsCatalog from "@/sections/third-party/ThirdPartyProductsCatalog";

export default function ThirdPartyProductsQuery({ locale }: { locale: Locale }) {
  const params = useSearchParams();
  const sort = params.get("sort") === "name" ? "name" : "newest";
  return (
    <ThirdPartyProductsCatalog
      locale={locale}
      category={params.get("category") ?? undefined}
      sort={sort}
    />
  );
}
