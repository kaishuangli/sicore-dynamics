import type { KnowledgeArticle } from "@/lib/knowledge-articles/types";

const categoryId = "charging-stations";

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

/** Collection 06 — Charging Stations */
export const chargingStationsArticles: readonly KnowledgeArticle[] = [
  article({
    slug: "charging-dock",
    title: "Charging Dock",
    summary:
      "The integrated station where AGV and AMR vehicles park, align, and receive wireless power — combining mechanical guidance, resonant pad hardware, and fleet communication in one SiCore dock node.",
    sections: [
      {
        paragraphs: [
          "A charging dock is the physical and electrical endpoint of autonomous fleet energy management. In SiCore deployments it is not merely a power outlet: it integrates the transmitter coil and resonant inverter, enclosure thermal management, status indication, and network connectivity into a floor- or wall-mounted station sized for industrial traffic.",
          "Dock design spans mechanical capture geometry — how wide the alignment window is before coupling falls below charge thresholds — and electrical architecture — how much power the pad can deliver continuously across shift patterns without exceeding ferrite or semiconductor limits.",
        ],
      },
      {
        heading: "Core dock subsystems",
        bullets: [
          "Transmitter coil assembly with ferrite backing, shielding, and wear-resistant surface over the active area.",
          "Resonant inverter cabinet with FOD, thermal derating, and staged power ramp logic.",
          "Fleet interface: Ethernet, CAN gateway, or wireless backhaul for session control and telemetry.",
          "Mechanical interface: floor recess, bumper stops, tapered guides, or raised pad platform matched to vehicle footprint.",
        ],
      },
      {
        heading: "Dock placement and capture zone",
        paragraphs: [
          "Capture zone diameter defines how much navigation error the dock tolerates before charge rate collapses. SiCore dock specifications pair nominal k curves with minimum acceptable alignment scores so fleet planners size approach precision against pad count. A dock placed at a tight aisle intersection may need narrower capture but faster alignment assist than one in a dedicated charge bay.",
        ],
      },
      {
        heading: "Lifecycle and serviceability",
        paragraphs: [
          "Industrial docks accumulate mechanical abuse — tire scrub, fork impacts, cleaning chemicals. SiCore dock enclosures separate field-replaceable wear surfaces from the coil and electronics module so maintenance swaps do not require full recommissioning. Dock serial numbers tie to FOD baselines and calibration history in the fleet portal.",
        ],
      },
    ],
  }),

  article({
    slug: "charging-pad",
    title: "Charging Pad",
    summary:
      "The active wireless power surface — coil, ferrite stack, and protective cover — where flux couples to the vehicle receiver during AGV and AMR dock cycles.",
    sections: [
      {
        paragraphs: [
          "The charging pad is the user-visible power transfer interface: the area where transmitter flux crosses the air gap and induces current in the vehicle receiver. Pad geometry — coil diameter, turns, ferrite thickness, and gap to vehicle underside — sets the coupling coefficient k that every subsequent control decision depends on.",
          "Unlike consumer phone pads rated for occasional use, industrial charging pads must survive continuous duty: repeated thermal cycling, floor cleaning, metal debris proximity, and thousands of dock events per year without drift outside FOD baselines.",
        ],
      },
      {
        heading: "Pad construction elements",
        bullets: [
          "Litz or stranded copper winding optimized for skin-effect loss at operating frequency.",
          "Ferrite plate or distributed cores to shape flux and limit backward radiation into floor steel.",
          "Aluminum or composite shield below ferrite to contain stray fields toward the receiver.",
          "Replaceable top cover: textured polymer or sealed epoxy rated for AGV tire load and IP requirements.",
        ],
      },
      {
        heading: "Power class and footprint",
        paragraphs: [
          "Pad size scales with target power and vehicle receiver dimensions — not linearly. A 3 kW AMR pad may use a single DD coil; a 10 kW fork AGV may need a larger or dual-coil pad with phased excitation. SiCore pads are specified as matched pairs with receiver boards so impedance compensation is validated as a system.",
        ],
      },
      {
        heading: "Environmental considerations",
        paragraphs: [
          "Floor-level pads in wet or dusty environments require sealed enclosures and drain paths. Elevated pads reduce debris in the coupling gap but change vehicle approach geometry. Pad height, marking, and guarding are co-designed with LOD and site safety policy — the pad is both an electrical component and a floor fixture.",
        ],
      },
    ],
  }),

  article({
    slug: "docking-technology",
    title: "Docking Technology",
    summary:
      "Mechanical, sensor, and software methods that bring AGV and AMR vehicles into repeatable wireless coupling pose — the foundation on which resonant charge reliability depends.",
    sections: [
      {
        paragraphs: [
          "Docking technology encompasses everything that converts navigation-level arrival into millimeter-scale coil alignment. Wireless charging efficiency is unforgiving of pose error: lateral offset and angular yaw shift k faster than most fleet operators expect, so docking is treated as a precision motion problem, not an afterthought to navigation.",
          "SiCore systems assume docking is a layered stack: coarse navigation to the station zone, fine approach using dock-specific cues, and final micro-adjustment informed by alignment feedback from the pad or vehicle sensors.",
        ],
      },
      {
        heading: "Docking modalities",
        bullets: [
          "Mechanical funnel or V-guides that physically center the vehicle over the pad.",
          "Magnetic or optical lane following for the last meters of approach.",
          "Active alignment: pad-side or vehicle-side sensing drives closed-loop pose correction.",
          "Marker-based docking: QR, AprilTag, or retroreflectors for sub-centimeter station fix.",
        ],
      },
      {
        heading: "Feedback loops",
        paragraphs: [
          "Effective docking closes the loop between motion and charge readiness. SiCore pads can stream alignment quality scores — derived from reflected impedance, communication signal strength, or dedicated alignment coils — so the vehicle controller knows whether to nudge forward, rotate, or declare dock success. Open-loop dead reckoning alone is insufficient for high-power wireless at scale.",
        ],
      },
      {
        heading: "Integration with fleet software",
        paragraphs: [
          "Docking success rates belong in fleet KPIs alongside mission completion. Failed dock attempts consume aisle time and block pad availability. SiCore telemetry tags each session with approach path, alignment settle time, and abort reason so mechanical guide wear and navigation tuning issues surface before operators notice throughput loss.",
        ],
      },
    ],
  }),

  article({
    slug: "automatic-alignment",
    title: "Automatic Alignment",
    summary:
      "Closed-loop pose correction that automatically centers AGV and AMR receivers over the transmitter pad — maximizing coupling without operator intervention.",
    sections: [
      {
        paragraphs: [
          "Automatic alignment uses real-time feedback to drive the vehicle into optimal coupling pose after coarse navigation completes. The goal is repeatable high k within the seconds allocated to dock dwell — every centimeter of residual offset directly reduces charge rate or forces the power controller to derate.",
          "SiCore automatic alignment can run on-vehicle — using the robot's drive system — or cooperate with pad-side actuators in fixed-station designs where the vehicle cannot micro-move reliably.",
        ],
      },
      {
        heading: "Alignment signals",
        bullets: [
          "Mutual inductance or reflected impedance asymmetry indicating lateral offset direction.",
          "Dual-coil or tri-coil pad excitation patterns that triangulate receiver position.",
          "Ultrasonic or laser range to pad reference features on the vehicle approach axis.",
          "Visual fiducials with known transform to the coil center point.",
        ],
      },
      {
        heading: "Control sequence",
        paragraphs: [
          "Typical sequence: approach to capture radius → slow-speed alignment mode → iterative correction until alignment score exceeds threshold → hold pose and initiate charge handshake. SiCore alignment thresholds are configurable per vehicle type because receiver height and wheelbase differ across mixed fleets.",
        ],
      },
      {
        heading: "Limits and fallback",
        paragraphs: [
          "Automatic alignment has bounded travel — excessive correction attempts indicate navigation error or mechanical obstruction. After N failed iterations the robot should release, log diagnostics, and reroute rather than block the pad indefinitely. Alignment telemetry distinguishes software tuning issues from worn guides or tire pressure drift.",
        ],
      },
    ],
  }),

  article({
    slug: "vision-assisted-docking",
    title: "Vision Assisted Docking",
    summary:
      "Camera and vision pipelines that refine AGV and AMR dock pose using fiducials, feature matching, or pad recognition — complementing navigation and impedance-based alignment.",
    sections: [
      {
        paragraphs: [
          "Vision assisted docking adds optical sensing to the alignment stack when mechanical guides alone cannot achieve required k, or when pad placement variability demands adaptive final approach. Cameras on the vehicle, on the station, or both detect markers with known geometry relative to the coil center.",
          "Vision excels at resolving yaw and lateral offset simultaneously in unstructured bays where magnetic tape ends meters before the pad. SiCore integrates vision alignment scores with electrical coupling feedback so neither modality trusts a bad reading from the other.",
        ],
      },
      {
        heading: "Common vision patterns",
        bullets: [
          "Downward-facing camera on AMR detecting floor-mounted QR or AprilTag at pad center.",
          "Upward-facing camera on low-profile AGV reading overhead station markers.",
          "Pad surface pattern recognition when markers are impractical in harsh washdown environments.",
          "Stereo or structured-light for receiver height confirmation on variable-load vehicles.",
        ],
      },
      {
        heading: "Robustness in industrial conditions",
        paragraphs: [
          "Lighting variation, floor glare, and occlusions from payloads challenge vision pipelines. SiCore deployments specify marker contrast, enclosure overhang for shadow control, and exposure tuning for shift-change lighting transitions. Vision alignment degrades gracefully: if confidence drops below threshold, fall back to impedance-guided micro-moves or mechanical capture.",
        ],
      },
      {
        heading: "Calibration and maintenance",
        paragraphs: [
          "Camera-to-coil extrinsic calibration is stored per vehicle or station and verified at commissioning. Marker damage or relocation without recalibration produces systematic alignment bias visible in efficiency trends before hard charge failures. Vision-assisted docks benefit from the same predictive maintenance telemetry as purely electrical alignment.",
        ],
      },
    ],
  }),

  article({
    slug: "fleet-charging",
    title: "Fleet Charging",
    summary:
      "Charging strategy and infrastructure sizing for AGV and AMR fleets — balancing pad count, power levels, and shift schedules so every robot completes its mission energy budget.",
    sections: [
      {
        paragraphs: [
          "Fleet charging treats energy as a fleet-wide resource, not a per-robot convenience. Given N robots, mission energy draw, available dock windows, and charge rates, the question is whether the installed pad capacity sustains peak shift throughput — or whether robots queue, miss missions, or carry oversized batteries to compensate.",
          "SiCore fleet charging analysis starts from duty cycle simulation: route distances, payload profiles, idle dwell at stations, and acceptable SOC floors at mission start.",
        ],
      },
      {
        heading: "Sizing inputs",
        bullets: [
          "Peak concurrent robots needing charge vs total pad count and aisle access conflicts.",
          "Wireless charge rate at expected alignment quality — not datasheet peak in lab conditions.",
          "Battery capacity and chemistry limits on charge acceptance during short dock windows.",
          "Shift structure: single continuous run vs staggered breaks that create charge opportunity.",
        ],
      },
      {
        heading: "Mixed fleet considerations",
        paragraphs: [
          "Warehouses often run multiple vehicle types on shared aisles. SiCore multi-profile docks serve different receiver footprints and power classes, but fleet charging plans must account for incompatible pad assignments and routing to the correct station type. Universal pads reduce routing complexity at higher hardware cost.",
        ],
      },
      {
        heading: "Operational metrics",
        paragraphs: [
          "Track fleet-level charge minutes, pad utilization, average SOC at mission release, and charge-related mission delays. SiCore cloud dashboards aggregate per-pad and per-vehicle data so capacity additions are data-driven — adding pads where utilization exceeds target, not where installation is easiest.",
        ],
      },
    ],
  }),

  article({
    slug: "opportunity-charging",
    title: "Opportunity Charging",
    summary:
      "Top-off wireless charging during natural idle windows — at pick stations, queue buffers, or brief stops — so AGV and AMR fleets maintain SOC without dedicated charge trips.",
    sections: [
      {
        paragraphs: [
          "Opportunity charging exploits dwell time that already exists in the workflow. An AMR waiting at a pick face for the next order, an AGV buffering at a conveyor handoff, or a robot parked during a batch change — each idle window can deliver coulombs if a pad is within navigation reach.",
          "Wireless opportunity charging removes friction: no manual plug-in, no pin wear, and fast engagement when dock alignment is engineered into the station layout.",
        ],
      },
      {
        heading: "Where opportunity pads pay off",
        bullets: [
          "High-traffic pick-and-place stations with predictable dwell exceeding alignment plus ramp time.",
          "Loop routes with natural pause points near the end of each cycle.",
          "Buffer zones where robots queue anyway — charge while waiting for downstream capacity.",
          "Shift-boundary staging areas where robots idle before the next wave dispatches.",
        ],
      },
      {
        heading: "Design constraints",
        paragraphs: [
          "Opportunity windows are short — seconds to a few minutes — so load detect, frequency tracking, and power ramp must settle quickly. SiCore fast-start dock firmware pre-biases resonant frequency from the last successful mate at that pad and uses staged ramp profiles tuned for partial SOC top-offs rather than full CC/CV cycles.",
        ],
      },
      {
        heading: "Fleet software coordination",
        paragraphs: [
          "Not every idle moment should trigger charging: the fleet manager balances opportunity top-offs against pad wear, thermal accumulation, and mission urgency. SiCore APIs expose pause/resume and max-power caps so schedulers inject charge only when SOC margin and dwell time justify the dock overhead.",
        ],
      },
    ],
  }),

  article({
    slug: "high-availability-charging",
    title: "High Availability Charging",
    summary:
      "Architectures and operational practices that keep AGV and AMR fleet charging online — redundant pads, graceful degradation, and rapid recovery from dock faults.",
    sections: [
      {
        paragraphs: [
          "High availability charging (HAC) addresses the reality that a failed pad in a single-pad aisle can halt an entire shift. Production warehouses target charge availability comparable to conveyor uptime: redundant capacity, automatic failover routing, and maintenance workflows that do not require draining the fleet.",
          "SiCore HAC combines hardware reliability — derating margins, modular field replacement — with fleet-level redundancy — duplicate pads on critical loops and dynamic pad assignment.",
        ],
      },
      {
        heading: "Redundancy patterns",
        bullets: [
          "N+1 pad sizing: enough stations that one outage does not create charge queues exceeding mission slack.",
          "Dual-pad charge bays on high-traffic loops with automatic reroute on fault.",
          "Hot-swappable inverter and coil modules with preserved calibration on replaceable subassemblies.",
          "Geographic distribution so a single electrical panel trip does not dark out all docks in a zone.",
        ],
      },
      {
        heading: "Fault detection and isolation",
        paragraphs: [
          "Pads self-report fault latches — FOD trip, thermal shutdown, communication loss — to fleet software, which removes the station from assignment pools immediately. SiCore maintains last-known-good alignment and power telemetry so maintenance can pre-diagnose before arriving on site.",
        ],
      },
      {
        heading: "Maintenance without fleet stop",
        paragraphs: [
          "Scheduled service uses maintenance mode: reduced power, explicit human acknowledgment, and fleet geofencing that prevents autonomous assignment during work. Opportunistic pad rotation spreads wear and allows one bay offline during low-shift windows without production impact.",
        ],
      },
    ],
  }),

  article({
    slug: "charging-infrastructure",
    title: "Charging Infrastructure",
    summary:
      "Site-level electrical, network, and physical infrastructure that supports wireless charging stations for industrial AGV and AMR fleets — from mains feed to floor cutouts.",
    sections: [
      {
        paragraphs: [
          "Charging infrastructure is the facility layer beneath individual SiCore docks: electrical distribution sized for concurrent pad load, network backhaul for fleet integration, floor construction for pad mounting, and safety systems for human-present aisles.",
          "Undersized infrastructure manifests as breaker trips during lunch-rush charge storms, not as gradual performance decline — so planning must use concurrent load models, not average power.",
        ],
      },
      {
        heading: "Electrical design",
        bullets: [
          "Per-pad branch circuits vs shared feeders with load management and phase balance.",
          "Demand charge and power factor considerations at fleet scale.",
          "Emergency stop integration and lockout/tagout access for maintenance panels.",
          "Surge protection and grounding consistent with local codes and inverter input requirements.",
        ],
      },
      {
        heading: "Network and power backbone",
        paragraphs: [
          "Each dock needs reliable IP or fieldbus connectivity for session control, OTA firmware, and telemetry export. SiCore recommends segmented industrial VLANs with deterministic latency for charge handshake messages. PoE-powered auxiliary sensors — cameras, presence detectors — share the station cable plant where applicable.",
        ],
      },
      {
        heading: "Physical install",
        paragraphs: [
          "Floor recess pads require concrete cutouts with drainage and load rating for vehicle traffic crossing the pad when not charging. Raised pads need ramp geometry verified against vehicle ground clearance. Infrastructure drawings specify coil center, exclusion zones for steel plates, and cable tray routes before first pour — moving a pad after install is expensive.",
        ],
      },
    ],
  }),

  article({
    slug: "multi-robot-charging",
    title: "Multi-Robot Charging",
    summary:
      "Coordinating simultaneous wireless charging across multiple AGV and AMR robots — managing site power limits, pad assignment, and interference between adjacent active pads.",
    sections: [
      {
        paragraphs: [
          "Multi-robot charging occurs when several vehicles charge at once in the same aisle, bay, or electrical feeder. Each active pad draws real power and emits magnetic flux; nearby pads and receivers can cross-couple, and upstream breakers see summed load.",
          "SiCore multi-robot coordination ensures concurrent sessions stay within electrical and electromagnetic limits while maximizing throughput for waiting robots.",
        ],
      },
      {
        heading: "Coordination challenges",
        bullets: [
          "Aggregate power cap on shared feeders — dynamic derating when concurrent sessions exceed budget.",
          "Adjacent pad flux cross-talk affecting FOD baselines and coupling measurements.",
          "Pad assignment conflicts when multiple robots route to the same open station.",
          "Phase and frequency planning on multi-pad controllers to reduce inter-pad interference.",
        ],
      },
      {
        heading: "SiCore load management",
        paragraphs: [
          "Central or edge load managers assign max power setpoints per active pad based on real-time site headroom. Priority tiers — mission-critical low-SOC robots vs idle top-off — resolve contention. Local controllers enforce limits even if communication to the manager drops, preventing unsafe overcurrent.",
        ],
      },
      {
        heading: "Layout guidance",
        paragraphs: [
          "Minimum pad spacing, shielding between stations, and aisle traffic flow are co-designed at project stage. Simulation of worst-case concurrent charge — all pads active at rated power — validates breaker and transformer sizing before fleet go-live.",
        ],
      },
    ],
  }),

  article({
    slug: "autonomous-docking",
    title: "Autonomous Docking",
    summary:
      "Fully autonomous navigation-to-charge workflows where AGV and AMR robots reach, align with, and depart SiCore wireless docks without human intervention.",
    sections: [
      {
        paragraphs: [
          "Autonomous docking is the operational outcome of combining fleet navigation, docking technology, and intelligent power control into one unattended cycle. The robot receives a charge task, plans a path to an available pad, executes precision approach, completes wireless handshake, charges to target SOC or time limit, and clears the station for the next vehicle.",
          "SiCore autonomous docking assumes failure is routine: misalignment, occupied pads, and transient FOD trips are handled with retry logic and fleet-level rerouting, not operator calls.",
        ],
      },
      {
        heading: "End-to-end workflow",
        bullets: [
          "Charge task issuance from fleet manager based on SOC, schedule, and pad availability.",
          "Navigation to station with dynamic obstacle avoidance in shared aisles.",
          "Precision dock using automatic alignment, vision assist, or mechanical capture.",
          "Charge session execution with live SOC monitoring and early release if mission requires.",
        ],
      },
      {
        heading: "Departure and station clearance",
        paragraphs: [
          "Autonomy does not end at full SOC — the robot must vacate the pad promptly so downstream charge demand is not blocked. SiCore session complete signals trigger departure maneuvers; fleet software penalizes extended post-charge dwell in pad assignment algorithms.",
        ],
      },
      {
        heading: "Performance tuning",
        paragraphs: [
          "Autonomous docking KPIs include dock success rate, mean time to charge start, and charge minutes per shift hour. SiCore logs each phase separately so bottlenecks — slow navigation, alignment retries, or long frequency settle — are visible to both robotics and power engineering teams.",
        ],
      },
    ],
  }),

  article({
    slug: "smart-charging-management",
    title: "Smart Charging Management",
    summary:
      "Intelligent software that orchestrates wireless charging across AGV and AMR fleets — SOC targets, power caps, schedules, and battery health policies at the SiCore dock layer.",
    sections: [
      {
        paragraphs: [
          "Smart charging management sits between fleet mission software and SiCore dock hardware. It decides who charges, when, at what power, and to what SOC — optimizing throughput, electricity cost, and battery longevity without violating local FOD and thermal safety envelopes.",
          "The dock executes; the manager orchestrates. Distributed safety remains on the pad controller so a scheduler outage never leaves an unsafe power state unbounded.",
        ],
      },
      {
        heading: "Management capabilities",
        bullets: [
          "Per-vehicle SOC targets based on upcoming mission energy requirements.",
          "Dynamic power allocation under site load constraints and tariff windows.",
          "Battery health tiers: reduced charge rates for aged or flagged packs.",
          "Pad reservation and queue management to prevent routing collisions.",
        ],
      },
      {
        heading: "Policy engine",
        paragraphs: [
          "Operators define policies — minimum departure SOC, maximum charge C-rate, peak-hour derating — that the manager applies fleet-wide or per vehicle class. SiCore policy hooks integrate with WMS and MES signals so charge urgency rises when downstream pick faces starve for robots.",
        ],
      },
      {
        heading: "Observability",
        paragraphs: [
          "Smart management is only as good as its telemetry. Dashboards show active sessions, queued robots, policy overrides, and charge-related mission risk. Historical analysis connects management decisions to outcomes — did peak derating cause missed SLAs, or did it avoid demand charges that justified the trade?",
        ],
      },
    ],
  }),

  article({
    slug: "cloud-charging-network",
    title: "Cloud Charging Network",
    summary:
      "Cloud-connected SiCore charging infrastructure that aggregates dock telemetry, firmware, and fleet analytics across sites — enabling centralized monitoring and multi-facility energy management.",
    sections: [
      {
        paragraphs: [
          "A cloud charging network links distributed SiCore docks — within one warehouse or across a global operator footprint — into a unified telemetry and management plane. Each pad reports session data, fault events, efficiency scores, and firmware versions to a secure cloud backend accessible to fleet and maintenance teams.",
          "Cloud connectivity does not replace local control: charge safety loops remain on the dock. The cloud aggregates, analyzes, and configures — it does not close millisecond power loops over WAN latency.",
        ],
      },
      {
        heading: "Network services",
        bullets: [
          "Real-time pad status dashboards and alert routing to on-call maintenance.",
          "OTA firmware rollout with staged canary groups and automatic rollback on fault spikes.",
          "Cross-site benchmarking: efficiency and uptime compared across facilities and pad generations.",
          "API export to enterprise ERP, CMMS, and sustainability reporting for energy accounting.",
        ],
      },
      {
        heading: "Security and data governance",
        paragraphs: [
          "Industrial cloud deployments use TLS, device authentication, and tenant isolation per customer. Session data includes vehicle IDs and energy throughput — classification and retention follow operator policy. SiCore supports edge buffering so brief connectivity loss does not create telemetry gaps that break predictive maintenance models.",
        ],
      },
      {
        heading: "Multi-site fleet operations",
        paragraphs: [
          "Operators running identical vehicle platforms at multiple sites use cloud analytics to propagate tuning — alignment thresholds, charge profiles, maintenance intervals — from best-performing facilities to laggards. The cloud charging network turns each dock cycle at every site into fleet learning input rather than isolated local logs.",
        ],
      },
    ],
  }),
];
