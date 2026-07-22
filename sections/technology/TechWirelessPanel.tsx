import Image from "next/image";
import WirelessDiagram from "@/components/WirelessDiagram";
import { wirelessFeatures } from "@/lib/technology";

export default function TechWirelessPanel() {
  return (
    <div className="py-12 lg:py-16">
      <div className="container-page">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">
          Wireless Charging Technology
        </p>
        <h2 className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl lg:text-4xl">
          Wireless Power Transfer Built for Intelligent Machines
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#64748B] md:text-base">
          High-efficiency wireless power transfer for intelligent machines. SiCore&apos;s wireless
          charging technology enables OEM customers to deploy reliable, scalable, non-contact power
          across robotics and industrial automation.
        </p>

        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
          <ul className="space-y-6">
            {wirelessFeatures.map((item) => (
              <li key={item.title} className="border-l-2 border-[#0B5FFF]/30 pl-5">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-display text-base font-bold text-[#0B0F19]">{item.title}</h3>
                  {"highlight" in item && item.highlight ? (
                    <span className="text-xs font-bold text-[#0B5FFF]">{item.highlight}</span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">{item.description}</p>
              </li>
            ))}
          </ul>

          <div className="space-y-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <WirelessDiagram />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-36 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                <Image src="/images/product-tx.png" alt="Wireless transmitter" fill className="object-contain p-3" />
              </div>
              <div className="relative h-36 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
                <Image src="/images/product-rx.png" alt="Wireless receiver" fill className="object-contain p-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
