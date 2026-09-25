export const integratedBoardCategories = [
  {
    id: "system-controller",
    label: "System Controller",
    description: "Central control for charging logic, status, and host systems.",
    image: "/images/product-controller.png",
  },
  {
    id: "power-management",
    label: "Power Management",
    description: "Thermal, current, and conversion management for high-duty charging.",
    image: "/images/stealth-1500w-pcb-top.png",
  },
  {
    id: "communication-hub",
    label: "Communication Hub",
    description: "Multi-protocol connectivity for fleets, docks, and OEM hosts.",
    image: "/images/stealth-800w-pcb-side.png",
  },
  {
    id: "wireless-interface",
    label: "Wireless Interface",
    description: "RF and near-field interface boards for wireless power links.",
    image: "/images/product-tx.png",
  },
  {
    id: "charging-circuit",
    label: "Power Supply Board",
    description: "Charge-path boards for CV/CC profiles and battery-side regulation.",
    image: "/images/product-rx.png",
  },
  {
    id: "fault-diagnostics",
    label: "Fault Diagnostics",
    description: "Monitoring and diagnostics boards for protection and fault reporting.",
    image: "/images/stealth-800w-pcb-top.png",
  },
] as const;

export type IntegratedBoardCategoryId = (typeof integratedBoardCategories)[number]["id"];

export const integratedBoards = [
  {
    id: "system-controller",
    categoryId: "system-controller" as const,
    brand: "SiCore Dynamics",
    label: "System Controller",
    title: "System Controller Board",
    tagline: "Central orchestration for charging logic, status, and host systems.",
    description:
      "The System Controller Board coordinates TX/RX handshakes, charging profiles, telemetry, and host interfaces — the digital brain for SiCore wireless power systems.",
    image: "/images/product-controller.png",
    imageAlt: "SiCore System Controller Board",
    highlights: [
      { label: "Charging State Machine", icon: "comms" as const },
      { label: "Host System APIs", icon: "industrial" as const },
      { label: "Telemetry Ready", icon: "efficiency" as const },
      { label: "Multi-Protocol I/O", icon: "safe" as const },
    ],
    features: [
      {
        title: "Charging Orchestration",
        description: "Manages detection, startup, CV/CC profiles, and safe shutdown sequences.",
        icon: "comms" as const,
      },
      {
        title: "Host Integration",
        description: "Exposes status and control to fleet managers, PLCs, and OEM controllers.",
        icon: "industrial" as const,
      },
      {
        title: "Runtime Telemetry",
        description: "Tracks power, temperature, and fault states for predictive maintenance.",
        icon: "efficiency" as const,
      },
      {
        title: "Safety Interlocks",
        description: "Coordinates protection events across TX, RX, and dock peripherals.",
        icon: "safe" as const,
      },
    ],
    applications: [
      {
        title: "Fleet Charging Hubs",
        description: "Central control for multi-bay wireless charging installations.",
        image: "/images/app-800w-amr.png",
        imageAlt: "Heavy-duty AMR charging hub",
      },
      {
        title: "Smart Factory Lines",
        description: "Supervisory board for automated production charging cells.",
        image: "/images/app-800w-mobile-robot.png",
        imageAlt: "Smart factory mobile robot",
      },
      {
        title: "Medical Mobile Equipment",
        description: "Controlled charging logic for hospital carts and disinfection robots.",
        image: "/images/app-200w-medical-uv.png",
        imageAlt: "Medical mobile equipment",
      },
      {
        title: "Campus Vehicles",
        description: "System control for utility vehicle and campus transport docks.",
        image: "/images/app-1500w-campus.png",
        imageAlt: "Campus transport vehicle charging",
      },
    ],
    specs: [
      { label: "Function", value: "System control & telemetry" },
      { label: "Interfaces", value: "CAN / UART / RS485 / GPIO" },
      { label: "Profiles", value: "CV / CC / opportunity charge" },
      { label: "Monitoring", value: "Power, temp, fault codes" },
      { label: "Integration", value: "Dock or cabinet mount" },
      { label: "Operating Temperature", value: "-20°C to +60°C" },
    ],
    cta: {
      title: "Control Every Charging Cycle.",
      description: "Talk with SiCore engineering about controller firmware and host APIs.",
      stats: [
        { label: "State Machine", icon: "comms" as const },
        { label: "Host Ready", icon: "industrial" as const },
        { label: "Telemetry", icon: "efficiency" as const },
        { label: "Engineering Support", icon: "support" as const },
      ],
    },
  },
  {
    id: "power-management",
    categoryId: "power-management" as const,
    brand: "SiCore Dynamics",
    label: "Power Management",
    title: "Power Management Board",
    tagline: "Thermal, current, and conversion management for high-duty charging.",
    description:
      "The Power Management Board handles current sensing, thermal pathways, and conversion stages that keep high-power wireless systems stable under continuous industrial duty.",
    image: "/images/stealth-1500w-pcb-top.png",
    imageAlt: "SiCore Power Management Board",
    highlights: [
      { label: "Thermal Oversight", icon: "thermal" as const },
      { label: "Current Sensing", icon: "power" as const },
      { label: "High-Duty Design", icon: "efficiency" as const },
      { label: "Industrial Protection", icon: "safe" as const },
    ],
    features: [
      {
        title: "Active Thermal Awareness",
        description: "Temperature sensing and derating logic for 24/7 charging cells.",
        icon: "thermal" as const,
      },
      {
        title: "Precision Current Paths",
        description: "Sensing and regulation suited to mid- and high-power wireless platforms.",
        icon: "power" as const,
      },
      {
        title: "Efficiency Under Load",
        description: "Layout and conversion stages tuned for continuous opportunity charging.",
        icon: "efficiency" as const,
      },
      {
        title: "Hardened Protection",
        description: "Industrial protections for overcurrent, overvoltage, and overtemperature.",
        icon: "safe" as const,
      },
    ],
    applications: [
      {
        title: "High-Power Docks",
        description: "Power staging for 800W–3000W industrial charging infrastructure.",
        image: "/images/product-3000w.png",
        imageAlt: "High-power wireless charging system",
      },
      {
        title: "Heavy AMR Platforms",
        description: "Thermal-aware power boards for warehouse heavy movers.",
        image: "/images/app-800w-amr.png",
        imageAlt: "Heavy-duty AMR",
      },
      {
        title: "Forklift Charging",
        description: "Stable conversion for autonomous forklift opportunity charge.",
        image: "/images/app-1500w-forklift.png",
        imageAlt: "Autonomous forklift charging",
      },
      {
        title: "Outdoor Machinery",
        description: "Rugged power management for agricultural electric platforms.",
        image: "/images/app-1500w-agriculture.png",
        imageAlt: "Agricultural machinery charging",
      },
    ],
    specs: [
      { label: "Function", value: "Power & thermal management" },
      { label: "Power Class Support", value: "800W – 3000W platforms" },
      { label: "Sensing", value: "Current / temperature" },
      { label: "Protection", value: "OCP / OVP / OTP" },
      { label: "Cooling Support", value: "Passive / active fan ready" },
      { label: "Operating Temperature", value: "-20°C to +60°C" },
    ],
    cta: {
      title: "Keep High Power Cool and Stable.",
      description: "Ask for power-board specs and thermal design guidelines.",
      stats: [
        { label: "Thermal Control", icon: "thermal" as const },
        { label: "High Power", icon: "power" as const },
        { label: "High Efficiency", icon: "efficiency" as const },
        { label: "Engineering Support", icon: "support" as const },
      ],
    },
  },
  {
    id: "communication-hub",
    categoryId: "communication-hub" as const,
    brand: "SiCore Dynamics",
    label: "Communication Hub",
    title: "Communication Hub Board",
    tagline: "Multi-protocol connectivity for fleets, docks, and OEM hosts.",
    description:
      "The Communication Hub Board bridges wireless charging hardware to fleet software through CAN, RS485, UART, and optional wireless links — built for industrial visibility and control.",
    image: "/images/stealth-800w-pcb-side.png",
    imageAlt: "SiCore Communication Hub Board",
    highlights: [
      { label: "Multi-Protocol I/O", icon: "comms" as const },
      { label: "Fleet Visibility", icon: "efficiency" as const },
      { label: "OEM Host Bridge", icon: "industrial" as const },
      { label: "Secure Status Paths", icon: "safe" as const },
    ],
    features: [
      {
        title: "Industrial Fieldbuses",
        description: "CAN and RS485 connectivity for factories, warehouses, and campus systems.",
        icon: "comms" as const,
      },
      {
        title: "Fleet-Level Status",
        description: "Publishes charge state, faults, and availability to supervisory software.",
        icon: "efficiency" as const,
      },
      {
        title: "OEM Host Bridging",
        description: "Adapts SiCore charging events to customer controllers and cloud gateways.",
        icon: "industrial" as const,
      },
      {
        title: "Reliable Messaging",
        description: "Designed for noisy industrial environments with robust link handling.",
        icon: "safe" as const,
      },
    ],
    applications: [
      {
        title: "Fleet Management",
        description: "Connect docks and robots into unified charging dashboards.",
        image: "/images/app-800w-amr.png",
        imageAlt: "Fleet management charging context",
      },
      {
        title: "Warehouse Networks",
        description: "Bridge charging cells into WMS and AMR orchestration stacks.",
        image: "/images/app-200w-amr.png",
        imageAlt: "Warehouse AMR network",
      },
      {
        title: "Campus Infrastructure",
        description: "Link outdoor docks to facility energy and vehicle systems.",
        image: "/images/app-1500w-campus.png",
        imageAlt: "Campus charging infrastructure",
      },
      {
        title: "OEM Platforms",
        description: "Drop-in connectivity for custom robot and dock OEMs.",
        image: "/images/app-800w-mobile-robot.png",
        imageAlt: "OEM mobile robot platform",
      },
    ],
    specs: [
      { label: "Function", value: "Multi-protocol communication hub" },
      { label: "Interfaces", value: "CAN / RS485 / UART / GPIO" },
      { label: "Role", value: "Dock ↔ robot ↔ host bridge" },
      { label: "Data", value: "Status, faults, charge events" },
      { label: "Integration", value: "Cabinet or robot embed" },
      { label: "Operating Temperature", value: "-20°C to +60°C" },
    ],
    cta: {
      title: "Connect Charging To Your Fleet Stack.",
      description: "Request protocol maps and sample host integration packets.",
      stats: [
        { label: "Multi-Protocol", icon: "comms" as const },
        { label: "Fleet Ready", icon: "efficiency" as const },
        { label: "OEM Bridge", icon: "industrial" as const },
        { label: "Engineering Support", icon: "support" as const },
      ],
    },
  },
  {
    id: "wireless-interface",
    categoryId: "wireless-interface" as const,
    brand: "SiCore Dynamics",
    label: "Wireless Interface",
    title: "Wireless Interface Board",
    tagline: "RF and near-field interface for stable wireless power links.",
    description:
      "The Wireless Interface Board manages coil-side signaling, resonant coupling control, and link establishment between transmitter and receiver modules in SiCore wireless charging systems.",
    image: "/images/product-tx.png",
    imageAlt: "SiCore Wireless Interface Board",
    highlights: [
      { label: "Resonant Link Control", icon: "power" as const },
      { label: "Alignment Tolerant", icon: "alignment" as const },
      { label: "Low EMI Design", icon: "efficiency" as const },
      { label: "OEM Coil Pairing", icon: "industrial" as const },
    ],
    features: [
      {
        title: "Stable Wireless Link",
        description: "Maintains coupling integrity through dock approach and contactless charging.",
        icon: "power" as const,
      },
      {
        title: "Misalignment Tolerance",
        description: "Supports real-world offset and yaw variation during autonomous docking.",
        icon: "alignment" as const,
      },
      {
        title: "EMI-Conscious Layout",
        description: "Board design tuned for industrial environments with neighboring electronics.",
        icon: "efficiency" as const,
      },
      {
        title: "TX/RX Pair Ready",
        description: "Integrates with SiCore coil assemblies across power classes.",
        icon: "industrial" as const,
      },
    ],
    applications: [
      {
        title: "Wireless Charging Docks",
        description: "Interface boards for fixed pads serving AMRs and service robots.",
        image: "/images/app-200w-amr.png",
        imageAlt: "AMR at wireless charging dock",
      },
      {
        title: "AGV Charging Stations",
        description: "Link-layer interface for factory and warehouse opportunity charging.",
        image: "/images/app-800w-agv.png",
        imageAlt: "AGV at charging station",
      },
      {
        title: "Service Robot Hubs",
        description: "Near-field interface for hospitality and campus robot docks.",
        image: "/images/app-200w-service.png",
        imageAlt: "Service robot hub docking",
      },
      {
        title: "Outdoor Dock Systems",
        description: "Rugged wireless interface for agricultural and campus pads.",
        image: "/images/app-800w-agriculture.png",
        imageAlt: "Agricultural robot charging context",
      },
    ],
    specs: [
      { label: "Function", value: "Wireless link & coil interface" },
      { label: "Power Class Support", value: "60W – 3000W platforms" },
      { label: "Link Role", value: "TX / RX coil-side interface" },
      { label: "Alignment Support", value: "Offset / yaw tolerant" },
      { label: "Integration", value: "Pad or robot-side embed" },
      { label: "Operating Temperature", value: "-20°C to +60°C" },
    ],
    cta: {
      title: "Stabilize Your Wireless Power Link.",
      description: "Request interface board specs and coil pairing guidance.",
      stats: [
        { label: "Link Control", icon: "power" as const },
        { label: "Alignment Ready", icon: "alignment" as const },
        { label: "OEM Pairing", icon: "industrial" as const },
        { label: "Engineering Support", icon: "support" as const },
      ],
    },
  },
  {
    id: "charging-circuit",
    categoryId: "charging-circuit" as const,
    brand: "SiCore Dynamics",
    label: "Power Supply Board",
    title: "Power Supply Board",
    tagline: "CV/CC charge-path regulation for battery-side wireless power.",
    description:
      "The Power Supply Board delivers regulated charge paths for robot and vehicle batteries, supporting constant-voltage / constant-current profiles with protection suited to continuous opportunity charging.",
    image: "/images/product-rx.png",
    imageAlt: "SiCore Power Supply Board",
    highlights: [
      { label: "CV / CC Profiles", icon: "power" as const },
      { label: "Battery-Friendly Output", icon: "efficiency" as const },
      { label: "Charge-Path Protection", icon: "safe" as const },
      { label: "Mobile Platform Ready", icon: "industrial" as const },
    ],
    features: [
      {
        title: "Flexible Charge Profiles",
        description: "Supports CV/CC and opportunity-charge workflows across battery chemistries.",
        icon: "power" as const,
      },
      {
        title: "Efficient Conversion",
        description: "Low-loss charge path design for extended dock and onboard duty cycles.",
        icon: "efficiency" as const,
      },
      {
        title: "Protected Power Path",
        description: "OCP, OVP, and OTP safeguards on the battery-facing output stage.",
        icon: "safe" as const,
      },
      {
        title: "Robot Embed Form Factor",
        description: "Compact layout for AMR, AGV, and service-robot battery compartments.",
        icon: "industrial" as const,
      },
    ],
    applications: [
      {
        title: "AMR Fleets",
        description: "Onboard charge circuits for warehouse and hospital mobile robots.",
        image: "/images/app-200w-amr.png",
        imageAlt: "AMR fleet wireless charging",
      },
      {
        title: "Cleaning Robots",
        description: "Reliable charge-path boards for commercial cleaning platforms.",
        image: "/images/app-200w-cleaning.png",
        imageAlt: "Cleaning robot charging",
      },
      {
        title: "Inspection Platforms",
        description: "Stable battery charging for inspection and security robots.",
        image: "/images/app-200w-inspection.png",
        imageAlt: "Inspection robot platform",
      },
      {
        title: "Forklift Platforms",
        description: "High-energy charge circuits for autonomous forklift packs.",
        image: "/images/app-1500w-forklift.png",
        imageAlt: "Autonomous forklift charging",
      },
    ],
    specs: [
      { label: "Function", value: "Charge-path regulation" },
      { label: "Profiles", value: "CV / CC / opportunity charge" },
      { label: "Battery Support", value: "Lead-acid / lithium packs" },
      { label: "Protection", value: "OCP / OVP / OTP" },
      { label: "Integration", value: "Onboard robot embed" },
      { label: "Operating Temperature", value: "-20°C to +60°C" },
    ],
    cta: {
      title: "Regulate Every Charge Path.",
      description: "Get charging-circuit drawings and battery integration notes.",
      stats: [
        { label: "CV / CC Ready", icon: "power" as const },
        { label: "High Efficiency", icon: "efficiency" as const },
        { label: "Protected Path", icon: "safe" as const },
        { label: "Engineering Support", icon: "support" as const },
      ],
    },
  },
  {
    id: "fault-diagnostics",
    categoryId: "fault-diagnostics" as const,
    brand: "SiCore Dynamics",
    label: "Fault Diagnostics",
    title: "Fault Diagnostics Board",
    tagline: "Monitoring and diagnostics for protection events and system health.",
    description:
      "The Fault Diagnostics Board captures protection events, sensor readings, and health status across the charging stack — enabling faster troubleshooting and safer continuous operation.",
    image: "/images/stealth-800w-pcb-top.png",
    imageAlt: "SiCore Fault Diagnostics Board",
    highlights: [
      { label: "Fault Code Capture", icon: "safe" as const },
      { label: "Sensor Telemetry", icon: "efficiency" as const },
      { label: "Event Logging", icon: "comms" as const },
      { label: "Service-Ready Alerts", icon: "industrial" as const },
    ],
    features: [
      {
        title: "Protection Event Tracking",
        description: "Records OCP, OVP, OTP, FOD, and link-fault events with clear status codes.",
        icon: "safe" as const,
      },
      {
        title: "Health Telemetry",
        description: "Aggregates temperature, current, and link-quality signals for diagnostics.",
        icon: "efficiency" as const,
      },
      {
        title: "Host-Readable Logs",
        description: "Publishes diagnostic packets over CAN / UART / RS485 to service tools.",
        icon: "comms" as const,
      },
      {
        title: "Maintenance Enablement",
        description: "Helps OEM and field teams isolate faults without opening every enclosure.",
        icon: "industrial" as const,
      },
    ],
    applications: [
      {
        title: "Fleet Service Desks",
        description: "Centralized fault visibility for multi-robot charging operations.",
        image: "/images/app-800w-amr.png",
        imageAlt: "Fleet service charging context",
      },
      {
        title: "Factory Charging Cells",
        description: "Diagnostics for high-uptime industrial dock installations.",
        image: "/images/app-800w-mobile-robot.png",
        imageAlt: "Factory charging cell",
      },
      {
        title: "Medical Environments",
        description: "Traceable fault reporting for hospital mobile equipment charging.",
        image: "/images/app-200w-medical-uv.png",
        imageAlt: "Medical equipment charging",
      },
      {
        title: "Outdoor Platforms",
        description: "Health monitoring for agricultural and campus charging pads.",
        image: "/images/app-1500w-agriculture.png",
        imageAlt: "Outdoor charging platform",
      },
    ],
    specs: [
      { label: "Function", value: "Fault monitoring & diagnostics" },
      { label: "Events", value: "OCP / OVP / OTP / FOD / link fault" },
      { label: "Interfaces", value: "CAN / UART / RS485" },
      { label: "Outputs", value: "Codes, alerts, telemetry" },
      { label: "Integration", value: "Dock, cabinet, or robot embed" },
      { label: "Operating Temperature", value: "-20°C to +60°C" },
    ],
    cta: {
      title: "See Faults Before They Stop The Fleet.",
      description: "Request diagnostics maps and sample fault-code tables.",
      stats: [
        { label: "Fault Capture", icon: "safe" as const },
        { label: "Telemetry", icon: "efficiency" as const },
        { label: "Host Logs", icon: "comms" as const },
        { label: "Engineering Support", icon: "support" as const },
      ],
    },
  },
] as const;

export type IntegratedBoardId = (typeof integratedBoards)[number]["id"];

export const integratedBoardIds = integratedBoards.map((board) => board.id);

export function isIntegratedBoardId(value: string): value is IntegratedBoardId {
  return integratedBoardIds.includes(value as IntegratedBoardId);
}

export function isIntegratedBoardCategoryId(value: string): value is IntegratedBoardCategoryId {
  return integratedBoardCategories.some((category) => category.id === value);
}

export function getIntegratedBoard(id: IntegratedBoardId) {
  return integratedBoards.find((board) => board.id === id)!;
}
