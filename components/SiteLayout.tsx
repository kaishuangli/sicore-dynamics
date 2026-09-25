import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/components/cart/CartProvider";
import { refreshFolderImageManifestIfNeeded } from "@/lib/catalog/folder-images";
import type { Locale } from "@/lib/i18n/config";

export default function SiteLayout({
  children,
  locale,
}: Readonly<{ children: React.ReactNode; locale: Locale }>) {
  refreshFolderImageManifestIfNeeded();
  return (
    <CartProvider>
      <Navbar locale={locale} />
      {children}
      <Footer locale={locale} />
    </CartProvider>
  );
}
