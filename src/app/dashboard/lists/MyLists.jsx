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
    {
      staleTime: 0,
    },
  );

  return (
    <section className="space-y-8">
      <div className="relative bg-gradient-to-l from-blue-50 via-white to-sky-50 p-6 sm:p-8 border border-blue-100 rounded-3xl overflow-hidden">
        <div className="-top-16 -left-12 absolute bg-blue-100/50 blur-3xl rounded-full w-48 h-48 pointer-events-none" />
        <div className="right-1/3 -bottom-16 absolute bg-sky-100/60 blur-3xl rounded-full w-36 h-36 pointer-events-none" />

        <div className="relative flex sm:flex-row flex-col sm:justify-between sm:items-center gap-5">
          <div className="flex items-start gap-4">
            <div className="flex justify-center items-center bg-blue-600 shadow-blue-600/20 shadow-lg rounded-2xl w-14 h-14 text-white shrink-0">
              <FiBookmark size={25} />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 bg-white/80 px-3 py-1 border border-blue-100 rounded-full font-semibold text-blue-700 text-xs">
                <FiHeart size={13} />
                مجموعه شخصی شما
              </span>

              <h1 className="font-extrabold text-gray-900 text-2xl sm:text-3xl tracking-tight">
                دوره‌های ذخیره‌شده
              </h1>

              <p className="max-w-lg text-gray-500 text-sm sm:text-base leading-7">
                دوره‌های موردعلاقه‌ات را یکجا داشته باش و هر زمان که خواستی به
                آن‌ها برگرد.
              </p>
            </div>
          </div>

          {!isLoading && myCourse.length > 0 && (
            <div className="flex items-center gap-3 bg-white/90 shadow-sm px-4 py-3 border border-blue-100 rounded-2xl w-fit">
              <div className="flex justify-center items-center bg-blue-50 rounded-xl w-10 h-10 text-blue-600">
                <FiBookOpen size={20} />
              </div>

              <div>
                <p className="font-medium text-gray-500 text-xs">
                  تعداد دوره‌ها
                </p>
                <p className="font-extrabold tabular-nums text-blue-700 text-xl">
                  {myCourse.length.toLocaleString("fa-IR")}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center bg-white p-8 border border-blue-100 rounded-3xl min-h-64">
          <Loading />
        </div>
      ) : myCourse.length > 0 ? (
        <div className="gap-6 grid md:grid-cols-2 xl:grid-cols-3">
          {myCourse.map((course) => (
            <WishlistCourseCard key={course.course.id} course={course.course} />
          ))}
        </div>
      ) : (
        <div className="relative bg-gradient-to-b from-blue-50/70 to-white px-6 py-14 sm:py-16 border border-blue-200 border-dashed rounded-3xl overflow-hidden text-center">
          <div className="-top-10 -right-10 absolute bg-blue-100/50 blur-3xl rounded-full w-36 h-36 pointer-events-none" />
          <div className="-bottom-12 -left-10 absolute bg-sky-100/50 blur-3xl rounded-full w-36 h-36 pointer-events-none" />

          <div className="relative flex justify-center items-center bg-white shadow-blue-100/60 shadow-lg mx-auto border border-blue-100 rounded-3xl w-20 h-20 text-blue-600">
            <FiBookmark size={34} strokeWidth={1.6} />
          </div>

          <h2 className="relative mt-6 font-extrabold text-gray-800 text-lg sm:text-xl">
            هنوز دوره‌ای ذخیره نکرده‌ای!
          </h2>

          <p className="relative mx-auto mt-3 max-w-md text-gray-500 text-sm leading-7">
            دوره‌هایی را که دوست داری به فهرست علاقه‌مندی‌ها اضافه کن تا همیشه
            به‌راحتی به آن‌ها دسترسی داشته باشی.
          </p>

          <div className="relative flex items-center gap-2 bg-blue-50 mx-auto mt-6 px-4 py-2 rounded-full w-fit font-medium text-blue-700 text-xs">
            <FiHeart size={14} />
            <span>دوره‌های موردعلاقه‌ات را اینجا نگه دار</span>
          </div>
        </div>
      )}
    </section>
  );
}
