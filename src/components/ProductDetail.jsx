import './ProductDetail.css';
import ProductDetailMain from './ProductDetailMain';
import FeaturedHome from './FeaturedHome';
import CategoryBannerText from './CategoryBannerText';
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function ProductDetail() {
  const storageURL = import.meta.env.VITE_API_SUPABASE_URL;
  const params = useParams();
  const slugProducts = params.productSlug;
  const slugCategories = params.categorySlug;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const notifyError = (message) =>
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const getProduct = async () => {
    const response = await axios({
      method: 'GET',
      url: `${baseURL}/products/${slugProducts}`,
    });
    setProduct(response.data);
  };

  const getCategory = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `${baseURL}/categories/${slugCategories}`,
      });
      return setCategory(response.data);
    } catch (err) {
      console.log(err.response.data.msg);
      return notifyError("Oops! Something went wrong. Please try again.")
    }
  }

  useEffect(() => {
    getProduct();
    getCategory();
  }, [slugProducts]);

  const firstExample = {
    size: 30,
    value: 2.5,
    edit: false,
  };

  return (
    <>
      {product && (
        <>
          {category && (
            <section>
              <div
                className="w-100 m-0 p-0 d-flex justify-content-center align-items-center"
                style={{
                  backgroundImage: `url(/${category.pictures[0]})`,
                }}
                id="completesBanner"
              >
                <div className="w-100 justify-content-center g-0">
                  <NavLink to={'/'} className={'text-decoration-none'}>
                    <CategoryBannerText bold={'URBAN'} normal={'RUSH'} />
                  </NavLink>
                </div>
              </div>
            </section>
          )}
          <div className="mt-5">
            <ProductDetailMain product={product} />
            <FeaturedHome />
          </div>
        </>
      )}
    </>
  );
}

export default ProductDetail;
