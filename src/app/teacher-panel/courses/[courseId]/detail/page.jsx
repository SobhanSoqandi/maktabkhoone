"use client";

import { useParams } from "next/navigation";
import { CourseForm } from "../(components)/CourseForm";
import useGet from "@/app/(hooks)/useGet";

export default function CourseDetailPage({ params }) {
  const { courseId } = useParams();

  return <CourseForm course_id={courseId} />;
}
