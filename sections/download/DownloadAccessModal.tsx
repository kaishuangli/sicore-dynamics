"use client";

import { useEffect, useId, useRef } from "react";
import type { Locale } from "@/lib/i18n/config";
import { site } from "@/lib/site";
import { saveDownloadAccess } from "@/lib/download-access";

const fieldClassName =
  "mt-2 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-[#0B0F19] outline-none transition placeholder:text-slate-400 focus:border-[#E2232A]";

type DownloadAccessModalProps = {
  open: boolean;
  locale: Locale;
  fileTitle?: string;
  onClose: () => void;
  onRegistered: () => void;
};

export default function DownloadAccessModal({
  open,
  locale,
  fileTitle,
  onClose,
  onRegistered,
}: DownloadAccessModalProps) {
  const isZh = locale === "zh";
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-[#071225]/65 backdrop-blur-[2px]"
        aria-label={isZh ? "关闭注册对话框" : "Close registration dialog"}
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-sm border border-slate-200 bg-white shadow-[0_24px_80px_rgba(7,18,37,0.35)]"
      >
        <div className="bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A] to-[#DC2626] px-6 py-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/65">
            {isZh ? "需要注册" : "Registration required"}
          </p>
          <h2 id={titleId} className="font-display mt-2 text-xl font-black text-white">
            {isZh ? "注册以下载" : "Register to download"}
          </h2>
          <p className="mt-2 text-sm leading-6 text-white/75">
            {isZh
              ? "留下您的联系方式以解锁宣传册、数据表和产品文档。"
              : "Leave your contact details to unlock brochures, datasheets, and product documents."}
            {fileTitle ? (
              <>
                {" "}
                {isZh ? "已选择：" : "Selected: "}
                <span className="font-semibold text-white">{fileTitle}</span>
              </>
            ) : null}
          </p>
        </div>

        <form
          className="px-6 py-6"
          onSubmit={(event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const data = new FormData(form);
            const registration = {
              name: String(data.get("name") || "").trim(),
              company: String(data.get("company") || "").trim(),
              email: String(data.get("email") || "").trim(),
              phone: String(data.get("phone") || "").trim(),
            };

            saveDownloadAccess(registration);

            const subject = encodeURIComponent(
              `[SiCore Download Access] ${registration.company} — ${fileTitle || "Download Center"}`,
            );
            const body = encodeURIComponent(
              [
                "New download registration:",
                "",
                `Name: ${registration.name}`,
                `Company: ${registration.company}`,
                `Email: ${registration.email}`,
                `Phone: ${registration.phone}`,
                `Requested file: ${fileTitle || "General access"}`,
                `Submitted: ${new Date().toISOString()}`,
              ].join("\n"),
            );

            window.open(`mailto:${site.email}?subject=${subject}&body=${body}`, "_blank");
            onRegistered();
          }}
        >
          <div className="space-y-1">
            <label className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              {isZh ? "姓名" : "Full name"}
              <input
                ref={firstFieldRef}
                required
                type="text"
                name="name"
                className={fieldClassName}
                autoComplete="name"
              />
            </label>

            <label className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              {isZh ? "公司" : "Company"}
              <input
                required
                type="text"
                name="company"
                className={fieldClassName}
                autoComplete="organization"
              />
            </label>

            <label className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              {isZh ? "商务邮箱" : "Business email"}
              <input
                required
                type="email"
                name="email"
                className={fieldClassName}
                autoComplete="email"
              />
            </label>

            <label className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              {isZh ? "电话" : "Phone"}
              <input
                required
                type="tel"
                name="phone"
                className={fieldClassName}
                autoComplete="tel"
                placeholder="+1 …"
              />
            </label>
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-500">
            {isZh
              ? "您的信息将用于处理下载请求，并跟进 OEM 或技术咨询。"
              : "Your information is used to process download requests and follow up on OEM or technical inquiries."}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="submit" className="btn-primary inline-flex">
              {isZh ? "注册并解锁" : "Register & unlock"} <span aria-hidden="true">→</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-600 transition hover:text-[#0A0A0A]"
            >
              {isZh ? "取消" : "Cancel"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
