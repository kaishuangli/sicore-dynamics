import Image from "next/image";
import Link from "next/link";
import SectionEyebrow from "@/components/SectionEyebrow";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getIndustriesBundle } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";
import { getIndustryHref } from "@/lib/industries";

export default function IndustriesSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const L = (href: string) => withLocale(href, locale);
  const { publicIndustries } = getIndustriesBundle(locale);

  return (
    <section id="solutions" className="relative bg-white pt-12 pb-10 lg:pt-14 lg:pb-12">
      <div className="mesh-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="container-page relative">
        <SectionEyebrow bgClassName="bg-white">{dict.home.solutionsEyebrow}</SectionEyebrow>

        <div className="mx-auto mt-4 max-w-4xl text-center">
          <h2 className="font-display text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl lg:text-[34px] lg:leading-tight">
            {dict.home.solutionsTitle}
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-sm leading-7 text-slate-600 md:text-base">
            <p>{dict.home.solutionsP1}</p>
            <p>{dict.home.solutionsP2}</p>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_16px_48px_rgba(15,23,42,0.06)]">
          <div className="grid grid-cols-2 md:grid-cols-3">
            {publicIndustries.map((item) => (
              <Link
                key={item.id}
                href={L(getIndustryHref(item.id))}
                className="group relative aspect-[2/1] max-h-72 overflow-hidden border-b border-r border-slate-100 md:max-h-80"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/80 via-[#071225]/20 to-transparent" />
                <span className="absolute bottom-4 left-4 right-4 font-display text-sm font-extrabold text-white md:text-base">
                  {dict.navSolutions[item.id as keyof typeof dict.navSolutions] ?? item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href={L("/#solutions")}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-[#0B5FFF] transition hover:gap-3"
          >
            {dict.home.exploreSolutionsArrow}
          </Link>
        </div>
      </div>
    </section>
  );
}
