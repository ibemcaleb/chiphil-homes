import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import '../styles/Hero1.css'

// import required modules
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';

const Hero1 = () => {
  return (
    <div className='hero1'>
        <Swiper
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
            }}
            pagination={true}
            modules={[Autoplay, EffectCube, Pagination]}
            className="mySwiper"
        >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero1