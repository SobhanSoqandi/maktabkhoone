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
      <div className="flex justify-between items-center mb-5 md:mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 rounded-full w-1.5 h-7 shrink-0" />
          <h2 className="font-bold text-gray-900 text-xl md:text-2xl">
            {header_title}
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:gap-8">
        <div className="order-2 w-full min-w-0 overflow-x-auto scrollbar-hide md:order-1 md:flex-1">
          <div className="flex items-center gap-2.5 md:gap-3 w-max">
            {allCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === category.id
                    ? "border-blue-500 bg-blue-500 text-white"
                    : "border-gray-200 bg-white text-gray-500 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="order-1 flex items-center justify-between gap-3 w-full md:order-2 md:w-auto md:justify-start shrink-0">
          <Link
            href="/Home/courses"
            className="btn btn-light p-3 whitespace-nowrap text-sm"
          >
          مشاهده همه دوره ها
          </Link>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              aria-label="اسلاید قبلی"
              className={`btn-next prev-${sliderId}`}
            >
              <HiChevronRight className="text-2xl" />
            </button>

            <button
              type="button"
              aria-label="اسلاید بعدی"
              className={`btn-next next-${sliderId}`}
            >
              <HiChevronLeft className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
