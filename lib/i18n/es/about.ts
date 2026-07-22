export const aboutSections = [
  {
    id: "about-sicore",
    label: "Sobre SiCore",
    title: "Sobre SiCore Dynamics",
    tagline: "Una empresa de tecnología de energía inalámbrica creada para máquinas inteligentes.",
    description:
      "SiCore Dynamics desarrolla sistemas avanzados de transferencia de energía inalámbrica que ayudan a robots, máquinas industriales, dispositivos médicos y futuros sistemas inteligentes a cargarse y operar con mayor autonomía.",
    highlights: [
      "Plataformas de transferencia de energía inalámbrica resonante",
      "Estaciones de carga inteligentes para robótica y automatización",
      "Control de energía y optimización energética habilitados por IA",
      "Ingeniería lista para OEM, desde el concepto hasta la producción",
    ],
    items: [
      {
        title: "Nuestra Misión",
        text: "Impulsar la próxima generación de máquinas inteligentes mediante tecnología de carga inalámbrica confiable y escalable.",
      },
      {
        title: "Qué Hacemos",
        text: "Combinamos energía inalámbrica, electrónica de potencia, control embebido e integración de sistemas en plataformas listas para implementar, pensadas para clientes industriales.",
      },
      {
        title: "A Quién Servimos",
        text: "Fabricantes OEM de robótica, fabricantes de AGV/AMR, integradores de automatización, plataformas de drones e innovadores de dispositivos médicos.",
      },
    ],
  },
  {
    id: "news",
    label: "Noticias de la Industria",
    title: "Noticias de la Industria",
    tagline: "Señales que están dando forma a las máquinas autónomas y la infraestructura de carga.",
    description:
      "Informes de la industria sobre robótica, energía inalámbrica, automatización, agricultura, dispositivos médicos y drones.",
    highlights: [
      "Robótica y flotas autónomas",
      "Energía inalámbrica y sin conexión",
      "Despliegue industrial y en exteriores",
    ],
    items: [
      {
        title: "Robótica",
        text: "Estrategias de carga de flotas y disponibilidad operativa para AMR, AGV y plataformas móviles.",
      },
      {
        title: "Energía Inalámbrica",
        text: "Adopción industrial de la transferencia resonante y de alta potencia más allá de los casos de uso de consumo.",
      },
      {
        title: "Automatización",
        text: "Carga por oportunidad y presiones de confiabilidad en entornos operativos exigentes.",
      },
    ],
  },
  {
    id: "investor-opportunity",
    label: "Inversionistas",
    title: "Inversionistas",
    tagline: "Invirtiendo en el futuro de la energía inteligente.",
    description:
      "Apoyando la próxima generación de tecnologías de carga inalámbrica e infraestructura autónoma de energía.",
    highlights: [
      "Carga inalámbrica avanzada",
      "Experiencia en ingeniería",
      "Oportunidad de mercado en crecimiento",
    ],
    items: [
      {
        title: "Por Qué SiCore",
        text: "Tecnologías de carga inteligente para robótica y automatización.",
      },
      {
        title: "Oportunidad de Mercado",
        text: "Demanda acelerada en robótica, automatización, medicina y agricultura.",
      },
      {
        title: "Conéctese",
        text: "Las conversaciones con inversionistas y socios estratégicos son bienvenidas.",
      },
    ],
  },
  {
    id: "trade-fairs-events",
    label: "Ferias y Eventos",
    title: "Ferias Comerciales y Eventos",
    tagline: "Conozca a SiCore en los principales eventos de robótica, automatización y electrónica de potencia.",
    description:
      "Descubra las demostraciones de carga inalámbrica, las sesiones de ingeniería y las presentaciones de producto de SiCore en eventos globales de la industria.",
    highlights: [
      "Demostraciones en vivo de carga inalámbrica",
      "Consultas de ingeniería y producto",
      "Exposiciones globales de robótica y automatización",
    ],
    items: [
      {
        title: "Próximos Eventos",
        text: "Descubra dónde exhibirá SiCore a continuación: ferias comerciales de robótica, automatización industrial y tecnología energética.",
      },
      {
        title: "Demostraciones en Eventos",
        text: "Conozca en vivo, en el piso de exhibición, las estaciones de carga inteligentes, los módulos de energía inalámbrica y el control de energía con IA.",
      },
      {
        title: "Programe una Reunión",
        text: "Reserve una consulta de ingeniería en sitio o una reunión ejecutiva durante las principales ferias comerciales y conferencias.",
      },
    ],
  },
] as const;

export type AboutSectionId = (typeof aboutSections)[number]["id"];

export const aboutNavLinks = aboutSections.map((section) => ({
  label: section.label,
  href:
    section.id === "about-sicore"
      ? "/about"
      : section.id === "investor-opportunity"
        ? "/about/investor"
        : section.id === "news"
          ? "/about/news"
          : `/about#${section.id}`,
  id: section.id,
}));

export function getAboutSectionFromHash(hash: string): AboutSectionId | null {
  const id = hash.replace(/^#/, "");
  return aboutSections.some((section) => section.id === id) ? (id as AboutSectionId) : null;
}

export const aboutPageMeta = {
  title: "Sobre SiCore Dynamics — Por Qué Existimos",
  description:
    "SiCore Dynamics diseña infraestructura de carga autónoma para que las máquinas inteligentes nunca se detengan por la forma en que reciben energía.",
};
