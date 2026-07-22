export const downloadCategories = [
  {
    id: "brochure",
    label: "Brochure",
    description: "Company and product brochures for wireless power platforms.",
  },
  {
    id: "product-document",
    label: "Product Document",
    description: "Product guides, integration notes, and platform documentation.",
  },
  {
    id: "software-tools",
    label: "Software Tools",
    description: "Firmware utilities, configuration tools, and software updates.",
  },
  {
    id: "datasheet",
    label: "Datasheet",
    description: "Technical datasheets for transmitters, receivers, and power modules.",
  },
  {
    id: "certificate",
    label: "Certificate",
    description: "Compliance certificates, test reports, and regulatory documents.",
  },
] as const;

export type DownloadCategoryId = (typeof downloadCategories)[number]["id"];

type DownloadFile = {
  title: string;
  type: string;
  date: string;
  href: string;
};

export const downloadFiles: Record<DownloadCategoryId, DownloadFile[]> = {
  brochure: [
    {
      title: "SiCore Dynamics Corporate Brochure",
      type: "Brochure",
      date: "2026-03-01",
      href: "/contact",
    },
    {
      title: "Wireless Charging for Intelligent Machines",
      type: "Brochure",
      date: "2026-02-15",
      href: "/contact",
    },
    {
      title: "Intelligent Charging Stations Overview",
      type: "Brochure",
      date: "2026-01-20",
      href: "/contact",
    },
  ],
  "product-document": [
    {
      title: "Wireless Power Platform Integration Guide",
      type: "Product document",
      date: "2026-03-05",
      href: "/contact",
    },
    {
      title: "AGV/AMR Charging Station Product Guide",
      type: "Product document",
      date: "2026-02-28",
      href: "/contact",
    },
    {
      title: "Robot Charging Dock System Overview",
      type: "Product document",
      date: "2026-02-10",
      href: "/contact",
    },
    {
      title: "OEM Wireless Power Module Reference",
      type: "Product document",
      date: "2026-01-18",
      href: "/contact",
    },
  ],
  "software-tools": [
    {
      title: "SiCore Power Configurator",
      type: "Software tools",
      date: "2026-03-08",
      href: "/contact",
    },
    {
      title: "Wireless Charging Diagnostics Utility",
      type: "Software tools",
      date: "2026-02-22",
      href: "/contact",
    },
    {
      title: "Firmware Update Package — TX Controller",
      type: "Software tools",
      date: "2026-02-01",
      href: "/contact",
    },
  ],
  datasheet: [
    {
      title: "60W Wireless Power Transmitter Datasheet",
      type: "Datasheet",
      date: "2026-03-10",
      href: "/contact",
    },
    {
      title: "200W Wireless Power Receiver Datasheet",
      type: "Datasheet",
      date: "2026-03-10",
      href: "/contact",
    },
    {
      title: "800W Industrial Charging Module Datasheet",
      type: "Datasheet",
      date: "2026-02-25",
      href: "/contact",
    },
    {
      title: "1500W AGV Charging System Datasheet",
      type: "Datasheet",
      date: "2026-02-12",
      href: "/contact",
    },
    {
      title: "3000W Power Electronics Platform Datasheet",
      type: "Datasheet",
      date: "2026-01-30",
      href: "/contact",
    },
  ],
  certificate: [
    {
      title: "CE Declaration of Conformity",
      type: "Certificate",
      date: "2025-12-15",
      href: "/contact",
    },
    {
      title: "FCC Compliance Certificate",
      type: "Certificate",
      date: "2025-11-20",
      href: "/contact",
    },
    {
      title: "RoHS Compliance Statement",
      type: "Certificate",
      date: "2025-10-08",
      href: "/contact",
    },
  ],
};

export const downloadNavLinks = downloadCategories.map((category) => ({
  label: category.label,
  href: `/download#${category.id}`,
  id: category.id,
}));

export function getDownloadCategoryFromHash(hash: string): DownloadCategoryId | null {
  const id = hash.replace(/^#/, "");
  return downloadCategories.some((category) => category.id === id)
    ? (id as DownloadCategoryId)
    : null;
}

export const downloadPageMeta = {
  title: "Download Wireless Charging Documents & Datasheets",
  description:
    "Register to download SiCore Dynamics brochures, product documents, software tools, datasheets, and certificates for advanced wireless charging technologies and intelligent charging stations.",
};

export const downloadFaqs = [
  {
    question: "Where can I download SiCore wireless charging documents?",
    answer:
      "Visit the SiCore Dynamics Download Center to browse brochures, product documents, software tools, datasheets, and compliance certificates. Registration with your contact details is required before files can be downloaded.",
  },
  {
    question: "Do I need to register before downloading?",
    answer:
      "Yes. To download documents, register with your name, company, business email, and phone number. After registration, download access is unlocked in your browser.",
  },
  {
    question: "What types of downloads does SiCore provide?",
    answer:
      "SiCore provides brochures, product integration guides, software tools, technical datasheets for 60W to 3000W platforms, and regulatory certificates for wireless charging products.",
  },
  {
    question: "Can I download datasheets for robotics and AGV wireless charging?",
    answer:
      "Yes. After registration, SiCore offers datasheets and product documents for wireless charging solutions used in mobile robots, AGV/AMR fleets, drones, and industrial automation systems.",
  },
];
