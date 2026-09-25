import { redirect } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function OemIndexPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) redirect("/oem/why-sicore");
  redirect(withLocale("/oem/why-sicore", raw));
}
