"use client";

import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function PopularCoursesHeader({
  categories,
  activeCategory,
  setActiveCategory,
  header_title,
  sliderId,
}) {
  const allCategories = [
    {
      id: 0,
      title: "همه",
      slug: "all",
    },
    ...categories,
  ];

  return (
    <header className="mb-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-teal-500 rounded-full w-1.5 h-7" />

          <h2 className="font-bold text-gray-900 text-2xl">{header_title}</h2>
        </div>
      </div>

      <div className="flex justify-between items-center gap-8">
        <div className="flex-1 overflow-x-auto">
          <div className="flex items-center gap-3 w-max">
            {allCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full border px-6 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === category.id
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            className={`flex justify-center items-center bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-xl w-12 h-12 transition prev-${sliderId}`}
          >
            <HiChevronRight className="text-2xl" />
          </button>

          <button
            className={`flex justify-center items-center bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-xl w-12 h-12 transition next-${sliderId}`}
          >
            <HiChevronLeft className="text-2xl" />
          </button>

          <Link
            href="/courses"
            className="bg-white hover:bg-gray-50 px-6 py-3 border border-gray-200 hover:border-gray-300 rounded-xl font-medium text-sm transition"
          >
            مشاهده همه
          </Link>
        </div>
      </div>
    </header>
  );
}
