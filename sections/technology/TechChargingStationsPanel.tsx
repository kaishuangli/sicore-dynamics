import Image from "next/image";
import { chargingStations } from "@/lib/technology";

export default function TechChargingStationsPanel() {
  return (
    <div className="py-12 lg:py-16">
      <div className="container-page">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">
          Intelligent Charging Stations
        </p>
        <h2 className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl lg:text-4xl">
          Autonomous Charging Stations for Modern Robotics
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#64748B] md:text-base">
          Autonomous charging stations for robots, AGVs, drones, and industrial automation —
          reducing manual intervention and keeping intelligent fleets operational.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {chargingStations.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(11,95,255,0.08)]"
            >
              <div className="relative flex h-56 items-center justify-center bg-gradient-to-b from-[#F8FAFC] to-white p-10">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={320}
                  height={220}
                  className="max-h-full w-auto object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="px-8 pb-8 pt-6">
                <h3 className="font-display text-lg font-bold text-[#0B0F19]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#64748B]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
