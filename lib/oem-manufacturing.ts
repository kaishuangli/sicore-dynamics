export const oemManufacturingPage = {
  eyebrow: "OEM Partners",
  title: "Manufacturing",
  subtitle: "From Prototype to Mass Production",
  description:
    "SiCore provides end-to-end manufacturing services for autonomous charging systems, from prototype builds to scalable production, ensuring every product meets the highest standards of quality, reliability, and performance.",
  heroImage: "/images/oem-integration/prototype-to-production.png",
  heroImageAlt:
    "End-to-end manufacturing of autonomous charging systems from prototype to mass production",

  products: {
    eyebrow: "What We Manufacture",
    title: "We build finished charging products — not just bare boards",
    lead: "SiCore is a product manufacturing partner for autonomous charging, not a generic PCB-only shop.",
    items: [
      "Autonomous Charging Docks",
      "Wireless Charging Modules",
      "Contact Charging Systems",
      "Charging Controllers",
      "Smart Test Bench Platforms",
      "Custom OEM Products",
    ],
  },

  flow: {
    eyebrow: "Factory Flow",
    title: "From customer design to delivery",
    lead: "One transparent manufacturing path — design and production under one engineering partner.",
    nodes: [
      "Customer Design",
      "Engineering Review",
      "Component Sourcing",
      "PCB Fabrication",
      "PCBA",
      "Mechanical Assembly",
      "System Integration",
      "Functional Testing",
      "Quality Inspection",
      "Packaging",
      "Delivery",
    ],
  },

  modules: {
    eyebrow: "Seven Capabilities",
    title: "Manufacturing support at every production stage",
    lead: "From first prototypes to global delivery — engage the stages your program needs.",
    items: [
      {
        id: "prototype-manufacturing",
        number: "01",
        title: "Prototype Manufacturing",
        headline: "Built for teams just getting started",
        intro: "Turn early designs into working hardware you can evaluate on the bench and in the field.",
        topics: ["Prototype PCB", "Prototype Assembly", "Functional Validation"],
      },
      {
        id: "low-volume-production",
        number: "02",
        title: "Low-Volume Production",
        headline: "Ideal for tens to hundreds of units",
        intro: "Bridge the gap between engineering samples and full-scale manufacturing with controlled small runs.",
        topics: ["Pilot builds", "Process refinement", "Early customer shipments"],
      },
      {
        id: "mass-production",
        number: "03",
        title: "Mass Production",
        headline: "Ready for true volume manufacturing",
        intro: "Scale assembly across electronics, docks, and complete systems with repeatable production control.",
        topics: [
          "PCB Assembly",
          "System Assembly",
          "Dock Assembly",
          "Final Assembly",
        ],
      },
      {
        id: "supply-chain",
        number: "04",
        title: "Supply Chain Management",
        headline: "Materials and vendors managed with your product in mind",
        intro: "We coordinate sourcing and inventory so production stays on schedule as volumes grow.",
        topics: ["Vendor", "Material", "Inventory", "Traceability"],
      },
      {
        id: "quality-assurance",
        number: "05",
        title: "Quality Assurance",
        headline: "Quality is built into every stage — not added at the end",
        intro: "Inspection and test gates protect charging performance, safety, and long-term reliability.",
        topics: [
          "Incoming Inspection",
          "In-Process Inspection",
          "Final Inspection",
          "Reliability Testing",
          "Functional Testing",
        ],
      },
      {
        id: "custom-manufacturing",
        number: "06",
        title: "Custom Manufacturing",
        headline: "OEM and ODM programs with your brand on the line",
        intro: "Manufacture under your identity with packaging and labeling matched to your go-to-market plan.",
        topics: ["Customer Branding", "Private Label", "Custom Packaging"],
      },
      {
        id: "global-delivery",
        number: "07",
        title: "Global Delivery",
        headline: "Shipping, warehouse, and after-sales support",
        intro: "Finish the loop from factory floor to customer site — and stay available after delivery.",
        topics: ["Shipping", "Warehouse", "After Sales"],
      },
    ],
  },

  capabilities: {
    eyebrow: "Manufacturing Capabilities",
    title: "Four pillars of production strength",
    lead: "Electronics, mechanics, integration, and finished-goods readiness in one manufacturing stack.",
    columns: [
      {
        title: "Electronics Manufacturing",
        items: ["PCB", "SMT", "Through Hole", "Testing"],
      },
      {
        title: "Mechanical Assembly",
        items: ["Dock", "Housing", "Assembly"],
      },
      {
        title: "System Integration",
        items: ["Wiring", "Firmware", "Calibration"],
      },
      {
        title: "Final Product",
        items: ["Testing", "Packaging", "Shipment"],
      },
    ],
  },

  close: {
    title: "Design and manufacture with one partner",
    body: "When SiCore owns both engineering and production, your charging system moves from prototype to scalable build with fewer handoffs — and higher accountability for quality.",
    cta: { label: "Start a Manufacturing Discussion", href: "/contact" },
  },
} as const;

export type OemManufacturingPage = typeof oemManufacturingPage;
