export const uavContactDock = {
  title: "Estación de Carga por Contacto",
  description:
    "Una solución de carga por contacto para flotas de drones autónomos que ofrece carga rápida de alta eficiencia y una operación autónoma confiable.",
  image: "/images/uav-contact-charging-hero.jpg",
  imageAlt: "Dron autónomo flotando sobre una estación de carga por contacto SiCore",
  features: [
    {
      title: "Aterrizaje de Precisión",
      description:
        "El aterrizaje con navegación RTK + IA logra una precisión de ±10–30 cm para un contacto confiable.",
    },
    {
      title: "Contacto Automático",
      description:
        "Los pines de contacto sólidos se activan automáticamente para una transmisión de energía confiable.",
    },
    {
      title: "Carga de Alta Potencia",
      description:
        "Carga de 800W–1500W con gestión y control de energía inteligente.",
    },
    {
      title: "Continuidad de Misión",
      description:
        "Rápido retorno entre misiones sin necesidad de cambio manual de batería.",
    },
  ],
  processTitle: "Proceso de Carga por Contacto",
  processSteps: [
    {
      label: "Retorno de Misión",
      detail: "Los drones regresan a la estación tras completar una misión o cuando la batería está baja.",
    },
    {
      label: "Aproximación de Precisión",
      detail: "El enfoque combinado de RTK y visión alinea al dron con la plataforma de la estación.",
    },
    {
      label: "Aterrizaje de Precisión",
      detail: "Una precisión de aterrizaje de ±10–30 cm garantiza una activación de contacto confiable.",
    },
    {
      label: "Activación del Contacto",
      detail: "Los mecanismos de enganche se bloquean para lograr una conexión de energía sólida de alta corriente.",
    },
    {
      label: "Carga de Alta Potencia",
      detail: "Carga DC rápida de 800–1500W con BMS inteligente y monitoreo de estado.",
    },
    {
      label: "Redespliegue de Misión",
      detail: "Tras la carga completa, el dron queda listo de inmediato para la siguiente misión.",
    },
  ],
  insideTitle: "Interior de la Estación de Carga por Contacto",
  insideImage: "/images/uav-contact-charging-dock.jpg",
  insideImageAlt: "Vista en corte de la estación de carga por contacto y despliegue en exteriores",
  insidePoints: [
    { label: "Plataforma de Aterrizaje", detail: "Superficie cuadrada robusta de 1200 mm para aterrizaje autónomo." },
    { label: "Electrónica de Potencia", detail: "Módulos de energía AC-DC integrados para carga rápida." },
    { label: "Electrónica de Control", detail: "MCU inteligente para comunicación y seguridad." },
    { label: "Gestión Térmica", detail: "Refrigeración por aire forzado para una operación continua de alta potencia." },
  ],
  specs: [
    { label: "Potencia Máxima", value: "800W–1500W" },
    { label: "Voltaje de Entrada", value: "85–264VAC, 50/60 Hz" },
    { label: "Voltaje de Salida", value: "40–60VDC (Configurable)" },
    { label: "Eficiencia", value: "> 96%" },
    { label: "Tiempo de Carga", value: "45–60 min (Típico 22Ah)" },
    { label: "Protección", value: "Sobretensión, OCP, OVP, OTP" },
    { label: "Grado IP", value: "IP55 / IP66" },
    { label: "Dimensiones", value: "1200 × 1200 × 250 mm" },
    { label: "Peso", value: "~110 kg" },
  ],
  interfaceTitle: "Detalle de la Interfaz de Contacto",
  basePlate: {
    title: "Placa Base (Alineación y Contacto)",
    points: [
      "Pines de contacto con resorte",
      "Amplia área de captura para tolerancia de aterrizaje",
      "Diseño exterior resistente a la intemperie",
      "Chapado en oro para transferencia de alta corriente",
    ],
  },
  droneSide: {
    title: "Lado del Dron (Interfaz de Carga)",
    points: [
      "Contactos de carga integrados",
      "Aerodinámico y liviano",
      "Conexión confiable bajo vibración",
      "Diseñado para una alta vida útil de ciclos",
    ],
  },
  comparisonTitle: "Tecnologías de Carga",
  wirelessLabel: "Carga Inalámbrica",
  contactLabel: "Carga por Contacto",
  wireless: [
    "Sin Contacto",
    "Totalmente Sellado",
    "Aterrizaje Flexible",
    "Bajo Mantenimiento",
    "Preparado para Exteriores",
  ],
  contact: [
    "Contacto Eléctrico Directo",
    "Capacidad de Alta Potencia",
    "Acoplamiento de Precisión",
    "Transferencia de Energía Rápida",
    "Arquitectura Comercial Comprobada",
  ],
  comparisonNote: [
    "Ambas arquitecturas de carga soportan operaciones autónomas de drones.",
    "SiCore Dynamics desarrolla e integra ambas tecnologías para adaptarse a distintos perfiles de misión y requerimientos de despliegue.",
  ],
} as const;
