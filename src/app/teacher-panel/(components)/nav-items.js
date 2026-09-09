import {
  FiLayers,
  FiSmile,
  FiTrendingUp,
  FiFileText,
  FiEdit2,
  FiHeadphones,
  FiInfo,
} from "react-icons/fi";

export const primaryNavItems = [
  { label: "دوره‌های من", href: "/teacher-panel/courses", icon: FiLayers },
  {
    label: "احراز هویت",
    icon: FiSmile,
    href: "/verify",
  },
  { label: "آمارها", href: "/stats", icon: FiTrendingUp },
  { label: "گزارش درآمد", href: "/income", icon: FiFileText },
  { label: "قراردادها", href: "/contracts", icon: FiEdit2 },
];

export const secondaryNavItems = [
  { label: "پشتیبانی", href: "/teacher-panel/support", icon: FiHeadphones },
  { label: "راهنما", href: "/guide", icon: FiInfo },
];
