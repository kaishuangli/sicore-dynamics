import Link from "next/link";
import SectionEyebrow from "@/components/SectionEyebrow";
import { aboutNavLinks } from "@/lib/about";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getAboutSections } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";

export default function AboutSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const L = (href: string) => withLocale(href, locale);
  const aboutSections = getAboutSections(locale);

  return (
    <section
      id="about"
      className="relative pt-12 pb-10 mesh-bg-subtle lg:pt-14 lg:pb-12"
      aria-labelledby="about-heading"
    >
      <div className="container-page">
        <SectionEyebrow bgClassName="bg-[#F8FAFC]">{dict.home.aboutEyebrow}</SectionEyebrow>

        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2
              id="about-heading"
              className="font-display text-3xl font-black tracking-[-0.03em] text-slate-950 md:text-4xl"
            >
              {dict.home.aboutTitleBefore}{" "}
              <span className="text-gradient-blue">{dict.home.aboutTitleAccent}</span>
              {locale === "zh" ? "" : "."}
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">{dict.home.aboutBody}</p>
          </div>
          <Link
            href={L("/about")}
            className="shrink-0 text-sm font-bold text-[#0B5FFF] transition hover:opacity-80"
          >
            {dict.home.aboutCta}
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {aboutSections.map((section) => {
            const href =
              aboutNavLinks.find((link) => link.id === section.id)?.href ?? `/about#${section.id}`;
            const label =
              dict.navAbout[section.id as keyof typeof dict.navAbout] ?? section.label;

            return (
              <Link
                key={section.id}
                href={L(href)}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-[#0B5FFF]/25 hover:shadow-[0_20px_50px_rgba(11,95,255,0.1)]"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
                  {label}
                </span>
                <h3 className="font-display mt-4 text-lg font-extrabold text-slate-950 transition group-hover:text-[#0B5FFF]">
                  {section.title}
                </h3>
                <p className="mt-2 text-xs font-medium leading-5 text-slate-500">
                  {section.tagline}
                </p>
                <p className="mt-3 text-xs leading-5 text-slate-600">{section.description}</p>
                <span className="mt-5 inline-flex text-sm font-bold text-[#0B5FFF] transition group-hover:gap-2">
                  {dict.home.exploreArrow}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
