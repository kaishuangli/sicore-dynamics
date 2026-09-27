export const aboutSections = [
  {
    id: "about-sicore",
    label: "关于 SiCore",
    title: "关于 SiCore Dynamics",
    tagline: "一家智能自主充电技术公司。",
    description:
      "SiCore Dynamics 是一家总部位于美国德克萨斯州的智能自主充电技术公司。我们开发无线充电、接触式充电、无插拔对接、智能充电软件和 OEM 充电基础设施，使自主机器能够在尽量减少人工干预的情况下运行。",
    highlights: [
      "谐振式无线电力传输平台",
      "面向机器人与自动化的智能充电站",
      "AI 驱动的电源控制与能效优化",
      "从概念到量产的 OEM 就绪工程能力",
    ],
    items: [
      {
        title: "我们的使命",
        text: "通过可靠、可扩展的无线充电技术，为下一代智能机器提供动力。",
      },
      {
        title: "我们的业务",
        text: "我们将无线电力、功率电子、嵌入式控制与系统集成融合为可部署的工业客户平台。",
      },
      {
        title: "服务对象",
        text: "机器人 OEM、AGV/AMR 制造商、自动化集成商、无人机平台及医疗设备创新企业。",
      },
    ],
  },
  {
    id: "news",
    label: "行业资讯",
    title: "行业资讯",
    tagline: "洞悉塑造自主机器与充电基础设施的行业信号。",
    description:
      "涵盖机器人、无线电力、自动化、农业、医疗设备与无人机领域的行业动态简报。",
    highlights: ["机器人与自主车队", "无线与无插拔电力", "工业与户外部署"],
    items: [
      {
        title: "机器人",
        text: "面向 AMR、AGV 与移动平台的车队充电与运行时长策略。",
      },
      {
        title: "无线电力",
        text: "谐振与高功率传输技术在消费场景之外的工业应用普及。",
      },
      {
        title: "自动化",
        text: "严苛运行环境下的机会充电与可靠性挑战。",
      },
    ],
  },
  {
    id: "investor-opportunity",
    label: "投资者",
    title: "投资者",
    tagline: "投资智能电源的未来。",
    description: "支持下一代无线充电技术与自主能源基础设施的发展。",
    highlights: ["先进无线充电", "工程专长", "持续增长的市场机遇"],
    items: [
      {
        title: "为什么选择 SiCore",
        text: "面向机器人与自动化的智能充电技术。",
      },
      {
        title: "市场机遇",
        text: "机器人、自动化、医疗与农业领域的需求正加速增长。",
      },
      {
        title: "联系我们",
        text: "欢迎投资者与战略合作伙伴与我们交流。",
      },
    ],
  },
  {
    id: "trade-fairs-events",
    label: "展会与活动",
    title: "展会与活动",
    tagline: "在顶尖机器人、自动化与电力电子展会上与 SiCore 相遇。",
    description:
      "在全球行业展会上体验 SiCore 的无线充电演示、工程交流会与产品展示。",
    highlights: ["现场无线充电演示", "工程与产品咨询", "全球机器人与自动化展会"],
    items: [
      {
        title: "近期展会",
        text: "了解 SiCore 下一站参展信息——机器人、工业自动化与能源技术展会。",
      },
      {
        title: "现场演示",
        text: "在展台现场体验智能充电站、无线电源模块与 AI 电源控制系统。",
      },
      {
        title: "预约会谈",
        text: "在重要展会与会议期间预约现场工程咨询或高层会谈。",
      },
    ],
  },
] as const;

export type AboutSectionId = (typeof aboutSections)[number]["id"];

export const aboutNavLinks = aboutSections.map((section) => ({
  label: section.label,
  href:
    section.id === "about-sicore"
      ? "/about"
      : section.id === "investor-opportunity"
        ? "/about/investor"
        : section.id === "news"
          ? "/about/news"
          : `/about#${section.id}`,
  id: section.id,
}));

export function getAboutSectionFromHash(hash: string): AboutSectionId | null {
  const id = hash.replace(/^#/, "");
  return aboutSections.some((section) => section.id === id) ? (id as AboutSectionId) : null;
}

export const aboutPageMeta = {
  title: "关于 SiCore Dynamics — 我们为何存在",
  description:
    "SiCore Dynamics 打造自主充电基础设施，让智能机器不再因供电方式而停摆。",
};
