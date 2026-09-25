import type { IndustryId } from "@/lib/industries";

export type SolutionFaqItem = {
  question: string;
  answer: string;
};

export const solutionFaqs: Record<IndustryId, readonly SolutionFaqItem[]> = {
  "automation-robotics": [
    {
      question: "Why is wireless charging preferred over contact-based charging for industrial robots?",
      answer:
        "Wireless charging eliminates connector wear from vibration, dust, and repeated docking cycles while enabling sealed robot enclosures and autonomous stop-and-charge workflows.",
    },
    {
      question: "What power levels does SiCore offer for robotic applications?",
      answer:
        "SiCore wireless power platforms span 60W to 3000W, supporting cobots, robotic arms, and automated production equipment at line stations.",
    },
    {
      question: "Can wireless chargers integrate into existing robotic work cells?",
      answer:
        "Yes. Transmitter pads and receiver modules are designed for floor-mount or station integration with tolerance for normal parking alignment variation.",
    },
    {
      question: "How does opportunity charging improve robotic uptime?",
      answer:
        "Robots receive short charge bursts between cycles at designated stations, reducing idle time and eliminating manual plug-in steps.",
    },
    {
      question: "Are SiCore systems suitable for harsh factory environments?",
      answer:
        "IP-rated sealed designs protect electronics from dust, moisture, and vibration common in industrial automation environments.",
    },
    {
      question: "Does SiCore support customized wireless charging for OEM robot platforms?",
      answer:
        "Yes. SiCore engineering provides coil design, PCB development, thermal optimization, and production support for robot OEM programs.",
    },
  ],
  "unmanned-aerial-vehicles": [
    {
      question: "How does wireless charging benefit AGV and AMR fleet operations?",
      answer:
        "Contactless charging removes pin wear and alignment failures, enabling opportunity charging along routes and higher fleet utilization.",
    },
    {
      question: "What is opportunity charging for mobile robots?",
      answer:
        "Vehicles receive power during short idle periods at route endpoints or queue lanes without manual connector handling or precision mechanical docking.",
    },
    {
      question: "Can multiple AMRs share the same charging infrastructure?",
      answer:
        "Yes. Standardized transmitter pads support fleet-wide charging zones configured through facility layout and fleet management software.",
    },
    {
      question: "What power range supports warehouse and factory AMR deployments?",
      answer:
        "SiCore products from 200W mobile platforms to 3000W fleet infrastructure cover light AMRs through heavy-load logistics vehicles.",
    },
    {
      question: "How is alignment tolerance handled for autonomous docking?",
      answer:
        "Magnetic coupling tolerates positional variation far beyond mechanical pin engagement, reducing failed docking events.",
    },
    {
      question: "Can SiCore wireless charging scale across large distribution centers?",
      answer:
        "Yes. SiCore supports multi-shift, high-throughput logistics with reliable charging stations distributed along operational corridors.",
    },
  ],
  "medical-equipment": [
    {
      question: "Why is wireless charging important for medical device hygiene?",
      answer:
        "Eliminating exposed charging ports reduces contamination risk and supports wipe-down and sterilization protocols for clinical equipment.",
    },
    {
      question: "Which medical devices can use SiCore wireless charging?",
      answer:
        "Portable monitors, medical carts, surgical tools, and diagnostic devices benefit from sealed, contactless charging interfaces.",
    },
    {
      question: "Are SiCore medical charging modules water-resistant?",
      answer:
        "Receiver and transmitter designs support sealed enclosures appropriate for clinical environments requiring regular cleaning.",
    },
    {
      question: "What power levels suit portable medical equipment?",
      answer:
        "Compact 60W and 200W SiCore modules are optimized for portable devices and mobile clinical workstations.",
    },
    {
      question: "How does contactless charging simplify clinical workflows?",
      answer:
        "Staff place devices on charging pads without cable handling, keeping focus on patient care rather than power management.",
    },
    {
      question: "Does SiCore support OEM integration for medical device manufacturers?",
      answer:
        "Yes. SiCore provides receiver module integration, safety monitoring, and engineering support for medical OEM programs.",
    },
  ],
  "agricultural-automation": [
    {
      question: "Why do agricultural robots need wireless charging?",
      answer:
        "Farm robots work in dust, mud, rain, and chemical spray environments where exposed connectors corrode quickly and interrupt autonomous operations.",
    },
    {
      question: "Can wireless charging work outdoors in the field?",
      answer:
        "Yes. Sealed inductive docks deliver power through rugged housings, supporting outdoor opportunity charging at field stations and greenhouse routes.",
    },
    {
      question: "What agricultural applications use SiCore charging?",
      answer:
        "Autonomous field robots, spraying fleets, greenhouse mobility platforms, and harvest transport systems.",
    },
    {
      question: "What power classes fit agricultural robotics?",
      answer:
        "200W to 1500W platforms support light scouting robots through higher-duty spraying and transport platforms.",
    },
    {
      question: "How does wireless charging improve farm fleet uptime?",
      answer:
        "Robots recharge automatically between missions without operators plugging cables, reducing downtime during critical planting and harvest windows.",
    },
    {
      question: "Can SiCore integrate with OEM agricultural platforms?",
      answer:
        "Yes. SiCore engineers coil placement, outdoor sealing, and power electronics for agricultural robot OEMs and fleet operators.",
    },
  ],
  "smart-furniture": [
    {
      question: "How is wireless charging embedded into furniture surfaces?",
      answer:
        "Transmitter coils mount beneath tabletops or armrests, delivering power through wood, stone, or laminate within designed thickness limits.",
    },
    {
      question: "Which environments use smart furniture wireless charging?",
      answer:
        "Hotels, offices, restaurants, airports, and public lounges integrate hidden charging without visible ports or cables.",
    },
    {
      question: "Are SiCore furniture modules compatible with standard phones?",
      answer:
        "Yes. Qi-compatible transmitter modules support common mobile devices placed on designated charging zones.",
    },
    {
      question: "Does embedded charging affect furniture aesthetics?",
      answer:
        "Wireless modules remain concealed below the surface, preserving clean design lines without mechanical port wear.",
    },
    {
      question: "What power level is typical for furniture integration?",
      answer:
        "60W embedded modules provide reliable charging for hospitality and workplace furniture applications.",
    },
    {
      question: "Can furniture manufacturers get OEM integration support?",
      answer:
        "SiCore supports coil placement, thermal design, and production integration for furniture OEM programs.",
    },
  ],
  "consumer-electronics": [
    {
      question: "Why do OEMs integrate wireless charging into consumer products?",
      answer:
        "Contactless charging improves user convenience, enables sealed enclosures, and reinforces premium product positioning.",
    },
    {
      question: "Are SiCore modules Qi-compatible?",
      answer:
        "Yes. SiCore 60W and 200W platforms support Qi-compatible phones, earbuds, wearables, and handheld accessories.",
    },
    {
      question: "Can receiver modules fit compact product enclosures?",
      answer:
        "Low-profile receiver PCBs and coils are designed for tight mechanical stack-ups in small consumer devices.",
    },
    {
      question: "What should OEM teams consider when designing wireless charging?",
      answer:
        "Coil alignment tolerance, thermal rise, EMC compliance, and charge time targets must be engineered together with the product housing.",
    },
    {
      question: "Does SiCore support consumer product certification requirements?",
      answer:
        "SiCore engineering addresses safety monitoring, efficiency, and EMC considerations required for consumer product launches.",
    },
    {
      question: "Can SiCore provide both transmitter and receiver modules?",
      answer:
        "Yes. SiCore supplies matched TX/RX platforms for docks, cases, furniture surfaces, and embedded product charging.",
    },
  ],
  "smart-test-equipments": [
    {
      question: "What is Smart Test Equipments from SiCore?",
      answer:
        "A modular intelligent docking platform that powers, charges, and connects battery-powered test instruments — so labs reduce cable clutter and keep instruments ready for the next task.",
    },
    {
      question: "Which instruments can share the docking platform?",
      answer:
        "Battery-powered modules such as oscilloscopes, power supplies, DMMs, spectrum analyzers, and DAQ modules can share a unified docking station with automatic recognition.",
    },
    {
      question: "How does automatic charging improve lab productivity?",
      answer:
        "Engineers take an instrument, use it independently, then return it to the dock. Charging and status sync happen automatically, reducing downtime and cable handling.",
    },
    {
      question: "Can the platform scale as our instrument fleet grows?",
      answer:
        "Yes. The docking architecture is modular and scalable, so additional instrument types and dock capacity can be added as lab or production needs expand.",
    },
    {
      question: "Does SiCore support OEM integration for test equipment makers?",
      answer:
        "Yes. SiCore partners with instrument OEMs to embed receivers, design shared docks, and integrate battery and status communication into host systems.",
    },
    {
      question: "Where is Smart Test Equipments typically deployed?",
      answer:
        "R&D laboratories, production test lines, field service teams, and education or training labs that need portable instruments with shared charging infrastructure.",
    },
  ],
  "customized-solutions": [
    {
      question: "When should a project use customized wireless charging instead of off-the-shelf products?",
      answer:
        "Custom engineering is warranted when power level, coupling distance, environmental rating, or mechanical constraints exceed standard product specifications.",
    },
    {
      question: "What services are included in SiCore customized programs?",
      answer:
        "Coil design, PCB development, power optimization, foreign object detection, thermal management, EMC optimization, prototyping, and mass production support.",
    },
    {
      question: "What power range can custom SiCore systems deliver?",
      answer:
        "Custom platforms span 60W to 3000W depending on application load, gap distance, and thermal requirements.",
    },
    {
      question: "How does SiCore validate custom wireless charging designs?",
      answer:
        "Bench testing covers efficiency, thermal performance, foreign object response, and EMI behavior before production tooling.",
    },
    {
      question: "Can SiCore support transition from prototype to volume manufacturing?",
      answer:
        "Yes. Engineering teams assist from pilot builds through scaled manufacturing with ongoing production support.",
    },
    {
      question: "What industries commonly require customized wireless power?",
      answer:
        "Specialized industrial equipment, autonomous vehicles, medical OEM platforms, drones, and non-standard automation integrations.",
    },
  ],
};

export function getSolutionFaqs(id: IndustryId): readonly SolutionFaqItem[] {
  return solutionFaqs[id];
}
