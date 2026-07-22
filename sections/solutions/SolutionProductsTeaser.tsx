import Link from "next/link";
import type { Industry } from "@/lib/industries";

export default function SolutionProductsTeaser({ industry }: { industry: Industry }) {
  return (
    <section className="border-t border-slate-200 bg-white py-16 lg:py-24" aria-label="Product platforms">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="solution-abb-accent mx-auto" aria-hidden="true" />
          <h2 className="font-display mt-6 text-2xl font-black tracking-[-0.02em] text-[#0B0F19] md:text-3xl">
            Wireless Power Product Platforms
          </h2>
          <p className="mt-8 text-base leading-8 text-slate-700 md:text-lg md:leading-9">
            {industry.productsIntro}
          </p>
          <Link href="/products" className="solution-abb-link mt-8 inline-flex items-center gap-2 text-sm font-bold md:text-base">
            View all product platforms <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
