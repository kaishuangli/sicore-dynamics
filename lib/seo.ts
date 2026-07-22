import { site } from "@/lib/site";

export const homeTitle = "Wireless Power Transfer for Robotics & AI Charging Systems";

export const homeDescription = `${site.seoCorePhrase}. SiCore Dynamics develops advanced wireless power transfer, intelligent charging stations, and AI power electronics for robotics, AGVs, drones, industrial automation, and mission-critical systems.`;

export const coreCapabilities = [
  {
    label: "Wireless Charging Technology",
    text: "Advanced wireless power transfer technologies delivering high efficiency, precise alignment tolerance, and reliable energy transmission.",
    icon: "wireless" as const,
    href: "/technology/wireless-energy-platform",
  },
  {
    label: "Intelligent Charging Systems",
    text: "Smart wireless charging stations designed for autonomous robots, AGVs, drones, and intelligent industrial equipment.",
    icon: "station" as const,
    href: "/technology/intelligent-charging",
  },
  {
    label: "Plug-Free Docking Technology",
    text: "Plug-free docking technology enables autonomous machines to charge without cables or manual connectors — through precise docking mechanics.",
    icon: "station" as const,
    href: "/technology/plug-free-docking",
  },
  {
    label: "Industrial Power Solutions",
    text: "High-performance wireless charging and intelligent power solutions engineered for demanding industrial environments.",
    icon: "industrial" as const,
    href: "/#solutions",
  },
];

export const seoKeywords = [
  "advanced wireless charging technologies",
  "intelligent charging stations",
  "AI power systems",
  "AI power electronics",
  "wireless power transfer",
  "wireless charging for robotics",
  "AGV wireless charging",
  "AMR wireless charging",
  "industrial wireless charging",
  "wireless charging stations",
  "SiCore Dynamics",
];

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/images/sicore-logo.png`,
    },
    description: `${site.seoCorePhrase}. ${site.description}`,
    email: site.email,
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Advanced Wireless Charging Technologies",
      "Intelligent Charging Stations",
      "AI Power Systems",
      "AI Power Electronics",
      "Wireless Power Transfer",
      "Wireless Charging for Robotics",
      "Power Electronics",
      "Industrial Automation",
      "AGV Wireless Charging",
      "Intelligent Energy Systems",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: homeDescription,
    publisher: {
      "@id": `${site.url}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function getWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${site.url}/#webpage`,
    url: site.url,
    name: homeTitle,
    description: homeDescription,
    isPartOf: {
      "@id": `${site.url}/#website`,
    },
    about: {
      "@id": `${site.url}/#organization`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${site.url}/images/hero-wireless-robotics.jpg`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".hero-speakable", ".seo-core-phrase"],
    },
    inLanguage: "en-US",
  };
}

export function getItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SiCore Dynamics Core Capabilities",
    description: site.seoCorePhrase,
    itemListElement: coreCapabilities.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      description: item.text,
    })),
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: site.seoCorePhrase,
    description: homeDescription,
    provider: {
      "@id": `${site.url}/#organization`,
    },
    serviceType: [
      "Wireless Charging Technology",
      "Intelligent Charging Systems",
      "AI Power Electronics",
      "Industrial Power Solutions",
    ],
    areaServed: "Worldwide",
  };
}
