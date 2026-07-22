import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

type LearnMoreLinkProps = {
  href: string;
  locale?: Locale;
  className?: string;
};

export default function LearnMoreLink({ href, locale = "en", className }: LearnMoreLinkProps) {
  return (
    <Link
      href={href}
      className={
        className ??
        "mt-4 inline-flex text-sm font-bold text-[#0B5FFF] transition hover:text-[#0847cc]"
      }
    >
      {locale === "zh" ? "了解更多" : locale === "es" ? "Más información" : "Learn more"}{" "}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
