
"use client";

import { toPersianNumbers } from "@/app/Utils/toPersianNumbers";
import Image from "next/image";
import Link from "next/link";
import { HiClock, HiUser, HiArrowLeft, HiAcademicCap } from "react-icons/hi2";
import { base_url } from "../../../../../data/info";

export default function CourseCard({ course }) {
  const price = Number(course.price) || 0;
  const oldPrice = Number(course.old_price) || 0;
  const discount = Math.max(0, Math.min(100, Number(course.discount) || 0));
  const isFree = price === 0;
  const hasDiscount = !isFree && discount > 0;
  const hasOldPrice = !isFree && oldPrice > price && oldPrice > 0;
  const banner = course.banner
    ? base_url + course.banner
    : "/images/default.png";

  return (
    <Link
      href={`/Home/courses/${course.id}/${course.slug}`}
      className="group relative flex md:flex-row flex-col bg-white shadow-[0_4px_24px_rgba(15,23,42,0.045)] hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.20)] border border-gray-200/80 hover:border-blue-300 rounded-3xl sm:rounded-[28px] min-w-0 overflow-hidden transition-all hover:-translate-y-1 duration-500"
    >
      <div className="relative bg-gray-100 m-2 p-2 rounded-3xl w-full md:w-[34%] md:max-w-[350px] h-48 sm:h-60 md:h-auto md:min-h-[260px] overflow-hidden shrink-0">
        <Image
          src={banner}
          alt={course.title || "دوره آموزشی"}
          unoptimized
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 350px"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {hasDiscount && (
          <span className="inline-flex top-3 sm:top-4 right-3 sm:right-4 absolute items-center gap-1.5 bg-white/95 shadow-lg backdrop-blur-md px-3 py-2 border border-white/40 rounded-xl font-extrabold text-rose-600 text-xs">
            <span className="flex justify-center items-center bg-rose-50 rounded-lg w-5 h-5 text-[10px]">
              %
            </span>
            {toPersianNumbers(discount)}٪ تخفیف
          </span>
        )}

        {isFree && (
          <span className="top-3 sm:top-4 right-3 sm:right-4 absolute bg-cyan-500 shadow-lg px-3 py-2 border border-white/30 rounded-xl font-extrabold text-white text-xs">
            رایگان
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 justify-between gap-5 sm:gap-6 p-4 sm:p-6 lg:p-7 min-w-0">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-500 rounded-full w-6 group-hover:w-10 h-1.5 transition-all duration-300" />
            <span className="font-bold text-[11px] text-blue-600 sm:text-xs tracking-wide">
              دوره آموزشی
            </span>
          </div>

          <h2 className="font-extrabold text-gray-800 group-hover:text-blue-600 text-base sm:text-lg line-clamp-2 leading-8 sm:leading-9 transition-colors duration-300">
            {course.title}
          </h2>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 sm:mt-5">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex justify-center items-center bg-blue-50 group-hover:bg-blue-100 rounded-xl ring-1 ring-blue-100 w-9 sm:w-10 h-9 sm:h-10 text-blue-500 transition-colors duration-300 shrink-0">
                <HiUser className="text-lg" />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] text-gray-400 sm:text-[11px]">
                  مدرس دوره
                </p>
                <p className="mt-1 font-bold text-gray-700 text-xs sm:text-sm truncate">
                  {course.teacher_name}
                </p>
              </div>
            </div>

            <div className="hidden sm:block bg-gray-100 w-px h-8" />

            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex justify-center items-center bg-indigo-50 rounded-xl ring-1 ring-indigo-100 w-9 sm:w-10 h-9 sm:h-10 text-indigo-500 shrink-0">
                <HiAcademicCap className="text-lg" />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] text-gray-400 sm:text-[11px]">
                  سطح دوره
                </p>
                <p className="mt-1 font-bold text-gray-700 text-xs sm:text-sm truncate">
                  {course.course_level || "عمومی"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-blue-50/80 px-3 py-2 rounded-xl font-semibold text-blue-700 text-xs">
              <HiClock className="text-base" />
              <span>{toPersianNumbers(course.course_hour)} ساعت</span>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-4 sm:gap-5 pt-4 sm:pt-5 border-gray-200 border-t border-dashed">
          <div className="flex flex-col items-start gap-1.5 min-w-0">
            {isFree ? (
              <div className="flex items-center gap-2">
                <span className="flex justify-center items-center bg-cyan-50 rounded-xl w-8 h-8 text-cyan-500">
                  <HiAcademicCap className="text-lg" />
                </span>
                <span className="font-black text-cyan-500 text-xl sm:text-2xl">
                  رایگان
                </span>
              </div>
            ) : (
              <>
                {hasOldPrice && (
                  <span className="font-medium text-gray-400 text-xs decoration-2 decoration-rose-400 line-through">
                    {oldPrice.toLocaleString("fa-IR")} تومان
                  </span>
                )}

                <div className="flex flex-wrap items-baseline gap-1.5">
                  <span className="font-black text-gray-900 text-xl sm:text-2xl tracking-tight">
                    {price.toLocaleString("fa-IR")}
                  </span>
                  <span className="font-semibold text-[11px] text-gray-500 sm:text-xs">
                    تومان
                  </span>
                </div>

                {hasDiscount && (
                  <span className="font-semibold text-[10px] text-cyan-600 sm:text-[11px]">
                    با {toPersianNumbers(discount)}٪ تخفیف
                  </span>
                )}
              </>
            )}
          </div>

          <div className="flex justify-center items-center gap-2 bg-blue-500 group-hover:bg-blue-600 shadow-[0_6px_18px_rgba(37,99,235,0.22)] group-hover:shadow-[0_8px_24px_rgba(37,99,235,0.30)] px-5 py-3.5 sm:py-3 rounded-2xl sm:rounded-xl w-full sm:w-auto sm:min-w-[155px] font-extrabold text-white text-sm transition-all duration-300 shrink-0">
            <span>مشاهده دوره</span>
            <HiArrowLeft className="text-lg transition-transform group-hover:-translate-x-1 duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}
