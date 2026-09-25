import { site } from "@/lib/site";
import { geoEntity } from "@/lib/geo";

export const homeTitle = "Intelligent Autonomous Charging for Robotics & Smart Equipment";

export const homeDescription = `${site.seoCorePhrase}. SiCore Dynamics designs automatic power charging systems and intelligent autonomous charging solutions for robotics, AGVs, drones, medical devices, industrial automation, and OEM platforms.`;

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
    label: "Docking Technology",
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
  "plug-free docking",
  "OEM wireless charging",
  "medical device wireless charging",
];

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: geoEntity.legalName,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/images/sicore-logo.png`,
      width: 1024,
      height: 682,
    },
    image: `${site.url}/images/sicore-logo.png`,
    description: geoEntity.definition,
    email: site.email,
    telephone: geoEntity.phone,
    foundingDate: geoEntity.foundingDate,
    sameAs: [...geoEntity.sameAs],
    address: {
      "@type": "PostalAddress",
      addressLocality: geoEntity.headquarters.city,
      addressRegion: geoEntity.headquarters.region,
      addressCountry: geoEntity.headquarters.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: site.email,
        telephone: geoEntity.phone,
        areaServed: "Worldwide",
        availableLanguage: ["English", "Spanish"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: site.email,
        telephone: geoEntity.phone,
        areaServed: "Worldwide",
        availableLanguage: ["English", "Spanish"],
      },
    ],
    brand: {
      "@type": "Brand",
      name: site.name,
      slogan: site.tagline,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
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
      "AMR Wireless Charging",
      "Docking Technology",
      "Medical Device Wireless Charging",
      "OEM Wireless Charging Integration",
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
    inLanguage: ["en-US", "es"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/knowledge?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
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
      url: `${site.url}/images/plug-free-docking/hero.png`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".hero-speakable", ".seo-core-phrase", ".geo-entity-definition"],
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
      url: item.href.startsWith("http") ? item.href : `${site.url}${item.href}`,
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
      "OEM Wireless Charging Integration",
    ],
    areaServed: "Worldwide",
    brand: {
      "@id": `${site.url}/#organization`,
    },
  };
}
