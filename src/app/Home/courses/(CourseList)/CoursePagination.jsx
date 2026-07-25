"use client";

import {
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";

export default function CoursePagination({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex items-center justify-center gap-3">

      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          border
          transition
          disabled:opacity-40
        "
      >
        <HiChevronRight className="text-xl" />
      </button>

      {Array.from({ length: totalPages }).map((_, index) => {

        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
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
        onClick={() => setCurrentPage(currentPage + 1)}
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          border
          transition
          disabled:opacity-40
        "
      >
        <HiChevronLeft className="text-xl" />
      </button>

    </div>
  );
}