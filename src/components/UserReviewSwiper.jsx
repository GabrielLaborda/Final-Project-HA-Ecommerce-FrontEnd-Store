import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./FeaturedHome.css";
import UserReview from "./UserReview";

function UserReviewSwiper() {
  return (
    <div className="container">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          576: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 3
          },
        }}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><UserReview/></SwiperSlide>
        <SwiperSlide><UserReview/></SwiperSlide>
        <SwiperSlide><UserReview/></SwiperSlide>
        <SwiperSlide><UserReview/></SwiperSlide>
        <SwiperSlide><UserReview/></SwiperSlide>
        <SwiperSlide><UserReview/></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default UserReviewSwiper;
