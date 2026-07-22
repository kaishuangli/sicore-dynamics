import type { LocalizedIndustry } from "@/lib/i18n/content";

export default function SolutionIntroBand({ industry }: { industry: LocalizedIndustry }) {
  return (
    <div className="solution-intro mx-auto mt-12 max-w-4xl text-center lg:mt-16" aria-label="Solution introduction">
      <h2 className="font-display text-[26px] font-bold leading-[1.32] tracking-[-0.01em] text-[#0B0F19] md:text-[30px] lg:text-[34px]">
        {industry.description}
      </h2>

      <p className="solution-page-copy mx-auto mt-8 max-w-[48rem] text-[17px] font-normal leading-[1.75] text-[#3a3a3a] md:mt-10">
        {industry.content.join(" ")}
      </p>
    </div>
  );
}
