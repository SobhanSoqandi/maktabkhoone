
"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${open ? "border-blue-200 bg-white shadow-[0_8px_25px_-15px_rgba(37,99,235,0.25)]" : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm"}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-4 py-5 text-right sm:px-6 sm:py-6"
      >
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold transition-colors duration-300 ${open ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"}`}>
            ؟
          </span>

          <h3 className={`text-sm font-bold leading-7 transition-colors duration-300 sm:text-base ${open ? "text-blue-700" : "text-slate-800 group-hover:text-blue-700"}`}>
            {question}
          </h3>
        </div>

        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${open ? "rotate-180 border-blue-200 bg-blue-50 text-blue-600" : "border-slate-200 bg-white text-slate-500 group-hover:border-blue-200 group-hover:text-blue-600"}`}>
          <FiChevronDown className="text-lg" />
        </span>
      </button>

      <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className={`transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}>
            <div className="mx-4 border-t border-blue-100 sm:mx-6" />

            <div className="px-4 pb-5 pt-3 sm:px-6 sm:pb-6 sm:pt-4">
              <div className="border-r-2 border-blue-200 pr-4 text-sm leading-8 text-slate-600 sm:pr-5 sm:text-base sm:leading-9">
                {answer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
