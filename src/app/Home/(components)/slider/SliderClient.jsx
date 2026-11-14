"use client";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

import Slider_item from "./Slider_item";

const arrowClass =
  "grid h-7 w-7 place-items-center rounded-full bg-white text-sm text-blue-700 shadow-md transition hover:bg-blue-600 hover:text-white active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-50 sm:h-10 sm:w-10 sm:text-lg lg:h-11 lg:w-11";

const dotsClass =
  "flex items-center gap-1 rounded-full bg-slate-900/30 px-2 py-1.5 backdrop-blur-md sm:gap-1.5 sm:px-3 sm:py-2.5 [&_.swiper-pagination-bullet]:block [&_.swiper-pagination-bullet]:h-1.5 [&_.swiper-pagination-bullet]:w-1.5 sm:[&_.swiper-pagination-bullet]:h-2 sm:[&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:cursor-pointer [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-white/50 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:w-4 sm:[&_.swiper-pagination-bullet-active]:w-6 [&_.swiper-pagination-bullet-active]:bg-white";

export default function SliderClient({ sliders }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-blue-50 shadow-2xl shadow-blue-900/15 ring-1 ring-blue-100">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation={{ prevEl: ".hero-slider-prev", nextEl: ".hero-slider-next" }}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".hero-slider-dots",
          }}
        >
          {sliders.map((item) => (
            <SwiperSlide key={item.id}>
              <Slider_item url={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-blue-950/50 to-transparent sm:h-28" />

        <div dir="ltr" className="pointer-events-none absolute inset-x-2 bottom-2 z-20 flex items-center justify-between sm:inset-x-6 sm:bottom-5">
          <div className="pointer-events-auto flex items-center gap-1.5 rounded-full bg-slate-900/30 p-1 backdrop-blur-md sm:gap-2 sm:p-1.5">
            <button type="button" aria-label="اسلاید قبلی" className={`hero-slider-prev ${arrowClass}`}>
              <HiOutlineChevronLeft />
            </button>
            <button type="button" aria-label="اسلاید بعدی" className={`hero-slider-next ${arrowClass}`}>
              <HiOutlineChevronRight />
            </button>
          </div>

          <div className={`hero-slider-dots pointer-events-auto ${dotsClass}`} />
        </div>
      </div>
    </div>
  );
}