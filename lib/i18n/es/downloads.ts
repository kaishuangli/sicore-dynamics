export const downloadCategories = [
  {
    id: "brochure",
    label: "Folleto",
    description: "Folletos corporativos y de producto para plataformas de energía inalámbrica.",
  },
  {
    id: "product-document",
    label: "Documento de Producto",
    description: "Guías de producto, notas de integración y documentación de plataformas.",
  },
  {
    id: "software-tools",
    label: "Herramientas de Software",
    description: "Utilidades de firmware, herramientas de configuración y actualizaciones de software.",
  },
  {
    id: "datasheet",
    label: "Hoja de Datos",
    description: "Hojas de datos técnicas para transmisores, receptores y módulos de energía.",
  },
  {
    id: "certificate",
    label: "Certificado",
    description: "Certificados de cumplimiento, informes de prueba y documentos regulatorios.",
  },
] as const;

export type DownloadCategoryId = (typeof downloadCategories)[number]["id"];

type DownloadFile = {
  title: string;
  type: string;
  date: string;
  href: string;
};

export const downloadFiles: Record<DownloadCategoryId, DownloadFile[]> = {
  brochure: [
    {
      title: "Folleto Corporativo de SiCore Dynamics",
      type: "Folleto",
      date: "2026-03-01",
      href: "/contact",
    },
    {
      title: "Carga Inalámbrica para Máquinas Inteligentes",
      type: "Folleto",
      date: "2026-02-15",
      href: "/contact",
    },
    {
      title: "Panorama de las Estaciones de Carga Inteligentes",
      type: "Folleto",
      date: "2026-01-20",
      href: "/contact",
    },
  ],
  "product-document": [
    {
      title: "Guía de Integración de la Plataforma de Energía Inalámbrica",
      type: "Documento de producto",
      date: "2026-03-05",
      href: "/contact",
    },
    {
      title: "Guía de Producto de la Estación de Carga AGV/AMR",
      type: "Documento de producto",
      date: "2026-02-28",
      href: "/contact",
    },
    {
      title: "Panorama del Sistema de Acoplamiento de Carga para Robots",
      type: "Documento de producto",
      date: "2026-02-10",
      href: "/contact",
    },
    {
      title: "Referencia del Módulo de Energía Inalámbrica OEM",
      type: "Documento de producto",
      date: "2026-01-18",
      href: "/contact",
    },
  ],
  "software-tools": [
    {
      title: "Configurador de Energía SiCore",
      type: "Herramientas de software",
      date: "2026-03-08",
      href: "/contact",
    },
    {
      title: "Utilidad de Diagnóstico de Carga Inalámbrica",
      type: "Herramientas de software",
      date: "2026-02-22",
      href: "/contact",
    },
    {
      title: "Paquete de Actualización de Firmware — Controlador TX",
      type: "Herramientas de software",
      date: "2026-02-01",
      href: "/contact",
    },
  ],
  datasheet: [
    {
      title: "Módulo de carga inalámbrica de largo alcance",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_Long_Range_Wireless_Charging_Module.pdf",
    },
    {
      title: "Guía de producto FlexCharge-RX",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_FlexCharge_RX_Product_Guide.pdf",
    },
    {
      title: "Hoja de datos del módulo magnético Qi2 15 W",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_Qi2_15W_Magnetic_Wireless_Fast_Charging_Module_Datasheet.pdf",
    },
    {
      title: "Hoja de datos del transmisor Qi rápido 15 W",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_15W_Qi_Fast_Wireless_Charging_Transmitter_Module_Datasheet.pdf",
    },
    {
      title: "Hoja de datos del controlador de entrada amplia",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_Wide_Input_Wireless_Charging_Controller_Datasheet_CORRECTED.pdf",
    },
    {
      title: "Hoja de datos del módulo 10 W / 15 W",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_10W_15W_High_Power_Wireless_Charging_Module_Datasheet.pdf",
    },
    {
      title: "Hoja de datos del receptor 5 W",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_5W_Wireless_Charging_Receiver_Module_Datasheet.pdf",
    },
    {
      title: "Hoja de datos del transmisor magnético 15 W",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_15W_Magnetic_Wireless_Charging_Transmitter_Datasheet.pdf",
    },
    {
      title: "Hoja de datos del receptor flexible 5 W",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_5W_Flexible_Wireless_Charging_Receiver_Module_Datasheet_v3.pdf",
    },
    {
      title: "Hoja de datos del transmisor multiprotocolo 15 W",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_15W_Wireless_Charging_Transmitter_Module_Datasheet.pdf",
    },
    {
      title: "Hoja de datos del transmisor magnético compacto 15 W",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_15W_Compact_Magnetic_Wireless_Charging_Transmitter_Datasheet.pdf",
    },
    {
      title: "Hoja de datos del transmisor de 25 mm de alcance",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_25mm_Long_Distance_Wireless_Power_Transmitter_Datasheet_Only.pdf",
    },
    {
      title: "Hoja de datos de transmisores 5 W / 15 W",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_5W_15W_Wireless_Charging_Transmitter_Modules_Datasheet.pdf",
    },
    {
      title: "Hoja de datos TX-523 15 W de largo alcance",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_TX523_15W_Long_Distance_Wireless_Charging_Transmitter_Datasheet.pdf",
    },
    {
      title: "Hoja de datos conceptual MedCharge CareHub 120",
      type: "Hoja de datos",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/MedCharge_CareHub_120_Concept_Datasheet.pdf",
    },
    {
      title: "Especificación del hub para mesa de reuniones",
      type: "Hoja de datos",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Multifunction_Conference_Table_Power_Hub_Specification.pdf",
    },
    {
      title: "Especificación del hub de escritorio K01 / K02",
      type: "Hoja de datos",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_K01_K02_Wireless_Desktop_Power_Hub_Specification.pdf",
    },
    {
      title: "Especificación del módulo de carga embebido",
      type: "Hoja de datos",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Embedded_Wireless_Charging_Module_Specification.pdf",
    },
    {
      title: "Especificación del hub de carga inalámbrica",
      type: "Hoja de datos",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Wireless_Charging_Power_Hub_Specification.pdf",
    },
    {
      title: "Especificación del módulo embebido 20 W",
      type: "Hoja de datos",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_20W_Embedded_Wireless_Charging_Module_Specification.pdf",
    },
    {
      title: "Especificación del hub giratorio empotrado",
      type: "Hoja de datos",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Rotating_Recessed_Wireless_Charging_Power_Hub_Specification.pdf",
    },
    {
      title: "Especificación de la almohadilla QC 3.0",
      type: "Hoja de datos",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Wireless_Charging_Pad_QC3_Adapter_Specification.pdf",
    },
    {
      title: "Especificación de la almohadilla de 75 mm",
      type: "Hoja de datos",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_75mm_Wireless_Charging_Pad_Specification.pdf",
    },
    {
      title: "Especificación del cargador 75 mm con tornillo",
      type: "Hoja de datos",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_75mm_Bolt_Mount_Wireless_Charger_Specification.pdf",
    },
    {
      title: "Especificación de la almohadilla ultrafina aislada",
      type: "Hoja de datos",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Ultra_Slim_Thermally_Isolated_Wireless_Charging_Pad_Specification.pdf",
    },
    {
      title: "Especificación de la base de carga para ratón gamer",
      type: "Hoja de datos",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Gaming_Mouse_Wireless_Charging_Dock_Specification.pdf",
    },
    {
      title: "Hoja de datos del convertidor USB Type-C PD de entrada amplia",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/consumer-oriented-products/SiCore_Wide_Input_USB_TypeC_PD_DC_Power_Converter_Datasheet.pdf",
    },
    {
      title: "Hoja de datos del convertidor DC-DC IP68 de alta potencia",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/consumer-oriented-products/SiCore_IP68_High_Power_DC_DC_Converter_Datasheet.pdf",
    },
    {
      title: "Hoja de datos EV60-T1219 57 W 12 V a 19 V IP68",
      type: "Hoja de datos",
      date: "2026-09-20",
      href: "/downloads/consumer-oriented-products/SiCore_EV60_T1219_57W_12V_to_19V_IP68_DC_DC_Converter_Datasheet.pdf",
    },
    {
      title: "Hoja de datos conceptual PowerSwap DUO 400",
      type: "Hoja de datos",
      date: "2026-09-17",
      href: "/downloads/docking/PowerSwap_Duo_400_Concept_Datasheet.pdf",
    },
    {
      title: "Especificación conceptual CompactDock-R120",
      type: "Hoja de datos",
      date: "2026-09-17",
      href: "/downloads/docking/SiCore_CompactDock_R120_Concept_Specification.pdf",
    },
    {
      title: "Especificación conceptual SideCharge-150",
      type: "Hoja de datos",
      date: "2026-09-17",
      href: "/downloads/docking/SiCore_SideCharge_150_Concept_Specification.pdf",
    },
    {
      title: "Hoja de datos AutoDock Mini 60",
      type: "Hoja de datos",
      date: "2026-09-17",
      href: "/downloads/docking/AutoDock_Mini_60_Product_Datasheet.pdf",
    },
    {
      title: "Hoja de datos de la placa de control C63A",
      type: "Hoja de datos",
      date: "2026-09-16",
      href: "/downloads/integrated-boards/C63A-Robot-Control-Board-Datasheet.pdf",
    },
    {
      title: "Hoja de datos de la SBC industrial A40i",
      type: "Hoja de datos",
      date: "2026-09-16",
      href: "/downloads/integrated-boards/A40i-Industrial-SBC-Datasheet.pdf",
    },
    {
      title: "Hoja de datos HDSP-DF28346P DSP + FPGA",
      type: "Hoja de datos",
      date: "2026-09-16",
      href: "/downloads/integrated-boards/HDSP_DF28346P_DSP_FPGA_Industrial_Control_Board_English_Datasheet.pdf",
    },
    {
      title: "Hoja de datos de la pasarela BMG800",
      type: "Hoja de datos",
      date: "2026-09-16",
      href: "/downloads/integrated-boards/BMG800_Industrial_Edge_Computing_Gateway_English_Datasheet.pdf",
    },
    {
      title: "Hoja de datos de la placa núcleo T527",
      type: "Hoja de datos",
      date: "2026-09-16",
      href: "/downloads/integrated-boards/T527_Industrial_Core_Board_Datasheet.pdf",
    },
    {
      title: "Hoja de Datos del Transmisor de Energía Inalámbrica de 60W",
      type: "Hoja de datos",
      date: "2026-03-10",
      href: "/contact",
    },
    {
      title: "Hoja de Datos del Receptor de Energía Inalámbrica de 200W",
      type: "Hoja de datos",
      date: "2026-03-10",
      href: "/contact",
    },
    {
      title: "Hoja de Datos del Módulo de Carga Industrial de 800W",
      type: "Hoja de datos",
      date: "2026-02-25",
      href: "/contact",
    },
    {
      title: "Hoja de Datos del Sistema de Carga AGV de 1500W",
      type: "Hoja de datos",
      date: "2026-02-12",
      href: "/contact",
    },
    {
      title: "Hoja de Datos de la Plataforma de Electrónica de Potencia de 3000W",
      type: "Hoja de datos",
      date: "2026-01-30",
      href: "/contact",
    },
  ],
  certificate: [
    {
      title: "Declaración de Conformidad CE",
      type: "Certificado",
      date: "2025-12-15",
      href: "/contact",
    },
    {
      title: "Certificado de Cumplimiento FCC",
      type: "Certificado",
      date: "2025-11-20",
      href: "/contact",
    },
    {
      title: "Declaración de Cumplimiento RoHS",
      type: "Certificado",
      date: "2025-10-08",
      href: "/contact",
    },
  ],
};

export const downloadNavLinks = downloadCategories.map((category) => ({
  label: category.label,
  href: `/download#${category.id}`,
  id: category.id,
}));

export function getDownloadCategoryFromHash(hash: string): DownloadCategoryId | null {
  const id = hash.replace(/^#/, "");
  return downloadCategories.some((category) => category.id === id)
    ? (id as DownloadCategoryId)
    : null;
}

export const downloadPageMeta = {
  title: "Descargar Documentos y Hojas de Datos de Carga Inalámbrica",
  description:
    "Regístrese para descargar folletos, documentos de producto, herramientas de software, hojas de datos y certificados de SiCore Dynamics sobre tecnologías avanzadas de carga inalámbrica y estaciones de carga inteligentes.",
};

export const downloadFaqs = [
  {
    question: "¿Dónde puedo descargar los documentos de carga inalámbrica de SiCore?",
    answer:
      "Visite el Centro de Descargas de SiCore Dynamics para explorar folletos, documentos de producto, herramientas de software, hojas de datos y certificados de cumplimiento. Es necesario registrarse con sus datos de contacto antes de poder descargar los archivos.",
  },
  {
    question: "¿Necesito registrarme antes de descargar?",
    answer:
      "Sí. Para descargar documentos, regístrese con su nombre, empresa, correo electrónico corporativo y número de teléfono. Después del registro, el acceso a las descargas se desbloqueará en su navegador.",
  },
  {
    question: "¿Qué tipos de descargas ofrece SiCore?",
    answer:
      "SiCore ofrece folletos, guías de integración de producto, herramientas de software, hojas de datos técnicas para plataformas de 60W a 3000W, y certificados regulatorios para productos de carga inalámbrica.",
  },
  {
    question: "¿Puedo descargar hojas de datos para carga inalámbrica de robótica y AGV?",
    answer:
      "Sí. Después del registro, SiCore ofrece hojas de datos y documentos de producto para soluciones de carga inalámbrica utilizadas en robots móviles, flotas AGV/AMR, drones y sistemas de automatización industrial.",
  },
];
