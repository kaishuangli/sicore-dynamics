import Image from "next/image";
import { powerElectronicsFeatures } from "@/lib/technology";

export default function TechPowerElectronicsPanel() {
  return (
    <div className="py-12 lg:py-16">
      <div className="container-page">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">
          Power Electronics
        </p>
        <h2 className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl lg:text-4xl">
          Industrial-Grade Power Conversion for Wireless Charging
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#64748B] md:text-base">
          Industrial-grade power conversion architectures for reliable wireless charging — built
          for OEM integration, thermal stability, and long-term industrial operation.
        </p>

        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:items-center">
          <ul className="space-y-6">
            {powerElectronicsFeatures.map((item) => (
              <li key={item.title} className="border-l-2 border-[#0B5FFF]/30 pl-5">
                <h3 className="font-display text-base font-bold text-[#0B0F19]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">{item.description}</p>
              </li>
            ))}
          </ul>

          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-8 shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/images/product-controller.png"
                  alt="SiCore power electronics controller"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-32 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                <Image src="/images/product-tx.png" alt="Power transmitter module" fill className="object-contain p-2" />
              </div>
              <div className="relative h-32 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                <Image src="/images/product-coils.png" alt="Power module accessories" fill className="object-contain p-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
