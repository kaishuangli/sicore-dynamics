import type { Locale } from "@/lib/i18n/config";
import { getProduct3000w } from "@/lib/i18n/content";
import { getProductTiers } from "@/lib/i18n/product-content";
import WirelessModuleProductLayout from "@/sections/products/WirelessModuleProductLayout";

export default function Wireless3000wProductPage({ locale }: { locale: Locale }) {
  const isZh = locale === "zh";
  const tier = getProductTiers(locale).find((item) => item.id === "3000w");
  const { wireless3000wSpecGroups } = getProduct3000w(locale);
  if (!tier) return null;

  const features = tier.highlights.map((item, index) => ({
    title: item,
    description: tier.tagline,
    icon: (["power", "efficiency", "safe", "comms"] as const)[index] ?? ("industrial" as const),
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
        titleLead: "3000W",
        titleRest: isZh ? "无线充电模块" : "Wireless Charging Module",
        tagline: tier.tagline,
        description: tier.description,
        image: tier.image,
        imageAlt: tier.title,
        highlights: [
          { label: isZh ? "3 kW 输出功率" : "3 kW Output Power", icon: "power" },
          { label: isZh ? "满载效率最高 87%" : "Up to 87% Full-Load Efficiency", icon: "efficiency" },
          { label: isZh ? "CV/CC 充电" : "CV/CC Charging", icon: "safe" },
          { label: isZh ? "工业级通信接口" : "Industrial Communication", icon: "industrial" },
        ],
      }}
      specGroups={wireless3000wSpecGroups}
      features={features}
      applications={applications}
      cta={{
        title: isZh ? "为下一代智能机器供电。" : "Powering the Next Generation of Intelligent Machines.",
        description: isZh
          ? "高功率无线充电，面向更智能、更自主的未来。"
          : "High power wireless charging for a smarter, autonomous future.",
        stats: [
          { label: isZh ? "3000W 高功率" : "3000W High Power", icon: "power" },
          { label: isZh ? "最高 87% 效率" : "Up to 87% Efficiency", icon: "efficiency" },
          { label: isZh ? "工业级平台" : "Industrial Grade", icon: "industrial" },
          { label: isZh ? "全球工程支持" : "Global Support Engineering", icon: "support" },
        ],
      }}
    />
  );
}
