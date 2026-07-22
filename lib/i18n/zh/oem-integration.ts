export const oemIntegrationPage = {
  eyebrow: "OEM 集成",
  title: "OEM 集成",
  subtitle: "贴合您的产品设计，而非让产品迁就我们。",
  description:
    "SiCore 不要求客户重新设计机器，而是开发能够自然融入现有产品、机械结构、电气架构与软件平台的充电方案。从原型到量产，我们与 OEM 合作伙伴携手打造充电系统，使其如同机器本身的原生组成部分。",
  heroImage: "/images/oem-integration/hero.png",
  modulesEyebrow: "集成模块",
  modulesTitle: "SiCore 如何融入您的产品",
  modules: [
    {
      id: "mechanical-integration",
      number: "01",
      title: "机械集成",
      description:
        "每台机器的尺寸、安装结构与运行环境各不相同。我们定制线圈布局、外壳设计与安装接口，实现无缝集成，同时不影响产品外观与性能。",
      image: "/images/oem-integration/mechanical-integration.png",
      imageAlt: "透明机身的 AGV，展示集成的无线接收线圈及与之匹配的对接站发射端",
      technologiesLabel: "核心技术",
      technologies: ["定制外壳", "安装接口", "线圈布局"],
    },
    {
      id: "electrical-integration",
      number: "02",
      title: "电气集成",
      description:
        "充电系统的设计可与现有电池、电源与电气架构协同工作，在保持系统安全性与效率的同时，最大限度降低重新设计的工作量。",
      image: "/images/oem-integration/electrical-integration.png",
      imageAlt: "电气架构示意图，展示对接站、电池管理系统（BMS）、电池组与机器人电力分配",
      technologiesLabel: "核心技术",
      technologies: ["电池兼容性", "电力分配", "保护电路设计"],
    },
    {
      id: "software-communication",
      number: "03",
      title: "软件与通信",
      description:
        "我们的充电平台通过行业标准接口与主机控制器直接通信，可无缝集成到现有的控制系统与车队管理软件中。",
      image: "/images/oem-integration/software-communication.png",
      imageAlt: "机器人通信架构示意图，展示计算单元与传感器、运动控制、BMS 及人机界面（HMI）的连接",
      technologiesLabel: "核心技术",
      technologies: ["CAN 总线", "UART", "以太网", "Modbus", "API 集成"],
    },
    {
      id: "system-customization",
      number: "04",
      title: "系统定制",
      description:
        "每种应用场景都有其独特的充电需求。我们根据具体运行需求，定制功率等级、充电策略、对接方式与系统配置。",
      image: "/images/oem-integration/system-customization.png",
      imageAlt: "移动机器人平台上对齐安装的定制无线充电发射与接收线圈",
      technologiesLabel: "核心技术",
      technologies: ["功率扩展", "充电策略", "对接定制"],
    },
    {
      id: "prototype-to-production",
      number: "05",
      title: "从原型到量产",
      description:
        "我们在整个产品生命周期中为 OEM 合作伙伴提供支持——从概念验证、工程样品到量产就绪方案及生产制造支持。",
      image: "/images/oem-integration/prototype-to-production.png",
      imageAlt: "从原型到量产的流程，涵盖工程、供应链与制造各阶段",
      technologiesLabel: "核心技术",
      technologies: ["快速原型制作", "设计验证", "生产制造支持"],
    },
  ],
} as const;
