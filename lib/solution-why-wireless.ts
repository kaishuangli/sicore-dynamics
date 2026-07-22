import type { IndustryId } from "@/lib/industries";

export type WhyWirelessRow = {
  title: string;
  paragraphs: readonly string[];
  visual:
    | { type: "image"; src: string; alt: string }
    | {
        type: "principle";
        steps: readonly { label: string; detail: string }[];
      };
};

export type WhyWirelessAnalysis = {
  rows: readonly [WhyWirelessRow, WhyWirelessRow];
};

export const solutionWhyWireless: Record<IndustryId, WhyWirelessAnalysis> = {
  "automation-robotics": {
    rows: [
      {
        title: "Why Industrial Robots Need Plug-Free Charging",
        paragraphs: [
          "Industrial robots run long production cycles in environments filled with metal dust, coolant mist, vibration, and repeated docking cycles. Traditional plug-in charging connectors are vulnerable to wear, corrosion, contamination, and alignment errors, all of which can interrupt autonomous operation.",
          "Plug-free charging technologies—including wireless charging—eliminate physical plug connections and provide a more reliable way to deliver power in demanding industrial environments. By reducing mechanical wear and simplifying autonomous charging, these solutions help improve system reliability while minimizing maintenance.",
          "For factories targeting 24/7 throughput, the charging method is not a secondary feature—it directly impacts uptime, maintenance costs, and the ability to operate fully autonomous robotic systems.",
        ],
        visual: {
          type: "image",
          src: "/images/industrial-automation.jpg",
          alt: "Industrial automation environment illustrating charging reliability challenges",
        },
      },
      {
        title: "Plug-Free Charging Solutions for Robotic Systems",
        paragraphs: [
          "Industrial robots operate in environments where dust, vibration, moisture, and frequent docking can quickly wear out conventional charging connectors. Different robotic applications require different charging approaches, which is why we offer a complete portfolio of plug-free charging solutions designed for reliable autonomous operation.",
          "Whether your robot requires maximum flexibility, high-power charging, or continuous power delivery, our solutions eliminate manual plug-in connections and reduce maintenance while improving system uptime.",
        ],
        visual: {
          type: "principle",
          steps: [
            {
              label: "Wireless Charging",
              detail:
                "Power is transferred across an air gap through resonant inductive technology, eliminating exposed electrical contacts. Ideal for mobile robots, AGVs, AMRs, and robotic systems that require sealed enclosures and autonomous docking.",
            },
            {
              label: "Contact Charging",
              detail:
                "Spring-loaded or self-aligning charging interfaces provide reliable high-current power transfer while eliminating manual cable plugging. Designed for applications where high efficiency and fast charging are priorities.",
            },
            {
              label: "Automatic Docking Charging",
              detail:
                "Integrated charging stations combine mechanical positioning with automated power transfer, enabling robots to recharge without operator intervention during scheduled production cycles.",
            },
            {
              label: "Customized Charging Integration",
              detail:
                "We work with robot manufacturers and system integrators to develop charging solutions tailored to specific voltages, battery systems, installation constraints, and operating environments.",
            },
            {
              label: "Intelligent Charging Management",
              detail:
                "Our charging systems support communication, battery management integration, safety monitoring, and charging optimization to maximize battery life and system availability.",
            },
          ],
        },
      },
    ],
  },
  "unmanned-aerial-vehicles": {
    rows: [
      {
        title: "Why Autonomous Drone Fleets Depend on Contactless Charging",
        paragraphs: [
          "Autonomous drone fleets are measured by mission availability—the percentage of time aircraft spend performing missions rather than waiting for charging, battery replacement, or maintenance. Conventional contact-based charging systems rely on exposed electrical contacts that require precise landing alignment and regular cleaning, especially in outdoor environments.",
          "Every landing introduces potential failure points: contaminated contacts, corrosion from rain or humidity, dust accumulation, and mechanical wear that can interrupt charging or delay the next flight. Across large drone fleets, these issues reduce operational efficiency and increase maintenance costs.",
        ],
        visual: {
          type: "image",
          src: "/images/uav-industrial-charging-dock.jpg",
          alt: "Industrial inspection drone on a SiCore wireless charging pad",
        },
      },
      {
        title: "The Charging Principle Behind Autonomous Drone Operations",
        paragraphs: [
          "Autonomous drones return to a designated charging pad after completing each mission or when battery capacity reaches a predefined threshold. Precision landing technology guides the aircraft onto an ultra-low-profile wireless charging pad, eliminating exposed electrical contacts and manual charging procedures.",
          "Charging performance, battery condition, and power transfer are continuously monitored to maximize efficiency and operational safety. Once charging is complete, the drone automatically launches its next mission without operator intervention.",
          "At scale, wireless charging enables fully autonomous drone fleets by replacing manual battery handling and connector maintenance with intelligent, software-managed energy infrastructure—unlocking continuous operations for parcel delivery, infrastructure inspection, emergency response, and security patrol.",
        ],
        visual: {
          type: "image",
          src: "/images/uav-principle-dock.jpg",
          alt: "Industrial inspection drone landed on a wireless charging pad",
        },
      },
    ],
  },
  "medical-equipment": {
    rows: [
      {
        title: "Why medical devices benefit from eliminating charging contacts",
        paragraphs: [
          "Medical environments prioritize infection control and equipment hygiene. Exposed charging ports collect fluids, cleaning agents, and biological residue. They are difficult to disinfect thoroughly and degrade with repeated sterilization cycles.",
          "Portable monitors, carts, and handheld instruments move between patient areas throughout a shift. Staff should not need to locate cables or verify connector orientation during clinical workflows.",
          "Wireless charging allows fully enclosed device housings rated for wipe-down and sterilization protocols. The power interface is no longer an external opening in the device shell.",
        ],
        visual: {
          type: "image",
          src: "/images/app-200w-medical.png",
          alt: "Medical cart charging wirelessly on a floor pad in an operating room",
        },
      },
      {
        title: "How contactless charging supports clinical reliability",
        paragraphs: [
          "A medical device rests on a charging pad or dock containing a transmitter coil. The receiver coil inside the device captures energy through its housing material, so clinicians never interact with an electrical connector.",
          "Charging electronics monitor voltage, temperature, and foreign object conditions before and during transfer. This protects both the device battery and surrounding clinical equipment from abnormal power events.",
          "The underlying principle is the same as industrial wireless power — magnetic field coupling — but the design priority shifts to low noise, consistent trickle or fast charge profiles, and enclosure sealing rather than high kilowatt throughput.",
        ],
        visual: {
          type: "principle",
          steps: [
            { label: "Clinical Dock", detail: "Transmitter pad at bedside or nursing station" },
            { label: "Sealed Receiver", detail: "Coil embedded inside the device enclosure" },
            { label: "Safe Transfer", detail: "Monitored inductive power with thermal protection" },
            { label: "Ready for Use", detail: "Fully charged device returns to patient care" },
          ],
        },
      },
    ],
  },
  "agricultural-automation": {
    rows: [
      {
        title: "Why agricultural robotics depends on sealed wireless charging",
        paragraphs: [
          "Farm robots operate for long outdoor shifts in dust, mud, humidity, and chemical spray. Exposed charging connectors fail quickly under these conditions and force manual intervention that breaks autonomous workflows.",
          "During planting and harvest windows, every minute of downtime matters. Operators cannot afford to stop fleets for cable docking, contact cleaning, or connector replacement in the field.",
          "Wireless charging lets agricultural robots land or park on rugged pads, recharge automatically, and return to weeding, spraying, inspection, or transport missions without operator plug-in steps.",
        ],
        visual: {
          type: "image",
          src: "/images/mobile-robots.jpg",
          alt: "Agricultural robot platform prepared for wireless opportunity charging",
        },
      },
      {
        title: "How opportunity charging keeps farm fleets productive",
        paragraphs: [
          "Transmitter pads install at field stations, greenhouse corridors, or collection points. When a robot arrives, magnetic coupling transfers power through sealed housings without exposing contacts to the environment.",
          "Power class is matched to the platform — compact scouting robots through higher-duty spraying and harvest transport systems — so charge windows fit natural mission cycles.",
          "The result is continuous agricultural autonomy: robots manage energy the same way they manage navigation, as part of the fleet workflow rather than a maintenance event.",
        ],
        visual: {
          type: "principle",
          steps: [
            { label: "Mission Complete", detail: "Robot finishes a field or greenhouse task cycle" },
            { label: "Dock Approach", detail: "Platform navigates to a rugged outdoor charge pad" },
            { label: "Wireless Charge", detail: "Energy transfers through sealed housings" },
            { label: "Redeploy", detail: "Robot returns to the next agricultural mission" },
          ],
        },
      },
    ],
  },
  "smart-furniture": {
    rows: [
      {
        title: "Why embedded wireless charging fits modern furniture design",
        paragraphs: [
          "Hotels, offices, and public spaces expect power access without visible cables, adapters, or worn USB ports in surfaces that guests and employees touch thousands of times per year.",
          "Mechanical charging ports in tabletops break aesthetic lines, collect debris, and fail from mechanical abuse. Furniture manufacturers need a power solution that disappears into the product.",
          "Wireless modules mount beneath the surface, leaving only a subtle marking or no visible interface at all. The furniture remains a design object while still delivering functional power.",
        ],
        visual: {
          type: "image",
          src: "/images/smart-furniture-conference-v2.png",
          alt: "Conference table with embedded wireless charging coils",
        },
      },
      {
        title: "How power is delivered through furniture surfaces",
        paragraphs: [
          "A transmitter coil is embedded below the tabletop or armrest. When a phone or device with a compatible receiver enters the charging zone, energy couples through the surface material within designed thickness limits.",
          "Furniture integrators specify coil size and power level based on surface material and target device. SiCore modules balance efficiency and thermal performance so laminates and finishes are not exposed to excessive heat.",
          "The principle transforms furniture from passive seating into powered infrastructure — without changing the visual language of the space.",
        ],
        visual: {
          type: "principle",
          steps: [
            { label: "Embedded Coil", detail: "Transmitter concealed under the work surface" },
            { label: "Surface Gap", detail: "Magnetic field couples through wood or stone" },
            { label: "Device Receiver", detail: "Phone or module captures wireless energy" },
            { label: "Invisible UX", detail: "Users charge by simply placing devices down" },
          ],
        },
      },
    ],
  },
  "consumer-electronics": {
    rows: [
      {
        title: "Why product teams adopt wireless charging in devices",
        paragraphs: [
          "Consumer products compete on convenience and perceived quality. A worn USB port or misaligned pogo pin immediately signals a cheap hardware experience, while smooth contactless charging reinforces premium positioning.",
          "Wearables, earbuds cases, and handheld tools are too small for robust mechanical charging interfaces. OEM teams need compact receiver modules that fit tight enclosures without sacrificing water resistance.",
          "Wireless charging also simplifies the user ritual: place the product down, pick it up ready to use. That behavioral simplicity is difficult to replicate with cables in compact form factors.",
        ],
        visual: {
          type: "image",
          src: "/images/product-rx.png",
          alt: "Wireless receiver module for consumer electronics integration",
        },
      },
      {
        title: "Integrating inductive charging into OEM products",
        paragraphs: [
          "A transmitter pad or dock pairs with a receiver coil inside the product. System designers select coil geometry and power class based on battery size, charge time target, and allowable temperature rise in the housing.",
          "Communication between transmitter and receiver negotiates power level and monitors safety conditions — the same control principles used in industrial systems, scaled for consumer thermal limits and regulatory requirements.",
          "For OEM programs, wireless charging is an integration discipline: mechanical stack-up, EMC, efficiency, and user alignment tolerance must be engineered together rather than treated as an off-the-shelf cable replacement.",
        ],
        visual: {
          type: "principle",
          steps: [
            { label: "Charge Pad", detail: "Transmitter in dock, case, or furniture surface" },
            { label: "Receiver Coil", detail: "Embedded in phone, case, or wearable" },
            { label: "Power Negotiation", detail: "Safe, efficient transfer at the right level" },
            { label: "User Ready", detail: "Product charged without cable handling" },
          ],
        },
      },
    ],
  },
  "customized-solutions": {
    rows: [
      {
        title: "Why custom applications require engineered wireless power",
        paragraphs: [
          "Off-the-shelf charging cables and standard Qi pads rarely match industrial voltage levels, coil distances, alignment freedom, or environmental ratings that specialized equipment demands.",
          "A drone landing pad, underwater tool, heavy machinery sensor, or vehicle platform may need kilowatts across a non-standard gap with foreign object constraints unique to that machine.",
          "Custom wireless charging is justified when the cost of connector failure, manual charging labor, or product redesign exceeds the engineering investment in a purpose-built inductive system.",
        ],
        visual: {
          type: "image",
          src: "/images/product-coils.png",
          alt: "Custom wireless charging coil engineering for specialized applications",
        },
      },
      {
        title: "The engineering principle behind tailored wireless systems",
        paragraphs: [
          "Every custom program begins with the power budget, coupling distance, and mechanical constraints of the host product. Coil winding, ferrite shaping, switching topology, and thermal path are co-designed — not selected from a generic catalog.",
          "Simulation and bench testing validate efficiency, EMI behavior, and foreign object response before tooling investment. Firmware controls charge profiles specific to the customer's battery chemistry and usage cycle.",
          "The result is a wireless charging subsystem that behaves like a native part of the product rather than an accessory — because the magnetic, electrical, and mechanical interfaces were engineered as one system.",
        ],
        visual: {
          type: "principle",
          steps: [
            { label: "Requirements", detail: "Power, gap, environment, and safety targets defined" },
            { label: "Coil & PCB Design", detail: "Custom magnetics and electronics co-developed" },
            { label: "Validation", detail: "Efficiency, thermal, FOD, and EMC testing" },
            { label: "Production", detail: "Scaled manufacturing with SiCore engineering support" },
          ],
        },
      },
    ],
  },
};

export function getSolutionWhyWireless(id: IndustryId): WhyWirelessAnalysis {
  return solutionWhyWireless[id];
}
