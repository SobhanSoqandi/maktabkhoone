"use client";

import Image from "next/image";
import Link from "next/link";
import { base_url } from "../../../../data/info";
import { HiOutlineClock } from "react-icons/hi2";

export default function WishlistCourseCard({ course }) {
  return (
    <Link
      href={`/Home/courses/${course.id}/${course.slug}`}
      className="group bg-white hover:shadow-lg border border-gray-200 rounded-2xl overflow-hidden transition"
    >
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={`${base_url}${course.banner}`}
          alt={course.title}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="space-y-4 p-5">
        <h3 className="font-bold text-lg line-clamp-2">{course.title}</h3>

        <div className="flex justify-between items-center text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <HiOutlineClock size={18} />
            <span>{course.course_hour} ساعت</span>
          </div>

          <span className="bg-indigo-50 px-3 py-1 rounded-full text-indigo-600 text-xs">
            {course.course_level}
          </span>
        </div>

        <div className="flex justify-between items-center pt-3 border-t">
          <span className="text-gray-500 text-sm">قیمت دوره</span>

          <span className="font-bold text-indigo-600 text-xl">
            {Number(course.price).toLocaleString()} تومان
          </span>
        </div>
      </div>
    </Link>
  );
}
