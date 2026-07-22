import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React from "react";

export default function UserMenu({ setlogin }) {
  const { setUser } = useAuth();
  return (
    <div className="py-2">
      <Link
        href={"/dashboard/courses"}
        className="flex hover:bg-gray-100 px-5 py-3 w-full text-right transition duration-200"
      >
        👨‍🎓
        <span className="mr-3">پنل دانشجو</span>
      </Link>

      <Link
        href={"/dashboard/courses"}
        className="flex hover:bg-gray-100 px-5 py-3 w-full text-right transition duration-200"
      >
        📚
        <span className="mr-3">دوره‌های من</span>
      </Link>

      <Link
        href={"/checkout"}
        className="flex hover:bg-gray-100 px-5 py-3 w-full text-right transition duration-200"
      >
        🛒
        <span className="mr-3">سبد خرید</span>
      </Link>

      <div className="bg-gray-100 mx-4 my-2 h-px" />

      <button
        onClick={() => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");

          setUser(null);
          setlogin(false);
        }}
        className="flex hover:bg-red-50 px-5 py-3 w-full text-red-600 transition duration-200"
      >
        🚪
        <span className="mr-3">خروج</span>
      </button>
    </div>
  );
}
