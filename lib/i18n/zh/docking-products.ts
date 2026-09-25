import { dockingProducts as productsEn } from "@/lib/docking-products";

const labels: Record<string, { label: string; tagline: string }> = {
  "pogo-pin-charging-dock": {
    label: "Pogo Pin 充电坞",
    tagline: "紧凑弹簧顶针，精确、可重复充电。",
  },
  "spring-contact-charging-dock": {
    label: "弹簧触点充电坞",
    tagline: "弹性弹簧触点，可靠高循环对接。",
  },
  "contact-pad-charging-dock": {
    label: "接触垫充电坞",
    tagline: "坚固大电流触片，面向工业与机器人充电。",
  },
  "connector-charging-dock": {
    label: "连接器充电坞",
    tagline: "正向配合连接器，可靠供电并可选信号传输。",
  },
  "wireless-charging-dock": {
    label: "无线充电坞",
    tagline: "非接触电能传输，适用于密封与自主系统。",
  },
};

export const dockingProducts = productsEn.map((item) => {
  const copy = labels[item.id];
  return {
    ...item,
    label: copy?.label ?? item.label,
    tagline: copy?.tagline ?? item.tagline,
  };
});
