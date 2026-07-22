import Image from "next/image";
import Link from "next/link";
import { aboutSicoreDrives as aboutSicoreDrivesEn } from "@/lib/about-sicore";
import type { Locale } from "@/lib/i18n/config";
import { getAboutSicoreBundle } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";

function DriveIcon({ type }: { type: (typeof aboutSicoreDrivesEn.items)[number]["icon"] }) {
  const common = "h-9 w-9 stroke-[#0B5FFF]";

  if (type === "target") {
    return (
      <svg viewBox="0 0 40 40" fill="none" className={common} aria-hidden="true">
        <circle cx="20" cy="20" r="14" strokeWidth="1.8" />
        <circle cx="20" cy="20" r="8" strokeWidth="1.8" />
        <circle cx="20" cy="20" r="2.5" fill="#0B5FFF" stroke="none" />
      </svg>
    );
  }

  if (type === "lightbulb") {
    return (
      <svg viewBox="0 0 40 40" fill="none" className={common} aria-hidden="true">
        <path
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 6c-5 0-9 3.8-9 8.6 0 3.2 1.7 5.9 4.2 7.4V26h9.6v-4c2.5-1.5 4.2-4.2 4.2-7.4C29 9.8 25 6 20 6Z"
        />
        <path strokeWidth="1.8" strokeLinecap="round" d="M16.5 29.5h7M17.5 32.5h5" />
      </svg>
    );
  }

  if (type === "people") {
    return (
      <svg viewBox="0 0 40 40" fill="none" className={common} aria-hidden="true">
        <circle cx="14" cy="14" r="4" strokeWidth="1.8" />
        <circle cx="26" cy="14" r="4" strokeWidth="1.8" />
        <path
          strokeWidth="1.8"
          strokeLinecap="round"
          d="M6.5 30c1.2-4.2 4-6.5 7.5-6.5s6.3 2.3 7.5 6.5M18.5 30c1.2-4.2 4-6.5 7.5-6.5s6.3 2.3 7.5 6.5"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" fill="none" className={common} aria-hidden="true">
      <path
        strokeWidth="1.8"
        strokeLinejoin="round"
        d="M20 6 8 11v9c0 7.2 5 12.4 12 14 7-1.6 12-6.8 12-14v-9L20 6Z"
      />
      <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="m15.5 20 3 3 6-6.5" />
    </svg>
  );
}

export default function AboutSicorePanel({ locale }: { locale: Locale }) {
  const L = (href: string) => withLocale(href, locale);
  const {
    aboutSicoreDrives,
    aboutSicoreHero,
    aboutSicoreLookingAhead,
    aboutSicorePeople,
    aboutSicorePhilosophy,
    aboutSicoreStory,
  } = getAboutSicoreBundle(locale);

  return (
    <div className="bg-white">
      {/* Intro — hero + story as one left-aligned flow */}
      <section
        id={aboutSicoreStory.id}
        className="relative scroll-mt-[190px] overflow-hidden border-b border-slate-200/70"
        aria-labelledby="about-sicore-hero-heading"
      >
        <div className="absolute inset-0 bg-[#F8FAFC]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block" aria-hidden="true">
          <Image
            src={aboutSicoreHero.image}
            alt=""
            fill
            priority
            sizes="48vw"
            className="object-cover object-[60%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC]/40 to-transparent" />
        </div>

        <div className="container-page relative py-16 lg:py-24">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {aboutSicoreHero.eyebrow}
            </p>
            <h1
              id="about-sicore-hero-heading"
              className="font-display mt-4 text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-[#0B0F19] md:text-[44px] lg:text-[48px]"
            >
              {aboutSicoreHero.title}
            </h1>

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-700 md:mt-10 md:text-[17px] md:leading-9">
              {aboutSicoreStory.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            <Link href={L(aboutSicoreHero.cta.href)} className="btn-primary mt-10 inline-flex">
              {aboutSicoreHero.cta.label} <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Mobile image — under copy, same left edge rhythm */}
          <div className="relative mt-12 aspect-[16/10] overflow-hidden bg-slate-200 lg:hidden">
            <Image
              src={aboutSicoreHero.image}
              alt={aboutSicoreHero.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section
        id="what-drives-us"
        className="scroll-mt-[190px] bg-white py-20 lg:py-24"
        aria-labelledby="drives-heading"
      >        <div className="container-page">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
            {aboutSicoreDrives.eyebrow}
          </p>
          <h2
            id="drives-heading"
            className="font-display mt-3 max-w-xl text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl"
          >
            {aboutSicoreDrives.title}
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {aboutSicoreDrives.items.map((item) => (
              <article key={item.title}>
                <DriveIcon type={item.icon} />
                <h3 className="font-display mt-5 text-base font-extrabold tracking-[-0.02em] text-[#0B0F19]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Engineering Philosophy */}
      <section
        id={aboutSicorePhilosophy.id}
        className="scroll-mt-[190px] border-t border-slate-200/70 py-20 lg:py-24"
        aria-labelledby="philosophy-heading"
      >
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-start">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {aboutSicorePhilosophy.eyebrow}
            </p>
            <h2
              id="philosophy-heading"
              className="font-display mt-4 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-3xl lg:leading-[1.2]"
            >
              {aboutSicorePhilosophy.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">{aboutSicorePhilosophy.body}</p>
          </div>

          <ol className="space-y-8 border-l border-slate-200 pl-6 lg:pl-8">
            {aboutSicorePhilosophy.principles.map((item) => (
              <li key={item.number}>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-xs font-bold tabular-nums text-[#0B5FFF]">
                    {item.number}
                  </span>
                  <h3 className="font-display text-base font-extrabold text-[#0B0F19]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Our People — light section, single image band */}
      <section className="border-t border-slate-200/70 bg-[#F8FAFC] py-20 lg:py-24" aria-labelledby="people-heading">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {aboutSicorePeople.eyebrow}
            </p>
            <h2
              id="people-heading"
              className="font-display mt-3 text-3xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
            >
              {aboutSicorePeople.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">{aboutSicorePeople.body}</p>
            <Link
              href={L(aboutSicorePeople.link.href)}
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#0B5FFF] transition hover:gap-3"
            >
              {aboutSicorePeople.link.label} <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative mt-12 aspect-[21/9] w-full overflow-hidden bg-slate-200">
            <Image
              src={aboutSicorePeople.image}
              alt={aboutSicorePeople.imageAlt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 6. Looking Ahead — single dark close */}
      <section
        className="relative overflow-hidden bg-[#071225] py-20 lg:py-24"
        aria-labelledby="looking-ahead-heading"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 90% 40%, rgba(11,95,255,0.28), transparent 55%)",
          }}
          aria-hidden="true"
        />

        <div className="container-page relative max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300/90">
            {aboutSicoreLookingAhead.eyebrow}
          </p>
          <h2
            id="looking-ahead-heading"
            className="font-display mt-4 text-2xl font-black tracking-[-0.03em] text-white md:text-3xl lg:leading-[1.2]"
          >
            {aboutSicoreLookingAhead.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-slate-300">
            {aboutSicoreLookingAhead.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <Link
            href={L(aboutSicoreLookingAhead.link.href)}
            className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:gap-3"
          >
            {aboutSicoreLookingAhead.link.label} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
