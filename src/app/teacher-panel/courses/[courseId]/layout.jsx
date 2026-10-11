"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function CourseLayout({ children }) {
  const { courseId } = useParams();
  const pathname = usePathname();

  const basePath = `/teacher-panel/courses/${courseId}`;

  const tabs = [
    { label: "فصل‌ها", href: "chapters" },
    { label: "جزئیات دوره", href: "detail" },
  ];

  return (
    <div className="w-full">
      <nav className="flex border-b border-slate-200 bg-white">
        {tabs.map((tab) => {
          const tabPath = `${basePath}/${tab.href}`;
          const isActive = pathname.startsWith(tabPath);

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`border-b-2 px-5 py-3 text-sm font-medium ${
                isActive
                  ? "border-cyan-600 text-cyan-600"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-6">{children}</div>
    </div>
  );
}