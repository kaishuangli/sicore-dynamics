export type SoftwareIcon =
  | "power"
  | "efficiency"
  | "safe"
  | "comms"
  | "industrial"
  | "alignment"
  | "thermal"
  | "support";

export type AutonomousSoftwareCatalogProduct = {
  id: string;
  label: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: { label: string; icon: SoftwareIcon }[];
  features: { title: string; description: string; icon: SoftwareIcon }[];
  applications: { title: string; description: string; image: string; imageAlt: string }[];
  specs: { label: string; value: string }[];
  cta: {
    title: string;
    description: string;
    stats: { label: string; icon: SoftwareIcon }[];
  };
};

export type AutonomousSoftwarePillar = {
  id: string;
  label: string;
  tagline?: string;
  description: string;
};

export type AutonomousSoftwareOverview = {
  headline: string;
  lead?: string;
  body: string;
  image?: string;
  imageAlt?: string;
  imagePlacement?: "above" | "below";
  imageTone?: "dark" | "light";
  afterImage?: string;
  afterImageAlt?: string;
  flowIntro?: string;
  pillars?: AutonomousSoftwarePillar[];
  pillarLayout?: "cards" | "sections";
  steps?: { id: string; label: string }[];
};

export type AutonomousSoftwareSection = {
  id: string;
  label: string;
  description: string;
  overview?: AutonomousSoftwareOverview;
  productLinks?: boolean;
  products: AutonomousSoftwareCatalogProduct[];
};

function product(
  input: Omit<AutonomousSoftwareCatalogProduct, "cta"> & {
    ctaTitle: string;
    ctaDescription: string;
  },
): AutonomousSoftwareCatalogProduct {
  return {
    id: input.id,
    label: input.label,
    title: input.title,
    tagline: input.tagline,
    description: input.description,
    image: input.image,
    imageAlt: input.imageAlt,
    highlights: input.highlights,
    features: input.features,
    applications: input.applications,
    specs: input.specs,
    cta: {
      title: input.ctaTitle,
      description: input.ctaDescription,
      stats: [
        { label: "OEM Ready", icon: "industrial" },
        { label: "Fleet Ready", icon: "efficiency" },
        { label: "API Ready", icon: "comms" },
        { label: "Engineering Support", icon: "support" },
      ],
    },
  };
}

const sharedApps = {
  amr: {
    title: "AMR Fleets",
    description: "Warehouse and factory autonomous mobile robots.",
    image: "/images/app-200w-amr.png",
    imageAlt: "AMR fleet",
  },
  agv: {
    title: "AGV Systems",
    description: "Opportunity charging for industrial AGV platforms.",
    image: "/images/app-800w-agv.png",
    imageAlt: "AGV system",
  },
  service: {
    title: "Service Robots",
    description: "Hospitality and campus robot charging hubs.",
    image: "/images/app-200w-service.png",
    imageAlt: "Service robot hub",
  },
  factory: {
    title: "Smart Factory Cells",
    description: "Automated production charging cells.",
    image: "/images/app-800w-mobile-robot.png",
    imageAlt: "Smart factory cell",
  },
} as const;

export const autonomousSoftwareSections: AutonomousSoftwareSection[] = [
  {
    id: "charging-management-software",
    label: "Charging Management Software",
    description: "Intelligent charging management for autonomous machines.",
    overview: {
      headline: "Intelligent charging management for autonomous machines.",
      body: "Monitor, control, automate, and optimize charging across robots, charging stations, and docking infrastructure. SiCore Charging Management System provides real-time charging visibility, autonomous return-to-charge, intelligent scheduling, dynamic power management, fault diagnostics, and energy analytics—all through one unified platform.",
      image: "/images/products/autonomous-software/charging-management-system.jpg",
      imageAlt: "SiCore Charging Management System dashboard",
      pillars: [
        {
          id: "monitor",
          label: "MONITOR",
          description: "See every robot, charger, dock, and charging session in real time.",
        },
        {
          id: "control",
          label: "CONTROL",
          description: "Manage charging power, profiles, safety, and individual charging sessions.",
        },
        {
          id: "automate",
          label: "AUTOMATE",
          description: "Enable autonomous return-to-charge, docking, charging, and mission recovery.",
        },
        {
          id: "optimize",
          label: "OPTIMIZE",
          description: "Improve charger utilization, fleet availability, energy efficiency, and power distribution.",
        },
      ],
    },
    products: [],
  },
  {
    id: "fleet-charging-scheduler",
    label: "SiCore Autonomous Docking System",
    description: "Precision docking intelligence for autonomous charging.",
    overview: {
      headline: "Precision Docking Intelligence for Autonomous Charging",
      body: "An intelligent docking platform that coordinates perception, localization, motion guidance, connector engagement, and electrical verification to enable reliable unattended charging.",
      image: "/images/products/autonomous-software/autonomous-docking-system.jpg",
      imageAlt: "SiCore Autonomous Docking System module overview",
      imagePlacement: "below",
      flowIntro: "The whole system is seen as a state machine.",
      steps: [
        { id: "dock-request", label: "Dock Request" },
        { id: "dock-discovery", label: "Dock Discovery" },
        { id: "position-estimation", label: "Position Estimation" },
        { id: "coarse-alignment", label: "Coarse Alignment" },
        { id: "fine-alignment", label: "Fine Alignment" },
        { id: "final-approach", label: "Final Approach" },
        { id: "connector-engagement", label: "Connector Engagement" },
        { id: "mechanical-verification", label: "Mechanical Verification" },
        { id: "electrical-verification", label: "Electrical Verification" },
        { id: "charging-ready", label: "Charging Ready" },
        { id: "charging", label: "Charging" },
        { id: "release", label: "Release" },
        { id: "exit", label: "Exit" },
      ],
    },
    products: [],
  },
  {
    id: "monitoring-dashboard",
    label: "Monitoring Dashboard",
    description: "Live visibility into charge status, faults, and utilization.",
    overview: {
      headline: "One Interface. Complete Visibility.",
      body: "Monitor robots, chargers, docks, charging sessions, faults, energy consumption, and system performance from one centralized interface.",
      image: "/images/products/autonomous-software/monitoring-dashboard.jpg",
      imageAlt: "SiCore Monitoring Dashboard module overview",
      imageTone: "light",
      afterImage: "/images/products/autonomous-software/monitoring-dashboard-ui.jpg",
      afterImageAlt: "SiCore Dynamics Monitoring Dashboard user interface",
      pillarLayout: "sections",
      pillars: [
        {
          id: "dash-live",
          label: "LIVE OPERATIONS",
          description:
            "Real-time visibility into robots, chargers, docks, charging sessions, and energy flow.",
        },
        {
          id: "dash-alerts",
          label: "DIAGNOSTICS & ALERTS",
          description:
            "Centralized fault detection, safety events, diagnostics, and maintenance notifications.",
        },
        {
          id: "dash-analytics",
          label: "ANALYTICS & REPORTING",
          description:
            "Historical charging data, energy consumption, charger utilization, fleet readiness, and system performance.",
        },
      ],
    },
    products: [],
  },
  {
    id: "fleet-charging",
    label: "Fleet Scheduler",
    description: "Coordinate charging across the entire robot fleet.",
    overview: {
      headline: "Coordinate Charging Across the Entire Robot Fleet",
      lead: "Intelligently coordinate when, where, and which robots charge based on battery status, mission priorities, dock availability, location, and operational schedules.",
      body: "Fleet Scheduler provides the intelligence needed to coordinate charging across multiple robots and shared charging infrastructure. Instead of waiting for individual robots to reach a low-battery condition, the system continuously evaluates fleet energy demand, robot availability, upcoming missions, and charging resources to make proactive charging decisions.",
      image: "/images/products/autonomous-software/fleet-scheduler.png",
      imageAlt: "Fleet Scheduler architecture and workflow",
      imagePlacement: "below",
      pillarLayout: "sections",
      pillars: [
        {
          id: "smart-charging-queue",
          label: "SMART CHARGING QUEUE",
          tagline: "Prioritize the right robot at the right time.",
          description:
            "Dynamically prioritize robots for charging based on battery State of Charge (SOC), mission priority, upcoming task requirements, waiting time, and operational status. The charging queue continuously adapts as fleet conditions change.",
        },
        {
          id: "automatic-dock-assignment",
          label: "AUTOMATIC DOCK ASSIGNMENT",
          tagline: "Connect every robot with the most suitable available charger.",
          description:
            "Automatically assign charging docks based on robot location, dock availability, charging capability, equipment compatibility, travel distance, and estimated wait time. Dock reservations help prevent conflicts and unnecessary robot movement.",
        },
        {
          id: "mission-aware-scheduling",
          label: "MISSION-AWARE SCHEDULING",
          tagline: "Plan charging around operations—not the other way around.",
          description:
            "Coordinate charging with upcoming robot missions and operational schedules. Robots can receive energy before critical assignments, reducing the risk of low battery conditions interrupting important tasks.",
        },
        {
          id: "opportunity-charging",
          label: "OPPORTUNITY CHARGING",
          tagline: "Turn idle time into productive charging time.",
          description:
            "Use short periods of inactivity—such as shift changes, task gaps, loading delays, or standby periods—to automatically recharge robots without disrupting normal operations. Opportunity charging helps maintain higher battery levels and improves overall fleet availability.",
        },
        {
          id: "fleet-energy-readiness",
          label: "FLEET ENERGY READINESS",
          tagline: "Know whether your fleet has enough energy for what comes next.",
          description:
            "Continuously evaluate battery levels, upcoming energy demand, charger availability, and scheduled missions to determine fleet energy readiness. Identify potential charging bottlenecks before they affect operations and proactively prepare robots for future workloads.",
        },
      ],
    },
    products: [],
  },
  {
    id: "sdk-development-kit",
    label: "SDK & Development Kit",
    description: "APIs, samples, and tools for OEM integration and customization.",
    productLinks: false,
    products: [
      product({
        id: "sdk-api",
        label: "SDK-API",
        title: "API Libraries",
        tagline: "Developer clients for charge control, docking, and telemetry.",
        description:
          "Language-friendly libraries that help OEM teams embed SiCore autonomous charging events into robot and fleet stacks.",
        image: "/images/control-layer/control-hero.png",
        imageAlt: "API libraries for charge control, docking, and telemetry",
        highlights: [
          { label: "API Clients", icon: "comms" },
          { label: "Charge Events", icon: "power" },
          { label: "Telemetry", icon: "efficiency" },
          { label: "OEM Ready", icon: "industrial" },
        ],
        features: [
          {
            title: "Charge Control APIs",
            description: "Start, stop, and monitor sessions from host software.",
            icon: "power",
          },
          {
            title: "Docking Events",
            description: "Subscribe to approach, handshake, and enable events.",
            icon: "comms",
          },
          {
            title: "Telemetry Streams",
            description: "Pull status and fault data into OEM platforms.",
            icon: "efficiency",
          },
        ],
        applications: [sharedApps.factory, sharedApps.amr, sharedApps.service],
        specs: [
          { label: "Role", value: "OEM API libraries" },
          { label: "Protocols", value: "REST / MQTT / CAN helpers" },
          { label: "Targets", value: "Robot / dock / fleet hosts" },
          { label: "Delivery", value: "Package + docs" },
        ],
        ctaTitle: "Integrate Faster With Official APIs.",
        ctaDescription: "Request SDK access and onboarding office hours.",
      }),
      product({
        id: "sdk-samples",
        label: "SDK-SAMPLES",
        title: "Sample Applications",
        tagline: "Reference apps for docks, robots, and fleet connectors.",
        description:
          "Ready examples that accelerate bring-up of dock gateways, robot clients, and fleet platform connectors.",
        image: "/images/products/autonomous-software/sdk-samples.jpg",
        imageAlt: "Sample applications for robots, docks, and fleet connectors",
        highlights: [
          { label: "Reference Apps", icon: "industrial" },
          { label: "Dock Gateway", icon: "comms" },
          { label: "Robot Client", icon: "alignment" },
          { label: "Fleet Connector", icon: "efficiency" },
        ],
        features: [
          {
            title: "Dock Gateway Sample",
            description: "Starter project for edge dock controllers.",
            icon: "comms",
          },
          {
            title: "Robot Client Sample",
            description: "Example integration for AMR/AGV software stacks.",
            icon: "industrial",
          },
          {
            title: "Fleet Connector Sample",
            description: "Push charge events into WMS and fleet managers.",
            icon: "efficiency",
          },
        ],
        applications: [sharedApps.amr, sharedApps.factory, sharedApps.agv],
        specs: [
          { label: "Role", value: "Reference applications" },
          { label: "Includes", value: "Dock / robot / fleet samples" },
          { label: "Languages", value: "Common OEM stacks" },
          { label: "Delivery", value: "Source + guides" },
        ],
        ctaTitle: "Start From Working Samples.",
        ctaDescription: "Ask for the sample pack that matches your stack.",
      }),
      product({
        id: "sdk-tools",
        label: "SDK-TOOLS",
        title: "Dev & Simulation Tools",
        tagline: "Bring-up helpers before full hardware is available.",
        description:
          "Simulation and test helpers that let teams validate charge workflows in the lab and accelerate OEM integration.",
        image: "/images/magnetic-layer/simulation.png",
        imageAlt: "Development and simulation tools for lab bring-up",
        highlights: [
          { label: "Simulation", icon: "efficiency" },
          { label: "Protocol Maps", icon: "comms" },
          { label: "Lab Bring-Up", icon: "industrial" },
          { label: "Faster Validation", icon: "power" },
        ],
        features: [
          {
            title: "Workflow Simulation",
            description: "Exercise charge and dock flows without full hardware.",
            icon: "efficiency",
          },
          {
            title: "Protocol Helpers",
            description: "Validate CAN, UART, REST, and MQTT integration paths.",
            icon: "comms",
          },
          {
            title: "Lab Tooling",
            description: "Speed up prototype bring-up in R&D environments.",
            icon: "industrial",
          },
        ],
        applications: [sharedApps.factory, sharedApps.service, sharedApps.amr],
        specs: [
          { label: "Role", value: "Dev / simulation toolkit" },
          { label: "Includes", value: "Sim helpers / protocol maps" },
          { label: "Use Case", value: "Lab / prototype / OEM bring-up" },
          { label: "Delivery", value: "Tools + docs" },
        ],
        ctaTitle: "Validate Before You Deploy.",
        ctaDescription: "Request simulation tooling access for your lab setup.",
      }),
    ],
  },
];

/** @deprecated use autonomousSoftwareSections — kept for category helpers */
export const autonomousSoftwareCategories = autonomousSoftwareSections.map((section) => ({
  id: section.id,
  label: section.label,
  description: section.description,
  image: section.products[0]?.image ?? "/images/smart-test-equipments/fleet-tablet.png",
}));

export type AutonomousSoftwareCategoryId = (typeof autonomousSoftwareSections)[number]["id"];

export const autonomousSoftwareProducts = autonomousSoftwareSections.flatMap((section) =>
  section.products.map((item) => ({
    ...item,
    categoryId: section.id,
    brand: "SiCore Dynamics",
  })),
);

export type AutonomousSoftwareId = (typeof autonomousSoftwareProducts)[number]["id"];

export const autonomousSoftwareIds = autonomousSoftwareProducts.map((item) => item.id);

export const publicAutonomousSoftwareIds = autonomousSoftwareSections
  .filter((section) => section.productLinks !== false)
  .flatMap((section) => section.products.map((item) => item.id));

export function isAutonomousSoftwareProductPublic(id: string) {
  return publicAutonomousSoftwareIds.includes(id);
}

export function isAutonomousSoftwareId(value: string): value is AutonomousSoftwareId {
  return autonomousSoftwareIds.includes(value as AutonomousSoftwareId);
}

export function isAutonomousSoftwareCategoryId(
  value: string,
): value is AutonomousSoftwareCategoryId {
  return autonomousSoftwareSections.some((section) => section.id === value);
}

export function getAutonomousSoftwareProduct(id: AutonomousSoftwareId) {
  return autonomousSoftwareProducts.find((item) => item.id === id)!;
}
