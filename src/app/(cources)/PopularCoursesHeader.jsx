"use client";

import { useState } from "react";
import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function PopularCoursesHeader({
  categories,
  activeCategory,
  setActiveCategory,
}) {
    const [active, setActive] = useState("همه");
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

            <div className="mb-8 flex items-center justify-between">

                <div className="flex items-center gap-3">
                    <div className="h-7 w-1.5 rounded-full bg-teal-500" />

                    <h2 className="text-2xl font-bold text-gray-900">
                        محبوب‌ترین دوره‌ها
                    </h2>
                </div>

            </div>

            <div className="flex items-center justify-between gap-8">

                <div className="flex-1 overflow-x-auto">
                    <div className="flex w-max items-center gap-3">

                        {allCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.slug)}
                                className={`rounded-full border px-6 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-200 ${activeCategory === category.slug
                                        ? "border-black bg-black text-white"
                                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                                    }`}
                            >
                                {category.title}
                            </button>
                        ))}

                    </div>
                </div>

                <div className="flex shrink-0 items-center gap-3">

                    <button className="popular-prev flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white transition hover:border-gray-300 hover:bg-gray-50">
                        <HiChevronRight className="text-2xl" />
                    </button>

                    <button className="popular-next flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white transition hover:border-gray-300 hover:bg-gray-50">
                        <HiChevronLeft className="text-2xl" />
                    </button>

                    <Link
                        href="/courses"
                        className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-medium transition hover:border-gray-300 hover:bg-gray-50"
                    >
                        مشاهده همه
                    </Link>

                </div>

            </div>

        </header>
    );
}