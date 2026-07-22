export const uavContactDock = {
  title: "接触式充电对接站",
  description:
    "面向自主无人机机队的接触式充电解决方案，可实现高效能、快速充电与可靠的自主运行。",
  image: "/images/uav-contact-charging-hero.jpg",
  imageAlt: "自主无人机悬停于 SiCore 接触式充电对接站上方",
  features: [
    {
      title: "精准降落",
      description: "RTK + AI 导航降落，精度可达 ±10–30 cm，确保可靠接触对接。",
    },
    {
      title: "自动接触对接",
      description: "坚固的接触式插针可自动接入，确保电力传输的可靠性。",
    },
    {
      title: "大功率充电",
      description: "800W–1500W 充电功率，配备智能电力管理与控制系统。",
    },
    {
      title: "任务连续性",
      description: "任务间快速周转，无需人工更换电池。",
    },
  ],
  processTitle: "接触式充电流程",
  processSteps: [
    {
      label: "任务返航",
      detail: "无人机完成任务或电量不足时自动返回对接站。",
    },
    {
      label: "精准接近",
      detail: "通过 RTK + 视觉导航实现与对接站平台的精准对位。",
    },
    {
      label: "精准降落",
      detail: "降落精度达 ±10–30 cm，确保接触对接可靠实现。",
    },
    {
      label: "接触对接",
      detail: "锁定机构自动锁紧，形成稳固的大电流电力连接。",
    },
    {
      label: "大功率充电",
      detail: "800–1500W 直流快速充电，配备智能 BMS 与健康监测系统。",
    },
    {
      label: "任务再部署",
      detail: "充满电后，无人机可立即投入下一项任务。",
    },
  ],
  insideTitle: "接触式充电对接站内部构造",
  insideImage: "/images/uav-contact-charging-dock.jpg",
  insideImageAlt: "接触式充电对接站剖视图及户外部署实景",
  insidePoints: [
    { label: "降落平台", detail: "坚固耐用的 1200 mm 方形表面，用于自主降落。" },
    { label: "电力电子系统", detail: "集成 AC-DC 电力模块，实现快速充电。" },
    { label: "控制电子系统", detail: "智能 MCU 控制单元，负责通信与安全保障。" },
    { label: "热管理系统", detail: "强制风冷散热，支持持续大功率运行。" },
  ],
  specs: [
    { label: "最大功率", value: "800W–1500W" },
    { label: "输入电压", value: "85–264VAC，50/60 Hz" },
    { label: "输出电压", value: "40–60VDC（可配置）" },
    { label: "效率", value: "> 96%" },
    { label: "充电时间", value: "45–60 分钟（典型 22Ah）" },
    { label: "保护功能", value: "浪涌保护、OCP、OVP、OTP" },
    { label: "防护等级", value: "IP55 / IP66" },
    { label: "尺寸", value: "1200 × 1200 × 250 mm" },
    { label: "重量", value: "约 110 kg" },
  ],
  interfaceTitle: "接触式接口详情",
  basePlate: {
    title: "基座平台（对位与接触）",
    points: [
      "弹簧加载式接触插针",
      "宽大的捕获区域，提升降落容差",
      "耐候设计，适合户外部署",
      "镀金处理，支持大电流传输",
    ],
  },
  droneSide: {
    title: "无人机端（充电接口）",
    points: [
      "集成式充电接触点",
      "轻量化气动外形设计",
      "抗振动条件下连接可靠",
      "专为高循环寿命设计",
    ],
  },
  comparisonTitle: "充电技术对比",
  wirelessLabel: "无线充电",
  contactLabel: "接触式充电",
  wireless: [
    "非接触式",
    "全密封设计",
    "灵活降落容差",
    "低维护成本",
    "适合户外部署",
  ],
  contact: [
    "直接电气接触",
    "支持大功率能力",
    "精准对接定位",
    "快速能量传输",
    "成熟商业化架构",
  ],
  comparisonNote: [
    "两种充电架构均可支持自主无人机运行。",
    "SiCore Dynamics 同时研发并集成这两种技术，以匹配不同任务场景与部署需求。",
  ],
} as const;
