"use client";

import Link from "next/link";

export default function CategoryItem({
  item,
  level,
  path,
  handleHover,
  handleClick,
  handleClose,
}) {
  const hasChildren = item.children?.length > 0;
  const active = path[level]?.id === item.id;

  const className = `
    group
    flex
    cursor-pointer
    items-center
    justify-between
    mx-2
    px-4
    py-3
    rounded-xl
    text-sm
    transition-all
    duration-200
    ${active ? "bg-teal-50 text-teal-700" : "text-gray-700 hover:bg-gray-50"}
  `;

  return (
    <div onMouseEnter={() => handleHover(item, level)} className={className}>
      <Link
        onClick={handleClose}
        href={`/Home/courses?category_id=${item.id}`}
        className="flex-1 font-medium transition-colors"
      >
        {item.title}
      </Link>

      {hasChildren && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            handleClick(item, level);
          }}
          className="flex justify-center items-center hover:bg-white hover:shadow-sm rounded-full w-7 h-7 transition-all duration-200"
        >
          <svg
            className={`
              w-4
              h-4
              text-gray-500
              transition-transform
              duration-300
              group-hover:text-teal-600
              ${active ? "-rotate-90" : "group-hover:-translate-x-1"}
            `}
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
        </button>
      )}
    </div>
  );
}
