import type { Locale } from "@/lib/i18n/config";
import { getProductTiers } from "@/lib/i18n/product-content";
import WirelessModuleProductLayout from "@/sections/products/WirelessModuleProductLayout";

export default function Wireless60wModulePage({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const tier = getProductTiers(locale).find((item) => item.id === "60w");
  if (!tier) return null;

  const features = tier.highlights.map((item, index) => ({
    title: item,
    description: tier.tagline,
    icon: (["efficiency", "industrial", "comms"] as const)[index] ?? ("industrial" as const),
  }));

  const applications = tier.applications.map((title) => ({
    title,
    image: tier.image,
    imageAlt: title,
  }));

  return (
    <WirelessModuleProductLayout
      locale={locale}
      hero={{
        eyebrow: isZh ? "工业级" : "INDUSTRIAL GRADE",
        titleLead: "60W",
        titleRest: isZh ? "无线充电模块" : "Wireless Charging Module",
        tagline: tier.tagline,
        description: tier.description,
        image: tier.image,
        imageAlt: tier.title,
        highlights: [
          { label: isZh ? "60W 输出功率" : "60W Output Power", icon: "power" },
          { label: isZh ? "高效率谐振传输" : "High Efficiency Resonant Transfer", icon: "efficiency" },
          { label: isZh ? "紧凑 TX/RX 模块" : "Compact TX/RX Modules", icon: "industrial" },
          { label: isZh ? "OEM 集成就绪" : "OEM Integration Ready", icon: "safe" },
        ],
      }}
      specs={[
        { label: isZh ? "输出功率" : "Output Power", value: "60W Max" },
        { label: isZh ? "适用场景" : "Target Platforms", value: tier.applications.join(" / ") },
        { label: isZh ? "集成方式" : "Integration", value: isZh ? "OEM 模块集成" : "OEM module integration" },
        { label: isZh ? "平台定位" : "Platform", value: tier.title },
      ]}
      features={features}
      applications={applications}
      cta={{
        title: isZh ? "为轻量智能设备供电。" : "Power Lightweight Intelligent Machines.",
        description: isZh
          ? "与我们一起打造紧凑、可靠的无线充电方案。"
          : "Let's build compact, reliable wireless charging together.",
        stats: [
          { label: isZh ? "60W 功率" : "60W Power", icon: "power" },
          { label: isZh ? "高效率" : "High Efficiency", icon: "efficiency" },
          { label: isZh ? "紧凑设计" : "Compact Design", icon: "industrial" },
          { label: isZh ? "工程支持" : "Engineering Support", icon: "support" },
        ],
      }}
    />
  );
}
