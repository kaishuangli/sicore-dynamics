export const plugFreeDockingPage = {
  eyebrow: "Plug-Free Docking Technology",
  title: "Plug-Free Docking Technology",
  subtitle: "Seamless Docking Without Manual Plug-In",
  description:
    "SiCore plug-free docking technology enables autonomous machines to charge without cables or manual connectors — through precise docking mechanics, contact or wireless interfaces, position detection, and outdoor-ready reliability.",
  heroImage: "/images/plug-free-docking/hero.png",
  dockMechanics: {
    id: "dock-mechanics",
    number: "01",
    eyebrow: "Dock Mechanics",
    title: "Precision Docking Starts with Mechanical Design",
    description:
      "Dock Mechanics defines how a robot physically aligns and secures itself before power transfer begins. A well-designed mechanical interface delivers high repeatability across real industrial environments.",
    heroImage: "/images/plug-free-docking/dock-mechanics-hero.png",
    highlights: [
      { label: "High Repeatability", text: "Consistent docking performance", icon: "coil" },
      { label: "Robust Design", text: "Built for industrial environments", icon: "shield" },
      { label: "Autonomous", text: "No human intervention required", icon: "ai" },
      { label: "High Tolerance", text: "Handles real-world positioning variation", icon: "station" },
    ],
    processEyebrow: "Docking Process Overview",
    processTitle: "From Approach to Charging",
    process: [
      { label: "Approach", detail: "Robot navigates to the docking area" },
      { label: "Self-Guidance", detail: "Mechanical guides steer the robot" },
      { label: "Alignment", detail: "Precision alignment is achieved" },
      { label: "Lock & Secure", detail: "Mechanical lock engages if required" },
      { label: "Power Ready", detail: "Power interface is connected" },
      { label: "Start Charging", detail: "Charging begins automatically" },
    ],
    methodsEyebrow: "Implementation Methods",
    methodsTitle: "How Precision Docking Is Achieved",
    methods: [
      {
        id: "self-guiding",
        number: "01",
        title: "Self-Guiding",
        description:
          "Passive mechanical features correct the robot’s trajectory as it enters the dock, enabling smooth docking with large entry tolerance.",
        structures: ["Funnel Guide", "V Guide", "Chamfer Guide", "Rail Guide"],
        benefits: ["Passive guidance", "Large tolerance", "Smooth entry", "No active control required"],
      },
      {
        id: "self-centering",
        number: "02",
        title: "Self-Centering",
        description:
          "Centering mechanisms bring the robot to the exact docking center, compensating for X/Y offset and improving power interface alignment.",
        structures: ["Cone Guide", "Pin & Hole", "Pin & Slot", "Magnetic Centering"],
        benefits: [
          "High centering accuracy",
          "Compensates X/Y offset",
          "Improves power transfer",
          "Reduces wear",
        ],
      },
      {
        id: "compliance",
        number: "03",
        title: "Compliance & Compensation",
        description:
          "Compliance mechanisms absorb impact and compensate for height or parallelism errors, protecting both the dock and the vehicle.",
        structures: ["Floating Dock", "Spring Compensation", "Passive Compliance", "Shock Absorption"],
        benefits: [
          "Absorbs impact energy",
          "Tolerates height variation",
          "Protects mechanical parts",
          "Improves reliability",
        ],
      },
      {
        id: "locking",
        number: "04",
        title: "Locking Mechanism",
        description:
          "Locking holds the robot securely during charging or in harsh environments, preventing disengagement caused by vibration or external force.",
        structures: ["Pin Lock", "Hook Lock", "Magnetic Lock", "Electromagnetic Lock"],
        benefits: [
          "Secure during operation",
          "Resists vibration",
          "Prevents disengagement",
          "Supports harsh environments",
        ],
      },
      {
        id: "tolerance",
        number: "05",
        title: "Tolerance Optimization",
        description:
          "Dock geometry and clearance are optimized so docking remains consistent under centered, offset, angular, wear, and thermal-expansion conditions.",
        structures: [
          "Dock Geometry",
          "Guide Symmetry",
          "Clearance Design",
          "Wear Allowance",
          "Thermal Expansion",
        ],
        benefits: [
          "Handles real-world variation",
          "Consistent performance",
          "Long-term repeatability",
          "Reduced maintenance",
        ],
      },
    ],
  },
  contactDock: {
    id: "contact-dock",
    number: "02",
    eyebrow: "Contact Dock",
    title: "Direct Electrical Connection Without Plugging In",
    description:
      "Contact docks deliver power through conductive interfaces that engage automatically when the machine docks. This approach supports high power transfer with a simple, production-ready connection path for many industrial platforms.",
    heroImage: "/images/plug-free-docking/method-self-centering.png",
    highlights: [
      { label: "Automatic Engagement", text: "No manual plug-in required", icon: "station" },
      { label: "High Power Path", text: "Supports demanding charge rates", icon: "power" },
      { label: "Wear Resistant", text: "Built for repeated dock cycles", icon: "shield" },
      { label: "Production Ready", text: "Simple, scalable interface design", icon: "coil" },
    ],
    processEyebrow: "Contact Charging Process",
    processTitle: "From Dock Presence to Power Flow",
    process: [
      { label: "Approach", detail: "Machine enters the contact dock zone" },
      { label: "Align", detail: "Mechanical guides bring contacts into position" },
      { label: "Engage", detail: "Conductive interfaces make solid contact" },
      { label: "Verify", detail: "Presence and polarity checks confirm readiness" },
      { label: "Charge", detail: "High-current power transfer begins" },
      { label: "Release", detail: "Contacts disengage cleanly on departure" },
    ],
    methodsEyebrow: "Contact Dock Implementation Methods",
    methodsTitle: "How Reliable Contact Power Is Achieved",
    methods: [
      {
        id: "spring-pins",
        number: "01",
        title: "Spring-Loaded Pins",
        description:
          "Pogo-style or spring pins maintain consistent contact force across height variation, ensuring a stable electrical path through every docking cycle.",
        image: "/images/plug-free-docking/method-self-centering.png",
        imageAlt: "Spring-loaded contact pins engaging a docking plate",
        structuresLabel: "Common Structures",
        structures: [
          { label: "Pogo Pins", icon: "pin-hole" },
          { label: "Spring Array", icon: "spring-compensation" },
          { label: "Pin Carrier", icon: "floating-dock" },
          { label: "Contact Cap", icon: "pin-slot" },
        ],
        benefits: [
          "Consistent contact force",
          "Tolerates height variation",
          "High cycle durability",
          "Easy module replacement",
        ],
      },
      {
        id: "pad-contacts",
        number: "02",
        title: "Conductive Pads",
        description:
          "Flat pad interfaces create a broad conductive area for power transfer, simplifying alignment and supporting robust current delivery at fixed stations.",
        image: "/images/plug-free-docking/method-self-guiding.png",
        imageAlt: "Conductive pad contact interface on a docking station",
        structuresLabel: "Common Structures",
        structures: [
          { label: "Pad Plate", icon: "clearance-design" },
          { label: "Dual Pad", icon: "guide-symmetry" },
          { label: "Rail Pad", icon: "rail-guide" },
          { label: "Sealed Pad", icon: "floating-dock" },
        ],
        benefits: [
          "Large contact area",
          "High current capability",
          "Simple geometry",
          "Suitable for fixed docks",
        ],
      },
      {
        id: "brush-contacts",
        number: "03",
        title: "Brush Contacts",
        description:
          "Brush interfaces maintain electrical continuity during small relative motion, absorbing vibration and minor misalignment after the machine settles.",
        image: "/images/plug-free-docking/method-compliance.png",
        imageAlt: "Brush contact modules for vibration-tolerant power transfer",
        structuresLabel: "Common Structures",
        structures: [
          { label: "Carbon Brush", icon: "passive-compliance" },
          { label: "Brush Block", icon: "shock-absorption" },
          { label: "Spring Brush", icon: "spring-compensation" },
          { label: "Wipe Path", icon: "wear-allowance" },
        ],
        benefits: [
          "Tolerates micro-motion",
          "Stable under vibration",
          "Self-cleaning wipe action",
          "Industrial proven form",
        ],
      },
      {
        id: "wear-protection",
        number: "04",
        title: "Wear & Protection Design",
        description:
          "Contact materials, plating, and sealing are selected to resist oxidation, abrasion, and contamination so the interface stays reliable over long duty cycles.",
        image: "/images/plug-free-docking/method-locking.png",
        imageAlt: "Protected contact interface designed for long duty cycles",
        structuresLabel: "Common Structures",
        structures: [
          { label: "Hard Plating", icon: "wear-allowance" },
          { label: "Wipe Seal", icon: "passive-compliance" },
          { label: "Dust Cover", icon: "floating-dock" },
          { label: "Replaceable Tip", icon: "pin-lock" },
        ],
        benefits: [
          "Longer contact life",
          "Resists contamination",
          "Lower maintenance",
          "Stable resistance over time",
        ],
      },
      {
        id: "current-path",
        number: "05",
        title: "High-Current Path Optimization",
        description:
          "Bus geometry, parallel paths, and thermal design are optimized so contact docks deliver high power safely with low loss and controlled temperature rise.",
        image: "/images/plug-free-docking/method-tolerance.png",
        imageAlt: "Diagram of high-current contact path and thermal considerations",
        diagrams: [
          { label: "Nominal Contact", detail: "Full pad engagement" },
          { label: "Partial Offset", detail: "Reduced overlap margin" },
          { label: "Thermal Rise", detail: "Managed under load" },
        ],
        structuresLabel: "Common Optimization Factors",
        structures: [
          { label: "Bus Geometry", icon: "dock-geometry" },
          { label: "Parallel Paths", icon: "guide-symmetry" },
          { label: "Contact Area", icon: "clearance-design" },
          { label: "Thermal Path", icon: "thermal-expansion" },
          { label: "Sense Feedback", icon: "pin-hole" },
        ],
        benefits: [
          "High power transfer",
          "Low connection loss",
          "Controlled heating",
          "Safe charge readiness",
        ],
      },
    ],
  },
  wirelessDock: {
    id: "wireless-dock",
    eyebrow: "Wireless Dock",
    title: "Wireless Dock",
    subtitle: "Autonomous Contactless Charging",
    description:
      "SiCore wireless docking stations combine precise mechanical positioning with contactless power transfer — enabling safe, efficient, and fully autonomous charging without exposed electrical contacts.",
    heroImage: "/images/plug-free-docking/wireless-dock-hero-v2.png",
    architecture: {
      id: "dock-architecture",
      number: "01",
      title: "Dock Architecture",
      description:
        "The wireless dock integrates transmitter coils, ferrite structures, power electronics, and a durable charging surface into a compact, serviceable platform.",
      image: "/images/plug-free-docking/wd-architecture.png",
      imageAlt: "Exploded view of wireless dock layers and internal components",
      layers: [
        { label: "Top Cover", detail: "Protection & aesthetics" },
        { label: "Charging Surface", detail: "Durable interface" },
        { label: "Transmitter Coil", detail: "High efficiency power transfer" },
        { label: "Ferrite Structure", detail: "Magnetic field control" },
        { label: "Power Electronics", detail: "Intelligent power management" },
        { label: "Dock Housing", detail: "Structural & environmental protection" },
      ],
    },
    alignment: {
      id: "coil-alignment",
      number: "02",
      title: "Coil Alignment",
      description:
        "Accurate coil alignment ensures maximum coupling efficiency and stable charging performance across real docking stops.",
      cases: [
        {
          label: "Perfect Alignment",
          detail: "Optimal coupling, highest efficiency.",
          image: "/images/plug-free-docking/wd-align-perfect.png",
        },
        {
          label: "Small Offset",
          detail: "Slight efficiency reduction, still within alignment window.",
          image: "/images/plug-free-docking/wd-align-small.png",
        },
        {
          label: "Large Offset",
          detail: "Charging may be limited or not allowed.",
          image: "/images/plug-free-docking/wd-align-large.png",
        },
      ],
      stats: [
        { label: "Alignment Window (X / Y)", value: "±20 mm" },
        { label: "Typical Efficiency", value: "90%+ within window" },
      ],
    },
    surface: {
      id: "charging-surface",
      number: "03",
      title: "Charging Surface",
      description:
        "The charging surface is engineered for mechanical durability, wear resistance, and safe everyday operation in industrial environments.",
      features: [
        { label: "Wear Resistant", detail: "> 100,000 docking cycles", icon: "shield" },
        { label: "High Load Capacity", detail: "Supports heavy robots and equipment", icon: "station" },
        { label: "Easy to Clean", detail: "Smooth surface, resists dirt and oil", icon: "coil" },
        { label: "Anti-Slip Design", detail: "Secure docking in all conditions", icon: "ai" },
      ],
      materials: [
        {
          label: "Aluminum Surface",
          detail: "High strength, excellent heat dissipation",
          image: "/images/plug-free-docking/wd-surface-aluminum.png",
        },
        {
          label: "Composite Surface",
          detail: "Lightweight, corrosion resistant",
          image: "/images/plug-free-docking/wd-surface-composite.png",
        },
        {
          label: "Rubber Surface",
          detail: "Anti-slip, vibration dampening",
          image: "/images/plug-free-docking/wd-surface-rubber.png",
        },
      ],
    },
    fod: {
      id: "foreign-object-protection",
      number: "04",
      title: "Foreign Object Protection",
      description:
        "Advanced FOD technology monitors the charging area for metallic objects and disables charging when a hazard is detected.",
      cases: [
        {
          label: "Bolt Detected",
          status: "Charging disabled",
          safe: false,
          image: "/images/plug-free-docking/wd-fod-bolt.png",
        },
        {
          label: "Key Detected",
          status: "Charging disabled",
          safe: false,
          image: "/images/plug-free-docking/wd-fod-key.png",
        },
        {
          label: "Coin Detected",
          status: "Charging disabled",
          safe: false,
          image: "/images/plug-free-docking/wd-fod-coin.png",
        },
        {
          label: "No Object",
          status: "Charging enabled",
          safe: true,
          image: "/images/plug-free-docking/wd-fod-clear.png",
        },
      ],
      features: [
        { label: "Multi-Point Sensing", detail: "High accuracy detection", icon: "emc" },
        { label: "Fast Response", detail: "<100 ms detection time", icon: "bolt" },
        { label: "Safe & Reliable", detail: "Protects system and users", icon: "shield" },
        { label: "Continuous Monitoring", detail: "Real-time charging area supervision", icon: "ai" },
      ],
    },
    sealed: {
      id: "sealed-dock-design",
      number: "05",
      title: "Sealed Dock Design",
      description:
        "A fully sealed dock withstands water, dust, chemicals, and extreme weather for reliable outdoor and industrial deployment.",
      protections: [
        { label: "IP67 Protection", detail: "Waterproof and dustproof", icon: "shield" },
        { label: "Corrosion Resistance", detail: "Long-term material durability", icon: "thermal" },
        { label: "Chemical Resistant", detail: "Handles washdown and fluids", icon: "emc" },
        { label: "Impact Resistant", detail: "Built for industrial duty", icon: "station" },
      ],
      environments: [
        { label: "Rain", image: "/images/plug-free-docking/wd-env-rain.png" },
        { label: "Snow", image: "/images/plug-free-docking/wd-env-snow.png" },
        { label: "Dust", image: "/images/plug-free-docking/wd-env-dust.png" },
        { label: "Mud", image: "/images/plug-free-docking/wd-env-mud.png" },
      ],
    },
    cta: {
      title: "Reliable Connection. Continuous Power.",
      text: "SiCore Wireless Dock delivers safe, efficient, and autonomous charging for the next generation of intelligent machines.",
    },
  },
  positionDetection: {
    id: "position-detection",
    number: "04",
    eyebrow: "Position Detection",
    title: "Know When Alignment Is Ready for Charging",
    description:
      "Position detection confirms that the machine is correctly aligned before charging begins. Sensing and feedback help validate docking accuracy, improve safety, and ensure efficient power transfer at every stop.",
    heroImage: "/images/plug-free-docking/dock-mechanics-hero.png",
    highlights: [
      { label: "Dock Presence", text: "Confirm station before approach", icon: "station" },
      { label: "Alignment Ready", text: "Validate pose before charging", icon: "ai" },
      { label: "Misalignment Feedback", text: "Correct approach in real time", icon: "coil" },
      { label: "Autonomous Routines", text: "Support full dock sequences", icon: "shield" },
    ],
    methodsEyebrow: "Detection Methods",
    methodsTitle: "How Position Is Sensed Before Charging",
    methods: [
      {
        id: "vision-guidance",
        number: "01",
        title: "Vision Guidance",
        description:
          "Autonomous robots first identify the docking station using onboard vision systems before entering the final docking process. Cameras continuously detect visual features such as AprilTags, fiducial markers, QR codes, or natural structural features to estimate the dock's position and orientation. Compared with traditional fixed-position docking, vision guidance enables greater flexibility and allows docking stations to be relocated without extensive mechanical adjustments.",
        descriptionSecondary:
          "Modern AI vision algorithms further improve robustness under varying lighting conditions and partially occluded environments, making vision-based docking an essential technology for next-generation autonomous machines.",
        technologiesLabel: "Core Technologies",
        technologies: [
          "AprilTag Detection",
          "ArUco Marker Recognition",
          "AI Vision Algorithms",
          "Feature Matching",
          "Pose Estimation",
        ],
        benefits: [
          "Relocatable docking stations",
          "Flexible approach without fixed fixtures",
          "Robust under lighting variation",
          "Works with partial occlusion",
          "Accurate dock pose estimation",
        ],
      },
      {
        id: "lidar-localization",
        number: "02",
        title: "LiDAR Localization",
        description:
          "LiDAR provides high-precision three-dimensional positioning by continuously scanning the surrounding environment and generating a real-time point cloud. Unlike camera-based systems, laser localization is largely independent of ambient lighting, allowing autonomous vehicles to navigate reliably in warehouses, factories, and outdoor environments.",
        descriptionSecondary:
          "During docking, LiDAR accurately estimates the robot's position relative to the charging station and continuously corrects its trajectory to ensure smooth and repeatable alignment before charging begins.",
        image: "/images/plug-free-docking/method-lidar-localization.png",
        imageAlt:
          "LiDAR point-cloud localization for indoor, warehouse, and night-time docking environments",
        technologiesLabel: "Core Technologies",
        technologies: [
          "2D / 3D LiDAR",
          "SLAM Localization",
          "Point Cloud Registration",
          "Obstacle Mapping",
          "Real-Time Navigation",
        ],
        benefits: [
          "Lighting-independent localization",
          "High-precision 3D positioning",
          "Reliable warehouse and outdoor use",
          "Continuous trajectory correction",
          "Smooth, repeatable dock alignment",
        ],
      },
      {
        id: "infrared-guidance",
        number: "03",
        title: "Infrared Guidance",
        layout: "stacked",
        gallery: [
          {
            src: "/images/plug-free-docking/method-infrared-fov.png",
            alt: "Five-step infrared guidance process from detection to docking",
          },
          {
            src: "/images/plug-free-docking/method-infrared-service-robot.png",
            alt: "Service robot with infrared docking charging pile for automatic charging",
          },
        ],
        whatIsTitle: "What is Infrared Guidance?",
        description:
          "Infrared Guidance uses IR emitters installed on the charging dock and IR receivers mounted on the robot. As the robot approaches the station, it detects the infrared signal and adjusts its trajectory until it reaches the correct docking position.",
        advantagesLabel: "Advantages",
        advantages: [
          "Low system cost",
          "Simple implementation",
          "Fast response",
          "Low power consumption",
          "Proven and mature technology",
        ],
        applicationsLabel: "Typical Applications",
        applications: [
          "Robotic vacuum cleaners",
          "Consumer robots",
          "Educational robots",
          "Indoor delivery robots",
          "Small service robots",
        ],
      },
      {
        id: "ultrasonic-detection",
        number: "04",
        title: "Ultrasonic Detection",
        layout: "stacked",
        gallery: [
          {
            src: "/images/plug-free-docking/method-ultrasonic-sensor.png",
            alt: "Ultrasonic sensor module used for short-range docking detection",
          },
          {
            src: "/images/plug-free-docking/method-ultrasonic-diagram.png",
            alt: "Diagrams of ultrasonic cliff, wall, obstacle, and auto-recharge detection",
          },
        ],
        whatIsTitle: "What is Ultrasonic Detection?",
        description:
          "Ultrasonic sensors emit high-frequency sound waves and calculate the distance to nearby objects from the reflected echoes. During docking, these sensors continuously measure the distance between the robot and the charging station to enable smooth, collision-free positioning.",
        advantagesLabel: "Advantages",
        advantages: [
          "Accurate short-range detection",
          "Low cost",
          "Resistant to lighting changes",
          "Reliable obstacle detection",
          "Ideal as a secondary positioning sensor",
        ],
        applicationsLabel: "Typical Applications",
        applications: [
          "AGVs",
          "Cleaning robots",
          "Mobile service robots",
          "Smart warehouse vehicles",
          "Indoor automation equipment",
        ],
      },
    ],
  },
  outdoorReliability: {
    id: "outdoor-reliability",
    number: "05",
    eyebrow: "Outdoor Reliability",
    title: "Built for Real Environments, Not Lab Conditions",
    description:
      "Outdoor reliability ensures docking continues to work under dust, moisture, temperature variation, and vibration. Materials, sealing, and interface design are selected for long-term operation in demanding field conditions.",
    methodsEyebrow: "Reliability Pillars",
    methodsTitle: "How Outdoor Docking Stays Dependable",
    methods: [
      {
        id: "weather-protection",
        number: "01",
        title: "Weather Protection",
        description:
          "Designed to operate reliably in rain, dust, and outdoor environments with sealed enclosure protection.",
        gallery: [
          {
            src: "/images/plug-free-docking/outdoor-weather-rain.png",
            alt: "Sealed outdoor equipment operating in heavy rain at night",
          },
          {
            src: "/images/plug-free-docking/outdoor-weather-shelter.png",
            alt: "Autonomous robot docked under a solar-panel shelter outdoors",
          },
          {
            src: "/images/plug-free-docking/outdoor-weather-field.png",
            alt: "Rugged outdoor robot at a weather-exposed docking station",
          },
        ],
        technologiesLabel: "Core Technologies",
        technologies: ["IP67 / IP69K", "Waterproof Sealing", "Dust Protection"],
      },
      {
        id: "corrosion-resistance",
        number: "02",
        title: "Corrosion Resistance",
        description:
          "Durable materials and protective coatings extend product life in humid and corrosive environments.",
        gallery: [
          {
            src: "/images/plug-free-docking/outdoor-corrosion-beach.png",
            alt: "Coastal outdoor furniture and charging interface near the beach",
          },
          {
            src: "/images/plug-free-docking/outdoor-corrosion-bollards.png",
            alt: "Corrosion-resistant outdoor charging bollards along a seaside promenade",
          },
          {
            src: "/images/plug-free-docking/outdoor-corrosion-garden.png",
            alt: "Protected outdoor charging station beside a garden bench",
          },
        ],
        technologiesLabel: "Core Technologies",
        technologies: ["Anodized Aluminum", "Protective Coating", "Stainless Steel Hardware"],
      },
      {
        id: "thermal-management",
        number: "03",
        title: "Thermal Management",
        description:
          "Stable operation across high and low temperatures through optimized thermal design.",
        gallery: [
          {
            src: "/images/plug-free-docking/outdoor-thermal-robot.png",
            alt: "Mobile robot docking at a tall outdoor charging pillar",
          },
          {
            src: "/images/plug-free-docking/outdoor-thermal-cabinet.png",
            alt: "Industrial cabinet with temperature and humidity monitoring display",
          },
          {
            src: "/images/plug-free-docking/outdoor-thermal-heatsink.png",
            alt: "Power electronics module with metal heatsink for thermal dissipation",
          },
        ],
        technologiesLabel: "Core Technologies",
        technologies: ["Heat Dissipation", "UV Resistance", "Wide Temperature Operation"],
      },
      {
        id: "mechanical-durability",
        number: "04",
        title: "Mechanical Durability",
        description:
          "Engineered to withstand repeated docking cycles, vibration, and accidental impacts.",
        gallery: [
          {
            src: "/images/plug-free-docking/outdoor-durability-hex.png",
            alt: "Hexagonal robot docking at a marked outdoor charging station",
          },
          {
            src: "/images/plug-free-docking/outdoor-durability-wall.png",
            alt: "Robot docked at a wall charging port with battery status indicator",
          },
          {
            src: "/images/plug-free-docking/outdoor-durability-bay.png",
            alt: "Multiple robots charging in a protected docking bay",
          },
        ],
        technologiesLabel: "Core Technologies",
        technologies: ["Shock Resistance", "Vibration Resistance", "Structural Strength"],
      },
    ],
  },
} as const;
