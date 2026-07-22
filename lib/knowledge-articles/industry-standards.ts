import type { KnowledgeArticle } from "@/lib/knowledge-articles/types";

const categoryId = "industry-standards";

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

/** Collection 12 — Industry Standards */
export const industryStandardsArticles: readonly KnowledgeArticle[] = [
  article({
    slug: "qi",
    title: "Qi",
    summary:
      "WPC Qi baseline wireless charging for SiCore product teams — consumer inductive baseline, power class limits, and why AGV/AMR industrial WPT at kilowatt scale requires standards beyond Qi for safety, EMC, and fleet interoperability.",
    sections: [
      {
        paragraphs: [
          "Qi is the Wireless Power Consortium (WPC) baseline inductive charging specification for consumer and light commercial devices — defining communication protocols, coil geometries, power negotiation, and foreign object detection for pad-to-device transfer typically below 15 W (Baseline Power Profile) and up to 15 W Extended Power Profile on tightly coupled coils. SiCore engineers reference Qi as the de facto vocabulary for wireless charging interoperability — alignment ping, power transfer contract, and FOD concepts — even when industrial dock and AGV receiver products operate at power levels, frequencies, and duty cycles far outside Qi certification scope.",
          "Industrial autonomous vehicle charging in warehouses and manufacturing lines demands multi-kilowatt resonant transfer, floor-flush pit installations, continuous 24/7 operation, and integration with fleet management and facility safety PLCs — requirements Qi was not architected to address. SiCore does not substitute Qi compliance for industrial product qualification; instead, teams map which Qi principles (communication state machines, loss-based FOD thinking, thermal limits) inform design while recognizing that AGV WPT must satisfy SAE, IEC, UL, and regional EMC/safety frameworks appropriate to installed power and environment.",
        ],
      },
      {
        heading: "Qi scope vs industrial WPT",
        bullets: [
          "Power class: Qi consumer profiles cap at low tens of watts; SiCore dock systems deliver 3–11 kW+ to AGV receivers.",
          "Coupling geometry: Qi assumes handset-sized coils; industrial systems use large planar or DD coils with wide alignment tolerance.",
          "Frequency and topology: Qi BPP/EPP use defined bands and control; SiCore resonant systems may operate at industrial ISM allocations with different tuning.",
          "Safety context: Qi certification addresses portable equipment; fixed installations require mains-connected product safety per IEC/UL.",
          "Fleet integration: Qi has no provision for CAN/Ethernet fleet scheduling, multi-pad arbitration, or site E-stop interlocks.",
        ],
      },
      {
        heading: "Conceptual carryover for SiCore design",
        paragraphs: [
          "Qi protocol layers illustrate useful patterns: digital ping before power, identification and configuration packets, negotiated power level changes, and graceful shutdown on fault — SiCore industrial protocols implement analogous phases with vendor extensions for alignment search, BMS coordination, and telemetry. FOD in Qi relies on power loss accounting and Q-factor measurement; SiCore extends these techniques with thermal sensing and site calibration for metal-rich factory floors.",
          "Engineers evaluating third-party modules marketed as \"Qi-compatible\" for AGV pilots must verify whether the claim applies only to low-power auxiliary charging (e.g., handheld scanner pads) or incorrectly implies whole-vehicle industrial qualification. Document in product datasheets which interfaces, if any, align with WPC test points versus SiCore proprietary industrial stack.",
        ],
      },
      {
        heading: "Qualification path guidance",
        paragraphs: [
          "For SiCore products entering markets where customers ask \"Is it Qi?\": clarify that industrial WPT follows applicable industrial and automotive-adjacent standards (SAE J2954 concepts, IEC 61980 series, UL 2750) rather than WPC Qi certification for the high-power path. Low-power maintenance or accessory pads on AGVs may optionally pursue Qi certification as a separate SKU — do not conflate with main traction battery charging compliance. Reference WPC published specifications for terminology alignment in customer-facing technical briefs without asserting Qi logo eligibility on non-certified industrial hardware.",
        ],
      },
    ],
  }),

  article({
    slug: "qi2",
    title: "Qi2",
    summary:
      "WPC Qi2 and Magnetic Power Profile (MPP) evolution — tighter coupling and authentication for consumer devices, and why SiCore industrial AGV wireless charging remains outside Qi2 scope while benefiting from selected protocol and FOD refinements.",
    sections: [
      {
        paragraphs: [
          "Qi2 is the WPC next-generation specification built on the Magnetic Power Profile (MPP), introducing stronger magnetic alignment via magnets (MagSafe-style), higher power potential than legacy BPP, improved efficiency targets, and mandatory authentication to reduce counterfeit or unsafe chargers. Qi2 also refines foreign object detection and thermal management requirements for tightly coupled consumer ecosystems — smartphones, earbuds cases, and accessories where coil position is mechanically constrained.",
          "SiCore industrial wireless charging for AGV and AMR fleets operates in a different physical and regulatory domain: large-format coils, centimeter-scale alignment tolerance, resonant or hybrid topologies at kilowatt power, and integration with vehicle BMS and warehouse safety systems. Qi2 MPP coil and protocol specifications do not translate directly to floor-flush dock pads serving 500 kg–2 t vehicles — attempting to certify an AGV main charge path under Qi2 would misapply the standard and fail to cover installation, EMC, and functional safety expectations for fixed industrial equipment.",
        ],
      },
      {
        heading: "Qi2 technical themes relevant to SiCore",
        bullets: [
          "Authentication: Qi2 uses cryptographic device–charger authentication — SiCore evaluates analogous secure pairing for fleet authorization (vehicle ID, dock ID) without adopting WPC Qi2 auth stack for industrial CAN/Ethernet.",
          "Alignment aids: MPP magnetic alignment suits handheld form factors; AGV alignment uses mechanical guides, LiDAR docking, and coil positioning servos or wide tolerance coil design.",
          "FOD refinement: Qi2 FOD thresholds and testing objects inform SiCore test matrix design even when test limits differ at industrial power.",
          "Thermal models: Qi2 consumer thermal limits do not replace SiCore NTC arrays and derating for sealed pit installations.",
          "Coexistence: facilities may deploy Qi2 consumer pads for tools near SiCore AGV docks — EMC planning prevents interference between bands and control emissions.",
        ],
      },
      {
        heading: "Product and marketing boundaries",
        paragraphs: [
          "SiCore product management should distinguish clearly between optional Qi2-certified accessory charging (e.g., operator device pad mounted on AGV console) and the primary industrial WPT system. Marketing language must not imply Qi2 logo or \"Qi2-ready\" for main battery charging unless WPC certification is completed on that exact SKU — customers in regulated industries audit such claims.",
          "Engineering teams monitor WPC roadmap for protocol efficiency improvements and safety test methodology updates applicable to loss-detection algorithms — porting full Qi2 stack to industrial controllers is generally not cost-effective compared to SiCore optimized industrial protocol with fleet features Qi2 lacks.",
        ],
      },
      {
        heading: "Compliance strategy",
        paragraphs: [
          "When customers require wireless charging standards alignment, position Qi2 as the consumer ecosystem standard and direct industrial qualification to SAE J2954 (where automotive-adjacent), IEC 61980, UL 2750, and regional EMC directives. Pilot projects mixing Qi2 tool charging with SiCore AGV docks should document frequency plans, spatial separation, and conducted/radiated emission budgets in site EMC assessments — especially in dense charger aisles with parallel resonant inverters.",
        ],
      },
    ],
  }),

  article({
    slug: "airfuel",
    title: "AirFuel",
    summary:
      "AirFuel Alliance resonant and RF wireless power standards — comparison with inductive baselines, relevance to SiCore magnetic resonant AGV charging architecture, and practical guidance on when AirFuel certification applies versus SiCore industrial qualification paths.",
    sections: [
      {
        paragraphs: [
          "AirFuel Alliance (formerly Alliance for Wireless Power and Power Matters Alliance merged ecosystem) promotes wireless power standards spanning resonant magnetic coupling and uncoupled RF energy harvesting — contrasting with WPC Qi inductive dominance in consumer handsets. AirFuel Resonant specifications address higher power, greater z-axis tolerance, and multi-device charging scenarios closer in spirit to SiCore industrial WPT than Qi BPP — though still oriented historically toward consumer and light commercial power classes rather than multi-kilowatt AGV systems.",
          "SiCore resonant wireless charging topology — tuned primary and secondary networks, coupling coefficient optimization, and efficiency management across alignment variation — shares engineering lineage with AirFuel resonant principles. Teams reference AirFuel documentation for terminology (PTU, PRU analogs), interoperability testing philosophy, and efficiency measurement methods when communicating with partners familiar with that ecosystem, while recognizing SiCore industrial products require qualification beyond any single AirFuel profile for factory installed power.",
        ],
      },
      {
        heading: "AirFuel vs SiCore industrial stack",
        bullets: [
          "Power and duty: AirFuel resonant consumer/light commercial profiles do not replace SiCore thermal and electrical design for 24/7 AGV rotation.",
          "Protocol: AirFuel defines baseline communication; SiCore extends with BMS, fleet manager, and safety PLC interfaces.",
          "RF vs magnetic resonant: AirFuel RF branch targets IoT sensor powering — not SiCore main AGV charge path.",
          "Certification: AirFuel certification marks apply to tested SKUs; SiCore documents which products, if any, pursue alliance testing vs proprietary industrial compliance.",
          "Coexistence: mixed WPC and AirFuel consumer devices in facility do not dictate SiCore dock EMC strategy — IEC/CISPR industrial limits govern.",
        ],
      },
      {
        heading: "Engineering leverage points",
        paragraphs: [
          "AirFuel resonant testing methodologies for z-detachment tolerance and efficiency vs distance inform SiCore validation plans — adapt test fixtures to AGV mass, belly pan height variation, and floor flush pad geometry. Multi-device resonant sharing concepts from AirFuel research occasionally apply to multi-pad aisles where cross-coupling and simultaneous charge must be analyzed — SiCore EMC and control teams model pad-to-pad interaction independently of consumer certification scope.",
          "When suppliers offer \"AirFuel compatible\" coils or inverters, verify power rating, frequency, Q limits, and safety documentation for industrial reuse — consumer AirFuel modules rarely include mains isolation, surge, or SIL-rated interlocks required for SiCore dock installations.",
        ],
      },
      {
        heading: "Customer communication",
        paragraphs: [
          "For RFIs asking about AirFuel support: state SiCore architecture (magnetic resonant WPT), applicable industrial standards (IEC 61980, UL 2750, SAE J2954 where relevant), and whether specific SKUs hold AirFuel certification if pursued for strategic markets. Avoid implying equivalence between AirFuel consumer resonant logo and full AGV site acceptance — facility safety, grounding, and fleet integration remain SiCore and customer joint responsibility regardless of alliance membership.",
        ],
      },
    ],
  }),

  article({
    slug: "sae-j2954",
    title: "SAE J2954",
    summary:
      "SAE J2954 wireless power transfer for EVs — alignment, power classes, EMC and safety test structures that inform SiCore high-power AGV/AMR resonant charging design even when full automotive homologation differs from industrial deployment models.",
    sections: [
      {
        paragraphs: [
          "SAE J2954 is the Society of Automotive Engineers standard for wireless power transfer (WPT) for electric vehicles — defining terminology, minimum performance requirements, test procedures, and interoperability targets for vehicle-to-infrastructure magnetic WPT from light duty classes through higher power levels. It addresses alignment, coupling tolerance, power transfer control, foreign object and living object detection expectations, EMC emissions and immunity, and safety documentation structures developed with automotive OEM participation — making it the most directly applicable published standard for high-power magnetic WPT beyond consumer Qi.",
          "SiCore AGV and AMR wireless charging parallels SAE J2954 technically: kilowatt-scale resonant transfer, vehicle-mounted receiver (secondary), fixed ground assembly (primary), BMS coordination, and operational safety in occupied environments. Industrial deployments differ in vehicle mass and geometry, duty cycle (continuous logistics vs passenger parking), installation (floor-flush factory pit vs public parking pad), and regulatory path (industrial machinery and facility electrical codes vs FMVSS/NHTSA automotive type approval) — SiCore uses J2954 as engineering reference and selective test adoption rather than assuming automatic automotive homologation applies.",
        ],
      },
      {
        heading: "J2954 elements mapped to SiCore",
        bullets: [
          "Power classes (WPT 1–3): guide receiver and dock rating tiers — map SiCore SKU power levels to analogous class expectations for efficiency and FOD.",
          "Alignment and positioning: J2954 DD coil and tolerance specs inform SiCore mechanical docking and coil layout for AGV repeatability.",
          "Communications: J2954 baseline messaging concepts align with SiCore charge negotiation — industrial extensions add fleet and safety IO.",
          "FOD/LOD: J2954 safety performance targets reference object heating limits — SiCore adapts test objects and thresholds for factory metal debris context.",
          "EMC: J2954 EMC test categories provide structured immunity/emission matrix starting point for industrial site validation.",
        ],
      },
      {
        heading: "Automotive vs industrial qualification",
        paragraphs: [
          "Customers from automotive or automotive-adjacent logistics (e.g., line-side tugger AGVs in car plants) may explicitly request J2954 alignment. SiCore responds with gap analysis: which J2954 tests are performed in R&D validation, which map to IEC 61980/UL 2750 industrial product certification, and which automotive-only requirements (e.g., specific OEM supplemental specs) are out of scope unless contracted. Document test reports with traceability to J2954 clause references where applicable — aids customer PPAP and internal safety case arguments.",
          "SAE J2954 evolves with WPT power class extensions — SiCore monitors committee publications for updated FOD metrics and interoperability limits applicable to higher power industrial variants. Do not cite J2954 revision numbers in customer contracts without confirming current edition and agreed test subset.",
        ],
      },
      {
        heading: "Implementation guidance",
        paragraphs: [
          "Design reviews for new SiCore dock and receiver pairs should include J2954 checklist items: maximum permissible misalignment at rated power, minimum efficiency across alignment envelope, shutdown timing on FOD trip, and EMC performance at maximum charge power. Site commissioning for automotive customers may require demonstration of alignment repeatability across AGV fleet variance — leverage J2954 alignment test vocabulary in acceptance protocols even when formal third-party J2954 certification is not purchased for industrial SKU.",
        ],
      },
    ],
  }),

  article({
    slug: "iec-standards",
    title: "IEC Standards",
    summary:
      "IEC wireless power and industrial electrical standards for SiCore docks and AGV receivers — IEC 61980 WPT series, IEC 62368/60335 product safety context, EMC from CISPR 11/32, and system-level integration with IEC 61508 functional safety concepts.",
    sections: [
      {
        paragraphs: [
          "The International Electrotechnical Commission (IEC) publishes the primary global technical framework for wireless power transfer and industrial electrical equipment — most directly IEC 61980 (Electric vehicle wireless power transfer systems) multipart series covering general requirements, communication, positioning, EMC, and test methods for high-power WPT. SiCore dock and receiver products align engineering validation and product safety cases with IEC 61980 concepts adapted for industrial AGV/AMR duty, supplemented by horizontal standards: IEC 62368-1 for AV/ICT and power supply safety (where applicable), IEC 60335 for household and similar appliances (generally not primary for fixed industrial docks but referenced by CB schemes), and IEC 61000 EMC immunity suite for industrial environments.",
          "IEC standards are normative engineering references — not self-declaring legal compliance. SiCore uses them to structure design requirements, type tests, and documentation so customers in EU, Asia-Pacific, and global markets can map to local adoption (EN, GB, JIS harmonizations) and CB Test Certificate pathways where pursued.",
        ],
      },
      {
        heading: "Key IEC documents for SiCore WPT",
        bullets: [
          "IEC 61980-1: General requirements for WPT systems — safety, performance, and test philosophy for EV/industrial-scale WPT.",
          "IEC 61980-2/3: Communication and positioning — inform SiCore protocol and alignment specification.",
          "IEC 61980-4: EMC requirements and test methods for WPT — baseline for radiated/conducted limits at charge power.",
          "IEC 61000-4-x: Immunity tests (ESD, surge, EFT, voltage dips) for dock controllers in factory power quality environments.",
          "CISPR 11/32 (IEC): Industrial/scientific/medical and vehicle EMC emissions — select category matching installation (fixed vs onboard receiver).",
        ],
      },
      {
        heading: "Product safety and functional safety interface",
        paragraphs: [
          "SiCore mains-connected dock equipment applies electrical safety principles from applicable IEC product standards — creepage/clearance per IEC 60664, protective earthing, overcurrent and overvoltage, temperature and fire enclosure requirements. Receiver onboard equipment considers battery-connected apparatus requirements coordinated with customer BMS standards (often ISO 6469 and IEC 62619 for cells). Functional safety alignment references IEC 61508/61511 methodology for safety-related charge inhibit and E-stop response — SiCore documents SIL targets as system properties with customer PLC integration.",
          "CB Scheme testing to IEC 61980-related national deviations accelerates multi-country market entry — maintain test report index linking SiCore SKU to covered clauses and any national differences (e.g., plug types, voltage, language labels per IEC 60417/IEC 61346 symbol usage).",
        ],
      },
      {
        heading: "Engineering workflow",
        paragraphs: [
          "Requirements traceability matrices should cite IEC clause IDs for safety, EMC, and WPT performance — updated when IEC editions revise FOD test objects or EMC limits. R&D validation plans schedule IEC 61980-inspired alignment sweeps, efficiency maps, and FOD scenarios before UL or notified body submission. Field service manuals reference IEC symbol conventions for hazard marking on pit installations — high voltage, magnetic field, and simultaneous access warnings per local adoption of ISO 7010 graphical symbols in IEC-aligned markets.",
        ],
      },
    ],
  }),

  article({
    slug: "ul-standards",
    title: "UL Standards",
    summary:
      "UL wireless power and industrial product safety standards for SiCore charging docks — UL 2750 WPT equipment, UL 62368/508A panel integration context, listing versus recognition strategy, and NRTL field evaluation for installed AGV charger aisles.",
    sections: [
      {
        paragraphs: [
          "Underwriters Laboratories (UL) standards provide North American product safety certification framework heavily relied upon by US and Canadian authorities having jurisdiction (AHJs), insurers, and enterprise facility EHS teams. For wireless power transfer, UL 2750 (Outline of Investigation for Wireless Power Transfer Equipment) is the primary dedicated standard for WPT transmitters and receivers — covering electric shock, fire, mechanical hazards, FOD, temperature rise, and abnormal operation testing at declared power ratings. SiCore floor-flush dock assemblies and AGV-mounted receivers intended for US/Canada markets typically pursue UL 2750 listing or equivalent NRTL certification as core evidence of product safety.",
          "Fixed industrial installations also intersect UL 508A (industrial control panels) when dock power and control concentrate in listed panels, and UL 62368-1 where AV/ICT-style power supplies integrate — SiCore coordinates subcomponent recognition (Recognized Component Mark) for magnetics, capacitors, and isolation devices used in listed assemblies to simplify factory UL evaluation.",
        ],
      },
      {
        heading: "UL 2750 certification elements",
        bullets: [
          "Sample construction review: enclosure materials, flame ratings, spacing, grounding, and isolation barriers.",
          "Normal and abnormal operation: rated power transfer, blocked cooling, component fault simulation, FOD shutdown verification.",
          "Temperature testing: coil, capacitor, semiconductor, and surface touch temperature limits at maximum ambient.",
          "Strain relief and field wiring: terminal ratings for customer conduit entry in pit installations.",
          "Markings and manuals: installation clearances, maintenance under LOTO, replacement part specifications.",
        ],
      },
      {
        heading: "Listing strategy for SiCore portfolio",
        paragraphs: [
          "SiCore defines UL scope per catalog SKU — dock transmitter, receiver, combined system kit — matching how customers purchase and install. Field-installed modifications (customer-built pit liners, non-SiCore conduit runs) may trigger AHJ field evaluation (Special Inspection) even when product is UL listed — installation guides specify UL-compliant mounting, bonding, and ambient limits to minimize field evaluation findings.",
          "UL Recognized components in SiCore BOM accelerate listing maintenance — unauthorized substitute parts void certification unless engineering change order updates UL file. Firmware affecting safety functions (FOD thresholds, OVP, E-stop response) falls under UL software requirements in applicable categories — document version control linkage to UL certification file number.",
        ],
      },
      {
        heading: "AHJ and insurer engagement",
        paragraphs: [
          "Enterprise customers often require proof of UL listing before charger aisle capital approval — provide certificate PDF, UL file number, and conditions of acceptability (COA) clarifying voltage, power, and environment. Canadian installations may need cUL or cULus mark — confirm dual certification on SKU label. UL is directional engineering guidance for safety design; local NEC (NFPA 70) Article 625 and industrial wiring methods still govern conductor sizing, disconnecting means, and GFCI/ GFPE where applicable — SiCore installation drawings reference NEC coordination without providing electrical code engineering stamp unless contracted.",
        ],
      },
    ],
  }),

  article({
    slug: "fcc-requirements",
    title: "FCC Requirements",
    summary:
      "FCC Part 15 and Part 18 RF compliance for SiCore wireless charging docks and AGV receivers — intentional radiator classification, ISM field permissions, conducted and radiated limits, modular approval strategy, and industrial site RF planning in US deployments.",
    sections: [
      {
        paragraphs: [
          "Federal Communications Commission (FCC) rules govern radio frequency emissions from electronic equipment sold and operated in the United States. SiCore wireless charging systems emit magnetic near-field energy at industrial ISM frequencies (commonly tens to hundreds of kHz for resonant WPT, with harmonic content extending into MHz for switching edges) — triggering Part 18 (Industrial, Scientific, and Medical equipment) for RF energy used for ISM purposes, and potentially Part 15 unintentional radiator requirements for digital controllers, CAN/Ethernet, and oscillators regardless of WPT band.",
          "AGV-mounted receivers include switching converters and communication radios — may require separate Part 15 verification or modular certification integrated with vehicle FCC ID when sold as part of imported AMR platform. SiCore provides FCC compliance evidence (SDoC or Certification per device class) on dock transmitters and standalone receivers shipped to US customers — customers integrating receivers into vehicles retain responsibility for composite vehicle compliance when regulations apply.",
        ],
      },
      {
        heading: "Part 18 vs Part 15 applicability",
        bullets: [
          "Part 18 ISM WPT: field strength limits at defined measurement distances — validate at maximum rated power and worst alignment.",
          "Part 15 Subpart B: unintentional emissions from dock control electronics — Class A industrial vs Class B if residential-adjacent install.",
          "Part 15 intentional: if dock includes Wi-Fi/BLE for diagnostics — separate certified module with grantee limits.",
          "Harmonics and spurious: inverter switching and rectifier edges — spectrum analyzer sweeps beyond fundamental WPT frequency.",
          "Labeling: FCC ID or SDoC supplier declaration, compliance statements in manual, agent contact for US market.",
        ],
      },
      {
        heading: "Testing and modular strategy",
        paragraphs: [
          "SiCore RF compliance testing uses accredited US or TCB-accepted labs — document worst-case configurations: multi-pad simultaneous operation, maximum duty cycle, and receiver loading at minimum impedance. Modular approval for subassemblies (inverter module with shielded enclosure) can reduce retest scope on product variants if RF containment boundaries unchanged — maintain photos and construction details from original grant.",
          "Industrial facilities may operate multiple SiCore aisles in dense RF environments — Part 18 compliance is per device, but cumulative interference with plant radio systems (handheld scanners, AMR Wi-Fi) requires site RF survey beyond minimum FCC pass/fail. SiCore application notes recommend spatial planning and optional ferrite/ shielding for pit cable egress reducing conducted emissions on facility ground.",
        ],
      },
      {
        heading: "Importer and operator responsibilities",
        paragraphs: [
          "US importers must ensure FCC-compliant labeling before marketing — SiCore US SKU labels include required statements. Operators modifying firmware, antenna, or power stages void compliance unless re-tested. This article provides engineering directional guidance; formal FCC determinations for novel topologies require qualified RF compliance counsel and lab engagement — do not infer legal authorization from SiCore internal pre-scan data alone.",
        ],
      },
    ],
  }),

  article({
    slug: "ce-requirements",
    title: "CE Requirements",
    summary:
      "CE marking conformity for SiCore wireless charging equipment in the EU and EEA — LVD, EMC, RED/RoHS interfaces, harmonized EN standards under IEC 61980, Notified Body involvement, and EU Declaration of Conformity for industrial AGV charger deployments.",
    sections: [
      {
        paragraphs: [
          "CE marking indicates conformity with applicable European Union harmonized legislation for products placed on the EU/EEA market. SiCore dock and receiver products typically fall under multiple directives: Electromagnetic Compatibility (EMC) Directive 2014/30/EU, Low Voltage Directive (LVD) 2012014/35/EU for mains-connected equipment within 50–1000 V AC, Radio Equipment Directive (RED) 2014/53/EU if equipment intentionally transmits radio (e.g., integrated wireless telemetry above trivial field strengths), and Machinery Directive 2006/42/EC when sold as complete machine with combined charge and mechanical functions — applicability assessed per SKU and integration model.",
          "Harmonized EN standards provide presumption of conformity — EN IEC 61980 series for WPT, EN 55011/55032 for emissions, EN 61000-6-2/6-4 for immunity in industrial locations, EN 62368-1 or EN 60335-1 for electrical safety depending on product classification. SiCore maintains Technical Construction File (TCF) with risk assessment, test reports, and EU Declaration of Conformity (DoC) signed by responsible person — customers may request TCF excerpts under NDA for their facility CE compliance dossiers.",
        ],
      },
      {
        heading: "Conformity assessment building blocks",
        bullets: [
          "Risk assessment: mechanical, electrical, thermal, EMF exposure, and functional hazards for pit installation and AGV belly receiver.",
          "EMC testing: radiated and conducted emissions at max WPT power; immunity per industrial severity (ESD, EFT, surge, dips).",
          "Electrical safety: insulation, leakage, touch current, temperature, abnormal fault tests per applicable EN.",
          "EMF: assessment against Directive 2013/35/EU worker exposure where applicable for occupational charger zones.",
          "Documentation: DoC, user instructions in required languages, CE mark on rating plate with notified body number if applicable.",
        ],
      },
      {
        heading: "Notified Body and RED considerations",
        paragraphs: [
          "Most SiCore industrial WPT equipment uses internal compliance assessment (Module A) under LVD and EMC when harmonized standards fully cover product — RED may require Notified Body involvement for radio aspects if no fully applicable harmonized standard or using non-harmonized radio modules. Pre-certified radio modules with CE RED compliance simplify dock telemetry integration — verify module placement and antenna gain in final enclosure does not exceed module conditions.",
          "Machinery Directive integration applies when SiCore supplies charger as part of automated system with interlinked safety functions — coordinate with customer CE marking of complete AGV system per ISO 3691-4 and machinery risk assessment to avoid gaps between receiver CE and whole vehicle conformity.",
        ],
      },
      {
        heading: "Market surveillance readiness",
        paragraphs: [
          "EU market surveillance authorities may request TCF demonstration — SiCore archives test reports with version-linked firmware hashes. UKCA parallel requirements apply post-Brexit for Great Britain market — maintain separate conformity paths where customers require UK marking. CE guidance here is engineering directional; legal conformity strategy for novel WPT installations should involve EU authorized representative and notified body as required by directive scope — SiCore DoC covers SiCore manufactured equipment, not customer site electrical installation certified under local wiring rules.",
        ],
      },
    ],
  }),

  article({
    slug: "rohs",
    title: "RoHS",
    summary:
      "RoHS substance restrictions for SiCore wireless charging hardware — EU RoHS 2011/65/EU and aligned global schemes, homogenous material compliance evidence, supplier declarations, and exemptions relevant to high-power magnetics, solder, and industrial AGV electronics.",
    sections: [
      {
        paragraphs: [
          "Restriction of Hazardous Substances (RoHS) limits lead, mercury, cadmium, hexavalent chromium, and selected brominated flame retardants (PBB, PBDE) plus four phthalates (DEHP, BBP, DBP, DIBP under RoHS 3) in electrical and electronic equipment placed on EU market — with concentration limits in homogenous materials (typically 0.1% by weight except cadmium 0.01%). SiCore dock controllers, receivers, cables, and accessories shipped to EU, and many global customers mirroring RoHS in procurement specs, require RoHS-compliant bill of materials with supplier evidence chains.",
          "Industrial wireless charging products contain high-power magnetics, ceramic capacitors, heat sinks, connectors, and PCB assemblies — each homogenous material must comply or qualify under applicable RoHS exemptions with documented sunset tracking. RoHS is material compliance, not performance or safety — but enterprise AGV customers increasingly gate vendor approval on RoHS and REACH documentation alongside UL/CE certificates.",
        ],
      },
      {
        heading: "Compliance process for SiCore BOM",
        bullets: [
          "Supplier declarations (SDS/CoC): collect full material disclosures from magnet wire, ferrite, solder, and connector vendors.",
          "Homogenous material definition: distinguish plating vs base metal, potting compounds, and adhesive layers — each tested or declared.",
          "Exemption tracking: e.g., cadmium in specific uses, lead in high-melting solder — document expiry dates under Annex III/IV reviews.",
          "XRF screening and lab analysis: spot-check incoming lots for restricted substances when supplier risk elevated.",
          "Product labeling: RoHS compliance statement on datasheet and DoC — distinguish EU RoHS from China RoHS and California RoHS where requested.",
        ],
      },
      {
        heading: "Industrial-specific considerations",
        paragraphs: [
          "High-reliability industrial solder joints historically used leaded solder in prototypes — production EU SKUs must use RoHS-compatible alloys with reflow profile validation on heavy copper WPT boards to avoid voiding in high-current vias. Ferrite and copper magnetics are generally RoHS-relevant for surface coatings and adhesives rather than core composition — verify epoxy and coating on coil assemblies.",
          "Spare parts and field replacement modules must match original RoHS status — service BOM flagged separately if legacy exempt parts remain in supported installed base during exemption transition. Customer requests for RoHS-6 vs RoHS-10 (including phthalates) specify scope in procurement contracts — SiCore standard declaration covers RoHS 3 ten substances unless dated otherwise.",
        ],
      },
      {
        heading: "Documentation and audits",
        paragraphs: [
          "Maintain RoHS compliance folder per SKU linked to UL/CE file for customer audit efficiency — IMDS or IPC-1752 material declaration format when automotive logistics customers require. RoHS non-compliance blocks EU shipment — logistics systems should flag SKU destination and required conformity packet. This guidance supports engineering and supply chain direction; legal interpretation of exemption applicability for specific part numbers requires compliance specialist review when exemptions expire or designs change.",
        ],
      },
    ],
  }),

  article({
    slug: "reach",
    title: "REACH",
    summary:
      "EU REACH chemical registration and SVHC obligations for SiCore wireless charging products — Article 33 supply chain disclosure, candidate list tracking for polymer and coating components in docks and AGV receivers, and coordination with RoHS for customer compliance questionnaires.",
    sections: [
      {
        paragraphs: [
          "Registration, Evaluation, Authorisation and Restriction of Chemicals (REACH) Regulation (EC) No 1907/2006 governs chemical substances manufactured or imported into the EU — including substances present in articles (finished products) above 0.1% weight-by-weight of Substances of Very High Concern (SVHC) on the ECHA Candidate List. SiCore wireless charging docks and AGV receivers, as articles composed of metals, polymers, coatings, potting compounds, and electronic components, trigger REACH Article 33 duty to communicate safe use information and allow SCIP database notification obligations for SVHC-containing articles where applicable under revised requirements.",
          "REACH complements RoHS: RoHS bans specific substances in EEE; REACH may restrict or require authorization for broader chemical classes (e.g., certain phthalates, flame retardants, PFAS under evolving scrutiny) in any article component. Enterprise customers distributing SiCore-equipped AGVs in EU require REACH SVHC declarations in vendor portals alongside RoHS and CE documentation.",
        ],
      },
      {
        heading: "SiCore REACH workflow",
        bullets: [
          "Candidate List monitoring: subscribe to ECHA updates; assess new SVHCs against BOM within 45-day communication window.",
          "Supplier cascading: require REACH SVHC statements at homogenous material level from coil, PCB, enclosure, and cable vendors.",
          "Article 33 communication: provide SVHC identity and safe use info to customers if >0.1% in article — typically via compliance portal download.",
          "SCIP notification: EU waste framework requires notifying ECHA database for SVHC articles — coordinate with EU importer/Obligation holder if SiCore uses authorized representative.",
          "Restriction Annex XVII: monitor restricted substances (e.g., PAH in rubber feet, nickel release on touch surfaces) affecting mechanical BOM choices.",
        ],
      },
      {
        heading: "Component categories of focus",
        paragraphs: [
          "Polymers and elastomers in pit seals, cable jackets, and receiver enclosures — plasticizers and flame retardants frequently drive SVHC hits. Coatings and conformal coat on dock controllers — solvents and isocyanates tracked in supplier SDS. Solder paste and flux residues post-assembly — communicate RoHS and REACH status separately. Heavy industrial magnetics use epoxy systems — verify SVHC content in hardeners and fillers.",
          "Industrial customers may ask for full chemical inventory beyond SVHC — SiCore standard response tier: (1) RoHS declaration, (2) REACH SVHC >0.1% disclosure, (3) full material declaration under NDA for strategic accounts — scope defined in contract to avoid open-ended chemical audit liability.",
        ],
      },
      {
        heading: "Practical compliance notes",
        paragraphs: [
          "REACH obligations depend on role: manufacturer, importer, only representative — SiCore EU sales channel structure determines who holds registration duties for imported articles. UK REACH parallel regime applies for GB post-Brexit — mirror SVHC communication for UK customers when required. Engineering should spec alternate materials when SVHC added to candidate list and customer bans drive redesign — track obsolescence of affected part numbers in PLM. This article provides directional engineering and supply chain guidance, not legal advice on REACH authorization or restriction compliance for specific substances.",
        ],
      },
    ],
  }),
];
