import { req } from "@/app/(function)/request";
import CoursePlayerLayout from "../[unitId]/(components)/course-player/CoursePlayerLayout";

export default async function UnitPage({ params }) {
  const { id, slug, unitId } = await params;

  const response = await req(`/course/${id}`);
  const chapters = response?.section ?? [];



  return (
    <CoursePlayerLayout
      courseId={id}
      slug={slug}
      chapters={chapters}
      activeUnitId={unitId}
    />
  );
}
