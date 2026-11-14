"use client"

import { toPersianNumbers } from "@/app/Utils/toPersianNumbers";
import { useAuth } from "@/context/AuthContext";
import { loginContext } from "@/context/LoginContext";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext } from "react";
import { FiBook, FiChevronLeft, FiChevronsRight, FiFileText, FiLogOut, FiUserPlus, FiUsers, FiX } from "react-icons/fi"
import { MdDashboard } from "react-icons/md";

const menu = [
  {
    items: [
    {  label : "داشبورد", href: "/admin", icon : MdDashboard }

    ]
  },
  {
    title: "مدیریت",
    items: [
      { label: "دوره‌ها", href: "/admin/courses", icon: FiBook },
      { label: "مدرس‌ها", href: "/admin/teachers", icon: FiUsers },
    ],
  },
  {
    title: "درخواست‌ها",
    items: [
      { label: "درخواست دوره‌ها", href: "/admin/course-requests", icon: FiFileText },
      { label: "درخواست مدرس‌ها", href: "/admin/teacher-requests", icon: FiUserPlus },
    ],
  },
];


export default function Sidebar({ open, onClose }) {

  const { user, setUser } = useAuth();

  console.log("user is : ", user)

  const { setIsLogin } = useContext(loginContext);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
    setIsLogin(false);
  }


  const pathname = usePathname()
  const hide = open ? "" : "lg:hidden"
  const center = open ? "" : "lg:justify-center lg:px-0"
  const tooltip =
    "pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xl bg-slate-800 px-3 py-1.5 text-xs font-medium text-white shadow-lg"

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
      />

      <aside
        className={`fixed inset-y-3 right-3 z-40 flex w-72 max-w-[85vw] flex-col rounded-3xl bg-white ring-1 ring-slate-900/5 transition-all duration-300 lg:static lg:my-3 lg:mr-3 lg:max-w-none lg:shadow-sm lg:shadow-slate-200/70 ${open ? "translate-x-0 shadow-2xl shadow-slate-900/20" : "translate-x-[120%] lg:w-20 lg:translate-x-0"
          }`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-36 rounded-t-3xl bg-gradient-to-b from-blue-50 to-transparent" />

        <div className="relative p-3">
          <div className={`flex items-center gap-3 rounded-2xl p-2 ${open ? "bg-white/70 shadow-sm shadow-blue-100 ring-1 ring-blue-100" : "lg:justify-center lg:p-0 lg:ring-0 lg:shadow-none lg:bg-transparent"}`}>


            <div className="relative shrink-0">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-br from-blue-500 to-blue-700 text-base font-bold text-white shadow-lg shadow-blue-500/30">
                {user?.avatar ? (
                  <Image
                    src={base_url + user.avatar}
                    alt={user?.username || "User avatar"}
                    width={44}
                    height={44}
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                ) : (
                  user?.username?.trim()?.charAt(0) || "م"
                )}
              </div>

              <span className="absolute -bottom-0 -left-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>


            <div className={`min-w-0 flex-1 ${hide}`}>
              <p className="truncate text-sm font-bold text-slate-800"> {user?.username} </p>
              <p className="truncate text-xs text-slate-500"> {toPersianNumbers(user?.phone_number)} </p>
            </div>

            <button
              onClick={onClose}
              aria-label="بستن منو"
              className={`rounded-xl bg-slate-100 p-2 text-slate-500 transition hover:bg-blue-100 hover:text-blue-600 active:scale-95 ${hide}`}
            >
              <FiX className="h-4 w-4 lg:hidden" />
              <FiChevronsRight className="hidden h-4 w-4 lg:block" />
            </button>
          </div>
        </div>

        <nav className={`relative flex-1 overflow-y-auto px-3 pb-3 ${open ? "" : "lg:overflow-visible"}`}>
          {menu.map(({ title, items }) => (
            <div key={title} className="mb-4">
              <p className={`px-3 pb-2 pt-1 text-xs font-semibold text-slate-400 ${hide}`}>{title}</p>
              {!open && <span className="mx-auto mb-3 mt-1 hidden h-1 w-1 rounded-full bg-slate-300 lg:block" />}

              <div className="space-y-1.5">
                {items.map(({ label, href, icon: Icon }) => {
                  const active = pathname === href || pathname.startsWith(`${href}/`)
                  return (
                    <Link
                      key={href}
                      href={href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => window.innerWidth < 1024 && onClose()}
                      className={`group relative flex items-center gap-3 rounded-2xl p-2 text-sm font-medium transition-all duration-200 ${center} ${active
                        ? "bg-gradient-to-l from-blue-100 via-blue-50 to-white text-blue-700 shadow-sm shadow-blue-100"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${active
                          ? "bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md shadow-blue-500/30"
                          : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                          }`}
                      >
                        <Icon className="h-[18px] w-[18px]" />
                      </span>

                      <span className={`flex-1 truncate ${hide}`}>{label}</span>
                      {active && <FiChevronLeft className={`ml-1 h-4 w-4 shrink-0 text-blue-500 ${hide}`} />}

                      {!open && <span className={`${tooltip} lg:group-hover:block`}>{label}</span>}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="relative p-3 pt-0">
          <button
            onClick={handleLogout}
            className={`group relative flex w-full items-center gap-3 rounded-2xl bg-slate-50 p-2 text-sm font-medium text-slate-500 transition-all duration-200 hover:bg-rose-50 hover:text-rose-600 ${center}`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition-colors group-hover:bg-rose-100">
              <FiLogOut className="h-[18px] w-[18px] transition-transform duration-200 group-hover:-translate-x-0.5" />
            </span>
            <span className={hide}>خروج از حساب</span>
            {!open && <span className={`${tooltip} lg:group-hover:block`}>خروج از حساب</span>}
          </button>
        </div>
      </aside>
    </>
  )
}
