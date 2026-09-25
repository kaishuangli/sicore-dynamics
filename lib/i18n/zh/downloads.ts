export const downloadCategories = [
  {
    id: "brochure",
    label: "宣传册",
    description: "无线电源平台的公司及产品宣传册。",
  },
  {
    id: "product-document",
    label: "产品文档",
    description: "产品指南、集成说明与平台技术文档。",
  },
  {
    id: "software-tools",
    label: "软件工具",
    description: "固件工具、配置工具与软件更新。",
  },
  {
    id: "datasheet",
    label: "数据手册",
    description: "发射端、接收端与电源模块的技术数据手册。",
  },
  {
    id: "certificate",
    label: "认证证书",
    description: "合规认证、测试报告与法规文件。",
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
      title: "SiCore Dynamics 企业宣传册",
      type: "宣传册",
      date: "2026-03-01",
      href: "/contact",
    },
    {
      title: "面向智能机器的无线充电方案",
      type: "宣传册",
      date: "2026-02-15",
      href: "/contact",
    },
    {
      title: "智能充电站概览",
      type: "宣传册",
      date: "2026-01-20",
      href: "/contact",
    },
  ],
  "product-document": [
    {
      title: "无线电源平台集成指南",
      type: "产品文档",
      date: "2026-03-05",
      href: "/contact",
    },
    {
      title: "AGV/AMR 充电站产品指南",
      type: "产品文档",
      date: "2026-02-28",
      href: "/contact",
    },
    {
      title: "机器人充电对接系统概览",
      type: "产品文档",
      date: "2026-02-10",
      href: "/contact",
    },
    {
      title: "OEM 无线电源模块参考手册",
      type: "产品文档",
      date: "2026-01-18",
      href: "/contact",
    },
  ],
  "software-tools": [
    {
      title: "SiCore 电源配置工具",
      type: "软件工具",
      date: "2026-03-08",
      href: "/contact",
    },
    {
      title: "无线充电诊断工具",
      type: "软件工具",
      date: "2026-02-22",
      href: "/contact",
    },
    {
      title: "固件更新包 — TX 控制器",
      type: "软件工具",
      date: "2026-02-01",
      href: "/contact",
    },
  ],
  datasheet: [
    {
      title: "远距无线充电模块规格书",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_Long_Range_Wireless_Charging_Module.pdf",
    },
    {
      title: "FlexCharge-RX 产品指南",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_FlexCharge_RX_Product_Guide.pdf",
    },
    {
      title: "Qi2 15W 磁吸无线快充模块规格书",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_Qi2_15W_Magnetic_Wireless_Fast_Charging_Module_Datasheet.pdf",
    },
    {
      title: "15W Qi 无线快充发射模块规格书",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_15W_Qi_Fast_Wireless_Charging_Transmitter_Module_Datasheet.pdf",
    },
    {
      title: "宽电压无线充电控制板规格书",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_Wide_Input_Wireless_Charging_Controller_Datasheet_CORRECTED.pdf",
    },
    {
      title: "10W / 15W 大功率无线充电模块规格书",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_10W_15W_High_Power_Wireless_Charging_Module_Datasheet.pdf",
    },
    {
      title: "5W 无线充电接收模块规格书",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_5W_Wireless_Charging_Receiver_Module_Datasheet.pdf",
    },
    {
      title: "15W 磁吸无线充电发射模块规格书",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_15W_Magnetic_Wireless_Charging_Transmitter_Datasheet.pdf",
    },
    {
      title: "5W 柔性无线充电接收模块规格书",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_5W_Flexible_Wireless_Charging_Receiver_Module_Datasheet_v3.pdf",
    },
    {
      title: "15W 多协议无线充电发射模块规格书",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_15W_Wireless_Charging_Transmitter_Module_Datasheet.pdf",
    },
    {
      title: "15W 紧凑磁吸无线充电发射模块规格书",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_15W_Compact_Magnetic_Wireless_Charging_Transmitter_Datasheet.pdf",
    },
    {
      title: "25 mm 远距无线功率发射模块规格书",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_25mm_Long_Distance_Wireless_Power_Transmitter_Datasheet_Only.pdf",
    },
    {
      title: "5W / 15W 无线充电发射模块规格书",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_5W_15W_Wireless_Charging_Transmitter_Modules_Datasheet.pdf",
    },
    {
      title: "TX-523 15W 远距无线充电发射模块规格书",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/wireless-power-modules/SiCore_TX523_15W_Long_Distance_Wireless_Charging_Transmitter_Datasheet.pdf",
    },
    {
      title: "MedCharge CareHub 120 概念规格书",
      type: "数据手册",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/MedCharge_CareHub_120_Concept_Datasheet.pdf",
    },
    {
      title: "多功能会议桌电源坞规格书",
      type: "数据手册",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Multifunction_Conference_Table_Power_Hub_Specification.pdf",
    },
    {
      title: "K01 / K02 无线桌面电源坞规格书",
      type: "数据手册",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_K01_K02_Wireless_Desktop_Power_Hub_Specification.pdf",
    },
    {
      title: "嵌入式无线充电模块规格书",
      type: "数据手册",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Embedded_Wireless_Charging_Module_Specification.pdf",
    },
    {
      title: "无线充电电源座规格书",
      type: "数据手册",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Wireless_Charging_Power_Hub_Specification.pdf",
    },
    {
      title: "20W 嵌入式无线充电模块规格书",
      type: "数据手册",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_20W_Embedded_Wireless_Charging_Module_Specification.pdf",
    },
    {
      title: "旋转嵌入式无线充电电源坞规格书",
      type: "数据手册",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Rotating_Recessed_Wireless_Charging_Power_Hub_Specification.pdf",
    },
    {
      title: "QC 3.0 无线充电板规格书",
      type: "数据手册",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Wireless_Charging_Pad_QC3_Adapter_Specification.pdf",
    },
    {
      title: "75 mm 无线充电板规格书",
      type: "数据手册",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_75mm_Wireless_Charging_Pad_Specification.pdf",
    },
    {
      title: "75 mm 螺栓固定无线充电器规格书",
      type: "数据手册",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_75mm_Bolt_Mount_Wireless_Charger_Specification.pdf",
    },
    {
      title: "超薄热隔离无线充电板规格书",
      type: "数据手册",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Ultra_Slim_Thermally_Isolated_Wireless_Charging_Pad_Specification.pdf",
    },
    {
      title: "游戏鼠标无线充电座规格书",
      type: "数据手册",
      date: "2026-09-19",
      href: "/downloads/consumer-oriented-products/SiCore_Gaming_Mouse_Wireless_Charging_Dock_Specification.pdf",
    },
    {
      title: "宽电压 USB Type-C PD DC 电源转换器规格书",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/consumer-oriented-products/SiCore_Wide_Input_USB_TypeC_PD_DC_Power_Converter_Datasheet.pdf",
    },
    {
      title: "IP68 高功率 DC-DC 转换器规格书",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/consumer-oriented-products/SiCore_IP68_High_Power_DC_DC_Converter_Datasheet.pdf",
    },
    {
      title: "EV60-T1219 57W 12V 转 19V IP68 DC-DC 规格书",
      type: "数据手册",
      date: "2026-09-20",
      href: "/downloads/consumer-oriented-products/SiCore_EV60_T1219_57W_12V_to_19V_IP68_DC_DC_Converter_Datasheet.pdf",
    },
    {
      title: "PowerSwap DUO 400 概念规格书",
      type: "数据手册",
      date: "2026-09-17",
      href: "/downloads/docking/PowerSwap_Duo_400_Concept_Datasheet.pdf",
    },
    {
      title: "CompactDock-R120 概念规格书",
      type: "数据手册",
      date: "2026-09-17",
      href: "/downloads/docking/SiCore_CompactDock_R120_Concept_Specification.pdf",
    },
    {
      title: "SideCharge-150 概念规格书",
      type: "数据手册",
      date: "2026-09-17",
      href: "/downloads/docking/SiCore_SideCharge_150_Concept_Specification.pdf",
    },
    {
      title: "AutoDock Mini 60 产品规格书",
      type: "数据手册",
      date: "2026-09-17",
      href: "/downloads/docking/AutoDock_Mini_60_Product_Datasheet.pdf",
    },
    {
      title: "C63A 机器人控制板规格书",
      type: "数据手册",
      date: "2026-09-16",
      href: "/downloads/integrated-boards/C63A-Robot-Control-Board-Datasheet.pdf",
    },
    {
      title: "A40i 工业单板计算机规格书",
      type: "数据手册",
      date: "2026-09-16",
      href: "/downloads/integrated-boards/A40i-Industrial-SBC-Datasheet.pdf",
    },
    {
      title: "HDSP-DF28346P DSP+FPGA 工控板规格书",
      type: "数据手册",
      date: "2026-09-16",
      href: "/downloads/integrated-boards/HDSP_DF28346P_DSP_FPGA_Industrial_Control_Board_English_Datasheet.pdf",
    },
    {
      title: "BMG800 工业边缘计算网关规格书",
      type: "数据手册",
      date: "2026-09-16",
      href: "/downloads/integrated-boards/BMG800_Industrial_Edge_Computing_Gateway_English_Datasheet.pdf",
    },
    {
      title: "T527 工业核心板规格书",
      type: "数据手册",
      date: "2026-09-16",
      href: "/downloads/integrated-boards/T527_Industrial_Core_Board_Datasheet.pdf",
    },
    {
      title: "60W 无线电源发射端数据手册",
      type: "数据手册",
      date: "2026-03-10",
      href: "/contact",
    },
    {
      title: "200W 无线电源接收端数据手册",
      type: "数据手册",
      date: "2026-03-10",
      href: "/contact",
    },
    {
      title: "800W 工业充电模块数据手册",
      type: "数据手册",
      date: "2026-02-25",
      href: "/contact",
    },
    {
      title: "1500W AGV 充电系统数据手册",
      type: "数据手册",
      date: "2026-02-12",
      href: "/contact",
    },
    {
      title: "3000W 功率电子平台数据手册",
      type: "数据手册",
      date: "2026-01-30",
      href: "/contact",
    },
  ],
  certificate: [
    {
      title: "CE 符合性声明",
      type: "认证证书",
      date: "2025-12-15",
      href: "/contact",
    },
    {
      title: "FCC 合规认证",
      type: "认证证书",
      date: "2025-11-20",
      href: "/contact",
    },
    {
      title: "RoHS 合规声明",
      type: "认证证书",
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
  title: "下载无线充电文档与数据手册",
  description:
    "注册后即可下载 SiCore Dynamics 的宣传册、产品文档、软件工具、数据手册与认证证书，了解先进无线充电技术与智能充电站。",
};

export const downloadFaqs = [
  {
    question: "如何下载 SiCore 无线充电相关文档？",
    answer:
      "访问 SiCore Dynamics 下载中心，浏览宣传册、产品文档、软件工具、数据手册与合规认证证书。下载文件前需先提交您的联系方式完成注册。",
  },
  {
    question: "下载前是否需要注册？",
    answer:
      "是的。下载文档前，请填写您的姓名、公司、企业邮箱与电话号码完成注册。注册完成后，您的浏览器即可解锁下载权限。",
  },
  {
    question: "SiCore 提供哪些类型的下载资源？",
    answer:
      "SiCore 提供宣传册、产品集成指南、软件工具、覆盖 60W 至 3000W 平台的技术数据手册，以及无线充电产品的法规认证证书。",
  },
  {
    question: "我可以下载用于机器人与 AGV 的无线充电数据手册吗？",
    answer:
      "可以。注册完成后，SiCore 提供适用于移动机器人、AGV/AMR 车队、无人机与工业自动化系统的无线充电数据手册与产品文档。",
  },
];
