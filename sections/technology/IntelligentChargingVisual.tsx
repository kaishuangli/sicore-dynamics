type IntelligentChargingVisualProps = {
  type: string;
  className?: string;
};

export default function IntelligentChargingVisual({
  type,
  className = "",
}: IntelligentChargingVisualProps) {
  const shell = `h-full w-full bg-[#0A1220] ${className}`;

  if (type === "algorithms") {
    return (
      <svg viewBox="0 0 560 340" className={shell} aria-hidden="true">
        <rect width="560" height="340" fill="#0A1220" />
        <text x="24" y="32" fill="#93C5FD" fontSize="13" fontWeight="700">
          Charge Profile
        </text>
        <text x="24" y="54" fill="#64748B" fontSize="11">
          CC Stage → CV Stage → Float Stage
        </text>
        <path d="M40 260 H520" stroke="#1E293B" />
        <path d="M40 70 V260" stroke="#1E293B" />
        <path d="M50 170 H210 L300 110 H500" fill="none" stroke="#38BDF8" strokeWidth="3" />
        <path d="M50 210 H210 L300 150 H500" fill="none" stroke="#0B5FFF" strokeWidth="3" />
        <path d="M50 230 L210 190 L500 90" fill="none" stroke="#22C55E" strokeWidth="3" />
        <path d="M50 140 H210 L300 180 H500" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
        <text x="50" y="290" fill="#7DD3FC" fontSize="11">
          Current
        </text>
        <text x="140" y="290" fill="#60A5FA" fontSize="11">
          Voltage
        </text>
        <text x="230" y="290" fill="#86EFAC" fontSize="11">
          SOC
        </text>
        <text x="300" y="290" fill="#FCD34D" fontSize="11">
          Power
        </text>
      </svg>
    );
  }

  if (type === "battery") {
    return (
      <svg viewBox="0 0 560 340" className={shell} aria-hidden="true">
        <rect width="560" height="340" fill="#0A1220" />
        <rect x="40" y="70" width="200" height="200" rx="14" fill="#111827" stroke="#334155" strokeWidth="2" />
        <rect x="70" y="105" width="140" height="130" rx="10" fill="#0F172A" stroke="#0B5FFF" strokeWidth="2" />
        <rect x="95" y="145" width="90" height="50" rx="6" fill="#0B5FFF" opacity="0.35" />
        <text x="112" y="176" fill="#E2E8F0" fontSize="16" fontWeight="700">
          Pack
        </text>
        <rect x="280" y="70" width="240" height="200" rx="12" fill="#111827" stroke="#1E293B" />
        {[
          ["SOC", "72%"],
          ["Voltage", "48.6 V"],
          ["Current", "18.4 A"],
          ["Temperature", "36°C"],
          ["Status", "Charging"],
        ].map(([label, value], i) => (
          <g key={label}>
            <text x="304" y={108 + i * 32} fill="#94A3B8" fontSize="13">
              {label}
            </text>
            <text x="440" y={108 + i * 32} fill="#F8FAFC" fontSize="14" fontWeight="700">
              {value}
            </text>
          </g>
        ))}
      </svg>
    );
  }

  if (type === "fleet") {
    return (
      <svg viewBox="0 0 560 340" className={shell} aria-hidden="true">
        <rect width="560" height="340" fill="#0A1220" />
        <text x="24" y="34" fill="#93C5FD" fontSize="13" fontWeight="700">
          Fleet Overview
        </text>
        <text x="24" y="58" fill="#64748B" fontSize="11">
          Robot · SOC · Status · Station
        </text>
        {[
          ["Robot A", "18%", "Priority Charging", "Station 1", "#EF4444"],
          ["Robot B", "62%", "Continue Mission", "—", "#22C55E"],
          ["Robot C", "35%", "Scheduled", "Station 2", "#F59E0B"],
          ["Robot D", "90%", "Ready", "—", "#38BDF8"],
        ].map((row, i) => (
          <g key={row[0]}>
            <rect x="24" y={78 + i * 54} width="512" height="46" rx="8" fill="#111827" stroke="#1E293B" />
            <text x="40" y={106 + i * 54} fill="#E2E8F0" fontSize="13" fontWeight="700">
              {row[0]}
            </text>
            <text x="150" y={106 + i * 54} fill="#94A3B8" fontSize="13">
              {row[1]}
            </text>
            <text x="230" y={106 + i * 54} fill={row[4]} fontSize="13">
              {row[2]}
            </text>
            <text x="420" y={106 + i * 54} fill="#93C5FD" fontSize="13">
              {row[3]}
            </text>
          </g>
        ))}
      </svg>
    );
  }

  if (type === "communication") {
    return (
      <svg viewBox="0 0 560 340" className={shell} aria-hidden="true">
        <rect width="560" height="340" fill="#0A1220" />
        <rect x="200" y="138" width="160" height="64" rx="10" fill="#0B5FFF" />
        <text x="218" y="176" fill="#FFFFFF" fontSize="13" fontWeight="700">
          Charging Controller
        </text>
        {[
          ["Battery BMS", 40, 36],
          ["Robot Controller", 200, 28],
          ["Charging Station", 380, 36],
          ["Fleet Manager", 40, 250],
          ["Cloud Platform", 200, 260],
          ["Service Interface", 380, 250],
        ].map(([label, x, y]) => (
          <g key={label}>
            <rect
              x={Number(x)}
              y={Number(y)}
              width="140"
              height="44"
              rx="8"
              fill="#111827"
              stroke="#334155"
            />
            <text x={Number(x) + 14} y={Number(y) + 27} fill="#CBD5E1" fontSize="12">
              {label}
            </text>
            <path
              d={`M${Number(x) + 70} ${Number(y) < 100 ? Number(y) + 44 : Number(y)} L280 ${Number(y) < 100 ? 138 : 202}`}
              stroke="#334155"
              strokeWidth="1.5"
            />
          </g>
        ))}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 560 340" className={shell} aria-hidden="true">
      <rect width="560" height="340" fill="#0A1220" />
      <text x="24" y="34" fill="#93C5FD" fontSize="13" fontWeight="700">
        System Status
      </text>
      <rect x="24" y="52" width="300" height="256" rx="10" fill="#111827" stroke="#1E293B" />
      {[
        ["Charging Status", "Normal", "#22C55E"],
        ["Output Power", "1.25 kW", "#E2E8F0"],
        ["Coil Alignment", "Good", "#38BDF8"],
        ["Battery Temperature", "38°C", "#E2E8F0"],
        ["Efficiency", "93.6%", "#E2E8F0"],
        ["Fault Code", "None", "#94A3B8"],
      ].map(([label, value, color], i) => (
        <g key={label}>
          <text x="44" y={90 + i * 34} fill="#94A3B8" fontSize="12">
            {label}
          </text>
          <text x="230" y={90 + i * 34} fill={color} fontSize="13" fontWeight="700">
            {value}
          </text>
        </g>
      ))}
      <rect x="344" y="52" width="192" height="256" rx="10" fill="#111827" stroke="#1E293B" />
      <text x="364" y="82" fill="#93C5FD" fontSize="12" fontWeight="700">
        Recent Events
      </text>
      {[
        "Charge cycle completed",
        "Station 2 assigned",
        "No active faults",
        "Profile adapted",
      ].map((event, i) => (
        <text key={event} x="364" y={120 + i * 36} fill="#CBD5E1" fontSize="12">
          {event}
        </text>
      ))}
    </svg>
  );
}
