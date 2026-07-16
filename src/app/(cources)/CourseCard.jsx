import Image from "next/image";
import Link from "next/link";
import { HiClock, HiAcademicCap } from "react-icons/hi2";

export default function CourseCard({ course }) {
  return (
   <Link
  href={`/courses/${course.slug}`}
  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-teal-500 hover:shadow"
>
      <div className="relative h-40 overflow-hidden">
        <Image
          src={course.banner}
          alt={course.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">

        <h2 className="line-clamp-2 min-h-14 text-base font-bold leading-8 transition group-hover:text-teal-600">
          {course.title}
        </h2>

        <p className="text-sm text-gray-500">
          {course.teacher}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">

          <div className="flex items-center gap-1 badge">
            <HiAcademicCap />
            <span >{course.course_level}</span>
          </div>

          <div className="flex items-center gap-1">
            <HiClock />
            <span>{course.course_hour}</span>
          </div>

        </div>

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
            {course.status}
          </span>

          {course.is_free ? (
            <span className="bagde">
              رایگان
            </span>
          ) : (
            <span className="text-lg font-bold text-gray-900">
              {course.price.toLocaleString("fa-IR")} تومان
            </span>
          )}

        </div>

      </div>
    </Link>
  );
}