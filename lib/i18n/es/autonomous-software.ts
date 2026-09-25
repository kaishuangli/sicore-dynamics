import {
  autonomousSoftwareSections as sectionsEn,
  autonomousSoftwareProducts as productsEn,
} from "@/lib/autonomous-software";

const sectionCopy: Record<
  string,
  {
    label: string;
    description: string;
    overview?: {
      headline: string;
      lead?: string;
      body: string;
      flowIntro?: string;
      pillars?: { id: string; label: string; tagline?: string; description: string }[];
      steps?: { id: string; label: string }[];
    };
  }
> = {
  "charging-management-software": {
    label: "Software de gestión de carga",
    description: "Gestión inteligente de carga para máquinas autónomas.",
    overview: {
      headline: "Gestión inteligente de carga para máquinas autónomas.",
      body: "Supervise, controle, automatice y optimice la carga en robots, estaciones de carga e infraestructura de acoplamiento. SiCore Charging Management System ofrece visibilidad de carga en tiempo real, retorno autónomo a la carga, programación inteligente, gestión dinámica de potencia, diagnóstico de fallos y analítica energética, todo en una plataforma unificada.",
      pillars: [
        { id: "monitor", label: "MONITOR", description: "Vea cada robot, cargador, muelle y sesión de carga en tiempo real." },
        { id: "control", label: "CONTROL", description: "Gestione potencia, perfiles, seguridad y cada sesión de carga." },
        { id: "automate", label: "AUTOMATE", description: "Active el retorno autónomo a la carga, el acoplamiento, la carga y la recuperación de misiones." },
        { id: "optimize", label: "OPTIMIZE", description: "Mejore la utilización del cargador, la disponibilidad de la flota, la eficiencia energética y la distribución de potencia." },
      ],
    },
  },
  "fleet-charging-scheduler": {
    label: "Sistema de acoplamiento autónomo SiCore",
    description: "Inteligencia de acoplamiento de precisión para carga autónoma.",
    overview: {
      headline: "Inteligencia de acoplamiento de precisión para carga autónoma",
      body: "Una plataforma de acoplamiento inteligente que coordina percepción, localización, guía de movimiento, acoplamiento del conector y verificación eléctrica para una carga desatendida fiable.",
      flowIntro: "El sistema completo se ve como una máquina de estados.",
      steps: [
        { id: "dock-request", label: "Solicitud de acoplamiento" },
        { id: "dock-discovery", label: "Descubrimiento del muelle" },
        { id: "position-estimation", label: "Estimación de posición" },
        { id: "coarse-alignment", label: "Alineación gruesa" },
        { id: "fine-alignment", label: "Alineación fina" },
        { id: "final-approach", label: "Aproximación final" },
        { id: "connector-engagement", label: "Enganche del conector" },
        { id: "mechanical-verification", label: "Verificación mecánica" },
        { id: "electrical-verification", label: "Verificación eléctrica" },
        { id: "charging-ready", label: "Listo para cargar" },
        { id: "charging", label: "Carga" },
        { id: "release", label: "Liberación" },
        { id: "exit", label: "Salida" },
      ],
    },
  },
  "monitoring-dashboard": {
    label: "Panel de monitorización",
    description: "Visibilidad en vivo del estado de carga, fallos y utilización.",
    overview: {
      headline: "Una interfaz. Visibilidad completa.",
      body: "Supervise robots, cargadores, muelles, sesiones de carga, fallos, consumo energético y rendimiento del sistema desde una interfaz centralizada.",
      pillars: [
        {
          id: "dash-live",
          label: "OPERACIONES EN VIVO",
          description:
            "Visibilidad en tiempo real de robots, cargadores, muelles, sesiones de carga y flujo de energía.",
        },
        {
          id: "dash-alerts",
          label: "DIAGNÓSTICO Y ALERTAS",
          description:
            "Detección centralizada de fallos, eventos de seguridad, diagnósticos y notificaciones de mantenimiento.",
        },
        {
          id: "dash-analytics",
          label: "ANALÍTICA E INFORMES",
          description:
            "Datos históricos de carga, consumo energético, utilización de cargadores, preparación de la flota y rendimiento del sistema.",
        },
      ],
    },
  },
  "fleet-charging": {
    label: "Programador de flota",
    description: "Coordine la carga de toda la flota de robots.",
    overview: {
      headline: "Coordine la carga de toda la flota de robots",
      lead: "Coordine de forma inteligente cuándo, dónde y qué robots cargan según el estado de la batería, las prioridades de misión, la disponibilidad de muelles, la ubicación y los horarios operativos.",
      body: "Fleet Scheduler aporta la inteligencia necesaria para coordinar la carga entre varios robots y una infraestructura de carga compartida. En lugar de esperar a que un robot alcance un nivel bajo de batería, el sistema evalúa de forma continua la demanda energética de la flota, la disponibilidad de robots, las misiones próximas y los recursos de carga para tomar decisiones proactivas.",
      pillars: [
        {
          id: "smart-charging-queue",
          label: "COLA DE CARGA INTELIGENTE",
          tagline: "Priorice el robot correcto en el momento correcto.",
          description:
            "Priorice dinámicamente los robots para cargar según el estado de carga de la batería (SOC), la prioridad de la misión, los requisitos de las tareas próximas, el tiempo de espera y el estado operativo. La cola se adapta continuamente a las condiciones de la flota.",
        },
        {
          id: "automatic-dock-assignment",
          label: "ASIGNACIÓN AUTOMÁTICA DE MUELLES",
          tagline: "Conecte cada robot con el cargador disponible más adecuado.",
          description:
            "Asigne automáticamente muelles de carga según la ubicación del robot, la disponibilidad del muelle, la capacidad de carga, la compatibilidad del equipo, la distancia de desplazamiento y el tiempo de espera estimado. Las reservas de muelle evitan conflictos y movimientos innecesarios.",
        },
        {
          id: "mission-aware-scheduling",
          label: "PROGRAMACIÓN SEGÚN LA MISIÓN",
          tagline: "Planifique la carga en torno a las operaciones, no al revés.",
          description:
            "Coordine la carga con las misiones próximas y los horarios operativos. Los robots pueden recibir energía antes de asignaciones críticas, reduciendo el riesgo de que una batería baja interrumpa tareas importantes.",
        },
        {
          id: "opportunity-charging",
          label: "CARGA DE OPORTUNIDAD",
          tagline: "Convierta el tiempo de inactividad en tiempo de carga productivo.",
          description:
            "Aproveche periodos breves de inactividad —cambios de turno, huecos entre tareas, retrasos de carga o espera— para recargar robots sin interrumpir las operaciones. La carga de oportunidad ayuda a mantener niveles de batería más altos y mejora la disponibilidad de la flota.",
        },
        {
          id: "fleet-energy-readiness",
          label: "PREPARACIÓN ENERGÉTICA DE LA FLOTA",
          tagline: "Sepa si su flota tiene energía suficiente para lo que viene.",
          description:
            "Evalúe de forma continua los niveles de batería, la demanda energética próxima, la disponibilidad de cargadores y las misiones programadas para determinar la preparación energética de la flota. Identifique cuellos de botella de carga antes de que afecten las operaciones y prepare los robots para las cargas de trabajo futuras.",
        },
      ],
    },
  },
  "sdk-development-kit": {
    label: "SDK y kit de desarrollo",
    description: "APIs, ejemplos y herramientas para integración y personalización OEM.",
  },
};

const productTitleEs: Record<string, string> = {
  "cms-session-controller": "Controlador de sesión",
  "cms-profile-engine": "Motor de perfiles",
  "cms-policy-manager": "Gestor de políticas",
  "scheduler-core": "Núcleo del programador",
  "scheduler-priority": "Planificador de prioridad",
  "scheduler-zones": "Planificador de zonas y turnos",
  "sdk-api": "Bibliotecas API",
  "sdk-samples": "Aplicaciones de ejemplo",
  "sdk-tools": "Herramientas de desarrollo y simulación",
};

export const autonomousSoftwareSections = sectionsEn.map((section) => {
  const copy = sectionCopy[section.id];
  return {
    ...section,
    label: copy?.label ?? section.label,
    description: copy?.description ?? section.description,
    overview: section.overview
      ? {
          ...section.overview,
          ...copy?.overview,
          image: section.overview.image,
          imageAlt: section.overview.imageAlt,
          afterImage: section.overview.afterImage,
          afterImageAlt: section.overview.afterImageAlt,
        }
      : undefined,
    products: section.products.map((item) => ({
      ...item,
      title: productTitleEs[item.id] ?? item.title,
    })),
  };
});

export const autonomousSoftwareProducts = productsEn.map((item) => ({
  ...item,
  categoryId: item.categoryId,
  brand: "SiCore Dynamics",
  title: productTitleEs[item.id] ?? item.title,
}));

export const autonomousSoftwareCategories = autonomousSoftwareSections.map((section) => ({
  id: section.id,
  label: section.label,
  description: section.description,
  image: section.products[0]?.image ?? "/images/smart-test-equipments/fleet-tablet.png",
}));
