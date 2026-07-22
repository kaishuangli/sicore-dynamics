export const industryNewsPageMeta = {
  title: "Noticias de la Industria | SiCore Dynamics",
  description:
    "Noticias e informes sobre robótica, sistemas autónomos, carga inalámbrica, automatización industrial e infraestructura de máquinas inteligentes.",
};

export const industryNewsHero = {
  eyebrow: "Noticias de la Industria",
  title: "Señales que moldean el futuro de las máquinas autónomas.",
  body: "Una visión curada de los avances en robótica, automatización industrial, energía inalámbrica, drones, dispositivos médicos e infraestructura inteligente, enfocada en cómo se alimentan, despliegan y escalan las máquinas inteligentes.",
} as const;

export const industryNewsCategories = [
  "Todos",
  "Robótica",
  "Energía Inalámbrica",
  "Automatización",
  "Agricultura",
  "Médico",
  "Drones",
] as const;

export type IndustryNewsCategory = (typeof industryNewsCategories)[number];

export const industryNewsItems = [
  {
    id: "amr-fleet-charging",
    date: "2026-06",
    category: "Robótica" as const,
    title: "Las flotas de AMR convierten la carga de accesorio en infraestructura",
    summary:
      "A medida que crecen las flotas de robots en almacenes y fábricas, los operadores están pasando de rutinas manuales de conexión a la carga por oportunidad y a estrategias de energía basadas en estaciones de acoplamiento que protegen el tiempo de actividad.",
  },
  {
    id: "wireless-power-standards",
    date: "2026-05",
    category: "Energía Inalámbrica" as const,
    title: "La energía inalámbrica industrial trasciende la conveniencia de consumo",
    summary:
      "La transferencia inalámbrica resonante y de alta potencia está ganando atención en entornos industriales, donde los diseños sellados, el menor desgaste de conectores y el bajo mantenimiento importan más que la conveniencia de escritorio.",
  },
  {
    id: "outdoor-ag-robots",
    date: "2026-04",
    category: "Agricultura" as const,
    title: "Los robots de campo obligan a repensar la confiabilidad de la carga al aire libre",
    summary:
      "El polvo, el lodo, la lluvia y la vibración están exponiendo los límites de los conectores tradicionales en la automatización agrícola, aumentando la demanda de enfoques de carga robustos y de baja intervención.",
  },
  {
    id: "medical-sealed-devices",
    date: "2026-03",
    category: "Médico" as const,
    title: "Los dispositivos médicos sellados aumentan la presión hacia la energía sin contacto",
    summary:
      "El control de infecciones y la integridad del gabinete siguen impulsando el diseño de equipos médicos hacia menos contactos eléctricos expuestos y interfaces de energía más limpias.",
  },
  {
    id: "drone-dock-networks",
    date: "2026-02",
    category: "Drones" as const,
    title: "Las estaciones autónomas para drones se vuelven críticas para operaciones continuas",
    summary:
      "Los programas de inspección, logística y seguridad están ampliando las redes de estaciones para que los drones puedan aterrizar, recargarse y redesplegarse con menos manipulación humana entre misiones.",
  },
  {
    id: "factory-opportunity-charging",
    date: "2026-01",
    category: "Automatización" as const,
    title: "La carga por oportunidad transforma la economía de la movilidad en fábrica",
    summary:
      "Los ciclos de carga cortos y frecuentes en estaciones de trabajo y puntos de ruta están ayudando a los AGV y plataformas móviles a reducir el sobredimensionamiento de baterías mientras mejoran la utilización por turno.",
  },
  {
    id: "oem-design-in",
    date: "2025-12",
    category: "Energía Inalámbrica" as const,
    title: "Los OEM priorizan la integración de la carga desde etapas más tempranas del producto",
    summary:
      "En lugar de añadir cargadores en etapas tardías, más fabricantes tratan la transferencia de energía como parte de la arquitectura de la máquina, junto con los sistemas mecánicos, de control y de seguridad.",
  },
  {
    id: "harsh-environment-power",
    date: "2025-11",
    category: "Automatización" as const,
    title: "Los entornos hostiles revelan la falla de conectores como un costo operativo",
    summary:
      "En entornos industriales húmedos, polvorientos y de alta frecuencia de uso, la degradación de conectores se considera cada vez más un costo de confiabilidad y mantenimiento, no solo un inconveniente de hardware.",
  },
] as const;

export const industryNewsTopics = {
  eyebrow: "Enfoque de Cobertura",
  title: "Dónde observamos a la industria.",
  items: [
    {
      title: "Movilidad autónoma",
      text: "Robots, AGV, AMR y vehículos industriales que necesitan disponibilidad de energía continua.",
    },
    {
      title: "Infraestructura de carga",
      text: "Sistemas inalámbricos, de contacto y de acoplamiento construidos para operar a escala de flota.",
    },
    {
      title: "Integración OEM",
      text: "Cómo los fabricantes integran la transferencia de energía en los productos desde las primeras etapas de diseño.",
    },
    {
      title: "Entornos operativos",
      text: "Fábricas, granjas, hospitales, sitios al aire libre y otros lugares donde los conectores fallan primero.",
    },
  ],
} as const;
