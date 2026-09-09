"use client";

import { useMemo, useState } from "react";

import { CoursesToolbar } from "./(components)/CoursesToolbar";
import { CourseCard } from "./(components)/CourseCard";
import useGet from "@/app/(hooks)/useGet";

export default function CoursesPage() {
  const { data: courses, isLoading } = useGet("course/teacher/me", [
    "get_teacher_course",
  ]);

  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = useMemo(() => {
    if (!courses) return [];

    return courses.filter((course) => {
      const matchesStatus =
        statusFilter === "all" || course.status === statusFilter;

      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());

      return matchesStatus && matchesSearch;
    });
  }, [courses, statusFilter, searchTerm]);

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <h1 className="font-bold text-slate-900 text-2xl sm:text-3xl">
        دوره‌های من
      </h1>

      <CoursesToolbar
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
      />

      <div className="flex flex-col gap-4 sm:gap-5">
        {isLoading ? (
          <div className="py-16 text-slate-400 text-sm text-center">
            در حال دریافت دوره‌ها...
          </div>
        ) : filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <div className="py-16 border border-slate-200 border-dashed rounded-2xl text-slate-400 text-sm text-center">
            دوره‌ای با این مشخصات پیدا نشد
          </div>
        )}
      </div>
    </div>
  );
}
