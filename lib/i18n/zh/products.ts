export const productTiers = [
  {
    id: "60w",
    label: "60W",
    title: "60W 无线电源系统",
    tagline: "为轻型智能机器打造的紧凑型无线电源。",
    description:
      "60W 平台为小型机器人、无人机及便携式自动化设备提供高效无线充电，在空间、重量与集成简便性方面具有关键优势。",
    applications: ["服务机器人", "无人机对接", "便携式 AMR", "实验室自动化"],
    highlights: ["高效谐振传输", "紧凑型 TX/RX 模块", "OEM 集成就绪"],
    image: "/images/product-rx.png",
  },
  {
    id: "200w",
    label: "200W",
    title: "200W 无线电源系统",
    tagline: "为移动平台打造的可靠中功率无线充电方案。",
    description:
      "200W 系统支持移动机器人及自动化设备的持续运行，在商业环境中实现可靠的停靠即充性能。",
    applications: ["移动机器人", "仓储 AMR", "巡检机器人", "智能工厂设备"],
    highlights: ["对位容差充电", "工业通信就绪", "可扩展固件控制"],
    image: "/images/product-tx.png",
  },
  {
    id: "800w",
    label: "800W",
    title: "800W 无线电源系统",
    tagline: "为 AGV 与工业移动设备打造的高吞吐无线电源。",
    description:
      "800W 平台专为 AGV 与工业移动系统设计，满足更快能量传输、稳健热性能与关键任务级运行时长的需求。",
    applications: ["AGV 车队", "工业 AMR", "自动化物流", "工厂移动系统"],
    highlights: ["高速充电吞吐", "工业级防护", "车队就绪架构"],
    image: "/images/mobile-robots.jpg",
  },
  {
    id: "1500w",
    label: "1500W",
    title: "1500W 无线电源系统",
    tagline: "为高负荷自动化工况打造的重载无线充电方案。",
    description:
      "1500W 方案凭借先进功率电子、热管理与系统级安全设计，支持高负荷工业平台实现持续自动化运行。",
    applications: ["重载 AGV", "工业充电对接站", "大型移动平台", "全天候自动化产线"],
    highlights: ["高功率密度", "先进热设计", "安全与异物检测监控"],
    image: "/images/product-controller.png",
  },
  {
    id: "3000w",
    label: "3000W",
    title: "3000W 无线电源系统",
    tagline: "面向工业能源基础设施的最大功率无线平台。",
    description:
      "3000W 系统为大型工业部署、充电平台与高能耗自动化系统提供 SiCore 最高功率的无线充电能力。该系统可输出高达 3 kW 功率，满载效率高达 87%，充电距离 35–80 mm，支持 CV/CC 充电模式，并配备 CAN / RS485 通信接口以实现企业级集成。",
    applications: ["工业充电平台", "高功率 AGV 系统", "大型机器人车队", "高能耗自动化"],
    highlights: [
      "最大输出 3 kW，满载效率高达 87%",
      "85 kHz 下 35–80 mm 无线充电距离",
      "CV/CC 充电，支持自动检测与启动",
      "CAN / RS485 接口及 IP65 灌封线圈",
    ],
    image: "/images/product-3000w.png",
  },
] as const;

export type ProductTierId = (typeof productTiers)[number]["id"];

export const wirelessLowPowerTier = {
  id: "30w-or-less",
  label: "30W 及以下",
  title: "30W 及以下无线功率模块",
  tagline: "额定 30 W 及以下的 Qi 与嵌入式无线充电模块。",
  description:
    "面向消费电子、家具嵌入与 OEM 产品的紧凑型发射、接收、控制器与线圈模块，无线充电功率不超过 30 W。",
  applications: ["消费电子", "家具嵌入", "Qi 接收端", "桌面充电"],
  highlights: ["Qi / Qi2 等级模块", "典型 5 W 至 15 W", "发射、接收与控制板"],
  image:
    "/images/products/wireless-power-modules/30w-or-less/long-range-wireless-charging-module/01_complete_wireless_charging_assembly.png",
} as const;

export const productNavLinks = [
  {
    id: "wireless-power-modules",
    label: "无线功率模块",
    href: "/products/wireless-power-modules",
  },
  {
    id: "integrated-boards",
    label: "集成板卡",
    href: "/products/integrated-boards",
  },
  {
    id: "autonomous-software",
    label: "自主软件",
    href: "/products/autonomous-software",
  },
  {
    id: "docking",
    label: "对接系统",
    href: "/products/docking",
  },
  {
    id: "consumer-oriented-products",
    label: "消费类产品",
    href: "/products/consumer-oriented-products",
  },
  {
    id: "ev-charging-gun",
    label: "电动汽车充电枪",
    href: "/products/ev-charging-gun",
  },
] as const;

export function getProductTierFromHash(hash: string): ProductTierId | null {
  const id = hash.replace(/^#/, "");
  return productTiers.some((tier) => tier.id === id) ? (id as ProductTierId) : null;
}

export const productsPageMeta = {
  title: "无线电源产品",
  description:
    "探索 SiCore Dynamics 覆盖 60W 至 3000W 的无线电源产品，适用于机器人、AGV、无人机及工业自动化系统。",
};
