import type { KnowledgeArticle } from "@/lib/knowledge-articles/types";

const categoryId = "wireless-charging-fundamentals";

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

/** Collection 01 — Wireless Charging Fundamentals */
export const wirelessChargingFundamentalsArticles: readonly KnowledgeArticle[] = [
  article({
    slug: "what-is-wireless-charging",
    title: "What is Wireless Charging?",
    summary:
      "A practical definition of wireless charging, how contactless power transfer works, and where it fits in industrial systems.",
    sections: [
      {
        paragraphs: [
          "Wireless charging — also called wireless power transfer (WPT) — delivers electrical energy from a transmitter to a receiver without a mated electrical connector. Instead of pins or plugs, energy moves through a coupling field: most often a magnetic field (inductive or resonant), and in other architectures an electric field, radio-frequency wave, microwave beam, or optical beam.",
          "In consumer electronics, wireless charging usually means a phone resting on a Qi pad. In industrial robotics, AGVs, and autonomous equipment, the same principle supports sealed, high-cycle charging where connectors would wear, arc, or collect contamination.",
        ],
      },
      {
        heading: "The basic energy path",
        paragraphs: [
          "Every wireless charging system converts DC (or AC mains) into a controlled high-frequency field at the transmitter, couples that field across an air gap, and recovers usable DC power at the receiver for a battery, capacitor bank, or load.",
        ],
        bullets: [
          "Source conversion: AC/DC or DC/DC stages prepare a stable DC bus.",
          "Inversion: a power stage drives the transmitter coil or antenna at the design frequency.",
          "Coupling: magnetic, electric, or radiative transfer across the gap.",
          "Reception: the receiver recovers AC, rectifies it, and regulates charge current/voltage.",
          "Control & safety: communication, foreign-object detection, and protection close the loop.",
        ],
      },
      {
        heading: "Why industry adopts it",
        bullets: [
          "No exposed contacts — better sealing (IP-rated docks) and less corrosion.",
          "Lower mechanical wear from thousands of docking cycles.",
          "Opportunity charging: short top-ups during idle time without human plug-in.",
          "Cleaner integration for AGVs, AMRs, cobots, and outdoor autonomous platforms.",
        ],
      },
      {
        heading: "What “wireless” does not mean",
        paragraphs: [
          "Wireless charging is not magic free energy, and it is not always more efficient than a cable. Good systems are engineered for a defined gap, alignment window, power class, and thermal budget. Efficiency, EMI, and safety must be designed — not assumed.",
        ],
      },
    ],
  }),

  article({
    slug: "history-of-wireless-power",
    title: "History of Wireless Power",
    summary:
      "From Tesla-era experiments to Qi, SAE J2954, and industrial resonant charging docks used in robotics fleets.",
    sections: [
      {
        paragraphs: [
          "The idea of sending power without wires is older than modern electronics. Late-19th and early-20th-century work on alternating magnetic fields and resonant circuits established the physics that today’s wireless chargers still use. What changed is control, semiconductors, magnetics, and standards.",
        ],
      },
      {
        heading: "Milestones that shaped today’s products",
        bullets: [
          "Inductive coupling for transformers and early contactless power demos.",
          "Medical implants and sealed industrial sensors that needed power without connectors.",
          "Consumer inductive pads and the Wireless Power Consortium Qi standard.",
          "Resonant and loosely coupled systems for larger gaps and misalignment tolerance.",
          "Automotive wireless charging programs (for example SAE J2954) and industrial AGV/AMR docks.",
        ],
      },
      {
        heading: "From novelty to infrastructure",
        paragraphs: [
          "Consumer wireless charging proved convenience at a few watts to tens of watts. Industrial wireless charging scales the same physics to hundreds or thousands of watts, with fleet software, docking mechanics, FOD/LOD protection, and uptime requirements that look more like factory infrastructure than a desk accessory.",
          "SiCore’s domain sits in that industrial lineage: sealed opportunity charging, resonant and inductive docks, and intelligent power control for autonomous equipment.",
        ],
      },
    ],
  }),

  article({
    slug: "inductive-power-transfer-ipt",
    title: "Inductive Power Transfer (IPT)",
    summary:
      "How tightly coupled inductive WPT works, typical frequencies, and when IPT is the right architecture.",
    sections: [
      {
        paragraphs: [
          "Inductive power transfer (IPT) uses a magnetic field between a transmitter coil and a receiver coil, similar to a transformer whose “core” includes a deliberate air gap. When the coils are close and well aligned, coupling is relatively strong and efficiency can be high.",
        ],
      },
      {
        heading: "How IPT behaves",
        bullets: [
          "Best performance at small air gaps (often millimeters to a few centimeters, design-dependent).",
          "Sensitive to lateral and angular misalignment compared with loosely coupled resonant systems.",
          "Common in pads, sealed docks, and connectors replaced by short-gap wireless interfaces.",
          "Frequencies are typically in the kHz to low-hundreds-of-kHz range for power stages, depending on magnetics and standards.",
        ],
      },
      {
        heading: "Engineering trade-offs",
        paragraphs: [
          "IPT shines when docking geometry is repeatable: a robot stops on a pad, or a fixture seats to a known gap. If the application needs larger gaps or looser alignment, designers often move toward magnetic resonance with compensation networks (LCC, LCL, and related topologies).",
          "Key design knobs include coil geometry, ferrite shielding, switching frequency, copper loss (often Litz wire), and thermal paths in both pad and vehicle-side receiver.",
        ],
      },
    ],
  }),

  article({
    slug: "magnetic-resonance-charging",
    title: "Magnetic Resonance Charging",
    summary:
      "Resonant WPT for larger gaps and misalignment — coupling, Q factor, and compensation networks in plain terms.",
    sections: [
      {
        paragraphs: [
          "Magnetic resonance charging tunes transmitter and receiver so both operate near resonance. That raises the effective energy exchange even when the coupling coefficient is modest — useful for larger air gaps and imperfect alignment common in AGV docking and vehicle charging.",
        ],
      },
      {
        heading: "Core ideas",
        bullets: [
          "Coupling coefficient (k): how strongly the coils share flux.",
          "Quality factor (Q): how under-damped each resonant tank is.",
          "Compensation networks: capacitors (and sometimes inductors) that cancel reactive power and shape the gain curve.",
          "Soft switching (ZVS/ZCS): reduces switching loss at high frequency and high power.",
        ],
      },
      {
        heading: "Where resonance helps industrial docks",
        paragraphs: [
          "Warehouse floors, outdoor pads, and robot underbodies rarely offer perfect coil-to-coil seating. Resonance widens the usable operating window, but it also introduces frequency splitting, detuning from metal nearby, and tighter control requirements. Intelligent frequency tracking and impedance matching are often part of a production-ready resonant charger.",
        ],
      },
    ],
  }),

  article({
    slug: "capacitive-power-transfer",
    title: "Capacitive Power Transfer",
    summary:
      "Electric-field (capacitive) wireless power — how it differs from inductive systems and where it is used.",
    sections: [
      {
        paragraphs: [
          "Capacitive power transfer (CPT) couples energy through an electric field between conductive plates rather than a magnetic field between coils. Think of two capacitors in series across a gap: displacement current carries power when the plates face each other.",
        ],
      },
      {
        heading: "Characteristics",
        bullets: [
          "Coupling depends on plate area, gap, and dielectric between plates.",
          "Generally less sensitive to nearby ferromagnetic materials than inductive coils.",
          "Can be attractive for low-profile interfaces and some sealed packaging concepts.",
          "High voltages or careful insulation design are often needed as gaps grow.",
        ],
      },
      {
        heading: "Practical status",
        paragraphs: [
          "CPT is an active research and niche product area. Most high-power industrial charging docks today still use inductive or resonant magnetic architectures because magnetics, standards, and supply chains are more mature. CPT remains worth watching for thin interfaces, special dielectrics, and applications where magnetic fields are undesirable.",
        ],
      },
    ],
  }),

  article({
    slug: "far-field-wireless-power",
    title: "Far-Field Wireless Power",
    summary:
      "Radiative wireless power over longer distances — RF, microwave, and optical approaches versus near-field docks.",
    sections: [
      {
        paragraphs: [
          "Far-field wireless power transfers energy using radiating electromagnetic waves rather than the reactive near-field of a tightly coupled coil pair. Distance can be meters or more, but power density, safety limits, and beam control become the dominant constraints.",
        ],
      },
      {
        heading: "Common far-field families",
        bullets: [
          "RF harvesting / low-power RF: sensors and IoT at milliwatts or microwatts.",
          "Microwave power beaming: focused beams for higher power at distance.",
          "Optical / laser power: directed light converted by photovoltaic receivers.",
        ],
      },
      {
        heading: "Compared with industrial docking",
        paragraphs: [
          "AGV and robot charging docks almost always use near-field inductive or resonant transfer because they need high efficiency at a known stop position, strict EMI control, and safe human proximity. Far-field methods fit better when the receiver cannot dock — remote sensors, special aerospace concepts, or ultra-low-power IoT — not when you need kilowatt-class opportunity charging at a pad.",
        ],
      },
    ],
  }),

  article({
    slug: "rf-wireless-power",
    title: "RF Wireless Power",
    summary:
      "Radio-frequency wireless power for sensors and low-power devices, and why it differs from pad-based charging.",
    sections: [
      {
        paragraphs: [
          "RF wireless power uses radio-frequency electromagnetic waves, typically in ISM bands, to deliver small amounts of energy to a receiving antenna and rectifier (a rectenna). It is excellent for eliminating battery changes on ultra-low-power sensors — not for charging a 48 V robot traction pack in minutes.",
        ],
      },
      {
        heading: "Design realities",
        bullets: [
          "Received power falls quickly with distance and antenna efficiency.",
          "Regulatory limits on transmit power and field exposure constrain range.",
          "Duty-cycled IoT loads can work; continuous high-power loads usually cannot.",
          "Link budget, antenna polarization, and multipath in factories matter as much as the rectifier IC.",
        ],
      },
      {
        heading: "When to choose RF",
        paragraphs: [
          "Choose RF wireless power when wiring is impossible, battery service is expensive, and the load is tiny. Choose inductive/resonant docks when you need predictable high power during a short stop. Many factories will use both: RF for sensors, magnetic WPT for mobile robots.",
        ],
      },
    ],
  }),

  article({
    slug: "microwave-power-transfer",
    title: "Microwave Power Transfer",
    summary:
      "Microwave beaming concepts, efficiency and safety challenges, and contrast with near-field industrial chargers.",
    sections: [
      {
        paragraphs: [
          "Microwave power transfer focuses energy into a beam — often in the GHz range — and converts it back to DC at a rectenna array. Historically associated with space solar power studies and specialized beaming demos, it targets longer-range transfer than coil pads.",
        ],
      },
      {
        heading: "Engineering challenges",
        bullets: [
          "Beam forming and pointing accuracy as the receiver moves.",
          "Conversion efficiency end-to-end (DC → RF → free space → RF → DC).",
          "Human safety and keep-out zones around high-power beams.",
          "EMI coexistence with communications and radar in the same spectrum.",
        ],
      },
      {
        heading: "Industrial takeaway",
        paragraphs: [
          "For warehouse AGVs and sealed docking, microwave beaming is rarely the first choice. Near-field magnetic systems deliver higher wall-to-battery efficiency in a compact pad footprint with mature safety patterns (FOD, LOD, thermal limits). Microwave remains relevant for research, niche long-range links, and future infrastructure concepts — not as a drop-in replacement for a charging dock.",
        ],
      },
    ],
  }),

  article({
    slug: "laser-wireless-power",
    title: "Laser Wireless Power",
    summary:
      "Optical power beaming with lasers and photovoltaic receivers — use cases, eye safety, and limits versus magnetic WPT.",
    sections: [
      {
        paragraphs: [
          "Laser wireless power (optical power beaming) sends energy as a directed light beam to a photovoltaic or specialized optical receiver. Line-of-sight is required; fog, dust, and mis-pointing cut power sharply.",
        ],
      },
      {
        heading: "Strengths and constraints",
        bullets: [
          "Long geometric reach with a narrow beam.",
          "Potentially compact receivers for drones or remote platforms.",
          "Strict eye-safety and skin-safety engineering for any accessible beam.",
          "Atmospheric loss and dirty optics reduce real-world availability.",
        ],
      },
      {
        heading: "Where it fits",
        paragraphs: [
          "Optical beaming is discussed for drones, spacecraft concepts, and hard-to-wire sites. Ground robot fleets that can stop on a pad still prefer magnetic wireless charging for efficiency, all-weather docking, and simpler safety certification. Laser WPT is complementary technology, not a universal substitute.",
        ],
      },
    ],
  }),

  article({
    slug: "near-field-vs-far-field",
    title: "Near-Field vs Far-Field",
    summary:
      "How near-field and far-field wireless power differ in distance, efficiency, safety, and industrial fit.",
    sections: [
      {
        paragraphs: [
          "Near-field wireless power operates in the reactive zone close to the transmitter — inductive, resonant magnetic, or capacitive interfaces. Far-field systems radiate propagating waves. The boundary is physical, not marketing: it changes efficiency curves, safety analysis, and product architecture.",
        ],
      },
      {
        heading: "Quick comparison",
        bullets: [
          "Near-field: short gap, high potential efficiency, pad/dock form factors, strong industrial traction.",
          "Far-field: longer distance, lower power density at the receiver, beam/antenna design dominates.",
          "Near-field EMI is mostly magnetic/electric local fields; far-field adds radiated RF compliance complexity.",
          "Docking robots → near-field. Remote ultra-low-power sensors → often far-field RF.",
        ],
      },
      {
        heading: "Choosing for a project",
        paragraphs: [
          "If the vehicle can present a coil to a pad within a controlled gap and alignment window, near-field magnetic WPT is usually the engineering default. If the device cannot dock and only needs microwatts to milliwatts, far-field RF harvesting may win. Mixing the two in one product is uncommon; mixing them in one facility is normal.",
        ],
      },
    ],
  }),

  article({
    slug: "static-vs-dynamic-charging",
    title: "Static vs Dynamic Charging",
    summary:
      "Stationary opportunity charging versus in-motion (dynamic) wireless power — fleet operations implications.",
    sections: [
      {
        paragraphs: [
          "Static wireless charging transfers power while the vehicle is stopped on a pad or dock. Dynamic (in-motion) charging transfers power while the vehicle moves over a powered track or segmented coil array embedded in a path.",
        ],
      },
      {
        heading: "Static (opportunity) charging",
        bullets: [
          "Fits AGV/AMR dwell points, shift breaks, and process waits.",
          "Simpler magnetics and control than continuous roadway arrays.",
          "Easier safety zoning: charge only when docked and authenticated.",
          "Most common industrial deployment model today.",
        ],
      },
      {
        heading: "Dynamic charging",
        bullets: [
          "Can shrink onboard battery size if the route is powered.",
          "Requires infrastructure along the path — cost and civil works rise quickly.",
          "Segmentation, handoff between coils, and EMI along the route are hard problems.",
          "More common in research, transit pilots, and specialized corridors than general warehouses.",
        ],
      },
      {
        heading: "Fleet design note",
        paragraphs: [
          "Many successful robot fleets combine a modest battery with frequent static opportunity charges. That often beats a huge battery or a fully electrified floor. Dynamic charging becomes interesting when stops are rare and routes are fixed enough to justify embedded infrastructure.",
        ],
      },
    ],
  }),

  article({
    slug: "one-to-one-vs-one-to-many-charging",
    title: "One-to-One vs One-to-Many Charging",
    summary:
      "Single transmitter–receiver pairs versus multi-device charging topologies for pads and fleets.",
    sections: [
      {
        paragraphs: [
          "One-to-one charging means one transmitter primarily serves one receiver at a time — the classic AGV dock. One-to-many means one transmitter (or a coordinated array) can energize multiple receivers, or a surface can charge whichever device lands in a zone.",
        ],
      },
      {
        heading: "One-to-one",
        bullets: [
          "Predictable power budget and thermal design.",
          "Straightforward authentication and billing/telemetry per vehicle.",
          "Natural fit for high-power industrial docks (hundreds of watts to kilowatts).",
        ],
      },
      {
        heading: "One-to-many",
        bullets: [
          "Convenient for desktops and multi-device consumer pads.",
          "Requires load sharing, selective activation, and stronger FOD strategies.",
          "Efficiency per device can drop if the field is spread or mistuned.",
          "Industrial “many” often means many docks on a network — not one coil feeding many robots at once.",
        ],
      },
      {
        heading: "SiCore-oriented view",
        paragraphs: [
          "High-availability robot fleets usually scale with many one-to-one docks plus cloud or local charge scheduling, rather than a single shared field. Multi-coil arrays still matter for alignment tolerance on one vehicle, which is different from truly simultaneous multi-vehicle charging on one pad.",
        ],
      },
    ],
  }),

  article({
    slug: "power-transfer-principles",
    title: "Power Transfer Principles",
    summary:
      "The physics and circuit principles behind wireless power: flux, coupling, resonance, and delivered power.",
    sections: [
      {
        paragraphs: [
          "Wireless power is still ordinary electromagnetics and power electronics. Delivered power depends on source capability, coupling, resonance (if used), load impedance, and losses in copper, core, switching devices, and rectifiers.",
        ],
      },
      {
        heading: "Magnetic near-field essentials",
        bullets: [
          "Ampère / Faraday: time-varying current → time-varying flux → induced voltage in the receiver.",
          "Mutual inductance M links the coils; coupling k = M / √(L1 L2).",
          "At a given voltage/current stress, higher k generally means easier high-efficiency transfer.",
          "Compensation networks cancel reactive energy so the inverter sees a manageable load.",
        ],
      },
      {
        heading: "Control view",
        paragraphs: [
          "Real chargers regulate something measurable: receiver voltage, battery current, or transmitter rail. As the battery SOC rises or alignment drifts, the reflected impedance changes. Controllers adjust frequency, phase, duty, or matching networks to hold the operating point inside efficiency and thermal limits.",
        ],
      },
    ],
  }),

  article({
    slug: "energy-conversion-fundamentals",
    title: "Energy Conversion Fundamentals",
    summary:
      "AC/DC, DC/AC, and DC/DC stages in a wireless charger — where energy is converted and where it is lost.",
    sections: [
      {
        paragraphs: [
          "A wireless charger is a chain of power converters. Understanding each stage clarifies efficiency maps, heat sinks, and why “wireless” loss is only one part of wall-to-battery performance.",
        ],
      },
      {
        heading: "Typical stage stack",
        bullets: [
          "Front-end: PFC and AC/DC (mains-powered docks) or DC input from a facility bus.",
          "Inverter / power stage: creates the high-frequency coil drive.",
          "Magnetic (or capacitive) link: the wireless gap.",
          "Receiver rectifier: often synchronous for higher efficiency.",
          "DC/DC or charger IC: finishes CC/CV battery charging or load regulation.",
        ],
      },
      {
        heading: "Loss buckets",
        paragraphs: [
          "Conduction loss (I²R), switching loss, core loss in ferrite, copper proximity/skin effect in coils, rectifier drop, and cable/bus distribution all add up. Improving only the coil coupling while ignoring a lossy rectifier rarely hits the target system efficiency. Thermal design must follow the same map: heat appears where loss appears.",
        ],
      },
    ],
  }),

  article({
    slug: "coupling-mechanisms",
    title: "Coupling Mechanisms",
    summary:
      "Magnetic, electric, and radiative coupling — what each mechanism optimizes and how designers choose.",
    sections: [
      {
        paragraphs: [
          "“Coupling mechanism” names the physical channel that carries energy across the gap. Product decisions start here: magnetic for most docks, electric for some plate interfaces, radiative for distance-oriented links.",
        ],
      },
      {
        heading: "Mechanisms at a glance",
        bullets: [
          "Magnetic inductive: strong short-gap coupling, transformer-like.",
          "Magnetic resonant: tuned tanks for looser coupling and larger gaps.",
          "Capacitive: electric-field plates, dielectric-sensitive.",
          "Radiative RF/microwave/optical: propagating waves, distance-first.",
        ],
      },
      {
        heading: "Selection checklist",
        paragraphs: [
          "List gap, alignment tolerance, power level, enclosure materials, EMI limits, and human exposure rules. Then pick the mechanism that meets power and safety with the simplest infrastructure. For sealed industrial opportunity charging, magnetic inductive or resonant coupling is the usual winner; other mechanisms fill specialized niches.",
        ],
      },
    ],
  }),

  article({
    slug: "wireless-power-terminology",
    title: "Wireless Power Terminology",
    summary:
      "A field glossary: WPT, IPT, k, Q, ZVS, FOD, LOD, opportunity charging, and related terms.",
    sections: [
      {
        paragraphs: [
          "Shared vocabulary keeps engineering, purchasing, and operations aligned. Below are terms you will see throughout the SiCore Knowledge Library.",
        ],
      },
      {
        heading: "Core terms",
        bullets: [
          "WPT — Wireless Power Transfer: umbrella term for contactless energy delivery.",
          "IPT — Inductive Power Transfer: magnetic near-field transfer via coils.",
          "Tx / Rx — Transmitter and receiver sides of the link.",
          "Air gap — Physical separation between Tx and Rx coupling elements.",
          "Coupling coefficient (k) — Normalized magnetic coupling between coils.",
          "Quality factor (Q) — Sharpness of a resonant tank.",
          "Compensation — Reactive networks (series/parallel/LCC/LCL, etc.) around the coils.",
          "ZVS / ZCS — Zero-voltage / zero-current switching soft-switching modes.",
          "FOD — Foreign Object Detection (metal objects in the field).",
          "LOD — Living Object Detection (people/animals near high-power fields).",
          "Opportunity charging — Short, frequent top-ups during natural idle time.",
          "SOC / SOH — State of charge / state of health for batteries.",
        ],
      },
      {
        heading: "How to use this glossary",
        paragraphs: [
          "When a datasheet lists gap, misalignment, and efficiency, read them together with thermal and EMI notes. A wide gap with high claimed efficiency usually implies resonant design, careful coil geometry, and active control — not a simple open-loop pad.",
        ],
      },
    ],
  }),
];
