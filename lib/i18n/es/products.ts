export const productTiers = [
  {
    id: "60w",
    label: "60W",
    title: "Sistema de Energía Inalámbrica de 60W",
    tagline: "Energía inalámbrica compacta para máquinas inteligentes ligeras.",
    description:
      "La plataforma de 60W ofrece carga inalámbrica eficiente para robots pequeños, drones y dispositivos de automatización portátiles, donde el espacio, el peso y la simplicidad de integración son fundamentales.",
    applications: [
      "Robots de servicio",
      "Estaciones de acoplamiento para drones",
      "AMR portátiles",
      "Automatización de laboratorio",
    ],
    highlights: [
      "Transferencia resonante de alta eficiencia",
      "Módulos TX/RX compactos",
      "Listo para integración OEM",
    ],
    image: "/images/product-rx.png",
  },
  {
    id: "200w",
    label: "200W",
    title: "Sistema de Energía Inalámbrica de 200W",
    tagline: "Carga inalámbrica confiable de potencia media para plataformas móviles.",
    description:
      "El sistema de 200W admite la operación continua de robots móviles y equipos automatizados que requieren un rendimiento confiable de parada y carga en entornos comerciales.",
    applications: [
      "Robots móviles",
      "AMR de almacén",
      "Robots de inspección",
      "Dispositivos de fábrica inteligente",
    ],
    highlights: [
      "Carga tolerante a la desalineación",
      "Listo para comunicación industrial",
      "Control de firmware escalable",
    ],
    image: "/images/product-tx.png",
  },
  {
    id: "800w",
    label: "800W",
    title: "Sistema de Energía Inalámbrica de 800W",
    tagline: "Energía inalámbrica de alto rendimiento para AGV y movilidad industrial.",
    description:
      "La plataforma de 800W está diseñada para AGV y sistemas móviles industriales que requieren una entrega de energía más rápida, un rendimiento térmico robusto y una disponibilidad crítica para la operación.",
    applications: [
      "Flotas de AGV",
      "AMR industriales",
      "Logística automatizada",
      "Sistemas de movilidad de fábrica",
    ],
    highlights: [
      "Alto rendimiento de carga",
      "Protección de grado industrial",
      "Arquitectura lista para flotas",
    ],
    image: "/images/mobile-robots.jpg",
  },
  {
    id: "1500w",
    label: "1500W",
    title: "Sistema de Energía Inalámbrica de 1500W",
    tagline: "Carga inalámbrica de alto servicio para cargas de trabajo de automatización exigentes.",
    description:
      "La solución de 1500W admite plataformas industriales de alto servicio con electrónica de potencia avanzada, gestión térmica y seguridad a nivel de sistema para una automatización continua.",
    applications: [
      "AGV de alto servicio",
      "Estaciones de carga industriales",
      "Plataformas móviles de gran tamaño",
      "Líneas de automatización 24/7",
    ],
    highlights: [
      "Alta densidad de potencia",
      "Diseño térmico avanzado",
      "Monitoreo de seguridad y FOD",
    ],
    image: "/images/product-controller.png",
  },
  {
    id: "3000w",
    label: "3000W",
    title: "Sistema de Energía Inalámbrica de 3000W",
    tagline: "Plataforma inalámbrica de máxima potencia para infraestructura de energía industrial.",
    description:
      "El sistema de 3000W ofrece la capacidad de carga inalámbrica de mayor potencia de SiCore para despliegues industriales a gran escala, plataformas de carga y sistemas de automatización de alto consumo energético. Entrega hasta 3 kW de salida con una eficiencia de hasta el 87% a carga completa, una distancia de carga de 35–80 mm, carga CV/CC y comunicación CAN / RS485 para integración empresarial.",
    applications: [
      "Plataformas de carga industrial",
      "Sistemas AGV de alta potencia",
      "Grandes flotas de robots",
      "Automatización de alto consumo energético",
    ],
    highlights: [
      "Salida máxima de 3 kW con eficiencia de hasta el 87% a carga completa",
      "Distancia de carga inalámbrica de 35–80 mm a 85 kHz",
      "Carga CV/CC con detección e inicio automáticos",
      "Interfaces CAN / RS485 y bobinas selladas IP65",
    ],
    image: "/images/product-3000w.png",
  },
] as const;

export type ProductTierId = (typeof productTiers)[number]["id"];

export const wirelessLowPowerTier = {
  id: "30w-or-less",
  label: "30W o menos",
  title: "Módulos de potencia inalámbrica de 30 W o menos",
  tagline: "Módulos Qi y embebidos de carga inalámbrica de 30 W o menos.",
  description:
    "Módulos compactos de transmisor, receptor, controlador y bobina para electrónica de consumo, mobiliario y OEM que requieren carga inalámbrica de 30 W o menos.",
  applications: ["Electrónica de consumo", "Integración en muebles", "Receptores Qi", "Carga de escritorio"],
  highlights: ["Módulos clase Qi / Qi2", "Típico 5 W a 15 W", "Placas TX, RX y de control"],
  image:
    "/images/products/wireless-power-modules/30w-or-less/long-range-wireless-charging-module/01_complete_wireless_charging_assembly.png",
} as const;

export const productNavLinks = [
  {
    id: "wireless-power-modules",
    label: "Módulos de potencia inalámbrica",
    href: "/products/wireless-power-modules",
  },
  {
    id: "integrated-boards",
    label: "Placas integradas",
    href: "/products/integrated-boards",
  },
  {
    id: "autonomous-software",
    label: "Software autónomo",
    href: "/products/autonomous-software",
  },
  {
    id: "docking",
    label: "Acoplamiento",
    href: "/products/docking",
  },
  {
    id: "consumer-oriented-products",
    label: "Productos orientados al consumidor",
    href: "/products/consumer-oriented-products",
  },
  {
    id: "ev-charging-gun",
    label: "Pistolas de carga EV",
    href: "/products/ev-charging-gun",
  },
] as const;

export function getProductTierFromHash(hash: string): ProductTierId | null {
  const id = hash.replace(/^#/, "");
  return productTiers.some((tier) => tier.id === id) ? (id as ProductTierId) : null;
}

export const productsPageMeta = {
  title: "Productos de Energía Inalámbrica",
  description:
    "Explore los productos de energía inalámbrica de SiCore Dynamics, de 60W a 3000W, para robótica, AGV, drones y sistemas de automatización industrial.",
};
