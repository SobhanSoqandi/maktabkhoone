"use client";

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const primaryActionByStatus = {
  "in-progress": { label: "درخواست انتشار", className: "bg-teal-600 text-white hover:bg-teal-500" },
  published: { label: "مشاهده دوره", className: "bg-emerald-600 text-white hover:bg-emerald-700" },
  draft: { label: "ادامه ساخت دوره", className: "bg-blue-500 text-white hover:bg-blue-400" },
};

function SecondaryLink({ href, label, icon: Icon }) {
  return (
    <Link
      href={href}
      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 sm:flex-none sm:px-4 sm:py-2.5 sm:text-sm"
    >
      <span>{label}</span>
      <Icon size={15} className="shrink-0 text-slate-400" />
    </Link>
  );
}

export function CourseActions({ courseId, status }) {
  const primary = primaryActionByStatus[status];
  const detailHref = `/teacher-panel/courses/${courseId}`;

  return (
    <div className="flex flex-wrap items-stretch gap-2 sm:items-center sm:gap-2.5">
      <SecondaryLink href={detailHref} label="اطلاعات دوره" icon={FiArrowLeft} />
      <SecondaryLink href={detailHref} label="مشاهده فصل‌ها" icon={FiArrowLeft} />
      <button
        type="button"
        className={[
          "btn btn-primary text-xs text-nowrap flex-1 font-semibold transition-colors sm:flex-none",
          primary.className,
        ].join(" ")}
      >
        {primary.label}
      </button>
    </div>
  );
}
