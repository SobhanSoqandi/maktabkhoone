"use client";

import { useState } from "react";
import { FiPlus, FiSearch, FiChevronDown } from "react-icons/fi";
import { courseStatusFilters } from "./courses-data";

function StatusFilter({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const activeLabel = courseStatusFilters.find((item) => item.value === value)?.label;

  return (
    <div className="relative w-full sm:w-auto">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-300 sm:w-auto sm:justify-start"
      >
        <span>{activeLabel}</span>
        <FiChevronDown size={15} className={["text-slate-400 transition-transform", open ? "rotate-180" : ""].join(" ")} />
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+8px)] z-10 w-full overflow-hidden rounded-xl border border-slate-200 bg-white py-1.5 shadow-lg sm:w-44">
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

export function CoursesToolbar({ statusFilter, onStatusFilterChange, searchTerm, onSearchTermChange }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-xl bg-rose-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-800 sm:order-2 sm:w-auto"
      >
        <span>ساخت دوره جدید</span>
        <FiPlus size={16} />
      </button>

      <div className="flex flex-col gap-3 sm:order-1 sm:flex-row sm:items-center">
        <StatusFilter value={statusFilter} onChange={onStatusFilterChange} />

        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5">
          <input
            value={searchTerm}
            onChange={(event) => onSearchTermChange(event.target.value)}
            placeholder="جستجو میان دوره‌ها"
            className="w-full bg-transparent text-right text-sm text-slate-700 outline-none placeholder:text-slate-400 sm:w-56"
          />
          <FiSearch size={16} className="shrink-0 text-slate-400" />
        </div>
      </div>
    </div>
  );
}
