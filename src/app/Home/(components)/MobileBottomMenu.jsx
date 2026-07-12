"use client";

import BottomNavItem from "./BottomNavItem";

import {
    FiHome,
    FiGrid,
    FiBook,
    FiUser,
} from "react-icons/fi";

const navigationItems = [
    {
        id: 1,
        href: "/Home",
        label: "خانه",
        icon: <FiHome />,
    },
    {
        id: 2,
        href: "/categories",
        label: "دسته‌بندی",
        icon: <FiGrid />,
    },
    {
        id: 3,
        href: "/test",
        label: "دوره‌ها",
        icon: <FiBook />,
    },
    {
        id: 4,
        href: "/profile",
        label: "حساب",
        icon: <FiUser />,
    },
];


function MobileBottomMenu() {
  return (
      <nav
            className="mobile-menu"
        >
            {navigationItems.map((item) => (
                <BottomNavItem
                    key={item.id}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                />
            ))}
        </nav>
  )
}

export default MobileBottomMenu