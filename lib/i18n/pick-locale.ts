import type { Locale } from "@/lib/i18n/config";

/**
 * Pick content for the active locale.
 * Type parameters are inferred independently so `as const` literal types
 * from each language pack don't collide during inference.
 */
export function pickLocale<A, B, C = A>(en: A, zh: B, locale: Locale, es?: C): A | B | C {
  if (locale === "zh") return zh;
  if (locale === "es") return (es ?? en) as A | B | C;
  return en;
}

/** UI chrome: zh / es / en ternary chain for inline labels. */
export function uiLabel(locale: Locale, zh: string, es: string, en: string): string {
  return locale === "zh" ? zh : locale === "es" ? es : en;
}
