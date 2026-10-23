"use client";

import { HiOutlineUser, HiOutlineXMark } from "react-icons/hi2";
import SidebarItem from "./SidebarItem";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { sidebarItems } from "./sidebar-data";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { base_url } from "../../../../../data/info";
import { useContext } from "react";
import { loginContext } from "@/context/LoginContext";

export default function Sidebar({ onClose }) {
  const { user , setUser } = useAuth();

  
    const { setIsLogin } = useContext(loginContext);

    const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
    setIsLogin(false);
  };

  return (
    <aside className="m-3 flex w-80 max-w-[calc(100vw-1.5rem)] shrink-0 flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-blue-900/5 lg:m-5">
      <div className="flex items-center justify-between px-5 pt-4 lg:hidden">
        <span className="text-xs font-bold text-slate-400">منو</span>
        <button
          onClick={onClose}
          aria-label="بستن منو"
          className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 text-slate-500 transition hover:bg-red-50 hover:text-red-600 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          <HiOutlineXMark className="text-xl" />
        </button>
      </div>

      <div className="mx-3 mb-2 mt-3 shrink-0">
        <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-l from-slate-50 to-white p-4">
          <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-blue-100/50 blur-2xl" />

          <div className="relative flex items-center gap-3.5">
            <div className="relative shrink-0">
              <div className="rounded-full bg-gradient-to-br from-blue-500 to-indigo-400 p-[2.5px] shadow-md shadow-blue-500/20">
                <div className="grid h-[58px] w-[58px] place-items-center overflow-hidden rounded-full border-2 border-white bg-white">
                  {user?.avatar ? (
                    <Image
                      src={base_url + user.avatar}
                      alt={user.name || "User avatar"}
                      width={58}
                      height={58}
                      unoptimized
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <HiOutlineUser className="text-3xl text-blue-500" />
                  )}
                </div>
              </div>

              <span className="absolute bottom-0.5 right-0.5 flex h-3.5 w-3.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-[2.5px] border-white bg-emerald-500" />
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="truncate text-[15px] font-extrabold tracking-tight text-slate-800">
                {user?.username || "کاربر"}
              </h2>
              <p
                dir="ltr"
                className="mt-1.5 truncate text-right text-xs font-medium tracking-wide text-slate-500"
              >
                {user?.phone_number || "شماره ثبت نشده"}
              </p>
            </div>
          </div>

          <div className="relative mt-4 flex items-center justify-between border-t border-slate-200/70 pt-3">
            <span className="text-[11px] font-medium text-slate-400">
              پنل کاربری
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-600 ring-1 ring-blue-100">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              مکتب‌خونه
            </span>
          </div>
        </div>
      </div>

      <nav className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-y-auto p-3 [scrollbar-width:thin]">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.id} item={item} onNavigate={onClose} />
        ))}
      </nav>

      <div className="mx-3 shrink-0 border-t border-slate-100 py-3">
        <a
          onClick={handleLogout}
          className="group flex items-center gap-4 rounded-2xl px-4 py-3.5 transition hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-500"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-400 transition group-hover:bg-red-100 group-hover:text-red-600">
            <BiLogOut className="text-xl" />
          </span>
          <span className="font-semibold text-slate-600 transition group-hover:text-red-600">
            خروج
          </span>
        </a>
      </div>
    </aside>
  );
}
