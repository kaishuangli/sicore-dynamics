"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { site } from "@/lib/site";
import type { PlacedOrder } from "@/lib/cart/types";
import { formatUsd } from "@/lib/third-party-products";

const ORDER_STORAGE_KEY = "sicore-third-party-last-order-v1";

export default function CheckoutSuccessClient({
  locale,
  orderId,
}: {
  locale: Locale;
  orderId?: string;
}) {
  const [order, setOrder] = useState<PlacedOrder | null>(null);
  const isZh = locale === "zh";
  const isEs = locale === "es";

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(ORDER_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as PlacedOrder;
      if (orderId && parsed.id !== orderId) return;
      setOrder(parsed);

      const linesText = parsed.lines
        .map(
          (line) =>
            `- ${line.title} x${line.quantity} @ ${formatUsd(line.unitPriceCents)} = ${formatUsd(line.unitPriceCents * line.quantity)}`,
        )
        .join("\n");
      const subject = encodeURIComponent(
        `[Order ${parsed.id}] Third Party Products — ${parsed.customer.name}`,
      );
      const body = encodeURIComponent(
        [
          `Order ID: ${parsed.id}`,
          `Created: ${parsed.createdAt}`,
          "",
          "Customer",
          `Name: ${parsed.customer.name}`,
          `Email: ${parsed.customer.email}`,
          `Phone: ${parsed.customer.phone}`,
          `Company: ${parsed.customer.company || "-"}`,
          `Address: ${parsed.customer.address}`,
          `City: ${parsed.customer.city}`,
          `Country: ${parsed.customer.country}`,
          `Notes: ${parsed.customer.notes || "-"}`,
          "",
          "Items",
          linesText,
          "",
          `Subtotal: ${formatUsd(parsed.subtotalCents)}`,
        ].join("\n"),
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    } catch {
      // ignore
    }
  }, [orderId]);

  if (!order) return null;

  return (
    <div className="mt-8 rounded-lg border border-slate-200 bg-[#F8FAFC] px-5 py-4 text-left text-sm text-slate-600">
      <p className="font-bold text-[#0B0F19]">
        {isZh ? "订单摘要" : isEs ? "Resumen" : "Order summary"}
      </p>
      <ul className="mt-3 space-y-1">
        {order.lines.map((line) => (
          <li key={line.productId}>
            {line.title} × {line.quantity} — {formatUsd(line.unitPriceCents * line.quantity, locale)}
          </li>
        ))}
      </ul>
      <p className="mt-3 font-bold text-[#0B0F19]">
        {isZh ? "小计" : isEs ? "Subtotal" : "Subtotal"}: {formatUsd(order.subtotalCents, locale)}
      </p>
    </div>
  );
}
