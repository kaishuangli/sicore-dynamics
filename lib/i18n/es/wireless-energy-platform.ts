export const wirelessEnergyPlatformPage = {
  eyebrow: "Plataformas Tecnológicas",
  title: "Plataforma de Energía Inalámbrica",
  subtitle: "Visión General de la Arquitectura",
  description:
    "Tecnologías avanzadas de transferencia de energía inalámbrica diseñadas para una transmisión eficiente, confiable y escalable — desde la física fundamental hasta sistemas listos para producción.",
  concept: {
    eyebrow: "Concepto de Transferencia de Energía",
    title: "Del transmisor al dispositivo — sin cables.",
    steps: [
      { label: "Transmisor (TX)", detail: "La electrónica de potencia y la bobina TX generan el campo de energía." },
      { label: "Transferencia de Energía Inalámbrica", detail: "La energía cruza el entrehierro mediante acoplamiento magnético." },
      { label: "Receptor (RX)", detail: "La bobina RX capta la energía y la convierte para la carga." },
      { label: "Energía al Dispositivo", detail: "Alimentación de CC estable entregada a la batería o a los sistemas de la máquina." },
    ],
  },
  physicsLayer: {
    eyebrow: "Capa de Física",
    title: "Física de la Transferencia de Energía Inalámbrica",
    description:
      "La Capa de Física define los principios fundamentales de la transferencia de energía inalámbrica. Establece cómo se desplaza la energía a través del espacio mediante campos electromagnéticos y acoplamiento resonante — permitiendo una entrega de energía eficiente y sin contacto para sistemas inteligentes de próxima generación.",
    heroImage: "/images/physics-layer/physics-hero.png",
    mechanismsEyebrow: "Mecanismos de Transferencia",
    mechanismsTitle: "Cuatro Mecanismos Fundamentales de Transferencia",
    mechanismsIntro:
      "La transferencia de energía inalámbrica se basa en distintos mecanismos físicos. SiCore Dynamics investiga y desarrolla múltiples tecnologías de transferencia de energía para adaptarse a diferentes niveles de potencia, condiciones de operación y escenarios de aplicación.",
    mechanisms: [
      {
        id: "resonant-inductive",
        number: "01",
        title: "Acoplamiento Inductivo Resonante",
        image: "/images/physics-layer/resonant-inductive-v2.png",
        description:
          "La solución estándar de la industria para transferencia de energía de alta eficiencia a corto alcance. Ampliamente adoptada en la carga Qi y en sistemas de acoplamiento industrial.",
        applications: [
          { label: "Carga de Consumo", icon: "wireless" },
          { label: "Robots de Servicio", icon: "station" },
          { label: "AGV / AMR", icon: "coil" },
          { label: "Dispositivos Médicos", icon: "shield" },
        ],
        research: [
          "Diseño de Resonancia de Bobina",
          "Red de Compensación Resonante",
          "Resonador de Alta Q",
          "Optimización de Acoplamiento",
          "Tolerancia a Desalineación",
          "Detección de Objetos Extraños",
        ],
      },
      {
        id: "magnetic-resonance",
        number: "02",
        title: "Acoplamiento por Resonancia Magnética",
        image: "/images/physics-layer/magnetic-resonance-v2.png",
        description:
          "Permite un mayor entrehierro y una alineación más flexible en comparación con el acoplamiento inductivo convencional — ideal para sistemas autónomos.",
        applications: [
          { label: "Robots Autónomos", icon: "station" },
          { label: "Drones", icon: "wireless" },
          { label: "Automatización Industrial", icon: "power" },
          { label: "Robots Logísticos", icon: "coil" },
        ],
        research: [
          "Diseño de Entrehierro Largo",
          "Resonador de Alto Acoplamiento",
          "Red Multi-Resonador",
          "Distribución del Campo Magnético",
          "Estabilidad de Frecuencia Resonante",
          "Tolerancia a Grandes Desplazamientos",
          "Escalabilidad de Potencia",
        ],
      },
      {
        id: "capacitive",
        number: "03",
        title: "Energía Inalámbrica Capacitiva",
        image: "/images/physics-layer/capacitive-v2.png",
        description:
          "Transfiere energía mediante campos eléctricos en lugar de campos magnéticos — ventajosa en entornos ricos en metal o con espacio restringido.",
        applications: [
          { label: "Entornos con Alto Contenido Metálico", icon: "emc" },
          { label: "Dispositivos Biomédicos", icon: "shield" },
          { label: "Estructuras Delgadas", icon: "chip" },
          { label: "Equipos de Semiconductores", icon: "firmware" },
        ],
        research: [
          "Acoplamiento por Campo Eléctrico",
          "Diseño de Estructura de Placas",
          "Operación en Alta Frecuencia",
          "Optimización Dieléctrica",
          "Apantallamiento del Campo Eléctrico",
          "Aislamiento de Alta Tensión",
          "Optimización de Seguridad",
        ],
        deepDive: {
          title: "Transferencia de Energía Inalámbrica Basada en Campo Eléctrico",
          paragraphs: [
            "La Transferencia de Energía Inalámbrica Capacitiva (CWPT) transfiere energía mediante campos eléctricos de alta frecuencia en lugar de campos magnéticos. En lugar de utilizar bobinas y flujo magnético, emplea electrodos conductores emparejados para formar una ruta de acoplamiento capacitivo, permitiendo la entrega de energía sin contacto a través de un pequeño entrehierro.",
            "Su estructura ultradelgada, baja interferencia magnética y compatibilidad con entornos ricos en metal hacen de la CWPT una solución prometedora para electrónica compacta, dispositivos médicos, sistemas rotativos y aplicaciones embebidas de próxima generación donde la carga inductiva convencional puede no ser ideal.",
          ],
          images: [
            {
              src: "/images/physics-layer/capacitive-electric-field-cycle.png",
              alt: "Ciclo de transferencia de energía inalámbrica capacitiva mediante campos eléctricos de alta frecuencia entre electrodos transmisores y receptores",
            },
          ],
        },
      },
      {
        id: "dynamic",
        number: "04",
        title: "Energía Inalámbrica Dinámica",
        image: "/images/physics-layer/dynamic-v2.png",
        description:
          "Entrega energía de forma continua mientras las máquinas están en movimiento — eliminando la necesidad de detenerse para cargar.",
        applications: [
          { label: "AGV / AMR", icon: "coil" },
          { label: "Robots de Almacén", icon: "station" },
          { label: "Sistemas de Transporte", icon: "power" },
          { label: "Automatización de Fábricas", icon: "ai" },
        ],
        research: [
          "Transferencia de Energía Continua",
          "Transmisores Segmentados",
          "Seguimiento de Posición",
          "Conmutación Dinámica de Bobinas",
          "Traspaso de Potencia",
          "Sincronización de Movimiento",
          "Regulación de Potencia en Tiempo Real",
        ],
        deepDive: {
          title: "Energía en Movimiento",
          paragraphs: [
            "La Transferencia de Energía Inalámbrica Dinámica (DWPT) permite la entrega continua de energía a vehículos y sistemas robóticos en movimiento sin necesidad de detenerse para cargar. Al activar dinámicamente segmentos de potencia o rastrear la posición del receptor en tiempo real, el sistema mantiene una transferencia de energía inalámbrica eficiente durante todo el proceso de desplazamiento.",
            "Esta tecnología está diseñada para robots móviles autónomos (AMR), AGV, sistemas de transporte y automatización industrial, permitiendo una operación ininterrumpida, mayor productividad y menor tiempo de inactividad en instalaciones inteligentes de próxima generación.",
          ],
          images: [
            {
              src: "/images/physics-layer/dynamic-warehouse-track.png",
              alt: "Almacén inteligente con vía de carga inalámbrica que alimenta robots logísticos móviles en movimiento",
            },
            {
              src: "/images/physics-layer/dynamic-power-principle-v2.png",
              alt: "Principio de transferencia de energía inalámbrica dinámica que muestra el campo magnético, el receptor captador y los cables de transmisión en cascada",
              figureExplanation: {
                title: "Explicación de la Figura",
                items: [
                  {
                    label: "(a) Visión General del Sistema",
                    text: "El robot móvil porta una bobina receptora mientras el transmisor está embebido debajo de la trayectoria de desplazamiento. La corriente alterna de alta frecuencia que fluye por el transmisor genera un campo magnético, que induce corriente eléctrica en la bobina receptora a medida que el robot se mueve sobre ella.",
                  },
                  {
                    label: "(b) Conductor de Transmisión Único",
                    text: "Un único conductor de transmisión crea un campo magnético alterno alrededor del cable. A medida que el receptor pasa a través de este campo, se induce energía eléctrica en la bobina captadora. Esta configuración es simple pero ofrece una cobertura magnética relativamente limitada.",
                  },
                  {
                    label: "(c) Conductores de Transmisión en Cascada",
                    text: "Se disponen múltiples conductores de transmisión en paralelo para crear un campo magnético más amplio y uniforme. El campo magnético combinado mejora la estabilidad del acoplamiento, extiende la región de carga efectiva y permite una transferencia de energía inalámbrica más confiable para vehículos en movimiento continuo.",
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  magneticLayer: {
    eyebrow: "Capa Magnética",
    title: "Ingeniería Magnética",
    subtitle: "Diseñando la ruta magnética detrás de la energía inalámbrica eficiente.",
    description:
      "Nuestra plataforma magnética maximiza la eficiencia de acoplamiento, moldea el flujo con precisión y minimiza las fugas — entregando energía inalámbrica estable ante variaciones reales de alineación y entrehierro.",
    heroImage: "/images/magnetic-layer/magnetic-hero-v2.png",
    capabilitiesEyebrow: "Nuestras Capacidades",
    capabilitiesTitle: "Cinco Pilares de la Excelencia Magnética",
    pillars: [
      {
        id: "coil-engineering",
        number: "01",
        title: "Ingeniería de Bobinas",
        image: "/images/magnetic-layer/coil-engineering.png",
        description:
          "Geometrías de bobinas TX/RX diseñadas para los requisitos de potencia, frecuencia y entrehierro objetivo.",
        points: ["Topologías de Bobina", "Materiales de Bobina", "Optimización de Bobina"],
      },
      {
        id: "magnetic-structure",
        number: "02",
        title: "Estructura Magnética",
        image: "/images/magnetic-layer/magnetic-structure.png",
        description:
          "Estructuras de ferrita y apantallamiento que guían el flujo, reducen pérdidas y protegen los sistemas circundantes.",
        points: ["Diseño de Ferrita", "Apantallamiento Magnético", "Guía de Flujo"],
      },
      {
        id: "coupling-engineering",
        number: "03",
        title: "Ingeniería de Acoplamiento",
        image: "/images/magnetic-layer/coupling-engineering.png",
        description:
          "Conformación del campo para mayor acoplamiento, transferencia más limpia y mejor densidad de potencia.",
        points: ["Eficiencia de Acoplamiento", "Optimización del Entrehierro", "Densidad de Potencia"],
      },
      {
        id: "misalignment",
        number: "04",
        title: "Ingeniería de Desalineación",
        image: "/images/magnetic-layer/misalignment.png",
        description:
          "Diseño de tolerancia para que la variación de posición y ángulo en el acoplamiento no interrumpa la carga.",
        points: ["Desplazamiento X/Y", "Distancia Z", "Tolerancia Angular"],
      },
      {
        id: "simulation",
        number: "05",
        title: "Simulación Magnética",
        image: "/images/magnetic-layer/simulation.png",
        description:
          "Simulación electromagnética que valida la distribución del flujo antes de construir el hardware.",
        points: ["Distribución de Flujo", "ANSYS Maxwell", "JMAG"],
      },
    ],
  },
  powerLayer: {
    eyebrow: "Capa de Potencia",
    heroLabel: "Electrónica de Potencia",
    title: "Arquitectura de Conversión de Potencia de Alta Eficiencia",
    description:
      "Una ruta de potencia completa desde la entrada de CC hasta la salida regulada — diseñada para eficiencia de conversión, estabilidad térmica, confiabilidad y sistemas de energía inalámbrica escalables.",
    heroImage: "/images/power-layer/power-hero-v3.png",
    highlights: [
      { label: "Alta Eficiencia", icon: "bolt" },
      { label: "Alta Confiabilidad", icon: "shield" },
      { label: "Excelente Desempeño Térmico", icon: "thermal" },
      { label: "Amplio Rango de Potencia", icon: "power" },
    ],
    modules: [
      {
        id: "inverter",
        number: "01",
        title: "Inversor",
        summary: "Genera energía de CA de alta frecuencia a partir de la entrada de CC para excitar el enlace de transferencia de energía inalámbrica.",
        detail:
          "El inversor convierte la entrada de CC en energía de CA de alta frecuencia, proporcionando la excitación necesaria para una transferencia de energía inalámbrica eficiente. Se seleccionan distintas topologías de inversor según el nivel de potencia, la eficiencia, la frecuencia de conmutación y la arquitectura del sistema.",
        image: "/images/power-layer/module-inverter.png",
        checks: ["Medio Puente", "Puente Completo", "LLC", "Desfase de Fase"],
      },
      {
        id: "matching-network",
        number: "02",
        title: "Red de Adaptación",
        summary: "Sintoniza el transmisor y el receptor en resonancia para maximizar la eficiencia de transferencia.",
        detail:
          "La red de adaptación sintoniza el transmisor y el receptor en resonancia, minimizando la potencia reactiva y maximizando la eficiencia de transferencia. Se seleccionan distintas topologías de compensación según el nivel de potencia, las condiciones de acoplamiento y los requisitos de la aplicación.",
        image: "/images/power-layer/module-matching-network.png",
        checks: ["Serie", "Paralelo", "LCC", "LCL", "CLC"],
      },
      {
        id: "rectifier",
        number: "03",
        title: "Rectificador",
        summary: "Convierte la energía de CA de alta frecuencia recibida en salida de CC utilizable.",
        detail:
          "El rectificador convierte la energía de CA de alta frecuencia recibida en energía de CC utilizable. Las tecnologías de rectificación avanzadas mejoran la eficiencia de conversión mientras reducen las pérdidas por conducción y la generación de calor.",
        image: "/images/power-layer/module-rectifier.png",
        checks: ["Rectificador de Diodos", "Rectificador Sincrónico", "Rectificador Activo"],
      },
      {
        id: "dc-dc",
        number: "04",
        title: "DC/DC",
        summary: "Regula el voltaje rectificado para la carga de baterías o la alimentación del sistema.",
        detail:
          "La etapa DC/DC regula el voltaje rectificado al nivel de salida requerido para la carga de baterías o la alimentación del sistema. Distintas topologías de convertidor ofrecen una conversión de voltaje flexible para diversas aplicaciones.",
        image: "/images/power-layer/module-dc-dc.png",
        checks: ["Reductor (Buck)", "Elevador (Boost)", "Buck-Boost"],
      },
      {
        id: "high-frequency-power",
        number: "05",
        title: "Potencia de Alta Frecuencia",
        summary: "Permite conmutación de alta eficiencia con dispositivos de potencia de banda ancha prohibida.",
        detail:
          "Los dispositivos de potencia de alta frecuencia determinan el rendimiento de conmutación, la eficiencia, el comportamiento térmico y la densidad de potencia del sistema de energía inalámbrica. Las tecnologías de semiconductores de banda ancha prohibida permiten frecuencias de conmutación más altas y diseños de sistema más compactos.",
        image: "/images/power-layer/module-hf-devices.png",
        checks: ["MOSFET", "GaN", "SiC"],
      },
    ],
  },
  controlLayer: {
    eyebrow: "Capa de Control",
    heroLabel: "Control Inteligente",
    title: "Control en Tiempo Real para Energía Inalámbrica Segura y Eficiente",
    description:
      "Una arquitectura de control en lazo cerrado que detecta, decide y protege a lo largo del enlace TX/RX — manteniendo la resonancia sincronizada, la potencia estable y la operación segura ante cambios de carga y alineación.",
    heroImage: "/images/control-layer/control-hero.png",
    highlights: [
      { label: "Control en Tiempo Real", icon: "chip" },
      { label: "Regulación Adaptativa", icon: "ai" },
      { label: "Protección de Seguridad", icon: "shield" },
      { label: "Comunicación del Sistema", icon: "comm" },
    ],
    featuresEyebrow: "Capacidades de Control Inteligente",
    featuresTitle: "Funciones de Control Inteligente",
    features: [
      {
        id: "frequency-tracking",
        number: "01",
        title: "Seguimiento de Frecuencia",
        description:
          "Rastrea y sincroniza continuamente la frecuencia de resonancia óptima para maximizar la eficiencia de transferencia de energía.",
        visual: "frequency",
        points: ["Barrido Automático de Frecuencia", "Detección de Resonancia", "Seguimiento en Tiempo Real"],
      },
      {
        id: "power-regulation",
        number: "02",
        title: "Regulación de Potencia",
        description:
          "Soporta modos de potencia constante, voltaje constante y corriente constante para satisfacer diferentes necesidades de carga.",
        visual: "regulation",
        points: ["Potencia Constante (CP)", "Voltaje Constante (CV)", "Corriente Constante (CC)"],
      },
      {
        id: "coil-detection",
        number: "03",
        title: "Detección de Bobina",
        description:
          "Detecta si hay un receptor presente y evalúa su estado para garantizar una operación segura y eficiente.",
        visual: "coil-detect",
        points: ["Detección de Presencia del Receptor", "Monitoreo de Calidad del Enlace", "Indicación de Fallas"],
      },
      {
        id: "fod",
        number: "04",
        title: "Detección de Objetos Extraños (FOD)",
        description:
          "Identifica objetos metálicos extraños en la superficie de carga para prevenir el calentamiento y garantizar la seguridad del usuario.",
        visual: "fod",
        points: ["Detección de Objetos Metálicos", "Reducción de Potencia", "Apagado por Seguridad"],
      },
      {
        id: "thermal-protection",
        number: "05",
        title: "Protección Térmica",
        description:
          "Monitorea en tiempo real la temperatura de los componentes clave para prevenir el sobrecalentamiento y proteger el sistema.",
        visual: "thermal",
        points: ["Monitoreo de Temperatura", "Protección contra Sobretemperatura", "Ventilador Inteligente / Reducción de Potencia"],
      },
      {
        id: "adaptive-charging",
        number: "06",
        title: "Carga Adaptativa",
        description:
          "Ajusta dinámicamente la estrategia de control y la potencia de salida en función de los cambios de carga y las condiciones del sistema.",
        visual: "adaptive",
        points: ["Monitoreo de Carga", "Ajuste Dinámico de Potencia", "Optimización de Eficiencia"],
      },
      {
        id: "multi-coil",
        number: "07",
        title: "Control Multi-Bobina",
        description:
          "Conmuta y coordina de forma inteligente múltiples bobinas transmisoras para lograr una cobertura de potencia continua y eficiente.",
        visual: "multi-coil",
        points: ["Selección de Bobina", "Conmutación Automática", "Balanceo de Potencia"],
      },
      {
        id: "communication",
        number: "08",
        title: "Comunicación",
        description:
          "Proporciona comunicación confiable entre el transmisor, el receptor, la batería y los sistemas host.",
        visual: "communication",
        points: ["Protocolo Qi", "Bus CAN", "UART", "BLE"],
      },
    ],
  },
  layers: [
    {
      id: "physics",
      name: "Capa de Física",
      description: "Define los principios fundamentales de la transferencia de energía inalámbrica.",
      accent: "#2563EB",
      items: [
        { title: "Resonancia", text: "Fundamentos de acoplamiento resonante para una transferencia eficiente de campo cercano." },
        { title: "Resonancia Magnética", text: "Resonancia magnética sintonizada para una entrega de energía robusta." },
        { title: "WPT Dinámico", text: "Soporte para escenarios de carga tolerantes al movimiento y de oportunidad." },
        { title: "WPT Capacitivo", text: "Enfoques capacitivos complementarios cuando las aplicaciones lo requieren." },
      ],
    },
    {
      id: "magnetic",
      name: "Capa Magnética",
      description: "Optimiza el acoplamiento magnético para máxima eficiencia y tolerancia.",
      accent: "#0F766E",
      items: [
        { title: "Diseño de Bobina", text: "Geometrías de bobinas TX/RX diseñadas para la potencia y el entrehierro objetivo." },
        { title: "Diseño de Ferrita", text: "Materiales magnéticos moldeados para guiar el flujo y reducir pérdidas." },
        { title: "Optimización de Flujo", text: "Conformación del campo para mayor acoplamiento y transferencia más limpia." },
        { title: "Desalineación", text: "Diseño de tolerancia para que la variación del acoplamiento no interrumpa la carga." },
        { title: "Apantallamiento", text: "Estrategias de contención que protegen los sistemas circundantes." },
      ],
    },
    {
      id: "power",
      name: "Capa de Potencia",
      description: "Entrega conversión y transferencia de energía de alta eficiencia a alta frecuencia.",
      accent: "#C2410C",
      flow: ["Inversor", "Red de Adaptación", "Transferencia Inalámbrica", "Rectificador", "DC/DC", "Potencia de Alta Frecuencia"],
      items: [
        { title: "Conversión de Alta Frecuencia", text: "Inversión y rectificación eficientes a lo largo del enlace inalámbrico." },
        { title: "Red de Adaptación", text: "Adaptación de impedancia que mantiene la transferencia eficiente ante cambios de carga." },
        { title: "Etapa DC/DC", text: "Salida regulada por etapas según los requisitos de batería y sistema." },
      ],
    },
    {
      id: "control",
      name: "Capa de Control",
      description: "Control inteligente y protección para una energía inalámbrica segura, adaptativa y eficiente.",
      accent: "#1D4ED8",
      items: [
        { title: "Seguimiento de Frecuencia", text: "Rastrea las condiciones de resonancia a medida que cambian el acoplamiento y la carga." },
        { title: "Control Adaptativo", text: "Ajusta la entrega de potencia para mejorar el rendimiento y la estabilidad." },
        { title: "FOD", text: "Detección de objetos extraños para entornos de carga más seguros." },
        { title: "Comunicación", text: "Coordinación TX/RX para negociación, monitoreo y control." },
        { title: "Control Multi-Bobina", text: "Gestiona arreglos multi-bobina para cobertura y selectividad." },
      ],
    },
    {
      id: "system",
      name: "Capa de Sistema",
      description: "Garantiza confiabilidad, seguridad, compatibilidad y excelencia productiva.",
      accent: "#0F172A",
      items: [
        {
          id: "system-emc",
          title: "EMC",
          text: "Compatibilidad electromagnética para entornos industriales y regulados.",
        },
        {
          id: "system-thermal",
          title: "Térmico",
          text: "Diseño térmico que sostiene ciclos de trabajo continuos.",
        },
        {
          id: "system-reliability",
          title: "Confiabilidad",
          text: "Decisiones de arquitectura que perduran a lo largo de una vida operativa prolongada.",
        },
        {
          id: "system-mechanical",
          title: "Mecánico",
          text: "Integración mecánica para bases de acoplamiento, carcasas y plataformas.",
        },
        {
          id: "system-safety",
          title: "Seguridad",
          text: "Protección y comportamiento a prueba de fallos incorporados en toda la arquitectura.",
        },
        {
          id: "system-manufacturability",
          title: "Manufacturabilidad",
          text: "Diseño listo para producción en cuanto a escala, rendimiento y consistencia.",
        },
      ],
    },
  ],
  outcomes: [
    {
      title: "Alta Eficiencia",
      text: "Transferencia optimizada a través de la física, el magnetismo y la conversión de potencia.",
    },
    {
      title: "Potencia Estable",
      text: "Entrega consistente ante variaciones de alineación, carga y condiciones ambientales.",
    },
    {
      title: "Segura y Confiable",
      text: "Control, protección y diseño de sistema construidos para una operación continua.",
    },
    {
      title: "Plataforma Escalable",
      text: "Una arquitectura por capas que crece desde módulos hasta plataformas completas.",
    },
    {
      title: "Amplias Aplicaciones",
      text: "Lista para robótica, automatización, medicina, agricultura y sistemas autónomos.",
    },
  ],
} as const;
