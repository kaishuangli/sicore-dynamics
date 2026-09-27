export const technologyPlatforms = [
  {
    id: "wireless-energy-platform",
    label: "Plataforma de Energía Inalámbrica",
    shortLabel: "Energía Inalámbrica",
    eyebrow: "Plataformas Tecnológicas",
    title: "Plataforma de Energía Inalámbrica",
    description:
      "Tecnologías avanzadas de energía inalámbrica diseñadas para una transferencia de energía eficiente, confiable y escalable, desde la física y el magnetismo hasta el control y la integración de sistemas.",
    icon: "wireless" as const,
    topics: [
      "Capa Física",
      "Capa Magnética",
      "Capa de Potencia",
      "Capa de Control",
      "Capa de Sistema",
    ],
  },
  {
    id: "intelligent-charging",
    label: "Sistemas de Carga Inteligente",
    shortLabel: "Carga Inteligente",
    eyebrow: "Plataformas Tecnológicas",
    title: "Sistemas de Carga Inteligente",
    description:
      "Coordine baterías, estaciones de carga y operaciones de flota mediante algoritmos de carga adaptativa e inteligencia de sistema en tiempo real.",
    icon: "ai" as const,
    topics: [
      "Programación de Carga",
      "Gestión de Baterías",
      "Algoritmos de Carga",
      "Comunicación",
      "Diagnóstico",
    ],
  },
  {
    id: "plug-free-docking",
    label: "Docking Technology",
    shortLabel: "Docking Technology",
    eyebrow: "Plataformas Tecnológicas",
    title: "Docking Technology",
    description:
      "Soluciones de acoplamiento fluidas que eliminan la carga manual mediante conectores para máquinas autónomas.",
    icon: "station" as const,
    topics: [
      "Mecánica de Acoplamiento",
      "Acoplamiento por Contacto",
      "Acoplamiento Inalámbrico",
      "Detección de Posición",
      "Confiabilidad en Exteriores",
    ],
  },
  {
    id: "oem-integration",
    label: "Integración OEM",
    shortLabel: "Integración OEM",
    eyebrow: "Plataformas Tecnológicas",
    title: "Integración OEM",
    description:
      "Diseñado para adaptarse a su producto: soluciones de carga que se integran de forma natural en máquinas existentes, desde el prototipo hasta la producción en masa.",
    icon: "power" as const,
    topics: [
      "Integración Mecánica",
      "Integración Eléctrica",
      "Software y Comunicación",
      "Personalización del Sistema",
      "Del Prototipo a la Producción",
    ],
  },
] as const;

export type TechnologyPlatformId = (typeof technologyPlatforms)[number]["id"];

export type TechnologyPlatform = (typeof technologyPlatforms)[number];

export const technologyNavLinks = technologyPlatforms.map((platform) => ({
  label: platform.label,
  href: `/technology/${platform.id}`,
  id: platform.id,
}));

export function getTechnologyPlatform(id: string): TechnologyPlatform | undefined {
  return technologyPlatforms.find((platform) => platform.id === id);
}

export const technologyPortfolio = technologyPlatforms.map((platform) => ({
  title: platform.label,
  description: platform.description,
  icon: platform.icon,
  href: `/technology/${platform.id}`,
  tabId: platform.id,
}));

/** @deprecated Use technologyPlatforms — kept for legacy hash redirects */
export const techSubNavItems = [
  { id: "purpose" as const, label: "Propósito", shortLabel: "Propósito" },
  ...technologyPlatforms.map((platform) => ({
    id: platform.id,
    label: platform.label,
    shortLabel: platform.shortLabel,
    summary: platform.description,
  })),
];

export type TechSubNavId = (typeof techSubNavItems)[number]["id"];

export function getTechTabFromHash(hash: string): TechSubNavId | null {
  const id = hash.replace(/^#/, "");
  return techSubNavItems.some((item) => item.id === id) ? (id as TechSubNavId) : null;
}

export const wirelessFeatures = [
  {
    title: "Alta Eficiencia",
    description:
      "Transferencia de energía inalámbrica resonante optimizada para pérdidas mínimas y un rendimiento industrial sostenido.",
  },
  {
    title: "Tolerancia de Alineación",
    description:
      "Suministro de energía confiable ante variaciones de posición en entornos dinámicos de robótica y automatización.",
  },
  {
    title: "Detección de Objetos Extraños",
    description: "Monitoreo de seguridad para proteger a las personas, los equipos y la infraestructura de carga.",
  },
  {
    title: "Carga Dinámica",
    description:
      "Soporte para carga en parada y carga en movimiento en máquinas móviles y AGV.",
  },
  {
    title: "Potencia Escalable",
    description: "Arquitectura de plataforma modular de 10W a 50kW+ para integración OEM a cualquier escala.",
    highlight: "10W–50kW+",
  },
];

export const chargingStations = [
  {
    title: "Estación de Carga para Robots",
    description: "Carga inalámbrica autónoma para robots de servicio y plataformas AMR.",
    image: "/images/industry-robotics.png",
  },
  {
    title: "Estación de Carga para AGV",
    description: "Operación continua de AGV en almacenes y fábricas sin conectores manuales.",
    image: "/images/mobile-robots.jpg",
  },
  {
    title: "Estación de Carga para Drones",
    description: "Suministro de energía inalámbrica seguro y repetible para sistemas aéreos y de drones.",
    image: "/images/industry-drones.png",
  },
  {
    title: "Plataforma de Carga Industrial",
    description: "Infraestructura de carga escalable para implementaciones de automatización de misión crítica.",
    image: "/images/product-tx.png",
  },
];

export const aiPowerTopics = [
  {
    title: "Carga Adaptativa",
    description: "Ajuste en tiempo real del perfil de carga según la carga y el estado de la batería.",
  },
  {
    title: "Monitoreo de Salud de la Batería",
    description: "Monitoreo continuo para prolongar la vida de la batería y mejorar la confiabilidad de la flota.",
  },
  {
    title: "Mantenimiento Predictivo",
    description: "Alertas basadas en datos para reducir el tiempo de inactividad antes de que ocurran fallas.",
  },
  {
    title: "Optimización Inteligente de Energía",
    description: "Distribución de energía asistida por IA en entornos de carga con múltiples dispositivos.",
  },
  {
    title: "Diagnóstico en Tiempo Real",
    description: "Visibilidad en vivo del estado de la etapa de potencia y el rendimiento de carga.",
  },
];

export const aiWorkflowSteps = [
  "Datos de Sensores",
  "Control por IA",
  "Optimización de Potencia",
  "Protección de Batería",
  "Retroalimentación en la Nube / Sistema",
];

export const powerElectronicsFeatures = [
  {
    title: "Conversión de Grado Industrial",
    description:
      "Etapas de potencia de alto rendimiento diseñadas para ciclos de trabajo exigentes de carga inalámbrica.",
  },
  {
    title: "Arquitectura Modular",
    description: "Módulos escalables de transmisor, receptor y controlador para una integración OEM flexible.",
  },
  {
    title: "Control y Protección",
    description:
      "Accionamiento de compuerta avanzado, monitoreo y protección contra fallas para un funcionamiento confiable del sistema.",
  },
  {
    title: "Listo para Integración de Sistemas",
    description:
      "Diseñado para combinarse con bobinas inalámbricas, firmware y plataformas de carga inteligente de SiCore.",
  },
];

export const engineeringCapabilities = [
  { title: "Electrónica de Potencia", icon: "bolt" },
  { title: "Sistemas Embebidos", icon: "chip" },
  { title: "Diseño Magnético", icon: "coil" },
  { title: "Gestión Térmica", icon: "thermal" },
  { title: "Diseño EMC", icon: "emc" },
  { title: "Protección de Seguridad", icon: "shield" },
  { title: "Comunicación Industrial", icon: "comm" },
  { title: "Desarrollo de Firmware", icon: "firmware" },
];

export const technologyAdvantages = [
  { value: "10W–50kW+", label: "Potencia Escalable" },
  { value: "Alta Eficiencia", label: "Transferencia de Energía" },
  { value: "Listo para OEM", label: "Integración" },
  { value: "Grado Industrial", label: "Confiabilidad" },
  { value: "Habilitado por IA", label: "Inteligencia" },
  { value: "Concepto → Producción", label: "Soporte de Ingeniería" },
];

export const technologyPageMeta = {
  title: "Plataforma tecnológica de carga autónoma",
  description:
    "Desde la transferencia de energía y el acoplamiento hasta la inteligencia de carga y la integración OEM, SiCore proporciona la pila tecnológica necesaria para que las máquinas se carguen de forma autónoma.",
};

/** Legacy hash / slug → current platform route */
export const technologyHashRedirects: Record<string, TechnologyPlatformId> = {
  "wireless-charging": "wireless-energy-platform",
  "wireless-power": "wireless-energy-platform",
  "wireless-energy-platform": "wireless-energy-platform",
  "charging-stations": "plug-free-docking",
  "ai-power": "intelligent-charging",
  "power-electronics": "oem-integration",
  "intelligent-charging": "intelligent-charging",
  "plug-free-docking": "plug-free-docking",
  "oem-integration": "oem-integration",
};
