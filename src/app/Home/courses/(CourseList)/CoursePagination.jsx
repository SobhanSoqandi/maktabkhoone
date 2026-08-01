"use client";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CoursePagination({ totalPages }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  function changePage(page) {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page.toString());

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-3 mt-12">
      <button
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
        className="flex justify-center items-center disabled:opacity-40 border rounded-xl w-12 h-12 transition"
      >
        <HiChevronRight className="text-xl" />
      </button>

      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`
              h-12
              w-12
              rounded-xl
              border
              text-lg
              font-bold
              transition

              ${
                currentPage === page
                  ? "bg-teal-600 text-white border-teal-600"
                  : "hover:bg-gray-100"
              }
            `}
          >
            {page.toLocaleString("fa-IR")}
          </button>
        );
      })}

      <button
        disabled={currentPage === totalPages}
        onClick={() => changePage(currentPage + 1)}
        className="flex justify-center items-center disabled:opacity-40 border rounded-xl w-12 h-12 transition"
      >
        <HiChevronLeft className="text-xl" />
      </button>
    </div>
  );
}
