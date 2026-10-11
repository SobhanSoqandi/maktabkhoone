"use client";

import { labelClassName } from "./form-styles";

export function FileField({
  label,
  registerName,
  register,
  errors,
  validation,
  accept,
  currentFileUrl,
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={registerName} className={labelClassName}>
        {label}
      </label>

      {currentFileUrl && (
        <a
          href={currentFileUrl}
          target="_blank"
          rel="noreferrer"
          className="w-fit text-sm text-cyan-600 hover:underline"
        >
          مشاهده فایل فعلی
        </a>
      )}

      <input
        id={registerName}
        type="file"
        accept={accept}
        {...register(registerName, validation)}
        className={`w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm text-slate-700 file:ml-3 file:rounded-md file:border-0 file:bg-slate-200 file:px-3 file:py-1 file:text-sm ${
          errors[registerName] ? "border-red-500" : "border-slate-200"
        }`}
      />

      {errors[registerName] && (
        <p className="text-sm text-red-500">{errors[registerName].message}</p>
      )}
    </div>
  );
}
