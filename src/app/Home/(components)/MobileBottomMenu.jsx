"use client";

import { usePathname } from "next/navigation";
import { FiHome, FiGrid, FiBook, FiUser } from "react-icons/fi";
import BottomNavItem from "./BottomNavItem";
import { BsCart } from "react-icons/bs";

const navigationItems = [
    { id: 1, href: "/Home", label: "خانه", icon: <FiHome /> },
    { id: 2, href: "/Home/categories", label: "دسته‌بندی", icon: <FiGrid /> },
    { id: 3, href: "/Home/courses", label: "دوره‌ها", icon: <FiBook /> },
    { id: 3, href: "/cart", label: "سبد خرید", icon: <BsCart /> },
    { id: 4, href: "/dashboard", label: "حساب", icon: <FiUser /> },
];

export default function MobileBottomMenu() {
    const pathname = usePathname();

    const activeId = navigationItems
        .filter(({ href }) => pathname === href || pathname.startsWith(`${href}/`))
        .sort((a, b) => b.href.length - a.href.length)[0]?.id;

    return (
        <nav className="mobile-menu">
            {navigationItems.map((item) => (
                <BottomNavItem key={item.id} {...item} isActive={item.id === activeId} />
            ))}
        </nav>
    );
}