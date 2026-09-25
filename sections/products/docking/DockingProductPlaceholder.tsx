import Image from "next/image";
import Link from "next/link";
import { resolveProductImage } from "@/lib/catalog/resolve-product-image";
import type { Locale } from "@/lib/i18n/config";
import { getDockingProductContent } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";
import type { DockingProductId } from "@/lib/docking-products";

export default function DockingProductPlaceholder({
  locale,
  productId,
}: {
  locale: Locale;
  productId: DockingProductId;
}) {
  const product = getDockingProductContent(locale, productId);
  if (!product) return null;

  const isZh = locale === "zh";
  const isEs = locale === "es";
  const emptyTitle = isZh ? "内容筹备中" : isEs ? "Contenido en preparación" : "Content coming soon";
  const emptyBody = isZh
    ? "该对接充电产品详情将在此展示。版式已就绪，产品内容稍后补充。"
    : isEs
      ? "Los detalles de este muelle de carga se mostrarán aquí. El diseño está listo; el contenido se añadirá pronto."
      : "Details for this charging dock will appear here. The layout is ready; product content will follow.";
  const contactLabel = isZh ? "联系我们" : isEs ? "Contáctanos" : "Contact us";
  const image = resolveProductImage("docking", productId);

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 py-20 lg:px-12">
      <div className="max-w-xl text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0B5FFF]">
          {isZh ? "对接充电" : isEs ? "Acoplamiento" : "Docking"}
        </p>
        <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-[#0B0F19] md:text-4xl">
          {product.label}
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-600">{product.tagline}</p>
        {image ? (
          <div className="relative mx-auto mt-8 aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC]">
            <Image src={image} alt={product.label} fill className="object-contain p-6" />
          </div>
        ) : null}
        <p className="mt-6 text-sm font-semibold text-slate-500">{emptyTitle}</p>
        <p className="mt-2 text-sm leading-6 text-slate-500">{emptyBody}</p>
        <Link
          href={withLocale("/contact", locale)}
          className="btn-primary mt-8 inline-flex"
        >
          {contactLabel}
        </Link>
      </div>
    </section>
  );
}
