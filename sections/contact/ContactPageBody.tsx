import Link from "next/link";
import ContactForm from "@/sections/contact/ContactForm";
import type { Locale } from "@/lib/i18n/config";
import { getContactBundle } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";
import { site } from "@/lib/site";

export default function ContactPageBody({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const { contactInfoSections } = getContactBundle(locale);

  return (
    <section className="lg:min-h-[calc(100vh-140px)]" aria-label="Contact">
      <div className="grid lg:min-h-[calc(100vh-140px)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden bg-[#071225] px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-14 xl:px-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(226,35,42,0.2),transparent_48%),linear-gradient(160deg,#071225_35%,#0c1a33_100%)]"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">
              {isZh ? "联系我们" : "Contact"}
            </p>
            <h1 className="font-display mt-4 max-w-lg text-3xl font-black leading-[1.08] tracking-[-0.03em] md:text-4xl lg:text-[44px]">
              {site.name}
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70 md:text-base">
              {isZh
                ? "为自主机器提供无线充电平台、OEM 集成与工程支持。"
                : "Wireless charging platforms, OEM integration, and engineering support for autonomous machines."}
            </p>

            <div className="mt-10 space-y-7">
              {contactInfoSections.map((section) => {
                const item = section.items[0];
                if (!item) return null;

                return (
                  <div key={section.title} className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#E2232A]">
                      {section.title}
                    </p>
                    {item.href ? (
                      item.href.startsWith("/") ? (
                        <Link
                          href={withLocale(item.href, locale)}
                          className="mt-2 inline-block text-sm font-semibold text-white transition hover:text-[#E2232A] md:text-base"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="mt-2 inline-block break-all text-sm font-semibold text-white transition hover:text-[#E2232A] md:text-base"
                          {...(item.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {item.value}
                        </a>
                      )
                    ) : (
                      <p className="mt-2 text-sm font-semibold leading-6 text-white/90 md:text-base">
                        {item.value}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-start bg-[#F4F5F7] px-6 py-12 sm:px-10 lg:sticky lg:top-[120px] lg:h-[calc(100vh-140px)] lg:overflow-y-auto lg:px-12 lg:py-14 xl:px-16">
          <div className="w-full max-w-xl lg:my-auto">
            <ContactForm locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
}
