import MyCourseCard from "./(components)/MyCourseCard";
import MyCourses from "./mycoursesdata";
import MyStudents from "./mystudentsdata";

function Page() {
  return (
    <div className="p-6 space-y-5">
      <div>
        <h2 className="text-xl font-bold text-gray-800">دانش‌آموزان من</h2>
        <p className="text-sm text-gray-400 mt-2">
          برای مشاهده دانش‌آموزان، یک دوره را انتخاب کنید
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {MyCourses.map((course) => (
          <MyCourseCard
            key={course.id}
            course={course}
            studentsCount={
              MyStudents.filter((s) => s.course_id === course.id).length
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
