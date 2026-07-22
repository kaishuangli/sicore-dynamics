export const locales = ["en", "zh", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/**
 * When false, Chinese is hidden from the language switcher and `/zh` redirects to English.
 * Chinese content/routes remain in the codebase — set to true to re-enable.
 */
export const chineseLocaleEnabled = false;

/** Publicly selectable locales in the language switcher. */
export function getSelectableLocales(): Locale[] {
  const options: Locale[] = ["en", "es"];
  if (chineseLocaleEnabled) options.splice(1, 0, "zh");
  return options;
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localeHtmlLang(locale: Locale): string {
  if (locale === "zh") return "zh-CN";
  if (locale === "es") return "es";
  return "en";
}

export function localePrefix(locale: Locale): string {
  if (locale === defaultLocale || locale === "en") return "";
  return `/${locale}`;
}
