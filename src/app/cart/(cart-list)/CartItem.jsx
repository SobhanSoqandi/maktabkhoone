
"use client";

import Image from "next/image";
import { BiTrash } from "react-icons/bi";
import { base_url } from "../../../../data/info";
import useMutationData from "@/app/(hooks)/useMutationData";
import { useQueryClient } from "@tanstack/react-query";
import { toPersianNumbers } from "@/app/Utils/toPersianNumbers";

export default function CartItem({ course }) {
  const queryClient = useQueryClient();

  const { mutate: delete_course } = useMutationData(
    `cart-course/${course.cart_course_id}`,
    "delete",
    "course_delete",
    "دوره با موفقیت حذف شد ",
    {
      onSuccess: () => {
        console.log("INVALIDATE");

        queryClient.invalidateQueries({
          queryKey: ["get_cart"],
        });

        console.log("INVALIDATE DONE");
      },
    },
  );

  return (
    <article className="group flex flex-col gap-4 rounded-2xl border border-blue-100 bg-white p-3 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-[0_10px_30px_-18px_rgba(37,99,235,0.3)] sm:flex-row sm:items-center sm:gap-5 sm:p-4">
      <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl bg-blue-50 sm:h-28 sm:w-40 md:h-32 md:w-48">
        <Image
          src={base_url + course.course.banner}
          alt={course.course.title}
          unoptimized
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 sm:py-1">
        <h3 className="line-clamp-2 text-base font-black leading-7 text-slate-800 transition-colors duration-300 group-hover:text-blue-700 sm:text-lg">
          {course.course.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {course.discount > 0 && (
            <span className="rounded-lg border border-blue-100 bg-blue-50 px-2.5 py-1.5 text-xs font-bold text-blue-600 sm:text-sm">
              {((course.discount * course.course.price) / 100).toLocaleString(
                "fa-IR",
              )}{" "}
              تومان تخفیف
            </span>
          )}

          <div className="flex flex-wrap items-baseline gap-1.5">
            <span className="text-xl tracking-tight text-slate-900 sm:text-xl">
              {toPersianNumbers(course.course.price)}
            </span>

            <span className="text-xs font-medium text-slate-400 sm:text-sm">
              تومان
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end border-t border-slate-100 pt-3 sm:ml-1 sm:border-0 sm:pt-0">
        <button
          type="button"
          onClick={() => delete_course()}
          aria-label="حذف دوره از سبد خرید"
          title="حذف از سبد خرید"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-500 transition-all duration-200 hover:border-red-100 hover:bg-red-50 hover:text-red-500 active:scale-95 sm:h-11 sm:w-11"
        >
          <BiTrash size={22} />
        </button>
      </div>
    </article>
  );
}
