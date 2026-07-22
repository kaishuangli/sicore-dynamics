import type { ReactNode } from "react";

type TechIconProps = {
  type: string;
  className?: string;
};

export default function TechIcon({ type, className = "h-10 w-10" }: TechIconProps) {
  const stroke = "stroke-[#0B5FFF]";

  const icons: Record<string, ReactNode> = {
    wireless: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" strokeLinecap="round" d="M18 18a9 9 0 0 0 0 12M13 13a16 16 0 0 0 0 22M30 18a9 9 0 0 1 0 12M35 13a16 16 0 0 1 0 22" />
        <circle cx="24" cy="24" r="3" fill="#0B5FFF" />
      </svg>
    ),
    station: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <rect x="10" y="28" width="28" height="7" rx="2" className={stroke} strokeWidth="2.5" />
        <path className={stroke} strokeWidth="2.5" d="M18 28V20a6 6 0 0 1 12 0v8" />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <rect x="13" y="13" width="22" height="22" rx="2" className={stroke} strokeWidth="2.5" />
        <path className={stroke} strokeWidth="2.5" d="M18 4v6m12-6v6M18 38v6m12-6v6M4 18h6m-6 12h6m28-12h6m-6 12h6" />
      </svg>
    ),
    power: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" strokeLinejoin="round" d="m27 4-15 22h12l-2 18 16-24H27l2-16Z" />
      </svg>
    ),
    bolt: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" strokeLinejoin="round" d="m27 4-15 22h12l-2 18 16-24H27l2-16Z" />
      </svg>
    ),
    chip: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <rect x="14" y="14" width="20" height="20" rx="2" className={stroke} strokeWidth="2.5" />
        <path className={stroke} strokeWidth="2.5" d="M18 6v6m12-6v6M18 36v6m12-6v6M6 18h6m-6 12h6m30-12h6m-6 12h6" />
      </svg>
    ),
    coil: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <ellipse cx="24" cy="24" rx="14" ry="8" className={stroke} strokeWidth="2.5" />
        <ellipse cx="24" cy="24" rx="8" ry="14" className={stroke} strokeWidth="2.5" />
      </svg>
    ),
    thermal: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" strokeLinecap="round" d="M24 8v24M18 14l6-6 6 6M18 34l6 6 6-6" />
      </svg>
    ),
    emc: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" d="M8 24h32M24 8v32" />
        <circle cx="24" cy="24" r="10" className={stroke} strokeWidth="2.5" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" d="M24 6 38 12v12c0 9-6 14-14 17C16 38 10 33 10 24V12l14-6Z" />
      </svg>
    ),
    comm: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <rect x="8" y="14" width="32" height="20" rx="3" className={stroke} strokeWidth="2.5" />
        <path className={stroke} strokeWidth="2.5" d="M16 24h4m8 0h4m-10 6h6" />
      </svg>
    ),
    firmware: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" strokeLinecap="round" d="M14 12h20v24H14zM18 18h12M18 24h8M18 30h10" />
      </svg>
    ),
  };

  return icons[type] ?? icons.chip;
}
