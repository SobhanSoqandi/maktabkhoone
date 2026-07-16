"use client";

import SegmentedItem from "./SegmentedItem";


export default function SegmentedControl({
  items,
  value,
  onChange,
  className = "",
}) {
  return (
    <div
      className={`flex rounded-2xl bg-gray-100 p-1 ${className}`}
    >
      {items.map((item) => (
        <SegmentedItem
          key={item.value}
          item={item}
          active={value === item.value}
          onClick={() => onChange(item.value)}
        />
      ))}
    </div>
  );
}