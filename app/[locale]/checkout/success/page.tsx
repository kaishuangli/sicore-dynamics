import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";
import { site } from "@/lib/site";
import CheckoutSuccessClient from "@/sections/cart/CheckoutSuccessClient";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const title =
    locale === "zh" ? "订单已提交" : locale === "es" ? "Pedido enviado" : "Order placed";
  return { title };
}

export default async function CheckoutSuccessPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const L = (href: string) => withLocale(href, locale);

  const title =
    locale === "zh" ? "订单已提交" : locale === "es" ? "Pedido enviado" : "Order placed";
  const body =
    locale === "zh"
      ? "感谢下单。我们已打开邮件窗口发送订单详情；团队将尽快与您确认付款与发货。"
      : locale === "es"
        ? "Gracias por tu pedido. Abrimos el correo con los detalles; confirmaremos pago y envío pronto."
        : "Thanks for your order. We opened an email with your order details; our team will confirm payment and shipping shortly.";

  return (
    <main className="bg-white py-16 lg:py-24">
      <div className="container-page max-w-2xl text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B5FFF]">
          {locale === "zh" ? "第三方产品" : "Third Party Products"}
        </p>
        <h1 className="font-display mt-3 text-3xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">{body}</p>
        <p className="mt-2 text-sm text-slate-500">{site.email}</p>
        <Suspense fallback={null}>
          <CheckoutSuccessClient locale={locale} />
        </Suspense>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href={L("/third-party-products")} className="btn-primary">
            {locale === "zh" ? "继续购物" : locale === "es" ? "Seguir comprando" : "Continue shopping"}
          </Link>
          <Link href={L("/cart")} className="text-sm font-bold text-[#0B5FFF]">
            {locale === "zh" ? "返回购物车" : locale === "es" ? "Volver al carrito" : "Back to cart"}
          </Link>
        </div>
      </div>
    </main>
  );
}
