import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WirelessEnergyTopicPage from "@/sections/technology/WirelessEnergyTopicPage";
import {
  getWirelessEnergyTopic,
  wirelessEnergyPlatformTopics,
} from "@/lib/wireless-energy-platform-topics";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";
import { site } from "@/lib/site";

type TopicPageProps = {
  params: Promise<{ locale: string; topic: string }>;
};

export function generateStaticParams() {
  return wirelessEnergyPlatformTopics.map((topic) => ({ topic: topic.id }));
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { locale: rawLocale, topic: topicId } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const topic = getWirelessEnergyTopic(topicId, locale);
  const platformLabel =
    locale === "zh"
      ? "无线能量平台"
      : locale === "es"
        ? "Plataforma de energía inalámbrica"
        : "Wireless Energy Platform";

  if (!topic) {
    return {
      title:
        locale === "zh"
          ? "无线能量平台主题"
          : locale === "es"
            ? "Tema de plataforma de energía inalámbrica"
            : "Wireless Energy Platform Topic",
    };
  }

  return {
    title: `${topic.title} | ${platformLabel} | SiCore Dynamics`,
    description: topic.description,
    alternates: {
      canonical: `${site.url}${withLocale(topic.href, locale)}`,
    },
  };
}

export default async function WirelessEnergyTopicRoute({ params }: TopicPageProps) {
  const { locale: rawLocale, topic: topicId } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const topic = getWirelessEnergyTopic(topicId, locale);

  if (!topic) {
    notFound();
  }

  return <WirelessEnergyTopicPage topic={topic} locale={locale} />;
}
