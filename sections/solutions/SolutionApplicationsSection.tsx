import Image from "next/image";
import Link from "next/link";
import { getSolutionLayoutConfig } from "@/lib/solution-layout";
import type { LocalizedIndustry } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/config";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0 text-[#0B0F19]"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OfferingImage({
  src,
  alt,
  scene,
}: {
  src: string;
  alt: string;
  scene?: boolean;
}) {
  if (scene) {
    return (
      <div className="relative aspect-[16/10] min-h-[280px] w-full overflow-hidden bg-[#F8FAFC] md:min-h-[340px]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>
    );
  }

  const isProductShot = src.endsWith(".png");

  return (
    <div className="flex min-h-[240px] items-center justify-center bg-white py-8 md:min-h-[280px] lg:min-h-[320px]">
      <div className="relative h-48 w-full max-w-sm md:h-56 lg:h-64">
        <Image
          src={src}
          alt={alt}
          fill
          className={isProductShot ? "object-contain" : "object-cover"}
        />
      </div>
    </div>
  );
}

function OfferingCopy({
  title,
  description,
  locale,
}: {
  title: string;
  description: string;
  locale: Locale;
}) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);

  return (
    <div className="flex h-full flex-col justify-center py-6 lg:py-10">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl font-bold leading-snug tracking-[-0.02em] text-[#0B0F19] md:text-[28px]">
          {title}
        </h3>
        <ChevronIcon />
      </div>
      <p className="mt-6 max-w-xl text-base leading-[1.75] text-[#3a3a3a] md:text-[17px]">
        {description}
      </p>
      <Link
        href={withLocale("/contact", locale)}
        className="solution-abb-link mt-8 inline-flex items-center gap-2 text-sm font-bold md:text-base"
      >
        {t("了解更多", "Más información", "Learn more")} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

export default function SolutionApplicationsSection({
  industry,
  locale,
}: {
  industry: LocalizedIndustry;
  locale: Locale;
}) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const layout = getSolutionLayoutConfig(industry.id);
  const sectionTitle =
    layout.applicationsTitle ??
    t(
      `SiCore 面向${industry.title}的解决方案`,
      `Soluciones SiCore para ${industry.title}`,
      `SiCore Solutions for ${industry.title}`,
    );

  return (
    <section className="border-t border-slate-200 bg-white py-14 lg:py-20" aria-labelledby="solution-applications-heading">
      <div className="container-page">
        <div className="solution-abb-accent" aria-hidden="true" />
        <h2
          id="solution-applications-heading"
          className="font-display mt-6 max-w-3xl text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[32px] lg:text-[36px]"
        >
          {sectionTitle}
        </h2>

        <div className="mt-12 lg:mt-16">
          {industry.useCases.map((useCase, index) => {
            const reversed = index % 2 === 1;

            return (
              <article
                key={useCase.title}
                className="border-t border-slate-200 first:border-t-0"
              >
                <div className="grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
                  <div className={reversed ? "lg:order-2" : ""}>
                    <OfferingImage
                      src={useCase.image}
                      alt={useCase.alt}
                      scene={layout.sceneUseCaseImages}
                    />
                  </div>
                  <div className={reversed ? "lg:order-1" : ""}>
                    <OfferingCopy title={useCase.title} description={useCase.description} locale={locale} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
