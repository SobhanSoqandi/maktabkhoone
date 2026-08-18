"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { getCourseById } from "./(components)/course-detail-data";
import { CourseTabs } from "./(components)/CourseTabs";
import { CourseBreadcrumb } from "./(components)/CourseBreadcrumb";
import { CourseForm } from "./(components)/CourseForm";

const breadcrumbLabelByTab = {
  info: "ویرایش اطلاعات دوره",
  sessions: "فصل‌ها و جلسات",
};

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState("info");
  const course = getCourseById(courseId);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <CourseTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <CourseBreadcrumb
        courseTitle={course.faTitle}
        currentLabel={breadcrumbLabelByTab[activeTab]}
      />

      <div className="bg-white p-4 sm:p-6 md:p-8">
        {activeTab === "info" && <CourseForm course={course} />}

        {activeTab === "sessions" && (
          <p className="text-sm text-slate-400">بخش «فصل‌ها و جلسات» به‌زودی اضافه می‌شود</p>
        )}
      </div>
    </div>
  );
}
