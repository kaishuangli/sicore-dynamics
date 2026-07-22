import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { getAboutSections } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";

type AboutSection = ReturnType<typeof getAboutSections>[number];

export default function AboutPanel({
  section,
  locale,
}: {
  section: AboutSection;
  locale: Locale;
}) {
  const isZh = locale === "zh";

  return (
    <div className="py-12 lg:py-16">
      <div className="container-page">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">
          {isZh ? "关于我们" : "About"}
        </p>
        <h2 className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl lg:text-4xl">
          {section.title}
        </h2>
        <p className="mt-3 text-base font-semibold text-[#334155]">{section.tagline}</p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#64748B] md:text-base">{section.description}</p>

        <div className="mt-10 flex flex-wrap gap-2">
          {section.highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-blue-200/60 bg-blue-50/80 px-3 py-1 text-[11px] font-bold text-[#0B5FFF]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {section.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-[#0B5FFF]/20 hover:shadow-[0_16px_40px_rgba(11,95,255,0.08)]"
            >
              <h3 className="font-display text-lg font-extrabold text-[#0B0F19]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 p-8 text-center">
          <p className="font-display text-lg font-bold text-[#0B0F19]">
            {isZh ? `想进一步了解${section.label}？` : `Interested in learning more about ${section.label}?`}
          </p>
          <Link href={withLocale("/contact", locale)} className="btn-primary mt-6 inline-flex">
            {isZh ? "联系 SiCore" : "Contact SiCore"} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
