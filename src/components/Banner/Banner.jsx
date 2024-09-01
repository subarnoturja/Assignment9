import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Banner1 from "../../assets/Banner1.jpg";
import Banner2 from "../../assets/Banner2.jpg";
import Banner3 from "../../assets/Banner3.jpg";
import Banner4 from "../../assets/Banner4.jpg";
import Hero from "./Hero";

const Banner = () => {
  return (
    <div className="mb-6">
        <div>
            <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper h-[520px] rounded-xl">
            <SwiperSlide>
                <Hero 
                image={Banner1} 
                text='Discover modern living spaces designed for your lifestyle. Experience the perfect blend of comfort, community, and convenience.'></Hero>
            </SwiperSlide>
            <SwiperSlide>
                <Hero image={Banner2} text='Discover modern living spaces designed for your lifestyle. Experience the perfect blend of comfort, community, and convenience.'></Hero>
            </SwiperSlide>
            <SwiperSlide>
                <Hero image={Banner3} text='Discover modern living spaces designed for your lifestyle. Experience the perfect blend of comfort, community, and convenience.'></Hero>
            </SwiperSlide>
            <SwiperSlide>
                <Hero image={Banner4} text='Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.'></Hero>
            </SwiperSlide>
            </Swiper>
        </div>
    </div>
  );
};

export default Banner;
