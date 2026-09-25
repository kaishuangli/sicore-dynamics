"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";
import { useCart } from "@/components/cart/CartProvider";

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 5h2l2.2 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1.4" fill="currentColor" />
      <circle cx="17" cy="20" r="1.4" fill="currentColor" />
    </svg>
  );
}

export default function CartNavButton({ locale }: { locale: Locale }) {
  const { itemCount, ready } = useCart();
  const label =
    locale === "zh" ? "购物车" : locale === "es" ? "Carrito" : "Cart";

  return (
    <Link
      href={withLocale("/cart", locale)}
      className="relative inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-xs font-bold text-[#0B0F19] transition hover:border-[#0B5FFF]/40 hover:text-[#0B5FFF]"
      aria-label={label}
    >
      <CartIcon />
      <span className="hidden sm:inline">{label}</span>
      {ready && itemCount > 0 ? (
        <span className="absolute -right-1.5 -top-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#0B5FFF] px-1 text-[10px] font-bold text-white">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      ) : null}
    </Link>
  );
}
