import { aiPowerTopics, aiWorkflowSteps } from "@/lib/technology";

export default function TechAiPowerPanel() {
  return (
    <div className="bg-[#0B0F19] py-12 lg:py-16">
      <div className="container-page">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-400">
          AI Power Systems
        </p>
        <h2 className="font-display mt-3 text-2xl font-black tracking-[-0.03em] text-white md:text-3xl lg:text-4xl">
          AI-Powered Energy Management
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">
          AI-enabled power electronics with adaptive charging, monitoring, and energy optimization
          — helping OEM customers build smarter, more reliable intelligent machine platforms.
        </p>

        <div
          className="mt-12 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-8"
          aria-label="AI power workflow diagram"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
            AI Workflow
          </p>
          <div className="flex min-w-[640px] items-center justify-between gap-2">
            {aiWorkflowSteps.map((step, index) => (
              <div key={step} className="flex flex-1 items-center gap-2">
                <div className="flex-1 rounded-xl border border-cyan-400/20 bg-[#0B5FFF]/10 px-4 py-4 text-center">
                  <p className="text-xs font-bold text-cyan-300 md:text-sm">{step}</p>
                </div>
                {index < aiWorkflowSteps.length - 1 ? (
                  <span className="shrink-0 text-cyan-400/60" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiPowerTopics.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="font-display text-sm font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
