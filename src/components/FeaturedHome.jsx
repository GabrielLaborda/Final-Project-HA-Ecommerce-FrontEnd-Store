import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import './FeaturedHome.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { addItem } from '../redux/cartSlice';

function FeaturedHome() {
  const dispatch = useDispatch();

  const params = useParams();
  const categorySlug = params.categorySlug;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [products, setProducts] = useState(null);

  const getFilteredProducts = async () => {
    const category = await axios({
      method: 'GET',
      url: `${baseURL}/categories/${categorySlug}`,
    });
    const response = await axios({
      method: 'GET',
      url: `${baseURL}/products`,
      params: { featured: true, category: category.data._id },
    });
    setProducts(response.data);
  };

  const getProducts = async () => {
    const response = await axios({
      method: 'GET',
      url: `${baseURL}/products`,
      params: { featured: true },
    });
    setProducts(response.data);
  };

  useEffect(() => {
    categorySlug ? getFilteredProducts() : getProducts();
  }, [categorySlug]);

  const notify = () =>
    toast.error('Insufficient Stock, plese select a smaller amount!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const hanldeAddToCart = (product) => {
    if (product.stock >= 1) {
      if (categorySlug) {
        dispatch(addItem({ product, categorySlug: categorySlug, quantity: 1 }));
      } else {
        dispatch(addItem({ product, categorySlug: product.category.slug, quantity: 1 }));
      }
    } else {
      notify();
    }
  };

  return (
    <>
      <div className="container featured-container">
        {categorySlug ? (
          <h5 className="featured-h5 text-center">YOU MAY ALSO LIKE</h5>
        ) : (
          <h3 className="featured-h3 text-center">FEATURED</h3>
        )}
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1400: {
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
                  <div className="card mb-5 py-3 px-3 rounded-0">
                    <NavLink
                      className={'text-decoration-none text-black'}
                      to={`/products/${product.category.slug}/${product.slug}`}
                    >
                      <img
                        src={`${baseURL}/img/${product.picture[0]}`}
                        className="card-img-top"
                        alt="..."
                      />
                    </NavLink>
                    <div className="card-body">
                      <h5 className="card-title">USD {product.price}</h5>
                      <p className="card-text text-center w-100 card-data">{product.name}</p>
                      <button
                        type="button"
                        className="btn btn-outline-dark rounded-0 w-75 border-secondary-subtle"
                        onClick={() => hanldeAddToCart(product)}
                      >
                        Add to cart
                      </button>
                    </div>
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
