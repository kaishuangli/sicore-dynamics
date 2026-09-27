import type { Locale } from "@/lib/i18n/config";
import { productNavLinks } from "@/lib/products";

export const productCategoryCards = [
  {
    id: "wireless-power-modules",
    image: "/images/products/wireless-power-modules/homepage-wireless-module.png",
    imageAlt: "200W wireless charging module and coil",
    description:
      "60W to 3000W wireless power modules for robots, AGVs, drones, and industrial platforms.",
    zh: "覆盖 60W 至 3000W 的无线功率模块，适用于机器人、AGV、无人机与工业平台。",
    es: "Módulos de potencia inalámbrica de 60 W a 3000 W para robots, AGV, drones y plataformas industriales.",
  },
  {
    id: "integrated-boards",
    image: "/images/products/integrated-boards/bmg800/BMG800_Gateway_With_Antenna_HD.png",
    imageAlt: "Industrial edge gateway board",
    description: "Controller, power, communication, and diagnostic boards for OEM integration.",
    zh: "面向 OEM 集成的控制器、电源、通信与诊断板卡。",
    es: "Placas de control, potencia, comunicación y diagnóstico para integración OEM.",
  },
  {
    id: "autonomous-software",
    image: "/images/products/autonomous-software/charging-management-system.jpg",
    imageAlt: "Charging management software screen",
    description: "Fleet charging, scheduling, and dock control software for autonomous machines.",
    zh: "面向自主设备的车队充电、调度与充电坞控制软件。",
    es: "Software de carga de flotas, programación y control de docks para máquinas autónomas.",
  },
  {
    id: "docking",
    image: "/images/products/docking/homepage-docking.png",
    imageAlt: "Docking charger beside an autonomous mobile robot",
    description: "Contact and wireless docking systems for repeatable autonomous charging.",
    zh: "用于可重复自主充电的接触式与无线对接系统。",
    es: "Sistemas de acoplamiento por contacto e inalámbricos para carga autónoma repetible.",
  },
  {
    id: "consumer-oriented-products",
    image: "/images/products/consumer-oriented-products/homepage-consumer.png",
    imageAlt: "Desk power panel with wireless charging, USB, HDMI, and network ports",
    description: "Consumer electronics, medical, furniture, DC-DC modules, and component wireless chargers.",
    zh: "覆盖消费电子、医疗、家具、DC-DC 模块与元器件的无线充电产品。",
    es: "Cargadores inalámbricos para electrónica de consumo, médico, mobiliario, módulos DC-DC y componentes.",
  },
  {
    id: "ev-charging-gun",
    image: "/images/products/ev-charging-gun/AC EV Chargers/1/1.png",
    imageAlt: "AC EV charging station",
    description: "AC and DC EV charging guns for vehicles and charging stations.",
    zh: "面向车辆与充电场景的交流、直流电动汽车充电枪。",
    es: "Pistolas de carga EV de CA y CC para vehículos y estaciones de carga.",
  },
] as const;

export function getProductCategoryCard(id: string) {
  return productCategoryCards.find((item) => item.id === id);
}

export function getProductCategoryDescription(id: string, locale: Locale) {
  const card = getProductCategoryCard(id);
  if (!card) return "";
  if (locale === "zh") return card.zh;
  if (locale === "es") return card.es;
  return card.description;
}

export function getProductCategoryHref(id: string) {
  return productNavLinks.find((item) => item.id === id)?.href ?? `/products/${id}`;
}
