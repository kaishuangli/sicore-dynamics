"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Children, Fragment } from "react";
import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { getProduct60w } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";
import { site } from "@/lib/site";

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-3xl font-bold text-[#0B0F19] md:text-4xl">{children}</h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-[#0B5FFF]" aria-hidden="true" />
    </div>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B5FFF]">{children}</p>
  );
}

type StealthProductCardProps = {
  name: string;
  distance: string;
  specs: readonly string[];
  image: string;
  imageAlt: string;
  footnote?: string | null;
  badge?: string | null;
  showActions?: boolean;
  isZh: boolean;
};

function StealthProductCard({
  name,
  distance,
  specs,
  image,
  imageAlt,
  footnote,
  badge,
  showActions = true,
  isZh,
}: StealthProductCardProps) {
  return (
    <article className="stealth-product-row">
      <div className="stealth-product-card-media">
        <div className="stealth-product-card-media-frame">
          <Image src={image} alt={imageAlt} fill className="object-contain" sizes="(max-width: 768px) 100vw, 340px" />
        </div>
      </div>

      <div className="stealth-product-card">
        {badge ? <span className="stealth-product-card-badge">{badge}</span> : null}
        <div className="stealth-product-card-body">
          <h3 className="stealth-product-card-title font-display">{name}</h3>
          <p className="stealth-product-card-subtitle">{distance}</p>
          {footnote ? <p className="stealth-product-card-footnote">{footnote}</p> : null}
          <ul className="stealth-product-card-specs">
            {specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
          {showActions ? (
            <div className="stealth-product-card-actions">
              <Link href="#bulk-order" className="stealth-product-card-primary">
                {isZh ? "立即购买" : "Buy Now"}
              </Link>
              <Link href={withLocale("/contact", isZh ? "zh" : "en")} className="stealth-product-card-secondary">
                {isZh ? "申请批量报价" : "request bulk price"}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function StealthProductStack({ children }: { children: ReactNode }) {
  const items = Children.toArray(children);

  return (
    <div className="stealth-product-stack">
      {items.map((child, index) => (
        <Fragment key={(child as { key?: string | number }).key ?? index}>
          {index > 0 ? <div className="stealth-product-stack-divider" aria-hidden="true" /> : null}
          {child}
        </Fragment>
      ))}
    </div>
  );
}

function StealthHero({
  content,
  locale,
}: {
  content: ReturnType<typeof getProduct60w>["stealth60wHero"];
  locale: Locale;
}) {
  const isZh = locale === "zh";
  const L = (href: string) => withLocale(href, locale);

  return (
    <section className="stealth-hero bg-[#071225] py-14 text-white lg:py-20">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#38bdf8]">{content.eyebrow}</p>
          <h1 className="font-display mt-4 text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl lg:text-[56px]">
            {content.title}
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">{content.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#bulk-order" className="btn-primary">
              {isZh ? "立即购买" : "Buy NOW"}
            </Link>
            <Link href={L("/download")} className="btn-ghost border-white/25 bg-white/5 text-white hover:border-white/50">
              {isZh ? "查看宣传册" : "view brochure"}
            </Link>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-2xl bg-[#071225]">
          <Image src={content.image} alt={content.imageAlt} fill className="object-contain" priority />
        </div>
      </div>
    </section>
  );
}

function StealthBenefitsIntro({ isZh }: { isZh: boolean }) {
  if (isZh) {
    return (
      <p className="stealth-benefits-intro mx-auto mt-8 max-w-5xl text-center text-[15px] leading-8 text-[#1a1a1a] md:text-base">
        我们突破性的<strong>磁共振无线充电技术</strong>可靠、安全且高效。您知道吗？SiCore Dynamics 的
        <strong>隐形无线充电器</strong>（也称为<strong>隐藏式 Qi 充电器</strong>）能出色支持所有 iPhone 12、iPhone 13
        与 iPhone 14 系列机型？我们相信它可能是当今市场上<strong>最好的桌下手机无线充电器</strong>。在同类长距离
        /远距离桌下无线充电器中，我们拥有最高的充电效率，这意味着更少的功率损耗与更低的发热。请继续阅读，了解为何选择
        SiCore Dynamics 的<strong>隐形无线充电器</strong>是明智之选。
      </p>
    );
  }

  return (
    <p className="stealth-benefits-intro mx-auto mt-8 max-w-5xl text-center text-[15px] leading-8 text-[#1a1a1a] md:text-base">
      Our breakthrough <strong>magnetic resonance wireless technology</strong> is reliable, safe, and efficient. Did you
      know the SiCore Dynamics <strong>Stealth Wireless Charger</strong>, or simply <strong>hidden Qi charger</strong>,
      provides excellent support to all iPhone 12, iPhone 13 and iPhone 14 series? We believe it is probably the{" "}
      <strong>best under desk mobile phone wireless charger</strong> on the market today. We have the best charging
      efficiency among long-distance/long range under counter wireless chargers for smart phones. That means less power
      loss and less heating. Read here to find out why a switch to an <strong>invisible wireless charger</strong> from
      SiCore Dynamics is a good choice.
    </p>
  );
}

function StealthBenefitVisual({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="stealth-benefit-visual stealth-benefit-visual--fill">
      <Image src={image} alt={alt} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 42vw" />
    </div>
  );
}

function StealthBenefits({
  benefitTabs,
  benefitsIntro,
  isZh,
}: {
  benefitTabs: ReturnType<typeof getProduct60w>["stealth60wBenefitTabs"];
  benefitsIntro: ReturnType<typeof getProduct60w>["stealth60wBenefitsIntro"];
  isZh: boolean;
}) {
  const [activeTab, setActiveTab] = useState<(typeof benefitTabs)[number]["id"]>("safe");
  const tab = benefitTabs.find((item) => item.id === activeTab) ?? benefitTabs[0];

  return (
    <section className="stealth-benefits bg-white py-16 lg:py-20">
      <div className="container-page">
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#0B5FFF]">
          {benefitsIntro.eyebrow}
        </p>
        <h2 className="font-display mx-auto mt-4 max-w-5xl text-center text-[30px] font-bold leading-tight text-[#1a1a1a] md:text-[38px] lg:text-[42px]">
          {benefitsIntro.title}
        </h2>
        <StealthBenefitsIntro isZh={isZh} />

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {benefitTabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`stealth-benefits-tab ${activeTab === item.id ? "stealth-benefits-tab-active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="stealth-benefits-panel mt-8 grid gap-0 lg:grid-cols-[42%_58%]">
          <StealthBenefitVisual image={tab.image} alt={tab.title} />

          <div className="stealth-benefits-copy px-6 py-10 md:px-10 md:py-12 lg:px-12">
            <h3 className="text-[22px] font-bold text-[#1a1a1a] md:text-2xl">{tab.title}</h3>
            <p className="mt-5 text-[15px] leading-8 text-[#1a1a1a] md:text-base">{tab.intro}</p>

            {"points" in tab && tab.points ? (
              <div className="mt-6 space-y-6">
                {tab.points.map((point) => (
                  <div key={point.title}>
                    <h4 className="text-base font-bold text-[#1a1a1a]">{point.title}</h4>
                    <p className="mt-2 text-[15px] leading-8 text-[#1a1a1a] md:text-base">{point.detail}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {"surfaces" in tab && tab.surfaces ? (
              <div className="mt-6">
                <p className="text-[15px] font-semibold text-[#1a1a1a] md:text-base">
                  {isZh
                    ? "这款隐形无线充电器可透过以下非金属材质表面充电："
                    : "The invisible wireless charger charges through any non-metallic surfaces:"}
                </p>
                <ul className="mt-4 space-y-2">
                  {tab.surfaces.map((surface) => (
                    <li key={surface} className="flex items-center gap-2 text-[15px] text-[#1a1a1a] md:text-base">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1a1a1a]" aria-hidden="true" />
                      {surface}
                    </li>
                  ))}
                </ul>
                {"outro" in tab && tab.outro ? (
                  <p className="mt-6 text-[15px] leading-8 text-[#1a1a1a] md:text-base">{tab.outro}</p>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function StealthModels({
  content,
  isZh,
}: {
  content: ReturnType<typeof getProduct60w>["stealth60wModels"];
  isZh: boolean;
}) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-page">
        <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
        <h2 className="font-display mt-4 text-3xl font-bold text-[#0B0F19] md:text-4xl">{content.title}</h2>
        <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600">{content.intro}</p>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{content.note}</p>

        <div className="mt-12">
          <StealthProductStack>
            {content.items.map((model) => (
            <StealthProductCard
              key={model.id}
              name={model.name}
              distance={model.distance}
              footnote={model.footnote}
              specs={model.specs}
              image={model.image}
              imageAlt={model.imageAlt}
              badge={model.badge}
              isZh={isZh}
            />
          ))}
          </StealthProductStack>
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ type }: { type: string }) {
  const common = "h-8 w-8 text-[#0B5FFF]";

  if (type === "efficiency") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <path d="M6 22c4-8 8-12 10-12s6 4 10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 10c3 2 5 5 8 12M24 10c-3 2-5 5-8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "safe") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <path d="M16 4 26 8v8c0 6-4.5 10.5-10 12-5.5-1.5-10-6-10-12V8l10-4Z" stroke="currentColor" strokeWidth="2" />
        <path d="M16 11v6M16 21h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "alignment") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <circle cx="11" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="21" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M11 16h10" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "thermal") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
        <path d="M16 5v14.5a4.5 4.5 0 1 0 0 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 12h3M16 8h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" fill="none" className={common} aria-hidden="true">
      <rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M10 14h12M10 18h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function StealthKeyFeatures({
  features,
  isZh,
}: {
  features: ReturnType<typeof getProduct60w>["stealth60wFeatures"];
  isZh: boolean;
}) {
  return (
    <section className="bg-[#F8FAFC] py-16 lg:py-20">
      <div className="container-page">
        <h2 className="font-display text-center text-3xl font-bold text-[#0B0F19] md:text-4xl">
          {isZh ? "核心特性" : "Key Features"}
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="text-center lg:text-left">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF] lg:mx-0">
                <FeatureIcon type={feature.icon} />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#0B0F19]">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StealthModuleDiagram({ isZh }: { isZh: boolean }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
        {isZh ? "模块外形图" : "Module Outline"}
      </p>
      <div className="mt-6 space-y-8">
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">{isZh ? "俯视图" : "Top View"}</p>
          <div className="relative aspect-[120/90] w-full overflow-hidden rounded-xl bg-[#0B0F19]">
            <Image
              src="/images/stealth-60w-pcb-top.png"
              alt="60W wireless charging module top view, 120mm x 90mm"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">{isZh ? "侧视图" : "Side View"}</p>
          <div className="relative aspect-[320/140] w-full overflow-hidden rounded-xl bg-[#0B0F19]">
            <Image
              src="/images/stealth-60w-pcb-side.png"
              alt="60W wireless charging module side view, 26.5mm height"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-slate-700">
            {isZh ? "发射与接收线圈" : "Transmitter & Receiver Coils"}
          </p>
          <div className="overflow-hidden rounded-xl bg-[#0B0F19]">
            <Image
              src="/images/product-coils.png"
              alt="60W transmitter and receiver coils"
              width={960}
              height={540}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StealthSpecs({
  specs,
  locale,
}: {
  specs: ReturnType<typeof getProduct60w>["stealth60wSpecs"];
  locale: Locale;
}) {
  const isZh = locale === "zh";
  const L = (href: string) => withLocale(href, locale);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-page">
        <SectionTitle>{isZh ? "技术规格" : "Technical Specifications"}</SectionTitle>
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <tbody>
                  {specs.map((spec, index) => (
                    <tr key={spec.label} className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                      <th className="w-[48%] px-5 py-3 font-semibold text-slate-700">{spec.label}</th>
                      <td className="px-5 py-3 text-slate-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={L("/download")}
                className="inline-flex items-center gap-2 rounded-md bg-[#0B5FFF] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600"
              >
                {isZh ? "下载数据表" : "Download Datasheet"}
              </Link>
              <Link
                href={L("/contact")}
                className="inline-flex items-center gap-2 rounded-md border border-[#0B5FFF] px-5 py-3 text-sm font-bold text-[#0B5FFF] transition hover:bg-[#EFF6FF]"
              >
                {isZh ? "联系工程团队" : "Contact Engineering"}
              </Link>
            </div>
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-slate-700">
                {isZh ? "线圈工艺" : "Coil Craftsmanship"}
              </p>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#0B0F19]">
                <Image
                  src="/images/stealth-60w-coil-craft.png"
                  alt="60W module bottom view and application coil receiver side"
                  width={960}
                  height={540}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          <StealthModuleDiagram isZh={isZh} />
        </div>
      </div>
    </section>
  );
}

function StealthApplications({
  content,
  isZh,
}: {
  content: ReturnType<typeof getProduct60w>["stealth60wApplications"];
  isZh: boolean;
}) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-page">
        <h2 className="font-display text-center text-3xl font-bold text-[#0B0F19] md:text-4xl">
          {isZh ? "应用场景" : "Applications"}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-8 text-slate-600">{content.intro}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/11] bg-[#0f172a]">
                <Image src={item.image} alt={item.imageAlt} fill className="object-contain" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#0B5FFF]">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StealthBulkOrder({
  content,
  isZh,
}: {
  content: ReturnType<typeof getProduct60w>["stealth60wBulkOrder"];
  isZh: boolean;
}) {
  return (
    <section id="bulk-order" className="scroll-mt-[190px] bg-[#f8fafc] py-16 lg:py-24">
      <div className="container-page max-w-3xl">
        <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
        <h2 className="font-display mt-4 text-3xl font-bold text-[#0f172a] md:text-4xl">{content.title}</h2>
        <p className="mt-6 text-base leading-8 text-slate-600">{content.description}</p>

        <form
          className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href = `mailto:${site.email}`;
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-slate-700">
              {isZh ? "名" : "First Name"}
              <input required type="text" name="firstName" className="stealth-input mt-2" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">
              {isZh ? "姓" : "Last Name"}
              <input required type="text" name="lastName" className="stealth-input mt-2" />
            </label>
          </div>
          <label className="mt-4 block text-sm font-semibold text-slate-700">
            {isZh ? "邮箱" : "Email"}
            <input required type="email" name="email" className="stealth-input mt-2" />
          </label>
          <label className="mt-4 block text-sm font-semibold text-slate-700">
            {isZh ? "电话号码" : "Phone Number"}
            <input type="tel" name="phone" className="stealth-input mt-2" />
          </label>
          <label className="mt-4 block text-sm font-semibold text-slate-700">
            {isZh ? "留言" : "Message"}
            <textarea required name="message" rows={5} className="stealth-input mt-2 resize-y" />
          </label>
          <button type="submit" className="btn-primary mt-6 w-full justify-center">
            {isZh ? "发送" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default function Stealth60wProductPage({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const content = getProduct60w(locale);

  return (
    <main className="stealth-product-page">
      <StealthHero content={content.stealth60wHero} locale={locale} />
      <StealthSpecs specs={content.stealth60wSpecs} locale={locale} />
      <StealthBenefits
        benefitTabs={content.stealth60wBenefitTabs}
        benefitsIntro={content.stealth60wBenefitsIntro}
        isZh={isZh}
      />
      <StealthModels content={content.stealth60wModels} isZh={isZh} />
      <StealthKeyFeatures features={content.stealth60wFeatures} isZh={isZh} />
      <StealthApplications content={content.stealth60wApplications} isZh={isZh} />
      <StealthBulkOrder content={content.stealth60wBulkOrder} isZh={isZh} />
    </main>
  );
}
