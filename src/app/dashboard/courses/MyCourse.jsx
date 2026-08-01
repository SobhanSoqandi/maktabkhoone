"use client";

import React, { useEffect } from "react";
import CourcesCard from "./CourcesCard";
import useGet from "@/app/(hooks)/useGet";
import { useAuth } from "@/context/AuthContext";

export default function MyCourse() {
  const { data: my_courses, isLoading } = useGet("course/me/courses", [
    "mycourse",
  ]);
  console.log(my_courses);
  return (
    <div className="gap-6 grid lg:grid-cols-2">
      {isLoading ? (
        <div>loading</div>
      ) : (
        my_courses.map((course) => (
          <CourcesCard key={course.id} course={course} />
        ))
      )}
    </div>
  );
}
