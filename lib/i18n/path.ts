import { defaultLocale, isLocale, localePrefix, type Locale } from "@/lib/i18n/config";

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment && isLocale(segment)) return segment;
  return defaultLocale;
}

export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/");
  if (segments[1] && isLocale(segments[1])) {
    const rest = segments.slice(2).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

/** Prefix internal hrefs with /zh or /es. English keeps unprefixed URLs. */
export function withLocale(href: string, locale: Locale): string {
  if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }

  const prefix = localePrefix(locale);

  if (href.startsWith("#")) {
    return prefix ? `${prefix}${href}` : href;
  }

  const [rawPath, hash] = href.split("#");
  const path = rawPath || "/";
  const suffix = hash ? `#${hash}` : "";

  if (!prefix) {
    return `${path}${suffix}`;
  }

  if (path === "/") {
    return `${prefix}${suffix}`;
  }

  return `${prefix}${path.startsWith("/") ? path : `/${path}`}${suffix}`;
}

export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  const bare = stripLocaleFromPathname(pathname);
  return withLocale(bare, nextLocale);
}
