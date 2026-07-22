"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getAboutSectionFromHash, type AboutSectionId } from "@/lib/about";
import type { Locale } from "@/lib/i18n/config";
import { getAboutSections } from "@/lib/i18n/content";
import { withLocale } from "@/lib/i18n/path";
import AboutPanel from "@/sections/about/AboutPanel";
import AboutSicorePanel from "@/sections/about/AboutSicorePanel";

export default function AboutTabPanels({ locale }: { locale: Locale }) {
  const [activeSection, setActiveSection] = useState<AboutSectionId>("about-sicore");
  const panelRef = useRef<HTMLDivElement>(null);
  const aboutSections = getAboutSections(locale);

  const syncFromHash = useCallback(() => {
    const section = getAboutSectionFromHash(window.location.hash);
    if (section && section !== "investor-opportunity" && section !== "news") {
      setActiveSection(section);
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");

    // Legacy hashes → dedicated pages
    if (hash === "investor-opportunity") {
      window.location.replace(withLocale("/about/investor", locale));
      return;
    }
    if (hash === "news") {
      window.location.replace(withLocale("/about/news", locale));
      return;
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [syncFromHash, locale]);

  useEffect(() => {
    if (!window.location.hash) return;
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeSection]);

  const section =
    aboutSections.find((item) => item.id === activeSection) ?? aboutSections[0];

  return (
    <div ref={panelRef} className="scroll-mt-[190px] bg-white">
      {activeSection === "about-sicore" ? (
        <AboutSicorePanel locale={locale} />
      ) : (
        <AboutPanel section={section} locale={locale} />
      )}
    </div>
  );
}
