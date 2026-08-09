"use client";

import Image from "next/image";
import { BiTrash } from "react-icons/bi";
import { base_url } from "../../../../data/info";
import useMutationData from "@/app/(hooks)/useMutationData";
import { useQueryClient } from "@tanstack/react-query";

export default function CartItem({ course }) {
  const queryClient = useQueryClient();
  const { mutate: delete_course } = useMutationData(
    `cart-course/${course.cart_course_id}`,
    "delete",
    "course_delete",
    "دوره با موفقیت حذف شد ",
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["cart"],
        });
      },
    },
  );
  return (
    <div className="flex items-center gap-5 shadow p-2 border border-gray-200 rounded-2xl">
      <div className="relative rounded-2xl w-56 h-32 overflow-hidden">
        <Image
          src={base_url + course.course.banner}
          alt={course.course.title}
          unoptimized
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-black text-lg">{course.course.title}</h3>

        {/* <p className="mt-2 text-gray-500">{course.teacher}</p> */}

        <div className="flex items-center gap-3 mt-5">
          {course.discount > 0 && (
            <span className="text-teal-600 text-lg">
              {((course.discount * course.course.price) / 100).toLocaleString(
                "fa-IR",
              )}{" "}
              تومان تخفیف
            </span>
          )}

          <span className="font-black text-xl">
            {course.course.price.toLocaleString("fa-IR")}
          </span>

          <span className="text-gray-500">تومان</span>
        </div>
      </div>

      <button
        onClick={() => delete_course()}
        className="hover:shadow-2xl p-2 text-gray-500 hover:text-red-500 btn btn-primary"
      >
        <BiTrash size={22} />
      </button>
    </div>
  );
}
