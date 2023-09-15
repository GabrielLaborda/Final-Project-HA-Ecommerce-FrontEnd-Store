import React from "react";
import { NavLink } from "react-router-dom";
import "./ShopItemCard.css";

function ShopItemCard({ name, picture, price, productSlug, categorySlug }) {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  return (
    <div className="d-flex col-sm-12 col-md-6 col-lg-4 col-xl-3 h-100">
      <div className='card border-0 mb-3 h-100'>
        <NavLink
                  className={'text-decoration-none text-black'}
                  to={`/products/${categorySlug}/${productSlug}`}
                >
                  <div className="swiper-slide p-1">
                    <div className="card m-0 py-3 px-3 rounded-0 border-0">
                      <img
                        src={`${baseURL}/img/${picture}`}
                        className="card-img-top"
                        alt="..."
                      />
                        <button
                          type="button"
                          className="btn btn-outline-dark rounded-0 w-100 border-secondary-subtle mt-4"
                        >
                          Add to cart
                        </button>
                      <div className="card-body">
                        <h5 className="card-title">USD {price}</h5>
                        <p className="card-text text-center w-100 card-data">{name}</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
      </div>
    </div>
  );
}

export default ShopItemCard;
