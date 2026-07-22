import { site } from "@/lib/site";

export const contactInquiryTypes = [
  "Desarrollo OEM",
  "Soporte Técnico",
  "Consulta de Ventas",
  "Alianza Comercial",
  "Otro",
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
    title: "Correo Electrónico",
    items: [
      {
        label: "Correo Electrónico",
        value: site.email,
        href: `mailto:${site.email}`,
      },
    ],
  },
  {
    title: "Teléfono",
    items: [
      {
        label: "Teléfono",
        value: "+1 480 799 8893",
        href: "tel:+14807998893",
      },
    ],
  },
  {
    title: "Oficina",
    items: [
      {
        label: "Oficina",
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
    title: "Horario",
    items: [
      {
        label: "Horario",
        value: "Lun – Vie · 9:00 AM – 6:00 PM (CST)",
      },
    ],
  },
];

export const contactIndustries = [
  "Automatización y Robótica",
  "Vehículos Aéreos No Tripulados",
  "Automatización Agrícola",
  "Equipos Médicos",
  "Mobiliario Inteligente",
  "OEM Personalizado",
  "Otro",
] as const;

export const contactCountries = [
  "Estados Unidos",
  "Canadá",
  "China",
  "Alemania",
  "Japón",
  "Reino Unido",
  "Otro",
] as const;

export const contactPageMeta = {
  title: "Contacte a SiCore Dynamics",
  description:
    "Contacte a SiCore Dynamics para conocer nuestras tecnologías avanzadas de carga inalámbrica, estaciones de carga inteligentes y sistemas de energía con IA, o para consultas sobre desarrollo OEM, soporte técnico y oportunidades de alianzas comerciales.",
};

export const contactFaqs = [
  {
    question:
      "¿Cómo puedo contactar a SiCore Dynamics para proyectos OEM de carga inalámbrica?",
    answer:
      "Utilice el formulario de contacto de esta página o escriba directamente a nuestros equipos de ventas e ingeniería. SiCore ofrece soporte para el desarrollo OEM, la integración de productos y el despliegue de soluciones de carga inalámbrica para robótica y sistemas industriales.",
  },
  {
    question: "¿Qué industrias atiende SiCore?",
    answer:
      "SiCore atiende los sectores de automatización y robótica, vehículos aéreos no tripulados, automatización agrícola, equipos médicos, mobiliario inteligente y programas OEM personalizados de carga inalámbrica.",
  },
] as const;
