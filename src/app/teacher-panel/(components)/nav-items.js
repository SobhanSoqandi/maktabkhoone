import {
  FiLayers,
  FiSmile,
  FiTrendingUp,
  FiFileText,
  FiEdit2,
  FiHeadphones,
  FiInfo,
} from "react-icons/fi";
import { PiStudentBold } from "react-icons/pi";

export const primaryNavItems = [
  { label: "دوره‌های من", href: "/teacher-panel/courses", icon: FiLayers },
  {
    label: "پروفایل",
    icon: PiStudentBold ,
    children: [
      // { label: "اطلاعات حساب", href: "/teacher-panel/profile/profile-info" },
      { label: " اطلاعات هویتی ", href: "/teacher-panel/profile/profile-info" },
      { label: " اطلاعات قرار دادی ", href: "/teacher-panel/profile/contract-info" },
    ],
  },
  { label: "آمارها", href: "/stats", icon: FiTrendingUp },
  { label: "گزارش درآمد", href: "/income", icon: FiFileText },
  { label: "قراردادها", href: "/contracts", icon: FiEdit2 },
];

export const secondaryNavItems = [
  { label: "پشتیبانی", href: "/teacher-panel/support", icon: FiHeadphones },
  { label: "راهنما", href: "/guide", icon: FiInfo },
];