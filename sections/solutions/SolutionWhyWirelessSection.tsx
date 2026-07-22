import Image from "next/image";
import type { IndustryId } from "@/lib/industries";
import type { WhyWirelessRow } from "@/lib/solution-why-wireless";
import type { Locale } from "@/lib/i18n/config";
import { getSolutionWhyWirelessForIndustry } from "@/lib/i18n/content";

function PrincipleVisual({
  steps,
}: {
  steps: readonly { label: string; detail: string }[];
}) {
  return (
    <div
      className="rounded-sm border border-slate-200 bg-[#F8FAFC] p-6 md:p-8"
      aria-label="Wireless charging principle"
    >
      <ol className="space-y-0">
        {steps.map((step, index) => (
          <li key={step.label} className="relative flex gap-4 pb-8 last:pb-0">
            {index < steps.length - 1 ? (
              <span
                className="absolute left-[15px] top-8 h-[calc(100%-8px)] w-px bg-[#E2232A]/35"
                aria-hidden="true"
              />
            ) : null}

            <span
              className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#E2232A] bg-white text-xs font-bold text-[#E2232A]"
              aria-hidden="true"
            >
              {index + 1}
            </span>

            <div>
              <p className="font-display text-lg font-bold text-[#0B0F19]">{step.label}</p>
              <p className="mt-2 text-sm leading-6 text-[#3a3a3a] md:text-base md:leading-7">
                {step.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function AnalysisVisual({ row }: { row: WhyWirelessRow }) {
  const { visual } = row;

  if (visual.type === "image") {
    return (
      <div className="relative mx-auto h-80 w-full max-w-2xl overflow-hidden bg-[#F8FAFC] md:h-[22rem] lg:max-w-none">
        <Image src={visual.src} alt={visual.alt} fill className="object-cover" />
      </div>
    );
  }

  return <PrincipleVisual steps={visual.steps} />;
}

function AnalysisCopy({ row }: { row: WhyWirelessRow }) {
  return (
    <div>
      <h3 className="font-display text-2xl font-bold leading-[1.25] tracking-[-0.02em] text-[#0B0F19] md:text-[28px] lg:text-[32px]">
        {row.title}
      </h3>
      <div className="mt-6 space-y-5 text-base leading-[1.75] text-[#3a3a3a] md:text-[17px]">
        {row.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default function SolutionWhyWirelessSection({
  industryId,
  locale,
}: {
  industryId: IndustryId;
  locale: Locale;
}) {
  const analysis = getSolutionWhyWirelessForIndustry(industryId, locale);

  return (
    <section className="border-t border-slate-200 bg-white" aria-label="Why wireless charging">
      {analysis.rows.map((row, index) => {
        const reversed = index % 2 === 1;

        return (
          <article key={row.title} className={index > 0 ? "border-t border-slate-200" : ""}>
            <div className="container-page py-14 lg:py-20">
              <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={reversed ? "lg:order-2" : ""}>
                  <AnalysisVisual row={row} />
                </div>
                <div className={reversed ? "lg:order-1" : ""}>
                  <AnalysisCopy row={row} />
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
