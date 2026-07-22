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
        src="/images/sicore-logo-transparent.png"
        alt="SiCore Dynamics"
        width={865}
        height={840}
        priority={variant === "light"}
        className="h-[84px] w-auto object-contain object-left md:h-[96px] lg:h-[112px]"
      />
    </span>
  );
}
