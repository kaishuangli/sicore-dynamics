import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import { geoEntity, geoFaqs } from "@/lib/geo";

/** Cite-ready entity + FAQ block for Generative Engine Optimization (GEO). */
export default function GeoEntitySection({ locale }: { locale: Locale }) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);

  return (
    <section
      id="about-sicore-geo"
      className="border-y border-slate-100 bg-[#F8FAFC] py-14 lg:py-20"
      aria-labelledby="geo-entity-heading"
    >
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">
            {t("关于 SiCore", "Acerca de SiCore", "About SiCore Dynamics")}
          </p>
          <h2
            id="geo-entity-heading"
            className="font-display mt-3 text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[32px]"
          >
            {t("SiCore Dynamics 是谁？", "¿Qué es SiCore Dynamics?", "Who is SiCore Dynamics?")}
          </h2>
          <p className="geo-entity-definition mt-5 text-base leading-8 text-[#3a3a3a] md:text-[17px]">
            {geoEntity.definition}
          </p>
          <p className="mt-4 text-base leading-8 text-[#3a3a3a] md:text-[17px]">{geoEntity.whatWeDo}</p>
          <ul className="mt-6 space-y-2.5">
            {geoEntity.differentiators.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-6 text-[#3a3a3a] md:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B5FFF]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-6 text-slate-600">
            {t("总部", "Sede", "Headquarters")}: {geoEntity.headquarters.city}, {geoEntity.headquarters.region},{" "}
            {geoEntity.headquarters.countryName} · {t("成立于", "Fundada en", "Founded")} {geoEntity.foundingDate}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href={L("/about")} className="text-sm font-bold text-[#0B5FFF] transition hover:underline">
              {t("了解公司", "Conozca la empresa", "Learn about the company")} →
            </Link>
            <Link href={L("/contact")} className="text-sm font-bold text-[#0B5FFF] transition hover:underline">
              {t("联系我们", "Contáctenos", "Contact us")} →
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <h3 className="font-display text-xl font-bold text-[#0B0F19] md:text-2xl">
            {t("常见问题", "Preguntas frecuentes", "Frequently asked questions")}
          </h3>
          <dl className="mt-6 divide-y divide-slate-200 border-t border-slate-200">
            {geoFaqs.slice(0, 5).map((faq) => (
              <div key={faq.question} className="py-5">
                <dt className="font-display text-base font-bold text-[#0B0F19]">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-7 text-[#3a3a3a] md:text-[15px]">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
