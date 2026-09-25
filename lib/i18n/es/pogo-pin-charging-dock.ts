import { pogoPinChargingDockPage as pageEn } from "@/lib/pogo-pin-charging-dock";

export const pogoPinChargingDockPage = {
  ...pageEn,
  title: "Muelle compacto de carga Pogo Pin",
  tagline: "Energía fiable. Huella mínima.",
  description:
    "Un muelle de carga compacto con pines pogo de resorte, diseñado para dispositivos médicos de mano, escáneres e instrumentos portátiles.",
  heroImageAlt: "Muelle de carga compacto SC-PD10 con pines pogo",
  highlights: [
    { title: "Pogo Pin", text: "Conexión fiable", icon: "pin" as const },
    { title: "Carga segura", text: "Protección contra sobrecorriente", icon: "safe" as const },
    { title: "Diseño compacto", text: "Huella reducida", icon: "compact" as const },
    { title: "USB Type-C", text: "Alimentación sencilla", icon: "usb" as const },
  ],
  performance: {
    ...pageEn.performance,
    title: "Tamaño reducido. Gran rendimiento.",
    body: "Diseñado para el uso diario en entornos médicos e industriales donde importan el espacio, la fiabilidad y la higiene.",
    imageAlt: "Instrumento de mano colocado en el muelle de carga SC-PD10",
    points: [
      "Los pines pogo de resorte aseguran un contacto eléctrico estable.",
      "Protección contra sobrecorriente, sobretensión y cortocircuito.",
      "Carcasa ABS duradera con base antideslizante.",
    ],
  },
  devices: {
    title: "Diseñado para dispositivos de mano",
    intro: "Solución de carga ideal para una amplia gama de equipos portátiles.",
    moreLabel: "Y más",
    items: [
      { ...pageEn.devices.items[0], title: "Termómetros médicos", imageAlt: "Termómetro médico cargando en el SC-PD10" },
      { ...pageEn.devices.items[1], title: "Escáneres de código de barras", imageAlt: "Escáner cargando en el SC-PD10" },
      { ...pageEn.devices.items[2], title: "Instrumentos portátiles", imageAlt: "Instrumento portátil cargando en el SC-PD10" },
      { ...pageEn.devices.items[3], title: "Terminales de datos móviles", imageAlt: "Terminal móvil cargando en el SC-PD10" },
    ],
  },
  specsTitle: "Especificaciones",
  specs: [
    { label: "Entrada", value: "5V⎓2A (USB Type-C)", icon: "power" as const },
    { label: "Salida", value: "5V⎓2A (Pogo Pin)", icon: "output" as const },
    { label: "Resistencia de contacto", value: "≤ 30 mΩ", icon: "gauge" as const },
    { label: "Temp. de operación", value: "-20°C ~ 60°C", icon: "temp" as const },
    { label: "Protección", value: "Sobrecorriente / Sobretensión / Cortocircuito", icon: "safe" as const },
    { label: "Vida mecánica", value: "≥ 50.000 ciclos", icon: "life" as const },
  ],
  dimensionsTitle: "Dimensiones",
  dimensions: [
    { ...pageEn.dimensions[0], label: "Vista frontal" },
    { ...pageEn.dimensions[1], label: "Vista lateral" },
    { ...pageEn.dimensions[2], label: "Vista posterior" },
    { ...pageEn.dimensions[3], label: "Vista superior" },
    { ...pageEn.dimensions[4], label: "Vista inferior" },
  ],
  applicationsTitle: "Aplicaciones",
  applications: [
    { ...pageEn.applications[0], title: "Hospitales y clínicas", imageAlt: "Sala de exploración hospitalaria" },
    { ...pageEn.applications[1], title: "Laboratorios", imageAlt: "Técnico de laboratorio" },
    { ...pageEn.applications[2], title: "Farmacias", imageAlt: "Farmacéutico revisando medicamentos" },
    { ...pageEn.applications[3], title: "Almacén y logística", imageAlt: "Pasillo de almacén" },
    { ...pageEn.applications[4], title: "Servicios de campo", imageAlt: "Técnicos en sitio" },
  ],
  cta: {
    title: "Carga fiable. Siempre.",
    description:
      "El muelle de carga SC-PD10 ofrece energía estable en un formato compacto, ideal para aplicaciones sanitarias, industriales y móviles.",
    button: "Contáctanos",
  },
} as const;
