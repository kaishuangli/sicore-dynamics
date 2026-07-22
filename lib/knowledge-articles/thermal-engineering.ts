import type { KnowledgeArticle } from "@/lib/knowledge-articles/types";

const categoryId = "thermal-engineering";

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

/** Collection 09 — Thermal Engineering */
export const thermalEngineeringArticles: readonly KnowledgeArticle[] = [
  article({
    slug: "heat-transfer",
    title: "Heat Transfer",
    summary:
      "Heat transfer fundamentals for SiCore wireless charging docks and AGV receivers — conduction through ferrite and PCB assemblies, convection in warehouse environments, and radiation from coil and inverter hot spots under industrial duty cycles.",
    sections: [
      {
        paragraphs: [
          "Wireless power transfer at 3–15 kW concentrates loss in compact volumes: inverter FETs, resonant tank components, ferrite cores, and receiver rectifier stages all generate heat that must reach ambient air or a facility cooling path without exceeding material limits. Heat transfer analysis is not optional margin — coil copper and ferrite temperatures directly affect coupling, detuning, and foreign-object sensitivity during extended AGV charge sessions.",
          "SiCore thermal design treats dock transmitters and onboard receivers as coupled systems: dock floor conduction into concrete, receiver heat rejection into enclosed AMR chassis with limited airflow, and shared operational profiles where vehicles charge at peak power while logistics software schedules minimal dwell time.",
        ],
      },
      {
        heading: "Conduction paths",
        bullets: [
          "FET junction → package tab → copper pour or direct-bond heatsink → enclosure inner surface.",
          "Ferrite core → coil bobbin → aluminum pad plate or steel dock frame with defined contact pressure.",
          "High-current shunts and bus bars → dedicated thermal vias and copper spreaders on inner PCB layers.",
          "Receiver DC output path: synchronous rectifier FETs → chassis ground plane used as heat spreader where galvanic isolation permits.",
        ],
      },
      {
        heading: "Convection and ambient conditions",
        paragraphs: [
          "Warehouse AGV docks operate in 0–40 °C ambient with dust, occasional wash-down near food logistics, and minimal forced airflow when pads mount flush with floor tiles. Natural convection coefficients on underside-mounted dock electronics are often 5–15 W/m²·K — optimistic spreadsheet values fail field validation. Receiver compartments inside AMR belly pans may see stagnant air pockets; SiCore receiver designs specify minimum vent area or fan duty when continuous power exceeds chassis passive capacity.",
          "Seasonal variation matters: summer floor temperature in unconditioned aisles raises effective ambient for dock inverters mounted in shallow pits; winter cold-start improves device margins but increases NTC reading lag until steady state.",
        ],
      },
      {
        heading: "Radiation and coupled heating",
        paragraphs: [
          "Radiation is secondary at typical dock temperatures but contributes when hot ferrite faces nearby plastic alignment guides or vehicle underbody composites without line-of-sight shielding. WPT-specific coupled heating — eddy currents in nearby steel floor plates or AMR steel frames — adds parasitic loss not captured in inverter efficiency alone. SiCore commissioning includes infrared survey of pad and vehicle underside after 30-minute rated-power session to identify unexpected heat paths before fleet rollout.",
        ],
      },
    ],
  }),

  article({
    slug: "thermal-simulation",
    title: "Thermal Simulation",
    summary:
      "CFD and FEA thermal simulation workflows for SiCore dock inverters and receiver assemblies — mesh strategy, loss mapping from power electronics, and validation against thermocouple and IR measurements on AGV charging hardware.",
    sections: [
      {
        paragraphs: [
          "Analytical lumped models suffice for early feasibility, but industrial wireless charging products require simulation that captures spatial hotspots: FET die under gate driver shadow, ferrite center-leg temperature rise, and PCB trace heating on multi-oz copper carrying 100 A secondary current. SiCore uses thermal simulation to lock mechanical stack-ups before tooled dock plates and receiver enclosures commit to production.",
          "Simulation inputs come from electrical design: switching loss vs load tables from double-pulse tests, coil AC resistance vs frequency and temperature, and duty-cycle profiles derived from fleet telemetry — not continuous rated power alone.",
        ],
      },
      {
        heading: "Model construction",
        bullets: [
          "FEA steady-state and transient for conduction-dominant paths: FET-to-heatsink, ferrite-to-plate.",
          "CFD for enclosure airflow, dock pit geometry, and receiver chassis vent configurations.",
          "Loss maps: spatially distributed W/cm² on FET tops, ferrite volumes, and DC bus shunt zones.",
          "Material properties: temperature-dependent ferrite and copper resistivity, anisotropic PCB effective conductivity.",
          "Boundary conditions: warehouse ambient, concrete thermal mass for floor-mounted docks, solar load for outdoor pilot sites.",
        ],
      },
      {
        heading: "WPT-specific simulation focus",
        paragraphs: [
          "Coil assemblies are modeled with split losses: copper I²R in windings, core Steinmetz or measured loss density at operating flux, and adjacent metal eddy heating from fringing fields. Misalignment scenarios increase secondary voltage and receiver rectifier loss — SiCore runs parametric sweeps at nominal and worst-case gap before signing thermal derating curves.",
          "Dock designs with multiple coils simulate thermal crosstalk: an idle adjacent pad still warm from prior session heats shared enclosure air and raises baseline for the next vehicle. Transient simulation over back-to-back charge cycles validates fan hysteresis and firmware derating onset timing.",
        ],
      },
      {
        heading: "Correlation and sign-off",
        paragraphs: [
          "Simulation correlates to hardware within agreed tolerance — typically ±5 °C on FET case and ±8 °C on ferrite bulk at rated power after 60-minute soak. Thermocouples attach at defined points matching model probes; IR images identify convection errors where emissivity assumptions were wrong. Correlation reports gate release of thermal derating tables embedded in firmware and fleet commissioning limits.",
        ],
      },
    ],
  }),

  article({
    slug: "heat-sink",
    title: "Heat Sink",
    summary:
      "Heat sink selection and integration for SiCore dock inverters and high-power AGV receivers — extruded aluminum profiles, bonded vapor chambers, thermal resistance budgeting, and mechanical constraints in floor-flush pad enclosures.",
    sections: [
      {
        paragraphs: [
          "Heat sinks extend effective surface area for FET arrays, PFC stages, and DC bus capacitors that cannot rely on PCB copper alone at multi-kilowatt wireless power levels. SiCore dock designs balance heat sink fin height against floor pit depth and pedestrian/equipment clearance; receiver designs trade fin volume against under-vehicle ground clearance and debris ingress.",
          "Heat sink performance is defined by thermal resistance chain from junction to ambient — not catalog °C/W in isolation. Interface materials, mounting pressure, and airflow direction dominate as often as fin geometry.",
        ],
      },
      {
        heading: "Heat sink types in WPT products",
        bullets: [
          "Extruded aluminum profiles with optimized fin pitch for natural convection in sealed dock boxes.",
          "Bonded fin or skived modules for receiver inverters where height budget is tight but width is available.",
          "Vapor chamber or heat pipe spreaders when FETs scatter across PCB and must equilibrate before fins.",
          "Dock plate as structural heatsink: machined aluminum pad surface doubles as coil back-plate thermal mass.",
          "Remote fin stacks ducted to pit sidewall vents when electronics sit in low-airflow center cavity.",
        ],
      },
      {
        heading: "Thermal resistance budgeting",
        paragraphs: [
          "SiCore budgets RθJA in stages: RθJC from datasheet at Tj max operating point, RθTIM from interface material and flatness spec, RθBA from sink vendor curve at measured airflow or natural convection orientation. Margin of 10–15 °C below Tj max at 45 °C ambient and rated power is standard; 50 °C ambient sites require explicit derating or upgraded sink.",
          "Parallel FETs assume current sharing within 10% — unequal Rds(on) or layout imbalance creates localized hotspot that average junction math misses. Thermally coupled FETs on shared spreader reduce spread; independent small sinks per device require per-device validation.",
        ],
      },
      {
        heading: "Mechanical and maintenance integration",
        paragraphs: [
          "Dock heat sinks mount with captive screws and defined torque to preserve TIM compression without PCB flex cracking gate driver traces. Removable lid designs expose sink fins for compressed-air maintenance in dusty warehouses. Receiver sinks avoid sharp fin edges facing upward into debris paths; shrouded ducting or horizontal fin orientation extends service interval before airflow blockage triggers overtemperature faults.",
        ],
      },
    ],
  }),

  article({
    slug: "pcb-thermal-design",
    title: "PCB Thermal Design",
    summary:
      "Printed circuit board thermal layout for SiCore wireless power controllers — copper pour strategy, thermal vias, heavy-current plane sizing, and component placement for dock transmitters and compact AGV receiver boards.",
    sections: [
      {
        paragraphs: [
          "PCBs in wireless charging systems carry both control logic and power: gate driver circuits sit millimeters from half-bridge FETs switching 400 V at 100 kHz, while receiver boards route 80–150 A rectified output through inner layers. Copper is the primary in-plane heat spreader when discrete heatsinks cannot contact every hot device — layout decisions made at schematic capture persist through field thermal performance.",
          "SiCore PCB thermal guidelines apply separately to dock multi-layer power boards ( often 4–8 layers with 2–4 oz outer copper ) and space-constrained receiver boards where 2 oz may be maximum on outer layers due to impedance and cost.",
        ],
      },
      {
        heading: "Copper and via strategy",
        bullets: [
          "Dedicated unbroken copper pours under FET drains and synchronous rectifier low-side FETs tied to thermal via fences.",
          "Via-in-pad or staggered 0.3 mm thermal vias at 1.0–1.2 mm pitch — filled/plugged when required for assembly yield.",
          "Split power and return planes to minimize slotting that breaks heat flow from hot center to board edge.",
          "Heavy-current shunts: Kelvin sense separated from main current path; thermal vias only on non-critical zones.",
          "Edge connector and mounting hole keep-out zones that do not sever primary spreader paths.",
        ],
      },
      {
        heading: "Component placement and layer stack",
        paragraphs: [
          "Hot FETs cluster along board edge facing heatsink or enclosure wall — not buried center where vias must traverse long distances. Bulk capacitors near FETs reduce loop area and share thermal relief through grounded terminals soldered to large pads. Gate resistors and small-signal parts stay off FET thermal shadow unless elevated on opposite side with via stitching.",
          "Layer stackup documents effective thermal conductivity for simulation: 2 oz outer, 1 oz inner signal, solid GND plane on layer 2 as primary spreader. Receiver boards with aluminum-backed PCB substrate use vendor Rθ values for hot spot under SR FET array — standard FR4 assumptions invalid.",
        ],
      },
      {
        heading: "Validation and production control",
        paragraphs: [
          "Prototype IR scan at rated power identifies trace heating on unexpected neck-down regions — often at fuse holders or sense resistor transitions. Production AOI cannot verify thermal vias; SiCore specifies cross-section audit on first article and X-ray spot check for via fill voids under power FETs. Firmware NTC placement correlates to modeled PCB hotspot within placement tolerance documented on assembly drawing.",
        ],
      },
    ],
  }),

  article({
    slug: "thermal-interface-materials",
    title: "Thermal Interface Materials",
    summary:
      "Thermal interface material selection for SiCore dock and receiver assemblies — TIM types, application thickness, pump-out and dry-out behavior, and torque-controlled mounting for FET-to-heatsink and ferrite-to-plate interfaces.",
    sections: [
      {
        paragraphs: [
          "Thermal interface materials fill microscopic air gaps between mating surfaces — FET packages to heatsinks, ferrite backs to aluminum dock plates, and power module bases to liquid-cooled cold plates in high-power pilot docks. Gap thickness, surface flatness, and TIM rheology determine effective Rθ more than nominal datasheet conductivity alone.",
          "Industrial AGV charging hardware sees thermal cycling from ambient swings, vibration during vehicle dock impact, and long idle periods at elevated warehouse temperature — TIM choices must survive pump-out and dry-out over 10-year service life, not just commissioning bench soak.",
        ],
      },
      {
        heading: "TIM categories in WPT hardware",
        bullets: [
          "Phase-change pads: pre-applied, consistent thickness, favored for high-volume receiver FET-to-spreader mounting.",
          "Thermal greases: lowest interface resistance when rework and disassembly required on dock service modules.",
          "Gap fillers and putties: ferrite-to-plate and uneven enclosure mating surfaces with 0.5–2 mm gap.",
          "Graphite or silicone films: thin interfaces where dielectric isolation and puncture resistance matter.",
          "Thermal adhesives: structural bond for coil back-plate to dock frame where screws alone insufficient for contact pressure.",
        ],
      },
      {
        heading: "Application and assembly control",
        paragraphs: [
          "SiCore assembly work instructions specify TIM part number, cut geometry, screw torque sequence, and maximum rework cycles before TIM replacement. Grease applications use controlled bead pattern and calculated spread area — excess grease insulates and pumps into adjacent zones; insufficient coverage leaves voids visible only under ultrasonic scan or post-failure teardown.",
          "Ferrite interfaces use compliant gap filler rather than rigid grease where ferrite tolerance stack and mechanical shock from AGV overrun create micro-motion. Compression set data from vendor aging tests at 85 °C/85% RH supports long-life claims for sealed dock enclosures.",
        ],
      },
      {
        heading: "Performance verification",
        paragraphs: [
          "Incoming inspection verifies TIM lot traceability and shelf life. Sample assemblies measure FET case-to-sink ΔT under fixed power pulse — out-of-family units trigger mounting audit before batch release. Field service kits ship matched TIM and torque spec; using generic consumer thermal paste voids thermal warranty on SiCore power modules.",
        ],
      },
    ],
  }),

  article({
    slug: "cooling-methods",
    title: "Cooling Methods",
    summary:
      "Active and passive cooling strategies for SiCore wireless charging infrastructure — natural and forced convection, fan control, liquid cooling for high-power docks, and receiver integration within AGV thermal envelopes.",
    sections: [
      {
        paragraphs: [
          "Cooling method selection begins from loss budget and environment: a 3 kW receiver in a ventilated AMR may remain fully passive, while a 15 kW floor-flush dock in a sealed pit requires forced air or liquid cooling to maintain ferrite and inverter margins during consecutive vehicle charging. SiCore maps cooling class to SKU power rating and deployment geography — passive-first where acoustics and maintenance matter, active where power density demands it.",
          "Cooling interacts with IP rating and contamination: warehouse dust clogs fan filters; wash-down zones require fan placement outside spray path or sealed convection-only designs with derated continuous power.",
        ],
      },
      {
        heading: "Passive cooling techniques",
        bullets: [
          "Large thermal mass: dock plate and frame absorb transient peaks during session ramp without immediate fan need.",
          "Chimney effect: duct hot air from pit to sidewall louvers above floor level where dust accumulation is lower.",
          "Receiver chassis as heat exchanger: aluminum belly plate thermally tied to inverter spreader.",
          "Power derating firmware: reduce charge power when passive-only SKU approaches temperature threshold.",
          "Coil Litz and parallel strand sizing to limit copper loss density before external cooling required.",
        ],
      },
      {
        heading: "Active air and liquid cooling",
        paragraphs: [
          "Dock fans use tach feedback and firmware interlock — fan fault triggers immediate power derating or session abort per safety case. Fan curves are validated at 50 °C inlet to avoid underflow in summer pits. Redundant fan configurations appear on mission-critical logistics lanes where charge downtime equals line stop.",
          "Liquid-cooled cold plates on dock inverter modules appear in SiCore high-power reference designs above ~20 kW or where acoustic limits prohibit fans. Coolant loops integrate facility water or closed glycol circuits with leak detection and electrical isolation barriers; receiver-side liquid cooling remains rare due to vehicle maintenance burden.",
        ],
      },
      {
        heading: "System-level cooling coordination",
        paragraphs: [
          "BMS and vehicle thermal management may reject charge current when pack or cabin HVAC is saturated — SiCore dock firmware accepts reduced setpoints without hunting. Fleet scheduling avoids stacking multiple high-power AGVs on adjacent pads sharing a poorly ventilated aisle pocket. Cooling method is documented in pad commissioning checklist: blocked louvers and missing pit grates are field defects with same severity as miswired interlock.",
        ],
      },
    ],
  }),

  article({
    slug: "high-power-thermal-design",
    title: "High Power Thermal Design",
    summary:
      "Thermal architecture for high-power SiCore wireless charging docks and heavy AGV receivers — multi-kilowatt loss allocation, ferrite and copper limits, phased power delivery, and infrastructure constraints at 10–20 kW and beyond.",
    sections: [
      {
        paragraphs: [
          "High-power wireless charging — typical for heavy fork AGVs, tow tractors, and fast opportunity charging — pushes loss density beyond passive warehouse assumptions. At 15 kW transferred power with 90–93% end-to-end efficiency, 1–1.5 kW dissipates split between dock inverter, transmitter coil, receiver coil, and rectifier stage. Each subsystem has distinct thermal limit: ferrite Curie proximity, FET Tj max, and vehicle underbody composite temperature.",
          "SiCore high-power thermal design is concurrent with electrical topology: splitting into multiple coils, interleaving phases, and using SiC devices reduces peak loss density and enables workable cooling within floor pit depth limits.",
        ],
      },
      {
        heading: "Loss allocation and hot spots",
        bullets: [
          "Dock inverter + tank: 40–55% of total loss — primary target for heatsink and airflow.",
          "Transmitter coil copper and ferrite: 20–30% — limited external cooling; Litz, geometry, and duty cycle bound peak temperature.",
          "Receiver rectifier and output stage: 20–35% — chassis coupling and SR FET sink critical.",
          "Cable and connector I²R: 5–10% — often underestimated in enclosed routing.",
          "Adjacent metal eddy loss: site-dependent — floor steel and vehicle frame contribute parasitic heating.",
        ],
      },
      {
        heading: "Architectural mitigations",
        paragraphs: [
          "Phased power ramp and SOC-dependent taper limit time-at-peak-thermal-stress — high power concentrates in early charge window when thermal mass is cold. Multi-coil docks rotate excitation or use segment control to avoid heating dead zones while maintaining aggregate power.",
          "SiC MOSFETs and synchronous rectification reduce conduction and switching loss per watt delivered, directly shrinking heatsink volume required in shallow pits. Receiver designs may split power path across dual rectifier modules thermally bonded to separate chassis rails for parallel heat rejection.",
        ],
      },
      {
        heading: "Infrastructure and fleet constraints",
        paragraphs: [
          "Facility electrical and thermal infrastructure co-design: clustered high-power pads may require aisle HVAC or pit exhaust routing to prevent heat recirculation between consecutive charging AGVs. SiCore site thermal assessments model queue depth and charge duration from WMS data — average power matters less than peak concurrent sessions for infrastructure sizing.",
          "Heavy AGV applications document maximum allowable underbody temperature to protect customer vehicle warranties; dock commissioning verifies composite and hydraulic line proximity clearances with IR survey at full power.",
        ],
      },
    ],
  }),

  article({
    slug: "temperature-monitoring",
    title: "Temperature Monitoring",
    summary:
      "Temperature sensing and telemetry architecture for SiCore dock and receiver controllers — NTC and digital sensor placement, ADC sampling, fleet-visible thermal margins, and calibration for AGV wireless charging safety and derating.",
    sections: [
      {
        paragraphs: [
          "Temperature monitoring closes the loop between thermal design and operational safety: firmware cannot derate or shut down on thermal fault without sensors placed at representative hotspots and sampled with enough bandwidth to catch rate-of-rise events during FOD or misalignment. SiCore platforms monitor FET heatsink, ferrite core or winding proxy, ambient enclosure, and receiver DC output stage — each channel feeds distinct protection and diagnostics behavior.",
          "Sensor data also feeds fleet analytics: rising ferrite baseline across a pad fleet signals mechanical wear or coil damage before hard fault; gradual receiver overtemperature trend flags clogged chassis vents on specific AMR units.",
        ],
      },
      {
        heading: "Sensor types and placement",
        bullets: [
          "NTC thermistors on FET heatsink near device centerline — fast enough for derating, coupled to case temperature.",
          "Digital I²C/SPI sensors (e.g., TMP117 class) on enclosure air and receiver PCB for accurate absolute telemetry.",
          "Ferrite or coil winding proxy: NTC embedded in bobbin or bonded to core back with thermal epoxy.",
          "Isolated temperature sense on high-voltage side via optically or inductively coupled monitors where required.",
          "Redundant sensors on high-power docks: dual NTC with voting logic for safety-rated shutdown paths.",
        ],
      },
      {
        heading: "Sampling, filtering, and firmware integration",
        paragraphs: [
          "Thermal ADC channels run at 10–100 Hz effective update — faster than energy telemetry, slower than current loops. Median or IIR filtering rejects electrical noise pickup on long NTC leads routed near switching nodes. Rate-of-rise detectors flag abnormal dT/dt during foreign object heating when absolute temperature still below latch threshold.",
          "SiCore derating curves map sensor reading to allowed power setpoint with hysteresis to prevent oscillation at threshold boundary. Ambient-compensated limits adjust maximum coil current when enclosure air sensor reads elevated summer baseline — static absolute thresholds alone cause unnecessary summer derating or winter overconfidence.",
        ],
      },
      {
        heading: "Calibration and fleet visibility",
        paragraphs: [
          "Factory calibration records NTC beta tolerance batch and optional single-point offset correction in NVM. Field service compares live readings to IR spot check during annual pad inspection. CAN and fleet gateway telemetry expose max temperature per session, time above derating threshold, and sensor fault codes — enabling predictive maintenance before customer-visible charge rate reduction.",
        ],
      },
    ],
  }),

  article({
    slug: "thermal-protection",
    title: "Thermal Protection",
    summary:
      "Thermal protection strategies in SiCore wireless charging firmware and hardware — staged derating, hard shutdown, latch rules, and coordination with BMS and fleet safety for dock transmitters and AGV receivers.",
    sections: [
      {
        paragraphs: [
          "Thermal protection prevents irreversible damage to coils, ferrite, semiconductors, and vehicle-adjacent materials when cooling fails, alignment degrades, or duty cycles exceed design assumptions. SiCore implements layered response: warning derating preserves partial charge capability; hard shutdown protects hardware; latched faults require defined cooldown or technician reset before re-energizing high power.",
          "Wireless charging thermal faults differ from wired systems: pad and vehicle may disagree on observed temperature; comm-loss must not leave transmitter at full power into overheating receiver; foreign-object heating can localize before bulk sensors respond.",
        ],
      },
      {
        heading: "Protection tiers",
        bullets: [
          "Tier 1 — Advisory derating: reduce power 10–30% when warning threshold exceeded; log event to fleet.",
          "Tier 2 — Aggressive derating: cap power to minimum alignment maintenance level until temperatures fall with hysteresis.",
          "Tier 3 — Session abort: ramp to zero power, open contactor request, notify BMS; auto-retry after cooldown if policy allows.",
          "Tier 4 — Latched hardware fault: disable PWM via comparator or gate-driver fault pin; manual or service reset required.",
          "Tier 5 — Redundant independent monitor: secondary MCU or analog chain for SIL-oriented dock installations.",
        ],
      },
      {
        heading: "Hardware and firmware coordination",
        paragraphs: [
          "Gate-driver thermal shutdown and FET die sense (where available) act faster than software NTC polling — firmware treats hardware trip as authoritative. Software monitors trend and rate-of-rise for conditions hardware cannot distinguish, such as gradual ferrite aging or clogged vent. BMS overtemperature or charge inhibit commands override dock power request regardless of pad-local sensor state.",
          "SiCore session state machine enforces thermal guard during alignment and negotiation phases — pre-power alignment pulses use time and energy limits so brief excitation cannot accumulate ferrite heating unnoticed. Transmitter-side reflected-power monitoring supplements temperature for FOD-adjacent thermal anomalies.",
        ],
      },
      {
        heading: "Recovery, logging, and compliance",
        paragraphs: [
          "Recovery policies define minimum cooldown duration and maximum auto-retry count per session and per 24-hour window — repeated thermal aborts latch pad out of service until inspection. NVM fault records capture temperature trace snapshot, active power, alignment score, and coolant or fan status for root-cause analysis.",
          "Safety documentation maps each thermal fault code to hazard analysis: foreseeable misuse (blocked vent, removed pit grate), single-fault sensor failure, and concurrent comm-loss scenarios. Factory acceptance tests inject simulated NTC fault and verify shutdown timing meets contractual limits for AGV fleet operators.",
        ],
      },
    ],
  }),
];
