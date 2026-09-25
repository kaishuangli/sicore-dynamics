export const plugFreeDockingPage = {
  eyebrow: "对接技术",
  title: "对接技术",
  subtitle: "无需人工插拔的无缝对接",
  description:
    "SiCore 无插拔对接技术使自主设备无需线缆或人工连接器即可完成充电——通过精密的对接机构、接触式或无线接口、位置检测以及适应户外环境的可靠性设计。",
  heroImage: "/images/plug-free-docking/hero.png",
  dockMechanics: {
    id: "dock-mechanics",
    number: "01",
    eyebrow: "对接机构",
    title: "精密对接始于机械设计",
    description:
      "对接机构定义了机器人在开始功率传输前如何完成物理对准与固定。良好的机械接口设计可在真实工业环境中实现高重复精度。",
    heroImage: "/images/plug-free-docking/dock-mechanics-hero.png",
    highlights: [
      { label: "高重复精度", text: "稳定一致的对接表现", icon: "coil" },
      { label: "坚固设计", text: "专为工业环境打造", icon: "shield" },
      { label: "全自主", text: "无需人工介入", icon: "ai" },
      { label: "高容差", text: "适应真实世界的位置偏差", icon: "station" },
    ],
    processEyebrow: "对接流程总览",
    processTitle: "从靠近到充电",
    process: [
      { label: "靠近", detail: "机器人导航至对接区域" },
      { label: "自导向", detail: "机械导向结构引导机器人" },
      { label: "对准", detail: "实现精密对准" },
      { label: "锁定固定", detail: "如需要则启动机械锁定" },
      { label: "电源就位", detail: "电源接口完成连接" },
      { label: "开始充电", detail: "自动开始充电" },
    ],
    methodsEyebrow: "实现方式",
    methodsTitle: "如何实现精密对接",
    methods: [
      {
        id: "self-guiding",
        number: "01",
        title: "自导向",
        description:
          "被动式机械结构在机器人进入对接座时校正其运动轨迹，实现具有较大入口容差的平滑对接。",
        structures: ["漏斗导向", "V 型导向", "倒角导向", "轨道导向"],
        benefits: ["被动导向", "大容差", "平滑进入", "无需主动控制"],
      },
      {
        id: "self-centering",
        number: "02",
        title: "自定心",
        description:
          "定心机构将机器人引导至精确的对接中心，补偿 X/Y 方向偏移并改善电源接口对准。",
        structures: ["锥形导向", "销孔配合", "销槽配合", "磁性定心"],
        benefits: [
          "高定心精度",
          "补偿 X/Y 偏移",
          "提升功率传输效果",
          "降低磨损",
        ],
      },
      {
        id: "compliance",
        number: "03",
        title: "柔性补偿",
        description:
          "柔性补偿机构吸收冲击并补偿高度或平行度误差，同时保护对接座与车辆。",
        structures: ["浮动对接座", "弹簧补偿", "被动柔性结构", "减震吸收"],
        benefits: [
          "吸收冲击能量",
          "容许高度变化",
          "保护机械部件",
          "提升可靠性",
        ],
      },
      {
        id: "locking",
        number: "04",
        title: "锁定机构",
        description:
          "锁定机构在充电或恶劣环境中牢固固定机器人，防止因振动或外力导致脱离。",
        structures: ["销式锁", "钩式锁", "磁性锁", "电磁锁"],
        benefits: [
          "运行期间稳固固定",
          "抗振动",
          "防止意外脱离",
          "支持恶劣环境",
        ],
      },
      {
        id: "tolerance",
        number: "05",
        title: "容差优化",
        description:
          "对接座几何结构与间隙经过优化，在居中、偏移、角度偏差、磨损及热膨胀等条件下均能保持稳定对接。",
        structures: [
          "对接座几何结构",
          "导向对称性",
          "间隙设计",
          "磨损余量",
          "热膨胀",
        ],
        benefits: [
          "适应真实世界变化",
          "性能稳定一致",
          "长期重复精度",
          "降低维护需求",
        ],
      },
    ],
  },
  contactDock: {
    id: "contact-dock",
    number: "02",
    eyebrow: "接触式对接座",
    title: "无需插拔的直接电气连接",
    description:
      "接触式对接座通过在机器对接时自动接合的导电接口传输电力。该方案支持高功率传输，并为众多工业平台提供简单、可量产的连接路径。",
    heroImage: "/images/plug-free-docking/method-self-centering.png",
    highlights: [
      { label: "自动接合", text: "无需人工插拔", icon: "station" },
      { label: "高功率路径", text: "支持大电流充电", icon: "power" },
      { label: "耐磨设计", text: "专为反复对接循环打造", icon: "shield" },
      { label: "量产就绪", text: "简洁、可扩展的接口设计", icon: "coil" },
    ],
    processEyebrow: "接触式充电流程",
    processTitle: "从对接就位到电力流通",
    process: [
      { label: "靠近", detail: "机器进入接触式对接区域" },
      { label: "对准", detail: "机械导向结构使触点到位" },
      { label: "接合", detail: "导电接口实现稳固接触" },
      { label: "校验", detail: "存在检测与极性检查确认就绪状态" },
      { label: "充电", detail: "开始大电流功率传输" },
      { label: "释放", detail: "离开时触点干净地脱离" },
    ],
    methodsEyebrow: "接触式对接座实现方式",
    methodsTitle: "如何实现可靠的接触式供电",
    methods: [
      {
        id: "spring-pins",
        number: "01",
        title: "弹簧顶针",
        description:
          "弹簧顶针（Pogo Pin）在高度变化下保持稳定的接触力，确保每次对接循环都拥有稳定的电气通路。",
        image: "/images/plug-free-docking/method-self-centering.png",
        imageAlt: "Spring-loaded contact pins engaging a docking plate",
        structuresLabel: "常见结构",
        structures: [
          { label: "顶针（Pogo Pin）", icon: "pin-hole" },
          { label: "弹簧阵列", icon: "spring-compensation" },
          { label: "顶针载体", icon: "floating-dock" },
          { label: "触点帽", icon: "pin-slot" },
        ],
        benefits: [
          "接触力稳定一致",
          "容许高度变化",
          "高循环耐久性",
          "模块更换便捷",
        ],
      },
      {
        id: "pad-contacts",
        number: "02",
        title: "导电触片",
        description:
          "平面触片接口提供较大的导电面积用于功率传输，简化对准过程，并在固定式充电站中支持稳健的电流输送。",
        image: "/images/plug-free-docking/method-self-guiding.png",
        imageAlt: "Conductive pad contact interface on a docking station",
        structuresLabel: "常见结构",
        structures: [
          { label: "触片板", icon: "clearance-design" },
          { label: "双触片", icon: "guide-symmetry" },
          { label: "轨道触片", icon: "rail-guide" },
          { label: "密封触片", icon: "floating-dock" },
        ],
        benefits: [
          "接触面积大",
          "大电流能力",
          "结构简洁",
          "适用于固定对接座",
        ],
      },
      {
        id: "brush-contacts",
        number: "03",
        title: "电刷触点",
        description:
          "电刷接口在小幅相对运动中保持电气连续性，吸收振动并容许机器停稳后的轻微偏差。",
        image: "/images/plug-free-docking/method-compliance.png",
        imageAlt: "Brush contact modules for vibration-tolerant power transfer",
        structuresLabel: "常见结构",
        structures: [
          { label: "碳刷", icon: "passive-compliance" },
          { label: "电刷组件", icon: "shock-absorption" },
          { label: "弹簧电刷", icon: "spring-compensation" },
          { label: "擦拭路径", icon: "wear-allowance" },
        ],
        benefits: [
          "容许微动",
          "振动下保持稳定",
          "自清洁擦拭作用",
          "工业验证成熟方案",
        ],
      },
      {
        id: "wear-protection",
        number: "04",
        title: "耐磨与防护设计",
        description:
          "触点材料、镀层与密封方案经过精心选择，以抵御氧化、磨损与污染，确保接口在长期工作循环中保持可靠。",
        image: "/images/plug-free-docking/method-locking.png",
        imageAlt: "Protected contact interface designed for long duty cycles",
        structuresLabel: "常见结构",
        structures: [
          { label: "硬质镀层", icon: "wear-allowance" },
          { label: "防护密封", icon: "passive-compliance" },
          { label: "防尘罩", icon: "floating-dock" },
          { label: "可更换触头", icon: "pin-lock" },
        ],
        benefits: [
          "延长触点寿命",
          "抵御污染",
          "降低维护成本",
          "电阻长期稳定",
        ],
      },
      {
        id: "current-path",
        number: "05",
        title: "大电流路径优化",
        description:
          "汇流结构、并联路径与热设计经过优化，使接触式对接座能够安全传输高功率，同时保持低损耗与可控温升。",
        image: "/images/plug-free-docking/method-tolerance.png",
        imageAlt: "Diagram of high-current contact path and thermal considerations",
        diagrams: [
          { label: "标准接触", detail: "触片完全接合" },
          { label: "部分偏移", detail: "重叠余量减少" },
          { label: "温升情况", detail: "负载下受控" },
        ],
        structuresLabel: "常见优化因素",
        structures: [
          { label: "汇流结构", icon: "dock-geometry" },
          { label: "并联路径", icon: "guide-symmetry" },
          { label: "接触面积", icon: "clearance-design" },
          { label: "散热路径", icon: "thermal-expansion" },
          { label: "感测反馈", icon: "pin-hole" },
        ],
        benefits: [
          "高功率传输",
          "低连接损耗",
          "温升可控",
          "安全充电就绪",
        ],
      },
    ],
  },
  wirelessDock: {
    id: "wireless-dock",
    eyebrow: "无线对接座",
    title: "无线对接座",
    subtitle: "全自主非接触式充电",
    description:
      "SiCore 无线对接站将精密机械定位与非接触式功率传输相结合——在没有暴露电气触点的情况下，实现安全、高效、全自主的充电。",
    heroImage: "/images/plug-free-docking/wireless-dock-hero-v2.png",
    architecture: {
      id: "dock-architecture",
      number: "01",
      title: "对接座架构",
      description:
        "无线对接座将发射线圈、磁芯结构、功率电子与耐用充电表面整合为一个紧凑且易于维护的平台。",
      image: "/images/plug-free-docking/wd-architecture.png",
      imageAlt: "Exploded view of wireless dock layers and internal components",
      layers: [
        { label: "顶盖", detail: "保护与外观" },
        { label: "充电表面", detail: "耐用接触界面" },
        { label: "发射线圈", detail: "高效功率传输" },
        { label: "磁芯结构", detail: "磁场控制" },
        { label: "功率电子", detail: "智能电源管理" },
        { label: "对接座外壳", detail: "结构与环境防护" },
      ],
    },
    alignment: {
      id: "coil-alignment",
      number: "02",
      title: "线圈对准",
      description:
        "精确的线圈对准可确保最大耦合效率，并在实际对接停靠中保持稳定的充电性能。",
      cases: [
        {
          label: "完美对准",
          detail: "最优耦合，效率最高。",
          image: "/images/plug-free-docking/wd-align-perfect.png",
        },
        {
          label: "小幅偏移",
          detail: "效率略有下降，仍处于对准窗口内。",
          image: "/images/plug-free-docking/wd-align-small.png",
        },
        {
          label: "大幅偏移",
          detail: "充电可能受限或被禁止。",
          image: "/images/plug-free-docking/wd-align-large.png",
        },
      ],
      stats: [
        { label: "对准窗口（X / Y）", value: "±20 mm" },
        { label: "典型效率", value: "窗口内 90%+" },
      ],
    },
    surface: {
      id: "charging-surface",
      number: "03",
      title: "充电表面",
      description:
        "充电表面经过专门设计，具备机械耐久性与耐磨性，可在工业环境中实现安全的日常运行。",
      features: [
        { label: "耐磨损", detail: "> 100,000 次对接循环", icon: "shield" },
        { label: "高承载能力", detail: "支持重型机器人与设备", icon: "station" },
        { label: "易于清洁", detail: "表面光滑，抗污抗油", icon: "coil" },
        { label: "防滑设计", detail: "各种工况下均能安全对接", icon: "ai" },
      ],
      materials: [
        {
          label: "铝制表面",
          detail: "高强度，散热性能优异",
          image: "/images/plug-free-docking/wd-surface-aluminum.png",
        },
        {
          label: "复合材料表面",
          detail: "轻量化，耐腐蚀",
          image: "/images/plug-free-docking/wd-surface-composite.png",
        },
        {
          label: "橡胶表面",
          detail: "防滑，减振",
          image: "/images/plug-free-docking/wd-surface-rubber.png",
        },
      ],
    },
    fod: {
      id: "foreign-object-protection",
      number: "04",
      title: "异物防护",
      description:
        "先进的异物检测（FOD）技术监测充电区域内的金属物体，一旦检测到危险即禁用充电。",
      cases: [
        {
          label: "检测到螺栓",
          status: "充电已禁用",
          safe: false,
          image: "/images/plug-free-docking/wd-fod-bolt.png",
        },
        {
          label: "检测到钥匙",
          status: "充电已禁用",
          safe: false,
          image: "/images/plug-free-docking/wd-fod-key.png",
        },
        {
          label: "检测到硬币",
          status: "充电已禁用",
          safe: false,
          image: "/images/plug-free-docking/wd-fod-coin.png",
        },
        {
          label: "无异物",
          status: "充电已启用",
          safe: true,
          image: "/images/plug-free-docking/wd-fod-clear.png",
        },
      ],
      features: [
        { label: "多点感测", detail: "高精度检测", icon: "emc" },
        { label: "快速响应", detail: "检测耗时 <100 毫秒", icon: "bolt" },
        { label: "安全可靠", detail: "保护系统与用户", icon: "shield" },
        { label: "持续监测", detail: "实时监控充电区域", icon: "ai" },
      ],
    },
    sealed: {
      id: "sealed-dock-design",
      number: "05",
      title: "密封对接座设计",
      description:
        "全密封对接座可抵御水、灰尘、化学品与极端天气，实现可靠的户外与工业部署。",
      protections: [
        { label: "IP67 防护", detail: "防水防尘", icon: "shield" },
        { label: "耐腐蚀", detail: "长期材料耐久性", icon: "thermal" },
        { label: "耐化学腐蚀", detail: "可承受冲洗与液体接触", icon: "emc" },
        { label: "耐冲击", detail: "专为工业强度打造", icon: "station" },
      ],
      environments: [
        { label: "雨天", image: "/images/plug-free-docking/wd-env-rain.png" },
        { label: "雪天", image: "/images/plug-free-docking/wd-env-snow.png" },
        { label: "沙尘", image: "/images/plug-free-docking/wd-env-dust.png" },
        { label: "泥泞", image: "/images/plug-free-docking/wd-env-mud.png" },
      ],
    },
    cta: {
      title: "可靠连接，持续供电。",
      text: "SiCore 无线对接座为下一代智能机器提供安全、高效、全自主的充电体验。",
    },
  },
  positionDetection: {
    id: "position-detection",
    number: "04",
    eyebrow: "位置检测",
    title: "确认对准状态是否已可开始充电",
    description:
      "位置检测在充电开始前确认机器已正确对准。传感与反馈机制有助于验证对接精度、提升安全性，并确保每次停靠都能实现高效的功率传输。",
    heroImage: "/images/plug-free-docking/dock-mechanics-hero.png",
    highlights: [
      { label: "对接座存在检测", text: "接近前确认充电站", icon: "station" },
      { label: "对准就绪", text: "充电前验证姿态", icon: "ai" },
      { label: "偏移反馈", text: "实时修正接近路径", icon: "coil" },
      { label: "自主流程", text: "支持完整对接流程", icon: "shield" },
    ],
    methodsEyebrow: "检测方式",
    methodsTitle: "如何在充电前感知位置",
    methods: [
      {
        id: "vision-guidance",
        number: "01",
        title: "视觉引导",
        description:
          "自主机器人在进入最终对接流程之前，首先通过机载视觉系统识别充电站。摄像头持续检测 AprilTag、基准标记、二维码或自然结构特征等视觉特征，以估算充电座的位置与姿态。与传统固定位置对接相比，视觉引导具有更高的灵活性，可在无需大量机械调整的情况下重新部署充电站。",
        descriptionSecondary:
          "现代 AI 视觉算法进一步提升了在光照变化与部分遮挡环境下的鲁棒性，使基于视觉的对接成为下一代自主机器不可或缺的核心技术。",
        technologiesLabel: "核心技术",
        technologies: [
          "AprilTag 检测",
          "ArUco 标记识别",
          "AI 视觉算法",
          "特征匹配",
          "姿态估计",
        ],
        benefits: [
          "充电站可重新部署",
          "无需固定夹具即可灵活接近",
          "光照变化下依然鲁棒",
          "支持部分遮挡场景",
          "精确的充电座姿态估计",
        ],
      },
      {
        id: "lidar-localization",
        number: "02",
        title: "激光雷达定位",
        description:
          "激光雷达通过持续扫描周围环境并生成实时点云，提供高精度三维定位。与基于摄像头的方案不同，激光定位在很大程度上不受环境光照影响，使自主车辆能够在仓库、工厂与户外环境中可靠导航。",
        descriptionSecondary:
          "在对接过程中，激光雷达可精确估算机器人相对充电站的位置，并持续修正其运动轨迹，确保在充电开始前实现平滑且可重复的对准。",
        image: "/images/plug-free-docking/method-lidar-localization.png",
        imageAlt:
          "LiDAR point-cloud localization for indoor, warehouse, and night-time docking environments",
        technologiesLabel: "核心技术",
        technologies: [
          "2D / 3D 激光雷达",
          "SLAM 定位",
          "点云配准",
          "障碍物建图",
          "实时导航",
        ],
        benefits: [
          "不受光照影响的定位",
          "高精度三维定位",
          "适用于仓储与户外场景",
          "持续的轨迹修正",
          "平滑、可重复的对接对准",
        ],
      },
      {
        id: "infrared-guidance",
        number: "03",
        title: "红外引导",
        layout: "stacked",
        gallery: [
          {
            src: "/images/plug-free-docking/method-infrared-fov.png",
            alt: "Five-step infrared guidance process from detection to docking",
          },
          {
            src: "/images/plug-free-docking/method-infrared-service-robot.png",
            alt: "Service robot with infrared docking charging pile for automatic charging",
          },
        ],
        whatIsTitle: "什么是红外引导？",
        description:
          "红外引导使用安装在充电座上的红外发射器与安装在机器人上的红外接收器。当机器人接近充电站时，会检测红外信号并调整运动轨迹，直至到达正确的对接位置。",
        advantagesLabel: "优势",
        advantages: [
          "系统成本低",
          "实现方式简单",
          "响应速度快",
          "功耗低",
          "技术成熟可靠",
        ],
        applicationsLabel: "典型应用",
        applications: [
          "扫地机器人",
          "消费级机器人",
          "教育机器人",
          "室内配送机器人",
          "小型服务机器人",
        ],
      },
      {
        id: "ultrasonic-detection",
        number: "04",
        title: "超声波检测",
        layout: "stacked",
        gallery: [
          {
            src: "/images/plug-free-docking/method-ultrasonic-sensor.png",
            alt: "Ultrasonic sensor module used for short-range docking detection",
          },
          {
            src: "/images/plug-free-docking/method-ultrasonic-diagram.png",
            alt: "Diagrams of ultrasonic cliff, wall, obstacle, and auto-recharge detection",
          },
        ],
        whatIsTitle: "什么是超声波检测？",
        description:
          "超声波传感器发射高频声波，并根据反射回波计算与附近物体的距离。在对接过程中，这些传感器持续测量机器人与充电站之间的距离，以实现平滑且无碰撞的定位。",
        advantagesLabel: "优势",
        advantages: [
          "精确的近距离检测",
          "成本低",
          "不受光照变化影响",
          "可靠的障碍物检测",
          "适合作为辅助定位传感器",
        ],
        applicationsLabel: "典型应用",
        applications: [
          "AGV",
          "清洁机器人",
          "移动服务机器人",
          "智能仓储车辆",
          "室内自动化设备",
        ],
      },
    ],
  },
  outdoorReliability: {
    id: "outdoor-reliability",
    number: "05",
    eyebrow: "户外可靠性",
    title: "为真实环境而生，而非仅限实验室条件",
    description:
      "户外可靠性确保对接在灰尘、潮湿、温度变化与振动条件下依然正常工作。材料、密封与接口设计均经过精心选择，以适应严苛现场条件下的长期运行。",
    methodsEyebrow: "可靠性支柱",
    methodsTitle: "户外对接如何保持稳定可靠",
    methods: [
      {
        id: "weather-protection",
        number: "01",
        title: "天气防护",
        description:
          "凭借密封外壳防护，可在雨水、灰尘与户外环境中可靠运行。",
        gallery: [
          {
            src: "/images/plug-free-docking/outdoor-weather-rain.png",
            alt: "Sealed outdoor equipment operating in heavy rain at night",
          },
          {
            src: "/images/plug-free-docking/outdoor-weather-shelter.png",
            alt: "Autonomous robot docked under a solar-panel shelter outdoors",
          },
          {
            src: "/images/plug-free-docking/outdoor-weather-field.png",
            alt: "Rugged outdoor robot at a weather-exposed docking station",
          },
        ],
        technologiesLabel: "核心技术",
        technologies: ["IP67 / IP69K", "防水密封", "防尘保护"],
      },
      {
        id: "corrosion-resistance",
        number: "02",
        title: "耐腐蚀性",
        description:
          "耐用材料与防护涂层可延长产品在潮湿及腐蚀性环境中的使用寿命。",
        gallery: [
          {
            src: "/images/plug-free-docking/outdoor-corrosion-beach.png",
            alt: "Coastal outdoor furniture and charging interface near the beach",
          },
          {
            src: "/images/plug-free-docking/outdoor-corrosion-bollards.png",
            alt: "Corrosion-resistant outdoor charging bollards along a seaside promenade",
          },
          {
            src: "/images/plug-free-docking/outdoor-corrosion-garden.png",
            alt: "Protected outdoor charging station beside a garden bench",
          },
        ],
        technologiesLabel: "核心技术",
        technologies: ["阳极氧化铝", "防护涂层", "不锈钢五金件"],
      },
      {
        id: "thermal-management",
        number: "03",
        title: "热管理",
        description:
          "通过优化的热设计，在高低温环境下均可保持稳定运行。",
        gallery: [
          {
            src: "/images/plug-free-docking/outdoor-thermal-robot.png",
            alt: "Mobile robot docking at a tall outdoor charging pillar",
          },
          {
            src: "/images/plug-free-docking/outdoor-thermal-cabinet.png",
            alt: "Industrial cabinet with temperature and humidity monitoring display",
          },
          {
            src: "/images/plug-free-docking/outdoor-thermal-heatsink.png",
            alt: "Power electronics module with metal heatsink for thermal dissipation",
          },
        ],
        technologiesLabel: "核心技术",
        technologies: ["散热设计", "耐紫外线", "宽温度范围运行"],
      },
      {
        id: "mechanical-durability",
        number: "04",
        title: "机械耐久性",
        description:
          "专为承受反复对接循环、振动与意外冲击而设计。",
        gallery: [
          {
            src: "/images/plug-free-docking/outdoor-durability-hex.png",
            alt: "Hexagonal robot docking at a marked outdoor charging station",
          },
          {
            src: "/images/plug-free-docking/outdoor-durability-wall.png",
            alt: "Robot docked at a wall charging port with battery status indicator",
          },
          {
            src: "/images/plug-free-docking/outdoor-durability-bay.png",
            alt: "Multiple robots charging in a protected docking bay",
          },
        ],
        technologiesLabel: "核心技术",
        technologies: ["抗冲击性", "抗振动性", "结构强度"],
      },
    ],
  },
} as const;
