"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { useCart } from "@/components/cart/CartProvider";

export default function AddToCartButton({
  productId,
  locale,
  className,
}: {
  productId: string;
  locale: Locale;
  className?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const isZh = locale === "zh";
  const isEs = locale === "es";

  const label = added
    ? isZh
      ? "已加入"
      : isEs
        ? "Añadido"
        : "Added"
    : isZh
      ? "加入购物车"
      : isEs
        ? "Añadir al carrito"
        : "Add to cart";

  return (
    <button
      type="button"
      onClick={() => {
        addItem(productId, 1);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1600);
      }}
      className={
        className ??
        "mt-3 inline-flex w-full items-center justify-center bg-[#0B5FFF] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#0847cc]"
      }
    >
      {label}
    </button>
  );
}
