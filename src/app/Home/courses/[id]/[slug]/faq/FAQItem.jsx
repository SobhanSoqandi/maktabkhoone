"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQItem({
  question,
  answer,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border border-gray-200
        bg-gray-50
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-5
          px-8
          py-7
        "
      >
        <h3 className="font-bold text-sm">
          {question}
        </h3>

        <FiChevronDown
          className={`text-sm transition duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`
          grid
          transition-all
          duration-300
          ${
            open
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="border-t border-gray-200 px-8 py-6 leading-9 text-gray-600">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}