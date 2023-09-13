import React from "react";
import CategoryBannerText from "./CategoryBannerText";
import "./CompletesList.css";
import SectionHeader from "./sectionHeader";
import axios from "axios";
import ShopItemCard from "./ShopItemCard";
import ListedProductsMenu from "./ListedProductsMenu";
import { useState, useEffect } from "react";

function CompletesList() {
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
