export const wirelessEnergyPlatformPage = {
  eyebrow: "技术平台",
  title: "无线能量平台",
  subtitle: "架构总览",
  description:
    "先进的无线供电技术，专为高效、可靠、可扩展的能量传输而设计——从基础物理原理到可量产的完整系统。",
  concept: {
    eyebrow: "能量传输概念",
    title: "从发射端到设备——无需线缆。",
    steps: [
      { label: "发射端（TX）", detail: "功率电子与发射线圈产生能量场。" },
      { label: "无线能量传输", detail: "能量通过磁耦合跨越空气间隙传输。" },
      { label: "接收端（RX）", detail: "接收线圈捕获能量并将其转换供负载使用。" },
      { label: "为设备供电", detail: "为电池或机器系统提供稳定的直流电力。" },
    ],
  },
  physicsLayer: {
    eyebrow: "物理层",
    title: "无线能量传输物理原理",
    description:
      "物理层定义了无线能量传输的基本原理，阐明能量如何通过电磁场与谐振耦合在空间中传递——为下一代智能系统实现高效、非接触式的供电。",
    heroImage: "/images/physics-layer/physics-hero.png",
    mechanismsEyebrow: "传输机制",
    mechanismsTitle: "四种基础传输机制",
    mechanismsIntro:
      "无线能量传输依赖于不同的物理机制。SiCore Dynamics 研究并开发多种能量传输技术，以满足不同功率等级、工作条件与应用场景的需求。",
    mechanisms: [
      {
        id: "resonant-inductive",
        number: "01",
        title: "谐振感应耦合",
        image: "/images/physics-layer/resonant-inductive-v2.png",
        description:
          "业界标准的高效短距离电力传输方案，广泛应用于 Qi 无线充电与工业对接系统。",
        applications: [
          { label: "消费电子充电", icon: "wireless" },
          { label: "服务机器人", icon: "station" },
          { label: "AGV / AMR", icon: "coil" },
          { label: "医疗设备", icon: "shield" },
        ],
        research: [
          "线圈谐振设计",
          "谐振补偿网络",
          "高 Q 值谐振器",
          "耦合优化",
          "偏移容差",
          "异物检测",
        ],
      },
      {
        id: "magnetic-resonance",
        number: "02",
        title: "磁共振耦合",
        image: "/images/physics-layer/magnetic-resonance-v2.png",
        description:
          "相比传统感应耦合，可实现更长的空气间隙与更灵活的对准方式——非常适合自主移动系统。",
        applications: [
          { label: "自主机器人", icon: "station" },
          { label: "无人机", icon: "wireless" },
          { label: "工业自动化", icon: "power" },
          { label: "物流机器人", icon: "coil" },
        ],
        research: [
          "长空气间隙设计",
          "高耦合谐振器",
          "多谐振器网络",
          "磁场分布",
          "谐振频率稳定性",
          "大偏移容差",
          "功率可扩展性",
        ],
      },
      {
        id: "capacitive",
        number: "03",
        title: "电容式无线供电",
        image: "/images/physics-layer/capacitive-v2.png",
        description:
          "通过电场而非磁场传输能量——在富含金属或空间受限的环境中具有明显优势。",
        applications: [
          { label: "富金属环境", icon: "emc" },
          { label: "生物医疗设备", icon: "shield" },
          { label: "薄型结构", icon: "chip" },
          { label: "半导体设备", icon: "firmware" },
        ],
        research: [
          "电场耦合",
          "极板结构设计",
          "高频运行",
          "介质优化",
          "电场屏蔽",
          "高压隔离",
          "安全性优化",
        ],
        deepDive: {
          title: "基于电场的无线能量传输",
          paragraphs: [
            "电容式无线电力传输（CWPT）通过高频电场而非磁场传输能量。它不依赖线圈与磁通，而是利用成对的导电电极形成电容耦合路径，在较小的空气间隙内实现非接触式供电。",
            "其超薄结构、低磁干扰以及对富金属环境的良好适配性，使 CWPT 成为紧凑型电子产品、医疗设备、旋转系统以及下一代嵌入式应用中极具前景的解决方案——在这些场景中，传统感应式充电往往并非理想选择。",
          ],
          images: [
            {
              src: "/images/physics-layer/capacitive-electric-field-cycle.png",
              alt: "Capacitive wireless power transfer cycle using high-frequency electric fields between transmitting and receiving electrodes",
            },
          ],
        },
      },
      {
        id: "dynamic",
        number: "04",
        title: "动态无线供电",
        image: "/images/physics-layer/dynamic-v2.png",
        description:
          "在机器运动过程中持续供电——无需停机充电。",
        applications: [
          { label: "AGV / AMR", icon: "coil" },
          { label: "仓储机器人", icon: "station" },
          { label: "输送系统", icon: "power" },
          { label: "工厂自动化", icon: "ai" },
        ],
        research: [
          "连续能量传输",
          "分段式发射端",
          "位置追踪",
          "动态线圈切换",
          "功率交接",
          "运动同步",
          "实时功率调节",
        ],
        deepDive: {
          title: "运动中的供电能力",
          paragraphs: [
            "动态无线电力传输（DWPT）可为移动车辆与机器人系统提供持续供电，无需停机充电。系统通过动态激活功率分段或实时追踪接收端位置，在整个运动过程中保持高效的无线能量传输。",
            "该技术专为自主移动机器人（AMR）、AGV、输送系统与工业自动化设计，可实现不间断运行、更高的生产效率，并降低下一代智能工厂的停机时间。",
          ],
          images: [
            {
              src: "/images/physics-layer/dynamic-warehouse-track.png",
              alt: "Smart warehouse with wireless charging track powering mobile logistics robots in motion",
            },
            {
              src: "/images/physics-layer/dynamic-power-principle-v2.png",
              alt: "Dynamic wireless power transfer principle showing magnetic field, pick-up receiver, and cascaded transmission cables",
              figureExplanation: {
                title: "图示说明",
                items: [
                  {
                    label: "(a) 系统总览",
                    text: "移动机器人携带接收线圈，发射端则嵌入在行驶路径下方。高频交流电流经发射端产生磁场，当机器人经过其上方时，该磁场在接收线圈中感应出电流。",
                  },
                  {
                    label: "(b) 单根传输导线",
                    text: "单根传输导线在电缆周围产生交变磁场。当接收端经过该磁场时，拾取线圈中会感应出电能。该方案结构简单，但磁场覆盖范围相对有限。",
                  },
                  {
                    label: "(c) 级联传输导线",
                    text: "多根传输导线并联排布，形成更大且更均匀的磁场。合并后的磁场可提升耦合稳定性，扩大有效充电区域，并为持续移动的车辆实现更可靠的无线能量传输。",
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  magneticLayer: {
    eyebrow: "磁路层",
    title: "磁路工程",
    subtitle: "构建高效无线供电背后的磁路路径。",
    description:
      "我们的磁路平台可最大化耦合效率，精确塑形磁通并最小化漏磁——在真实世界的对准偏差与间隙变化下，仍能提供稳定的无线供电。",
    heroImage: "/images/magnetic-layer/magnetic-hero-v2.png",
    capabilitiesEyebrow: "我们的能力",
    capabilitiesTitle: "磁路卓越性的五大支柱",
    pillars: [
      {
        id: "coil-engineering",
        number: "01",
        title: "线圈工程",
        image: "/images/magnetic-layer/coil-engineering.png",
        description:
          "根据目标功率、频率与空气间隙要求，设计发射与接收线圈几何结构。",
        points: ["线圈拓扑结构", "线圈材料", "线圈优化"],
      },
      {
        id: "magnetic-structure",
        number: "02",
        title: "磁路结构",
        image: "/images/magnetic-layer/magnetic-structure.png",
        description:
          "通过磁芯与屏蔽结构引导磁通、降低损耗，并保护周边系统。",
        points: ["磁芯设计", "磁屏蔽", "磁通引导"],
      },
      {
        id: "coupling-engineering",
        number: "03",
        title: "耦合工程",
        image: "/images/magnetic-layer/coupling-engineering.png",
        description:
          "通过磁场塑形实现更高耦合、更纯净的传输与更优的功率密度。",
        points: ["耦合效率", "空气间隙优化", "功率密度"],
      },
      {
        id: "misalignment",
        number: "04",
        title: "偏移容差工程",
        image: "/images/magnetic-layer/misalignment.png",
        description:
          "通过容差设计，确保对接过程中的位置与角度偏差不会影响充电。",
        points: ["X/Y 偏移", "Z 轴距离", "角度容差"],
      },
      {
        id: "simulation",
        number: "05",
        title: "磁路仿真",
        image: "/images/magnetic-layer/simulation.png",
        description:
          "在硬件制造前，通过电磁仿真验证磁通分布。",
        points: ["磁通分布", "ANSYS Maxwell", "JMAG"],
      },
    ],
  },
  powerLayer: {
    eyebrow: "功率层",
    heroLabel: "功率电子",
    title: "高效功率转换架构",
    description:
      "从直流输入到稳定输出的完整功率路径——专为转换效率、热稳定性、可靠性与可扩展的无线能量系统而设计。",
    heroImage: "/images/power-layer/power-hero-v3.png",
    highlights: [
      { label: "高效率", icon: "bolt" },
      { label: "高可靠性", icon: "shield" },
      { label: "优异的散热性能", icon: "thermal" },
      { label: "宽功率范围", icon: "power" },
    ],
    modules: [
      {
        id: "inverter",
        number: "01",
        title: "逆变器",
        summary: "将直流输入转换为高频交流电，激励无线能量传输链路。",
        detail:
          "逆变器将直流输入转换为高频交流电，为高效的无线能量传输提供所需的激励。系统会根据功率等级、效率、开关频率与整体架构选择不同的逆变拓扑。",
        image: "/images/power-layer/module-inverter.png",
        checks: ["半桥", "全桥", "LLC", "移相"],
      },
      {
        id: "matching-network",
        number: "02",
        title: "匹配网络",
        summary: "使发射端与接收端谐振调谐一致，最大化传输效率。",
        detail:
          "匹配网络使发射端与接收端达到谐振调谐，在最小化无功功率的同时最大化传输效率。系统会根据功率等级、耦合条件与应用需求选择不同的补偿拓扑。",
        image: "/images/power-layer/module-matching-network.png",
        checks: ["串联", "并联", "LCC", "LCL", "CLC"],
      },
      {
        id: "rectifier",
        number: "03",
        title: "整流器",
        summary: "将接收到的高频交流电转换为可用的直流输出。",
        detail:
          "整流器将接收到的高频交流电转换为可用的直流电力。先进的整流技术可提升转换效率，同时降低导通损耗与发热。",
        image: "/images/power-layer/module-rectifier.png",
        checks: ["二极管整流", "同步整流", "主动整流"],
      },
      {
        id: "dc-dc",
        number: "04",
        title: "DC/DC 转换",
        summary: "调节整流后的电压，用于电池充电或系统供电。",
        detail:
          "DC/DC 阶段将整流后的电压调节至电池充电或系统供电所需的输出水平。不同的转换器拓扑为各类应用提供灵活的电压转换能力。",
        image: "/images/power-layer/module-dc-dc.png",
        checks: ["Buck", "Boost", "Buck-Boost"],
      },
      {
        id: "high-frequency-power",
        number: "05",
        title: "高频功率器件",
        summary: "采用宽禁带功率器件，实现高效开关运行。",
        detail:
          "高频功率器件决定了无线电力系统的开关性能、效率、热特性与功率密度。宽禁带半导体技术可实现更高的开关频率与更紧凑的系统设计。",
        image: "/images/power-layer/module-hf-devices.png",
        checks: ["MOSFET", "GaN", "SiC"],
      },
    ],
  },
  controlLayer: {
    eyebrow: "控制层",
    heroLabel: "智能控制",
    title: "面向安全高效无线供电的实时控制",
    description:
      "一套闭环控制架构，可在发射端与接收端之间感知、决策与保护——在负载与对准条件变化时，始终保持谐振锁定、功率稳定与运行安全。",
    heroImage: "/images/control-layer/control-hero.png",
    highlights: [
      { label: "实时控制", icon: "chip" },
      { label: "自适应调节", icon: "ai" },
      { label: "安全保护", icon: "shield" },
      { label: "系统通信", icon: "comm" },
    ],
    featuresEyebrow: "智能控制能力",
    featuresTitle: "智能控制功能",
    features: [
      {
        id: "frequency-tracking",
        number: "01",
        title: "频率追踪",
        description:
          "持续追踪并锁定最优谐振频率，以最大化传输效率。",
        visual: "frequency",
        points: ["自动频率扫描", "谐振检测", "实时追踪"],
      },
      {
        id: "power-regulation",
        number: "02",
        title: "功率调节",
        description:
          "支持恒功率、恒压与恒流模式，满足不同的充电需求。",
        visual: "regulation",
        points: ["恒功率（CP）", "恒压（CV）", "恒流（CC）"],
      },
      {
        id: "coil-detection",
        number: "03",
        title: "线圈检测",
        description:
          "检测接收端是否存在并评估其状态，确保运行安全高效。",
        visual: "coil-detect",
        points: ["接收端存在检测", "链路质量监测", "故障提示"],
      },
      {
        id: "fod",
        number: "04",
        title: "异物检测（FOD）",
        description:
          "识别充电表面上的金属异物，防止发热并确保用户安全。",
        visual: "fod",
        points: ["金属异物检测", "功率降低", "安全关断"],
      },
      {
        id: "thermal-protection",
        number: "05",
        title: "热保护",
        description:
          "实时监测关键部件的温度，防止过热并保护系统。",
        visual: "thermal",
        points: ["温度监测", "过温保护", "智能风扇 / 功率降额"],
      },
      {
        id: "adaptive-charging",
        number: "06",
        title: "自适应充电",
        description:
          "根据负载变化与系统状态动态调整控制策略与输出功率。",
        visual: "adaptive",
        points: ["负载监测", "动态功率调整", "效率优化"],
      },
      {
        id: "multi-coil",
        number: "07",
        title: "多线圈控制",
        description:
          "智能切换与协调多个发射线圈，实现无缝的功率覆盖与效率。",
        visual: "multi-coil",
        points: ["线圈选择", "自动切换", "功率均衡"],
      },
      {
        id: "communication",
        number: "08",
        title: "通信",
        description:
          "在发射端、接收端、电池与主机系统之间提供可靠的通信。",
        visual: "communication",
        points: ["Qi 协议", "CAN 总线", "UART", "BLE"],
      },
    ],
  },
  layers: [
    {
      id: "physics",
      name: "物理层",
      description: "定义无线能量传输的基本原理。",
      accent: "#2563EB",
      items: [
        { title: "谐振", text: "谐振耦合基础，实现高效近场传输。" },
        { title: "磁共振", text: "调谐磁共振，实现稳健的能量传递。" },
        { title: "动态无线供电", text: "支持运动容差与机会充电场景。" },
        { title: "电容式无线供电", text: "在应用需要时提供互补的电容式方案。" },
      ],
    },
    {
      id: "magnetic",
      name: "磁路层",
      description: "优化磁耦合，实现最大效率与容差。",
      accent: "#0F766E",
      items: [
        { title: "线圈设计", text: "根据目标功率与间隙要求设计发射/接收线圈几何结构。" },
        { title: "磁芯设计", text: "塑形磁性材料以引导磁通并降低损耗。" },
        { title: "磁通优化", text: "通过磁场塑形实现更高耦合与更纯净的传输。" },
        { title: "偏移容差", text: "容差设计确保对接偏差不会影响充电。" },
        { title: "屏蔽", text: "保护周边系统的屏蔽策略。" },
      ],
    },
    {
      id: "power",
      name: "功率层",
      description: "实现高效的功率转换与高频传输。",
      accent: "#C2410C",
      flow: ["逆变器", "匹配网络", "无线传输", "整流器", "DC/DC", "高频功率器件"],
      items: [
        { title: "高频转换", text: "在无线链路上实现高效的逆变与整流。" },
        { title: "匹配网络", text: "阻抗匹配确保负载变化时传输依然高效。" },
        { title: "DC/DC 级", text: "为电池与系统需求提供稳定输出。" },
      ],
    },
    {
      id: "control",
      name: "控制层",
      description: "为安全、自适应、高效的无线供电提供智能控制与保护。",
      accent: "#1D4ED8",
      items: [
        { title: "频率追踪", text: "在耦合与负载变化时追踪谐振状态。" },
        { title: "自适应控制", text: "为性能与稳定性调整供电策略。" },
        { title: "异物检测（FOD）", text: "为更安全的充电环境提供异物检测。" },
        { title: "通信", text: "实现发射/接收端在协商、监测与控制上的协同。" },
        { title: "多线圈控制", text: "管理多线圈阵列以实现覆盖与选择性。" },
      ],
    },
    {
      id: "system",
      name: "系统层",
      description: "确保可靠性、安全性、兼容性与卓越的量产能力。",
      accent: "#0F172A",
      items: [
        {
          id: "system-emc",
          title: "电磁兼容",
          text: "面向工业与合规环境的电磁兼容设计。",
        },
        {
          id: "system-thermal",
          title: "热设计",
          text: "支持持续运行工况的热设计。",
        },
        {
          id: "system-reliability",
          title: "可靠性",
          text: "支撑长期运行寿命的架构选择。",
        },
        {
          id: "system-mechanical",
          title: "机械结构",
          text: "适用于对接座、外壳与平台的机械集成。",
        },
        {
          id: "system-safety",
          title: "安全性",
          text: "内置于系统架构中的保护与故障安全机制。",
        },
        {
          id: "system-manufacturability",
          title: "可制造性",
          text: "面向量产、良率与一致性的产品化设计。",
        },
      ],
    },
  ],
  outcomes: [
    {
      title: "高效率",
      text: "跨物理、磁路与功率转换环节实现优化传输。",
    },
    {
      title: "稳定供电",
      text: "在对准偏差、负载与环境变化下保持稳定供电。",
    },
    {
      title: "安全可靠",
      text: "面向持续运行打造的控制、保护与系统设计。",
    },
    {
      title: "可扩展平台",
      text: "从模块到完整平台均可扩展的分层架构。",
    },
    {
      title: "广泛应用",
      text: "适用于机器人、自动化、医疗、农业与自主系统等场景。",
    },
  ],
} as const;
