import React from "react";
import CategoryBannerText from "./CategoryBannerText";
import "./CompletesList.css";
import SectionHeader from "./sectionHeader";
/* import axios from "axios"; */
import ShopItemCard from "./ShopItemCard";

function CompletesList() {
  return (
    <>
      <div className="bg-white">
        <header>
          <div
            className="vh-20 w-100 m-0 p-0 d-flex justify-content-center align-items-center"
            id="completesBanner"
          >
            <div className="row w-100 justify-content-center">
              <CategoryBannerText bold={"URBAN"} normal={"RUSH"} />
            </div>
          </div>
        </header>
        <section>
          <div className="my-5">
            <SectionHeader bold={"COMPLETES"} normal={"SECTION"} />
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-center">
              <div className="ps-0">
                <ul>
                  <li className="fw-bold fs-4 p-0">SHOP</li>
                  <li>ALL PRODUCTS</li>
                  <li>COMPLETES</li>
                  <li>DECKS</li>
                  <li>TRUCKS</li>
                  <li>WHEELS</li>
                  <li>FEATURED</li>
                </ul>
              </div>
            </div>
            {/* Listed products */}
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
        </section>
      </div>
    </>
  );
}

export default CompletesList;
