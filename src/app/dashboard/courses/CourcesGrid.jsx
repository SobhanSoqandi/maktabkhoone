"use client";

import { req } from "@/app/(function)/request";
import { teacherCourses } from "./cources-data";
import CourcesCard from "./CourcesCard";
import useGet from "@/app/(hooks)/useGet";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function CourcesGrid() {
  const { user } = useAuth();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const personalInfo = localStorage.getItem("personalInfo");

    if (personalInfo) {
      const user = JSON.parse(personalInfo);
      setUserId(user.id);
    }
  }, []);

  const { data, isFetching } = useGet("course", {
    params: {
      user_id: userId,
    },
  });
  return (
    <>
      {isFetching ? (
        <div>loading</div>
      ) : (
        <div className="gap-6 grid lg:grid-cols-2">
          {data.items.map((course) => (
            <CourcesCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </>
  );
}
