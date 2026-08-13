import { req } from "@/app/(function)/request";
import CoursePlayerLayout from "../[unitId]/(components)/course-player/CoursePlayerLayout";
import { div } from "motion/react-client";

export default async function UnitPage({ params }) {
  const { id, slug, unitId } = await params;
  console.log(id, slug , unitId)

  const response = await req(`/course/${id}`);
  const chapters = response?.section ?? [];

  return (
    <div>
      <CoursePlayerLayout
        courseId={id}
        slug={slug}
        chapters={chapters}
        activeUnitId={unitId}
      />
    </div>
  );
}
