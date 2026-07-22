"use client";

import { useEffect, useState } from "react";

export default function OtpTimer() {
  const [time, setTime] = useState(120);

  useEffect(() => {
    if (time === 0) return;

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const minute = String(Math.floor(time / 60)).padStart(2, "0");
  const second = String(time % 60).padStart(2, "0");

  return (
    <div className="flex justify-between items-center text-sm">
      {time > 0 ? (
        <span className="text-gray-500">
          ارسال مجدد تا {minute}:{second}
        </span>
      ) : (
        <button
          type="button"
          onClick={() => setTime(120)}
          className="font-semibold text-blue-600 hover:underline"
        >
          ارسال مجدد کد
        </button>
      )}
    </div>
  );
}
