import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Banner1 from '../../assets/Banner1.jpg'
import Banner2 from '../../assets/Banner2.jpg'
import Banner3 from '../../assets/Banner3.jpg'
import Banner4 from '../../assets/Banner4.jpg'


const Banner = () => {
    return (
        <div className='mb-6'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper h-[520px] rounded-xl">
        <SwiperSlide><img src={Banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Banner3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Banner4} alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;