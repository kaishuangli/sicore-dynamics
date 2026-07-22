import Link from "next/link";
import SectionEyebrow from "@/components/SectionEyebrow";
import KnowledgeIcon from "@/components/KnowledgeIcon";
import { knowledgeCategories } from "@/lib/knowledge";

const featuredCategories = [
  knowledgeCategories[0],
  knowledgeCategories[4],
  knowledgeCategories[5],
];

export default function KnowledgeSection() {
  return (
    <section
      id="knowledge"
      className="relative pt-12 pb-10 mesh-bg-subtle lg:pt-14 lg:pb-12"
      aria-labelledby="knowledge-heading"
    >
      <div className="container-page">
        <SectionEyebrow bgClassName="bg-[#F8FAFC]">Knowledge Center</SectionEyebrow>

        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2
              id="knowledge-heading"
              className="font-display text-3xl font-black tracking-[-0.03em] text-slate-950 md:text-4xl"
            >
              Technical knowledge for{" "}
              <span className="text-gradient-blue">wireless power</span> systems.
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Explore 13 engineering collections — from wireless charging fundamentals to intelligent
              power control, charging stations, and industry standards.
            </p>
          </div>
          <Link
            href="/knowledge"
            className="shrink-0 text-sm font-bold text-[#0B5FFF] transition hover:opacity-80"
          >
            Enter the library →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              href={`/knowledge?collection=${category.id}`}
              className={`group rounded-2xl border bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-[#0B5FFF]/25 hover:shadow-[0_20px_50px_rgba(11,95,255,0.1)] ${
                category.featured ? "border-violet-200/80 ring-1 ring-violet-200/50" : "border-slate-200/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-xl bg-gradient-to-br ${category.accent} p-2.5 text-white`}>
                  <KnowledgeIcon type={category.icon} className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
                    Collection {category.index}
                  </span>
                  {category.featured ? (
                    <span className="ml-2 rounded-full bg-violet-100 px-2 py-0.5 text-[9px] font-bold uppercase text-violet-700">
                      Core
                    </span>
                  ) : null}
                </div>
              </div>
              <h3 className="font-display mt-4 text-lg font-extrabold text-slate-950 transition group-hover:text-[#0B5FFF]">
                {category.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
