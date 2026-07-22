import type { Locale } from "@/lib/i18n/config";
import { pickLocale } from "@/lib/i18n/pick-locale";

import { aboutPageMeta as aboutPageMetaEn, aboutSections as aboutSectionsEn } from "@/lib/about";
import { aboutPageMeta as aboutPageMetaZh, aboutSections as aboutSectionsZh } from "@/lib/i18n/zh/about";
import { aboutPageMeta as aboutPageMetaEs, aboutSections as aboutSectionsEs } from "@/lib/i18n/es/about";

import * as aboutSicoreEn from "@/lib/about-sicore";
import * as aboutSicoreZh from "@/lib/i18n/zh/about-sicore";
import * as aboutSicoreEs from "@/lib/i18n/es/about-sicore";

import * as agriEn from "@/lib/agricultural-automation";
import * as agriZh from "@/lib/i18n/zh/agricultural-automation";
import * as agriEs from "@/lib/i18n/es/agricultural-automation";

import {
  contactCountries as contactCountriesEn,
  contactFaqs as contactFaqsEn,
  contactIndustries as contactIndustriesEn,
  contactInfoSections as contactInfoSectionsEn,
  contactInquiryTypes as contactInquiryTypesEn,
  contactPageMeta as contactPageMetaEn,
} from "@/lib/contact";
import {
  contactCountries as contactCountriesZh,
  contactFaqs as contactFaqsZh,
  contactIndustries as contactIndustriesZh,
  contactInfoSections as contactInfoSectionsZh,
  contactInquiryTypes as contactInquiryTypesZh,
  contactPageMeta as contactPageMetaZh,
} from "@/lib/i18n/zh/contact";
import {
  contactCountries as contactCountriesEs,
  contactFaqs as contactFaqsEs,
  contactIndustries as contactIndustriesEs,
  contactInfoSections as contactInfoSectionsEs,
  contactInquiryTypes as contactInquiryTypesEs,
  contactPageMeta as contactPageMetaEs,
} from "@/lib/i18n/es/contact";

import {
  downloadCategories as downloadCategoriesEn,
  downloadFaqs as downloadFaqsEn,
  downloadFiles as downloadFilesEn,
  downloadNavLinks as downloadNavLinksEn,
  downloadPageMeta as downloadPageMetaEn,
} from "@/lib/downloads";
import {
  downloadCategories as downloadCategoriesZh,
  downloadFaqs as downloadFaqsZh,
  downloadFiles as downloadFilesZh,
  downloadNavLinks as downloadNavLinksZh,
  downloadPageMeta as downloadPageMetaZh,
} from "@/lib/i18n/zh/downloads";
import {
  downloadCategories as downloadCategoriesEs,
  downloadFaqs as downloadFaqsEs,
  downloadFiles as downloadFilesEs,
  downloadNavLinks as downloadNavLinksEs,
  downloadPageMeta as downloadPageMetaEs,
} from "@/lib/i18n/es/downloads";

import {
  industries as industriesEn,
  publicIndustries as publicIndustriesEn,
  solutionsFaqs as solutionsFaqsEn,
  solutionsLandingMeta as solutionsLandingMetaEn,
  solutionsPageMeta as solutionsPageMetaEn,
} from "@/lib/industries";
import {
  industries as industriesZh,
  publicIndustries as publicIndustriesZh,
  solutionsFaqs as solutionsFaqsZh,
  solutionsLandingMeta as solutionsLandingMetaZh,
  solutionsPageMeta as solutionsPageMetaZh,
} from "@/lib/i18n/zh/industries";
import {
  industries as industriesEs,
  publicIndustries as publicIndustriesEs,
  solutionsFaqs as solutionsFaqsEs,
  solutionsLandingMeta as solutionsLandingMetaEs,
  solutionsPageMeta as solutionsPageMetaEs,
} from "@/lib/i18n/es/industries";

import * as industryNewsEn from "@/lib/industry-news";
import * as industryNewsZh from "@/lib/i18n/zh/industry-news";
import * as industryNewsEs from "@/lib/i18n/es/industry-news";

import { intelligentChargingPage as intelligentChargingPageEn } from "@/lib/intelligent-charging";
import { intelligentChargingPage as intelligentChargingPageZh } from "@/lib/i18n/zh/intelligent-charging";
import { intelligentChargingPage as intelligentChargingPageEs } from "@/lib/i18n/es/intelligent-charging";

import * as investorEn from "@/lib/investor";
import * as investorZh from "@/lib/i18n/zh/investor";
import * as investorEs from "@/lib/i18n/es/investor";

import {
  knowledgeCategories as knowledgeCategoriesEn,
  knowledgePageMeta as knowledgePageMetaEn,
} from "@/lib/knowledge";
import {
  knowledgeCategories as knowledgeCategoriesZh,
  knowledgePageMeta as knowledgePageMetaZh,
} from "@/lib/i18n/zh/knowledge";
import {
  knowledgeCategories as knowledgeCategoriesEs,
  knowledgePageMeta as knowledgePageMetaEs,
} from "@/lib/i18n/es/knowledge";

import { oemIntegrationPage as oemIntegrationPageEn } from "@/lib/oem-integration";
import { oemIntegrationPage as oemIntegrationPageZh } from "@/lib/i18n/zh/oem-integration";
import { oemIntegrationPage as oemIntegrationPageEs } from "@/lib/i18n/es/oem-integration";

import { plugFreeDockingPage as plugFreeDockingPageEn } from "@/lib/plug-free-docking";
import { plugFreeDockingPage as plugFreeDockingPageZh } from "@/lib/i18n/zh/plug-free-docking";
import { plugFreeDockingPage as plugFreeDockingPageEs } from "@/lib/i18n/es/plug-free-docking";

import * as product60En from "@/lib/product-60w-stealth";
import * as product60Zh from "@/lib/i18n/zh/product-60w-stealth";
import * as product60Es from "@/lib/i18n/es/product-60w-stealth";
import * as product200En from "@/lib/product-200w";
import * as product200Zh from "@/lib/i18n/zh/product-200w";
import * as product200Es from "@/lib/i18n/es/product-200w";
import * as product800En from "@/lib/product-800w";
import * as product800Zh from "@/lib/i18n/zh/product-800w";
import * as product800Es from "@/lib/i18n/es/product-800w";
import * as product1500En from "@/lib/product-1500w";
import * as product1500Zh from "@/lib/i18n/zh/product-1500w";
import * as product1500Es from "@/lib/i18n/es/product-1500w";
import * as product3000En from "@/lib/product-3000w";
import * as product3000Zh from "@/lib/i18n/zh/product-3000w";
import * as product3000Es from "@/lib/i18n/es/product-3000w";

import {
  productTiers as productTiersEn,
  productsPageMeta as productsPageMetaEn,
} from "@/lib/products";
import {
  productTiers as productTiersZh,
  productsPageMeta as productsPageMetaZh,
} from "@/lib/i18n/zh/products";
import {
  productTiers as productTiersEs,
  productsPageMeta as productsPageMetaEs,
} from "@/lib/i18n/es/products";

import { getSolutionFaqs as getSolutionFaqsEn } from "@/lib/solution-faqs";
import { getSolutionFaqs as getSolutionFaqsZh } from "@/lib/i18n/zh/solution-faqs";
import { getSolutionFaqs as getSolutionFaqsEs } from "@/lib/i18n/es/solution-faqs";

import * as solutionProductsEn from "@/lib/solution-products";
import * as solutionProductsZh from "@/lib/i18n/zh/solution-products";
import * as solutionProductsEs from "@/lib/i18n/es/solution-products";

import { getSolutionWhyWireless as getSolutionWhyWirelessEn } from "@/lib/solution-why-wireless";
import { getSolutionWhyWireless as getSolutionWhyWirelessZh } from "@/lib/i18n/zh/solution-why-wireless";
import { getSolutionWhyWireless as getSolutionWhyWirelessEs } from "@/lib/i18n/es/solution-why-wireless";

import {
  aiPowerTopics as aiPowerTopicsEn,
  chargingStations as chargingStationsEn,
  engineeringCapabilities as engineeringCapabilitiesEn,
  powerElectronicsFeatures as powerElectronicsFeaturesEn,
  technologyAdvantages as technologyAdvantagesEn,
  technologyPageMeta as technologyPageMetaEn,
  technologyPlatforms as technologyPlatformsEn,
  technologyPortfolio as technologyPortfolioEn,
  wirelessFeatures as wirelessFeaturesEn,
} from "@/lib/technology";
import {
  aiPowerTopics as aiPowerTopicsZh,
  chargingStations as chargingStationsZh,
  engineeringCapabilities as engineeringCapabilitiesZh,
  powerElectronicsFeatures as powerElectronicsFeaturesZh,
  technologyAdvantages as technologyAdvantagesZh,
  technologyPageMeta as technologyPageMetaZh,
  technologyPlatforms as technologyPlatformsZh,
  technologyPortfolio as technologyPortfolioZh,
  wirelessFeatures as wirelessFeaturesZh,
} from "@/lib/i18n/zh/technology";
import {
  aiPowerTopics as aiPowerTopicsEs,
  chargingStations as chargingStationsEs,
  engineeringCapabilities as engineeringCapabilitiesEs,
  powerElectronicsFeatures as powerElectronicsFeaturesEs,
  technologyAdvantages as technologyAdvantagesEs,
  technologyPageMeta as technologyPageMetaEs,
  technologyPlatforms as technologyPlatformsEs,
  technologyPortfolio as technologyPortfolioEs,
  wirelessFeatures as wirelessFeaturesEs,
} from "@/lib/i18n/es/technology";

import * as uavEn from "@/lib/uav-contact-dock";
import * as uavZh from "@/lib/i18n/zh/uav-contact-dock";
import * as uavEs from "@/lib/i18n/es/uav-contact-dock";

import { wirelessEnergyPlatformPage as wirelessEnergyPlatformPageEn } from "@/lib/wireless-energy-platform";
import { wirelessEnergyPlatformPage as wirelessEnergyPlatformPageZh } from "@/lib/i18n/zh/wireless-energy-platform";
import { wirelessEnergyPlatformPage as wirelessEnergyPlatformPageEs } from "@/lib/i18n/es/wireless-energy-platform";

export function getOemIntegrationPage(locale: Locale) {
  return pickLocale(oemIntegrationPageEn, oemIntegrationPageZh, locale, oemIntegrationPageEs);
}

export function getIntelligentChargingPage(locale: Locale) {
  return pickLocale(intelligentChargingPageEn, intelligentChargingPageZh, locale, intelligentChargingPageEs);
}

export function getPlugFreeDockingPage(locale: Locale) {
  return pickLocale(plugFreeDockingPageEn, plugFreeDockingPageZh, locale, plugFreeDockingPageEs);
}

export function getWirelessEnergyPlatformPage(locale: Locale) {
  return pickLocale(wirelessEnergyPlatformPageEn, wirelessEnergyPlatformPageZh, locale, wirelessEnergyPlatformPageEs);
}

export function getTechnologyPlatforms(locale: Locale) {
  return pickLocale(technologyPlatformsEn, technologyPlatformsZh, locale, technologyPlatformsEs);
}

export function getTechnologyPortfolio(locale: Locale) {
  return pickLocale(technologyPortfolioEn, technologyPortfolioZh, locale, technologyPortfolioEs);
}

export function getTechnologyPageMeta(locale: Locale) {
  return pickLocale(technologyPageMetaEn, technologyPageMetaZh, locale, technologyPageMetaEs);
}

export function getTechnologyExtras(locale: Locale) {
  return {
    wirelessFeatures: pickLocale(wirelessFeaturesEn, wirelessFeaturesZh, locale, wirelessFeaturesEs),
    chargingStations: pickLocale(chargingStationsEn, chargingStationsZh, locale, chargingStationsEs),
    aiPowerTopics: pickLocale(aiPowerTopicsEn, aiPowerTopicsZh, locale, aiPowerTopicsEs),
    powerElectronicsFeatures: pickLocale(
      powerElectronicsFeaturesEn,
      powerElectronicsFeaturesZh,
      locale,
      powerElectronicsFeaturesEs,
    ),
    engineeringCapabilities: pickLocale(
      engineeringCapabilitiesEn,
      engineeringCapabilitiesZh,
      locale,
      engineeringCapabilitiesEs,
    ),
    technologyAdvantages: pickLocale(technologyAdvantagesEn, technologyAdvantagesZh, locale, technologyAdvantagesEs),
  };
}

export function getTechnologyPlatformLocalized(id: string, locale: Locale) {
  return getTechnologyPlatforms(locale).find((platform) => platform.id === id);
}

export function getIndustriesBundle(locale: Locale) {
  return {
    industries: pickLocale(industriesEn, industriesZh, locale, industriesEs),
    publicIndustries: pickLocale(publicIndustriesEn, publicIndustriesZh, locale, publicIndustriesEs),
    solutionsLandingMeta: pickLocale(solutionsLandingMetaEn, solutionsLandingMetaZh, locale, solutionsLandingMetaEs),
    solutionsFaqs: pickLocale(solutionsFaqsEn, solutionsFaqsZh, locale, solutionsFaqsEs),
    solutionsPageMeta: pickLocale(solutionsPageMetaEn, solutionsPageMetaZh, locale, solutionsPageMetaEs),
  };
}

export function getIndustryBySlugLocalized(slug: string, locale: Locale) {
  return getIndustriesBundle(locale).industries.find((item) => item.id === slug);
}

/** A single industry entry from either the English or Chinese industries content. */
export type LocalizedIndustry = NonNullable<ReturnType<typeof getIndustryBySlugLocalized>>;

export function getKnowledgeCategories(locale: Locale) {
  return pickLocale(knowledgeCategoriesEn, knowledgeCategoriesZh, locale, knowledgeCategoriesEs);
}

export function getKnowledgePageMeta(locale: Locale) {
  return pickLocale(knowledgePageMetaEn, knowledgePageMetaZh, locale, knowledgePageMetaEs);
}

export function getContactBundle(locale: Locale) {
  return {
    contactInquiryTypes: pickLocale(contactInquiryTypesEn, contactInquiryTypesZh, locale, contactInquiryTypesEs),
    contactInfoSections: pickLocale(contactInfoSectionsEn, contactInfoSectionsZh, locale, contactInfoSectionsEs),
    contactIndustries: pickLocale(contactIndustriesEn, contactIndustriesZh, locale, contactIndustriesEs),
    contactCountries: pickLocale(contactCountriesEn, contactCountriesZh, locale, contactCountriesEs),
    contactPageMeta: pickLocale(contactPageMetaEn, contactPageMetaZh, locale, contactPageMetaEs),
    contactFaqs: pickLocale(contactFaqsEn, contactFaqsZh, locale, contactFaqsEs),
  };
}

export function getDownloadsBundle(locale: Locale) {
  return {
    downloadCategories: pickLocale(downloadCategoriesEn, downloadCategoriesZh, locale, downloadCategoriesEs),
    downloadFiles: pickLocale(downloadFilesEn, downloadFilesZh, locale, downloadFilesEs),
    downloadNavLinks: pickLocale(downloadNavLinksEn, downloadNavLinksZh, locale, downloadNavLinksEs),
    downloadPageMeta: pickLocale(downloadPageMetaEn, downloadPageMetaZh, locale, downloadPageMetaEs),
    downloadFaqs: pickLocale(downloadFaqsEn, downloadFaqsZh, locale, downloadFaqsEs),
  };
}

export function getAboutSections(locale: Locale) {
  return pickLocale(aboutSectionsEn, aboutSectionsZh, locale, aboutSectionsEs);
}

export function getAboutPageMeta(locale: Locale) {
  return pickLocale(aboutPageMetaEn, aboutPageMetaZh, locale, aboutPageMetaEs);
}

export function getAboutSicoreBundle(locale: Locale) {
  if (locale === "zh") return aboutSicoreZh;
  if (locale === "es") return aboutSicoreEs;
  return aboutSicoreEn;
}

export function getInvestorBundle(locale: Locale) {
  if (locale === "zh") return investorZh;
  if (locale === "es") return investorEs;
  return investorEn;
}

export function getIndustryNewsBundle(locale: Locale) {
  if (locale === "zh") return industryNewsZh;
  if (locale === "es") return industryNewsEs;
  return industryNewsEn;
}

export function getProductTiers(locale: Locale) {
  return pickLocale(productTiersEn, productTiersZh, locale, productTiersEs);
}

export function getProductsPageMeta(locale: Locale) {
  return pickLocale(productsPageMetaEn, productsPageMetaZh, locale, productsPageMetaEs);
}

export function getProduct60w(locale: Locale) {
  if (locale === "zh") return product60Zh;
  if (locale === "es") return product60Es;
  return product60En;
}

export function getProduct200w(locale: Locale) {
  if (locale === "zh") return product200Zh;
  if (locale === "es") return product200Es;
  return product200En;
}

export function getProduct800w(locale: Locale) {
  if (locale === "zh") return product800Zh;
  if (locale === "es") return product800Es;
  return product800En;
}

export function getProduct1500w(locale: Locale) {
  if (locale === "zh") return product1500Zh;
  if (locale === "es") return product1500Es;
  return product1500En;
}

export function getProduct3000w(locale: Locale) {
  if (locale === "zh") return product3000Zh;
  if (locale === "es") return product3000Es;
  return product3000En;
}

export function getSolutionFaqsForIndustry(
  id: Parameters<typeof getSolutionFaqsEn>[0],
  locale: Locale,
) {
  if (locale === "zh") return getSolutionFaqsZh(id);
  if (locale === "es") return getSolutionFaqsEs(id);
  return getSolutionFaqsEn(id);
}

export function getSolutionWhyWirelessForIndustry(
  id: Parameters<typeof getSolutionWhyWirelessEn>[0],
  locale: Locale,
) {
  if (locale === "zh") return getSolutionWhyWirelessZh(id);
  if (locale === "es") return getSolutionWhyWirelessEs(id);
  return getSolutionWhyWirelessEn(id);
}

export function getSolutionProductsBundle(locale: Locale) {
  if (locale === "zh") return solutionProductsZh;
  if (locale === "es") return solutionProductsEs;
  return solutionProductsEn;
}

export function getAgriculturalAutomationBundle(locale: Locale) {
  if (locale === "zh") return agriZh;
  if (locale === "es") return agriEs;
  return agriEn;
}

export function getUavContactDockBundle(locale: Locale) {
  if (locale === "zh") return uavZh;
  if (locale === "es") return uavEs;
  return uavEn;
}
