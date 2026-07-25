import React from 'react'
import Toolbar from './(Toolbar)/Toolbar'
import CourseList from './(CourseList)/CourseList'

import { courses } from "../../(courses)/course-data";
import CoursesHeader from './(HeaderCourses)/CoursesHeader';


function page() {
  return (
    <div className="container mx-auto md:px-3 mt-5">

      <div className="grid grid-cols-12 gap-8">

        <div className="col-span-4 xl:col-span-3" >
          <Toolbar />
        </div>

        <div className="col-span-12 lg:col-span-8 xl:col-span-9 ">

          <CoursesHeader />

          {/* <CoursesList /> */}
          <div>
            <CourseList courses={courses} />
          </div>

        </div>

      </div>

    </div>
  )
}

export default page