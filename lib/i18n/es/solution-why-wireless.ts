import type { IndustryId } from "@/lib/industries";

export type WhyWirelessRow = {
  title: string;
  paragraphs: readonly string[];
  visual:
    | { type: "image"; src: string; alt: string }
    | {
        type: "principle";
        steps: readonly { label: string; detail: string }[];
      };
};

export type WhyWirelessAnalysis = {
  rows: readonly [WhyWirelessRow, WhyWirelessRow];
};

export const solutionWhyWireless: Record<IndustryId, WhyWirelessAnalysis> = {
  "automation-robotics": {
    rows: [
      {
        title: "Por Qué los Robots Industriales Necesitan Carga Sin Conector",
        paragraphs: [
          "Los robots industriales ejecutan largos ciclos de producción en entornos llenos de polvo metálico, niebla de refrigerante, vibración y ciclos repetidos de acoplamiento. Los conectores de carga por conexión tradicionales son vulnerables al desgaste, la corrosión, la contaminación y los errores de alineación, todo lo cual puede interrumpir la operación autónoma.",
          "Las tecnologías de carga sin conector, incluida la carga inalámbrica, eliminan las conexiones físicas por enchufe y ofrecen una forma más confiable de suministrar energía en entornos industriales exigentes. Al reducir el desgaste mecánico y simplificar la carga autónoma, estas soluciones ayudan a mejorar la confiabilidad del sistema mientras minimizan el mantenimiento.",
          "Para las fábricas que buscan un rendimiento 24/7, el método de carga no es una característica secundaria: impacta directamente el tiempo de actividad, los costos de mantenimiento y la capacidad de operar sistemas robóticos totalmente autónomos.",
        ],
        visual: {
          type: "image",
          src: "/images/industrial-automation.jpg",
          alt: "Entorno de automatización industrial que ilustra los desafíos de confiabilidad en la carga",
        },
      },
      {
        title: "Soluciones de Carga Sin Conector para Sistemas Robóticos",
        paragraphs: [
          "Los robots industriales operan en entornos donde el polvo, la vibración, la humedad y el acoplamiento frecuente pueden desgastar rápidamente los conectores de carga convencionales. Diferentes aplicaciones robóticas requieren distintos enfoques de carga, por lo que ofrecemos un portafolio completo de soluciones de carga sin conector diseñadas para una operación autónoma confiable.",
          "Ya sea que su robot requiera máxima flexibilidad, carga de alta potencia o suministro de energía continuo, nuestras soluciones eliminan las conexiones manuales por enchufe y reducen el mantenimiento mientras mejoran el tiempo de actividad del sistema.",
        ],
        visual: {
          type: "principle",
          steps: [
            {
              label: "Carga Inalámbrica",
              detail:
                "La energía se transfiere a través de un entrehierro mediante tecnología inductiva resonante, eliminando los contactos eléctricos expuestos. Ideal para robots móviles, AGV, AMR y sistemas robóticos que requieren gabinetes sellados y acoplamiento autónomo.",
            },
            {
              label: "Carga por Contacto",
              detail:
                "Las interfaces de carga con resorte o autoalineables proporcionan una transferencia de energía de alta corriente confiable, eliminando la conexión manual de cables. Diseñadas para aplicaciones donde la alta eficiencia y la carga rápida son prioritarias.",
            },
            {
              label: "Carga con Acoplamiento Automático",
              detail:
                "Las estaciones de carga integradas combinan el posicionamiento mecánico con la transferencia automatizada de energía, permitiendo que los robots se recarguen sin intervención del operador durante los ciclos de producción programados.",
            },
            {
              label: "Integración de Carga Personalizada",
              detail:
                "Trabajamos con fabricantes de robots e integradores de sistemas para desarrollar soluciones de carga adaptadas a voltajes específicos, sistemas de batería, restricciones de instalación y entornos operativos.",
            },
            {
              label: "Gestión de Carga Inteligente",
              detail:
                "Nuestros sistemas de carga admiten comunicación, integración de gestión de baterías, monitoreo de seguridad y optimización de carga para maximizar la vida útil de la batería y la disponibilidad del sistema.",
            },
          ],
        },
      },
    ],
  },
  "unmanned-aerial-vehicles": {
    rows: [
      {
        title: "Por Qué las Flotas Autónomas de Drones Dependen de la Carga Sin Contacto",
        paragraphs: [
          "Las flotas autónomas de drones se miden por su disponibilidad para misiones: el porcentaje de tiempo que las aeronaves dedican a realizar misiones en lugar de esperar la carga, el reemplazo de baterías o el mantenimiento. Los sistemas de carga por contacto convencionales dependen de contactos eléctricos expuestos que requieren una alineación de aterrizaje precisa y una limpieza regular, especialmente en entornos exteriores.",
          "Cada aterrizaje introduce posibles puntos de falla: contactos contaminados, corrosión por lluvia o humedad, acumulación de polvo y desgaste mecánico que puede interrumpir la carga o retrasar el próximo vuelo. En flotas grandes de drones, estos problemas reducen la eficiencia operativa y aumentan los costos de mantenimiento.",
        ],
        visual: {
          type: "image",
          src: "/images/uav-industrial-charging-dock.jpg",
          alt: "Dron de inspección industrial sobre una base de carga inalámbrica SiCore",
        },
      },
      {
        title: "El Principio de Carga Detrás de las Operaciones Autónomas de Drones",
        paragraphs: [
          "Los drones autónomos regresan a una base de carga designada al completar cada misión o cuando la capacidad de la batería alcanza un umbral predefinido. La tecnología de aterrizaje de precisión guía a la aeronave hacia una base de carga inalámbrica de perfil ultrabajo, eliminando los contactos eléctricos expuestos y los procedimientos de carga manuales.",
          "El rendimiento de la carga, el estado de la batería y la transferencia de energía se monitorean continuamente para maximizar la eficiencia y la seguridad operativa. Una vez completada la carga, el dron lanza automáticamente su siguiente misión sin intervención del operador.",
          "A gran escala, la carga inalámbrica permite flotas de drones totalmente autónomas al reemplazar el manejo manual de baterías y el mantenimiento de conectores con una infraestructura energética inteligente y gestionada por software, habilitando operaciones continuas para entrega de paquetes, inspección de infraestructura, respuesta de emergencia y patrullaje de seguridad.",
        ],
        visual: {
          type: "image",
          src: "/images/uav-principle-dock.jpg",
          alt: "Dron de inspección industrial aterrizado sobre una base de carga inalámbrica",
        },
      },
    ],
  },
  "medical-equipment": {
    rows: [
      {
        title: "Por Qué los Dispositivos Médicos Se Benefician al Eliminar los Contactos de Carga",
        paragraphs: [
          "Los entornos médicos priorizan el control de infecciones y la higiene de los equipos. Los puertos de carga expuestos acumulan fluidos, agentes de limpieza y residuos biológicos. Son difíciles de desinfectar a fondo y se degradan con los ciclos repetidos de esterilización.",
          "Los monitores portátiles, carros e instrumentos de mano se desplazan entre áreas de pacientes durante un turno. El personal no debería necesitar localizar cables ni verificar la orientación de los conectores durante los flujos de trabajo clínicos.",
          "La carga inalámbrica permite gabinetes de dispositivos completamente cerrados, aptos para protocolos de limpieza y esterilización. La interfaz de energía ya no es una abertura externa en la carcasa del dispositivo.",
        ],
        visual: {
          type: "image",
          src: "/images/app-200w-medical.png",
          alt: "Carro médico cargando de forma inalámbrica sobre una plataforma en un quirófano",
        },
      },
      {
        title: "Cómo la Carga Sin Contacto Favorece la Confiabilidad Clínica",
        paragraphs: [
          "Un dispositivo médico se coloca sobre una base o estación de carga que contiene una bobina transmisora. La bobina receptora dentro del dispositivo capta la energía a través de su carcasa, de modo que el personal clínico nunca interactúa con un conector eléctrico.",
          "La electrónica de carga monitorea el voltaje, la temperatura y las condiciones de objetos extraños antes y durante la transferencia. Esto protege tanto la batería del dispositivo como el equipo clínico circundante frente a eventos de energía anómalos.",
          "El principio subyacente es el mismo que en la energía inalámbrica industrial —el acoplamiento por campo magnético—, pero la prioridad de diseño se orienta hacia bajo ruido, perfiles de carga lenta o rápida consistentes y sellado del gabinete, en lugar de un alto rendimiento en kilovatios.",
        ],
        visual: {
          type: "principle",
          steps: [
            { label: "Estación Clínica", detail: "Base transmisora junto a la cama o en la estación de enfermería" },
            { label: "Receptor Sellado", detail: "Bobina integrada dentro de la carcasa del dispositivo" },
            { label: "Transferencia Segura", detail: "Energía inductiva monitoreada con protección térmica" },
            { label: "Listo para Usar", detail: "El dispositivo totalmente cargado regresa al cuidado del paciente" },
          ],
        },
      },
    ],
  },
  "agricultural-automation": {
    rows: [
      {
        title: "Por Qué la Robótica Agrícola Depende de la Carga Inalámbrica Sellada",
        paragraphs: [
          "Los robots agrícolas operan largas jornadas al aire libre en polvo, lodo, humedad y aspersión química. Los conectores de carga expuestos fallan rápidamente en estas condiciones y obligan a una intervención manual que interrumpe los flujos de trabajo autónomos.",
          "Durante las ventanas de siembra y cosecha, cada minuto de inactividad importa. Los operadores no pueden permitirse detener las flotas para acoplar cables, limpiar contactos o reemplazar conectores en el campo.",
          "La carga inalámbrica permite que los robots agrícolas aterricen o se estacionen en bases resistentes, se recarguen automáticamente y regresen a las misiones de deshierbe, aspersión, inspección o transporte sin pasos manuales de conexión.",
        ],
        visual: {
          type: "image",
          src: "/images/mobile-robots.jpg",
          alt: "Plataforma robótica agrícola preparada para carga inalámbrica por oportunidad",
        },
      },
      {
        title: "Cómo la Carga por Oportunidad Mantiene Productivas a las Flotas Agrícolas",
        paragraphs: [
          "Las bases transmisoras se instalan en estaciones de campo, corredores de invernadero o puntos de recolección. Cuando un robot llega, el acoplamiento magnético transfiere energía a través de carcasas selladas sin exponer contactos al entorno.",
          "La clase de potencia se ajusta a la plataforma —desde robots compactos de exploración hasta sistemas de aspersión y transporte de cosecha de mayor exigencia— de modo que las ventanas de carga se ajustan a los ciclos naturales de la misión.",
          "El resultado es una autonomía agrícola continua: los robots gestionan la energía de la misma manera en que gestionan la navegación, como parte del flujo de trabajo de la flota y no como un evento de mantenimiento.",
        ],
        visual: {
          type: "principle",
          steps: [
            { label: "Misión Completada", detail: "El robot finaliza un ciclo de tareas de campo o invernadero" },
            { label: "Acercamiento a la Base", detail: "La plataforma navega hacia una base de carga resistente para exteriores" },
            { label: "Carga Inalámbrica", detail: "La energía se transfiere a través de carcasas selladas" },
            { label: "Redespliegue", detail: "El robot regresa a la siguiente misión agrícola" },
          ],
        },
      },
    ],
  },
  "smart-furniture": {
    rows: [
      {
        title: "Por Qué la Carga Inalámbrica Integrada Se Adapta al Diseño de Muebles Modernos",
        paragraphs: [
          "Hoteles, oficinas y espacios públicos esperan acceso a energía sin cables visibles, adaptadores o puertos USB desgastados en superficies que huéspedes y empleados tocan miles de veces al año.",
          "Los puertos de carga mecánicos en los tableros rompen las líneas estéticas, acumulan residuos y fallan por abuso mecánico. Los fabricantes de mobiliario necesitan una solución de energía que desaparezca en el producto.",
          "Los módulos inalámbricos se montan bajo la superficie, dejando solo una marca sutil o ninguna interfaz visible en absoluto. El mueble sigue siendo un objeto de diseño mientras suministra energía funcional.",
        ],
        visual: {
          type: "image",
          src: "/images/smart-furniture-conference-v2.png",
          alt: "Mesa de conferencias con bobinas de carga inalámbrica integradas",
        },
      },
      {
        title: "Cómo se Suministra la Energía a Través de las Superficies de los Muebles",
        paragraphs: [
          "Una bobina transmisora se integra debajo del tablero o del apoyabrazos. Cuando un teléfono o dispositivo con un receptor compatible entra en la zona de carga, la energía se acopla a través del material de la superficie dentro de los límites de espesor diseñados.",
          "Los integradores de mobiliario especifican el tamaño de la bobina y el nivel de potencia según el material de la superficie y el dispositivo objetivo. Los módulos SiCore equilibran la eficiencia y el rendimiento térmico para que los laminados y acabados no queden expuestos a un calor excesivo.",
          "El principio transforma el mobiliario, de asiento pasivo, en infraestructura energizada, sin cambiar el lenguaje visual del espacio.",
        ],
        visual: {
          type: "principle",
          steps: [
            { label: "Bobina Integrada", detail: "Transmisor oculto bajo la superficie de trabajo" },
            { label: "Entrehierro de Superficie", detail: "El campo magnético se acopla a través de madera o piedra" },
            { label: "Receptor del Dispositivo", detail: "El teléfono o módulo capta la energía inalámbrica" },
            { label: "Experiencia Invisible", detail: "Los usuarios cargan simplemente al colocar los dispositivos" },
          ],
        },
      },
    ],
  },
  "consumer-electronics": {
    rows: [
      {
        title: "Por Qué los Equipos de Producto Adoptan la Carga Inalámbrica en los Dispositivos",
        paragraphs: [
          "Los productos de consumo compiten en conveniencia y calidad percibida. Un puerto USB desgastado o un pin pogo desalineado transmite de inmediato una experiencia de hardware de baja calidad, mientras que una carga sin contacto fluida refuerza el posicionamiento premium.",
          "Los dispositivos portátiles, los estuches de audífonos y las herramientas de mano son demasiado pequeños para interfaces de carga mecánicas robustas. Los equipos OEM necesitan módulos receptores compactos que se adapten a gabinetes ajustados sin sacrificar la resistencia al agua.",
          "La carga inalámbrica también simplifica el hábito del usuario: colocar el producto y tomarlo listo para usar. Esa simplicidad conductual es difícil de replicar con cables en formatos compactos.",
        ],
        visual: {
          type: "image",
          src: "/images/product-rx.png",
          alt: "Módulo receptor inalámbrico para la integración de electrónica de consumo",
        },
      },
      {
        title: "Integración de la Carga Inductiva en Productos OEM",
        paragraphs: [
          "Una base o estación transmisora se combina con una bobina receptora dentro del producto. Los diseñadores del sistema eligen la geometría de la bobina y la clase de potencia según el tamaño de la batería, el tiempo de carga objetivo y el aumento de temperatura permitido en la carcasa.",
          "La comunicación entre el transmisor y el receptor negocia el nivel de potencia y monitorea las condiciones de seguridad, los mismos principios de control utilizados en los sistemas industriales, adaptados a los límites térmicos y requisitos regulatorios del consumidor.",
          "Para los programas OEM, la carga inalámbrica es una disciplina de integración: la estructura mecánica, la EMC, la eficiencia y la tolerancia de alineación del usuario deben diseñarse en conjunto, en lugar de tratarse como un reemplazo de cable listo para usar.",
        ],
        visual: {
          type: "principle",
          steps: [
            { label: "Base de Carga", detail: "Transmisor en la estación, estuche o superficie de mobiliario" },
            { label: "Bobina Receptora", detail: "Integrada en el teléfono, estuche o dispositivo portátil" },
            { label: "Negociación de Potencia", detail: "Transferencia segura y eficiente al nivel adecuado" },
            { label: "Listo para el Usuario", detail: "Producto cargado sin manipulación de cables" },
          ],
        },
      },
    ],
  },
  "customized-solutions": {
    rows: [
      {
        title: "Por Qué las Aplicaciones Personalizadas Requieren Energía Inalámbrica Diseñada a la Medida",
        paragraphs: [
          "Los cables de carga listos para usar y las bases Qi estándar rara vez coinciden con los niveles de voltaje industrial, las distancias de bobina, la libertad de alineación o las clasificaciones ambientales que exigen los equipos especializados.",
          "Una plataforma de aterrizaje para drones, una herramienta submarina, un sensor de maquinaria pesada o una plataforma vehicular pueden necesitar kilovatios a través de un entrehierro no estándar, con restricciones de objetos extraños específicas de esa máquina.",
          "La carga inalámbrica personalizada se justifica cuando el costo de la falla de conectores, la mano de obra de carga manual o el rediseño del producto supera la inversión en ingeniería de un sistema inductivo desarrollado a la medida.",
        ],
        visual: {
          type: "image",
          src: "/images/product-coils.png",
          alt: "Ingeniería de bobinas de carga inalámbrica personalizadas para aplicaciones especializadas",
        },
      },
      {
        title: "El Principio de Ingeniería Detrás de los Sistemas Inalámbricos a la Medida",
        paragraphs: [
          "Cada programa personalizado comienza con el presupuesto de potencia, la distancia de acoplamiento y las restricciones mecánicas del producto anfitrión. El bobinado, la conformación de ferrita, la topología de conmutación y la ruta térmica se codiseñan, no se seleccionan de un catálogo genérico.",
          "La simulación y las pruebas de banco validan la eficiencia, el comportamiento EMI y la respuesta ante objetos extraños antes de invertir en herramientas de producción. El firmware controla perfiles de carga específicos según la química de batería y el ciclo de uso del cliente.",
          "El resultado es un subsistema de carga inalámbrica que se comporta como una parte nativa del producto en lugar de un accesorio, porque las interfaces magnéticas, eléctricas y mecánicas se diseñaron como un solo sistema.",
        ],
        visual: {
          type: "principle",
          steps: [
            { label: "Requisitos", detail: "Se definen los objetivos de potencia, entrehierro, entorno y seguridad" },
            { label: "Diseño de Bobina y PCB", detail: "Magnéticos y electrónica personalizados codesarrollados" },
            { label: "Validación", detail: "Pruebas de eficiencia, térmicas, de FOD y EMC" },
            { label: "Producción", detail: "Fabricación a escala con el soporte de ingeniería de SiCore" },
          ],
        },
      },
    ],
  },
};

export function getSolutionWhyWireless(id: IndustryId): WhyWirelessAnalysis {
  return solutionWhyWireless[id];
}
