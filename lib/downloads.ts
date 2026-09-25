export const downloadCategories = [
  {
    id: "brochure",
    label: "Brochure",
    description: "Company and product brochures for wireless power platforms.",
  },
  {
    id: "product-document",
    label: "Product Document",
    description: "Product guides, integration notes, and platform documentation.",
  },
  {
    id: "software-tools",
    label: "Software Tools",
    description: "Firmware utilities, configuration tools, and software updates.",
  },
  {
    id: "datasheet",
    label: "Datasheet",
    description: "Technical datasheets for transmitters, receivers, and power modules.",
  },
  {
    id: "certificate",
    label: "Certificate",
    description: "Compliance certificates, test reports, and regulatory documents.",
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
      title: "SiCore Dynamics Corporate Brochure",
      type: "Brochure",
      date: "2026-03-01",
      href: "/contact",
    },
    {
      title: "Wireless Charging for Intelligent Machines",
      type: "Brochure",
      date: "2026-02-15",
      href: "/contact",
    },
    {
      title: "Intelligent Charging Stations Overview",
      type: "Brochure",
      date: "2026-01-20",
      href: "/contact",
    },
  ],
  "product-document": [
    {
      title: "Wireless Power Platform Integration Guide",
      type: "Product document",
      date: "2026-03-05",
      href: "/contact",
    },
    {
      title: "AGV/AMR Charging Station Product Guide",
      type: "Product document",
      date: "2026-02-28",
      href: "/contact",
    },
    {
      title: "Robot Charging Dock System Overview",
      type: "Product document",
      date: "2026-02-10",
      href: "/contact",
    },
    {
      title: "OEM Wireless Power Module Reference",
      type: "Product document",
      date: "2026-01-18",
      href: "/contact",
    },
  ],
  "software-tools": [
    {
      title: "SiCore Power Configurator",
      type: "Software tools",
      date: "2026-03-08",
      href: "/contact",
    },
    {
      title: "Wireless Charging Diagnostics Utility",
      type: "Software tools",
      date: "2026-02-22",
      href: "/contact",
    },
    {
      title: "Firmware Update Package — TX Controller",
      type: "Software tools",
      date: "2026-02-01",
      href: "/contact",
    },
  ],
  datasheet: [
    {
      title: "Long-Range Wireless Charging Module",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_Long_Range_Wireless_Charging_Module.pdf",
    },
    {
      title: "FlexCharge-RX Product Guide",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_FlexCharge_RX_Product_Guide.pdf",
    },
    {
      title: "Qi2 15W Magnetic Wireless Fast Charging Module Datasheet",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_Qi2_15W_Magnetic_Wireless_Fast_Charging_Module_Datasheet.pdf",
    },
    {
      title: "15W Qi Fast Wireless Charging Transmitter Datasheet",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_15W_Qi_Fast_Wireless_Charging_Transmitter_Module_Datasheet.pdf",
    },
    {
      title: "Wide-Input Wireless Charging Controller Datasheet",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_Wide_Input_Wireless_Charging_Controller_Datasheet_CORRECTED.pdf",
    },
    {
      title: "10W / 15W High-Power Wireless Charging Module Datasheet",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_10W_15W_High_Power_Wireless_Charging_Module_Datasheet.pdf",
    },
    {
      title: "5W Wireless Charging Receiver Module Datasheet",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_5W_Wireless_Charging_Receiver_Module_Datasheet.pdf",
    },
    {
      title: "15W Magnetic Wireless Charging Transmitter Datasheet",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_15W_Magnetic_Wireless_Charging_Transmitter_Datasheet.pdf",
    },
    {
      title: "5W Flexible Wireless Charging Receiver Datasheet",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_5W_Flexible_Wireless_Charging_Receiver_Module_Datasheet_v3.pdf",
    },
    {
      title: "15W Multi-Protocol Wireless Charging Transmitter Datasheet",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_15W_Wireless_Charging_Transmitter_Module_Datasheet.pdf",
    },
    {
      title: "15W Compact Magnetic Wireless Charging Transmitter Datasheet",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_15W_Compact_Magnetic_Wireless_Charging_Transmitter_Datasheet.pdf",
    },
    {
      title: "25 mm Long-Distance Wireless Power Transmitter Datasheet",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_25mm_Long_Distance_Wireless_Power_Transmitter_Datasheet_Only.pdf",
    },
    {
      title: "5W / 15W Wireless Charging Transmitter Modules Datasheet",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_5W_15W_Wireless_Charging_Transmitter_Modules_Datasheet.pdf",
    },
    {
      title: "TX-523 15W Long-Distance Wireless Charging Transmitter Datasheet",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_TX523_15W_Long_Distance_Wireless_Charging_Transmitter_Datasheet.pdf",
    },
    {
      title: "MedCharge CareHub 120 Concept Datasheet",
      type: "Datasheet",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/MedCharge_CareHub_120_Concept_Datasheet.pdf",
    },
    {
      title: "Multifunction Conference Table Power Hub Specification",
      type: "Datasheet",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Multifunction_Conference_Table_Power_Hub_Specification.pdf",
    },
    {
      title: "K01 / K02 Wireless Desktop Power Hub Specification",
      type: "Datasheet",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_K01_K02_Wireless_Desktop_Power_Hub_Specification.pdf",
    },
    {
      title: "Embedded Wireless Charging Module Specification",
      type: "Datasheet",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Embedded_Wireless_Charging_Module_Specification.pdf",
    },
    {
      title: "Wireless Charging Power Hub Specification",
      type: "Datasheet",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Wireless_Charging_Power_Hub_Specification.pdf",
    },
    {
      title: "20W Embedded Wireless Charging Module Specification",
      type: "Datasheet",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_20W_Embedded_Wireless_Charging_Module_Specification.pdf",
    },
    {
      title: "Rotating Recessed Wireless Charging Power Hub Specification",
      type: "Datasheet",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Rotating_Recessed_Wireless_Charging_Power_Hub_Specification.pdf",
    },
    {
      title: "Wireless Charging Pad QC 3.0 Adapter Specification",
      type: "Datasheet",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Wireless_Charging_Pad_QC3_Adapter_Specification.pdf",
    },
    {
      title: "75 mm Wireless Charging Pad Specification",
      type: "Datasheet",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_75mm_Wireless_Charging_Pad_Specification.pdf",
    },
    {
      title: "75 mm Bolt-Mount Wireless Charger Specification",
      type: "Datasheet",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_75mm_Bolt_Mount_Wireless_Charger_Specification.pdf",
    },
    {
      title: "Ultra-Slim Thermally Isolated Wireless Charging Pad Specification",
      type: "Datasheet",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Ultra_Slim_Thermally_Isolated_Wireless_Charging_Pad_Specification.pdf",
    },
    {
      title: "Gaming Mouse Wireless Charging Dock Specification",
      type: "Datasheet",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Gaming_Mouse_Wireless_Charging_Dock_Specification.pdf",
    },
    {
      title: "Wide-Input USB Type-C PD DC Power Converter Datasheet",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/consumer-oriented-products/SiCore_Wide_Input_USB_TypeC_PD_DC_Power_Converter_Datasheet.pdf",
    },
    {
      title: "IP68 High-Power DC-DC Converter Datasheet",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/consumer-oriented-products/SiCore_IP68_High_Power_DC_DC_Converter_Datasheet.pdf",
    },
    {
      title: "EV60-T1219 57W 12V to 19V IP68 DC-DC Converter Datasheet",
      type: "Datasheet",
      date: "2026-09-20",
      href: "/downloads/consumer-oriented-products/SiCore_EV60_T1219_57W_12V_to_19V_IP68_DC_DC_Converter_Datasheet.pdf",
    },
    {
      title: "PowerSwap DUO 400 Concept Datasheet",
      type: "Datasheet",
      date: "2026-09-17",
      href: "/downloads/docking/PowerSwap_Duo_400_Concept_Datasheet.pdf",
    },
    {
      title: "CompactDock-R120 Concept Specification",
      type: "Datasheet",
      date: "2026-09-17",
      href: "/downloads/docking/SiCore_CompactDock_R120_Concept_Specification.pdf",
    },
    {
      title: "SideCharge-150 Concept Specification",
      type: "Datasheet",
      date: "2026-09-17",
      href: "/downloads/docking/SiCore_SideCharge_150_Concept_Specification.pdf",
    },
    {
      title: "AutoDock Mini 60 Product Datasheet",
      type: "Datasheet",
      date: "2026-09-17",
      href: "/downloads/docking/AutoDock_Mini_60_Product_Datasheet.pdf",
    },
    {
      title: "C63A Robot Control Board Datasheet",
      type: "Datasheet",
      date: "2026-09-16",
      href: "/downloads/integrated-boards/C63A-Robot-Control-Board-Datasheet.pdf",
    },
    {
      title: "A40i Industrial SBC Datasheet",
      type: "Datasheet",
      date: "2026-09-16",
      href: "/downloads/integrated-boards/A40i-Industrial-SBC-Datasheet.pdf",
    },
    {
      title: "HDSP-DF28346P DSP + FPGA Control Board Datasheet",
      type: "Datasheet",
      date: "2026-09-16",
      href: "/downloads/integrated-boards/HDSP_DF28346P_DSP_FPGA_Industrial_Control_Board_English_Datasheet.pdf",
    },
    {
      title: "BMG800 Industrial Edge Computing Gateway Datasheet",
      type: "Datasheet",
      date: "2026-09-16",
      href: "/downloads/integrated-boards/BMG800_Industrial_Edge_Computing_Gateway_English_Datasheet.pdf",
    },
    {
      title: "T527 Industrial Core Board Datasheet",
      type: "Datasheet",
      date: "2026-09-16",
      href: "/downloads/integrated-boards/T527_Industrial_Core_Board_Datasheet.pdf",
    },
    {
      title: "60W Wireless Power Transmitter Datasheet",
      type: "Datasheet",
      date: "2026-03-10",
      href: "/contact",
    },
    {
      title: "200W Wireless Power Receiver Datasheet",
      type: "Datasheet",
      date: "2026-03-10",
      href: "/contact",
    },
    {
      title: "800W Industrial Charging Module Datasheet",
      type: "Datasheet",
      date: "2026-02-25",
      href: "/contact",
    },
    {
      title: "1500W AGV Charging System Datasheet",
      type: "Datasheet",
      date: "2026-02-12",
      href: "/contact",
    },
    {
      title: "3000W Power Electronics Platform Datasheet",
      type: "Datasheet",
      date: "2026-01-30",
      href: "/contact",
    },
  ],
  certificate: [
    {
      title: "CE Declaration of Conformity",
      type: "Certificate",
      date: "2025-12-15",
      href: "/contact",
    },
    {
      title: "FCC Compliance Certificate",
      type: "Certificate",
      date: "2025-11-20",
      href: "/contact",
    },
    {
      title: "RoHS Compliance Statement",
      type: "Certificate",
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
  title: "Download Wireless Charging Documents & Datasheets",
  description:
    "Register to download SiCore Dynamics brochures, product documents, software tools, datasheets, and certificates for advanced wireless charging technologies and intelligent charging stations.",
};

export const downloadFaqs = [
  {
    question: "Where can I download SiCore wireless charging documents?",
    answer:
      "Visit the SiCore Dynamics Download Center to browse brochures, product documents, software tools, datasheets, and compliance certificates. Registration with your contact details is required before files can be downloaded.",
  },
  {
    question: "Do I need to register before downloading?",
    answer:
      "Yes. To download documents, register with your name, company, business email, and phone number. After registration, download access is unlocked in your browser.",
  },
  {
    question: "What types of downloads does SiCore provide?",
    answer:
      "SiCore provides brochures, product integration guides, software tools, technical datasheets for 60W to 3000W platforms, and regulatory certificates for wireless charging products.",
  },
  {
    question: "Can I download datasheets for robotics and AGV wireless charging?",
    answer:
      "Yes. After registration, SiCore offers datasheets and product documents for wireless charging solutions used in mobile robots, AGV/AMR fleets, drones, and industrial automation systems.",
  },
];
