import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getIntegratedBoardContent } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";
import type { IntegratedBoardId } from "@/lib/integrated-boards";
import WirelessModuleProductLayout from "@/sections/products/WirelessModuleProductLayout";

function splitBoardTitle(title: string, locale: Locale) {
  if (locale === "zh") {
    const match = title.match(/^([A-Za-z0-9]+)\s*(.+)$/);
    if (match) return { titleLead: match[1], titleRest: match[2] };
    return { titleLead: title, titleRest: "" };
  }

  if (locale === "es") {
    const match = title.match(/\b(TX|RX)\b/i);
    if (match) {
      return {
        titleLead: match[0].toUpperCase(),
        titleRest: title.replace(match[0], "").replace(/\s+/g, " ").trim(),
      };
    }
  }

  const parts = title.split(" ");
  return {
    titleLead: parts[0] ?? title,
    titleRest: parts.slice(1).join(" "),
  };
}

export default function IntegratedBoardProductPage({
  locale,
  boardId,
}: {
  locale: Locale;
  boardId: IntegratedBoardId;
}) {
  const board = getIntegratedBoardContent(locale, boardId);
  if (!board) return null;

  const { titleLead, titleRest } = splitBoardTitle(board.title, locale);
  const backLabel =
    locale === "zh" ? "返回板卡目录" : locale === "es" ? "Volver al catálogo" : "Back to board catalog";

  return (
    <div>
      <div className="border-b border-slate-200 bg-white">
        <div className="container-page py-3">
          <Link
            href={withLocale("/products/integrated-boards", locale)}
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
            locale === "zh" ? "集成板卡" : locale === "es" ? "PLACAS INTEGRADAS" : "INTEGRATED BOARDS",
          titleLead,
          titleRest,
          tagline: board.tagline,
          description: board.description,
          image: board.image,
          imageAlt: board.imageAlt,
          highlights: board.highlights,
        }}
        specs={board.specs}
        features={board.features}
        applications={board.applications}
        cta={board.cta}
      />
    </div>
  );
}
