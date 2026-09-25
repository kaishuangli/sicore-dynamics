"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";
import { useCart } from "@/components/cart/CartProvider";
import {
  formatUsd,
  getThirdPartyProduct,
  getThirdPartyProductTitle,
} from "@/lib/third-party-products";

export default function CartPageClient({ locale }: { locale: Locale }) {
  const L = (href: string) => withLocale(href, locale);
  const { lines, subtotalCents, setQuantity, removeItem, ready } = useCart();
  const isZh = locale === "zh";
  const isEs = locale === "es";
  const t = (en: string, zh: string, es: string) => (isZh ? zh : isEs ? es : en);

  if (!ready) {
    return (
      <main className="bg-white py-16">
        <div className="container-page">
          <p className="text-sm text-slate-500">{t("Loading cart…", "加载购物车…", "Cargando carrito…")}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white pb-16 pt-10 lg:pt-14">
      <div className="container-page max-w-5xl">
        <h1 className="font-display text-3xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl">
          {t("Shopping Cart", "购物车", "Carrito de compras")}
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          {t(
            "Products available for online order.",
            "支持在线下单购买的产品。",
            "Productos disponibles para pedido online.",
          )}
        </p>

        {lines.length === 0 ? (
          <div className="mt-10 rounded-lg border border-dashed border-slate-300 px-6 py-16 text-center">
            <p className="text-sm font-semibold text-slate-600">
              {t("Your cart is empty.", "购物车是空的。", "Tu carrito está vacío.")}
            </p>
            <Link
              href={L("/products/docking")}
              className="mt-6 inline-flex bg-[#0B5FFF] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#0847cc]"
            >
              {t("Browse products", "浏览产品", "Ver productos")}
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
            <ul className="divide-y divide-slate-200 border border-slate-200">
              {lines.map((line) => {
                const product = getThirdPartyProduct(line.productId);
                if (!product) return null;
                const title = getThirdPartyProductTitle(product, locale);
                return (
                  <li key={line.productId} className="flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-[#0B0F19]">{title}</p>
                      <p className="mt-1 text-xs text-slate-500">{product.brand}</p>
                      <p className="mt-2 text-sm font-bold text-[#0F766E]">
                        {formatUsd(product.priceCents, locale)}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <label className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                        {t("Qty", "数量", "Cant.")}
                        <input
                          type="number"
                          min={1}
                          max={99}
                          value={line.quantity}
                          onChange={(event) =>
                            setQuantity(line.productId, Number(event.target.value) || 1)
                          }
                          className="w-16 rounded border border-slate-300 px-2 py-1.5 text-xs font-semibold text-slate-700"
                        />
                      </label>
                      <p className="text-sm font-bold text-[#0B0F19]">
                        {formatUsd(product.priceCents * line.quantity, locale)}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(line.productId)}
                        className="text-xs font-bold text-rose-600 transition hover:text-rose-700"
                      >
                        {t("Remove", "移除", "Eliminar")}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <aside className="h-fit border border-slate-200 bg-[#F8FAFC] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-slate-600">
                {t("Order summary", "订单摘要", "Resumen del pedido")}
              </p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-slate-600">{t("Subtotal", "小计", "Subtotal")}</span>
                <span className="font-bold text-[#0B0F19]">
                  {formatUsd(subtotalCents, locale)}
                </span>
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                {t(
                  "Shipping and tax calculated at checkout confirmation.",
                  "运费与税费将在下单确认时计算。",
                  "Envío e impuestos se calculan en la confirmación del pedido.",
                )}
              </p>
              <Link
                href={L("/checkout")}
                className="mt-6 flex w-full items-center justify-center bg-[#0B5FFF] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#0847cc]"
              >
                {t("Checkout", "去结算", "Finalizar compra")}
              </Link>
              <Link
                href={L("/third-party-products")}
                className="mt-3 flex w-full items-center justify-center text-sm font-bold text-[#0B5FFF] transition hover:text-[#0847cc]"
              >
                {t("Continue shopping", "继续购物", "Seguir comprando")}
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
