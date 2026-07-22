import type { Locale } from "@/lib/i18n/config";
import { getWirelessEnergyPlatformPage } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";

export type WirelessEnergyTopic = {
  id: string;
  number: string;
  title: string;
  description: string;
  sectionId: string;
  sectionTitle: string;
  href: string;
  image?: string;
  imageAlt?: string;
  technologiesLabel?: string;
  technologies?: readonly string[];
  benefitsLabel?: string;
  benefits?: readonly string[];
};

const BASE = "/technology/wireless-energy-platform";

function topicHref(id: string) {
  return `${BASE}/${id}`;
}

function buildTopics(locale: Locale): WirelessEnergyTopic[] {
  const page = getWirelessEnergyPlatformPage(locale);
  const typicalApplicationsLabel =
    locale === "zh" ? "典型应用" : locale === "es" ? "Aplicaciones típicas" : "Typical Applications";
  const keyResearchAreasLabel =
    locale === "zh" ? "关键研究方向" : locale === "es" ? "Áreas clave de investigación" : "Key Research Areas";
  const capabilitiesLabel =
    locale === "zh" ? "核心能力" : locale === "es" ? "Capacidades" : "Capabilities";
  const coreTechnologiesLabel =
    locale === "zh" ? "核心技术" : locale === "es" ? "Tecnologías principales" : "Core Technologies";
  const systemLayerLabel =
    locale === "zh" ? "系统层" : locale === "es" ? "Capa del sistema" : "System Layer";

  return [
    ...page.physicsLayer.mechanisms.map((mechanism) => ({
      id: mechanism.id,
      number: mechanism.number,
      title: mechanism.title,
      description: mechanism.description,
      sectionId: "physics",
      sectionTitle: page.physicsLayer.eyebrow,
      href: topicHref(mechanism.id),
      image: mechanism.image,
      imageAlt: mechanism.title,
      technologiesLabel: typicalApplicationsLabel,
      technologies: mechanism.applications.map((app) => app.label),
      benefitsLabel: keyResearchAreasLabel,
      benefits: mechanism.research,
    })),
    ...page.magneticLayer.pillars.map((pillar) => ({
      id: pillar.id,
      number: pillar.number,
      title: pillar.title,
      description: pillar.description,
      sectionId: "magnetic",
      sectionTitle: page.magneticLayer.eyebrow,
      href: topicHref(pillar.id),
      image: pillar.image,
      imageAlt: pillar.title,
      benefitsLabel: capabilitiesLabel,
      benefits: pillar.points,
    })),
    ...page.powerLayer.modules.map((module) => ({
      id: module.id,
      number: module.number,
      title: module.title,
      description: module.detail,
      sectionId: "power",
      sectionTitle: page.powerLayer.eyebrow,
      href: topicHref(module.id),
      image: module.image,
      imageAlt: module.title,
      technologiesLabel: coreTechnologiesLabel,
      technologies: module.checks,
    })),
    ...page.controlLayer.features.map((feature) => ({
      id: feature.id,
      number: feature.number,
      title: feature.title,
      description: feature.description,
      sectionId: "control",
      sectionTitle: page.controlLayer.eyebrow,
      href: topicHref(feature.id),
      benefitsLabel: capabilitiesLabel,
      benefits: feature.points,
    })),
    ...page.layers
      .find((layer) => layer.id === "system")!
      .items.map((item, index) => ({
        id: item.id,
        number: String(index + 1).padStart(2, "0"),
        title: item.title,
        description: item.text,
        sectionId: "system",
        sectionTitle: systemLayerLabel,
        href: topicHref(item.id),
      })),
  ];
}

export function getWirelessEnergyTopics(locale: Locale): WirelessEnergyTopic[] {
  return buildTopics(locale);
}

/** @deprecated Prefer `getWirelessEnergyTopics(locale)`. Kept for English-only call sites. */
export const wirelessEnergyPlatformTopics: WirelessEnergyTopic[] = buildTopics("en");

export function getWirelessEnergyTopic(id: string, locale: Locale = "en") {
  return buildTopics(locale).find((topic) => topic.id === id);
}

export function getWirelessEnergyTopicHref(id: string, locale: Locale = "en") {
  return withLocale(topicHref(id), locale);
}
