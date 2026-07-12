"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Slider_item from "./Slider_item";

export default function SliderClient({ sliders }) {
  return (
    <div className="mx-auto px-6 py-8 rounded-xl max-w-7xl">
      <div className="rounded-2xl overflow-hidden">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {sliders.map((item) => (
            <SwiperSlide key={item.id}>
              <Slider_item url={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
