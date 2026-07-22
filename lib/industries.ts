export type SolutionUseCase = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type SolutionListSection = {
  title: string;
  items: readonly string[];
};

export const industries = [
  {
    id: "automation-robotics",
    title: "Automation & Robotics",
    pageTitle: "Plug free Charging for Automation & Robotics",
    description:
      "Plug-Free Charging Solutions for Autonomous Industrial Robots",
    content: [
      "We deliver plug-free charging solutions designed for industrial robots operating continuously in demanding environments. By eliminating conventional charging connectors, our technologies reduce the impact of dust, vibration, moisture, and mechanical wear. Whether through wireless charging or other plug-free power transfer methods, our solutions enable autonomous charging, maximize uptime, extend equipment lifespan, and improve operational efficiency.",
    ],
    productsIntro:
      "SiCore wireless power systems from 60W to 3000W provide scalable charging for robotic arms, cobots, and automated production equipment.",
    image: "/images/app-200w-amr-fleet.png",
    heroVideo: "/videos/automation-robotics.mp4",
    heroVisual: "/images/product-tx.png",
    alt: "AMR fleet docked at a wireless charging station in a warehouse",
    heroVisualAlt: "SiCore wireless transmitter for robotics applications",
    useCases: [
      {
        title: "Collaborative Robot Cells",
        description: "Autonomous stop-and-charge for cobots running continuous assembly and pick-and-place tasks.",
        image: "/images/automation-wireless-charging.jpg",
        alt: "AGV docking on a plug-free wireless charging pad",
      },
      {
        title: "Automated Production Lines",
        description:
          "Wireless charging enables fully sealed power transfer at production stations, eliminating connector wear caused by vibration, dust, and repeated mating cycles.",
        image: "/images/mobile-robot-production-line.png",
        alt: "Mobile robot production line with wireless charging docks for continuous operation",
      },
      {
        title: "24/7 Robotic Workstations",
        description: "Opportunity charging between cycles to maximize uptime in high-throughput factories.",
        image: "/images/hero-wireless-robotics.jpg",
        alt: "Robotic workstation wireless charging",
      },
      {
        title: "Clean Room Automation",
        description: "Contactless power for sealed environments where exposed contacts are not acceptable.",
        image: "/images/clean-room-automation.png",
        alt: "Clean room AMR transporting materials through sealed automated zones",
      },
    ],
    listSections: [
      {
        title: "Key Benefits",
        items: [
          "Automatic charging",
          "No exposed electrical contacts",
          "IP-rated sealed designs",
          "Reduced maintenance",
          "High reliability",
          "Fast charging",
        ],
      },
    ],
  },
  {
    id: "unmanned-aerial-vehicles",
    title: "Unmanned Aerial Vehicles",
    pageTitle: "Wireless Charging for Unmanned Aerial Vehicles",
    description: "Autonomous Drone Charging Dock",
    content: [
      "Enable fully autonomous drone operations with intelligent wireless charging. Our low-profile charging dock allows drones to land, recharge, and redeploy automatically without exposed electrical contacts, providing reliable power transfer in outdoor environments for parcel delivery, infrastructure inspection, and security patrol.",
    ],
    productsIntro:
      "SiCore wireless charging docks support autonomous UAV landing, outdoor opportunity charging, and continuous drone fleet operations.",
    image: "/images/uav-drone-delivery-hero-v2.png",
    heroVideo: "/videos/agv-amr.mp4",
    heroVisual: "/images/uav-drone-delivery-hero-v2.png",
    alt: "Delivery drone docking on a SiCore wireless charging pad",
    heroVisualAlt: "UAV drone delivery dock with wireless charging",
    useCases: [
      {
        title: "Warehouse Logistics Fleets",
        description: "Opportunity charging lanes that keep AMR fleets moving without manual docking alignment.",
        image: "/images/mobile-robots.jpg",
        alt: "Warehouse AMR wireless charging",
      },
      {
        title: "Manufacturing Corridors",
        description: "In-line charging stations along production routes for uninterrupted material transport.",
        image: "/images/industry-robotics.png",
        alt: "Manufacturing AGV charging corridor",
      },
      {
        title: "Distribution Centers",
        description: "High-reliability charging for 24/7 sorting and fulfillment automation.",
        image: "/images/hero-wireless-robotics.jpg",
        alt: "Distribution center AGV charging",
      },
      {
        title: "Smart Factory Mobility",
        description: "Fleet-ready wireless infrastructure for multi-robot factory logistics.",
        image: "/images/mobile-robots.jpg",
        alt: "Smart factory wireless charging for mobile robot fleets",
      },
    ],
    listSections: [
      {
        title: "Applications",
        items: [
          "Warehouse logistics",
          "Manufacturing",
          "Distribution centers",
          "Smart factories",
        ],
      },
    ],
    flowSteps: ["Drone", "Charging Dock", "Wireless Charging", "Redeploy Mission"],
  },
  {
    id: "medical-equipment",
    title: "Medical Equipment",
    pageTitle: "Wireless Charging for Medical Equipment",
    description:
      "Safer, hygienic wireless charging for medical devices without exposed contacts.",
    content: [
      "Wireless charging enhances the safety and hygiene of medical equipment by eliminating exposed charging contacts.",
      "It supports waterproof designs, simplifies device sterilization, and improves long-term reliability.",
    ],
    productsIntro:
      "Low-power 60W and 200W SiCore modules are ideal for portable medical devices, carts, and diagnostic equipment requiring sealed charging interfaces.",
    image: "/images/industry-medical.png",
    heroVisual: "/images/app-60w-medical-v2.png",
    alt: "Medical workstation cart charging wirelessly on a floor pad in a clinical suite",
    heroVisualAlt: "Sealed handheld medical device resting on a wireless charging pad",
    useCases: [
      {
        title: "Portable Patient Devices",
        description:
          "Bedside and transport monitors with fully enclosed housings — place on a pad to charge without exposed contacts.",
        image: "/images/app-60w-medical-v2.png",
        alt: "Sealed handheld medical device charging on a wireless pad",
      },
      {
        title: "Surgical & Diagnostic Tools",
        description:
          "Sealed charging cradles for handheld scanners and instruments that must withstand wipe-down and sterilization cycles.",
        image: "/images/app-60w-medical.png",
        alt: "Handheld diagnostic scanner docked on a wireless charging cradle",
      },
      {
        title: "Mobile Clinical Equipment",
        description:
          "Carts, workstations, and autonomous clinical platforms that dock at floor pads between rounds — no cords in sterile pathways.",
        image: "/images/app-200w-medical-uv.png",
        alt: "Mobile clinical disinfection platform in a sterile hospital corridor",
      },
    ],
    listSections: [
      {
        title: "Suitable for",
        items: [
          "Portable monitors",
          "Medical carts",
          "Surgical tools",
          "Diagnostic devices",
        ],
      },
    ],
  },
  {
    id: "agricultural-automation",
    title: "Agricultural Automation",
    pageTitle: "Powering the Future of Autonomous Farming",
    description:
      "Reliable charging infrastructure for autonomous field robots, agricultural drones, and next-generation precision farming systems.",
    content: [
      "SiCore delivers outdoor-ready wireless and contact charging docks that keep agricultural robots and drones operating through long field shifts without manual plug-in stops.",
    ],
    productsIntro:
      "SiCore 200W to 1500W platforms support outdoor agricultural robots, drone docks, and fleet charging across farm deployments.",
    image: "/images/app-1500w-agriculture.png",
    heroVisual: "/images/agri-hero.jpg",
    alt: "High-clearance autonomous agricultural robot operating between crop rows",
    heroVisualAlt: "Agricultural automation hero with charging dock in the field",
    useCases: [
      {
        title: "Fruit & Vegetable Inspection",
        description:
          "Navigate orchard and vineyard rows to inspect fruit and vegetable quality, ripeness, and plant health — then recharge at field pads between inspection routes.",
        image: "/images/agri-fruit-inspection.jpg",
        alt: "Scout robot inspecting fruit crops between vineyard rows",
      },
      {
        title: "Field Scout Robot",
        description:
          "Collect crop data and inspect plant health across growing seasons with opportunity charging at field-edge pads.",
        image: "/images/agri-field-scout-v2.jpg",
        alt: "Field scout robot with solar panels navigating red leafy crop rows",
      },
      {
        title: "Autonomous Weeding Robot",
        description:
          "Run continuous weeding passes across large acreage while autonomously returning to charge without manual battery swaps.",
        image: "/images/agri-weeding-robot-v2.jpg",
        alt: "Green autonomous weeding robot straddling crop rows in the field",
      },
      {
        title: "Farm Logistics Robot",
        description:
          "Move harvest crates, inputs, and materials between fields and yards with fast turnaround charging at collection points.",
        image: "/images/agri-farm-logistics-v3.jpg",
        alt: "Farm logistics robot carrying grape harvest crates through vineyard rows",
      },
      {
        title: "Soil Monitoring",
        description:
          "Autonomously sample soil moisture, nutrients, and field conditions with probe-equipped robots — then recharge at outdoor pads between survey routes.",
        image: "/images/agri-soil-monitoring.jpg",
        alt: "Soil monitoring robot probing harvested field for moisture and nutrient data",
      },
      {
        title: "Plant Phenotyping",
        description:
          "Capture in-field growth, canopy structure, and plant health traits with sensor-equipped robots navigating crop rows — then recharge between phenotyping routes.",
        image: "/images/agri-plant-phenotyping.jpg",
        alt: "Plant phenotyping robot collecting crop trait data between corn rows",
      },
    ],
    listSections: [
      {
        title: "Applications",
        items: [
          "Fruit & vegetable inspection",
          "Field scout robots",
          "Autonomous weeding robots",
          "Farm logistics robots",
          "Soil monitoring",
          "Plant phenotyping",
        ],
      },
    ],
  },
  {
    id: "smart-furniture",
    title: "Smart Furniture",
    pageTitle: "Wireless Charging for Smart Furniture",
    description:
      "Embedded wireless charging for offices, hotels, restaurants, and public spaces.",
    content: [
      "Embedded wireless charging modules provide convenient power access while maintaining a clean and modern furniture design.",
      "Ideal for offices, hotels, restaurants, airports, and public spaces.",
    ],
    productsIntro:
      "SiCore 60W embedded modules integrate cleanly into desks, tables, and hospitality furniture without visible charging ports.",
    image: "/images/smart-furniture-airport-lounge.png",
    heroVisual: "/images/smart-furniture-conference.png",
    alt: "Airport lounge desk with embedded wireless charging pads for phones and laptops",
    heroVisualAlt: "Embedded wireless charging in a smart conference table",
    useCases: [
      {
        title: "Meeting Room",
        description: "Invisible charging built into conference tables and collaborative workspaces.",
        image: "/images/smart-furniture-collaboration.png",
        alt: "Smart collaboration docking with wireless charging while presenting",
      },
      {
        title: "Public Library",
        description: "Integrated power for study tables and quiet shared workspaces.",
        image: "/images/smart-furniture-library.png",
        alt: "Library study tables with embedded SiCore wireless charging pads",
      },
      {
        title: "Restaurant & Dining Tables",
        description: "Clean surface designs with hidden charging for guest devices.",
        image: "/images/smart-furniture-restaurant.png",
        alt: "Cafe dining table with embedded wireless charging pad",
      },
      {
        title: "Airport & Public Lounges",
        description: "Durable embedded charging for high-traffic public environments.",
        image: "/images/smart-furniture-airport.png",
        alt: "Airport lounge counter with embedded SiCore wireless charging",
      },
    ],
    listSections: [
      {
        title: "Applications",
        items: [
          "Meeting rooms",
          "Public libraries",
          "Meeting and dining tables",
          "Airports and public lounges",
        ],
      },
    ],
  },
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    pageTitle: "Wireless Charging for Consumer Electronics",
    description:
      "Qi-compatible wireless charging modules for phones, wearables, and handheld devices.",
    content: [
      "SiCore integrates Qi wireless charging modules into consumer and handheld products, delivering convenient contactless power for everyday devices.",
      "Compact receiver designs support sealed enclosures and premium user experiences without exposed charging ports that wear out over time.",
    ],
    productsIntro:
      "SiCore 60W and 200W receiver and transmitter modules support Qi-compatible phones, earbuds, wearables, and handheld product platforms.",
    image: "/images/product-rx.png",
    heroVisual: "/images/product-rx.png",
    alt: "Consumer electronics with wireless charging capability",
    heroVisualAlt: "Wireless receiver for consumer electronics",
    useCases: [
      {
        title: "Smartphone Charging",
        description: "Qi-compatible wireless charging pads and embedded furniture chargers.",
        image: "/images/product-rx.png",
        alt: "Smartphone wireless charging module",
      },
      {
        title: "Earbuds & Wearables",
        description: "Compact receiver designs for earbuds cases and wearable accessories.",
        image: "/images/product-coils.png",
        alt: "Wearable wireless charging coil",
      },
      {
        title: "Smart Watches",
        description: "Low-profile wireless power for watch docks and charging accessories.",
        image: "/images/product-tx.png",
        alt: "Smart watch wireless transmitter",
      },
      {
        title: "Handheld Devices",
        description: "OEM modules for industrial and consumer handheld product integration.",
        image: "/images/product-controller.png",
        alt: "Handheld device power controller",
      },
    ],
    listSections: [
      {
        title: "Applications",
        items: ["Phone charging", "Earbuds", "Smart watches", "Handheld devices"],
      },
    ],
  },
  {
    id: "customized-solutions",
    title: "Customized Solutions",
    pageTitle: "Customized Wireless Charging Solutions",
    description:
      "Tailored wireless charging engineering for unique industrial power, distance, and environmental requirements.",
    content: [
      "Every industrial application has unique power, distance, environmental, and mechanical requirements.",
      "Our engineering team develops customized wireless charging solutions tailored to your product specifications.",
    ],
    productsIntro:
      "SiCore engineers custom platforms across the full 60W–3000W product range with tailored coils, firmware, and mass-production support.",
    image: "/images/oem-integration/mechanical-integration.png",
    heroVisual: "/images/product-coils.png",
    alt: "Custom wireless charging receiver integrated into a mobile robot chassis with matching dock",
    heroVisualAlt: "Custom wireless charging coil engineering",
    useCases: [
      {
        title: "Custom Coil Design",
        description: "Coils optimized for your distance, alignment, and thermal requirements.",
        image: "/images/product-coils.png",
        alt: "Custom wireless charging coil design",
      },
      {
        title: "OEM PCB Development",
        description: "Application-specific transmitter and receiver PCB platforms.",
        image: "/images/product-controller.png",
        alt: "OEM PCB wireless charging development",
      },
      {
        title: "Prototype Validation",
        description: "Rapid prototyping and performance testing before production launch.",
        image: "/images/product-tx.png",
        alt: "Wireless charging prototype platform",
      },
      {
        title: "Mass Production Support",
        description: "Engineering support from pilot builds through volume manufacturing.",
        image: "/images/product-rx.png",
        alt: "Mass production wireless receiver module",
      },
    ],
    listSections: [
      {
        title: "Services include",
        items: [
          "Coil design",
          "PCB development",
          "Power optimization",
          "Foreign object detection",
          "Thermal management",
          "EMC optimization",
          "Prototype development",
          "Mass production support",
        ],
      },
    ],
  },
] as const;

export type Industry = (typeof industries)[number];
export type IndustryId = Industry["id"];

export function getIndustryHeroVideo(industry: { id: string; heroVideo?: string }) {
  return industry.heroVideo ? industry.heroVideo : `/videos/${industry.id}.mp4`;
}

export function getIndustryPageHeading(industry: { pageTitle: string }) {
  return industry.pageTitle;
}

export function getIndustryHref(id: IndustryId) {
  return `/solutions/${id}`;
}

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((item) => item.id === slug);
}

/** Solutions hidden from nav, homepage grid, and solutions landing cards. */
const hiddenSolutionIds = new Set<IndustryId>(["consumer-electronics"]);

export const publicIndustries = industries.filter((item) => !hiddenSolutionIds.has(item.id));

export const industryNavLinks = publicIndustries.map((item) => ({
  label: item.title,
  href: getIndustryHref(item.id),
  id: item.id,
}));

export function getIndustryFromHash(hash: string): IndustryId | null {
  const id = hash.replace(/^#/, "");
  return industries.some((item) => item.id === id) ? (id as IndustryId) : null;
}

export const solutionsPageMeta = {
  title: "Industrial Solutions",
  description:
    "Industrial wireless charging solutions for reliable power transfer across automation, unmanned aerial vehicles, medical equipment, agricultural automation, smart furniture, and customized OEM programs.",
};

export const solutionsFaqs = [
  {
    question: "What industries use SiCore wireless charging?",
    answer:
      "SiCore supports automation & robotics, unmanned aerial vehicles, medical equipment, agricultural automation, smart furniture, and fully customized OEM wireless charging programs.",
  },
  {
    question: "Does SiCore offer wireless charging for unmanned aerial vehicles?",
    answer:
      "Yes. SiCore provides dedicated wireless charging solutions for UAVs and drone platforms, enabling opportunity charging at designated stations without physical connectors to maximize operational uptime.",
  },
  {
    question: "Can SiCore develop customized wireless charging solutions?",
    answer:
      "Yes. SiCore engineering supports coil design, PCB development, power optimization, foreign object detection, thermal management, EMC optimization, prototyping, and mass production support.",
  },
] as const;

export const solutionsLandingMeta = {
  eyebrow: "Industrial Solutions",
  title: "Industrial Wireless Charging Solutions for Reliable Power Transfer",
  paragraphs: [
    "We provide customized wireless charging solutions for industrial equipment, automation systems, medical devices, agricultural platforms, smart furniture, and OEM applications.",
    "Our wireless power technology improves product reliability, eliminates connector wear, reduces maintenance costs, and enables fully sealed device designs.",
  ],
};

/** Homepage mosaic cards — labels/hrefs stay in sync with Technology nav Industrial Solutions dropdown. */
export const solutionsLandingApplications = publicIndustries.map((item) => ({
  label: item.title,
  image: item.image,
  alt: item.alt,
  href: getIndustryHref(item.id),
  id: item.id,
  description: item.description,
}));
