import type { Locale } from "@/lib/i18n/config";
import type { KnowledgeFigure } from "@/lib/knowledge-articles/types";
import { getCollectionWikiFigures } from "@/lib/knowledge-article-media";

export type KnowledgeWikiOverview = {
  lead: string;
  overview: readonly string[];
  keyConcepts: readonly string[];
  heroFigure: KnowledgeFigure;
  inlineFigure: KnowledgeFigure;
};

type WikiCopy = Omit<KnowledgeWikiOverview, "heroFigure" | "inlineFigure">;

const copyByCategory: Record<string, Record<Locale, WikiCopy>> = {
  "wireless-charging-fundamentals": {
    en: {
      lead: "Wireless charging delivers power across an air gap without mating connectors. This collection explains transfer modes, coupling ideas, and the vocabulary used throughout industrial WPT design.",
      overview: [
        "In warehouses, factories, and outdoor autonomy, wireless charging is less about convenience pads and more about sealed, high-cycle opportunity charging. A transmitter creates a controlled field; a receiver recovers DC for a battery or load.",
        "Use these articles as a wiki-style primer before specializing into resonant tanks, coil geometry, or power electronics. Each topic stands alone, but reading in order builds a shared engineering language.",
      ],
      keyConcepts: [
        "Near-field magnetic transfer vs far-field radiative links",
        "Inductive, resonant, capacitive, RF, microwave, and optical paths",
        "Static opportunity charging vs dynamic in-motion concepts",
        "Efficiency, alignment, EMI, and safety as co-equal design constraints",
      ],
    },
    zh: {
      lead: "无线充电在气隙两侧传递电能，无需插拔连接器。本系列解释传输方式、耦合概念，以及工业无线供电设计中的通用术语。",
      overview: [
        "在仓储、工厂与户外自主设备中，无线充电不仅是“方便”，更是高循环、可密封的机会充电基础设施：发射端建立受控场，接收端回收直流给电池或负载。",
        "请把这些文章当作 Wiki 式入门：先建立共同语言，再进入谐振、线圈与功率电子等专题。",
      ],
      keyConcepts: [
        "近场磁耦合与远场辐射传输",
        "感应、谐振、电容、射频、微波与光学路径",
        "静止机会充电与动态充电概念",
        "效率、对准、EMI 与安全需一并设计",
      ],
    },
    es: {
      lead: "La carga inalámbrica entrega energía a través de un entrehierro sin conectores. Esta colección explica modos de transferencia, acoplamiento y el vocabulario del WPT industrial.",
      overview: [
        "En almacenes y autonomía exterior, la carga inalámbrica habilita opportunity charging sellado de alto ciclo: el transmisor crea un campo controlado y el receptor recupera DC para batería o carga.",
        "Use estos artículos como una wiki introductoria antes de resonancia, bobinas o electrónica de potencia.",
      ],
      keyConcepts: [
        "Campo cercano magnético frente a enlaces radiativos",
        "Rutas inductiva, resonante, capacitiva, RF, microondas y óptica",
        "Carga estática frente a conceptos dinámicos",
        "Eficiencia, alineación, EMI y seguridad como restricciones conjuntas",
      ],
    },
  },
  "resonant-wireless-power": {
    en: {
      lead: "Resonant wireless power tunes transmitter and receiver tanks so useful energy crosses larger gaps and imperfect alignment — the backbone of many industrial docks.",
      overview: [
        "Resonance is not a marketing word; it is an impedance and energy-exchange strategy. Coupling coefficient, quality factor, compensation networks, and soft switching determine whether a pad stays efficient when a robot parks imperfectly.",
        "This collection walks from resonant theory through LCC/LCL networks, bifurcation, ZVS/ZCS, and regulation stability — the classic topics engineers revisit when commissioning a fleet charger.",
      ],
      keyConcepts: [
        "k and Q as the link figure of merit",
        "Series, parallel, LCC, and LCL compensation families",
        "Frequency splitting under strong coupling",
        "ZVS/ZCS and closed-loop power regulation",
      ],
    },
    zh: {
      lead: "谐振无线供电通过调谐发射与接收谐振腔，使能量在更大气隙与一定偏移下仍可有效传递，是许多工业充电坞的基础。",
      overview: [
        "谐振是阻抗与能量交换策略：耦合系数、品质因数、补偿网络与软开关，决定机器人停车不完美时效率是否仍可接受。",
        "本系列从谐振理论到 LCC/LCL、频率分裂、ZVS/ZCS 与调节稳定性，覆盖调试车队充电器时最常回顾的经典主题。",
      ],
      keyConcepts: [
        "k 与 Q 作为链路指标",
        "串并联与 LCC/LCL 补偿族",
        "强耦合下的频率分裂",
        "ZVS/ZCS 与闭环功率调节",
      ],
    },
    es: {
      lead: "La potencia resonante sintoniza tanques Tx/Rx para cruzar mayores entrehierros y desalineación — base de muchos docks industriales.",
      overview: [
        "La resonancia es estrategia de impedancia: k, Q, redes de compensación y soft switching definen si el pad sigue siendo eficiente con aparcamiento imperfecto.",
        "Esta colección cubre teoría, LCC/LCL, bifurcación, ZVS/ZCS y estabilidad — temas clásicos al poner en marcha cargadores de flota.",
      ],
      keyConcepts: [
        "k y Q como métrica del enlace",
        "Familias serie, paralelo, LCC y LCL",
        "División de frecuencia con fuerte acoplamiento",
        "ZVS/ZCS y regulación en lazo cerrado",
      ],
    },
  },
  "coil-engineering": {
    en: {
      lead: "Coil engineering turns electromagnetic intent into copper, ferrite, and packaging that survive gaps, misalignment, heat, and manufacturing tolerance.",
      overview: [
        "Geometry (spiral, DD, arrays), conductors (Litz, PCB), and magnetics (ferrite tiles, shields) jointly set coupling maps. Simulation and measurement close the loop before a pad goes into a fleet.",
        "Treat this collection as a coil wiki: start with fundamentals, then specialize into loss mechanisms, thermal design, chassis interaction, and production checklists.",
      ],
      keyConcepts: [
        "Coil geometries and multi-coil arrays",
        "Litz, skin, and proximity effects",
        "Ferrite layout, shielding, and leakage control",
        "Alignment windows, FEM, and manufacturability",
      ],
    },
    zh: {
      lead: "线圈工程把电磁意图落实为铜线、铁氧体与封装，使其能在气隙、偏移、发热与制造公差下可靠工作。",
      overview: [
        "几何（螺旋、DD、阵列）、导体（利兹线、PCB）与磁性材料共同决定耦合地图；仿真与测量在量产前闭环验证。",
        "把本系列当作线圈 Wiki：从基础到损耗、热设计、车体干扰与制造检查清单。",
      ],
      keyConcepts: [
        "线圈几何与多线圈阵列",
        "利兹线、趋肤与邻近效应",
        "铁氧体布局、屏蔽与漏磁控制",
        "对准窗口、有限元与可制造性",
      ],
    },
    es: {
      lead: "La ingeniería de bobinas convierte la intención electromagnética en cobre, ferrita y encapsulado que sobreviven entrehierro, desalineación y calor.",
      overview: [
        "Geometría, conductores y magnéticos definen el mapa de acoplamiento. Simulación y medida cierran el ciclo antes de flota.",
        "Use esta colección como wiki de bobinas: fundamentos, pérdidas, térmica e interacción con el chasis.",
      ],
      keyConcepts: [
        "Geometrías y arreglos multi-bobina",
        "Litz, efecto pelicular y de proximidad",
        "Ferrita, apantallamiento y flujo de fuga",
        "Ventana de alineación, FEM y fabricabilidad",
      ],
    },
  },
  "power-electronics": {
    en: {
      lead: "Power electronics convert wall or bus power into a controlled high-frequency drive for the coil — and recover clean DC on the vehicle side.",
      overview: [
        "Inverters, rectifiers, WBG devices, gate drivers, sensing, and EMI filters decide whether a resonant idea becomes a reliable kilowatt-class dock. Loss maps and layout parasitics matter as much as topology cartoons.",
        "This wiki-style collection covers the classic PE stack used in industrial wireless chargers: conversion stages, modulation, protection, and verification habits.",
      ],
      keyConcepts: [
        "AC/DC, inverter, and DC/DC stage stacking",
        "Si / SiC / GaN device and gate-drive choices",
        "Soft switching, snubbers, and dead-time",
        "EMI filters, sensing, and protection layers",
      ],
    },
    zh: {
      lead: "功率电子把市电或母线电能变成可控高频驱动供给线圈，并在车端回收干净直流。",
      overview: [
        "逆变、整流、宽禁带器件、门极驱动、传感与 EMI 滤波，决定谐振方案能否成为可靠的千瓦级充电坞。损耗图谱与布局寄生与拓扑图同样重要。",
        "本系列以 Wiki 方式覆盖工业无线充电器的经典功率电子栈：变换级、调制、保护与验证习惯。",
      ],
      keyConcepts: [
        "AC/DC、逆变与 DC/DC 级联",
        "Si / SiC / GaN 与门极驱动选型",
        "软开关、吸收电路与死区",
        "EMI 滤波、传感与多层保护",
      ],
    },
    es: {
      lead: "La electrónica de potencia convierte la red o el bus en un accionamiento de alta frecuencia para la bobina y recupera DC limpia en el vehículo.",
      overview: [
        "Inversores, rectificadores, WBG, drivers, sensado y filtros EMI deciden si una idea resonante se vuelve un dock fiable de kilovatios.",
        "Esta colección tipo wiki cubre la pila clásica de PE en cargadores inalámbricos industriales.",
      ],
      keyConcepts: [
        "Apilado AC/DC, inversor y DC/DC",
        "Si / SiC / GaN y gate drive",
        "Soft switching, snubbers y dead-time",
        "Filtros EMI, sensado y protecciones",
      ],
    },
  },
  "intelligent-power-control": {
    en: {
      lead: "Intelligent power control is SiCore’s core competency — adaptive loops, detection, scheduling, and autonomy that turn a wireless dock into reliable fleet infrastructure.",
      overview: [
        "Hardware alone does not keep AGVs charging safely at scale. Controllers must track frequency and impedance, detect loads and foreign or living objects, optimize efficiency in real time, and coordinate opportunity charging across a fleet.",
        "This featured collection is the control wiki for industrial wireless power: from digital power foundations to FOD/LOD, predictive maintenance, battery health, self-calibration, and fully autonomous docking charge cycles.",
      ],
      keyConcepts: [
        "Adaptive power and digital control architectures",
        "Dynamic frequency tracking and impedance matching",
        "Load, FOD, and LOD detection for safe docks",
        "Fleet scheduling, SOH monitoring, and autonomous charging",
      ],
    },
    zh: {
      lead: "智能功率控制是 SiCore 的核心能力——自适应回路、检测、调度与自主决策，把无线充电坞变成可靠的车队基础设施。",
      overview: [
        "仅有硬件不足以支撑规模化 AGV 安全充电。控制器需跟踪频率与阻抗，检测负载与异物/生命体，实时优化效率，并协调车队机会充电。",
        "本核心系列是工业无线供电的控制 Wiki：从数字电源基础到 FOD/LOD、预测性维护、电池健康、自校准与全自主对接充电。",
      ],
      keyConcepts: [
        "自适应功率与数字控制架构",
        "动态频率跟踪与阻抗匹配",
        "负载、FOD 与 LOD 安全检测",
        "车队调度、SOH 监测与自主充电",
      ],
    },
    es: {
      lead: "El control inteligente de potencia es la competencia central de SiCore: lazos adaptativos, detección, planificación y autonomía para docks de flota.",
      overview: [
        "El hardware solo no basta. Los controladores deben seguir frecuencia e impedancia, detectar carga y objetos extraños o vivos, optimizar eficiencia y coordinar opportunity charging.",
        "Esta colección destacada es la wiki de control del WPT industrial: potencia digital, FOD/LOD, mantenimiento predictivo, salud de batería y carga autónoma.",
      ],
      keyConcepts: [
        "Control adaptativo y potencia digital",
        "Seguimiento de frecuencia e impedancia dinámica",
        "Detección de carga, FOD y LOD",
        "Planificación de flota, SOH y carga autónoma",
      ],
    },
  },
  "charging-stations": {
    en: {
      lead: "Charging stations turn wireless power into operational infrastructure — docks, pads, alignment, fleet scheduling, and cloud-managed networks for autonomous robots.",
      overview: [
        "A pad is only useful if robots can find it, align to it, charge quickly during natural idle time, and leave without human intervention. This collection covers the mechanical, sensing, and fleet layers around the wireless link.",
        "Use it as the operations wiki for industrial charging: from single docks to multi-robot sites, high availability, smart management, and cloud charging networks.",
      ],
      keyConcepts: [
        "Dock and pad form factors for sealed opportunity charging",
        "Automatic and vision-assisted alignment",
        "Fleet, multi-robot, and high-availability charging",
        "Smart management and cloud charging networks",
      ],
    },
    zh: {
      lead: "智能充电站把无线供电变成可运营的基础设施——充电坞、充电垫、对准、车队调度与云端充电网络。",
      overview: [
        "只有机器人能自主找到、对准、在空闲窗口快速补电并离开，充电垫才真正有用。本系列覆盖无线链路之外的机械、感知与车队层。",
        "把它当作工业充电运营 Wiki：从单坞到多机器人站点、高可用、智能管理与云充电网络。",
      ],
      keyConcepts: [
        "密封机会充电的坞站与垫体形态",
        "自动对准与视觉辅助对接",
        "车队、多机器人与高可用充电",
        "智能管理与云充电网络",
      ],
    },
    es: {
      lead: "Las estaciones de carga convierten la potencia inalámbrica en infraestructura operativa: docks, pads, alineación, flotas y redes en la nube.",
      overview: [
        "Un pad solo sirve si el robot lo encuentra, se alinea, carga en tiempos muertos y sale sin intervención. Esta colección cubre capas mecánicas, de sensado y de flota alrededor del enlace WPT.",
        "Úsela como wiki de operaciones: de un dock a sitios multi-robot, alta disponibilidad, gestión inteligente y redes cloud.",
      ],
      keyConcepts: [
        "Formas de dock y pad para opportunity charging sellado",
        "Alineación automática y docking con visión",
        "Carga de flota, multi-robot y alta disponibilidad",
        "Gestión inteligente y red de carga en la nube",
      ],
    },
  },
  "battery-energy-management": {
    en: {
      lead: "Battery and energy management connects the wireless charger to pack chemistry, BMS limits, SOC/SOH, safety, and hybrid storage choices for mobile robots.",
      overview: [
        "A dock can deliver power, but the pack and BMS decide whether that power is accepted safely. This collection covers lithium basics, chemistry trade-offs, state estimation, balancing, thermal limits, and when supercapacitors or hybrid systems help opportunity charging.",
        "Read it as the energy wiki beside the wireless link: what the receiver DC/DC and fleet software must respect on every charge cycle.",
      ],
      keyConcepts: [
        "Lithium chemistry, SOC, SOH, and BMS roles",
        "Fast charge limits and battery safety",
        "Thermal management and cell balancing",
        "Energy optimization, hybrids, and supercapacitors",
      ],
    },
    zh: {
      lead: "电池与能源管理把无线充电器连接到电池化学、BMS 限制、SOC/SOH、安全以及移动机器人的混合储能选择。",
      overview: [
        "充电坞能送电，但电芯与 BMS 决定是否安全接受。本系列覆盖锂电基础、化学体系、状态估计、均衡、热限制，以及超级电容/混合系统何时助力机会充电。",
        "把它当作无线链路旁的能源 Wiki：接收端 DC/DC 与车队软件在每个充电周期必须遵守的约束。",
      ],
      keyConcepts: [
        "锂电化学、SOC、SOH 与 BMS 角色",
        "快充限制与电池安全",
        "热管理与电芯均衡",
        "能量优化、混合系统与超级电容",
      ],
    },
    es: {
      lead: "La gestión de batería y energía conecta el cargador inalámbrico con química, BMS, SOC/SOH, seguridad y almacenamiento híbrido para robots móviles.",
      overview: [
        "El dock puede entregar potencia, pero el pack y el BMS deciden si se acepta con seguridad. Esta colección cubre litio, química, estimación de estado, balanceo, límites térmicos y el rol de supercapacitores o sistemas híbridos.",
        "Léala como la wiki energética junto al enlace WPT: lo que el DC/DC receptor y el software de flota deben respetar en cada ciclo.",
      ],
      keyConcepts: [
        "Química de litio, SOC, SOH y roles del BMS",
        "Límites de carga rápida y seguridad",
        "Gestión térmica y balanceo de celdas",
        "Optimización energética, híbridos y supercapacitores",
      ],
    },
  },
  "embedded-systems": {
    en: {
      lead: "Embedded systems are the firmware brain of wireless docks and receivers — MCU/DSP choice, real-time control, sensing, faults, diagnostics, and OTA.",
      overview: [
        "Power stages and coils only work as designed if the controller samples, filters, protects, and updates reliably in the field. This collection covers selection of MCU/DSP platforms, RTOS and firmware architecture, PWM/ADC loops, and serviceability through diagnostics and OTA.",
        "Use it as the firmware wiki for AGV charging controllers: from chip choice to fault detection and fleet software updates.",
      ],
      keyConcepts: [
        "MCU, DSP, ARM Cortex, and STM32 selection",
        "RTOS, firmware architecture, and real-time control",
        "PWM, ADC, and digital filtering for power loops",
        "Fault detection, diagnostics, and OTA updates",
      ],
    },
    zh: {
      lead: "嵌入式系统是无线充电坞与接收端的固件大脑——MCU/DSP 选型、实时控制、传感、故障、诊断与 OTA。",
      overview: [
        "功率级与线圈只有在控制器可靠采样、滤波、保护与现场升级时才能按设计工作。本系列覆盖 MCU/DSP 平台选型、RTOS 与固件架构、PWM/ADC 回路，以及诊断与 OTA 可维护性。",
        "把它当作 AGV 充电控制器的固件 Wiki：从芯片选型到故障检测与车队软件更新。",
      ],
      keyConcepts: [
        "MCU、DSP、ARM Cortex 与 STM32 选型",
        "RTOS、固件架构与实时控制",
        "功率回路中的 PWM、ADC 与数字滤波",
        "故障检测、诊断与 OTA 更新",
      ],
    },
    es: {
      lead: "Los sistemas embebidos son el firmware del dock y del receptor: MCU/DSP, control en tiempo real, sensado, fallos, diagnóstico y OTA.",
      overview: [
        "Las etapas de potencia y bobinas solo cumplen el diseño si el controlador muestrea, filtra, protege y actualiza en campo. Esta colección cubre selección de plataformas, RTOS, arquitectura de firmware, bucles PWM/ADC y mantenibilidad vía diagnóstico y OTA.",
        "Úsela como wiki de firmware para controladores de carga AGV.",
      ],
      keyConcepts: [
        "Selección de MCU, DSP, ARM Cortex y STM32",
        "RTOS, arquitectura de firmware y control en tiempo real",
        "PWM, ADC y filtrado digital para lazos de potencia",
        "Detección de fallos, diagnóstico y actualizaciones OTA",
      ],
    },
  },
  "thermal-engineering": {
    en: {
      lead: "Thermal engineering keeps wireless docks and receivers cool enough to stay efficient, sealed, and reliable at industrial power levels.",
      overview: [
        "Every watt lost in coils, switches, and rectifiers becomes heat. This collection covers heat transfer basics, simulation, sinks, PCB thermal layout, TIMs, cooling methods, high-power design, monitoring, and protection — the thermal path from silicon to ambient.",
        "Use it as the thermal wiki for AGV charging hardware: design for continuous opportunity charging without derating or premature failure.",
      ],
      keyConcepts: [
        "Heat transfer, simulation, and sink design",
        "PCB thermal layout and interface materials",
        "Cooling methods for sealed high-power docks",
        "Temperature monitoring and thermal protection",
      ],
    },
    zh: {
      lead: "热设计让无线充电坞与接收端在工业功率下仍保持效率、密封与可靠。",
      overview: [
        "线圈、开关与整流器损耗最终都会变成热。本系列覆盖传热基础、仿真、散热器、PCB 热布局、TIM、冷却方式、大功率设计、监测与保护——从硅到环境的热路径。",
        "把它当作 AGV 充电硬件的热设计 Wiki：支撑持续机会充电而不轻易降额或提前失效。",
      ],
      keyConcepts: [
        "传热、仿真与散热器设计",
        "PCB 热布局与热界面材料",
        "密封大功率坞站的冷却方法",
        "温度监测与热保护",
      ],
    },
    es: {
      lead: "La ingeniería térmica mantiene docks y receptores lo bastante fríos para ser eficientes, sellados y fiables a potencia industrial.",
      overview: [
        "Cada vatio perdido en bobinas, interruptores y rectificadores se convierte en calor. Esta colección cubre transferencia de calor, simulación, disipadores, PCB térmica, TIM, refrigeración, diseño de alta potencia, monitorización y protección.",
        "Úsela como wiki térmica del hardware de carga AGV.",
      ],
      keyConcepts: [
        "Transferencia de calor, simulación y disipadores",
        "Layout térmico de PCB y materiales de interfaz",
        "Métodos de refrigeración para docks sellados de alta potencia",
        "Monitorización de temperatura y protección térmica",
      ],
    },
  },
  "emi-emc-engineering": {
    en: {
      lead: "EMI/EMC engineering keeps high-frequency wireless chargers from disrupting the factory — and keeps the factory from disrupting the charger.",
      overview: [
        "Inverters, coil fields, and long cables create conducted and radiated emissions that must meet CISPR, FCC, and CE expectations. This collection covers EMI basics, shielding, grounding, filtering, standards, emission types, and immunity testing for industrial docks.",
        "Use it as the compliance wiki beside power electronics: design and verify so AGV charging sites pass EMC without endless late redesigns.",
      ],
      keyConcepts: [
        "EMI basics, shielding, grounding, and filtering",
        "CISPR, FCC, and CE compliance frameworks",
        "Conducted vs radiated emission control",
        "Immunity testing in industrial environments",
      ],
    },
    zh: {
      lead: "EMI/EMC 工程让高频无线充电器不干扰工厂，也让工厂不干扰充电器。",
      overview: [
        "逆变、线圈场与长电缆会产生传导与辐射发射，需满足 CISPR、FCC、CE 等要求。本系列覆盖 EMI 基础、屏蔽、接地、滤波、标准、发射类型与抗扰度测试。",
        "把它当作功率电子旁的合规 Wiki：在 AGV 充电现场设计并验证 EMC，避免后期反复改板。",
      ],
      keyConcepts: [
        "EMI 基础、屏蔽、接地与滤波",
        "CISPR、FCC 与 CE 合规框架",
        "传导与辐射发射控制",
        "工业环境抗扰度测试",
      ],
    },
    es: {
      lead: "La ingeniería EMI/EMC evita que el cargador inalámbrico de alta frecuencia perturbe la fábrica — y que la fábrica perturbe el cargador.",
      overview: [
        "Inversores, campos de bobina y cables largos generan emisiones conducidas y radiadas que deben cumplir CISPR, FCC y CE. Esta colección cubre fundamentos EMI, apantallamiento, puesta a tierra, filtrado, normas, tipos de emisión y ensayos de inmunidad.",
        "Úsela como wiki de cumplimiento junto a la electrónica de potencia.",
      ],
      keyConcepts: [
        "Fundamentos EMI, apantallamiento, tierra y filtrado",
        "Marcos CISPR, FCC y CE",
        "Control de emisión conducida frente a radiada",
        "Ensayos de inmunidad en entornos industriales",
      ],
    },
  },
  "safety-engineering": {
    en: {
      lead: "Safety engineering protects people, robots, and equipment around high-power wireless docks — from isolation and protection devices to FOD, LOD, and emergency shutdown.",
      overview: [
        "Industrial chargers must fail safe under faults, surges, and unexpected objects in the field. This collection covers functional safety thinking, electrical isolation, overcurrent/overvoltage/ESD/surge protection, foreign and living object detection, thermal protection, and emergency shutdown paths.",
        "Use it as the safety wiki for AGV/AMR wireless charging: design layers that keep energy off when conditions are not safe to charge.",
      ],
      keyConcepts: [
        "Functional safety and electrical isolation",
        "Overcurrent, overvoltage, ESD, and surge protection",
        "FOD and LOD for wireless power fields",
        "Thermal protection and emergency shutdown",
      ],
    },
    zh: {
      lead: "安全工程保护大功率无线充电坞周围的人、机器人与设备——从隔离与保护器件到 FOD、LOD 与紧急关断。",
      overview: [
        "工业充电器必须在故障、浪涌与场内异物情况下仍能安全失效。本系列覆盖功能安全思路、电气隔离、过流/过压/ESD/浪涌保护、异物与生命体检测、热保护与紧急关断路径。",
        "把它当作 AGV/AMR 无线充电的安全 Wiki：在不安全充电条件下切断能量。",
      ],
      keyConcepts: [
        "功能安全与电气隔离",
        "过流、过压、ESD 与浪涌保护",
        "无线功率场的 FOD 与 LOD",
        "热保护与紧急关断",
      ],
    },
    es: {
      lead: "La ingeniería de seguridad protege personas, robots y equipos alrededor de docks WPT de alta potencia: aislamiento, protecciones, FOD, LOD y paro de emergencia.",
      overview: [
        "Los cargadores industriales deben fallar de forma segura ante fallos, sobretensiones y objetos inesperados. Esta colección cubre seguridad funcional, aislamiento, protecciones, detección de objetos extraños y vivos, protección térmica y shutdown de emergencia.",
        "Úsela como wiki de seguridad para carga inalámbrica AGV/AMR.",
      ],
      keyConcepts: [
        "Seguridad funcional y aislamiento eléctrico",
        "Protección contra sobrecorriente, sobretensión, ESD y surges",
        "FOD y LOD en campos de potencia inalámbrica",
        "Protección térmica y paro de emergencia",
      ],
    },
  },
  "industry-standards": {
    en: {
      lead: "Industry standards and regulations frame how wireless power products are designed, tested, and placed on the market — from Qi and SAE to IEC, UL, FCC, CE, RoHS, and REACH.",
      overview: [
        "Consumer wireless charging often references Qi/Qi2, while industrial and automotive systems lean on SAE, IEC, and UL frameworks plus regional EMC and substance rules. This collection explains what each domain typically covers and how SiCore-style industrial docks sit relative to those expectations.",
        "Use it as the standards wiki: a map of compliance families, not a substitute for the official documents or legal certification advice.",
      ],
      keyConcepts: [
        "Qi, Qi2, and AirFuel consumer/alliance contexts",
        "SAE J2954 and industrial/automotive wireless power",
        "IEC and UL safety/product frameworks",
        "FCC, CE, RoHS, and REACH market requirements",
      ],
    },
    zh: {
      lead: "行业标准与法规界定无线供电产品如何设计、测试与上市——从 Qi、SAE 到 IEC、UL、FCC、CE、RoHS 与 REACH。",
      overview: [
        "消费级无线充电常参考 Qi/Qi2，工业与汽车系统更多依赖 SAE、IEC、UL 以及区域 EMC 与物质法规。本系列说明各体系通常覆盖什么，以及 SiCore 类工业充电坞如何对照这些要求。",
        "把它当作标准 Wiki：合规族谱图，不能替代官方文件或法律认证意见。",
      ],
      keyConcepts: [
        "Qi、Qi2 与 AirFuel 消费/联盟语境",
        "SAE J2954 与工业/汽车无线供电",
        "IEC 与 UL 安全/产品框架",
        "FCC、CE、RoHS 与 REACH 市场要求",
      ],
    },
    es: {
      lead: "Las normas y reglamentos industriales enmarcan diseño, ensayo y comercialización del WPT: de Qi y SAE a IEC, UL, FCC, CE, RoHS y REACH.",
      overview: [
        "La carga de consumo suele referirse a Qi/Qi2; los sistemas industriales y de automoción se apoyan en SAE, IEC, UL y reglas regionales de EMC y sustancias. Esta colección explica qué cubre cada familia y cómo se sitúan los docks industriales tipo SiCore.",
        "Úsela como wiki de normas: un mapa de cumplimiento, no un sustituto de documentos oficiales ni asesoría legal.",
      ],
      keyConcepts: [
        "Contextos Qi, Qi2 y AirFuel",
        "SAE J2954 y WPT industrial/automotriz",
        "Marcos IEC y UL de seguridad/producto",
        "Requisitos FCC, CE, RoHS y REACH",
      ],
    },
  },
};

const fallbackCopy: Record<Locale, WikiCopy> = {
  en: {
    lead: "This collection is part of the SiCore Knowledge Library — engineering references for wireless power system design, integration, and deployment.",
    overview: [
      "Browse the topics below like chapters in a technical wiki. Each article explains a focused concept with practical industrial context for AGVs, AMRs, and autonomous platforms.",
      "Open any ready article for a longer reading layout with sections, diagrams, and links to related topics in the same collection.",
    ],
    keyConcepts: [
      "Concept definitions and operating principles",
      "Design trade-offs for industrial docking",
      "Safety, EMI, and reliability considerations",
      "Links into adjacent engineering collections",
    ],
  },
  zh: {
    lead: "本系列属于 SiCore 知识库——面向无线供电系统设计、集成与部署的工程参考。",
    overview: [
      "请把下方主题当作技术 Wiki 的章节。每篇文章聚焦一个概念，并结合 AGV/AMR 等工业场景说明。",
      "打开已完成的文章，可阅读带分节、配图与同系列链接的完整解说页。",
    ],
    keyConcepts: [
      "概念定义与工作原理",
      "工业对接场景的设计权衡",
      "安全、EMI 与可靠性",
      "与相邻工程系列的关联",
    ],
  },
  es: {
    lead: "Esta colección forma parte de la biblioteca SiCore — referencias de ingeniería para diseño, integración e implementación de WPT.",
    overview: [
      "Explore los temas como capítulos de una wiki técnica. Cada artículo explica un concepto con contexto industrial para AGV/AMR.",
      "Abra un artículo listo para ver secciones, figuras y enlaces relacionados.",
    ],
    keyConcepts: [
      "Definiciones y principios de operación",
      "Compromisos de diseño para docking industrial",
      "Seguridad, EMI y fiabilidad",
      "Enlaces a colecciones vecinas",
    ],
  },
};

export function getKnowledgeWikiOverview(
  categoryId: string,
  locale: Locale,
): KnowledgeWikiOverview {
  const pack = copyByCategory[categoryId];
  const copy = pack?.[locale] ?? pack?.en ?? fallbackCopy[locale] ?? fallbackCopy.en;
  const figures = getCollectionWikiFigures(categoryId, locale);
  return {
    ...copy,
    heroFigure: figures.heroFigure,
    inlineFigure: figures.inlineFigure,
  };
}
