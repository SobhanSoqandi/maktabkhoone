"use client";

import { FiMenu, FiX } from "react-icons/fi";

export function MobileHeader({ isOpen, onToggle }) {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-white px-4 py-3 shadow-sm md:hidden">
      <h1 className="text-lg font-semibold text-gray-900">پنل مدیریت</h1>
      <button
        onClick={onToggle}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </header>
  );
}