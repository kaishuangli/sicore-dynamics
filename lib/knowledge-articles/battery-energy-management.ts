import type { KnowledgeArticle } from "@/lib/knowledge-articles/types";

const categoryId = "battery-energy-management";

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

/** Collection 07 — Battery & Energy Management */
export const batteryEnergyManagementArticles: readonly KnowledgeArticle[] = [
  article({
    slug: "lithium-battery-basics",
    title: "Lithium Battery Basics",
    summary:
      "Foundational lithium-ion pack architecture — cells, modules, and pack integration — as applied to AGV and AMR traction batteries that receive wireless charge during dock cycles.",
    sections: [
      {
        paragraphs: [
          "Lithium-ion traction batteries power the majority of industrial AGV and AMR fleets because they deliver high energy density, flat discharge voltage, and acceptable cycle life at warehouse duty cycles. A pack is not a single cell: it is a structured assembly of prismatic, cylindrical, or pouch cells wired in series and parallel to meet voltage and amp-hour targets while fitting under-vehicle envelope constraints.",
          "SiCore wireless charging systems interact with the pack at the BMS boundary — not directly with individual cells. Understanding pack topology, nominal voltage, and charge acceptance limits is prerequisite to sizing receivers, inverters, and fleet energy budgets.",
        ],
      },
      {
        heading: "Pack hierarchy",
        bullets: [
          "Cell: smallest electrochemical unit — typically 3.2 V (LFP) or 3.6–3.7 V (NMC/NCA) nominal per cell.",
          "Module: grouped cells with inter-cell connections, sensing taps, and often module-level fusing.",
          "Pack: complete traction assembly with BMS, contactors, HV harness, thermal interface, and enclosure.",
          "Auxiliary circuits: 12/24 V logic supply, pre-charge, isolation monitoring, and service disconnect.",
        ],
      },
      {
        heading: "Key electrical parameters",
        paragraphs: [
          "Nominal pack voltage sets inverter output requirements and receiver rectifier design — a 48 V AMR pack and a 360 V fork AGV pack demand different wireless power architectures. Usable energy (kWh) depends on depth-of-discharge policy: industrial fleets rarely discharge below 10–20% SOC to protect cycle life and preserve emergency maneuver margin.",
          "C-rate defines charge and discharge current relative to capacity: a 100 Ah pack at 1C accepts 100 A. Wireless dock windows are short, so charge C-rates during opportunity charging often exceed 0.5C — the pack and thermal system must tolerate repeated partial fast charge events.",
        ],
      },
      {
        heading: "Integration with wireless charging",
        paragraphs: [
          "Wireless receivers deliver rectified DC to the pack through the same charge path as wired chargers — typically via the BMS-controlled contactor and onboard charger or direct DC fast-charge port. SiCore systems coordinate charge current requests with BMS CAN signals so the pack never receives power when isolation, temperature, or cell voltage limits are violated.",
        ],
      },
    ],
  }),

  article({
    slug: "battery-chemistry",
    title: "Battery Chemistry",
    summary:
      "Comparison of LFP, NMC, and NCA chemistries for AGV and AMR packs — trade-offs among energy density, cycle life, thermal stability, and wireless fast-charge suitability.",
    sections: [
      {
        paragraphs: [
          "Battery chemistry determines the voltage curve, thermal behavior, cycle life, and safety envelope of every traction pack. Industrial AGV and AMR OEMs choose chemistry based on mission energy needs, expected charge frequency, ambient temperature range, and regulatory fire-safety requirements — not energy density alone.",
          "Wireless opportunity charging amplifies chemistry sensitivity: frequent partial-state-of-charge cycling and elevated charge rates stress different degradation mechanisms than overnight wired charging at 0.2C.",
        ],
      },
      {
        heading: "Common chemistries in industrial mobility",
        bullets: [
          "LFP (LiFePO₄): excellent cycle life and thermal stability; lower energy density; flat voltage plateau simplifies SOC estimation.",
          "NMC (LiNiMnCoO₂): higher energy density for compact AMR envelopes; moderate thermal management needs; common in 48–80 V light-industrial packs.",
          "NCA (LiNiCoAlO₂): highest energy density; used in high-voltage heavy AGV platforms; tighter thermal and voltage control margins.",
          "LTO (Li₄Ti₅O₁₂): niche for extreme cycle counts and cold-temperature performance at cost of low energy density.",
        ],
      },
      {
        heading: "Chemistry impact on wireless charging",
        paragraphs: [
          "LFP tolerates higher charge rates and sustained operation at high SOC with less calendar degradation than NMC, making it popular for robots that opportunity-charge throughout the shift. NMC packs accept higher energy in smaller volume but require stricter voltage and temperature limits during repeated 0.5–1C wireless top-offs.",
          "SiCore charge profiles are chemistry-aware: maximum charge current, taper voltage thresholds, and end-of-charge SOC targets are configured per pack type so wireless sessions do not exceed manufacturer C-rate and voltage ceilings.",
        ],
      },
      {
        heading: "Selection criteria for fleet planners",
        paragraphs: [
          "Match chemistry to duty cycle: high-throughput AMR fleets with dozens of daily charge events favor LFP longevity; long-range heavy-load AGVs needing maximum kWh per kilogram lean NMC or NCA. Chemistry choice also affects fire suppression design, shipping regulations (UN 38.3), and end-of-life recycling pathways — all relevant to warehouse deployment planning.",
        ],
      },
    ],
  }),

  article({
    slug: "soc",
    title: "SOC",
    summary:
      "State of Charge estimation and fleet SOC management for AGV and AMR packs — how wireless charging sessions interact with coulomb counting, OCV lookup, and mission release thresholds.",
    sections: [
      {
        paragraphs: [
          "State of Charge (SOC) is the fraction of remaining usable energy in the traction pack, expressed as a percentage. Fleet dispatch logic, wireless charge scheduling, and mission assignment all depend on accurate, stable SOC reporting — a robot released at 35% SOC on a long route creates throughput risk; one held at a pad at 85% SOC wastes dock capacity.",
          "SOC is not directly measurable: the BMS estimates it from current integration (coulomb counting), open-circuit voltage (OCV) correlation, and sometimes model-based fusion. Wireless charging adds estimation challenges because frequent partial charges and load transients during dock approach disturb OCV-based corrections.",
        ],
      },
      {
        heading: "SOC estimation methods",
        bullets: [
          "Coulomb counting: integrate charge/discharge current over time; drifts without periodic recalibration at known rest points.",
          "OCV lookup: map rested cell voltage to SOC; chemistry-specific tables; unreliable under load or immediately after charge.",
          "Kalman or observer models: fuse current, voltage, temperature, and internal resistance for dynamic accuracy.",
          "Full charge anchor: periodic complete charge to 100% resets accumulated error — rare in opportunity-charging fleets.",
        ],
      },
      {
        heading: "Fleet SOC policies",
        paragraphs: [
          "Industrial fleets define SOC bands for mission release, charge dispatch, and emergency reserve. A typical AMR policy: release missions above 40% SOC, trigger charge routing below 30%, and hard-block below 15%. SiCore wireless systems subscribe to BMS SOC broadcasts so charge sessions start and stop at fleet-configured thresholds without overriding pack safety limits.",
          "Opportunity charging complicates band management: robots may sit at 60–80% SOC most of the shift rather than swinging 20–100%. SOC estimation must remain accurate in the mid-range where OCV curves are flattest — especially for LFP chemistry.",
        ],
      },
      {
        heading: "Wireless charging and SOC reporting",
        paragraphs: [
          "During wireless charge sessions the BMS reports rising SOC to fleet software in real time. SiCore telemetry correlates delivered pad energy (kWh from the transmitter) with BMS-reported SOC delta to detect calibration drift or unexpected load during charge. Discrepancies flag BMS recalibration needs or receiver efficiency degradation before robots leave docks with less energy than dispatch assumes.",
        ],
      },
    ],
  }),

  article({
    slug: "soh",
    title: "SOH",
    summary:
      "State of Health tracking for AGV and AMR battery packs — capacity fade, internal resistance growth, and how repeated wireless fast-charge cycles affect remaining useful life.",
    sections: [
      {
        paragraphs: [
          "State of Health (SOH) quantifies how much capacity and power capability remain compared to a new pack — typically reported as a percentage of original rated capacity or as absolute available amp-hours. SOH drives replacement scheduling, warranty claims, and fleet energy planning: a pack at 80% SOH delivers fewer missions per charge and may charge slower if internal resistance has risen.",
          "Wireless opportunity charging accelerates some degradation pathways (high SOC dwell, elevated temperature during fast charge) while reducing others (deep discharge cycles). SOH monitoring must account for this mixed stress profile rather than assuming laboratory cycle-test curves.",
        ],
      },
      {
        heading: "SOH indicators",
        bullets: [
          "Capacity fade: reduced amp-hours deliverable from full charge to cutoff voltage at reference conditions.",
          "Resistance increase: higher DCIR causes greater voltage sag under load and heat during charge/discharge.",
          "Self-discharge drift: elevated idle loss may indicate cell inconsistency or micro-short development.",
          "Cycle count and equivalent full cycles: aggregated from partial cycles using throughput-based weighting.",
        ],
      },
      {
        heading: "Measurement approaches",
        paragraphs: [
          "Full capacity tests are impractical during production shifts, so BMS algorithms estimate SOH from partial discharge profiles, charge acceptance at reference conditions, or internal resistance trending during known load events. SiCore fleet analytics overlay wireless charge session data — energy delivered vs SOC gain — as an independent SOH cross-check when BMS estimates diverge from pad-side metering.",
        ],
      },
      {
        heading: "Fleet lifecycle planning",
        paragraphs: [
          "Track SOH per vehicle alongside mission throughput and charge minutes. Packs declining faster than fleet average may indicate thermal management faults, cell imbalance, or aggressive charge profiles on specific routes. SiCore dashboards support SOH trending so replacement budgets and spare pack inventory align with actual degradation — not calendar age alone.",
        ],
      },
    ],
  }),

  article({
    slug: "bms",
    title: "BMS",
    summary:
      "Battery Management System architecture for AGV and AMR packs — cell monitoring, protection, charge control, and CAN integration with SiCore wireless charging receivers.",
    sections: [
      {
        paragraphs: [
          "The Battery Management System (BMS) is the authoritative controller for every traction pack. It monitors cell voltages and temperatures, enforces charge and discharge limits, manages contactors, estimates SOC and SOH, and communicates pack status to the vehicle controller and external chargers — including wireless power receivers.",
          "SiCore wireless charging never bypasses the BMS. The receiver requests charge permission; the BMS grants current within cell-level constraints. This boundary is non-negotiable for safety certification and pack warranty compliance.",
        ],
      },
      {
        heading: "Core BMS functions",
        bullets: [
          "Cell voltage monitoring: per-cell or group sensing with over/under-voltage protection and shutdown.",
          "Current sensing: shunt or Hall-effect measurement for coulomb counting and overcurrent protection.",
          "Thermal management: cell and FET temperature inputs driving fan, pump, or derating requests.",
          "Contactor and pre-charge control: safe connection/disconnection of HV bus to vehicle inverter.",
          "Isolation monitoring: detects ground faults between HV pack and chassis.",
        ],
      },
      {
        heading: "Charge control interface",
        paragraphs: [
          "During wireless charging the BMS exposes charge permission, maximum charge current, and charge voltage limit on CAN (or equivalent). The onboard charger or DC charge controller — fed by the wireless receiver — regulates output to stay within BMS setpoints. If any cell approaches over-voltage or over-temperature during charge, the BMS reduces the current request or opens contactors, and the SiCore transmitter ramps down via the same communication path.",
        ],
      },
      {
        heading: "Diagnostics and fleet integration",
        paragraphs: [
          "BMS fault codes — cell imbalance, sensor failure, contactor weld, thermal runaway warning — must propagate to fleet software and pad controllers. SiCore integrations map standard BMS DBC signals so charge sessions abort cleanly on fault rather than leaving the transmitter energized against an open contactor. BMS firmware versioning is tracked per vehicle for field update coordination.",
        ],
      },
    ],
  }),

  article({
    slug: "fast-charging",
    title: "Fast Charging",
    summary:
      "High-rate wireless and wired charging strategies for AGV and AMR fleets — C-rate limits, thermal derating, charge taper, and dock dwell time optimization.",
    sections: [
      {
        paragraphs: [
          "Fast charging minimizes robot idle time by delivering maximum safe charge current during short dock windows. Wireless fast charging removes connector wear and operator steps, but power transfer is bounded by coil coupling, receiver thermal limits, BMS current requests, and cell chemistry acceptance — not by inverter nameplate rating alone.",
          "SiCore fast-charge profiles stage power: ramp after dock handshake, hold at peak within BMS limits, taper as cell voltage rises, and terminate at fleet SOC target rather than always charging to 100%.",
        ],
      },
      {
        heading: "Limiting factors",
        bullets: [
          "BMS maximum charge current (C-rate) and per-cell voltage ceiling.",
          "Receiver and onboard charger thermal capacity during sustained high-power transfer.",
          "Coupling coefficient k at actual dock alignment — lower k means higher primary current for same secondary power.",
          "Cell temperature: cold packs derate charge; hot packs trigger taper or session abort.",
          "Grid or facility power budget when multiple pads charge concurrently.",
        ],
      },
      {
        heading: "Charge taper and SOC targets",
        paragraphs: [
          "Constant-current charging dominates the early phase; as cell voltage approaches the limit, the BMS transitions to constant-voltage taper where accepted current falls. Opportunity-charging fleets often stop at 70–85% SOC because the last 15–20% charges slowly and generates disproportionate heat — better to release the pad for the next robot.",
          "SiCore session logic supports configurable SOC stop targets and adaptive taper coordination so pad dwell time matches workflow timing rather than forcing full charge every cycle.",
        ],
      },
      {
        heading: "Concurrent fast charging",
        paragraphs: [
          "Warehouses sizing multiple high-power pads must account for demand overlap: three 10 kW wireless sessions overlapping can exceed branch circuit capacity without load management. SiCore fleet power management can prioritize pads, stagger peak power, or derate non-critical sessions — always respecting individual BMS limits per vehicle.",
        ],
      },
    ],
  }),

  article({
    slug: "battery-safety",
    title: "Battery Safety",
    summary:
      "Safety architecture for AGV and AMR lithium packs — thermal runaway prevention, fault response during wireless charging, and alignment with industrial site electrical safety requirements.",
    sections: [
      {
        paragraphs: [
          "Traction battery safety in industrial environments combines electrical isolation, thermal containment, fault detection, and emergency response procedures. Wireless charging adds the requirement that power transfer stop reliably when the vehicle moves, when foreign objects enter the coupling gap, or when the BMS declares a fault — without relying on an operator to unplug a cable.",
          "SiCore safety design treats the wireless link as part of the charge safety chain alongside BMS contactors, fusing, and ground-fault monitoring — not a separate convenience layer.",
        ],
      },
      {
        heading: "Protection layers",
        bullets: [
          "Cell-level: fuse, vent, and chemistry selection to reduce thermal runaway propagation risk.",
          "Pack-level: contactors, pre-charge, HVIL (high-voltage interlock), and enclosure flame barriers.",
          "Charge path: overcurrent, overvoltage, reverse polarity, and isolation monitoring on receiver output.",
          "Wireless-specific: FOD (foreign object detection), living object detection, and comm-loss shutdown.",
          "Facility: smoke detection, fire suppression, and clearances per local electrical and fire codes.",
        ],
      },
      {
        heading: "Fault response during wireless charge",
        paragraphs: [
          "On BMS fault — over-temperature, cell over-voltage, isolation failure — the contactor opens and the wireless transmitter must de-energize within milliseconds via comm-loss timeout or explicit fault signal. SiCore pads implement staged power removal: immediate gate drive disable on critical faults, controlled ramp on non-critical taper requests.",
          "Mechanical safety interlocks prevent motion with HV energized where vehicle standards require: charge sessions lock drive motors or require parking brake confirmation before power transfer begins.",
        ],
      },
      {
        heading: "Maintenance and incident prevention",
        paragraphs: [
          "Regular inspection covers pack enclosure integrity, vent obstruction, receiver cable wear, and BMS fault log review. Swollen cells, recurring imbalance alarms, or rising charge session abort rates trigger pack quarantine before catastrophic failure. SiCore session logs provide forensic data — power, duration, alignment, abort reason — for post-incident analysis.",
        ],
      },
    ],
  }),

  article({
    slug: "thermal-management",
    title: "Thermal Management",
    summary:
      "Pack and receiver thermal design for AGV and AMR systems — cooling strategies, derating during wireless fast charge, and ambient temperature effects on warehouse fleet operation.",
    sections: [
      {
        paragraphs: [
          "Thermal management governs how much charge and discharge power the pack can sustain without cell damage or safety shutdown. Wireless fast charging concentrates heat in cells, receiver rectifiers, and onboard chargers simultaneously — during a dock window when airflow is often limited because the robot is stationary over a pad.",
          "SiCore systems coordinate electrical derating with BMS thermal requests: when cell or receiver temperature rises, charge power reduces before hard thermal cutoff — preserving session continuity at lower rate rather than abrupt abort.",
        ],
      },
      {
        heading: "Cooling approaches",
        bullets: [
          "Passive: aluminum spreaders, heat sinks on receiver and charger, pack enclosure venting — common on light AMRs.",
          "Forced air: fans on pack module or charger cabinet; ducting sensitive to dust and obstruction in warehouses.",
          "Liquid cooling: cold plates on high-power fork AGV packs; glycol loops with chiller in extreme climates.",
          "Phase-change or heat pipe: niche solutions for compact high-C-rate packs.",
        ],
      },
      {
        heading: "Charge and ambient derating",
        paragraphs: [
          "Battery charge acceptance drops at low temperature ( lithium plating risk ) and must derate at high temperature ( accelerated degradation and thermal runaway risk ). Cold-storage AMR deployments need pre-conditioning strategies or chemistry selection ( LFP, LTO ) tolerant of sub-zero operation.",
          "Summer peak warehouse temperatures — especially near charging bays with multiple active inverters — raise receiver and pack inlet air temperature. SiCore pad enclosures include thermal design margins and optional exhaust paths so adjacent simultaneous sessions do not create mutual derating hotspots.",
        ],
      },
      {
        heading: "Monitoring and fleet policy",
        paragraphs: [
          "BMS reports cell max/min temperature; SiCore telemetry adds receiver and inverter heat sink trends. Fleet software can route overheating vehicles to low-power pads, extend dwell time, or defer missions until temperatures fall. Thermal trending over months reveals cooling system degradation before hard faults occur.",
        ],
      },
    ],
  }),

  article({
    slug: "cell-balancing",
    title: "Cell Balancing",
    summary:
      "Active and passive cell balancing in AGV and AMR packs — why wireless opportunity charging increases imbalance risk and how the BMS maintains uniform cell SOC.",
    sections: [
      {
        paragraphs: [
          "Cells in series inevitably diverge in capacity and self-discharge due to manufacturing variance and uneven temperature distribution. Without balancing, the weakest cell hits voltage limits first — capping usable pack capacity and risking over-charge on stronger cells during wireless top-off sessions.",
          "Opportunity charging at partial SOC can reduce full-charge balancing opportunities compared to nightly full cycles, making active balancing during charge and discharge more important for wireless-heavy fleets.",
        ],
      },
      {
        heading: "Balancing methods",
        bullets: [
          "Passive balancing: bleed resistors shunt excess energy from high cells during charge taper — simple, generates heat.",
          "Active balancing: energy transferred from high cells to low cells via capacitive or inductive converters — efficient, higher BMS cost.",
          "Top balancing: equalize at high SOC near end of charge — effective when full charges occur regularly.",
          "Bottom balancing: equalize at low SOC during discharge — less common in fleet robots with high SOC floors.",
        ],
      },
      {
        heading: "Impact on wireless charging",
        paragraphs: [
          "Short wireless sessions that stop at 80% SOC may never trigger the taper phase where passive balancing is most active. BMS firmware for opportunity-charging fleets often enables balancing during charge regardless of session length, or schedules periodic maintenance charges to 100% for top balancing.",
          "SiCore fleet analytics monitor cell voltage spread reported by the BMS during charge sessions. Widening delta-V trends trigger maintenance alerts — rebalancing charge, thermal inspection, or cell replacement — before the pack usable capacity collapses.",
        ],
      },
      {
        heading: "Commissioning and replacement",
        paragraphs: [
          "New pack integration requires verifying balancing configuration matches chemistry and fleet charge policy. Cell replacement in field service demands BMS re-learning and often a controlled full-charge balance cycle before returning the robot to high-rate wireless opportunity charging.",
        ],
      },
    ],
  }),

  article({
    slug: "energy-optimization",
    title: "Energy Optimization",
    summary:
      "Fleet-level energy optimization for AGV and AMR operations — route energy modeling, charge scheduling, regenerative braking, and minimizing total kWh per mission through wireless infrastructure design.",
    sections: [
      {
        paragraphs: [
          "Energy optimization reduces operating cost, pad infrastructure sizing, and peak facility demand by minimizing wasted charge, avoiding unnecessary battery mass, and aligning robot dispatch with available energy. Wireless charging enables optimization strategies impossible with manual plug-in — pads at natural dwell points, autonomous charge routing, and real-time SOC-aware mission assignment.",
          "SiCore energy optimization spans hardware efficiency ( coil coupling, inverter loss ) and software ( fleet dispatch, charge priority, power caps ) as a single system.",
        ],
      },
      {
        heading: "Optimization levers",
        bullets: [
          "Right-size pack capacity: excess kWh adds mass and cost; insufficient capacity forces oversized pad count.",
          "Opportunity pad placement at high-dwell stations to reduce dedicated charge trips.",
          "SOC-aware dispatch: assign long routes to high-SOC robots; queue low-SOC units to nearest pad.",
          "Regenerative braking tuning: recover aisle descent energy without triggering BMS over-voltage on small packs.",
          "Peak demand management: stagger high-power wireless sessions across shift timeline.",
        ],
      },
      {
        heading: "Energy modeling",
        paragraphs: [
          "Digital twin or spreadsheet models simulate route energy from distance, acceleration profile, payload, and lift actuation. Compare against wireless charge opportunity map — which stations have pads, expected dwell seconds, achievable k at each pad — to validate 24-hour SOC feasibility before capital install.",
          "SiCore deployment engineering uses measured charge efficiency from commissioning ( AC meter to BMS coulomb gain ) rather than datasheet figures alone, because site-specific alignment and temperature dominate real delivered energy.",
        ],
      },
      {
        heading: "Continuous improvement",
        paragraphs: [
          "Post-deployment, compare energy per mission, charge minutes per mission, and pad kWh throughput weekly. Routes that consistently arrive at critical SOC indicate modeling error or workflow change. Optimization is iterative: pad additions, charge profile tuning, and dispatch rule updates driven by telemetry — not one-time sizing at install.",
        ],
      },
    ],
  }),

  article({
    slug: "hybrid-energy-systems",
    title: "Hybrid Energy Systems",
    summary:
      "Hybrid battery and supercapacitor architectures for AGV and AMR platforms — combining energy and power density to support peak loads, regenerative capture, and high-rate wireless opportunity charging.",
    sections: [
      {
        paragraphs: [
          "Hybrid energy systems pair a high-energy lithium battery with a high-power auxiliary source — typically supercapacitors ( ultracapacitors ) or a smaller high-power battery segment — managed by a central DC bus controller. The battery supplies steady-state cruise energy; the auxiliary source absorbs regenerative peaks and delivers burst power for acceleration and lift without stressing cells.",
          "Wireless opportunity charging replenishes the battery between missions while the auxiliary buffer handles transient power swings that would otherwise trigger BMS current limits or voltage sag during simultaneous drive and charge.",
        ],
      },
      {
        heading: "Architecture patterns",
        bullets: [
          "Passive parallel: battery and supercapacitor bank on shared DC bus with diode or ORing — simple, less control flexibility.",
          "Active split: bidirectional DC-DC converters route power between battery, supercapacitor, and load/charger.",
          "Battery + supercapacitor with wireless receiver on bus: receiver feeds bus; controller allocates charge to battery vs capacitor.",
          "Dual chemistry: LFP for energy plus small LTO segment for power — rare but avoids separate capacitor maintenance.",
        ],
      },
      {
        heading: "Benefits for wireless-charged fleets",
        paragraphs: [
          "Supercapacitors accept high charge and discharge current with minimal heat — ideal for capturing regenerative braking energy during deceleration into a wireless pad approach. The battery receives smoother average charge current from the wireless receiver rather than alternating charge and regen spikes on a single pack.",
          "Peak power demand on the wireless link drops when the capacitor supplies acceleration surge: a 5 kW average charge with 15 kW peak motor load becomes manageable if the capacitor covers the 10 kW delta for seconds.",
        ],
      },
      {
        heading: "Design and maintenance trade-offs",
        paragraphs: [
          "Hybrid systems add cost, volume, control complexity, and additional failure modes — capacitor ESR drift, voltage balancing across series caps, DC-DC converter efficiency. Justify hybrid architecture when mission profile shows repeatable high peak-to-average power ratio or when regenerative energy recovery measurably reduces net charge minutes. SiCore bus-level charge integration coordinates wireless power with hybrid controllers via standard CAN energy setpoints.",
        ],
      },
    ],
  }),

  article({
    slug: "supercapacitors",
    title: "Supercapacitors",
    summary:
      "Supercapacitor ( ultracapacitor ) technology for AGV and AMR energy buffers — EDLC fundamentals, sizing for regenerative braking, and integration alongside wireless-charged lithium packs.",
    sections: [
      {
        paragraphs: [
          "Supercapacitors — electric double-layer capacitors ( EDLCs ) — store energy electrostatically rather than through chemical reaction. They offer power densities orders of magnitude above lithium cells, cycle lives exceeding 500,000 cycles, and charge/discharge efficiency above 95%, but energy density remains far below batteries — typically 5–10 Wh/kg vs 150+ Wh/kg for lithium.",
          "In AGV and AMR applications supercapacitors serve as power buffers, not primary traction energy stores. They complement wireless-charged battery packs by absorbing brief energy pulses that would otherwise degrade cells or exceed BMS current limits.",
        ],
      },
      {
        heading: "Technical characteristics",
        bullets: [
          "Voltage: low per cell ( 2.7 V typical ); series strings needed; mandatory voltage balancing across cells.",
          "ESR: equivalent series resistance causes heat at high ripple current — sizing must limit I²R loss.",
          "Self-discharge: higher than batteries; idle robots lose stored cap energy over hours, not weeks.",
          "Temperature range: generally wider and more stable than lithium for industrial cold/hot aisles.",
          "No thermal runaway: different failure mode than lithium — venting and wear, not fire propagation.",
        ],
      },
      {
        heading: "Application in wireless-charged robots",
        paragraphs: [
          "Regenerative braking into a supercapacitor bank during approach to a wireless pad stores kinetic energy that can offset charge demand on the battery when the session starts. Capacitors also smooth wireless receiver output when the BMS requests step changes in charge current — the capacitor absorbs transient mismatch between receiver delivery and battery acceptance.",
          "Sizing follows energy and power budget: joules needed for worst-case deceleration event plus watts for peak acceleration assist, divided by usable voltage swing on the cap bank. Most AMR hybrid cap banks are 50–500 F total at 48–96 V equivalent — kilojoules, not kilowatt-hours.",
        ],
      },
      {
        heading: "Maintenance and lifecycle",
        paragraphs: [
          "Supercapacitors age through ESR increase and capacitance fade — especially at elevated temperature. BMS or cap-management modules track health and balance voltage continuously. Wireless fleet operators monitor cap bank health alongside battery SOH because degraded capacitors pass peak current back to cells, negating the hybrid benefit. Replacement intervals are longer than battery but not infinite; plan cap module spares for high-duty regenerative applications.",
        ],
      },
    ],
  }),
];
