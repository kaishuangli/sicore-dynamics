import { getUploadedProducts } from "@/lib/catalog/products";
import type { LocalizedText } from "@/lib/catalog/types";
import { pickLocalized } from "@/lib/catalog/types";
import type { Locale } from "@/lib/i18n/config";
import { dockingCategoryRedirects, type DockingProductId } from "@/lib/docking-products";

export type DockingDimension = {
  width: string;
  depth: string;
  height: string;
  note?: LocalizedText;
};

export type DockingSku = {
  id: string;
  categoryId: DockingProductId;
  model: string;
  name: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  features: LocalizedText[];
  image: string;
  gallery?: string[];
  imageAlt: LocalizedText;
  specs: { label: LocalizedText; value: LocalizedText }[];
  dimensions: DockingDimension;
  priceCents: number;
  datasheetHref?: string;
};

const L = (en: string, zh: string, es: string): LocalizedText => ({ en, zh, es });

const spec = (
  label: [string, string, string],
  value: string | [string, string, string],
) => ({
  label: L(label[0], label[1], label[2]),
  value: typeof value === "string" ? L(value, value, value) : L(value[0], value[1], value[2]),
});

const input = ["Input", "输入", "Entrada"] as [string, string, string];
const output = ["Output", "输出", "Salida"] as [string, string, string];
const contacts = ["Contacts", "触点", "Contactos"] as [string, string, string];
const resistance = ["Contact Resistance", "接触电阻", "Resistencia de contacto"] as [string, string, string];
const temp = ["Operating Temp", "工作温度", "Temp. de operación"] as [string, string, string];
const protection = ["Protection", "保护", "Protección"] as [string, string, string];
const life = ["Mechanical Life", "机械寿命", "Vida mecánica"] as [string, string, string];
const rating = ["Ingress", "防护等级", "Protección IP"] as [string, string, string];
const current = ["Rated Current", "额定电流", "Corriente nominal"] as [string, string, string];
const voltage = ["Rated Voltage", "额定电压", "Voltaje nominal"] as [string, string, string];
const pitch = ["Pitch", "间距", "Paso"] as [string, string, string];
const dielectric = ["Dielectric", "耐电压", "Rigidez dieléctrica"] as [string, string, string];
const insulation = ["Insulation", "绝缘电阻", "Aislamiento"] as [string, string, string];
const housing = ["Housing", "塑件", "Carcasa"] as [string, string, string];
const mount = ["Mount", "安装", "Montaje"] as [string, string, string];

const springContactPinCounts = [2, 3, 4, 6, 7] as const;
type SpringContactPins = (typeof springContactPinCounts)[number];

const springContactCopy: Record<
  SpringContactPins,
  { name: LocalizedText; tagline: LocalizedText; description: LocalizedText; extraFeature: LocalizedText }
> = {
  2: {
    name: L("2-Pin Spring Contact Pair", "2 针弹簧触点对", "Par de contacto elástico 2 pines"),
    tagline: L("Power and return in the smallest envelope.", "电源与回流，最小体积。", "Potencia y retorno en el menor tamaño."),
    description: L(
      "Two-pin SMT pair: a gold leaf-spring block mates to a matching flat-pad block for compact 5–24 V charging cradles.",
      "两针 SMT 配对：镀金簧片座对接平面触片座，适合紧凑 5–24 V 充电坞。",
      "Par SMT de dos pines: bloque de lámina dorada contra pad plano para cunas de 5–24 V.",
    ),
    extraFeature: L("Two-point path for simple battery or dock power", "两点回路，适合电池或坞座供电", "Ruta de dos puntos para batería o muelle"),
  },
  3: {
    name: L("3-Pin Spring Contact Pair", "3 针弹簧触点对", "Par de contacto elástico 3 pines"),
    tagline: L("Power, return, and a sense or ID line.", "电源、回流与检测/识别脚。", "Potencia, retorno y línea de sentido o ID."),
    description: L(
      "Three-pin SMT pair adds a third contact for charge detect, thermistor, or pack ID while keeping the same 3.0 mm pitch family.",
      "三针 SMT 配对增加检测、热敏或电池识别脚，间距仍为 3.0 mm。",
      "El par de tres pines añade detección, NTC o ID, con el mismo paso de 3.0 mm.",
    ),
    extraFeature: L("Third pin for detect, NTC, or pack ID", "第三脚用于检测、NTC 或电池识别", "Tercer pin para detección, NTC o ID"),
  },
  4: {
    name: L("4-Pin Spring Contact Pair", "4 针弹簧触点对", "Par de contacto elástico 4 pines"),
    tagline: L("Power plus two signal or ID contacts.", "电源加两路信号/识别。", "Potencia más dos contactos de señal o ID."),
    description: L(
      "Four-pin SMT pair for docks that need power, return, and two extra lines for communication or status.",
      "四针 SMT 配对，适合需要电源、回流及两路通信/状态线的充电坞。",
      "Par SMT de cuatro pines para potencia, retorno y dos líneas extra de comunicación.",
    ),
    extraFeature: L("Four contacts for power and light signaling", "四触点兼顾供电与轻量信号", "Cuatro contactos para potencia y señal"),
  },
  6: {
    name: L("6-Pin Spring Contact Pair", "6 针弹簧触点对", "Par de contacto elástico 6 pines"),
    tagline: L("Wider face for multi-cell or mixed I/O.", "更宽接触面，适合多串或混合 I/O。", "Cara más ancha para celdas o I/O mixto."),
    description: L(
      "Six-pin SMT pair spreads power and signal across a longer housing when the dock needs extra returns or sense lines.",
      "六针 SMT 配对，壳体更长，适合额外回流或检测线。",
      "Par SMT de seis pines con carcasa más larga para retornos o líneas de sentido extra.",
    ),
    extraFeature: L("Six-way layout for mixed power and sense", "六路布局，电源与检测混排", "Seis vías para potencia y sentido"),
  },
  7: {
    name: L("7-Pin Spring Contact Pair", "7 针弹簧触点对", "Par de contacto elástico 7 pines"),
    tagline: L("Highest pin count in this SMT family.", "本系列最多针数。", "Mayor número de pines de esta familia SMT."),
    description: L(
      "Seven-pin SMT pair for instrument docks that share power, ID, and several status lines on one 3.0 mm-pitch face.",
      "七针 SMT 配对，适合在同一 3.0 mm 接触面上同时走电源、识别与多路状态。",
      "Par SMT de siete pines para potencia, ID y varias líneas de estado en un mismo paso de 3.0 mm.",
    ),
    extraFeature: L("Seven contacts on one 3.0 mm-pitch face", "七触点，同一 3.0 mm 间距面", "Siete contactos en un paso de 3.0 mm"),
  },
};

function springContactSku(pins: SpringContactPins): DockingSku {
  const copy = springContactCopy[pins];
  const widthMm = (3 * (pins - 1) + 4.8).toFixed(1);
  return {
    id: `sc-sc-${pins}p`,
    categoryId: "spring-contact-charging-dock",
    model: `SC-SC-${pins}P`,
    name: copy.name,
    tagline: copy.tagline,
    description: copy.description,
    features: [
      L(
        "Gold-plated copper-alloy leaf springs (~3 µin) with a matching SMT pad block",
        "铜合金触点镀金约 3U，配套 SMT 平面触片座",
        "Láminas de aleación de cobre doradas (~3 µin) con pad SMT a juego",
      ),
      copy.extraFeature,
      L(
        "LCP housing, 260 °C reflow, SMT tails and alignment posts",
        "LCP 壳体，可过 260 °C 回流，SMT 焊脚与定位柱",
        "Carcasa LCP, reflujo 260 °C, colas SMT y postes de alineación",
      ),
    ],
    image: `/images/products/docking/Contact Charging Dock/${pins}pins/cover.png`,
    imageAlt: L(
      `SC-SC-${pins}P ${pins}-pin spring contact pair`,
      `SC-SC-${pins}P ${pins} 针弹簧触点对`,
      `Par SC-SC-${pins}P de ${pins} pines`,
    ),
    specs: [
      spec(current, "3.0 A"),
      spec(voltage, "24 V"),
      spec(pitch, "3.0 mm"),
      spec(contacts, [`${pins} × leaf spring + pad`, `${pins} × 簧片 + 触片`, `${pins} × lámina + pad`]),
      spec(resistance, "≤ 30 mΩ"),
      spec(dielectric, "500 V"),
      spec(insulation, "500 MΩ"),
      spec(temp, "-40°C ~ +85°C"),
      spec(housing, ["LCP, 260 °C", "LCP，耐温 260 °C", "LCP, 260 °C"]),
      spec(mount, "SMT"),
    ],
    dimensions: {
      width: `${widthMm} mm`,
      depth: "6.0 mm",
      height: "2.4 mm",
      note: L(
        "Spring-housing envelope at 3.0 mm pitch. A 3.5 mm working-height variant is common in this family. Matching pad block sold as the pair shown.",
        "簧片座外形按 3.0 mm 间距估算。同系列常见 3.5 mm 工作高度。图示为配套触片座成对供应。",
        "Carcasa de lámina a paso 3.0 mm. Variante habitual de 3.5 mm de altura de trabajo. El pad se vende como el par de la foto.",
      ),
    },
    priceCents: 0,
  };
}

const pogoImg = (...parts: string[]) => `/images/products/docking/pogo pin/${parts.join("/")}`;
const magnets = ["Magnets", "磁吸", "Imanes"] as [string, string, string];
const series = ["Series", "系列", "Serie"] as [string, string, string];
const unknownDim = { width: "—", depth: "—", height: "—" };

function pogoSku(item: {
  id: string;
  model: string;
  name: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  features: LocalizedText[];
  image: string;
  gallery?: string[];
  specs: DockingSku["specs"];
  dimensions?: DockingDimension;
}): DockingSku {
  return {
    id: item.id,
    categoryId: "pogo-pin-charging-dock",
    model: item.model,
    name: item.name,
    tagline: item.tagline,
    description: item.description,
    features: item.features,
    image: item.image,
    gallery: item.gallery,
    imageAlt: item.name,
    specs: item.specs,
    dimensions: item.dimensions ?? {
      ...unknownDim,
      note: L(
        "Mechanical drawing was not readable from the saved listing. Size to be confirmed.",
        "保存的淘宝页未能读出图纸尺寸，待确认。",
        "El plano del anuncio guardado no era legible. Medida pendiente.",
      ),
    },
    priceCents: 0,
  };
}

const pogoPinSkus: DockingSku[] = [
  pogoSku({
    id: "sc-pd-a-dc8",
    model: "SC-PD-A-DC8",
    name: L("8 mm Round Magnetic DC", "8 mm 圆形磁吸 DC", "DC magnético redondo 8 mm"),
    tagline: L("Series A. Center pin plus shell return.", "系列 A。中心顶针加外壳回流。", "Serie A. Pin central y retorno en el casco."),
    description: L(
      "Round 8 mm NdFeB magnetic DC pair: a gold center pogo mates to the shell ring for compact 2-pole charging.",
      "直径 8 mm 钕铁硼圆形磁吸 DC：镀金中心顶针对外壳环，两点供电。",
      "Par DC magnético NdFeB de 8 mm: pogo central dorado contra el anillo del casco.",
    ),
    features: [
      L("Ø8 mm face with snap-in housing tab", "Ø8 mm 接触面，卡扣外壳", "Cara Ø8 mm con pestaña de encaje"),
      L("Gold center pogo and metal return ring", "镀金中心顶针与金属回流环", "Pogo central dorado y anillo de retorno"),
      L("NdFeB magnets for self-aligning mate", "钕铁硼磁铁，自行对准", "Imanes NdFeB de autoalineación"),
    ],
    image: pogoImg("1", "1pin", "cover.png"),
    gallery: [pogoImg("1", "1pin", "1.png")],
    specs: [
      spec(series, "A"),
      spec(contacts, ["1 × pogo + shell ring", "1 × 顶针 + 外壳环", "1 × pogo + anillo"]),
      spec(["Face", "接触面", "Cara"], "Ø 8 mm"),
      spec(magnets, ["NdFeB", "钕铁硼", "NdFeB"]),
      spec(mount, ["Snap-in / chassis", "卡扣 / 机壳", "Encaje / chasis"]),
    ],
    dimensions: {
      width: "Ø 8 mm",
      depth: "Ø 8 mm",
      height: "—",
      note: L(
        "Diameter from the listing title. Overall height to be confirmed.",
        "直径取自商品标题。总高待确认。",
        "Diámetro del título del anuncio. Altura pendiente.",
      ),
    },
  }),
  pogoSku({
    id: "sc-pd-a-2p",
    model: "SC-PD-A-2P",
    name: L("2-Pin Magnetic Pogo Pair", "2 针磁吸顶针对", "Par pogo magnético 2 pines"),
    tagline: L("Series A. Two pins on an oval face.", "系列 A。椭圆面双顶针。", "Serie A. Dos pines en cara oval."),
    description: L(
      "Two-pin magnetic pogo pair from Series A: spring pins on one half, gold pads on the other, for simple dock power.",
      "系列 A 两针磁吸顶针对：一半弹簧顶针，一半镀金触片，适合坞座供电。",
      "Par magnético de dos pines de la serie A: pines de resorte frente a pads dorados.",
    ),
    features: [
      L("Two gold pogo pins with matching pads", "两枚镀金顶针与配套触片", "Dos pines pogo dorados y pads a juego"),
      L("Oval housing with end alignment features", "椭圆壳体，两端有对准结构", "Carcasa oval con alineación en los extremos"),
      L("Through-hole tails for PCB mount", "直插焊脚，可上 PCB", "Colas through-hole para PCB"),
    ],
    image: pogoImg("1", "2pins", "cover.png"),
    gallery: [
      pogoImg("1", "2pins", "2.png"),
      pogoImg("1", "2pins", "O1CN01IOMGYJ1Xr3kj8QUUA_!!711042976.webp"),
    ],
    specs: [
      spec(series, "A"),
      spec(contacts, "2 × pogo pin"),
      spec(magnets, ["End magnets", "端部磁铁", "Imanes en extremos"]),
      spec(mount, ["Through-hole", "直插", "Through-hole"]),
    ],
  }),
  pogoSku({
    id: "sc-pd-a-4p",
    model: "SC-PD-A-4P",
    name: L("4-Pin Magnetic Pogo Pair", "4 针磁吸顶针对", "Par pogo magnético 4 pines"),
    tagline: L("Series A. Power plus two extra lines.", "系列 A。电源加两路附加线。", "Serie A. Potencia y dos líneas extra."),
    description: L(
      "Four-pin magnetic pogo pair in the same Series A family, for docks that need power, return, and two signal or ID contacts.",
      "同一系列 A 的四针磁吸顶针对，适合电源、回流加两路信号或识别。",
      "Par magnético de cuatro pines de la serie A para potencia, retorno y dos señales.",
    ),
    features: [
      L("Four gold pogo contacts on a compact face", "四枚镀金顶针，接触面紧凑", "Cuatro contactos pogo en cara compacta"),
      L("Magnetic alignment for drop-in mating", "磁吸对准，放下即可对接", "Alineación magnética para acoplar al colocar"),
      L("Same Series A mounting style as the 2-pin", "安装方式与同系列 2 针一致", "Mismo montaje de la serie A que el de 2 pines"),
    ],
    image: pogoImg("1", "4pins", "O1CN01wnu5sL1Xr3kkxcevh_!!711042976.webp"),
    specs: [
      spec(series, "A"),
      spec(contacts, "4 × pogo pin"),
      spec(magnets, ["End magnets", "端部磁铁", "Imanes en extremos"]),
    ],
  }),
  pogoSku({
    id: "sc-pd-b-3p",
    model: "SC-PD-B-3P",
    name: L("3-Pin Magnetic Pogo Pair", "3 针磁吸顶针对", "Par pogo magnético 3 pines"),
    tagline: L("Series B. Linear face, three pins.", "系列 B。一字排列三针。", "Serie B. Cara lineal, tres pines."),
    description: L(
      "Three-pin magnetic pogo pair from Series B: gold spring pins, end magnets, and a slim black housing for handheld docks.",
      "系列 B 三针磁吸顶针对：镀金弹簧针、端部磁铁与扁长黑壳，适合手持充电坞。",
      "Par magnético de tres pines de la serie B: pines dorados, imanes en extremos y carcasa delgada.",
    ),
    features: [
      L("Linear 3-pin layout with end magnets", "一字三针，两端磁铁", "Tres pines en línea con imanes en extremos"),
      L("Gold-plated spring pins and mating pads", "镀金弹簧针与配套触片", "Pines de resorte dorados y pads"),
      L("Same slim family as the Series B 6-pin drawing", "与系列 B 6 针图纸同族扁长壳体", "Misma familia del plano de 6 pines serie B"),
    ],
    image: pogoImg("2", "3pins", "cover.webp"),
    gallery: [pogoImg("2", "3pins", "1.webp"), pogoImg("2", "3pins", "2.webp")],
    specs: [
      spec(series, "B"),
      spec(contacts, "3 × pogo pin"),
      spec(pitch, "3.0 mm"),
      spec(magnets, ["N52 family", "N52 磁铁", "Familia N52"]),
      spec(housing, "PA46 UL94 V-0"),
    ],
  }),
  pogoSku({
    id: "sc-pd-b-3r",
    model: "SC-PD-B-3R",
    name: L("Round 3-Pin Magnetic Pogo", "圆形 3 针磁吸顶针", "Pogo magnético redondo 3 pines"),
    tagline: L("Series B. Round face instead of linear.", "系列 B。圆形接触面。", "Serie B. Cara redonda en lugar de lineal."),
    description: L(
      "Round three-pin magnetic pogo from Series B, for devices that need a circular dock face rather than the slim linear housing.",
      "系列 B 圆形三针磁吸顶针，适合需要圆形坞面、而不是扁长壳体的设备。",
      "Pogo magnético redondo de tres pines de la serie B, para una cara circular de muelle.",
    ),
    features: [
      L("Circular housing with three pogo contacts", "圆形壳体，三枚顶针", "Carcasa circular con tres contactos pogo"),
      L("Magnetic self-alignment on a round face", "圆形面磁吸自对准", "Autoalineación magnética en cara redonda"),
      L("Same Series B gold-pin construction", "与系列 B 相同镀金顶针结构", "Misma construcción de pines dorados serie B"),
    ],
    image: pogoImg("2", "round 3pins", "cover.webp"),
    gallery: [pogoImg("2", "round 3pins", "1.webp"), pogoImg("2", "round 3pins", "2.webp")],
    specs: [
      spec(series, "B"),
      spec(contacts, "3 × pogo pin"),
      spec(magnets, ["NdFeB", "钕铁硼", "NdFeB"]),
      spec(housing, "PA46 UL94 V-0"),
    ],
  }),
  pogoSku({
    id: "sc-pd-b-4p",
    model: "SC-PD-B-4P",
    name: L("4-Pin Magnetic Pogo Pair", "4 针磁吸顶针对", "Par pogo magnético 4 pines"),
    tagline: L("Series B. Four pins on the slim face.", "系列 B。扁长面上四针。", "Serie B. Cuatro pines en cara delgada."),
    description: L(
      "Four-pin Series B magnetic pogo pair for power, return, and two extra lines on the same slim linear housing.",
      "系列 B 四针磁吸顶针对，同一扁长壳体上走电源、回流与两路附加线。",
      "Par magnético de cuatro pines serie B para potencia, retorno y dos líneas extra.",
    ),
    features: [
      L("Four gold pogo pins between end magnets", "四枚镀金顶针，两端磁铁", "Cuatro pines pogo dorados entre imanes"),
      L("Slim linear housing for tight dock pockets", "扁长壳体，适合窄坞槽", "Carcasa lineal delgada para huecos estrechos"),
      L("Photo set includes extra angles of the pair", "含多角度成对照片", "El set incluye varios ángulos del par"),
    ],
    image: pogoImg("2", "4pins", "cover.webp"),
    gallery: [
      pogoImg("2", "4pins", "2_.webp"),
      pogoImg("2", "4pins", "3.webp"),
      pogoImg("2", "4pins", "4.webp"),
      pogoImg("2", "4pins", "5.webp"),
    ],
    specs: [
      spec(series, "B"),
      spec(contacts, "4 × pogo pin"),
      spec(pitch, "3.0 mm"),
      spec(magnets, ["N52 family", "N52 磁铁", "Familia N52"]),
      spec(housing, "PA46 UL94 V-0"),
    ],
  }),
  pogoSku({
    id: "sc-pd-b-5p",
    model: "SC-PD-B-5P",
    name: L("5-Pin Magnetic Pogo Pair", "5 针磁吸顶针对", "Par pogo magnético 5 pines"),
    tagline: L("Series B. Five contacts, still slim.", "系列 B。五触点，壳体仍扁。", "Serie B. Cinco contactos, aún delgado."),
    description: L(
      "Five-pin Series B magnetic pogo pair when a dock needs an extra sense or ID line beyond the 4-pin layout.",
      "系列 B 五针磁吸顶针对，比 4 针多一路检测或识别。",
      "Par magnético de cinco pines serie B cuando hace falta una línea extra de sentido o ID.",
    ),
    features: [
      L("Five gold pogo pins on the linear face", "扁长面上五枚镀金顶针", "Cinco pines pogo dorados en cara lineal"),
      L("End magnets keep polarity and alignment", "端部磁铁保持极性与对准", "Imanes en extremos para polaridad y alineación"),
      L("Same Series B materials as the 6-pin drawing", "材料与系列 B 6 针图纸相同", "Mismos materiales del plano de 6 pines"),
    ],
    image: pogoImg("2", "5pins", "cover.webp"),
    gallery: [pogoImg("2", "5pins", "1.webp"), pogoImg("2", "5pins", "2.webp")],
    specs: [
      spec(series, "B"),
      spec(contacts, "5 × pogo pin"),
      spec(pitch, "3.0 mm"),
      spec(magnets, ["N52 family", "N52 磁铁", "Familia N52"]),
      spec(housing, "PA46 UL94 V-0"),
    ],
  }),
  pogoSku({
    id: "sc-pd-b-6p",
    model: "SC-PD-B-6P",
    name: L("6-Pin Magnetic Pogo Pair", "6 针磁吸顶针对", "Par pogo magnético 6 pines"),
    tagline: L("Series B. 2+4P with a readable drawing.", "系列 B。2+4P，图纸可读。", "Serie B. 2+4P con plano legible."),
    description: L(
      "Six-pin Series B pair (two power pins plus four signal pins) with male and female drawings: 35.2 × 4.5 mm housing, 3.0 mm pitch, N52 magnets.",
      "系列 B 六针对（2 路电源 + 4 路信号），公母图纸可读：壳体 35.2 × 4.5 mm，间距 3.0 mm，N52 磁铁。",
      "Par de seis pines serie B (2 de potencia + 4 de señal) con planos: carcasa 35.2 × 4.5 mm, paso 3.0 mm, imanes N52.",
    ),
    features: [
      L("2 power pins at 36 V / 5 A plus 4 signal pins at 12 V / 3 A", "2 路电源 36 V / 5 A，4 路信号 12 V / 3 A", "2 pines de potencia 36 V / 5 A y 4 de señal 12 V / 3 A"),
      L("Brass C3604 pins, Ni + Au plating, PA46 UL94 V-0 housing", "黄铜 C3604 针，镍金镀层，PA46 UL94 V-0 壳体", "Pines latón C3604, Ni+Au, carcasa PA46 UL94 V-0"),
      L("Panel cutout 35.4 × 4.7 mm; working height 1.90 mm", "开孔 35.4 × 4.7 mm；工作高度 1.90 mm", "Corte 35.4 × 4.7 mm; altura de trabajo 1.90 mm"),
    ],
    image: pogoImg("2", "6pins", "cover.webp"),
    gallery: [pogoImg("2", "6pins", "drawing.webp"), pogoImg("2", "6pins", "drawing1.webp")],
    specs: [
      spec(series, "B"),
      spec(contacts, ["2 + 4 pogo pin", "2 + 4 顶针", "2 + 4 pogo"]),
      spec(current, ["5 A power / 3 A signal", "电源 5 A / 信号 3 A", "5 A potencia / 3 A señal"]),
      spec(voltage, ["36 V power / 12 V signal", "电源 36 V / 信号 12 V", "36 V potencia / 12 V señal"]),
      spec(pitch, "3.0 mm"),
      spec(resistance, "≤ 60 mΩ"),
      spec(life, "≥ 30,000 cycles"),
      spec(temp, "-40°C ~ +85°C"),
      spec(housing, "PA46 UL94 V-0"),
      spec(magnets, "N52"),
      spec(mount, ["Panel / SMT family", "面板 / SMT 同族", "Panel / familia SMT"]),
    ],
    dimensions: {
      width: "35.2 mm",
      depth: "4.5 mm",
      height: "5.0 mm",
      note: L(
        "From Series B male/female drawings YCJ-003-35 / YCJ-003-36. Panel cutout 35.4 × 4.7 mm. Working height 1.90 ± 0.10 mm.",
        "取自系列 B 公母图纸 YCJ-003-35 / YCJ-003-36。开孔 35.4 × 4.7 mm。工作高度 1.90 ± 0.10 mm。",
        "De planos serie B YCJ-003-35 / YCJ-003-36. Corte 35.4 × 4.7 mm. Altura de trabajo 1.90 ± 0.10 mm.",
      ),
    },
  }),
  pogoSku({
    id: "sc-pd-c-7p",
    model: "SC-PD-C-7P",
    name: L("7-Pin Magnetic Pogo Pair", "7 针磁吸顶针对", "Par pogo magnético 7 pines"),
    tagline: L("Series C. Seven pins, two end magnets.", "系列 C。七针，两端磁铁。", "Serie C. Siete pines, imanes en extremos."),
    description: L(
      "Seven-pin magnetic pogo pair from Series C: gold spring pins on one half, gold pads on the other, with large magnets at each end.",
      "系列 C 七针磁吸顶针对：一半镀金弹簧针，一半镀金触片，两端大磁铁。",
      "Par magnético de siete pines serie C: pines de resorte frente a pads, con imanes grandes en cada extremo.",
    ),
    features: [
      L("Seven gold pogo pins in a single row", "七枚镀金顶针单排排列", "Siete pines pogo dorados en una fila"),
      L("Large end magnets for polarity and hold", "两端大磁铁，兼顾极性与保持力", "Imanes grandes para polaridad y sujeción"),
      L("Mating pad block for the dock or device side", "配套触片座，可用于坞座或设备侧", "Bloque de pads para el muelle o el dispositivo"),
    ],
    image: pogoImg("3", "7pins", "cover.png"),
    specs: [
      spec(series, "C"),
      spec(contacts, "7 × pogo pin"),
      spec(magnets, ["End magnets", "端部磁铁", "Imanes en extremos"]),
    ],
  }),
  pogoSku({
    id: "sc-pd-c-12p",
    model: "SC-PD-C-12P",
    name: L("12-Pin Magnetic Pogo Pair", "12 针磁吸顶针对", "Par pogo magnético 12 pines"),
    tagline: L("Series C. Dual-row high pin count.", "系列 C。双排高针数。", "Serie C. Alto número de pines en dos filas."),
    description: L(
      "High pin-count Series C magnetic pogo pair with a dual-row contact face and end magnets, for docks that share power and several I/O lines.",
      "系列 C 高针数磁吸顶针对，双排接触面加端部磁铁，适合电源与多路 I/O 共用。",
      "Par magnético serie C de alto pin-count, cara de dos filas e imanes en extremos para potencia y varias I/O.",
    ),
    features: [
      L("Dual-row gold pogo pins and matching pads", "双排镀金顶针与配套触片", "Pines pogo dorados en dos filas y pads"),
      L("End magnets for guided mating", "端部磁铁引导对接", "Imanes en extremos para acoplamiento guiado"),
      L("Solder tails for PCB mount on both halves", "公母两侧均有焊脚，可上 PCB", "Colas de soldadura en ambas mitades"),
    ],
    image: pogoImg("3", "12pins", "cover.png"),
    gallery: [pogoImg("3", "12pins", "cover.webp")],
    specs: [
      spec(series, "C"),
      spec(contacts, "12 × pogo pin"),
      spec(magnets, ["End magnets", "端部磁铁", "Imanes en extremos"]),
      spec(mount, ["Through-hole / PCB", "直插 / PCB", "Through-hole / PCB"]),
    ],
  }),
];

export const dockingCategoryIntro: Record<
  DockingProductId,
  { title: LocalizedText; description: LocalizedText }
> = {
  "pogo-pin-charging-dock": {
    title: L("Pogo Pin Charging Dock", "Pogo Pin 充电坞", "Muelle Pogo Pin"),
    description: L(
      "Compact spring-loaded pins for precise, repeatable charging.",
      "紧凑弹簧顶针，精确、可重复充电。",
      "Pines de resorte compactos para carga precisa y repetible.",
    ),
  },
  "spring-contact-charging-dock": {
    title: L("Spring Contact Charging Dock", "弹簧触点充电坞", "Muelle de contacto elástico"),
    description: L(
      "Compliant spring contacts for reliable high-cycle docking.",
      "弹性弹簧触点，可靠高循环对接。",
      "Contactos elásticos para acoplamiento fiable de alto ciclo.",
    ),
  },
  "contact-pad-charging-dock": {
    title: L("Contact Pad Charging Dock", "接触垫充电坞", "Muelle de almohadilla de contacto"),
    description: L(
      "Rugged high-current contact pads for industrial and robotic charging.",
      "坚固大电流触片，面向工业与机器人充电。",
      "Almohadillas de alta corriente para carga industrial y robótica.",
    ),
  },
  "connector-charging-dock": {
    title: L("Connector Charging Dock", "连接器充电坞", "Muelle con conector"),
    description: L(
      "Positive-mating connectors for reliable power and optional signal transfer.",
      "正向配合连接器，可靠供电并可选信号传输。",
      "Conectores de acoplamiento positivo para potencia y señal opcional.",
    ),
  },
  "wireless-charging-dock": {
    title: L("Wireless Charging Dock", "无线充电坞", "Muelle de carga inalámbrica"),
    description: L(
      "Contactless power transfer for sealed and autonomous systems.",
      "非接触电能传输，适用于密封与自主系统。",
      "Transferencia de energía sin contacto para sistemas sellados y autónomos.",
    ),
  },
};

export const dockingSkus: DockingSku[] = [
  ...pogoPinSkus,
  ...springContactPinCounts.map(springContactSku),
  {
    id: "sc-mg10",
    categoryId: "contact-pad-charging-dock",
    model: "SC-MG10",
    name: L("Magnetic Alignment Dock", "磁吸对准充电坞", "Muelle de alineación magnética"),
    tagline: L("Snap into charge. Pull to go.", "磁吸即充，拉开即走。", "Encaja, carga y suelta."),
    description: L(
      "Circular magnet ring guides the handheld onto gold contacts so operators dock quickly without hunting for pins.",
      "环形磁铁引导手持设备落到镀金触点上，无需对准针脚即可快速入坞。",
      "Un anillo magnético guía el dispositivo hacia contactos dorados sin buscar pines.",
    ),
    features: [
      L("Magnet ring self-aligns the mating face", "磁环自动对准接合面", "Anillo magnético que autoalinea"),
      L("Gold contacts under a defined breakaway force", "镀金触点，脱离力可控", "Contactos dorados con fuerza de desacople definida"),
      L("Quiet bench-top charging for clinics", "安静台面充电，适合诊所", "Carga silenciosa de sobremesa para clínicas"),
    ],
    image: "/images/products/docking/sc-mg10.png",
    imageAlt: L("SC-MG10 magnetic alignment charging dock", "SC-MG10 磁吸对准充电坞", "Muelle magnético SC-MG10"),
    specs: [
      spec(input, "5V⎓2A (USB Type-C)"),
      spec(output, "5V⎓2A (magnetic contact)"),
      spec(contacts, ["4 × Au + magnet ring", "4 × 镀金 + 磁环", "4 × Au + anillo"]),
      spec(resistance, "≤ 30 mΩ"),
      spec(temp, "-10°C ~ 55°C"),
      spec(life, "≥ 50,000 cycles"),
    ],
    dimensions: { width: "86 mm", depth: "86 mm", height: "28 mm" },
    priceCents: 0,
  },
  {
    id: "sc-mg20",
    categoryId: "contact-pad-charging-dock",
    model: "SC-MG20",
    name: L("High-Retention Magnetic Dock", "高保持力磁吸充电坞", "Muelle magnético de alta retención"),
    tagline: L("Stronger hold for keyed terminals.", "更强保持力，适配键盘终端。", "Mayor retención para terminales con teclado."),
    description: L(
      "Four pogo pins plus a stronger magnet array keep rugged terminals seated during cart motion and field use.",
      "四顶针加强磁阵列，在推车移动与现场使用时仍能保持加固终端就位。",
      "Cuatro pines pogo y un array magnético más fuerte retienen terminales rugerizados en carros y campo.",
    ),
    features: [
      L("Higher magnetic retention for keyed PDAs", "更高磁保持力，适配键盘 PDA", "Mayor retención para PDA con teclado"),
      L("Pogo pins inside a guided magnetic pocket", "导向磁槽内的顶针", "Pines pogo en hueco magnético guiado"),
      L("LED confirms seated contact before charge", "指示灯确认就位后再充电", "LED confirma asiento antes de cargar"),
    ],
    image: "/images/products/docking/sc-mg20.png",
    imageAlt: L("SC-MG20 high-retention magnetic dock", "SC-MG20 高保持力磁吸充电坞", "Muelle magnético SC-MG20"),
    specs: [
      spec(input, "5V⎓3A (USB Type-C)"),
      spec(output, "5V⎓3A (pogo + magnet)"),
      spec(contacts, "4 × pogo pin"),
      spec(resistance, "≤ 25 mΩ"),
      spec(temp, "-20°C ~ 60°C"),
      spec(life, "≥ 80,000 cycles"),
    ],
    dimensions: { width: "118 mm", depth: "78 mm", height: "44 mm" },
    priceCents: 0,
  },
  {
    id: "sc-cn10",
    categoryId: "connector-charging-dock",
    model: "SC-CN10",
    name: L("Sealed Connector Dock", "密封连接器充电坞", "Muelle con conector sellado"),
    tagline: L("Blind-mate power in a compact cradle.", "紧凑坞内盲插供电。", "Potencia de acoplamiento ciego en cuna compacta."),
    description: L(
      "Recessed multi-pin connector for handhelds that need a sealed power and signal link rather than exposed pins.",
      "凹陷多针连接器，适合需要密封电源与信号、而非外露顶针的手持设备。",
      "Conector multipin empotrado para handhelds que necesitan potencia y señal selladas.",
    ),
    features: [
      L("Recessed connector stays protected at rest", "凹陷连接器闲置时受保护", "Conector empotrado protegido en reposo"),
      L("Power plus optional sense pin", "电源加可选检测针", "Potencia más pin de sense opcional"),
      L("Compact white housing for indoor benches", "紧凑白壳，适合室内台面", "Carcasa blanca compacta para bancos interiores"),
    ],
    image: "/images/products/docking/sc-cn10.png",
    imageAlt: L("SC-CN10 sealed connector charging dock", "SC-CN10 密封连接器充电坞", "Muelle SC-CN10 con conector"),
    specs: [
      spec(input, "12V⎓2A (USB-C / barrel)"),
      spec(output, "12V⎓2A (connector)"),
      spec(contacts, ["6-pin sealed", "6 针密封", "6 pines sellados"]),
      spec(resistance, "≤ 20 mΩ"),
      spec(temp, "-20°C ~ 60°C"),
      spec(life, "≥ 10,000 mate cycles"),
      spec(rating, "IP67 mated"),
    ],
    dimensions: { width: "95 mm", depth: "70 mm", height: "40 mm" },
    priceCents: 0,
  },
  {
    id: "sc-cn20",
    categoryId: "connector-charging-dock",
    model: "SC-CN20",
    name: L("Industrial Connector Dock", "工业连接器充电坞", "Muelle industrial con conector"),
    tagline: L("Circular connector. Shop-floor ready.", "圆形连接器，车间可用。", "Conector circular listo para planta."),
    description: L(
      "Grey industrial housing with an upward circular connector for sealed power delivery on tools and mobile robots at rest.",
      "灰色工业外壳配向上圆形连接器，为工具与待命移动机器人提供密封供电。",
      "Carcasa gris industrial con conector circular hacia arriba para herramientas y robots en espera.",
    ),
    features: [
      L("Circular connector for blind-mate on approach", "圆形连接器，接近时盲插", "Conector circular de acoplamiento ciego"),
      L("Higher current path for 24V tools", "更高电流路径，适配 24V 工具", "Mayor corriente para herramientas 24V"),
      L("Serviceable connector insert", "连接器插芯可维护", "Inserto de conector sustituible"),
    ],
    image: "/images/products/docking/sc-cn20.png",
    imageAlt: L("SC-CN20 industrial connector charging dock", "SC-CN20 工业连接器充电坞", "Muelle industrial SC-CN20"),
    specs: [
      spec(input, "24V⎓8A (terminal block)"),
      spec(output, "24V⎓8A (circular connector)"),
      spec(contacts, ["8-pin circular", "8 针圆形", "8 pines circular"]),
      spec(temp, "-25°C ~ 70°C"),
      spec(life, "≥ 5,000 mate cycles"),
      spec(rating, "IP67 mated"),
    ],
    dimensions: { width: "140 mm", depth: "100 mm", height: "62 mm" },
    priceCents: 0,
  },
  {
    id: "sc-wl10",
    categoryId: "wireless-charging-dock",
    model: "SC-WL10",
    name: L("Instrument Wireless Pad", "仪器无线充电垫", "Pad inalámbrico para instrumentos"),
    tagline: L("No pins. Place and charge.", "无触点，放下即充。", "Sin pines. Coloque y cargue."),
    description: L(
      "Low-profile wireless pad for sealed instruments that cannot expose metal contacts in clinical or laboratory environments.",
      "超薄无线充电垫，适合临床或实验室中不能外露金属触点的密封仪器。",
      "Pad inalámbrico bajo para instrumentos sellados que no pueden exponer contactos metálicos.",
    ),
    features: [
      L("Contactless coil under a wipe-clean surface", "线圈藏于易擦拭表面下", "Bobina bajo superficie fácil de limpiar"),
      L("FOD-aware 15W-class instrument charge", "带异物检测的约 15W 仪器充电", "Carga ~15W con detección de objetos extraños"),
      L("Edge LED shows pairing and charge state", "边缘指示灯显示配对与充电状态", "LED lateral de emparejamiento y carga"),
    ],
    image: "/images/products/docking/sc-wl10.png",
    imageAlt: L("SC-WL10 instrument wireless charging pad", "SC-WL10 仪器无线充电垫", "Pad inalámbrico SC-WL10"),
    specs: [
      spec(input, "5V⎓3A / 9V⎓2A (USB Type-C)"),
      spec(output, ["15W class wireless", "约 15W 无线", "Inalámbrico clase 15W"]),
      spec(["Coil", "线圈", "Bobina"], "Single TX"),
      spec(temp, "0°C ~ 40°C"),
      spec(protection, ["FOD / over-temp", "异物检测 / 过温", "FOD / sobretemperatura"]),
    ],
    dimensions: { width: "100 mm", depth: "100 mm", height: "12 mm" },
    priceCents: 0,
  },
  {
    id: "sc-wl20",
    categoryId: "wireless-charging-dock",
    model: "SC-WL20",
    name: L("Desktop Wireless Dock", "桌面无线充电坞", "Muelle inalámbrico de escritorio"),
    tagline: L("Everyday wireless for handhelds.", "手持设备日常无线补能。", "Carga inalámbrica diaria para handhelds."),
    description: L(
      "Square desktop wireless dock for phones, scanners, and portable terminals that share a common receiver footprint.",
      "方形桌面无线充电坞，适配共享接收端尺寸的手机、扫码枪与便携终端。",
      "Muelle inalámbrico cuadrado para teléfonos, escáneres y terminales con huella de receptor común.",
    ),
    features: [
      L("Centered coil for repeatable drop-and-go", "中心线圈，放下即可充", "Bobina centrada para colocar y cargar"),
      L("Quiet overnight charge on a nurse station", "护士站安静夜间充电", "Carga nocturna silenciosa en estación"),
      L("USB-C powered — no exposed pins to clean", "USB-C 供电，无需清洁外露触点", "Alimentación USB-C, sin pines expuestos"),
    ],
    image: "/images/products/docking/sc-wl20.png",
    imageAlt: L("SC-WL20 desktop wireless charging dock", "SC-WL20 桌面无线充电坞", "Muelle inalámbrico SC-WL20"),
    specs: [
      spec(input, "9V⎓2A (USB Type-C)"),
      spec(output, ["15W class wireless", "约 15W 无线", "Inalámbrico clase 15W"]),
      spec(["Coil", "线圈", "Bobina"], "Single TX"),
      spec(temp, "0°C ~ 40°C"),
      spec(protection, ["FOD / over-temp", "异物检测 / 过温", "FOD / sobretemperatura"]),
    ],
    dimensions: { width: "90 mm", depth: "90 mm", height: "14 mm" },
    priceCents: 0,
  },
];

export const dockingSkuIds = dockingSkus.map((item) => item.id);

export function isDockingSkuId(value: string) {
  return dockingSkuIds.includes(value);
}

export function getDockingSku(id: string) {
  return dockingSkus.find((item) => item.id === id);
}

export function getDockingSkusForCategory(categoryId: DockingProductId) {
  const aliases = Object.entries(dockingCategoryRedirects)
    .filter(([, to]) => to === categoryId)
    .map(([from]) => from);
  const extras = getUploadedProducts("docking").filter(
    (item) => item.subcategoryId === categoryId || aliases.includes(item.subcategoryId),
  );
  if (extras.length) return extras.map(uploadedToDockingSku);
  return dockingSkus.filter((item) => item.categoryId === categoryId);
}

function uploadedToDockingSku(item: ReturnType<typeof getUploadedProducts>[number]): DockingSku {
  const shortModel = item.name.en.split(
    / (Dual-Bay|OEM|Rail-Robot|Autonomous|Retractable|Automatic|Desktop|Floor|Compact)/,
  )[0];
  return {
    id: item.id,
    categoryId: item.subcategoryId as DockingProductId,
    model: shortModel || item.name.en,
    name: item.name,
    tagline: item.tagline,
    description: item.description,
    features: [],
    image: item.image,
    gallery: item.gallery,
    imageAlt: item.imageAlt,
    specs: item.specs.map((row) => ({
      label: L(row.label, row.label, row.label),
      value: L(row.value, row.value, row.value),
    })),
    dimensions: { width: "—", depth: "—", height: "—" },
    priceCents: item.priceCents && item.buyable ? item.priceCents : 0,
    datasheetHref: item.datasheetHref,
  };
}

export function localizeDockingSku(sku: DockingSku, locale: Locale) {
  return {
    ...sku,
    name: pickLocalized(sku.name, locale),
    tagline: pickLocalized(sku.tagline, locale),
    description: pickLocalized(sku.description, locale),
    features: sku.features.map((item) => pickLocalized(item, locale)),
    imageAlt: pickLocalized(sku.imageAlt, locale),
    specs: sku.specs.map((row) => ({
      label: pickLocalized(row.label, locale),
      value: pickLocalized(row.value, locale),
    })),
    dimensionNote: sku.dimensions.note ? pickLocalized(sku.dimensions.note, locale) : "",
  };
}
