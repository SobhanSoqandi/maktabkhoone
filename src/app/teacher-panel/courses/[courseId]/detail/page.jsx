import { notFound } from "next/navigation";
import { CourseForm } from "../(components)/CourseForm";
import { getCourseById } from "../(components)/course-detail-data";

export default async function CourseDetailPage({ params }) {
  const { courseId } = await params;
  const course = await getCourseById(courseId);

  if (!course) notFound();

  return <CourseForm course={course} />;
}
