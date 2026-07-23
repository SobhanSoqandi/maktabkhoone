"use client";

import { useState } from "react";
import { HiChevronLeft } from "react-icons/hi2";

export default function ExpandableText({
  text,
  maxLength = 250,
  moreText = "نمایش بیشتر",
  lessText = "نمایش کمتر",
}) {
  const [expanded, setExpanded] = useState(false);
  if (!text) return null;
  const isLong = text.length > maxLength;

  const content = expanded || !isLong ? text : text.slice(0, maxLength) + "...";

  return (
    <>
      <p className="leading-9 text-gray-700">{content}</p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 flex items-center gap-1 rounded-full border border-gray-200 px-5 py-2 text-sm font-medium transition hover:bg-gray-50"
        >
          {expanded ? lessText : moreText}

          <HiChevronLeft
            className={`transition ${expanded ? "-rotate-90" : ""}`}
          />
        </button>
      )}
    </>
  );
}
