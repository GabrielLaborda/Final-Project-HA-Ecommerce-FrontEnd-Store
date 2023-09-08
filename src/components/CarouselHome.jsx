import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function CarouselHome() {
  return (
    <>
    <Carousel>
    <Carousel.Item>
      <img className='w-100' src="./ImgHome/CarouselPic_1.webp" alt="" />
    </Carousel.Item>
    <Carousel.Item>
      <img className='w-100' src="./ImgHome/CarouselPic_2.webp" alt="" />
    </Carousel.Item>
    <Carousel.Item>
      <img className='w-100' src="./ImgHome/CarouselPic_3.webp" alt="" />
    </Carousel.Item>
    <Carousel.Item>
      <img className='w-100' src="./ImgHome/CarouselPic_4.webp" alt="" />
    </Carousel.Item>
  </Carousel>
  </>
  
  )
}

export default CarouselHome