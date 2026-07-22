export const downloadCategories = [
  {
    id: "brochure",
    label: "宣传册",
    description: "无线电源平台的公司及产品宣传册。",
  },
  {
    id: "product-document",
    label: "产品文档",
    description: "产品指南、集成说明与平台技术文档。",
  },
  {
    id: "software-tools",
    label: "软件工具",
    description: "固件工具、配置工具与软件更新。",
  },
  {
    id: "datasheet",
    label: "数据手册",
    description: "发射端、接收端与电源模块的技术数据手册。",
  },
  {
    id: "certificate",
    label: "认证证书",
    description: "合规认证、测试报告与法规文件。",
  },
] as const;

export type DownloadCategoryId = (typeof downloadCategories)[number]["id"];

type DownloadFile = {
  title: string;
  type: string;
  date: string;
  href: string;
};

export const downloadFiles: Record<DownloadCategoryId, DownloadFile[]> = {
  brochure: [
    {
      title: "SiCore Dynamics 企业宣传册",
      type: "宣传册",
      date: "2026-03-01",
      href: "/contact",
    },
    {
      title: "面向智能机器的无线充电方案",
      type: "宣传册",
      date: "2026-02-15",
      href: "/contact",
    },
    {
      title: "智能充电站概览",
      type: "宣传册",
      date: "2026-01-20",
      href: "/contact",
    },
  ],
  "product-document": [
    {
      title: "无线电源平台集成指南",
      type: "产品文档",
      date: "2026-03-05",
      href: "/contact",
    },
    {
      title: "AGV/AMR 充电站产品指南",
      type: "产品文档",
      date: "2026-02-28",
      href: "/contact",
    },
    {
      title: "机器人充电对接系统概览",
      type: "产品文档",
      date: "2026-02-10",
      href: "/contact",
    },
    {
      title: "OEM 无线电源模块参考手册",
      type: "产品文档",
      date: "2026-01-18",
      href: "/contact",
    },
  ],
  "software-tools": [
    {
      title: "SiCore 电源配置工具",
      type: "软件工具",
      date: "2026-03-08",
      href: "/contact",
    },
    {
      title: "无线充电诊断工具",
      type: "软件工具",
      date: "2026-02-22",
      href: "/contact",
    },
    {
      title: "固件更新包 — TX 控制器",
      type: "软件工具",
      date: "2026-02-01",
      href: "/contact",
    },
  ],
  datasheet: [
    {
      title: "60W 无线电源发射端数据手册",
      type: "数据手册",
      date: "2026-03-10",
      href: "/contact",
    },
    {
      title: "200W 无线电源接收端数据手册",
      type: "数据手册",
      date: "2026-03-10",
      href: "/contact",
    },
    {
      title: "800W 工业充电模块数据手册",
      type: "数据手册",
      date: "2026-02-25",
      href: "/contact",
    },
    {
      title: "1500W AGV 充电系统数据手册",
      type: "数据手册",
      date: "2026-02-12",
      href: "/contact",
    },
    {
      title: "3000W 功率电子平台数据手册",
      type: "数据手册",
      date: "2026-01-30",
      href: "/contact",
    },
  ],
  certificate: [
    {
      title: "CE 符合性声明",
      type: "认证证书",
      date: "2025-12-15",
      href: "/contact",
    },
    {
      title: "FCC 合规认证",
      type: "认证证书",
      date: "2025-11-20",
      href: "/contact",
    },
    {
      title: "RoHS 合规声明",
      type: "认证证书",
      date: "2025-10-08",
      href: "/contact",
    },
  ],
};

export const downloadNavLinks = downloadCategories.map((category) => ({
  label: category.label,
  href: `/download#${category.id}`,
  id: category.id,
}));

export function getDownloadCategoryFromHash(hash: string): DownloadCategoryId | null {
  const id = hash.replace(/^#/, "");
  return downloadCategories.some((category) => category.id === id)
    ? (id as DownloadCategoryId)
    : null;
}

export const downloadPageMeta = {
  title: "下载无线充电文档与数据手册",
  description:
    "注册后即可下载 SiCore Dynamics 的宣传册、产品文档、软件工具、数据手册与认证证书，了解先进无线充电技术与智能充电站。",
};

export const downloadFaqs = [
  {
    question: "如何下载 SiCore 无线充电相关文档？",
    answer:
      "访问 SiCore Dynamics 下载中心，浏览宣传册、产品文档、软件工具、数据手册与合规认证证书。下载文件前需先提交您的联系方式完成注册。",
  },
  {
    question: "下载前是否需要注册？",
    answer:
      "是的。下载文档前，请填写您的姓名、公司、企业邮箱与电话号码完成注册。注册完成后，您的浏览器即可解锁下载权限。",
  },
  {
    question: "SiCore 提供哪些类型的下载资源？",
    answer:
      "SiCore 提供宣传册、产品集成指南、软件工具、覆盖 60W 至 3000W 平台的技术数据手册，以及无线充电产品的法规认证证书。",
  },
  {
    question: "我可以下载用于机器人与 AGV 的无线充电数据手册吗？",
    answer:
      "可以。注册完成后，SiCore 提供适用于移动机器人、AGV/AMR 车队、无人机与工业自动化系统的无线充电数据手册与产品文档。",
  },
];
