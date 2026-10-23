
"use client";

import Image from "next/image";
import Link from "next/link";
import { base_url } from "../../../../data/info";
import { HiOutlineClock } from "react-icons/hi2";
import { FiBookOpen } from "react-icons/fi";

export default function WishlistCourseCard({ course }) {
  return (
    <Link
      href={`/Home/courses/${course.id}/${course.slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/60"
    >
      <div className="relative h-48 overflow-hidden bg-blue-50">
        <Image
          src={`${base_url}${course.banner}`}
          alt={course.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
          {course.course_level}
        </span>
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        <h3 className="line-clamp-2 min-h-12 text-base font-bold leading-6 text-gray-800 transition-colors group-hover:text-blue-700">
          {course.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <HiOutlineClock size={18} className="text-blue-600" />
          <span>{course.course_hour} ساعت آموزش</span>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FiBookOpen size={17} className="text-blue-600" />
            <span>قیمت دوره</span>
          </div>

          <div className="flex items-baseline gap-1">
            <span className="text-lg font-extrabold text-blue-700">
              {Number(course.price).toLocaleString("fa-IR")}
            </span>
            <span className="text-xs text-gray-500">تومان</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
