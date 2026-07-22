import type { KnowledgeArticle } from "@/lib/knowledge-articles/types";

const categoryId = "resonant-wireless-power";

function article(
  input: Omit<KnowledgeArticle, "categoryId" | "readTime"> & { readTime?: string },
): KnowledgeArticle {
  return {
    categoryId,
    readTime: input.readTime ?? "8 min",
    slug: input.slug,
    title: input.title,
    summary: input.summary,
    sections: input.sections,
  };
}

/** Collection 02 — Resonant Wireless Power Technology */
export const resonantWirelessPowerArticles: readonly KnowledgeArticle[] = [
  article({
    slug: "resonant-theory",
    title: "Resonant Theory",
    summary:
      "How resonance enables efficient wireless power at modest coupling — tanks, tuning, and energy exchange.",
    sections: [
      {
        paragraphs: [
          "Resonant wireless power transfer tunes the transmitter and receiver so each forms a resonant tank near the operating frequency. When both sides ring together, reactive energy circulates locally in the tanks while real power crosses the air gap — even if the coupling coefficient is much lower than in a tightly seated inductive pad.",
          "In circuit terms, inductance and capacitance exchange energy each half-cycle. At resonance, the imaginary part of the tank impedance approaches zero (topology-dependent), so a modest inverter voltage can drive meaningful coil current without fighting a huge reactive drop.",
        ],
      },
      {
        heading: "Why resonance matters for docks",
        bullets: [
          "Larger usable air gaps than tightly coupled IPT alone.",
          "More tolerance to lateral and angular misalignment in AGV/AMR docking.",
          "Higher coil currents at manageable semiconductor stress when tanks are tuned well.",
          "A clearer path to soft switching when the load trajectory is designed for ZVS/ZCS.",
        ],
      },
      {
        heading: "What resonance does not remove",
        paragraphs: [
          "Resonance does not abolish physics. Copper loss, core loss, inverter switching loss, rectifier drop, and detuning from metal nearby still set efficiency and heat. Resonance is a tool for shaping impedance and gain — not a free efficiency upgrade.",
        ],
      },
    ],
  }),

  article({
    slug: "coupling-coefficient",
    title: "Coupling Coefficient",
    summary:
      "What k means in WPT coils, how gap and alignment change it, and why resonant designs target a k window.",
    sections: [
      {
        paragraphs: [
          "The coupling coefficient k quantifies how strongly two coils share magnetic flux. For self-inductances L1 and L2 and mutual inductance M, k = M / √(L1 L2). Perfect coupling is k = 1; practical wireless docks often operate well below that.",
        ],
      },
      {
        heading: "What moves k",
        bullets: [
          "Air gap: larger gap usually lowers k sharply.",
          "Lateral / angular misalignment: reduces overlapping flux.",
          "Coil size and geometry: DD, circular, and multi-coil arrays shape the k map.",
          "Ferrite and shielding: guide flux and can raise useful coupling while containing leakage.",
        ],
      },
      {
        heading: "Design window, not a single number",
        paragraphs: [
          "A resonant charger is specified across a k range (best case, nominal dock, worst misalignment). Compensation and control must keep efficiency, voltage stress, and soft-switching margins acceptable across that window. Publishing only a peak k from a perfect lab alignment misleads fleet operators.",
        ],
      },
    ],
  }),

  article({
    slug: "quality-factor-q",
    title: "Quality Factor (Q)",
    summary:
      "Coil and tank Q: how under-damping helps resonant transfer — and how high Q creates sensitivity.",
    sections: [
      {
        paragraphs: [
          "Quality factor Q measures how under-damped a resonator is. For a series RL tank approximation, Q ≈ ωL / R. High Q means low relative loss per cycle and a sharper frequency response; low Q means more damping and a broader, flatter response.",
        ],
      },
      {
        heading: "High Q: power and pain",
        bullets: [
          "Helps circulate large reactive currents with less copper loss fraction.",
          "Improves the figure of merit often discussed with k·Q products in loosely coupled links.",
          "Makes the system more sensitive to detuning (gap change, metal, temperature drift of L/C).",
          "Can raise voltage/current stress on capacitors and switches near resonance peaks.",
        ],
      },
      {
        heading: "Practical coil Q",
        paragraphs: [
          "Industrial coils chase high Q with Litz wire, careful stranding, good ferrite, and controlled proximity effect — then deliberately add damping or control bandwidth so the charger remains stable under real docking scatter. Datasheet Q measured on a clean bench is an upper bound, not a guarantee on a steel robot chassis.",
        ],
      },
    ],
  }),

  article({
    slug: "frequency-selection",
    title: "Frequency Selection",
    summary:
      "Choosing WPT operating frequency: magnetics size, switching loss, EMI bands, and standards constraints.",
    sections: [
      {
        paragraphs: [
          "Operating frequency sets the size of magnetics, the difficulty of soft switching, skin/proximity loss in copper, and which EMI limits apply. Industrial resonant chargers commonly sit in tens to low hundreds of kilohertz; consumer Qi bands and automotive bands each carry their own constraints.",
        ],
      },
      {
        heading: "Trade-offs when you raise frequency",
        bullets: [
          "Smaller L and C for the same reactance — more compact tanks.",
          "Higher switching loss unless soft switching is solid.",
          "Worse skin and proximity effects unless conductors are engineered (Litz, PCB strategies).",
          "EMI shifts: conducted and radiated compliance change with harmonic content.",
        ],
      },
      {
        heading: "Selection checklist",
        paragraphs: [
          "Start from power class, gap, coil area, semiconductor technology (Si / SiC / GaN), and the regulatory environment of the site. Then pick a frequency where ZVS is achievable across the load range and where magnetics stay cool. Frequency is a system decision — not a marketing preference.",
        ],
      },
    ],
  }),

  article({
    slug: "series-resonance",
    title: "Series Resonance",
    summary:
      "Series LC tanks in WPT: impedance minimum, current-source-like behavior, and common use cases.",
    sections: [
      {
        paragraphs: [
          "In a series-resonant tank, L and C are in series with the load path. At the resonant frequency the reactances cancel and the impedance magnitude reaches a minimum set mainly by resistance. Driven by a voltage-source inverter, series resonance tends to produce a current that rises as the load resistance falls — a behavior designers use carefully with battery loads.",
        ],
      },
      {
        heading: "Characteristics",
        bullets: [
          "Natural current peaking near resonance for a voltage-fed inverter.",
          "Simple capacitor count on each side when used as pure series compensation.",
          "Sensitive to shorted or very light loads depending on the full topology.",
          "Often combined into hybrid networks (for example series primary + parallel secondary).",
        ],
      },
      {
        heading: "In wireless docks",
        paragraphs: [
          "Pure series–series (SS) compensation is a classic teaching topology and still appears in products. It offers strong power capability when k is reasonable, but gain and bifurcation behavior must be mapped across misalignment. Many industrial designs move to LCC or other hybrids for a flatter gain and easier inverter current shaping.",
        ],
      },
    ],
  }),

  article({
    slug: "parallel-resonance",
    title: "Parallel Resonance",
    summary:
      "Parallel tanks in WPT: high impedance at resonance, voltage behavior, and pairing with series networks.",
    sections: [
      {
        paragraphs: [
          "A parallel-resonant tank places L and C in parallel. Near resonance the impedance magnitude peaks. Voltage-fed and current-fed drive styles interact differently with parallel tanks than with series tanks, which is why compensation is usually discussed as a primary/secondary pair (SS, SP, PS, PP) rather than a single capacitor.",
        ],
      },
      {
        heading: "When parallel shows up",
        bullets: [
          "Secondary parallel compensation can behave like a voltage source for certain operating regions.",
          "Useful when the rectifier and battery want a more controlled voltage characteristic.",
          "Often appears inside LCC/LCL networks as part of a multi-element filter, not as a lone parallel coil capacitor.",
        ],
      },
      {
        heading: "Design caution",
        paragraphs: [
          "Parallel resonance can produce high circulating currents and voltage magnification. Capacitor voltage ratings, coil insulation, and fault behavior (open receiver, foreign metal) need explicit analysis. Parallel is a tool inside a compensation strategy — not automatically “safer” or “more efficient” than series.",
        ],
      },
    ],
  }),

  article({
    slug: "lcc-compensation",
    title: "LCC Compensation",
    summary:
      "LCC networks for resonant WPT: current-source-like primary behavior and misalignment-friendly gain.",
    sections: [
      {
        paragraphs: [
          "LCC compensation adds an inductor and two capacitors arranged so the primary (and often the secondary) presents a well-behaved resonant filter. A common primary LCC makes the coil current relatively insensitive to load in a designed band — closer to a current-source drive of the magnetic link.",
        ],
      },
      {
        heading: "Why industry likes LCC",
        bullets: [
          "Flatter power/gain curves across a practical k window.",
          "Easier inverter current shaping and ZVS planning than bare SS in some power classes.",
          "Secondary LCC can simplify rectifier voltage stress and battery charging profiles.",
          "Mature analysis literature for EV and industrial WPT.",
        ],
      },
      {
        heading: "Cost of the extra parts",
        paragraphs: [
          "Extra magnetics and film capacitors add volume, loss, and BOM cost. Parameter drift and tolerance stack-up matter. LCC pays off when docking scatter is real and you need predictable pad current; it is overkill only if the mechanical alignment is already near-perfect and the power class is tiny.",
        ],
      },
    ],
  }),

  article({
    slug: "lcl-compensation",
    title: "LCL Compensation",
    summary:
      "LCL filter-style compensation in wireless power — current control, harmonics, and dock inverter interfaces.",
    sections: [
      {
        paragraphs: [
          "LCL compensation uses two inductors and a capacitor as a T-network filter between the inverter and the coil (or in related receiver forms). It can present a current-source character to the coil and attenuate high-frequency harmonics that would otherwise radiate or stress insulation.",
        ],
      },
      {
        heading: "Engineering roles",
        bullets: [
          "Shape coil current vs load for a target charging profile.",
          "Reduce harmonic content into the magnetic structure.",
          "Provide design knobs beyond a single series capacitor.",
          "Pair with secondary networks for double-sided compensation strategies.",
        ],
      },
      {
        heading: "LCL vs LCC in practice",
        paragraphs: [
          "Naming varies across papers and vendors; always read the schematic, not only the acronym. Both families aim for controlled coil excitation and manageable gain. Selection depends on semiconductor voltage, available core volume, and whether the product roadmap already standardizes on one network for tooling and magnetics reuse.",
        ],
      },
    ],
  }),

  article({
    slug: "llc-resonance",
    title: "LLC Resonance",
    summary:
      "LLC resonant converters versus WPT coil resonance — what transfers, and what should not be confused.",
    sections: [
      {
        paragraphs: [
          "LLC usually refers to a resonant DC/DC converter topology (series resonant inductor, magnetizing inductance, and resonant capacitor) used inside power supplies. Wireless power also uses resonant L–C networks — but the “transformer” is a loosely coupled coil pair across an air gap, not a tightly coupled isolation transformer on a PCB.",
        ],
      },
      {
        heading: "Useful overlap",
        bullets: [
          "Both rely on resonant tanks and often soft switching.",
          "Gain curves vs frequency are central design artifacts in both domains.",
          "Frequency modulation and phase-shift control ideas transfer conceptually.",
        ],
      },
      {
        heading: "Important difference",
        paragraphs: [
          "In a classic LLC PSU, k is high and leakage is a designed resonant inductor. In WPT, k varies with parking position and the mutual inductance is the power channel. Treating a dock as “just an LLC brick” without modeling misalignment will under-estimate voltage stress and miss frequency splitting. Use LLC intuition for soft switching — then complete a proper WPT coupling model.",
        ],
      },
    ],
  }),

  article({
    slug: "double-sided-compensation",
    title: "Double-Sided Compensation",
    summary:
      "Compensating both transmitter and receiver — why two-sided networks dominate serious resonant docks.",
    sections: [
      {
        paragraphs: [
          "Double-sided compensation places resonant networks on both the transmitter and the receiver. Each side cancels most of its own coil reactance so real power transfer is not choked by huge reactive drops, and the inverter and rectifier see more intentional impedances.",
        ],
      },
      {
        heading: "What you gain",
        bullets: [
          "Higher transferable power for a given semiconductor VA rating.",
          "Better efficiency across a designed k band when both tanks track resonance.",
          "More degrees of freedom to shape load-independent current or voltage regions.",
          "Clearer partition of primary control vs secondary regulation roles.",
        ],
      },
      {
        heading: "Integration note",
        paragraphs: [
          "Receiver compensation lives on the vehicle or robot — space, heat, and ingress protection constrain capacitor technology and inductor cores. Primary compensation lives in the pad or wall box with different cooling. Double-sided design is therefore a mechanical packaging problem as much as a Bode-plot problem.",
        ],
      },
    ],
  }),

  article({
    slug: "frequency-splitting",
    title: "Frequency Splitting",
    summary:
      "Bifurcation in overcoupled resonant WPT — dual peaks, control traps, and how to stay in the safe band.",
    sections: [
      {
        paragraphs: [
          "When coupling is strong and Q is high, a resonant link can show frequency splitting (bifurcation): the power or gain curve develops two peaks instead of one. Operating between peaks or jumping between branches can cause sudden power swings, loss of ZVS, or over-voltage on capacitors.",
        ],
      },
      {
        heading: "When splitting appears",
        bullets: [
          "High k (tight gap, good alignment) combined with high Q tanks.",
          "Certain SS and related compensations are well-known for bifurcation regions.",
          "Load resistance moves the system across critical coupling boundaries.",
        ],
      },
      {
        heading: "Mitigations",
        paragraphs: [
          "Designers may lower Q, choose LCC-like networks with flatter gain, limit the maximum k mechanically (spacer, coil design), or constrain the control frequency sweep so the inverter never parks on an unstable branch. Characterization must include the best-alignment case — not only the worst — because splitting is often a tight-coupling problem.",
        ],
      },
    ],
  }),

  article({
    slug: "soft-switching",
    title: "Soft Switching",
    summary:
      "Soft switching in resonant WPT inverters — cutting switching loss and EMI at industrial power levels.",
    sections: [
      {
        paragraphs: [
          "Soft switching means semiconductor devices turn on or off when voltage or current is near zero, slashing overlap loss and often reducing high-frequency EMI. Resonant and quasi-resonant WPT inverters are built so the tank trajectory creates those zero crossings in the intended load range.",
        ],
      },
      {
        heading: "Why docks care",
        bullets: [
          "Hundreds of watts to kilowatts make hard-switching heat painful.",
          "Smaller heatsinks and sealed IP enclosures need every watt of loss budget.",
          "Lower dv/dt / di/dt edges ease EMI filter design.",
          "SiC and GaN still benefit — soft switching is not only for slow silicon.",
        ],
      },
      {
        heading: "Keep soft switching across the map",
        paragraphs: [
          "The hard part is not achieving ZVS at one lab point — it is holding soft switching from empty battery to full, and from best to worst alignment. Dead-time, magnetizing/tank current, and frequency schedule must be co-designed with the compensation network.",
        ],
      },
    ],
  }),

  article({
    slug: "zvs",
    title: "ZVS",
    summary:
      "Zero-voltage switching for WPT bridges — body-diode conduction, dead time, and loss of ZVS under light load.",
    sections: [
      {
        paragraphs: [
          "Zero-voltage switching (ZVS) turns a device on only after its voltage has rung to (near) zero, typically after the complementary device turns off and tank current charges/discharges the switch node capacitance through the body diode or channel.",
        ],
      },
      {
        heading: "Conditions for ZVS",
        bullets: [
          "Enough inductive current during the dead time to slew the switch-node capacitance.",
          "Dead time long enough to finish the transition, short enough to limit diode conduction loss.",
          "Operating point on the correct side of resonance for the chosen modulation scheme.",
        ],
      },
      {
        heading: "Failure modes",
        paragraphs: [
          "Light load, detuned tanks, or an aggressive frequency jump can drop tank current and lose ZVS — sudden heating and EMI spikes follow. Protection and control should detect hard-switching regions and back out (power limit, frequency retreat, or shutdown) rather than silently cooking the bridge.",
        ],
      },
    ],
  }),

  article({
    slug: "zcs",
    title: "ZCS",
    summary:
      "Zero-current switching in resonant stages — where ZCS helps, where ZVS is preferred, and hybrid use.",
    sections: [
      {
        paragraphs: [
          "Zero-current switching (ZCS) turns a device when its current is near zero, minimizing current–voltage overlap at the switching instant. Some resonant topologies and secondary synchronous rectifiers pursue ZCS; primary bridges in WPT more often target ZVS for voltage-fed full bridges with device capacitances.",
        ],
      },
      {
        heading: "Where ZCS shows up",
        bullets: [
          "Current-fed or certain resonant converter families.",
          "Synchronous rectifier timing on the receiver.",
          "Auxiliary soft-switching cells in hybrid designs.",
        ],
      },
      {
        heading: "ZCS vs ZVS mindset",
        paragraphs: [
          "Do not treat ZCS as a synonym for “efficient resonant charger.” Ask which device, which edge (turn-on vs turn-off), and which operating corner. A dock can be ZVS on the primary inverter and near-ZCS on the rectifier — that combination is common and healthy when timed correctly.",
        ],
      },
    ],
  }),

  article({
    slug: "power-regulation",
    title: "Power Regulation",
    summary:
      "How resonant chargers regulate power: frequency, phase shift, rail control, and receiver-side CC/CV.",
    sections: [
      {
        paragraphs: [
          "Batteries need controlled current and voltage, not a fixed resonant party. Regulation layers sit on top of the tuned tanks: the primary may modulate frequency, phase shift, or DC rail; the secondary may use a DC/DC stage for precise CC/CV; both sides exchange signaling for setpoints and faults.",
        ],
      },
      {
        heading: "Common actuators",
        bullets: [
          "Frequency modulation around the gain curve.",
          "Phase-shift or duty control of a full-bridge inverter.",
          "Primary DC bus adjustment (controlled front-end).",
          "Receiver buck/boost charger for fine battery profiles.",
          "Detuning or matching network actuators in advanced systems.",
        ],
      },
      {
        heading: "Industrial requirements",
        paragraphs: [
          "Fleet chargers must regulate under misalignment, hot ferrite, aging capacitors, and pack impedance that changes with SOC and temperature. Loop bandwidth should reject docking disturbances without hunting into frequency-splitting regions. Telemetry of gap quality, efficiency, and thermal headroom turns regulation into operations data — not only a lab waveform.",
        ],
      },
    ],
  }),

  article({
    slug: "resonant-stability",
    title: "Resonant Stability",
    summary:
      "Keeping resonant WPT stable: detuning, control interaction, thermal drift, and fault ride-through.",
    sections: [
      {
        paragraphs: [
          "Resonant stability means the charger stays in a safe, predictable operating region as conditions change — no uncontrolled bifurcation jumps, no loss of ZVS cascades, no thermal runaway in tanks, and no control loops that fight each other.",
        ],
      },
      {
        heading: "Disturbances to budget",
        bullets: [
          "Mechanical: gap and alignment scatter every dock cycle.",
          "Electrical: battery SOC, sudden load steps, rectifier mode changes.",
          "Thermal: L and C drift as coils and capacitors heat.",
          "Environmental: steel floors, nearby carts, foreign metal (FOD events).",
          "Software: frequency sweep rate, communication latency, dual-loop conflict.",
        ],
      },
      {
        heading: "Stability engineering",
        paragraphs: [
          "Map the gain and ZVS regions across k and load. Limit actuator authority so the controller cannot park on unstable branches. Validate with worst-case metal and temperature, not only nominal pads. Resonant WPT products earn trust when stability is demonstrated in the dock map the robot will actually see.",
        ],
      },
    ],
  }),
];
