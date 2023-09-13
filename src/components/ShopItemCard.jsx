import React from 'react';
import { NavLink } from 'react-router-dom';
import './ShopItemCard.css';

function ShopItemCard({ name, picture, price, productSlug, categorySlug }) {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  return (
    <div className="col">
      <div className="cardContainer text-black d-flex justify-content-center p-3 m-2">
        <NavLink
          className={'text-black text-decoration-none'}
          to={`/products/${categorySlug}/${productSlug}`}
        >
          <div className="itemCard">
            <button className="card-btn1">Add to cart</button>
            <img src={`${baseURL}/img/${picture}`} className="card-img" alt="product-image" />
            <div className="card-body text-black">
              <h1 className="card-title fs-5">{name}</h1>
              <p className="card-sub-title">USD {price}</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default ShopItemCard;
