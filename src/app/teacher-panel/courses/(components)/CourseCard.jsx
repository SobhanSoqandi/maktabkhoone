import { FiEye } from "react-icons/fi";
import { CourseStatusBadge } from "./CourseStatusBadge";
import { CourseThumbnail } from "./CourseThumbnail";
import { CourseActions } from "./CourseActions";

export function CourseCard({ course }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 md:flex-row md:items-start md:gap-6">
      <CourseThumbnail
        brandLabel={course.brandLabel}
        gradientFrom={course.gradientFrom}
        gradientTo={course.gradientTo}
      />

      <div className="flex min-w-0 flex-1 flex-col gap-4 sm:gap-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="flex min-w-0 items-center gap-2 text-sm font-semibold text-slate-800 sm:text-[15px]">
            <span className="break-words">{course.title}</span>
            <FiEye size={16} className="shrink-0 text-slate-400" />
          </h3>
          <CourseStatusBadge status={course.status} />
        </div>

        <CourseActions courseId={course.id} status={course.status} />
      </div>
    </div>
  );
}