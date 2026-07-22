import Image from "next/image";
import Link from "next/link";
import { getPrincipleSteps } from "@/lib/solution-page-registry";
import type { Locale } from "@/lib/i18n/config";
import { getSolutionWhyWirelessForIndustry, type LocalizedIndustry } from "@/lib/i18n/content";
import { uiLabel } from "@/lib/i18n/pick-locale";
import { withLocale } from "@/lib/i18n/path";
import { SolutionCtaBlock, SolutionFaqBlock } from "@/sections/solutions/shared/SolutionBlocks";

const accent = "#0B5FFF";

/** One image per role — never reuse across sections. */
const media = {
  hero: "/images/industry-medical.png",
  why: "/images/product-rx.png",
  platforms: {
    w60: "/images/product-coils.png",
    w200: "/images/product-tx.png",
  },
} as const;

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M4 10.5 8 14.5 16 5.5" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MedicalSolutionBody({
  industry,
  locale,
}: {
  industry: LocalizedIndustry;
  locale: Locale;
}) {
  const t = (zh: string, es: string, en: string) => uiLabel(locale, zh, es, en);
  const L = (href: string) => withLocale(href, locale);

  const analysis = getSolutionWhyWirelessForIndustry(industry.id, locale);
  const [whyRow, principleRow] = analysis.rows;
  const principleSteps = getPrincipleSteps(principleRow);

  const whyPoints = [
    {
      title: t("感染控制优先", "Prioridad al control de infecciones", "Infection control first"),
      detail: t(
        "取消外露充电口，减少液体与生物残留积聚，便于彻底擦拭与灭菌。",
        "Eliminar puertos de carga expuestos reduce residuos y facilita la desinfección completa.",
        "Eliminate exposed ports that trap fluids and residue — simpler wipe-down and sterilization.",
      ),
    },
    {
      title: t("临床流程更顺畅", "Flujos clínicos más fluidos", "Smoother clinical workflows"),
      detail: t(
        "医护人员无需寻找线缆或核对接头方向，设备放置即可充电。",
        "El personal no busca cables ni orienta conectores: coloca el equipo y carga.",
        "Staff place devices on a pad — no cable hunting or connector orientation.",
      ),
    },
    {
      title: t("密封外壳设计", "Diseño de carcasa sellada", "Sealed enclosure design"),
      detail: t(
        "接收端集成在外壳内部，电力接口不再是设备壳体上的开口。",
        "El receptor queda dentro de la carcasa; la energía ya no requiere una abertura externa.",
        "Receiver coils sit inside the housing — no external opening in the device shell.",
      ),
    },
    {
      title: t("长期可靠性", "Confiabilidad a largo plazo", "Long-term reliability"),
      detail: t(
        "无机械插拔磨损，减少接口腐蚀与接触不良导致的维护停机。",
        "Sin desgaste por enchufes mecánicos: menos corrosión y menos fallos de contacto.",
        "No connector wear or corrosion — fewer contact failures and maintenance interruptions.",
      ),
    },
  ];

  const suitableFor =
    industry.listSections.find((s) => /suitable|适用|adecuado/i.test(s.title))?.items ??
    industry.listSections[0]?.items ??
    [];

  const appDetails: Record<string, string[]> = {
    // Match by English title keys used in EN content; fallback handled below
    "Portable Patient Devices": [
      t("全密封外壳，支持擦拭消毒", "Carcasa sellada, apta para limpieza", "Fully sealed housing for wipe-down disinfection"),
      t("床旁与转运场景即放即充", "Carga al colocar en cabecera y transporte", "Drop-and-charge for bedside and transport use"),
      t("低噪声充电曲线，适配监护类负载", "Perfil de carga de bajo ruido", "Low-noise charge profiles for monitor loads"),
    ],
    "Surgical & Diagnostic Tools": [
      t("无线底座，无外露金属触点", "Base inalámbrica sin contactos metálicos", "Wireless cradle with no exposed metal contacts"),
      t("适配反复灭菌与高 IP 需求", "Compatible con esterilización e IP alto", "Built for sterilization cycles and high IP needs"),
      t("手持扫描仪 / 超声探头类设备", "Escáneres y sondas de mano", "Handheld scanners and probe-class instruments"),
    ],
    "Mobile Clinical Equipment": [
      t("地垫 / 对接位放置即可充电", "Carga al acoplar en plataforma de suelo", "Floor-pad docking between clinical rounds"),
      t("减少无菌通道中的线缆绊倒风险", "Menos cables en pasillos estériles", "Fewer cord trip hazards in sterile pathways"),
      t("适用于推车、工作站与移动平台", "Para carros, estaciones y plataformas", "Carts, workstations, and mobile clinical platforms"),
    ],
    "便携式病患设备": [
      t("全密封外壳，支持擦拭消毒", "Carcasa sellada, apta para limpieza", "Fully sealed housing for wipe-down disinfection"),
      t("床旁与转运场景即放即充", "Carga al colocar en cabecera y transporte", "Drop-and-charge for bedside and transport use"),
      t("低噪声充电曲线，适配监护类负载", "Perfil de carga de bajo ruido", "Low-noise charge profiles for monitor loads"),
    ],
    "手术与诊断器械": [
      t("无线底座，无外露金属触点", "Base inalámbrica sin contactos metálicos", "Wireless cradle with no exposed metal contacts"),
      t("适配反复灭菌与高 IP 需求", "Compatible con esterilización e IP alto", "Built for sterilization cycles and high IP needs"),
      t("手持扫描仪 / 超声探头类设备", "Escáneres y sondas de mano", "Handheld scanners and probe-class instruments"),
    ],
    "移动临床设备": [
      t("地垫 / 对接位放置即可充电", "Carga al acoplar en plataforma de suelo", "Floor-pad docking between clinical rounds"),
      t("减少无菌通道中的线缆绊倒风险", "Menos cables en pasillos estériles", "Fewer cord trip hazards in sterile pathways"),
      t("适用于推车、工作站与移动平台", "Para carros, estaciones y plataformas", "Carts, workstations, and mobile clinical platforms"),
    ],
    "Dispositivos Portátiles para Pacientes": [
      t("全密封外壳，支持擦拭消毒", "Carcasa sellada, apta para limpieza", "Fully sealed housing for wipe-down disinfection"),
      t("床旁与转运场景即放即充", "Carga al colocar en cabecera y transporte", "Drop-and-charge for bedside and transport use"),
      t("低噪声充电曲线，适配监护类负载", "Perfil de carga de bajo ruido", "Low-noise charge profiles for monitor loads"),
    ],
    "Herramientas Quirúrgicas y de Diagnóstico": [
      t("无线底座，无外露金属触点", "Base inalámbrica sin contactos metálicos", "Wireless cradle with no exposed metal contacts"),
      t("适配反复灭菌与高 IP 需求", "Compatible con esterilización e IP alto", "Built for sterilization cycles and high IP needs"),
      t("手持扫描仪 / 超声探头类设备", "Escáneres y sondas de mano", "Handheld scanners and probe-class instruments"),
    ],
    "Equipos Clínicos Móviles": [
      t("地垫 / 对接位放置即可充电", "Carga al acoplar en plataforma de suelo", "Floor-pad docking between clinical rounds"),
      t("减少无菌通道中的线缆绊倒风险", "Menos cables en pasillos estériles", "Fewer cord trip hazards in sterile pathways"),
      t("适用于推车、工作站与移动平台", "Para carros, estaciones y plataformas", "Carts, workstations, and mobile clinical platforms"),
    ],
  };

  const platforms = [
    {
      power: "60W",
      href: "/products/60w",
      image: media.platforms.w60,
      title: t("便携与手持设备", "Dispositivos portátiles y de mano", "Portable & handheld devices"),
      detail: t(
        "紧凑接收模块，适合监护仪、手持扫描仪与密封消费级医疗外设。",
        "Módulo receptor compacto para monitores, escáneres de mano y periféricos médicos sellados.",
        "Compact receivers for monitors, handheld scanners, and sealed clinical peripherals.",
      ),
    },
    {
      power: "200W",
      href: "/products/200w",
      image: media.platforms.w200,
      title: t("移动工作站与推车", "Estaciones móviles y carros", "Mobile workstations & carts"),
      detail: t(
        "更高功率平台，支持医疗推车、移动工作站与临床移动设备的日常对接充电。",
        "Mayor potencia para carros médicos, estaciones móviles y equipos clínicos de planta.",
        "Higher power for medical carts, mobile workstations, and floor clinical equipment.",
      ),
    },
  ];

  const whySicore = [
    {
      title: t("卫生级接口思维", "Enfoque en interfaces higiénicas", "Hygiene-first interfaces"),
      detail: t(
        "从产品定义开始就按密封外壳与可消毒表面设计，而不是事后加盖板。",
        "Diseñado desde el inicio para carcasas selladas y superficies desinfectables.",
        "Designed from day one for sealed housings and disinfectable surfaces — not a bolt-on cover.",
      ),
    },
    {
      title: t("OEM 可集成", "Integrable para OEM", "OEM-ready integration"),
      detail: t(
        "提供 RX/TX 模块、线圈选型与工程协同，帮助设备厂商缩短导入周期。",
        "Módulos RX/TX, bobinas y soporte de ingeniería para acortar la integración OEM.",
        "RX/TX modules, coil options, and engineering support to shorten OEM bring-up.",
      ),
    },
    {
      title: t("安全监测", "Monitoreo de seguridad", "Safety monitoring"),
      detail: t(
        "电压、温度与异物检测保护设备电池与周边临床环境。",
        "Protección por voltaje, temperatura y objetos extraños para el equipo y el entorno clínico.",
        "Voltage, thermal, and foreign-object monitoring protect devices and nearby clinical gear.",
      ),
    },
    {
      title: t("功率档位清晰", "Niveles de potencia claros", "Clear power tiers"),
      detail: t(
        "60W 与 200W 覆盖便携设备到移动工作站，避免过度规格或功率不足。",
        "60W y 200W cubren desde lo portátil hasta estaciones móviles.",
        "60W and 200W cover portable devices through mobile workstations without oversizing.",
      ),
    },
  ];

  const oemSteps = [
    {
      label: t("需求对齐", "Alinear requisitos", "Requirements alignment"),
      detail: t("功率、气隙、外壳材料与消毒流程", "Potencia, entrehierro, carcasa y desinfección", "Power, air gap, housing materials, and disinfection workflow"),
    },
    {
      label: t("模块选型", "Selección de módulo", "Module selection"),
      detail: t("60W / 200W RX·TX 与线圈方案", "RX·TX 60W/200W y bobinas", "60W / 200W RX·TX and coil options"),
    },
    {
      label: t("样机集成", "Integración de prototipo", "Prototype integration"),
      detail: t("机械安装、热与 EMI 协同验证", "Montaje, térmica y EMI", "Mechanical fit, thermal, and EMI co-validation"),
    },
    {
      label: t("量产支持", "Soporte a producción", "Production support"),
      detail: t("测试规范、供货与持续工程支持", "Pruebas, suministro y soporte", "Test specs, supply, and ongoing engineering support"),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1220]" aria-labelledby="medical-hero-heading">
        <div className="relative aspect-[21/9] min-h-[300px] w-full sm:min-h-[360px] lg:min-h-[440px]">
          <Image
            src={media.hero}
            alt={t(
              "临床环境中医疗工作站推车在地垫上无线充电",
              "Estación de trabajo médica cargando de forma inalámbrica en un entorno clínico",
              "Medical workstation cart charging wirelessly on a floor pad in a clinical suite",
            )}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/85 via-[#0B1220]/45 to-transparent" />
          <div className="container-page relative flex h-full min-h-[300px] flex-col justify-center py-12 sm:min-h-[360px] lg:min-h-[440px] lg:py-16">
            <nav className="mb-8 text-xs text-white/70" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href={L("/")} className="transition hover:text-white">
                    {t("首页", "Inicio", "Home")}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>{t("行业解决方案", "Soluciones industriales", "Industrial Solutions")}</li>
                <li aria-hidden="true">/</li>
                <li className="font-semibold text-white">{industry.title}</li>
              </ol>
            </nav>
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/80">
                {t("医疗设备", "Equipos médicos", "Medical Equipment")}
              </p>
              <h1
                id="medical-hero-heading"
                className="font-display mt-3 text-3xl font-black leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-[52px]"
              >
                {industry.pageTitle}
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/90 sm:text-base md:text-lg">{industry.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#medical-applications"
                  className="inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
                  style={{ backgroundColor: accent }}
                >
                  {t("查看应用场景", "Ver aplicaciones", "View Applications")} <span aria-hidden="true">→</span>
                </a>
                <Link
                  href={L("/contact")}
                  className="inline-flex items-center justify-center rounded-sm border border-white/80 bg-transparent px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  {t("联系临床工程团队", "Contacte ingeniería clínica", "Contact Clinical Engineering")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="border-b border-slate-100 bg-white py-10 lg:py-12">
        <div className="container-page grid gap-6 md:grid-cols-2 md:gap-12">
          {industry.content.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-[#3a3a3a] md:text-[17px] md:leading-8">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="medical-why-heading">
        <div className="container-page">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#F8FAFC]">
              <Image
                src={media.why}
                alt={t("面向医疗设备的无线接收模块", "Módulo receptor inalámbrico para dispositivos médicos", "Wireless receiver module for medical device integration")}
                fill
                className="object-contain object-center p-8"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: accent }}>
                {t("临床无线供电", "Energía inalámbrica clínica", "Clinical wireless power")}
              </p>
              <h2
                id="medical-why-heading"
                className="font-display mt-3 text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[32px]"
              >
                {whyRow.title}
              </h2>
              <p className="mt-5 text-base leading-[1.8] text-[#3a3a3a]">{whyRow.paragraphs[0]}</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {whyPoints.map((point) => (
                  <article key={point.title}>
                    <div
                      className="mb-3 h-9 w-9 rounded-sm border"
                      style={{ borderColor: `${accent}55`, backgroundColor: `${accent}12` }}
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-base font-bold text-[#0B0F19]">{point.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#3a3a3a]">{point.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suitable for */}
      {suitableFor.length > 0 ? (
        <section className="border-y border-slate-100 bg-[#F8FAFC] py-12 lg:py-16" aria-labelledby="medical-suitable-heading">
          <div className="container-page">
            <h2
              id="medical-suitable-heading"
              className="font-display text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[28px]"
            >
              {t("适用设备类型", "Tipos de equipo adecuados", "Suitable device types")}
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {suitableFor.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-[#0B0F19]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: accent }} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* Applications */}
      <section id="medical-applications" className="bg-white py-14 lg:py-20" aria-labelledby="medical-apps-heading">
        <div className="container-page">
          <h2
            id="medical-apps-heading"
            className="font-display text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[32px]"
          >
            {t("医疗设备应用", "Aplicaciones de dispositivos médicos", "Medical device applications")}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#3a3a3a]">{industry.productsIntro}</p>

          <div className="mt-12 space-y-16 lg:space-y-20">
            {industry.useCases.map((useCase, index) => {
              const imageLeft = index % 2 === 0;
              const points = appDetails[useCase.title] ?? [];
              return (
                <article key={useCase.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-sm bg-[#F8FAFC] ${imageLeft ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <Image
                      src={useCase.image}
                      alt={useCase.alt}
                      fill
                      className={
                        useCase.image.includes("app-60w")
                          ? "object-contain object-center p-5"
                          : "object-cover object-center"
                      }
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                    <p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: accent }}>
                      {t(`应用 0${index + 1}`, `Aplicación 0${index + 1}`, `Application 0${index + 1}`)}
                    </p>
                    <h3 className="font-display mt-2 text-xl font-bold text-[#0B0F19] md:text-2xl">{useCase.title}</h3>
                    <p className="mt-4 text-base leading-7 text-[#3a3a3a]">{useCase.description}</p>
                    {points.length > 0 ? (
                      <ul className="mt-5 space-y-2.5">
                        {points.map((point) => (
                          <li key={point} className="flex gap-2.5 text-sm leading-6 text-[#3a3a3a]">
                            <CheckIcon />
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recommended platforms */}
      <section className="border-y border-slate-100 bg-[#F8FAFC] py-14 lg:py-20" aria-labelledby="medical-platforms-heading">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2
              id="medical-platforms-heading"
              className="font-display text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[32px]"
            >
              {t("推荐功率平台", "Plataformas de potencia recomendadas", "Recommended power platforms")}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#3a3a3a]">
              {t(
                "根据设备体积、电池容量与临床使用节奏，优先匹配 60W 或 200W 模块。",
                "Según tamaño, batería y ritmo clínico, combine módulos de 60W o 200W.",
                "Match 60W or 200W modules to device size, battery capacity, and clinical duty cycle.",
              )}
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {platforms.map((platform) => (
              <article key={platform.power} className="overflow-hidden border border-slate-200 bg-white">
                <div className="relative aspect-[16/10] bg-white">
                  <Image
                    src={platform.image}
                    alt={`${platform.power} ${platform.title}`}
                    fill
                    className="object-contain object-center p-8"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="border-t border-slate-100 p-6">
                  <p className="font-display text-sm font-bold" style={{ color: accent }}>
                    {platform.power}
                  </p>
                  <h3 className="font-display mt-1 text-xl font-bold text-[#0B0F19]">{platform.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#3a3a3a]">{platform.detail}</p>
                  <Link
                    href={L(platform.href)}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold transition hover:opacity-80"
                    style={{ color: accent }}
                  >
                    {t("查看产品详情", "Ver detalles del producto", "View product details")}{" "}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="medical-flow-heading">
        <div className="container-page">
          <h2
            id="medical-flow-heading"
            className="font-display text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[32px]"
          >
            {principleRow.title}
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {principleSteps.map((step, index) => (
              <li key={step.label} className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: accent }}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="font-display mt-3 text-base font-bold text-[#0B0F19]">{step.label}</p>
                <p className="mt-2 text-sm leading-6 text-[#3a3a3a]">{step.detail}</p>
                {index < principleSteps.length - 1 ? (
                  <span
                    className="absolute -right-2 top-8 hidden text-lg font-bold lg:inline"
                    style={{ color: accent }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl text-sm leading-7 text-[#3a3a3a] md:text-base">{principleRow.paragraphs[0]}</p>
        </div>
      </section>

      {/* Why SiCore */}
      <section className="border-y border-slate-100 bg-[#F8FAFC] py-14 lg:py-20" aria-labelledby="medical-sicore-heading">
        <div className="container-page">
          <h2
            id="medical-sicore-heading"
            className="font-display text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[32px]"
          >
            {t("为什么选择 SiCore", "Por qué SiCore", "Why SiCore for medical")}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whySicore.map((item) => (
              <article key={item.title}>
                <div
                  className="mb-4 h-10 w-10 rounded-sm"
                  style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}40` }}
                  aria-hidden="true"
                />
                <h3 className="font-display text-base font-bold text-[#0B0F19]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#3a3a3a]">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OEM path */}
      <section className="bg-white py-14 lg:py-20" aria-labelledby="medical-oem-heading">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2
              id="medical-oem-heading"
              className="font-display text-2xl font-bold tracking-[-0.02em] text-[#0B0F19] md:text-[32px]"
            >
              {t("OEM 集成路径", "Ruta de integración OEM", "OEM integration path")}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#3a3a3a]">
              {t(
                "从需求对齐到量产支持，SiCore 与医疗设备厂商协同完成无线充电导入。",
                "Desde requisitos hasta producción, SiCore acompaña a fabricantes de dispositivos médicos.",
                "From requirements through production, SiCore partners with medical device OEMs on wireless charging bring-up.",
              )}
            </p>
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {oemSteps.map((step, index) => (
              <li key={step.label} className="border-t-2 border-[#0B0F19] pt-5">
                <p className="font-display text-sm font-bold" style={{ color: accent }}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="font-display mt-2 text-lg font-bold text-[#0B0F19]">{step.label}</p>
                <p className="mt-2 text-sm leading-6 text-[#3a3a3a]">{step.detail}</p>
              </li>
            ))}
          </ol>
          <Link
            href={L("/technology/oem-integration")}
            className="mt-10 inline-flex items-center gap-2 text-sm font-bold transition hover:opacity-80"
            style={{ color: accent }}
          >
            {t("了解 OEM 集成服务", "Conozca la integración OEM", "Explore OEM integration")} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <SolutionFaqBlock
        industryId={industry.id}
        title={t(`常见问题 — ${industry.title}`, `Preguntas frecuentes — ${industry.title}`, `FAQ — ${industry.title}`)}
        variant="split"
        locale={locale}
      />
      <SolutionCtaBlock
        theme="clinical"
        title={t(
          "探讨医疗设备的卫生级无线充电方案",
          "Analice la carga inalámbrica higiénica para dispositivos médicos",
          "Discuss hygienic wireless charging for medical devices",
        )}
        description={t(
          "SiCore 支持便携式监护仪、医疗推车以及需要密封、非接触式充电接口的 OEM 项目。",
          "SiCore respalda monitores portátiles, carros médicos y programas OEM que requieren interfaces de carga selladas y sin contacto.",
          "SiCore supports portable monitors, medical carts, and OEM programs requiring sealed, contactless charging interfaces.",
        )}
        ctaLabel={t("联系临床工程团队", "Contacte al equipo de ingeniería clínica", "Contact Clinical Engineering")}
        secondaryHref="/products/60w"
        secondaryLabel={t("查看 60W 产品", "Ver producto 60W", "View 60W product")}
        locale={locale}
      />
    </>
  );
}
