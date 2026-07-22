export const downloadCategories = [
  {
    id: "brochure",
    label: "Folleto",
    description: "Folletos corporativos y de producto para plataformas de energía inalámbrica.",
  },
  {
    id: "product-document",
    label: "Documento de Producto",
    description: "Guías de producto, notas de integración y documentación de plataformas.",
  },
  {
    id: "software-tools",
    label: "Herramientas de Software",
    description: "Utilidades de firmware, herramientas de configuración y actualizaciones de software.",
  },
  {
    id: "datasheet",
    label: "Hoja de Datos",
    description: "Hojas de datos técnicas para transmisores, receptores y módulos de energía.",
  },
  {
    id: "certificate",
    label: "Certificado",
    description: "Certificados de cumplimiento, informes de prueba y documentos regulatorios.",
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
      title: "Folleto Corporativo de SiCore Dynamics",
      type: "Folleto",
      date: "2026-03-01",
      href: "/contact",
    },
    {
      title: "Carga Inalámbrica para Máquinas Inteligentes",
      type: "Folleto",
      date: "2026-02-15",
      href: "/contact",
    },
    {
      title: "Panorama de las Estaciones de Carga Inteligentes",
      type: "Folleto",
      date: "2026-01-20",
      href: "/contact",
    },
  ],
  "product-document": [
    {
      title: "Guía de Integración de la Plataforma de Energía Inalámbrica",
      type: "Documento de producto",
      date: "2026-03-05",
      href: "/contact",
    },
    {
      title: "Guía de Producto de la Estación de Carga AGV/AMR",
      type: "Documento de producto",
      date: "2026-02-28",
      href: "/contact",
    },
    {
      title: "Panorama del Sistema de Acoplamiento de Carga para Robots",
      type: "Documento de producto",
      date: "2026-02-10",
      href: "/contact",
    },
    {
      title: "Referencia del Módulo de Energía Inalámbrica OEM",
      type: "Documento de producto",
      date: "2026-01-18",
      href: "/contact",
    },
  ],
  "software-tools": [
    {
      title: "Configurador de Energía SiCore",
      type: "Herramientas de software",
      date: "2026-03-08",
      href: "/contact",
    },
    {
      title: "Utilidad de Diagnóstico de Carga Inalámbrica",
      type: "Herramientas de software",
      date: "2026-02-22",
      href: "/contact",
    },
    {
      title: "Paquete de Actualización de Firmware — Controlador TX",
      type: "Herramientas de software",
      date: "2026-02-01",
      href: "/contact",
    },
  ],
  datasheet: [
    {
      title: "Hoja de Datos del Transmisor de Energía Inalámbrica de 60W",
      type: "Hoja de datos",
      date: "2026-03-10",
      href: "/contact",
    },
    {
      title: "Hoja de Datos del Receptor de Energía Inalámbrica de 200W",
      type: "Hoja de datos",
      date: "2026-03-10",
      href: "/contact",
    },
    {
      title: "Hoja de Datos del Módulo de Carga Industrial de 800W",
      type: "Hoja de datos",
      date: "2026-02-25",
      href: "/contact",
    },
    {
      title: "Hoja de Datos del Sistema de Carga AGV de 1500W",
      type: "Hoja de datos",
      date: "2026-02-12",
      href: "/contact",
    },
    {
      title: "Hoja de Datos de la Plataforma de Electrónica de Potencia de 3000W",
      type: "Hoja de datos",
      date: "2026-01-30",
      href: "/contact",
    },
  ],
  certificate: [
    {
      title: "Declaración de Conformidad CE",
      type: "Certificado",
      date: "2025-12-15",
      href: "/contact",
    },
    {
      title: "Certificado de Cumplimiento FCC",
      type: "Certificado",
      date: "2025-11-20",
      href: "/contact",
    },
    {
      title: "Declaración de Cumplimiento RoHS",
      type: "Certificado",
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
  title: "Descargar Documentos y Hojas de Datos de Carga Inalámbrica",
  description:
    "Regístrese para descargar folletos, documentos de producto, herramientas de software, hojas de datos y certificados de SiCore Dynamics sobre tecnologías avanzadas de carga inalámbrica y estaciones de carga inteligentes.",
};

export const downloadFaqs = [
  {
    question: "¿Dónde puedo descargar los documentos de carga inalámbrica de SiCore?",
    answer:
      "Visite el Centro de Descargas de SiCore Dynamics para explorar folletos, documentos de producto, herramientas de software, hojas de datos y certificados de cumplimiento. Es necesario registrarse con sus datos de contacto antes de poder descargar los archivos.",
  },
  {
    question: "¿Necesito registrarme antes de descargar?",
    answer:
      "Sí. Para descargar documentos, regístrese con su nombre, empresa, correo electrónico corporativo y número de teléfono. Después del registro, el acceso a las descargas se desbloqueará en su navegador.",
  },
  {
    question: "¿Qué tipos de descargas ofrece SiCore?",
    answer:
      "SiCore ofrece folletos, guías de integración de producto, herramientas de software, hojas de datos técnicas para plataformas de 60W a 3000W, y certificados regulatorios para productos de carga inalámbrica.",
  },
  {
    question: "¿Puedo descargar hojas de datos para carga inalámbrica de robótica y AGV?",
    answer:
      "Sí. Después del registro, SiCore ofrece hojas de datos y documentos de producto para soluciones de carga inalámbrica utilizadas en robots móviles, flotas AGV/AMR, drones y sistemas de automatización industrial.",
  },
];
