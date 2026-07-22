export const plugFreeDockingPage = {
  eyebrow: "Tecnología de Acoplamiento Sin Conectores",
  title: "Tecnología de Acoplamiento Sin Conectores",
  subtitle: "Acoplamiento Perfecto Sin Conexión Manual",
  description:
    "La tecnología de acoplamiento sin conectores de SiCore permite que las máquinas autónomas se carguen sin cables ni conectores manuales — mediante mecánica de acoplamiento de precisión, interfaces de contacto o inalámbricas, detección de posición y confiabilidad lista para exteriores.",
  heroImage: "/images/plug-free-docking/hero.png",
  dockMechanics: {
    id: "dock-mechanics",
    number: "01",
    eyebrow: "Mecánica de Acoplamiento",
    title: "El Acoplamiento de Precisión Comienza con el Diseño Mecánico",
    description:
      "La Mecánica de Acoplamiento define cómo un robot se alinea y asegura físicamente antes de que comience la transferencia de energía. Una interfaz mecánica bien diseñada ofrece alta repetibilidad en entornos industriales reales.",
    heroImage: "/images/plug-free-docking/dock-mechanics-hero.png",
    highlights: [
      { label: "Alta Repetibilidad", text: "Rendimiento de acoplamiento consistente", icon: "coil" },
      { label: "Diseño Robusto", text: "Construido para entornos industriales", icon: "shield" },
      { label: "Autónomo", text: "No requiere intervención humana", icon: "ai" },
      { label: "Alta Tolerancia", text: "Maneja la variación de posicionamiento del mundo real", icon: "station" },
    ],
    processEyebrow: "Visión General del Proceso de Acoplamiento",
    processTitle: "Desde la Aproximación hasta la Carga",
    process: [
      { label: "Aproximación", detail: "El robot navega hacia el área de acoplamiento" },
      { label: "Autoguiado", detail: "Las guías mecánicas dirigen al robot" },
      { label: "Alineación", detail: "Se logra la alineación de precisión" },
      { label: "Bloqueo y Fijación", detail: "El bloqueo mecánico se activa si es necesario" },
      { label: "Energía Lista", detail: "La interfaz de potencia queda conectada" },
      { label: "Inicio de Carga", detail: "La carga comienza automáticamente" },
    ],
    methodsEyebrow: "Métodos de Implementación",
    methodsTitle: "Cómo se Logra el Acoplamiento de Precisión",
    methods: [
      {
        id: "self-guiding",
        number: "01",
        title: "Autoguiado",
        description:
          "Características mecánicas pasivas corrigen la trayectoria del robot a medida que ingresa a la base de acoplamiento, permitiendo un acoplamiento suave con una gran tolerancia de entrada.",
        structures: ["Guía de Embudo", "Guía en V", "Guía Achaflanada", "Guía de Riel"],
        benefits: ["Guiado pasivo", "Gran tolerancia", "Entrada suave", "No requiere control activo"],
      },
      {
        id: "self-centering",
        number: "02",
        title: "Autocentrado",
        description:
          "Los mecanismos de centrado llevan al robot exactamente al centro de acoplamiento, compensando el desplazamiento X/Y y mejorando la alineación de la interfaz de potencia.",
        structures: ["Guía Cónica", "Pin y Orificio", "Pin y Ranura", "Centrado Magnético"],
        benefits: [
          "Alta precisión de centrado",
          "Compensa el desplazamiento X/Y",
          "Mejora la transferencia de energía",
          "Reduce el desgaste",
        ],
      },
      {
        id: "compliance",
        number: "03",
        title: "Conformidad y Compensación",
        description:
          "Los mecanismos de conformidad absorben impactos y compensan errores de altura o paralelismo, protegiendo tanto la base de acoplamiento como el vehículo.",
        structures: ["Base Flotante", "Compensación por Resorte", "Conformidad Pasiva", "Absorción de Impactos"],
        benefits: [
          "Absorbe energía de impacto",
          "Tolera variaciones de altura",
          "Protege las piezas mecánicas",
          "Mejora la confiabilidad",
        ],
      },
      {
        id: "locking",
        number: "04",
        title: "Mecanismo de Bloqueo",
        description:
          "El bloqueo mantiene al robot firmemente sujeto durante la carga o en entornos hostiles, evitando el desacoplamiento causado por vibración o fuerza externa.",
        structures: ["Bloqueo por Pin", "Bloqueo por Gancho", "Bloqueo Magnético", "Bloqueo Electromagnético"],
        benefits: [
          "Seguro durante la operación",
          "Resiste la vibración",
          "Evita el desacoplamiento",
          "Soporta entornos hostiles",
        ],
      },
      {
        id: "tolerance",
        number: "05",
        title: "Optimización de Tolerancias",
        description:
          "La geometría y las holguras de la base de acoplamiento se optimizan para que el acoplamiento permanezca consistente en condiciones centradas, con desplazamiento, angulares, de desgaste y de expansión térmica.",
        structures: [
          "Geometría de la Base",
          "Simetría de Guías",
          "Diseño de Holguras",
          "Margen de Desgaste",
          "Expansión Térmica",
        ],
        benefits: [
          "Maneja la variación del mundo real",
          "Rendimiento consistente",
          "Repetibilidad a largo plazo",
          "Mantenimiento reducido",
        ],
      },
    ],
  },
  contactDock: {
    id: "contact-dock",
    number: "02",
    eyebrow: "Base de Contacto",
    title: "Conexión Eléctrica Directa Sin Necesidad de Enchufar",
    description:
      "Las bases de contacto entregan energía mediante interfaces conductoras que se acoplan automáticamente cuando la máquina se conecta. Este enfoque soporta una alta transferencia de potencia con una ruta de conexión simple y lista para producción para muchas plataformas industriales.",
    heroImage: "/images/plug-free-docking/method-self-centering.png",
    highlights: [
      { label: "Acoplamiento Automático", text: "No requiere conexión manual", icon: "station" },
      { label: "Ruta de Alta Potencia", text: "Soporta tasas de carga exigentes", icon: "power" },
      { label: "Resistente al Desgaste", text: "Construido para ciclos de acoplamiento repetidos", icon: "shield" },
      { label: "Listo para Producción", text: "Diseño de interfaz simple y escalable", icon: "coil" },
    ],
    processEyebrow: "Proceso de Carga por Contacto",
    processTitle: "Desde la Presencia en la Base hasta el Flujo de Energía",
    process: [
      { label: "Aproximación", detail: "La máquina ingresa a la zona de la base de contacto" },
      { label: "Alineación", detail: "Las guías mecánicas posicionan los contactos" },
      { label: "Acoplamiento", detail: "Las interfaces conductoras logran un contacto firme" },
      { label: "Verificación", detail: "Las comprobaciones de presencia y polaridad confirman que todo está listo" },
      { label: "Carga", detail: "Comienza la transferencia de potencia de alta corriente" },
      { label: "Liberación", detail: "Los contactos se desacoplan limpiamente al partir" },
    ],
    methodsEyebrow: "Métodos de Implementación de la Base de Contacto",
    methodsTitle: "Cómo se Logra una Potencia de Contacto Confiable",
    methods: [
      {
        id: "spring-pins",
        number: "01",
        title: "Pines con Resorte",
        description:
          "Los pines tipo pogo o con resorte mantienen una fuerza de contacto consistente ante variaciones de altura, asegurando una ruta eléctrica estable en cada ciclo de acoplamiento.",
        image: "/images/plug-free-docking/method-self-centering.png",
        imageAlt: "Pines de contacto con resorte acoplándose a una placa de conexión",
        structuresLabel: "Estructuras Comunes",
        structures: [
          { label: "Pines Pogo", icon: "pin-hole" },
          { label: "Arreglo de Resortes", icon: "spring-compensation" },
          { label: "Portapines", icon: "floating-dock" },
          { label: "Tapa de Contacto", icon: "pin-slot" },
        ],
        benefits: [
          "Fuerza de contacto consistente",
          "Tolera variaciones de altura",
          "Alta durabilidad de ciclos",
          "Fácil sustitución de módulos",
        ],
      },
      {
        id: "pad-contacts",
        number: "02",
        title: "Almohadillas Conductoras",
        description:
          "Las interfaces de almohadilla plana crean un área conductora amplia para la transferencia de potencia, simplificando la alineación y soportando una entrega de corriente robusta en estaciones fijas.",
        image: "/images/plug-free-docking/method-self-guiding.png",
        imageAlt: "Interfaz de contacto por almohadilla conductora en una estación de acoplamiento",
        structuresLabel: "Estructuras Comunes",
        structures: [
          { label: "Placa de Almohadilla", icon: "clearance-design" },
          { label: "Almohadilla Doble", icon: "guide-symmetry" },
          { label: "Almohadilla de Riel", icon: "rail-guide" },
          { label: "Almohadilla Sellada", icon: "floating-dock" },
        ],
        benefits: [
          "Gran área de contacto",
          "Alta capacidad de corriente",
          "Geometría simple",
          "Adecuada para bases fijas",
        ],
      },
      {
        id: "brush-contacts",
        number: "03",
        title: "Contactos de Escobilla",
        description:
          "Las interfaces de escobilla mantienen la continuidad eléctrica durante pequeños movimientos relativos, absorbiendo vibraciones y desalineaciones menores una vez que la máquina se asienta.",
        image: "/images/plug-free-docking/method-compliance.png",
        imageAlt: "Módulos de contacto de escobilla para transferencia de energía tolerante a vibraciones",
        structuresLabel: "Estructuras Comunes",
        structures: [
          { label: "Escobilla de Carbón", icon: "passive-compliance" },
          { label: "Bloque de Escobillas", icon: "shock-absorption" },
          { label: "Escobilla con Resorte", icon: "spring-compensation" },
          { label: "Ruta de Barrido", icon: "wear-allowance" },
        ],
        benefits: [
          "Tolera micromovimientos",
          "Estable ante vibraciones",
          "Acción de barrido autolimpiante",
          "Forma comprobada en la industria",
        ],
      },
      {
        id: "wear-protection",
        number: "04",
        title: "Diseño de Desgaste y Protección",
        description:
          "Los materiales de contacto, el recubrimiento y el sellado se seleccionan para resistir la oxidación, la abrasión y la contaminación, manteniendo la interfaz confiable durante ciclos de trabajo prolongados.",
        image: "/images/plug-free-docking/method-locking.png",
        imageAlt: "Interfaz de contacto protegida diseñada para ciclos de trabajo prolongados",
        structuresLabel: "Estructuras Comunes",
        structures: [
          { label: "Recubrimiento Duro", icon: "wear-allowance" },
          { label: "Sello de Barrido", icon: "passive-compliance" },
          { label: "Cubierta Antipolvo", icon: "floating-dock" },
          { label: "Punta Reemplazable", icon: "pin-lock" },
        ],
        benefits: [
          "Mayor vida útil del contacto",
          "Resiste la contaminación",
          "Menor mantenimiento",
          "Resistencia estable a lo largo del tiempo",
        ],
      },
      {
        id: "current-path",
        number: "05",
        title: "Optimización de la Ruta de Alta Corriente",
        description:
          "La geometría del bus, las rutas en paralelo y el diseño térmico se optimizan para que las bases de contacto entreguen alta potencia de forma segura, con baja pérdida y un aumento de temperatura controlado.",
        image: "/images/plug-free-docking/method-tolerance.png",
        imageAlt: "Diagrama de la ruta de contacto de alta corriente y consideraciones térmicas",
        diagrams: [
          { label: "Contacto Nominal", detail: "Acoplamiento total de la almohadilla" },
          { label: "Desplazamiento Parcial", detail: "Margen de superposición reducido" },
          { label: "Aumento Térmico", detail: "Gestionado bajo carga" },
        ],
        structuresLabel: "Factores de Optimización Comunes",
        structures: [
          { label: "Geometría del Bus", icon: "dock-geometry" },
          { label: "Rutas en Paralelo", icon: "guide-symmetry" },
          { label: "Área de Contacto", icon: "clearance-design" },
          { label: "Ruta Térmica", icon: "thermal-expansion" },
          { label: "Retroalimentación de Sensores", icon: "pin-hole" },
        ],
        benefits: [
          "Alta transferencia de potencia",
          "Baja pérdida de conexión",
          "Calentamiento controlado",
          "Disponibilidad de carga segura",
        ],
      },
    ],
  },
  wirelessDock: {
    id: "wireless-dock",
    eyebrow: "Base Inalámbrica",
    title: "Base Inalámbrica",
    subtitle: "Carga Autónoma Sin Contacto",
    description:
      "Las estaciones de acoplamiento inalámbrico de SiCore combinan un posicionamiento mecánico preciso con transferencia de energía sin contacto — permitiendo una carga segura, eficiente y totalmente autónoma sin contactos eléctricos expuestos.",
    heroImage: "/images/plug-free-docking/wireless-dock-hero-v2.png",
    architecture: {
      id: "dock-architecture",
      number: "01",
      title: "Arquitectura de la Base",
      description:
        "La base inalámbrica integra bobinas transmisoras, estructuras de ferrita, electrónica de potencia y una superficie de carga duradera en una plataforma compacta y de fácil mantenimiento.",
      image: "/images/plug-free-docking/wd-architecture.png",
      imageAlt: "Vista despiezada de las capas y componentes internos de la base inalámbrica",
      layers: [
        { label: "Cubierta Superior", detail: "Protección y estética" },
        { label: "Superficie de Carga", detail: "Interfaz duradera" },
        { label: "Bobina Transmisora", detail: "Transferencia de energía de alta eficiencia" },
        { label: "Estructura de Ferrita", detail: "Control del campo magnético" },
        { label: "Electrónica de Potencia", detail: "Gestión inteligente de energía" },
        { label: "Carcasa de la Base", detail: "Protección estructural y ambiental" },
      ],
    },
    alignment: {
      id: "coil-alignment",
      number: "02",
      title: "Alineación de Bobinas",
      description:
        "Una alineación precisa de bobinas garantiza la máxima eficiencia de acoplamiento y un rendimiento de carga estable en cada acoplamiento real.",
      cases: [
        {
          label: "Alineación Perfecta",
          detail: "Acoplamiento óptimo, máxima eficiencia.",
          image: "/images/plug-free-docking/wd-align-perfect.png",
        },
        {
          label: "Desplazamiento Pequeño",
          detail: "Ligera reducción de eficiencia, aún dentro de la ventana de alineación.",
          image: "/images/plug-free-docking/wd-align-small.png",
        },
        {
          label: "Desplazamiento Grande",
          detail: "La carga puede estar limitada o no permitida.",
          image: "/images/plug-free-docking/wd-align-large.png",
        },
      ],
      stats: [
        { label: "Ventana de Alineación (X / Y)", value: "±20 mm" },
        { label: "Eficiencia Típica", value: "90%+ dentro de la ventana" },
      ],
    },
    surface: {
      id: "charging-surface",
      number: "03",
      title: "Superficie de Carga",
      description:
        "La superficie de carga está diseñada para durabilidad mecánica, resistencia al desgaste y una operación diaria segura en entornos industriales.",
      features: [
        { label: "Resistente al Desgaste", detail: "> 100,000 ciclos de acoplamiento", icon: "shield" },
        { label: "Alta Capacidad de Carga", detail: "Soporta robots y equipos pesados", icon: "station" },
        { label: "Fácil de Limpiar", detail: "Superficie lisa, resiste suciedad y aceite", icon: "coil" },
        { label: "Diseño Antideslizante", detail: "Acoplamiento seguro en todas las condiciones", icon: "ai" },
      ],
      materials: [
        {
          label: "Superficie de Aluminio",
          detail: "Alta resistencia, excelente disipación de calor",
          image: "/images/plug-free-docking/wd-surface-aluminum.png",
        },
        {
          label: "Superficie Compuesta",
          detail: "Ligera, resistente a la corrosión",
          image: "/images/plug-free-docking/wd-surface-composite.png",
        },
        {
          label: "Superficie de Goma",
          detail: "Antideslizante, amortiguación de vibraciones",
          image: "/images/plug-free-docking/wd-surface-rubber.png",
        },
      ],
    },
    fod: {
      id: "foreign-object-protection",
      number: "04",
      title: "Protección Contra Objetos Extraños",
      description:
        "La tecnología FOD avanzada monitorea el área de carga en busca de objetos metálicos y desactiva la carga cuando se detecta un riesgo.",
      cases: [
        {
          label: "Perno Detectado",
          status: "Carga deshabilitada",
          safe: false,
          image: "/images/plug-free-docking/wd-fod-bolt.png",
        },
        {
          label: "Llave Detectada",
          status: "Carga deshabilitada",
          safe: false,
          image: "/images/plug-free-docking/wd-fod-key.png",
        },
        {
          label: "Moneda Detectada",
          status: "Carga deshabilitada",
          safe: false,
          image: "/images/plug-free-docking/wd-fod-coin.png",
        },
        {
          label: "Sin Objeto",
          status: "Carga habilitada",
          safe: true,
          image: "/images/plug-free-docking/wd-fod-clear.png",
        },
      ],
      features: [
        { label: "Detección Multipunto", detail: "Detección de alta precisión", icon: "emc" },
        { label: "Respuesta Rápida", detail: "Tiempo de detección <100 ms", icon: "bolt" },
        { label: "Seguro y Confiable", detail: "Protege al sistema y a los usuarios", icon: "shield" },
        { label: "Monitoreo Continuo", detail: "Supervisión en tiempo real del área de carga", icon: "ai" },
      ],
    },
    sealed: {
      id: "sealed-dock-design",
      number: "05",
      title: "Diseño de Base Sellada",
      description:
        "Una base completamente sellada resiste el agua, el polvo, los productos químicos y el clima extremo para un despliegue confiable en exteriores e industrias.",
      protections: [
        { label: "Protección IP67", detail: "Resistente al agua y al polvo", icon: "shield" },
        { label: "Resistencia a la Corrosión", detail: "Durabilidad de materiales a largo plazo", icon: "thermal" },
        { label: "Resistente a Químicos", detail: "Maneja lavado con manguera y fluidos", icon: "emc" },
        { label: "Resistente a Impactos", detail: "Construido para uso industrial", icon: "station" },
      ],
      environments: [
        { label: "Lluvia", image: "/images/plug-free-docking/wd-env-rain.png" },
        { label: "Nieve", image: "/images/plug-free-docking/wd-env-snow.png" },
        { label: "Polvo", image: "/images/plug-free-docking/wd-env-dust.png" },
        { label: "Lodo", image: "/images/plug-free-docking/wd-env-mud.png" },
      ],
    },
    cta: {
      title: "Conexión Confiable. Energía Continua.",
      text: "SiCore Wireless Dock ofrece carga segura, eficiente y autónoma para la próxima generación de máquinas inteligentes.",
    },
  },
  positionDetection: {
    id: "position-detection",
    number: "04",
    eyebrow: "Detección de Posición",
    title: "Sepa Cuándo la Alineación Está Lista para la Carga",
    description:
      "La detección de posición confirma que la máquina está correctamente alineada antes de que comience la carga. La detección y la retroalimentación ayudan a validar la precisión del acoplamiento, mejorar la seguridad y garantizar una transferencia de energía eficiente en cada parada.",
    heroImage: "/images/plug-free-docking/dock-mechanics-hero.png",
    highlights: [
      { label: "Presencia de la Base", text: "Confirmar la estación antes de aproximarse", icon: "station" },
      { label: "Alineación Lista", text: "Validar la posición antes de cargar", icon: "ai" },
      { label: "Retroalimentación de Desalineación", text: "Corregir la aproximación en tiempo real", icon: "coil" },
      { label: "Rutinas Autónomas", text: "Soporta secuencias completas de acoplamiento", icon: "shield" },
    ],
    methodsEyebrow: "Métodos de Detección",
    methodsTitle: "Cómo se Detecta la Posición Antes de Cargar",
    methods: [
      {
        id: "vision-guidance",
        number: "01",
        title: "Guiado por Visión",
        description:
          "Los robots autónomos primero identifican la estación de acoplamiento mediante sistemas de visión integrados antes de iniciar el proceso final de acoplamiento. Las cámaras detectan continuamente características visuales como AprilTags, marcadores fiduciales, códigos QR o características estructurales naturales para estimar la posición y orientación de la base. En comparación con el acoplamiento tradicional de posición fija, el guiado por visión permite mayor flexibilidad y permite reubicar las estaciones de acoplamiento sin ajustes mecánicos extensos.",
        descriptionSecondary:
          "Los algoritmos modernos de visión con IA mejoran aún más la robustez ante condiciones de iluminación variables y entornos parcialmente ocluidos, convirtiendo al acoplamiento basado en visión en una tecnología esencial para las máquinas autónomas de próxima generación.",
        technologiesLabel: "Tecnologías Principales",
        technologies: [
          "Detección de AprilTag",
          "Reconocimiento de Marcadores ArUco",
          "Algoritmos de Visión con IA",
          "Coincidencia de Características",
          "Estimación de Pose",
        ],
        benefits: [
          "Estaciones de acoplamiento reubicables",
          "Aproximación flexible sin accesorios fijos",
          "Robusto ante variaciones de iluminación",
          "Funciona con oclusión parcial",
          "Estimación precisa de la posición de la base",
        ],
      },
      {
        id: "lidar-localization",
        number: "02",
        title: "Localización por LiDAR",
        description:
          "El LiDAR proporciona un posicionamiento tridimensional de alta precisión al escanear continuamente el entorno circundante y generar una nube de puntos en tiempo real. A diferencia de los sistemas basados en cámaras, la localización láser es en gran medida independiente de la iluminación ambiental, lo que permite que los vehículos autónomos naveguen de manera confiable en almacenes, fábricas y entornos exteriores.",
        descriptionSecondary:
          "Durante el acoplamiento, el LiDAR estima con precisión la posición del robot respecto a la estación de carga y corrige continuamente su trayectoria para garantizar una alineación suave y repetible antes de que comience la carga.",
        image: "/images/plug-free-docking/method-lidar-localization.png",
        imageAlt:
          "Localización mediante nube de puntos LiDAR para entornos de acoplamiento interiores, en almacenes y nocturnos",
        technologiesLabel: "Tecnologías Principales",
        technologies: [
          "LiDAR 2D / 3D",
          "Localización SLAM",
          "Registro de Nube de Puntos",
          "Mapeo de Obstáculos",
          "Navegación en Tiempo Real",
        ],
        benefits: [
          "Localización independiente de la iluminación",
          "Posicionamiento 3D de alta precisión",
          "Uso confiable en almacenes y exteriores",
          "Corrección continua de trayectoria",
          "Alineación de acoplamiento suave y repetible",
        ],
      },
      {
        id: "infrared-guidance",
        number: "03",
        title: "Guiado Infrarrojo",
        layout: "stacked",
        gallery: [
          {
            src: "/images/plug-free-docking/method-infrared-fov.png",
            alt: "Proceso de guiado infrarrojo en cinco pasos, desde la detección hasta el acoplamiento",
          },
          {
            src: "/images/plug-free-docking/method-infrared-service-robot.png",
            alt: "Robot de servicio con base de carga infrarroja para carga automática",
          },
        ],
        whatIsTitle: "¿Qué es el Guiado Infrarrojo?",
        description:
          "El Guiado Infrarrojo utiliza emisores IR instalados en la base de carga y receptores IR montados en el robot. A medida que el robot se aproxima a la estación, detecta la señal infrarroja y ajusta su trayectoria hasta alcanzar la posición de acoplamiento correcta.",
        advantagesLabel: "Ventajas",
        advantages: [
          "Bajo costo del sistema",
          "Implementación simple",
          "Respuesta rápida",
          "Bajo consumo de energía",
          "Tecnología probada y madura",
        ],
        applicationsLabel: "Aplicaciones Típicas",
        applications: [
          "Robots aspiradora",
          "Robots de consumo",
          "Robots educativos",
          "Robots de entrega en interiores",
          "Pequeños robots de servicio",
        ],
      },
      {
        id: "ultrasonic-detection",
        number: "04",
        title: "Detección Ultrasónica",
        layout: "stacked",
        gallery: [
          {
            src: "/images/plug-free-docking/method-ultrasonic-sensor.png",
            alt: "Módulo de sensor ultrasónico utilizado para detección de acoplamiento de corto alcance",
          },
          {
            src: "/images/plug-free-docking/method-ultrasonic-diagram.png",
            alt: "Diagramas de detección ultrasónica de desniveles, paredes, obstáculos y recarga automática",
          },
        ],
        whatIsTitle: "¿Qué es la Detección Ultrasónica?",
        description:
          "Los sensores ultrasónicos emiten ondas sonoras de alta frecuencia y calculan la distancia a los objetos cercanos a partir de los ecos reflejados. Durante el acoplamiento, estos sensores miden continuamente la distancia entre el robot y la estación de carga para lograr un posicionamiento suave y sin colisiones.",
        advantagesLabel: "Ventajas",
        advantages: [
          "Detección precisa de corto alcance",
          "Bajo costo",
          "Resistente a cambios de iluminación",
          "Detección confiable de obstáculos",
          "Ideal como sensor de posicionamiento secundario",
        ],
        applicationsLabel: "Aplicaciones Típicas",
        applications: [
          "AGV",
          "Robots de limpieza",
          "Robots de servicio móviles",
          "Vehículos de almacén inteligente",
          "Equipos de automatización en interiores",
        ],
      },
    ],
  },
  outdoorReliability: {
    id: "outdoor-reliability",
    number: "05",
    eyebrow: "Confiabilidad en Exteriores",
    title: "Construido para Entornos Reales, No para Condiciones de Laboratorio",
    description:
      "La confiabilidad en exteriores garantiza que el acoplamiento siga funcionando en condiciones de polvo, humedad, variación de temperatura y vibración. Los materiales, el sellado y el diseño de la interfaz se seleccionan para una operación a largo plazo en condiciones de campo exigentes.",
    methodsEyebrow: "Pilares de Confiabilidad",
    methodsTitle: "Cómo se Mantiene Confiable el Acoplamiento en Exteriores",
    methods: [
      {
        id: "weather-protection",
        number: "01",
        title: "Protección Contra el Clima",
        description:
          "Diseñado para operar de forma confiable bajo lluvia, polvo y entornos exteriores con protección de carcasa sellada.",
        gallery: [
          {
            src: "/images/plug-free-docking/outdoor-weather-rain.png",
            alt: "Equipo exterior sellado operando bajo lluvia intensa durante la noche",
          },
          {
            src: "/images/plug-free-docking/outdoor-weather-shelter.png",
            alt: "Robot autónomo acoplado bajo un refugio con panel solar en exteriores",
          },
          {
            src: "/images/plug-free-docking/outdoor-weather-field.png",
            alt: "Robot resistente para exteriores en una estación de acoplamiento expuesta al clima",
          },
        ],
        technologiesLabel: "Tecnologías Principales",
        technologies: ["IP67 / IP69K", "Sellado Impermeable", "Protección Contra el Polvo"],
      },
      {
        id: "corrosion-resistance",
        number: "02",
        title: "Resistencia a la Corrosión",
        description:
          "Materiales duraderos y recubrimientos protectores que extienden la vida del producto en entornos húmedos y corrosivos.",
        gallery: [
          {
            src: "/images/plug-free-docking/outdoor-corrosion-beach.png",
            alt: "Mobiliario exterior costero e interfaz de carga cerca de la playa",
          },
          {
            src: "/images/plug-free-docking/outdoor-corrosion-bollards.png",
            alt: "Pilares de carga resistentes a la corrosión a lo largo de un paseo marítimo",
          },
          {
            src: "/images/plug-free-docking/outdoor-corrosion-garden.png",
            alt: "Estación de carga exterior protegida junto a un banco de jardín",
          },
        ],
        technologiesLabel: "Tecnologías Principales",
        technologies: ["Aluminio Anodizado", "Recubrimiento Protector", "Herrajes de Acero Inoxidable"],
      },
      {
        id: "thermal-management",
        number: "03",
        title: "Gestión Térmica",
        description:
          "Operación estable en temperaturas altas y bajas gracias a un diseño térmico optimizado.",
        gallery: [
          {
            src: "/images/plug-free-docking/outdoor-thermal-robot.png",
            alt: "Robot móvil acoplándose en un pilar de carga alto en exteriores",
          },
          {
            src: "/images/plug-free-docking/outdoor-thermal-cabinet.png",
            alt: "Gabinete industrial con pantalla de monitoreo de temperatura y humedad",
          },
          {
            src: "/images/plug-free-docking/outdoor-thermal-heatsink.png",
            alt: "Módulo de electrónica de potencia con disipador de calor metálico para disipación térmica",
          },
        ],
        technologiesLabel: "Tecnologías Principales",
        technologies: ["Disipación de Calor", "Resistencia UV", "Operación en Amplio Rango de Temperatura"],
      },
      {
        id: "mechanical-durability",
        number: "04",
        title: "Durabilidad Mecánica",
        description:
          "Diseñado para soportar ciclos de acoplamiento repetidos, vibraciones e impactos accidentales.",
        gallery: [
          {
            src: "/images/plug-free-docking/outdoor-durability-hex.png",
            alt: "Robot hexagonal acoplándose en una estación de carga exterior señalizada",
          },
          {
            src: "/images/plug-free-docking/outdoor-durability-wall.png",
            alt: "Robot acoplado en un puerto de carga de pared con indicador de estado de batería",
          },
          {
            src: "/images/plug-free-docking/outdoor-durability-bay.png",
            alt: "Múltiples robots cargando en una bahía de acoplamiento protegida",
          },
        ],
        technologiesLabel: "Tecnologías Principales",
        technologies: ["Resistencia a Impactos", "Resistencia a Vibraciones", "Resistencia Estructural"],
      },
    ],
  },
} as const;
