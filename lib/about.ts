export const aboutSections = [
  {
    id: "about-sicore",
    label: "About SiCore",
    title: "About SiCore Dynamics",
    tagline: "An intelligent autonomous charging technology company.",
    description:
      "SiCore Dynamics is an intelligent autonomous charging technology company headquartered in Texas, USA. We develop wireless charging, contact charging, plug-free docking, intelligent charging software, and OEM charging infrastructure that enable autonomous machines to operate with minimal human intervention.",
    highlights: [
      "Resonant wireless power transfer platforms",
      "Intelligent charging stations for robotics and automation",
      "AI-enabled power control and energy optimization",
      "OEM-ready engineering from concept to production",
    ],
    items: [
      {
        title: "Our Mission",
        text: "Power the next generation of intelligent machines through reliable, scalable wireless charging technology.",
      },
      {
        title: "What We Do",
        text: "We combine wireless power, power electronics, embedded control, and system integration into deployable platforms for industrial customers.",
      },
      {
        title: "Who We Serve",
        text: "Robotics OEMs, AGV/AMR manufacturers, automation integrators, drone platforms, and medical device innovators.",
      },
    ],
  },
  {
    id: "news",
    label: "Industry News",
    title: "Industry News",
    tagline: "Signals shaping autonomous machines and charging infrastructure.",
    description:
      "Industry briefings across robotics, wireless power, automation, agriculture, medical devices, and drones.",
    highlights: [
      "Robotics & autonomous fleets",
      "Wireless and plug-free power",
      "Industrial and outdoor deployment",
    ],
    items: [
      {
        title: "Robotics",
        text: "Fleet charging and uptime strategies for AMRs, AGVs, and mobile platforms.",
      },
      {
        title: "Wireless Power",
        text: "Industrial adoption of resonant and high-power transfer beyond consumer use cases.",
      },
      {
        title: "Automation",
        text: "Opportunity charging and reliability pressures in harsh operating environments.",
      },
    ],
  },
  {
    id: "investor-opportunity",
    label: "Investors",
    title: "Investors",
    tagline: "Investing in the future of intelligent power.",
    description:
      "Supporting the next generation of wireless charging technologies and autonomous energy infrastructure.",
    highlights: [
      "Advanced wireless charging",
      "Engineering expertise",
      "Growing market opportunity",
    ],
    items: [
      {
        title: "Why SiCore",
        text: "Intelligent charging technologies for robotics and automation.",
      },
      {
        title: "Market Opportunity",
        text: "Accelerating demand across robotics, automation, medical, and agriculture.",
      },
      {
        title: "Connect",
        text: "Conversations with investors and strategic partners are welcome.",
      },
    ],
  },
  {
    id: "trade-fairs-events",
    label: "Trade Fair and Event",
    title: "Trade Fairs & Events",
    tagline: "Meet SiCore at leading robotics, automation, and power electronics events.",
    description:
      "Discover SiCore wireless charging demonstrations, engineering sessions, and product showcases at global industry events.",
    highlights: [
      "Live wireless charging demonstrations",
      "Engineering and product consultations",
      "Global robotics and automation exhibitions",
    ],
    items: [
      {
        title: "Upcoming Events",
        text: "See where SiCore will exhibit next — robotics, industrial automation, and energy technology trade fairs.",
      },
      {
        title: "Event Demonstrations",
        text: "Experience intelligent charging stations, wireless power modules, and AI power control live on the show floor.",
      },
      {
        title: "Schedule a Meeting",
        text: "Book an on-site engineering consultation or executive meeting during major trade fairs and conferences.",
      },
    ],
  },
] as const;

export type AboutSectionId = (typeof aboutSections)[number]["id"];

export const aboutNavLinks = aboutSections.map((section) => ({
  label: section.label,
  href:
    section.id === "about-sicore"
      ? "/about"
      : section.id === "investor-opportunity"
        ? "/about/investor"
        : section.id === "news"
          ? "/about/news"
          : `/about#${section.id}`,
  id: section.id,
}));

export function getAboutSectionFromHash(hash: string): AboutSectionId | null {
  const id = hash.replace(/^#/, "");
  return aboutSections.some((section) => section.id === id) ? (id as AboutSectionId) : null;
}

export const aboutPageMeta = {
  title: "About SiCore Dynamics — Why We Exist",
  description:
    "SiCore Dynamics engineers autonomous charging infrastructure so intelligent machines never stop because of how they receive energy.",
};
