"use client";

import { FiChevronDown } from "react-icons/fi";
import { inputClassName, labelClassName } from "./form-styles";

export function SelectField({
  id,
  label,
  register,
  errors,
  validation,
  options,
  placeholder = "انتخاب کنید",
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>

      <div className="relative w-full">
        <select
          id={id}
          {...register(id, validation)}
          className={`${inputClassName} appearance-none pl-10 ${
            errors[id] ? "border-red-500" : ""
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>

        <FiChevronDown
          size={16}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>

      {errors[id] && (
        <p className="text-sm text-red-500">{errors[id].message}</p>
      )}
    </div>
  );
}
