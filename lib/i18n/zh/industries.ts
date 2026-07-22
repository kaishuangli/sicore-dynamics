export type SolutionUseCase = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type SolutionListSection = {
  title: string;
  items: readonly string[];
};

export const industries = [
  {
    id: "automation-robotics",
    title: "自动化与机器人",
    pageTitle: "自动化与机器人的无插拔充电",
    description:
      "面向自主工业机器人的无插拔充电解决方案",
    content: [
      "我们为在严苛环境中持续运行的工业机器人提供无插拔充电解决方案。通过消除传统充电连接器，我们的技术降低了灰尘、振动、潮湿与机械磨损带来的影响。无论采用无线充电还是其他无插拔电能传输方式，我们的方案均可实现自主充电，最大限度延长正常运行时间，延长设备使用寿命并提升运营效率。",
    ],
    productsIntro:
      "SiCore 无线供电系统覆盖 60W 至 3000W，为机械臂、协作机器人与自动化生产设备提供可扩展的充电方案。",
    image: "/images/app-200w-amr-fleet.png",
    heroVideo: "/videos/automation-robotics.mp4",
    heroVisual: "/images/product-tx.png",
    alt: "仓库中 AMR 车队在无线充电站对接充电",
    heroVisualAlt: "面向机器人应用的 SiCore 无线发射端",
    useCases: [
      {
        title: "协作机器人工作单元",
        description: "面向持续执行装配与拾取放置任务的协作机器人，实现自主停靠充电。",
        image: "/images/automation-wireless-charging.jpg",
        alt: "AGV 在无插拔无线充电板上对接",
      },
      {
        title: "自动化生产线",
        description:
          "无线充电可在生产工位实现全密封电能传输，消除因振动、灰尘与反复插拔而产生的连接器磨损。",
        image: "/images/mobile-robot-production-line.png",
        alt: "配备无线充电对接站的移动机器人生产线，实现持续运行",
      },
      {
        title: "全天候机器人工位",
        description: "在生产周期间隙进行机会充电，最大化高产能工厂的正常运行时间。",
        image: "/images/hero-wireless-robotics.jpg",
        alt: "机器人工位无线充电",
      },
      {
        title: "洁净室自动化",
        description: "为不允许外露触点的密封环境提供非接触式供电。",
        image: "/images/clean-room-automation.png",
        alt: "洁净室 AMR 在密封自动化区域运送物料",
      },
    ],
    listSections: [
      {
        title: "核心优势",
        items: [
          "自动充电",
          "无外露电气触点",
          "IP 防护密封设计",
          "降低维护成本",
          "高可靠性",
          "快速充电",
        ],
      },
    ],
  },
  {
    id: "unmanned-aerial-vehicles",
    title: "无人飞行器",
    pageTitle: "无人飞行器的无线充电解决方案",
    description: "自主无人机充电对接站",
    content: [
      "通过智能无线充电，实现无人机的完全自主运营。我们的超薄充电对接站可让无人机自动降落、充电并重新出动，无需外露电气触点，在包裹配送、基础设施巡检与安防巡逻等户外场景中提供可靠的电能传输。",
    ],
    productsIntro:
      "SiCore 无线充电对接站支持无人机自主降落、户外机会充电与无人机车队的持续运营。",
    image: "/images/uav-drone-delivery-hero-v2.png",
    heroVideo: "/videos/agv-amr.mp4",
    heroVisual: "/images/uav-drone-delivery-hero-v2.png",
    alt: "配送无人机在 SiCore 无线充电板上对接",
    heroVisualAlt: "配备无线充电功能的无人机配送对接站",
    useCases: [
      {
        title: "仓储物流车队",
        description: "机会充电通道让 AMR 车队持续运行，无需人工对位对接。",
        image: "/images/mobile-robots.jpg",
        alt: "仓储 AMR 无线充电",
      },
      {
        title: "制造通道",
        description: "沿生产路线设置在线充电站，实现物料运输不间断。",
        image: "/images/industry-robotics.png",
        alt: "制造场景 AGV 充电通道",
      },
      {
        title: "配送中心",
        description: "为全天候分拣与订单履行自动化提供高可靠性充电。",
        image: "/images/hero-wireless-robotics.jpg",
        alt: "配送中心 AGV 充电",
      },
      {
        title: "智能工厂移动设备",
        description: "面向多机器人工厂物流的车队级无线充电基础设施。",
        image: "/images/mobile-robots.jpg",
        alt: "智能工厂移动机器人车队无线充电",
      },
    ],
    listSections: [
      {
        title: "应用场景",
        items: [
          "仓储物流",
          "制造业",
          "配送中心",
          "智能工厂",
        ],
      },
    ],
    flowSteps: ["无人机", "充电对接站", "无线充电", "重新出动执行任务"],
  },
  {
    id: "medical-equipment",
    title: "医疗设备",
    pageTitle: "医疗设备的无线充电解决方案",
    description:
      "为医疗设备提供更安全、更卫生的无线充电，无外露触点。",
    content: [
      "无线充电通过消除外露充电触点，提升医疗设备的安全性与卫生水平。",
      "该技术支持防水设计，简化设备消毒流程，并提升长期可靠性。",
    ],
    productsIntro:
      "SiCore 60W 与 200W 低功率模块，非常适合需要密封充电接口的便携式医疗设备、医疗推车与诊断设备。",
    image: "/images/industry-medical.png",
    heroVisual: "/images/app-60w-medical-v2.png",
    alt: "临床环境中医疗工作站推车在地垫上无线充电",
    heroVisualAlt: "密封手持医疗设备置于无线充电板上",
    useCases: [
      {
        title: "便携式病患设备",
        description: "床旁与转运监护仪采用全密封外壳，放置在充电板上即可充电，无外露触点。",
        image: "/images/app-60w-medical-v2.png",
        alt: "密封手持医疗设备在无线充电板上充电",
      },
      {
        title: "手术与诊断器械",
        description: "面向需反复擦拭与灭菌的手持扫描仪与器械，提供密封无线充电底座。",
        image: "/images/app-60w-medical.png",
        alt: "手持诊断扫描仪置于无线充电底座上",
      },
      {
        title: "移动临床设备",
        description: "医疗推车、工作站与自主临床平台在查房间隙对接地垫充电，无菌通道内无需线缆。",
        image: "/images/app-200w-medical-uv.png",
        alt: "无菌医院走廊中的移动临床消毒平台",
      },
    ],
    listSections: [
      {
        title: "适用场景",
        items: [
          "便携式监护仪",
          "医疗推车",
          "手术器械",
          "诊断设备",
        ],
      },
    ],
  },
  {
    id: "agricultural-automation",
    title: "农业自动化",
    pageTitle: "为自主农业的未来提供能源支持",
    description:
      "为自主田间机器人、农业无人机与下一代精准农业系统提供可靠的充电基础设施。",
    content: [
      "SiCore 提供适用于户外环境的无线与接触式充电对接站，让农业机器人与无人机在长时间田间作业中持续运行，无需人工插拔停机充电。",
    ],
    productsIntro:
      "SiCore 200W 至 1500W 平台支持户外农业机器人、无人机对接站以及农场部署中的车队充电。",
    image: "/images/app-1500w-agriculture.png",
    heroVisual: "/images/agri-hero.jpg",
    alt: "高离地间隙自主农业机器人在作物行间作业",
    heroVisualAlt: "田间充电对接站与农业自动化场景展示",
    useCases: [
      {
        title: "果蔬检测",
        description:
          "在果园与葡萄园行间穿行，检测果蔬品质、成熟度与植株健康——并在巡检路线之间于田间充电板补充电量。",
        image: "/images/agri-fruit-inspection.jpg",
        alt: "巡检机器人在葡萄园行间检测果实",
      },
      {
        title: "田间巡查机器人",
        description:
          "在整个生长季节采集作物数据并检测植株健康，在田边充电板进行机会充电。",
        image: "/images/agri-field-scout-v2.jpg",
        alt: "配备太阳能板的田间巡查机器人在红叶作物行间行进",
      },
      {
        title: "自主除草机器人",
        description:
          "在大面积农田中持续执行除草作业，并自主返回充电，无需人工更换电池。",
        image: "/images/agri-weeding-robot-v2.jpg",
        alt: "绿色自主除草机器人跨行作业于田间",
      },
      {
        title: "农场物流机器人",
        description:
          "在田地与场院之间转运收获箱、农资与物料，并在集货点快速补充电量。",
        image: "/images/agri-farm-logistics-v3.jpg",
        alt: "农场物流机器人在葡萄园行间搬运采收箱",
      },
      {
        title: "土壤监测",
        description:
          "配备探头的机器人自主采集土壤湿度、养分与田间状况数据——并在勘测路线之间于户外充电板补充电量。",
        image: "/images/agri-soil-monitoring.jpg",
        alt: "土壤监测机器人在收割后的农田中探测湿度与养分数据",
      },
      {
        title: "植株表型分析",
        description:
          "配备传感器的机器人在作物行间采集田间生长、冠层结构与植株健康特征数据——并在表型分析路线之间充电。",
        image: "/images/agri-plant-phenotyping.jpg",
        alt: "植株表型分析机器人在玉米行间采集作物特征数据",
      },
    ],
    listSections: [
      {
        title: "应用场景",
        items: [
          "果蔬检测",
          "田间巡查机器人",
          "自主除草机器人",
          "农场物流机器人",
          "土壤监测",
          "植株表型分析",
        ],
      },
    ],
  },
  {
    id: "smart-furniture",
    title: "智能家具",
    pageTitle: "智能家具的无线充电解决方案",
    description:
      "为办公室、酒店、餐厅与公共空间提供嵌入式无线充电。",
    content: [
      "嵌入式无线充电模块在保持家具简洁现代设计的同时，提供便捷的电力接入方式。",
      "非常适用于办公室、酒店、餐厅、机场与公共空间。",
    ],
    productsIntro:
      "SiCore 60W 嵌入式模块可无缝集成到办公桌、桌台与酒店家具中，不留可见充电接口。",
    image: "/images/smart-furniture-airport-lounge.png",
    heroVisual: "/images/smart-furniture-conference-v2.png",
    alt: "机场休息室桌台嵌入手机与笔记本电脑无线充电板",
    heroVisualAlt: "智能会议桌中的嵌入式无线充电",
    useCases: [
      {
        title: "会议室",
        description: "内置于会议桌与协作办公空间的隐形充电。",
        image: "/images/smart-furniture-collaboration.png",
        alt: "演示过程中通过智能协作对接实现无线充电",
      },
      {
        title: "公共图书馆",
        description: "为自习桌与安静共享空间提供集成供电。",
        image: "/images/smart-furniture-library-v2.png",
        alt: "图书馆自习桌嵌入 SiCore 无线充电板",
      },
      {
        title: "餐厅与餐桌",
        description: "简洁台面设计，为宾客设备提供隐藏式充电。",
        image: "/images/smart-furniture-restaurant-v2.png",
        alt: "咖啡馆餐桌嵌入无线充电板",
      },
      {
        title: "机场与公共休息区",
        description: "为高客流公共环境提供耐用的嵌入式充电。",
        image: "/images/smart-furniture-airport-v2.png",
        alt: "机场休息室柜台嵌入 SiCore 无线充电",
      },
    ],
    listSections: [
      {
        title: "应用场景",
        items: [
          "会议室",
          "公共图书馆",
          "会议桌与餐桌",
          "机场与公共休息区",
        ],
      },
    ],
  },
  {
    id: "consumer-electronics",
    title: "消费电子",
    pageTitle: "消费电子的无线充电解决方案",
    description:
      "兼容 Qi 标准的无线充电模块，适用于手机、可穿戴设备与手持设备。",
    content: [
      "SiCore 将兼容 Qi 标准的无线充电模块集成到消费类与手持产品中，为日常设备提供便捷的非接触式供电。",
      "紧凑型接收端设计支持密封外壳与优质用户体验，无需担心外露充电接口随时间磨损。",
    ],
    productsIntro:
      "SiCore 60W 与 200W 接收与发射模块，支持兼容 Qi 标准的手机、耳机、可穿戴设备与手持产品平台。",
    image: "/images/product-rx.png",
    heroVisual: "/images/product-rx.png",
    alt: "具备无线充电功能的消费电子产品",
    heroVisualAlt: "面向消费电子的无线接收模块",
    useCases: [
      {
        title: "智能手机充电",
        description: "兼容 Qi 标准的无线充电板与嵌入式家具充电器。",
        image: "/images/product-rx.png",
        alt: "智能手机无线充电模块",
      },
      {
        title: "耳机与可穿戴设备",
        description: "为耳机充电盒与可穿戴配件设计的紧凑型接收端。",
        image: "/images/product-coils.png",
        alt: "可穿戴设备无线充电线圈",
      },
      {
        title: "智能手表",
        description: "为手表底座与充电配件提供超薄无线供电。",
        image: "/images/product-tx.png",
        alt: "智能手表无线发射端",
      },
      {
        title: "手持设备",
        description: "面向工业与消费类手持产品集成的 OEM 模块。",
        image: "/images/product-controller.png",
        alt: "手持设备电源控制器",
      },
    ],
    listSections: [
      {
        title: "应用场景",
        items: ["手机充电", "耳机", "智能手表", "手持设备"],
      },
    ],
  },
  {
    id: "customized-solutions",
    title: "定制化解决方案",
    pageTitle: "定制无线充电解决方案",
    description:
      "针对独特的工业功率、传输距离与环境要求，提供定制化无线充电工程方案。",
    content: [
      "每一种工业应用都有其独特的功率、传输距离、环境与机械结构要求。",
      "我们的工程团队根据您的产品规格，开发量身定制的无线充电解决方案。",
    ],
    productsIntro:
      "SiCore 工程团队可在 60W 至 3000W 全产品范围内定制平台，提供专属线圈设计、固件开发与量产支持。",
    image: "/images/oem-integration/mechanical-integration.png",
    heroVisual: "/images/product-coils.png",
    alt: "定制无线充电接收端集成于移动机器人底盘及配套对接站",
    heroVisualAlt: "定制无线充电线圈工程设计",
    useCases: [
      {
        title: "定制线圈设计",
        description: "针对您的传输距离、对准精度与散热要求优化的线圈。",
        image: "/images/product-coils.png",
        alt: "定制无线充电线圈设计",
      },
      {
        title: "OEM PCB 开发",
        description: "面向特定应用的发射端与接收端 PCB 平台。",
        image: "/images/product-controller.png",
        alt: "OEM PCB 无线充电开发",
      },
      {
        title: "原型验证",
        description: "在量产前进行快速原型制作与性能测试。",
        image: "/images/product-tx.png",
        alt: "无线充电原型平台",
      },
      {
        title: "量产支持",
        description: "从试产到批量制造的全程工程支持。",
        image: "/images/product-rx.png",
        alt: "量产无线接收模块",
      },
    ],
    listSections: [
      {
        title: "服务内容",
        items: [
          "线圈设计",
          "PCB 开发",
          "功率优化",
          "异物检测",
          "热管理",
          "EMC 优化",
          "原型开发",
          "量产支持",
        ],
      },
    ],
  },
] as const;

export type Industry = (typeof industries)[number];
export type IndustryId = Industry["id"];

export function getIndustryHeroVideo(industry: Industry) {
  return "heroVideo" in industry && industry.heroVideo
    ? industry.heroVideo
    : `/videos/${industry.id}.mp4`;
}

export function getIndustryPageHeading(industry: Industry) {
  return industry.pageTitle;
}

export function getIndustryHref(id: IndustryId) {
  return `/solutions/${id}`;
}

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((item) => item.id === slug);
}

/** Solutions hidden from nav, homepage grid, and solutions landing cards. */
const hiddenSolutionIds = new Set<IndustryId>(["consumer-electronics"]);

export const publicIndustries = industries.filter((item) => !hiddenSolutionIds.has(item.id));

export const industryNavLinks = publicIndustries.map((item) => ({
  label: item.title,
  href: getIndustryHref(item.id),
  id: item.id,
}));

export function getIndustryFromHash(hash: string): IndustryId | null {
  const id = hash.replace(/^#/, "");
  return industries.some((item) => item.id === id) ? (id as IndustryId) : null;
}

export const solutionsPageMeta = {
  title: "工业解决方案",
  description:
    "面向自动化、无人飞行器、医疗设备、农业自动化、智能家具与定制化 OEM 项目的工业无线充电解决方案，实现可靠的电能传输。",
};

export const solutionsFaqs = [
  {
    question: "哪些行业在使用 SiCore 无线充电技术？",
    answer:
      "SiCore 支持自动化与机器人、无人飞行器、医疗设备、农业自动化、智能家具，以及完全定制化的 OEM 无线充电项目。",
  },
  {
    question: "SiCore 是否提供无人飞行器无线充电方案？",
    answer:
      "是的。SiCore 为无人机与无人飞行平台提供专属无线充电解决方案，可在指定站点实现无需物理连接器的机会充电，最大化运营正常运行时间。",
  },
  {
    question: "SiCore 能否开发定制化无线充电解决方案？",
    answer:
      "是的。SiCore 工程团队支持线圈设计、PCB 开发、功率优化、异物检测、热管理、EMC 优化、原型开发以及量产支持。",
  },
] as const;

export const solutionsLandingMeta = {
  eyebrow: "工业解决方案",
  title: "可靠电能传输的工业无线充电解决方案",
  paragraphs: [
    "我们为工业设备、自动化系统、医疗器械、农业平台、智能家具与 OEM 应用提供定制化无线充电解决方案。",
    "我们的无线供电技术可提升产品可靠性，消除连接器磨损，降低维护成本，并支持完全密封的设备设计。",
  ],
};

/** Homepage mosaic cards — labels/hrefs stay in sync with Technology nav Industrial Solutions dropdown. */
export const solutionsLandingApplications = publicIndustries.map((item) => ({
  label: item.title,
  image: item.image,
  alt: item.alt,
  href: getIndustryHref(item.id),
  id: item.id,
  description: item.description,
}));
