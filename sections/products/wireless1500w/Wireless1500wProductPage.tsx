import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { resolveProductImage } from "@/lib/catalog/resolve-product-image";
import { getProduct1500w } from "@/lib/i18n/content";
import WirelessModuleProductLayout from "@/sections/products/WirelessModuleProductLayout";

function ModuleDiagram({ isZh }: { isZh: boolean }) {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
        {isZh ? "模块外形图" : "Module Outline"}
      </p>
      <div className="mt-6 space-y-8">
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">{isZh ? "俯视图" : "Top View"}</p>
          <div className="relative aspect-[320/240] w-full overflow-hidden rounded-xl bg-[#0B0F19]">
            <Image
              src="/images/stealth-1500w-pcb-top.png"
              alt="1500W wireless charging module PCB board top view, 320mm x 240mm"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">{isZh ? "侧视图" : "Side View"}</p>
          <div className="relative aspect-[320/160] w-full overflow-hidden rounded-xl bg-[#0B0F19]">
            <Image
              src="/images/stealth-1500w-pcb-side.png"
              alt="1500W wireless charging module PCB board side view, 80mm height"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">
            {isZh ? "线圈工艺" : "Coil Craftsmanship"}
          </p>
          <div className="overflow-hidden rounded-xl bg-[#0B0F19]">
            <Image
              src="/images/stealth-1500w-coil-craft.png"
              alt="1500W coil side view and cable connection detail"
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

export default function Wireless1500wProductPage({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const {
    wireless1500wApplications,
    wireless1500wCta,
    wireless1500wFeatures,
    wireless1500wHero,
    wireless1500wSpecs,
  } = getProduct1500w(locale);

  return (
    <WirelessModuleProductLayout
      locale={locale}
      hero={{
        ...wireless1500wHero,
        image: resolveProductImage("wireless-power-modules", "1500w", wireless1500wHero.image),
      }}
      specs={wireless1500wSpecs}
      specsAside={<ModuleDiagram isZh={isZh} />}
      specsExtra={
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">
            {isZh ? "发射与接收线圈" : "Transmitter & Receiver Coils"}
          </p>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#0B0F19]">
            <Image
              src="/images/stealth-1500w-coils.png"
              alt="1500W transmitter and receiver coils, 320mm x 260mm"
              width={960}
              height={540}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      }
      features={wireless1500wFeatures}
      applications={wireless1500wApplications}
      cta={wireless1500wCta}
    />
  );
}
