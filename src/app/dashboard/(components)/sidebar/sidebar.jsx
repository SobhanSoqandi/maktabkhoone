"use client";

import { HiOutlineUser } from "react-icons/hi2";
import SidebarItem from "./SidebarItem";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { sidebarItems } from "./sidebar-data";
import { useAuth } from "@/context/AuthContext";

export default function Sidebar({ isOpen }) {
  const { user } = useAuth();
  console.log(user);
  return (
    <aside className="bg-white m-5 border border-gray-200 rounded-3xl w-80">
      <div className="flex justify-between items-center p-5 border-gray-200 border-b-4">
        <div className="flex justify-center items-center bg-gray-100 rounded-full w-16 h-16">
          <HiOutlineUser className="text-gray-400 text-4xl" />
        </div>

        <div className="flex-1 pr-4">
          <h2 className="font-bold text-gray-900 text-lg">{user?.username}</h2>

          <p className="mt-2 text-gray-500 text-sm">{user?.phone_number}</p>
        </div>
      </div>

      {sidebarItems.map((item) => (
        <SidebarItem key={item.id} item={item} />
      ))}

      <Link
        href="#"
        className="flex items-center hover:bg-red-50 px-6 py-5 border-red-600 hover:border-r-4 transition"
      >
        <BiLogOut className="text-gray-400 text-2xl" />

        <span className="px-4 font-medium text-gray-700">خروج</span>
      </Link>
    </aside>
  );
}
