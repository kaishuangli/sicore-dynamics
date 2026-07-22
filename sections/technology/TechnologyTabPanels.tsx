"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TechPurpose from "@/sections/technology/TechPurpose";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";
import { technologyHashRedirects } from "@/lib/technology";

export default function TechnologyTabPanels({ locale }: { locale: Locale }) {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash || hash === "purpose") return;

    const target = technologyHashRedirects[hash];
    if (target) {
      router.replace(withLocale(`/technology/${target}`, locale));
    }
  }, [router, locale]);

  return (
    <div className="min-h-[480px] scroll-mt-[190px] bg-white">
      <TechPurpose locale={locale} />
    </div>
  );
}
