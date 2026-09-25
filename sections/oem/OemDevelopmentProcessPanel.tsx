import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import { oemDevelopmentProcessPage as content } from "@/lib/oem-development-process";

type StepIcon = (typeof content.steps.items)[number]["icon"];

function StepIconMark({ type }: { type: StepIcon }) {
  const common = "h-10 w-10 stroke-[#0B5FFF]";

  if (type === "clipboard") {
    return (
      <svg viewBox="0 0 40 40" fill="none" className={common} aria-hidden="true">
        <rect x="11" y="10" width="18" height="22" rx="2" strokeWidth="1.8" />
        <path d="M15 10V8.5a2.5 2.5 0 0 1 2.5-2.5h5A2.5 2.5 0 0 1 25 8.5V10" strokeWidth="1.8" />
        <path d="M16 18h8M16 23h8M16 28h5" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "puzzle") {
    return (
      <svg viewBox="0 0 40 40" fill="none" className={common} aria-hidden="true">
        <path
          strokeWidth="1.8"
          strokeLinejoin="round"
          d="M12 14h6v-2.5a3 3 0 1 1 6 0V14h4v6h2.5a3 3 0 1 1 0 6H28v4H12V14Z"
        />
      </svg>
    );
  }

  if (type === "gear") {
    return (
      <svg viewBox="0 0 40 40" fill="none" className={common} aria-hidden="true">
        <circle cx="20" cy="20" r="4.5" strokeWidth="1.8" />
        <path
          strokeWidth="1.8"
          strokeLinejoin="round"
          d="M20 8.5v3M20 28.5v3M8.5 20h3M28.5 20h3M11.5 11.5l2.1 2.1M26.4 26.4l2.1 2.1M28.5 11.5l-2.1 2.1M13.6 26.4l-2.1 2.1"
        />
        <circle cx="20" cy="20" r="11" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === "flask") {
    return (
      <svg viewBox="0 0 40 40" fill="none" className={common} aria-hidden="true">
        <path
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 8h8M18 8v8l-6.5 11.5A3 3 0 0 0 14.1 32h11.8a3 3 0 0 0 2.6-4.5L22 16V8"
        />
        <path d="M14 24h12" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "link") {
    return (
      <svg viewBox="0 0 40 40" fill="none" className={common} aria-hidden="true">
        <path
          strokeWidth="1.8"
          strokeLinecap="round"
          d="M17 23a6 6 0 0 1 0-8.5l3.5-3.5a6 6 0 0 1 8.5 8.5L26 22"
        />
        <path
          strokeWidth="1.8"
          strokeLinecap="round"
          d="M23 17a6 6 0 0 1 0 8.5L19.5 29a6 6 0 1 1-8.5-8.5L14 18"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" fill="none" className={common} aria-hidden="true">
      <path
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 28V16l8-8 8 8v12"
      />
      <path strokeWidth="1.8" strokeLinecap="round" d="M16 28v-6h8v6" />
      <path strokeWidth="1.8" strokeLinecap="round" d="m20 8 2 5h-4l2-5Z" />
    </svg>
  );
}

export default function OemDevelopmentProcessPanel({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="oem-process-heading">
        <div className="absolute inset-0">
          <Image
            src={content.heroImage}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={95}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071225]/96 via-[#071225]/84 to-[#071225]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/75 via-transparent to-[#071225]/30" />
        </div>

        <div className="container-page relative pb-16 pt-10 lg:pb-24 lg:pt-14">
          <nav className="text-xs text-white/70" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={L("/")} className="transition hover:text-white">
                  {t("首页", "Inicio", "Home")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={L("/oem/why-sicore")} className="transition hover:text-white">
                  {dict.nav.oem}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-white">
                {dict.navOem["development-process"]}
              </li>
            </ol>
          </nav>

          <div className="mt-10 max-w-3xl animate-fade-up">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-300/90">
              {content.eyebrow}
            </p>
            <h1
              id="oem-process-heading"
              className="font-display mt-4 text-[34px] font-black leading-[1.06] tracking-[-0.04em] text-white md:text-[48px] lg:text-[52px]"
            >
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-100 md:text-xl">
              {content.subtitle}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              {content.description}
            </p>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.14em] text-[#86efac] md:text-[15px]">
              {content.promise}
            </p>
          </div>
        </div>
      </section>

      {/* Process flowchart — primary visual */}
      <section
        className="border-b border-slate-200/70 bg-[#F8FAFC] py-16 lg:py-20"
        aria-labelledby="oem-flow-heading"
      >
        <div className="container-page">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.flow.eyebrow}
            </p>
            <h2
              id="oem-flow-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
            >
              {content.flow.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">{content.flow.lead}</p>
          </header>

          <ol className="mx-auto mt-12 flex max-w-xl flex-col items-center">
            {content.flow.nodes.map((node, index) => {
              const isFirst = index === 0;
              const isLast = index === content.flow.nodes.length - 1;

              return (
                <li key={node} className="flex w-full flex-col items-center">
                  <div
                    className={`w-full max-w-sm border px-5 py-4 text-center ${
                      isFirst || isLast
                        ? "border-[#0B5FFF] bg-[#0B5FFF] text-white"
                        : "border-slate-200 bg-white text-[#0B0F19]"
                    }`}
                  >
                    <p className="font-display text-sm font-extrabold tracking-[-0.02em] md:text-base">
                      {node}
                    </p>
                  </div>
                  {!isLast ? (
                    <div className="flex flex-col items-center py-1" aria-hidden="true">
                      <span className="h-5 w-px bg-slate-300" />
                      <span className="text-slate-400">▼</span>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Six steps */}
      <section
        className="border-b border-slate-200/70 bg-white py-16 lg:py-24"
        aria-labelledby="oem-steps-heading"
      >
        <div className="container-page">
          <header className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.steps.eyebrow}
            </p>
            <h2
              id="oem-steps-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
            >
              {content.steps.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{content.steps.lead}</p>
          </header>

          <div className="mt-14 space-y-8">
            {content.steps.items.map((step) => (
              <article
                key={step.id}
                id={step.id}
                className="scroll-mt-[190px] border border-slate-200 bg-[#F8FAFC] p-6 md:p-8 lg:p-10"
              >
                <div className="flex flex-wrap items-start gap-4">
                  <StepIconMark type={step.icon} />
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-xs font-bold tabular-nums text-[#0B5FFF]">
                      Step {step.number}
                    </p>
                    <h3 className="font-display mt-2 text-2xl font-extrabold tracking-[-0.03em] text-[#0B0F19] md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-slate-800">{step.headline}</p>
                    <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{step.intro}</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
                      Scope
                    </p>
                    <ul className="mt-4 space-y-2">
                      {step.topics.map((topic) => (
                        <li key={topic} className="flex gap-2.5 text-sm leading-6 text-slate-700">
                          <span
                            className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B5FFF]"
                            aria-hidden="true"
                          />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-slate-200 bg-white p-5 md:p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0B5FFF]">
                      Deliverables
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {step.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 border-b border-slate-100 pb-2.5 text-sm font-semibold text-slate-800 last:border-b-0 last:pb-0"
                        >
                          <span className="text-[#0B5FFF]" aria-hidden="true">
                            →
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section
        className="border-b border-slate-200/70 bg-[#F8FAFC] py-16 lg:py-24"
        aria-labelledby="oem-deliver-heading"
      >
        <div className="container-page">
          <header className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.deliver.eyebrow}
            </p>
            <h2
              id="oem-deliver-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
            >
              {content.deliver.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{content.deliver.lead}</p>
          </header>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.deliver.items.map((item, index) => (
              <li
                key={item.title}
                className="border border-slate-200 bg-white p-6"
              >
                <p className="font-display text-xs font-bold tabular-nums text-[#0B5FFF]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-3 text-lg font-extrabold text-[#0B0F19]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Roles */}
      <section
        className="border-b border-slate-200/70 bg-white py-16 lg:py-24"
        aria-labelledby="oem-roles-heading"
      >
        <div className="container-page">
          <header className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B5FFF]">
              {content.roles.eyebrow}
            </p>
            <h2
              id="oem-roles-heading"
              className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-[#0B0F19] md:text-4xl"
            >
              {content.roles.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{content.roles.lead}</p>
          </header>

          <div className="mt-12 overflow-x-auto border border-slate-200">
            <table className="min-w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#071225] text-white">
                  <th className="px-5 py-4 font-display text-sm font-extrabold md:px-6 md:text-base">
                    {content.roles.yourLabel}
                  </th>
                  <th className="px-5 py-4 font-display text-sm font-extrabold md:px-6 md:text-base">
                    {content.roles.ourLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.roles.rows.map((row, index) => (
                  <tr
                    key={`${row.yours}-${row.ours}`}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
                  >
                    <td className="border-t border-slate-200 px-5 py-4 text-sm font-semibold text-slate-800 md:px-6 md:text-base">
                      {row.yours}
                    </td>
                    <td className="border-t border-slate-200 px-5 py-4 text-sm font-semibold text-[#0B5FFF] md:px-6 md:text-base">
                      {row.ours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071225] py-16 text-white lg:py-20" aria-labelledby="oem-process-close">
        <div className="container-page max-w-3xl">
          <h2
            id="oem-process-close"
            className="font-display text-2xl font-black tracking-[-0.03em] md:text-4xl"
          >
            {content.close.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{content.close.body}</p>
          <Link href={L(content.close.cta.href)} className="btn-primary mt-10 inline-flex">
            {t("启动您的 OEM 项目", "Inicie su proyecto OEM", content.close.cta.label)}{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
