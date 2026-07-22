import type { ReactNode } from "react";

type KnowledgeIconProps = {
  type: string;
  className?: string;
};

export default function KnowledgeIcon({ type, className = "h-8 w-8" }: KnowledgeIconProps) {
  const stroke = "stroke-current";

  const icons: Record<string, ReactNode> = {
    fundamentals: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" d="M10 12h28v28H10z" />
        <path className={stroke} strokeWidth="2.5" d="M16 8h16v6H16z" />
        <path className={stroke} strokeWidth="2.5" strokeLinecap="round" d="M16 20h16M16 28h12" />
      </svg>
    ),
    resonant: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" strokeLinecap="round" d="M10 24a14 14 0 0 1 28 0" />
        <path className={stroke} strokeWidth="2.5" strokeLinecap="round" d="M16 24a8 8 0 0 1 16 0" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </svg>
    ),
    coil: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <ellipse cx="24" cy="24" rx="14" ry="8" className={stroke} strokeWidth="2.5" />
        <path className={stroke} strokeWidth="2.5" d="M10 24c0 8 6 14 14 14s14-6 14-14" />
        <path className={stroke} strokeWidth="2.5" d="M10 24c0-8 6-14 14-14s14 6 14 14" />
      </svg>
    ),
    power: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" strokeLinejoin="round" d="M26 8 14 26h10l-2 14 16-22H28l-2-10Z" />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <rect x="13" y="13" width="22" height="22" rx="2" className={stroke} strokeWidth="2.5" />
        <path className={stroke} strokeWidth="2.5" d="M18 4v6m12-6v6M18 38v6m12-6v6M4 18h6m-6 12h6m28-12h6m-6 12h6" />
      </svg>
    ),
    station: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <rect x="10" y="28" width="28" height="7" rx="2" className={stroke} strokeWidth="2.5" />
        <path className={stroke} strokeWidth="2.5" d="M18 28V20a6 6 0 0 1 12 0v8" />
      </svg>
    ),
    battery: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <rect x="10" y="16" width="28" height="18" rx="3" className={stroke} strokeWidth="2.5" />
        <path className={stroke} strokeWidth="2.5" d="M18 16v-4h12v4" />
        <path className={stroke} strokeWidth="2.5" strokeLinecap="round" d="M18 25h12" />
      </svg>
    ),
    communication: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="14" cy="34" r="3" className={stroke} strokeWidth="2.5" />
        <circle cx="34" cy="14" r="3" className={stroke} strokeWidth="2.5" />
        <path className={stroke} strokeWidth="2.5" d="M17 31l14-14" />
      </svg>
    ),
    embedded: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <rect x="12" y="12" width="24" height="24" rx="2" className={stroke} strokeWidth="2.5" />
        <path className={stroke} strokeWidth="2.5" d="M8 18h4m24 0h4M8 24h4m24 0h4M8 30h4m24 0h4M18 8v4m0 24v4M24 8v4m0 24v4M30 8v4m0 24v4" />
      </svg>
    ),
    thermal: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" strokeLinecap="round" d="M24 8v28" />
        <path className={stroke} strokeWidth="2.5" d="M18 14c0 4 3 6 6 10s6 6 6 10a6 6 0 1 1-12 0" />
      </svg>
    ),
    emi: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" d="M8 24h32" />
        <path className={stroke} strokeWidth="2.5" strokeLinecap="round" d="M14 18v12M22 14v20M30 18v12M38 20v8" />
      </svg>
    ),
    safety: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" d="M24 6 10 12v12c0 10 6 16 14 18 8-2 14-8 14-18V12L24 6Z" />
        <path className={stroke} strokeWidth="2.5" strokeLinecap="round" d="M18 24l4 4 8-8" />
      </svg>
    ),
    standards: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" d="M14 8h20v32H14z" />
        <path className={stroke} strokeWidth="2.5" strokeLinecap="round" d="M20 16h8M20 24h8M20 32h5" />
      </svg>
    ),
  };

  return icons[type] ?? icons.fundamentals;
}
