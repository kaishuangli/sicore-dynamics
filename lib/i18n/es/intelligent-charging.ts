export const intelligentChargingPage = {
  eyebrow: "Sistemas de Carga Inteligente",
  title: "Carga Más Inteligente. Mayor Disponibilidad.",
  description:
    "Los sistemas de carga inteligente de SiCore coordinan baterías, estaciones de carga, equipos móviles y operaciones a nivel de flota mediante algoritmos de carga adaptativa e inteligencia de sistema en tiempo real.",
  supporting:
    "Desde una sola máquina autónoma hasta toda una flota robótica, la plataforma ayuda a ofrecer una carga segura, eficiente y continuamente optimizada.",
  heroImage: "/images/intelligent-charging/ics-hero-fleet.png",
  highlights: [
    { label: "Carga Adaptativa", icon: "ai" },
    { label: "Sensible a la Batería", icon: "power" },
    { label: "Coordinación de Flotas", icon: "station" },
    { label: "Diagnóstico en Tiempo Real", icon: "chip" },
  ],
  fleetStats: [
    { label: "En línea", value: "18" },
    { label: "Cargando", value: "7" },
    { label: "Listo", value: "9" },
    { label: "Falla", value: "1" },
  ],
  fleetAvailability: "85%",
  workflowEyebrow: "Flujo de Trabajo de Carga Inteligente",
  workflowTitle: "Del estado de la batería a la optimización a nivel de flota.",
  workflow: [
    {
      label: "Estado de la Batería",
      detail: "Monitorea el SOC, el voltaje, la temperatura y la condición de la batería.",
      icon: "power",
    },
    {
      label: "Decisión de Carga",
      detail: "Evalúa la demanda, la prioridad y la disponibilidad de estaciones.",
      icon: "ai",
    },
    {
      label: "Potencia y Perfil de Carga",
      detail: "Selecciona la estrategia de carga óptima para la misión.",
      icon: "coil",
    },
    {
      label: "Ejecución de la Carga",
      detail: "Suministra energía de forma segura dentro de límites controlados.",
      icon: "bolt",
    },
    {
      label: "Monitoreo y Diagnóstico",
      detail: "Da seguimiento al rendimiento y detecta fallas en tiempo real.",
      icon: "chip",
    },
    {
      label: "Optimización de Flota",
      detail: "Optimiza horarios, colas y demanda de energía.",
      icon: "station",
    },
  ],
  modules: [
    {
      id: "charging-algorithms",
      number: "01",
      title: "Algoritmos de Carga",
      subtitle: "Carga Optimizada para Cada Batería y Misión",
      description:
        "Los algoritmos de carga determinan cómo se suministra la energía a lo largo del ciclo de carga. El sistema ajusta dinámicamente el voltaje, la corriente, la potencia y la duración de la carga según la condición de la batería, los requisitos operativos y el tiempo de carga disponible.",
      detail:
        "En lugar de aplicar un perfil de carga fijo, la plataforma admite estrategias adaptativas que equilibran la velocidad de carga, la salud de la batería, la seguridad y la disponibilidad del equipo.",
      visual: "algorithms",
      technologies: [
        "Carga CC / CV / CP",
        "Carga Multietapa",
        "Perfiles de Carga Adaptativos",
        "Carga por Oportunidad",
      ],
    },
    {
      id: "battery-management",
      number: "02",
      title: "Gestión de Baterías",
      subtitle: "Carga y Protección Sensibles a la Batería",
      description:
        "La gestión de baterías conecta las decisiones de carga con la condición real de la batería. El sistema monitorea el voltaje, la corriente, la temperatura, el estado de carga y el estado de la batería para mantener el suministro de energía dentro de límites de operación seguros.",
      detail:
        "Al utilizar la retroalimentación de la batería en tiempo real, el comportamiento de carga puede ajustarse para reducir el estrés, prevenir el sobrecalentamiento y favorecer una mayor vida útil de la batería.",
      visual: "battery",
      technologies: [
        "Monitoreo de SOC / SOH",
        "Monitoreo de Voltaje y Corriente",
        "Monitoreo de Temperatura",
        "Protección de la Batería",
      ],
    },
    {
      id: "charging-scheduling",
      number: "03",
      title: "Programación de Carga",
      subtitle: "Carga Coordinada en Múltiples Máquinas",
      description:
        "La programación de carga coordina la demanda de carga entre múltiples robots, vehículos y estaciones según el nivel de batería, la prioridad de la tarea, la disponibilidad de estaciones y los horarios operativos.",
      detail:
        "Esto ayuda a reducir la congestión en la carga, evitar tiempos de inactividad innecesarios y mejorar la utilización general de la flota.",
      visual: "fleet",
      technologies: [
        "Gestión de Colas",
        "Asignación de Estaciones",
        "Programación Basada en Prioridad",
        "Equilibrio de Energía",
      ],
    },
    {
      id: "communication",
      number: "04",
      title: "Comunicación",
      subtitle: "Carga Conectada en Todo el Sistema",
      description:
        "Una comunicación confiable permite que el cargador, la batería, el robot, el controlador principal y el sistema de gestión de flotas intercambien datos operativos y comandos de carga.",
      detail:
        "La capa de comunicación permite la identificación, autorización, configuración de parámetros, reporte de estado y control coordinado entre dispositivos y plataformas.",
      visual: "communication",
      technologies: ["CAN", "UART", "RS-485", "Ethernet", "BLE", "Modbus", "Interfaces OEM"],
    },
    {
      id: "diagnostics",
      number: "05",
      title: "Diagnóstico",
      subtitle: "Visibilidad en Tiempo Real del Rendimiento de Carga",
      description:
        "El diagnóstico monitorea continuamente el comportamiento de carga, el estado del sistema, las condiciones operativas y los eventos de falla para ayudar a identificar anomalías y reducir el tiempo de servicio.",
      detail:
        "Los datos operativos históricos también respaldan el mantenimiento preventivo, el análisis de rendimiento y la futura optimización de la carga.",
      visual: "diagnostics",
      technologies: [
        "Detección de Fallas",
        "Registro de Eventos",
        "Diagnóstico Remoto",
        "Mantenimiento Predictivo",
      ],
    },
  ],
  benefitsEyebrow: "Beneficios de la Carga Inteligente",
  benefits: [
    {
      title: "Carga Más Segura",
      text: "Control sensible a la batería y protección continua del sistema.",
      icon: "shield",
    },
    {
      title: "Mayor Vida Útil de la Batería",
      text: "La carga adaptativa reduce el estrés eléctrico y térmico innecesario.",
      icon: "power",
    },
    {
      title: "Mayor Disponibilidad de Flota",
      text: "Las máquinas reciben energía según la prioridad y la demanda de la misión.",
      icon: "station",
    },
    {
      title: "Menor Tiempo de Inactividad",
      text: "El diagnóstico en tiempo real y la programación coordinada mantienen los equipos en servicio.",
      icon: "chip",
    },
    {
      title: "Menor Costo Total",
      text: "Una mejor utilización y menos interrupciones reducen el costo operativo a lo largo del tiempo.",
      icon: "bolt",
    },
  ],
  ctaTitle: "Inteligente. Adaptativa. Confiable.",
  ctaText:
    "Construya un sistema de carga que mantenga productivas a las máquinas autónomas, desde el control sensible a la batería hasta la coordinación a nivel de flota.",
  ctaLabel: "Contacte a Nuestros Ingenieros",
} as const;
