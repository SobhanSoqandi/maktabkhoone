"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

import ReviewCard from "./ReviewCard";

export default function ReviewSlider({ reviews }) {
  return (
    <div className="relative min-w-0">
      <Swiper
        modules={[Navigation, Grid]}
        navigation
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={24}
        slidesPerView={2}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            grid: {
              rows: 1,
            },
          },

          768: {
            slidesPerView: 2,
            grid: {
              rows: 2,
            },
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="pb-2">
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
