import React from 'react';
import CategoryBannerText from './CategoryBannerText';
import './ProductCategories.css';
import SectionHeader from './SectionHeader';
import axios from 'axios';
import ShopItemCard from './ShopItemCard';
import ListedProductsMenu from './ListedProductsMenu';
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

function CompletesList() {
  const storageURL = import.meta.env.VITE_API_SUPABASE_URL;
  const params = useParams();
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const categorySlug = params.categorySlug;
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

  const getCategory = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `${baseURL}/categories/${categorySlug}`,
      });
      return setCategory(response.data);
    } catch (err) {
      console.log(err.response.data.msg);
      return notifyError("Oops! Something went wrong. Please try again.");
    }
  }

  useEffect(() => {
    getCategory();
  }, [categorySlug]);

  return (
    <>
      {category && (
        <div className="bg-white">
          <section>
            <div
              className="w-100 m-0 p-0 d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(${storageURL}/${category.pictures[0]})`,
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
          <main>
            <div className="container">
              {/* <div className="row my-5">
          
              </div> */}
              <div className="row g-0">
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column align-items-start stickyCategorySidebar">
                  <SectionHeader bold={category.name.toUpperCase()} normal={'SECTION'} />
                  <ListedProductsMenu />
                </div>
                <div className="col-sm-12 col-md-9">
                  <div className="container">
                    <div className="row productsContainer">
                      {category.products.map((product) => (
                        <ShopItemCard
                          key={product.slug}
                          product={product}
                          categorySlug={categorySlug}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default CompletesList;
