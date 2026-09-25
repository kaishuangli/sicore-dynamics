export const smartTestEquipmentsPage = {
  hero: {
    title: "Smart Equipment",
    subtitle: "Autonomous. Mobile. Intelligent.",
    description:
      "The SiCore Smart Equipment Robot delivers intelligent mobility and fleet management for modern test laboratories — moving instruments safely, docking automatically, and staying ready for the next task.",
    image: "/images/smart-test-equipments/ste-hero-robot-v2.png",
    imageAlt:
      "SiCore Smart Equipment Robot carrying laboratory test instruments on an autonomous mobile base",
    primaryCta: { label: "Request Demo", href: "/contact" },
    secondaryCta: { label: "Watch Video", href: "/contact" },
  },

  features: {
    items: [
      {
        id: "navigation",
        title: "Autonomous Navigation",
        text: "Navigate safely and efficiently in complex lab environments.",
        icon: "nav" as const,
      },
      {
        id: "positioning",
        title: "Precise Positioning",
        text: "High-precision localization for accurate stop and operation.",
        icon: "pin" as const,
      },
      {
        id: "docking",
        title: "Intelligent Docking",
        text: "Automatically return to dock for charging and data synchronization.",
        icon: "dock" as const,
      },
      {
        id: "charging",
        title: "Wireless Charging",
        text: "Contactless charging for seamless and maintenance-free power.",
        icon: "charge" as const,
      },
      {
        id: "remote",
        title: "Remote Control",
        text: "Monitor, control, and manage anytime, anywhere.",
        icon: "remote" as const,
      },
    ],
  },

  fleet: {
    eyebrow: "Fleet Management System",
    title: "Real-time Control. Smarter Operations.",
    image: "/images/smart-test-equipments/ste-fleet-dock-v1.png",
    imageAlt:
      "SiCore Smart Equipment fleet lined up at a smart dock station with charging dashboard",
    bullets: [
      "Real-time status monitoring",
      "Task assignment and scheduling",
      "Battery management and alerts",
      "Operation logs and analytics",
    ],
    exploreLabel: "Explore Software",
    exploreHref: "/technology/intelligent-charging",
    stats: [
      { value: "6", label: "Total Robots" },
      { value: "4", label: "Active Tasks" },
      { value: "2", label: "Charging" },
      { value: "1", label: "Alerts" },
    ],
    dashboardCta: { label: "See Dashboard", href: "/contact" },
  },

  fleetManagement: {
    eyebrow: "Fleet Management",
    title: "Manage every smart test equipment from a single platform.",
    body: "The Fleet Management System provides real-time visibility and centralized control of all Smart Test Equipment across your facility. Monitor equipment status, battery levels, locations, charging schedules, and task execution through an intuitive dashboard, ensuring maximum utilization and uninterrupted operation.",
    image: "/images/smart-test-equipments/ste-fleet-dashboard-v2.png",
    imageAlt:
      "SiCore Fleet Management dashboard showing real-time robot locations, battery levels, and task status",
    callouts: [
      { title: "Live Status", text: "See every unit across your facility." },
      { title: "Battery Levels", text: "Track charge and plan recharging." },
      { title: "Locations", text: "Know where equipment is at all times." },
      { title: "Task Execution", text: "Assign, monitor, and complete missions." },
    ],
  },

  autonomous: {
    eyebrow: "Autonomous Movement",
    title: "Move test equipment automatically to where it's needed.",
    body: "Each Smart Test Equipment unit navigates independently between workstations, production lines, and charging docks. It follows user commands or scheduled tasks, reducing manual transport and improving laboratory efficiency.",
    image: "/images/smart-test-equipments/ste-hardware-v3.png",
    imageAlt:
      "SiCore Smart Equipment Robot navigating a laboratory path with autonomous movement guidance",
    callouts: [
      { title: "Workstations", text: "Navigate independently to where testing happens." },
      { title: "Production Lines", text: "Support equipment flow across the floor." },
      { title: "Charging Docks", text: "Return and recharge between missions." },
      { title: "On Schedule", text: "Follow user commands or scheduled tasks." },
    ],
  },

  hardware: {
    eyebrow: "Built for Test Labs",
    title: "Designed for Performance. Built for Reliability.",
    image: "/images/smart-test-equipments/ste-hardware-v2.png",
    imageAlt:
      "SiCore Smart Equipment Robot with modular shelves carrying oscilloscope and test instruments",
    pillars: [
      {
        title: "Modular Design",
        text: "Configurable shelves adapt to oscilloscopes, meters, and specialty instruments.",
      },
      {
        title: "High Payload",
        text: "Stable mobile platform engineered for real laboratory equipment weight.",
      },
      {
        title: "Safety First",
        text: "Sensing and stop behavior designed for shared lab and production floors.",
      },
      {
        title: "Seamless Integration",
        text: "Docking, charging, and fleet software that fit into existing lab workflows.",
      },
    ],
    callouts: [
      { title: "Configurable Shelves", text: "Flexible for various test equipment." },
      { title: "Status Indicator", text: "Real-time status at a glance." },
      { title: "Ergonomic Handles", text: "Easy to guide and maneuver." },
      { title: "Robust Base", text: "Stable, secure, and built to last." },
    ],
  },

  why: {
    eyebrow: "Why Smart Test Equipment?",
    title: "Reimagine How Test Equipment Moves, Charges, and Works.",
    lead: "Traditional test instruments are fixed to a single workstation by power cords and charging cables, making laboratories crowded, inflexible, and difficult to scale. SiCore Smart Test Equipment transforms conventional instruments into autonomous, battery-powered mobile systems.",
    points: [
      {
        title: "Cordless Workspaces",
        text: "Reduce power cords, adapters, and cable clutter by replacing permanent AC connections with centralized autonomous charging. The result is a cleaner laboratory and a completely new way to build modern test environments.",
        image: "/images/smart-test-equipments/benefit-workspace.png",
        imageAlt: "Cable-free laboratory workspace with smart test equipment charging dock",
      },
      {
        title: "Flexible Test Stations",
        text: "Move instruments freely between laboratories, production lines, and engineering workstations without reconnecting power. Each instrument can move independently to the point of use instead of staying locked to a single bench.",
        image: "/images/smart-test-equipments/ste-usecase-rnd.png",
        imageAlt: "Smart test equipment moving between laboratory workstations",
      },
      {
        title: "Higher Equipment Utilization",
        text: "Share expensive test instruments across multiple users instead of dedicating one instrument to every bench. Autonomous mobility and fleet coordination raise utilization and make the lab easier to scale.",
        image: "/images/smart-test-equipments/ste-why-utilization-v1.png",
        imageAlt:
          "Comparison of dedicated bench instruments versus shared SiCore mobile test equipment for higher utilization",
        layout: "wide" as const,
      },
      {
        title: "Take and Use",
        text: "Automatically recharge, monitor battery health, and keep every instrument available for the next task. Units return for charging on their own and stay connected through an intelligent fleet management platform.",
        image: "/images/smart-test-equipments/ste-why-take-use-v1.png",
        imageAlt: "Engineer lifting a SiCore oscilloscope from a smart dock for immediate use",
      },
    ],
  },
} as const;

export type SmartTestEquipmentsPage = typeof smartTestEquipmentsPage;
