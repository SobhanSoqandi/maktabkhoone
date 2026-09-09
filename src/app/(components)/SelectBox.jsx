"use client";

import { HiChevronDown } from "react-icons/hi2";

export default function SelectBox({ value, onChange, options, placeholder }) {
  return (
    <div className="relative w-full min-w-52">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white px-4 pl-10 border border-gray-200 focus:border-teal-500 rounded-xl outline-none focus:ring-2 focus:ring-teal-100 w-full h-12 text-gray-700 text-sm transition appearance-none"
      >
        <option value="">{placeholder}</option>

        {options.map((item) => (
          <option key={item.id} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>

      <HiChevronDown className="top-1/2 left-3 absolute text-gray-400 text-xl -translate-y-1/2 pointer-events-none" />
    </div>
  );
}
