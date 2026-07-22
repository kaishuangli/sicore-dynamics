import { notFound } from "next/navigation";
import LocaleHtmlLang from "@/components/LocaleHtmlLang";
import SiteLayout from "@/components/SiteLayout";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: raw } = await params;

  if (!isLocale(raw)) {
    notFound();
  }

  const locale = raw as Locale;

  return (
    <>
      <LocaleHtmlLang locale={locale} />
      <SiteLayout locale={locale}>{children}</SiteLayout>
    </>
  );
}
