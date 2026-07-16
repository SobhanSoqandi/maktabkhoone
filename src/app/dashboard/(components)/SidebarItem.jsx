"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  HiOutlineBookOpen,
  HiOutlineLightBulb,
  HiOutlineAcademicCap,
  HiOutlineChatBubbleLeftRight,
  HiOutlineFolder,
  HiOutlineLifebuoy,
  HiOutlineClipboardDocumentList,
  HiOutlineUser,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

const icons = {
  book: HiOutlineBookOpen,
  light: HiOutlineLightBulb,
  academic: HiOutlineAcademicCap,
  question: HiOutlineChatBubbleLeftRight,
  folder: HiOutlineFolder,
  support: HiOutlineLifebuoy,
  transaction: HiOutlineClipboardDocumentList,
  user: HiOutlineUser,
  setting: HiOutlineCog6Tooth,
};

export default function SidebarItem({ item }) {
  const pathname = usePathname();

  const Icon = icons[item.icon];

  const isActive = pathname.startsWith(item.href);
 
  

  return (
    <Link
      href={item.href}
      className={`flex items-center border-b border-gray-200 px-6 py-5 transition ${
        isActive
          ? "bg-teal-50 border-r-4 border-r-teal-600"
          : "hover:bg-teal-50 hover:border-r-4 hover:border-r-teal-600"
      }`}
    >
      <Icon
        className="text-2xl text-gray-400"
       
      />

      <span
        className="px-4 font-medium text-gray-700"
        
      >
        {item.title}
      </span>
    </Link>
  );
}