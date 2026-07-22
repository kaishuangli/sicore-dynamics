import ContactCard from "@/components/ContactCard";
import SectionEyebrow from "@/components/SectionEyebrow";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default function PartnersSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const partnerTypes = [
    { title: dict.home.partnerOem, description: dict.home.partnerOemText },
    { title: dict.home.partnerIntegrator, description: dict.home.partnerIntegratorText },
    { title: dict.home.partnerDistributor, description: dict.home.partnerDistributorText },
    { title: dict.home.partnerTech, description: dict.home.partnerTechText },
  ];

  return (
    <section id="partners" className="relative pt-12 pb-20 lg:pt-14 lg:pb-24">
      <div className="mesh-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="container-page relative">
        <SectionEyebrow bgClassName="bg-[#F8FAFC]">{dict.home.partnersEyebrow}</SectionEyebrow>

        <div className="mt-4 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
          <div>
            <h2 className="font-display max-w-2xl text-2xl font-black tracking-[-0.03em] text-slate-950 md:text-3xl lg:text-[34px] lg:leading-tight">
              {dict.home.partnersTitle}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 md:text-base">
              {dict.home.partnersBody}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {partnerTypes.map((item) => (
                <article key={item.title} className="tech-card rounded-xl px-5 py-4">
                  <h3 className="font-display text-xs font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <ContactCard className="lg:sticky lg:top-28" locale={locale} />
        </div>
      </div>
    </section>
  );
}
