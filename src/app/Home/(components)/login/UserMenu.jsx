
import { useAuth } from "@/context/AuthContext";
import { loginContext } from "@/context/LoginContext";
import Link from "next/link";
import { useContext } from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineShoppingBag,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineChevronLeft,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

export default function UserMenu() {
  const { setUser } = useAuth();
  const { setIsLogin } = useContext(loginContext);

  const menuItems = [
    {
      title: "پنل دانشجو",
      description: "مدیریت حساب کاربری",
      href: "/dashboard/courses",
      icon: HiOutlineAcademicCap,
    },
    {
      title: "دوره‌های من",
      description: "مشاهده دوره‌های ثبت‌نام‌شده",
      href: "/dashboard/courses",
      icon: HiOutlineBookOpen,
    },
    {
      title: "سبد خرید",
      description: "دوره‌های انتخاب‌شده",
      href: "/checkout",
      icon: HiOutlineShoppingBag,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
    setIsLogin(false);
  };

  return (
    <div dir="rtl" className="w-full overflow-hidden rounded-2xl bg-white p-2.5 shadow-xl shadow-slate-900/10">
      

      <div className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 hover:bg-blue-50 active:scale-[0.99]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-500 transition-all duration-200 group-hover:border-blue-100 group-hover:bg-blue-100 group-hover:text-blue-600">
                <Icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-slate-700 transition-colors group-hover:text-blue-700">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  {item.description}
                </p>
              </div>

              <HiOutlineChevronLeft className="h-4 w-4 shrink-0 text-slate-300 transition-all duration-200 group-hover:-translate-x-1 group-hover:text-blue-500" />
            </Link>
          );
        })}
      </div>

      <div className="mx-3 my-2 h-px bg-gradient-to-l from-transparent via-slate-200 to-transparent" />

      <button
        type="button"
        onClick={handleLogout}
        className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-right transition-all duration-200 hover:bg-red-50 active:scale-[0.99]"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition-all duration-200 group-hover:border-red-200 group-hover:bg-red-100">
          <HiOutlineArrowLeftOnRectangle className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-0.5" />
        </div>

        <div className="flex-1">
          <p className="text-sm font-bold text-red-600">خروج از حساب</p>
          <p className="mt-1 text-xs text-red-400">
            خروج امن از حساب کاربری
          </p>
        </div>

        <HiOutlineChevronLeft className="h-4 w-4 text-red-300 transition-transform duration-200 group-hover:-translate-x-1 group-hover:text-red-500" />
      </button>

      
    </div>
  );
}
