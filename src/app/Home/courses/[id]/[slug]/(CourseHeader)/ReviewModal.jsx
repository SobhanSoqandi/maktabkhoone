"use client";

import { useState } from "react";
import Image from "next/image";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import { base_url } from "../../../../../../../data/info";
import { useModal } from "@/app/(components)/modal";
import useMutationData from "@/app/(hooks)/useMutationData";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ReviewModal({ course }) {
  const [rate, setRate] = useState(0);
  const router = useRouter();
  const { setActiveModal } = useModal();
  const [comment, setComment] = useState("");
  const { mutate: commit_reviw } = useMutationData(
    "review",
    "post",
    "reviw-commit",
    "نظر با موفقیت ثبت شد ",
    {
      onSuccess: () => {
        setActiveModal(null);
        router.refresh();
      },
      onError: (error) => {
        toast.error(error.response?.data?.detail || "خطایی رخ داده است");
      },
    },
  );
  return (
    <div className="p-10">
      <div className="flex flex-col items-center">
        <div className="relative mx-auto rounded-xl w-32 h-20 overflow-hidden">
          <Image
            src={base_url + course.banner}
            alt={course.title}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <h3 className="font-bold text-xl text-center leading-10">
          {course.title}
        </h3>

        <p className="mt-2 text-gray-500">{course.teacher}</p>
      </div>

      <div className="mt-8">
        <h4 className="mb-7 font-black text-xl text-center">
          به این دوره چه امتیازی می‌دهید؟
        </h4>

        <div className="flex flex-row-reverse justify-center gap-5">
          {[1, 2, 3, 4, 5].map((star) => {
            const active = star <= rate;

            return (
              <button
                key={star}
                type="button"
                onClick={() => setRate(star)}
                className="group"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition ${
                    active ? "bg-yellow-100" : "bg-gray-100"
                  }`}
                >
                  {active ? (
                    <HiStar className="text-yellow-500 text-4xl" />
                  ) : (
                    <HiOutlineStar className="text-gray-400 text-4xl" />
                  )}
                </div>

                <span className="block my-2 font-medium text-lg text-center">
                  {star.toLocaleString("fa-IR")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <label className="block mb-3 font-bold text-lg">نظر شما</label>

        <textarea
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="تجربه خود را از این دوره بنویسید..."
          className="p-5 border border-gray-200 focus:border-teal-500 rounded-2xl outline-none w-full transition"
        />
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button
          type="button"
          className="w-full btn btn-primary"
          onClick={() => setActiveModal(null)}
        >
          انصراف
        </button>

        <button
          type="button"
          className="w-full btn btn-success"
          onClick={() => {
            commit_reviw({
              data: {
                course_id: course.id,
                rating: rate,
                comment: comment,
              },
            });
          }}
        >
          ثبت دیدگاه
        </button>
      </div>
    </div>
  );
}
