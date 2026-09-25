import {
  autonomousSoftwareSections as sectionsEn,
  autonomousSoftwareProducts as productsEn,
} from "@/lib/autonomous-software";

const sectionCopy: Record<
  string,
  {
    label: string;
    description: string;
    overview?: {
      headline: string;
      lead?: string;
      body: string;
      flowIntro?: string;
      pillars?: { id: string; label: string; tagline?: string; description: string }[];
      steps?: { id: string; label: string }[];
    };
  }
> = {
  "charging-management-software": {
    label: "充电管理软件",
    description: "面向自主设备的智能充电管理。",
    overview: {
      headline: "面向自主设备的智能充电管理。",
      body: "在机器人、充电站与对接基础设施上实现监控、控制、自动化与优化。SiCore Charging Management System 通过统一平台提供实时充电可视、自主回充、智能调度、动态功率管理、故障诊断与能量分析。",
      pillars: [
        { id: "monitor", label: "MONITOR", description: "实时查看每台机器人、充电器、充电坞与充电会话。" },
        { id: "control", label: "CONTROL", description: "管理充电功率、曲线、安全与每一次充电会话。" },
        { id: "automate", label: "AUTOMATE", description: "实现自主回充、对接、充电与任务恢复。" },
        { id: "optimize", label: "OPTIMIZE", description: "提升充电器利用率、车队可用率、能效与功率分配。" },
      ],
    },
  },
  "fleet-charging-scheduler": {
    label: "SiCore 自主对接系统",
    description: "面向自主充电的精密对接智能。",
    overview: {
      headline: "面向自主充电的精密对接智能",
      body: "一套智能对接平台，统筹感知、定位、运动引导、连接器接合与电气校验，实现可靠的无人值守充电。",
      flowIntro: "整套系统可视为一个状态机。",
      steps: [
        { id: "dock-request", label: "对接请求" },
        { id: "dock-discovery", label: "坞站发现" },
        { id: "position-estimation", label: "位置估计" },
        { id: "coarse-alignment", label: "粗对准" },
        { id: "fine-alignment", label: "精对准" },
        { id: "final-approach", label: "最终接近" },
        { id: "connector-engagement", label: "连接器接合" },
        { id: "mechanical-verification", label: "机械校验" },
        { id: "electrical-verification", label: "电气校验" },
        { id: "charging-ready", label: "充电就绪" },
        { id: "charging", label: "充电" },
        { id: "release", label: "释放" },
        { id: "exit", label: "退出" },
      ],
    },
  },
  "monitoring-dashboard": {
    label: "监控仪表盘",
    description: "实时查看充电状态、故障与利用率。",
    overview: {
      headline: "一个界面，完整可视。",
      body: "从统一界面监控机器人、充电器、充电坞、充电会话、故障、能耗与系统性能。",
      pillars: [
        {
          id: "dash-live",
          label: "实时运营",
          description: "实时查看机器人、充电器、充电坞、充电会话与能量流。",
        },
        {
          id: "dash-alerts",
          label: "诊断与告警",
          description: "集中处理故障检测、安全事件、诊断信息与维护通知。",
        },
        {
          id: "dash-analytics",
          label: "分析与报告",
          description: "历史充电数据、能耗、充电器利用率、车队就绪度与系统性能。",
        },
      ],
    },
  },
  "fleet-charging": {
    label: "车队调度器",
    description: "统筹整支机器人车队的充电。",
    overview: {
      headline: "统筹整支机器人车队的充电",
      lead: "根据电池状态、任务优先级、充电坞可用性、位置与运营排程，智能决定何时、何地、哪台机器人充电。",
      body: "Fleet Scheduler 为多台机器人与共享充电设施提供协同充电智能。系统不再等到单台机器人电量过低才响应，而是持续评估车队能量需求、机器人可用性、即将执行的任务与充电资源，做出主动充电决策。",
      pillars: [
        {
          id: "smart-charging-queue",
          label: "智能充电队列",
          tagline: "让该充的机器人在正确的时间充电。",
          description:
            "根据电池荷电状态（SOC）、任务优先级、后续任务需求、等待时间与运行状态，动态排列充电优先级。队列会随车队状态持续调整。",
        },
        {
          id: "automatic-dock-assignment",
          label: "自动分配充电坞",
          tagline: "为每台机器人匹配最合适的可用充电器。",
          description:
            "根据机器人位置、充电坞可用性、充电能力、设备兼容性、行驶距离与预计等待时间自动分配充电坞。坞位预留可减少冲突和不必要的移动。",
        },
        {
          id: "mission-aware-scheduling",
          label: "任务感知调度",
          tagline: "让充电配合运营，而不是运营迁就充电。",
          description:
            "将充电与即将执行的任务和运营排程对齐。关键任务前可先补能，降低低电量打断重要作业的风险。",
        },
        {
          id: "opportunity-charging",
          label: "机会充电",
          tagline: "把空闲时间变成有效充电时间。",
          description:
            "利用换班、任务间隙、装卸等待或待机等短暂停顿自动补电，不打断正常作业。机会充电有助于维持更高电量并提升车队可用率。",
        },
        {
          id: "fleet-energy-readiness",
          label: "车队能量就绪度",
          tagline: "判断车队是否有足够能量应对下一步任务。",
          description:
            "持续评估电量、后续能量需求、充电器可用性与计划任务，判断车队能量就绪度。在运营受影响前识别充电瓶颈，并提前为后续负荷做好准备。",
        },
      ],
    },
  },
  "sdk-development-kit": {
    label: "SDK 与开发套件",
    description: "面向 OEM 集成与定制的 API、示例与工具。",
  },
};

const productTitleZh: Record<string, string> = {
  "cms-session-controller": "会话控制器",
  "cms-profile-engine": "曲线引擎",
  "cms-policy-manager": "策略管理器",
  "scheduler-core": "调度核心",
  "scheduler-priority": "优先级规划器",
  "scheduler-zones": "分区与班次规划器",
  "sdk-api": "API 库",
  "sdk-samples": "示例应用",
  "sdk-tools": "开发与仿真工具",
};

export const autonomousSoftwareSections = sectionsEn.map((section) => {
  const copy = sectionCopy[section.id];
  return {
    ...section,
    label: copy?.label ?? section.label,
    description: copy?.description ?? section.description,
    overview: section.overview
      ? {
          ...section.overview,
          ...copy?.overview,
          image: section.overview.image,
          imageAlt: section.overview.imageAlt,
          afterImage: section.overview.afterImage,
          afterImageAlt: section.overview.afterImageAlt,
        }
      : undefined,
    products: section.products.map((item) => ({
      ...item,
      title: productTitleZh[item.id] ?? item.title,
    })),
  };
});

export const autonomousSoftwareProducts = productsEn.map((item) => ({
  ...item,
  categoryId: item.categoryId,
  brand: "SiCore Dynamics",
  title: productTitleZh[item.id] ?? item.title,
}));

export const autonomousSoftwareCategories = autonomousSoftwareSections.map((section) => ({
  id: section.id,
  label: section.label,
  description: section.description,
  image: section.products[0]?.image ?? "/images/smart-test-equipments/fleet-tablet.png",
}));
