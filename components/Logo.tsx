import Image from "next/image";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <span
      className={`inline-flex items-center ${
        isDark ? "rounded-lg bg-white px-3 py-2" : ""
      } ${className}`}
    >
      <Image
        src="/images/sicore-logo.png"
        alt="SiCore Dynamics"
        width={1024}
        height={682}
        priority={variant === "light"}
        className="h-[108px] w-auto object-contain object-left md:h-[124px] lg:h-[140px]"
      />
    </span>
  );
}
