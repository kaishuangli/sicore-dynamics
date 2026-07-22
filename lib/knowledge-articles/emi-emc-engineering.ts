import type { KnowledgeArticle } from "@/lib/knowledge-articles/types";

const categoryId = "emi-emc-engineering";

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

/** Collection 10 — EMI / EMC Engineering */
export const emiEmcEngineeringArticles: readonly KnowledgeArticle[] = [
  article({
    slug: "emi-basics",
    title: "EMI Basics",
    summary:
      "Electromagnetic interference fundamentals for SiCore wireless charging docks and AGV receivers — noise sources from high-frequency inverters, coupling paths in factory floor environments, and emission versus susceptibility behavior at 85–150 kHz WPT and megahertz switching harmonics.",
    sections: [
      {
        paragraphs: [
          "Electromagnetic interference (EMI) is any unwanted electromagnetic energy that degrades the performance of nearby equipment or causes a product to exceed regulatory emission limits. In SiCore wireless power systems, primary EMI sources include full-bridge or half-bridge inverters switching 400 V DC at 85–150 kHz for resonant tank excitation, gate-driver edges in the 10–50 ns range, and synchronous rectifier transitions on AGV receiver boards carrying 80–150 A. Secondary sources — ferrite saturation harmonics, DC bus ripple, and communication transceivers — contribute at distinct frequency bands that require separate mitigation strategies.",
          "Factory AGV deployments add environmental complexity: dense Wi-Fi and private LTE, variable-frequency drives on conveyor systems, arc welders in adjacent bays, and steel floor structures that reshape radiated field patterns around floor-flush charging pads. SiCore EMI engineering treats dock transmitters and onboard receivers as co-located aggressors and victims simultaneously — a receiver rectifier can pollute CAN and safety IO while the dock inverter couples into facility mains.",
        ],
      },
      {
        heading: "Emission and susceptibility",
        bullets: [
          "Conducted emission: high-frequency current injected onto AC mains, DC supply, and battery return paths via power cables and facility grounding.",
          "Radiated emission: E-field and H-field energy from coil windings, switching loops, cable harnesses, and enclosure apertures.",
          "Conducted susceptibility: product malfunction when noise enters via power ports — relevant for dock AC front-end and vehicle DC bus.",
          "Radiated susceptibility: demodulated or logic-level disruption from external fields — alignment sensors, wireless comms, and safety interlocks.",
          "Common-mode vs differential-mode: CM noise dominates long harness runs and facility ground; DM noise dominates local inverter loops.",
        ],
      },
      {
        heading: "Coupling mechanisms in WPT hardware",
        paragraphs: [
          "Capacitive coupling transfers energy across insulation gaps — from high dv/dt nodes on the resonant tank to nearby steel floor plates, vehicle frames, and alignment sense electrodes. Inductive coupling links switching current loops to parallel harnesses and CAN wiring routed under AGV belly pans without adequate separation. Conductive coupling shares ground impedance between dock electronics, facility earth, and vehicle chassis — a path often underestimated when commissioning multiple pads on a common concrete slab.",
          "Resonant WPT operation intentionally creates strong H-fields at the charge frequency; EMI engineering distinguishes intentional power transfer from parasitic harmonics and subharmonics that extend into CISPR-defined bands. Misaligned coils increase reflected power and inverter stress, often raising harmonic content before thermal limits are reached — EMI is frequently the first observable symptom of mechanical wear.",
        ],
      },
      {
        heading: "Design lifecycle integration",
        paragraphs: [
          "SiCore integrates EMI analysis at schematic, layout, mechanical, and firmware stages — not as a pre-certification afterthought. Pre-compliance scans on engineering builds identify dominant harmonics and loop areas; layout revisions target switching node compactness, return path continuity, and filter placement before tooling commits. Fleet telemetry correlates EMI-related faults — CAN errors during charge, spurious safety interlock trips, and mains breaker nuisance trips — with pad firmware revision and site grounding audit status.",
        ],
      },
    ],
  }),

  article({
    slug: "emc-standards",
    title: "EMC Standards",
    summary:
      "Electromagnetic compatibility standards applicable to SiCore industrial wireless charging docks and AGV receivers — product-family classifications, port definitions, test environment requirements, and harmonized limits for factory and logistics deployments.",
    sections: [
      {
        paragraphs: [
          "Electromagnetic compatibility (EMC) standards define maximum allowable emissions and minimum required immunity for electronic equipment operating in shared electromagnetic environments. SiCore dock and receiver products must satisfy regional frameworks — EU EMC Directive via harmonized EN standards, FCC Part 15 and Part 18 in North America, and customer-specific industrial requirements from automotive and intralogistics OEMs. Wireless power at industrial power levels often falls outside consumer WPT convenience categories; classification as industrial equipment, power conversion apparatus, or dedicated charging infrastructure determines applicable limit tables.",
          "Standards distinguish ports: AC mains input, DC output to vehicle battery, signal/control ports (CAN, Ethernet, IO), and enclosure radiated emissions. A floor-flush dock presents mains-conducted limits on the facility side and may require separate evaluation of radiated emissions from the pad surface and pit cavity. AGV receivers evaluate battery-port conducted emission and vehicle-mounted radiated profiles with the charging coil energized under representative alignment.",
        ],
      },
      {
        heading: "Key standard families",
        bullets: [
          "EN 61000-6-x: generic EMC immunity and emission for residential, commercial, and industrial environments — 6-2 emission, 6-4 industrial immunity common baselines.",
          "CISPR 11 / EN 55011: industrial, scientific, and medical equipment — group and class selection for high-power conversion products.",
          "CISPR 32 / EN 55032: multimedia and general ITE emission limits where control electronics dominate the spectral profile.",
          "IEC 61980 series: WPT for EV and industrial systems — alignment, interoperability, and EMC-relevant operating conditions.",
          "Automotive OEM specs (e.g., ISO 11452 derivatives, manufacturer EMC sheets): additional limits for AGV receivers integrated into customer vehicles.",
        ],
      },
      {
        heading: "Classification and limit selection",
        paragraphs: [
          "Group 1 equipment uses RF energy internally without intentional radiation; Group 2 includes ISM and WPT systems with intentional radiated fields — limit tables and measurement distances differ. Class A permits higher emission for industrial non-residential use; Class B applies where residential proximity exists — rare for warehouse docks but relevant for pilot installations in mixed-use campuses. SiCore documents group/class selection per SKU with rationale tied to intended deployment environment and maximum operating power.",
          "Harmonized standards under the EU EMC Directive require a Declaration of Conformity supported by technical documentation, risk analysis of foreseeable EM environments, and test evidence. North American certification paths may combine FCC equipment authorization with OSHA and NEC facility requirements — EMC is necessary but not sufficient for site acceptance.",
        ],
      },
      {
        heading: "Test planning and documentation",
        paragraphs: [
          "SiCore EMC test plans define worst-case operating modes before chamber time: maximum charge power, worst alignment within spec, simultaneous CAN telemetry, and multi-pad crosstalk where applicable. Mode selection is justified in the technical file — regulators and OEM auditors reject 'best-case' operating points. Pre-scan reports from accredited or internal semi-anechoic facilities gate layout freeze; final compliance tests use identical firmware, filter BOM, and cable harness part numbers as production.",
        ],
      },
    ],
  }),

  article({
    slug: "shielding",
    title: "Shielding",
    summary:
      "Electromagnetic shielding design for SiCore dock inverters and AGV receiver enclosures — enclosure seam control, aperture management, coil-field containment trade-offs, and material selection for high-frequency inverter products in steel-rich factory floors.",
    sections: [
      {
        paragraphs: [
          "Shielding attenuates electromagnetic fields by reflection, absorption, and multiple reflection within enclosed volumes — implemented through conductive enclosures, gaskets, cable entry filters, and selective metallization. SiCore wireless charging products face a fundamental tension: resonant WPT requires intentional magnetic coupling through the pad surface, while inverter harmonics and switching noise must not escape the dock pit or receiver compartment to disturb facility networks and neighboring automation.",
          "Floor-flush dock designs use aluminum or steel pit liners, sealed electronics boxes, and ferrite-backed coil assemblies to shape intentional fields downward while limiting upward fringing. AGV receivers mount in steel or aluminum belly enclosures where chassis conductivity provides partial shielding but also creates eddy-current loss and modified field topology during charge — shielding design must account for vehicle-specific geometry.",
        ],
      },
      {
        heading: "Enclosure and seam design",
        bullets: [
          "Continuous conductive path: lid-to-base contact via conductive gasket or machined flange — target < λ/20 slot length at highest concern frequency.",
          "Fastener pitch and grounding screws: avoid isolated cover panels that become slot antennas.",
          "Display and vent apertures: honeycomb vents, conductive mesh, or redirected airflow paths that preserve IP rating and shield integrity.",
          "Cable penetrations: filtered connectors or feed-through capacitors — unfiltered holes defeat solid-wall shielding.",
          "PCB-level shields: stamped cans over gate drivers, oscillators, and sensitive analog front-ends on receiver control boards.",
        ],
      },
      {
        heading: "Material selection and effectiveness",
        paragraphs: [
          "Aluminum enclosures offer weight advantage and good high-frequency reflection; steel provides higher permeability benefit for low-frequency H-field attenuation but adds mass and corrosion considerations in wash-down zones. Nickel-plated copper tape and conductive elastomers bridge gaps where mechanical tolerance prevents metal-to-metal contact across large dock plates. Shielding effectiveness is frequency-dependent — a sealed box excellent at 30 MHz may leak at 150 kHz WPT fundamental if the coil aperture is uncontrolled.",
          "SiCore does not rely on shielding alone for compliance: source reduction through layout and filtering remains primary; shielding provides margin and protects internal subsystems from mutual interference between inverter, comms, and safety MCU domains on multi-board dock controllers.",
        ],
      },
      {
        heading: "WPT-specific shielding trade-offs",
        paragraphs: [
          "Over-shielding the transmit coil face reduces coupling efficiency and increases reflected power — ferrite flux guides and aluminum back-plates are dimensioned to redirect fringing without blocking the intentional flux path to the receiver. Receiver-side ferrite shields protect onboard electronics from the dock field while maintaining open face orientation toward the pad. Commissioning includes verification that added shielding revisions do not shift detuning or foreign-object sensitivity beyond calibrated limits.",
        ],
      },
    ],
  }),

  article({
    slug: "grounding",
    title: "Grounding",
    summary:
      "Grounding and bonding architecture for SiCore wireless charging docks in AGV factory environments — facility earth integration, common-mode current paths, functional versus protective ground separation, and multi-pad site grounding audits.",
    sections: [
      {
        paragraphs: [
          "Grounding provides safety fault current return and establishes a reference for electromagnetic compatibility — but conflating the two roles causes chronic EMI problems in industrial installations. SiCore dock designs separate protective earth (PE) for shock protection from functional ground (FG) or signal reference planes on control electronics, bonded at a defined single-point or star location inside the dock controller enclosure. High-frequency inverter return currents must not share long impedance paths with CAN transceiver grounds or NTC sensor returns.",
          "AGV factory floors present non-ideal earth: concrete with rebar mesh, multiple building ground electrodes, and parallel ground paths through steel rack systems and vehicle tires. Multiple floor-flush pads on one aisle can circulate common-mode currents through facility ground when each dock's EMI filter capacitors tie switching noise to PE — site bonding audits are part of SiCore commissioning, not optional field tuning.",
        ],
      },
      {
        heading: "Dock grounding topology",
        bullets: [
          "PE bond: dock frame, pit liner, and AC inlet earth terminal tied to facility grounding conductor per NEC/IEC.",
          "Internal star point: inverter DC bus return, filter capacitor ground, and control PCB ground plane meet at controlled impedance node.",
          "Coil shield and ferrite back-plate: bonded to FG with optional Y-capacitor connection to PE through rated components.",
          "Cable shield termination: 360° clamp at enclosure entry — pigtail grounds are prohibited on SiCore harness drawings.",
          "Isolation barrier: galvanic separation between mains-side PE and vehicle-side DC reference where battery ground is floating or BMS-defined.",
        ],
      },
      {
        heading: "Common-mode and ground loop mitigation",
        paragraphs: [
          "Common-mode currents from DM-to-CM conversion in inverter filters exit via Y-capacitors to PE — excessive Y-capacitance improves conducted emission but increases ground leakage and touch current, requiring balance against safety standards. Ground loops form when dock signal grounds and vehicle CAN grounds connect through multiple paths: charging cable, steel floor, and wireless comms — differential CAN transceivers tolerate limited CM voltage; beyond ISO 11898 limits, bit errors correlate with charge sessions.",
          "SiCore specifies CAN grounding for fleet integration: single-point chassis bond on receiver, isolated transceiver where customer architecture demands, and maximum harness length from inverter noise sources. Ground potential rise during nearby VFD or welder events can elevate entire floor reference — immunity design assumes CM choke and filter margin, not zero-volt ground.",
        ],
      },
      {
        heading: "Site commissioning and measurement",
        paragraphs: [
          "Commissioning checklists verify PE continuity from each pad to building ground electrode, document ground rod and rebar coupling where known, and measure AC outlet ground impedance. Multi-pad sites record pad-to-pad ground potential difference with all pads at full power — unexpected millivolt-to-volt differences indicate parallel paths requiring bonding strap addition or filter revision. Grounding drawings update when facility electricians add outlets or move subpanels — EMC regression is triggered by infrastructure change, not only product change.",
        ],
      },
    ],
  }),

  article({
    slug: "filtering",
    title: "Filtering",
    summary:
      "Conducted and radiated EMI filtering for SiCore high-frequency inverters and AGV receiver power stages — AC and DC line filters, common-mode chokes, differential-mode capacitors, and filter placement for wireless charging dock mains inputs and battery interfaces.",
    sections: [
      {
        paragraphs: [
          "EMI filters attenuate unwanted frequency components before they propagate on conductors or excite radiating structures. SiCore dock inverters require AC mains filters sized for continuous multi-kilowatt input current with low insertion loss at 50/60 Hz and high attenuation above 150 kHz — the overlap between WPT fundamental and CISPR measurement bands demands careful filter design to avoid resonant peaks. Receiver-side DC filters suppress rectifier switching harmonics on the battery connection that otherwise radiate from vehicle harnesses and disturb BMS sense lines.",
          "Filter effectiveness depends on source impedance, load impedance, and placement relative to noise generation. Filters mounted at the AC inlet attenuate inverter noise before facility wiring acts as an antenna; filters placed incorrectly — after long internal leads — allow the enclosure interior to radiate despite compliant inlet measurement.",
        ],
      },
      {
        heading: "Filter component roles",
        bullets: [
          "Common-mode chokes: high CM impedance on L and N (or + and −) together — primary tool for mains and DC bus CM noise.",
          "X-capacitors (DM): across line conductors — attenuate differential noise; must be safety-rated and discharge-controlled.",
          "Y-capacitors (CM): line to ground — provide CM return path; limited by leakage current regulations.",
          "Feed-through capacitors: bulkhead-mounted for shielded cable entries on dock comms and safety IO.",
          "Ferrite beads and CM slugs: supplemental HF suppression on gate-driver supplies and CAN lines — not substitutes for power-line filters.",
        ],
      },
      {
        heading: "Dock and receiver filter architecture",
        paragraphs: [
          "SiCore dock AC filter stages integrate with PFC and inrush limiting — choke saturation at peak input current must not occur during soft-start or post-fault reclosure. Multi-stage LC filters use damped designs to avoid high-Q resonance when interacting with facility power factor correction capacitors on the same branch circuit — a common cause of field emission failures not seen in isolated lab LISN setups.",
          "Receiver DC output filters combine bulk electrolytic for low-frequency ripple and ceramic or film capacitors for MHz switching content from synchronous rectifiers. Layout places filter capacitors immediately adjacent to SR FET terminals with minimal loop area; external filter modules at the battery connector address harness inductance that on-board caps cannot overcome.",
        ],
      },
      {
        heading: "Validation and derating",
        paragraphs: [
          "Filter components operate hot in sealed dock pits — SiCore validates choke temperature rise at 50 °C ambient and maximum duty cycle; derating applies to capacitor RMS ripple current. Filter BOM is locked to compliance reports: substituting 'equivalent' chokes with different leakage inductance or core material shifts attenuation curves and voids certification. Pre-compliance LISN scans document margin per harmonic order, guiding incremental filter optimization before formal CISPR 11 testing.",
        ],
      },
    ],
  }),

  article({
    slug: "cispr",
    title: "CISPR",
    summary:
      "CISPR emission and immunity limits for SiCore industrial wireless charging equipment — CISPR 11 classification, quasi-peak and average detector usage, measurement bandwidth, and compliance strategy for high-power dock inverters in AGV logistics facilities.",
    sections: [
      {
        paragraphs: [
          "The International Special Committee on Radio Interference (CISPR) publishes limits and measurement methods adopted globally through regional standards — EN 55011 in Europe, ANSI C63.4 references in North America. SiCore high-power wireless charging docks align with CISPR 11 for industrial, scientific, and medical equipment when classified as power conversion apparatus operating in industrial environments. CISPR defines frequency ranges, detector types, measurement distances, and limit lines that differ from consumer CISPR 32/35 products — applying wrong limits wastes engineering effort or creates certification risk.",
          "WPT operation adds a controlled intentional radiator at 85–150 kHz while CISPR 11 measurements typically span 9 kHz to 400 MHz or higher depending on class. SiCore distinguishes between ISM band provisions for wireless power and harmonic emissions subject to standard limit curves — operating frequency registration and harmonic suppression are documented separately in the technical file.",
        ],
      },
      {
        heading: "CISPR 11 essentials",
        bullets: [
          "Group 1 vs Group 2: intentional RF energy users (Group 2) may have distinct provisions — WPT classification requires legal review per region.",
          "Class A (industrial) vs Class B (residential): limit levels and deployment restrictions differ.",
          "Conducted emission: measured on AC mains via LISN — quasi-peak (QP) and average (AV) limits per frequency band.",
          "Radiated emission: rod or biconical/log-periodic antennas at 3 m or 10 m distance per frequency range and power class.",
          "Measurement bandwidth and dwell time: 9 kHz RBW at low frequency, 120 kHz above 30 MHz — peak readings compared to QP limits per procedure.",
        ],
      },
      {
        heading: "WPT-specific CISPR considerations",
        paragraphs: [
          "Floor-flush dock radiated tests may require custom mounting to represent installed geometry — pit cavity, adjacent steel, and concrete affect low-frequency H-field and E-field results. Operating mode during test: maximum certified power, worst-case alignment within specification, and all cooling fans at maximum speed (worst-case acoustic noise correlates with worst-case conducted emission from motor drives where present).",
          "Harmonics of the switching frequency and intermodulation products from PFC switching (typically 20–100 kHz) often dominate below 1 MHz; layout and filter design target these before investing in chamber time above 30 MHz. CISPR 14 and 15 apply to adjacent product categories — SiCore avoids misclassification that triggers inappropriate plug-and-play appliance limits on fixed installed docks.",
        ],
      },
      {
        heading: "Compliance workflow",
        paragraphs: [
          "SiCore maintains correlation between internal semi-anechoic pre-scans and accredited lab results — systematic delta documented per product generation. Failures trigger root-cause hierarchy: operating mode validity, grounding and LISN setup, then hardware revision. CISPR test reports include photographs, cable routing, and firmware version — fleet customers audit these during vendor qualification for global logistics rollouts.",
        ],
      },
    ],
  }),

  article({
    slug: "fcc",
    title: "FCC",
    summary:
      "FCC electromagnetic compliance requirements for SiCore wireless charging docks and AGV systems sold in the United States — Part 15 unintentional radiator rules, Part 18 ISM provisions for industrial wireless power, authorization paths, and labeling for factory-installed infrastructure.",
    sections: [
      {
        paragraphs: [
          "The Federal Communications Commission regulates radio frequency devices to prevent harmful interference to authorized radio services. SiCore products sold or installed in the United States require applicable FCC equipment authorization — the path depends on whether the device is an intentional radiator (wireless power transmitter), unintentional radiator (digital control electronics), or both. Industrial wireless charging at kilowatt levels typically invokes Part 18 ISM equipment rules for the power transfer function alongside Part 15 Subpart B for digital circuitry and ancillary communications.",
          "Fixed installed dock infrastructure differs from mobile portable chargers: authorization, labeling, and user manual obligations reflect professional installation and controlled access environments common in AGV warehouses. Receivers integrated into customer vehicles may fall under OEM certification umbrellas or require separate modular approval depending on installation model.",
        ],
      },
      {
        heading: "Part 15 and Part 18 applicability",
        bullets: [
          "Part 15 Subpart B: unintentional radiators — conducted and radiated limits for digital devices above 9 kHz clock rates.",
          "Part 18: ISM equipment — industrial heating, RF stabilization, and wireless power in authorized ISM bands (including 13.56 MHz and sub-500 kHz allocations per rule interpretation).",
          "Part 15 Subpart C: intentional radiators if auxiliary wireless comms exceed applicable thresholds — evaluated separately from WPT.",
          "Verification vs Certification vs SDoC: authorization procedure selected per device category and rule part.",
          "FCC ID labeling: required on certified modules; SDoC products require compliance statement and responsible party contact.",
        ],
      },
      {
        heading: "Testing and authorization strategy",
        paragraphs: [
          "SiCore coordinates FCC testing with CISPR-aligned emission measurements where limits correlate — divergent requirements at specific frequencies receive dedicated margin analysis. Part 18 wireless power evaluations document operating frequency, field strength at defined distances, and harmonic suppression relative to ISM band edges. AC mains conducted emission for dock products uses ANSI C63.4 LISN procedures comparable to CISPR 11 with US-specific limit lines.",
          "Modular transmitter approvals allow receiver-only OEM integrations when the dock carries the FCC ID and installation instructions constrain co-location with other RF equipment. Change-of-hardware rules (Class I, II, III permutations) govern firmware and filter updates post-authorization — SiCore change control maps BOM revisions to FCC permissive change policy before fleet field updates.",
        ],
      },
      {
        heading: "Installation and operational obligations",
        paragraphs: [
          "Professional installation documentation addresses facility RF environment, minimum separation from sensitive receivers where recommended, and coordination with site RF surveys for defense or medical-adjacent logistics (uncommon but contractually specified). User manuals include interference resolution guidance: grounding verification, filter maintenance, and contact for SiCore support when co-channel facility systems exhibit degradation after pad commissioning.",
        ],
      },
    ],
  }),

  article({
    slug: "ce-compliance",
    title: "CE Compliance",
    summary:
      "CE marking EMC requirements for SiCore wireless charging docks and AGV receivers in the European market — EMC Directive 2014/30/EU, harmonized EN standards, technical documentation, and Notified Body involvement for products outside pure self-declaration scope.",
    sections: [
      {
        paragraphs: [
          "CE marking declares conformity with applicable EU directives before placing products on the European market. Electromagnetic compatibility falls under Directive 2014/30/EU — SiCore dock and receiver products demonstrate compliance through harmonized EN standards, a technical construction file, risk assessment of foreseeable EM environments, and a Declaration of Conformity signed by the responsible economic operator. CE EMC is distinct from RED (2014/53/EU) for radio equipment — WPT systems with integrated Wi-Fi or cellular gateways may require dual directive assessment.",
          "Industrial wireless charging at fixed installations still bears CE obligations on the apparatus placed on the market — the installer shares responsibility for correct integration, but the manufacturer cannot transfer EMC design duty to site electricians. SiCore supplies installation EMC guidelines: grounding, cable routing, and minimum separation from sensitive apparatus.",
        ],
      },
      {
        heading: "Harmonized standards and routes",
        bullets: [
          "EN 55011 (CISPR 11): emission limits for industrial equipment — primary dock inverter standard candidate.",
          "EN 61000-6-2 / EN 61000-6-4: generic immunity for industrial environments — ESD, burst, surge, conducted RF, radiated RF.",
          "EN 61980-x: WPT system requirements where applicable to operating conditions and safety-EMC interface.",
          "EN 61000-3-2 / EN 61000-3-12: harmonic current and voltage fluctuation on AC mains — PFC-equipped docks.",
          "Notified Body assessment: required when harmonized standards do not fully cover the product or when other directives mandate NB involvement.",
        ],
      },
      {
        heading: "Technical file contents",
        paragraphs: [
          "SiCore technical documentation includes product description, block diagrams, EMC test reports to harmonized EN methods, firmware version control records, filter and shielding BOM with supplier declarations, and analysis of worst-case operating modes. The EMC assessment identifies applicable standards, justifies exclusions, and documents margins below limit lines. Post-market surveillance captures field EMC incidents — CAN faults during charge in EU deployments feed back into technical file updates per EU accountability requirements.",
          "Immunity test evidence demonstrates continued safe operation and self-recovery after stress — dock controllers must not latch into unsafe power output states after EFT burst or surge events representative of industrial mains quality.",
        ],
      },
      {
        heading: "Labeling and market placement",
        paragraphs: [
          "CE mark appears on product nameplate with visible legibility after installation where practicable — dock pit installations may place marking on accessible controller enclosure inside the pit. Declaration of Conformity lists applied standards and signatory; EU authorized representative required for non-EU manufacturers. UKCA remains a parallel requirement for Great Britain post-Brexit — SiCore maintains separate conformity packages where market access demands.",
        ],
      },
    ],
  }),

  article({
    slug: "conducted-emission",
    title: "Conducted Emission",
    summary:
      "Conducted emission measurement and mitigation for SiCore dock AC mains inputs and AGV receiver DC battery ports — LISN setup, peak versus quasi-peak limits, noise mode identification, and troubleshooting in factory power networks with parallel loads.",
    sections: [
      {
        paragraphs: [
          "Conducted emission measures RF voltage (or current) present on external power cables — AC mains for dock transmitters and DC supply lines for AGV receivers and control electronics. High-frequency inverters generate switching frequency fundamentals and harmonics that propagate via differential and common-mode paths onto conductors; facility wiring then distributes noise to parallel loads including PLCs, servers, and lighting dimmers. SiCore conducted emission design targets both compliance margins and operational coexistence on shared branch circuits feeding multiple charging pads.",
          "Measurement uses a Line Impedance Stabilization Network (LISN) to present defined source impedance (50 Ω || 50 µH typical for mains) while passing AC or DC power. Results are compared to quasi-peak and average limit lines from CISPR 11 or EN 55011 — peak scans guide debugging; QP/AV determine pass/fail.",
        ],
      },
      {
        heading: "Noise modes and sources",
        bullets: [
          "Differential mode: line-to-neutral (or +/−) noise from inverter switching current in the DC bus loop.",
          "Common mode: equal-potential noise on both conductors relative to ground — dominates above filter corner without CM choke.",
          "PFC switching: distinct spectral lines at PFC frequency and harmonics overlapping WPT harmonics.",
          "Receiver SR switching: MHz content on battery cables radiating from harness if not filtered at source.",
          "Ground leakage from Y-caps: appears as conducted measurement artifact if LISN ground reference differs from installation.",
        ],
      },
      {
        heading: "Mitigation hierarchy",
        paragraphs: [
          "Source reduction precedes filtering: minimize inverter switching loop area, use soft-switching topologies where efficiency permits, and synchronize or spread spectrum only when regulatory analysis confirms acceptability. AC filter stages sized for continuous current without choke saturation; damper resistors on filter capacitors suppress LC resonance with facility power factor correction.",
          "DC conducted emission on receiver battery ports addresses BMS compatibility — OEM specs often impose stricter limits than generic industrial standards. SiCore places CM chokes on battery output where harness length exceeds 1 m or where customer qualification demands; measurement uses DC LISN or clamp-on current probe methods per OEM test plan.",
        ],
      },
      {
        heading: "Field troubleshooting",
        paragraphs: [
          "Site failures absent in lab often trace to installation variance: shared neutral impedance, missing PE bond, or parallel VFDs on the same subpanel. SiCore field engineers use portable spectrum analyzers with current probes on mains feeds during live charging — correlating spectral lines to inverter modes confirms product vs installation origin. Remediation may be filter retrofit, subpanel dedicated circuit, or facility harmonic mitigation — documented in commissioning closure reports.",
        ],
      },
    ],
  }),

  article({
    slug: "radiated-emission",
    title: "Radiated Emission",
    summary:
      "Radiated emission control for SiCore wireless charging coils and high-frequency inverter enclosures — near-field versus far-field behavior, antenna measurement setup, aperture and cable radiation, and floor-flush pad geometry effects in AGV factory environments.",
    sections: [
      {
        paragraphs: [
          "Radiated emission is electromagnetic energy propagating from the product into free space — measured as field strength versus frequency at defined distance with calibrated antennas. SiCore wireless charging systems combine intentional sub-MHz magnetic fields for power transfer with unintentional radiation from switching harmonics, enclosure slot antennas, and cable common-mode currents. Below roughly one wavelength, near-field H-field dominates around coils and high-current loops; above 30 MHz, far-field E-field from apertures and cables typically governs compliance.",
          "Semi-anechoic or open-area test sites measure radiated profiles with the product in worst-case orientation and height per CISPR 11. Floor-flush docks require representative installation fixtures — pit mockup, steel plate simulation, and cable exit routing matching field deployment — because radiated patterns differ from benchtop inverter boards alone.",
        ],
      },
      {
        heading: "Dominant radiating structures",
        bullets: [
          "Coil windings and tank capacitors: strong H-field at WPT frequency; harmonics extend into measured bands.",
          "Enclosure seams and vents: slot antennas when internal DM noise drives asymmetric currents on exterior surfaces.",
          "Unfiltered cable harnesses: CM current radiates efficiently — 'long wire' emission from CAN and mains pigtails.",
          "Gate-driver and PFC loops: cm-scale loops radiate MHz harmonics when return path is discontinuous.",
          "Receiver belly pan openings: compromised shield integrity radiates SR switching noise upward into vehicle electronics zone.",
        ],
      },
      {
        heading: "Control techniques",
        paragraphs: [
          "Layout minimizes high di/dt loop area and places switching nodes on inner PCB layers where feasible. Shielding cans, conductive gaskets, and filtered feed-throughs address enclosure leakage. Ferrite clamps and CM chokes on external cables suppress harness radiation — cable routing drawings specify separation from coil leads and mandate twisted pairs for signal harnesses crossing power zones.",
          "Intentional WPT field shaping uses ferrite flux guides and aluminum back-plates to direct energy toward the vehicle receiver while reducing upward and sideward fringing that contributes to radiated limits at low frequencies. Alignment tolerance analysis includes radiated profile — misalignment can increase reflected power and harmonic content simultaneously.",
        ],
      },
      {
        heading: "Measurement and margin management",
        paragraphs: [
          "SiCore pre-compliance uses rod antennas below 30 MHz and broadband antennas above — rotating product on turntable captures maximum emission azimuth. Photographs document antenna height, cable dressing, and absorber placement for reproducibility. Margin below limit at worst harmonic orders gates production release; fleet firmware updates undergo radiated regression assessment when switching frequency or power-stage topology changes.",
        ],
      },
    ],
  }),

  article({
    slug: "immunity-testing",
    title: "Immunity Testing",
    summary:
      "Electromagnetic immunity test requirements for SiCore dock controllers and AGV receivers — ESD, electrical fast transient, surge, conducted RF, and radiated RF stress per EN 61000-4 series for industrial factory and logistics environments.",
    sections: [
      {
        paragraphs: [
          "Immunity testing verifies that equipment continues to operate correctly — or fails safely — when exposed to external electromagnetic disturbances representative of industrial environments. SiCore wireless charging docks and receivers undergo EN 61000-4-x immunity suites aligned with EN 61000-6-2 (residential/commercial/light industrial) or EN 61000-6-4 (industrial) depending on declared environment. Failures during immunity stress manifest as CAN dropouts, false safety interlock trips, charge session aborts, or in worst cases uncontrolled power output — unacceptable outcomes requiring hardware or firmware hardening.",
          "AGV factory floors expose equipment to ESD from operator contact and vehicle triboelectric charging, EFT from contactor switching on shared mains, surge from lightning-induced transients on facility power, and radiated RF from nearby transmitters, VFDs, and mobile radios. Immunity levels selected for SiCore industrial SKUs exceed consumer product baselines.",
        ],
      },
      {
        heading: "Core immunity test methods",
        bullets: [
          "IEC 61000-4-2 ESD: contact and air discharge to enclosure, connectors, and user-accessible surfaces — ±8 kV contact typical industrial criterion.",
          "IEC 61000-4-4 EFT/Burst: fast transients on AC mains, DC ports, and signal cables — 2 kV on power ports common industrial level.",
          "IEC 61000-4-5 Surge: 1.2/50 µs voltage wave on AC mains — combination wave coupling through dock PFC front-end.",
          "IEC 61000-4-6 Conducted RF: 150 kHz–80 MHz injected on cables — validates CAN and mains immunity simultaneously.",
          "IEC 61000-4-3 Radiated RF: 80 MHz–6 GHz field in semi-anechoic chamber — operational monitoring during charge at rated power.",
        ],
      },
      {
        heading: "Performance criteria during WPT operation",
        paragraphs: [
          "SiCore defines immunity performance criteria per IEC 61000 series: Criterion A — normal operation within specification during test; Criterion B — temporary degradation with self-recovery; Criterion C — loss of function requiring operator intervention. Dock transmitters at rated charge power during radiated RF immunity must maintain power control within ±10% and must not exceed thermal or field-strength safety limits — Criterion A on safety functions, Criterion B acceptable on non-critical telemetry with logged recovery.",
          "ESD to CAN connectors must not corrupt safety interlock state — firmware validates CRC and redundant GPIO reads after ESD events. Surge immunity coordinates with MOV and gas discharge tube placement on AC inlet — failed surge test indicates inadequate coordination with PFC inrush, not merely missing TVS on signal lines.",
        ],
      },
      {
        heading: "Design for immunity and retest triggers",
        paragraphs: [
          "Immunity margin is designed into PCB partitioning: isolated transceivers, TVS and CM filter networks on external ports, watchdog and safe-state defaults on MCU reset, and hardware interlocks independent of software RF susceptibility. Cable shield termination, enclosure bonding, and filter BOM match immunity-validated configuration — field substitution of comm cables voids immunity claims.",
          "Retest triggers include MCU family change, new wireless comms module, AC front-end topology revision, and customer OEM spec updates. SiCore maintains immunity test correlation across product generations to avoid regression when cost-reducing filter components.",
        ],
      },
    ],
  }),
];
