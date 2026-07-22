export const wirelessEnergyPlatformPage = {
  eyebrow: "Technology Platforms",
  title: "Wireless Energy Platform",
  subtitle: "Architecture Overview",
  description:
    "Advanced wireless power technologies engineered for efficient, reliable, and scalable energy transfer — from fundamental physics to production-ready systems.",
  concept: {
    eyebrow: "Energy Transfer Concept",
    title: "From transmitter to device — without a cable.",
    steps: [
      { label: "Transmitter (TX)", detail: "Power electronics and TX coil generate the energy field." },
      { label: "Wireless Energy Transfer", detail: "Energy crosses the air gap through magnetic coupling." },
      { label: "Receiver (RX)", detail: "RX coil captures energy and converts it for the load." },
      { label: "Power to Device", detail: "Stable DC power delivered to battery or machine systems." },
    ],
  },
  physicsLayer: {
    eyebrow: "Physics Layer",
    title: "Wireless Energy Transfer Physics",
    description:
      "The Physics Layer defines the fundamental principles of wireless energy transfer. It establishes how energy moves across space through electromagnetic fields and resonant coupling — enabling efficient, contactless power delivery for next-generation intelligent systems.",
    heroImage: "/images/physics-layer/physics-hero.png",
    mechanismsEyebrow: "Transfer Mechanisms",
    mechanismsTitle: "Four Fundamental Transfer Mechanisms",
    mechanismsIntro:
      "Wireless energy transfer relies on different physical mechanisms. SiCore Dynamics researches and develops multiple energy transfer technologies to meet different power levels, operating conditions, and application scenarios.",
    mechanisms: [
      {
        id: "resonant-inductive",
        number: "01",
        title: "Resonant Inductive Coupling",
        image: "/images/physics-layer/resonant-inductive-v2.png",
        description:
          "The industry-standard solution for high-efficiency short-range power transfer. Widely adopted in Qi charging and industrial docking systems.",
        applications: [
          { label: "Consumer Charging", icon: "wireless" },
          { label: "Service Robots", icon: "station" },
          { label: "AGV / AMR", icon: "coil" },
          { label: "Medical Devices", icon: "shield" },
        ],
        research: [
          "Coil Resonance Design",
          "Resonant Compensation Network",
          "High-Q Resonator",
          "Coupling Optimization",
          "Misalignment Tolerance",
          "Foreign Object Detection",
        ],
      },
      {
        id: "magnetic-resonance",
        number: "02",
        title: "Magnetic Resonance Coupling",
        image: "/images/physics-layer/magnetic-resonance-v2.png",
        description:
          "Enables longer air-gap and more flexible alignment compared with conventional inductive coupling — ideal for autonomous systems.",
        applications: [
          { label: "Autonomous Robots", icon: "station" },
          { label: "Drones", icon: "wireless" },
          { label: "Industrial Automation", icon: "power" },
          { label: "Logistics Robots", icon: "coil" },
        ],
        research: [
          "Long Air Gap Design",
          "High Coupling Resonator",
          "Multi-Resonator Network",
          "Magnetic Field Distribution",
          "Resonant Frequency Stability",
          "Large Offset Tolerance",
          "Power Scalability",
        ],
      },
      {
        id: "capacitive",
        number: "03",
        title: "Capacitive Wireless Power",
        image: "/images/physics-layer/capacitive-v2.png",
        description:
          "Transfers energy through electric fields rather than magnetic fields — advantageous in metal-rich or constrained environments.",
        applications: [
          { label: "Metal-rich Environment", icon: "emc" },
          { label: "Biomedical Devices", icon: "shield" },
          { label: "Thin Structures", icon: "chip" },
          { label: "Semiconductor Equipment", icon: "firmware" },
        ],
        research: [
          "Electric Field Coupling",
          "Plate Structure Design",
          "High Frequency Operation",
          "Dielectric Optimization",
          "Electric Field Shielding",
          "High Voltage Isolation",
          "Safety Optimization",
        ],
        deepDive: {
          title: "Electric-Field-Based Wireless Energy Transfer",
          paragraphs: [
            "Capacitive Wireless Power Transfer (CWPT) transfers energy through high-frequency electric fields rather than magnetic fields. Instead of using coils and magnetic flux, it utilizes paired conductive electrodes to form a capacitive coupling path, enabling contactless power delivery across a small air gap.",
            "Its ultra-thin structure, low magnetic interference, and compatibility with metal-rich environments make CWPT a promising solution for compact electronics, medical devices, rotating systems, and next-generation embedded applications where conventional inductive charging may not be ideal.",
          ],
          images: [
            {
              src: "/images/physics-layer/capacitive-electric-field-cycle.png",
              alt: "Capacitive wireless power transfer cycle using high-frequency electric fields between transmitting and receiving electrodes",
            },
          ],
        },
      },
      {
        id: "dynamic",
        number: "04",
        title: "Dynamic Wireless Power",
        image: "/images/physics-layer/dynamic-v2.png",
        description:
          "Delivers continuous power while machines are in motion — removing the need to stop for charging.",
        applications: [
          { label: "AGV / AMR", icon: "coil" },
          { label: "Warehouse Robots", icon: "station" },
          { label: "Conveyor Systems", icon: "power" },
          { label: "Factory Automation", icon: "ai" },
        ],
        research: [
          "Continuous Energy Transfer",
          "Segmented Transmitters",
          "Position Tracking",
          "Dynamic Coil Switching",
          "Power Handover",
          "Motion Synchronization",
          "Real-time Power Regulation",
        ],
        deepDive: {
          title: "Power While in Motion",
          paragraphs: [
            "Dynamic Wireless Power Transfer (DWPT) enables continuous energy delivery to moving vehicles and robotic systems without requiring them to stop for charging. By dynamically activating power segments or tracking the receiver position in real time, the system maintains efficient wireless energy transfer throughout the entire movement process.",
            "This technology is designed for autonomous mobile robots (AMRs), AGVs, conveyor systems, and industrial automation, enabling uninterrupted operation, higher productivity, and reduced downtime in next-generation intelligent facilities.",
          ],
          images: [
            {
              src: "/images/physics-layer/dynamic-warehouse-track.png",
              alt: "Smart warehouse with wireless charging track powering mobile logistics robots in motion",
            },
            {
              src: "/images/physics-layer/dynamic-power-principle-v2.png",
              alt: "Dynamic wireless power transfer principle showing magnetic field, pick-up receiver, and cascaded transmission cables",
              figureExplanation: {
                title: "Figure Explanation",
                items: [
                  {
                    label: "(a) System Overview",
                    text: "The mobile robot carries a receiver coil while the transmitter is embedded beneath the travel path. High-frequency alternating current flowing through the transmitter generates a magnetic field, which induces electrical current in the receiver coil as the robot moves above it.",
                  },
                  {
                    label: "(b) Single Transmission Conductor",
                    text: "A single transmission conductor creates an alternating magnetic field around the cable. As the receiver passes through this field, electrical energy is induced in the pickup coil. This configuration is simple but provides a relatively limited magnetic coverage.",
                  },
                  {
                    label: "(c) Cascaded Transmission Conductors",
                    text: "Multiple transmission conductors are arranged in parallel to create a larger and more uniform magnetic field. The merged magnetic field improves coupling stability, extends the effective charging region, and enables more reliable wireless power transfer for continuously moving vehicles.",
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  magneticLayer: {
    eyebrow: "Magnetic Layer",
    title: "Magnetic Engineering",
    subtitle: "Engineering the magnetic path behind efficient wireless power.",
    description:
      "Our magnetic platform maximizes coupling efficiency, shapes flux with precision, and minimizes leakage — delivering stable wireless power across real-world alignment and gap variation.",
    heroImage: "/images/magnetic-layer/magnetic-hero-v2.png",
    capabilitiesEyebrow: "Our Capabilities",
    capabilitiesTitle: "Five Pillars of Magnetic Excellence",
    pillars: [
      {
        id: "coil-engineering",
        number: "01",
        title: "Coil Engineering",
        image: "/images/magnetic-layer/coil-engineering.png",
        description:
          "TX/RX coil geometries engineered for target power, frequency, and air-gap requirements.",
        points: ["Coil Topologies", "Coil Materials", "Coil Optimization"],
      },
      {
        id: "magnetic-structure",
        number: "02",
        title: "Magnetic Structure",
        image: "/images/magnetic-layer/magnetic-structure.png",
        description:
          "Ferrite and shielding structures that guide flux, cut loss, and protect surrounding systems.",
        points: ["Ferrite Design", "Magnetic Shielding", "Flux Guide"],
      },
      {
        id: "coupling-engineering",
        number: "03",
        title: "Coupling Engineering",
        image: "/images/magnetic-layer/coupling-engineering.png",
        description:
          "Field shaping for higher coupling, cleaner transfer, and improved power density.",
        points: ["Coupling Efficiency", "Air Gap Optimization", "Power Density"],
      },
      {
        id: "misalignment",
        number: "04",
        title: "Misalignment Engineering",
        image: "/images/magnetic-layer/misalignment.png",
        description:
          "Tolerance design so docking variation in position and angle does not break charging.",
        points: ["X/Y Offset", "Z Distance", "Angular Tolerance"],
      },
      {
        id: "simulation",
        number: "05",
        title: "Magnetic Simulation",
        image: "/images/magnetic-layer/simulation.png",
        description:
          "Electromagnetic simulation that validates flux distribution before hardware is built.",
        points: ["Flux Distribution", "ANSYS Maxwell", "JMAG"],
      },
    ],
  },
  powerLayer: {
    eyebrow: "Power Layer",
    heroLabel: "Power Electronics",
    title: "High-Efficiency Power Conversion Architecture",
    description:
      "A complete power path from DC input to regulated output — engineered for conversion efficiency, thermal stability, reliability, and scalable wireless energy systems.",
    heroImage: "/images/power-layer/power-hero-v3.png",
    highlights: [
      { label: "High Efficiency", icon: "bolt" },
      { label: "High Reliability", icon: "shield" },
      { label: "Excellent Thermal Performance", icon: "thermal" },
      { label: "Wide Power Range", icon: "power" },
    ],
    modules: [
      {
        id: "inverter",
        number: "01",
        title: "Inverter",
        summary: "Generate high-frequency AC power from DC input to excite the wireless energy transfer link.",
        detail:
          "The inverter converts DC input into high-frequency AC power, providing the excitation required for efficient wireless energy transfer. Different inverter topologies are selected based on power level, efficiency, switching frequency, and system architecture.",
        image: "/images/power-layer/module-inverter.png",
        checks: ["Half Bridge", "Full Bridge", "LLC", "Phase Shift"],
      },
      {
        id: "matching-network",
        number: "02",
        title: "Matching Network",
        summary: "Tune transmitter and receiver into resonance to maximize transfer efficiency.",
        detail:
          "The matching network tunes the transmitter and receiver into resonance, minimizing reactive power while maximizing transfer efficiency. Different compensation topologies are selected according to power level, coupling conditions, and application requirements.",
        image: "/images/power-layer/module-matching-network.png",
        checks: ["Series", "Parallel", "LCC", "LCL", "CLC"],
      },
      {
        id: "rectifier",
        number: "03",
        title: "Rectifier",
        summary: "Convert received high-frequency AC power into usable DC output.",
        detail:
          "The rectifier converts the received high-frequency AC power into usable DC power. Advanced rectification technologies improve conversion efficiency while reducing conduction losses and heat generation.",
        image: "/images/power-layer/module-rectifier.png",
        checks: ["Diode Rectifier", "Synchronous Rectifier", "Active Rectifier"],
      },
      {
        id: "dc-dc",
        number: "04",
        title: "DC/DC",
        summary: "Regulate rectified voltage for battery charging or system power supply.",
        detail:
          "The DC/DC stage regulates the rectified voltage into the required output level for battery charging or system power supply. Different converter topologies provide flexible voltage conversion for various applications.",
        image: "/images/power-layer/module-dc-dc.png",
        checks: ["Buck", "Boost", "Buck-Boost"],
      },
      {
        id: "high-frequency-power",
        number: "05",
        title: "High Frequency Power",
        summary: "Enable high-efficiency switching with wide-bandgap power devices.",
        detail:
          "High-frequency power devices determine the switching performance, efficiency, thermal behavior, and power density of the wireless power system. Wide-bandgap semiconductor technologies enable higher switching frequencies and more compact system designs.",
        image: "/images/power-layer/module-hf-devices.png",
        checks: ["MOSFET", "GaN", "SiC"],
      },
    ],
  },
  controlLayer: {
    eyebrow: "Control Layer",
    heroLabel: "Intelligent Control",
    title: "Real-Time Control for Safe, Efficient Wireless Power",
    description:
      "A closed-loop control architecture that senses, decides, and protects across the TX/RX link — keeping resonance locked, power stable, and operation safe under changing load and alignment.",
    heroImage: "/images/control-layer/control-hero.png",
    highlights: [
      { label: "Real-time Control", icon: "chip" },
      { label: "Adaptive Regulation", icon: "ai" },
      { label: "Safety Protection", icon: "shield" },
      { label: "System Communication", icon: "comm" },
    ],
    featuresEyebrow: "Control Intelligence Capabilities",
    featuresTitle: "Intelligent Control Features",
    features: [
      {
        id: "frequency-tracking",
        number: "01",
        title: "Frequency Tracking",
        description:
          "Continuously tracks and locks onto the optimal resonant frequency to maximize power transfer efficiency.",
        visual: "frequency",
        points: ["Auto Frequency Sweep", "Resonance Detection", "Real-time Tracking"],
      },
      {
        id: "power-regulation",
        number: "02",
        title: "Power Regulation",
        description:
          "Supports constant power, constant voltage, and constant current modes to meet different charging needs.",
        visual: "regulation",
        points: ["Constant Power (CP)", "Constant Voltage (CV)", "Constant Current (CC)"],
      },
      {
        id: "coil-detection",
        number: "03",
        title: "Coil Detection",
        description:
          "Detects whether a receiver is present and evaluates its status to ensure safe and efficient operation.",
        visual: "coil-detect",
        points: ["Receiver Presence Detection", "Link Quality Monitoring", "Fault Indication"],
      },
      {
        id: "fod",
        number: "04",
        title: "Foreign Object Detection FOD",
        description:
          "Identifies foreign metal objects on the charging surface to prevent heating and ensure user safety.",
        visual: "fod",
        points: ["Metal Object Detection", "Power Reduction", "Safety Shutdown"],
      },
      {
        id: "thermal-protection",
        number: "05",
        title: "Thermal Protection",
        description:
          "Monitors temperature of key components in real time to prevent overheating and protect the system.",
        visual: "thermal",
        points: ["Temperature Monitoring", "Over-Temperature Protection", "Smart Fan / Power Derating"],
      },
      {
        id: "adaptive-charging",
        number: "06",
        title: "Adaptive Charging",
        description:
          "Dynamically adjusts control strategy and output power based on load changes and system conditions.",
        visual: "adaptive",
        points: ["Load Monitoring", "Dynamic Power Adjustment", "Efficiency Optimization"],
      },
      {
        id: "multi-coil",
        number: "07",
        title: "Multi-coil Control",
        description:
          "Intelligently switches and coordinates multiple transmitter coils for seamless power coverage and efficiency.",
        visual: "multi-coil",
        points: ["Coil Selection", "Automatic Switching", "Power Balancing"],
      },
      {
        id: "communication",
        number: "08",
        title: "Communication",
        description:
          "Provides reliable communication between transmitter, receiver, battery, and host systems.",
        visual: "communication",
        points: ["Qi Protocol", "CAN Bus", "UART", "BLE"],
      },
    ],
  },
  layers: [
    {
      id: "physics",
      name: "Physics Layer",
      description: "Define the fundamental principles of wireless energy transfer.",
      accent: "#2563EB",
      items: [
        { title: "Resonance", text: "Resonant coupling foundations for efficient near-field transfer." },
        { title: "Magnetic Resonance", text: "Tuned magnetic resonance for robust energy delivery." },
        { title: "Dynamic WPT", text: "Support for motion-tolerant and opportunity charging scenarios." },
        { title: "Capacitive WPT", text: "Complementary capacitive approaches where applications require them." },
      ],
    },
    {
      id: "magnetic",
      name: "Magnetic Layer",
      description: "Optimize the magnetic coupling for maximum efficiency and tolerance.",
      accent: "#0F766E",
      items: [
        { title: "Coil Design", text: "TX/RX coil geometries engineered for target power and gap." },
        { title: "Ferrite Design", text: "Magnetic materials shaped to guide flux and reduce loss." },
        { title: "Flux Optimization", text: "Field shaping for higher coupling and cleaner transfer." },
        { title: "Misalignment", text: "Tolerance design so docking variation does not break charging." },
        { title: "Shielding", text: "Containment strategies that protect surrounding systems." },
      ],
    },
    {
      id: "power",
      name: "Power Layer",
      description: "Deliver high-efficiency power conversion and transfer at high frequency.",
      accent: "#C2410C",
      flow: ["Inverter", "Matching Network", "Wireless Transfer", "Rectifier", "DC/DC", "High Frequency Power"],
      items: [
        { title: "High-Frequency Conversion", text: "Efficient inversion and rectification across the wireless link." },
        { title: "Matching Network", text: "Impedance matching that keeps transfer efficient under load change." },
        { title: "DC/DC Stage", text: "Regulated output staged for battery and system requirements." },
      ],
    },
    {
      id: "control",
      name: "Control Layer",
      description: "Intelligent control and protection for safe, adaptive, and efficient wireless power.",
      accent: "#1D4ED8",
      items: [
        { title: "Frequency Tracking", text: "Tracks resonance conditions as coupling and load shift." },
        { title: "Adaptive Control", text: "Adjusts power delivery for performance and stability." },
        { title: "FOD", text: "Foreign object detection for safer charging environments." },
        { title: "Communication", text: "TX/RX coordination for negotiation, monitoring, and control." },
        { title: "Multi-coil Control", text: "Manages multi-coil arrays for coverage and selectivity." },
      ],
    },
    {
      id: "system",
      name: "System Layer",
      description: "Ensure reliability, safety, compatibility, and production excellence.",
      accent: "#0F172A",
      items: [
        {
          id: "system-emc",
          title: "EMC",
          text: "Electromagnetic compatibility for industrial and regulated environments.",
        },
        {
          id: "system-thermal",
          title: "Thermal",
          text: "Thermal design that sustains continuous duty cycles.",
        },
        {
          id: "system-reliability",
          title: "Reliability",
          text: "Architecture choices that hold up over long operating life.",
        },
        {
          id: "system-mechanical",
          title: "Mechanical",
          text: "Mechanical integration for docks, housings, and platforms.",
        },
        {
          id: "system-safety",
          title: "Safety",
          text: "Protection and fail-safe behavior designed into the stack.",
        },
        {
          id: "system-manufacturability",
          title: "Manufacturability",
          text: "Production-ready design for scale, yield, and consistency.",
        },
      ],
    },
  ],
  outcomes: [
    {
      title: "High Efficiency",
      text: "Optimized transfer across physics, magnetics, and power conversion.",
    },
    {
      title: "Stable Power",
      text: "Consistent delivery under alignment, load, and environmental variation.",
    },
    {
      title: "Safe & Reliable",
      text: "Control, protection, and system design built for continuous operation.",
    },
    {
      title: "Scalable Platform",
      text: "A layered architecture that grows from modules to full platforms.",
    },
    {
      title: "Broad Applications",
      text: "Ready for robotics, automation, medical, agriculture, and autonomous systems.",
    },
  ],
} as const;
