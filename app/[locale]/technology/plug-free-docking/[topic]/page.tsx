import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PlugFreeDockingTopicPage from "@/sections/technology/PlugFreeDockingTopicPage";
import {
  getPlugFreeDockingTopic,
  plugFreeDockingTopics,
} from "@/lib/plug-free-docking-topics";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";
import { site } from "@/lib/site";

type TopicPageProps = {
  params: Promise<{ locale: string; topic: string }>;
};

export function generateStaticParams() {
  return plugFreeDockingTopics.map((topic) => ({ topic: topic.id }));
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { locale: rawLocale, topic: topicId } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const topic = getPlugFreeDockingTopic(topicId, locale);
  const platformLabel =
    locale === "zh"
      ? "对接技术"
      : locale === "es"
        ? "Docking Technology"
        : "Docking Technology";

  if (!topic) {
    return {
      title:
        locale === "zh"
          ? "无插拔对接主题"
          : locale === "es"
            ? "Tema de acoplamiento sin enchufe"
            : "Plug-Free Docking Topic",
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

export default async function PlugFreeDockingTopicRoute({ params }: TopicPageProps) {
  const { locale: rawLocale, topic: topicId } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const topic = getPlugFreeDockingTopic(topicId, locale);

  if (!topic) {
    notFound();
  }

  return <PlugFreeDockingTopicPage topic={topic} locale={locale} />;
}
