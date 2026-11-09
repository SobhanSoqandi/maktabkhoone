import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import MyStudentCard from "../(components)/MyStudentCard";
import MyCourses from "../mycoursesdata";
import MyStudents from "../mystudentsdata";

async function Page({ params }) {
  const { courseId } = await params;
  const course = MyCourses.find((c) => c.id === Number(courseId));
  const students = MyStudents.filter((s) => s.course_id === Number(courseId));

  return (
    <div className="p-6 space-y-5">
      <div>
        <Link
          href="/mystudents"
          className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-blue-600 transition-colors"
        >
          <FiArrowRight />
          بازگشت به دوره‌ها
        </Link>
        <h2 className="text-xl font-bold text-gray-800 mt-3">
          {course?.title}
        </h2>
        <p className="text-sm text-gray-400 mt-2">
          دانش‌آموزانی که این دوره را تهیه کرده‌اند
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {students.length ? (
          students.map((student) => (
            <MyStudentCard key={student.id} student={student} />
          ))
        ) : (
          <p className="text-sm text-gray-400 text-center py-10">
            هنوز دانش‌آموزی برای این دوره ثبت نشده است
          </p>
        )}
      </div>
    </div>
  );
}

export default Page;
