export const intelligentChargingPage = {
  eyebrow: "Intelligent Charging Systems",
  title: "Smarter Charging. Higher Availability.",
  description:
    "SiCore intelligent charging systems coordinate batteries, charging stations, mobile equipment, and fleet-level operations through adaptive charging algorithms and real-time system intelligence.",
  supporting:
    "From a single autonomous machine to an entire robotic fleet, the platform helps deliver safe, efficient, and continuously optimized charging.",
  heroImage: "/images/intelligent-charging/ics-hero-fleet.png",
  highlights: [
    { label: "Adaptive Charging", icon: "ai" },
    { label: "Battery-Aware", icon: "power" },
    { label: "Fleet Coordination", icon: "station" },
    { label: "Real-Time Diagnostics", icon: "chip" },
  ],
  fleetStats: [
    { label: "Online", value: "18" },
    { label: "Charging", value: "7" },
    { label: "Ready", value: "9" },
    { label: "Fault", value: "1" },
  ],
  fleetAvailability: "85%",
  workflowEyebrow: "Intelligent Charging Workflow",
  workflowTitle: "From battery status to fleet-level optimization.",
  workflow: [
    {
      label: "Battery Status",
      detail: "Monitor SOC, voltage, temperature, and battery condition.",
      icon: "power",
    },
    {
      label: "Charging Decision",
      detail: "Evaluate demand, priority, and station availability.",
      icon: "ai",
    },
    {
      label: "Power & Charge Profile",
      detail: "Select the optimal charging strategy for the mission.",
      icon: "coil",
    },
    {
      label: "Charging Execution",
      detail: "Deliver power safely under controlled limits.",
      icon: "bolt",
    },
    {
      label: "Monitoring & Diagnostics",
      detail: "Track performance and detect faults in real time.",
      icon: "chip",
    },
    {
      label: "Fleet Optimization",
      detail: "Optimize schedules, queues, and energy demand.",
      icon: "station",
    },
  ],
  modules: [
    {
      id: "charging-algorithms",
      number: "01",
      title: "Charging Algorithms",
      subtitle: "Optimized Charging for Every Battery and Mission",
      description:
        "Charging algorithms determine how power is delivered throughout the charging cycle. The system dynamically adjusts voltage, current, power, and charging duration according to battery condition, operating requirements, and available charging time.",
      detail:
        "Rather than applying one fixed charging profile, the platform supports adaptive strategies that balance charging speed, battery health, safety, and equipment availability.",
      visual: "algorithms",
      technologies: [
        "CC / CV / CP Charging",
        "Multi-Stage Charging",
        "Adaptive Charge Profiles",
        "Opportunity Charging",
      ],
    },
    {
      id: "battery-management",
      number: "02",
      title: "Battery Management",
      subtitle: "Battery-Aware Charging and Protection",
      description:
        "Battery management connects charging decisions with the real condition of the battery. The system monitors voltage, current, temperature, state of charge, and battery status to keep power delivery within safe operating limits.",
      detail:
        "By using battery feedback in real time, charging behavior can be adjusted to reduce stress, prevent overheating, and support longer battery life.",
      visual: "battery",
      technologies: [
        "SOC / SOH Monitoring",
        "Voltage & Current Monitoring",
        "Temperature Monitoring",
        "Battery Protection",
      ],
    },
    {
      id: "charging-scheduling",
      number: "03",
      title: "Charging Scheduling",
      subtitle: "Coordinated Charging Across Multiple Machines",
      description:
        "Charging scheduling coordinates charging demand across robots, vehicles, and charging stations based on battery level, task priority, station availability, and operational schedules.",
      detail:
        "This helps reduce charging congestion, avoid unnecessary downtime, and improve overall fleet utilization through queue management and priority-based scheduling.",
      visual: "fleet",
      technologies: [
        "Queue Management",
        "Station Assignment",
        "Priority-Based Scheduling",
        "Energy Balancing",
      ],
    },
    {
      id: "communication",
      number: "04",
      title: "Communication",
      subtitle: "Connected Charging Across the Entire System",
      description:
        "Reliable communication allows the charger, battery, robot, host controller, and fleet management system to exchange operating data and charging commands.",
      detail:
        "The communication layer enables identification, authorization, parameter configuration, status reporting, and coordinated control across devices and platforms.",
      visual: "communication",
      technologies: ["CAN", "UART", "RS-485", "Ethernet", "BLE", "Modbus", "OEM Interfaces"],
    },
    {
      id: "diagnostics",
      number: "05",
      title: "Diagnostics",
      subtitle: "Real-Time Visibility into Charging Performance",
      description:
        "Diagnostics continuously monitors charging behavior, system status, operating conditions, and fault events to help identify abnormalities and reduce service time.",
      detail:
        "Historical operating data also supports preventive maintenance, performance analysis, and future charging optimization.",
      visual: "diagnostics",
      technologies: [
        "Fault Detection",
        "Event Logging",
        "Remote Diagnostics",
        "Predictive Maintenance",
      ],
    },
  ],
  benefitsEyebrow: "Intelligent Charging Benefits",
  benefits: [
    {
      title: "Safer Charging",
      text: "Battery-aware control and continuous system protection.",
      icon: "shield",
    },
    {
      title: "Longer Battery Life",
      text: "Adaptive charging reduces unnecessary electrical and thermal stress.",
      icon: "power",
    },
    {
      title: "Higher Fleet Availability",
      text: "Machines receive energy according to mission priority and demand.",
      icon: "station",
    },
    {
      title: "Reduced Downtime",
      text: "Real-time diagnostics and coordinated scheduling keep equipment in service.",
      icon: "chip",
    },
    {
      title: "Lower Total Cost",
      text: "Better utilization and fewer disruptions reduce operating cost over time.",
      icon: "bolt",
    },
  ],
  ctaTitle: "Intelligent. Adaptive. Reliable.",
  ctaText:
    "Build a charging system that keeps autonomous machines productive — from battery-aware control to fleet-level coordination.",
  ctaLabel: "Contact Our Engineers",
} as const;
