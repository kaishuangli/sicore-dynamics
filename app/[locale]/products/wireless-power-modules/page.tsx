import { redirect } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function WirelessPowerModulesIndexPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    redirect("/products/wireless-power-modules/200w");
  }

  redirect(withLocale("/products/wireless-power-modules/200w", raw));
}
