import Link from "next/link";
import { FiBookOpen, FiChevronLeft } from "react-icons/fi";

function MyCourseCard({ course, studentsCount }) {
  return (
    <Link
      href={`/teacher-panel/mystudents/${course.id}`}
      className="flex items-center justify-between gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200"
    >
      <div className="flex items-center gap-2 min-w-0">
        <div className="w-11 h-11 shrink-0 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
          <FiBookOpen size={20} />
        </div>

        <div className="min-w-0">
          <h3 className="md:font-bold text-gray-800 truncate">{course.title}</h3>
          <p className="text-xs text-gray-400 mt-1 truncate">{course.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-6 text-sm shrink-0">
        <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg">
          {studentsCount} دانش‌آموز
        </span>
        <FiChevronLeft className="text-gray-400" />
      </div>
    </Link>
  );
}

export default MyCourseCard;
