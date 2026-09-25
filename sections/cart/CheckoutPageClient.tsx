"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";
import { useCart } from "@/components/cart/CartProvider";
import type { CheckoutCustomer, PlacedOrder } from "@/lib/cart/types";
import {
  formatUsd,
  getThirdPartyProduct,
  getThirdPartyProductTitle,
} from "@/lib/third-party-products";

const ORDER_STORAGE_KEY = "sicore-third-party-last-order-v1";

export default function CheckoutPageClient({ locale }: { locale: Locale }) {
  const router = useRouter();
  const L = (href: string) => withLocale(href, locale);
  const { lines, subtotalCents, clear, ready } = useCart();
  const isZh = locale === "zh";
  const isEs = locale === "es";
  const t = (en: string, zh: string, es: string) => (isZh ? zh : isEs ? es : en);
  const [submitting, setSubmitting] = useState(false);

  const lineDetails = useMemo(
    () =>
      lines
        .map((line) => {
          const product = getThirdPartyProduct(line.productId);
          if (!product) return null;
          return {
            productId: product.id,
            title: getThirdPartyProductTitle(product, locale),
            unitPriceCents: product.priceCents,
            quantity: line.quantity,
          };
        })
        .filter((item): item is NonNullable<typeof item> => Boolean(item)),
    [lines, locale],
  );

  if (!ready) {
    return (
      <main className="bg-white py-16">
        <div className="container-page">
          <p className="text-sm text-slate-500">{t("Loading…", "加载中…", "Cargando…")}</p>
        </div>
      </main>
    );
  }

  if (lines.length === 0) {
    return (
      <main className="bg-white py-16">
        <div className="container-page max-w-xl text-center">
          <h1 className="font-display text-3xl font-black text-[#0B0F19]">
            {t("Checkout", "结算", "Checkout")}
          </h1>
          <p className="mt-4 text-sm text-slate-600">
            {t("Your cart is empty.", "购物车是空的。", "Tu carrito está vacío.")}
          </p>
          <Link
            href={L("/third-party-products")}
            className="mt-8 inline-flex bg-[#0B5FFF] px-5 py-2.5 text-xs font-bold text-white"
          >
            {t("Browse products", "浏览产品", "Ver productos")}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white pb-16 pt-10 lg:pt-14">
      <div className="container-page max-w-5xl">
        <h1 className="font-display text-3xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl">
          {t("Checkout", "结算下单", "Finalizar pedido")}
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          {t(
            "Place your Third Party Products order. We will confirm payment and shipping by email.",
            "提交第三方产品订单。我们将通过邮件确认付款与发货信息。",
            "Realiza tu pedido de productos de terceros. Confirmaremos pago y envío por email.",
          )}
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <form
            className="space-y-4 border border-slate-200 p-5 md:p-6"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitting(true);
              const form = event.currentTarget;
              const data = new FormData(form);
              const customer: CheckoutCustomer = {
                name: String(data.get("name") || "").trim(),
                email: String(data.get("email") || "").trim(),
                phone: String(data.get("phone") || "").trim(),
                company: String(data.get("company") || "").trim() || undefined,
                address: String(data.get("address") || "").trim(),
                city: String(data.get("city") || "").trim(),
                country: String(data.get("country") || "").trim(),
                notes: String(data.get("notes") || "").trim() || undefined,
              };

              const order: PlacedOrder = {
                id: `TPP-${Date.now().toString(36).toUpperCase()}`,
                createdAt: new Date().toISOString(),
                customer,
                lines: lineDetails,
                subtotalCents,
                currency: "USD",
              };

              try {
                window.localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(order));
              } catch {
                // ignore storage failures
              }

              clear();
              router.push(L(`/checkout/success?order=${encodeURIComponent(order.id)}`));
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t("Full name", "姓名", "Nombre completo")} name="name" required />
              <Field label={t("Email", "邮箱", "Email")} name="email" type="email" required />
              <Field label={t("Phone", "电话", "Teléfono")} name="phone" required />
              <Field label={t("Company (optional)", "公司（可选）", "Empresa (opcional)")} name="company" />
            </div>
            <Field label={t("Shipping address", "收货地址", "Dirección de envío")} name="address" required />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t("City", "城市", "Ciudad")} name="city" required />
              <Field label={t("Country", "国家", "País")} name="country" required />
            </div>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                {t("Order notes", "订单备注", "Notas del pedido")}
              </span>
              <textarea
                name="notes"
                rows={4}
                className="mt-2 w-full border border-slate-300 px-3 py-2 text-sm text-[#0B0F19] outline-none ring-[#0B5FFF] focus:ring-2"
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center bg-[#0B5FFF] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0847cc] disabled:opacity-60"
            >
              {submitting
                ? t("Placing order…", "提交中…", "Enviando…")
                : t("Place order", "提交订单", "Realizar pedido")}
            </button>
          </form>

          <aside className="h-fit border border-slate-200 bg-[#F8FAFC] p-5">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-slate-600">
              {t("Your order", "您的订单", "Tu pedido")}
            </p>
            <ul className="mt-4 space-y-3">
              {lineDetails.map((line) => (
                <li key={line.productId} className="text-sm">
                  <p className="font-semibold text-[#0B0F19]">
                    {line.title} × {line.quantity}
                  </p>
                  <p className="text-slate-600">
                    {formatUsd(line.unitPriceCents * line.quantity, locale)}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-sm">
              <span className="font-semibold text-slate-600">{t("Subtotal", "小计", "Subtotal")}</span>
              <span className="font-bold text-[#0B0F19]">{formatUsd(subtotalCents, locale)}</span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-slate-300 px-3 py-2 text-sm text-[#0B0F19] outline-none ring-[#0B5FFF] focus:ring-2"
      />
    </label>
  );
}
