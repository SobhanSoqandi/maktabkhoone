"use client";

import SegmentedControl from "@/app/(components)/(SegmentControll)/SegmentedControl";
import { useState } from "react";
import StudentSupport from "./StudentSupport";
import TeacherSupport from "./TeacherSupport";

export default function Support() {
  const [type, setType] = useState("student");

  return (
    <>
      <SegmentedControl
        value={type}
        onChange={setType}
        items={[
          {
            label: "دانشجویان",
            value: "student",
          },
          {
            label: "مدرسان",
            value: "teacher",
          },
        ]}
      />

      {type === "student" && (
        <div className="mt-8">
         <StudentSupport />
        </div>
      )}

      {type === "teacher" && (
        <div className="mt-8">
         <TeacherSupport />
        </div>
      )}
    </>
  );
}