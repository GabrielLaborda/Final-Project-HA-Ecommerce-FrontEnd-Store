import React from "react";
import CategoryBannerText from "./CategoryBannerText";
import "./CompletesList.css";
import SectionHeader from "./sectionHeader";
import axios from "axios";
import ShopItemCard from "./ShopItemCard";
import ListedProductsMenu from "./ListedProductsMenu";
import { useState, useEffect } from "react";

function CompletesList() {

  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    const response = await axios({
      method: 'GET',
      url: `${baseURL}/products`,
      params: { category: "Completes" },
    });
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="bg-white">
        <section>
          <div className="w-100 m-0 p-0 d-flex justify-content-center align-items-center"
            id="completesBanner">
            <div className="row w-100 justify-content-center">
              <CategoryBannerText bold={"URBAN"} normal={"RUSH"} />
            </div>
          </div>
        </section>
        <main>
          <div className="m-5">
            <SectionHeader bold={"COMPLETES"} normal={"SECTION"} />
          </div>
          <div className="row">
            <ListedProductsMenu />
            <div className="col-9">
              <div className="mx-5 mb-5">
                <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-4 g-4">
                  <ShopItemCard />
                  <ShopItemCard />
                  <ShopItemCard />
                  <ShopItemCard />
                  <ShopItemCard />
                  <ShopItemCard />
                  <ShopItemCard />
                  <ShopItemCard />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default CompletesList;
