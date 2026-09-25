import { pogoPinChargingDockPage as pageEn } from "@/lib/pogo-pin-charging-dock";

export const pogoPinChargingDockPage = {
  ...pageEn,
  title: "紧凑型 Pogo Pin 充电坞",
  tagline: "可靠供电，极小体积。",
  description: "采用弹簧顶针的紧凑充电坞，专为手持医疗设备、扫码枪与便携仪器设计。",
  heroImageAlt: "SC-PD10 紧凑型 Pogo Pin 充电坞",
  highlights: [
    { title: "Pogo Pin", text: "可靠连接", icon: "pin" as const },
    { title: "安全充电", text: "过流保护", icon: "safe" as const },
    { title: "紧凑设计", text: "节省空间", icon: "compact" as const },
    { title: "USB Type-C", text: "供电便捷", icon: "usb" as const },
  ],
  performance: {
    ...pageEn.performance,
    title: "小体积，大性能。",
    body: "面向医疗与工业日常使用，兼顾空间、可靠性与卫生要求。",
    imageAlt: "手持仪器放置在 SC-PD10 充电坞中",
    points: [
      "弹簧顶针保证稳定电气接触。",
      "过流、过压与短路保护。",
      "耐用 ABS 外壳，防滑底座。",
    ],
  },
  devices: {
    title: "为手持设备设计",
    intro: "适用于多种便携设备的理想充电方案。",
    moreLabel: "以及更多",
    items: [
      { ...pageEn.devices.items[0], title: "医用体温计", imageAlt: "医用体温计在 SC-PD10 充电坞中充电" },
      { ...pageEn.devices.items[1], title: "条码扫描枪", imageAlt: "条码扫描枪在 SC-PD10 充电坞中充电" },
      { ...pageEn.devices.items[2], title: "便携仪器", imageAlt: "便携仪器在 SC-PD10 充电坞中充电" },
      { ...pageEn.devices.items[3], title: "移动数据终端", imageAlt: "移动数据终端在 SC-PD10 充电坞中充电" },
    ],
  },
  specsTitle: "技术规格",
  specs: [
    { label: "输入", value: "5V⎓2A (USB Type-C)", icon: "power" as const },
    { label: "输出", value: "5V⎓2A (Pogo Pin)", icon: "output" as const },
    { label: "接触电阻", value: "≤ 30 mΩ", icon: "gauge" as const },
    { label: "工作温度", value: "-20°C ~ 60°C", icon: "temp" as const },
    { label: "保护", value: "过流 / 过压 / 短路", icon: "safe" as const },
    { label: "机械寿命", value: "≥ 50,000 次", icon: "life" as const },
  ],
  dimensionsTitle: "尺寸",
  dimensions: [
    { ...pageEn.dimensions[0], label: "正面" },
    { ...pageEn.dimensions[1], label: "侧面" },
    { ...pageEn.dimensions[2], label: "背面" },
    { ...pageEn.dimensions[3], label: "顶面" },
    { ...pageEn.dimensions[4], label: "底面" },
  ],
  applicationsTitle: "应用场景",
  applications: [
    { ...pageEn.applications[0], title: "医院与诊所", imageAlt: "整洁的医院诊室" },
    { ...pageEn.applications[1], title: "实验室", imageAlt: "实验室技术人员" },
    { ...pageEn.applications[2], title: "药房", imageAlt: "药剂师核对药品" },
    { ...pageEn.applications[3], title: "仓储物流", imageAlt: "仓库货架通道" },
    { ...pageEn.applications[4], title: "现场服务", imageAlt: "现场技术人员" },
  ],
  cta: {
    title: "每一次，都稳定充电。",
    description:
      "SC-PD10 Pogo Pin 充电坞以紧凑体积提供稳定供电，适合现代医疗、工业与移动应用。",
    button: "联系我们",
  },
} as const;
