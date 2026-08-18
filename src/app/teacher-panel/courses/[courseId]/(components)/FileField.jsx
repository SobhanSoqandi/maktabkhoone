"use client";

import { useState } from "react";

export function FileField({ label, registerName, register, errors = {}, validation = {} }) {
  const [fileName, setFileName] = useState("");
  const registerProp = register ? register(registerName, validation) : {};

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={registerName} className="text-base font-medium text-slate-900">
        {label}
      </label>

      <div className="flex items-center gap-3">
        <label
          htmlFor={registerName}
          className="cursor-pointer rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200"
        >
          انتخاب فایل
        </label>
        <span className="truncate text-sm text-slate-400">
          {fileName || "فایلی انتخاب نشده"}
        </span>
      </div>

      <input
        id={registerName}
        type="file"
        className="hidden"
        {...registerProp}
        onChange={(event) => {
          registerProp.onChange?.(event);
          setFileName(event.target.files?.[0]?.name ?? "");
        }}
      />

      {errors[registerName] && (
        <p className="text-sm text-red-500">{errors[registerName]?.message}</p>
      )}
    </div>
  );
}
