import KnowledgeImage from "@/components/KnowledgeImage";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import type { KnowledgeArticle, KnowledgeFigure } from "@/lib/knowledge-articles";
import { knowledgeCollectionPath } from "@/lib/knowledge-path";
import { slugifyKnowledgeTitle } from "@/lib/knowledge-utils";

type CategoryInfo = {
  id: string;
  index: string;
  title: string;
  shortLabel: string;
  accent: string;
  description: string;
};

type SeriesLink = {
  title: string;
  slug: string;
};

type KnowledgeArticlePageProps = {
  article: KnowledgeArticle;
  category: CategoryInfo;
  locale: Locale;
  articleNumber: number;
  articleCount: number;
  seriesLinks: readonly SeriesLink[];
  prev?: SeriesLink | null;
  next?: SeriesLink | null;
};

function WikiFigure({
  figure,
  locale,
  priority = false,
  sizes,
  aspectClass = "aspect-[16/9]",
}: {
  figure: KnowledgeFigure;
  locale: Locale;
  priority?: boolean;
  sizes: string;
  aspectClass?: string;
}) {
  const label = uiLabel(locale, "图", "Fig.", "Fig.");

  return (
    <figure className="my-8">
      <div className={`relative ${aspectClass} overflow-hidden border border-slate-200 bg-slate-100`}>
        <KnowledgeImage
          src={figure.src}
          alt={figure.alt}
          fill
          className="object-contain bg-[#F8FAFC]"
          sizes={sizes}
          priority={priority}
        />
      </div>
      {figure.caption ? (
        <figcaption className="mt-3 border-l-2 border-[#0B5FFF]/40 pl-3 text-sm leading-6 text-slate-500">
          <span className="font-bold text-slate-700">{label}:</span> {figure.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function KnowledgeArticlePage({
  article,
  category,
  locale,
  articleNumber,
  articleCount,
  seriesLinks,
  prev,
  next,
}: KnowledgeArticlePageProps) {
  const L = (href: string) => withLocale(href, locale);
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);

  const toc = article.sections
    .filter((section) => Boolean(section.heading))
    .map((section) => ({
      id: slugifyKnowledgeTitle(section.heading!),
      label: section.heading!,
    }));

  const nearby = seriesLinks.filter((item) => item.slug !== article.slug).slice(0, 8);

  return (
    <main className="knowledge-article-page bg-[#F7F8FA]">
      <div className="border-b border-slate-200 bg-white">
        <div className="container-page py-4">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={L("/knowledge")} className="hover:text-[#0B5FFF]">
                  {t("知识中心", "Centro de conocimiento", "Knowledge Center")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={L(knowledgeCollectionPath(category.id))} className="hover:text-[#0B5FFF]">
                  {category.title}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="max-w-[42ch] truncate font-semibold text-slate-700">{article.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-page py-8 lg:py-12">
        <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_300px]">
            <article className="min-w-0 px-5 py-8 sm:px-8 md:px-12 md:py-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B5FFF]">
                {t("Wiki 知识条目", "Artículo wiki", "Wiki article")}
                {" · "}
                {t(`系列 ${category.index}`, `Colección ${category.index}`, `Collection ${category.index}`)}
              </p>

              <h1 className="font-display mt-3 text-[32px] font-black leading-[1.12] tracking-[-0.035em] text-[#0B0F19] md:text-[44px]">
                {article.title}
              </h1>

              <p className="mt-5 max-w-[68ch] text-[17px] leading-9 text-slate-700 md:text-lg md:leading-9">
                {article.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                <span>{article.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>
                  {t("条目", "Artículo", "Article")} {String(articleNumber).padStart(2, "0")}/
                  {String(articleCount).padStart(2, "0")}
                </span>
                <span aria-hidden="true">·</span>
                <span>{category.shortLabel}</span>
              </div>

              {article.heroFigure ? (
                <WikiFigure
                  figure={article.heroFigure}
                  locale={locale}
                  priority
                  sizes="(max-width: 1024px) 100vw, 760px"
                />
              ) : null}

              {toc.length > 0 ? (
                <nav
                  aria-label="Contents"
                  className="my-8 border border-slate-200 bg-[#F8FAFC] px-5 py-5"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    {t("目录", "Contenidos", "Contents")}
                  </p>
                  <ol className="mt-3 space-y-2">
                    {toc.map((item, index) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm font-semibold text-[#0B5FFF] hover:underline"
                        >
                          {index + 1}. {item.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              ) : null}

              <div className="space-y-12">
                {article.sections.map((section, index) => {
                  const headingId = section.heading
                    ? slugifyKnowledgeTitle(section.heading)
                    : undefined;
                  const sectionNumber = article.sections
                    .slice(0, index + 1)
                    .filter((item) => item.heading).length;

                  return (
                    <section
                      key={headingId ?? `section-${index}`}
                      aria-labelledby={headingId}
                      className="scroll-mt-[120px]"
                    >
                      {section.heading ? (
                        <h2
                          id={headingId}
                          className="font-display border-b border-slate-200 pb-3 text-2xl font-extrabold tracking-[-0.02em] text-[#0B0F19]"
                        >
                          <span className="mr-2 text-[#0B5FFF]">
                            {String(sectionNumber).padStart(2, "0")}
                          </span>
                          {section.heading}
                        </h2>
                      ) : null}

                      {section.paragraphs?.map((paragraph, pIndex) => (
                        <p
                          key={`${headingId ?? "p"}-${pIndex}`}
                          className={`max-w-[68ch] text-[15px] leading-8 text-slate-700 md:text-[16px] md:leading-9 ${
                            section.heading || pIndex > 0 ? "mt-4" : ""
                          }`}
                        >
                          {paragraph}
                        </p>
                      ))}

                      {section.bullets ? (
                        <ul
                          className={`max-w-[68ch] space-y-3 ${
                            section.heading || section.paragraphs?.length ? "mt-5" : ""
                          }`}
                        >
                          {section.bullets.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-[15px] leading-7 text-slate-700 md:text-[16px] md:leading-8"
                            >
                              <span
                                className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#0B5FFF]"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {section.figure ? (
                        <WikiFigure
                          figure={section.figure}
                          locale={locale}
                          sizes="(max-width: 1024px) 100vw, 720px"
                          aspectClass="aspect-[16/10]"
                        />
                      ) : null}
                    </section>
                  );
                })}
              </div>

              <nav
                aria-label="Adjacent articles"
                className="mt-12 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2"
              >
                {prev ? (
                  <Link
                    href={L(`/knowledge/${category.id}/${prev.slug}`)}
                    className="border border-slate-200 px-4 py-4 transition hover:border-[#0B5FFF]"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      {t("上一篇", "Anterior", "Previous")}
                    </p>
                    <p className="mt-2 text-sm font-extrabold text-[#0B0F19]">← {prev.title}</p>
                  </Link>
                ) : (
                  <div className="border border-dashed border-slate-200 px-4 py-4 text-sm text-slate-400">
                    {t("已是本系列第一篇", "Primera del conjunto", "First in this collection")}
                  </div>
                )}
                {next ? (
                  <Link
                    href={L(`/knowledge/${category.id}/${next.slug}`)}
                    className="border border-slate-200 px-4 py-4 text-right transition hover:border-[#0B5FFF]"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      {t("下一篇", "Siguiente", "Next")}
                    </p>
                    <p className="mt-2 text-sm font-extrabold text-[#0B0F19]">{next.title} →</p>
                  </Link>
                ) : (
                  <Link
                  href={L(knowledgeCollectionPath(category.id))}
                  className="group border border-slate-200 px-4 py-4 text-right transition hover:border-[#0B5FFF]"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    {t("返回", "Volver", "Back")}
                  </p>
                  <p className="mt-2 text-sm font-extrabold text-[#0B5FFF]">
                    {t("返回系列 Wiki", "Volver a la wiki", "Back to collection wiki")} →
                  </p>
                </Link>
                )}
              </nav>
            </article>

            <aside className="border-t border-slate-200 bg-[#F8FAFC] lg:border-l lg:border-t-0">
              <div className="sticky top-[100px] p-5 lg:p-6">
                <div className="border border-slate-200 bg-white">
                  <div className={`bg-gradient-to-br ${category.accent} px-4 py-4 text-white`}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/75">
                      {t("条目信息", "Ficha del artículo", "Article infobox")}
                    </p>
                    <p className="mt-2 font-display text-lg font-extrabold leading-snug">
                      {article.title}
                    </p>
                  </div>
                  <dl className="divide-y divide-slate-200 text-sm">
                    <div className="flex justify-between gap-3 px-4 py-3">
                      <dt className="font-semibold text-slate-500">
                        {t("所属系列", "Colección", "Collection")}
                      </dt>
                      <dd className="text-right font-bold text-[#0B0F19]">{category.shortLabel}</dd>
                    </div>
                    <div className="flex justify-between gap-3 px-4 py-3">
                      <dt className="font-semibold text-slate-500">
                        {t("编号", "Índice", "Index")}
                      </dt>
                      <dd className="font-mono font-bold text-[#0B0F19]">
                        {category.index}-{String(articleNumber).padStart(2, "0")}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-3 px-4 py-3">
                      <dt className="font-semibold text-slate-500">
                        {t("阅读", "Lectura", "Reading")}
                      </dt>
                      <dd className="font-bold text-[#0B0F19]">{article.readTime}</dd>
                    </div>
                    <div className="px-4 py-3">
                      <dt className="font-semibold text-slate-500">
                        {t("领域说明", "Dominio", "Domain")}
                      </dt>
                      <dd className="mt-1 leading-6 text-slate-700">{category.description}</dd>
                    </div>
                  </dl>
                </div>

                {nearby.length > 0 ? (
                  <div className="mt-5 border border-slate-200 bg-white px-4 py-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      {t("参见", "Véase también", "See also")}
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {nearby.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={L(`/knowledge/${category.id}/${item.slug}`)}
                            className="text-[13px] font-semibold leading-snug text-[#0B5FFF] hover:underline"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-5 space-y-2">
                  <Link
                    href={L(knowledgeCollectionPath(category.id))}
                    className="block border border-slate-300 bg-white px-4 py-3 text-center text-sm font-bold text-slate-700 transition hover:border-[#0B5FFF] hover:text-[#0B5FFF]"
                  >
                    {t("返回系列概述", "Volver al resumen", "Back to collection overview")}
                  </Link>
                  <Link
                    href={L("/contact")}
                    className="block bg-[#0B5FFF] px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-[#0947D6]"
                  >
                    {t("联系工程团队", "Contactar ingeniería", "Contact engineering")}
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
