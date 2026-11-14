import {
  HiOutlineSquares2X2,
  HiOutlineBookOpen,
  HiOutlineAcademicCap,
  HiOutlineFolder,
  HiOutlineClipboardDocumentList,
  HiOutlineUser,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

export const sidebarItems = [
  {
    id: 1,
    title: "داشبورد ",
    href: "/dashboard",
    icon: HiOutlineSquares2X2,
  },
   {
    id: 2,
    title: "دوره‌های من",
    href: "/dashboard/courses",
    icon: HiOutlineBookOpen,
  },
  {
    id: 3,
    title: "گواهی‌نامه‌ها",
    href: "/dashboard/certificates",
    icon: HiOutlineAcademicCap,
  },

  {
    id: 5,
    title: "لیست‌های من",
    href: "/dashboard/lists",
    icon: HiOutlineFolder,
  },

  {
    id: 7,
    title: "تراکنش‌ها",
    href: "/dashboard/transactions",
    icon: HiOutlineClipboardDocumentList,
  },
  {
    id: 8,
    title: "تنظیمات پروفایل",
    href: "/dashboard/profile",
    icon: HiOutlineUser,
  },
  {
    id: 9,
    title: "تنظیمات حساب کاربری",
    href: "/dashboard/settings",
    icon: HiOutlineCog6Tooth,
  },
];
