import Image from "next/image";
import Link from "next/link";
import { solutionHardwareModules } from "@/lib/solution-products";

export default function SolutionHardwareSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-14 lg:py-20" aria-labelledby="hardware-modules-heading">
      <div className="container-page">
        <h2
          id="hardware-modules-heading"
          className="font-display text-center text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl"
        >
          Platform Building Blocks
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-slate-600 md:text-base">
          Transmitters, receivers, controllers, and custom coils form the core hardware behind
          every SiCore wireless charging solution.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {solutionHardwareModules.map((module) => (
            <article key={module.id} className="text-center">
              <div className="relative mx-auto h-48 max-w-[220px] bg-[#F8FAFC]">
                <Image
                  src={module.image}
                  alt={module.alt}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
                {module.subtitle}
              </p>
              <h3 className="font-display mt-2 text-base font-extrabold text-[#0B0F19]">
                {module.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{module.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0B5FFF] transition hover:gap-3"
          >
            Explore our technology <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
