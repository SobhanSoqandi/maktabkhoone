import Image from "next/image";
import Link from "next/link";
import { HiClock, HiAcademicCap } from "react-icons/hi2";
import { base_url } from "../../../../data/info";

export default function CourseCard({ course }) {
  console.log(course);
  return (
    <Link
      href={`/Home/courses/${course.id}/${course.slug}`}
      className="group flex flex-col bg-white shadow-sm hover:shadow p-3 border border-gray-200 hover:border-teal-500 rounded-3xl h-full overflow-hidden transition-all duration-300"
    >
      <div className="relative m-auto pt-2 w-[95%] h-44">
        <Image
          src={base_url + course.banner}
          alt={course.title}
          fill
          unoptimized
          className="rounded-3xl object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="space-y-4 p-5">
        <h2 className="min-h-14 font-bold group-hover:text-teal-600 text-base line-clamp-2 leading-8 transition">
          {course.title}
        </h2>

        <p className="text-gray-500 text-sm">{course.teacher_name}</p>

        <div className="flex justify-between items-center text-gray-500 text-sm">
          <div className="flex items-center gap-1 badge">
            <HiAcademicCap />
            <span>{course.course_level}</span>
          </div>

          <div className="flex items-center gap-1">
            <HiClock />
            <span>{course.course_hour}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="bg-teal-50 px-3 py-1 rounded-full font-medium text-teal-700 text-xs">
            {course.status}
          </span>

          {course.price == 0 ? (
            <span className="bagde">رایگان</span>
          ) : (
            <>
              {course.discount > 0 ? (
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900 text-sm line-through">
                    {course.price.toLocaleString("fa-IR")}
                  </span>
                  <span className="font-bold text-gray-900 text-lg">
                    {(
                      course.price *
                      (1 - course.discount / 100)
                    ).toLocaleString("fa-IR")}
                    تومان
                  </span>
                </div>
              ) : (
                <span className="font-bold text-gray-900 text-lg">
                  {course.price.toLocaleString("fa-IR")} تومان
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
