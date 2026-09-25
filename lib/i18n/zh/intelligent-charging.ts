export const intelligentChargingPage = {
  eyebrow: "智能充电系统",
  title: "更智能的充电，更高的可用性。",
  description:
    "SiCore 智能充电系统通过自适应充电算法与实时系统智能，协调电池、充电站、移动设备与车队级运营。",
  supporting:
    "从单台自主设备到整个机器人车队，该平台可提供安全、高效且持续优化的充电服务。",
  heroImage: "/images/intelligent-charging/ics-hero-fleet.png",
  highlights: [
    { label: "自适应充电", icon: "ai" },
    { label: "电池感知", icon: "power" },
    { label: "车队协同", icon: "station" },
    { label: "实时诊断", icon: "chip" },
  ],
  fleetStats: [
    { label: "在线", value: "18" },
    { label: "充电中", value: "7" },
    { label: "待命", value: "9" },
    { label: "故障", value: "1" },
  ],
  fleetAvailability: "85%",
  workflowEyebrow: "智能充电工作流程",
  workflowTitle: "从电池状态到车队级优化。",
  workflow: [
    {
      label: "电池状态",
      detail: "监测 SOC、电压、温度及电池状态。",
      icon: "power",
    },
    {
      label: "充电决策",
      detail: "评估需求、优先级与充电站可用性。",
      icon: "ai",
    },
    {
      label: "功率与充电曲线",
      detail: "为任务选择最优充电策略。",
      icon: "coil",
    },
    {
      label: "充电执行",
      detail: "在受控范围内安全输出电能。",
      icon: "bolt",
    },
    {
      label: "监测与诊断",
      detail: "实时跟踪性能并检测故障。",
      icon: "chip",
    },
    {
      label: "车队优化",
      detail: "优化排班、排队与能量需求。",
      icon: "station",
    },
  ],
  modules: [
    {
      id: "charging-algorithms",
      number: "01",
      title: "充电算法",
      subtitle: "为每种电池与任务优化充电",
      description:
        "充电算法决定了整个充电周期内电能的输出方式。系统会根据电池状态、运行需求与可用充电时间，动态调整电压、电流、功率与充电时长。",
      detail:
        "该平台并非采用单一固定的充电曲线，而是支持自适应策略，在充电速度、电池健康、安全性与设备可用性之间取得平衡。",
      visual: "algorithms",
      technologies: [
        "CC / CV / CP 充电",
        "多阶段充电",
        "自适应充电曲线",
        "机会充电",
      ],
    },
    {
      id: "battery-management",
      number: "02",
      title: "电池管理",
      subtitle: "电池感知型充电与保护",
      description:
        "电池管理将充电决策与电池的真实状态相连接。系统监测电压、电流、温度、电量状态（SOC）与电池健康状况，确保电能输出始终处于安全运行范围内。",
      detail:
        "通过实时利用电池反馈信息，可动态调整充电行为，降低电池负荷、防止过热并延长电池使用寿命。",
      visual: "battery",
      technologies: [
        "SOC / SOH 监测",
        "电压与电流监测",
        "温度监测",
        "电池保护",
      ],
    },
    {
      id: "charging-scheduling",
      number: "03",
      title: "充电调度",
      subtitle: "跨多设备的协同充电",
      description:
        "充电调度根据电量水平、任务优先级、充电站可用性与运营排班，协调多台机器人、车辆与充电站之间的充电需求。",
      detail:
        "这有助于减少充电拥堵、避免不必要的停机，并提升车队整体利用率。",
      visual: "fleet",
      technologies: [
        "排队管理",
        "充电站分配",
        "优先级排班",
        "能量均衡",
      ],
    },
    {
      id: "communication",
      number: "04",
      title: "通信",
      subtitle: "贯穿整个系统的互联充电",
      description:
        "可靠的通信使充电器、电池、机器人、主控制器与车队管理系统之间能够交换运行数据与充电指令。",
      detail:
        "通信层可实现设备与平台间的身份识别、授权、参数配置、状态上报与协同控制。",
      visual: "communication",
      technologies: ["CAN", "UART", "RS-485", "以太网", "BLE", "Modbus", "OEM 接口"],
    },
    {
      id: "diagnostics",
      number: "05",
      title: "诊断",
      subtitle: "充电性能的实时可视化",
      description:
        "诊断功能持续监测充电行为、系统状态、运行工况与故障事件，帮助识别异常并缩短维护时间。",
      detail:
        "历史运行数据还可支持预防性维护、性能分析与未来的充电优化。",
      visual: "diagnostics",
      technologies: [
        "故障检测",
        "事件日志",
        "远程诊断",
        "预测性维护",
      ],
    },
  ],
  benefitsEyebrow: "智能充电优势",
  benefits: [
    {
      title: "更安全的充电",
      text: "电池感知控制与持续系统保护。",
      icon: "shield",
    },
    {
      title: "更长的电池寿命",
      text: "自适应充电可减少不必要的电气与热应力。",
      icon: "power",
    },
    {
      title: "更高的车队可用性",
      text: "设备可根据任务优先级与需求获取能量。",
      icon: "station",
    },
    {
      title: "更少的停机时间",
      text: "实时诊断与协同排班让设备持续保持运行状态。",
      icon: "chip",
    },
    {
      title: "更低的总体成本",
      text: "更高的利用率与更少的中断，长期降低运营成本。",
      icon: "bolt",
    },
  ],
  ctaTitle: "智能、自适应、可靠。",
  ctaText:
    "打造让自主设备持续保持高效运转的充电系统——从电池感知控制到车队级协同。",
  ctaLabel: "联系我们的工程师",
} as const;
