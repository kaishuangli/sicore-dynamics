export const industryNewsPageMeta = {
  title: "Industry News | SiCore Dynamics",
  description:
    "Industry news and briefings on robotics, autonomous systems, wireless charging, industrial automation, and intelligent machine infrastructure.",
};

export const industryNewsHero = {
  eyebrow: "Industry News",
  title: "Signals shaping the future of autonomous machines.",
  body: "A curated view of developments across robotics, industrial automation, wireless power, drones, medical devices, and smart infrastructure—focused on how intelligent machines are powered, deployed, and scaled.",
} as const;

export const industryNewsCategories = [
  "All",
  "Robotics",
  "Wireless Power",
  "Automation",
  "Agriculture",
  "Medical",
  "Drones",
] as const;

export type IndustryNewsCategory = (typeof industryNewsCategories)[number];

export const industryNewsItems = [
  {
    id: "amr-fleet-charging",
    date: "2026-06",
    category: "Robotics" as const,
    title: "AMR fleets push charging from accessory to infrastructure",
    summary:
      "As warehouse and factory robot fleets grow, operators are shifting from manual plug-in routines to opportunity charging and dock-based energy strategies that protect uptime.",
  },
  {
    id: "wireless-power-standards",
    date: "2026-05",
    category: "Wireless Power" as const,
    title: "Industrial wireless power moves beyond consumer convenience",
    summary:
      "Resonant and high-power wireless transfer are gaining attention in industrial settings where sealed designs, reduced connector wear, and lower maintenance matter more than desk-top convenience.",
  },
  {
    id: "outdoor-ag-robots",
    date: "2026-04",
    category: "Agriculture" as const,
    title: "Field robots force a rethink of outdoor charging reliability",
    summary:
      "Dust, mud, rain, and vibration are exposing the limits of traditional connectors in agricultural automation—raising demand for rugged, low-intervention charging approaches.",
  },
  {
    id: "medical-sealed-devices",
    date: "2026-03",
    category: "Medical" as const,
    title: "Sealed medical devices increase pressure on contactless power",
    summary:
      "Infection control and enclosure integrity continue to drive medical equipment design toward fewer exposed electrical contacts and cleaner power interfaces.",
  },
  {
    id: "drone-dock-networks",
    date: "2026-02",
    category: "Drones" as const,
    title: "Autonomous drone docks become critical for continuous operations",
    summary:
      "Inspection, logistics, and security programs are expanding dock networks so UAVs can land, recharge, and redeploy with less human handling between missions.",
  },
  {
    id: "factory-opportunity-charging",
    date: "2026-01",
    category: "Automation" as const,
    title: "Opportunity charging reshapes factory mobility economics",
    summary:
      "Short, frequent charge cycles at workstations and waypoints are helping AGVs and mobile platforms reduce battery oversizing while improving shift utilization.",
  },
  {
    id: "oem-design-in",
    date: "2025-12",
    category: "Wireless Power" as const,
    title: "OEMs prioritize charging design-in earlier in product roadmaps",
    summary:
      "Instead of adding chargers late, more manufacturers are treating power transfer as part of the machine architecture—alongside mechanical, control, and safety systems.",
  },
  {
    id: "harsh-environment-power",
    date: "2025-11",
    category: "Automation" as const,
    title: "Harsh environments expose connector failure as an operating cost",
    summary:
      "In wet, dusty, and high-cycle industrial environments, connector degradation is increasingly viewed as a reliability and maintenance cost—not just a hardware inconvenience.",
  },
] as const;

export const industryNewsTopics = {
  eyebrow: "Coverage Focus",
  title: "Where we watch the industry.",
  items: [
    {
      title: "Autonomous mobility",
      text: "Robots, AGVs, AMRs, and industrial vehicles that need continuous energy availability.",
    },
    {
      title: "Charging infrastructure",
      text: "Wireless, contact, and dock-based systems built for fleet-scale operation.",
    },
    {
      title: "OEM integration",
      text: "How manufacturers embed power transfer into products from the earliest design stages.",
    },
    {
      title: "Operating environments",
      text: "Factories, farms, hospitals, outdoor sites, and other places where connectors fail first.",
    },
  ],
} as const;
