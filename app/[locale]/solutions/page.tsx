import { redirect } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";

type SolutionsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function SolutionsPage({ params }: SolutionsPageProps) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  redirect(locale === "zh" ? "/zh/#solutions" : "/#solutions");
}
