"use client";

import type { Locale } from "@/lib/i18n/config";
import { getContactBundle } from "@/lib/i18n/content";
import { site } from "@/lib/site";

const fieldClassName =
  "mt-2 w-full border-0 border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-[#0B0F19] outline-none transition placeholder:text-slate-400 focus:border-[#E2232A]";

export default function ContactForm({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const { contactInquiryTypes } = getContactBundle(locale);

  return (
    <form
      id="contact-form"
      className="scroll-mt-[120px]"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const subject = encodeURIComponent(
          `[SiCore Contact] ${String(data.get("inquiryType") || "Inquiry")} — ${String(data.get("company") || "")}`,
        );
        const body = encodeURIComponent(
          [
            `Name: ${data.get("name") || ""}`,
            `Company: ${data.get("company") || ""}`,
            `Email: ${data.get("email") || ""}`,
            `Inquiry: ${data.get("inquiryType") || ""}`,
            "",
            String(data.get("message") || ""),
          ].join("\n"),
        );
        window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      }}
    >
      <h2 className="font-display text-3xl font-black tracking-[-0.03em] text-[#0B0F19]">
        {isZh ? "咨询" : "Inquiry"}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[#3a3a3a]">
        {isZh
          ? "提交您关于平台需求、OEM 开发或技术支持的咨询，我们通常会在一个工作日内回复。"
          : "Submit your inquiry about platform requirements, OEM development, or technical support. We typically reply within one business day."}
      </p>

      <div className="mt-10 space-y-1">
        <label className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
          {isZh ? "姓名" : "Name"}
          <input required type="text" name="name" className={fieldClassName} autoComplete="name" />
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
          {isZh ? "咨询类型" : "Inquiry type"}
          <select
            required
            name="inquiryType"
            className={`${fieldClassName} cursor-pointer appearance-none bg-transparent`}
            defaultValue=""
          >
            <option value="" disabled>
              {isZh ? "请选择" : "Select one"}
            </option>
            {contactInquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
          {isZh ? "留言" : "Message"}
          <textarea
            required
            name="message"
            rows={4}
            className={`${fieldClassName} resize-none`}
            placeholder={isZh ? "平台、功率等级、使用环境、时间要求…" : "Platform, power class, environment, timeline…"}
          />
        </label>
      </div>

      <button type="submit" className="btn-primary mt-10 inline-flex">
        {isZh ? "提交咨询" : "Submit Inquiry"} <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
