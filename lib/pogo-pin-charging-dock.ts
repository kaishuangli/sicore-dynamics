export const pogoPinChargingDockPage = {
  model: "SC-PD10",
  title: "Compact Pogo Pin Charging Dock",
  tagline: "Reliable power. Minimal footprint.",
  description:
    "A compact charging dock with spring-loaded pogo pins, designed for handheld medical devices, scanners and portable instruments.",
  heroImage: "/images/products/docking/pogo-pin-charging-dock.png",
  heroImageAlt: "SC-PD10 compact pogo pin charging dock",
  highlights: [
    { title: "Pogo Pin", text: "Reliable Connection", icon: "pin" as const },
    { title: "Safe Charging", text: "Over-current Protection", icon: "safe" as const },
    { title: "Compact Design", text: "Space-saving Footprint", icon: "compact" as const },
    { title: "USB Type-C", text: "Easy to Power", icon: "usb" as const },
  ],
  performance: {
    title: "Small Size. Big Performance.",
    body: "Engineered for daily use in medical and industrial environments where space, reliability and hygiene matter.",
    image: "/images/products/docking/sc-pd10-in-use.png",
    imageAlt: "Handheld instrument seated in the SC-PD10 charging dock",
    points: [
      "Spring-loaded pogo pins ensure stable electrical contact.",
      "Over-current, over-voltage and short-circuit protection.",
      "Durable ABS housing with anti-slip base.",
    ],
  },
  devices: {
    title: "Designed for Handheld Devices",
    intro: "Ideal charging solution for a wide range of portable equipment.",
    moreLabel: "And More",
    items: [
      {
        title: "Medical Thermometers",
        image: "/images/products/docking/sc-pd10-thermometer.png",
        imageAlt: "Medical thermometer charging in the SC-PD10 dock",
      },
      {
        title: "Barcode Scanners",
        image: "/images/products/docking/sc-pd10-scanner.png",
        imageAlt: "Barcode scanner charging in the SC-PD10 dock",
      },
      {
        title: "Portable Instruments",
        image: "/images/products/docking/sc-pd10-instrument.png",
        imageAlt: "Portable instrument charging in the SC-PD10 dock",
      },
      {
        title: "Mobile Data Terminals",
        image: "/images/products/docking/sc-pd10-terminal.png",
        imageAlt: "Mobile data terminal charging in the SC-PD10 dock",
      },
    ],
  },
  specsTitle: "Specifications",
  specs: [
    { label: "Input", value: "5V⎓2A (USB Type-C)", icon: "power" as const },
    { label: "Output", value: "5V⎓2A (Pogo Pin)", icon: "output" as const },
    { label: "Contact Resistance", value: "≤ 30 mΩ", icon: "gauge" as const },
    { label: "Operating Temp", value: "-20°C ~ 60°C", icon: "temp" as const },
    { label: "Protection", value: "Over-current / Over-voltage / Short-circuit", icon: "safe" as const },
    { label: "Mechanical Life", value: "≥ 50,000 cycles", icon: "life" as const },
  ],
  dimensionsTitle: "Dimensions",
  dimensions: [
    { id: "front" as const, label: "Front View", width: "70 mm", height: "38 mm" },
    { id: "side" as const, label: "Side View", depth: "46 mm", height: "38 mm" },
    { id: "back" as const, label: "Back View" },
    { id: "top" as const, label: "Top View" },
    { id: "bottom" as const, label: "Bottom View" },
  ],
  applicationsTitle: "Applications",
  applications: [
    {
      title: "Hospitals & Clinics",
      image: "/images/products/docking/app-hospital.jpg",
      imageAlt: "Clean hospital examination room",
    },
    {
      title: "Laboratories",
      image: "/images/products/docking/app-laboratory.jpg",
      imageAlt: "Laboratory technician at a clean bench",
    },
    {
      title: "Pharmacies",
      image: "/images/products/docking/app-pharmacy.jpg",
      imageAlt: "Pharmacist reviewing medication",
    },
    {
      title: "Warehousing & Logistics",
      image: "/images/products/docking/app-warehouse.jpg",
      imageAlt: "Warehouse aisle and inventory racks",
    },
    {
      title: "Field Services",
      image: "/images/products/docking/app-field.jpg",
      imageAlt: "Field technicians reviewing work on site",
    },
  ],
  cta: {
    title: "Reliable Charging. Every Time.",
    description:
      "The SC-PD10 pogo pin charging dock delivers stable power in a compact form factor—perfect for modern healthcare, industrial and mobile applications.",
    button: "Contact Us",
  },
} as const;

export type PogoPinChargingDockPage = typeof pogoPinChargingDockPage;
