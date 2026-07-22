import { site } from "@/lib/site";

export const contactInquiryTypes = [
  "OEM 开发",
  "技术支持",
  "销售咨询",
  "合作伙伴",
  "其他",
] as const;

export type ContactLinkItem = {
  label: string;
  value: string;
  href?: string;
};

export const contactInfoSections: {
  title: string;
  items: readonly ContactLinkItem[];
}[] = [
  {
    title: "邮箱",
    items: [
      {
        label: "邮箱",
        value: site.email,
        href: `mailto:${site.email}`,
      },
    ],
  },
  {
    title: "电话",
    items: [
      {
        label: "电话",
        value: "+1 480 799 8893",
        href: "tel:+14807998893",
      },
    ],
  },
  {
    title: "办公地址",
    items: [
      {
        label: "办公地址",
        value: "美国德克萨斯州达拉斯",
      },
    ],
  },
  {
    title: "领英",
    items: [
      {
        label: "领英",
        value: "SiCore Dynamics",
        href: "https://www.linkedin.com/company/sicore-dynamics",
      },
    ],
  },
  {
    title: "工作时间",
    items: [
      {
        label: "工作时间",
        value: "周一至周五 · 上午 9:00 – 下午 6:00（美国中部时间）",
      },
    ],
  },
];

export const contactIndustries = [
  "自动化与机器人",
  "无人飞行器",
  "农业自动化",
  "医疗设备",
  "智能家具",
  "定制化 OEM",
  "其他",
] as const;

export const contactCountries = [
  "美国",
  "加拿大",
  "中国",
  "德国",
  "日本",
  "英国",
  "其他",
] as const;

export const contactPageMeta = {
  title: "联系 SiCore Dynamics",
  description:
    "联系 SiCore Dynamics，了解先进无线充电技术、智能充电站与 AI 电源系统，或咨询 OEM 开发、技术支持与合作机会。",
};

export const contactFaqs = [
  {
    question: "如何联系 SiCore Dynamics 进行 OEM 无线充电项目合作？",
    answer:
      "您可以使用本页面的联系表单，或直接发送邮件给我们的销售与工程团队。SiCore 支持面向机器人与工业系统的 OEM 开发、产品集成与无线充电部署。",
  },
  {
    question: "SiCore 支持哪些行业？",
    answer:
      "SiCore 支持自动化与机器人、无人飞行器、农业自动化、医疗设备、智能家具以及定制化 OEM 无线充电项目。",
  },
] as const;
