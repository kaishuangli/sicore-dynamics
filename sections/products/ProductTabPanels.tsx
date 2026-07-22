"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getProductTierFromHash, type ProductTierId } from "@/lib/products";
import type { Locale } from "@/lib/i18n/config";
import { getProductTiers } from "@/lib/i18n/content";
import ProductPowerPanel from "@/sections/products/ProductPowerPanel";

export default function ProductTabPanels({ locale }: { locale: Locale }) {
  const [activeTier, setActiveTier] = useState<ProductTierId>("60w");
  const productTiers = getProductTiers(locale);
  const panelRef = useRef<HTMLDivElement>(null);

  const syncFromHash = useCallback(() => {
    const tier = getProductTierFromHash(window.location.hash);
    if (tier) {
      setActiveTier(tier);
    }
  }, []);

  useEffect(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [syncFromHash]);

  useEffect(() => {
    if (!window.location.hash) return;
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeTier]);

  const tier = productTiers.find((item) => item.id === activeTier) ?? productTiers[0];

  return (
    <div ref={panelRef} className="scroll-mt-[190px] bg-white">
      <ProductPowerPanel tier={tier} locale={locale} />
    </div>
  );
}
