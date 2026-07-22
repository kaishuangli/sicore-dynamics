export const uavContactDock = {
  title: "Contact Charging Dock",
  description:
    "A contact charging solution for autonomous drone fleets that delivers high-efficiency, fast charging and reliable autonomous operation.",
  image: "/images/uav-contact-charging-hero.jpg",
  imageAlt: "Autonomous drone hovering above a SiCore contact charging dock",
  features: [
    {
      title: "Precision Landing",
      description:
        "RTK + AI navigation landing achieves ±10–30 cm precision for reliable contact.",
    },
    {
      title: "Automatic Contact",
      description:
        "Solid contact pins engage automatically for reliable power transmission.",
    },
    {
      title: "High Power Charging",
      description:
        "800W–1500W charging with intelligent power management and control.",
    },
    {
      title: "Mission Continuity",
      description:
        "Fast turnaround between missions without manual battery swap.",
    },
  ],
  processTitle: "Contact Charging Process",
  processSteps: [
    {
      label: "Mission Return",
      detail: "Drones return to the dock after completing a mission or when the battery is low.",
    },
    {
      label: "Precision Approach",
      detail: "RTK + visual approach aligns the drone to the dock platform.",
    },
    {
      label: "Precision Landing",
      detail: "Landing accuracy of ±10–30 cm ensures reliable contact engagement.",
    },
    {
      label: "Contact Engagement",
      detail: "Latching mechanisms lock for a solid high-current power connection.",
    },
    {
      label: "High Power Charging",
      detail: "Rapid 800–1500W DC charging with intelligent BMS and health monitoring.",
    },
    {
      label: "Mission Redeployment",
      detail: "After full charge, the drone is ready for the next mission immediately.",
    },
  ],
  insideTitle: "Inside the Contact Charging Dock",
  insideImage: "/images/uav-contact-charging-dock.jpg",
  insideImageAlt: "Contact charging dock cutaway and outdoor deployment view",
  insidePoints: [
    { label: "Landing Platform", detail: "Robust 1200 mm square surface for autonomous landing." },
    { label: "Power Electronics", detail: "Integrated AC–DC power modules for fast charging." },
    { label: "Control Electronics", detail: "Intelligent MCU for communication and safety." },
    { label: "Thermal Management", detail: "Forced air cooling for continuous high-power operation." },
  ],
  specs: [
    { label: "Max Power", value: "800W–1500W" },
    { label: "Input Voltage", value: "85–264VAC, 50/60 Hz" },
    { label: "Output Voltage", value: "40–60VDC (Configurable)" },
    { label: "Efficiency", value: "> 96%" },
    { label: "Charging Time", value: "45–60 mins (Typical 22Ah)" },
    { label: "Protection", value: "Surge, OCP, OVP, OTP" },
    { label: "IP Rating", value: "IP55 / IP66" },
    { label: "Dimensions", value: "1200 × 1200 × 250 mm" },
    { label: "Weight", value: "~110 kg" },
  ],
  interfaceTitle: "Contact Interface Detail",
  basePlate: {
    title: "Base Plate (Align & Contact)",
    points: [
      "Spring-loaded contact pins",
      "Large capture area for landing tolerance",
      "Weather-resistant outdoor design",
      "Gold-plated for high-current transfer",
    ],
  },
  droneSide: {
    title: "Drone Side (Charging Interface)",
    points: [
      "Integrated charging contacts",
      "Aerodynamic and lightweight",
      "Reliable connection under vibration",
      "Designed for high cycle life",
    ],
  },
  comparisonTitle: "Charging Technologies",
  wirelessLabel: "Wireless Charging",
  contactLabel: "Contact Charging",
  wireless: [
    "Contactless",
    "Fully Sealed",
    "Flexible Landing",
    "Low Maintenance",
    "Outdoor Ready",
  ],
  contact: [
    "Direct Electrical Contact",
    "High-Power Capability",
    "Precision Docking",
    "Fast Energy Transfer",
    "Proven Commercial Architecture",
  ],
  comparisonNote: [
    "Both charging architectures support autonomous drone operations.",
    "SiCore Dynamics develops and integrates both technologies to match different mission profiles and deployment requirements.",
  ],
} as const;
