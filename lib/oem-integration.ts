export const oemIntegrationPage = {
  eyebrow: "OEM Integration",
  title: "OEM Integration",
  subtitle: "Designed to Fit Your Product, Not the Other Way Around.",
  description:
    "Instead of requiring customers to redesign their machines, SiCore develops charging solutions that integrate naturally into existing products, mechanical structures, electrical architectures, and software platforms. From prototype to mass production, we work alongside OEM partners to create charging systems that feel like an original part of the machine.",
  heroImage: "/images/oem-integration/hero.png",
  modulesEyebrow: "Integration Modules",
  modulesTitle: "How SiCore Fits Into Your Product",
  modules: [
    {
      id: "mechanical-integration",
      number: "01",
      title: "Mechanical Integration",
      description:
        "Every machine has different dimensions, mounting structures, and operating environments. We customize coil placement, housing design, and mounting interfaces to achieve seamless integration without compromising product appearance or performance.",
      image: "/images/oem-integration/mechanical-integration.png",
      imageAlt:
        "AGV with transparent body showing integrated wireless receiver coil and matching dock transmitter",
      technologiesLabel: "Core Technologies",
      technologies: ["Custom Housing", "Mounting Interface", "Coil Placement"],
    },
    {
      id: "electrical-integration",
      number: "02",
      title: "Electrical Integration",
      description:
        "Charging systems are designed to work with existing batteries, power supplies, and electrical architectures, minimizing redesign effort while maintaining system safety and efficiency.",
      image: "/images/oem-integration/electrical-integration.png",
      imageAlt:
        "Electrical architecture diagram showing docking station, BMS, battery pack, and robot power distribution",
      technologiesLabel: "Core Technologies",
      technologies: ["Battery Compatibility", "Power Distribution", "Protection Circuit Design"],
    },
    {
      id: "software-communication",
      number: "03",
      title: "Software & Communication",
      description:
        "Our charging platform communicates directly with host controllers using industry-standard interfaces, allowing seamless integration into existing control systems and fleet management software.",
      image: "/images/oem-integration/software-communication.png",
      imageAlt:
        "Robot communication architecture diagram showing compute unit links to sensors, motion control, BMS, and HMI",
      technologiesLabel: "Core Technologies",
      technologies: ["CAN Bus", "UART", "Ethernet", "Modbus", "API Integration"],
    },
    {
      id: "system-customization",
      number: "04",
      title: "System Customization",
      description:
        "Every application has unique charging requirements. We tailor power levels, charging strategies, docking methods, and system configurations to match specific operational needs.",
      image: "/images/oem-integration/system-customization.png",
      imageAlt:
        "Custom wireless charging setup with transmitter and receiver coils aligned on a mobile robot platform",
      technologiesLabel: "Core Technologies",
      technologies: ["Power Scaling", "Charging Strategy", "Dock Customization"],
    },
    {
      id: "prototype-to-production",
      number: "05",
      title: "From Prototype to Production",
      description:
        "We support OEM partners throughout the entire product lifecycle—from concept validation and engineering samples to production-ready solutions and manufacturing support.",
      image: "/images/oem-integration/prototype-to-production.png",
      imageAlt:
        "From prototype to production process covering engineering, supply chain, and manufacturing stages",
      technologiesLabel: "Core Technologies",
      technologies: ["Rapid Prototyping", "Design Validation", "Manufacturing Support"],
    },
  ],
} as const;
