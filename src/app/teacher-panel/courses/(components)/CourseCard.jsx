import { FiEye } from "react-icons/fi";
import { CourseStatusBadge } from "./CourseStatusBadge";
import { CourseThumbnail } from "./CourseThumbnail";
import { CourseActions } from "./CourseActions";

export function CourseCard({ course }) {
  return (
    <div className="flex md:flex-row flex-col md:items-start gap-4 md:gap-6 bg-white p-4 sm:p-5 border border-slate-200 rounded-2xl">
      <CourseThumbnail image={course.banner} title={course.title} />

      <div className="flex flex-col flex-1 gap-4 sm:gap-5 min-w-0">
        <div className="flex flex-wrap justify-between items-start gap-3">
          <h3 className="flex items-center gap-2 min-w-0 font-semibold text-slate-800 sm:text-[15px] text-sm">
            <span className="break-words">{course.title}</span>
            <FiEye size={16} className="text-slate-400 shrink-0" />
          </h3>
          <CourseStatusBadge status={course.status} />
        </div>
        <CourseActions courseId={course.id} status={course.status} />
      </div>
    </div>
  );
}
