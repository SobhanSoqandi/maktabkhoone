"use client";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

function Slider() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-8 rounded-xl">
            <div className="overflow-hidden rounded-2xl">
                <Swiper
                    modules={[Autoplay, Navigation ,Pagination]}
                    navigation
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >


                    <SwiperSlide>
                        <Image
                            src="/images/slide1.webp"
                            alt="Slide 1"
                            width={1920}
                            height={350}
                            className="h-40 w-full object-cover sm:h-56 md:h-72 lg:h-[300px]"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image
                            src="/images/slide2.webp"
                            alt="Slide 2"
                            width={1920}
                            height={350}
                            className="h-40 w-full object-cover sm:h-56 md:h-72 lg:h-[300px]"
                        />
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    );
}

export default Slider;