import { req } from "@/app/(function)/request";
import { teacherCourses } from "./courses-data";
import CourcesCard from "./CoursesCard";
import HeaderCourses from "./HeaderCourses";


export default async function CoursesGrid() {

  const categories = await req("/categories/", {
    next: {
      revalidate: 3600, 
    },
  });

  return (
    <>
      <HeaderCourses
        categories={categories}
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {teacherCourses.map((course) => (
          <CourcesCard
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </>

  );
}