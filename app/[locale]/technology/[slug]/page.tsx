import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TechPlatformPanel from "@/sections/technology/TechPlatformPanel";
import IntelligentChargingPanel from "@/sections/technology/IntelligentChargingPanel";
import OemIntegrationPanel from "@/sections/technology/OemIntegrationPanel";
import PlugFreeDockingPanel from "@/sections/technology/PlugFreeDockingPanel";
import WirelessEnergyPlatformPanel from "@/sections/technology/WirelessEnergyPlatformPanel";
import { technologyPlatforms } from "@/lib/technology";
import { isLocale, type Locale } from "@/lib/i18n/config";
import {
  getIntelligentChargingPage,
  getOemIntegrationPage,
  getPlugFreeDockingPage,
  getTechnologyPlatformLocalized,
  getWirelessEnergyPlatformPage,
} from "@/lib/i18n/content";
import { site } from "@/lib/site";

type TechnologyPlatformPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return technologyPlatforms.map((platform) => ({ slug: platform.id }));
}

export async function generateMetadata({
  params,
}: TechnologyPlatformPageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const platform = getTechnologyPlatformLocalized(slug, locale);

  if (!platform) {
    return { title: "Technology Platform" };
  }

  const description =
    platform.id === "wireless-energy-platform"
      ? getWirelessEnergyPlatformPage(locale).description
      : platform.id === "intelligent-charging"
        ? `${getIntelligentChargingPage(locale).title} ${getIntelligentChargingPage(locale).description}`
        : platform.id === "plug-free-docking"
          ? getPlugFreeDockingPage(locale).description
          : getOemIntegrationPage(locale).description;

  return {
    title: `${platform.title} | SiCore Dynamics`,
    description,
    alternates: {
      canonical:
        locale === "zh"
          ? `${site.url}/zh/technology/${platform.id}`
          : `${site.url}/technology/${platform.id}`,
    },
  };
}

export default async function TechnologyPlatformPage({
  params,
}: TechnologyPlatformPageProps) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const platform = getTechnologyPlatformLocalized(slug, locale);

  if (!platform) {
    notFound();
  }

  return (
    <main>
      {platform.id === "wireless-energy-platform" ? (
        <WirelessEnergyPlatformPanel locale={locale} />
      ) : platform.id === "intelligent-charging" ? (
        <IntelligentChargingPanel locale={locale} />
      ) : platform.id === "plug-free-docking" ? (
        <PlugFreeDockingPanel locale={locale} />
      ) : platform.id === "oem-integration" ? (
        <OemIntegrationPanel locale={locale} />
      ) : (
        <TechPlatformPanel platform={platform} locale={locale} />
      )}
    </main>
  );
}
