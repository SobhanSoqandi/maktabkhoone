"use client";

import { HiChevronDown } from "react-icons/hi2";

export default function SelectBox({
  value,
  onChange,
  options,
  placeholder,
}) {
  return (
    <div className="relative min-w-52">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 pl-10 text-sm text-gray-700 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
      >
        <option value="">{placeholder}</option>

        {options.map((item) => (
          <option
            key={item.id}
            value={item.value}
          >
            {item.title}
          </option>
        ))}
      </select>

      <HiChevronDown className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
    </div>
  );
}