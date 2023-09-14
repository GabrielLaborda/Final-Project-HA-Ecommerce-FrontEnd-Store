import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import './FeaturedHome.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";

function FeaturedHome() {
  const params = useParams();
  const slug = params.categorySlug;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [products, setProducts] = useState(null);

  const getCategory = async () => {
    const response = await axios({
      method: 'GET',
      url: `${baseURL}/categories/${slug}`,
    });
    setProducts(response.data.products.filter((product)=>product.featured===true));
  }
  const getProducts = async () => {
    const response = await axios({
      method: 'GET',
      url: `${baseURL}/products`,
      params: { featured: true },
    });
    setProducts(response.data);
  };

  useEffect(() => {
    slug ? getCategory() : getProducts();
  }, [slug]);

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
                <NavLink
                  className={'text-decoration-none text-black'}
                  to={`/products/${product.category.slug}/${product.slug}`}
                >
                  <div className="swiper-slide p-1">
                    <div className="item-swiper">
                      <img
                        className="img-fluid"
                        src={`${baseURL}/img/${product.picture[0]}`}
                        alt="Product Image"
                      />
                      <h6 className="my-3 ">{product.name}</h6>
                      <p className=" mb-0 ">USD {product.price}</p>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}

export default FeaturedHome;
