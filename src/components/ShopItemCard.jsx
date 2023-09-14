import React from "react";
import { NavLink } from "react-router-dom";
import "./ShopItemCard.css";

function ShopItemCard({ name, picture, price, productSlug, categorySlug }) {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  return (
    <div className="d-flex col-sm-12 col-md-6 col-lg-4 col-xl-3 h-100">
      <div className='card border-0 mb-3 h-100'>
        <NavLink
          className={"text-black text-decoration-none"}
          to={`/products/${categorySlug}/${productSlug}`}
        >
          <div className="itemCard">
            <img
              src={`${baseURL}/img/${picture}`}
              className="card-img"
              alt="product-image"/>
            <div className="card-body text-black">
              <h1 className="card-title fs-5">{name}</h1>
              <p className="card-sub-title">USD {price}</p>
              <button
                type="button"
                className="btn btn-outline-dark rounded-0 w-100 border-secondary-subtle">
                Add to cart
              </button>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default ShopItemCard;
