import Link from "next/link";
import type { CatalogProduct } from "@/lib/catalog/types";
import { pickLocalized, type LocalizedText } from "@/lib/catalog/types";
import {
  getConsumerSubcategoryDescription,
  getConsumerSubcategoryLabel,
  isConsumerSubcategoryId,
} from "@/lib/consumer-products";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";
import DockingProductPhotos from "@/sections/products/docking/DockingProductPhotos";

const L3 = (en: string, zh: string, es: string): LocalizedText => ({ en, zh, es });

const productExtras: Record<
  string,
  {
    model: string;
    features: LocalizedText[];
    dimensions?: { width: string; depth: string; height: string; note?: LocalizedText };
  }
> = {
  "medcharge-carehub-120": {
    model: "CAREHUB 120",
    features: [
      L3("120 W shared power for multiple clinical accessories", "120 W 共享功率，可同时为多台临床配件充电", "120 W compartidos para varios accesorios clínicos"),
      L3("30 W wireless cradle with upright viewing and FOD", "30 W 无线支架，直立可视并带异物检测", "Cuna inalámbrica de 30 W con vista vertical y FOD"),
      L3("Dual USB-C PD ports, up to 30 W each", "双 USB-C PD 端口，每口最高 30 W", "Dos puertos USB-C PD, hasta 30 W cada uno"),
      L3("Low-leakage design with 2 MOPP external PSU target", "低漏电流设计，外部电源 2 MOPP 目标架构", "Diseño de baja fuga con PSU externa 2 MOPP"),
      L3("Thermal supervision of ports, coil, and enclosure", "端口、线圈与壳体温度监控", "Supervisión térmica de puertos, bobina y carcasa"),
      L3("Wipe-clean, flame-retardant clinical white housing", "可擦拭、阻燃的临床白色外壳", "Carcasa blanca clínica, limpia y ignífuga"),
    ],
    dimensions: {
      width: "220 mm",
      depth: "150 mm",
      height: "120 mm",
      note: L3("Concept target, excluding external PSU. Weight less than 1.2 kg.", "概念尺寸目标，不含外部电源。重量小于 1.2 kg。", "Objetivo conceptual, sin PSU externa. Peso inferior a 1,2 kg."),
    },
  },
  "k01-k02-desktop-power-hub": {
    model: "K01 / K02",
    features: [
      L3("3 universal AC outlets plus 2 USB charging ports", "3 个万用交流插座与 2 个 USB 充电口", "3 tomas CA universales y 2 puertos USB"),
      L3("Integrated wireless charging on the sliding cover", "滑动盖板上集成无线充电", "Carga inalámbrica integrada en la tapa deslizante"),
      L3("Recessed tabletop installation, 335 × 68 mm cutout", "嵌入式安装，开孔 335 × 68 mm", "Instalación empotrada, corte 335 × 68 mm"),
      L3("K01 Sand Silver and K02 Sand Black finishes", "K01 沙银与 K02 沙黑两种表面", "Acabados K01 arena plata y K02 arena negro"),
    ],
    dimensions: {
      width: "350 mm",
      depth: "100 mm",
      height: "50 mm",
      note: L3("Table cutout 335 × 68 mm. 1.5 m cable.", "台面开孔 335 × 68 mm。线长 1.5 m。", "Corte de mesa 335 × 68 mm. Cable 1,5 m."),
    },
  },
  "embedded-wireless-charging-module": {
    model: "Ø75 EMBED",
    features: [
      L3("5 W, 10 W, and 15 W wireless power options", "可选 5 W / 10 W / 15 W 无线功率", "Opciones de 5 W, 10 W y 15 W"),
      L3("Ø75 mm recessed housing in 13 mm or 18 mm height", "外径 75 mm，厚度 13 mm 或 18 mm", "Carcasa Ø75 mm, 13 o 18 mm de alto"),
      L3("USB-powered input for furniture integration", "USB 供电，便于家具嵌入", "Entrada USB para integrar en muebles"),
      L3("White and black ABS finishes", "ABS 黑白两色", "Acabados ABS blanco y negro"),
    ],
    dimensions: {
      width: "Ø75 mm",
      depth: "Ø75 mm",
      height: "13 / 18 mm",
      note: L3("Cutout Ø60 × 12 mm or Ø60 × 15 mm by variant.", "开孔按版本为 Ø60 × 12 mm 或 Ø60 × 15 mm。", "Corte Ø60 × 12 mm o Ø60 × 15 mm según variante."),
    },
  },
  "75mm-wireless-charging-pad": {
    model: "75 MM PAD",
    features: [
      L3("Confirmed 75 mm circular charging surface", "确认外径 75 mm 圆形充电面", "Superficie circular confirmada de 75 mm"),
      L3("External QC 3.0 wall adapter", "外接 QC 3.0 墙插适配器", "Adaptador de pared QC 3.0"),
      L3("White and black versions", "黑白两色", "Versiones blanca y negra"),
    ],
    dimensions: {
      width: "75 mm",
      depth: "75 mm",
      height: "—",
      note: L3("Thickness not stated in the source drawing.", "厚度未在源图纸中给出。", "El espesor no figura en el plano de origen."),
    },
  },
  "75mm-bolt-mount-wireless-charger": {
    model: "BOLT 75",
    features: [
      L3("Through-surface anti-theft bolt mount", "穿面防盗螺栓固定", "Montaje pasamesa antirrobo"),
      L3("M6 × 50 mm bolt, nut, and backing plate included", "含 M6 × 50 mm 螺栓、螺母与压板", "Incluye perno M6 × 50 mm, tuerca y placa"),
      L3("USB-A Fast Charger power lead", "USB-A Fast Charger 供电线", "Cable USB-A Fast Charger"),
    ],
    dimensions: {
      width: "74 mm",
      depth: "74 mm",
      height: "—",
      note: L3("Top flange ~73.9 mm; lower body ~59.9 mm.", "上沿约 73.9 mm，下筒约 59.9 mm。", "Brida ~73,9 mm; cuerpo inferior ~59,9 mm."),
    },
  },
  "ultra-slim-thermally-isolated-pad": {
    model: "SLIM 75×160",
    features: [
      L3("75 × 160 mm charging platform, 3.5 mm thick", "充电面 75 × 160 mm，厚 3.5 mm", "Plataforma 75 × 160 mm y 3,5 mm de espesor"),
      L3("Control electronics moved to an inline cable module", "控制电路外置到线缆模块", "Electrónica de control en un módulo del cable"),
      L3("Lower heat at the phone charging surface", "降低手机充电面热量", "Menos calor bajo el teléfono"),
    ],
    dimensions: {
      width: "75 mm",
      depth: "160 mm",
      height: "3.5 mm",
      note: L3("Connector-side local thickness 7 mm.", "出线侧局部厚度 7 mm。", "Espesor local en el lado del conector: 7 mm."),
    },
  },
  "long-distance-through-surface-charger": {
    model: "GAP 5–20",
    features: [
      L3("5–20 mm through-surface charging gap", "穿面充电间隙 5–20 mm", "Gap de carga pasamesa de 5–20 mm"),
      L3("Side cable exit for under-top routing", "侧出线，便于台下走线", "Salida de cable lateral para el bajo mesa"),
    ],
  },
  "gaming-mouse-wireless-charging-dock": {
    model: "MOUSE DOCK",
    features: [
      L3("Contoured cradle for repeatable mouse alignment", "轮廓导向座，鼠标放置可重复对准", "Cuna contorneada para alinear el ratón de forma repetible"),
      L3("Dedicated charging insert under the parked mouse", "停放时鼠标下方为专用充电嵌件", "Inserto de carga dedicado bajo el ratón"),
      L3("Illuminated status accents on the dock", "充电座带状态灯光", "Iluminación de estado en la base"),
      L3("Compact desktop footprint versus a charging mat", "桌面占用小于整张充电垫", "Huella de escritorio menor que una alfombrilla de carga"),
    ],
  },
};

export default function ConsumerProductDetail({
  locale,
  product,
}: {
  locale: Locale;
  product: CatalogProduct;
}) {
  const L = (href: string) => withLocale(href, locale);
  const isZh = locale === "zh";
  const isEs = locale === "es";
  const t = (en: string, zh: string, es: string) => (isZh ? zh : isEs ? es : en);
  const extras = productExtras[product.id];
  const name = pickLocalized(product.name, locale);
  const tagline = pickLocalized(product.tagline, locale);
  const description = pickLocalized(product.description, locale);
  const imageAlt = pickLocalized(product.imageAlt, locale) || name;
  const images = product.gallery?.length ? product.gallery : [product.image];
  const features = extras?.features.map((item) => pickLocalized(item, locale)) ?? [];
  const dimensions = extras?.dimensions;
  const hasDimensions = Boolean(dimensions);
  const categoryTitle = isConsumerSubcategoryId(product.subcategoryId)
    ? getConsumerSubcategoryLabel(product.subcategoryId, locale)
    : t("Consumer Oriented Products", "消费类产品", "Productos orientados al consumidor");
  const categoryDescription = isConsumerSubcategoryId(product.subcategoryId)
    ? getConsumerSubcategoryDescription(product.subcategoryId, locale)
    : "";
  const specsLabel = t("Specifications", "规格", "Especificaciones");
  const dimsLabel = t("Dimensions", "尺寸", "Dimensiones");
  const featuresLabel = t("Features", "功能", "Funciones");
  const quoteLabel = t("Request Quote", "询价", "Solicitar cotización");

  return (
    <div className="bg-white">
      <header className="border-b border-slate-100 px-6 py-10 lg:px-10 xl:px-12">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-[#0B0F19] md:text-4xl">
          {categoryTitle}
        </h1>
        {categoryDescription ? (
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">{categoryDescription}</p>
        ) : null}
      </header>

      <section className="scroll-mt-40 border-b border-slate-200 bg-white px-6 py-12 lg:px-10 lg:py-14 xl:px-12">
        <div className="grid items-start gap-8">
          <DockingProductPhotos images={images} alt={imageAlt} size="medium" />

          <div>
            {extras?.model ? (
              <p className="text-sm font-bold tracking-[0.14em] text-[#0B5FFF]">{extras.model}</p>
            ) : (
              <p className="text-sm font-bold tracking-[0.14em] text-[#0B5FFF]">{product.brand}</p>
            )}
            <h2 className="font-display mt-2 text-2xl font-extrabold tracking-tight text-[#0B0F19] md:text-3xl">
              {name}
            </h2>
            {tagline ? <p className="mt-2 text-base font-medium text-slate-500">{tagline}</p> : null}
            {description ? <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p> : null}

            {features.length > 0 ? (
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                  {featuresLabel}
                </h3>
                <ul className="mt-3 space-y-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B5FFF] text-white">
                        <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden="true">
                          <path
                            d="M3.5 8.2 6.4 11l6.1-6.4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={L("/contact")} className="btn-primary">
                {quoteLabel}
              </Link>
              {product.datasheetHref ? (
                <a
                  href={product.datasheetHref}
                  download
                  className="inline-flex items-center rounded-xl border border-[#0B5FFF] px-5 py-3 text-sm font-bold text-[#0B5FFF] transition hover:bg-[#EFF6FF]"
                >
                  {t("Download Datasheet", "下载规格书", "Descargar hoja de datos")}
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className={`mt-10 grid gap-6 ${hasDimensions ? "lg:grid-cols-2" : ""}`}>
          {product.specs.length > 0 ? (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{specsLabel}</h3>
              <dl className="mt-3 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
                {product.specs.map((row) => (
                  <div key={`${row.label}-${row.value}`} className="grid grid-cols-[140px_minmax(0,1fr)] gap-3 px-4 py-2.5">
                    <dt className="text-xs font-semibold text-slate-500">{row.label}</dt>
                    <dd className="text-sm font-medium text-[#0B0F19]">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}
          {dimensions ? (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{dimsLabel}</h3>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  { label: t("Width", "宽", "Ancho"), value: dimensions.width },
                  { label: t("Depth", "深", "Fondo"), value: dimensions.depth },
                  { label: t("Height", "高", "Alto"), value: dimensions.height },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-slate-200 bg-white px-3 py-4 text-center">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-base font-extrabold text-[#0B0F19]">{item.value}</p>
                  </div>
                ))}
              </div>
              {dimensions.note ? (
                <p className="mt-3 text-xs leading-5 text-slate-500">{pickLocalized(dimensions.note, locale)}</p>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
