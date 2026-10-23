
"use client";

import CourcesCard from "../courses/CourcesCard";
import { WishListContext } from "@/context/WishListContext";
import WishlistCourseCard from "./WishlistCard";
import useGet from "@/app/(hooks)/useGet";
import Loading from "@/app/(components)/Loading";
import { FiBookmark, FiBookOpen, FiHeart } from "react-icons/fi";

export default function MyList() {
  const { data: myCourse, isLoading } = useGet(
    "wishlists/me/courses",
    "wishlist_course",
  );

  return (
    <section className="space-y-8">
      <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-l from-blue-50 via-white to-sky-50 p-6 sm:p-8">
        <div className="pointer-events-none absolute -left-12 -top-16 h-48 w-48 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 right-1/3 h-36 w-36 rounded-full bg-sky-100/60 blur-3xl" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <FiBookmark size={25} />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-xs font-semibold text-blue-700">
                <FiHeart size={13} />
                مجموعه شخصی شما
              </span>

              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                دوره‌های ذخیره‌شده
              </h1>

              <p className="max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
                دوره‌های موردعلاقه‌ات را یکجا داشته باش و هر زمان که خواستی
                به آن‌ها برگرد.
              </p>
            </div>
          </div>

          {!isLoading && myCourse.length > 0 && (
            <div className="flex w-fit items-center gap-3 rounded-2xl border border-blue-100 bg-white/90 px-4 py-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FiBookOpen size={20} />
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500">
                  تعداد دوره‌ها
                </p>
                <p className="text-xl font-extrabold tabular-nums text-blue-700">
                  {myCourse.length.toLocaleString("fa-IR")}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="flex min-h-64 items-center justify-center rounded-3xl border border-blue-100 bg-white p-8">
          <Loading />
        </div>
      ) : myCourse.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {myCourse.map((course) => (
            <WishlistCourseCard
              key={course.course.id}
              course={course.course}
            />
          ))}
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-3xl border border-dashed border-blue-200 bg-gradient-to-b from-blue-50/70 to-white px-6 py-14 text-center sm:py-16">
          <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-sky-100/50 blur-3xl" />

          <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-blue-100 bg-white text-blue-600 shadow-lg shadow-blue-100/60">
            <FiBookmark size={34} strokeWidth={1.6} />
          </div>

          <h2 className="relative mt-6 text-lg font-extrabold text-gray-800 sm:text-xl">
            هنوز دوره‌ای ذخیره نکرده‌ای!
          </h2>

          <p className="relative mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500">
            دوره‌هایی را که دوست داری به فهرست علاقه‌مندی‌ها اضافه کن تا
            همیشه به‌راحتی به آن‌ها دسترسی داشته باشی.
          </p>

          <div className="relative mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-700">
            <FiHeart size={14} />
            <span>دوره‌های موردعلاقه‌ات را اینجا نگه دار</span>
          </div>
        </div>
      )}
    </section>
  );
}
