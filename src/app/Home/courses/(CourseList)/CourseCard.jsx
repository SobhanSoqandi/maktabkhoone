
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
      href={`/Home/courses/${course.id}/${course.title}`}
      className="group relative flex min-w-0 flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.045)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.20)] sm:rounded-[28px] md:flex-row"
    >
      <div className="relative p-2 m-2 rounded-3xl h-48 w-full shrink-0 overflow-hidden bg-gray-100 sm:h-60 md:h-auto md:min-h-[260px] md:w-[34%] md:max-w-[350px]">
        <Image
          src={banner}
          alt={course.title || "دوره آموزشی"}
          unoptimized
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 350px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {hasDiscount && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-xl border border-white/40 bg-white/95 px-3 py-2 text-xs font-extrabold text-rose-600 shadow-lg backdrop-blur-md sm:right-4 sm:top-4">
            <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-rose-50 text-[10px]">
              %
            </span>
            {toPersianNumbers(discount)}٪ تخفیف
          </span>
        )}

        {isFree && (
          <span className="absolute right-3 top-3 rounded-xl border border-white/30 bg-cyan-500 px-3 py-2 text-xs font-extrabold text-white shadow-lg sm:right-4 sm:top-4">
            رایگان
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-5 p-4 sm:gap-6 sm:p-6 lg:p-7">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-6 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-10" />
            <span className="text-[11px] font-bold tracking-wide text-blue-600 sm:text-xs">
              دوره آموزشی
            </span>
          </div>

          <h2 className="line-clamp-2 text-base font-extrabold leading-8 text-gray-800 transition-colors duration-300 group-hover:text-blue-600 sm:text-lg sm:leading-9">
            {course.title}
          </h2>

          <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-5 sm:gap-4">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-500 ring-1 ring-blue-100 transition-colors duration-300 group-hover:bg-blue-100 sm:h-10 sm:w-10">
                <HiUser className="text-lg" />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] text-gray-400 sm:text-[11px]">
                  مدرس دوره
                </p>
                <p className="mt-1 truncate text-xs font-bold text-gray-700 sm:text-sm">
                  {course.teacher_name}
                </p>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-gray-100 sm:block" />

            <div className="flex min-w-0 items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-500 ring-1 ring-indigo-100 sm:h-10 sm:w-10">
                <HiAcademicCap className="text-lg" />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] text-gray-400 sm:text-[11px]">
                  سطح دوره
                </p>
                <p className="mt-1 truncate text-xs font-bold text-gray-700 sm:text-sm">
                  {course.course_level || "عمومی"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-blue-50/80 px-3 py-2 text-xs font-semibold text-blue-700">
              <HiClock className="text-base" />
              <span>{toPersianNumbers(course.course_hour)} ساعت</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-dashed border-gray-200 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:pt-5">
          <div className="flex min-w-0 flex-col items-start gap-1.5">
            {isFree ? (
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
                  <HiAcademicCap className="text-lg" />
                </span>
                <span className="text-xl font-black text-cyan-500 sm:text-2xl">
                  رایگان
                </span>
              </div>
            ) : (
              <>
                {hasOldPrice && (
                  <span className="text-xs font-medium text-gray-400 line-through decoration-rose-400 decoration-2">
                    {oldPrice.toLocaleString("fa-IR")} تومان
                  </span>
                )}

                <div className="flex flex-wrap items-baseline gap-1.5">
                  <span className="text-xl font-black tracking-tight text-gray-900 sm:text-2xl">
                    {price.toLocaleString("fa-IR")}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-500 sm:text-xs">
                    تومان
                  </span>
                </div>

                {hasDiscount && (
                  <span className="text-[10px] font-semibold text-cyan-600 sm:text-[11px]">
                    با {toPersianNumbers(discount)}٪ تخفیف
                  </span>
                )}
              </>
            )}
          </div>

          <div className="flex w-full shrink-0 items-center justify-center gap-2 rounded-2xl bg-blue-500 px-5 py-3.5 text-sm font-extrabold text-white shadow-[0_6px_18px_rgba(37,99,235,0.22)] transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-[0_8px_24px_rgba(37,99,235,0.30)] sm:w-auto sm:min-w-[155px] sm:rounded-xl sm:py-3">
            <span>مشاهده دوره</span>
            <HiArrowLeft className="text-lg transition-transform duration-300 group-hover:-translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
