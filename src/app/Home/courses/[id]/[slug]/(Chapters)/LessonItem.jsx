import {
  HiOutlineLockClosed,
  HiOutlinePlayCircle,
} from "react-icons/hi2";

export default function LessonItem({ lesson }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 px-8 py-4 last:border-0">

      <div className="flex items-center gap-3">

        {lesson.is_free ? (
          <HiOutlinePlayCircle className="text-2xl text-teal-600" />
        ) : (
          <HiOutlineLockClosed className="text-xl text-gray-400" />
        )}

        <span className="text-gray-800">
          {lesson.title}
        </span>

        {lesson.is_free && (
          <span className="rounded-full bg-teal-100 px-2 py-1 text-xs font-bold text-teal-700">
            رایگان
          </span>
        )}

      </div>

      <span className="text-sm text-gray-500">
        {lesson.duration} دقیقه
      </span>

    </div>
  );
}