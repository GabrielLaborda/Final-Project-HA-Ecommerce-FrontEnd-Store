import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import './FeaturedHome.css';
import axios from 'axios';

function FeaturedHome() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    const response = await axios({
      method: 'GET',
      url: `${baseURL}/products`,
      params: { featured: true },
    });
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="feacturedContainer">
        <h3 className="feacturedH3 text-center">FEATURED</h3>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {products &&
            products.map((product) => (
              <SwiperSlide key={product._id}>
                <div className="swiper-slide p-1">
                  <div className="item-swiper">
                    <img
                      className="img-fluid"
                      src={`${baseURL}/img/${product.picture[0]}`}
                      alt="Product Image"
                    />
                    <h6 className="my-3">{product.name}</h6>
                    <p className=" mb-0">USD {product.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}

export default FeaturedHome;
