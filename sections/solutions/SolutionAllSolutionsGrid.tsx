import Image from "next/image";
import Link from "next/link";
import { getIndustryHref, getIndustryPageHeading, publicIndustries, type Industry } from "@/lib/industries";

export default function SolutionAllSolutionsGrid({ current }: { current: Industry }) {
  return (
    <section className="border-t border-slate-200 bg-white py-16 lg:py-24" aria-labelledby="all-solutions-heading">
      <div className="container-page">
        <div className="solution-abb-accent" aria-hidden="true" />
        <h2
          id="all-solutions-heading"
          className="font-display mt-6 max-w-2xl text-2xl font-black tracking-[-0.02em] text-[#0B0F19] md:text-3xl"
        >
          All our industrial wireless charging solutions
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {publicIndustries.map((item) => {
            const isCurrent = item.id === current.id;
            const heading = getIndustryPageHeading(item);

            return (
              <Link
                key={item.id}
                href={getIndustryHref(item.id)}
                className={`group block ${isCurrent ? "opacity-100" : ""}`}
              >
                <div className="relative mb-4 h-32 overflow-hidden bg-[#F8FAFC] sm:h-36">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                  {item.title}
                </p>
                <h3
                  className={`font-display mt-2 text-lg font-extrabold leading-snug ${
                    isCurrent ? "text-[#E2232A]" : "text-[#0B0F19] group-hover:text-[#E2232A]"
                  }`}
                >
                  {heading}
                </h3>
                <span className="solution-abb-link mt-3 inline-flex text-sm font-bold">
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
