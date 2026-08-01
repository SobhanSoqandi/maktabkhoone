"use client";

import CourseCard from "./CourseCard";
import CoursePagination from "./CoursePagination";

export default function CourseList({
  courses,
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <section className="flex flex-col gap-6">
      {courses.items.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}

      <CoursePagination
        currentPage={currentPage}
        totalPages={courses.total_pages}
        onPageChange={onPageChange}
      />
    </section>
  );
}
