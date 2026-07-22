import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import type { PlugFreeTopic } from "@/lib/plug-free-docking-topics";

type PlugFreeDockingTopicPageProps = {
  topic: PlugFreeTopic;
  locale: Locale;
};

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-6 text-slate-700 md:text-[15px]">
          <span
            className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B5FFF]"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PlugFreeDockingTopicPage({ topic, locale }: PlugFreeDockingTopicPageProps) {
  const L = (href: string) => withLocale(href, locale);
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);

  return (
    <main className="bg-white">
      <section className="border-b border-slate-200/70 bg-[#F8FAFC] py-10 lg:py-14">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={L("/technology")} className="transition hover:text-[#0B5FFF]">
                  {t("技术", "Tecnología", "Technology")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={L("/technology/plug-free-docking")}
                  className="transition hover:text-[#0B5FFF]"
                >
                  {t("免插拔对接", "Acoplamiento sin enchufe", "Plug-Free Docking")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={L(`/technology/plug-free-docking#${topic.sectionId}`)}
                  className="transition hover:text-[#0B5FFF]"
                >
                  {topic.sectionTitle}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-slate-700">{topic.title}</li>
            </ol>
          </nav>

          <p className="font-display mt-8 text-4xl font-black tabular-nums text-[#0B5FFF] md:text-5xl">
            {topic.number}
          </p>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
            {topic.sectionTitle}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-[#0B0F19] md:text-[48px]">
            {topic.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            {topic.description}
          </p>
          {topic.descriptionSecondary ? (
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              {topic.descriptionSecondary}
            </p>
          ) : null}
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page space-y-12">
          {topic.image ? (
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-slate-200 bg-[#0B1220] md:aspect-[21/9]">
              <Image
                src={topic.image}
                alt={topic.imageAlt ?? topic.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1100px"
                quality={92}
                priority
              />
            </div>
          ) : null}

          {topic.gallery?.length ? (
            <div
              className={`grid grid-cols-1 gap-3 sm:gap-4 ${
                topic.gallery.length === 3
                  ? "sm:grid-cols-3"
                  : topic.gallery.length === 2
                    ? "sm:grid-cols-2"
                    : ""
              }`}
            >
              {topic.gallery.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-[#F8FAFC]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    quality={95}
                  />
                </div>
              ))}
            </div>
          ) : null}

          {topic.cases?.length ? (
            <div>
              <h2 className="font-display text-2xl font-black tracking-[-0.03em] text-[#0B0F19]">
                {t("详情", "Detalles", "Details")}
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {topic.cases.map((item) => (
                  <li
                    key={item.label}
                    className="border border-slate-200 bg-[#F8FAFC] overflow-hidden"
                  >
                    {item.image ? (
                      <div className="relative aspect-[4/3] bg-[#0B1220]">
                        <Image
                          src={item.image}
                          alt={item.label}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          quality={92}
                        />
                      </div>
                    ) : null}
                    <div className="px-4 py-4">
                      <p className="font-display text-base font-extrabold text-[#0B0F19]">
                        {item.label}
                      </p>
                      {item.detail ? (
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                      ) : null}
                      {item.status ? (
                        <p className="mt-2 text-sm font-semibold text-[#0B5FFF]">{item.status}</p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="grid gap-8 lg:grid-cols-2">
            {topic.technologies?.length ? (
              <div className="border border-slate-200 bg-white px-5 py-6 md:px-6">
                <h2 className="text-sm font-bold text-[#0B5FFF]">
                  {topic.technologiesLabel ?? t("核心技术", "Tecnologías principales", "Core Technologies")}
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {topic.technologies.map((item) => (
                    <li
                      key={item}
                      className="border border-slate-200 bg-[#F8FAFC] px-3 py-2 text-xs font-semibold text-slate-700 md:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {topic.benefits?.length ? (
              <div className="bg-[#EFF6FF] px-5 py-6 md:px-6">
                <h2 className="text-sm font-bold text-[#0B5FFF]">
                  {topic.benefitsLabel ?? t("关键优势", "Ventajas clave", "Key Benefits")}
                </h2>
                <BulletList items={topic.benefits} />
              </div>
            ) : null}

            {topic.structures?.length ? (
              <div className="border border-slate-200 bg-white px-5 py-6 md:px-6">
                <h2 className="text-sm font-bold text-[#0B5FFF]">
                  {topic.structuresLabel ?? t("常见结构", "Estructuras comunes", "Common Structures")}
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {topic.structures.map((item) => (
                    <li
                      key={item}
                      className="border border-slate-200 bg-[#F8FAFC] px-3 py-2 text-xs font-semibold text-slate-700 md:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {topic.points?.length ? (
              <div className="border border-slate-200 bg-white px-5 py-6 md:px-6">
                <h2 className="text-sm font-bold text-[#0B5FFF]">
                  {topic.pointsLabel ?? t("关键要点", "Puntos clave", "Key Points")}
                </h2>
                <ul className="mt-5 space-y-3">
                  {topic.points.map((item) => (
                    <li key={item.label} className="border-t border-slate-200 pt-3 first:border-t-0 first:pt-0">
                      <p className="text-sm font-bold text-[#0B0F19]">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div className="flex flex-col items-start justify-between gap-6 border-t border-slate-200 pt-10 md:flex-row md:items-center">
            <div>
              <p className="font-display text-xl font-bold tracking-[-0.02em] text-[#0B0F19]">
                {t(
                  `想将${topic.title}应用到您的平台？`,
                  `¿Desea aplicar ${topic.title} a su plataforma?`,
                  `Want to apply ${topic.title} to your platform?`,
                )}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t(
                  "与我们的团队沟通，了解如何将这一能力集成到您的对接系统中。",
                  "Hable con nuestro equipo sobre cómo integrar esta capacidad en su sistema de acoplamiento.",
                  "Talk with our team about integrating this capability into your docking system.",
                )}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={L(`/technology/plug-free-docking#${topic.sectionId}`)}
                className="inline-flex items-center border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-[#0B5FFF] hover:text-[#0B5FFF]"
              >
                {t("返回该板块", "Volver a la sección", "Back to section")}
              </Link>
              <Link href={L("/contact")} className="btn-primary shrink-0">
                {t("联系我们的团队", "Contacte a nuestro equipo", "Contact Our Team")} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
