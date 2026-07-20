"use client";

import SegmentedItem from "./SegmentedItem";

export default function SegmentedControl({
  items = [],
  value,
  onChange,
  className = "",
}) {
  return (
    <div
      className={`
        flex
        items-center
        rounded-2xl
        bg-gray-100
        p-1
        ${className}
      `}
    >
      {items.map((item) => (
        <SegmentedItem
          key={item.value}
          item={item}
          active={item.value === value}
          onClick={() => onChange(item.value)}
        />
      ))}
    </div>
  );
}