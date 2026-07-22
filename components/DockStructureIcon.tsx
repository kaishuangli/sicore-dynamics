type DockStructureIconProps = {
  type: string;
  className?: string;
};

/** Compact line icons for dock-mechanics structure grids. */
export default function DockStructureIcon({
  type,
  className = "h-10 w-10",
}: DockStructureIconProps) {
  const stroke = "#0F172A";
  const accent = "#0B5FFF";

  switch (type) {
    case "funnel-guide":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M10 8h28L30 40H18L10 8Z" stroke={stroke} strokeWidth="2" />
          <path d="M18 28h12" stroke={accent} strokeWidth="2" />
        </svg>
      );
    case "v-guide":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M8 12 L24 36 L40 12" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M16 12h16" stroke={accent} strokeWidth="2" />
        </svg>
      );
    case "chamfer-guide":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M8 36V16l8-8h16l8 8v20" stroke={stroke} strokeWidth="2" />
          <path d="M16 36h16" stroke={accent} strokeWidth="2" />
        </svg>
      );
    case "rail-guide":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M12 10v28M36 10v28" stroke={stroke} strokeWidth="2.5" />
          <path d="M12 18h24M12 30h24" stroke={accent} strokeWidth="2" />
        </svg>
      );
    case "cone-guide":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M24 8 L40 36 H8 Z" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
          <circle cx="24" cy="28" r="3" fill={accent} />
        </svg>
      );
    case "pin-hole":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <circle cx="24" cy="24" r="12" stroke={stroke} strokeWidth="2" />
          <circle cx="24" cy="24" r="4" fill={accent} />
        </svg>
      );
    case "pin-slot":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <rect x="12" y="18" width="24" height="12" rx="6" stroke={stroke} strokeWidth="2" />
          <circle cx="24" cy="24" r="3.5" fill={accent} />
        </svg>
      );
    case "magnetic-centering":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M16 14v20M32 14v20" stroke={stroke} strokeWidth="2.5" />
          <path d="M16 14h6v8h-6M32 14h-6v8h6M16 34h6v-8h-6M32 34h-6v-8h6" stroke={accent} strokeWidth="2" />
        </svg>
      );
    case "floating-dock":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <rect x="10" y="20" width="28" height="12" rx="2" stroke={stroke} strokeWidth="2" />
          <path d="M16 20V14M24 20V12M32 20V14" stroke={accent} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "spring-compensation":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path
            d="M24 8v4l-6 3 6 3-6 3 6 3-6 3 6 3v6"
            stroke={accent}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M16 8h16M16 40h16" stroke={stroke} strokeWidth="2" />
        </svg>
      );
    case "passive-compliance":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M10 30c6-10 22-10 28 0" stroke={stroke} strokeWidth="2" />
          <path d="M14 22c5-6 15-6 20 0" stroke={accent} strokeWidth="2" />
          <circle cx="24" cy="34" r="3" fill={accent} />
        </svg>
      );
    case "shock-absorption":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <rect x="18" y="8" width="12" height="10" stroke={stroke} strokeWidth="2" />
          <path d="M24 18v6M18 28h12M20 32h8M22 36h4" stroke={accent} strokeWidth="2" />
          <path d="M16 40h16" stroke={stroke} strokeWidth="2" />
        </svg>
      );
    case "pin-lock":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <rect x="10" y="20" width="20" height="12" rx="2" stroke={stroke} strokeWidth="2" />
          <path d="M30 26h10M36 22v8" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "hook-lock":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M14 12v16c0 6 5 10 10 10s10-4 10-10" stroke={stroke} strokeWidth="2.5" />
          <path d="M28 18h8v8" stroke={accent} strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      );
    case "magnetic-lock":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M14 14h8v20h-8M26 14h8v20h-8" stroke={stroke} strokeWidth="2" />
          <path d="M18 20v8M34 20v8" stroke={accent} strokeWidth="2" />
        </svg>
      );
    case "electromagnetic-lock":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <rect x="12" y="16" width="24" height="16" rx="2" stroke={stroke} strokeWidth="2" />
          <path d="M18 24h12M24 12v4M24 32v4" stroke={accent} strokeWidth="2" />
        </svg>
      );
    case "dock-geometry":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M8 34 L24 10 L40 34Z" stroke={stroke} strokeWidth="2" />
          <path d="M16 34h16" stroke={accent} strokeWidth="2" />
        </svg>
      );
    case "guide-symmetry":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M24 8v32M10 16l14 8 14-8M10 32l14-8 14 8" stroke={stroke} strokeWidth="2" />
          <circle cx="24" cy="24" r="2.5" fill={accent} />
        </svg>
      );
    case "clearance-design":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <rect x="10" y="14" width="28" height="20" stroke={stroke} strokeWidth="2" />
          <rect x="16" y="20" width="16" height="8" stroke={accent} strokeWidth="2" strokeDasharray="3 2" />
        </svg>
      );
    case "wear-allowance":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M12 34c4-16 20-16 24 0" stroke={stroke} strokeWidth="2" />
          <path d="M16 34c3-10 13-10 16 0" stroke={accent} strokeWidth="2" strokeDasharray="3 2" />
        </svg>
      );
    case "thermal-expansion":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M24 10v20" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="24" cy="36" r="5" stroke={stroke} strokeWidth="2" />
          <path d="M18 14h12M16 20h16" stroke={stroke} strokeWidth="2" />
        </svg>
      );
    case "coil-tx":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <ellipse cx="24" cy="24" rx="14" ry="8" stroke={stroke} strokeWidth="2" />
          <ellipse cx="24" cy="24" rx="8" ry="14" stroke={accent} strokeWidth="2" />
          <circle cx="24" cy="24" r="3" fill={accent} />
        </svg>
      );
    case "coil-rx":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <ellipse cx="24" cy="20" rx="12" ry="6" stroke={stroke} strokeWidth="2" />
          <ellipse cx="24" cy="28" rx="12" ry="6" stroke={accent} strokeWidth="2" />
          <path d="M24 14v20" stroke={stroke} strokeWidth="2" />
        </svg>
      );
    case "resonant-tank":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="M10 24h8l4-10 6 20 4-10h6" stroke={accent} strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="8" y="12" width="32" height="24" stroke={stroke} strokeWidth="2" />
        </svg>
      );
    case "ferrite-shield":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <rect x="10" y="18" width="28" height="12" stroke={stroke} strokeWidth="2" />
          <path d="M14 18V14h20v4M14 30v4h20v-4" stroke={accent} strokeWidth="2" />
        </svg>
      );
    case "fod-sense":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <circle cx="24" cy="24" r="12" stroke={stroke} strokeWidth="2" />
          <circle cx="24" cy="24" r="4" fill={accent} />
          <path d="M24 8v4M24 36v4M8 24h4M36 24h4" stroke={accent} strokeWidth="2" />
        </svg>
      );
    case "power-limit":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <path d="m26 8-12 18h10l-2 14 14-20H26l2-12Z" stroke={accent} strokeWidth="2" strokeLinejoin="round" />
          <path d="M10 38h28" stroke={stroke} strokeWidth="2" />
        </svg>
      );
    case "sealed-cover":
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <rect x="10" y="14" width="28" height="20" rx="3" stroke={stroke} strokeWidth="2" />
          <path d="M16 14V12a8 8 0 0 1 16 0v2" stroke={accent} strokeWidth="2" />
          <circle cx="24" cy="24" r="3" fill={accent} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
          <rect x="12" y="12" width="24" height="24" stroke={stroke} strokeWidth="2" />
          <circle cx="24" cy="24" r="4" fill={accent} />
        </svg>
      );
  }
}
