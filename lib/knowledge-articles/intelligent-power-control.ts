import type { KnowledgeArticle } from "@/lib/knowledge-articles/types";

const categoryId = "intelligent-power-control";

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

/** Collection 05 — Intelligent Power Control / AI Power Control */
export const intelligentPowerControlArticles: readonly KnowledgeArticle[] = [
  article({
    slug: "adaptive-power-control",
    title: "Adaptive Power Control",
    summary:
      "How SiCore docks adjust power delivery in real time as gap, alignment, load, and thermal conditions change across AGV and AMR fleet cycles.",
    sections: [
      {
        paragraphs: [
          "Adaptive power control continuously reshapes the charging setpoint as the wireless link and battery state evolve. Unlike a fixed CC/CV profile tuned for one alignment, an adaptive controller reads link quality, temperature, and pack feedback each cycle and moves the operating point to stay inside safe ZVS, FOD, and thermal envelopes.",
          "In industrial docks the coupling coefficient k and equivalent load resistance change every park — lateral offset, worn tires, payload variation, and ambient temperature all shift the resonant gain curve. Adaptive control treats those shifts as expected inputs, not faults.",
        ],
      },
      {
        heading: "What the controller adapts",
        bullets: [
          "Delivered power vs gap quality: reduce when misalignment raises stress, increase when the link is strong and cool.",
          "Frequency and phase targets as the tank detunes with heat or metal proximity.",
          "Current ramp rates during SOC transitions to avoid overshoot on aged packs.",
          "Thermal derating on pad ferrite, coil Litz, and vehicle receiver without hard shutdown unless limits are breached.",
        ],
      },
      {
        heading: "SiCore implementation mindset",
        paragraphs: [
          "SiCore pairs resonant hardware with a multi-loop controller: an inner loop holds soft switching and link stability; an outer loop optimizes charge rate against fleet SLA and battery health. Adaptation is bounded — the controller never chases peak lab efficiency at the expense of FOD margin or semiconductor SOA.",
        ],
      },
      {
        heading: "Fleet operations payoff",
        paragraphs: [
          "Operators see fewer failed dock cycles and less variance in minutes-to-ready across robots on the same charger. Telemetry from adaptive decisions — why power was limited on a given cycle — becomes actionable maintenance data instead of unexplained slow charges.",
        ],
      },
    ],
  }),

  article({
    slug: "ai-optimization",
    title: "AI Optimization",
    summary:
      "Machine-learning layers that improve wireless charging decisions over time — from dock placement patterns to per-vehicle charging profiles in SiCore-managed fleets.",
    sections: [
      {
        paragraphs: [
          "AI optimization in wireless power does not replace physics; it learns patterns that classical models under-specify. Historical dock events — alignment scatter, ambient temperature bands, shift schedules, and pack impedance trends — reveal where fixed tuning leaves efficiency or uptime on the table.",
          "SiCore applies learning at the fleet edge: models infer expected k and thermal headroom before the robot finishes docking, pre-bias frequency search, and suggest charge profiles that respect battery aging signatures observed on that vehicle ID.",
        ],
      },
      {
        heading: "High-value use cases",
        bullets: [
          "Predict optimal frequency starting point from pose telemetry and past successful docks at that station.",
          "Cluster vehicles by effective receiver impedance drift and assign gentler CC ceilings to outlier packs.",
          "Detect anomalous loss signatures that precede connector wear, ferrite cracking, or capacitor degradation.",
          "Schedule opportunistic top-offs during idle windows without starving peak-shift throughput.",
        ],
      },
      {
        heading: "Guardrails matter",
        paragraphs: [
          "Learned setpoints run through the same hard limits as rule-based control: FOD thresholds, maximum pad temperature, ZVS loss detection, and communication timeouts. AI proposes; the safety envelope disposes. Models are versioned and validated on recorded dock traces before fleet rollout.",
        ],
      },
      {
        heading: "What to measure",
        paragraphs: [
          "Log per-cycle features: alignment estimate, settled frequency, efficiency, charge delivered, time-to-full, and fault flags. Without labeled fleet data, AI becomes marketing. With it, optimization compounds — each thousand dock cycles refines the map your mechanical tolerances alone cannot encode.",
        ],
      },
    ],
  }),

  article({
    slug: "digital-power",
    title: "Digital Power",
    summary:
      "Digital control architecture for resonant wireless chargers — DSP/MCU loops, configurable compensation behavior, and OTA-tunable dock firmware in SiCore systems.",
    sections: [
      {
        paragraphs: [
          "Digital power moves the resonant inverter, sensing, and protection out of fixed analog-only networks into firmware-defined loops. ADCs sample coil current, bus voltage, and temperatures at tens to hundreds of kilohertz; PWM and gate drivers execute frequency, phase, and dead-time commands computed each control period.",
          "For AGV/AMR docks, digitization is what makes one hardware platform serve multiple power classes and coil geometries through configuration — not a respin of analog RC networks for every customer aisle width.",
        ],
      },
      {
        heading: "Core digital blocks",
        bullets: [
          "High-speed current and voltage sensing with anti-alias filtering aligned to switching harmonics.",
          "Resonant frequency tracker and phase modulator with explicit ZVS margin estimation.",
          "State machine for dock handshake, FOD pre-check, CC/CV handoff, and fault latching.",
          "Non-volatile parameter store for coil constants, FOD baselines, and fleet-specific derating.",
        ],
      },
      {
        heading: "Why SiCore standardizes on digital",
        paragraphs: [
          "Digital control enables adaptive and AI layers to sit on one stack: the same firmware that enforces SOA limits also hosts optimization and telemetry. Field updates can refine control without replacing magnetics — critical when hundreds of pads are already bolted into production floors.",
        ],
      },
      {
        heading: "Integration with the vehicle",
        paragraphs: [
          "CAN, Ethernet, or proprietary fleet buses carry setpoints, SOC targets, and diagnostics bidirectionally. The dock is a node in the robot's energy management system, not an isolated brick that blindly pushes current until something gets hot.",
        ],
      },
    ],
  }),

  article({
    slug: "dynamic-frequency-tracking",
    title: "Dynamic Frequency Tracking",
    summary:
      "Real-time resonant frequency tracking as coupling and temperature drift — keeping the inverter on the efficient, soft-switching branch during every dock.",
    sections: [
      {
        paragraphs: [
          "Dynamic frequency tracking (DFT) continuously estimates the resonant or gain-optimal frequency of the coupled tanks and steers the inverter to follow it. In wireless docks, that target moves: gap changes mutual inductance, ferrite temperature shifts permeability, and battery load moves the reflected impedance.",
          "A fixed-frequency charger tuned at 25 °C bench conditions will detune on a hot summer aisle or after the fifth back-to-back charge when pad ferrite has stored heat.",
        ],
      },
      {
        heading: "Tracking methods",
        bullets: [
          "Phase-dip or impedance-peaking search around the last known good frequency.",
          "Perturb-and-observe on delivered power or tank current magnitude with bounded step size.",
          "Model-based prediction from alignment telemetry to shrink search time at dock start.",
          "Lock-out bands near bifurcation regions where frequency splitting creates dual peaks.",
        ],
      },
      {
        heading: "Interaction with ZVS",
        paragraphs: [
          "The tracked frequency must stay on the correct side of resonance for the chosen modulation scheme — tracking peak power alone can wander into hard-switching corners. SiCore controllers co-optimize frequency and phase with a ZVS feasibility check each update.",
        ],
      },
      {
        heading: "Fleet-visible benefits",
        paragraphs: [
          "Shorter settle time after the robot parks means more charging seconds per dock window. Consistent tracking reduces failed starts caused by the inverter hunting across a split gain curve when alignment is good but temperature is elevated.",
        ],
      },
    ],
  }),

  article({
    slug: "dynamic-impedance-matching",
    title: "Dynamic Impedance Matching",
    summary:
      "Adjusting effective tank impedance — switched capacitors, tunable networks, or control actuators — to keep the wireless link efficient across misalignment and load swings.",
    sections: [
      {
        paragraphs: [
          "Static compensation networks are designed for a nominal k and load. Dynamic impedance matching adds actuators or switched elements so the primary and/or secondary can retune when reflected impedance moves outside the efficient band.",
          "This is especially valuable on AMR fleets where no two parking poses are identical and receiver boards may differ by retrofit generation.",
        ],
      },
      {
        heading: "Actuator options",
        bullets: [
          "Switched capacitor banks on primary or secondary tanks with precomputed safe combinations.",
          "Variable inductance via switched tap windings or saturable elements (used cautiously for loss).",
          "Fine adjustment through phase shift and frequency when mechanical tuning range is insufficient.",
          "Receiver-side active rectifier or post-regulator impedance shaping for CC/CV transitions.",
        ],
      },
      {
        heading: "Control strategy",
        paragraphs: [
          "Matching loops run slower than current loops but faster than thermal drift. SiCore maps safe actuator states offline across k and R_load so runtime selection is table-driven with continuous refinement from live measurements — avoiding ad hoc capacitor switching that rings the tank into over-voltage.",
        ],
      },
      {
        heading: "When static compensation is enough",
        paragraphs: [
          "Tight mechanical guidance and narrow k windows may not justify switched networks. Dynamic matching pays off when dock repeatability is measured in centimeters, not millimeters, or when one pad serves multiple vehicle footprints.",
        ],
      },
    ],
  }),

  article({
    slug: "load-detection",
    title: "Load Detection",
    summary:
      "Identifying when a valid receiver is present and ready — versus an open coil, partial dock, or unsafe load — before full power is applied.",
    sections: [
      {
        paragraphs: [
          "Load detection answers whether the transmitter should energize the pad at full authority. Wireless chargers must distinguish a properly coupled receiver from an empty dock, a metal cart parked nearby, or a vehicle that has not completed communication handshakes.",
          "Industrial systems combine low-power probing, impedance signatures, and digital messaging so power ramps only after confidence is high.",
        ],
      },
      {
        heading: "Detection signals",
        bullets: [
          "Reflected impedance change when a receiver tank loads the primary.",
          "Secondary communication beacon or modulated backscatter on the link.",
          "Qi-style or custom in-band signaling confirming CC/CV readiness.",
          "Mechanical interlocks or pose sensors correlating robot presence with electrical signature.",
        ],
      },
      {
        heading: "Staged power ramp",
        paragraphs: [
          "SiCore docks typically use a staged sequence: idle ping → identification → FOD baseline compare → negotiated power ramp. Each stage has tighter limits than the next. Skipping stages for faster charge sounds attractive until an empty pad fires at full bridge voltage into detuned capacitors.",
        ],
      },
      {
        heading: "False positives and negatives",
        paragraphs: [
          "False positive load detect risks heating foreign metal; false negative detect frustrates fleet throughput. Characterize both across temperature and with neighboring steel structures. Log rejected starts — they often predict mechanical wear on guides or a failing receiver capacitor before total fault.",
        ],
      },
    ],
  }),

  article({
    slug: "foreign-object-detection",
    title: "Foreign Object Detection",
    summary:
      "FOD methods that stop or limit wireless power when unintended metal — tools, debris, or ferrous floor plates — would be heated by stray flux.",
    sections: [
      {
        paragraphs: [
          "Foreign object detection (FOD) protects people, property, and the charger itself from induced heating in objects that are not the intended receiver. Resonant WPT can expose kilowatts of flux; a coin, wrench, or steel plate in the wrong place becomes a resistor.",
          "Regulatory and insurer expectations for industrial installs treat FOD as non-optional — especially in human-present warehouses and maintenance bays.",
        ],
      },
      {
        heading: "Detection approaches",
        bullets: [
          "Power loss accounting: compare transmitted vs received power; excess loss implies parasitic heating.",
          "Resonant parameter shift vs learned baseline for empty pad and valid receiver.",
          "Q-factor or impedance signature changes from eddy-current loading on ferrous objects.",
          "Thermal imaging or NFC-style auxiliary sensors on high-power or public-facing pads.",
        ],
      },
      {
        heading: "SiCore FOD philosophy",
        paragraphs: [
          "Baseline at commissioning: each pad learns its empty and mated signatures with temperature compensation. During charge, FOD runs continuously — not only at start — because objects can slide into the field mid-session when maintenance staff work beside an AGV aisle.",
        ],
      },
      {
        heading: "Balancing safety and uptime",
        paragraphs: [
          "Over-sensitive FOD causes nuisance trips that erode operator trust; under-sensitive FOD creates burn hazards. Tune thresholds from worst-case metal placement tests, then validate with fleet telemetry. Document trip events with context so thresholds can be refined without blind loosening.",
        ],
      },
    ],
  }),

  article({
    slug: "living-object-detection",
    title: "Living Object Detection",
    summary:
      "Detecting humans and animals in or near the charging field — extending FOD with biologically relevant limits for warehouse and service-robot docks.",
    sections: [
      {
        paragraphs: [
          "Living object detection (LOD) addresses organisms that must not be heated by stray fields — hands during maintenance, warehouse staff stepping over a low pad, or pets in facilities that mix service robots with public access.",
          "LOD builds on FOD physics but adds conservative limits, faster shutdown, and often multimodal sensing because biological tissue has different coupling and regulatory exposure context than a steel bolt.",
        ],
      },
      {
        heading: "Layered protection",
        bullets: [
          "Primary FOD loss and Q monitoring with stricter trip margins when human-presence mode is active.",
          "Proximity sensors, light curtains, or vision zones around high-power pads in mixed-traffic areas.",
          "Reduced standby probe power and shorter fault reaction times during maintenance windows.",
          "Fleet software geofencing: full power only when the dock zone is confirmed clear.",
        ],
      },
      {
        heading: "Operational modes",
        paragraphs: [
          "SiCore systems support mode profiles — production charging with standard FOD, maintenance mode with lower caps and mandatory presence sensors, and commissioning mode with explicit human acknowledgment. Mode transitions are logged for safety audits.",
        ],
      },
      {
        heading: "Standards and site policy",
        paragraphs: [
          "Follow applicable exposure and product-safety requirements for your region and power class. LOD is as much a site layout and procedure decision as a firmware feature: pad height, marking, guarding, and training determine whether technology margins translate to real-world safety.",
        ],
      },
    ],
  }),

  article({
    slug: "real-time-efficiency-optimization",
    title: "Real-Time Efficiency Optimization",
    summary:
      "Maximizing end-to-end wireless charge efficiency during each cycle — inverter, link, rectifier, and battery — without violating thermal, FOD, or battery health constraints.",
    sections: [
      {
        paragraphs: [
          "Real-time efficiency optimization adjusts operating point to minimize total loss for the current k, load, and temperature. Efficiency is not a single datasheet number; it is the ratio of DC watt-hours stored to DC watt-hours drawn at the pad, measured over the actual CC/CV trajectory.",
          "Industrial fleets feel efficiency as heat in sealed enclosures, electricity cost at scale, and whether the robot reaches the next shift without an extra dock stop.",
        ],
      },
      {
        heading: "Loss buckets to balance",
        bullets: [
          "Inverter switching and conduction loss vs ZVS margin.",
          "Coil copper and ferrite core loss vs alignment-imposed current rise.",
          "Rectifier and receiver regulation loss vs battery voltage headroom.",
          "Resonant tank circulating current vs capacitor ESR heating.",
        ],
      },
      {
        heading: "Online optimizers",
        paragraphs: [
          "SiCore controllers use constrained search: small frequency and phase steps that increase measured delivered power while monitoring loss proxies (pad temperature slope, input-output power delta, ZVS indicators). When margins tighten, the optimizer backs off — peak efficiency is worthless if it trips FOD or ages the pack.",
        ],
      },
      {
        heading: "Reporting for operations",
        paragraphs: [
          "Per-cycle efficiency scores aggregated by pad ID expose misaligned mechanics, dirty ferrite gaps, or failing vehicle receivers long before hard fault. Efficiency trending is predictive maintenance data dressed as an energy KPI.",
        ],
      },
    ],
  }),

  article({
    slug: "predictive-maintenance",
    title: "Predictive Maintenance",
    summary:
      "Using charging telemetry — loss trends, alignment drift, temperature signatures — to service AGV pads and receivers before unplanned downtime.",
    sections: [
      {
        paragraphs: [
          "Predictive maintenance (PdM) for wireless docks treats every charge cycle as a health check. Capacitor ESR creep, ferrite stress, guide wear, and receiver solder fatigue all leave fingerprints in efficiency, frequency settle time, and fault margins before catastrophic failure.",
          "SiCore intelligent control archives those fingerprints per pad and per vehicle for fleet-level analytics.",
        ],
      },
      {
        heading: "Leading indicators",
        bullets: [
          "Monotonic rise in pad or receiver temperature at the same power and alignment score.",
          "Longer frequency search or lost ZVS events at previously stable poses.",
          "Increasing FOD nuisance margin usage — the controller working harder to distinguish valid loads.",
          "Drop in coulombic efficiency vs fleet median for the same SOC window.",
        ],
      },
      {
        heading: "From alert to work order",
        paragraphs: [
          "Thresholds trigger tiered alerts: watch (schedule inspection), warn (derate power automatically), stop (remove pad from rotation). Integrations with CMMS export pad ID, cycles since service, and the telemetry snapshot that triggered the flag — so technicians arrive with parts, not guesswork.",
        ],
      },
      {
        heading: "Avoiding alert fatigue",
        paragraphs: [
          "Models should compare against sibling pads on the same shift and account for seasonal ambient change. Raw temperature alerts without baseline normalization flood maintenance teams and get ignored — the failure mode PdM is meant to prevent.",
        ],
      },
    ],
  }),

  article({
    slug: "smart-energy-scheduling",
    title: "Smart Energy Scheduling",
    summary:
      "Coordinating wireless charging with fleet routes, electricity tariffs, and site power limits — so docks charge the right robots at the right time.",
    sections: [
      {
        paragraphs: [
          "Smart energy scheduling sits above the power electronics: it decides which AGV/AMR receives charge now, which waits, and at what power cap given upstream breaker limits, on-site solar, or time-of-use pricing.",
          "Wireless docks are fast to engage — scheduling leverage comes from knowing dwell time at station, next mission deadline, and state of charge across the fleet.",
        ],
      },
      {
        heading: "Inputs to the scheduler",
        bullets: [
          "Mission queue and route ETA from fleet management software.",
          "Per-vehicle SOC, battery health tier, and minimum departure energy.",
          "Site power budget: main feed, phase balance, and shared transformer headroom.",
          "Tariff windows, demand charges, and optional renewable availability forecasts.",
        ],
      },
      {
        heading: "SiCore coordination",
        paragraphs: [
          "Docks expose controllable setpoints — max power, target SOC, pause/resume — over fleet APIs. The scheduler writes intentions; each dock's local controller enforces FOD, thermal, and battery-safe execution. Distributed control prevents a central outage from leaving robots unsafe on energized pads.",
        ],
      },
      {
        heading: "Practical outcomes",
        paragraphs: [
          "Peak-shift robots get priority fast charge; idle units trickle during expensive rate periods. Multi-pad aisles load-balance so installing wireless does not trip facility breakers when every AMR returns for lunch simultaneously.",
        ],
      },
    ],
  }),

  article({
    slug: "battery-health-monitoring",
    title: "Battery Health Monitoring",
    summary:
      "Monitoring pack health during wireless charge — impedance growth, temperature rise, and cycle stress — to extend AGV battery life and flag unsafe packs.",
    sections: [
      {
        paragraphs: [
          "Battery health monitoring (BHM) uses the charging session as a diagnostic window. Incremental capacity loss, rising internal resistance, and cell imbalance show up in voltage curvature, temperature gradients, and how much power the pack accepts late in CV phase.",
          "Wireless charging adds link variables, so BHM must separate pack degradation from bad alignment or receiver loss — SiCore correlates electrical signatures with pose and efficiency context.",
        ],
      },
      {
        heading: "Signals tracked",
        bullets: [
          "DC internal resistance estimates from current steps during controlled CC segments.",
          "Temperature delta vs ambient and vs fleet cohort at similar power.",
          "CV tail duration and coulombic efficiency vs historical baseline for that vehicle ID.",
          "Communication-reported cell voltages and BMS fault flags when available.",
        ],
      },
      {
        heading: "Closing the loop",
        paragraphs: [
          "Healthy packs receive full fleet charge rates; flagged packs get reduced CC ceilings, longer rest recommendations, or maintenance routing. The dock becomes an gatekeeper — not every vehicle should absorb maximum wireless power every cycle if the pack is already stressed.",
        ],
      },
      {
        heading: "Privacy and ownership",
        paragraphs: [
          "Health data belongs to the fleet operator. SiCore architectures keep per-vehicle histories exportable and segregated by customer policy — useful for warranty disputes, replacement planning, and proving that charging practice — not abuse — caused a failure.",
        ],
      },
    ],
  }),

  article({
    slug: "self-calibration",
    title: "Self Calibration",
    summary:
      "Automated pad and receiver calibration — baseline impedance, FOD signatures, and power scaling — without external lab equipment at every install.",
    sections: [
      {
        paragraphs: [
          "Self-calibration lets a wireless dock learn its normal electrical personality after installation or component replacement. Manual calibration with external LCR meters does not scale when hundreds of pads roll out across a warehouse network.",
          "SiCore self-calibration runs scripted low-power sequences: empty pad baseline, known test load or mated reference receiver, and optional fleet-provided golden vehicle — storing results in non-volatile memory with temperature tags.",
        ],
      },
      {
        heading: "What gets calibrated",
        bullets: [
          "FOD empty-pad and mated-receiver reference signatures.",
          "Power meter alignment between primary sensing and secondary reported power.",
          "Frequency search seeds for local ferrite batch and coil serial.",
          "Communication latency and handshake timeouts for the site's network load.",
        ],
      },
      {
        heading: "When recalibration runs",
        paragraphs: [
          "Triggers include first power-on, firmware update affecting control gains, replaced capacitor bank or coil assembly, and scheduled drift checks after N cycles or thermal seasons. Forced recalibration after maintenance prevents a swapped receiver board from skewing FOD baselines.",
        ],
      },
      {
        heading: "Commissioning workflow",
        paragraphs: [
          "Installers confirm mechanical pad placement, run the guided calibration wizard, and verify a full-power test charge with sign-off captured in the fleet portal. Self-calibration reduces field dependency on expert field application engineers — but it does not replace correct mechanical install.",
        ],
      },
    ],
  }),

  article({
    slug: "autonomous-charging",
    title: "Autonomous Charging",
    summary:
      "End-to-end autonomous charge for AGV and AMR — navigation to dock, pose correction, power negotiation, and departure without operator intervention.",
    sections: [
      {
        paragraphs: [
          "Autonomous charging closes the loop between fleet software and SiCore wireless hardware: the robot navigates to the charge station, aligns within the coil's capture region, establishes digital link, and charges until SOC or schedule criteria are met — then releases and returns to work.",
          "Wireless autonomy removes wear-prone physical contacts and reduces janitorial burden on exposed pins, but it demands reliable pose, communication, and intelligent power control working together.",
        ],
      },
      {
        heading: "System components",
        bullets: [
          "Fleet planner assigning charge tasks from SOC, mission slack, and pad availability.",
          "Precision docking: SLAM, magnetic tape, QR, or mechanical funnel to repeatable pose.",
          "Dock localization feedback: alignment score streamed to the robot for micro-correction.",
          "Charge session state machine: approach → mate → charge → complete → clear field.",
        ],
      },
      {
        heading: "Failure handling",
        paragraphs: [
          "Autonomous systems must degrade gracefully: retry alignment with adjusted approach, reroute to a secondary pad, or alert maintenance if FOD trips repeatedly at one station — often a mechanical issue, not a navigation bug. SiCore logs session abort reasons so root cause is visible across software and hardware teams.",
        ],
      },
      {
        heading: "Throughput design",
        paragraphs: [
          "Autonomy is won or lost in seconds per cycle. Fast load detect, pre-biased frequency tracking, and adaptive power restore charge minutes that navigation spent aligning. Size pad count and charge rates from shift simulation — not from a single-robot demo on an empty floor.",
        ],
      },
    ],
  }),
];
