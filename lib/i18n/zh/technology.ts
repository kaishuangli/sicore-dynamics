export const technologyPlatforms = [
  {
    id: "wireless-energy-platform",
    label: "无线能量平台",
    shortLabel: "无线能量",
    eyebrow: "技术平台",
    title: "无线能量平台",
    description:
      "面向高效、可靠、可扩展能量传输打造的先进无线供电技术——涵盖物理、磁路，直至控制与系统集成的全部环节。",
    icon: "wireless" as const,
    topics: [
      "物理层",
      "磁路层",
      "功率层",
      "控制层",
      "系统层",
    ],
  },
  {
    id: "intelligent-charging",
    label: "智能充电系统",
    shortLabel: "智能充电",
    eyebrow: "技术平台",
    title: "智能充电系统",
    description:
      "通过自适应充电算法与实时系统智能，协调电池、充电站与车队运营。",
    icon: "ai" as const,
    topics: [
      "充电算法",
      "电池管理",
      "车队充电",
      "通信",
      "诊断",
    ],
  },
  {
    id: "plug-free-docking",
    label: "无插拔对接技术",
    shortLabel: "无插拔对接",
    eyebrow: "技术平台",
    title: "无插拔对接技术",
    description:
      "打造无缝对接解决方案，消除自主设备的人工插拔充电环节。",
    icon: "station" as const,
    topics: [
      "对接机构",
      "接触式对接",
      "无线对接",
      "位置检测",
      "户外可靠性",
    ],
  },
  {
    id: "oem-integration",
    label: "OEM 集成",
    shortLabel: "OEM 集成",
    eyebrow: "技术平台",
    title: "OEM 集成",
    description:
      "专为贴合您的产品而设计——从原型到量产，充电方案可自然融入现有设备。",
    icon: "power" as const,
    topics: [
      "机械集成",
      "电气集成",
      "软件与通信",
      "系统定制",
      "从原型到量产",
    ],
  },
] as const;

export type TechnologyPlatformId = (typeof technologyPlatforms)[number]["id"];

export type TechnologyPlatform = (typeof technologyPlatforms)[number];

export const technologyNavLinks = technologyPlatforms.map((platform) => ({
  label: platform.label,
  href: `/technology/${platform.id}`,
  id: platform.id,
}));

export function getTechnologyPlatform(id: string): TechnologyPlatform | undefined {
  return technologyPlatforms.find((platform) => platform.id === id);
}

export const technologyPortfolio = technologyPlatforms.map((platform) => ({
  title: platform.label,
  description: platform.description,
  icon: platform.icon,
  href: `/technology/${platform.id}`,
  tabId: platform.id,
}));

/** @deprecated Use technologyPlatforms — kept for legacy hash redirects */
export const techSubNavItems = [
  { id: "purpose" as const, label: "定位", shortLabel: "定位" },
  ...technologyPlatforms.map((platform) => ({
    id: platform.id,
    label: platform.label,
    shortLabel: platform.shortLabel,
    summary: platform.description,
  })),
];

export type TechSubNavId = (typeof techSubNavItems)[number]["id"];

export function getTechTabFromHash(hash: string): TechSubNavId | null {
  const id = hash.replace(/^#/, "");
  return techSubNavItems.some((item) => item.id === id) ? (id as TechSubNavId) : null;
}

export const wirelessFeatures = [
  {
    title: "高效率",
    description:
      "优化的谐振式无线电能传输，实现最小损耗与持续稳定的工业级性能。",
  },
  {
    title: "对准容差",
    description:
      "在动态机器人与自动化环境中的位置偏差下，仍可实现可靠的电能传输。",
  },
  {
    title: "异物检测",
    description: "安全监测，保护人员、设备与充电基础设施。",
  },
  {
    title: "动态充电",
    description:
      "支持移动设备与 AGV 的停靠充电与行进中充电。",
  },
  {
    title: "可扩展功率",
    description: "模块化平台架构，功率覆盖 10W 至 50kW+，满足各类规模的 OEM 集成需求。",
    highlight: "10W–50kW+",
  },
];

export const chargingStations = [
  {
    title: "机器人充电桩",
    description: "面向服务机器人与 AMR 平台的自主无线充电。",
    image: "/images/industry-robotics.png",
  },
  {
    title: "AGV 充电站",
    description: "无需人工连接器，实现仓储与工厂 AGV 的持续运行。",
    image: "/images/mobile-robots.jpg",
  },
  {
    title: "无人机充电站",
    description: "面向飞行与无人机系统的安全、可重复无线能量传输。",
    image: "/images/industry-drones.png",
  },
  {
    title: "工业充电平台",
    description: "面向关键任务自动化部署的可扩展充电基础设施。",
    image: "/images/product-tx.png",
  },
];

export const aiPowerTopics = [
  {
    title: "自适应充电",
    description: "根据负载与电池状态实时调整充电曲线。",
  },
  {
    title: "电池健康监测",
    description: "持续监测以延长电池寿命并提升车队可靠性。",
  },
  {
    title: "预测性维护",
    description: "基于数据的预警，在故障发生前降低停机风险。",
  },
  {
    title: "智能能量优化",
    description: "在多设备充电环境中通过 AI 辅助实现能量调度。",
  },
  {
    title: "实时诊断",
    description: "实时掌握功率级健康状况与充电性能。",
  },
];

export const aiWorkflowSteps = [
  "传感器数据",
  "AI 控制",
  "功率优化",
  "电池保护",
  "云端 / 系统反馈",
];

export const powerElectronicsFeatures = [
  {
    title: "工业级电能转换",
    description:
      "为高强度无线充电工况设计的高性能功率级。",
  },
  {
    title: "模块化架构",
    description: "可扩展的发射端、接收端与控制器模块，支持灵活的 OEM 集成。",
  },
  {
    title: "控制与保护",
    description:
      "先进的门极驱动、监测与故障保护，确保系统可靠运行。",
  },
  {
    title: "系统集成就绪",
    description:
      "专为搭配 SiCore 无线线圈、固件与智能充电平台而设计。",
  },
];

export const engineeringCapabilities = [
  { title: "电力电子", icon: "bolt" },
  { title: "嵌入式系统", icon: "chip" },
  { title: "磁性设计", icon: "coil" },
  { title: "热管理", icon: "thermal" },
  { title: "EMC 设计", icon: "emc" },
  { title: "安全保护", icon: "shield" },
  { title: "工业通信", icon: "comm" },
  { title: "固件开发", icon: "firmware" },
];

export const technologyAdvantages = [
  { value: "10W–50kW+", label: "可扩展功率" },
  { value: "高效率", label: "功率传输" },
  { value: "OEM 就绪", label: "系统集成" },
  { value: "工业级", label: "可靠性" },
  { value: "AI 赋能", label: "智能化" },
  { value: "从概念到量产", label: "工程支持" },
];

export const technologyPageMeta = {
  title: "技术平台",
  description:
    "SiCore Dynamics 技术平台：面向自主机器的无线能量平台、智能充电系统、无插拔对接技术与 OEM 集成。",
};

/** Legacy hash / slug → current platform route */
export const technologyHashRedirects: Record<string, TechnologyPlatformId> = {
  "wireless-charging": "wireless-energy-platform",
  "wireless-power": "wireless-energy-platform",
  "wireless-energy-platform": "wireless-energy-platform",
  "charging-stations": "plug-free-docking",
  "ai-power": "intelligent-charging",
  "power-electronics": "oem-integration",
  "intelligent-charging": "intelligent-charging",
  "plug-free-docking": "plug-free-docking",
  "oem-integration": "oem-integration",
};
