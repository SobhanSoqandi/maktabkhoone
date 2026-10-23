"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function BackButton({ className = "" }) {
  const router = useRouter();

  return (
    <button
      type="button"
      aria-label="بازگشت"
      onClick={() => router.back()}
      className="shrink-0 bg-blue-50 p-2 place-items-center rounded-xl "
    >
      <FaArrowLeftLong className="text-blue-500" />
    </button>
  );
}
