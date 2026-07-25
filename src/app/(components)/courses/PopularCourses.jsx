"use client";

import { useState } from "react";
import PopularCoursesHeader from "./CoursesHeader";
import PopularCoursesSlider from "./CoursesSlider";
import useMutationData from "@/app/(hooks)/useMutationData";
import useGet from "@/app/(hooks)/useGet";
import CoursesSlider from "./CoursesSlider";
import { SwiperSlide } from "swiper/react";
import CourseCard from "./CourseCard";

export default function PopularCourses({ categories }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const { data: course_data, isFetching } = useGet(
    "course",
    ["PopularCourses", activeCategory],
    {
      params: {
        page: 1,
        page_size: 7,
        sort: "popular",
        category_id: activeCategory === 0 ? undefined : activeCategory,
      },
    },
  );

  return (
    <>
      <section className="mx-auto px-6 py-10 max-w-7xl">
        <PopularCoursesHeader
          header_title={"محبوب‌ترین دوره‌ها"}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {isFetching ? (
          <div className="h-97.5">loading</div>
        ) : (
          <CoursesSlider activeCategory={activeCategory}>
            <>
              {course_data.items.map((course) => (
                <SwiperSlide key={course.id}>
                  <CourseCard course={course} />
                </SwiperSlide>
              ))}
            </>
          </CoursesSlider>
        )}
      </section>
    </>
  );
}
