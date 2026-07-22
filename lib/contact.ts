import { site } from "@/lib/site";

export const contactInquiryTypes = [
  "OEM Development",
  "Technical Support",
  "Sales Inquiry",
  "Partnership",
  "Other",
] as const;

export type ContactLinkItem = {
  label: string;
  value: string;
  href?: string;
};

export const contactInfoSections: {
  title: string;
  items: readonly ContactLinkItem[];
}[] = [
  {
    title: "Email",
    items: [
      {
        label: "Email",
        value: site.email,
        href: `mailto:${site.email}`,
      },
    ],
  },
  {
    title: "Phone",
    items: [
      {
        label: "Phone",
        value: "+1 480 799 8893",
        href: "tel:+14807998893",
      },
    ],
  },
  {
    title: "Office",
    items: [
      {
        label: "Office",
        value: "Dallas, TX",
      },
    ],
  },
  {
    title: "LinkedIn",
    items: [
      {
        label: "LinkedIn",
        value: "SiCore Dynamics",
        href: "https://www.linkedin.com/company/sicore-dynamics",
      },
    ],
  },
  {
    title: "Hours",
    items: [
      {
        label: "Hours",
        value: "Mon – Fri · 9:00 AM – 6:00 PM (CST)",
      },
    ],
  },
];

export const contactIndustries = [
  "Automation & Robotics",
  "Unmanned Aerial Vehicles",
  "Agricultural Automation",
  "Medical Equipment",
  "Smart Furniture",
  "Customized OEM",
  "Other",
] as const;

export const contactCountries = [
  "United States",
  "Canada",
  "China",
  "Germany",
  "Japan",
  "United Kingdom",
  "Other",
] as const;

export const contactPageMeta = {
  title: "Contact SiCore Dynamics",
  description: `Contact SiCore Dynamics for ${site.seoCorePhrase.toLowerCase()}, OEM development, technical support, and partnership opportunities.`,
};

export const contactFaqs = [
  {
    question: "How do I contact SiCore Dynamics for OEM wireless charging projects?",
    answer:
      "Use the contact form on this page or email our sales and engineering teams. SiCore supports OEM development, product integration, and wireless charging deployment for robotics and industrial systems.",
  },
  {
    question: "What industries does SiCore support?",
    answer:
      "SiCore supports automation and robotics, unmanned aerial vehicles, agricultural automation, medical equipment, smart furniture, and customized OEM wireless charging programs.",
  },
] as const;
