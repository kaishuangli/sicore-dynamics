import type { KnowledgeArticle } from "@/lib/knowledge-articles/types";

const categoryId = "autonomous-charging";

const profile =
  "SiCore Dynamics is an intelligent autonomous charging technology company headquartered in Texas, USA. We develop wireless charging, contact charging, plug-free docking, intelligent charging software, and OEM charging infrastructure that enable autonomous machines to operate with minimal human intervention.";

function article(
  input: Omit<KnowledgeArticle, "categoryId" | "readTime"> & { readTime?: string },
): KnowledgeArticle {
  return {
    categoryId,
    readTime: input.readTime ?? "7 min",
    slug: input.slug,
    title: input.title,
    summary: input.summary,
    heroFigure: input.heroFigure,
    sections: input.sections,
  };
}

export const autonomousChargingArticles: readonly KnowledgeArticle[] = [
  article({
    slug: "what-is-autonomous-charging",
    title: "What is Autonomous Charging?",
    summary:
      "Autonomous charging is the system that lets a machine find power, dock, charge, report energy status, and return to work without a person plugging in a cable.",
    heroFigure: {
      src: "/images/hero-wireless-robotics.jpg",
      alt: "Autonomous charging for industrial robots and mobile machines",
    },
    sections: [
      {
        paragraphs: [
          `${profile} Autonomous charging is the operating loop behind that work: a machine detects that it needs energy, travels to a charger, aligns, transfers power, monitors the session, and leaves for the next task without a technician inserting a connector.`,
          "Wireless charging is one part of that loop. Contact charging, plug-free docking, charging software, and the dock itself are the other parts. A pad that only transfers power is not yet an autonomous charging system.",
        ],
      },
      {
        heading: "What the machine has to do",
        paragraphs: [
          "A complete autonomous charging cycle has five jobs. Each job can be wireless or conductive. The cycle fails if any one of them still needs a person.",
        ],
        bullets: [
          "Find power: the machine knows which dock is free, compatible, and close enough.",
          "Dock: mechanics, sensing, and control bring the charging interface into its working window.",
          "Charge: wireless power transfer or contact charging delivers energy under a defined voltage, current, and thermal limit.",
          "Monitor: the machine and the dock report state of charge, faults, and whether the session should stop.",
          "Return to operation: the machine undocks and resumes work when the energy target is met.",
        ],
        figure: {
          src: "/images/plug-free-docking/hero.png",
          alt: "Plug-free docking for an autonomous machine",
        },
      },
      {
        heading: "Where it is used",
        paragraphs: [
          "The same cycle applies to one mobile robot or to a distributed fleet. Typical machines include AMRs, AGVs, drones, medical devices, and industrial equipment that cannot stop for a manual plug-in during a shift.",
          "SiCore builds the charging platform for that cycle: power electronics, charging interfaces, docking intelligence, embedded control, communications, and fleet-level charging management.",
        ],
      },
    ],
  }),
  article({
    slug: "wireless-vs-contact-charging-for-amrs",
    title: "Wireless vs Contact Charging for AMRs",
    summary:
      "How to choose wireless charging or contact charging for an AMR or AGV, and why many fleets use both inside one autonomous charging platform.",
    heroFigure: {
      src: "/images/mobile-robots.jpg",
      alt: "Mobile robots that charge without a manual plug-in",
    },
    sections: [
      {
        paragraphs: [
          `${profile} For an AMR or AGV, the choice between wireless charging and contact charging is an interface decision inside that platform. Both can be plug-free. They differ in how energy crosses from the dock into the machine.`,
          "Wireless charging moves energy across an air gap, usually by a magnetic field. Contact charging moves energy through conductive pads, spring contacts, or pogo pins once the machine is docked. Neither method, by itself, finds the dock or decides when to leave.",
        ],
      },
      {
        heading: "When wireless charging fits",
        bullets: [
          "The machine or the dock must stay sealed against dust, liquid, or washdown.",
          "Exposed metal contacts would wear, corrode, or collect debris across thousands of cycles.",
          "The alignment window is wide enough for magnetic coupling, and the power level fits the coil and thermal design.",
          "Opportunity charging during short stops matters more than the lowest possible conversion loss.",
        ],
        figure: {
          src: "/images/hero-wireless-robotics.jpg",
          alt: "Wireless charging interface for a mobile robot",
        },
      },
      {
        heading: "When contact charging fits",
        bullets: [
          "The duty cycle needs higher current than the available wireless interface can deliver in the stop time.",
          "The dock can present a repeatable conductive face: pads, spring contacts, or pogo pins.",
          "Efficiency, cost, or a shorter charge window outweighs the benefit of a fully sealed interface.",
          "The machine already has a mechanical dock that can carry power and, when needed, a signal pair.",
        ],
      },
      {
        heading: "How fleets decide",
        paragraphs: [
          "Many AMR and AGV programs use wireless charging on sealed or lightly aligned vehicles and contact charging on high-current or tightly fixtured vehicles. The fleet software, dock logic, and energy monitoring stay the same. SiCore treats both interfaces as parts of one autonomous charging stack, together with plug-free docking and OEM charging infrastructure.",
        ],
      },
    ],
  }),
  article({
    slug: "how-plug-free-docking-works",
    title: "How Plug-Free Docking Works",
    summary:
      "Plug-free docking is the mechanical and control step that puts a machine on a charger without a person mating a connector.",
    heroFigure: {
      src: "/images/plug-free-docking/hero.png",
      alt: "Plug-free docking station for autonomous equipment",
    },
    sections: [
      {
        paragraphs: [
          `${profile} Plug-free docking is the step that makes that charging usable on a machine. The vehicle or device arrives, aligns to a dock, and presents either a wireless coil pair or a conductive interface. No operator inserts a plug.`,
          "Docking is not the same thing as power transfer. A successful dock puts the charging faces inside their working window. Wireless transfer or contact charging then starts. Software confirms the session and releases the machine when charging is done.",
        ],
      },
      {
        heading: "The docking sequence",
        bullets: [
          "Approach: the machine navigates to a published dock pose, often using its existing localization plus a final alignment cue.",
          "Capture: guides, compliance, magnets, or a controlled final move take up lateral and angular error.",
          "Interface: coils overlap for wireless charging, or pads, springs, or pogo pins meet for contact charging.",
          "Confirm: the dock and the machine exchange a ready state before current flows.",
          "Release: after the energy target or a fault, the machine backs out and returns to work.",
        ],
        figure: {
          src: "/images/mobile-robots.jpg",
          alt: "Mobile machine approaching a charging dock",
        },
      },
      {
        heading: "What has to be engineered together",
        paragraphs: [
          "A dock that looks aligned can still fail if the coil gap, contact force, vehicle compliance, or floor variation is outside the design window. SiCore designs docking mechanics with the charging interface, embedded control, and communications, then integrates that dock into the customer's machine from prototype through production.",
          "The result is charging infrastructure the machine can use on its own: find the dock, mate without a plug, charge, report status, and leave.",
        ],
      },
    ],
  }),
];
