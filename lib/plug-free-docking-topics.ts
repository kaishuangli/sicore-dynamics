import type { Locale } from "@/lib/i18n/config";
import { getPlugFreeDockingPage } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";

export type PlugFreeTopicImage = {
  src: string;
  alt: string;
};

export type PlugFreeTopicPoint = {
  label: string;
  detail: string;
};

export type PlugFreeTopic = {
  id: string;
  number: string;
  title: string;
  description: string;
  descriptionSecondary?: string;
  sectionId: string;
  sectionTitle: string;
  href: string;
  image?: string;
  imageAlt?: string;
  gallery?: readonly PlugFreeTopicImage[];
  technologiesLabel?: string;
  technologies?: readonly string[];
  benefitsLabel?: string;
  benefits?: readonly string[];
  structuresLabel?: string;
  structures?: readonly string[];
  pointsLabel?: string;
  points?: readonly PlugFreeTopicPoint[];
  cases?: readonly {
    label: string;
    detail?: string;
    status?: string;
    image?: string;
  }[];
};

const BASE = "/technology/plug-free-docking";

function topicHref(id: string) {
  return `${BASE}/${id}`;
}

function fromMethod(
  method: {
    id: string;
    number: string;
    title: string;
    description: string;
    descriptionSecondary?: string;
    image?: string;
    imageAlt?: string;
    gallery?: readonly PlugFreeTopicImage[];
    technologiesLabel?: string;
    technologies?: readonly string[];
    benefitsLabel?: string;
    benefits?: readonly string[];
    advantagesLabel?: string;
    advantages?: readonly string[];
    applicationsLabel?: string;
    applications?: readonly string[];
    structuresLabel?: string;
    structures?: readonly (string | { label: string })[];
  },
  sectionId: string,
  sectionTitle: string,
  labels: { keyBenefits: string; commonStructures: string },
): PlugFreeTopic {
  const structures = method.structures?.map((item) =>
    typeof item === "string" ? item : item.label,
  );

  const technologies =
    method.technologies ??
    (method.applications
      ? method.applications
      : undefined);

  const technologiesLabel =
    method.technologiesLabel ??
    (method.applicationsLabel ? method.applicationsLabel : undefined);

  const benefits = method.benefits ?? method.advantages;
  const benefitsLabel =
    method.benefitsLabel ?? method.advantagesLabel ?? (benefits ? labels.keyBenefits : undefined);

  return {
    id: method.id,
    number: method.number,
    title: method.title,
    description: method.description,
    descriptionSecondary: method.descriptionSecondary,
    sectionId,
    sectionTitle,
    href: topicHref(method.id),
    image: method.image,
    imageAlt: method.imageAlt,
    gallery: method.gallery,
    technologiesLabel,
    technologies,
    benefitsLabel,
    benefits,
    structuresLabel: method.structuresLabel ?? (structures ? labels.commonStructures : undefined),
    structures,
  };
}

function buildTopics(locale: Locale): PlugFreeTopic[] {
  const page = getPlugFreeDockingPage(locale);
  const wd = page.wirelessDock;
  const labels = {
    keyBenefits: locale === "zh" ? "关键优势" : locale === "es" ? "Ventajas clave" : "Key Benefits",
    commonStructures:
      locale === "zh" ? "常见结构" : locale === "es" ? "Estructuras comunes" : "Common Structures",
  };
  const dockLayersLabel =
    locale === "zh" ? "对接层" : locale === "es" ? "Capas de acoplamiento" : "Dock Layers";
  const alignmentSpecsLabel =
    locale === "zh" ? "对准规格" : locale === "es" ? "Especificaciones de alineación" : "Alignment Specs";
  const surfaceFeaturesLabel =
    locale === "zh" ? "表面特性" : locale === "es" ? "Características de superficie" : "Surface Features";
  const protectionFeaturesLabel =
    locale === "zh" ? "防护特性" : locale === "es" ? "Características de protección" : "Protection Features";
  const protectionsLabel =
    locale === "zh" ? "防护措施" : locale === "es" ? "Protecciones" : "Protections";

  return [
    ...page.dockMechanics.methods.map((method) =>
      fromMethod(method, page.dockMechanics.id, page.dockMechanics.eyebrow, labels),
    ),
    ...page.contactDock.methods.map((method) =>
      fromMethod(method, page.contactDock.id, page.contactDock.eyebrow, labels),
    ),
    {
      id: wd.architecture.id,
      number: wd.architecture.number,
      title: wd.architecture.title,
      description: wd.architecture.description,
      sectionId: wd.id,
      sectionTitle: wd.eyebrow,
      href: topicHref(wd.architecture.id),
      image: wd.architecture.image,
      imageAlt: wd.architecture.imageAlt,
      pointsLabel: dockLayersLabel,
      points: wd.architecture.layers,
    },
    {
      id: wd.alignment.id,
      number: wd.alignment.number,
      title: wd.alignment.title,
      description: wd.alignment.description,
      sectionId: wd.id,
      sectionTitle: wd.eyebrow,
      href: topicHref(wd.alignment.id),
      pointsLabel: alignmentSpecsLabel,
      points: wd.alignment.stats.map((stat) => ({
        label: stat.label,
        detail: stat.value,
      })),
      cases: wd.alignment.cases,
    },
    {
      id: wd.surface.id,
      number: wd.surface.number,
      title: wd.surface.title,
      description: wd.surface.description,
      sectionId: wd.id,
      sectionTitle: wd.eyebrow,
      href: topicHref(wd.surface.id),
      pointsLabel: surfaceFeaturesLabel,
      points: wd.surface.features.map((item) => ({
        label: item.label,
        detail: item.detail,
      })),
      cases: wd.surface.materials.map((item) => ({
        label: item.label,
        detail: item.detail,
        image: item.image,
      })),
    },
    {
      id: wd.fod.id,
      number: wd.fod.number,
      title: wd.fod.title,
      description: wd.fod.description,
      sectionId: wd.id,
      sectionTitle: wd.eyebrow,
      href: topicHref(wd.fod.id),
      pointsLabel: protectionFeaturesLabel,
      points: wd.fod.features.map((item) => ({
        label: item.label,
        detail: item.detail,
      })),
      cases: wd.fod.cases.map((item) => ({
        label: item.label,
        status: item.status,
        image: item.image,
      })),
    },
    {
      id: wd.sealed.id,
      number: wd.sealed.number,
      title: wd.sealed.title,
      description: wd.sealed.description,
      sectionId: wd.id,
      sectionTitle: wd.eyebrow,
      href: topicHref(wd.sealed.id),
      pointsLabel: protectionsLabel,
      points: wd.sealed.protections.map((item) => ({
        label: item.label,
        detail: item.detail,
      })),
      cases: wd.sealed.environments.map((item) => ({
        label: item.label,
        image: item.image,
      })),
    },
    ...page.positionDetection.methods.map((method) =>
      fromMethod(method, page.positionDetection.id, page.positionDetection.eyebrow, labels),
    ),
    ...page.outdoorReliability.methods.map((method) =>
      fromMethod(method, page.outdoorReliability.id, page.outdoorReliability.eyebrow, labels),
    ),
  ];
}

export function getPlugFreeDockingTopics(locale: Locale): PlugFreeTopic[] {
  return buildTopics(locale);
}

/** @deprecated Prefer `getPlugFreeDockingTopics(locale)`. Kept for English-only call sites. */
export const plugFreeDockingTopics: PlugFreeTopic[] = buildTopics("en");

export function getPlugFreeDockingTopic(id: string, locale: Locale = "en") {
  return buildTopics(locale).find((topic) => topic.id === id);
}

export function getPlugFreeTopicHref(id: string, locale: Locale = "en") {
  return withLocale(topicHref(id), locale);
}
