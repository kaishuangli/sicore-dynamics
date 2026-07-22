import type { KnowledgeArticle } from "@/lib/knowledge-articles/types";

const categoryId = "power-electronics";

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

/** Collection 04 — Power Electronics */
export const powerElectronicsArticles: readonly KnowledgeArticle[] = [
  article({
    slug: "rectifiers",
    title: "Rectifiers",
    summary:
      "AC-to-DC rectification in wireless charging docks: diode bridges, output ripple, and how rectifier choice affects battery-side efficiency.",
    sections: [
      {
        paragraphs: [
          "Rectifiers convert the AC or high-frequency AC from the receiver coil tank into DC for the battery or DC bus. In industrial wireless power for AGVs and AMRs, rectification happens on the vehicle side after resonant coupling — often at tens to hundreds of kilohertz rather than mains frequency.",
          "The rectifier is not a passive afterthought. Its forward drop, reverse recovery, and layout parasitics add loss, heat, and EMI that propagate back through the tank and affect ZVS margins on the transmitter inverter.",
        ],
      },
      {
        heading: "Common topologies in WPT",
        bullets: [
          "Full-bridge diode rectifier for higher voltage receiver outputs.",
          "Center-tapped secondary with two-diode rectification when transformer or coil symmetry allows.",
          "Synchronous rectification when MOSFETs replace diodes for lower conduction loss at high current.",
        ],
      },
      {
        heading: "Design priorities",
        paragraphs: [
          "Match rectifier voltage and current ratings to worst-case misalignment when coil voltage rises. Size output capacitors for ripple acceptable to the battery BMS and for hold-up during brief communication gaps. Place rectifier devices close to the coil secondary terminals to minimize loop area and ringing.",
        ],
      },
      {
        heading: "Fleet considerations",
        bullets: [
          "Document rectifier thermal limits — dock duty cycles can exceed lab average power.",
          "Plan for diode or SR FET replacement without recalibrating the entire receiver.",
          "Verify reverse voltage during load dump and unplug events, not only steady-state charging.",
        ],
      },
    ],
  }),

  article({
    slug: "inverters",
    title: "Inverters",
    summary:
      "High-frequency inverters in charging docks: how the transmitter converts DC bus power into the AC excitation that drives the WPT coil.",
    sections: [
      {
        paragraphs: [
          "The dock-side inverter takes DC from the facility bus or PFC front end and synthesizes the AC waveform applied to the transmitter coil through a resonant tank. For AGV and AMR wireless charging, this is typically a half-bridge or full-bridge switching at the WPT operating frequency.",
          "Inverter design sets switching loss, EMI spectrum, soft-switching capability, and how gracefully the dock responds to coupling changes as vehicles dock with varying alignment.",
        ],
      },
      {
        heading: "Key inverter decisions",
        bullets: [
          "Topology: half-bridge for moderate power density; full-bridge when voltage utilization or power scaling demands it.",
          "Modulation: fixed frequency with phase or frequency control depending on compensation network.",
          "Device technology: Si MOSFETs at lower frequency; SiC or GaN when switching loss dominates.",
        ],
      },
      {
        heading: "Control coupling to the coil",
        paragraphs: [
          "The inverter does not operate in isolation. Tank impedance, coupling coefficient, and load resistance on the receiver jointly determine current and phase. Control loops must limit coil current and DC bus ripple while tracking charging requests from the vehicle over CAN or inductive communication.",
        ],
      },
      {
        heading: "Dock integration",
        bullets: [
          "Pre-charge and enable sequencing before full power — avoid slamming an unloaded tank.",
          "Fault ride-through for brief grid dips without tripping an entire charging row.",
          "Thermal derating coordinated with coil and magnetics, not inverter alone.",
        ],
      },
    ],
  }),

  article({
    slug: "dc-dc-converters",
    title: "DC/DC Converters",
    summary:
      "Intermediate DC/DC stages in wireless charging systems: bus regulation, galvanic isolation, and battery-facing conversion on AGV platforms.",
    sections: [
      {
        paragraphs: [
          "Wireless charging docks often include one or more DC/DC conversion stages between the facility input, the inverter DC bus, and the vehicle battery. On the vehicle, a DC/DC may sit after the WPT rectifier to match battery voltage, provide galvanic isolation, or interface traction and auxiliary buses.",
          "Each conversion step adds loss but also decouples control domains — grid voltage swings do not directly modulate coil excitation, and battery chemistry sees a regulated charge profile.",
        ],
      },
      {
        heading: "Where DC/DC appears",
        bullets: [
          "Dock PFC output to regulated DC link feeding the WPT inverter.",
          "Vehicle receiver rectifier output to battery charge regulator.",
          "Auxiliary 24 V or 48 V supplies for AMR navigation electronics from the traction pack.",
        ],
      },
      {
        heading: "Topology selection",
        paragraphs: [
          "Buck, boost, and buck-boost choices follow the voltage headroom between source and load. Isolated flyback or LLC-derived stages appear when safety standards require separation between user-accessible circuits and the coil primary. Efficiency targets for fleet economics favor synchronous topologies at the currents typical of industrial wireless power.",
        ],
      },
      {
        heading: "System notes",
        bullets: [
          "Coordinate switching frequencies to avoid beat tones on current sensors.",
          "Size input and output capacitors for both ripple and hot-plug on vehicle connect.",
          "Document efficiency maps alongside the WPT link — customers judge total dock-to-battery loss.",
        ],
      },
    ],
  }),

  article({
    slug: "ac-dc-conversion",
    title: "AC/DC Conversion",
    summary:
      "Mains AC to DC in fixed charging infrastructure: front-end rectification, PFC, and how facility power quality affects dock reliability.",
    sections: [
      {
        paragraphs: [
          "Fixed wireless charging docks connect to facility AC — single-phase or three-phase depending on power class. AC/DC conversion provides the DC bus that feeds the high-frequency WPT inverter. Poor front-end design shows up as flicker, harmonic pollution, and undervoltage trips that idle an entire AGV fleet.",
          "Industrial sites often have stiff or weak grids, long cable runs, and shared transformers with heavy motor loads. The dock front end must tolerate that environment.",
        ],
      },
      {
        heading: "Front-end building blocks",
        bullets: [
          "Diode or active bridge rectification to intermediate DC.",
          "Power factor correction for harmonic compliance and usable RMS current.",
          "Bulk capacitance and inrush limiting for the DC link.",
        ],
      },
      {
        heading: "Interaction with WPT load",
        paragraphs: [
          "The WPT inverter draws pulsating power at twice the line frequency on the DC bus unless PFC shapes input current. During light load or idle, the front end must still maintain bus voltage without overcharging capacitors. Coordinate soft-start on the AC side with transmitter enable logic.",
        ],
      },
      {
        heading: "Deployment checklist",
        bullets: [
          "Verify phase rotation and nominal voltage at each install site.",
          "Specify breaker and wire size for continuous dock duty, not peak nameplate alone.",
          "Monitor THD and power factor where multiple docks share one feeder.",
        ],
      },
    ],
  }),

  article({
    slug: "synchronous-rectification",
    title: "Synchronous Rectification",
    summary:
      "Replacing diode rectifiers with controlled MOSFETs on the WPT receiver to cut conduction loss at high battery charge currents.",
    sections: [
      {
        paragraphs: [
          "Synchronous rectification (SR) uses low-resistance MOSFETs switched in place of diodes. At the tens-of-ampere currents common in AGV wireless charging, diode forward drop can represent a meaningful fraction of total loss. SR recovers that margin — if gate drive, timing, and layout are correct.",
          "SR is standard on high-power receiver boards but adds complexity: body-diode conduction during dead time, reverse current risk, and sensitivity to tank current zero-crossing detection.",
        ],
      },
      {
        heading: "Implementation essentials",
        bullets: [
          "Accurate current polarity or timing reference from the resonant waveform.",
          "Gate drive strength and layout to minimize turn-on delay and shoot-through with adjacent legs.",
          "MOSFET selection with adequate SOA for startup and misalignment peaks.",
        ],
      },
      {
        heading: "Control modes",
        paragraphs: [
          "Self-driven SR from auxiliary windings works in some topologies but is less common in tightly controlled industrial receivers. MCU or dedicated SR controllers with ADC or comparator-based zero-cross detection dominate. Always validate SR timing across the full coupling and load range — a few degrees of phase error erases SR benefit.",
        ],
      },
      {
        heading: "Failure modes to test",
        bullets: [
          "Reverse conduction if SR turns on late or off early.",
          "Excessive ringing on SR switch node from parasitic inductance.",
          "Thermal hot spots when one leg carries more current due to layout asymmetry.",
        ],
      },
    ],
  }),

  article({
    slug: "mosfet-selection",
    title: "MOSFET Selection",
    summary:
      "Choosing MOSFETs for WPT inverters and synchronous rectifiers: voltage margin, RDS(on), Qg, and switching speed trade-offs.",
    sections: [
      {
        paragraphs: [
          "MOSFET selection balances conduction loss (I²RDS(on)), switching loss (Qg, Qoss, trr of body diode), and voltage rating for ringing and misalignment overshoot. In a charging dock inverter, the same part may see soft-switched operation at nominal load and hard switching during fault or startup.",
          "Industrial wireless power favors parts with known avalanche behavior, consistent parametrics across batches, and availability for multi-year fleet spares.",
        ],
      },
      {
        heading: "Selection criteria",
        bullets: [
          "VDSS with margin above worst-case spike including layout overshoot.",
          "RDS(on) at operating junction temperature, not 25 °C datasheet.",
          "Gate charge versus driver capability — weak drive erases fast FET advantage.",
          "Body diode reverse recovery if it conducts during dead time or hard commutation.",
        ],
      },
      {
        heading: "Si vs wide bandgap",
        paragraphs: [
          "Silicon superjunction MOSFETs remain cost-effective at moderate frequency. SiC and GaN extend frequency and efficiency when magnetics and layout can support faster edges. The winning device is the one that minimizes total loss at your frequency, current, and cooling budget — not the newest technology label.",
        ],
      },
      {
        heading: "Validation",
        bullets: [
          "Double-pulse testing on the actual PCB, not an evaluation board.",
          "Temperature cycling under dock enclosure limits.",
          "Spares and second-source policy before fleet lock-in.",
        ],
      },
    ],
  }),

  article({
    slug: "gan-technology",
    title: "GaN Technology",
    summary:
      "Gallium nitride transistors in compact WPT inverters: faster switching, layout-critical design, and where GaN pays off in charging docks.",
    sections: [
      {
        paragraphs: [
          "GaN HEMTs offer lower switching loss and smaller device capacitance than comparable silicon MOSFETs, enabling higher frequency or higher power density in the transmitter stage. For floor-mounted charging docks with tight thermal envelopes, that can mean smaller magnetics and heatsinks.",
          "GaN demands disciplined layout — short loops, careful gate drive, and controlled dv/dt. An excellent GaN part on a poor PCB performs worse than a mature Si MOSFET on a good one.",
        ],
      },
      {
        heading: "Advantages for WPT",
        bullets: [
          "Reduced switching loss when pushing frequency for compact coils.",
          "Lower Qoss aiding ZVS transitions in some topologies.",
          "Smaller power stage footprint for slim dock profiles.",
        ],
      },
      {
        heading: "Design cautions",
        paragraphs: [
          "Gate threshold and drive requirements differ from Si — use recommended drivers and layout guidelines from the device vendor. Miller plateau and ringing are unforgiving at high dv/dt. EMI filters and shielding may need reinforcement when migrating from Si to GaN at the same frequency.",
        ],
      },
      {
        heading: "When to adopt",
        bullets: [
          "Power density or frequency target cannot be met with Si within thermal budget.",
          "Team has layout and measurement capability for GHz-speed loop design.",
          "Total cost of ownership includes magnetics savings, not device price alone.",
        ],
      },
    ],
  }),

  article({
    slug: "sic-technology",
    title: "SiC Technology",
    summary:
      "Silicon carbide MOSFETs and diodes in industrial wireless chargers: high-voltage margin, low reverse recovery, and robust high-temperature operation.",
    sections: [
      {
        paragraphs: [
          "SiC MOSFETs and Schottky diodes excel where voltage stress, temperature, and switching loss intersect — common in multi-kilowatt dock inverters and PFC stages. Lower reverse recovery charge on SiC diodes reduces switching stress on companion switches and can simplify snubber design.",
          "SiC costs have moved toward mainstream industrial power. For 24/7 AGV charging lanes, improved efficiency and cooler operation often justify the premium over Si.",
        ],
      },
      {
        heading: "Typical WPT applications",
        bullets: [
          "Dock inverter full-bridge or half-bridge at 100 kHz and above.",
          "PFC boost switches in three-phase dock feeds.",
          "Fast free-wheeling or clamp diodes in hard-switched auxiliary circuits.",
        ],
      },
      {
        heading: "Design differences from Si",
        paragraphs: [
          "SiC MOSFET body diode reverse recovery is generally milder than Si, but short-circuit and avalanche behavior must still be verified. Gate drive voltages and negative bias recommendations vary by vendor — follow the datasheet for turn-off reliability. SiC benefits shrink if conduction loss dominates because RDS(on) is not always lower than optimized Si at the same die size.",
        ],
      },
      {
        heading: "Fleet reliability",
        bullets: [
          "SiC tolerates higher junction temperatures — use that margin for life, not for running hotter by default.",
          "Qualify gate oxide and threshold drift over production spread.",
          "Pair with compatible gate drivers rated for SiC Miller plateau.",
        ],
      },
    ],
  }),

  article({
    slug: "gate-drivers",
    title: "Gate Drivers",
    summary:
      "Gate drive circuits for WPT power stages: drive strength, isolation, propagation delay, and shoot-through prevention.",
    sections: [
      {
        paragraphs: [
          "Gate drivers translate low-voltage control signals into the voltage and current needed to charge and discharge MOSFET gates quickly and reliably. In wireless charging inverters, poor gate drive shows up as excessive switching loss, EMI, and unexplained device failures under fast load transients.",
          "Drive capability must match Qg at the operating frequency with margin for Miller plateau. Undersized drive lengthens transition time and moves operation away from soft switching.",
        ],
      },
      {
        heading: "Core requirements",
        bullets: [
          "Peak source and sink current for target rise and fall times.",
          "UVLO and fault reporting so switches never hang in linear region.",
          "Matched propagation delay in half-bridge high-side and low-side pairs.",
          "Isolation when high-side reference floats on the switching node.",
        ],
      },
      {
        heading: "Layout and components",
        paragraphs: [
          "Keep driver close to the FET gate. Use a tight loop for gate resistor, series damping, and optional ferrite. Separate power and signal grounds deliberately — return current from gate discharge must not stamp on sensitive analog or current-sense traces.",
        ],
      },
      {
        heading: "Dock-specific notes",
        bullets: [
          "Gate drive supply must survive pre-charge and idle states without collapse.",
          "Document replaceable gate resistors for field tuning after EMI audit.",
          "Test driver performance at minimum and maximum DC bus voltage.",
        ],
      },
    ],
  }),

  article({
    slug: "power-stage-design",
    title: "Power Stage Design",
    summary:
      "Integrating switches, magnetics, and DC bus into a coherent WPT transmitter power stage for industrial charging docks.",
    sections: [
      {
        paragraphs: [
          "Power stage design is the end-to-end layout of semiconductors, DC link, tank connection, sensing, and cooling that converts bus power into controlled coil excitation. For AGV docks, the stage must fit a floor pad or pedestal, survive environmental stress, and remain serviceable.",
          "A schematic-correct stage fails in production if loop inductance, thermal paths, or clearance rules are ignored.",
        ],
      },
      {
        heading: "Design flow",
        bullets: [
          "Define power, frequency, topology, and device technology from system requirements.",
          "Place switching loop and DC bus capacitors before routing aesthetics.",
          "Integrate current sense, voltage sense, and temperature monitors at defined points.",
          "Simulate or measure switching waveforms on first article hardware early.",
        ],
      },
      {
        heading: "Co-stage coupling",
        paragraphs: [
          "The power stage output connects directly to the transmitter coil and resonant network. Impedance at the switch node sets stress on devices and capacitors. Design the stage and tank together — changing compensation without revisiting layout often invalidates ZVS assumptions.",
        ],
      },
      {
        heading: "Manufacturing and service",
        bullets: [
          "Torque specs and thermal interface materials for repeatable assembly.",
          "Accessible test points for bus voltage, coil current, and gate signals.",
          "Modular power stage cartridges for field swap in high-uptime deployments.",
        ],
      },
    ],
  }),

  article({
    slug: "switching-loss",
    title: "Switching Loss",
    summary:
      "Energy lost during MOSFET transitions in WPT inverters and how soft switching, device choice, and timing reduce it.",
    sections: [
      {
        paragraphs: [
          "Switching loss occurs when the device conducts current while supporting voltage during turn-on and turn-off. In resonant wireless chargers, the goal is often zero-voltage switching (ZVS) so transitions happen near zero VDS. When ZVS is lost — light load, detuning, or fast transients — switching loss rises sharply.",
          "Switching loss scales with frequency. Raising WPT frequency for smaller magnetics directly pressures the inverter unless commutation remains soft.",
        ],
      },
      {
        heading: "Contributors",
        bullets: [
          "Overlap of V and I during hard switching intervals.",
          "Output capacitance COSS dissipation during ZVS transitions.",
          "Gate drive speed — too slow increases overlap; too fast increases EMI and ringing.",
          "Reverse recovery of freewheeling or body diode paths.",
        ],
      },
      {
        heading: "Mitigation strategies",
        paragraphs: [
          "Tune tank and control to maintain ZVS across coupling and load range. Select devices with favorable Qoss and Qg for your driver. Minimize loop inductance so voltage overshoot does not force conservative slow switching. Measure loss per switch with calorimetry or electrical loss breakdown, not datasheet alone.",
        ],
      },
      {
        heading: "Fleet impact",
        bullets: [
          "Dock efficiency maps must include switching loss at partial load where AGVs often sit.",
          "Thermal design sized for worst-case hard-switching fault modes.",
          "Log ZVS margin indicators for predictive maintenance on aging docks.",
        ],
      },
    ],
  }),

  article({
    slug: "conduction-loss",
    title: "Conduction Loss",
    summary:
      "I²R and forward-voltage loss in WPT paths: switches, windings, connectors, and why conduction loss dominates at high current.",
    sections: [
      {
        paragraphs: [
          "Conduction loss is the predictable dissipation when current flows through resistive elements — MOSFET RDS(on), winding AC and DC resistance, connector contact resistance, and cable copper. In high-power AGV wireless charging at moderate frequency, conduction loss often exceeds switching loss once the link is well tuned.",
          "Every milliohm in the coil-to-battery path matters at 50 A and above.",
        ],
      },
      {
        heading: "Major contributors",
        bullets: [
          " inverter and SR MOSFET on-resistance at hot junction temperature.",
          "Coil Litz or copper AC resistance including proximity and skin effect.",
          "Bus bars, fuse holders, and charging contacts in the dock-vehicle interface.",
          "Rectifier or SR channel loss when diodes remain in the path.",
        ],
      },
      {
        heading: "Reduction approaches",
        paragraphs: [
          "Parallel FETs or larger die when switching budget allows. Optimize coil conductor packing and ferrite geometry before adding power. Use four-point Kelvin sensing to find hidden resistance in assemblies. Specify maintenance for contact oxidation on mating surfaces in dirty industrial floors.",
        ],
      },
      {
        heading: "Measurement",
        bullets: [
          "Thermography under sustained charge at fleet-representative current.",
          "Compare calculated I²R sum to input-output efficiency gap.",
          "Track conduction loss drift as contacts wear over docking cycles.",
        ],
      },
    ],
  }),

  article({
    slug: "thermal-design",
    title: "Thermal Design",
    summary:
      "Keeping dock inverters, coils, and receiver electronics within temperature limits under continuous AGV charging duty.",
    sections: [
      {
        paragraphs: [
          "Thermal design translates loss breakdown into junction, case, and ambient temperatures that stay within device and insulation ratings. Wireless charging docks in warehouses may run near nameplate power for hours with limited airflow under floor pads or inside sealed pedestals.",
          "Thermal failure is gradual then sudden — derating curves and fleet analytics should reflect real enclosure conditions, not open-air lab benches.",
        ],
      },
      {
        heading: "Heat paths",
        bullets: [
          "Junction to case through die attach and package.",
          "Case to heatsink or PCB copper through TIM and mounting pressure.",
          "Conduction through enclosure to ambient; forced air or liquid where passive fails.",
          "Coil copper and ferrite — AC loss heats windings and cores independently of the inverter.",
        ],
      },
      {
        heading: "Design practices",
        paragraphs: [
          "Simulate or measure thermal resistance from junction to ambient on integrated assemblies. Place temperature sensors on devices, magnetics, and hot spots in the dock shell. Define control derating that reduces power before hard thermal shutdown to avoid charge interruptions mid-shift.",
        ],
      },
      {
        heading: "Deployment",
        bullets: [
          "Account for floor temperature, dust, and blocked vents in AMR aisles.",
          "Specify cleaning procedures that do not compress TIM or warp pad covers.",
          "Record thermal alarm history — recurring hot spots indicate design or alignment issues.",
        ],
      },
    ],
  }),

  article({
    slug: "power-density",
    title: "Power Density",
    summary:
      "Packaging more wireless charging power into floor pads and vehicle receivers without exceeding thermal and EMI limits.",
    sections: [
      {
        paragraphs: [
          "Power density is deliverable power per unit volume or area — critical when AGV belly clearance is tight and floor pads must survive forklift traffic. Higher density comes from better devices, higher frequency, improved magnetics, and integrated cooling — each with cost and complexity.",
          "Marketing kW per square meter means little without stating gap, misalignment, coolant, and ambient.",
        ],
      },
      {
        heading: "Levers",
        bullets: [
          "Wide bandgap switches and optimized magnetics for smaller tanks.",
          "Higher frequency with Litz and careful AC loss control.",
          "Liquid or directed airflow in pedestals; heat spreading in floor assemblies.",
          "Multi-coil arrays with selective excitation for localized power delivery.",
        ],
      },
      {
        heading: "Limits",
        paragraphs: [
          "EMI and safety clearances do not shrink with silicon scaling. Human-accessible surfaces have temperature and field exposure limits. Receiver volume on AMRs competes with battery and structure — density pushes against service access.",
        ],
      },
      {
        heading: "Specification discipline",
        bullets: [
          "Quote power density at worst-case alignment and ambient.",
          "Include inverter, coil, and rectifier loss in density figures, not coil alone.",
          "Document maintenance clearance for dense assemblies.",
        ],
      },
    ],
  }),

  article({
    slug: "emi-reduction",
    title: "EMI Reduction",
    summary:
      "Controlling conducted and radiated emissions from WPT inverters so charging docks coexist with factory electronics and radio systems.",
    sections: [
      {
        paragraphs: [
          "Wireless power is intentionally rich in magnetic fields — EMI engineering separates intentional coupling to the receiver from unintended noise on cables, structures, and nearby sensors. Dock inverters switch fast currents in loops that act as antennas unless filtered and laid out carefully.",
          "EMI reduction starts at the switch node and DC bus, not only at the compliance test lab.",
        ],
      },
      {
        heading: "Primary techniques",
        bullets: [
          "Minimize switching loop area and use return paths under signals.",
          "Soft switching to reduce high-frequency content when topology allows.",
          "Input and output filters sized for both differential and common-mode paths.",
          "Shielding and ferrite on cables exiting the pad enclosure.",
        ],
      },
      {
        heading: "WPT-specific issues",
        paragraphs: [
          "Coil leakage flux can induce noise in nearby wiring — route sensitive CAN and encoder cables away from pad edges. Harmonics of switching frequency interact with coil self-resonance; detuning from metal can shift emission peaks. Validate with the vehicle parked and absent — both configurations matter.",
        ],
      },
      {
        heading: "Process",
        bullets: [
          "Pre-compliance scans during prototype, not after mold tooling.",
          "Document filter and layout changes as controlled ECN for fleet consistency.",
          "Retest when cable lengths or site grounding differs from qualification setup.",
        ],
      },
    ],
  }),

  article({
    slug: "emc-design",
    title: "EMC Design",
    summary:
      "Electromagnetic compatibility for industrial wireless chargers: immunity, emissions standards, and system-level EMC planning.",
    sections: [
      {
        paragraphs: [
          "EMC design ensures the charging dock neither interferes with nor fails in the presence of other equipment. Emissions from the power stage and coil must meet applicable limits; immunity to grid transients, ESD, and nearby RF matters for reliable AMR operation in busy factories.",
          "EMC is a system property — grounding, cabling, enclosure, and firmware fault response all participate.",
        ],
      },
      {
        heading: "Emissions control",
        bullets: [
          "Class-appropriate limits for industrial and residential-adjacent installs.",
          "Filter design verified under full load and typical line impedance.",
          "Coil and ferrite arrangements that contain leakage without killing coupling.",
        ],
      },
      {
        heading: "Immunity",
        paragraphs: [
          "ESD on operator-touchable surfaces and vehicle approach paths. Surge and fast transients on AC input per install region. Magnetic and electric field immunity where dock electronics sit near other WPT or RF sources. Firmware must fail safe — not latch in an unsafe power state after a burst.",
        ],
      },
      {
        heading: "Documentation",
        bullets: [
          "EMC test plan tied to production representative sample.",
          "Installation guide: grounding, cable separation, prohibited modifications.",
          "Field escalation when site EMC audits fail after non-OEM changes.",
        ],
      },
    ],
  }),

  article({
    slug: "power-factor-correction",
    title: "Power Factor Correction",
    summary:
      "PFC front ends for multi-kW charging docks: input current shaping, harmonic limits, and stable DC bus under pulsing WPT load.",
    sections: [
      {
        paragraphs: [
          "Power factor correction shapes AC input current to follow voltage, improving real power delivery and meeting harmonic regulations. Fixed docks without PFC draw peaky current that heats neutral conductors and can disturb other factory loads.",
          "The PFC output bus feeds the WPT inverter. Bus voltage ripple and control bandwidth must support fast load steps when vehicles connect and demand power.",
        ],
      },
      {
        heading: "Topologies",
        bullets: [
          "Boost PFC for single-phase dock feeds — common and mature.",
          "Interleaved or bridgeless variants for efficiency at higher power.",
          "Three-phase Vienna or similar for high-power charging lanes.",
        ],
      },
      {
        heading: "Interaction with WPT",
        paragraphs: [
          "PFC control loops are slower than inverter loops. Bulk capacitor energy buffers fast WPT load pulses. Size bulk cap for ripple at twice line frequency and for hold-up — undervoltage lockout on the inverter should not nuisance-trip during normal PFC regulation.",
        ],
      },
      {
        heading: "Site planning",
        bullets: [
          "Aggregate harmonic contribution when many docks share one transformer.",
          "Monitor PF and THD during commissioning.",
          "Coordinate inrush and PFC soft-start with upstream breakers.",
        ],
      },
    ],
  }),

  article({
    slug: "full-bridge-inverter",
    title: "Full-Bridge Inverter",
    summary:
      "Four-switch bridge topologies in WPT transmitters: voltage utilization, control flexibility, and layout demands.",
    sections: [
      {
        paragraphs: [
          "A full-bridge inverter uses four switches across the DC bus to apply positive, negative, or zero voltage to the load network. For wireless charging docks, it offers full bus utilization and flexible phase control for resonant tanks compared with a half-bridge at the same bus voltage.",
          "The cost is more switches, more gate drive, and a layout with two switching nodes or a carefully routed single output — loop inductance in the bridge legs directly affects EMI and loss.",
        ],
      },
      {
        heading: "WPT advantages",
        bullets: [
          "Higher fundamental voltage for a given DC bus — useful for high coil current.",
          "Phase-shift and frequency control options for LLC and similar topologies.",
          "Better suited to multi-kW industrial docks than half-bridge at equal device stress.",
        ],
      },
      {
        heading: "Design focus",
        paragraphs: [
          "Balance leg inductance so current shares between diagonal pairs. Decouple high-side and low-side drivers with clean bootstrap or isolated supplies. Verify shoot-through protection and dead time across production spread.",
        ],
      },
      {
        heading: "When half-bridge suffices",
        bullets: [
          "Lower power classes with headroom on bus voltage.",
          "Cost-sensitive deployments with acceptable higher current in the tank.",
          "Topologies that intentionally use half-bridge for symmetry with split DC link.",
        ],
      },
    ],
  }),

  article({
    slug: "half-bridge-inverter",
    title: "Half-Bridge Inverter",
    summary:
      "Two-switch WPT transmitters: simpler power stages, split DC link considerations, and typical power classes.",
    sections: [
      {
        paragraphs: [
          "A half-bridge places two switches in series across the DC bus with the load connected from the midpoint to ground or to a second midpoint in a split-cap topology. It applies half the bus voltage to the tank in simple PWM, making it attractive for compact and cost-sensitive charging modules.",
          "Half-bridge designs need a stable midpoint — often two bulk capacitors — and careful balance to avoid DC bias in the transformer or coil series path.",
        ],
      },
      {
        heading: "Strengths",
        bullets: [
          "Fewer switches and drivers than full-bridge.",
          "Natural fit for symmetric resonant tanks with split capacitors.",
          "Widely used in mid-power consumer and industrial WPT where bus voltage can be raised.",
        ],
      },
      {
        heading: "Challenges",
        paragraphs: [
          "Same coil current requires higher peak tank voltage or higher bus than full-bridge. Midpoint capacitor RMS current can heat smaller caps. Bootstrap high-side drive limits duty cycle and refresh timing — validate at minimum pulse width used for control.",
        ],
      },
      {
        heading: "Dock fit",
        bullets: [
          "Pedestal chargers under roughly 3–5 kW when thermal and voltage budget allow.",
          "Modules paralleled for lane charging with synchronized control.",
          "Receiver-side half-bridge active rectifiers in related topologies — similar layout rules.",
        ],
      },
    ],
  }),

  article({
    slug: "class-d-amplifier-stages",
    title: "Class-D Amplifier Stages",
    summary:
      "Class-D switching principles applied to WPT coil drivers: efficiency, filtering, and control analogies to audio Class-D.",
    sections: [
      {
        paragraphs: [
          "Class-D amplification means high-efficiency switching output stages with filtered or resonant load paths — the same conceptual bucket as most WPT transmitters. The coil tank often provides the filtering; the inverter switches at high efficiency while the resonator selects fundamental power delivery.",
          "Understanding Class-D helps debug distortion-like artifacts when control resolution, dead time, or modulation limits create unwanted harmonics in coil current.",
        ],
      },
      {
        heading: "Parallels to WPT",
        bullets: [
          "Switching stage plus LC filter equals resonant power delivery.",
          "Modulation (PWM, phase, frequency) sets effective coil voltage.",
          "Loop bandwidth and stability matter for load transients on the receiver.",
        ],
      },
      {
        heading: "Differences from audio",
        paragraphs: [
          "Power levels and currents far exceed audio Class-D. Magnetics are the functional load, not a speaker voice coil. Safety, isolation, and EMC dominate — not THD to the ear. Still, spectral content of coil current affects loss and EMI similarly to harmonic distortion in amplifiers.",
        ],
      },
      {
        heading: "Practical use",
        bullets: [
          "Borrow Class-D driver IC concepts cautiously — WPT needs higher voltage and current.",
          "Simulate harmonic content under phase modulation used for power control.",
          "Do not confuse marketing “Class-D wireless” with a specific standard topology.",
        ],
      },
    ],
  }),

  article({
    slug: "buck-converter",
    title: "Buck Converter",
    summary:
      "Step-down DC/DC in wireless charging systems: post-rectifier regulation and auxiliary supplies on AGV platforms.",
    sections: [
      {
        paragraphs: [
          "A buck converter steps voltage down by switching an inductor between input and output with a ground-referenced switch. On vehicles, bucks regulate WPT rectifier output to battery charge voltage when the coupled voltage exceeds what the pack needs.",
          "Continuous conduction mode bucks at fixed frequency are well understood — input and output capacitor RMS current and inductor ripple must be sized for wireless load steps.",
        ],
      },
      {
        heading: "WPT use cases",
        bullets: [
          "Battery charging regulator after synchronous rectifier.",
          "24 V or 12 V auxiliary from higher traction voltage on AMRs.",
          "Dock internal housekeeping from the PFC bus.",
        ],
      },
      {
        heading: "Design notes",
        paragraphs: [
          "Synchronous buck for efficiency at charge current. Watch light-load operation when AGV finishes charge — some bucks enter pulse skipping that can interact with BMS measurements. Input cap must handle pulse current from both WPT ripple and buck switching.",
        ],
      },
      {
        heading: "Integration",
        bullets: [
          "Coordinate enable with WPT power availability to avoid inrush.",
          "Place inductor away from receiver coil flux if core is unshielded.",
          "Current limit aligned with wireless link power cap.",
        ],
      },
    ],
  }),

  article({
    slug: "boost-converter",
    title: "Boost Converter",
    summary:
      "Step-up conversion in dock PFC and vehicle systems where bus or battery voltage must rise before the WPT or traction stage.",
    sections: [
      {
        paragraphs: [
          "Boost converters raise voltage by storing energy in an inductor while the switch is on and releasing it to the output when the switch turns off. PFC boost stages are the dominant AC/DC front end for single-phase docks.",
          "On vehicles, boost stages appear when battery or ultracap voltage is below the inverter requirement for motoring or when boosting rectifier output during weak coupling.",
        ],
      },
      {
        heading: "PFC context",
        bullets: [
          "Follows rectified AC with output bus typically 350–400 VDC or site-specific.",
          "Current mode control for shaping input current.",
          "Output cap sized for WPT inverter pulse load.",
        ],
      },
      {
        heading: "Design cautions",
        paragraphs: [
          "Right-half-plane zero in continuous boost limits control bandwidth — coordinate with slow outer power loops. Startup inrush and OVP on output when load disconnects under heavy charge must be tested.",
        ],
      },
      {
        heading: "Wireless link interaction",
        bullets: [
          "Avoid beat frequencies between boost and inverter unless filtered.",
          "During weak coupling, boosting receiver voltage increases rectifier and SR stress — limit with link power control.",
        ],
      },
    ],
  }),

  article({
    slug: "buck-boost-converter",
    title: "Buck-Boost Converter",
    summary:
      "Bidirectional voltage conversion when WPT receiver output can be above or below the battery voltage during coupling changes.",
    sections: [
      {
        paragraphs: [
          "Buck-boost topologies handle inputs both above and below the output — useful on AGVs when coil voltage swings with misalignment and load. Four-switch buck-boost avoids the inverted ground reference of classic inverting buck-boost.",
          "Complexity trades against a simpler buck with wider input range and link power control limiting low-voltage episodes.",
        ],
      },
      {
        heading: "When needed",
        bullets: [
          "Wide battery voltage range (e.g., empty to full SOC) with fixed coil tuning.",
          "Ultracap buffers with voltage swing distinct from pack voltage.",
          "Dock internal rails from variable PFC bus during brownout.",
        ],
      },
      {
        heading: "Control",
        paragraphs: [
          "Mode transitions between buck and boost regions need hysteresis or unified control to avoid oscillation. Efficiency dips near buck-boost boundary — map loss there explicitly in efficiency charts shown to customers.",
        ],
      },
      {
        heading: "Alternatives",
        bullets: [
          "Resonant frequency or phase control on transmitter to keep receiver voltage in buck-only range.",
          "Series regulating element when efficiency penalty is acceptable for simplicity.",
        ],
      },
    ],
  }),

  article({
    slug: "llc-resonant-converter",
    title: "LLC Resonant Converter",
    summary:
      "LLC tanks for isolated DC/DC in charging infrastructure: soft switching, gain curve, and magnetics design for dock power supplies.",
    sections: [
      {
        paragraphs: [
          "LLC converters use a series inductor, parallel inductor, and capacitor resonant network — often with a transformer — to achieve high efficiency through zero-voltage switching on the primary switches. They appear as isolated auxiliary supplies or intermediate stages in large dock power cabinets.",
          "Gain varies with frequency; design the magnetizing inductance and turns ratio for the required bus and load range.",
        ],
      },
      {
        heading: "Benefits",
        bullets: [
          "ZVS on primary over a useful load range reduces switching loss.",
          "Low output ripple with proper secondary filter.",
          "Galvanic isolation for safety partitions inside the dock controller.",
        ],
      },
      {
        heading: "Design challenges",
        paragraphs: [
          "LLC gain curve is narrow — input voltage and load spread must fit the chosen region. Transformer leakage and Lm split affect resonance. Starting into pre-biased output caps on connected vehicles requires careful sequencing.",
        ],
      },
      {
        heading: "Relation to WPT",
        bullets: [
          "Distinct from the WPT coil resonator — do not conflate two different LLC networks in one system diagram without clear labels.",
          "Housekeeping LLC noise must not corrupt WPT current sensing grounds.",
        ],
      },
    ],
  }),

  article({
    slug: "phase-shifted-full-bridge",
    title: "Phase-Shifted Full Bridge",
    summary:
      "Phase-shift control on full-bridge WPT inverters: ZVS range, reactive circulation, and power regulation via leg timing.",
    sections: [
      {
        paragraphs: [
          "Phase-shifted full bridge (PSFB) delays one bridge leg relative to the other to control power while attempting ZVS on leading and lagging legs. Industrial WPT at higher power sometimes adopts PSFB or related variants for controlled gain into the resonant tank.",
          "Light load often loses lagging-leg ZVS — auxiliary circuits or mode changes address that region.",
        ],
      },
      {
        heading: "Operating regions",
        bullets: [
          "Heavy load: good ZVS on both legs with manageable circulating energy.",
          "Medium load: tune dead time and magnetizing current for transitions.",
          "Light load: add burst mode or alternate topology behavior to limit loss.",
        ],
      },
      {
        heading: "Tank interaction",
        paragraphs: [
          "PSFB output is a modulated square wave rich in harmonics — the WPT tank selects fundamental behavior but harmonic content affects loss. Co-design filter or resonant network with phase-shift modulation limits.",
        ],
      },
      {
        heading: "Implementation",
        bullets: [
          "Symmetric layout for leg inductance balance.",
          "Current transformers or shunt sensing for per-leg diagnostics.",
          "Validate ZVS with varying DC bus from PFC regulation.",
        ],
      },
    ],
  }),

  article({
    slug: "current-fed-converters",
    title: "Current-Fed Converters",
    summary:
      "Current-source front ends driving WPT coils: inherent short-circuit tolerance and challenges with voltage stress at open circuit.",
    sections: [
      {
        paragraphs: [
          "Current-fed topologies place an inductor in series with the DC input so the bridge sees approximately constant current. For WPT, that can limit fault current during receiver short and provide a natural match to some resonant tank excitations.",
          "Open-circuit or high-impedance receiver conditions produce high voltage at the inverter output — clamping and overvoltage protection are mandatory.",
        ],
      },
      {
        heading: "Advantages",
        bullets: [
          "Inherent limit on shoot-through current during bridge faults.",
          "Can simplify some series-resonant WPT architectures.",
          "Useful when multiple receivers detune the tank unpredictably.",
        ],
      },
      {
        heading: "Risks",
        paragraphs: [
          "Voltage spikes when coupling drops suddenly — AGV leaving dock mid-power. Input inductor saturation during asymmetric switching must be prevented. Control bandwidth differs from voltage-fed designs — retune power loops accordingly.",
        ],
      },
      {
        heading: "Application fit",
        bullets: [
          "Specialized high-power docks with defined OV clamp strategy.",
          "Research platforms — less common in standard AGV products than voltage-fed.",
          "Pair with active clamp or SAED networks when literature topology demands it.",
        ],
      },
    ],
  }),

  article({
    slug: "voltage-fed-converters",
    title: "Voltage-Fed Converters",
    summary:
      "Voltage-source WPT inverters — the dominant industrial approach: bus capacitor, bridge, and resonant tank interaction.",
    sections: [
      {
        paragraphs: [
          "Voltage-fed converters connect a low-impedance DC bus through a bridge to the resonant network. Nearly all commercial AGV wireless charging docks use this structure because control intuition, PFC integration, and literature on resonant WPT align with voltage excitation.",
          "The DC link capacitor supplies fast current pulses; its ESR and ESL affect ripple and EMI.",
        ],
      },
      {
        heading: "Characteristics",
        bullets: [
          "Coil voltage waveform approximates controlled square or sinusoidal excitation from bridge output filtering.",
          "Load changes reflect back as current draw on the DC bus — easy to monitor for fault detection.",
          "Requires attention to shoot-through but not open-circuit voltage multiplication like current-fed.",
        ],
      },
      {
        heading: "Design center",
        paragraphs: [
          "Size DC link for peak coil power and allowable ripple. Place bulk and ceramic caps close to switch legs. Coordinate inverter modulation with resonant compensation so input impedance stays manageable for PFC.",
        ],
      },
      {
        heading: "Fleet default",
        bullets: [
          "Document as reference topology for integrators and spare parts.",
          "Train field service on DC bus discharge before opening pad enclosures.",
          "Monitor bus voltage sag as indicator of weak facility supply or cap aging.",
        ],
      },
    ],
  }),

  article({
    slug: "igbt-in-wireless-power",
    title: "IGBT in Wireless Power",
    summary:
      "Where IGBTs still appear in wireless power and charging: low-frequency segments, high-power PFC, and boundaries versus MOSFETs.",
    sections: [
      {
        paragraphs: [
          "IGBTs dominate low-frequency high-power switching where MOSFET conduction loss would dominate. Most WPT coil inverters at 85–150 kHz use MOSFETs or wide bandgap devices — IGBTs appear in the dock AC/DC stage, pre-regulators, or legacy low-frequency IPT systems.",
          "Know the boundary: above roughly 20–40 kHz, IGBT switching loss typically favors unipolar devices for new WPT inverter designs.",
        ],
      },
      {
        heading: "Typical roles",
        bullets: [
          "Three-phase PFC or rectifier stages at line frequency modulation.",
          "Very high power motor-drive shared infrastructure feeding DC bus to WPT.",
          "Older kilohertz-range IPT installations still in field service.",
        ],
      },
      {
        heading: "Coexistence with WPT inverter",
        paragraphs: [
          "IGBT front end plus MOSFET WPT inverter is a common partition. Bus stability and harmonic content from the IGBT stage must be validated with WPT full load. Gate drive and protection for IGBT modules differ — separate service manuals for field teams.",
        ],
      },
      {
        heading: "Migration notes",
        bullets: [
          "Retrofit paths from IGBT IPT to SiC MOSFET WPT need new magnetics and EMC qualification.",
          "Do not assume IGBT short-circuit rating transfers to high-frequency tank fault scenarios.",
        ],
      },
    ],
  }),

  article({
    slug: "diode-selection",
    title: "Diode Selection",
    summary:
      "Choosing power diodes for WPT rectifiers, clamps, and snubbers: reverse voltage, recovery charge, and thermal reality.",
    sections: [
      {
        paragraphs: [
          "Diodes in wireless charging serve as output rectifiers, bootstrap clamps, snubber elements, and transient suppressors. Selection balances reverse voltage margin, average and surge current, forward drop, and reverse recovery charge Qrr.",
          "Fast recovery diodes trade lower Qrr against higher forward drop — synchronous rectification removes output diodes but not all diode functions.",
        ],
      },
      {
        heading: "Receiver rectifier diodes",
        bullets: [
          "Schottky where voltage allows for low VF — watch leakage at hot temperature.",
          "Ultrafast silicon for higher voltage receiver outputs.",
          "Parallel diodes only with matched sharing layout — rarely preferred over single larger die.",
        ],
      },
      {
        heading: "Clamp and snubber diodes",
        paragraphs: [
          "Must be rated for repetitive peak current in ringing networks. Soft recovery types sometimes reduce EMI at cost of snubber dissipation. Place close to the switch or transformer terminal they protect.",
        ],
      },
      {
        heading: "Qualification",
        bullets: [
          "Test reverse recovery under actual dI/dt from coil current, not datasheet alone.",
          "Thermal interface for rectifier heat sinking on compact AMR receivers.",
          "Spares catalog: diode failures often correlate with alignment abuse — log fleet events.",
        ],
      },
    ],
  }),

  article({
    slug: "snubber-circuits",
    title: "Snubber Circuits",
    summary:
      "RC, RCD, and active snubbers taming voltage overshoot on WPT switches when layout and resonance leave hard edges.",
    sections: [
      {
        paragraphs: [
          "Snubbers absorb or redirect energy from parasitic inductance ringing at turn-off or commutation. Even well-designed resonant docks use snubbers on auxiliary switches, clamp diodes, or during development when loop inductance exceeds target.",
          "Over-snubbing slows transitions and kills efficiency; under-snubbing risks avalanche and EMI.",
        ],
      },
      {
        heading: "Types",
        bullets: [
          "RC snubber across switch or transformer leakage — simple, dissipative.",
          "RCD clamp capturing energy to a cap then bleeding through resistor.",
          "Active clamp or regenerative snubbers — higher complexity, lower loss.",
        ],
      },
      {
        heading: "Tuning method",
        paragraphs: [
          "Measure ringing frequency and amplitude on prototype with minimal snubber, then add capacitance until damping is acceptable without excessive loss at full load. Temperature and bus voltage corners both matter.",
        ],
      },
      {
        heading: "Production discipline",
        bullets: [
          "Snubber component tolerance affects repeatability — specify and test.",
          "Remove development-only snubbers before cost-down unless margin requires them.",
          "Document snubber heat on thermal camera during soak test.",
        ],
      },
    ],
  }),

  article({
    slug: "bootstrap-gate-drive",
    title: "Bootstrap Gate Drive",
    summary:
      "High-side gate supply from a bootstrap diode and capacitor in half-bridge WPT inverters — refresh timing and reliability.",
    sections: [
      {
        paragraphs: [
          "Bootstrap drive charges a capacitor from the low-side supply through a diode while the low side is on, then floats that capacitor on the switching node to drive the high-side MOSFET. It is ubiquitous in half-bridge dock inverters for cost and simplicity.",
          "Bootstrap fails if the high-side on-time is too long without refresh, if the node sits at high voltage too long at startup, or if dV/dt on the node injects noise into the bootstrap pin.",
        ],
      },
      {
        heading: "Design rules",
        bullets: [
          "Size bootstrap cap for gate charge plus quiescent leakage per cycle.",
          "Limit maximum high-side duty or insert refresh pulses in control.",
          "Use low-leakage bootstrap diode rated for node voltage plus margin.",
        ],
      },
      {
        heading: "WPT specifics",
        paragraphs: [
          "Resonant operation may create long low-side off intervals — verify bootstrap voltage at light load and during certain phase angles. Multiple switching transitions per period can help or hurt refresh depending on modulation.",
        ],
      },
      {
        heading: "Alternatives",
        bullets: [
          "Isolated DC-DC for high-side when duty cycle or reliability demands.",
          "Charge pump auxiliaries on integrated gate driver ICs.",
        ],
      },
    ],
  }),

  article({
    slug: "isolated-gate-drivers",
    title: "Isolated Gate Drivers",
    summary:
      "Galvanically isolated drive for WPT bridge legs, floating synchronous rectifiers, and safety-separated control domains.",
    sections: [
      {
        paragraphs: [
          "Isolated gate drivers transfer control signals across a barrier using transformers, capacitors, or optical links while providing appropriate gate drive power on the floating side. Full-bridge WPT inverters with true floating high-side references and multi-kV safety partitions rely on them.",
          "Propagation delay and CMTI (common-mode transient immunity) must exceed switching node slew in harsh layouts.",
        ],
      },
      {
        heading: "Selection",
        bullets: [
          "CMTI rating above measured dV/dt on the switching node.",
          "Secondary-side UVLO and fault feedback to primary controller.",
          "Isolated bias supply or integrated power for secondary side.",
        ],
      },
      {
        heading: "Layout",
        paragraphs: [
          "Keep clearance between primary and secondary per isolation rating. Return path for gate current stays on the secondary side — do not route gate return across the isolation barrier on a single-layer board.",
        ],
      },
      {
        heading: "Dock applications",
        bullets: [
          "Safety-isolated control from operator-accessible service ports to power stage.",
          "Floating SR drive on receiver when topology requires it.",
          "Redundant drive channels in high-availability charging lanes.",
        ],
      },
    ],
  }),

  article({
    slug: "dead-time-design",
    title: "Dead-Time Design",
    summary:
      "Inserting intentional delay between complementary switch transitions to prevent shoot-through in WPT bridges.",
    sections: [
      {
        paragraphs: [
          "Dead time is the interval when both high-side and low-side switches are commanded off before the opposite device turns on. Too little dead time risks shoot-through; too much forces body-diode conduction and loses ZVS benefit in resonant designs.",
          "Dead time is not a single constant — it may vary with load, temperature, and device spread in production.",
        ],
      },
      {
        heading: "Setting dead time",
        bullets: [
          "Start from driver and MOSFET datasheet recommendations, then adjust on hardware.",
          "Account for driver propagation mismatch between high and low side.",
          "Extend dead time when bus voltage or temperature rises if shoot-through margin shrinks.",
        ],
      },
      {
        heading: "Resonant WPT interaction",
        paragraphs: [
          "During dead time, tank current freewheels through body diodes — reverse recovery when the switch turns on creates loss and EMI. Adaptive dead time algorithms use current polarity detection — validate across coupling range.",
        ],
      },
      {
        heading: "Testing",
        bullets: [
          "Scope both gate drives and switch-node voltage simultaneously.",
          "Production test for gross shoot-through — supply current spikes or fuse indicators.",
          "Document dead time register values in firmware release notes.",
        ],
      },
    ],
  }),

  article({
    slug: "shoot-through-protection",
    title: "Shoot-Through Protection",
    summary:
      "Preventing simultaneous conduction of bridge switches in dock inverters — hardware interlocks, driver features, and firmware guards.",
    sections: [
      {
        paragraphs: [
          "Shoot-through is a direct short across the DC bus through two switches in the same leg. Energy release is fast — enough to fuse bond wires or trip breakers. Wireless charging docks need layered protection because firmware bugs, noise, or brownout recovery can corrupt PWM commands.",
          "Protection combines dead time, driver interlocks, hardware desat detection, and supply monitoring.",
        ],
      },
      {
        heading: "Hardware layers",
        bullets: [
          "Gate driver interlock preventing overlapping outputs.",
          "Desaturation detection turning off switch on abnormal VDS.",
          "Fast fuse or breaker coordination — know let-through energy.",
        ],
      },
      {
        heading: "Firmware layers",
        paragraphs: [
          "Complementary PWM with enforced blanking interval. Safe state on fault — all gates off. Watchdog and clock failure must default to off, not last PWM pattern.",
        ],
      },
      {
        heading: "Commissioning",
        bullets: [
          "Intentionally marginal dead time on engineering unit to verify detection — not in field.",
          "Never bypass interlocks for “more power” experiments.",
          "Log shoot-through fault codes to fleet management for recurring dock IDs.",
        ],
      },
    ],
  }),

  article({
    slug: "dc-bus-design",
    title: "DC Bus Design",
    summary:
      "DC link architecture for WPT docks: voltage level, capacitance, pre-charge, and distribution to inverter modules.",
    sections: [
      {
        paragraphs: [
          "The DC bus is the energy reservoir and voltage reference for the WPT inverter. Bus voltage choice trades semiconductor stress, coil current capability, and compatibility with facility power conversion. Industrial docks commonly use 400 V class or lower for smaller pedestals.",
          "Bus design includes capacitors, pre-charge, fusing, discharge resistors, and distribution impedance to multiple inverter modules in lane configurations.",
        ],
      },
      {
        heading: "Capacitor bank",
        bullets: [
          "Bulk electrolytic for energy storage; film and ceramic for high-frequency ripple.",
          "ESR and ESL low enough that ripple does not modulate coil current detectably.",
          "Life rating for ambient inside pad — not 105 °C datasheet at 25 °C enclosure.",
        ],
      },
      {
        heading: "Safety and service",
        paragraphs: [
          "Pre-charge limits inrush when connecting to PFC or battery backup. Bleeder resistors or active discharge for technician safety after shutdown — with lockout verification. Clear labeling of bus voltage on enclosures.",
        ],
      },
      {
        heading: "Multi-module docks",
        bullets: [
          "Symmetric bus bars so paralleled inverters share current.",
          "Local cap at each module plus central bulk — model both.",
          "Isolate faulty module without collapsing entire lane bus.",
        ],
      },
    ],
  }),

  article({
    slug: "dc-link-capacitors",
    title: "DC Link Capacitors",
    summary:
      "Selecting and placing DC link capacitors for WPT inverter ripple, lifetime, and hot-spot current in charging docks.",
    sections: [
      {
        paragraphs: [
          "DC link capacitors absorb switching ripple and supply pulse current when the inverter draws from the bus. In WPT, pulse frequency includes switching frequency and beat components from load modulation — RMS current in caps can exceed naive estimates.",
          "Capacitor failure in a sealed floor pad is expensive — derate voltage and temperature aggressively.",
        ],
      },
      {
        heading: "Types",
        bullets: [
          "Aluminum electrolytic for bulk energy — watch ripple current rating and life hours.",
          "Film capacitors for high ripple and failure mode safety in some designs.",
          "Ceramic multi-layer at switch terminals for high-frequency current loops.",
        ],
      },
      {
        heading: "Placement",
        paragraphs: [
          "Minimize loop from cap terminals through switches and back. Multiple small ceramics often outperform one distant bulk cap for switching loop alone — bulk still needed for low-frequency energy.",
        ],
      },
      {
        heading: "Aging",
        bullets: [
          "Monitor bus ripple increase as ESR rises over years.",
          "Replace caps on preventive schedule in 24/7 AGV lanes.",
          "Venting electrolytics require mechanical clearance in pad design.",
        ],
      },
    ],
  }),

  article({
    slug: "input-emi-filter",
    title: "Input EMI Filter",
    summary:
      "Line-side filters on charging dock AC inputs: differential and common-mode attenuation for conducted emissions compliance.",
    sections: [
      {
        paragraphs: [
          "Input EMI filters sit between facility AC and the dock PFC or rectifier, attenuating conducted emissions at switching harmonics and WPT-related sidebands coupled back to the line. Filter design must consider source impedance from the grid and load impedance from PFC — mismatch can cause gain peaks.",
          "Filters are not plug-and-play catalog parts at multi-kW — validate on the integrated dock.",
        ],
      },
      {
        heading: "Components",
        bullets: [
          "Common-mode chokes on line and neutral.",
          "X capacitors for differential mode; Y capacitors for common-mode — leakage limits touch current.",
          "Optional damping to avoid resonance with long supply cables.",
        ],
      },
      {
        heading: "Installation",
        paragraphs: [
          "Filter input side faces the grid; output toward PFC. Keep filter to PFC wiring short and separated from WPT coil cables inside the pedestal. Ground bond per EMC plan — floating filter grounds cause mystery failures.",
        ],
      },
      {
        heading: "Maintenance",
        bullets: [
          "Y cap failure increases touch leakage — include in periodic safety checks.",
          "Document approved filter replacements — generic filters may detune compliance.",
        ],
      },
    ],
  }),

  article({
    slug: "common-mode-chokes",
    title: "Common-Mode Chokes",
    summary:
      "Common-mode inductors in dock EMI filters and on DC cables — impedance versus frequency and saturation under imbalance.",
    sections: [
      {
        paragraphs: [
          "Common-mode chokes use coupled windings so equal currents on line and return cancel flux in the core, while common-mode currents see high inductance. They are central to both AC input filters and DC output filters on long cables from pedestal to floor pad.",
          "Core material sets effective bandwidth — nanocrystalline and ferrite mixes dominate industrial EMI.",
        ],
      },
      {
        heading: "Design parameters",
        bullets: [
          "Inductance at target frequency band for standard being tested.",
          "Saturation current if differential imbalance exists under fault.",
          "Inter-winding capacitance limiting high-frequency performance.",
        ],
      },
      {
        heading: "WPT cable routing",
        paragraphs: [
          "DC feeds to floor pads should pair positive and negative conductors through the same CM choke when emissions on long buried cables fail limits. Coil leakage can drive common-mode on DC — chokes at both ends may be needed.",
        ],
      },
      {
        heading: "Pitfalls",
        bullets: [
          "Mounting steel screws through choke cores can shift L and saturate locally.",
          "Parallel chokes without design intent can resonate — one designed stage preferred.",
        ],
      },
    ],
  }),

  article({
    slug: "pcb-layout-for-power",
    title: "PCB Layout for Power",
    summary:
      "Power PCB layout for WPT receivers and compact dock controllers: loops, copper weight, clearance, and sensing placement.",
    sections: [
      {
        paragraphs: [
          "PCB layout determines parasitic inductance and resistance that schematics ignore. At WPT frequencies, a few nanohenries in the switch loop changes overshoot, EMI, and measured efficiency. Receiver boards under AMR bellies have size constraints — every millimeter of loop area counts.",
          "Layout is not artwork routing — it is part of the power circuit.",
        ],
      },
      {
        heading: "Priorities",
        bullets: [
          "Minimize switch loop: FET, bus cap, tank connection on one copper layer pair.",
          "Heavy copper or bus bars for high current paths; many vias for current sharing.",
          "Kelvin sense connections off main current path for control and protection.",
        ],
      },
      {
        heading: "Isolation and clearance",
        paragraphs: [
          "Creepage and clearance for safety isolation barriers. Slotting under isolation partitions. Keep high dV/dt nodes away from sensitive analog and communication traces — use shields or cuts in planes.",
        ],
      },
      {
        heading: "Manufacturing",
        bullets: [
          "Panelization that does not weaken high-current copper.",
          "Solder mask defined pads versus copper defined — specify for high current.",
          "Revision control on copper pour changes — they are electrical changes.",
        ],
      },
    ],
  }),

  article({
    slug: "current-sensing",
    title: "Current Sensing",
    summary:
      "Measuring coil, bus, and battery current in wireless charging for control, protection, and efficiency mapping.",
    sections: [
      {
        paragraphs: [
          "Current sensing closes power control loops, triggers overcurrent protection, and feeds fleet telemetry. WPT systems sense DC bus input, resonant tank current, and output charge current — each with different bandwidth and common-mode requirements.",
          "Wrong sense placement or layout makes control unstable or protection blind.",
        ],
      },
      {
        heading: "Methods",
        bullets: [
          "Shunt resistors with differential amplifiers — simple, accurate at DC and low frequency.",
          "Rogowski or current transformers for high-frequency tank current without insertion loss.",
          "Hall sensors for galvanic isolation — watch offset drift and bandwidth.",
        ],
      },
      {
        heading: "Layout rules",
        paragraphs: [
          "Kelvin connection to shunt. Filter noise without killing phase margin in current loop. Separate analog ground return from power switch return except at defined star point.",
        ],
      },
      {
        heading: "Fleet use",
        bullets: [
          "Calibrate offset and gain in production — log serial correlation.",
          "Use charge current accuracy for billing or SOC estimation disclaimers.",
          "Detect abnormal tank current patterns indicating misalignment or foreign objects.",
        ],
      },
    ],
  }),

  article({
    slug: "voltage-sensing",
    title: "Voltage Sensing",
    summary:
      "Monitoring DC bus, coil, and battery voltage in WPT systems for regulation, synchronization, and overvoltage protection.",
    sections: [
      {
        paragraphs: [
          "Voltage sensing provides feedback for PFC, inverter modulation, SR timing, and protection thresholds. High-frequency common-mode voltage on the switching node demands dividers and amplifiers rated for the environment or measurement on the isolated side.",
          "Accuracy at light load matters for end-of-charge taper on AGV batteries.",
        ],
      },
      {
        heading: "Techniques",
        bullets: [
          "Resistive dividers with filtering for DC bus and battery.",
          "Isolated amplifiers or optocoupler sigma-delta for high common-mode environments.",
          "Peak detectors or ADC synchronized to switching for waveform analysis in development.",
        ],
      },
      {
        heading: "Calibration",
        paragraphs: [
          "Account for divider tolerance and temperature coefficient in charge voltage accuracy specs. BMS on vehicle may disagree with receiver sense — define which measurement is authoritative for wireless power limit.",
        ],
      },
      {
        heading: "Protection linkage",
        bullets: [
          "Hardware comparators for fast OVP independent of firmware.",
          "Coordinated shutdown with transmitter when receiver reports overvoltage.",
          "Log OVP events with alignment metadata for root cause.",
        ],
      },
    ],
  }),

  article({
    slug: "overcurrent-protection",
    title: "Overcurrent Protection",
    summary:
      "Limiting fault and overload current in dock inverters and vehicle receivers during shorts, misalignment, and BMS faults.",
    sections: [
      {
        paragraphs: [
          "Overcurrent protection prevents device destruction and fire when the receiver shorts, coupling surges, or control demands excessive coil current. Layers include hardware comparators, driver fault pins, fuse coordination, and firmware foldback.",
          "WPT adds ambiguity — inrush into resonant tank can look like fault without proper blanking.",
        ],
      },
      {
        heading: "Settings",
        bullets: [
          "Peak trip for instantaneous shoot-through or dead short.",
          "Average or RMS limit for sustained overload during misalignment.",
          "Coordination with transmitter power control when receiver requests reduction.",
        ],
      },
      {
        heading: "Timing",
        paragraphs: [
          "Blanking during known inrush events at startup. Different limits during pre-alignment communication versus full power. Latch versus retry policy — AGV docks often auto-retry once after cooldown.",
        ],
      },
      {
        heading: "Validation",
        bullets: [
          "Fault injection on production units: output short, partial short, saturated control.",
          "Verify fuse or breaker does not nuisance-trip on normal docking transient.",
        ],
      },
    ],
  }),

  article({
    slug: "overvoltage-protection",
    title: "Overvoltage Protection",
    summary:
      "Protecting WPT receivers and dock buses when coupling spikes, load disconnect, or grid events raise voltage beyond safe limits.",
    sections: [
      {
        paragraphs: [
          "Overvoltage on the receiver occurs when coil open-circuits briefly, misalignment peaks voltage, or BMS opens contactor while current flows. On the dock, PFC or grid events can raise DC bus. Clamps, TVS, crowbars, and control shutdown each play roles.",
          "OVP must be faster than device avalanche rating cumulative energy.",
        ],
      },
      {
        heading: "Receiver strategies",
        bullets: [
          "TVS or clamp on rectifier output sized for energy in leakage inductance.",
          "Active reduction of transmitter power via communication when voltage rises.",
          "SR and capacitor voltage ratings with margin for ring, not average.",
        ],
      },
      {
        heading: "Dock strategies",
        paragraphs: [
          "Bus OVP lockout on PFC overvoltage or regen from connected vehicles if bi-directional paths exist. Crowbar last resort — know maintenance reset procedure.",
        ],
      },
      {
        heading: "Testing",
        bullets: [
          "Unload receiver during full charge current.",
          "Verify clamp survival count for repeated AGV disconnect events.",
        ],
      },
    ],
  }),

  article({
    slug: "soft-start",
    title: "Soft Start",
    summary:
      "Controlled ramp-up of bus voltage and coil power when AGVs dock to limit inrush, EMI, and mechanical stress on contactors.",
    sections: [
      {
        paragraphs: [
          "Soft start gradually increases DC bus voltage or inverter modulation so inrush current into capacitors and resonant tanks stays bounded. For wireless docking, soft start also covers the protocol phase before full power — alignment, ID exchange, then controlled power ramp.",
          "Hard enable into an unloaded resonant tank produces high ringing and can nuisance-trip protection.",
        ],
      },
      {
        heading: "Implementation",
        bullets: [
          "PFC soft-start on duty or current limit.",
          "Inverter frequency or phase sweep before full power — common in LLC and WPT literature.",
          "Pre-charge resistors bypassed by relay on DC bus where used.",
        ],
      },
      {
        heading: "User experience",
        paragraphs: [
          "Ramp rate balances fleet throughput against stress — too slow extends charge session; too fast repeats failures on weak grid sites. Log ramp failures separately from runtime faults.",
        ],
      },
      {
        heading: "Coordination",
        bullets: [
          "BMS must accept inrush during ramp without opening contactor.",
          "Transmitter and receiver ramp together per communication profile.",
        ],
      },
    ],
  }),

  article({
    slug: "efficiency-mapping",
    title: "Efficiency Mapping",
    summary:
      "Measuring and documenting dock-to-battery efficiency across power, alignment, and temperature for AGV fleet economics.",
    sections: [
      {
        paragraphs: [
          "Efficiency mapping builds a surface of input to output power ratio versus load, coupling, and environmental conditions. Customers compare wireless to conductive charging on kWh cost — maps must include PFC, inverter, coil, rectifier, and post-regulation.",
          "Single-point peak efficiency marketing misleads fleet operators whose robots charge at partial alignment daily.",
        ],
      },
      {
        heading: "Measurement setup",
        bullets: [
          "Precision power analyzers on AC input and DC output to battery.",
          "Defined alignment fixtures for min, nominal, max k positions.",
          "Soak until thermal steady state before recording each point.",
        ],
      },
      {
        heading: "Presentation",
        paragraphs: [
          "Contour plots of efficiency versus power and misalignment. Separate maps for ambient temperature corners if derating is significant. Include idle and standby loss for opportunity charging duty cycles.",
        ],
      },
      {
        heading: "Use in product",
        bullets: [
          "Set transmitter power limits where efficiency drops below business threshold.",
          "Guide coil redesign priorities from loss breakdown at worst map corner.",
        ],
      },
    ],
  }),

  article({
    slug: "loss-breakdown-analysis",
    title: "Loss Breakdown Analysis",
    summary:
      "Partitioning total wireless charging loss among semiconductors, magnetics, rectification, and control overhead.",
    sections: [
      {
        paragraphs: [
          "Loss breakdown analysis assigns watts to each subsystem so improvement efforts target the largest contributors. Methods include calorimetry, electrical calculation from measured waveforms, and incremental substitution of known-efficient components.",
          "Without breakdown, teams over-optimize switching loss while conduction loss dominates at fleet operating point.",
        ],
      },
      {
        heading: "Categories",
        bullets: [
          "PFC and input filter loss.",
          "Inverter switching and conduction loss.",
          "Coil copper and ferrite core loss.",
          "Receiver rectifier or SR loss.",
          "Control and auxiliary supply overhead.",
        ],
      },
      {
        heading: "Process",
        paragraphs: [
          "Measure at nominal and worst-case alignment. Use thermal camera to cross-check calculated device loss. Document assumptions for magnetics loss when direct measurement is impractical.",
        ],
      },
      {
        heading: "Action",
        bullets: [
          "Prioritize redesign where marginal improvement times fleet kWh is largest.",
          "Track breakdown revision to revision in product change records.",
        ],
      },
    ],
  }),

  article({
    slug: "heatsink-and-cooling",
    title: "Heatsink and Cooling",
    summary:
      "Heatsinks, heat pipes, and forced cooling for dock inverters and receiver electronics in industrial environments.",
    sections: [
      {
        paragraphs: [
          "Heatsinks spread heat from device cases to air or enclosure surfaces. Floor pads may use aluminum spreaders into the pad plate; pedestal docks use finned heatsinks with fans. AMR receivers often rely on vehicle structure as heat sink with limited airflow.",
          "Thermal interface material quality and mounting pressure repeatability dominate field performance.",
        ],
      },
      {
        heading: "Design choices",
        bullets: [
          "Natural convection for sealed pads — derate power or use heat spreading into concrete-safe materials.",
          "Forced air with filters for dusty warehouses — maintenance schedule mandatory.",
          "Heat pipes when remote fin stack improves service access.",
        ],
      },
      {
        heading: "Integration",
        paragraphs: [
          "Model heat path from FET case to ambient including TIM and contact to pad cover. Fan failure must trigger derating or shutdown before junction limit — do not rely on operator hearing fan noise.",
        ],
      },
      {
        heading: "Field notes",
        bullets: [
          "Replace TIM on module swap — do not reuse dried paste.",
          "Blocked fan inlet from floor debris is common failure — design guards.",
        ],
      },
    ],
  }),

  article({
    slug: "parasitic-inductance",
    title: "Parasitic Inductance",
    summary:
      "Unintended inductance in WPT power loops — layout, packages, and connectors that cause ringing and EMI.",
    sections: [
      {
        paragraphs: [
          "Parasitic inductance in switch loops, DC bus, and rectifier connections stores energy that rings at turn-off. It scales with loop area and path length — the enemy of clean waveforms in compact receiver boards and floor pad modules.",
          "A schematic with ideal wires hides nanohenries that push VDS beyond rating.",
        ],
      },
      {
        heading: "Sources",
        bullets: [
          "Long traces between cap and FET, or FET and coil terminal.",
          "Connector pins and wire bonds in package.",
          "Asymmetric return path forcing current around large loops.",
        ],
      },
      {
        heading: "Mitigation",
        paragraphs: [
          "Co-locate components; use plane returns; parallel vias; optional snubber only after minimizing L. Measure loop inductance with impedance analyzer or step response.",
        ],
      },
      {
        heading: "WPT impact",
        bullets: [
          "Ringing detunes effective tank behavior sensed by control.",
          "EMI peaks at ring frequency — filter may not help if source L is large.",
        ],
      },
    ],
  }),

  article({
    slug: "switching-node-design",
    title: "Switching Node Design",
    summary:
      "Engineering the switch node connecting inverter to resonant tank — voltage stress, probing, and layout for WPT docks.",
    sections: [
      {
        paragraphs: [
          "The switching node is the connection between bridge output and resonant network — highest dV/dt and current in the inverter. Its layout defines loop inductance, probe accessibility, and proximity to sensitive circuits.",
          "In wireless charging, the node often feeds series or parallel compensation capacitors and the coil — impedance at this point is the heart of soft switching.",
        ],
      },
      {
        heading: "Layout principles",
        bullets: [
          "Short wide copper to tank capacitors and coil leads.",
          "No sense traces crossing node copper on same layer.",
          "Shield or distance for communication cables near pad interior.",
        ],
      },
      {
        heading: "Measurement",
        paragraphs: [
          "Use differential probes with short grounds — ground clip inductance lies about ring amplitude. Fiber-isolated scope for floating node on high-voltage docks.",
        ],
      },
      {
        heading: "Mechanical",
        bullets: [
          "Coil terminal bolts torque-specified — loose joint adds resistance and micro-arcing.",
          "Strain relief on coil leads so vibration does not crack solder at node.",
        ],
      },
    ],
  }),

  article({
    slug: "power-electronics-checklist",
    title: "Power Electronics Checklist",
    summary:
      "Design and validation checklist for industrial wireless charging power electronics before fleet deployment.",
    sections: [
      {
        paragraphs: [
          "Use a structured checklist so dock and vehicle power stages do not ship with gaps in protection, EMC, or thermal margin. The list below summarizes classic gate items for AGV/AMR wireless power programs — adapt to your voltage class and regional codes.",
        ],
      },
      {
        heading: "Design phase",
        bullets: [
          "Topology and device selection documented with loss budget across alignment window.",
          "DC bus, pre-charge, discharge, and fuse coordination defined.",
          "Gate drive, dead time, and shoot-through protection verified on worst spread samples.",
          "Current and voltage sense placement validated for control and protection bandwidth.",
        ],
      },
      {
        heading: "Validation phase",
        bullets: [
          "Efficiency map at min, nominal, max coupling and temperature corners.",
          "EMC pre-compliance and immunity per install class.",
          "Thermal soak at nameplate duty inside final enclosure.",
          "Fault matrix: OC, OV, OT, grid loss, comm loss, misalignment, foreign object if applicable.",
        ],
      },
      {
        heading: "Production and field",
        paragraphs: [
          "Production test limits for key waveforms or power metrics. Service documentation for bus discharge, filter replacement, and firmware safe states. Fleet logging of faults tied to dock ID and alignment statistics for continuous improvement.",
        ],
      },
      {
        heading: "Sign-off",
        bullets: [
          "Cross-functional review: power, magnetics, firmware, safety, manufacturing.",
          "Change control for any post-qualification BOM or layout edit.",
          "Spares and obsolescence plan for semiconductors on multi-year AMR contracts.",
        ],
      },
    ],
  }),
];
