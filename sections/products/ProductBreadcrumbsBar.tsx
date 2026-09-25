"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocale } from "@/lib/i18n/path";
import {
  integratedBoardCategories as integratedBoardCategoriesEn,
  integratedBoards as integratedBoardsEn,
} from "@/lib/integrated-boards";
import {
  integratedBoardCategories as integratedBoardCategoriesEs,
  integratedBoards as integratedBoardsEs,
} from "@/lib/i18n/es/integrated-boards";
import {
  integratedBoardCategories as integratedBoardCategoriesZh,
  integratedBoards as integratedBoardsZh,
} from "@/lib/i18n/zh/integrated-boards";
import { productTiers, wirelessLowPowerTier } from "@/lib/products";

function humanizeSlug(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function resolveSegmentLabel(segment: string, locale: Locale) {
  const dict = getDictionary(locale);
  const nav = dict.navProducts as Record<string, string>;

  if (segment in nav) return nav[segment];

  if (segment === wirelessLowPowerTier.id) {
    return locale === "zh" ? "30W 及以下" : locale === "es" ? "30W o menos" : wirelessLowPowerTier.label;
  }

  const tier = productTiers.find((item) => item.id === segment);
  if (tier) return tier.label;

  const boardCategories =
    locale === "zh"
      ? integratedBoardCategoriesZh
      : locale === "es"
        ? integratedBoardCategoriesEs
        : integratedBoardCategoriesEn;
  const boards =
    locale === "zh" ? integratedBoardsZh : locale === "es" ? integratedBoardsEs : integratedBoardsEn;
  const boardCategory = boardCategories.find((item) => item.id === segment);
  if (boardCategory) return boardCategory.label;

  const board = boards.find((item) => item.id === segment);
  if (board) return board.label;

  return humanizeSlug(segment);
}

export default function ProductBreadcrumbsBar() {
  const pathname = usePathname() || "";
  const params = useParams();
  const rawLocale = typeof params?.locale === "string" ? params.locale : "en";
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDictionary(locale);
  const L = (href: string) => withLocale(href, locale);

  const normalized = pathname.replace(/^\/(zh|es)(?=\/|$)/, "") || "/";
  const parts = normalized.split("/").filter(Boolean);

  if (parts[0] !== "products") return null;

  const crumbs: { label: string; href?: string }[] = [
    { label: locale === "zh" ? "首页" : locale === "es" ? "Inicio" : "Home", href: "/" },
    {
      label: dict.nav.products,
      href: parts.length > 1 ? "/products" : undefined,
    },
  ];

  let href = "/products";
  for (let i = 1; i < parts.length; i += 1) {
    const segment = parts[i]!;
    href += `/${segment}`;
    const isLast = i === parts.length - 1;
    crumbs.push({
      label: resolveSegmentLabel(segment, locale),
      href: isLast ? undefined : href,
    });
  }

  return (
    <div className="border-b border-slate-200/80 bg-[#F7F9FC]">
      <div className="container-page py-3.5">
        <nav
          aria-label="Breadcrumb"
          className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7C8F]"
        >
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <span key={`${crumb.label}-${index}`}>
                {index > 0 ? <span className="mx-2 text-[#9AA8B5]">/</span> : null}
                {crumb.href && !isLast ? (
                  <Link href={L(crumb.href)} className="transition hover:text-[#0B5FFF]">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#5A6A7A]">{crumb.label}</span>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
