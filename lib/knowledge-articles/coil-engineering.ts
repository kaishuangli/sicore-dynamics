import type { KnowledgeArticle } from "@/lib/knowledge-articles/types";

const categoryId = "coil-engineering";

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

/** Collection 03 — Coil Engineering */
export const coilEngineeringArticles: readonly KnowledgeArticle[] = [
  article({
    slug: "coil-fundamentals",
    title: "Coil Fundamentals",
    summary:
      "Core coil physics for wireless power: inductance, flux linkage, and how geometry sets the magnetic link in dock charging.",
    sections: [
      {
        paragraphs: [
          "A wireless power coil is an intentional inductor shaped to couple magnetic flux across an air gap. Current in the transmitter winding creates a time-varying magnetic field; the receiver winding intercepts a fraction of that flux and converts it back to voltage. Inductance L, mutual inductance M, and coupling k = M/√(L1L2) are the quantities that connect geometry to circuit behavior.",
          "For industrial AGV and AMR docks, coil design is not an afterthought to the inverter. The coil sets gap tolerance, alignment sensitivity, leakage to nearby steel, and the reactive energy stored in the tank. A 10 kW dock with poor coil engineering will run hot, detune easily, and fail EMC even if the power stage is excellent.",
        ],
      },
      {
        heading: "What the coil must deliver",
        bullets: [
          "Target inductance and k range across the docking envelope (gap, lateral offset, yaw).",
          "Acceptable AC resistance at operating frequency — not just DC ohms.",
          "Controlled leakage flux so chassis, fasteners, and foreign metal do not steal or distort the field.",
          "Mechanical stability under vibration, thermal expansion, and repeated docking cycles.",
        ],
      },
      {
        heading: "Design flow",
        paragraphs: [
          "Start from power, frequency, gap, and coil footprint allowed by the vehicle and floor pad. Estimate L and k with analytical or FEM tools, then iterate conductor sizing, turns, ferrite, and shielding. Validate with impedance measurements on representative fixtures — not a bare coil on a wooden bench.",
        ],
      },
      {
        heading: "Common mistakes",
        bullets: [
          "Specifying only DC resistance or turns count without frequency-dependent loss.",
          "Optimizing peak k at perfect alignment while the fleet spends most time slightly misaligned.",
          "Ignoring self-inductance drift when ferrite saturates or heats.",
          "Treating the receiver and transmitter coils as independent parts instead of a coupled system.",
        ],
      },
    ],
  }),

  article({
    slug: "spiral-coil",
    title: "Spiral Coil",
    summary:
      "Planar spiral windings for WPT pads: inductance scaling, field shape, and when a spiral fits AGV dock footprints.",
    sections: [
      {
        paragraphs: [
          "A spiral coil winds conductor outward from a center tap or continuous trace in the plane of the pad. In wireless power, spirals are the default geometry for floor-mounted transmitters and thin receiver packs because they pack inductance into a flat disc and produce a well-defined flux pattern normal to the surface.",
          "Inductance scales roughly with turns squared times effective area, but spirals also increase inter-turn capacitance and proximity coupling between inner and outer turns. At tens to hundreds of kilohertz, those effects shift self-resonance and AC resistance — the spiral is not just a line on a drawing.",
        ],
      },
      {
        heading: "Advantages for docks",
        bullets: [
          "Flat profile for floor pads and under-vehicle receivers.",
          "Predictable central flux peak useful for circular alignment guides.",
          "Compatible with PCB, litz, or round-wire winding on a bobbin.",
          "Easy to combine with ferrite tiles behind the winding.",
        ],
      },
      {
        heading: "Design notes",
        paragraphs: [
          "Inner turns carry higher current density and see stronger proximity effect — do not assume uniform loss per turn. For large spirals, consider where to place the tap and return path so the current path does not create a net field cancelation. Simulation or measurement of the full spiral with return conductor is mandatory before freezing artwork.",
        ],
      },
      {
        heading: "When to choose something else",
        bullets: [
          "Very elongated pads may favor rectangular or DD shapes for better lateral k.",
          "Multi-coil arrays when a single spiral cannot cover the alignment window.",
          "3D solenoid segments when vertical gap dominates and planar area is limited.",
        ],
      },
    ],
  }),

  article({
    slug: "dd-coil",
    title: "DD Coil",
    summary:
      "Double-D coil geometry for lateral misalignment tolerance — two overlapping D windings and their flux patterns.",
    sections: [
      {
        paragraphs: [
          "A DD (double-D) coil uses two D-shaped windings placed side by side with opposing or complementary current directions to shape the magnetic field. The goal is a coupling profile that degrades more gently under lateral offset than a single circular spiral, which is why DD pads appear in automotive and industrial WPT where the receiver may slide along one axis during docking.",
          "DD coils trade a more complex winding and ferrite layout for an extended usable coupling region. They are not automatically better in all directions — offset along the seam between the two Ds can behave differently from offset perpendicular to it.",
        ],
      },
      {
        heading: "Benefits in AGV/AMR docking",
        bullets: [
          "Wider lateral tolerance along the pad long axis when oriented correctly.",
          "Ability to steer flux upward with ferrite back-plate and flux guides.",
          "Often paired with magnetic alignment features on the vehicle approach.",
        ],
      },
      {
        heading: "Engineering challenges",
        paragraphs: [
          "Balancing the two D legs so current shares evenly — imbalance shifts the field null and hurts k. Ferrite must be cut and gapped to follow the DD outline without excessive fringing at the center seam. FEM validation of k(x,y) across the full dock envelope is standard practice for DD designs.",
        ],
      },
      {
        heading: "Integration tips",
        bullets: [
          "Align DD long axis with the direction of largest expected positional error.",
          "Document orientation on the pad housing — installing a DD pad rotated 90° silently breaks fleet performance.",
          "Pair with control that does not assume symmetric coupling when estimating power capability.",
        ],
      },
    ],
  }),

  article({
    slug: "circular-coil",
    title: "Circular Coil",
    summary:
      "Round WPT coils: symmetric coupling maps, ferrite discs, and typical use on rotary-aligned docks.",
    sections: [
      {
        paragraphs: [
          "Circular coils — single spirals or concentric windings on a round former — produce nominally axisymmetric flux when centered. They are straightforward to manufacture, easy to seat in round housings, and work well when docking constrains rotation or uses a central pin/cone for repeatable alignment.",
          "Coupling falls off with lateral offset in a roughly rotationally symmetric pattern. That symmetry simplifies specification: one misalignment curve often suffices instead of separate X and Y behavior.",
        ],
      },
      {
        heading: "Where circular coils fit",
        bullets: [
          "Pin-guided or conical self-centering AGV docks.",
          "Compact receiver discs on the vehicle belly.",
          "Applications where yaw is fixed or limited to small angles.",
        ],
      },
      {
        heading: "Design parameters",
        paragraphs: [
          "Outer diameter sets flux capture area and typically dominates inductance for a given turn count. Inner diameter (or center clearance) affects field peaking and whether a central magnet or alignment feature can pass through. For high power, verify that inner turns do not exceed current density limits after proximity and skin effects.",
        ],
      },
      {
        heading: "Limits",
        bullets: [
          "Poor lateral tolerance compared to DD or multi-coil arrays when yaw and offset combine.",
          "Round footprint may waste floor space on rectangular vehicles.",
          "Edge fringing without ferrite can couple into nearby steel rails.",
        ],
      },
    ],
  }),

  article({
    slug: "rectangular-coil",
    title: "Rectangular Coil",
    summary:
      "Rectangular and racetrack windings for elongated pads and vehicles with limited round footprint area.",
    sections: [
      {
        paragraphs: [
          "Rectangular coils fill oblong pad openings common on narrow AGV paths and slot-shaped receiver bays. A racetrack (rounded rectangle) reduces sharp corner field crowding compared to a sharp-edged rectangle while still matching the vehicle geometry.",
          "Inductance and field uniformity depend on aspect ratio. Long thin rectangles concentrate flux along the long edges; corners contribute less usefully to central coupling unless ferrite guides the path.",
        ],
      },
      {
        heading: "Applications",
        bullets: [
          "Floor strips or narrow charging bays in warehouse aisles.",
          "Receiver packs aligned with the vehicle frame rails.",
          "Multi-pad lanes where several rectangular segments tile a lane.",
        ],
      },
      {
        heading: "Design guidance",
        paragraphs: [
          "Use rounded corners or filleted traces on PCB coils to reduce high current density spots. Place ferrite tiles to close the flux path behind the straight sections first — corners are where leakage and mechanical stress concentrate. Measure k for offset along both long and short axes; rectangular coils are inherently anisotropic.",
        ],
      },
      {
        heading: "Watchouts",
        bullets: [
          "Higher inter-turn capacitance on long outer legs can lower self-resonance.",
          "Mechanical winding tension varies on straight vs curved sections — consistency affects L repeatability.",
          "Asymmetric misalignment can excite different eddy-current patterns in nearby steel.",
        ],
      },
    ],
  }),

  article({
    slug: "multi-coil-array",
    title: "Multi-Coil Array",
    summary:
      "Arrays of coils switched or phased for extended coverage — trade-offs for large docking zones.",
    sections: [
      {
        paragraphs: [
          "A multi-coil array places several windings on one pad and energizes one or more based on receiver position. For AMR fleets with variable stop points, arrays extend the region where k stays above a minimum without building one enormous coil with poor empty-pad loss.",
          "Arrays add electronics: selection switches, sometimes independent inverters per segment, and detection to choose the active coil. The magnetics problem becomes coupled with sensing and thermal management per segment.",
        ],
      },
      {
        heading: "Operating strategies",
        bullets: [
          "Single active coil: simplest control, good when position sensing is reliable.",
          "Overlapping excitation: smoother k map, higher control complexity.",
          "Master/slave segments: one primary tank with auxiliary coils tuned for local boost.",
        ],
      },
      {
        heading: "Design considerations",
        paragraphs: [
          "Mutual inductance between array elements matters — an idle neighbor coil can load the active one through coupling unless it is open-circuited or detuned. Layout must minimize cross-talk while maintaining coverage. Document maintenance: a failed segment in an array can skew field maps in non-obvious ways.",
        ],
      },
      {
        heading: "Fleet perspective",
        bullets: [
          "Commissioning includes per-segment identification and position calibration.",
          "Spares strategy must cover segment modules, not only the full pad.",
          "EMI testing with different active segments — worst case is not always the center coil.",
        ],
      },
    ],
  }),

  article({
    slug: "three-dimensional-coil",
    title: "Three-Dimensional Coil",
    summary:
      "Coils that use volume — solenoid segments, bent windings, and flux paths out of the plane for tight envelopes.",
    sections: [
      {
        paragraphs: [
          "Three-dimensional coils depart from a single flat spiral by winding in height, wrapping around ferrite cores, or combining planar and vertical sections. They appear when the receiver must fit between structural members, when gap height is large relative to pad area, or when flux must be redirected around obstacles on the vehicle.",
          "3D geometry increases manufacturing variance. Each bend adds length tolerance stack-up and changes local proximity effects. Simulation burden rises because analytical inductance formulas for flat spirals no longer apply.",
        ],
      },
      {
        heading: "Use cases",
        bullets: [
          "Low-clearance AGV bellies with recessed ferrite cores.",
          "Side-flux or angled docking where the coupling axis is not vertical.",
          "High-gap industrial transfers needing more turns in a constrained diameter.",
        ],
      },
      {
        heading: "Engineering approach",
        paragraphs: [
          "Model in 3D FEM with the full current path including returns. Prototype with potting fixtures that preserve wire spacing in the vertical sections — vibration can let turns slide and shift L. Validate thermal paths: vertical sections may sit farther from the heat sink than the base plate.",
        ],
      },
      {
        heading: "Risks",
        bullets: [
          "Higher unit cost and lower repeatability than planar PCB or flat litz pads.",
          "Mechanical impact during docking can deform 3D formers.",
          "Inspection is harder — hidden turn damage under potting.",
        ],
      },
    ],
  }),

  article({
    slug: "litz-wire",
    title: "Litz Wire",
    summary:
      "Stranded litz conductors for reducing AC loss in high-frequency WPT coils at kilowertz to megahertz scales.",
    sections: [
      {
        paragraphs: [
          "Litz wire bundles many fine insulated strands so each strand carries a fraction of the current, reducing skin-effect losses when strand diameter is small compared to skin depth at the operating frequency. Proper litz also uses optimized twisting (often Rutherford or bundled constructions) to balance proximity effect between strands.",
          "For multi-kW docks in the 80–300 kHz class, litz is often the difference between a coil that stays below temperature limits and one that requires derating after a few minutes of charge.",
        ],
      },
      {
        heading: "Selection parameters",
        bullets: [
          "Operating frequency and required strand diameter (typically < skin depth / √N).",
          "Construction: number of bundles, twist pitch, outer diameter for winding bend radius.",
          "Insulation class and potting compatibility — some varnishes fail under epoxy chemistry.",
          "Termination: solder pots, ultrasonic weld, or crimp — bad terminations dominate loss.",
        ],
      },
      {
        heading: "Practical notes",
        paragraphs: [
          "Litz is not free inductance — packing factor lowers fill compared to solid wire, which may require more turns or larger area for the same L. Cost and lead time exceed round magnet wire; specify vendor repeatability for fleet builds. Measure AC resistance with an impedance analyzer, not a DC micro-ohmmeter.",
        ],
      },
      {
        heading: "When solid wire still wins",
        bullets: [
          "Very low frequency or low power where skin depth exceeds wire diameter.",
          "Single-turn or thick-foil planar designs where PCB or copper sheet is simpler.",
          "Prototypes where litz lead time blocks the program — with eyes open on thermal limits.",
        ],
      },
    ],
  }),

  article({
    slug: "ferrite-materials",
    title: "Ferrite Materials",
    summary:
      "Ferrite grades for WPT back-plates: permeability, loss tangent, saturation, and temperature behavior.",
    sections: [
      {
        paragraphs: [
          "Soft ferrites in wireless power act as flux guides behind coils, increasing effective permeability of the path and reducing fringing into air and nearby conductors. Material choice (MnZn vs NiZn families, specific vendor grades) sets core loss, Curie temperature, and how much flux density the tile can carry before saturation detunes the coil.",
          "Ferrite is not inert — it heats from hysteresis and eddy currents (especially in sintered tiles with grain structure). A pad running 24/7 on an AGV lane must budget core loss at worst-case alignment and ambient.",
        ],
      },
      {
        heading: "Grade selection factors",
        bullets: [
          "Operating frequency vs datasheet loss curves — do not use 100 kHz data at 150 kHz without verification.",
          "Flux density headroom under max current and min gap (highest k).",
          "Temperature coefficient of permeability affecting L drift.",
          "Mechanical: tile size, gapping, brittleness in dock impacts.",
        ],
      },
      {
        heading: "Implementation",
        paragraphs: [
          "Tiles are often cut with gaps to limit eddy paths and thermal cracking. Adhesive and potting must match thermal expansion — ferrite cracks silently and changes permeability. Keep ferrite within vendor storage/handling rules; chipped edges concentrate flux and local heating.",
        ],
      },
      {
        heading: "Alternatives and hybrids",
        bullets: [
          "Nanocrystalline tapes for higher Bsat in some receiver volumes.",
          "Air-only coils where ferrite would saturate or metal debris sticks to the pad.",
          "Hybrid stacks: ferrite near the coil, steel shield farther back — model carefully for eddy loss.",
        ],
      },
    ],
  }),

  article({
    slug: "magnetic-shielding",
    title: "Magnetic Shielding",
    summary:
      "Containing stray flux with shields and back-plates — reducing EMI, chassis heating, and unintended coupling.",
    sections: [
      {
        paragraphs: [
          "Magnetic shielding in WPT redirects leakage flux away from sensitive areas: vehicle electronics, steel frames, operator-accessible surfaces, and neighboring pads. Shields may be ferrite back-plates, aluminum or copper plates (eddy-current shields), or laminated silicon steel depending on frequency and loss budget.",
          "A shield always interacts with the coil — it lowers self-inductance, changes k, and can add loss if conductive shields are too close or too thick without analysis.",
        ],
      },
      {
        heading: "Shield types",
        bullets: [
          "Ferrite back-plate: guides flux, adds inductance, limited saturation headroom.",
          "Conductive sheet: reflects flux via eddy currents; frequency-dependent penetration depth.",
          "Hybrid ferrite + aluminum: common in receivers to protect battery enclosure electronics.",
        ],
      },
      {
        heading: "Design rules",
        paragraphs: [
          "Place shields on the non-coupling side of the coil when possible. Maintain minimum air gaps between coil and conductive shield to control capacitance and loss. Validate with and without the vehicle chassis present — the dock alone is not the full system.",
        ],
      },
      {
        heading: "Failure modes",
        bullets: [
          "Saturated ferrite shield acts like air suddenly — detuning during high-power sessions.",
          "Loose steel shields vibrating in the field — audible noise and intermittent loss.",
          "Corrosion or fasteners penetrating shield continuity creating slot antennas.",
        ],
      },
    ],
  }),

  article({
    slug: "coil-alignment",
    title: "Coil Alignment",
    summary:
      "Mechanical and magnetic alignment features that keep transmitter and receiver coils co-registered in production docks.",
    sections: [
      {
        paragraphs: [
          "Coil alignment is the physical registration of transmitter and receiver windings so coupling stays within the designed k window. Wireless power cannot fully software-correct a coil that is centimeters out of overlap — alignment is a mechanical, sensing, and sometimes active guidance problem.",
          "Industrial docks combine mechanical guides (cones, V-grooves, floor markers), vehicle positioning (LiDAR, magnetic tape), and coil-centric features (ferrite pegs, asymmetric pad shapes) to repeat alignment across thousands of cycles.",
        ],
      },
      {
        heading: "Alignment specifications",
        bullets: [
          "Define allowable offset (X, Y), gap (Z), yaw, pitch, roll for full power.",
          "Separate 'charge OK' from 'full power' zones for fleet analytics.",
          "Include wear: guide roller diameter shrinkage shifts stop position over years.",
        ],
      },
      {
        heading: "Coil-level tactics",
        paragraphs: [
          "Shape the pad and receiver footprints so gross misalignment is visually obvious during install. Use asymmetric bolt patterns to prevent 180° rotation errors. Document coil center relative to mechanical datums on drawings — installers align housings, not copper.",
        ],
      },
      {
        heading: "Verification",
        bullets: [
          "Golden vehicle or fixture with known coil position for end-of-line pad test.",
          "k or received open-circuit voltage map vs position for commissioning records.",
          "Periodic re-check after floor maintenance or pad replacement.",
        ],
      },
    ],
  }),

  article({
    slug: "misalignment",
    title: "Misalignment",
    summary:
      "How positional error reduces k and power — specifying docks across lateral, angular, and gap variation.",
    sections: [
      {
        paragraphs: [
          "Misalignment is any deviation from nominal coil registration: lateral shift, air-gap change, or rotation. Each mode reduces overlapping flux and shifts the impedance seen by the inverter. Resonant systems may remain efficient at moderate misalignment if compensation and control track the detuning; non-resonant or poorly tuned systems fall off sharply.",
          "Fleet data often shows a distribution, not a single worst case — design for the 95th percentile stop error, not only perfect alignment.",
        ],
      },
      {
        heading: "Coupling impact",
        bullets: [
          "Lateral offset: typically the dominant issue on flat docks.",
          "Gap increase: lowers k roughly with cube of distance for similar-sized coils (geometry-dependent).",
          "Yaw rotation: asymmetric coils (DD, rectangular) degrade differently by angle.",
          "Combined errors: superposition is not linear — test the full map.",
        ],
      },
      {
        heading: "Mitigation hierarchy",
        paragraphs: [
          "First improve mechanical repeatability and coil geometry (DD, arrays). Then widen control bandwidth and compensation tuning. Last resort: accept lower power or longer charge time under misalignment — but specify that explicitly in SLA documents so operators understand throughput impact.",
        ],
      },
      {
        heading: "Testing protocol",
        bullets: [
          "Automated XY stage sweeps at nominal gap before field deployment.",
          "Include steel plate under vehicle to mimic real flux paths.",
          "Log inverter phase, current, and thermal limits at each grid point.",
        ],
      },
    ],
  }),

  article({
    slug: "air-gap-design",
    title: "Air Gap Design",
    summary:
      "Setting nominal and maximum air gap for WPT docks — structural stack, tolerances, and k budgeting.",
    sections: [
      {
        paragraphs: [
          "Air gap is the separation along the flux axis between transmitter and receiver coils, including encapsulation, floor tile thickness, vehicle belly clearance, and intentional standoff. Gap directly scales magnetizing requirements and coupling; it is one of the strongest levers in dock specification.",
          "AGV docks often target a nominal gap with ± few millimeters tolerance from floor wear, tire inflation, and load compression. AMR applications with suspended receivers may specify a larger nominal gap with tighter lateral alignment.",
        ],
      },
      {
        heading: "Gap budget components",
        bullets: [
          "Pad encapsulation and top surface wear layer.",
          "Vehicle receiver cover and any debris gap (required in dirty environments).",
          "Manufacturing tolerance stack on mount heights.",
          "Thermal expansion at operating temperature.",
        ],
      },
      {
        heading: "Design implications",
        paragraphs: [
          "Larger gap demands more turns, higher magnetizing current, or larger coil area to recover k. Soft-start and foreign-object detection thresholds scale with gap because field strength at the surface changes. Document minimum and maximum gap on the pad label — maintenance crews replace tiles without recalculating.",
        ],
      },
      {
        heading: "Validation",
        bullets: [
          "Test at min, nominal, and max gap with full power cycle.",
          "Verify FOD still detects test objects at max gap — sensitivity drops if gap grows unbounded.",
          "Check mechanical: max gap must not allow coil impact at min compression.",
        ],
      },
    ],
  }),

  article({
    slug: "coupling-optimization",
    title: "Coupling Optimization",
    summary:
      "Maximizing useful k within footprint and loss constraints — geometry, ferrite, and shield trade-offs.",
    sections: [
      {
        paragraphs: [
          "Coupling optimization targets the highest practical k across the alignment envelope without exceeding loss, EMC, or mechanical limits. It is a multi-objective problem: peak k at center alignment is less important than minimum k at worst-case offset for fleet uptime.",
          "Tools include coil sizing, ferrite flux concentration, reducing anti-aligned flux components, and matching transmitter/receiver area ratios. Over-optimization on a steel-less bench misleads — optimize on representative chassis fixtures.",
        ],
      },
      {
        heading: "Levers",
        bullets: [
          "Increase overlapping area (within vehicle packaging).",
          "Reduce gap via mechanical design — often cheaper than more copper.",
          "Ferrite back-plates to reduce reluctance of the flux path.",
          "Receiver coil closer to the outer edge of the vehicle footprint (watch FOD and impact).",
        ],
      },
      {
        heading: "Diminishing returns",
        paragraphs: [
          "Chasing k above what the power stage needs increases leakage flux and neighbor interference. Very tight coupling lowers impedance and can stress compensation components. Define a k target band from system simulation, then stop when margin is met.",
        ],
      },
      {
        heading: "Metrics",
        bullets: [
          "k_min at worst misalignment for full-power operation.",
          "k_max for over-voltage/current checks on series capacitors.",
          "Coupling variation Δk for control stability analysis.",
        ],
      },
    ],
  }),

  article({
    slug: "coil-simulation",
    title: "Coil Simulation",
    summary:
      "Electromagnetic modeling workflow for WPT coils — from fast analytical estimates to 3D FEM validation.",
    sections: [
      {
        paragraphs: [
          "Coil simulation predicts inductance, resistance, coupling, and field patterns before cutting copper. Analytical formulas and 2D axisymmetric models give fast iteration; 3D finite-element models include ferrite saturation, shields, and chassis steel at the cost of setup time and mesh expertise.",
          "Simulation must include frequency effects: AC resistance proxies, ferrite loss models, and optionally eddy currents in nearby conductors. A DC magnetostatic FEM result is insufficient for resonant charger design.",
        ],
      },
      {
        heading: "Model build checklist",
        bullets: [
          "Full current path including return conductor or mirror boundary.",
          "Ferrite B-H curves and loss data at operating frequency.",
          "Mesh refinement in skin depth regions for copper (when supported).",
          "Parametric sweeps for gap and lateral offset.",
        ],
      },
      {
        heading: "Correlation to test",
        paragraphs: [
          "Compare simulated L, k, and field maps to impedance analyzer and hall-probe or search-coil measurements on the same fixture. Track simulation error across builds — a model consistently off by 8% on L is still useful if bias is stable. Update models when potting compounds or ferrite lots change.",
        ],
      },
      {
        heading: "Limits",
        bullets: [
          "Manufacturing tolerance on wire placement not captured in ideal CAD.",
          "Temperature-dependent material properties during continuous operation.",
          "Complex fleet environments (random metal debris) are not in standard FEM.",
        ],
      },
    ],
  }),

  article({
    slug: "coil-manufacturing",
    title: "Coil Manufacturing",
    summary:
      "Production methods for WPT coils — winding, PCB fab, assembly, and repeatability controls for fleet scale.",
    sections: [
      {
        paragraphs: [
          "Coil manufacturing spans hand-wound litz on bobbins, automated toroid/spiral winding, PCB etch with heavy copper, and stamped foil assemblies. The method sets tolerance on inductance, unit cost, and failure modes. Fleet-scale AGV programs need process capability (Cp/Cpk) on L and R, not single golden samples.",
          "Wireless power coils are high-current RF components — cosmetic consistency matters less than turn count, strand integrity, and termination quality.",
        ],
      },
      {
        heading: "Process options",
        bullets: [
          "Litz spiral wound and potted: common for high-power TX/RX discs.",
          "PCB coil: excellent repeatability, watch copper thickness and via resistance.",
          "Preformed copper sheet: good for thick conductors, tooling cost upfront.",
          "Hybrid: PCB for low-power sense windings, litz for power path.",
        ],
      },
      {
        heading: "Quality controls",
        paragraphs: [
          "100% or statistical electrical test at frequency (L, Q, R_ac). Visual inspection for strand nicking and ferrite cracks. Potting cure logs — incomplete cure allows wire movement in service. Serialization linking coil test data to pad serial number for field traceability.",
        ],
      },
      {
        heading: "Supply chain",
        bullets: [
          "Second-source litz and ferrite where program volume warrants.",
          "Document allowed substitutes with re-validation gates.",
          "Lead times for custom ferrite tiles often dominate schedule — parallel-path early.",
        ],
      },
    ],
  }),

  article({
    slug: "bipolar-coil",
    title: "Bipolar Coil",
    summary:
      "Bipolar windings and their field patterns — when opposite polarity segments improve coupling uniformity.",
    sections: [
      {
        paragraphs: [
          "A bipolar coil arrangement creates regions of opposite magnetic polarity in the coupling zone, often by splitting the winding into two halves driven or connected so current flows in opposing directions in spatially separated loops. Bipolar patterns appear in some WPT topologies to shape the field for misalignment or to interface with specific compensation networks.",
          "Compared to unipolar (single-direction flux) spirals, bipolar fields can exhibit nulls and steeper spatial gradients — useful or harmful depending on receiver geometry.",
        ],
      },
      {
        heading: "Potential benefits",
        bullets: [
          "Shaped coupling map for specific offset directions.",
          "Compatibility with certain multi-coil decoupling schemes.",
          "Reduced net DC field component in some arrangements (sensor interference).",
        ],
      },
      {
        heading: "Design cautions",
        paragraphs: [
          "Receiver coils must be sized and oriented to link the intended bipolar flux — a small receiver centered on a field null couples poorly. FEM maps of |B| and coupling phase are essential. Termination symmetry matters; unequal half-coil resistance causes field imbalance.",
        ],
      },
      {
        heading: "Testing",
        bullets: [
          "Flip receiver 180° and compare k — asymmetry reveals bipolar imbalance.",
          "Measure open-circuit voltage phase along lateral sweeps.",
          "Verify no unexpected torque on ferrite or metal parts near the pad.",
        ],
      },
    ],
  }),

  article({
    slug: "unipolar-coil",
    title: "Unipolar Coil",
    summary:
      "Single-polarity flux WPT coils — the common spiral case and its predictable coupling behavior.",
    sections: [
      {
        paragraphs: [
          "Unipolar coils produce a dominant flux component in one direction across the pad face — the typical single spiral with current returning on an inner or outer tap behaves unipolar when viewed on axis. Most industrial transmitter pads are unipolar discs or DD variants derived from unipolar segments.",
          "Field falls off with distance and offset in patterns well documented for circular spirals, simplifying alignment specs and FOD placement relative to the coil center.",
        ],
      },
      {
        heading: "Advantages",
        bullets: [
          "Straightforward intuition for installers and field service.",
          "Central flux peak aids pin/cone alignment schemes.",
          "Simpler analytical models for first-pass L and k estimates.",
        ],
      },
      {
        heading: "Limitations",
        paragraphs: [
          "Lateral misalignment sensitivity is often worse than optimized bipolar/DD/array solutions for the same area. External metal can asymmetrically distort a unipolar field, biasing FOD if sensors assume symmetry.",
        ],
      },
      {
        heading: "Best practices",
        bullets: [
          "Keep return path compact and co-planar to preserve unipolar character.",
          "Use ferrite to prevent backward flux from wrapping into the wrong half-space.",
          "Document polarity relative to vehicle forward direction for DD-like variants.",
        ],
      },
    ],
  }),

  article({
    slug: "solenoid-coil",
    title: "Solenoid Coil",
    summary:
      "Solenoidal windings for concentrated flux paths — when height is available and planar area is tight.",
    sections: [
      {
        paragraphs: [
          "A solenoid coil winds helically around a cylindrical or rectangular core, producing axial field inside the bore and returning flux outside through the core or air. In WPT, solenoid segments supplement planar pads when vertical space exists — for example a raised core on a floor pad or a bobbin receiver between frame members.",
          "Inductance scales with turns squared over length and is boosted by core permeability until saturation. Solenoids concentrate flux but also concentrate loss hot spots if current density is not managed.",
        ],
      },
      {
        heading: "Applications",
        bullets: [
          "Hybrid pad: planar spiral plus central solenoid bump for gap tolerance.",
          "Receiver bobbin fitting in cylindrical pockets on AGV chassis.",
          "Alignment pegs surrounded by solenoid windings for pin-type docks.",
        ],
      },
      {
        heading: "Design notes",
        paragraphs: [
          "Match solenoid diameter and height to receiver bore for coupling — oversized bore wastes flux. Ferrite rod or pot core shapes must include gaps if DC bias or strong AC fields approach saturation. Wind direction and start/finish leads determine field polarity at the dock interface.",
        ],
      },
      {
        heading: "Mechanical",
        bullets: [
          "Bobbin must withstand impact without collapsing turn spacing.",
          "Potting fills bore voids — verify L change after potting on samples.",
          "Core cracking from drop tests is a common field failure mode.",
        ],
      },
    ],
  }),

  article({
    slug: "planar-coil",
    title: "Planar Coil",
    summary:
      "Flat WPT coil constructions — PCB, etched foil, and wound spirals in the vehicle and floor plane.",
    sections: [
      {
        paragraphs: [
          "Planar coils confine the winding to a thin layer parallel to the docking surface. They minimize Z height on vehicle bellies and floor tiles, which matters for AGV ground clearance and trip-hazard limits on pad protrusion.",
          "Planar does not mean uniform current — trace width tapering, multiple layers, and hollow centers adjust resistance and inductance. Multi-layer planar coils add inter-layer capacitance that can appear in the MHz range, above fundamental WPT frequency but relevant for EMI and self-resonance.",
        ],
      },
      {
        heading: "Construction types",
        bullets: [
          "Single-layer PCB: cost-effective, moderate Q.",
          "Multi-layer PCB with stitched vias: higher L per area, via loss matters.",
          "Flat litz spiral: highest Q for power class.",
          "Copper sheet photo-etched: middle ground for prototype to production.",
        ],
      },
      {
        heading: "Thermal and current",
        paragraphs: [
          "Planar coils spread heat across the pad face — good for coupling to aluminum spreaders. Current crowding at inner turns limits continuous power; taper inner trace width or use parallel inner segments. Model AC loss at operating frequency before choosing oz/sq copper weight.",
        ],
      },
      {
        heading: "Integration",
        bullets: [
          "Keep sensitive CAN/Ethernet cables out of the coil plane shadow.",
          "Planar receiver often sits above ferrite tile with uniform thickness.",
          "Encapsulation thickness adds to effective gap — include in all k calculations.",
        ],
      },
    ],
  }),

  article({
    slug: "pcb-coil",
    title: "PCB Coil",
    summary:
      "Printed circuit coil design for WPT — trace geometry, copper weight, and manufacturing tolerances.",
    sections: [
      {
        paragraphs: [
          "PCB coils etch the winding as copper traces on FR4 or similar laminate, enabling low-cost repeatability and easy integration with on-board tuning capacitors or sensing circuits. They suit low-to-medium power receivers, sense coils, and some transmitter segments where litz winding cost is hard to justify.",
          "PCB coils face AC resistance limits from thin copper and via transitions in multi-layer stacks. At 100+ kHz and multi-kW, many designs migrate to litz or thick foil — but PCB remains valuable for prototypes and auxiliary windings.",
        ],
      },
      {
        heading: "Layout practices",
        bullets: [
          "Use heavy copper (2–4 oz+) or external thick-copper processing where available.",
          "Minimize vias in the high-current path; stitch with many parallel vias if required.",
          "Taper trace width from inner to outer turns to balance current density.",
          "Keep gap between turns consistent — etch undercut affects capacitance.",
        ],
      },
      {
        heading: "Electrical validation",
        paragraphs: [
          "Measure L and self-resonant frequency on bare board and after potting — dielectric loading shifts capacitance. Include solder mask and epoxy in FEM dielectric regions when simulating. Plan test points for fixture probes without cutting traces.",
        ],
      },
      {
        heading: "Production",
        bullets: [
          "Panelize with impedance test coupons per lot.",
          "Control laminate Dk variation between PCB vendors.",
          "Document max reflow cycles — rework can delaminate heavy copper.",
        ],
      },
    ],
  }),

  article({
    slug: "bifilar-winding",
    title: "Bifilar Winding",
    summary:
      "Bifilar and parallel windings for balanced fields, low-leakage inductors, and specific WPT topologies.",
    sections: [
      {
        paragraphs: [
          "Bifilar winding places two conductors side by side with equal turns, often wound together so magnetic fields from each cancel for common-mode current while reinforcing differential-mode flux. In WPT, bifilar techniques appear in compensation inductors, cancellation windings, and some coil structures aimed at reducing leakage inductance to a defined value.",
          "When used in the main power coil, bifilar arrangements must preserve the intended coupling to the partner coil — not all bifilar patterns are equal; some target EMI cancellation on the cable exit instead.",
        ],
      },
      {
        heading: "Applications",
        bullets: [
          "Leakage-controlled transformers in multi-stage WPT converters.",
          "Cancellation windings to reduce far-field EMI from lead-out cables.",
          "Symmetric current paths in dual-half-bridge coil drives.",
        ],
      },
      {
        heading: "Manufacturing",
        paragraphs: [
          "Twist pitch and spacing affect capacitance between bifilar partners — measure L and C on samples. Terminations must pair strands correctly; swapping one lead inverts the intended field. Litz bifilar bundles require vendor specification of twist direction.",
        ],
      },
      {
        heading: "Pitfalls",
        bullets: [
          "Accidental short between bifilar strands at a nick point.",
          "Unequal strand length in termination creating circulating current.",
          "Confusing bifilar cancellation with the main coupling winding role.",
        ],
      },
    ],
  }),

  article({
    slug: "coil-turns-design",
    title: "Coil Turns Design",
    summary:
      "Choosing turn count for target inductance, voltage stress, and AC resistance in resonant WPT tanks.",
    sections: [
      {
        paragraphs: [
          "Turn count N is the primary knob for inductance in a fixed geometry, scaling roughly with N² for closely coupled turns on the same former. In resonant WPT, N also sets open-circuit voltage on the receiver, magnetizing current on the transmitter, and the distribution of AC loss across turns.",
          "More turns are not free gain — higher N raises wire length, proximity effect, and voltage on tuning capacitors. The optimum N sits at the intersection of L target, k geometry, and loss budget.",
        ],
      },
      {
        heading: "Design sequence",
        bullets: [
          "Fix outer diameter and gap from mechanical package.",
          "Estimate required L from compensation topology and frequency.",
          "Sweep N in simulation with AC resistance model.",
          "Check capacitor voltage and semiconductor current at min/max k and load.",
        ],
      },
      {
        heading: "Turn count vs fill factor",
        paragraphs: [
          "Dense turn packing increases L per area but worsens inner-turn heating. Sometimes fewer turns with larger area or ferrite delivers lower total loss than max turns in a small disc. Prototype two N values before locking ferrite tooling.",
        ],
      },
      {
        heading: "Tolerance",
        bullets: [
          "Specify L tolerance band tied to compensation capacitor selection.",
          "Turn count errors from skipped turns in winding are catastrophic — use turn counters.",
          "Potting compression can slightly reduce L — include in worst-case tuning.",
        ],
      },
    ],
  }),

  article({
    slug: "coil-pitch-and-spacing",
    title: "Coil Pitch and Spacing",
    summary:
      "Turn pitch, gap between turns, and fill factor effects on inductance, capacitance, and AC loss.",
    sections: [
      {
        paragraphs: [
          "Pitch is the center-to-center spacing between adjacent turns; spacing is the physical gap between conductors. Together they set fill factor, inter-turn capacitance, and how aggressively proximity effect couples neighboring turns. Tight pitch raises L per unit area but concentrates loss in inner regions.",
          "PCB coils define pitch by trace width plus gap; litz spirals use spacers or bobbin grooves. Inconsistent pitch from hand winding shows up as L scatter across production.",
        ],
      },
      {
        heading: "Electrical effects",
        bullets: [
          "Closer spacing increases inter-turn capacitance, lowering self-resonant frequency.",
          "Wider spacing reduces proximity loss but needs more turns or larger diameter for same L.",
          "Non-uniform spacing creates local field hotspots and uneven heating.",
        ],
      },
      {
        heading: "Practical guidance",
        paragraphs: [
          "Follow vendor recommendations for minimum spacing in potting compounds to avoid corona and partial discharge at high receiver voltages. For high-power TX coils, prioritize uniform spacing over maximum fill — hot spots derate the whole pad.",
        ],
      },
      {
        heading: "Inspection",
        bullets: [
          "Optical or AOI on PCB gaps before potting.",
          "Sample cross-section of potted litz spirals in NPI.",
          "Compare Q across builds — Q drop often traces to spacing collapse.",
        ],
      },
    ],
  }),

  article({
    slug: "inner-and-outer-diameter",
    title: "Inner and Outer Diameter",
    summary:
      "How inner diameter (ID) and outer diameter (OD) shape inductance, field peaking, and pad footprint.",
    sections: [
      {
        paragraphs: [
          "For planar spirals, OD sets the active coupling area seen by the partner coil while ID clears central hardware (alignment pins, bolts, cable exits) and shapes the inner turn density. Increasing OD with fixed turns raises L and k potential; increasing ID hollows the center and removes inner high-loss turns but reduces L per turn.",
          "Industrial pads often maximize OD within floor tile standards while keeping ID large enough for mechanical stack and ferrite tile arrangement.",
        ],
      },
      {
        heading: "OD trade-offs",
        bullets: [
          "Larger OD: better k, more copper, higher leakage to pad edges.",
          "Smaller OD: fits tight spaces, requires higher current or frequency for same power.",
          "OD mismatch between TX and RX when RX is smaller caps achievable k.",
        ],
      },
      {
        heading: "ID trade-offs",
        paragraphs: [
          "Small ID concentrates many inner turns with high AC loss. Large ID without adjusting turns drops L — may require ferrite or more outer turns. Center hole sometimes hosts permanent magnets for alignment — verify they do not saturate ferrite or bias FOD sensors.",
        ],
      },
      {
        heading: "Documentation",
        bullets: [
          "Specify OD/ID relative to pad housing datum, not coil copper edge alone.",
          "Include encapsulation overhang in floor tile cutout drawings.",
          "Fleet replacement pads must match OD/ID within tolerance or re-commission k map.",
        ],
      },
    ],
  }),

  article({
    slug: "self-inductance-design",
    title: "Self-Inductance Design",
    summary:
      "Engineering coil self-inductance L for resonant tanks, compensation networks, and detuning margins.",
    sections: [
      {
        paragraphs: [
          "Self-inductance L characterizes energy stored in the coil's own magnetic field per ampere. In WPT, L appears in resonant frequency formulas, impedance matching, and soft-switching conditions. Transmitter and receiver each carry an L that must pair with tuning capacitors C to hit the operating band and stay there under misalignment.",
          "L is not constant in operation — ferrite saturation, nearby metal, and temperature change L by percents that matter to high-Q systems.",
        ],
      },
      {
        heading: "Setting L targets",
        bullets: [
          "Derive from chosen topology (series/parallel/LCC) and operating frequency.",
          "Include margin for ± capacitance tolerance and L drift over temperature.",
          "Verify L at min and max gap, not only nominal.",
        ],
      },
      {
        heading: "Measurement",
        paragraphs: [
          "Use impedance analyzer at operating frequency with coil in final potting and ferrite configuration. Open-short-load calibration on the fixture. Document test frequency and amplitude — L can vary slightly with drive level near saturation.",
        ],
      },
      {
        heading: "Adjustment methods",
        bullets: [
          "Turn count change (production-friendly if planned).",
          "Ferrite shims or tile removal (last resort in field).",
          "Switchable compensation banks on the PCB (control complexity).",
        ],
      },
    ],
  }),

  article({
    slug: "mutual-inductance-design",
    title: "Mutual Inductance Design",
    summary:
      "Mutual inductance M between TX and RX — link to k, open-circuit voltage, and power transfer scaling.",
    sections: [
      {
        paragraphs: [
          "Mutual inductance M quantifies flux linkage between transmitter and receiver windings. For given self-inductances, M = k√(L1L2). M sets induced voltage on the open receiver and scales power transfer in coupled-resonator models. Designing M across the alignment envelope is equivalent to designing k with realistic L values on both sides.",
          "Mutual inductance is strongly positional — a single M number is always qualified by gap and offset.",
        ],
      },
      {
        heading: "Design implications",
        bullets: [
          "Higher M at same current increases received power but may narrow control margins.",
          "M imbalance in multi-coil arrays causes uneven segment loading.",
          "M coupling to foreign loops (cables, frames) creates unintended paths.",
        ],
      },
      {
        heading: "Estimation and test",
        paragraphs: [
          "FEM extracts M from flux linkage integrals or S-parameters converted to Z-parameters. Bench test: measure open-circuit voltage on RX with known TX current, or use dual-port impedance methods. Sweep position on a grid and store M(x,y,z) for control lookup tables if used.",
        ],
      },
      {
        heading: "System link",
        bullets: [
          "Relate M to required TX current for power target at worst-case rectifier voltage.",
          "Check M variation does not push compensation out of soft-switching.",
          "Foreign metal can increase or decrease M — FOD must distinguish load from partner coil.",
        ],
      },
    ],
  }),

  article({
    slug: "coil-resistance-and-esr",
    title: "Coil Resistance and ESR",
    summary:
      "DC and AC resistance of WPT coils — ESR impact on Q, efficiency, and thermal rise in continuous dock duty.",
    sections: [
      {
        paragraphs: [
          "Coil resistance determines I²R loss. DC resistance from wire length and copper area is only the starting point; at tens to hundreds of kilohertz, AC resistance Rac often exceeds Rdc due to skin and proximity effects. Equivalent series resistance (ESR) in datasheets usually means the total resistive part of the coil impedance at frequency.",
          "High Q resonant tanks circulate large currents — even milliohm increases in ESR translate to watts of heat in a pad that may already run warm from core and switching losses.",
        ],
      },
      {
        heading: "Contributors to ESR",
        bullets: [
          "Conductor material and effective area (Litz strand count, PCB oz).",
          "Terminations, solder joints, and bolted busbars.",
          "Ferrite and shield eddy losses reflected as apparent coil loss (fixture-dependent).",
          "Capacitor ESR in series/parallel tuning — often grouped with coil in tank Q measurements.",
        ],
      },
      {
        heading: "Specification",
        paragraphs: [
          "State Rac at operating frequency and temperature. Include measurement fixture definition. For fleet spares, reject coils above maximum ESR even if inductance is in tolerance — efficiency and thermal performance will differ silently.",
        ],
      },
      {
        heading: "Reduction tactics",
        bullets: [
          "Litz or foil with appropriate strand sizing.",
          "Wider PCB traces on outer turns; parallel copper sheets.",
          "Move terminations out of high-field regions to reduce proximity loss.",
        ],
      },
    ],
  }),

  article({
    slug: "skin-effect-in-coils",
    title: "Skin Effect in Coils",
    summary:
      "Skin depth and current crowding in WPT conductors — when solid wire is no longer uniformly utilized.",
    sections: [
      {
        paragraphs: [
          "Skin effect forces AC current toward the conductor surface as frequency rises, effective cross-section shrinks and AC resistance rises above DC value. Skin depth δ ≈ √(ρ/(πfμ)) sets the scale — at 100 kHz in copper, δ is on the order of 0.2 mm, so solid wire thicker than that wastes interior copper for current.",
          "Coil designers feel skin effect in every multi-kW spiral unless Litz or thin foil is used. Ignoring it predicts optimistic efficiency and cold coils on paper that overheat in the warehouse lane.",
        ],
      },
      {
        heading: "Mitigation",
        bullets: [
          "Litz wire with strand diameter below δ (with bundle optimization).",
          "Thin copper foil or PCB traces near skin depth scale.",
          "Parallel conductors with appropriate spacing (careful with proximity).",
        ],
      },
      {
        heading: "Frequency planning",
        paragraphs: [
          "Raising WPT frequency shrinks skin depth — magnetics shrink but conductor loss rises unless conductor technology upgrades. When changing frequency on an existing coil geometry, recompute Rac before assuming the same turn count works.",
        ],
      },
      {
        heading: "Measurement",
        bullets: [
          "Compare Rdc and Rac on production samples — ratio tracks process drift.",
          "Temperature rise test correlates with Rac better than Rdc.",
          "Impedance analyzer with four-wire fixture on coil terminals.",
        ],
      },
    ],
  }),

  article({
    slug: "proximity-effect",
    title: "Proximity Effect",
    summary:
      "Neighbor-turn and mirror-current proximity loss — often the dominant AC loss in compact WPT spirals.",
    sections: [
      {
        paragraphs: [
          "Proximity effect redistributes current within conductors due to magnetic fields from nearby conductors — adjacent turns, return paths, and shield plates. In tight spirals, proximity effect often exceeds skin effect alone, especially on inner turns where field from many neighbors adds.",
          "PCB coils with narrow gap between traces and litz spirals with dense packing are proximity-limited. Simulation tools with proximity loss models or measured Rac sweeps beat naive Rdc scaling.",
        ],
      },
      {
        heading: "Design mitigations",
        bullets: [
          "Increase turn spacing where L budget allows.",
          "Taper inner turn width or use parallel inner segments.",
          "Move return conductor away from the active spiral plane.",
          "Avoid placing solid copper shields too close without gap.",
        ],
      },
      {
        heading: "Asymmetric proximity",
        paragraphs: [
          "Steel chassis on one side of the receiver creates stronger proximity on facing turns — Rac becomes orientation-dependent. Test receiver on vehicle fixture, not free-hanging. DD coils can show different Rac per D leg if spacing differs.",
        ],
      },
      {
        heading: "Diagnostics",
        bullets: [
          "Hot inner turns after thermal camera scan of unpotted samples.",
          "Q lower than simulation with only skin effect modeled.",
          "Rac drops slightly if turns loosen (bad sign — mechanical issue).",
        ],
      },
    ],
  }),

  article({
    slug: "coil-thermal-design",
    title: "Coil Thermal Design",
    summary:
      "Thermal paths and limits for continuous-duty WPT coils on AGV lanes and high-throughput docks.",
    sections: [
      {
        paragraphs: [
          "Coil thermal design moves heat from copper and ferrite to ambient through conduction (potting, spreader plates, floor tile), convection, and sometimes liquid cooling in extreme power classes. AGV docks may charge back-to-back vehicles with minimal cool-down — steady-state temperature defines the rating, not a 60-second burst.",
          "Thermal resistance from inner turns to the outer case often dominates. A pad that feels warm on the surface may already exceed insulation class temperature at the innermost turn.",
        ],
      },
      {
        heading: "Design elements",
        bullets: [
          "Aluminum spreader bonded to ferrite back-plate.",
          "Thermally conductive potting with controlled viscosity for void fill.",
          "Floor tile integration with heat-conducting fillers vs pure epoxy cosmetic fill.",
          "Current derating curve vs ambient and duty cycle.",
        ],
      },
      {
        heading: "Validation",
        paragraphs: [
          "Run thermal soak at max power, worst alignment, and max ambient in an enclosure matching install. Instrument with thermocouples on copper exit, ferrite center, and case. Cycle test: charge–depart–charge to catch cumulative heating in real throughput models.",
        ],
      },
      {
        heading: "Field considerations",
        bullets: [
          "Blocked ventilation grilles on pad housing raises thermal resistance.",
          "Sun-loaded outdoor pads need separate ambient profile.",
          "Thermal shutdown should log events for fleet maintenance — repeated trips indicate margin loss.",
        ],
      },
    ],
  }),

  article({
    slug: "coil-insulation",
    title: "Coil Insulation",
    summary:
      "Wire enamel, turn insulation, and voltage withstand in high-voltage resonant receiver coils.",
    sections: [
      {
        paragraphs: [
          "Coil insulation spans strand enamel on magnet wire, inter-turn spacing, bobbin materials, and separation from ferrite and shields. Resonant receivers can develop kilovolt-class peaks on tuning capacitors and coil terminals even at modest battery voltage — insulation must be rated for peak AC stress plus transients from switching and plug events.",
          "Mechanical abrasion during winding, potting shrinkage, and vibration in AGV service degrade insulation over time — design and test for life, not just Hi-Pot at birth.",
        ],
      },
      {
        heading: "Material selection",
        bullets: [
          "Wire thermal class (180°C polyimide vs 155°C polyester) matched to thermal design.",
          "Potting compounds with dielectric strength and CTI appropriate for environment.",
          "Separator sheets between litz layers and ferrite where edge voltage concentrates.",
        ],
      },
      {
        heading: "Test",
        paragraphs: [
          "Hi-Pot between coil and shield at defined AC voltage with ramp rate. Partial discharge test for high-reliability programs. After thermal aging samples, repeat Hi-Pot to catch embrittled enamel.",
        ],
      },
      {
        heading: "Failure indicators",
        bullets: [
          "Intermittent insulation breakdown shows as sudden Q drop or FOD false triggers.",
          "Corona staining on potting near inner turns.",
          "Moisture ingress in outdoor pads lowering insulation resistance.",
        ],
      },
    ],
  }),

  article({
    slug: "potting-and-encapsulation",
    title: "Potting and Encapsulation",
    summary:
      "Potting compounds, encapsulation processes, and how fill materials change L, C, and heat flow.",
    sections: [
      {
        paragraphs: [
          "Potting fixes coil geometry against vibration, excludes moisture, and provides dielectric separation. Encapsulation is the outer mechanical shell seen by the dock environment. Both alter effective permittivity around conductors (shifting inter-turn capacitance and L slightly) and define thermal paths.",
          "Wrong potting viscosity traps voids under litz bundles — partial discharge and hot spots follow. Cure exotherm on large pads can stress ferrite if batch size is uncontrolled.",
        ],
      },
      {
        heading: "Material properties",
        bullets: [
          "Thermal conductivity (W/m·K) vs cost and flowability.",
          "Hardness and CTE match to ferrite and aluminum to reduce cracking.",
          "Dielectric constant affecting self-resonance and Hi-Pot paths.",
          "Flammability and UL ratings for floor-installed equipment.",
        ],
      },
      {
        heading: "Process control",
        paragraphs: [
          "Vacuum degas for high-voltage receivers. Mold fixturing maintains flatness for floor tiles. Record batch, cure time, and temperature. Re-measure L and SRF on potted units — accept/reject limits may differ from bare coil.",
        ],
      },
      {
        heading: "Serviceability",
        bullets: [
          "Potting is often non-repairable — modular coil inserts ease field swap.",
          "Document potting removal as destructive if applicable.",
          "Color and surface finish affect IR thermography calibration for diagnostics.",
        ],
      },
    ],
  }),

  article({
    slug: "copper-vs-aluminum-conductors",
    title: "Copper vs Aluminum Conductors",
    summary:
      "Conductor material choice for WPT coils — conductivity, density, termination, and AC loss comparison.",
    sections: [
      {
        paragraphs: [
          "Copper dominates WPT windings for its conductivity and mature Litz supply chain. Aluminum appears where mass reduction matters — airborne or mobile robot payloads — at the cost of larger cross-section for same Rdc and more careful termination against galvanic corrosion and creep.",
          "At AC frequencies, material choice still follows skin and proximity rules; aluminum's lower conductivity means either thicker sections or accepting higher loss for the same geometry.",
        ],
      },
      {
        heading: "Copper advantages",
        bullets: [
          "Higher conductivity — smaller coil for same loss.",
          "Reliable solder, weld, and crimp terminations.",
          "Wide Litz and foil vendor base.",
        ],
      },
      {
        heading: "Aluminum considerations",
        paragraphs: [
          "Use plated pads, ultrasonic weld, or mechanical clamps rated for thermal cycle. Avoid direct copper-aluminum contact without isolation in wet environments. Verify Rac on prototype — some aluminum foil designs win on weight but need larger area changing k.",
        ],
      },
      {
        heading: "Decision frame",
        bullets: [
          "Default copper unless mass budget forces aluminum.",
          "Re-run thermal and k models on any material swap.",
          "Fleet maintenance training for aluminum termination inspection differs from copper.",
        ],
      },
    ],
  }),

  article({
    slug: "nanocrystalline-cores",
    title: "Nanocrystalline Cores",
    summary:
      "Nanocrystalline ribbon cores for high-permeability WPT flux paths — benefits and handling constraints.",
    sections: [
      {
        paragraphs: [
          "Nanocrystalline alloys (fine-grain metallic glass ribbons) offer very high permeability and high saturation flux density compared to many ferrites. In WPT they appear in compact receivers, common-mode chokes on coil leads, and flux concentrators where ferrite would be too bulky or saturate too early.",
          "Ribbons are thin and stacked; cutting and gapping differ from sintered ferrite tiles. Mechanical shock can degrade performance if laminations shift.",
        ],
      },
      {
        heading: "When they help",
        bullets: [
          "Tight receiver volume with high L target.",
          "High flux density headroom in high-power transient peaks.",
          "Common-mode suppression on long coil cables in AMR turrets.",
        ],
      },
      {
        heading: "Cautions",
        paragraphs: [
          "Cost exceeds ferrite for large pad areas — usually receiver-localized. Curie temperature and loss curves differ by grade — validate at operating frequency. Protect from moisture and bending below vendor bend radius.",
        ],
      },
      {
        heading: "Integration",
        bullets: [
          "Potting must not crush ribbon stacks.",
          "Match CTE with housing to prevent gap opening in cold warehouse floors.",
          "EMC: high μ can also couple stray fields — shield thoughtfully.",
        ],
      },
    ],
  }),

  article({
    slug: "ferrite-tile-layout",
    title: "Ferrite Tile Layout",
    summary:
      "Arranging ferrite tiles behind WPT coils — gaps, coverage fraction, and fringing control.",
    sections: [
      {
        paragraphs: [
          "Ferrite tile layout determines how much of the coil back-plane carries guided flux versus fringing into air. Tiles are cut in segments with gaps to limit eddy currents and thermal stress cracks. Incomplete coverage lowers effective permeability; overhang beyond the coil edge can reduce leakage if shaped correctly.",
          "Standard layouts mirror coil outer contour with 2–5 mm gaps between tiles — vendor-specific rules apply for minimum gap and adhesive type.",
        ],
      },
      {
        heading: "Layout variables",
        bullets: [
          "Coverage percentage vs coil OD.",
          "Gap width and orientation (radial vs circumferential splits).",
          "Tile thickness vs saturation and weight.",
          "Central hole sizing for alignment features and cables.",
        ],
      },
      {
        heading: "Assembly",
        paragraphs: [
          "Bond tiles to a flat plate before winding or potting to maintain coplanarity. Warped back-plates create air gaps under ferrite that reduce μ_eff unpredictably. Replace cracked tiles in field service — partial replacement shifts L.",
        ],
      },
      {
        heading: "Testing",
        bullets: [
          "Compare L with full vs 75% tile coverage on samples.",
          "Thermal imaging for tile hot spots indicating saturation or eddy issues.",
          "Drop test ferrite assembly before approving layout for AGV impacts.",
        ],
      },
    ],
  }),

  article({
    slug: "flux-guides",
    title: "Flux Guides",
    summary:
      "Structured flux paths — plates, channels, and cores that steer magnetic field through intended coupling windows.",
    sections: [
      {
        paragraphs: [
          "Flux guides are geometric features — ferrite rails, C-cores, or shaped steel laminations — that channel magnetic flux from transmitter to receiver while limiting spill into the environment. In docks they improve k for a given coil area and help separate power flux from FOD sense zones when designed with FEM.",
          "Guides interact with all nearby permeable and conductive materials; a flux guide that helps in CAD can hurt when a steel bolt head sits in the wrong place on the production line.",
        ],
      },
      {
        heading: "Design approach",
        bullets: [
          "Define intended flux tube between TX and RX in 3D FEM.",
          "Minimize flux crossing conductive loops (cable harnesses, frame rails).",
          "Include saturation checks on guide sections at max current.",
        ],
      },
      {
        heading: "Manufacturing",
        paragraphs: [
          "Machined ferrite guides are precise but costly; molded ferrite suits volume. Tolerance on guide air gaps (similar to transformer gaps) tunes inductance — document shim procedures if used.",
        ],
      },
      {
        heading: "Maintenance",
        bullets: [
          "Debris in flux channels (metal swarf) detunes pads — sealed encapsulation helps.",
          "Guides chipped in collisions change field shape — inspect after impacts.",
          "Replacement guides must be paired sets TX/RX when coupling is optimized together.",
        ],
      },
    ],
  }),

  article({
    slug: "leakage-flux-control",
    title: "Leakage Flux Control",
    summary:
      "Managing flux that misses the partner coil — EMC, heating, and neighbor pad interference.",
    sections: [
      {
        paragraphs: [
          "Leakage flux is the portion of transmitter flux that does not link the receiver — it wraps around shields, couples into floor steel, radiates, or induces voltages in nearby loops. High leakage increases EMC risk and heats nearby conductive structures even when main power transfer efficiency looks acceptable.",
          "Leakage is not always bad in controlled amounts — some topologies use leakage inductance intentionally — but uncontrolled leakage near AMR sensor cables causes field failures.",
        ],
      },
      {
        heading: "Control methods",
        bullets: [
          "Ferrite back-plates and return paths sized for flux closure.",
          "Conductive shields with appropriate gap to limit eddy loss.",
          "Coil sizing matched to receiver so magnetizing flux is not excessive.",
          "Physical separation and orientation vs adjacent pads and cables.",
        ],
      },
      {
        heading: "Assessment",
        paragraphs: [
          "Measure stray B-field at defined points (100 mm above pad, 500 mm lateral) during max power. Correlate with EMC scan and thermography on steel fixtures. Compare aligned vs misaligned — misalignment often increases leakage asymmetrically.",
        ],
      },
      {
        heading: "Fleet layout",
        bullets: [
          "Pad spacing standards in multi-AMR charging lanes.",
          "Route data cables outside leakage lobes documented in install guide.",
          "Avoid stacking charging bays directly above steel mezzanine beams without analysis.",
        ],
      },
    ],
  }),

  article({
    slug: "transmitter-pad-coil-stack",
    title: "Transmitter Pad Coil Stack",
    summary:
      "Layer stack-up of floor transmitter pads — coil, ferrite, shield, thermal spreader, and enclosure.",
    sections: [
      {
        paragraphs: [
          "The transmitter pad coil stack orders materials from the charging face downward: wear surface, coil (often litz spiral or DD), ferrite tiles, optional aluminum spreader/shield, structural plate, and cable exit. Each interface adds thermal resistance and shifts L/C through dielectric loading and proximity to conductors.",
          "Floor pads see mechanical abuse — stack design must survive tile compression, forklift crossings (where allowed), and thermal cycling from ambient warehouse to full power.",
        ],
      },
      {
        heading: "Typical layers",
        bullets: [
          "Top: polyurethane or epoxy wear layer (thickness in gap budget).",
          "Coil: potted or pre-potted assembly on ferrite.",
          "Ferrite: tiled back-plate with defined gaps.",
          "Thermal/spreader: aluminum coupling to enclosure or floor.",
          "Bottom: steel or composite tray with sealed cable gland.",
        ],
      },
      {
        heading: "Integration risks",
        paragraphs: [
          "Metal screws through the stack near the coil create eddy loss and asymmetry — use non-magnetic fasteners or keep them outside the flux path. Reinforcing rebar under cast floors couples flux — pad location vs rebar mesh matters for in-floor installs.",
        ],
      },
      {
        heading: "Service",
        bullets: [
          "Modular coil-ferrite cartridges reduce floor downtime.",
          "Mark stack version on pad label — mixed revisions in one lane skew power.",
          "Lift-and-replace procedure for tile without disturbing coil alignment to floor datum.",
        ],
      },
    ],
  }),

  article({
    slug: "receiver-coil-packaging",
    title: "Receiver Coil Packaging",
    summary:
      "Mounting receiver coils on AGV/AMR bellies — clearance, impact, cable routing, and chassis coupling.",
    sections: [
      {
        paragraphs: [
          "Receiver coil packaging fits the winding, ferrite, and shield into the vehicle underside with enough clearance for floor irregularities and debris. Packaging defines effective gap, thermal connection to vehicle structure, and how flux interacts with battery tray, frame rails, and motor mounts.",
          "AMR receivers often sit in stamped pockets; AGV receivers may hang lower with skids — impact protection and potting hardness differ.",
        ],
      },
      {
        heading: "Packaging goals",
        bullets: [
          "Protect coil from scrape and stone impact without adding excessive gap.",
          "Route high-current leads with low loop area to limit EMI.",
          "Allow service removal within fleet MTTR targets.",
          "Maintain alignment datum to vehicle navigation frame.",
        ],
      },
      {
        heading: "Chassis interaction",
        paragraphs: [
          "Steel near the receiver concentrates flux and changes L and Rac — design on a vehicle mockup, not an isolated coil. Aluminum battery enclosures eddy-current shield if too close; add standoffs per FEM recommendation.",
        ],
      },
      {
        heading: "Validation",
        bullets: [
          "Vibration test per vehicle profile with coil instrumented.",
          "Ground clearance sweep on worst-case ramp entries.",
          "Corrosion test for outdoor AMR belly enclosures.",
        ],
      },
    ],
  }),

  article({
    slug: "coil-to-chassis-interaction",
    title: "Coil-to-Chassis Interaction",
    summary:
      "How vehicle and floor structures alter coil inductance, loss, and coupling — mandatory fixture testing.",
    sections: [
      {
        paragraphs: [
          "Coils never operate in free space on production docks. Steel frames, aluminum trays, fasteners, and reinforcement shift permeability and eddy-current paths. A receiver characterized on a plastic jig can measure 15–30% different L and materially different k when bolted to the AGV belly plate.",
          "Coil-to-chassis interaction cuts both ways: chassis can shield leakage beneficially or add loss; it can also create unintended flux shortcuts that bypass the intended gap.",
        ],
      },
      {
        heading: "Modeling and test",
        bullets: [
          "Include simplified chassis CAD in FEM with conductivity assigned.",
          "Sweep coil mount standoff height — small changes matter.",
          "Measure on golden vehicle at multiple battery states (load height).",
        ],
      },
      {
        heading: "Mitigation",
        paragraphs: [
          "Standoffs between coil ferrite and steel. Dedicated aluminum flux barriers. Relocate coil away from parallel steel rails running under the winding. Document forbidden retrofit brackets near the coil zone in service manuals.",
        ],
      },
      {
        heading: "Signs of bad interaction",
        bullets: [
          "Efficiency drops only on vehicle, not on bench mockup.",
          "Chassis local heating during charge.",
          "Navigation sensor errors correlated with charging (magnetic interference).",
        ],
      },
    ],
  }),

  article({
    slug: "foreign-metal-near-coils",
    title: "Foreign Metal Near Coils",
    summary:
      "Eddy-current and permeability effects from debris, tools, and structural metal near WPT coils.",
    sections: [
      {
        paragraphs: [
          "Foreign metal near coils includes intentional (chassis, rebar) and accidental (wrench left on pad, metal shavings, foil packaging) conductors and permeable objects. Time-varying fields induce eddy currents that dissipate heat, reflect flux, and detune resonant tanks. Ferromagnetic debris can saturate locally and trigger FOD or hide real faults.",
          "Dirty warehouse environments require pads and receivers designed assuming occasional metal presence — not only clean-room commissioning.",
        ],
      },
      {
        heading: "Effects",
        bullets: [
          "Reduced or shifted k and L — power derate or control hunt.",
          "Hot metal — fire risk with thin shavings on energized pads.",
          "False FOD or missed FOD depending on algorithm and object size.",
          "Audible vibration on loose ferrous parts.",
        ],
      },
      {
        heading: "Design responses",
        paragraphs: [
          "FOD tuning for site-typical debris. Pad surface slopes and covers to shed metal. Receiver skid plates that keep coil face clear. Maintenance SOP: visual sweep before energizing after floor work.",
        ],
      },
      {
        heading: "Testing",
        bullets: [
          "Standardized metal plates and shavings at defined locations in qualification.",
          "Repeat after encapsulation wear exposes coil area differently.",
          "Log FOD trips in fleet telemetry for pattern analysis (nail vs rebar shift).",
        ],
      },
    ],
  }),

  article({
    slug: "high-power-coil-design",
    title: "High Power Coil Design",
    summary:
      "Coil engineering for multi-kW and tens-of-kW industrial WPT — current density, ferrite limits, and cooling.",
    sections: [
      {
        paragraphs: [
          "High-power coil design pushes current density, flux density, and thermal limits simultaneously. At 10–50 kW class docks, transmitter coils carry hundreds of amperes of resonant current; receivers must handle induced voltages and currents without exceeding insulation or capacitor ratings.",
          "Scaling from a 3 kW prototype to 30 kW is not linear — Rac, ferrite saturation, and leakage flux often force new geometry rather than proportionally larger wire.",
        ],
      },
      {
        heading: "Key limits",
        bullets: [
          "AC current density in inner turns after proximity model.",
          "Ferrite Bpeak at min gap and max current.",
          "Thermal steady state at fleet duty cycle.",
          "EMC and leakage at full magnetomotive force.",
        ],
      },
      {
        heading: "Architecture choices",
        paragraphs: [
          "Split power across multiple coils or phases. Use thicker foil or parallel litz bundles. Active cooling on spreader plates for extreme cases. Co-design with inverter so coil MMF matches ZVS window — not maximum possible current.",
        ],
      },
      {
        heading: "Qualification",
        bullets: [
          "Extended soak at 110% rated power until thermal equilibrium.",
          "Impulse tests for vehicle approach mis-hit without damage.",
          "Insulation system aged samples before production release.",
        ],
      },
    ],
  }),

  article({
    slug: "coil-vibration-and-stress",
    title: "Coil Vibration and Stress",
    summary:
      "Mechanical vibration, magnetostriction, and thermal stress in coils mounted on moving AGVs and floor pads.",
    sections: [
      {
        paragraphs: [
          "Coils experience vibration from vehicle motion, magnetic forces between TX and RX during high-current operation, and magnetostrictive noise in ferrite and steel. Floor pads see traffic vibration. Repeated stress can fatigue wire enamel, crack ferrite, or debond potting from aluminum spreaders.",
          "Audible coil whine is a symptom — even without noise, micro-movement increases Rac intermittently and confuses diagnostics.",
        ],
      },
      {
        heading: "Mitigation",
        bullets: [
          "Potting hardness tuned to damp resonance without cracking ferrite.",
          "Mechanical clamping of ferrite tiles independent of potting.",
          "Flex relief on coil leads exiting the pad.",
          "Avoid loose ferrous covers that rattle in the field.",
        ],
      },
      {
        heading: "Test",
        paragraphs: [
          "Sine and random vibration per vehicle or pad install standard. Monitor L and Rac before/after vibration campaign. Optional acoustic test in anechoic or quiet chamber for whine acceptance criteria on premium indoor AMRs.",
        ],
      },
      {
        heading: "Design for service",
        bullets: [
          "Strain relief prevents lead fracture at solder joint.",
          "Document torque on mechanical fasteners — loosening changes gap.",
          "Inspect potting delamination after known impact events.",
        ],
      },
    ],
  }),

  article({
    slug: "coil-aging-and-reliability",
    title: "Coil Aging and Reliability",
    summary:
      "Long-term degradation mechanisms for WPT coils — thermal aging, moisture, vibration, and fleet life models.",
    sections: [
      {
        paragraphs: [
          "Coil aging accumulates from thermal cycling of enamel and potting, moisture ingress, ferrite micro-cracking, and terminal corrosion. AGV fleets targeting 5–10 year life need reliability models tying operating temperature, duty cycle, and environmental class to failure rates.",
          "Silent degradation — rising Rac or falling insulation resistance — precedes catastrophic failure. Trending coil Q or charge session efficiency in telemetry catches drift early.",
        ],
      },
      {
        heading: "Aging drivers",
        bullets: [
          "Temperature: inner turn hot spots accelerate enamel crack.",
          "Humidity: outdoor pads and wash-down zones.",
          "Mechanical: vibration and docking impact cumulative.",
          "Chemical: oil mist, battery electrolyte mist in battery-change areas.",
        ],
      },
      {
        heading: "Reliability practices",
        paragraphs: [
          "Accelerated thermal aging on samples before release. Weibull or similar life data from pilot fleets. Define end-of-life as Rac or L out of band, not only open circuit.",
        ],
      },
      {
        heading: "Spares and rework",
        bullets: [
          "Stock coil assemblies, not only full pads, if modular.",
          "Field replacement recalibration procedure for FOD and power limits.",
          "Avoid mixing old and new ferrite lot on same pad without retest.",
        ],
      },
    ],
  }),

  article({
    slug: "coil-testing-and-measurement",
    title: "Coil Testing and Measurement",
    summary:
      "Production and qualification tests for WPT coils — L, Q, Rac, Hi-Pot, and positional coupling grids.",
    sections: [
      {
        paragraphs: [
          "Coil testing verifies that magnetics match design before integration into pads and vehicles. Minimum production tests usually include inductance and resistance at operating frequency; qualification adds coupling maps, thermal soak, Hi-Pot, and vibration.",
          "Fixtures must reproduce production mounting — a coil held in air by clips measures different L than when bolted to the ferrite plate.",
        ],
      },
      {
        heading: "Core measurements",
        bullets: [
          "L and Rac at f_op with defined drive level.",
          "Self-resonant frequency (SRF) if relevant to EMI guards.",
          "Q derived from L and Rac or direct network analyzer Q.",
          "Hi-Pot coil-to-shield and coil-to-core.",
        ],
      },
      {
        heading: "System-level tests",
        paragraphs: [
          "Pair TX and RX on alignment stage; measure power vs position at rated inverter settings. Include misalignment stops defined in spec. Store golden traces for serial-number traceability.",
        ],
      },
      {
        heading: "Pass/fail philosophy",
        bullets: [
          "Tight Rac control matters as much as L for thermal parity across fleet.",
          "Reject outliers even inside L tolerance if Q is low.",
          "NCR review for patterns (winding machine drift, ferrite lot).",
        ],
      },
    ],
  }),

  article({
    slug: "impedance-analyzer-methods",
    title: "Impedance Analyzer Methods",
    summary:
      "Using impedance analyzers and network analyzers to characterize WPT coils and coupled pairs.",
    sections: [
      {
        paragraphs: [
          "Impedance analyzers measure Z(f) = R(f) + jX(f) on coils, extracting L, Rac, and Q at the operating frequency. For coupled TX/RX, two-port S-parameter or mutual-Z methods yield k and M without full power transfer tests.",
          "Calibration at the fixture plane removes cable and probe parasitics — critical when milliohm Rac matters.",
        ],
      },
      {
        heading: "Single-coil measurement",
        bullets: [
          "Series or parallel equivalent circuit choice documented per standard used.",
          "Drive level low enough to avoid ferrite heating during sweep.",
          "Open/short/load calibration on the production fixture.",
        ],
      },
      {
        heading: "Coupled measurement",
        paragraphs: [
          "Measure L1, L2 with partner open or shorted as topology requires. Extract k from mutual inductance or from split resonance frequencies in weak coupling approximations — know when approximation breaks. Align coils on gauge blocks for repeatable gap.",
        ],
      },
      {
        heading: "Pitfalls",
        bullets: [
          "Clip leads forming loops that pick up ambient noise.",
          "Measuring at wrong frequency (only 1 kHz LCR meter data).",
          "Ignoring fixture capacitance masking SRF.",
        ],
      },
    ],
  }),

  article({
    slug: "finite-element-magnetics",
    title: "Finite Element Magnetics",
    summary:
      "3D FEM for WPT coil design — meshing, material models, and extracting L, k, and loss proxies.",
    sections: [
      {
        paragraphs: [
          "Finite element magnetics solves Maxwell's equations on meshed CAD to predict fields, inductances, and forces. WPT coil FEM typically uses frequency-domain eddy-current or magnetostatic-plus-postprocessing workflows depending on solver and frequency.",
          "Accurate FEM requires honest material data — ferrite B-H curves, conductivity of aluminum spreaders, and strand-level homogenization for litz unless fully meshed.",
        ],
      },
      {
        heading: "Workflow",
        bullets: [
          "Import CAD with coil, ferrite, shields, optional chassis.",
          "Assign boundary conditions (symmetry only if truly valid).",
          "Mesh refine in skin depth and gap regions.",
          "Parametric gap/offset sweeps scripted for repeatability.",
        ],
      },
      {
        heading: "Outputs",
        paragraphs: [
          "Flux linkage for L and M, integration of B·H for core loss estimates, force maps for vibration risk. Export B-field maps at FOD sensor locations for algorithm teams.",
        ],
      },
      {
        heading: "Validation loop",
        bullets: [
          "Compare first article FEM k vs bench k at 3+ positions.",
          "Update CAD when manufacturing deviates (extra potting fillet).",
          "Document solver version — results are not portable blindly.",
        ],
      },
    ],
  }),

  article({
    slug: "coil-cost-optimization",
    title: "Coil Cost Optimization",
    summary:
      "Reducing coil BOM and manufacturing cost without breaking k, thermal, or reliability margins.",
    sections: [
      {
        paragraphs: [
          "Coil cost optimization balances copper/litz weight, ferrite tile area, potting volume, and process steps (hand vs automated winding). Saving on inner turns that contribute little to k but add disproportionate loss is smarter than uniform turn reduction.",
          "Fleet programs feel cost through yield and field returns — cheapest coil that fails Rac screening is expensive at scale.",
        ],
      },
      {
        heading: "Cost levers",
        bullets: [
          "Right-size OD to alignment spec, not oversized 'just because'.",
          "Standard ferrite tile sizes vs custom cuts.",
          "PCB auxiliary coils vs all-litz where power allows.",
          "Modular design reducing unique SKUs across vehicle variants.",
        ],
      },
      {
        heading: "Guards",
        paragraphs: [
          "Any cost reduction must re-run thermal and misalignment power maps. Second-source litz requires Rac equivalence, not only gauge match. Do not drop Hi-Pot or sampling without reliability review.",
        ],
      },
      {
        heading: "Total cost",
        bullets: [
          "Include pad downtime cost in serviceability design.",
          "Tooling amortization for ferrite vs NRE on custom bobbins.",
          "Logistics weight of ferrite-heavy pads for international installs.",
        ],
      },
    ],
  }),

  article({
    slug: "coil-design-checklist",
    title: "Coil Design Checklist",
    summary:
      "End-to-end checklist before releasing WPT coil designs to production — magnetics, mechanical, thermal, and fleet.",
    sections: [
      {
        paragraphs: [
          "Use a structured checklist so coil releases do not skip cross-disciplinary items. SiCore-style industrial docks tie magnetics to alignment, FOD, thermal duty, and service — the checklist reflects that integration.",
        ],
      },
      {
        heading: "Magnetics",
        bullets: [
          "L, Rac, Q at f_op on production fixture with ferrite and potting.",
          "k map vs gap and lateral offset on TX/RX pair with chassis mockup.",
          "Capacitor voltage and current stress at min/max k and load.",
          "Leakage flux survey at defined points for EMC review.",
        ],
      },
      {
        heading: "Mechanical and thermal",
        bullets: [
          "OD/ID/coil datum documented on assembly drawings.",
          "Thermal soak at max ambient and fleet duty cycle.",
          "Vibration and impact per install environment.",
          "Potting process qualified with SRF and Hi-Pot on aged samples.",
        ],
      },
      {
        heading: "Fleet and field",
        paragraphs: [
          "Install guide: pad orientation, forbidden metal, torque specs. Spares BOM and replacement calibration step. Telemetry hooks for efficiency or Q drift if program supports predictive maintenance. Sign-off from power electronics, mechanical, EMC, and operations — coil design is never magnetics alone.",
        ],
      },
    ],
  }),
];
