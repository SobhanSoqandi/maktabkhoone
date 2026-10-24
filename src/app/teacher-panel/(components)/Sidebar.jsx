"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiBookOpen,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
} from "react-icons/fi";
import { primaryNavItems, secondaryNavItems } from "./nav-items";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { base_url } from "../../../../data/info";

const STORAGE_KEY = "panel-sidebar-collapsed";

function isPathActive(pathname, href) {
  const normalizedHref = href.startsWith("/")
    ? href
    : `${pathname.split("/").slice(0, -1).join("/")}/${href}`;

  return (
    pathname === normalizedHref || pathname.startsWith(normalizedHref + "/")
  );
}

function isParentActive(pathname, item) {
  if (!item.children) return isPathActive(pathname, item.href);
  return item.children.some((child) => isPathActive(pathname, child.href));
}

export function Sidebar({ isMobileOpen, onMobileClose }) {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const pathname = usePathname();

  const { user } = useAuth();
  console.log(user);
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "1") setCollapsed(true);
  }, []);

  useEffect(() => {
    const allItems = [...primaryNavItems, ...secondaryNavItems];
    allItems.forEach((item) => {
      if (item.children && isParentActive(pathname, item)) {
        setOpenMenus((prev) => ({ ...prev, [item.label]: true }));
      }
    });
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  function toggleCollapsed() {
    setCollapsed((prev) => {
      const next = !prev;
      window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      return next;
    });
  }

  function toggleMenu(label) {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  }

  function handleNavigation() {
    if (window.innerWidth < 768) {
      onMobileClose();
    }
  }

  function renderItem(item) {
    const Icon = item.icon;
    const hasChildren = Boolean(item.children);
    const active = hasChildren
      ? isParentActive(pathname, item)
      : isPathActive(pathname, item.href);
    const isOpen = Boolean(openMenus[item.label]);

    const rowClasses = [
      "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[16px] transition-colors",
      collapsed ? "justify-center" : "justify-between",
      active
        ? "bg-blue-50 font-semibold text-blue-500"
        : "text-gray-600 hover:bg-blue-50 hover:text-blue-500",
    ].join(" ");

    const rowContent = (
      <>
        <span
          className={
            collapsed ? "flex items-center" : "flex items-center gap-3"
          }
        >
          <Icon
            size={20}
            className={active ? "text-blue-500" : "text-gray-500"}
          />
          {!collapsed && <span>{item.label}</span>}
        </span>
        {!collapsed && hasChildren && (
          <FiChevronDown
            size={16}
            className={[
              "text-gray-500 transition-transform",
              isOpen ? "rotate-180" : "",
            ].join(" ")}
          />
        )}
      </>
    );

    if (hasChildren) {
      return (
        <div key={item.label}>
          <button
            type="button"
            onClick={() => {
              toggleMenu(item.label);
              handleNavigation();
            }}
            title={collapsed ? item.label : undefined}
            className={rowClasses}
          >
            {rowContent}
          </button>

          {!collapsed && isOpen && (
            <div className="flex flex-col gap-1 mt-1 mr-4 pr-3 border-gray-200 border-r">
              {item.children.map((child) => {
                const childActive = isPathActive(pathname, child.href);
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={handleNavigation}
                    className={[
                      "rounded-lg px-3 py-2 text-[15px] transition-colors",
                      childActive
                        ? "font-semibold text-blue-600"
                        : "text-gray-500 hover:bg-blue-50",
                    ].join(" ")}
                  >
                    {child.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={handleNavigation}
        title={collapsed ? item.label : undefined}
        className={rowClasses}
      >
        {rowContent}
      </Link>
    );
  }

  return (
    <>
      {isMobileOpen && (
        <div
          className="md:hidden z-40 fixed inset-0 bg-black/50"
          onClick={onMobileClose}
        />
      )}

      <aside
        className={[
          "fixed inset-y-0 right-0 z-50 flex h-screen w-[280px] shrink-0 flex-col overflow-y-auto overflow-x-hidden",
          "border-l border-gray-200 bg-white transition-all duration-300 ease-in-out",
          isMobileOpen
            ? "translate-x-0 shadow-2xl"
            : "translate-x-full shadow-none",
          collapsed ? "md:w-[76px]" : "md:w-[260px]",
          "md:static md:translate-x-0 md:shadow-none",
        ].join(" ")}
      >
        <div className="flex justify-between items-center px-3 pt-4">
          <button
            onClick={toggleCollapsed}
            className="hidden md:flex justify-center items-center hover:bg-blue-50 border border-blue-500 rounded-xl w-8 h-8 text-blue-600"
          >
            {collapsed ? (
              <FiChevronLeft size={16} />
            ) : (
              <FiChevronRight size={16} />
            )}
          </button>

          {!collapsed && (
            <Link
              href="/Home"
              className="flex justify-center items-center bg-blue-600 rounded-xl w-8 h-8 text-white"
            >
              <FiBookOpen size={18} />
            </Link>
          )}
        </div>

        <nav className="flex flex-col gap-1 px-3 pt-6">
          {primaryNavItems.map(renderItem)}
        </nav>

        <div className="flex-1" />

        <nav className="flex flex-col gap-1 px-3 pb-2">
          {secondaryNavItems.map(renderItem)}
        </nav>

        <div className="flex items-center gap-2.5 px-4 py-3 border-gray-200 border-t">
          <span className="flex justify-center items-center bg-blue-100 rounded-full w-11 h-11 overflow-hidden font-medium text-blue-800 text-lg shrink-0">
            {user?.avatar ? (
              <Image
                src={base_url + user.avatar}
                alt={user.username}
                width={44}
                height={44}
                unoptimized
                className="w-full h-full object-cover"
              />
            ) : (
              user?.username?.[0]?.toUpperCase()
            )}
          </span>

          {!collapsed && user && (
            <span className="text-right leading-tight">
              <span className="block font-semibold text-gray-900 text-lg">
                {user.username}
              </span>
              <span className="block text-gray-400 text-medium" dir="ltr">
                {user.phone_number}
              </span>
            </span>
          )}
        </div>
      </aside>
    </>
  );
}
