import Image from "next/image";
import { solutionHardwareModules } from "@/lib/solution-products";

export default function HardwareModulesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {solutionHardwareModules.map((module) => (
        <article
          key={module.id}
          className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_16px_48px_rgba(0,0,0,0.25)]"
        >
          <div className="relative h-52 bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.16),transparent_55%)]">
            <Image
              src={module.image}
              alt={module.alt}
              fill
              className="object-contain p-6 drop-shadow-[0_16px_40px_rgba(56,189,248,0.2)]"
            />
          </div>
          <div className="border-t border-white/10 p-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-cyan-300">
              {module.subtitle}
            </p>
            <h3 className="font-display mt-2 text-base font-extrabold leading-snug text-white">
              {module.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{module.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
