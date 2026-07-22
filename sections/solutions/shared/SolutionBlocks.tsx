import Link from "next/link";
import type { IndustryId } from "@/lib/industries";
import type { Locale } from "@/lib/i18n/config";
import { getSolutionFaqsForIndustry } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";

type FaqVariant = "standard" | "split" | "compact";

export function SolutionFaqBlock({
  industryId,
  title,
  variant = "standard",
  locale,
}: {
  industryId: IndustryId;
  title: string;
  variant?: FaqVariant;
  locale: Locale;
}) {
  const faqs = getSolutionFaqsForIndustry(industryId, locale);

  if (variant === "split") {
    return (
      <section className="border-t border-slate-200 bg-white py-14 lg:py-20" aria-labelledby="solution-faq-heading">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <div className="solution-abb-accent" aria-hidden="true" />
              <h2 id="solution-faq-heading" className="font-display mt-6 text-2xl font-bold text-[#0B0F19] md:text-[32px] lg:sticky lg:top-28">
                {title}
              </h2>
            </div>
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>
    );
  }

  if (variant === "compact") {
    return (
      <section className="bg-[#F8FAFC] py-14 lg:py-16" aria-labelledby="solution-faq-heading">
        <div className="container-page max-w-4xl">
          <h2 id="solution-faq-heading" className="font-display text-xl font-bold text-[#0B0F19] md:text-2xl">
            {title}
          </h2>
          <div className="mt-6 border-t-2 border-[#0B0F19]" />
          <FaqList faqs={faqs} compact />
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-slate-200 bg-white py-14 lg:py-20" aria-labelledby="solution-faq-heading">
      <div className="container-page">
        <h2 id="solution-faq-heading" className="font-display max-w-4xl text-2xl font-bold text-[#0B0F19] md:text-[32px] lg:text-[36px]">
          {title}
        </h2>
        <div className="mt-8 border-t-2 border-[#0B0F19]" />
        <FaqList faqs={faqs} />
      </div>
    </section>
  );
}

function FaqList({
  faqs,
  compact = false,
}: {
  faqs: ReturnType<typeof getSolutionFaqsForIndustry>;
  compact?: boolean;
}) {
  return (
    <ol className="mt-0 divide-y divide-slate-200">
      {faqs.map((item, index) => (
        <li key={item.question}>
          <details className="group">
            <summary
              className={`flex cursor-pointer list-none items-start gap-5 [&::-webkit-details-marker]:hidden ${
                compact ? "py-4" : "py-6 md:gap-10 md:py-8"
              }`}
            >
              <span className={`shrink-0 font-display font-bold text-[#0B0F19] ${compact ? "w-7 text-sm" : "w-10 text-lg md:text-xl"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={`flex-1 text-[#0B0F19] ${compact ? "text-sm leading-6" : "text-base leading-7 md:text-lg md:leading-8"}`}>
                {item.question}
              </span>
            </summary>
            <div className={`pb-6 pl-12 md:pl-[3.25rem] ${compact ? "pb-4" : "md:pb-8"}`}>
              <p className={`leading-[1.75] text-[#3a3a3a] ${compact ? "text-sm" : "text-base md:text-[17px]"}`}>
                {item.answer}
              </p>
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}

type CtaTheme = "light" | "brand" | "dark" | "clinical";

export function SolutionCtaBlock({
  title,
  description,
  ctaLabel,
  secondaryHref,
  secondaryLabel,
  theme = "light",
  locale,
}: {
  title: string;
  description: string;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  theme?: CtaTheme;
  locale: Locale;
}) {
  const resolvedCtaLabel =
    ctaLabel ??
    (locale === "zh"
      ? "联系我们的团队"
      : locale === "es"
        ? "Contacte a nuestro equipo"
        : "Contact Our Team");
  const themes = {
    light: "border-t border-slate-200 bg-[#F8FAFC] text-[#0B0F19]",
    brand: "bg-gradient-to-r from-[#0B5FFF] to-blue-600 text-white",
    dark: "bg-[#071225] text-white",
    clinical: "border-t border-slate-100 bg-white text-[#0B0F19]",
  };

  const descClass =
    theme === "light" || theme === "clinical" ? "text-slate-700" : "text-slate-300";

  return (
    <section className={`py-16 lg:py-20 ${themes[theme]}`} aria-labelledby="solution-cta-heading">
      <div className="container-page text-center">
        {theme !== "brand" ? <div className={`solution-abb-accent mx-auto ${theme === "dark" ? "" : ""}`} aria-hidden="true" /> : null}
        <h2 id="solution-cta-heading" className={`font-display mt-6 text-2xl font-bold md:text-3xl ${theme === "brand" ? "text-white" : ""}`}>
          {title}
        </h2>
        <p className={`mx-auto mt-6 max-w-2xl text-base leading-8 ${descClass}`}>{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={withLocale("/contact", locale)} className="btn-primary inline-flex">
            {resolvedCtaLabel} <span aria-hidden="true">→</span>
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={withLocale(secondaryHref, locale)}
              className={`text-sm font-bold transition ${
                theme === "dark" || theme === "brand"
                  ? "text-white hover:text-[#E2232A]"
                  : "text-[#0B5FFF] hover:underline"
              }`}
            >
              {secondaryLabel} <span aria-hidden="true">→</span>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function MetricsStrip({
  items,
  theme = "red",
}: {
  items: readonly { value: string; label: string }[];
  theme?: "red" | "blue" | "slate";
}) {
  const bg = theme === "blue" ? "bg-[#0B5FFF]" : theme === "slate" ? "bg-slate-800" : "bg-[#071225]";
  const accent = theme === "blue" ? "border-white/60" : "border-[#E2232A]";

  return (
    <section className={`${bg} py-12 lg:py-14`} aria-label="Key metrics">
      <div className="container-page">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className={`border-l-2 ${accent} pl-5`}>
              <p className="font-display text-3xl font-black text-white md:text-4xl">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/80 md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
