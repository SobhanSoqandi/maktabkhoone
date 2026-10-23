import Image from "next/image";
import Link from "next/link";
import {
  HiClock,
  HiAcademicCap,
  HiArrowLeft,
  HiOutlineUser,
} from "react-icons/hi2";
import { base_url } from "../../../../data/info";

export default function CourseCard({ course }) {
  const price = Number(course.price) || 0;
  const discount = Math.min(100, Math.max(0, Number(course.discount) || 0));
  const discountedPrice = price * (1 - discount / 100);

  return (
    <Link
      href={`/Home/courses/${course.id}/${course.slug}`}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-2.5 shadow-[0_3px_16px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_14px_32px_rgba(37,99,235,0.12)] sm:rounded-3xl sm:p-3"
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:rounded-2xl">
        <Image
          src={course.banner ? base_url + course.banner : "/images/default.png"}
          alt={course.title || "دوره آموزشی"}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-70" />

        {discount > 0 && price > 0 && (
          <span className="absolute left-2.5 top-2.5 rounded-lg border border-white/20 bg-blue-500 px-2.5 py-1.5 text-[10px] font-extrabold text-white shadow-lg sm:left-3 sm:top-3 sm:text-xs">
            {discount.toLocaleString("fa-IR")}٪ تخفیف
          </span>
        )}

        {price === 0 && (
          <span className="absolute left-2.5 top-2.5 rounded-lg bg-blue-500 px-2.5 py-1.5 text-[10px] font-extrabold text-white shadow-lg sm:left-3 sm:top-3 sm:text-xs">
            رایگان
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-1 pt-3 sm:px-1.5 sm:pt-4">
        <div className="mb-2.5 flex min-w-0 items-center justify-between gap-2">
          <span className="inline-flex min-w-0 items-center gap-1 rounded-lg bg-blue-50 px-2 py-1.5 text-[10px] font-bold text-blue-700 sm:text-xs">
            <HiAcademicCap className="shrink-0 text-sm sm:text-base" />
            <span className="truncate">{course.course_level || "عمومی"}</span>
          </span>

          <span className="inline-flex shrink-0 items-center gap-1 text-[10px] font-medium text-slate-500 sm:text-xs">
            <HiClock className="text-sm text-blue-500 sm:text-base" />
            <span>{course.course_hour}</span>
          </span>
        </div>

        <h2 className="mb-3 line-clamp-2 min-h-[48px] text-sm font-extrabold leading-6 text-slate-800 transition-colors duration-300 group-hover:text-blue-700 sm:min-h-[52px] sm:text-base sm:leading-7">
          {course.title}
        </h2>

        <div className="mb-3 flex min-w-0 items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-500 transition-colors duration-300 group-hover:bg-blue-100 sm:h-9 sm:w-9">
            <HiOutlineUser className="text-base sm:text-lg" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="mb-0.5 text-[10px] text-slate-400">
              مدرس دوره
            </p>
            <p className="truncate text-[11px] font-bold text-slate-700 sm:text-xs">
              {course.teacher_name}
            </p>
          </div>

          {course.status && (
            <span className="max-w-[40%] truncate rounded-md bg-slate-50 px-2 py-1 text-[9px] font-semibold text-slate-500 sm:text-[10px]">
              {course.status}
            </span>
          )}
        </div>

        <div className="mt-auto border-t border-dashed border-slate-200 pt-3">
          <div className="flex min-w-0 flex-wrap items-center justify-between gap-2">
            <div className="flex min-w-0 flex-col gap-0.5">
              {price === 0 ? (
                <span className="text-base font-black text-blue-500 sm:text-lg">
                  رایگان
                </span>
              ) : (
                <>
                  {discount > 0 && (
                    <span className="text-[10px] font-medium text-slate-400 line-through sm:text-[11px]">
                      {price.toLocaleString("fa-IR")} تومان
                    </span>
                  )}

                  <div className="flex flex-wrap items-baseline gap-1">
                    <span className="text-sm font-black tracking-tight text-slate-900 sm:text-lg">
                      {(discount > 0 ? discountedPrice : price).toLocaleString(
                        "fa-IR",
                      )}
                    </span>
                    <span className="text-[9px] font-medium text-slate-500 sm:text-[10px]">
                      تومان
                    </span>
                  </div>
                </>
              )}
            </div>

            <div className="flex shrink-0 items-center gap-1 rounded-xl bg-blue-500 px-2.5 py-2.5 text-[10px] font-bold text-white shadow-sm shadow-blue-500/20 transition-all duration-300 group-hover:bg-blue-700 group-hover:shadow-md sm:gap-1.5 sm:px-3 sm:text-xs">
              <span>مشاهده دوره</span>
              <HiArrowLeft className="text-sm transition-transform duration-300 group-hover:-translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}