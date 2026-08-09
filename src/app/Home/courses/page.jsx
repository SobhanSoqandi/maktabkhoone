"use client";

import React, { useState } from "react";
import Toolbar from "./(Toolbar)/Toolbar";
import CourseList from "./(CourseList)/CourseList";
import CoursesHeader from "./(HeaderCourses)/CoursesHeader";
import useGet from "@/app/(hooks)/useGet";
import { useSearchParams } from "next/navigation";
import useFilterCourse from "@/app/(hooks)/useFilterCourse";

function Page() {
  const [activeSort, setactiveSort] = useState(null);

  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  const page = searchParams.get("page") || 1;
  const category = searchParams.get("category_id");
  const filters = useFilterCourse();

  const { data, isLoading } = useGet(
    "course",
    ["courseList", activeSort, search, page, category, filters],
    {
      params: {
        ...filters,
        search: search || undefined,
        page,
        category_id: category || undefined,
        sort: activeSort || undefined,
        page_size: 7,
      },
    },
  );


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

          <div>
            {isLoading ? <div>Loading...</div> : <CourseList courses={data} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
