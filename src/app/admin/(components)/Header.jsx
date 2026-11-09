
"use client"

import { FiMenu, FiSearch } from "react-icons/fi"
import NotificationBell from "../(components)/NotificationBell"

export default function Header({ open, onToggle }) {
  return (
    <header className="mx-2 mt-3 flex h-16 shrink-0 items-center justify-between gap-3 rounded-3xl bg-white px-3 shadow-sm shadow-slate-200/70 ring-1 ring-slate-900/5 sm:mx-4 sm:px-4 lg:mx-6">
      <div className="flex flex-1 items-center gap-3">
        <button
          type="button"
          onClick={onToggle}
          aria-label="باز و بسته کردن منو"
          aria-expanded={open}
          className="rounded-2xl bg-slate-100 p-3 text-slate-600 transition hover:bg-blue-50 hover:text-blue-600 active:scale-95"
        >
          <FiMenu className="h-5 w-5" />
        </button>

        <div className="relative hidden w-full max-w-md md:block">
          <FiSearch className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <input
            type="search"
            placeholder="جستجو در پنل..."
            aria-label="جستجو در پنل"
            className="w-full rounded-2xl bg-slate-100 py-3 pl-4 pr-11 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
        </div>
      </div>

      <NotificationBell />
    </header>
  )
}
