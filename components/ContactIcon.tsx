import type { ReactNode } from "react";

type ContactIconProps = {
  type: string;
  className?: string;
};

export default function ContactIcon({ type, className = "h-6 w-6" }: ContactIconProps) {
  const stroke = "stroke-current";

  const icons: Record<string, ReactNode> = {
    wireless: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" strokeLinecap="round" d="M18 18a9 9 0 0 0 0 12M13 13a16 16 0 0 0 0 22M30 18a9 9 0 0 1 0 12M35 13a16 16 0 0 1 0 22" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
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
    oem: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <rect x="8" y="14" width="32" height="22" rx="2" className={stroke} strokeWidth="2.5" />
        <path className={stroke} strokeWidth="2.5" d="M16 14V10h16v4" />
      </svg>
    ),
    support: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="24" r="12" className={stroke} strokeWidth="2.5" />
        <path className={stroke} strokeWidth="2.5" strokeLinecap="round" d="M24 20v8M24 32h.01" />
      </svg>
    ),
    partnership: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" d="M10 30c0-8 6-14 14-14s14 6 14 14" />
        <circle cx="24" cy="16" r="6" className={stroke} strokeWidth="2.5" />
      </svg>
    ),
    careers: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" d="M12 20h24v20H12z" />
        <path className={stroke} strokeWidth="2.5" d="M18 20v-4a6 6 0 0 1 12 0v4" />
      </svg>
    ),
    mail: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <rect x="8" y="12" width="32" height="24" rx="2" className={stroke} strokeWidth="2.5" />
        <path className={stroke} strokeWidth="2.5" d="m8 16 16 12 16-12" />
      </svg>
    ),
    sales: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" d="M8 34h32M14 34V18l10-6 10 6v16" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" d="M14 8h8l4 10-6 4c3 6 8 11 14 14l4-6h10v8c0 2-2 4-4 4C20 42 6 28 6 12c0-2 2-4 4-4Z" />
      </svg>
    ),
    location: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" d="M24 8c-6 0-10 5-10 11 0 9 10 17 10 17s10-8 10-17c0-6-4-11-10-11Z" />
        <circle cx="24" cy="19" r="4" className={stroke} strokeWidth="2.5" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="24" r="14" className={stroke} strokeWidth="2.5" />
        <path className={stroke} strokeWidth="2.5" strokeLinecap="round" d="M24 14v10l7 4" />
      </svg>
    ),
    engineering: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" d="m18 30 6-14 6 14-6 4-6-4Z" />
      </svg>
    ),
    response: (
      <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path className={stroke} strokeWidth="2.5" strokeLinecap="round" d="M8 24h32M30 16l8 8-8 8" />
      </svg>
    ),
  };

  return icons[type] ?? icons.mail;
}
