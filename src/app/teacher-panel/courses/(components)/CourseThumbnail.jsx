import { FiCode } from "react-icons/fi";

export function CourseThumbnail({ brandLabel, gradientFrom, gradientTo }) {
  return (
    <div
      className={[
        "relative h-36 w-full shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br",
        "sm:h-40 md:h-[120px] md:w-[210px]",
        gradientFrom,
        gradientTo,
      ].join(" ")}
    >
      <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white">
        <FiCode size={14} />
      </span>
      <span className="absolute inset-0 flex items-center justify-center px-4 text-center text-base font-bold text-white/90 sm:text-lg">
        {brandLabel}
      </span>
    </div>
  );
}
