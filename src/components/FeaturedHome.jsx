import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import './FeaturedHome.css'


function FeaturedHome() {
  return (
    <>
        <div className="feacturedContainer">
        <h3 className='feacturedH3 text-center mb-4 pt-5'>FEATURED</h3>
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
        <SwiperSlide className='swiper-slide'>
        <div className="d-flex flex-column align-items-center swiper-slide">
            <img className='img-fluid' src="./ImgHome/Features_1.webp" alt="" />
            <h6 className='my-3'>BAMBINO SKIPPER</h6>
            <p className=' mb-4'>USD 118.95</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="d-flex flex-column align-items-center">
            <img className='img-fluid' src="./ImgHome/Features_2.webp" alt="" />
            <h6 className='my-3 '>BAMBINO SHOREBREAK</h6>
            <p className=' mb-4'>USD 118.95</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="d-flex flex-column align-items-center">
            <img className='img-fluid' src="./ImgHome/Features_3.webp" alt="" />
            <h6 className='my-3 '>BAMBINO BIVY</h6>
            <p className=' mb-4'>USD 118.95</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="d-flex flex-column align-items-center">
            <img className='img-fluid' src="./ImgHome/Features_4.webp" alt="" />
            <h6 className='my-3 '>STRANDSQUAL</h6>
            <p className=' mb-5'>USD 118.95</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="d-flex flex-column align-items-center">
            <img className='img-fluid' src="./ImgHome/Features_1.webp" alt="" />
            <h6 className='my-3 '>BAMBINO SKIPPER</h6>
            <p className=' mb-4'>USD 118.95</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="d-flex flex-column align-items-center">
            <img className='img-fluid' src="./ImgHome/Features_2.webp" alt="" />
            <h6 className='my-3 '>BAMBINO SHOREBREAK</h6>
            <p className=' mb-4'>USD 118.95</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="d-flex flex-column align-items-center">
            <img className='img-fluid' src="./ImgHome/Features_3.webp" alt="" />
            <h6 className='my-3 '>BAMBINO BIVY</h6>
            <p className=' mb-4'>USD 118.95</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="d-flex flex-column align-items-center">
            <img className='img-fluid' src="./ImgHome/Features_4.webp" alt="" />
            <h6 className='my-3 '>STRANDSQUAL</h6>
            <p className=' mb-5'>USD 118.95</p>
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
  
    </>
  )
}

export default FeaturedHome

/*
<div className="container-fluid feacturedContainer ">
            <h3 className='feacturedH3 text-center mb-4 pt-5'>FEATURED</h3>
            <div className="row">
                <div className="d-flex flex-column align-items-center">
                    <img className='img-fluid' src="./ImgHome/Features_1.webp" alt="" />
                    <h6 className='my-3 '>BAMBINO SKIPPER</h6>
                    <p className=' mb-4'>USD 118.95</p>
                </div>
                <div className="col-3 w-25 d-flex flex-column align-items-center">
                    <img className='img-fluid' src="./ImgHome/Features_2.webp" alt="" />
                    <h6 className='my-3 '>BAMBINO SHOREBREAK</h6>
                    <p className=' mb-4'>USD 118.95</p>
                </div>
                <div className="col-3 w-25 d-flex flex-column align-items-center">
                    <img className='img-fluid' src="./ImgHome/Features_3.webp" alt="" />
                    <h6 className='my-3 '>BAMBINO BIVY</h6>
                    <p className=' mb-4'>USD 118.95</p>
                </div>
                <div className="col-3 w-25 d-flex flex-column align-items-center">
                    <img className='img-fluid' src="./ImgHome/Features_4.webp" alt="" />
                    <h6 className='my-3 '>STRANDSQUAL</h6>
                    <p className=' mb-5'>USD 118.95</p>
                </div>
            </div> 
        </div>
        */