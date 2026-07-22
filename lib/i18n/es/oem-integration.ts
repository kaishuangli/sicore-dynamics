export const oemIntegrationPage = {
  eyebrow: "Integración OEM",
  title: "Integración OEM",
  subtitle: "Diseñado para Adaptarse a su Producto, No al Contrario.",
  description:
    "En lugar de exigir que los clientes rediseñen sus máquinas, SiCore desarrolla soluciones de carga que se integran de forma natural en productos existentes, estructuras mecánicas, arquitecturas eléctricas y plataformas de software. Desde el prototipo hasta la producción en masa, trabajamos junto a nuestros socios OEM para crear sistemas de carga que se sienten como una parte original de la máquina.",
  heroImage: "/images/oem-integration/hero.png",
  modulesEyebrow: "Módulos de Integración",
  modulesTitle: "Cómo SiCore se Integra en su Producto",
  modules: [
    {
      id: "mechanical-integration",
      number: "01",
      title: "Integración Mecánica",
      description:
        "Cada máquina tiene dimensiones, estructuras de montaje y entornos operativos diferentes. Personalizamos la ubicación de las bobinas, el diseño de la carcasa y las interfaces de montaje para lograr una integración perfecta sin comprometer la apariencia ni el rendimiento del producto.",
      image: "/images/oem-integration/mechanical-integration.png",
      imageAlt:
        "AGV con carrocería transparente que muestra la bobina receptora inalámbrica integrada y el transmisor de la estación de acoplamiento correspondiente",
      technologiesLabel: "Tecnologías Principales",
      technologies: ["Carcasa Personalizada", "Interfaz de Montaje", "Ubicación de Bobina"],
    },
    {
      id: "electrical-integration",
      number: "02",
      title: "Integración Eléctrica",
      description:
        "Los sistemas de carga están diseñados para funcionar con las baterías, fuentes de alimentación y arquitecturas eléctricas existentes, minimizando el esfuerzo de rediseño y manteniendo la seguridad y eficiencia del sistema.",
      image: "/images/oem-integration/electrical-integration.png",
      imageAlt:
        "Diagrama de arquitectura eléctrica que muestra la estación de acoplamiento, el BMS, el paquete de baterías y la distribución de energía del robot",
      technologiesLabel: "Tecnologías Principales",
      technologies: [
        "Compatibilidad con Baterías",
        "Distribución de Energía",
        "Diseño de Circuito de Protección",
      ],
    },
    {
      id: "software-communication",
      number: "03",
      title: "Software y Comunicación",
      description:
        "Nuestra plataforma de carga se comunica directamente con los controladores host mediante interfaces estándar de la industria, lo que permite una integración perfecta con los sistemas de control existentes y el software de gestión de flotas.",
      image: "/images/oem-integration/software-communication.png",
      imageAlt:
        "Diagrama de arquitectura de comunicación del robot que muestra la unidad de cómputo conectada a sensores, control de movimiento, BMS e IHM",
      technologiesLabel: "Tecnologías Principales",
      technologies: ["Bus CAN", "UART", "Ethernet", "Modbus", "Integración de API"],
    },
    {
      id: "system-customization",
      number: "04",
      title: "Personalización del Sistema",
      description:
        "Cada aplicación tiene requisitos de carga particulares. Adaptamos los niveles de potencia, las estrategias de carga, los métodos de acoplamiento y las configuraciones del sistema a las necesidades operativas específicas de cada cliente.",
      image: "/images/oem-integration/system-customization.png",
      imageAlt:
        "Configuración de carga inalámbrica personalizada con bobinas transmisora y receptora alineadas sobre una plataforma robótica móvil",
      technologiesLabel: "Tecnologías Principales",
      technologies: [
        "Escalado de Potencia",
        "Estrategia de Carga",
        "Personalización de la Estación de Acoplamiento",
      ],
    },
    {
      id: "prototype-to-production",
      number: "05",
      title: "Del Prototipo a la Producción",
      description:
        "Acompañamos a nuestros socios OEM durante todo el ciclo de vida del producto: desde la validación del concepto y las muestras de ingeniería hasta las soluciones listas para producción y el soporte de manufactura.",
      image: "/images/oem-integration/prototype-to-production.png",
      imageAlt:
        "Proceso del prototipo a la producción que abarca las etapas de ingeniería, cadena de suministro y manufactura",
      technologiesLabel: "Tecnologías Principales",
      technologies: ["Prototipado Rápido", "Validación de Diseño", "Soporte de Manufactura"],
    },
  ],
} as const;
