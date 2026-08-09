"use client";

import { toPersianNumbers } from "@/app/Utils/toPersianNumbers";
import Image from "next/image";
import Link from "next/link";
import { base_url } from "../../../../../data/info";

export default function CourseCard({ course }) {
  
  return (
    <Link
      href={`/Home/courses/${course.id}/${course.title}`}
      className="flex md:flex-row flex-col bg-white hover:shadow-lg border border-gray-200 sm:rounded-2xl overflow-hidden transition"
    >
      <div className="relative p-2 rounded-3xl w-full md:w-[350px] h-44 overflow-hidden shrink-0">
        <Image
          src={base_url + course.banner}
          alt={course.title}
          unoptimized
          fill
          className="p-3 rounded-3xl object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 justify-between p-5">
        <div>
          <h2 className="font-black text-lg line-clamp-2 leading-[60px]">
            {course.title}
          </h2>

          <p className="text-gray-500 text-sm">{course.teacher_name}</p>
        </div>

        <div className="left-0 flex justify-between mt-3">
          <span className="max-w-24 text-xs badge">
            {course.course_hour} ساعت
          </span>

          <div className="flex items-center gap-4">
            {course.discount > 0 && (
              <span className="bg-rose-500 p-1 px-3 text-white text-xs badge">
                %{toPersianNumbers(course.discount)}
              </span>
            )}

            {course.price == 0 ? (
              <span className="bg-teal-500 px-5 text-white badge">رایگان</span>
            ) : (
              <div className="flex items-end gap-2">
                <span className="font-black text-lg">
                  {course.price.toLocaleString("fa-IR")}
                </span>

                <span className="pb-1 text-sm">تومان</span>

                {course.old_price && (
                  <span className="text-gray-400 text-lg line-through">
                    {course.old_price.toLocaleString("fa-IR")}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}