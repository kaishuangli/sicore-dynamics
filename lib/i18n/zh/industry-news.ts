export const industryNewsPageMeta = {
  title: "行业资讯 | SiCore Dynamics",
  description:
    "关于机器人、自主系统、无线充电、工业自动化与智能机器基础设施的行业资讯与简报。",
};

export const industryNewsHero = {
  eyebrow: "行业资讯",
  title: "塑造自主设备未来的行业信号。",
  body: "精选汇总机器人、工业自动化、无线供电、无人机、医疗设备与智能基础设施领域的最新动态，聚焦智能设备如何获得能源、部署与规模化应用。",
} as const;

export const industryNewsCategories = [
  "全部",
  "机器人",
  "无线供电",
  "自动化",
  "农业",
  "医疗",
  "无人机",
] as const;

export type IndustryNewsCategory = (typeof industryNewsCategories)[number];

export const industryNewsItems = [
  {
    id: "amr-fleet-charging",
    date: "2026-06",
    category: "机器人" as const,
    title: "AMR 车队充电正从附属配置演变为核心基础设施",
    summary:
      "随着仓储与工厂机器人车队规模不断扩大，运营方正从人工插拔充电转向机会充电与基于对接站的能源策略，以保障设备正常运行时间。",
  },
  {
    id: "wireless-power-standards",
    date: "2026-05",
    category: "无线供电" as const,
    title: "工业无线供电正超越消费级便利性的定位",
    summary:
      "在工业场景中，密封设计、更低的连接器磨损与更少的维护需求比桌面级便利性更为重要，谐振式与高功率无线传输技术正因此受到广泛关注。",
  },
  {
    id: "outdoor-ag-robots",
    date: "2026-04",
    category: "农业" as const,
    title: "田间机器人推动户外充电可靠性的重新思考",
    summary:
      "灰尘、泥浆、雨水与振动正暴露出传统连接器在农业自动化中的局限性，推动市场对坚固耐用、低人工干预充电方案的需求。",
  },
  {
    id: "medical-sealed-devices",
    date: "2026-03",
    category: "医疗" as const,
    title: "密封化医疗设备为非接触式供电带来更大需求",
    summary:
      "感染控制与外壳密封性要求持续推动医疗设备设计减少外露电气触点，采用更洁净的供电接口。",
  },
  {
    id: "drone-dock-networks",
    date: "2026-02",
    category: "无人机" as const,
    title: "自主无人机对接站成为持续运营的关键基础设施",
    summary:
      "巡检、物流与安防项目正在扩展对接站网络，使无人机能够在任务之间自主降落、充电并重新出动，减少人工干预。",
  },
  {
    id: "factory-opportunity-charging",
    date: "2026-01",
    category: "自动化" as const,
    title: "机会充电正在重塑工厂移动设备的经济性",
    summary:
      "工位与路径节点处的短时、高频充电，正帮助 AGV 与移动平台减少电池冗余配置，同时提升班次利用率。",
  },
  {
    id: "oem-design-in",
    date: "2025-12",
    category: "无线供电" as const,
    title: "OEM 厂商将充电方案设计前置到产品路线图早期",
    summary:
      "越来越多制造商不再在后期加装充电器，而是将电能传输视为机器架构的一部分，与机械、控制与安全系统同步设计。",
  },
  {
    id: "harsh-environment-power",
    date: "2025-11",
    category: "自动化" as const,
    title: "严苛环境下连接器故障正成为一项运营成本",
    summary:
      "在潮湿、多尘与高频次使用的工业环境中，连接器老化正日益被视为可靠性与维护成本问题，而不仅仅是硬件层面的不便。",
  },
] as const;

export const industryNewsTopics = {
  eyebrow: "报道聚焦",
  title: "我们持续关注的行业方向。",
  items: [
    {
      title: "自主移动设备",
      text: "需要持续能源供应的机器人、AGV、AMR 与工业车辆。",
    },
    {
      title: "充电基础设施",
      text: "面向车队级运营打造的无线、接触式与对接式充电系统。",
    },
    {
      title: "OEM 集成",
      text: "制造商如何在最早的设计阶段就将电能传输融入产品。",
    },
    {
      title: "运行环境",
      text: "工厂、农场、医院、户外场地等连接器最易失效的场景。",
    },
  ],
} as const;
