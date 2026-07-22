import type { IndustryId } from "@/lib/industries";

export type SolutionFaqItem = {
  question: string;
  answer: string;
};

export const solutionFaqs: Record<IndustryId, readonly SolutionFaqItem[]> = {
  "automation-robotics": [
    {
      question: "为什么工业机器人更倾向于选择无线充电而非接触式充电？",
      answer:
        "无线充电可消除因振动、灰尘与反复对接产生的连接器磨损，同时支持机器人密封外壳设计与自主停靠充电工作流程。",
    },
    {
      question: "SiCore 为机器人应用提供哪些功率等级？",
      answer:
        "SiCore 无线供电平台覆盖 60W 至 3000W，支持产线工位上的协作机器人、机械臂与自动化生产设备。",
    },
    {
      question: "无线充电器能否集成到现有的机器人工作单元中？",
      answer:
        "可以。发射端充电板与接收模块专为地面安装或工位集成而设计，可容忍正常停靠对位的偏差。",
    },
    {
      question: "机会充电如何提升机器人的正常运行时间？",
      answer:
        "机器人可在指定工位的工作周期间隙获得短时充电，从而减少空闲时间并消除人工插拔充电环节。",
    },
    {
      question: "SiCore 系统是否适用于严苛的工厂环境？",
      answer:
        "IP 防护密封设计可保护电子元件免受工业自动化环境中常见的灰尘、潮湿与振动影响。",
    },
    {
      question: "SiCore 是否支持为 OEM 机器人平台提供定制化无线充电方案？",
      answer:
        "是的。SiCore 工程团队可为机器人 OEM 项目提供线圈设计、PCB 开发、热优化与量产支持。",
    },
  ],
  "unmanned-aerial-vehicles": [
    {
      question: "无线充电对 AGV 与 AMR 车队运营有哪些优势？",
      answer:
        "非接触式充电消除了触点磨损与对位失败问题，可在运行路线上实现机会充电，并提升车队整体利用率。",
    },
    {
      question: "移动机器人的机会充电是什么？",
      answer:
        "车辆可在路线终点或排队通道的短暂空闲期间获得电能补充，无需人工操作连接器或精密机械对接。",
    },
    {
      question: "多台 AMR 能否共用同一套充电基础设施？",
      answer:
        "可以。标准化发射端充电板支持通过场地布局与车队管理软件配置的全车队充电区域。",
    },
    {
      question: "哪种功率范围适用于仓储与工厂的 AMR 部署？",
      answer:
        "SiCore 产品从 200W 移动平台到 3000W 车队基础设施，可覆盖轻型 AMR 到重载物流车辆的各类需求。",
    },
    {
      question: "自主对接如何处理对位容差问题？",
      answer:
        "磁耦合可容忍远超机械触点插接的位置偏差，从而减少对接失败事件。",
    },
    {
      question: "SiCore 无线充电能否在大型配送中心实现规模化部署？",
      answer:
        "可以。SiCore 支持多班次、高吞吐量的物流运营，可在作业通道沿线部署可靠的充电站。",
    },
  ],
  "medical-equipment": [
    {
      question: "无线充电对医疗设备的卫生管理为何重要？",
      answer:
        "消除外露充电接口可降低污染风险，并支持临床设备的擦拭消毒与灭菌流程。",
    },
    {
      question: "哪些医疗设备可以使用 SiCore 无线充电？",
      answer:
        "便携式监护仪、医疗推车、手术器械与诊断设备均可从密封、非接触式充电接口中获益。",
    },
    {
      question: "SiCore 医疗充电模块是否具备防水性能？",
      answer:
        "接收端与发射端设计均支持密封外壳，适用于需要定期清洁的临床环境。",
    },
    {
      question: "哪种功率等级适合便携式医疗设备？",
      answer:
        "SiCore 紧凑型 60W 与 200W 模块专为便携式设备与移动临床工作站优化设计。",
    },
    {
      question: "非接触式充电如何简化临床工作流程？",
      answer:
        "医护人员只需将设备放置在充电板上，无需操作线缆，从而将精力集中于患者护理而非电力管理。",
    },
    {
      question: "SiCore 是否为医疗设备制造商提供 OEM 集成支持？",
      answer:
        "是的。SiCore 为医疗 OEM 项目提供接收模块集成、安全监测与工程支持。",
    },
  ],
  "agricultural-automation": [
    {
      question: "农业机器人为什么需要无线充电？",
      answer:
        "农业机器人在灰尘、泥浆、雨水与化学喷洒环境中作业，外露连接器容易迅速腐蚀，从而中断自主作业。",
    },
    {
      question: "无线充电能否在户外田间正常工作？",
      answer:
        "可以。密封感应式对接站可通过坚固外壳传输电能，支持在田间工位与温室路线上进行户外机会充电。",
    },
    {
      question: "哪些农业应用会用到 SiCore 充电方案？",
      answer:
        "自主田间机器人、喷洒作业车队、温室移动平台以及收获运输系统。",
    },
    {
      question: "哪种功率级别适合农业机器人？",
      answer:
        "200W 至 1500W 平台可支持从轻型巡查机器人到高负荷喷洒与运输平台的各类需求。",
    },
    {
      question: "无线充电如何提升农场车队的正常运行时间？",
      answer:
        "机器人可在任务之间自动充电，无需人工插拔线缆，从而在关键的播种与收获窗口期减少停机时间。",
    },
    {
      question: "SiCore 能否与 OEM 农业平台集成？",
      answer:
        "是的。SiCore 为农业机器人 OEM 厂商与车队运营方提供线圈布置、户外密封与电力电子方面的工程设计。",
    },
  ],
  "smart-furniture": [
    {
      question: "无线充电如何嵌入家具表面？",
      answer:
        "发射线圈安装于桌面或扶手下方，可在设计厚度范围内透过木材、石材或层压板传输电能。",
    },
    {
      question: "哪些场所会使用智能家具无线充电？",
      answer:
        "酒店、办公室、餐厅、机场与公共休息区均可集成隐藏式充电，无需可见接口或线缆。",
    },
    {
      question: "SiCore 家具模块是否与常见手机兼容？",
      answer:
        "可以。兼容 Qi 标准的发射模块支持放置在指定充电区域内的常见移动设备。",
    },
    {
      question: "嵌入式充电是否会影响家具的美观性？",
      answer:
        "无线模块隐藏于表面之下，保持简洁的设计线条，且不存在机械接口磨损问题。",
    },
    {
      question: "家具集成通常采用哪种功率等级？",
      answer:
        "60W 嵌入式模块可为酒店与办公家具应用提供可靠充电。",
    },
    {
      question: "家具制造商能否获得 OEM 集成支持？",
      answer:
        "SiCore 为家具 OEM 项目提供线圈布置、散热设计与生产集成方面的支持。",
    },
  ],
  "consumer-electronics": [
    {
      question: "OEM 厂商为什么将无线充电集成到消费类产品中？",
      answer:
        "非接触式充电可提升用户使用便利性，支持密封外壳设计，并强化产品的高端定位。",
    },
    {
      question: "SiCore 模块是否兼容 Qi 标准？",
      answer:
        "是的。SiCore 60W 与 200W 平台支持兼容 Qi 标准的手机、耳机、可穿戴设备与手持配件。",
    },
    {
      question: "接收模块能否适配紧凑型产品外壳？",
      answer:
        "超薄接收端 PCB 与线圈专为小型消费设备中紧凑的机械堆叠结构而设计。",
    },
    {
      question: "OEM 团队在设计无线充电时应考虑哪些因素？",
      answer:
        "线圈对准容差、温升、EMC 合规性与充电时间目标，都必须与产品外壳设计一并纳入工程考量。",
    },
    {
      question: "SiCore 是否支持消费类产品的认证要求？",
      answer:
        "SiCore 工程团队可满足消费类产品上市所需的安全监测、效率与 EMC 相关要求。",
    },
    {
      question: "SiCore 能否同时提供发射与接收模块？",
      answer:
        "是的。SiCore 可为对接站、保护壳、家具表面及嵌入式产品充电提供配套的发射/接收（TX/RX）平台。",
    },
  ],
  "customized-solutions": [
    {
      question: "项目应在何时选择定制无线充电而非现成产品？",
      answer:
        "当功率等级、耦合距离、环境防护等级或机械结构限制超出标准产品规格时，就需要采用定制工程方案。",
    },
    {
      question: "SiCore 定制项目包含哪些服务？",
      answer:
        "线圈设计、PCB 开发、功率优化、异物检测、热管理、EMC 优化、原型开发以及量产支持。",
    },
    {
      question: "定制 SiCore 系统可提供的功率范围是多少？",
      answer:
        "定制平台可根据应用负载、传输间距与散热要求，覆盖 60W 至 3000W 的功率范围。",
    },
    {
      question: "SiCore 如何验证定制无线充电设计？",
      answer:
        "在投入生产工具之前，通过台架测试验证效率、热性能、异物响应与 EMI 表现。",
    },
    {
      question: "SiCore 能否支持从原型到量产的过渡？",
      answer:
        "是的。工程团队可协助从试产阶段到规模化制造，并提供持续的生产支持。",
    },
    {
      question: "哪些行业通常需要定制化无线供电？",
      answer:
        "专用工业设备、自主车辆、医疗 OEM 平台、无人机以及非标准自动化集成项目。",
    },
  ],
};

export function getSolutionFaqs(id: IndustryId): readonly SolutionFaqItem[] {
  return solutionFaqs[id];
}
