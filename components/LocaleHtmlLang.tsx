"use client";

import { useEffect } from "react";
import { localeHtmlLang, type Locale } from "@/lib/i18n/config";

export default function LocaleHtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = localeHtmlLang(locale);
  }, [locale]);

  return null;
}
