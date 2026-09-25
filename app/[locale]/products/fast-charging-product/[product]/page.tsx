import { notFound, redirect } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";

type PageProps = {
  params: Promise<{ locale: string; product: string }>;
};

export default async function LegacyFastChargingProductRedirect({ params }: PageProps) {
  const { locale: rawLocale, product } = await params;
  if (!isLocale(rawLocale)) notFound();
  redirect(withLocale(`/products/ev-charging-gun/${product}`, rawLocale));
}
