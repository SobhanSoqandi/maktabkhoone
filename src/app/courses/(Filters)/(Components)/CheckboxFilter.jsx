"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function CheckboxFilter({ filterField, options }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedValues =
    searchParams.get(filterField)?.split(",") || [];

  function handleChange(value) {
    const params = new URLSearchParams(searchParams.toString());

    let values = [...selectedValues];

    if (values.includes(value)) {
      values = values.filter((item) => item !== value);
    } else {
      values.push(value);
    }

    if (values.length > 0) {
      params.set(filterField, values.join(","));
    } else {
      params.delete(filterField);
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
  className="flex flex-row-reverse items-center justify-end gap-3 cursor-pointer"
>
  <input
    type="checkbox"
    checked={selectedValues.includes(value)}
    onChange={() => handleChange(value)}
    className="w-5 h-5 accent-teal-600 cursor-pointer"
  />

  <span className="text-xl text-gray-700">
    {label}
  </span>
</label>
      ))}
    </div>
  );
}

export default CheckboxFilter;