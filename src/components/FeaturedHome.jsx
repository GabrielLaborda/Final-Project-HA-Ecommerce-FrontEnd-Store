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
        <h3 className='feacturedH3 text-center'>FEATURED</h3>
        <Swiper
             breakpoints={{
                0: {
                  slidesPerView: 1
                },
                576: {
                  slidesPerView: 2
                },
                992: {
                  slidesPerView: 4
                },
              }}
            // slidesPerView={4}
            spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
        <SwiperSlide>
            <div className="swiper-slide p-1">
                <div className= "item-swiper">
                    <img className='img-fluid' src="./ImgHome/Features_1.webp" alt="" />
                    <h6 className='my-3'>BAMBINO SKIPPER</h6>
                    <p className=' mb-0'>USD 118.95</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide p-1">
            <div className= "item-swiper">
                <img className='img-fluid' src="./ImgHome/Features_2.webp" alt="" />
                <h6 className='my-3 '>BAMBINO SHOREBREAK</h6>
                <p className=' mb-0'>USD 118.95</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide p-1">
            <div className= "item-swiper">
                <img className='img-fluid' src="./ImgHome/Features_3.webp" alt="" />
                <h6 className='my-3 '>BAMBINO BIVY</h6>
                <p className=' mb-0'>USD 118.95</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide p-1">
            <div className= "item-swiper">
                <img className='img-fluid' src="./ImgHome/Features_4.webp" alt="" />
                <h6 className='my-3 '>STRANDSQUAL</h6>
                <p className=' mb-0'>USD 118.95</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide p-1">
            <div className= "item-swiper">
                <img className='img-fluid' src="./ImgHome/Features_1.webp" alt="" />
                <h6 className='my-3 '>BAMBINO SKIPPER</h6>
                <p className=' mb-0'>USD 118.95</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide p-1">
            <div className= "item-swiper">
                <img className='img-fluid' src="./ImgHome/Features_2.webp" alt="" />
                <h6 className='my-3 '>BAMBINO SHOREBREAK</h6>
                <p className=' mb-0'>USD 118.95</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide p-1">
            <div className= "item-swiper">
                <img className='img-fluid' src="./ImgHome/Features_3.webp" alt="" />
                <h6 className='my-3 '>BAMBINO BIVY</h6>
                <p className=' mb-0'>USD 118.95</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide p-1">
            <div className= "item-swiper">
                <img className='img-fluid' src="./ImgHome/Features_4.webp" alt="" />
                <h6 className='my-3 '>STRANDSQUAL</h6>
                <p className=' mb-0'>USD 118.95</p>
            </div>
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