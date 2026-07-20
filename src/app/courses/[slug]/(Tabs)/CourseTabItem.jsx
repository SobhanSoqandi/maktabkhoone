"use client";

export default function CourseTabItem({
  tab,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        flex
        h-16
        shrink-0
        items-center
        px-6
        text-sm
        font-semibold
        transition-all
        duration-300

        ${
          active
            ? "text-teal-600"
            : "text-gray-500 hover:text-gray-900"
        }
      `}
    >
      {tab.title}

      <span
        className={`
          absolute
          bottom-0
          left-0
          h-1.5
          rounded-b-xl
          w-full
          px-auto
          rounded-full
          bg-teal-600
          transition-all
          duration-300

          ${
            active
              ? "scale-x-100"
              : "scale-x-0"
          }
        `}
      />
    </button>
  );
}