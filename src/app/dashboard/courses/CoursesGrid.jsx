import { req } from "@/app/(function)/request";
import HeaderCourses from "./HeaderCourses";
import MyCourse from "./MyCourse";

export default async function CoursesGrid() {
  const categories = await req("/categories/", {
    next: {
      revalidate: 3600,
    },
  });

  return (
    <>
      <HeaderCourses categories={categories} />
      <MyCourse />
    </>
  );
}
