export const technologyPlatforms = [
  {
    id: "wireless-energy-platform",
    label: "Wireless Energy Platform",
    shortLabel: "Wireless Energy",
    eyebrow: "Technology Platforms",
    title: "Wireless Energy Platform",
    description:
      "Advanced wireless power technologies engineered for efficient, reliable, and scalable energy transfer — from physics and magnetics to control and system integration.",
    icon: "wireless" as const,
    topics: [
      "Physics Layer",
      "Magnetic Layer",
      "Power Layer",
      "Control Layer",
      "System Layer",
    ],
  },
  {
    id: "intelligent-charging",
    label: "Intelligent Charging Systems",
    shortLabel: "Intelligent Charging",
    eyebrow: "Technology Platforms",
    title: "Intelligent Charging Systems",
    description:
      "Coordinate batteries, charging stations, and fleet operations through adaptive charging algorithms and real-time system intelligence.",
    icon: "ai" as const,
    topics: [
      "Charging Scheduling",
      "Battery Management",
      "Charging Algorithms",
      "Communication",
      "Diagnostics",
    ],
  },
  {
    id: "plug-free-docking",
    label: "Docking Technology",
    shortLabel: "Docking Technology",
    eyebrow: "Technology Platforms",
    title: "Docking Technology",
    description:
      "Enabling seamless docking solutions that eliminate manual plug-in charging for autonomous machines.",
    icon: "station" as const,
    topics: [
      "Dock Mechanics",
      "Contact Dock",
      "Wireless Dock",
      "Position Detection",
      "Outdoor Reliability",
    ],
  },
  {
    id: "oem-integration",
    label: "OEM Integration",
    shortLabel: "OEM Integration",
    eyebrow: "Technology Platforms",
    title: "OEM Integration",
    description:
      "Designed to fit your product — charging solutions that integrate naturally into existing machines, from prototype to mass production.",
    icon: "power" as const,
    topics: [
      "Mechanical Integration",
      "Electrical Integration",
      "Software & Communication",
      "System Customization",
      "From Prototype to Production",
    ],
  },
] as const;

export type TechnologyPlatformId = (typeof technologyPlatforms)[number]["id"];

export type TechnologyPlatform = (typeof technologyPlatforms)[number];

export const technologyNavLinks = technologyPlatforms.map((platform) => ({
  label: platform.label,
  href: `/technology/${platform.id}`,
  id: platform.id,
}));

export function getTechnologyPlatform(id: string): TechnologyPlatform | undefined {
  return technologyPlatforms.find((platform) => platform.id === id);
}

export const technologyPortfolio = technologyPlatforms.map((platform) => ({
  title: platform.label,
  description: platform.description,
  icon: platform.icon,
  href: `/technology/${platform.id}`,
  tabId: platform.id,
}));

/** @deprecated Use technologyPlatforms — kept for legacy hash redirects */
export const techSubNavItems = [
  { id: "purpose" as const, label: "Purpose", shortLabel: "Purpose" },
  ...technologyPlatforms.map((platform) => ({
    id: platform.id,
    label: platform.label,
    shortLabel: platform.shortLabel,
    summary: platform.description,
  })),
];

export type TechSubNavId = (typeof techSubNavItems)[number]["id"];

export function getTechTabFromHash(hash: string): TechSubNavId | null {
  const id = hash.replace(/^#/, "");
  return techSubNavItems.some((item) => item.id === id) ? (id as TechSubNavId) : null;
}

export const wirelessFeatures = [
  {
    title: "High Efficiency",
    description:
      "Optimized resonant wireless power transfer for minimal loss and sustained industrial performance.",
  },
  {
    title: "Alignment Tolerance",
    description:
      "Reliable power delivery across positional variation in dynamic robotics and automation environments.",
  },
  {
    title: "Foreign Object Detection",
    description: "Safety monitoring to protect people, equipment, and charging infrastructure.",
  },
  {
    title: "Dynamic Charging",
    description:
      "Support for stop-and-charge and in-motion charging across mobile machines and AGVs.",
  },
  {
    title: "Scalable Power",
    description: "Modular platform architecture from 10W to 50kW+ for OEM integration at any scale.",
    highlight: "10W–50kW+",
  },
];

export const chargingStations = [
  {
    title: "Robot Charging Dock",
    description: "Autonomous wireless charging for service robots and AMR platforms.",
    image: "/images/industry-robotics.png",
  },
  {
    title: "AGV Charging Station",
    description: "Continuous warehouse and factory AGV operation without manual connectors.",
    image: "/images/mobile-robots.jpg",
  },
  {
    title: "Drone Charging Station",
    description: "Safe, repeatable wireless energy delivery for aerial and drone systems.",
    image: "/images/industry-drones.png",
  },
  {
    title: "Industrial Charging Platform",
    description: "Scalable charging infrastructure for mission-critical automation deployments.",
    image: "/images/product-tx.png",
  },
];

export const aiPowerTopics = [
  {
    title: "Adaptive Charging",
    description: "Real-time charging profile adjustment based on load and battery state.",
  },
  {
    title: "Battery Health Monitoring",
    description: "Continuous monitoring to extend battery life and fleet reliability.",
  },
  {
    title: "Predictive Maintenance",
    description: "Data-driven alerts to reduce downtime before failures occur.",
  },
  {
    title: "Intelligent Energy Optimization",
    description: "AI-assisted energy routing across multi-device charging environments.",
  },
  {
    title: "Real-time Diagnostics",
    description: "Live visibility into power stage health and charging performance.",
  },
];

export const aiWorkflowSteps = [
  "Sensor Data",
  "AI Control",
  "Power Optimization",
  "Battery Protection",
  "Cloud / System Feedback",
];

export const powerElectronicsFeatures = [
  {
    title: "Industrial-Grade Conversion",
    description:
      "High-performance power stages engineered for demanding wireless charging duty cycles.",
  },
  {
    title: "Modular Architecture",
    description: "Scalable transmitter, receiver, and controller modules for flexible OEM integration.",
  },
  {
    title: "Control & Protection",
    description:
      "Advanced gate driving, monitoring, and fault protection for reliable system operation.",
  },
  {
    title: "System Integration Ready",
    description:
      "Designed to pair with SiCore wireless coils, firmware, and intelligent charging platforms.",
  },
];

export const engineeringCapabilities = [
  { title: "Power Electronics", icon: "bolt" },
  { title: "Embedded Systems", icon: "chip" },
  { title: "Magnetic Design", icon: "coil" },
  { title: "Thermal Management", icon: "thermal" },
  { title: "EMC Design", icon: "emc" },
  { title: "Safety Protection", icon: "shield" },
  { title: "Industrial Communication", icon: "comm" },
  { title: "Firmware Development", icon: "firmware" },
];

export const technologyAdvantages = [
  { value: "10W–50kW+", label: "Scalable Power" },
  { value: "High Efficiency", label: "Power Transfer" },
  { value: "OEM Ready", label: "Integration" },
  { value: "Industrial Grade", label: "Reliability" },
  { value: "AI Enabled", label: "Intelligence" },
  { value: "Concept → Production", label: "Engineering Support" },
];

export const technologyPageMeta = {
  title: "Autonomous Charging Technology Platform",
  description:
    "From power transfer and docking to charging intelligence and OEM integration, SiCore provides the technology stack required for machines to charge autonomously.",
};

/** Legacy hash / slug → current platform route */
export const technologyHashRedirects: Record<string, TechnologyPlatformId> = {
  "wireless-charging": "wireless-energy-platform",
  "wireless-power": "wireless-energy-platform",
  "wireless-energy-platform": "wireless-energy-platform",
  "charging-stations": "plug-free-docking",
  "ai-power": "intelligent-charging",
  "power-electronics": "oem-integration",
  "intelligent-charging": "intelligent-charging",
  "plug-free-docking": "plug-free-docking",
  "oem-integration": "oem-integration",
};
