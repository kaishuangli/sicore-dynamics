import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { resolveProductImage } from "@/lib/catalog/resolve-product-image";
import { getProduct800w } from "@/lib/i18n/content";
import WirelessModuleProductLayout from "@/sections/products/WirelessModuleProductLayout";

function ModuleDiagram({ isZh }: { isZh: boolean }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
        {isZh ? "模块外形图" : "Module Outline"}
      </p>
      <div className="mt-6 space-y-8">
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">{isZh ? "俯视图" : "Top View"}</p>
          <div className="relative aspect-[280/200] w-full overflow-hidden rounded-xl bg-white">
            <Image
              src="/images/stealth-800w-pcb-top.png"
              alt="800W wireless charging module PCB board top view, 280mm x 200mm"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">{isZh ? "侧视图" : "Side View"}</p>
          <div className="relative aspect-[280/70] w-full overflow-hidden rounded-xl bg-[#0B0F19]">
            <Image
              src="/images/stealth-800w-pcb-side.png"
              alt="800W wireless charging module PCB board side view, 280mm x 70mm"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">
            {isZh ? "发射与接收线圈" : "Transmitter & Receiver Coils"}
          </p>
          <div className="overflow-hidden rounded-xl bg-[#0B0F19]">
            <Image
              src="/images/stealth-800w-coils.png"
              alt="800W transmitter and receiver coils, 320mm x 260mm"
              width={960}
              height={540}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Wireless800wProductPage({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const {
    wireless800wApplications,
    wireless800wCta,
    wireless800wFeatures,
    wireless800wHero,
    wireless800wSpecs,
  } = getProduct800w(locale);

  return (
    <WirelessModuleProductLayout
      locale={locale}
      hero={{
        ...wireless800wHero,
        image: resolveProductImage("wireless-power-modules", "800w", wireless800wHero.image),
      }}
      specs={wireless800wSpecs}
      specsAside={<ModuleDiagram isZh={isZh} />}
      specsExtra={
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">
            {isZh ? "线圈工艺" : "Coil Craftsmanship"}
          </p>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#0B0F19]">
            <Image
              src="/images/stealth-800w-coil-craft.png"
              alt="Coil craftsmanship: side view, Litz wire connection, and ferrite shield layer"
              width={960}
              height={720}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      }
      features={wireless800wFeatures}
      applications={wireless800wApplications}
      cta={wireless800wCta}
    />
  );
}
