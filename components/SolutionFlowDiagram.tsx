type SolutionFlowDiagramProps = {
  steps: readonly string[];
  variant?: "horizontal" | "vertical";
  theme?: "default" | "abb";
};

export default function SolutionFlowDiagram({
  steps,
  variant = "horizontal",
  theme = "default",
}: SolutionFlowDiagramProps) {
  const isVertical = variant === "vertical";
  const isAbb = theme === "abb";
  const accentColor = isAbb ? "text-[#E2232A]" : "text-[#0B5FFF]";
  const stepBorder = isAbb ? "border-[#E2232A]/20" : "border-[#0B5FFF]/20";

  return (
    <div
      className={`rounded-sm p-6 md:p-8 ${
        isAbb ? "border border-slate-200 bg-[#F8FAFC]" : "rounded-2xl border border-slate-200 bg-[#F8FAFC]"
      }`}
      aria-label="Wireless charging workflow"
    >
      <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-[#0B0F19]">
        How It Works
      </h2>
      <ol
        className={`mt-6 ${
          isVertical
            ? "flex flex-col items-center gap-0"
            : "flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-0"
        }`}
      >
        {steps.map((step, index) => (
          <li
            key={step}
            className={`flex ${
              isVertical
                ? "w-full max-w-sm flex-col items-center"
                : "flex-1 flex-col items-center sm:flex-row"
            }`}
          >
            <div
              className={`w-full rounded-xl border bg-white px-4 py-3 text-center text-sm font-bold text-[#0B0F19] shadow-sm ${stepBorder}`}
            >
              {step}
            </div>
            {index < steps.length - 1 ? (
              <span
                className={`shrink-0 font-bold ${accentColor} ${
                  isVertical ? "my-2 text-xl" : "my-1 px-1.5 text-base sm:my-0"
                }`}
                aria-hidden="true"
              >
                {isVertical ? "↓" : (
                  <>
                    <span className="sm:hidden">↓</span>
                    <span className="hidden sm:inline">→</span>
                  </>
                )}
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
