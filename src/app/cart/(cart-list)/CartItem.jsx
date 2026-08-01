"use client";

import Image from "next/image";
import { BiTrash } from "react-icons/bi";

export default function CartItem({ course }) {
  return (
   <div className="flex items-center gap-5 border border-gray-200 shadow p-2 rounded-2xl">

  <div className="relative h-32 w-56 overflow-hidden rounded-2xl">
    <Image
      src={course.banner}
      alt={course.title}
      fill
      className="object-cover"
    />
  </div>


  <div className="flex-1">

    <h3 className="text-lg font-black">
      {course.title}
    </h3>

    <p className="mt-2 text-gray-500">
      {course.teacher}
    </p>

    <div className="mt-5 flex items-center gap-3">

      {course.discount > 0 && (
        <span className="text-lg text-teal-600">
          {course.discount.toLocaleString("fa-IR")} تومان تخفیف
        </span>
      )}

      <span className="text-xl font-black">
        {course.price.toLocaleString("fa-IR")}
      </span>

      <span className="text-gray-500">
        تومان
      </span>

    </div>

  </div>


  <button
    className="btn btn-primary text-gray-500 p-2 hover:shadow-2xl hover:text-red-500"
  >
    <BiTrash size={22}/>
  </button>

</div>
  );
}