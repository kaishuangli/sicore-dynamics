import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getAutonomousSoftwareContent } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";
import type { AutonomousSoftwareId } from "@/lib/autonomous-software";
import WirelessModuleProductLayout from "@/sections/products/WirelessModuleProductLayout";

function splitTitle(title: string) {
  if (title.startsWith("SDK")) {
    return { titleLead: "SDK", titleRest: title.replace(/^SDK\s*/, "") };
  }
  const parts = title.split(" ");
  if (parts.length <= 1) return { titleLead: title, titleRest: "" };
  return {
    titleLead: parts[0] ?? title,
    titleRest: parts.slice(1).join(" "),
  };
}

export default function AutonomousSoftwareProductPage({
  locale,
  productId,
}: {
  locale: Locale;
  productId: AutonomousSoftwareId;
}) {
  const product = getAutonomousSoftwareContent(locale, productId);
  if (!product) return null;

  const { titleLead, titleRest } = splitTitle(product.title);
  const backLabel =
    locale === "zh"
      ? "返回软件目录"
      : locale === "es"
        ? "Volver al catálogo"
        : "Back to software catalog";

  return (
    <div>
      <div className="border-b border-slate-200 bg-white">
        <div className="container-page py-3">
          <Link
            href={withLocale("/products/autonomous-software", locale)}
            className="text-sm font-bold text-[#0B5FFF] transition hover:text-[#0847cc]"
          >
            ← {backLabel}
          </Link>
        </div>
      </div>
      <WirelessModuleProductLayout
        locale={locale}
        hero={{
          eyebrow:
            locale === "zh"
              ? "自主软件"
              : locale === "es"
                ? "SOFTWARE AUTÓNOMO"
                : "AUTONOMOUS SOFTWARE",
          titleLead,
          titleRest,
          tagline: product.tagline,
          description: product.description,
          image: product.image,
          imageAlt: product.imageAlt,
          highlights: product.highlights,
        }}
        specs={product.specs}
        features={product.features}
        applications={product.applications}
        cta={product.cta}
      />
    </div>
  );
}
