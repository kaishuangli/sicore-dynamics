import SolutionFlowDiagram from "@/components/SolutionFlowDiagram";
import type { Industry } from "@/lib/industries";

export default function SolutionFlowBand({ industry }: { industry: Industry }) {
  if (!("flowSteps" in industry) || !industry.flowSteps?.length) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 bg-white" aria-labelledby="solution-flow-heading">
      <div className="container-page py-14 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="solution-abb-accent" aria-hidden="true" />
            <h2
              id="solution-flow-heading"
              className="font-display mt-6 text-2xl font-bold leading-snug tracking-[-0.02em] text-[#0B0F19] md:text-[28px]"
            >
              How AGV & AMR wireless charging works
            </h2>
            <p className="mt-6 text-base leading-[1.75] text-[#3a3a3a] md:text-[17px]">
              Autonomous vehicles navigate to a charging zone, receive contactless power during idle
              windows, and return to logistics routes without manual connector handling or precision
              mechanical docking.
            </p>
          </div>

          <SolutionFlowDiagram steps={industry.flowSteps} variant="horizontal" theme="abb" />
        </div>
      </div>
    </section>
  );
}
