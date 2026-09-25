import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getPogoPinChargingDockPage } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";
import ScPd10DimensionView from "@/sections/products/docking/ScPd10DimensionViews";

function HighlightIcon({ type }: { type: "pin" | "safe" | "compact" | "usb" }) {
  const common = "h-6 w-6 text-[#0B5FFF]";
  if (type === "pin") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M8 4h8v4H8V4Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M10 8v9M14 8v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="10" cy="19" r="1.4" fill="currentColor" />
        <circle cx="14" cy="19" r="1.4" fill="currentColor" />
      </svg>
    );
  }
  if (type === "safe") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M12 3 20 6v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  if (type === "compact") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <rect x="5" y="7" width="14" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 12h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
      <path d="M8 8h8v8H8V8Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 16v3M10 19h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function SpecIcon({ type }: { type: "power" | "output" | "gauge" | "temp" | "safe" | "life" }) {
  const common = "h-7 w-7 text-[#0B5FFF]";
  if (type === "power") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "output") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <circle cx="7" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M10 12h4" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  if (type === "gauge") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M5 16a8 8 0 1 1 14 0" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 16 16 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "temp") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M10 14.5V6a2 2 0 1 1 4 0v8.5a3.5 3.5 0 1 1-4 0Z" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  if (type === "life") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
      <path d="M12 3 20 6v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function PogoPinChargingDockPage({ locale }: { locale: Locale }) {
  const page = getPogoPinChargingDockPage(locale);
  const contactHref = withLocale("/contact", locale);

  return (
    <article className="bg-white">
      <section className="px-6 py-12 lg:px-10 lg:py-16 xl:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <p className="text-sm font-bold tracking-[0.14em] text-[#0B5FFF]">{page.model}</p>
            <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-[#0B0F19] md:text-4xl lg:text-[42px] lg:leading-[1.1]">
              {page.title}
            </h1>
            <p className="mt-4 text-lg font-medium text-slate-500">{page.tagline}</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-base">{page.description}</p>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <Image
              src={page.heroImage}
              alt={page.heroImageAlt}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1024px) 90vw, 420px"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:mt-12">
          {page.highlights.map((item) => (
            <div key={item.title} className="text-center sm:text-left">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#0B5FFF]/20 bg-[#EFF6FF] sm:mx-0">
                <HighlightIcon type={item.icon} />
              </div>
              <p className="mt-3 text-sm font-bold text-[#0B0F19]">{item.title}</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-[#F8FAFC] px-6 py-12 lg:px-10 lg:py-16 xl:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#0B0F19] md:text-3xl">
              {page.performance.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{page.performance.body}</p>
            <ul className="mt-6 space-y-3">
              {page.performance.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B5FFF] text-white">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden="true">
                      <path d="M3.5 8.2 6.4 11l6.1-6.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
            <Image
              src={page.performance.image}
              alt={page.performance.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-10 lg:py-16 xl:px-12">
        <div className="grid items-start gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#0B0F19] md:text-3xl">
              {page.devices.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{page.devices.intro}</p>
            <ul className="mt-5 space-y-2 text-sm font-semibold text-slate-700">
              {page.devices.items.map((item) => (
                <li key={item.title} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0B5FFF]" aria-hidden="true" />
                  {item.title}
                </li>
              ))}
              <li className="flex items-center gap-2 text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0B5FFF]" aria-hidden="true" />
                {page.devices.moreLabel}
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {page.devices.items.map((item) => (
              <figure key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC]">
                <div className="relative aspect-[3/4]">
                  <Image src={item.image} alt={item.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 45vw, 180px" />
                </div>
                <figcaption className="border-t border-slate-200 bg-white px-2 py-3 text-center text-[11px] font-bold text-[#0B0F19] md:text-xs">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-[#F8FAFC] px-6 py-12 lg:px-10 lg:py-16 xl:px-12">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#0B0F19] md:text-3xl">
          {page.specsTitle}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {page.specs.map((spec) => (
            <div key={spec.label} className="rounded-2xl border border-slate-200 bg-white px-5 py-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EFF6FF]">
                <SpecIcon type={spec.icon} />
              </div>
              <p className="mt-4 text-sm font-bold text-[#0B0F19]">{spec.label}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{spec.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 lg:px-10 lg:py-16 xl:px-12">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#0B0F19] md:text-3xl">
          {page.dimensionsTitle}
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
          {page.dimensions.map((item) => (
            <figure key={item.id} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-3 pb-4 pt-3">
              <ScPd10DimensionView
                view={item.id}
                widthLabel={"width" in item ? item.width : undefined}
                heightLabel={"height" in item ? item.height : undefined}
                depthLabel={"depth" in item ? item.depth : undefined}
              />
              <figcaption className="mt-1 text-center text-xs font-bold text-slate-600">{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 px-6 py-12 lg:px-10 lg:py-16 xl:px-12">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#0B0F19] md:text-3xl">
          {page.applicationsTitle}
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
          {page.applications.map((app) => (
            <figure key={app.title} className="relative aspect-square overflow-hidden rounded-xl">
              <Image src={app.image} alt={app.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 45vw, 220px" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[#0B5FFF] px-3 py-2 text-center text-[11px] font-bold text-white md:text-xs">
                {app.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#F1F5F9] px-6 py-10 lg:px-10 xl:px-12">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B5FFF]">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" aria-hidden="true">
                <path d="M8 4h8v4H8V4Z" stroke="currentColor" strokeWidth="1.7" />
                <path d="M10 8v9M14 8v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                <circle cx="10" cy="19" r="1.4" fill="currentColor" />
                <circle cx="14" cy="19" r="1.4" fill="currentColor" />
              </svg>
            </div>
            <div className="max-w-xl">
              <h2 className="font-display text-xl font-extrabold text-[#0B0F19] md:text-2xl">{page.cta.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{page.cta.description}</p>
            </div>
          </div>
          <Link
            href={contactHref}
            className="inline-flex shrink-0 items-center rounded-xl bg-[#0B5FFF] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0847cc]"
          >
            {page.cta.button} →
          </Link>
        </div>
      </section>
    </article>
  );
}
