"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBookOpen, FiChevronLeft, FiChevronRight, FiChevronDown } from "react-icons/fi";
import { primaryNavItems, secondaryNavItems } from "./nav-items";

const STORAGE_KEY = "panel-sidebar-collapsed";

function isPathActive(pathname, href) {
  const normalizedHref = href.startsWith("/")
    ? href
    : `${pathname.split("/").slice(0, -1).join("/")}/${href}`;

  return (
    pathname === normalizedHref ||
    pathname.startsWith(normalizedHref + "/")
  );
}

function isParentActive(pathname, item) {
  if (!item.children) return isPathActive(pathname, item.href);
  return item.children.some((child) => isPathActive(pathname, child.href));
}

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const pathname = usePathname();

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

  function toggleCollapsed() {
    setCollapsed((prev) => {
      const next = !prev;
      return next;
    });
  }

  function toggleMenu(label) {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  }

  function renderItem(item) {
    const Icon = item.icon;
    const hasChildren = Boolean(item.children);
    const active = hasChildren ? isParentActive(pathname, item) : isPathActive(pathname, item.href);
    const isOpen = Boolean(openMenus[item.label]);

    const rowClasses = [
      "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] transition-colors",
      collapsed ? "justify-center" : "justify-between",
      active
        ? "bg-teal-50 font-semibold text-teal-700"
        : "text-gray-500 hover:bg-teal-50",
    ].join(" ");

    const rowContent = (
      <>
        <span className={collapsed ? "flex items-center" : "flex items-center gap-3"}>
          <Icon size={20} className={active ? "text-teal-700" : "text-gray-400"} />
          {!collapsed && <span>{item.label}</span>}
        </span>
        {!collapsed && hasChildren && (
          <FiChevronDown
            size={16}
            className={["text-teal-600 transition-transform", isOpen ? "rotate-180" : ""].join(" ")}
          />
        )}
      </>
    );

    if (hasChildren) {
      return (
        <div key={item.label}>
          <button
            type="button"
            onClick={() => toggleMenu(item.label)}
            title={collapsed ? item.label : undefined}
            className={rowClasses}
          >
            {rowContent}
          </button>

          {!collapsed && isOpen && (
            <div className="mt-1 flex flex-col gap-1 border-r border-gray-200 pr-3 mr-4">
              {item.children.map((child) => {
                const childActive = isPathActive(pathname, child.href);
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={[
                      "rounded-lg px-3 py-2 text-sm transition-colors",
                      childActive
                        ? "font-semibold text-teal-600"
                        : "text-gray-600 hover:bg-teal-50",
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
      <Link key={item.href} href={item.href} title={collapsed ? item.label : undefined} className={rowClasses}>
        {rowContent}
      </Link>
    );
  }

  const positionClasses = collapsed
    ? "sticky top-0 w-[76px]"
    : "fixed inset-y-0 right-0 z-40 w-[260px] shadow-2xl md:sticky md:top-0 md:z-auto md:w-[260px] md:shadow-none";

  return (
    <aside
      className={[
        "flex h-screen shrink-0 flex-col overflow-y-auto overflow-x-hidden",
        "border-l border-gray-200 bg-white transition-[width] duration-200 ease-out",
        positionClasses,
      ].join(" ")}
    >
      <div className="flex items-center justify-between px-3 pt-4">
        <button
          onClick={toggleCollapsed}
          aria-label={collapsed ? "باز کردن منو" : "بستن منو"}
          className="flex h-8 w-8 items-center justify-center rounded-xl border border-teal-500 text-teal-600 hover:bg-teal-50"
        >
          {collapsed ? <FiChevronLeft size={16} /> : <FiChevronRight size={16} />}
        </button>

        {!collapsed && (
          <Link href="/Home" className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-600 text-white">
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

      <div className="flex items-center gap-2.5 border-t border-gray-200 px-4 py-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/[0.06] text-sm font-medium text-gray-600">
          س
        </span>
        {!collapsed && (
          <span className="text-right leading-tight">
            <span className="block text-sm font-semibold text-gray-900">سبحان سوقندی</span>
            <span className="block text-xs text-gray-400" dir="ltr">۰۹۳۰۳۱۳۶۶۱۷</span>
          </span>
        )}
      </div>
    </aside>
  );
}
