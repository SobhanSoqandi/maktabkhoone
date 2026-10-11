"use client";

import { inputClassName, labelClassName } from "./form-styles";

export function TextareaField({
  id,
  label,
  register,
  errors,
  validation,
  rows = 5,
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>

      <textarea
        id={id}
        rows={rows}
        {...register(id, validation)}
        className={`${inputClassName} resize-y ${
          errors[id] ? "border-red-500" : ""
        }`}
      />

      {errors[id] && (
        <p className="text-sm text-red-500">{errors[id].message}</p>
      )}
    </div>
  );
}
