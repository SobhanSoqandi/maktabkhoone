"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function BackButton({ className = "" , lable }) {
  const router = useRouter();

  return (
    <button
      type="button"
      aria-label="بازگشت"
      onClick={() => router.back()}
      className="flex gap-2 text-blue-500 bg-blue-50 p-2 place-items-center rounded-xl "
    >
      {lable}
      <FaArrowLeftLong />
    </button>
  );
}
