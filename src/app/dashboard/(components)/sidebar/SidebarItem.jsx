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
  HiChevronLeft,
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

export default function SidebarItem({ item, onNavigate }) {
  const pathname = usePathname();
  const Icon = icons[item.icon];
  const isActive = pathname.startsWith(item.href);

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={`group relative flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all duration-200 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${
        isActive
          ? "bg-gradient-to-l from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30"
          : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
      }`}
    >
      {isActive && (
        <span className="absolute -right-3 top-1/2 h-8 w-1.5 -translate-y-1/2 rounded-l-full bg-blue-600" />
      )}

      <span
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-all duration-200 ${
          isActive
            ? "bg-white/20 text-white"
            : "bg-slate-100 text-slate-400 group-hover:scale-105 group-hover:bg-blue-100 group-hover:text-blue-600"
        }`}
      >
        <Icon className="text-xl" />
      </span>

      <span
        className={`min-w-0 flex-1 truncate ${isActive ? "font-extrabold" : "font-semibold"}`}
      >
        {item.title}
      </span>

      <HiChevronLeft
        className={`shrink-0 text-base transition-all duration-200 ${
          isActive
            ? "text-white/80"
            : "-translate-x-1 text-transparent group-hover:translate-x-0 group-hover:text-blue-400"
        }`}
      />
    </Link>
  );
}
