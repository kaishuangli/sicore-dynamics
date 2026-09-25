export type SolutionUseCase = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type SolutionListSection = {
  title: string;
  items: readonly string[];
};

export const industries = [
  {
    id: "automation-robotics",
    title: "Automatización y Robótica",
    pageTitle: "Carga Sin Conector para Automatización y Robótica",
    description:
      "Soluciones de Carga Sin Conector para Robots Industriales Autónomos",
    content: [
      "Ofrecemos soluciones de carga sin conector diseñadas para robots industriales que operan continuamente en entornos exigentes. Al eliminar los conectores de carga convencionales, nuestras tecnologías reducen el impacto del polvo, la vibración, la humedad y el desgaste mecánico. Ya sea mediante carga inalámbrica u otros métodos de transferencia de energía sin conector, nuestras soluciones permiten la carga autónoma, maximizan el tiempo de actividad, prolongan la vida útil del equipo y mejoran la eficiencia operativa.",
    ],
    productsIntro:
      "Los sistemas de energía inalámbrica de SiCore, de 60W a 3000W, proporcionan carga escalable para brazos robóticos, robots colaborativos y equipos de producción automatizados.",
    image: "/images/app-200w-amr-fleet.png",
    heroVideo: "/videos/automation-robotics.mp4",
    heroVisual: "/images/product-tx.png",
    alt: "Flota de AMR acoplada a una estación de carga inalámbrica en un almacén",
    heroVisualAlt: "Transmisor inalámbrico SiCore para aplicaciones robóticas",
    useCases: [
      {
        title: "Celdas de Robots Colaborativos",
        description: "Carga autónoma en parada para robots colaborativos que ejecutan tareas continuas de ensamblaje y recogida y colocación.",
        image: "/images/automation-wireless-charging.jpg",
        alt: "AGV acoplándose en una base de carga inalámbrica sin conector",
      },
      {
        title: "Líneas de Producción Automatizadas",
        description:
          "La carga inalámbrica permite una transferencia de energía completamente sellada en las estaciones de producción, eliminando el desgaste de conectores causado por la vibración, el polvo y los ciclos repetidos de acoplamiento.",
        image: "/images/mobile-robot-production-line.png",
        alt: "Línea de producción de robots móviles con estaciones de carga inalámbrica para operación continua",
      },
      {
        title: "Estaciones de Trabajo Robóticas 24/7",
        description: "Carga por oportunidad entre ciclos para maximizar el tiempo de actividad en fábricas de alto rendimiento.",
        image: "/images/hero-wireless-robotics.jpg",
        alt: "Carga inalámbrica en estación de trabajo robótica",
      },
      {
        title: "Automatización de Salas Limpias",
        description: "Energía sin contacto para entornos sellados donde los contactos expuestos no son aceptables.",
        image: "/images/clean-room-automation.png",
        alt: "AMR de sala limpia transportando materiales a través de zonas automatizadas selladas",
      },
    ],
    listSections: [
      {
        title: "Beneficios Clave",
        items: [
          "Carga automática",
          "Sin contactos eléctricos expuestos",
          "Diseños sellados con clasificación IP",
          "Mantenimiento reducido",
          "Alta confiabilidad",
          "Carga rápida",
        ],
      },
    ],
  },
  {
    id: "unmanned-aerial-vehicles",
    title: "Vehículos Aéreos No Tripulados",
    pageTitle: "Carga Inalámbrica para Vehículos Aéreos No Tripulados",
    description: "Estación de Carga Autónoma para Drones",
    content: [
      "Habilite operaciones de drones completamente autónomas con carga inalámbrica inteligente. Nuestra estación de carga de perfil bajo permite que los drones aterricen, se recarguen y se redespliegan automáticamente sin contactos eléctricos expuestos, proporcionando una transferencia de energía confiable en entornos exteriores para entrega de paquetes, inspección de infraestructura y patrullaje de seguridad.",
    ],
    productsIntro:
      "Las estaciones de carga inalámbrica de SiCore admiten el aterrizaje autónomo de UAV, la carga por oportunidad al aire libre y la operación continua de flotas de drones.",
    image: "/images/uav-drone-delivery-hero-v2.png",
    heroVideo: "/videos/agv-amr.mp4",
    heroVisual: "/images/uav-drone-delivery-hero-v2.png",
    alt: "Dron de entrega acoplándose en una base de carga inalámbrica SiCore",
    heroVisualAlt: "Estación de entrega para drones UAV con carga inalámbrica",
    useCases: [
      {
        title: "Flotas de Logística en Almacenes",
        description: "Carriles de carga por oportunidad que mantienen en movimiento a las flotas de AMR sin alineación manual de acoplamiento.",
        image: "/images/mobile-robots.jpg",
        alt: "Carga inalámbrica de AMR en almacén",
      },
      {
        title: "Corredores de Fabricación",
        description: "Estaciones de carga en línea a lo largo de las rutas de producción para el transporte ininterrumpido de materiales.",
        image: "/images/industry-robotics.png",
        alt: "Corredor de carga para AGV de fabricación",
      },
      {
        title: "Centros de Distribución",
        description: "Carga de alta confiabilidad para automatización de clasificación y cumplimiento de pedidos 24/7.",
        image: "/images/hero-wireless-robotics.jpg",
        alt: "Carga de AGV en centro de distribución",
      },
      {
        title: "Movilidad en Fábricas Inteligentes",
        description: "Infraestructura inalámbrica lista para flotas destinada a la logística de fábrica con múltiples robots.",
        image: "/images/mobile-robots.jpg",
        alt: "Carga inalámbrica en fábrica inteligente para flotas de robots móviles",
      },
    ],
    listSections: [
      {
        title: "Aplicaciones",
        items: [
          "Logística de almacenes",
          "Manufactura",
          "Centros de distribución",
          "Fábricas inteligentes",
        ],
      },
    ],
    flowSteps: ["Dron", "Estación de Carga", "Carga Inalámbrica", "Redespliegue de Misión"],
  },
  {
    id: "medical-equipment",
    title: "Equipos Médicos",
    pageTitle: "Carga Inalámbrica para Equipos Médicos",
    description:
      "Carga inalámbrica más segura e higiénica para dispositivos médicos, sin contactos expuestos.",
    content: [
      "La carga inalámbrica mejora la seguridad y la higiene de los equipos médicos al eliminar los contactos de carga expuestos.",
      "Admite diseños resistentes al agua, simplifica la esterilización del dispositivo y mejora la confiabilidad a largo plazo.",
    ],
    productsIntro:
      "Los módulos SiCore de baja potencia de 60W y 200W son ideales para dispositivos médicos portátiles, carros y equipos de diagnóstico que requieren interfaces de carga selladas.",
    image: "/images/industry-medical.png",
    heroVisual: "/images/app-60w-medical-v2.png",
    alt: "Estación de trabajo médica cargando de forma inalámbrica en un entorno clínico",
    heroVisualAlt: "Dispositivo médico de mano sellado sobre una plataforma de carga inalámbrica",
    useCases: [
      {
        title: "Dispositivos Portátiles para Pacientes",
        description:
          "Monitores de cabecera y de transporte con carcasas totalmente cerradas: colóquelos en una plataforma para cargar sin contactos expuestos.",
        image: "/images/app-60w-medical-v2.png",
        alt: "Dispositivo médico de mano sellado cargando en una plataforma inalámbrica",
      },
      {
        title: "Herramientas Quirúrgicas y de Diagnóstico",
        description:
          "Bases de carga selladas para escáneres e instrumentos de mano que deben soportar ciclos de limpieza y esterilización.",
        image: "/images/app-60w-medical.png",
        alt: "Escáner de diagnóstico de mano en una base de carga inalámbrica",
      },
      {
        title: "Equipos Clínicos Móviles",
        description:
          "Carros, estaciones de trabajo y plataformas clínicas autónomas que se acoplán a plataformas de suelo entre rondas, sin cables en pasillos estériles.",
        image: "/images/app-200w-medical-uv.png",
        alt: "Plataforma clínica móvil de desinfección en un pasillo hospitalario estéril",
      },
    ],
    listSections: [
      {
        title: "Adecuado para",
        items: [
          "Monitores portátiles",
          "Carros médicos",
          "Herramientas quirúrgicas",
          "Dispositivos de diagnóstico",
        ],
      },
    ],
  },
  {
    id: "agricultural-automation",
    title: "Automatización Agrícola",
    pageTitle: "Impulsando el Futuro de la Agricultura Autónoma",
    description:
      "Infraestructura de carga confiable para robots de campo autónomos, drones agrícolas y sistemas de agricultura de precisión de próxima generación.",
    content: [
      "SiCore ofrece estaciones de carga inalámbrica y por contacto listas para exteriores que mantienen a los robots agrícolas y drones operando durante largas jornadas de campo sin detenerse para conexiones manuales.",
    ],
    productsIntro:
      "Las plataformas SiCore de 200W a 1500W admiten robots agrícolas de exteriores, estaciones para drones y carga de flotas en implementaciones agrícolas.",
    image: "/images/app-1500w-agriculture.png",
    heroVisual: "/images/agri-hero.jpg",
    alt: "Robot agrícola autónomo de gran altura libre operando entre hileras de cultivo",
    heroVisualAlt: "Imagen principal de automatización agrícola con estación de carga en el campo",
    useCases: [
      {
        title: "Inspección de Frutas y Verduras",
        description:
          "Navega por las hileras de huertos y viñedos para inspeccionar la calidad, madurez y salud de frutas y verduras, y luego se recarga en bases de campo entre rutas de inspección.",
        image: "/images/agri-fruit-inspection.jpg",
        alt: "Robot explorador inspeccionando cultivos de fruta entre hileras de viñedo",
      },
      {
        title: "Robot Explorador de Campo",
        description:
          "Recopila datos del cultivo e inspecciona la salud de las plantas durante las temporadas de crecimiento, con carga por oportunidad en bases ubicadas en los bordes del campo.",
        image: "/images/agri-field-scout-v2.jpg",
        alt: "Robot explorador de campo con paneles solares navegando entre hileras de cultivo de hoja roja",
      },
      {
        title: "Robot Autónomo de Deshierbe",
        description:
          "Realiza pasadas continuas de deshierbe en grandes extensiones de terreno mientras regresa de forma autónoma a cargarse, sin necesidad de cambios manuales de batería.",
        image: "/images/agri-weeding-robot-v2.jpg",
        alt: "Robot autónomo de deshierbe de color verde desplazándose sobre las hileras de cultivo en el campo",
      },
      {
        title: "Robot de Logística Agrícola",
        description:
          "Transporta cajas de cosecha, insumos y materiales entre campos y patios, con carga de recuperación rápida en los puntos de recolección.",
        image: "/images/agri-farm-logistics-v3.jpg",
        alt: "Robot de logística agrícola transportando cajas de cosecha de uva entre hileras de viñedo",
      },
      {
        title: "Monitoreo de Suelo",
        description:
          "Toma muestras de forma autónoma de la humedad del suelo, los nutrientes y las condiciones del campo con robots equipados con sondas, y luego se recarga en bases de exteriores entre rutas de relevamiento.",
        image: "/images/agri-soil-monitoring.jpg",
        alt: "Robot de monitoreo de suelo sondeando un campo cosechado para obtener datos de humedad y nutrientes",
      },
      {
        title: "Fenotipado de Plantas",
        description:
          "Captura el crecimiento en campo, la estructura del dosel y los rasgos de salud de las plantas con robots equipados con sensores que navegan entre las hileras de cultivo, y luego se recarga entre rutas de fenotipado.",
        image: "/images/agri-plant-phenotyping.jpg",
        alt: "Robot de fenotipado de plantas recopilando datos de rasgos de cultivo entre hileras de maíz",
      },
    ],
    listSections: [
      {
        title: "Aplicaciones",
        items: [
          "Inspección de frutas y verduras",
          "Robots exploradores de campo",
          "Robots autónomos de deshierbe",
          "Robots de logística agrícola",
          "Monitoreo de suelo",
          "Fenotipado de plantas",
        ],
      },
    ],
  },
  {
    id: "smart-furniture",
    title: "Muebles Inteligentes",
    pageTitle: "Carga Inalámbrica para Muebles Inteligentes",
    description:
      "Carga inalámbrica integrada para oficinas, hoteles, restaurantes y espacios públicos.",
    content: [
      "Los módulos de carga inalámbrica integrados proporcionan un acceso conveniente a la energía, manteniendo un diseño de muebles limpio y moderno.",
      "Ideal para oficinas, hoteles, restaurantes, aeropuertos y espacios públicos.",
    ],
    productsIntro:
      "Los módulos integrados SiCore de 60W se incorporan de forma limpia en escritorios, mesas y mobiliario de hostelería, sin puertos de carga visibles.",
    image: "/images/smart-furniture-airport-lounge.png",
    heroVisual: "/images/smart-furniture-conference-v2.png",
    alt: "Escritorio de sala de espera de aeropuerto con bases de carga inalámbrica integradas para teléfonos y laptops",
    heroVisualAlt: "Carga inalámbrica integrada en una mesa de conferencias inteligente",
    useCases: [
      {
        title: "Sala de Reuniones",
        description: "Carga invisible integrada en mesas de conferencias y espacios de trabajo colaborativo.",
        image: "/images/smart-furniture-collaboration.png",
        alt: "Acoplamiento de colaboración inteligente con carga inalámbrica durante una presentación",
      },
      {
        title: "Biblioteca Pública",
        description: "Energía integrada para mesas de estudio y espacios de trabajo compartidos y silenciosos.",
        image: "/images/smart-furniture-library-v2.png",
        alt: "Mesas de estudio de biblioteca con bases de carga inalámbrica SiCore integradas",
      },
      {
        title: "Mesas de Restaurantes y Comedores",
        description: "Diseños de superficie limpios con carga oculta para los dispositivos de los huéspedes.",
        image: "/images/smart-furniture-restaurant-v2.png",
        alt: "Mesa de café con base de carga inalámbrica integrada",
      },
      {
        title: "Salas de Espera de Aeropuertos y Espacios Públicos",
        description: "Carga integrada duradera para entornos públicos de alto tráfico.",
        image: "/images/smart-furniture-airport-v2.png",
        alt: "Mostrador de sala de espera de aeropuerto con carga inalámbrica SiCore integrada",
      },
    ],
    listSections: [
      {
        title: "Aplicaciones",
        items: [
          "Salas de reuniones",
          "Bibliotecas públicas",
          "Mesas de reuniones y comedores",
          "Aeropuertos y espacios públicos",
        ],
      },
    ],
  },
  {
    id: "consumer-electronics",
    title: "Electrónica de Consumo",
    pageTitle: "Carga Inalámbrica para Electrónica de Consumo",
    description:
      "Módulos de carga inalámbrica compatibles con Qi para teléfonos, dispositivos portátiles y equipos de mano.",
    content: [
      "SiCore integra módulos de carga inalámbrica Qi en productos de consumo y equipos de mano, proporcionando energía sin contacto conveniente para dispositivos de uso diario.",
      "Los diseños de receptores compactos admiten gabinetes sellados y experiencias de usuario premium, sin puertos de carga expuestos que se desgasten con el tiempo.",
    ],
    productsIntro:
      "Los módulos receptores y transmisores SiCore de 60W y 200W admiten teléfonos, audífonos, dispositivos portátiles y plataformas de productos de mano compatibles con Qi.",
    image: "/images/product-rx.png",
    heroVisual: "/images/product-rx.png",
    alt: "Electrónica de consumo con capacidad de carga inalámbrica",
    heroVisualAlt: "Receptor inalámbrico para electrónica de consumo",
    useCases: [
      {
        title: "Carga de Smartphones",
        description: "Bases de carga inalámbrica compatibles con Qi y cargadores integrados en muebles.",
        image: "/images/product-rx.png",
        alt: "Módulo de carga inalámbrica para smartphone",
      },
      {
        title: "Audífonos y Dispositivos Portátiles",
        description: "Diseños de receptores compactos para estuches de audífonos y accesorios portátiles.",
        image: "/images/product-coils.png",
        alt: "Bobina de carga inalámbrica para dispositivo portátil",
      },
      {
        title: "Relojes Inteligentes",
        description: "Energía inalámbrica de perfil bajo para bases y accesorios de carga de relojes.",
        image: "/images/product-tx.png",
        alt: "Transmisor inalámbrico para reloj inteligente",
      },
      {
        title: "Dispositivos de Mano",
        description: "Módulos OEM para la integración de productos de mano industriales y de consumo.",
        image: "/images/product-controller.png",
        alt: "Controlador de energía para dispositivo de mano",
      },
    ],
    listSections: [
      {
        title: "Aplicaciones",
        items: ["Carga de teléfonos", "Audífonos", "Relojes inteligentes", "Dispositivos de mano"],
      },
    ],
  },
  {
    id: "smart-test-equipments",
    title: "Equipos de Prueba Inteligentes",
    pageTitle: "Equipos de Prueba Inteligentes — Carga por acoplamiento para instrumentos",
    description:
      "Banco de prueba inteligente modular que alimenta, carga y gestiona instrumentos de prueba a batería en laboratorios y plantas.",
    content: [
      "SiCore Smart Test Equipments ofrece una plataforma de acoplamiento inteligente compartida para osciloscopios, multímetros, analizadores e instrumentos modulares a batería: menos cables, equipos siempre listos y flotas visibles.",
    ],
    productsIntro:
      "Plataforma de acoplamiento unificada con reconocimiento automático, gestión eficiente de energía y diseño modular escalable.",
    image: "/images/smart-test-equipments/ste-hero-robot-v2.png",
    heroVisual: "/images/smart-test-equipments/ste-hero-robot-v2.png",
    alt: "Robot Smart Equipment SiCore con instrumentos de laboratorio",
    heroVisualAlt: "Robot autónomo de equipos inteligentes para laboratorios de prueba",
    useCases: [
      {
        title: "Pruebas de I+D",
        description: "Mover equipos entre estaciones para acelerar la validación de diseño.",
        image: "/images/smart-test-equipments/ste-usecase-rnd.png",
        alt: "Robot de equipos inteligentes en laboratorio de I+D",
      },
      {
        title: "Prueba en producción",
        description: "Apoyar pruebas en línea con entrega flexible de instrumentos.",
        image: "/images/smart-test-equipments/ste-usecase-production.png",
        alt: "Robot de equipos inteligentes en línea de producción",
      },
      {
        title: "QA y validación",
        description: "Agilizar procesos de QA con transporte automatizado.",
        image: "/images/smart-test-equipments/ste-usecase-qa.png",
        alt: "Robot de equipos inteligentes en validación de calidad",
      },
      {
        title: "Sala limpia",
        description: "La operación autónoma ayuda a reducir riesgos de contaminación.",
        image: "/images/smart-test-equipments/ste-usecase-cleanroom.png",
        alt: "Robot de equipos inteligentes en sala limpia",
      },
    ],
    listSections: [
      {
        title: "Beneficios clave",
        items: [
          "Espacio de trabajo sin cables",
          "Instrumentos siempre listos",
          "Uso móvil flexible",
          "Monitoreo de batería en tiempo real",
          "Plataforma de acoplamiento unificada",
          "Diseño modular escalable",
        ],
      },
    ],
  },
  {
    id: "customized-solutions",
    title: "Soluciones Personalizadas",
    pageTitle: "Soluciones de Carga Inalámbrica Personalizadas",
    description:
      "Ingeniería de carga inalámbrica a la medida para requisitos únicos de potencia industrial, distancia y entorno.",
    content: [
      "Cada aplicación industrial tiene requisitos únicos de potencia, distancia, entorno y mecánica.",
      "Nuestro equipo de ingeniería desarrolla soluciones de carga inalámbrica personalizadas y adaptadas a las especificaciones de su producto.",
    ],
    productsIntro:
      "Los ingenieros de SiCore diseñan plataformas personalizadas en toda la gama de productos de 60W a 3000W, con bobinas a la medida, firmware y soporte para producción en masa.",
    image: "/images/oem-integration/mechanical-integration.png",
    heroVisual: "/images/product-coils.png",
    alt: "Receptor de carga inalámbrica personalizado integrado en el chasis de un robot móvil con su estación correspondiente",
    heroVisualAlt: "Ingeniería de bobinas de carga inalámbrica personalizadas",
    useCases: [
      {
        title: "Diseño de Bobinas Personalizadas",
        description: "Bobinas optimizadas según sus requisitos de distancia, alineación y térmicos.",
        image: "/images/product-coils.png",
        alt: "Diseño de bobina de carga inalámbrica personalizada",
      },
      {
        title: "Desarrollo de PCB OEM",
        description: "Plataformas de PCB de transmisor y receptor específicas para cada aplicación.",
        image: "/images/product-controller.png",
        alt: "Desarrollo de PCB OEM para carga inalámbrica",
      },
      {
        title: "Validación de Prototipos",
        description: "Prototipado rápido y pruebas de rendimiento antes del lanzamiento a producción.",
        image: "/images/product-tx.png",
        alt: "Plataforma de prototipo de carga inalámbrica",
      },
      {
        title: "Soporte para Producción en Masa",
        description: "Soporte de ingeniería desde las construcciones piloto hasta la fabricación en volumen.",
        image: "/images/product-rx.png",
        alt: "Módulo receptor inalámbrico para producción en masa",
      },
    ],
    listSections: [
      {
        title: "Los servicios incluyen",
        items: [
          "Diseño de bobinas",
          "Desarrollo de PCB",
          "Optimización de potencia",
          "Detección de objetos extraños",
          "Gestión térmica",
          "Optimización EMC",
          "Desarrollo de prototipos",
          "Soporte para producción en masa",
        ],
      },
    ],
  },
] as const;

export type Industry = (typeof industries)[number];
export type IndustryId = Industry["id"];

export function getIndustryHeroVideo(industry: { id: string; heroVideo?: string }) {
  return industry.heroVideo ? industry.heroVideo : `/videos/${industry.id}.mp4`;
}

export function getIndustryPageHeading(industry: { pageTitle: string }) {
  return industry.pageTitle;
}

export function getIndustryHref(id: IndustryId) {
  return `/solutions/${id}`;
}

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((item) => item.id === slug);
}

/** Solutions hidden from nav, homepage grid, and solutions landing cards. */
const hiddenSolutionIds = new Set<IndustryId>(["consumer-electronics"]);

export const publicIndustries = industries.filter((item) => !hiddenSolutionIds.has(item.id));

export const industryNavLinks = publicIndustries.map((item) => ({
  label: item.title,
  href: getIndustryHref(item.id),
  id: item.id,
}));

export function getIndustryFromHash(hash: string): IndustryId | null {
  const id = hash.replace(/^#/, "");
  return industries.some((item) => item.id === id) ? (id as IndustryId) : null;
}

export const solutionsPageMeta = {
  title: "Applications",
  description:
    "Aplicaciones de carga autónoma para automatización, vehículos aéreos no tripulados, equipos médicos, automatización agrícola, muebles inteligentes y programas OEM personalizados.",
};

export const solutionsFaqs = [
  {
    question: "¿Qué industrias utilizan la carga inalámbrica de SiCore?",
    answer:
      "SiCore da soporte a automatización y robótica, vehículos aéreos no tripulados, equipos médicos, automatización agrícola, muebles inteligentes y programas de carga inalámbrica OEM totalmente personalizados.",
  },
  {
    question: "¿SiCore ofrece carga inalámbrica para vehículos aéreos no tripulados?",
    answer:
      "Sí. SiCore proporciona soluciones de carga inalámbrica dedicadas para UAV y plataformas de drones, lo que permite la carga por oportunidad en estaciones designadas sin conectores físicos, maximizando el tiempo de actividad operativo.",
  },
  {
    question: "¿SiCore puede desarrollar soluciones de carga inalámbrica personalizadas?",
    answer:
      "Sí. El equipo de ingeniería de SiCore ofrece soporte en diseño de bobinas, desarrollo de PCB, optimización de potencia, detección de objetos extraños, gestión térmica, optimización EMC, prototipado y soporte para producción en masa.",
  },
] as const;

export const solutionsLandingMeta = {
  eyebrow: "Applications",
  title: "Soluciones de Carga Inalámbrica Industrial para una Transferencia de Energía Confiable",
  paragraphs: [
    "Ofrecemos soluciones de carga inalámbrica personalizadas para equipos industriales, sistemas de automatización, dispositivos médicos, plataformas agrícolas, muebles inteligentes y aplicaciones OEM.",
    "Nuestra tecnología de energía inalámbrica mejora la confiabilidad del producto, elimina el desgaste de conectores, reduce los costos de mantenimiento y permite diseños de dispositivos completamente sellados.",
  ],
};

/** Homepage mosaic cards — labels/hrefs stay in sync with Technology nav Industrial Solutions dropdown. */
export const solutionsLandingApplications = publicIndustries.map((item) => ({
  label: item.title,
  image: item.image,
  alt: item.alt,
  href: getIndustryHref(item.id),
  id: item.id,
  description: item.description,
}));
