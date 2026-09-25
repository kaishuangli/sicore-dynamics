import { dockingProducts as productsEn } from "@/lib/docking-products";

const labels: Record<string, { label: string; tagline: string }> = {
  "pogo-pin-charging-dock": {
    label: "Muelle Pogo Pin",
    tagline: "Pines de resorte compactos para carga precisa y repetible.",
  },
  "spring-contact-charging-dock": {
    label: "Muelle de contacto elástico",
    tagline: "Contactos elásticos para acoplamiento fiable de alto ciclo.",
  },
  "contact-pad-charging-dock": {
    label: "Muelle de almohadilla de contacto",
    tagline: "Almohadillas de alta corriente para carga industrial y robótica.",
  },
  "connector-charging-dock": {
    label: "Muelle con conector",
    tagline: "Conectores de acoplamiento positivo para potencia y señal opcional.",
  },
  "wireless-charging-dock": {
    label: "Muelle de carga inalámbrica",
    tagline: "Transferencia de energía sin contacto para sistemas sellados y autónomos.",
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
