

import { HiOutlineUser } from "react-icons/hi2";
import SidebarItem from "./SidebarItem";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { sidebarItems } from "./sidebar-data";

export default function Sidebar({ isOpen }) {
    return (
        <aside className="w-80 rounded-3xl border border-gray-200 bg-white m-5">
            <div className="flex items-center justify-between p-5 border-b-4 border-gray-200">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                    <HiOutlineUser className="text-4xl text-gray-400" />
                </div>

                <div className="flex-1 pr-4">
                    <h2 className="text-lg font-bold text-gray-900">
                        سبحان سوقندی
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        ۰۹۳۰۳۱۳۶۶۱۷
                    </p>
                </div>

            </div>


            {sidebarItems.map((item) => (
                <SidebarItem key={item.id} item={item} />
            ))}


            <Link
                href="#"
                className="flex items-center px-6 py-5 transition hover:bg-red-50 hover:border-r-4 border-red-600"
            >
                <BiLogOut className="text-2xl text-gray-400" />

                <span className="font-medium text-gray-700 px-4">
                    خروج
                </span>
            </Link>

        </aside>
    );
}