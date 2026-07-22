export const agriculturalAutomation = {
  hero: {
    title: "Powering the Future of Autonomous Farming",
    subtitle:
      "Reliable charging infrastructure for autonomous field robots, agricultural drones, and next-generation precision farming systems.",
    image: "/images/agri-hero.jpg",
    imageAlt:
      "Autonomous farming field with drone, field robot, tractor, and wireless charging dock at sunset",
  },
  whyTitle: "Why Autonomous Charging Matters",
  whyImage: "/images/agri-why-charging.jpg",
  whyImageAlt: "Agricultural drones charging on a SiCore wireless station in a crop field",
  whyPoints: [
    {
      title: "Remote Deployment",
      detail: "Robots often operate in remote fields where manual charging is impractical.",
    },
    {
      title: "Long Working Hours",
      detail: "Agricultural robots are expected to operate throughout the day with minimal downtime.",
    },
    {
      title: "Harsh Environment",
      detail:
        "Dust, mud, irrigation water, and temperature variation challenge traditional charging interfaces.",
    },
    {
      title: "Minimal Human Intervention",
      detail: "Autonomous charging reduces labor requirements and enables continuous field operation.",
    },
  ],
  ecosystemTitle: "Autonomous Farming Ecosystem",
  ecosystemCopy:
    "Integrated robots, charging infrastructure, and AI platform work together to enable fully autonomous and intelligent agricultural operations.",
  ecosystemImage: "/images/agri-ecosystem.jpg",
  ecosystemImageAlt:
    "Harvesting robot with SiCore charging dock operating in an orchard",
  applicationsTitle: "Applications",
  applicationsIntro:
    "SiCore charging supports the core autonomous platforms used in modern farm operations — from produce inspection to field logistics.",
  applications: [
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
  processTitle: "How Autonomous Charging Works",
  processSteps: [
    {
      label: "Mission",
      detail: "Robots execute assigned tasks in the field.",
    },
    {
      label: "Battery Low",
      detail: "System monitors battery level and determines return timing.",
    },
    {
      label: "Return Dock",
      detail: "Robot autonomously navigates back to the charging dock.",
    },
    {
      label: "Automatic Charging",
      detail: "Charging starts automatically when aligned with the dock. Status monitored in real-time.",
    },
    {
      label: "Mission Resume",
      detail: "Once fully charged, robot is ready to resume the next mission.",
    },
  ],
  solutionsTitle: "Farm Charging Solutions",
  solutionsIntro:
    "Practical charging deployments for real farm operations — field robots and autonomous drone fleets working outdoors through dust, mud, and long duty cycles.",
  solutions: [
    {
      title: "Field Robot Charging Pads",
      description:
        "Rugged outdoor pads placed at field edges, headlands, or greenhouse corridors so scout and weeding robots recharge between passes without operator plug-in.",
      image: "/images/agri-field-charging-pads-v3.jpg",
      imageAlt: "SiCore field robot wireless charging station with multi-power outdoor pads",
      points: [
        "IP-rated for mud, dust, and irrigation spray",
        "Opportunity charging between field passes",
        "Fits scout, weeding, and transport robots",
        "Works with 200W–1500W SiCore platforms",
      ],
    },
    {
      title: "Contact Drone Docking Stations",
      description:
        "Precision contact charging docks deliver high-efficiency power transfer for autonomous drone fleets. After each mission, drones automatically land, engage the contact interface, recharge, and redeploy—providing fast turnaround and reliable operation for continuous autonomous missions.",
      image: "/images/agri-contact-drone-dock-v2.jpg",
      imageAlt: "SiCore field robot contact charging station with side-mount docking interface",
      points: [
        "Automatic precision landing and contact engagement",
        "High-power fast charging for rapid mission turnaround",
        "Rugged outdoor design for long-term deployment",
        "Supports autonomous fleet scheduling and multi-drone operations",
      ],
    },
  ],
  solutionsNote:
    "SiCore engineers pad placement, power class, and dock type to match your crops, robot platforms, and daily mission tempo.",
  whySicoreTitle: "Why SiCore",
  whySicore: [
    {
      title: "Outdoor Reliability",
      detail: "Designed for rain, mud, dust, and UV exposure.",
    },
    {
      title: "Autonomous Operation",
      detail: "Supports fully unattended charging and mission scheduling.",
    },
    {
      title: "Flexible Integration",
      detail: "Compatible with a wide range of robots, drones, and platforms.",
    },
    {
      title: "Scalable Deployment",
      detail: "From small farms to large commercial operations.",
    },
  ],
  cta: {
    title: "Build the Next Generation of Autonomous Farming",
    description:
      "Partner with SiCore to power your agricultural robots with reliable, intelligent charging solutions.",
    image: "/images/agri-scout-robot.jpg",
  },
} as const;
