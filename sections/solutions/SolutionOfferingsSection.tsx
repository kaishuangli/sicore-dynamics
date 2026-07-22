import Image from "next/image";
import Link from "next/link";
import SolutionFlowDiagram from "@/components/SolutionFlowDiagram";
import type { Industry } from "@/lib/industries";

export default function SolutionOfferingsSection({ industry }: { industry: Industry }) {
  return (
    <section className="bg-white" aria-label="Application scenarios">
      {industry.useCases.map((useCase, index) => {
        const reversed = index % 2 === 1;

        return (
          <article key={useCase.title} className="border-t border-slate-200">
            <div className="container-page">
              <div className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
                <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
                  <div className="relative mx-auto h-[22rem] w-full max-w-2xl bg-[#F8FAFC] lg:mx-0 lg:h-[26rem] lg:max-w-none">
                    <Image
                      src={useCase.image}
                      alt={useCase.alt}
                      fill
                      className={
                        useCase.image.endsWith(".png")
                          ? "object-contain p-8 lg:p-12"
                          : "object-cover"
                      }
                    />
                  </div>
                </div>

                <div className={reversed ? "lg:order-1" : ""}>
                  <h3 className="font-display text-2xl font-black leading-snug tracking-[-0.02em] text-[#0B0F19] md:text-3xl">
                    {useCase.title}
                  </h3>
                  <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg md:leading-9">
                    {useCase.description}
                  </p>
                  <Link
                    href="/contact"
                    className="solution-abb-link mt-8 inline-flex items-center gap-2 text-sm font-bold md:text-base"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        );
      })}

      {"flowSteps" in industry && industry.flowSteps ? (
        <article className="border-t border-slate-200">
          <div className="container-page py-14 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="font-display text-2xl font-black tracking-[-0.02em] text-[#0B0F19] md:text-3xl">
                  How Wireless Charging Works
                </h3>
                <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg md:leading-9">
                  Autonomous vehicles dock at charging stations for contactless power transfer,
                  then return to operation without manual connector handling.
                </p>
              </div>
              <SolutionFlowDiagram steps={industry.flowSteps} variant="vertical" />
            </div>
          </div>
        </article>
      ) : null}
    </section>
  );
}
