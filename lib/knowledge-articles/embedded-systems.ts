import type { KnowledgeArticle } from "@/lib/knowledge-articles/types";

const categoryId = "embedded-systems";

function article(
  input: Omit<KnowledgeArticle, "categoryId" | "readTime"> & { readTime?: string },
): KnowledgeArticle {
  return {
    categoryId,
    readTime: input.readTime ?? "8 min",
    slug: input.slug,
    title: input.title,
    summary: input.summary,
    sections: input.sections,
  };
}

/** Collection 08 — Embedded Systems */
export const embeddedSystemsArticles: readonly KnowledgeArticle[] = [
  article({
    slug: "mcu-selection",
    title: "MCU Selection",
    summary:
      "Microcontroller selection criteria for SiCore AGV dock transmitters and onboard wireless receivers — balancing compute headroom, peripheral mix, safety certification path, and 10–15 year industrial lifecycle.",
    sections: [
      {
        paragraphs: [
          "The microcontroller is the central execution engine in both dock-side pad controllers and vehicle-mounted wireless receivers. Selection is not driven by peak MIPS alone: industrial wireless charging firmware must run deterministic control loops, protocol stacks, safety monitors, and diagnostics concurrently on a part that survives warehouse temperature, EMI, and supply-chain continuity requirements.",
          "SiCore embedded platforms typically partition high-voltage power control on dedicated gate-driver and DSP or timer-rich MCUs while a companion processor handles fleet communication, logging, and OTA — but single-chip designs remain common on compact AMR receivers where BOM and PCB area dominate.",
        ],
      },
      {
        heading: "Selection criteria",
        bullets: [
          "Peripheral mix: multiple high-resolution PWM channels, synchronized ADC triggers, CAN-FD, SPI to gate drivers, and hardware dead-time insertion.",
          "Deterministic timing: dedicated motor-control timers, DMA for ADC streams, and predictable interrupt latency under load.",
          "Memory: flash headroom for dual-bank OTA, RAM for filter buffers and protocol stacks without external SDRAM.",
          "Safety and quality: AEC-Q100 or industrial temperature grade, ECC flash where available, documented FMEDA path for SIL-capable designs.",
          "Supply continuity: multi-source pin-compatible options or documented 10+ year longevity from silicon vendor.",
        ],
      },
      {
        heading: "Dock vs receiver constraints",
        paragraphs: [
          "Dock transmitters demand more I/O and communication: multiple temperature sensors, grid metering interface, Ethernet or RS-485 to fleet gateway, and concurrent control of one or more inverter phases. Receivers prioritize compact packages, low standby power, and robust CAN integration with the vehicle BMS while still closing current and voltage control loops at 20–100 kHz effective update rates.",
          "SiCore reference designs document minimum MCU classes per power level — a 3 kW AMR receiver differs from a 15 kW fork-AGV pad controller in ADC channel count, PWM phase count, and required FPU performance for resonant tuning algorithms.",
        ],
      },
      {
        heading: "Evaluation workflow",
        paragraphs: [
          "Prototype selection starts from control-loop budget: assign worst-case ISR cycles for PWM, ADC DMA completion, and protection compare units, then add 40–50% margin for communication and diagnostics. Run thermal chamber tests early — elevated die temperature increases wait states and derates effective compute. Final MCU choice is locked only after EMC pre-scan and OTA image size validation on production toolchain settings.",
        ],
      },
    ],
  }),

  article({
    slug: "dsp",
    title: "DSP",
    summary:
      "Digital Signal Processor usage in SiCore wireless power firmware — resonant frequency tracking, FFT-based coupling diagnostics, and fixed-point vs floating-point implementation on dock and receiver controllers.",
    sections: [
      {
        paragraphs: [
          "Wireless power transfer at industrial power levels behaves as a resonant, strongly coupled electromagnetic system whose effective load and tuning point shift with alignment, air gap, ferrite temperature, and foreign objects. General-purpose MCUs can execute these algorithms, but DSP cores — or MCUs with integrated MAC units and dual-bank flash — reduce cycle count for the multiply-accumulate heavy workloads that dominate real-time WPT control.",
          "SiCore firmware uses DSP-oriented processing for resonant frequency estimation, impedance phase monitoring, and harmonic content analysis that feeds foreign-object and detuning detection — not for audio or generic filtering alone.",
        ],
      },
      {
        heading: "Typical DSP workloads",
        bullets: [
          "Resonant frequency sweep and phase-difference measurement across primary and secondary sense coils.",
          "IIR and FIR filtering on high-speed current and voltage samples before protection comparators.",
          "Clarke/Park or dq-frame transforms when field-oriented control spans multiple phases.",
          "FFT or Goertzel bins for narrowband interference detection from nearby VFDs or other pads.",
          "Adaptive tuning: PI or gradient steps on switching frequency or phase shift from impedance estimates.",
        ],
      },
      {
        heading: "Fixed-point vs floating-point",
        paragraphs: [
          "Fixed-point Q15/Q31 math remains common on cost-sensitive receivers where FPU is absent or disabled for deterministic cycle counts. Coefficients are pre-scaled offline; overflow saturation is explicit in every filter stage. Dock controllers at higher power often use Cortex-M4F or M33 with FPU for faster algorithm iteration during commissioning and for model-based impedance solvers that would be fragile in manual fixed-point porting.",
          "SiCore production builds compile with consistent optimization flags and validate bit-exact or bounded-error equivalence between engineering floating-point models and deployed fixed-point implementations before field release.",
        ],
      },
      {
        heading: "Hardware acceleration and partitioning",
        paragraphs: [
          "Where a dedicated DSP (e.g., C2000) coexists with a communication MCU, the split boundary is defined by latency: sub-100 µs protection stays on the power MCU; slower fleet analytics run on the companion. DMA ping-pong buffers feed DSP routines without CPU copy overhead. JTAG or SWD trace during development confirms ISR budgets before locking clock speeds and wait-state configuration.",
        ],
      },
    ],
  }),

  article({
    slug: "arm-cortex",
    title: "ARM Cortex",
    summary:
      "ARM Cortex-M architecture choices for SiCore embedded platforms — M0+ through M33 trade-offs for wireless charging receivers, dock inverters, and safety-rated control firmware.",
    sections: [
      {
        paragraphs: [
          "ARM Cortex-M cores dominate industrial motor and power electronics firmware because toolchain support, third-party RTOS availability, and peripheral IP ecosystems are mature. SiCore dock and receiver designs map workload severity to core class: lightweight CAN gateway tasks on M0+, closed-loop power control on M4F, and TrustZone-capable M33 where secure OTA and credential storage are required alongside real-time control.",
          "Core selection interacts directly with wireless charging safety architecture: faster cores reduce control-loop period but increase EMI from switching logic unless clock gating and sleep modes are disciplined.",
        ],
      },
      {
        heading: "Core class comparison",
        bullets: [
          "Cortex-M0/M0+: minimal cost and power; suitable for BMS-facing CAN bridges, LED status, and slow sensor polling — not primary inverter loops.",
          "Cortex-M3/M4: mainstream for power stages; M4F adds single-precision FPU and DSP instructions for resonant control.",
          "Cortex-M33: optional TrustZone, MPU, and FPU — separates secure boot/OTA from application firmware on connected pads.",
          "Cortex-M7: high performance for multi-phase digital power and Ethernet-heavy dock gateways; higher BOM and thermal load.",
        ],
      },
      {
        heading: "MPU, FPU, and safety usage",
        paragraphs: [
          "Memory Protection Unit configuration isolates RTOS tasks — communication stack buffers cannot overwrite PWM duty registers if task boundaries are enforced. FPU context save on exception entry adds latency; SiCore ISR paths that touch FPU registers either avoid floating point in ISRs or use lazy stacking with measured worst-case stack depth.",
          "For SIL-oriented designs, vendor safety libraries and dual-channel compare hardware pair with Cortex-M4 at the power control layer while a separate safety MCU or lockstep core handles watchdog and STO (safe torque off) equivalent paths for wireless power disable.",
        ],
      },
      {
        heading: "Ecosystem and longevity",
        paragraphs: [
          "Keil, IAR, and GCC support across STM32, NXP, Microchip, and Infineon parts reduces toolchain lock-in when supply constraints force silicon migration. SiCore BSP layers abstract timer and ADC HAL differences so application control code survives MCU family changes with bounded re-validation on HIL benches.",
        ],
      },
    ],
  }),

  article({
    slug: "stm32",
    title: "STM32",
    summary:
      "STM32 microcontroller families in SiCore wireless charging reference designs — G4 motor control, H7 high-performance docks, and low-power L4 receivers for AGV onboard integration.",
    sections: [
      {
        paragraphs: [
          "STMicroelectronics STM32 lines appear frequently in SiCore embedded reference hardware because of integrated motor-control peripherals ( HRTIM, advanced timers ), rich analog ( ADC with injection and oversampling ), and mature STM32Cube ecosystem. Family choice tracks power level and connectivity: STM32G4 for compact receiver inverters, STM32H7 for multi-channel dock controllers with Ethernet, STM32L4 where receiver standby current must stay below milliamps between charge sessions.",
          "CubeMX and CubeIDE accelerate pinmux and clock tree setup, but production firmware treats generated initialization as bootstrap only — control loops and safety paths are hand-audited and version-controlled separately.",
        ],
      },
      {
        heading: "Family mapping",
        bullets: [
          "STM32G4: primary choice for 3–10 kW receivers — HRTIM, FMAC, CORDIC accelerators for resonant control.",
          "STM32H7: dock transmitters needing dual CAN-FD, Ethernet, and multi-ADC synchronized sampling.",
          "STM32L4/L5: telemetry nodes and low-power alignment sense subsystems on battery-backed receivers.",
          "STM32F3 legacy: fielded pads still on F3; migration plans maintain pin-compatible upgrade paths where possible.",
        ],
      },
      {
        heading: "Peripheral configuration patterns",
        paragraphs: [
          "Center-aligned PWM from HRTIM or TIM1/TIM8 feeds gate drivers with hardware dead-time and break inputs tied to comparator outputs from over-current sense. ADC injected sequences trigger mid-PWM for synchronous sampling of primary current and DC bus voltage. DMA circular mode streams samples to RAM buffers consumed by RTOS control tasks at 10–20 kHz while protection comparators act in hardware within nanoseconds.",
          "SiCore STM32 BSP enforces consistent naming for HAL callbacks vs RTOS primitives — timer update ISRs release semaphores; heavy math never runs inside HAL weak callbacks unmodified.",
        ],
      },
      {
        heading: "Production and maintenance",
        paragraphs: [
          "Unique device ID and flash option bytes support read-out protection tiers for IP protection without blocking field OTA. ST’s longevity program parts are specified in SiCore BOMs with explicit PCN review. When ST releases errata affecting ADC sync or HRTIM behavior, SiCore publishes minimum HAL pack versions and regression test scope for affected pad and receiver SKUs.",
        ],
      },
    ],
  }),

  article({
    slug: "rtos",
    title: "RTOS",
    summary:
      "Real-time operating system architecture for SiCore dock and receiver firmware — task partitioning, priority inversion avoidance, and coexistence of 100 kHz control ISRs with CAN and OTA communication stacks.",
    sections: [
      {
        paragraphs: [
          "Bare-metal superloops cannot safely host modern wireless charging firmware: concurrent CAN-FD to BMS, Modbus or Ethernet to fleet gateways, logging, OTA download, and multiple closed-loop controllers require structured preemption and bounded blocking. SiCore embedded stacks use FreeRTOS or vendor-safe variants on Cortex-M4/M33/H7 with a strict split between hard real-time ISR paths and soft real-time tasks.",
          "RTOS adoption is not universal on the smallest receivers — ultra-compact SKUs may run a cooperative scheduler — but any design with OTA and live diagnostics assumes preemptive multitasking.",
        ],
      },
      {
        heading: "Task architecture",
        bullets: [
          "Highest priority (non-RTOS): PWM fault, comparator trip, and comm-loss hardware shutdown — never waits on mutex.",
          "Control task: 1–5 kHz loop for current/power regulation, resonant tuning, and thermal derating.",
          "Protocol tasks: CANopen or custom BMS DBC parsing, fleet telemetry, pad session state machine.",
          "Background: flash wear-leveled logging, OTA image verify, non-critical diagnostics upload.",
          "Idle hook: stack watermark check, watchdog service in approved task context only.",
        ],
      },
      {
        heading: "Synchronization discipline",
        paragraphs: [
          "Shared ADC buffers use lock-free single-producer single-consumer indices or RTOS message buffers with fixed-size structs — never unbounded queues for control data. Mutexes protecting configuration structs use priority inheritance and short hold times; control tasks never block on flash erase. Software timers drive session timeouts and alignment debounce; they do not replace hardware watchdogs for safety shutdown.",
          "SiCore coding standards forbid malloc in runtime paths; static allocation and memory pools sized at compile time from worst-case concurrent session counts.",
        ],
      },
      {
        heading: "Validation and debugging",
        paragraphs: [
          "Runtime stats (uxTaskGetStackHighWaterMark, cycle counters) are logged at end of commissioning and after OTA. Tracealyzer or SystemView captures are mandatory for new task layouts before SIL or CE evidence collection. Kernel tick rate is chosen to avoid beating against PWM periods — often 1 kHz tick with high-resolution timers for protocol timeouts.",
        ],
      },
    ],
  }),

  article({
    slug: "firmware-architecture",
    title: "Firmware Architecture",
    summary:
      "Layered firmware architecture for SiCore wireless charging controllers — HAL, platform services, power application, and fleet protocol boundaries on dock transmitters and AGV receivers.",
    sections: [
      {
        paragraphs: [
          "Maintainable wireless charging firmware separates concerns so power algorithms, safety monitors, and fleet interfaces evolve independently across pad generations and vehicle integrations. SiCore architecture follows a bottom-up stack: silicon HAL and board support, platform services (RTOS, flash, crypto), domain modules (power stage, alignment, session FSM), and thin adaptation layers for customer-specific CAN DBC or Ethernet schemas.",
          "Poor layering — control loops calling socket APIs directly, or BMS parsing inside PWM ISRs — is a recurring source of field instability in industrial WPT projects; SiCore reference code enforces unidirectional dependencies.",
        ],
      },
      {
        heading: "Layer responsibilities",
        bullets: [
          "BSP/HAL: clock, pin, ADC, PWM, CAN init; no business logic.",
          "Platform: logging, NVM config, CRC, crypto verify, OTA staging, watchdog policy.",
          "Power domain: regulation loops, resonant tuning, FOD signal processing, thermal derating.",
          "Session domain: dock handshake, alignment qualification, charge permission, graceful ramp-down.",
          "Integration: DBC-driven signal maps, fleet API adapters, diagnostic DID handlers.",
        ],
      },
      {
        heading: "State machines and configuration",
        paragraphs: [
          "Explicit finite-state machines govern session lifecycle: Idle → Alignment → Negotiation → Power Transfer → Taper → Complete, with fault and comm-loss transitions defined in tables reviewable by safety engineers. Configuration is schema-versioned JSON or binary blobs in flash — coil geometry, power limits, BMS DBC ID, and FOD thresholds — loaded at boot with CRC validation; defaults never silently override invalid customer configs.",
          "Feature flags gate experimental algorithms behind compile-time or signed runtime config so production fleets and pilot sites diverge without forked codebases.",
        ],
      },
      {
        heading: "Testing boundaries",
        paragraphs: [
          "Each layer exposes unit-test seams: power domain runs on HIL with simulated ADC feeds; session domain tests against CAN replay logs from field vehicles. SiCore CI builds receiver and dock images with shared platform libraries but separate application targets, ensuring OTA packages cannot flash incompatible role firmware onto wrong hardware.",
        ],
      },
    ],
  }),

  article({
    slug: "real-time-control",
    title: "Real-Time Control",
    summary:
      "Real-time control loop design for SiCore wireless power stages — sample timing, latency budgets, cascaded current and power regulation, and coordination with BMS charge requests on AGV receivers.",
    sections: [
      {
        paragraphs: [
          "Wireless charging power stages are closed-loop systems: primary inverter switching must track resonant conditions and load changes while respecting BMS current ceilings and thermal limits. Real-time control means every sample-to-actuation path has a provable worst-case latency — not merely average loop rates on a quiet bench.",
          "SiCore receivers regulate rectified output current and voltage presented to the onboard charger or DC bus; dock transmitters regulate primary power, phase, or frequency depending on topology ( IPT, WPT resonant, etc. ). Both sides participate in a distributed control problem linked by wireless power coupling and wired CAN negotiation.",
        ],
      },
      {
        heading: "Loop hierarchy",
        bullets: [
          "Inner loop: switching-cycle or half-cycle current regulation via duty, phase, or frequency modulation.",
          "Outer loop: DC output current/voltage or power setpoint tracking from BMS request.",
          "Supervisory: thermal derating, alignment-based power cap, session SOC target from fleet.",
          "Hardware loop: comparator blanking, OCP latch, and synchronous rectifier ZCD where applicable.",
        ],
      },
      {
        heading: "Timing and jitter",
        paragraphs: [
          "ADC samples are placed in switching windows using injection triggers or HRTIM sync to minimize aliasing from ripple. Control law execution completes within one switching period at nominal frequency — typically 50–150 kHz carrier for SiCore industrial designs. RTOS jitter on outer loops is absorbed by inner-loop bandwidth separation: inner loop bandwidth 1–5 kHz equivalent, outer loop 100–500 Hz.",
          "Comm-loss from BMS triggers ramp-down with shorter deadline than thermal derating — power must fall to zero within contractual milliseconds if CAN heartbeat stops, independent of outer-loop task scheduling.",
        ],
      },
      {
        heading: "Commissioning and gain scheduling",
        paragraphs: [
          "Plant parameters change with coil gap and coupling k: SiCore firmware uses gain scheduling or adaptive observers rather than single PID tuned at one alignment. Commissioning tools inject step references while logging loop response; accepted gain sets are written to signed config blocks. Field drift from ferrite aging triggers re-commission prompts when phase margin estimates cross thresholds logged in diagnostics.",
        ],
      },
    ],
  }),

  article({
    slug: "pwm",
    title: "PWM",
    summary:
      "Pulse-width modulation implementation for SiCore inverter and synchronous rectifier firmware — center-aligned carriers, dead-time, phase shift control, and break inputs for dock and receiver power stages.",
    sections: [
      {
        paragraphs: [
          "PWM is the primary actuation mechanism for wireless power inverters and active rectifiers on AGV receivers. SiCore firmware configures advanced timers or HRTIM modules to generate complementary half-bridge drives with programmable dead-time, idle states, and fault break inputs that force safe gate-off patterns faster than software intervention.",
          "Modulation strategy varies by topology: fixed-frequency phase shift for some resonant links, frequency dither for soft switching maintenance, or hybrid duty-plus-phase on multi-phase dock arrays feeding large AGV pads.",
        ],
      },
      {
        heading: "Configuration essentials",
        bullets: [
          "Center-aligned PWM for symmetric ripple and cleaner ADC sampling windows.",
          "Dead-time insertion: 200–800 ns typical depending on MOSFET/SiC device and gate driver.",
          "Break inputs: tie comparator OCP and external ESTOP to timer MOE disable with defined idle polarity.",
          "Synchronization: phase lock multiple timer instances for multi-coil dock transmitters.",
          "Minimum pulse width: enforce in hardware and software to prevent shoot-through at duty extremes.",
        ],
      },
      {
        heading: "Control modes",
        paragraphs: [
          "Duty cycle modulation regulates bus current on non-resonant stages; phase shift between half-bridge legs controls power in series-resonant WPT links without violating ZVS constraints over load range. SiCore control tasks update compare registers via buffer shadow loads at period boundaries to prevent glitches. Synchronous rectifier PWM on the receiver side tracks primary phase with alignment compensation derived from secondary current zero-cross detection.",
          "Light-load operation may enter burst mode or frequency foldback — algorithms document audible noise and EMI implications for warehouse deployment near acoustic-sensitive zones.",
        ],
      },
      {
        heading: "Validation",
        paragraphs: [
          "Gate waveform capture on scope confirms dead-time, rise/fall, and break response latency. Firmware regression tests assert compare register clamping when BMS requests zero current mid-session. EMC pre-compliance correlates PWM frequency plans with conducted emissions peaks; optional spread-spectrum is gated behind config because it interacts with resonant tuning stability.",
        ],
      },
    ],
  }),

  article({
    slug: "adc",
    title: "ADC",
    summary:
      "Analog-to-digital conversion design for SiCore wireless charging firmware — synchronized sampling of primary and secondary currents, isolation amplifiers, DMA streaming, and calibration for dock and receiver metrology.",
    sections: [
      {
        paragraphs: [
          "Accurate, timely current and voltage measurement underpins every protection decision and control loop in wireless charging. SiCore designs use 12–16 bit SAR ADCs with injection or regular sequences triggered from PWM center or HRTIM events so samples represent instantaneous switch-node conditions, not beat-frequency aliasing from asynchronous polling.",
          "High-voltage sides use isolated amplifiers or sigma-delta modulators feeding MCU ADC inputs; metrology-grade shunt paths on receiver DC output support fleet energy accounting correlated with BMS coulomb counting.",
        ],
      },
      {
        heading: "Channel planning",
        bullets: [
          "Primary inverter: phase currents, DC bus voltage, resonant tank voltage or current sense.",
          "Receiver: rectified output voltage and current, tank current, alignment sense coil level.",
          "Thermal: NTC or digital temperature on FETs, coil ferrite, and receiver PCB hot spots.",
          "Auxiliary: grid voltage presence on dock, interlock and connector sense inputs.",
        ],
      },
      {
        heading: "DMA, oversampling, and calibration",
        paragraphs: [
          "Circular DMA buffers deliver N-sample windows to digital filters each PWM period. Hardware oversampling improves SNR on slow thermal channels without loading CPU. Factory calibration stores offset and gain coefficients per channel in NVM; temperature drift coefficients apply for shunt amplifiers with known TC. Inline self-test injects known references during idle windows where safety analysis permits.",
          "SiCore energy telemetry sums ADC-derived power over charge sessions and compares to pad-side AC metering during commissioning — persistent offset triggers recalibration workflows before fleet billing reliance.",
        ],
      },
      {
        heading: "Fault and saturation handling",
        paragraphs: [
          "ADC readings outside physical range flag sensor fault rather than commanding maximum power. Saturation detection on current channels during FOD events distinguishes genuine over-current from amplifier clipping. Redundant sense paths on high-power docks cross-check primary current estimates; disagreement beyond tolerance latches derated operation or shutdown per safety case.",
        ],
      },
    ],
  }),

  article({
    slug: "digital-filtering",
    title: "Digital Filtering",
    summary:
      "Digital filter design for SiCore embedded power firmware — anti-aliasing, notch filters for switching harmonics, moving-average metrology, and IIR biquads for FOD and detuning detection on dock and receiver ADC streams.",
    sections: [
      {
        paragraphs: [
          "Raw ADC streams from wireless power hardware contain switching ripple, CM noise from nearby drives, and broadband EMI from long cable runs in AGV chassis. Digital filtering extracts control-grade fundamental components and metrology-grade DC averages without introducing phase lag that destabilizes current loops or masks foreign-object signatures.",
          "SiCore filter chains are designed offline in floating-point models, then converted to fixed-point with verified frequency response and step response before deployment on resource-constrained receivers.",
        ],
      },
      {
        heading: "Filter types in WPT firmware",
        bullets: [
          "First-order or biquad low-pass on current feedback — cutoff below Nyquist of control loop, above load bandwidth.",
          "Notch or comb filters at switching frequency and harmonics for FOD residual analysis.",
          "Moving-average or decimate-by-N for slow power and energy integration to fleet telemetry.",
          "High-pass or band-pass on alignment sense for AC coupling coil signal extraction.",
          "Median filters on temperature channels to reject single-sample spike artifacts.",
        ],
      },
      {
        heading: "Implementation constraints",
        paragraphs: [
          "Direct Form II transposed biquads minimize state variables and suit CMSIS-DSP arm_biquad_cascade_df1 routines on Cortex-M4. Filter execution runs in ADC DMA completion context or dedicated control task — never split across unsynchronized tasks without atomic buffer swap. Group delay of current feedback filter is included in loop phase margin calculations; aggressive filtering improves noise but reduces phase margin.",
          "Cascaded stages use Q-factor limits to prevent coefficient quantization instability at corner frequencies near 1–5 kHz on 100 ksps effective streams.",
        ],
      },
      {
        heading: "Validation",
        paragraphs: [
          "Frequency response verified with injected sine sweep on HIL; step response timed against BMS current request ramps. Field logs compare filtered vs raw FOD metrics during controlled metal plate insertion to confirm detection latency meets safety timing. Filter coefficient updates ship only via signed OTA because they directly affect protection sensitivity.",
        ],
      },
    ],
  }),

  article({
    slug: "fault-detection",
    title: "Fault Detection",
    summary:
      "Fault detection architecture in SiCore wireless charging firmware — hardware comparators, software monitors, FOD, comm-loss, and staged shutdown for dock transmitters and AGV receiver controllers.",
    sections: [
      {
        paragraphs: [
          "Fault detection must identify abnormal conditions before damage to coils, FETs, or vehicle packs — and must fail safe when sensors or software themselves degrade. SiCore implements defense in depth: analog comparators and gate-driver fault pins act in microseconds; firmware monitors trends over milliseconds; session-level logic enforces BMS and fleet rules over seconds.",
          "Wireless charging adds faults absent in wired chargers: misalignment power loss, foreign metal heating, living-object proximity, and split control between pad and vehicle with independent reset domains.",
        ],
      },
      {
        heading: "Fault categories",
        bullets: [
          "Electrical: over-current, over-voltage, DC bus collapse, isolation failure, shoot-through indication.",
          "Thermal: FET, coil, or receiver PCB overtemperature with hysteresis and latch rules.",
          "WPT-specific: FOD power imbalance, detuning beyond bounds, excessive reflected power.",
          "System: BMS deny, CAN timeout, alignment lost during transfer, vehicle motion while energized.",
          "Self-test: ADC out-of-range, stuck PWM feedback, configuration CRC failure at boot.",
        ],
      },
      {
        heading: "Detection and response staging",
        paragraphs: [
          "Tier 1 hardware latches disable PWM outputs and notify firmware via fault IRQ. Tier 2 software derates power when rolling averages cross warning thresholds — receiver coil temperature rise without hard limit yet. Tier 3 session abort sends structured fault codes on CAN and fleet link, opens contactor request line, and ramps transmitter power to zero with documented timing.",
          "SiCore fault matrices map each code to allowed recovery: auto-retry after cooldown for transient alignment loss; latched maintenance required for repeated FOD trips or comparator hardware fault.",
        ],
      },
      {
        heading: "Logging and fleet visibility",
        paragraphs: [
          "Circular fault history in NVM captures timestamp, active power, alignment metric, and last BMS current request for post-incident review. Fleet dashboards aggregate fault rates per pad ID and vehicle ID to distinguish infrastructure misalignment from receiver degradation. Fault injection tests during factory acceptance verify each tier before site energization.",
        ],
      },
    ],
  }),

  article({
    slug: "diagnostics",
    title: "Diagnostics",
    summary:
      "Embedded diagnostics for SiCore dock and receiver firmware — UDS-style DIDs, live telemetry, session forensics, and maintenance workflows for AGV wireless charging fleets.",
    sections: [
      {
        paragraphs: [
          "Diagnostics bridge embedded controllers and fleet operators: they expose internal state without compromising real-time control or security. SiCore firmware implements structured data identifiers for alignment quality, loop health, thermal margins, NVM wear, and communication statistics — accessible over CAN during service mode and summarized to cloud gateways during normal operation.",
          "Effective diagnostics reduce mean-time-to-repair when pads derate mysteriously or receivers show rising charge abort rates across a vehicle class.",
        ],
      },
      {
        heading: "Diagnostic surfaces",
        bullets: [
          "CAN service mode: read DIDs, clear latched faults, trigger alignment test pulse at reduced power.",
          "Live telemetry: SOC-correlated charge power, k estimate, inverter efficiency, session duration.",
          "Session records: start/stop reason, energy delivered, max temperature, min alignment score.",
          "Self-test routines: ADC loopback, gate driver pulse check, NVM integrity scan at power-up.",
          "Developer trace: ring buffer snapshot uploaded after fault for support engineering.",
        ],
      },
      {
        heading: "Operational use cases",
        paragraphs: [
          "Technicians compare alignment scores across pads serving the same vehicle route — low scores on one pad indicate mechanical wear or floor settlement. Rising DCIR-estimate divergence between pad metered energy and BMS coulomb gain points to receiver cable or contactor issues before dispatch SOC errors appear.",
          "SiCore diagnostic policy separates customer-visible fleet metrics from OEM-internal debug registers; production builds strip verbose trace unless service auth token or physical key switch enables extended session.",
        ],
      },
      {
        heading: "Design for serviceability",
        paragraphs: [
          "Diagnostic code paths avoid blocking flash erase during active charge. DID definitions are versioned in DBC-like schema files shipped with fleet software so parsers stay synchronized across OTA firmware generations. Predictive maintenance hooks flag trends — increasing FOD near-miss count, PWM break events per month — before hard faults trigger line stoppage.",
        ],
      },
    ],
  }),

  article({
    slug: "ota-updates",
    title: "OTA Updates",
    summary:
      "Over-the-air and wired firmware update architecture for SiCore wireless charging infrastructure — dual-bank flash, signed images, rollback, and coordinated dock-receiver update policy in AGV fleets.",
    sections: [
      {
        paragraphs: [
          "Industrial wireless charging deployments cannot rely on bench-only programming: pads mounted in warehouse floors and receivers buried in AGV chassis require secure, verifiable firmware updates without dismantling hardware. SiCore OTA architecture uses signed image packages, dual-bank or A/B flash partitions, and explicit rollback rules so failed updates never brick safety-critical power controllers mid-shift.",
          "OTA interacts with real-time control: downloads and flash programming occur in idle or service states; cryptographic verify runs before bank swap; first boot after update executes expanded self-test before enabling full power transfer.",
        ],
      },
      {
        heading: "Update pipeline",
        bullets: [
          "Package delivery: fleet gateway, Ethernet on dock, or CAN-based chunked transfer to receivers in maintenance bay.",
          "Authentication: ECDSA or RSA signature over image hash; optional encrypted payload for IP protection.",
          "Staging: write to inactive bank with resume support and per-block CRC.",
          "Activation: reboot into new image after watchdog-covered verification boot chain.",
          "Rollback: revert to previous bank on failed self-test, loop crash counter, or explicit fleet command.",
        ],
      },
      {
        heading: "Fleet coordination",
        paragraphs: [
          "Dock and receiver firmware versions are interdependent when session protocols evolve — SiCore release notes define minimum compatible pairs. Fleet managers schedule pad updates during low-throughput windows; receiver updates often batch when vehicles enter maintenance. Simultaneous update of all pads in one aisle is avoided without backup wired charge capacity.",
          "Configuration blobs migrate separately from application images where schema allows forward compatibility; breaking config changes bump major version and trigger factory-default fallback with technician review.",
        ],
      },
      {
        heading: "Safety and compliance",
        paragraphs: [
          "Bootloader is immutable or protected by MPU and option bytes; debug ports disabled in production unless physical unlock. OTA never skips signature verify even on LAN — supply-chain integrity applies equally to warehouse networks. Update audit logs record image version, timestamp, and initiating operator or gateway ID for regulatory traceability alongside existing electrical safety documentation.",
        ],
      },
    ],
  }),
];
