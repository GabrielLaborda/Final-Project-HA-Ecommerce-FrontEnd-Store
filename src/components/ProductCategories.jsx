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
  const slug = params.categorySlug;
  const [category, setCategory] = useState(null);

  const getCategory = async () => {
    const response = await axios({
      method: 'GET',
      url: `${baseURL}/categories/${slug}`,
    });
    setCategory(response.data);
    console.log(response.data.products);
  };

  useEffect(() => {
    getCategory();
  }, [slug]);

  return (
    <>
      {category && (
        <div className="bg-white">
          <section>
            <div
              className="w-100 m-0 p-0 d-flex justify-content-center align-items-center"
              style={{ backgroundImage: `url(${baseURL}/img/${category.pictures[0]})` }}
              id="completesBanner"
            >
              <div className="row w-100 justify-content-center">
                <CategoryBannerText bold={'URBAN'} normal={'RUSH'} />
              </div>
            </div>
          </section>
          <main>
            <div className="m-5">
              <SectionHeader bold={category.name.toUpperCase()} normal={'SECTION'} />
            </div>
            <div className="row">
              <ListedProductsMenu />
              <div className="col-9">
                <div className="mx-5 mb-5">
                  <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-4 g-4">
                    {category.products.map((product) => (
                      <ShopItemCard
                        key={product.slug}
                        name={product.name}
                        picture={product.picture[0]}
                        productSlug={product.slug}
                        price={product.price}
                        categorySlug={slug}
                      />
                    ))}
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
