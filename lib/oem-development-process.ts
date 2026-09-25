export const oemDevelopmentProcessPage = {
  eyebrow: "OEM Partners",
  title: "OEM Development Process",
  subtitle: "From Concept to Production. Engineered Together.",
  description:
    "We work as an extension of your engineering team, transforming your product requirements into production-ready autonomous charging solutions through a structured, transparent development process.",
  promise: "Fast Development · Low Risk · OEM Ready",
  heroImage: "/images/oem-integration/prototype-to-production.png",
  heroImageAlt:
    "OEM development from engineering prototype through production-ready autonomous charging",

  flow: {
    eyebrow: "End-to-End Path",
    title: "How an OEM program moves from idea to production",
    lead: "One clear path — so your team always knows what comes next.",
    nodes: [
      "Customer Idea",
      "Requirements",
      "Architecture Design",
      "Engineering Development",
      "Prototype Validation",
      "OEM Integration",
      "Production Ready",
    ],
  },

  steps: {
    eyebrow: "Six Steps",
    title: "A structured process from discovery to manufacturing",
    lead: "Exactly six milestones — each with a clear outcome and deliverables you can review.",
    items: [
      {
        id: "requirements-discovery",
        number: "01",
        icon: "clipboard" as const,
        title: "Requirements & Discovery",
        headline: "Understand Your Product",
        intro:
          "We do not start by selling a product. We start by understanding your machine, battery system, and real operating constraints.",
        topics: [
          "Your Device",
          "Battery System",
          "Power Requirements",
          "Operating Environment",
          "Mechanical Constraints",
          "Charging Expectations",
        ],
        deliverables: [
          "Technical Requirement Review",
          "Initial Feasibility Assessment",
          "Solution Recommendation",
        ],
      },
      {
        id: "system-architecture",
        number: "02",
        icon: "puzzle" as const,
        title: "System Architecture",
        headline: "Design the Charging Solution",
        intro: "We design the complete charging system around your requirements — not a one-size kit.",
        topics: [
          "Charging Method",
          "Wireless or Contact Dock",
          "Power Architecture",
          "Mechanical Dock",
          "Communication Interface",
          "Safety Strategy",
        ],
        deliverables: [
          "System Architecture",
          "Block Diagram",
          "Preliminary Mechanical Concept",
        ],
      },
      {
        id: "engineering-development",
        number: "03",
        icon: "gear" as const,
        title: "Engineering Development",
        headline: "Hardware & Firmware Development",
        intro:
          "This is our core capability — building the electronics, dock, and firmware as one system.",
        topics: [
          "Power Electronics",
          "PCB Design",
          "Dock Design",
          "Firmware",
          "Battery Charging",
          "Protection Circuit",
          "Communication",
        ],
        deliverables: [
          "Prototype Hardware",
          "Embedded Firmware",
          "Engineering Documentation",
        ],
      },
      {
        id: "prototype-validation",
        number: "04",
        icon: "flask" as const,
        title: "Prototype & Validation",
        headline: "Verify in Real Applications",
        intro: "We validate the design under real charging, thermal, and reliability conditions.",
        topics: [
          "Charging Performance",
          "Thermal",
          "EMC",
          "Reliability",
          "Environmental Testing",
          "Safety",
        ],
        deliverables: [
          "Engineering Samples",
          "Test Report",
          "Design Optimization",
        ],
      },
      {
        id: "oem-integration",
        number: "05",
        icon: "link" as const,
        title: "OEM Integration",
        headline: "Integrate Into Your Product",
        intro: "We help you embed charging into your product architecture and production documents.",
        topics: [
          "Mechanical Integration",
          "Electrical Integration",
          "Software Interface",
          "Production Documentation",
        ],
        deliverables: [
          "Integration Guide",
          "CAD Files",
          "Electrical Documentation",
          "API / Communication Guide",
        ],
      },
      {
        id: "production-lifecycle",
        number: "06",
        icon: "rocket" as const,
        title: "Production & Lifecycle Support",
        headline: "Ready for Manufacturing",
        intro: "We support the handoff to manufacturing and stay available for upgrades over the product life.",
        topics: [
          "DFM Review",
          "Pilot Production",
          "Manufacturing Support",
          "Technical Support",
          "Future Upgrades",
        ],
        deliverables: [
          "Production Release",
          "Manufacturing Package",
          "Long-Term Engineering Support",
        ],
      },
    ],
  },

  deliver: {
    eyebrow: "What We Deliver",
    title: "Complete engineering delivery — not a single module",
    lead: "OEM partners receive a full charging engineering package ready to integrate and manufacture.",
    items: [
      {
        title: "Hardware Design",
        text: "Power electronics and PCB platforms matched to your voltage, current, and enclosure constraints.",
      },
      {
        title: "Docking System",
        text: "Wireless or contact docks designed for alignment tolerance, duty cycle, and field reliability.",
      },
      {
        title: "Embedded Firmware",
        text: "Charging control, protection logic, and host communication embedded in the system.",
      },
      {
        title: "Mechanical Design",
        text: "Coil placement, housings, mounts, and dock geometry that fit your product envelope.",
      },
      {
        title: "Engineering Documentation",
        text: "Architecture, drawings, electrical docs, and integration guides your team can act on.",
      },
      {
        title: "Manufacturing Support",
        text: "DFM, pilot support, production packages, and engineering follow-through after release.",
      },
    ],
  },

  roles: {
    eyebrow: "Partnership Model",
    title: "Your Role vs Our Role",
    lead: "Clear ownership keeps OEM programs fast, transparent, and low-risk.",
    yourLabel: "Your Team",
    ourLabel: "SiCore",
    rows: [
      { yours: "Product Requirements", ours: "Charging Architecture" },
      { yours: "Battery Selection", ours: "Dock Design" },
      { yours: "Mechanical Constraints", ours: "Power Electronics" },
      { yours: "Product Software", ours: "Charging Firmware" },
      { yours: "Product Validation", ours: "System Testing" },
      { yours: "Manufacturing", ours: "Engineering Support" },
    ],
  },

  close: {
    title: "Let's Build Your Charging Solution Together",
    body: "Whether you're developing a new intelligent device or upgrading an existing platform, SiCore provides the engineering expertise to bring reliable autonomous charging into your product.",
    cta: { label: "Start Your OEM Project", href: "/contact" },
  },
} as const;

export type OemDevelopmentProcessPage = typeof oemDevelopmentProcessPage;
