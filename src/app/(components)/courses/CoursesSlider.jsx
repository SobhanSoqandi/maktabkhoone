"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function CoursesSlider({ activeCategory, children, sliderId }) {
  // const filteredCourses =
  //   activeCategory === "all"
  //     ? courses
  //     : courses.filter((course) => course.slug === activeCategory);

  return (
    <Swiper
      key={activeCategory}
      modules={[Navigation]}
      navigation={{
        prevEl: `.prev-${sliderId}`,
        nextEl: `.next-${sliderId}`,
      }}
      spaceBetween={24}
      observer={true}
      observeParents={true}
      watchOverflow={true}
      breakpoints={{
        0: {
          slidesPerView: 1.15,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
    >
      {children}
    </Swiper>
  );
}
