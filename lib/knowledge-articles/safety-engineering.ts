import type { KnowledgeArticle } from "@/lib/knowledge-articles/types";

const categoryId = "safety-engineering";

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

/** Collection 11 — Safety Engineering */
export const safetyEngineeringArticles: readonly KnowledgeArticle[] = [
  article({
    slug: "functional-safety",
    title: "Functional Safety",
    summary:
      "Functional safety principles for SiCore wireless charging docks and AGV/AMR receivers — hazard analysis, safety integrity levels, fail-safe architecture, and lifecycle management for industrial autonomous vehicle charging in shared factory environments.",
    sections: [
      {
        paragraphs: [
          "Functional safety ensures that safety-related systems reduce risk to an acceptable level when equipment operates correctly and when faults occur. SiCore wireless charging docks and onboard receivers participate in the safety chain between facility mains, high-power resonant inverters, vehicle batteries, and autonomous navigation systems — any undetected fault in power transfer, field control, or interlock logic can expose personnel, vehicles, and infrastructure to electric shock, thermal runaway, or unintended vehicle motion during charge sessions.",
          "SiCore applies IEC 61508 and IEC 61511 concepts adapted to WPT product architecture: hazard and risk assessment (HARA) identifies scenarios including misaligned charging, foreign object heating, loss of communication with fleet manager, and stuck-on power output. Safety functions — emergency stop response, foreign-object detection shutdown, over-temperature derating, and isolation verification — are allocated to hardware, firmware, or both with defined diagnostic coverage and proof-test intervals.",
        ],
      },
      {
        heading: "Safety functions in WPT systems",
        bullets: [
          "Power transfer inhibition: prevent inverter energization when alignment, FOD, or interlock preconditions are not satisfied.",
          "Safe state on fault: transition to zero net power output within defined time when any safety-related sensor or communication path fails.",
          "Redundant interlock paths: hardware E-stop and software-monitored safety IO with diverse implementation where SIL targets require.",
          "Diagnostic coverage: periodic self-tests on ADC references, gate-driver fault feedback, and coil current sense plausibility.",
          "Safe torque-off coordination: interface with AGV/AMR motion controllers to inhibit drive enable during unsafe charge states.",
        ],
      },
      {
        heading: "Architecture and independence",
        paragraphs: [
          "SiCore separates safety-related microcontroller domains from general-purpose control and telemetry processors where architecture demands — shared power supplies and clock sources are analyzed for common-cause failure. Gate-driver disable paths bypass software when hardware comparators detect overcurrent or overvoltage beyond absolute limits. Safety firmware runs cyclic tasks at bounded intervals with watchdog supervision; non-safety features (OTA updates, data logging) cannot block safety task execution.",
          "AGV receivers integrate with customer safety PLCs and ISO 3691-4 AGV safety requirements — SiCore documents safety interface contracts: which signals are safety-rated, expected response times, and fault reaction when CAN or Ethernet links drop mid-charge. Functional safety is a system property — dock, receiver, vehicle controller, and facility E-stop network must be validated together during site acceptance.",
        ],
      },
      {
        heading: "Lifecycle and evidence",
        paragraphs: [
          "Safety cases accumulate evidence across design, verification, production, and field operation: FMEA and FTA link failure modes to safety requirements; hardware-in-the-loop tests inject sensor faults and communication loss; production functional tests verify interlock continuity and E-stop response on every unit. Firmware changes trigger impact analysis against the safety requirements specification — field OTA for safety-related code follows controlled release with rollback capability and fleet audit trails.",
        ],
      },
    ],
  }),

  article({
    slug: "electrical-isolation",
    title: "Electrical Isolation",
    summary:
      "Galvanic isolation and creepage/clearance design for SiCore dock mains interfaces and AGV receiver battery connections — reinforced insulation, isolation monitoring, and separation between operator-accessible circuits and high-voltage WPT power stages.",
    sections: [
      {
        paragraphs: [
          "Electrical isolation prevents hazardous energy transfer between circuits at different potential — essential where SiCore dock controllers connect facility AC mains to resonant tank circuits operating at hundreds of volts and where receiver rectifiers interface with vehicle battery systems that may share or float relative to chassis ground. Isolation barriers protect maintenance personnel accessing dock pit controllers, AGV service technicians working on belly-mounted receivers, and facility electricians during concurrent charging operations.",
          "Wireless power transfer provides inherent isolation across the air gap for power delivery, but dock and receiver products still require galvanic isolation on signal paths, auxiliary supplies, communication interfaces, and any conductive connection between vehicle and fixed installation — grounding strategy and isolation rating must be co-designed.",
        ],
      },
      {
        heading: "Isolation barriers and ratings",
        bullets: [
          "Mains to SELV/PELV: reinforced or double insulation between AC input and control electronics per IEC 60664 for rated mains voltage and overvoltage category.",
          "Gate driver isolation: isolated gate drivers or pulse transformers between MCU domain and high-side/low-side FET drive on inverter bridges.",
          "Communication isolation: digital isolators on CAN, Ethernet, and safety IO crossing the mains or battery boundary.",
          "Creepage and clearance: PCB layout and mechanical spacing scaled for pollution degree, altitude derating, and material CTI.",
          "Working voltage vs test voltage: hipot validation at 2× mains + 1000 V or per product standard for type and routine tests.",
        ],
      },
      {
        heading: "Isolation in dock and receiver topology",
        paragraphs: [
          "SiCore dock AC front-end uses isolated PFC and inverter control — the resonant tank and coil remain on the hot side of the isolation barrier with current and voltage sensing brought across via isolated amplifiers or optical links. Floor-flush installations expose pit interiors to moisture and conductive debris — pollution degree II or III selections drive conformal coating, sealed enclosures, and increased creepage on mains-side assemblies.",
          "AGV receivers may operate with battery negative bonded to chassis or fully floating per BMS architecture — receiver isolation ratings accommodate maximum battery voltage plus transients without breakdown to vehicle frame. Isolation monitoring (IMD) on certain dock configurations detects degradation of basic insulation to ground before shock hazard develops — required in some EV WPT standards and evaluated for industrial SiCore deployments with conductive floor plates.",
        ],
      },
      {
        heading: "Verification and maintenance",
        paragraphs: [
          "Type testing validates isolation at extreme humidity and temperature; routine production hipot verifies no assembly defects. Service procedures define which covers may be opened under lockout/tagout and which capacitors require discharge confirmation before contact. Isolation failure modes — cracked optocouplers, moisture ingress at cable glands, pinched insulation during pit installation — are tracked in field reliability data and addressed through design and installation guide revisions.",
        ],
      },
    ],
  }),

  article({
    slug: "overcurrent-protection",
    title: "Overcurrent Protection",
    summary:
      "Overcurrent detection and interruption for SiCore wireless charging inverters and AGV receiver rectifiers — hardware comparator thresholds, software-integrated current limiting, fuse and breaker coordination, and protection against shorted battery and faulted coil conditions.",
    sections: [
      {
        paragraphs: [
          "Overcurrent protection limits conductor and semiconductor stress when load impedance drops below design expectation — from receiver misalignment causing reflected power, to shorted output stages, to foreign objects presenting low-resistance paths across the coupling gap. SiCore dock inverters deliver 80–150 A equivalent secondary current at full power; receiver synchronous rectifiers switch comparable currents with minimal ON-state margin before thermal destruction in microseconds without protection.",
          "Protection must coordinate across the power path: AC mains breaker, DC bus fuse or electronic limit, inverter peak current detect, and receiver output fuse or BMS disconnect — each layer responds at appropriate speed without nuisance tripping during normal soft-start, alignment search, or brief inrush.",
        ],
      },
      {
        heading: "Detection methods",
        bullets: [
          "Shunt and Hall-effect sensing: primary-side input current and secondary-reflected current monitoring with calibrated ADC and hardware comparators.",
          "Desaturation detection: IGBT and high-voltage FET fault sensing for short-circuit events faster than current loop bandwidth.",
          "Cycle-by-cycle limiting: PWM truncation when instantaneous current exceeds threshold — preserves bridge during transient overload.",
          "Receiver SR protection: per-leg current sense with latch-off on shoot-through or overload before inductor saturation.",
          "Coordination timers: distinguish millisecond inrush from sustained fault before latching shutdown and requiring reset.",
        ],
      },
      {
        heading: "Dock and receiver implementation",
        paragraphs: [
          "SiCore inverter firmware implements tiered response: current limit reduces power gracefully during moderate overload; hard fault disables gate drivers within microseconds on comparator trip. Multi-pad sites evaluate parallel fault contribution — one pad's fault must not propagate excessive current through shared DC bus or facility neutral. Receiver output protection interfaces with customer BMS — SiCore specifies maximum fault current and clearing time so BMS contactors and fuses coordinate without welding or nuisance fleet downtime.",
          "Misalignment and partial FOD conditions can elevate primary current without obvious short — overcurrent logic integrates with power control and FOD to distinguish benign reflected power from hazardous fault. Calibration accounts for temperature drift in shunt amplifiers and Hall sensors across −20 °C to +50 °C dock pit ambient.",
        ],
      },
      {
        heading: "Validation and field behavior",
        paragraphs: [
          "Protection validation includes simulated output short, primary-side fault injection, and concurrent charge with minimum battery impedance. Nuisance trip rate is monitored in fleet telemetry — excessive trips trigger review of threshold margin, alignment tolerance, or site-specific load conditions. Service documentation identifies reset procedures after latched overcurrent events and prohibits bypass of protection components during troubleshooting.",
        ],
      },
    ],
  }),

  article({
    slug: "overvoltage-protection",
    title: "Overvoltage Protection",
    summary:
      "Overvoltage protection for SiCore dock resonant tanks and AGV receiver outputs — clamping devices, BMS coordination, load dump handling, and protection against mains transients and reflected voltage spikes in high-Q WPT circuits.",
    sections: [
      {
        paragraphs: [
          "Overvoltage conditions threaten inverter capacitors, receiver SR FETs, and vehicle battery systems when energy storage elements resonate, loads disconnect suddenly, or mains disturbances propagate through the power chain. High-Q resonant WPT circuits can produce voltages exceeding steady-state design by significant margin during no-load, misalignment, or intermittent coupling — SiCore protection must act before component absolute maximum ratings are exceeded.",
          "Dock products face AC mains overvoltage from utility events and facility power factor correction switching; receivers face battery load dump when BMS disconnects during charge and inductive kick from receiver output inductors — protection topology differs but response time requirements are similarly stringent.",
        ],
      },
      {
        heading: "Protection mechanisms",
        bullets: [
          "TVS and MOVs: clamp transients on AC input, DC bus, and gate-driver supplies with coordinated energy rating.",
          "Active clamping: secondary-side or primary-side circuits that dissipate or return excess resonant energy during unload.",
          "OVP comparators: hardware shutdown when tank voltage, bus voltage, or output voltage exceeds tiered thresholds.",
          "Soft shutdown ramp: controlled power reduction before mechanical disconnect to limit inductive overshoot.",
          "BMS handshake: receiver ceases current demand and opens contactors on OVP detection before battery overcharge.",
        ],
      },
      {
        heading: "WPT-specific overvoltage scenarios",
        paragraphs: [
          "Open-circuit or near-open secondary during dock energization raises primary tank voltage — SiCore firmware inhibits full power until valid coupling and load confirmation. Foreign objects with high Q can sustain resonant voltage elevation — FOD and overvoltage protection operate in parallel with independent hardware paths. Multi-turn receiver coils and tuning capacitors require surge-rated components with margin for alignment tolerance extremes.",
          "Receiver load dump when AGV departs while still coupled or when BMS opens under fault produces voltage spike on output — TVS sizing and output capacitor ESL minimization reduce peak; firmware logs event for fleet safety review. Dock AC OVP disables PFC and inverter when mains exceeds continuous rating; brief transients are absorbed by front-end protection with selective ride-through per IEC 61000-4-11 test levels.",
        ],
      },
      {
        heading: "Design verification",
        paragraphs: [
          "Hi-pot and surge immunity tests validate clamp coordination without cascading failure. Oscilloscope verification of peak voltage at worst alignment, no-load, and sudden unload conditions gates release — simulation alone is insufficient for high-Q nonlinear behavior. Component derating applies to capacitors and FETs at maximum clamp energy; field replacement parts must match rated avalanche and surge specifications.",
        ],
      },
    ],
  }),

  article({
    slug: "esd",
    title: "ESD",
    summary:
      "Electrostatic discharge protection for SiCore dock control interfaces and AGV receiver electronics — IEC 61000-4-2 immunity levels, PCB protection networks, enclosure grounding, and safe handling procedures for service in low-humidity warehouse environments.",
    sections: [
      {
        paragraphs: [
          "Electrostatic discharge transfers high peak current from charged personnel, vehicles, or materials into exposed connectors, touch surfaces, and enclosure seams — potentially corrupting safety state, resetting MCUs, or permanently damaging precision analog front-ends on alignment and FOD sensors. AGV warehouses combine low relative humidity from heating and cooling, triboelectric charging from plastic tote movement, and frequent operator contact with dock service panels and vehicle diagnostic ports.",
          "SiCore designs for both component-level ESD robustness during manufacturing and system-level immunity per IEC 61000-4-2 — contact and air discharge to defined points with continued safe operation of charging and safety functions.",
        ],
      },
      {
        heading: "Protection at interfaces",
        bullets: [
          "TVS diode arrays on CAN, Ethernet, USB service, and digital IO with routed ground to chassis plane.",
          "Series resistors and ferrite on sensitive analog inputs — FOD sense, NTC, and alignment magnetometer paths.",
          "Shielded connectors with metal shell bonded to enclosure before signal reaches PCB.",
          "ESD-safe layout: keep protection devices at connector entry; avoid stubs between TVS and protected IC.",
          "Safety IO redundancy: E-stop and interlock inputs filtered but not delayed beyond response specification.",
        ],
      },
      {
        heading: "System immunity and safe behavior",
        paragraphs: [
          "Immunity testing applies ±8 kV contact and ±15 kV air discharge to operator-accessible surfaces and cable ports while dock operates at rated charge power — performance criterion A on safety shutdown paths; criterion B acceptable on non-critical telemetry with logged recovery. ESD must not latch inverter in ON state, release interlocks, or corrupt safety CRC-protected configuration stored in flash.",
          "Receiver boards mounted on AGV belly pans receive discharge from floor-level maintenance — enclosure design routes discharge current through chassis rather than through PCB signal traces. Fleet incidents of CAN error passive mode during charge correlate with unshielded service cables and are remediated through harness specification updates.",
        ],
      },
      {
        heading: "Manufacturing and field service",
        paragraphs: [
          "ESD-controlled manufacturing with wrist straps, ionizers, and qualified packaging for FOD-sensitive analog assemblies. Field service guides require power isolation before connector mating, use of grounded tools, and prohibition of hot-plugging safety harnesses. Replacement modules are shipped in conductive bags with pin shorting — installation checklists verify torque on grounding screws disturbed during service.",
        ],
      },
    ],
  }),

  article({
    slug: "surge-protection",
    title: "Surge Protection",
    summary:
      "Surge protection for SiCore wireless charging dock AC inputs and signal ports — IEC 61000-4-5 compliance, MOV and GDT coordination with PFC front-ends, earth bonding requirements, and protection of underground pit installations from lightning-induced transients.",
    sections: [
      {
        paragraphs: [
          "Surge transients from lightning indirect strikes, utility switching, and large load disconnections on factory distribution systems inject kilovolt-scale impulses onto AC mains — propagating into dock PFC, DC bus capacitors, and downstream control electronics if inadequately attenuated. Floor-flush charging installations with long conduit runs from remote electrical rooms present elevated exposure; multi-pad aisles share feeders where one surge event affects parallel docks.",
          "SiCore surge protection coordinates with overvoltage and isolation design — MOVs and gas discharge tubes clamp differential and common-mode impulses while preserving safety ground integrity and limiting follow-on current that could weld contacts or trip upstream breakers.",
        ],
      },
      {
        heading: "Protection topology",
        bullets: [
          "Type 2 SPD at dock AC inlet or upstream panel — rated for installation location and expected lightning exposure class.",
          "Tiered clamping: GDT for coarse protection, MOV for energy absorption, TVS for fast edge on control boards.",
          "Common-mode choke before Y-cap network — prevents surge current splitting unpredictably across facility ground.",
          "PFC pre-charge and inrush limiters — coordinate timing so surge recovery does not falsely trigger overcurrent.",
          "Signal port protection: surge-rated Ethernet and CAN transceivers with external GDT where cable runs exceed 30 m.",
        ],
      },
      {
        heading: "Installation and grounding",
        paragraphs: [
          "Effective surge protection requires short, low-impedance path from SPD to facility ground electrode — SiCore installation guides specify maximum lead length from dock AC disconnect to building ground and prohibit shared neutral-only returns for surge current. Pit installations bond dock frame, liner, and SPD earth to the same electrode system evaluated during site audit.",
          "Underground conduit ingress may introduce capacitive coupling — surge tests on installed mockups validate that pit moisture and rebar proximity do not elevate dock controller stress beyond type-test conditions. Post-surge behavior requires dock to enter safe idle state, log event with timestamp, and permit controlled restart after inspection — not immediate auto-resume at full power.",
        ],
      },
      {
        heading: "Testing and maintenance",
        paragraphs: [
          "Immunity validation per IEC 61000-4-5 with 1.2/50 µs wave applied through coupling network — combined test of PFC, inverter disable, and communication survival. MOV aging from repeated clamping events reduces protection margin — SiCore recommends periodic inspection interval in high-lightning regions and documents SPD module replacement in maintenance schedules. Surge event counters in dock firmware support predictive maintenance for facilities with historical transient issues.",
        ],
      },
    ],
  }),

  article({
    slug: "fod",
    title: "FOD",
    summary:
      "Foreign object detection for SiCore wireless charging docks and AGV receivers — loss-detection algorithms, Q-factor monitoring, thermal sensing, and shutdown criteria to prevent heating of metal debris on pads and vehicle belly pans in autonomous logistics operations.",
    sections: [
      {
        paragraphs: [
          "Foreign object detection (FOD) identifies conductive or lossy objects in the magnetic coupling path that would absorb RF energy and heat dangerously without receiving intended charge — metal shavings, tools, foil wrappers, and modified vehicle hardware left on pad or receiver surfaces. SiCore FOD is a safety function, not merely efficiency optimization: undetected objects can exceed ignition temperature of warehouse debris or damage vehicle composites during unattended overnight charging.",
          "Industrial AGV environments generate metal contamination from pallet rack maintenance, grinding in adjacent bays, and fastener drops during vehicle service — FOD sensitivity must balance false positives that stop fleet operations against false negatives that create fire risk.",
        ],
      },
      {
        heading: "Detection techniques",
        bullets: [
          "Power loss analysis: compare transmitted vs received power — unexplained loss triggers derating or shutdown.",
          "Q-factor and resonant frequency shift: pre-charge ping detects detuning from foreign metal before full power.",
          "Thermal monitoring: pad surface and coil back-plate NTC arrays detect localized heating inconsistent with normal transfer.",
          "Multi-frequency sensing: auxiliary low-power scans at offset frequencies improve small object discrimination.",
          "Baseline calibration: per-pad and per-vehicle pairing accounts for receiver coil and ferrite signature.",
        ],
      },
      {
        heading: "Operational integration",
        paragraphs: [
          "FOD executes in sequence: object detection ping before full energization, continuous monitoring during charge, and periodic re-check when power level changes. Fleet manager receives FOD trip codes with pad ID and timestamp — maintenance clears debris before reset; override is restricted to qualified personnel with logged justification. Receiver-side FOD complements dock detection when metal attaches to vehicle belly — asymmetric loss triggers shutdown even if dock sensors alone appear nominal.",
          "False positive sources include wet floors, steel plate reinforcement directly under pad, and non-standard receiver retrofits — commissioning calibration captures site-specific baseline. Firmware updates that modify FOD thresholds undergo regression against recorded field waveforms from known good and known fault sessions.",
        ],
      },
      {
        heading: "Standards and validation",
        paragraphs: [
          "SiCore FOD validation uses standardized test objects — aluminum and steel foils at defined sizes and positions per IEC 61980-inspired industrial protocols adapted for SiCore power levels. Thermal imaging confirms maximum object temperature remains below material limits at worst-case alignment. FOD failure modes — sensor drift, flooded pit shorting sense lines, damaged ferrite changing baseline — are included in FMEA with defined safe default of power inhibition when plausibility checks fail.",
        ],
      },
    ],
  }),

  article({
    slug: "lod",
    title: "LOD",
    summary:
      "Living object detection for SiCore wireless charging systems — proximity sensing, capacitive and radar adjuncts, and power inhibition when personnel or animals enter the active WPT field zone around floor-flush docks and stationary AGV charge positions.",
    sections: [
      {
        paragraphs: [
          "Living object detection (LOD) extends safety beyond metallic FOD to humans, maintenance workers, and animals that may enter the high-intensity magnetic field region during charging — particularly floor-level pads where operators bend to inspect vehicles or where facilities allow co-located pedestrian traffic during pilot deployments. While WPT fields at industrial frequencies primarily pose eddy-current heating risk in conductive objects, personnel safety standards require preventing exposure during full-power operation.",
          "SiCore LOD integrates with fleet scheduling and physical guarding — docks in fully automated zones rely on perimeter interlocks; mixed-traffic pilots require active detection with faster response than operator reaction time.",
        ],
      },
      {
        heading: "Detection modalities",
        bullets: [
          "Ultrasonic and ToF sensors: volumetric zone above pad surface detecting intrusion into defined exclusion cylinder.",
          "Capacitive floor mats and light curtains: perimeter guarding on mixed-access charge lanes.",
          "Radar mmWave modules: detect motion through non-metallic obstacles near pad edge.",
          "Fleet coordination: charge authorization gated on AGV presence confirmation and zone clearance signal from facility PLC.",
          "Power ramp-down: reduce field strength during alignment search; full power only when zone confirmed clear.",
        ],
      },
      {
        heading: "Response requirements",
        paragraphs: [
          "LOD trip must reduce magnetic field exposure within specified time — typically inhibiting inverter within hundreds of milliseconds of confirmed intrusion, faster when sensor confidence is high. SiCore distinguishes transient false triggers (dust, rain mist in open dock pilots) from sustained presence using debounce and multi-sensor fusion — nuisance stops degrade fleet throughput but are preferable to exposure under full power.",
          "Maintenance mode allows qualified access with reduced power cap and visible indication — pad LED status and audible alert indicate field present. Receiver-side LOD is limited; primary responsibility rests with dock-fixed sensors covering the coupling volume and approach paths documented in site risk assessment.",
        ],
      },
      {
        heading: "Site integration and documentation",
        paragraphs: [
          "Site safety files document LOD zone dimensions, sensor maintenance intervals, and bypass procedures under lockout for pit service. Training materials for customer EHS teams explain difference between FOD and LOD — metal debris vs personnel entry. Validation includes staged intrusion tests with instrumented mannequins and power density measurement at zone boundary confirming compliance with applicable exposure reference levels for occupational environments.",
        ],
      },
    ],
  }),

  article({
    slug: "thermal-protection",
    title: "Thermal Protection",
    summary:
      "Thermal protection for SiCore dock inverters, resonant tank components, and AGV receiver power stages — NTC and distributed sensing, derating curves, coolant and potting strategies, and shutdown logic for sealed pit installations operating at sustained multi-kilowatt duty.",
    sections: [
      {
        paragraphs: [
          "Thermal protection prevents fire, component explosion, and insulation breakdown when heat generation exceeds dissipation — acute concern for floor-flush dock pits with limited airflow, summer ambient extremes, and continuous AGV rotation charging at 90%+ duty cycle. SiCore systems monitor dozens of thermal nodes: IGBT and SR FET heatsinks, resonant capacitors, coil windings, ferrite back-plates, AC filter chokes, and enclosure interior air.",
          "Thermal limits interact with power control — graceful derating preserves partial fleet availability during HVAC failure or pit debris blocking ventilation grilles; hard shutdown protects hardware when soft limits are exceeded or sensor fault is detected.",
        ],
      },
      {
        heading: "Sensing and control",
        bullets: [
          "NTC and RTD arrays: multi-point measurement with median and plausibility voting against stuck sensors.",
          "Silicon junction temperature estimation: I²t modeling from current waveforms where direct die sensing unavailable.",
          "Thermal derating: reduce charge power proportionally between warning and critical thresholds.",
          "Fan and pump control: variable speed with fault feedback — stalled fan triggers immediate power reduction.",
          "Receiver thermal: belly enclosure hotspot monitoring with CAN telemetry to fleet thermal dashboard.",
        ],
      },
      {
        heading: "Mechanical thermal design",
        paragraphs: [
          "Dock pit thermal design balances IP rating with conduction paths to surrounding concrete and optional forced air from facility plenum. Potting and thermally conductive gap filler improve capacitor and inductor heat spreading but complicate service — modular replaceable subassemblies preferred where mean time to repair targets demand. Receiver designs account for road grime insulating belly pan and reduced underbody airflow when vehicle stationary during charge.",
          "Thermal runaway on battery is outside direct dock control but influenced by charge power persistence — SiCore coordinates derating with BMS temperature requests and aborts charge when receiver or dock reports critical threshold regardless of BMS charge demand.",
        ],
      },
      {
        heading: "Validation and fleet monitoring",
        paragraphs: [
          "Thermal validation includes blocked vent testing, 50 °C ambient soak at rated power, and fault injection on sensor open/short. Fleet analytics plot thermal trend per pad — gradual rise indicates filter clogging, coil insulation degradation, or refrigerant loss in climate-controlled pits. Thermal protection events are safety-logged with pre-trip temperature trace for root cause analysis; repeated trips trigger maintenance work order before catastrophic failure.",
        ],
      },
    ],
  }),

  article({
    slug: "emergency-shutdown",
    title: "Emergency Shutdown",
    summary:
      "Emergency shutdown architecture for SiCore wireless charging docks and AGV charge sessions — E-stop networks, safe torque-off coordination, power removal timing, fail-safe relay logic, and recovery procedures for industrial autonomous vehicle fleets.",
    sections: [
      {
        paragraphs: [
          "Emergency shutdown provides operator and automated safety system ability to rapidly transition charging and associated hazards to a safe state — removing power from resonant tank, disabling vehicle motion enable, and signaling fleet management that the zone is unsafe. SiCore docks interface with facility mushroom E-stops, AGV-mounted safety PLCs, light curtain outputs, and fire alarm interlocks common in warehouse installations.",
          "Response must be deterministic: hardware paths disable gate drivers independently of software load; software confirms shutdown and holds safe state until qualified reset — preventing automatic restart into occupied fault zones after E-stop release.",
        ],
      },
      {
        heading: "Shutdown paths and timing",
        bullets: [
          "Category 0/1 stop alignment: remove motive power to inverter within defined ms via redundant disable circuits.",
          "E-stop chain: series-connected NC contacts cutting safety relay coil — broken wire fails safe.",
          "Safe state definition: zero intentional WPT field, discharged tank within bleed time, interlock latched.",
          "AGV STO output: dock asserts charge-prohibit and STO-coordinated signals to vehicle safety controller.",
          "Visual indication: pad status LED and optional horn confirm shutdown state to approaching operators.",
        ],
      },
      {
        heading: "System coordination",
        paragraphs: [
          "Multi-pad aisles define whether E-stop affects single pad, bay, or entire charger line — SiCore supports grouped zones with configurable logic documented in site safety file. Fire alarm integration typically inhibits new charge starts and ramps down active sessions rather than instantaneous dump — balancing fire spread prevention from energized equipment against battery stress from abrupt load removal, per customer fire marshal agreement.",
          "Receiver behavior on dock E-stop: cease rectifier switching, open output contactor if fitted, and report fault code on surviving communication link. Vehicle may retain battery energy but cannot accept charge until reset sequence completes — including visual inspection of pad and confirmation from fleet supervisor console.",
        ],
      },
      {
        heading: "Reset and recovery",
        paragraphs: [
          "Reset requires deliberate action: twist-release E-stop, key switch, or authenticated fleet command — not mere fault clearance. SiCore reset sequence verifies FOD clear, LOD zone clear, thermal limits normal, and no active hardware fault before arming inverter. Post-incident review captures E-stop source, shutdown latency from scope measurement during commissioning baseline, and any override used — supporting continuous improvement of site safety procedures and SiCore interface documentation.",
        ],
      },
    ],
  }),
];
