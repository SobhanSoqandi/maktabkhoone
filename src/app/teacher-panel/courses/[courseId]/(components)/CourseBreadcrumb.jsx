import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

export function CourseBreadcrumb({ courseTitle, currentLabel }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-teal-600 px-4 py-4 sm:px-6">
      <div className="flex min-w-0 items-center gap-2 text-sm text-white/90">
        <Link href="/teacher-panel/courses" className="shrink-0 hover:underline">
          لیست دوره‌ها
        </Link>
        <FiChevronLeft size={14} className="shrink-0" />
        <span className="truncate">{courseTitle}</span>
        <FiChevronLeft size={14} className="shrink-0" />
        <span className="shrink-0 font-semibold text-white">{currentLabel}</span>
      </div>

      <button
        type="button"
        className="shrink-0 rounded-lg bg-white px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
      >
        ثبت بازخورد
      </button>
    </div>
  );
}
