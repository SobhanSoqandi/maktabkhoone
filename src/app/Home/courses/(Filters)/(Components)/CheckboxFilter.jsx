"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function CheckboxFilter({ filterField, options, isfilter }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedValue = searchParams.get(filterField);

  function handleChange(value) {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedValue === value) {
      params.delete(filterField);
    } else {
      params.set(filterField, value);
    }

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  return (
    <div className="space-y-5">
      {options.map(({ value, label }) => (
        <label
          key={value}
          className="flex flex-row-reverse justify-end items-center gap-3 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={selectedValue === value}
            onChange={() => handleChange(value)}
            className="w-5 h-5 accent-teal-600 cursor-pointer"
          />

          <span className="text-gray-700 text-xl">{label}</span>
        </label>
      ))}
    </div>
  );
}

export default CheckboxFilter;
