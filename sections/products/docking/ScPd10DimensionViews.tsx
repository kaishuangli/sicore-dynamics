type ViewId = "front" | "side" | "back" | "top" | "bottom";

const BLUE = "#0B5FFF";
const BODY = "#F3F5F7";
const BODY_EDGE = "#C5CDD6";
const BASE = "#E4E8ED";
const PIN = "#D4A017";
const LED = "#22C55E";

function DimLine({
  x1,
  y1,
  x2,
  y2,
  label,
  labelX,
  labelY,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  labelX: number;
  labelY: number;
}) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={BLUE} strokeWidth="1.2" />
      <line x1={x1} y1={y1 - 4} x2={x1} y2={y1 + 4} stroke={BLUE} strokeWidth="1.2" />
      <line x1={x2} y1={y2 - 4} x2={x2} y2={y2 + 4} stroke={BLUE} strokeWidth="1.2" />
      <text
        x={labelX}
        y={labelY}
        fill={BLUE}
        fontSize="11"
        fontWeight="700"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
      >
        {label}
      </text>
    </g>
  );
}

function FrontDock() {
  return (
    <g>
      <rect x="40" y="36" width="140" height="76" rx="16" fill={BODY} stroke={BODY_EDGE} strokeWidth="1.5" />
      <rect x="40" y="92" width="140" height="20" rx="8" fill={BASE} />
      <rect x="56" y="48" width="108" height="36" rx="8" fill="#E8ECF0" stroke="#D0D6DE" />
      <circle cx="88" cy="66" r="4" fill={PIN} />
      <circle cx="108" cy="66" r="4" fill={PIN} />
      <circle cx="128" cy="66" r="4" fill={PIN} />
      <circle cx="148" cy="66" r="4" fill={PIN} />
      <circle cx="110" cy="100" r="3.5" fill={LED} />
    </g>
  );
}

function SideDock() {
  return (
    <g>
      <rect x="58" y="36" width="104" height="76" rx="16" fill={BODY} stroke={BODY_EDGE} strokeWidth="1.5" />
      <rect x="58" y="92" width="104" height="20" rx="8" fill={BASE} />
      <rect x="70" y="48" width="80" height="36" rx="8" fill="#E8ECF0" stroke="#D0D6DE" />
      <circle cx="150" cy="100" r="3.5" fill={LED} />
    </g>
  );
}

function BackDock() {
  return (
    <g>
      <rect x="40" y="36" width="140" height="76" rx="16" fill={BODY} stroke={BODY_EDGE} strokeWidth="1.5" />
      <rect x="40" y="92" width="140" height="20" rx="8" fill={BASE} />
      <rect x="92" y="88" width="36" height="10" rx="3" fill="#1E293B" />
      <rect x="96" y="91" width="28" height="4" rx="1.5" fill="#334155" />
    </g>
  );
}

function TopDock() {
  return (
    <g>
      <rect x="48" y="32" width="124" height="96" rx="18" fill={BODY} stroke={BODY_EDGE} strokeWidth="1.5" />
      <rect x="68" y="50" width="84" height="60" rx="10" fill="#E8ECF0" stroke="#D0D6DE" />
      <circle cx="90" cy="70" r="4.5" fill={PIN} />
      <circle cx="130" cy="70" r="4.5" fill={PIN} />
      <circle cx="90" cy="90" r="4.5" fill={PIN} />
      <circle cx="130" cy="90" r="4.5" fill={PIN} />
    </g>
  );
}

function BottomDock() {
  return (
    <g>
      <rect x="48" y="32" width="124" height="96" rx="18" fill={BASE} stroke={BODY_EDGE} strokeWidth="1.5" />
      <circle cx="68" cy="52" r="7" fill="#94A3B8" />
      <circle cx="152" cy="52" r="7" fill="#94A3B8" />
      <circle cx="68" cy="108" r="7" fill="#94A3B8" />
      <circle cx="152" cy="108" r="7" fill="#94A3B8" />
      <rect x="78" y="66" width="64" height="28" rx="3" fill="#F8FAFC" stroke="#CBD5E1" />
      <text x="110" y="83" textAnchor="middle" fill="#64748B" fontSize="8" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
        SC-PD10
      </text>
    </g>
  );
}

export default function ScPd10DimensionView({
  view,
  widthLabel,
  heightLabel,
  depthLabel,
}: {
  view: ViewId;
  widthLabel?: string;
  heightLabel?: string;
  depthLabel?: string;
}) {
  return (
    <svg viewBox="0 0 220 170" className="h-auto w-full" aria-hidden="true">
      {view === "front" ? <FrontDock /> : null}
      {view === "side" ? <SideDock /> : null}
      {view === "back" ? <BackDock /> : null}
      {view === "top" ? <TopDock /> : null}
      {view === "bottom" ? <BottomDock /> : null}

      {view === "front" && widthLabel ? (
        <DimLine x1={40} y1={128} x2={180} y2={128} label={widthLabel} labelX={110} labelY={146} />
      ) : null}
      {view === "front" && heightLabel ? (
        <g>
          <line x1={196} y1={36} x2={196} y2={112} stroke={BLUE} strokeWidth="1.2" />
          <line x1={192} y1={36} x2={200} y2={36} stroke={BLUE} strokeWidth="1.2" />
          <line x1={192} y1={112} x2={200} y2={112} stroke={BLUE} strokeWidth="1.2" />
          <text
            x="210"
            y="78"
            fill={BLUE}
            fontSize="10"
            fontWeight="700"
            textAnchor="middle"
            fontFamily="Inter, system-ui, sans-serif"
            transform="rotate(90 210 78)"
          >
            {heightLabel}
          </text>
        </g>
      ) : null}
      {view === "side" && depthLabel ? (
        <DimLine x1={58} y1={128} x2={162} y2={128} label={depthLabel} labelX={110} labelY={146} />
      ) : null}
    </svg>
  );
}
