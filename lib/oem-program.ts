export const oemSections = [
  {
    id: "why-sicore",
    label: "Why SiCore",
    title: "Why SiCore for OEM Partners",
    tagline: "Intelligent autonomous charging, engineered into your product.",
    description:
      "SiCore specializes in intelligent autonomous charging solutions. We design automatic power charging systems that fit your machines, docks, and production workflow — so charging happens without human intervention.",
    highlights: [
      "Focused on autonomous charging, not consumer phone pads",
      "Custom systems matched to your mechanics, power, and controls",
      "Power tiers from 60W to 3000W for portable devices through industrial fleets",
      "Texas-based engineering support for OEM programs worldwide",
    ],
    items: [
      {
        title: "Built for continuous operation",
        text: "We design charging so robots, medical platforms, drones, and industrial machines keep running — without technicians plugging cables.",
      },
      {
        title: "Designed around your product",
        text: "Coil placement, housing, electrical interfaces, and communication are tailored to your architecture instead of forcing a redesign.",
      },
      {
        title: "Partner from concept to production",
        text: "From early feasibility through validation and manufacturing support, we stay with your team as an engineering partner.",
      },
    ],
  },
  {
    id: "development-process",
    label: "Development Process",
    title: "OEM Development Process",
    tagline: "From Concept to Production. Engineered Together.",
    description:
      "We work as an extension of your engineering team, transforming your product requirements into production-ready autonomous charging solutions through a structured, transparent development process.",
    highlights: [
      "Fast Development · Low Risk · OEM Ready",
      "Six clear milestones from discovery to production",
      "Full engineering deliverables — hardware, dock, firmware, docs",
      "Transparent Your Team vs SiCore ownership",
    ],
    items: [
      {
        title: "Requirements & Discovery",
        text: "Understand your device, battery, power, environment, and charging expectations before recommending a solution.",
      },
      {
        title: "Architecture through Validation",
        text: "Design the system, develop hardware and firmware, then verify performance, thermal, EMC, and reliability.",
      },
      {
        title: "Integration & Production",
        text: "Integrate into your product and support DFM, pilot production, and long-term engineering.",
      },
    ],
  },
  {
    id: "design-services",
    label: "Design Service",
    title: "Design Service",
    tagline:
      "Flexible engineering support, from a single design task to a complete autonomous charging solution.",
    description:
      "Build your product your way. Choose only the engineering services you need — from one module to a complete autonomous charging solution.",
    highlights: [
      "Seven standalone engineering modules",
      "System, power, battery, charging, dock, positioning, integration",
      "Engage consulting, single module, subsystem, or complete programs",
      "You do not need to buy everything",
    ],
    items: [
      {
        title: "Modular building blocks",
        text: "Architecture, power, battery, charging electronics, docking, positioning, and integration — each available alone.",
      },
      {
        title: "Standalone or complete",
        text: "Quote a single dock or battery project, or combine modules into a full autonomous charging solution.",
      },
      {
        title: "Clear engagement models",
        text: "Consulting, single module, subsystem development, or complete engineering — matched to your roadmap.",
      },
    ],
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    title: "Manufacturing",
    tagline: "From Prototype to Mass Production",
    description:
      "SiCore provides end-to-end manufacturing services for autonomous charging systems, from prototype builds to scalable production, ensuring every product meets the highest standards of quality, reliability, and performance.",
    highlights: [
      "Prototype through mass production",
      "Quality assurance at every gate",
      "OEM / ODM custom manufacturing",
      "Docks, modules, controllers, and custom products",
    ],
    items: [
      {
        title: "Prototype to volume",
        text: "Prototype builds, low-volume runs, and mass production for autonomous charging systems.",
      },
      {
        title: "Quality & supply chain",
        text: "Incoming to final inspection, reliability testing, vendor and material traceability.",
      },
      {
        title: "Custom & global delivery",
        text: "Private label, custom packaging, shipping, warehouse, and after-sales support.",
      },
    ],
  },
  {
    id: "faq",
    label: "FAQ",
    title: "OEM FAQ",
    tagline: "Common questions from OEM and integration partners.",
    description:
      "Answers for teams evaluating SiCore as their autonomous charging partner — from fit and timeline to customization and support.",
    highlights: [
      "What we specialize in",
      "How OEM programs start",
      "Customization scope",
      "How to begin a discussion",
    ],
    items: [
      {
        title: "What does SiCore specialize in for OEMs?",
        text: "Intelligent autonomous charging solutions — automatic power charging systems designed for your machines so they charge without human intervention.",
      },
      {
        title: "Can you customize for our existing product?",
        text: "Yes. Mechanical, electrical, and software interfaces are tailored to your architecture rather than forcing a full redesign.",
      },
      {
        title: "What power levels do you support?",
        text: "Platforms from 60W through 3000W, covering portable devices, carts, AGVs, and higher-power industrial fleets.",
      },
      {
        title: "How do we start?",
        text: "Share your machine type, power need, docking preference, and timeline. We will propose a development path and next engineering steps.",
      },
    ],
  },
] as const;

export type OemSectionId = (typeof oemSections)[number]["id"];

export const oemNavLinks = oemSections.map((section) => ({
  id: section.id,
  label: section.label,
  href: `/oem/${section.id}`,
}));

export function getOemSection(id: string) {
  return oemSections.find((section) => section.id === id) ?? null;
}

export const oemPageMeta = {
  title: "OEM — Intelligent Autonomous Charging Partnerships",
  description:
    "Partner with SiCore Dynamics for OEM autonomous charging: why SiCore, development process, design services, manufacturing support, and FAQ.",
};

/** Keep section meta in sync for why-sicore SEO when the long page is used. */
export function getOemSectionSeo(id: string) {
  const section = getOemSection(id);
  if (!section) return null;
  if (id === "why-sicore") {
    return {
      title: "Why SiCore for OEM Partners",
      description:
        "Partner with SiCore Dynamics for intelligent autonomous charging engineered into your OEM product — from mechanical fit and power tiers to production support.",
    };
  }
  if (id === "development-process") {
    return {
      title: "OEM Development Process",
      description:
        "From concept to production: a six-step OEM development process for autonomous charging — requirements, architecture, engineering, validation, integration, and manufacturing support.",
    };
  }
  if (id === "design-services") {
    return {
      title: "Design Service",
      description:
        "Flexible OEM engineering support — choose standalone modules for architecture, power, battery, charging, docking, positioning, or full product integration.",
    };
  }
  if (id === "manufacturing") {
    return {
      title: "Manufacturing",
      description:
        "End-to-end manufacturing for autonomous charging systems — from prototype and low-volume builds to mass production, quality assurance, and global delivery.",
    };
  }
  return { title: section.title, description: section.description };
}

