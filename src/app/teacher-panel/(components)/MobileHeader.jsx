"use client";

import BackButton from "@/app/(components)/BackButton";
import { FiMenu, FiX } from "react-icons/fi";

export function MobileHeader({ isOpen, onToggle }) {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-white px-4 py-3 shadow-sm md:hidden">
      <button
        onClick={onToggle}
        className="flex h-10 w-10 items-center justify-center text-gray-600 hover:bg-gray-50"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      <h1 className="text-lg font-semibold text-gray-900"> پنل مدرس </h1>
      <BackButton />

    </header>
  );
}