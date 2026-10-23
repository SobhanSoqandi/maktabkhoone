
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavItem({ href, icon, label }) {
    const pathname = usePathname();

    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <Link href={href} className="group relative flex flex-1 flex-col items-center justify-center py-2">
            <span className={`absolute top-2 h-10 w-12 rounded-2xl transition-colors duration-300 ${isActive ? "bg-blue-50" : "opacity-0"}`} />

            <span className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-xl text-2xl transition-all duration-300 ease-out ${isActive ? "text-blue-500" : "text-gray-500 "}`}>
                {icon}
            </span>

            <span className={`relative z-10 my-1 text-[11px] transition-colors duration-300 ${isActive ? "font-semibold text-blue-700" : "font-medium text-gray-400"}`}>
                {label}
            </span>

            <span className={`absolute bottom-0 min-w-8 rounded-t-full bg-blue-500 transition-all duration-300 ${isActive ? "h-1 w-5 opacity-100" : "h-1 w-0 opacity-0"}`} />
        </Link>
    );
}
