import React from 'react';
import CategoryBannerText from './CategoryBannerText';
import './ProductCategories.css';
import SectionHeader from './SectionHeader';
import axios from 'axios';
import ShopItemCard from './ShopItemCard';
import ListedProductsMenu from './ListedProductsMenu';
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

function AllProducts() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [allProducts, setAllProducts] = useState(null);

  const getAllProducts = async () => {
    const response = await axios({
      method: 'GET',
      url: `${baseURL}/products`,
    });
    setAllProducts(response.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      {allProducts && (
        <div className="bg-white">
          <section>
            <div
              className="w-100 m-0 p-0 d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: 'grey',
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
              <div className="row g-0">
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column align-items-start stickyCategorySidebar">
                  <SectionHeader bold={'ALL'} normal={'PRODUCTS'} />
                  <ListedProductsMenu />
                </div>
                <div className="col-sm-12 col-md-9">
                  <div className="container">
                    <div className="row productsContainer">
                      {allProducts.map((product) => (
                        <ShopItemCard
                          key={product.slug}
                          product={product}
                          categorySlug={product.category.slug}
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

export default AllProducts;
