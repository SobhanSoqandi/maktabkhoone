"use client";

import { useState } from "react";
import {
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi2";

export default function AccordionSection({
  title,
  children,
  defaultOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="border-b border-gray-200 p-4 last:border-b-0">

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between"
      >
        <h3 className="text-base md:text-xl  text-gray-900">
          {title}
        </h3>

        <span className="text-lg text-gray-500 transition-transform duration-300">
          {isOpen ? (
            <HiChevronUp />
          ) : (
            <HiChevronDown />
          )}
        </span>
      </button>

      <div
        className={`
          grid
          transition-all
          duration-300
          ease-in-out
          ${
            isOpen
              ? "grid-rows-[1fr] mt-5"
              : "grid-rows-[0fr] mt-0"
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="space-y-4">
            {children}
          </div>
        </div>
      </div>

    </section>
  );
}