import { toPersianDate } from "@/app/Utils/date";
import { FiUser, FiCalendar } from "react-icons/fi";

function MyStudentCard({ student }) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200">
      <div className="flex items-center gap-2 min-w-0">
        <div className="w-11 h-11 shrink-0 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
          <FiUser size={20} />
        </div>

        <div className="min-w-0">
          <h3 className="md:font-bold text-gray-800 truncate">
            {student.name} {student.last_name}
          </h3>
          {/* <p className="text-xs text-gray-400 mt-1">
            دانش‌آموز شماره {student.id}
          </p> */}
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-8 text-sm shrink-0">
        <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
          <FiCalendar className="shrink-0" />
          <span>
            {toPersianDate(student.birthday)}
          </span>
        </div>

        <span className="text-xs bg-green-50 text-green-600 px-3 py-1.5 rounded-lg">
          فعال
        </span>
      </div>
    </div>
  );
}

export default MyStudentCard;