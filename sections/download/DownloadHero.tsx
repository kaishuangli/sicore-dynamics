import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getDownloadsBundle } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";

export default function DownloadHero({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const L = (href: string) => withLocale(href, locale);
  const { downloadCategories } = getDownloadsBundle(locale);

  return (
    <section
      className="relative bg-[#F8FAFC] pt-8 pb-6 lg:pt-10 lg:pb-8"
      aria-labelledby="download-hero-heading"
    >
      <div className="container-page">
        <div className="download-hero-card relative overflow-hidden rounded-2xl px-6 py-8 md:px-10 md:py-10 lg:px-12">
          <div className="download-hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="tech-grid pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden="true" />

          <div className="relative max-w-3xl">
            <nav className="text-xs text-white/75" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href={L("/")} className="transition hover:text-white">
                    {isZh ? "首页" : "Home"}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-semibold text-white">{isZh ? "下载中心" : "Downloads"}</li>
              </ol>
            </nav>

            <p className="download-hero-eyebrow mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              {isZh ? "下载中心" : "Download Center"}
            </p>

            <h1
              id="download-hero-heading"
              className="download-hero-title font-display mt-4 text-2xl font-black leading-tight tracking-[-0.03em] text-white md:text-[32px] lg:text-[36px]"
            >
              {isZh ? "SiCore 产品文档与软件" : "SiCore Product Documentation and Software"}
            </h1>

            <p className="download-hero-copy mt-4 text-sm leading-7 text-slate-300 md:text-base">
              {isZh ? (
                <>浏览已发布的产品数据手册。填写姓名、公司、邮箱和电话即可解锁下载。</>
              ) : (
                <>
                  Browse published product datasheets. Register with your name, company, email, and
                  phone to unlock downloads.
                </>
              )}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {downloadCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`#${category.id}`}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-sm transition hover:border-cyan-300/40 hover:bg-white/15"
                >
                  {category.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
