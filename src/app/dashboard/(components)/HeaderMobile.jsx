
"use client";

import Link from "next/link";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { useAuth } from "@/context/AuthContext";
import BackButton from "@/app/(components)/BackButton";
import { FaArrowLeftLong } from "react-icons/fa6";

function HeaderMobile() {
  const { user } = useAuth();

  return (
    <header dir="rtl" className="flex items-center justify-between w-full gap-3 border-b border-slate-100 bg-transparent px-4 py-2.5 shadow-sm shadow-blue-900/5">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <Link
          href="/Home"
          aria-label="صفحه اصلی"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-xl text-white shadow-md shadow-blue-600/30 transition active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <HiOutlineAcademicCap />
        </Link>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-extrabold text-slate-900">
            سلام، {user?.username || "دوست"} عزیز
          </p>
          <p className="mt-0.5 truncate text-xs text-slate-400">
            به مکتب‌خونه خوش آمدی
          </p>
        </div>
      </div>

      
      <BackButton />
    </header>
  );
}

export default HeaderMobile;