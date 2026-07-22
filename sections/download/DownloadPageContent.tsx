"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { getDownloadCategoryFromHash, type DownloadCategoryId } from "@/lib/downloads";
import { readDownloadAccess } from "@/lib/download-access";
import type { Locale } from "@/lib/i18n/config";
import { getDownloadsBundle } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";
import DownloadAccessModal from "@/sections/download/DownloadAccessModal";

function PdfIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-slate-500">
      <path
        d="M8 3h7l5 5v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M15 3v5h5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 12h8M8 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M7 11V8a5 5 0 0 1 10 0v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function formatDate(date: string, locale: Locale) {
  return new Date(date).toLocaleDateString(locale === "zh" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function DownloadPageContent({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const L = (href: string) => withLocale(href, locale);
  const { downloadCategories, downloadFiles } = getDownloadsBundle(locale);
  const [activeCategory, setActiveCategory] = useState<DownloadCategoryId>("brochure");
  const [hasAccess, setHasAccess] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingFile, setPendingFile] = useState<{ title: string; href: string } | null>(null);

  const syncFromHash = useCallback(() => {
    const category = getDownloadCategoryFromHash(window.location.hash);
    if (category) {
      setActiveCategory(category);
    }
  }, []);

  useEffect(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [syncFromHash]);

  useEffect(() => {
    setHasAccess(Boolean(readDownloadAccess()));
  }, []);

  const selectCategory = useCallback((id: DownloadCategoryId) => {
    setActiveCategory(id);
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  const openRegistration = useCallback((file?: { title: string; href: string }) => {
    setPendingFile(file ?? null);
    setModalOpen(true);
  }, []);

  const handleFileClick = useCallback(
    (file: { title: string; href: string }) => {
      if (!hasAccess) {
        openRegistration(file);
        return;
      }
      window.location.href = file.href;
    },
    [hasAccess, openRegistration],
  );

  const category =
    downloadCategories.find((item) => item.id === activeCategory) ?? downloadCategories[0];
  const files = downloadFiles[activeCategory];

  return (
    <section className="download-workspace bg-white pb-10 lg:pb-12" aria-label="Download library">
      <div className="container-page">
        <div className="download-split overflow-hidden rounded-sm border border-slate-200/90 shadow-[0_20px_60px_rgba(10,10,10,0.08)] lg:grid lg:grid-cols-[minmax(250px,28%)_1fr]">
          <aside className="download-sidebar border-b border-slate-200 bg-white lg:border-b-0 lg:border-r-0">
            <Link href={L("/download")} className="download-sidebar-cta">
              {isZh ? "浏览全部下载" : "Browse all downloads"} <span aria-hidden="true">→</span>
            </Link>

            <nav className="px-2 py-4 lg:py-6" aria-label="Download categories">
              <ul className="space-y-1">
                {downloadCategories.map((item) => {
                  const isActive = activeCategory === item.id;

                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => selectCategory(item.id)}
                        className={`w-full px-5 py-3.5 text-left text-sm font-bold transition ${
                          isActive
                            ? "bg-[#FEE2E2] text-[#DC2626]"
                            : "text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0A0A0A]"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <div className="download-main flex min-h-[520px] flex-col bg-white">
            <div className="flex flex-col gap-4 bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A] to-[#DC2626] px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
              <h2 className="font-display text-xl font-black text-white md:text-2xl">
                {category.label}
              </h2>
              {hasAccess ? (
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white">
                  {isZh ? "已解锁访问" : "Access unlocked"}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => openRegistration()}
                  className="download-panel-cta inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-black"
                >
                  <LockIcon />
                  {isZh ? "注册以下载" : "Register to download"}
                </button>
              )}
            </div>

            <div className="flex-1 px-6 py-6 md:px-8">
              <h3 className="font-display text-lg font-black text-[#0A0A0A] md:text-xl">
                {isZh ? `${category.label}资源` : `${category.label} resources`}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{category.description}</p>

              {!hasAccess ? (
                <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#B91C1C]">
                  <LockIcon />
                  {isZh
                    ? "需注册——填写姓名、公司、邮箱和电话即可解锁下载。"
                    : "Registration required — name, company, email, and phone unlock downloads."}
                </p>
              ) : null}

              <div className="mt-5 border-t border-slate-200" />

              <div className="mt-6 overflow-hidden border border-slate-200">
                <div className="grid grid-cols-[minmax(0,1fr)_140px_120px] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-slate-600">
                  <span>{isZh ? "标题" : "Title"}</span>
                  <span className="hidden sm:inline">{isZh ? "类型" : "Type"}</span>
                  <span>{isZh ? "日期" : "Date"}</span>
                </div>

                <ul>
                  {files.map((file) => (
                    <li
                      key={file.title}
                      className="grid grid-cols-1 gap-2 border-b border-slate-100 px-5 py-4 transition last:border-b-0 hover:bg-[#F8FAFC] sm:grid-cols-[minmax(0,1fr)_140px_120px] sm:items-center sm:gap-4"
                    >
                      <button
                        type="button"
                        onClick={() => handleFileClick(file)}
                        className="inline-flex min-w-0 items-start gap-3 text-left text-sm font-semibold text-[#0A0A0A] transition hover:text-slate-700 hover:underline"
                      >
                        <PdfIcon />
                        <span className="inline-flex flex-wrap items-center gap-2">
                          {file.title}
                          {!hasAccess ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.06em] text-slate-400">
                              <LockIcon />
                              {isZh ? "已锁定" : "Locked"}
                            </span>
                          ) : null}
                        </span>
                      </button>
                      <span className="pl-7 text-xs text-slate-600 sm:pl-0">{file.type}</span>
                      <span className="pl-7 text-xs text-slate-500 sm:pl-0">
                        {formatDate(file.date, locale)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="download-main-footer mt-auto h-20 bg-gradient-to-r from-[#F8FAFC] to-[#FEE2E2]" aria-hidden="true" />
          </div>
        </div>
      </div>

      <DownloadAccessModal
        open={modalOpen}
        locale={locale}
        fileTitle={pendingFile?.title}
        onClose={() => {
          setModalOpen(false);
          setPendingFile(null);
        }}
        onRegistered={() => {
          setHasAccess(true);
          setModalOpen(false);
          const file = pendingFile;
          setPendingFile(null);
          if (file) {
            window.setTimeout(() => {
              window.location.href = file.href;
            }, 400);
          }
        }}
      />
    </section>
  );
}
