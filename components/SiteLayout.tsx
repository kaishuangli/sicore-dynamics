import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Locale } from "@/lib/i18n/config";

export default function SiteLayout({
  children,
  locale,
}: Readonly<{ children: React.ReactNode; locale: Locale }>) {
  return (
    <>
      <Navbar locale={locale} />
      {children}
      <Footer locale={locale} />
    </>
  );
}
