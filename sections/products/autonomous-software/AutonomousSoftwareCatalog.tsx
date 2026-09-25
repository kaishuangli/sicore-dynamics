import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getAutonomousSoftwareSections } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";
import { getUploadedProducts } from "@/lib/catalog/products";
import { pickLocalized } from "@/lib/catalog/types";

export default function AutonomousSoftwareCatalog({ locale }: { locale: Locale }) {
  const L = (href: string) => withLocale(href, locale);
  const isZh = locale === "zh";
  const isEs = locale === "es";
  const sections = getAutonomousSoftwareSections(locale).map((section) => ({
    ...section,
    products: [
      ...section.products,
      ...getUploadedProducts("autonomous-software")
        .filter((item) => item.subcategoryId === section.id)
        .map((item) => ({
          id: item.id,
          label: item.brand,
          title: pickLocalized(item.name, locale),
          tagline: pickLocalized(item.tagline, locale),
          image: item.image,
          imageAlt: pickLocalized(item.imageAlt, locale) || pickLocalized(item.name, locale),
        })),
    ],
  }));

  const viewLabel = isZh ? "查看产品" : isEs ? "Ver producto" : "View Product";

  return (
    <main className="min-h-[70vh] bg-[#F2F4F6] py-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1080px] px-5 md:px-6">
        <div className="space-y-16 lg:space-y-20">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              {/* Sub-category header — like "Development Kits" in the reference */}
              <h2 className="text-[30px] font-bold leading-tight text-[#404854] md:text-[34px]">
                {section.label}
              </h2>
              {section.overview?.image && section.overview.imagePlacement !== "below" ? (
                <div
                  className={`mt-6 overflow-hidden rounded-xl border border-slate-200 shadow-[0_12px_32px_rgba(16,24,40,0.12)] ${
                    section.overview.imageTone === "light" ? "bg-white" : "bg-[#0B1220]"
                  }`}
                >
                  <Image
                    src={section.overview.image}
                    alt={section.overview.imageAlt || section.label}
                    width={1600}
                    height={900}
                    className="h-auto w-full"
                    sizes="(max-width: 1080px) 100vw, 1080px"
                    priority={section.id === "charging-management-software"}
                  />
                </div>
              ) : null}
              {section.overview ? (
                <div className="mt-6 max-w-4xl">
                  <p className="text-[18px] font-semibold leading-7 text-[#2A3340] md:text-[20px]">
                    {section.overview.headline}
                  </p>
                  {section.overview.lead ? (
                    <p className="mt-4 text-[14.5px] leading-7 text-[#5B6570]">{section.overview.lead}</p>
                  ) : null}
                  <p className="mt-4 text-[14.5px] leading-7 text-[#5B6570]">{section.overview.body}</p>
                  {section.overview.pillars?.length && section.overview.pillarLayout === "sections" ? (
                    <div className="mt-8">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                        {section.overview.pillars.map((pillar, index) => (
                          <span key={`${pillar.id}-flow`} className="inline-flex items-center gap-2">
                            <span className="rounded-md bg-white px-3 py-2 text-[12.5px] font-semibold tracking-[0.06em] text-[#2A3340] shadow-[0_4px_14px_rgba(16,24,40,0.08)]">
                              {pillar.label}
                            </span>
                            {index < section.overview!.pillars!.length - 1 ? (
                              <span className="text-[#0B5FFF]" aria-hidden="true">
                                →
                              </span>
                            ) : null}
                          </span>
                        ))}
                      </div>
                      <div className="mt-8 space-y-6">
                        {section.overview.pillars.map((pillar) => (
                          <section
                            key={pillar.id}
                            id={pillar.id}
                            className="rounded-xl bg-white px-6 py-6 shadow-[0_8px_24px_rgba(16,24,40,0.08)]"
                          >
                            <h3 className="text-[15px] font-extrabold tracking-[0.12em] text-[#0B5FFF]">
                              {pillar.label}
                            </h3>
                            {pillar.tagline ? (
                              <p className="mt-2 text-[14.5px] font-semibold leading-6 text-[#2A3340]">
                                {pillar.tagline}
                              </p>
                            ) : null}
                            <p className="mt-3 text-[14.5px] leading-7 text-[#5B6570]">{pillar.description}</p>
                          </section>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  {section.overview.pillars?.length && section.overview.pillarLayout !== "sections" ? (
                    <div
                      className={`mt-8 grid gap-4 sm:grid-cols-2 ${
                        section.overview.pillars.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
                      }`}
                    >
                      {section.overview.pillars.map((pillar) => (
                        <article
                          key={pillar.id}
                          className="rounded-xl bg-white px-5 py-5 shadow-[0_8px_24px_rgba(16,24,40,0.08)]"
                        >
                          <p className="text-[13px] font-extrabold tracking-[0.12em] text-[#0B5FFF]">
                            {pillar.label}
                          </p>
                          <p className="mt-2 text-[13.5px] leading-6 text-[#5B6570]">{pillar.description}</p>
                        </article>
                      ))}
                    </div>
                  ) : null}
                  {section.overview.steps?.length ? (
                    <div className="mt-8">
                      {section.overview.flowIntro ? (
                        <p className="text-[14.5px] font-semibold text-[#2A3340]">{section.overview.flowIntro}</p>
                      ) : null}
                      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3">
                        {section.overview.steps.map((step, index) => (
                          <span key={step.id} className="inline-flex items-center gap-2">
                            <span className="rounded-md bg-white px-3 py-2 text-[12.5px] font-semibold text-[#2A3340] shadow-[0_4px_14px_rgba(16,24,40,0.08)]">
                              {step.label}
                            </span>
                            {index < section.overview!.steps!.length - 1 ? (
                              <span className="text-[#0B5FFF]" aria-hidden="true">
                                →
                              </span>
                            ) : null}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}
              {section.overview?.image && section.overview.imagePlacement === "below" ? (
                <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_32px_rgba(16,24,40,0.08)]">
                  <Image
                    src={section.overview.image}
                    alt={section.overview.imageAlt || section.label}
                    width={1600}
                    height={900}
                    className="h-auto w-full"
                    sizes="(max-width: 1080px) 100vw, 1080px"
                  />
                </div>
              ) : null}
              {section.overview?.afterImage ? (
                <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-[#0B1220] shadow-[0_12px_32px_rgba(16,24,40,0.12)]">
                  <Image
                    src={section.overview.afterImage}
                    alt={section.overview.afterImageAlt || section.label}
                    width={1600}
                    height={900}
                    className="h-auto w-full"
                    sizes="(max-width: 1080px) 100vw, 1080px"
                  />
                </div>
              ) : null}
              {!section.overview ? (
                <>
                  <p className="mt-2 text-[14.5px] leading-6 text-[#8A929C]">{section.description}</p>
                  <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
                    {section.products.map((item) => (
                      <article
                        key={item.id}
                        className="flex h-full flex-col items-center rounded-2xl bg-white px-7 pb-8 pt-10 text-center shadow-[0_8px_24px_rgba(16,24,40,0.08)]"
                      >
                        <div className="relative mb-6 h-[140px] w-[140px] overflow-hidden rounded-full border-[3px] border-[#0B5FFF]/35 bg-[#F8FAFC]">
                          <Image
                            src={item.image}
                            alt={item.imageAlt}
                            fill
                            className="object-cover"
                            sizes="140px"
                          />
                        </div>

                        <h3 className="text-[15px] font-bold leading-snug text-[#2A3340]">{item.label}</h3>
                        <p className="mt-1 text-[13px] font-semibold text-[#4B5563]">{item.title}</p>
                        <p className="mt-4 line-clamp-2 min-h-[44px] flex-1 text-[13.5px] leading-[1.55] text-[#6B7280]">
                          {item.tagline}
                        </p>

                        {section.productLinks !== false ? (
                          <Link
                            href={L(`/products/autonomous-software/${item.id}`)}
                            className="mt-7 inline-flex h-[40px] w-[158px] shrink-0 items-center justify-center rounded-[5px] bg-[#0A4DB5] text-[13.5px] font-semibold text-white transition hover:bg-[#083E92]"
                          >
                            {viewLabel}
                          </Link>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
