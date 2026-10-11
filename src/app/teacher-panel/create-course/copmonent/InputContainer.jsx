import React from "react";

export default function InputContainer({ title, subtitle, children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <h2 className="font-bold text-3xl">{title}</h2>
      <div className="flex flex-col justify-center items-center gap-5 min-w-[650px] text-gray-600">
        <div className="text-xl">{subtitle}</div>
        {children}
      </div>
    </div>
  );
}
