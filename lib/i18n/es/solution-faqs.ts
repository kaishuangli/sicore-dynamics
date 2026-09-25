import type { IndustryId } from "@/lib/industries";

export type SolutionFaqItem = {
  question: string;
  answer: string;
};

export const solutionFaqs: Record<IndustryId, readonly SolutionFaqItem[]> = {
  "automation-robotics": [
    {
      question: "¿Por qué se prefiere la carga inalámbrica frente a la carga por contacto para robots industriales?",
      answer:
        "La carga inalámbrica elimina el desgaste de conectores causado por la vibración, el polvo y los ciclos repetidos de acoplamiento, al tiempo que permite gabinetes de robot sellados y flujos de trabajo autónomos de parada y carga.",
    },
    {
      question: "¿Qué niveles de potencia ofrece SiCore para aplicaciones robóticas?",
      answer:
        "Las plataformas de energía inalámbrica de SiCore abarcan de 60W a 3000W, dando soporte a robots colaborativos, brazos robóticos y equipos de producción automatizados en estaciones de línea.",
    },
    {
      question: "¿Los cargadores inalámbricos pueden integrarse en celdas de trabajo robóticas existentes?",
      answer:
        "Sí. Las bases transmisoras y los módulos receptores están diseñados para integrarse en el piso o en la estación, con tolerancia a la variación normal de alineación en el estacionamiento.",
    },
    {
      question: "¿Cómo mejora la carga por oportunidad el tiempo de actividad de los robots?",
      answer:
        "Los robots reciben ráfagas cortas de carga entre ciclos en estaciones designadas, reduciendo el tiempo inactivo y eliminando los pasos manuales de conexión.",
    },
    {
      question: "¿Los sistemas SiCore son adecuados para entornos de fábrica hostiles?",
      answer:
        "Los diseños sellados con clasificación IP protegen la electrónica del polvo, la humedad y la vibración comunes en los entornos de automatización industrial.",
    },
    {
      question: "¿SiCore admite carga inalámbrica personalizada para plataformas de robots OEM?",
      answer:
        "Sí. El equipo de ingeniería de SiCore ofrece diseño de bobinas, desarrollo de PCB, optimización térmica y soporte de producción para programas OEM de robots.",
    },
  ],
  "unmanned-aerial-vehicles": [
    {
      question: "¿Cómo beneficia la carga inalámbrica a las operaciones de flotas de AGV y AMR?",
      answer:
        "La carga sin contacto elimina el desgaste de pines y las fallas de alineación, permitiendo la carga por oportunidad a lo largo de las rutas y una mayor utilización de la flota.",
    },
    {
      question: "¿Qué es la carga por oportunidad para robots móviles?",
      answer:
        "Los vehículos reciben energía durante periodos cortos de inactividad en puntos finales de ruta o carriles de espera, sin manipulación manual de conectores ni acoplamiento mecánico de precisión.",
    },
    {
      question: "¿Múltiples AMR pueden compartir la misma infraestructura de carga?",
      answer:
        "Sí. Las bases transmisoras estandarizadas admiten zonas de carga a nivel de flota configuradas mediante el diseño de las instalaciones y el software de gestión de flotas.",
    },
    {
      question: "¿Qué rango de potencia soporta las implementaciones de AMR en almacenes y fábricas?",
      answer:
        "Los productos SiCore, desde plataformas móviles de 200W hasta infraestructura de flota de 3000W, cubren desde AMR ligeros hasta vehículos logísticos de carga pesada.",
    },
    {
      question: "¿Cómo se maneja la tolerancia de alineación en el acoplamiento autónomo?",
      answer:
        "El acoplamiento magnético tolera una variación de posición muy superior a la del acoplamiento mecánico de pines, reduciendo los eventos de acoplamiento fallido.",
    },
    {
      question: "¿La carga inalámbrica de SiCore puede escalar en grandes centros de distribución?",
      answer:
        "Sí. SiCore admite logística de alto rendimiento en múltiples turnos, con estaciones de carga confiables distribuidas a lo largo de los corredores operativos.",
    },
  ],
  "medical-equipment": [
    {
      question: "¿Por qué es importante la carga inalámbrica para la higiene de los dispositivos médicos?",
      answer:
        "Eliminar los puertos de carga expuestos reduce el riesgo de contaminación y facilita los protocolos de limpieza y esterilización de los equipos clínicos.",
    },
    {
      question: "¿Qué dispositivos médicos pueden usar la carga inalámbrica de SiCore?",
      answer:
        "Los monitores portátiles, carros médicos, herramientas quirúrgicas y equipos de diagnóstico se benefician de interfaces de carga selladas y sin contacto.",
    },
    {
      question: "¿Los módulos de carga médica de SiCore son resistentes al agua?",
      answer:
        "Los diseños de receptores y transmisores admiten gabinetes sellados adecuados para entornos clínicos que requieren limpieza regular.",
    },
    {
      question: "¿Qué niveles de potencia se adaptan a equipos médicos portátiles?",
      answer:
        "Los módulos compactos SiCore de 60W y 200W están optimizados para dispositivos portátiles y estaciones de trabajo clínicas móviles.",
    },
    {
      question: "¿Cómo simplifica la carga sin contacto los flujos de trabajo clínicos?",
      answer:
        "El personal coloca los dispositivos sobre las bases de carga sin manipular cables, manteniendo el enfoque en el cuidado del paciente en lugar de la gestión de energía.",
    },
    {
      question: "¿SiCore admite integración OEM para fabricantes de dispositivos médicos?",
      answer:
        "Sí. SiCore proporciona integración de módulos receptores, monitoreo de seguridad y soporte de ingeniería para programas OEM médicos.",
    },
  ],
  "agricultural-automation": [
    {
      question: "¿Por qué los robots agrícolas necesitan carga inalámbrica?",
      answer:
        "Los robots agrícolas trabajan en entornos de polvo, lodo, lluvia y aspersión química, donde los conectores expuestos se corroen rápidamente e interrumpen las operaciones autónomas.",
    },
    {
      question: "¿La carga inalámbrica puede funcionar al aire libre en el campo?",
      answer:
        "Sí. Las estaciones inductivas selladas suministran energía a través de carcasas resistentes, admitiendo la carga por oportunidad al aire libre en estaciones de campo y rutas de invernadero.",
    },
    {
      question: "¿Qué aplicaciones agrícolas utilizan la carga de SiCore?",
      answer:
        "Robots de campo autónomos, flotas de aspersión, plataformas de movilidad para invernaderos y sistemas de transporte de cosecha.",
    },
    {
      question: "¿Qué clases de potencia se adaptan a la robótica agrícola?",
      answer:
        "Las plataformas de 200W a 1500W admiten desde robots ligeros de exploración hasta plataformas de aspersión y transporte de mayor exigencia.",
    },
    {
      question: "¿Cómo mejora la carga inalámbrica el tiempo de actividad de las flotas agrícolas?",
      answer:
        "Los robots se recargan automáticamente entre misiones sin que los operadores conecten cables, reduciendo el tiempo de inactividad durante las ventanas críticas de siembra y cosecha.",
    },
    {
      question: "¿SiCore puede integrarse con plataformas agrícolas OEM?",
      answer:
        "Sí. SiCore diseña la ubicación de bobinas, el sellado para exteriores y la electrónica de potencia para OEM de robótica agrícola y operadores de flotas.",
    },
  ],
  "smart-furniture": [
    {
      question: "¿Cómo se integra la carga inalámbrica en superficies de muebles?",
      answer:
        "Las bobinas transmisoras se montan debajo de tableros o apoyabrazos, suministrando energía a través de madera, piedra o laminado dentro de los límites de espesor diseñados.",
    },
    {
      question: "¿En qué entornos se utiliza la carga inalámbrica para muebles inteligentes?",
      answer:
        "Hoteles, oficinas, restaurantes, aeropuertos y salas de espera públicas integran carga oculta sin puertos ni cables visibles.",
    },
    {
      question: "¿Los módulos de mobiliario de SiCore son compatibles con teléfonos estándar?",
      answer:
        "Sí. Los módulos transmisores compatibles con Qi admiten dispositivos móviles comunes colocados en las zonas de carga designadas.",
    },
    {
      question: "¿La carga integrada afecta la estética del mueble?",
      answer:
        "Los módulos inalámbricos permanecen ocultos bajo la superficie, preservando líneas de diseño limpias sin desgaste mecánico de puertos.",
    },
    {
      question: "¿Qué nivel de potencia es típico para la integración en muebles?",
      answer:
        "Los módulos integrados de 60W proporcionan carga confiable para aplicaciones de mobiliario de hostelería y oficinas.",
    },
    {
      question: "¿Los fabricantes de muebles pueden obtener soporte de integración OEM?",
      answer:
        "SiCore ofrece soporte en la ubicación de bobinas, diseño térmico e integración de producción para programas OEM de mobiliario.",
    },
  ],
  "consumer-electronics": [
    {
      question: "¿Por qué los OEM integran la carga inalámbrica en productos de consumo?",
      answer:
        "La carga sin contacto mejora la comodidad del usuario, permite gabinetes sellados y refuerza el posicionamiento premium del producto.",
    },
    {
      question: "¿Los módulos de SiCore son compatibles con Qi?",
      answer:
        "Sí. Las plataformas SiCore de 60W y 200W admiten teléfonos, audífonos, dispositivos portátiles y accesorios de mano compatibles con Qi.",
    },
    {
      question: "¿Los módulos receptores pueden adaptarse a gabinetes de producto compactos?",
      answer:
        "Los PCB y bobinas receptoras de perfil bajo están diseñados para estructuras mecánicas ajustadas en dispositivos de consumo pequeños.",
    },
    {
      question: "¿Qué deben considerar los equipos OEM al diseñar la carga inalámbrica?",
      answer:
        "La tolerancia de alineación de la bobina, el aumento térmico, el cumplimiento EMC y los objetivos de tiempo de carga deben diseñarse en conjunto con el gabinete del producto.",
    },
    {
      question: "¿SiCore admite los requisitos de certificación de productos de consumo?",
      answer:
        "El equipo de ingeniería de SiCore aborda el monitoreo de seguridad, la eficiencia y las consideraciones EMC requeridas para el lanzamiento de productos de consumo.",
    },
    {
      question: "¿SiCore puede proporcionar tanto módulos transmisores como receptores?",
      answer:
        "Sí. SiCore suministra plataformas TX/RX acopladas para estaciones, estuches, superficies de mobiliario y carga de productos integrados.",
    },
  ],
  "smart-test-equipments": [
    {
      question: "¿Qué son los Smart Test Equipments de SiCore?",
      answer:
        "Una plataforma de acoplamiento inteligente modular que alimenta, carga y conecta instrumentos de prueba a batería, para reducir cables y mantener los equipos listos.",
    },
    {
      question: "¿Qué instrumentos pueden compartir la plataforma?",
      answer:
        "Módulos a batería como osciloscopios, fuentes, multímetros, analizadores de espectro y DAQ pueden compartir una estación unificada con reconocimiento automático.",
    },
    {
      question: "¿Cómo mejora la carga automática la productividad del laboratorio?",
      answer:
        "El ingeniero toma el instrumento, lo usa de forma independiente y lo devuelve al dock. La carga y el estado se sincronizan automáticamente.",
    },
    {
      question: "¿La plataforma escala si crece la flota de instrumentos?",
      answer:
        "Sí. La arquitectura es modular y escalable, permitiendo añadir tipos de instrumentos y capacidad de acoplamiento según la demanda.",
    },
    {
      question: "¿SiCore soporta integración OEM para fabricantes de instrumentos?",
      answer:
        "Sí. SiCore colabora con OEMs para integrar receptores, diseñar docks compartidos y comunicar estado de batería al sistema anfitrión.",
    },
    {
      question: "¿Dónde se despliega habitualmente?",
      answer:
        "Laboratorios de I+D, líneas de prueba en producción, equipos de servicio de campo y laboratorios educativos o de formación.",
    },
  ],
  "customized-solutions": [
    {
      question: "¿Cuándo debe un proyecto utilizar carga inalámbrica personalizada en lugar de productos estándar?",
      answer:
        "La ingeniería personalizada se justifica cuando el nivel de potencia, la distancia de acoplamiento, la clasificación ambiental o las restricciones mecánicas superan las especificaciones de los productos estándar.",
    },
    {
      question: "¿Qué servicios se incluyen en los programas personalizados de SiCore?",
      answer:
        "Diseño de bobinas, desarrollo de PCB, optimización de potencia, detección de objetos extraños, gestión térmica, optimización EMC, prototipado y soporte para producción en masa.",
    },
    {
      question: "¿Qué rango de potencia pueden ofrecer los sistemas SiCore personalizados?",
      answer:
        "Las plataformas personalizadas abarcan de 60W a 3000W según la carga de la aplicación, la distancia del entrehierro y los requisitos térmicos.",
    },
    {
      question: "¿Cómo valida SiCore los diseños de carga inalámbrica personalizados?",
      answer:
        "Las pruebas de banco cubren la eficiencia, el rendimiento térmico, la respuesta ante objetos extraños y el comportamiento EMI antes de la fabricación de herramientas de producción.",
    },
    {
      question: "¿SiCore puede apoyar la transición del prototipo a la fabricación en volumen?",
      answer:
        "Sí. Los equipos de ingeniería asisten desde las construcciones piloto hasta la fabricación a escala, con soporte de producción continuo.",
    },
    {
      question: "¿Qué industrias suelen requerir energía inalámbrica personalizada?",
      answer:
        "Equipos industriales especializados, vehículos autónomos, plataformas OEM médicas, drones e integraciones de automatización no estándar.",
    },
  ],
};

export function getSolutionFaqs(id: IndustryId): readonly SolutionFaqItem[] {
  return solutionFaqs[id];
}
