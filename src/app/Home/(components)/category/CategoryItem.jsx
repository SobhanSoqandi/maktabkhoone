"use client";

import Link from "next/link";

export default function CategoryItem({ item, level, path, handleHover }) {
  return (
    <Link
      href={`/categories/${item.slug}/${item.id}`}
      onMouseEnter={() => handleHover(item, level)}
      className={`
        flex
        cursor-pointer
        items-center
        justify-between
        px-5
        py-3
        text-sm
        transition
        hover:bg-gray-100
        ${path[level]?.id === item.id ? "bg-gray-100" : ""}
      `}
    >
      <span>{item.title}</span>

      {item.children?.length > 0 && (
        <svg
          className="w-4 h-4 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m15 19-7-7 7-7"
          />
        </svg>
      )}
    </Link>
  );
}
