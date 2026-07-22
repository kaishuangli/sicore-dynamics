import SectionEyebrow from "@/components/SectionEyebrow";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  bgClassName?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  bgClassName = "bg-white",
}: PageHeaderProps) {
  return (
    <div className={`relative overflow-hidden border-b border-slate-200/80 py-12 mesh-bg-subtle lg:py-16 ${bgClassName}`}>
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="container-page relative">
        <SectionEyebrow bgClassName={bgClassName}>{eyebrow}</SectionEyebrow>
        <h1 className="font-display mt-4 max-w-4xl text-2xl font-black tracking-[-0.03em] text-slate-950 md:text-3xl lg:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
