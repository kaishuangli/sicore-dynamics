import { Orbitron } from "next/font/google";

const sectionLabelFont = Orbitron({
  subsets: ["latin"],
  weight: "800",
});

type SectionEyebrowProps = {
  children: React.ReactNode;
  bgClassName?: string;
  className?: string;
};

export default function SectionEyebrow({
  children,
  bgClassName = "bg-white",
  className = "",
}: SectionEyebrowProps) {
  return (
    <div className={`relative flex w-full items-center ${className}`}>
      <div
        className="eyebrow-bar absolute inset-x-0 top-1/2 h-8 -translate-y-1/2"
        aria-hidden="true"
      />
      <span
        className={`${sectionLabelFont.className} relative py-2 pr-8 text-lg font-extrabold uppercase tracking-[0.14em] text-[#0B5FFF] md:text-xl lg:text-2xl ${bgClassName}`}
      >
        {children}
      </span>
    </div>
  );
}
