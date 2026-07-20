"use client";

import { useState } from "react";
import Image from "next/image";
import {
  HiStar,
  HiOutlineStar,
} from "react-icons/hi2";

export default function ReviewModal({ course }) {
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="p-10">

      <div className="flex flex-col items-center">

        <div className="relative mx-auto h-20 w-32 overflow-hidden rounded-xl">
          <Image
            src={course.banner}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-center text-xl font-bold leading-10">
          {course.title}
        </h3>

        <p className="mt-2 text-gray-500">
          {course.teacher}
        </p>

      </div>

      <div className="mt-8">

        <h4 className="mb-7 text-center text-xl font-black">
          به این دوره چه امتیازی می‌دهید؟
        </h4>

        <div className="flex justify-center gap-5">

          {[5, 4, 3, 2, 1].map((star) => {
            const active = star <= (hover || rate);

            return (
              <button
                key={star}
                type="button"
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRate(star)}
                className="group"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition ${active
                    ? "bg-yellow-100"
                    : "bg-gray-100 hover:bg-yellow-50"
                    }`}
                >
                  {active ? (
                    <HiStar className="text-4xl text-yellow-500" />
                  ) : (
                    <HiOutlineStar className="text-4xl text-gray-400 transition group-hover:text-yellow-500" />
                  )}
                </div>

                <span className="my-2 block text-center text-lg font-medium">
                  {star.toLocaleString("fa-IR")}
                </span>

              </button>
            );
          })}

        </div>

      </div>

      <div className="mt-6">

        <label className="mb-3 block text-lg font-bold">
          نظر شما
        </label>

        <textarea
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="تجربه خود را از این دوره بنویسید..."
          className="w-full rounded-2xl border border-gray-200 p-5 outline-none transition focus:border-teal-500"
        />

      </div>

      <div className="mt-6 flex justify-end gap-4">

        <button
          type="button"
          className="btn btn-primary w-full"
        >
          انصراف
        </button>

        <button
          type="button"
          className="btn btn-success w-full"
        >
          ثبت دیدگاه
        </button>

      </div>

    </div>
  );
}