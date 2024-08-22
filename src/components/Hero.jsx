import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';  // Parallax,

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/Hero.css'

import property1 from '../assets/propty1.jpg'
import property2 from '../assets/propty2.jpg'
import property3 from '../assets/propty3.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        loop={true}
        speed={600}
        // parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]} // Parallax,
        className="mySwiper"
      >
        {/* <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              {property1},
          }}
          data-swiper-parallax="-23%"
        ></div> */}
        <SwiperSlide>
            <img src={property1} className='swiper-img' />
            <div className="swiper-text">
                <h1 className="title" data-swiper-parallax="-300">
                    Property Name one
                </h1>
                <p className="subtitle" data-swiper-parallax="-200">
                    Lekki, Lagos - N180,000,000
                </p>
                <Link to={'/'} className='detail'>SEE DETAILS &rarr;</Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={property2} className='swiper-img' />
            <div className="swiper-text">
                <h1 className="title" data-swiper-parallax="-300">
                    Property Name two
                </h1>
                <p className="subtitle" data-swiper-parallax="-200">
                    Ikoyi, Lagos - N250,000,000
                </p>
                <Link to={'/'} className='detail'>SEE DETAILS &rarr;</Link>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={property3} className='swiper-img' />
            <div className="swiper-text">
                <h1 className="title" data-swiper-parallax="-300">
                    Property Name three
                </h1>
                <p className="subtitle" data-swiper-parallax="-200">
                    Victoria Island, Lagos - N300,000,000
                </p>
                <Link to={'/'} className='detail'>SEE DETAILS &rarr;</Link>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero