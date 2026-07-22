import Image from "next/image";
import Link from "next/link";
import { productTiers } from "@/lib/products";
import type { Industry } from "@/lib/industries";

export default function SolutionProductsSection({ industry }: { industry: Industry }) {
  return (
    <section id="products" className="scroll-mt-[160px] border-t border-slate-200 bg-[#F8FAFC]" aria-labelledby="solution-products-heading">
      <div className="container-page py-14 lg:py-16">
        <h2
          id="solution-products-heading"
          className="font-display text-center text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl"
        >
          Wireless Power Product Platforms
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-slate-600 md:text-base">
          {industry.productsIntro}
        </p>
      </div>

      {productTiers.map((tier, index) => {
        const reversed = index % 2 === 1;

        return (
          <article key={tier.id} className="border-t border-slate-200 bg-white">
            <div className="grid lg:grid-cols-2">
              <div className={`relative min-h-[300px] bg-[#071225] lg:min-h-[360px] ${reversed ? "lg:order-2" : ""}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.15),transparent_50%)]" />
                <Image
                  src={tier.image}
                  alt={tier.title}
                  fill
                  className="object-contain p-10 lg:p-14 drop-shadow-[0_20px_60px_rgba(56,189,248,0.2)]"
                />
              </div>

              <div className={`flex flex-col justify-center px-6 py-10 lg:px-14 lg:py-16 ${reversed ? "lg:order-1" : ""}`}>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">
                  {tier.label} System
                </p>
                <h3 className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl">
                  {tier.title}
                </h3>
                <p className="mt-3 text-base font-semibold text-slate-700">{tier.tagline}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{tier.description}</p>
                <Link
                  href={`/products#${tier.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B5FFF] transition hover:gap-3"
                >
                  View product details <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
