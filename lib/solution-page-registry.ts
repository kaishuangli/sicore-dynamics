import type { ComponentType } from "react";
import type { IndustryId } from "@/lib/industries";
import type { WhyWirelessRow } from "@/lib/solution-why-wireless";
import type { Locale } from "@/lib/i18n/config";
import type { LocalizedIndustry } from "@/lib/i18n/content";
import AgriSolutionBody from "@/sections/solutions/agri/AgriSolutionBody";
import AgvSolutionBody from "@/sections/solutions/agv/AgvSolutionBody";
import ClassicSolutionBody from "@/sections/solutions/ClassicSolutionBody";
import ConsumerSolutionBody from "@/sections/solutions/consumer/ConsumerSolutionBody";
import CustomSolutionBody from "@/sections/solutions/custom/CustomSolutionBody";
import MedicalSolutionBody from "@/sections/solutions/medical/MedicalSolutionBody";
import FurnitureSolutionBody from "@/sections/solutions/furniture/FurnitureSolutionBody";
import SmartTestSolutionBody from "@/sections/solutions/smart-test/SmartTestSolutionBody";

export type SolutionBodyProps = { industry: LocalizedIndustry; locale: Locale };

const solutionBodies: Record<IndustryId, ComponentType<SolutionBodyProps>> = {
  "automation-robotics": ClassicSolutionBody,
  "unmanned-aerial-vehicles": AgvSolutionBody,
  "medical-equipment": MedicalSolutionBody,
  "agricultural-automation": AgriSolutionBody,
  "smart-furniture": FurnitureSolutionBody,
  "smart-test-equipments": SmartTestSolutionBody,
  "consumer-electronics": ConsumerSolutionBody,
  "customized-solutions": CustomSolutionBody,
};

export function getSolutionBody(id: IndustryId) {
  return solutionBodies[id];
}

export function getPrincipleSteps(row: WhyWirelessRow) {
  return row.visual.type === "principle" ? row.visual.steps : [];
}

export function getWhyImage(row: WhyWirelessRow) {
  return row.visual.type === "image" ? row.visual : null;
}
