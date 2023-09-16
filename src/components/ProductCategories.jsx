import React from 'react';
import CategoryBannerText from './CategoryBannerText';
import './ProductCategories.css';
import SectionHeader from './sectionHeader';
import axios from 'axios';
import ShopItemCard from './ShopItemCard';
import ListedProductsMenu from './ListedProductsMenu';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CompletesList() {
  const params = useParams();
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const categorySlug = params.categorySlug;
  const [category, setCategory] = useState(null);

  const getCategory = async () => {
    const response = await axios({
      method: 'GET',
      url: `${baseURL}/categories/${categorySlug}`,
    });
    setCategory(response.data);
  };

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
                backgroundImage: `url(${baseURL}/img/${category.pictures[0]})`,
              }}
              id="completesBanner"
            >
              <div className="w-100 justify-content-center g-0">
                <CategoryBannerText bold={'URBAN'} normal={'RUSH'} />
              </div>
            </div>
          </section>
          <main>
            <div className="container">
              <div className="row my-5">
                <SectionHeader bold={category.name.toUpperCase()} normal={'SECTION'} />
              </div>
              <div className="row g-0">
                <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex justify-content-start">
                  <ListedProductsMenu />
                </div>
                <div className="col-sm-12 col-md-9">
                  <div className="container">
                    <div className="row">
                      {category.products.map((product) => (
                        <ShopItemCard
                          key={product.slug}
                          product={product}
                          // name={product.name}
                          // picture={product.picture[0]}
                          // productSlug={product.slug}
                          // price={product.price}
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
