import { notFound, redirect } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
};

export default async function LegacyFastChargingRedirect({ params, searchParams }: PageProps) {
  const { locale: rawLocale } = await params;
  const { category } = await searchParams;
  if (!isLocale(rawLocale)) notFound();
  const qs = category ? `?category=${encodeURIComponent(category)}` : "";
  redirect(withLocale(`/products/ev-charging-gun${qs}`, rawLocale));
}
