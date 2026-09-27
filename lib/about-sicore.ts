export const aboutSicoreHero = {
  eyebrow: "About SiCore",
  title: "Engineering the Future Together.",
  cta: { label: "What Drives Us", href: "#what-drives-us" },
  image: "/images/about-hero-lab.jpg",
  imageAlt: "SiCore engineers collaborating in a modern lab",
} as const;

export const aboutSicoreStory = {
  id: "our-story",
  paragraphs: [
    "SiCore Dynamics is an intelligent autonomous charging technology company headquartered in Texas, USA. We develop wireless charging, contact charging, plug-free docking, intelligent charging software, and OEM charging infrastructure that enable autonomous machines to operate with minimal human intervention.",
    "Our technology connects power electronics, charging interfaces, docking intelligence, embedded control, communications, and fleet-level charging management into one integrated autonomous charging platform. From a single mobile robot to a distributed fleet of AMRs, AGVs, drones, medical devices, and industrial machines, SiCore helps equipment find power, dock, charge, monitor energy status, and return to operation automatically.",
    "SiCore works with OEMs and system integrators from concept and prototype through system integration and production. Our engineering capabilities span wireless power transfer, conductive charging, docking mechanics, embedded electronics, communications, charging control, monitoring, and customized charging infrastructure.",
  ],
} as const;

export const aboutSicoreDrives = {
  eyebrow: "What Drives Us",
  title: "The principles behind every system we build.",
  items: [
    {
      icon: "target" as const,
      title: "Engineering Excellence",
      text: "Every decision starts with physics, power integrity, and system behavior.",
    },
    {
      icon: "lightbulb" as const,
      title: "Practical Innovation",
      text: "We add intelligence only where it increases uptime, safety, and clarity.",
    },
    {
      icon: "people" as const,
      title: "OEM Partnership",
      text: "Our platforms are built to fit customer machines, workflows, and production.",
    },
    {
      icon: "shield" as const,
      title: "Safety by Design",
      text: "Protection and fail-safe behavior are designed in—not patched on later.",
    },
  ],
} as const;

export const aboutSicorePhilosophy = {
  id: "engineering-philosophy",
  eyebrow: "Our Engineering Philosophy",
  title: "We believe great engineering makes complex technology simple, reliable, and valuable.",
  body: "Autonomy fails when energy delivery still needs people. We engineer charging infrastructure that belongs inside the autonomous system itself.",
  principles: [
    {
      number: "01",
      title: "Understand deeply",
      text: "Start from real operating conditions—duty cycles, environments, and failure modes.",
    },
    {
      number: "02",
      title: "Design for integration",
      text: "Build platforms OEMs can adopt into machines, fleets, and production realities.",
    },
    {
      number: "03",
      title: "Prove reliability",
      text: "Prefer robust, maintainable architectures over complexity that looks impressive.",
    },
  ],
} as const;

export const aboutSicorePeople = {
  eyebrow: "Our People",
  title: "Passionate. Curious. Committed.",
  body: "Our team brings together power electronics, embedded control, magnetic design, and systems engineering—united by one question: how do intelligent machines stay powered without stopping?",
  link: { label: "Join our team", href: "/contact" },
  image: "/images/about-our-people.jpg",
  imageAlt: "Engineers working at technical workstations",
} as const;

export const aboutSicoreLookingAhead = {
  eyebrow: "Looking Ahead",
  title: "We are building the technologies that power the next generation of intelligent machines.",
  paragraphs: [
    "The future will be powered by millions of autonomous machines across warehouses, farms, hospitals, and cities.",
    "We are building the charging infrastructure that enables that future—so machines don't wait for power. Power waits for them.",
  ],
  link: { label: "Let's build the future together", href: "/contact" },
} as const;

export const aboutSicorePageMeta = {
  title: "About SiCore Dynamics",
  description:
    "SiCore Dynamics is an intelligent autonomous charging technology company headquartered in Texas, USA. We develop wireless charging, contact charging, plug-free docking, intelligent charging software, and OEM charging infrastructure that enable autonomous machines to operate with minimal human intervention.",
};
