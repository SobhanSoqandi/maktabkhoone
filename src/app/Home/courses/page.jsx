"use client";

import React, { useState } from "react";
import Toolbar from "./(Toolbar)/Toolbar";
import CourseList from "./(CourseList)/CourseList";

import { courses } from "../../(courses)/course-data";
import CoursesHeader from "./(HeaderCourses)/CoursesHeader";
import useGet from "@/app/(hooks)/useGet";
import { useSearchParams } from "next/navigation";
import useFilterCourse from "@/app/(hooks)/useFilterCourse";
import { div } from "motion/react-client";

function Page() {
  const [activeSort, setactiveSort] = useState(null);
  const filters = useFilterCourse();
  console.log(filters);

  const { data, isLoading } = useGet("course", ["courseList", activeSort], {
    params: {
      ...filters,
      sort: activeSort ? activeSort : undefined,
      page_size: 7,
    },
  });
  
  return (
    <div className="mx-auto mt-5 mb-5 md:px-3 container">
      <div className="gap-8 grid grid-cols-12">
        <div className="col-span-4 xl:col-span-3">
          <Toolbar />
        </div>

        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          <CoursesHeader
            activeSort={activeSort}
            setactiveSort={setactiveSort}
          />

          <div>{isLoading ? <div></div> : <CourseList courses={data} />}</div>
        </div>
      </div>
    </div>
  );
}

export default Page;
