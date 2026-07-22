/**
 * Generates knowledge-only educational SVG diagrams for every written article.
 * Output: public/images/knowledge/<categoryId>/<slug>-{hero|diagram}.svg
 *
 * Run: npx tsx scripts/generate-knowledge-diagrams.ts
 */
import fs from "node:fs";
import path from "node:path";
import { getAllKnowledgeArticles } from "../lib/knowledge-articles";

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "public", "images", "knowledge");

const PALETTE = {
  bg: "#F8FAFC",
  panel: "#FFFFFF",
  ink: "#0B0F19",
  muted: "#64748B",
  line: "#CBD5E1",
  blue: "#0B5FFF",
  cyan: "#06B6D4",
  amber: "#F59E0B",
  violet: "#7C3AED",
  rose: "#E11D48",
  green: "#059669",
};

function esc(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function hash(input: string) {
  let h = 0;
  for (let i = 0; i < input.length; i += 1) h = (h * 31 + input.charCodeAt(i)) >>> 0;
  return h;
}

type DiagramKind =
  | "wpt-link"
  | "history"
  | "ipt"
  | "resonant"
  | "capacitive"
  | "farfield"
  | "rf"
  | "microwave"
  | "laser"
  | "near-far"
  | "static-dynamic"
  | "one-many"
  | "power-flow"
  | "coupling"
  | "glossary"
  | "k-q"
  | "frequency"
  | "series"
  | "parallel"
  | "lcc"
  | "lcl"
  | "llc"
  | "double"
  | "split"
  | "soft"
  | "zvs"
  | "zcs"
  | "regulate"
  | "stability"
  | "coil"
  | "spiral"
  | "dd"
  | "array"
  | "litz"
  | "ferrite"
  | "shield"
  | "align"
  | "gap"
  | "thermal"
  | "pcb"
  | "rectifier"
  | "inverter"
  | "dcdc"
  | "gan"
  | "sic"
  | "gate"
  | "loss"
  | "emi"
  | "pfc"
  | "bridge"
  | "sense"
  | "protect"
  | "layout"
  | "checklist"
  | "generic";

function detectKind(slug: string, categoryId: string): DiagramKind {
  const s = slug.toLowerCase();

  if (s.includes("what-is-wireless") || s.includes("power-transfer-principles")) return "wpt-link";
  if (s.includes("history")) return "history";
  if (s.includes("inductive") || s.includes("ipt")) return "ipt";
  if (s.includes("magnetic-resonance") || s === "resonant-theory") return "resonant";
  if (s.includes("capacitive")) return "capacitive";
  if (s.includes("far-field")) return "farfield";
  if (s.includes("rf-wireless") || s === "rf-wireless-power") return "rf";
  if (s.includes("microwave")) return "microwave";
  if (s.includes("laser")) return "laser";
  if (s.includes("near-field-vs")) return "near-far";
  if (s.includes("static-vs-dynamic")) return "static-dynamic";
  if (s.includes("one-to-one") || s.includes("one-to-many")) return "one-many";
  if (s.includes("energy-conversion")) return "power-flow";
  if (s.includes("coupling-mechanism") || s.includes("coupling-coefficient") || s.includes("coupling-optimization"))
    return "coupling";
  if (s.includes("terminology") || s.includes("glossary") || s.includes("checklist")) return "glossary";
  if (s.includes("quality-factor") || s === "coupling-coefficient") return "k-q";
  if (s.includes("frequency-selection") || s.includes("frequency-modulation") || s.includes("frequency-splitting"))
    return s.includes("split") ? "split" : "frequency";
  if (s.includes("series-resonance")) return "series";
  if (s.includes("parallel-resonance")) return "parallel";
  if (s.includes("lcc")) return "lcc";
  if (s.includes("lcl")) return "lcl";
  if (s.includes("llc")) return "llc";
  if (s.includes("double-sided")) return "double";
  if (s.includes("soft-switching")) return "soft";
  if (s === "zvs") return "zvs";
  if (s === "zcs") return "zcs";
  if (s.includes("power-regulation")) return "regulate";
  if (s.includes("resonant-stability") || s.includes("stability")) return "stability";

  if (s.includes("spiral")) return "spiral";
  if (s.includes("dd-coil") || s === "dd-coil" || s.includes("bipolar") || s.includes("unipolar")) return "dd";
  if (s.includes("multi-coil") || s.includes("array")) return "array";
  if (s.includes("litz") || s.includes("skin") || s.includes("proximity") || s.includes("copper") || s.includes("aluminum"))
    return "litz";
  if (s.includes("ferrite") || s.includes("nanocrystalline") || s.includes("flux")) return "ferrite";
  if (s.includes("shield") || s.includes("leakage") || s.includes("foreign-metal") || s.includes("chassis"))
    return "shield";
  if (s.includes("align") || s.includes("misalignment")) return "align";
  if (s.includes("air-gap") || s.includes("inner-and-outer") || s.includes("pitch")) return "gap";
  if (s.includes("thermal") || s.includes("heatsink") || s.includes("cooling") || s.includes("potting")) return "thermal";
  if (s.includes("pcb") || s.includes("layout") || s.includes("manufactur") || s.includes("simulation") || s.includes("finite-element"))
    return "pcb";
  if (
    s.includes("coil") ||
    s.includes("solenoid") ||
    s.includes("planar") ||
    s.includes("bifilar") ||
    s.includes("turns") ||
    s.includes("inductance") ||
    s.includes("resistance") ||
    s.includes("insulation") ||
    s.includes("vibration") ||
    s.includes("aging") ||
    s.includes("testing") ||
    s.includes("impedance") ||
    s.includes("cost")
  )
    return "coil";

  if (s.includes("rectifier") || s.includes("synchronous-rect")) return "rectifier";
  if (s.includes("inverter") || s.includes("class-d") || s.includes("phase-shift") || s.includes("half-bridge") || s.includes("full-bridge"))
    return "inverter";
  if (s.includes("dc-dc") || s.includes("buck") || s.includes("boost") || s.includes("current-fed") || s.includes("voltage-fed"))
    return "dcdc";
  if (s.includes("gan")) return "gan";
  if (s.includes("sic") || s.includes("igbt") || s.includes("mosfet") || s.includes("diode") || s.includes("silicon"))
    return "sic";
  if (s.includes("gate") || s.includes("bootstrap") || s.includes("dead-time") || s.includes("shoot-through")) return "gate";
  if (s.includes("switching-loss") || s.includes("conduction-loss") || s.includes("loss-breakdown") || s.includes("efficiency") || s.includes("power-density") || s.includes("snubber") || s.includes("body-diode") || s.includes("parasitic"))
    return "loss";
  if (s.includes("emi") || s.includes("emc") || s.includes("common-mode") || s.includes("input-emi")) return "emi";
  if (s.includes("power-factor") || s.includes("ac-dc") || s.includes("soft-start")) return "pfc";
  if (s.includes("sensing") || s.includes("current-sensing") || s.includes("voltage-sensing")) return "sense";
  if (s.includes("overcurrent") || s.includes("overvoltage") || s.includes("protect") || s.includes("short-circuit"))
    return "protect";
  if (s.includes("bus") || s.includes("dc-link") || s.includes("capacitor") || s.includes("switching-node") || s.includes("power-stage"))
    return "layout";
  if (s.includes("checklist")) return "checklist";

  if (s.includes("fod") || s.includes("foreign-object") || s.includes("living-object") || s.includes("lod") || s.includes("load-detection"))
    return "protect";
  if (s.includes("ai-") || s.includes("adaptive") || s.includes("digital-power") || s.includes("predictive") || s.includes("scheduling") || s.includes("calibration") || s.includes("autonomous") || s.includes("efficiency-optimization") || s.includes("battery-health") || s.includes("frequency-tracking") || s.includes("impedance-matching"))
    return "regulate";

  if (categoryId.includes("intelligent")) return "regulate";
  if (categoryId.includes("charging")) return "static-dynamic";
  if (categoryId.includes("battery")) return "power-flow";
  if (categoryId.includes("embedded")) return "pcb";
  if (categoryId.includes("thermal")) return "thermal";
  if (categoryId.includes("emi")) return "emi";
  if (categoryId.includes("safety")) return "protect";
  if (categoryId.includes("standards")) return "checklist";
  if (categoryId.includes("resonant")) return "resonant";
  if (categoryId.includes("coil")) return "coil";
  if (categoryId.includes("power-electronics")) return "inverter";
  return "generic";
}

function frame(title: string, subtitle: string, body: string, accent: string) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720" role="img" aria-label="${esc(title)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EEF2FF"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${accent}"/>
      <stop offset="100%" stop-color="${PALETTE.cyan}"/>
    </linearGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M32 0H0V32" fill="none" stroke="#E2E8F0" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1280" height="720" fill="url(#bg)"/>
  <rect width="1280" height="720" fill="url(#grid)" opacity="0.55"/>
  <rect x="36" y="28" width="1208" height="664" rx="28" fill="${PALETTE.panel}" stroke="${PALETTE.line}" stroke-width="2"/>
  <rect x="36" y="28" width="1208" height="10" fill="url(#accent)"/>
  <text x="72" y="88" fill="${PALETTE.blue}" font-family="Segoe UI, Arial, sans-serif" font-size="18" font-weight="700" letter-spacing="3">SICORE KNOWLEDGE DIAGRAM</text>
  <text x="72" y="132" fill="${PALETTE.ink}" font-family="Segoe UI, Arial, sans-serif" font-size="36" font-weight="800">${esc(title)}</text>
  <text x="72" y="168" fill="${PALETTE.muted}" font-family="Segoe UI, Arial, sans-serif" font-size="18">${esc(subtitle)}</text>
  ${body}
  <text x="72" y="666" fill="${PALETTE.muted}" font-family="Segoe UI, Arial, sans-serif" font-size="14">Educational illustration for Knowledge Center — not a product photo</text>
</svg>
`;
}

function box(x: number, y: number, w: number, h: number, label: string, fill = "#EFF6FF", stroke = PALETTE.blue) {
  return `
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>
  <text x="${x + w / 2}" y="${y + h / 2 + 6}" text-anchor="middle" fill="${PALETTE.ink}" font-family="Segoe UI, Arial, sans-serif" font-size="18" font-weight="700">${esc(label)}</text>`;
}

function arrow(x1: number, y1: number, x2: number, y2: number, color = PALETTE.blue) {
  const id = `a${Math.round(x1)}${Math.round(y1)}${Math.round(x2)}${Math.round(y2)}`;
  return `
  <defs><marker id="${id}" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="${color}"/></marker></defs>
  <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="3" marker-end="url(#${id})"/>`;
}

function coil(cx: number, cy: number, r = 54, color = PALETTE.blue) {
  let d = "";
  for (let i = 0; i < 5; i += 1) {
    const rr = r - i * 8;
    d += `<circle cx="${cx}" cy="${cy}" r="${rr}" fill="none" stroke="${color}" stroke-width="3" opacity="${1 - i * 0.12}"/>`;
  }
  return d;
}

function waveform(x: number, y: number, w: number, color = PALETTE.cyan) {
  const mid = y;
  return `<path d="M${x} ${mid} C ${x + w * 0.12} ${mid - 36}, ${x + w * 0.18} ${mid + 36}, ${x + w * 0.3} ${mid} S ${x + w * 0.48} ${mid + 36}, ${x + w * 0.6} ${mid} S ${x + w * 0.78} ${mid - 36}, ${x + w * 0.9} ${mid} S ${x + w} ${mid + 20}, ${x + w} ${mid}" fill="none" stroke="${color}" stroke-width="4"/>`;
}

function buildBody(kind: DiagramKind, seed: number): string {
  switch (kind) {
    case "wpt-link":
      return `
      ${box(90, 260, 220, 120, "Transmitter", "#DBEAFE")}
      ${box(970, 260, 220, 120, "Receiver", "#D1FAE5", PALETTE.green)}
      ${coil(520, 320, 70)}
      ${coil(760, 320, 70, PALETTE.cyan)}
      ${arrow(320, 320, 430, 320)}
      ${arrow(850, 320, 960, 320, PALETTE.green)}
      <text x="640" y="250" text-anchor="middle" fill="${PALETTE.muted}" font-size="16" font-family="Segoe UI, Arial, sans-serif">Air gap · magnetic coupling</text>
      <path d="M560 320 Q640 250 720 320" fill="none" stroke="${PALETTE.amber}" stroke-width="3" stroke-dasharray="8 6"/>
      <path d="M560 320 Q640 390 720 320" fill="none" stroke="${PALETTE.amber}" stroke-width="3" stroke-dasharray="8 6"/>`;
    case "ipt":
      return `
      ${box(120, 240, 280, 90, "Primary coil", "#DBEAFE")}
      ${box(880, 390, 280, 90, "Secondary coil", "#D1FAE5", PALETTE.green)}
      <rect x="200" y="360" width="880" height="18" rx="8" fill="#E2E8F0"/>
      <text x="640" y="345" text-anchor="middle" fill="${PALETTE.muted}" font-size="16" font-family="Segoe UI, Arial, sans-serif">Short gap · strong coupling (IPT)</text>
      ${arrow(400, 285, 880, 420)}
      ${coil(300, 450, 40)}
      ${coil(980, 285, 40, PALETTE.cyan)}`;
    case "resonant":
      return `
      ${box(100, 250, 200, 100, "Inverter")}
      ${box(380, 250, 180, 100, "LC tank", "#FEF3C7", PALETTE.amber)}
      ${box(640, 250, 180, 100, "Mutual M", "#EDE9FE", PALETTE.violet)}
      ${box(900, 250, 260, 100, "Rx tank + load", "#D1FAE5", PALETTE.green)}
      ${arrow(300, 300, 370, 300)}
      ${arrow(560, 300, 630, 300, PALETTE.violet)}
      ${arrow(820, 300, 890, 300, PALETTE.green)}
      ${waveform(380, 430, 520)}
      <text x="640" y="480" text-anchor="middle" fill="${PALETTE.muted}" font-size="16" font-family="Segoe UI, Arial, sans-serif">Resonant energy exchange across modest k</text>`;
    case "capacitive":
      return `
      <rect x="280" y="240" width="28" height="220" fill="${PALETTE.blue}"/>
      <rect x="980" y="240" width="28" height="220" fill="${PALETTE.cyan}"/>
      <text x="294" y="500" text-anchor="middle" fill="${PALETTE.ink}" font-size="16" font-family="Segoe UI, Arial, sans-serif" font-weight="700">Plate A</text>
      <text x="994" y="500" text-anchor="middle" fill="${PALETTE.ink}" font-size="16" font-family="Segoe UI, Arial, sans-serif" font-weight="700">Plate B</text>
      <path d="M340 300 H950" stroke="${PALETTE.amber}" stroke-width="3" stroke-dasharray="6 8"/>
      <path d="M340 350 H950" stroke="${PALETTE.amber}" stroke-width="3" stroke-dasharray="6 8"/>
      <path d="M340 400 H950" stroke="${PALETTE.amber}" stroke-width="3" stroke-dasharray="6 8"/>
      <text x="640" y="280" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Electric field (CPT)</text>
      ${box(470, 520, 340, 70, "Displacement current", "#FEF3C7", PALETTE.amber)}`;
    case "farfield":
    case "rf":
    case "microwave":
      return `
      ${box(100, 280, 200, 90, "RF source")}
      <path d="M340 325 C420 250, 520 400, 620 325 S820 250, 920 325" fill="none" stroke="${PALETTE.blue}" stroke-width="4"/>
      <circle cx="360" cy="325" r="8" fill="${PALETTE.cyan}"/>
      <circle cx="520" cy="325" r="8" fill="${PALETTE.cyan}"/>
      <circle cx="700" cy="325" r="8" fill="${PALETTE.cyan}"/>
      <circle cx="880" cy="325" r="8" fill="${PALETTE.cyan}"/>
      ${box(980, 280, 200, 90, "Rectenna", "#D1FAE5", PALETTE.green)}
      <text x="640" y="430" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Propagating wave · distance-first link</text>`;
    case "laser":
      return `
      ${box(120, 300, 180, 80, "Laser Tx")}
      <line x1="320" y1="340" x2="920" y2="340" stroke="${PALETTE.rose}" stroke-width="6"/>
      <polygon points="920,340 880,320 880,360" fill="${PALETTE.rose}"/>
      ${box(960, 300, 200, 80, "PV receiver", "#FEE2E2", PALETTE.rose)}
      <text x="640" y="420" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Optical power beaming · line of sight</text>`;
    case "near-far":
      return `
      ${box(120, 240, 460, 280, "", "#EFF6FF")}
      ${box(700, 240, 460, 280, "", "#FDF2F8", PALETTE.rose)}
      <text x="350" y="290" text-anchor="middle" fill="${PALETTE.blue}" font-size="22" font-weight="800" font-family="Segoe UI, Arial, sans-serif">Near-field</text>
      <text x="930" y="290" text-anchor="middle" fill="${PALETTE.rose}" font-size="22" font-weight="800" font-family="Segoe UI, Arial, sans-serif">Far-field</text>
      ${coil(350, 390, 48)}
      <path d="M820 360 C880 320, 940 420, 1000 360 S1120 320, 1120 360" fill="none" stroke="${PALETTE.rose}" stroke-width="3"/>
      <text x="350" y="490" text-anchor="middle" fill="${PALETTE.muted}" font-size="15" font-family="Segoe UI, Arial, sans-serif">Pads · docks · high efficiency</text>
      <text x="930" y="490" text-anchor="middle" fill="${PALETTE.muted}" font-size="15" font-family="Segoe UI, Arial, sans-serif">Beams · sensors · distance</text>`;
    case "static-dynamic":
      return `
      ${box(120, 250, 420, 220, "", "#EFF6FF")}
      ${box(740, 250, 420, 220, "", "#ECFDF5", PALETTE.green)}
      <text x="330" y="310" text-anchor="middle" fill="${PALETTE.blue}" font-size="22" font-weight="800" font-family="Segoe UI, Arial, sans-serif">Static dock</text>
      <text x="950" y="310" text-anchor="middle" fill="${PALETTE.green}" font-size="22" font-weight="800" font-family="Segoe UI, Arial, sans-serif">Dynamic path</text>
      <rect x="230" y="350" width="200" height="50" rx="10" fill="#BFDBFE"/>
      <rect x="800" y="370" width="300" height="24" rx="8" fill="#A7F3D0"/>
      <circle cx="860" cy="382" r="18" fill="${PALETTE.green}"/>
      <circle cx="940" cy="382" r="18" fill="${PALETTE.green}"/>
      <circle cx="1020" cy="382" r="18" fill="${PALETTE.green}"/>`;
    case "one-many":
      return `
      ${box(520, 230, 240, 90, "Transmitter")}
      ${arrow(640, 330, 280, 430)}
      ${arrow(640, 330, 640, 430)}
      ${arrow(640, 330, 1000, 430)}
      ${box(160, 450, 240, 80, "Rx A", "#D1FAE5", PALETTE.green)}
      ${box(520, 450, 240, 80, "Rx B", "#D1FAE5", PALETTE.green)}
      ${box(880, 450, 240, 80, "Rx C", "#D1FAE5", PALETTE.green)}`;
    case "power-flow":
      return `
      ${box(80, 300, 160, 80, "AC/DC")}
      ${box(290, 300, 160, 80, "Inverter")}
      ${box(500, 300, 160, 80, "Coil link", "#FEF3C7", PALETTE.amber)}
      ${box(710, 300, 160, 80, "Rectifier", "#D1FAE5", PALETTE.green)}
      ${box(920, 300, 240, 80, "DC/DC · Battery", "#EDE9FE", PALETTE.violet)}
      ${arrow(240, 340, 280, 340)}
      ${arrow(450, 340, 490, 340)}
      ${arrow(660, 340, 700, 340, PALETTE.green)}
      ${arrow(870, 340, 910, 340, PALETTE.violet)}`;
    case "coupling":
    case "k-q":
      return `
      ${coil(360, 340, 90)}
      ${coil(920, 340, 90, PALETTE.cyan)}
      <text x="360" y="470" text-anchor="middle" fill="${PALETTE.ink}" font-size="20" font-weight="700" font-family="Segoe UI, Arial, sans-serif">L1 · Q1</text>
      <text x="920" y="470" text-anchor="middle" fill="${PALETTE.ink}" font-size="20" font-weight="700" font-family="Segoe UI, Arial, sans-serif">L2 · Q2</text>
      <text x="640" y="300" text-anchor="middle" fill="${PALETTE.amber}" font-size="28" font-weight="800" font-family="Segoe UI, Arial, sans-serif">k = M / √(L1 L2)</text>
      <path d="M470 340 H810" stroke="${PALETTE.amber}" stroke-width="4" stroke-dasharray="10 8"/>`;
    case "series":
      return `
      ${box(160, 300, 140, 80, "Vs")}
      <circle cx="420" cy="340" r="34" fill="none" stroke="${PALETTE.blue}" stroke-width="4"/>
      <text x="420" y="348" text-anchor="middle" fill="${PALETTE.ink}" font-size="18" font-weight="700" font-family="Segoe UI, Arial, sans-serif">L</text>
      <rect x="520" y="300" width="70" height="80" fill="none" stroke="${PALETTE.amber}" stroke-width="4"/>
      <line x1="555" y1="300" x2="555" y2="380" stroke="${PALETTE.amber}" stroke-width="4"/>
      <text x="555" y="420" text-anchor="middle" fill="${PALETTE.ink}" font-size="18" font-weight="700" font-family="Segoe UI, Arial, sans-serif">C</text>
      ${box(700, 300, 160, 80, "Rload", "#D1FAE5", PALETTE.green)}
      ${arrow(300, 340, 370, 340)}
      ${arrow(470, 340, 510, 340)}
      ${arrow(600, 340, 690, 340, PALETTE.green)}
      <text x="640" y="500" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Series resonance · impedance minimum</text>`;
    case "parallel":
      return `
      ${box(140, 300, 140, 80, "Is")}
      <line x1="360" y1="250" x2="360" y2="430" stroke="${PALETTE.line}" stroke-width="4"/>
      <circle cx="460" cy="280" r="30" fill="none" stroke="${PALETTE.blue}" stroke-width="4"/>
      <rect x="430" y="360" width="60" height="50" fill="none" stroke="${PALETTE.amber}" stroke-width="4"/>
      <line x1="460" y1="360" x2="460" y2="410" stroke="${PALETTE.amber}" stroke-width="4"/>
      ${box(620, 300, 200, 80, "Parallel tank", "#FEF3C7", PALETTE.amber)}
      ${box(920, 300, 200, 80, "Load", "#D1FAE5", PALETTE.green)}
      <text x="640" y="500" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Parallel resonance · impedance peak</text>`;
    case "lcc":
    case "lcl":
    case "llc":
    case "double":
      return `
      ${box(90, 290, 130, 90, "Inv")}
      ${box(260, 290, 120, 90, "Lf", "#FEF3C7", PALETTE.amber)}
      ${box(420, 290, 120, 90, "Cf", "#DBEAFE")}
      ${box(580, 290, 120, 90, "Lp", "#EDE9FE", PALETTE.violet)}
      ${box(780, 290, 140, 90, "Gap M", "#ECFDF5", PALETTE.green)}
      ${box(980, 290, 180, 90, "Rx net", "#D1FAE5", PALETTE.green)}
      ${arrow(220, 335, 250, 335)}
      ${arrow(380, 335, 410, 335)}
      ${arrow(540, 335, 570, 335)}
      ${arrow(700, 335, 770, 335, PALETTE.green)}
      ${arrow(920, 335, 970, 335, PALETTE.green)}
      <text x="640" y="460" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Multi-element compensation network</text>`;
    case "frequency":
    case "split":
      return `
      <polyline points="140,480 260,430 380,300 500,250 620,300 740,430 860,300 980,250 1100,320" fill="none" stroke="${PALETTE.blue}" stroke-width="4"/>
      <line x1="140" y1="500" x2="1100" y2="500" stroke="${PALETTE.line}" stroke-width="2"/>
      <text x="640" y="560" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">${kind === "split" ? "Frequency splitting / bifurcation peaks" : "Gain vs frequency operating band"}</text>
      <circle cx="500" cy="250" r="8" fill="${PALETTE.amber}"/>
      <circle cx="980" cy="250" r="8" fill="${PALETTE.amber}"/>`;
    case "soft":
    case "zvs":
    case "zcs":
      return `
      ${waveform(180, 320, 420, PALETTE.blue)}
      ${waveform(700, 320, 420, PALETTE.cyan)}
      <text x="390" y="280" text-anchor="middle" fill="${PALETTE.blue}" font-size="18" font-weight="700" font-family="Segoe UI, Arial, sans-serif">Voltage</text>
      <text x="910" y="280" text-anchor="middle" fill="${PALETTE.cyan}" font-size="18" font-weight="700" font-family="Segoe UI, Arial, sans-serif">Current</text>
      <circle cx="390" cy="320" r="10" fill="${PALETTE.amber}"/>
      <circle cx="910" cy="320" r="10" fill="${PALETTE.amber}"/>
      <text x="640" y="470" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">${kind === "zcs" ? "Zero-current switching instant" : kind === "zvs" ? "Zero-voltage switching instant" : "Soft-switching trajectories"}</text>`;
    case "regulate":
    case "stability":
      return `
      ${box(120, 260, 220, 100, "Sense")}
      ${box(480, 260, 280, 100, "Controller", "#EDE9FE", PALETTE.violet)}
      ${box(920, 260, 220, 100, "Actuator", "#FEF3C7", PALETTE.amber)}
      ${arrow(350, 310, 470, 310, PALETTE.violet)}
      ${arrow(770, 310, 910, 310, PALETTE.amber)}
      <path d="M1030 370 Q640 520 230 370" fill="none" stroke="${PALETTE.green}" stroke-width="3" stroke-dasharray="8 6"/>
      <text x="640" y="500" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Closed-loop regulation across docking scatter</text>`;
    case "spiral":
    case "coil":
      return `
      ${coil(640, 360, 140)}
      <line x1="640" y1="220" x2="640" y2="500" stroke="${PALETTE.line}" stroke-width="2" stroke-dasharray="4 6"/>
      <line x1="480" y1="360" x2="800" y2="360" stroke="${PALETTE.line}" stroke-width="2" stroke-dasharray="4 6"/>
      <text x="820" y="365" fill="${PALETTE.muted}" font-size="16" font-family="Segoe UI, Arial, sans-serif">OD</text>
      <text x="640" y="560" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Planar / spiral coil geometry</text>`;
    case "dd":
      return `
      <ellipse cx="460" cy="360" rx="150" ry="110" fill="none" stroke="${PALETTE.blue}" stroke-width="8"/>
      <ellipse cx="820" cy="360" rx="150" ry="110" fill="none" stroke="${PALETTE.cyan}" stroke-width="8"/>
      <text x="460" y="368" text-anchor="middle" fill="${PALETTE.blue}" font-size="28" font-weight="800" font-family="Segoe UI, Arial, sans-serif">D</text>
      <text x="820" y="368" text-anchor="middle" fill="${PALETTE.cyan}" font-size="28" font-weight="800" font-family="Segoe UI, Arial, sans-serif">D</text>
      <text x="640" y="540" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">DD / bipolar coil pair</text>`;
    case "array":
      return `
      ${coil(320, 320, 55)}${coil(520, 320, 55)}${coil(720, 320, 55)}${coil(920, 320, 55)}
      ${coil(420, 480, 55, PALETTE.cyan)}${coil(620, 480, 55, PALETTE.cyan)}${coil(820, 480, 55, PALETTE.cyan)}
      <text x="640" y="250" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Multi-coil array for alignment tolerance</text>`;
    case "litz":
      return `
      ${[0, 1, 2, 3, 4, 5].map((i) => {
        const a = (i / 6) * Math.PI * 2;
        const x = 640 + Math.cos(a) * 90;
        const y = 360 + Math.sin(a) * 90;
        return `<circle cx="${x}" cy="${y}" r="18" fill="#DBEAFE" stroke="${PALETTE.blue}" stroke-width="3"/>`;
      }).join("")}
      <circle cx="640" cy="360" r="18" fill="#FEF3C7" stroke="${PALETTE.amber}" stroke-width="3"/>
      <text x="640" y="520" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Litz strands · reduced skin / proximity loss</text>`;
    case "ferrite":
      return `
      <rect x="220" y="280" width="840" height="40" fill="#334155"/>
      <rect x="250" y="340" width="180" height="120" fill="#1E293B" stroke="${PALETTE.amber}" stroke-width="3"/>
      <rect x="460" y="340" width="180" height="120" fill="#1E293B" stroke="${PALETTE.amber}" stroke-width="3"/>
      <rect x="670" y="340" width="180" height="120" fill="#1E293B" stroke="${PALETTE.amber}" stroke-width="3"/>
      <rect x="880" y="340" width="150" height="120" fill="#1E293B" stroke="${PALETTE.amber}" stroke-width="3"/>
      ${coil(550, 250, 40)}
      <text x="640" y="520" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Ferrite tile flux guide under coil</text>`;
    case "shield":
      return `
      ${coil(640, 300, 70)}
      <rect x="260" y="420" width="760" height="28" fill="#94A3B8"/>
      <rect x="260" y="460" width="760" height="50" fill="#E2E8F0" stroke="${PALETTE.line}" stroke-width="2"/>
      <text x="640" y="492" text-anchor="middle" fill="${PALETTE.ink}" font-size="16" font-weight="700" font-family="Segoe UI, Arial, sans-serif">Shield / chassis plane</text>
      <path d="M500 360 Q640 410 780 360" fill="none" stroke="${PALETTE.rose}" stroke-width="3" stroke-dasharray="6 6"/>
      <text x="640" y="560" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Leakage flux control near metal</text>`;
    case "align":
    case "gap":
      return `
      ${coil(420, 320, 80)}
      ${coil(860, 360, 80, PALETTE.cyan)}
      <line x1="520" y1="320" x2="760" y2="360" stroke="${PALETTE.amber}" stroke-width="3" stroke-dasharray="8 6"/>
      <text x="640" y="250" text-anchor="middle" fill="${PALETTE.amber}" font-size="20" font-weight="700" font-family="Segoe UI, Arial, sans-serif">Δx / Δz misalignment</text>
      <text x="640" y="520" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Alignment window and air-gap budget</text>`;
    case "thermal":
      return `
      ${box(200, 280, 280, 160, "Power stage", "#FEE2E2", PALETTE.rose)}
      ${box(560, 280, 200, 160, "TIM", "#FEF3C7", PALETTE.amber)}
      ${box(840, 250, 260, 220, "Heatsink", "#E0F2FE", PALETTE.cyan)}
      ${arrow(490, 360, 550, 360, PALETTE.amber)}
      ${arrow(770, 360, 830, 360, PALETTE.cyan)}
      <path d="M920 240 L940 210 L960 240" fill="none" stroke="${PALETTE.rose}" stroke-width="3"/>
      <path d="M980 240 L1000 210 L1020 240" fill="none" stroke="${PALETTE.rose}" stroke-width="3"/>
      <text x="640" y="540" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Heat path: loss → interface → sink</text>`;
    case "pcb":
      return `
      <rect x="180" y="240" width="920" height="320" rx="16" fill="#0F172A"/>
      <rect x="220" y="280" width="220" height="120" rx="10" fill="#1E293B" stroke="${PALETTE.cyan}" stroke-width="2"/>
      <rect x="480" y="280" width="220" height="120" rx="10" fill="#1E293B" stroke="${PALETTE.amber}" stroke-width="2"/>
      <rect x="740" y="280" width="300" height="120" rx="10" fill="#1E293B" stroke="${PALETTE.green}" stroke-width="2"/>
      <path d="M260 460 H980" stroke="#38BDF8" stroke-width="6"/>
      <path d="M260 500 H980" stroke="#FBBF24" stroke-width="4"/>
      <text x="330" y="350" text-anchor="middle" fill="#E2E8F0" font-size="16" font-family="Segoe UI, Arial, sans-serif">Switch</text>
      <text x="590" y="350" text-anchor="middle" fill="#E2E8F0" font-size="16" font-family="Segoe UI, Arial, sans-serif">Driver</text>
      <text x="890" y="350" text-anchor="middle" fill="#E2E8F0" font-size="16" font-family="Segoe UI, Arial, sans-serif">Sense / MCU</text>`;
    case "rectifier":
      return `
      ${box(120, 300, 180, 80, "AC in")}
      <path d="M380 280 L460 340 L380 400 Z" fill="none" stroke="${PALETTE.blue}" stroke-width="4"/>
      <path d="M520 280 L600 340 L520 400 Z" fill="none" stroke="${PALETTE.cyan}" stroke-width="4"/>
      ${box(700, 300, 200, 80, "DC bus", "#D1FAE5", PALETTE.green)}
      ${box(980, 300, 160, 80, "Load", "#EDE9FE", PALETTE.violet)}
      ${arrow(300, 340, 360, 340)}
      ${arrow(620, 340, 690, 340, PALETTE.green)}
      ${arrow(910, 340, 970, 340, PALETTE.violet)}`;
    case "inverter":
    case "bridge":
      return `
      <rect x="260" y="230" width="760" height="320" rx="18" fill="#EFF6FF" stroke="${PALETTE.blue}" stroke-width="2"/>
      ${box(320, 280, 140, 70, "Q1")}
      ${box(560, 280, 140, 70, "Q2")}
      ${box(320, 420, 140, 70, "Q3")}
      ${box(560, 420, 140, 70, "Q4")}
      ${box(820, 340, 140, 80, "Coil", "#FEF3C7", PALETTE.amber)}
      ${arrow(470, 315, 550, 315)}
      ${arrow(470, 455, 550, 455)}
      ${arrow(710, 380, 810, 380, PALETTE.amber)}
      <text x="640" y="580" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Full-bridge inverter to coil</text>`;
    case "dcdc":
      return `
      ${box(140, 300, 160, 90, "Vin")}
      ${box(400, 300, 200, 90, "Switch + L", "#FEF3C7", PALETTE.amber)}
      ${box(700, 300, 160, 90, "C out", "#DBEAFE")}
      ${box(960, 300, 180, 90, "Vout", "#D1FAE5", PALETTE.green)}
      ${arrow(310, 345, 390, 345)}
      ${arrow(610, 345, 690, 345)}
      ${arrow(870, 345, 950, 345, PALETTE.green)}
      <text x="640" y="470" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">DC/DC conversion stage</text>`;
    case "gan":
    case "sic":
      return `
      ${box(200, 250, 360, 260, kind === "gan" ? "GaN HEMT" : "SiC MOSFET", "#EDE9FE", PALETTE.violet)}
      ${box(720, 250, 360, 260, "Si baseline", "#F1F5F9", PALETTE.muted)}
      <text x="380" y="360" text-anchor="middle" fill="${PALETTE.violet}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Faster · lower Qoss</text>
      <text x="900" y="360" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Mature · robust</text>
      <text x="640" y="560" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Device technology trade space</text>`;
    case "gate":
      return `
      ${box(140, 300, 220, 100, "PWM / MCU")}
      ${box(480, 300, 260, 100, "Gate driver", "#FEF3C7", PALETTE.amber)}
      ${box(880, 300, 240, 100, "Power FET", "#DBEAFE")}
      ${arrow(370, 350, 470, 350, PALETTE.amber)}
      ${arrow(750, 350, 870, 350)}
      <text x="640" y="470" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Isolated / bootstrap drive path</text>`;
    case "loss":
      return `
      <rect x="200" y="250" width="120" height="280" fill="#BFDBFE"/>
      <rect x="360" y="300" width="120" height="230" fill="#93C5FD"/>
      <rect x="520" y="220" width="120" height="310" fill="#FCD34D"/>
      <rect x="680" y="280" width="120" height="250" fill="#FCA5A5"/>
      <rect x="840" y="330" width="120" height="200" fill="#C4B5FD"/>
      <text x="260" y="560" text-anchor="middle" fill="${PALETTE.ink}" font-size="14" font-family="Segoe UI, Arial, sans-serif">Conduction</text>
      <text x="420" y="560" text-anchor="middle" fill="${PALETTE.ink}" font-size="14" font-family="Segoe UI, Arial, sans-serif">Switching</text>
      <text x="580" y="560" text-anchor="middle" fill="${PALETTE.ink}" font-size="14" font-family="Segoe UI, Arial, sans-serif">Core</text>
      <text x="740" y="560" text-anchor="middle" fill="${PALETTE.ink}" font-size="14" font-family="Segoe UI, Arial, sans-serif">Copper</text>
      <text x="900" y="560" text-anchor="middle" fill="${PALETTE.ink}" font-size="14" font-family="Segoe UI, Arial, sans-serif">Other</text>
      <text x="640" y="230" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Loss breakdown map</text>`;
    case "emi":
      return `
      ${box(120, 300, 160, 90, "Noise")}
      ${box(380, 300, 200, 90, "Filter / CMC", "#FEF3C7", PALETTE.amber)}
      ${box(700, 300, 200, 90, "Cable / LISN", "#DBEAFE")}
      ${box(1000, 300, 160, 90, "Limits", "#D1FAE5", PALETTE.green)}
      ${arrow(290, 345, 370, 345)}
      ${arrow(590, 345, 690, 345)}
      ${arrow(910, 345, 990, 345, PALETTE.green)}
      ${waveform(380, 460, 520, PALETTE.rose)}`;
    case "pfc":
      return `
      ${box(120, 300, 180, 90, "AC mains")}
      ${box(420, 300, 220, 90, "PFC stage", "#FEF3C7", PALETTE.amber)}
      ${box(760, 300, 180, 90, "DC bus", "#DBEAFE")}
      ${box(1040, 300, 120, 90, "Load")}
      ${arrow(310, 345, 410, 345)}
      ${arrow(650, 345, 750, 345)}
      ${arrow(950, 345, 1030, 345)}
      ${waveform(420, 450, 400, PALETTE.green)}
      <text x="620" y="520" text-anchor="middle" fill="${PALETTE.muted}" font-size="16" font-family="Segoe UI, Arial, sans-serif">Shaped input current · high PF</text>`;
    case "sense":
      return `
      ${box(160, 300, 240, 100, "Power path")}
      ${box(560, 240, 220, 80, "Current sense", "#FEF3C7", PALETTE.amber)}
      ${box(560, 380, 220, 80, "Voltage sense", "#DBEAFE")}
      ${box(940, 300, 220, 100, "ADC / MCU", "#EDE9FE", PALETTE.violet)}
      ${arrow(410, 350, 550, 280, PALETTE.amber)}
      ${arrow(410, 350, 550, 420)}
      ${arrow(790, 280, 930, 330, PALETTE.violet)}
      ${arrow(790, 420, 930, 370, PALETTE.violet)}`;
    case "protect":
      return `
      ${box(200, 300, 240, 100, "Power stage")}
      ${box(560, 220, 200, 80, "OCP", "#FEE2E2", PALETTE.rose)}
      ${box(560, 340, 200, 80, "OVP", "#FEF3C7", PALETTE.amber)}
      ${box(560, 460, 200, 80, "OTP", "#DBEAFE")}
      ${box(900, 300, 240, 100, "Safe shutdown", "#D1FAE5", PALETTE.green)}
      ${arrow(450, 350, 550, 260, PALETTE.rose)}
      ${arrow(450, 350, 550, 380, PALETTE.amber)}
      ${arrow(450, 350, 550, 500)}
      ${arrow(770, 350, 890, 350, PALETTE.green)}`;
    case "layout":
      return `
      <rect x="180" y="240" width="920" height="300" rx="16" fill="#0B1220"/>
      <rect x="220" y="280" width="360" height="80" fill="#1E293B" stroke="${PALETTE.cyan}" stroke-width="2"/>
      <text x="400" y="330" text-anchor="middle" fill="#E2E8F0" font-size="18" font-family="Segoe UI, Arial, sans-serif">DC link / busbar</text>
      <rect x="640" y="280" width="400" height="200" fill="#1E293B" stroke="${PALETTE.amber}" stroke-width="2"/>
      <text x="840" y="360" text-anchor="middle" fill="#E2E8F0" font-size="18" font-family="Segoe UI, Arial, sans-serif">Switching loop</text>
      <circle cx="760" cy="400" r="10" fill="${PALETTE.rose}"/>
      <text x="640" y="580" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Minimize loop area · control parasitics</text>`;
    case "history":
      return `
      <line x1="160" y1="400" x2="1120" y2="400" stroke="${PALETTE.line}" stroke-width="4"/>
      ${[220, 420, 640, 860, 1060].map((x, i) => `<circle cx="${x}" cy="400" r="12" fill="${i === 4 ? PALETTE.blue : PALETTE.cyan}"/><text x="${x}" y="450" text-anchor="middle" fill="${PALETTE.ink}" font-size="14" font-family="Segoe UI, Arial, sans-serif">${["Early EM", "Inductive", "Qi era", "Resonant", "Industrial"][i]}</text>`).join("")}
      <text x="640" y="300" text-anchor="middle" fill="${PALETTE.muted}" font-size="20" font-family="Segoe UI, Arial, sans-serif">Wireless power timeline</text>`;
    case "glossary":
    case "checklist":
      return `
      ${box(180, 240, 280, 90, "Define")}
      ${box(500, 240, 280, 90, "Measure", "#FEF3C7", PALETTE.amber)}
      ${box(820, 240, 280, 90, "Verify", "#D1FAE5", PALETTE.green)}
      ${box(180, 400, 280, 90, "Protect", "#FEE2E2", PALETTE.rose)}
      ${box(500, 400, 280, 90, "Document", "#EDE9FE", PALETTE.violet)}
      ${box(820, 400, 280, 90, "Deploy", "#DBEAFE")}
      <text x="640" y="560" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Structured engineering checklist</text>`;
    default: {
      const offset = seed % 40;
      return `
      ${box(160 + offset, 280, 240, 120, "Concept", "#DBEAFE")}
      ${box(520, 280, 240, 120, "Mechanism", "#FEF3C7", PALETTE.amber)}
      ${box(880 - offset, 280, 240, 120, "Practice", "#D1FAE5", PALETTE.green)}
      ${arrow(410 + offset, 340, 510, 340)}
      ${arrow(770, 340, 870 - offset, 340, PALETTE.green)}
      <text x="640" y="480" text-anchor="middle" fill="${PALETTE.muted}" font-size="18" font-family="Segoe UI, Arial, sans-serif">Topic relationship map</text>`;
    }
  }
}

function accentForCategory(categoryId: string) {
  if (categoryId.includes("intelligent")) return "#7C3AED";
  if (categoryId.includes("charging")) return "#0891B2";
  if (categoryId.includes("battery")) return "#059669";
  if (categoryId.includes("embedded")) return "#475569";
  if (categoryId.includes("thermal")) return "#EA580C";
  if (categoryId.includes("emi")) return "#E11D48";
  if (categoryId.includes("safety")) return "#DC2626";
  if (categoryId.includes("standards")) return "#1D4ED8";
  if (categoryId.includes("resonant")) return "#0B5FFF";
  if (categoryId.includes("coil")) return "#4F46E5";
  if (categoryId.includes("power-electronics")) return "#D97706";
  return "#0284C7";
}

function writeSvg(filePath: string, svg: string) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, svg, "utf8");
}

function main() {
  const articles = getAllKnowledgeArticles();
  const categories = [...new Set(articles.map((a) => a.categoryId))];

  for (const categoryId of categories) {
    const accent = accentForCategory(categoryId);
    const title = categoryId.replace(/-/g, " ");
    const overviewHero = frame(
      title,
      "Collection overview diagram",
      buildBody(
        categoryId.includes("coil")
          ? "coil"
          : categoryId.includes("resonant")
            ? "resonant"
            : categoryId.includes("intelligent")
              ? "regulate"
              : categoryId.includes("charging")
                ? "static-dynamic"
                : categoryId.includes("battery")
                  ? "power-flow"
                  : categoryId.includes("embedded")
                    ? "pcb"
                    : categoryId.includes("thermal")
                      ? "thermal"
                      : categoryId.includes("emi")
                        ? "emi"
                        : categoryId.includes("safety")
                          ? "protect"
                          : categoryId.includes("standards")
                            ? "checklist"
                            : categoryId.includes("power-electronics")
                              ? "inverter"
                              : "wpt-link",
        hash(categoryId),
      ),
      accent,
    );
    const overviewInline = frame(
      title,
      "Supporting concept diagram",
      buildBody(
        categoryId.includes("coil")
          ? "ferrite"
          : categoryId.includes("resonant")
            ? "k-q"
            : categoryId.includes("intelligent")
              ? "protect"
              : categoryId.includes("charging")
                ? "one-many"
                : categoryId.includes("battery")
                  ? "thermal"
                  : categoryId.includes("embedded")
                    ? "sense"
                    : categoryId.includes("thermal")
                      ? "protect"
                      : categoryId.includes("emi")
                        ? "shield"
                        : categoryId.includes("safety")
                          ? "checklist"
                          : categoryId.includes("standards")
                            ? "glossary"
                            : categoryId.includes("power-electronics")
                              ? "power-flow"
                              : "coupling",
        hash(categoryId) + 1,
      ),
      accent,
    );
    writeSvg(path.join(OUT, categoryId, `_collection-hero.svg`), overviewHero);
    writeSvg(path.join(OUT, categoryId, `_collection-inline.svg`), overviewInline);
  }

  for (const article of articles) {
    const kind = detectKind(article.slug, article.categoryId);
    const accent = accentForCategory(article.categoryId);
    const seed = hash(article.slug);
    const hero = frame(
      article.title,
      "Hero diagram for this knowledge article",
      buildBody(kind, seed),
      accent,
    );
    // Slightly different second diagram: reuse related kind or generic companion
    const companionKind: DiagramKind =
      kind === "coil" || kind === "spiral" || kind === "dd"
        ? "align"
        : kind === "inverter" || kind === "rectifier"
          ? "loss"
          : kind === "resonant" || kind === "lcc" || kind === "series"
            ? "frequency"
            : kind === "wpt-link"
              ? "power-flow"
              : "checklist";
    const diagram = frame(
      article.title,
      "In-article supporting diagram",
      buildBody(companionKind, seed + 17),
      accent,
    );

    writeSvg(path.join(OUT, article.categoryId, `${article.slug}-hero.svg`), hero);
    writeSvg(path.join(OUT, article.categoryId, `${article.slug}-diagram.svg`), diagram);
  }

  console.log(`Generated diagrams for ${articles.length} articles under public/images/knowledge`);
}

main();
