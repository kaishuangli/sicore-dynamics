type ControlFeatureVisualProps = {
  type: string;
  className?: string;
};

export default function ControlFeatureVisual({
  type,
  className = "h-full w-full",
}: ControlFeatureVisualProps) {
  const common = "h-full w-full rounded-none bg-[#0B1220]";

  switch (type) {
    case "frequency":
      return (
        <svg viewBox="0 0 240 140" className={`${common} ${className}`} aria-hidden="true">
          <path d="M20 110 C60 110 70 30 120 30 C170 30 180 110 220 110" fill="none" stroke="#38BDF8" strokeWidth="3" />
          <circle cx="120" cy="30" r="5" fill="#0B5FFF" />
          <text x="128" y="28" fill="#94A3B8" fontSize="10">
            Optimal
          </text>
          <line x1="20" y1="118" x2="220" y2="118" stroke="#334155" strokeWidth="1" />
        </svg>
      );
    case "regulation":
      return (
        <svg viewBox="0 0 240 140" className={`${common} ${className}`} aria-hidden="true">
          <path d="M24 100 H80 V48 H140 V72 H216" fill="none" stroke="#22C55E" strokeWidth="2.5" />
          <path d="M24 108 H216" fill="none" stroke="#0B5FFF" strokeWidth="2.5" />
          <path d="M24 90 H100 V90 H216" fill="none" stroke="#F97316" strokeWidth="2.5" />
          <text x="24" y="24" fill="#94A3B8" fontSize="10">
            CP / CV / CC
          </text>
        </svg>
      );
    case "coil-detect":
      return (
        <svg viewBox="0 0 240 140" className={`${common} ${className}`} aria-hidden="true">
          <circle cx="70" cy="70" r="28" fill="none" stroke="#38BDF8" strokeWidth="3" />
          <circle cx="70" cy="70" r="16" fill="none" stroke="#0B5FFF" strokeWidth="2" />
          <path d="M58 70 l8 8 16-18" fill="none" stroke="#22C55E" strokeWidth="3" />
          <circle cx="170" cy="70" r="28" fill="none" stroke="#64748B" strokeWidth="3" />
          <path d="M158 58 l24 24 M182 58 l-24 24" stroke="#EF4444" strokeWidth="3" />
        </svg>
      );
    case "fod":
      return (
        <svg viewBox="0 0 240 140" className={`${common} ${className}`} aria-hidden="true">
          <rect x="50" y="36" width="140" height="68" rx="8" fill="none" stroke="#334155" strokeWidth="2" />
          <circle cx="120" cy="70" r="34" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 3" />
          <circle cx="120" cy="70" r="8" fill="#EF4444" />
          <text x="92" y="124" fill="#FCA5A5" fontSize="11">
            FOD Detected
          </text>
        </svg>
      );
    case "thermal":
      return (
        <svg viewBox="0 0 240 140" className={`${common} ${className}`} aria-hidden="true">
          <rect x="40" y="40" width="90" height="60" rx="4" fill="none" stroke="#334155" strokeWidth="2" />
          <rect x="52" y="52" width="20" height="14" fill="#0B5FFF" />
          <rect x="78" y="52" width="36" height="8" fill="#1E293B" />
          <rect x="160" y="35" width="18" height="55" rx="9" fill="none" stroke="#38BDF8" strokeWidth="2" />
          <circle cx="169" cy="98" r="12" fill="#0B5FFF" />
          <text x="152" y="28" fill="#94A3B8" fontSize="11">
            72°C
          </text>
        </svg>
      );
    case "adaptive":
      return (
        <svg viewBox="0 0 240 140" className={`${common} ${className}`} aria-hidden="true">
          <path d="M24 100 C70 100 90 40 140 40 C180 40 200 70 216 70" fill="none" stroke="#0B5FFF" strokeWidth="2.5" />
          <path d="M24 110 C80 90 120 95 216 50" fill="none" stroke="#F97316" strokeWidth="2.5" />
          <text x="24" y="24" fill="#94A3B8" fontSize="10">
            Power vs Load
          </text>
        </svg>
      );
    case "multi-coil":
      return (
        <svg viewBox="0 0 240 140" className={`${common} ${className}`} aria-hidden="true">
          <circle cx="60" cy="70" r="22" fill="none" stroke="#475569" strokeWidth="3" />
          <circle cx="120" cy="70" r="22" fill="none" stroke="#0B5FFF" strokeWidth="3" />
          <circle cx="120" cy="70" r="10" fill="#38BDF8" opacity="0.35" />
          <circle cx="180" cy="70" r="22" fill="none" stroke="#475569" strokeWidth="3" />
          <text x="95" y="118" fill="#94A3B8" fontSize="10">
            Active Coil
          </text>
        </svg>
      );
    case "communication":
      return (
        <svg viewBox="0 0 240 140" className={`${common} ${className}`} aria-hidden="true">
          {[
            ["Qi", 36],
            ["CAN", 86],
            ["UART", 136],
            ["BLE", 186],
          ].map(([label, x]) => (
            <g key={label}>
              <rect x={Number(x)} y="45" width="40" height="40" rx="6" fill="none" stroke="#0B5FFF" strokeWidth="2" />
              <text x={Number(x) + 8} y="70" fill="#E2E8F0" fontSize="10" fontWeight="700">
                {label}
              </text>
            </g>
          ))}
        </svg>
      );
    default:
      return <div className={`${common} ${className}`} aria-hidden="true" />;
  }
}
