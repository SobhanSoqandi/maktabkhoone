"use client";

import { useMemo, useState } from "react";
import { courses } from "./(components)/courses-data";
import { CoursesToolbar } from "./(components)/CoursesToolbar";
import { CourseCard } from "./(components)/CourseCard";

export default function CoursesPage() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesStatus = statusFilter === "all" || course.status === statusFilter;
      const matchesSearch = course.title.includes(searchTerm.trim());
      return matchesStatus && matchesSearch;
    });
  }, [statusFilter, searchTerm]);

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">دوره‌های من</h1>

      <CoursesToolbar
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
      />

      <div className="flex flex-col gap-4 sm:gap-5">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}

        {filteredCourses.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-200 py-16 text-center text-sm text-slate-400">
            دوره‌ای با این مشخصات پیدا نشد
          </div>
        )}
      </div>
    </div>
  );
}
