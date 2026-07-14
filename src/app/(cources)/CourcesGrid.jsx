import { courses } from "./course-data";
import CourseCard from "./CourseCard";

export default function CoursesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}