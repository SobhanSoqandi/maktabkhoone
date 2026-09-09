"use client";

import { useState } from "react";
import { FiPlus, FiSearch, FiChevronDown } from "react-icons/fi";
import { courseStatusFilters } from "./courses-data";
import Link from "next/link";

function StatusFilter({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const activeLabel = courseStatusFilters.find(
    (item) => item.value === value,
  )?.label;

  return (
    <div className="relative w-full sm:w-auto">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex justify-between sm:justify-start items-center gap-2 bg-white px-4 py-2.5 border border-slate-200 hover:border-slate-300 rounded-xl w-full sm:w-auto font-medium text-slate-700 text-sm"
      >
        <span>{activeLabel}</span>
        <FiChevronDown
          size={15}
          className={[
            "text-slate-400 transition-transform",
            open ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>

      {open && (
        <div className="top-[calc(100%+8px)] right-0 z-10 absolute bg-white shadow-lg py-1.5 border border-slate-200 rounded-xl w-full sm:w-44 overflow-hidden">
          {courseStatusFilters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => {
                onChange(item.value);
                setOpen(false);
              }}
              className={[
                "block w-full px-4 py-2 text-right text-sm transition-colors",
                item.value === value
                  ? "font-semibold text-emerald-600"
                  : "text-slate-600 hover:bg-slate-50",
              ].join(" ")}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function CoursesToolbar({
  statusFilter,
  onStatusFilterChange,
  searchTerm,
  onSearchTermChange,
}) {
  return (
    <div className="flex sm:flex-row flex-col sm:flex-wrap sm:justify-between sm:items-center gap-3">
      <button
        type="button"
        className="flex justify-center items-center gap-2 sm:order-2 bg-rose-700 hover:bg-rose-800 px-5 py-2.5 rounded-xl sm:w-auto font-semibold text-white text-sm transition-colors"
      >
        <Link href={"/teacher-panel/create-course"}>ساخت دوره جدید</Link>
        <FiPlus size={16} />
      </button>

      <div className="flex sm:flex-row flex-col sm:items-center gap-3 sm:order-1">
        <StatusFilter value={statusFilter} onChange={onStatusFilterChange} />

        <div className="flex items-center gap-2 bg-white px-4 py-2.5 border border-slate-200 rounded-xl">
          <input
            value={searchTerm}
            onChange={(event) => onSearchTermChange(event.target.value)}
            placeholder="جستجو میان دوره‌ها"
            className="bg-transparent outline-none w-full sm:w-56 text-slate-700 placeholder:text-slate-400 text-sm text-right"
          />
          <FiSearch size={16} className="text-slate-400 shrink-0" />
        </div>
      </div>
    </div>
  );
}
