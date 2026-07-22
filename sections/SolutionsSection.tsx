import Image from "next/image";
import Link from "next/link";
import { getIndustryHref, publicIndustries } from "@/lib/industries";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-white px-0 py-16">
      <div className="container-page">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">Industrial Solutions</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.03em] text-slate-950 md:text-5xl">
            Wireless Power for Every Industry
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#0B5FFF]" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publicIndustries.map((item) => (
            <article
              key={item.id}
              className="card-hover group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative h-32 overflow-hidden sm:h-36">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-slate-950">{item.title}</h3>
                <p className="mt-3 min-h-[52px] text-sm leading-6 text-slate-600">{item.description}</p>
                <Link
                  href={getIndustryHref(item.id)}
                  className="mt-4 inline-flex text-2xl font-bold text-[#0B5FFF] transition hover:translate-x-1"
                  aria-label={`Learn more about ${item.title}`}
                >
                  →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
