"use client";

export default function SegmentedItem({
  item,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex-1
        rounded-2xl
        px-6
        py-4
        text-center
        text-base
        font-medium
        transition-all
        duration-300
        ${
          active
            ? "bg-white shadow text-gray-900"
            : "text-gray-500 hover:text-gray-700"
        }
      `}
    >
      {item.label}
    </button>
  );
}