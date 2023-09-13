import React from 'react';
import { NavLink } from 'react-router-dom';

function ListedProductsMenu() {
  return (
    <div className="col-3 d-flex justify-content-center">
      <div className="ps-0">
        <ul>
          <li className="fw-bold fs-4 p-0">SHOP</li>

          <li>ALL PRODUCTS</li>

          <NavLink className={'text-black text-decoration-none'} to={'/products/completes'}>
            <li>COMPLETES</li>
          </NavLink>
          <NavLink className={'text-black text-decoration-none'} to={'/products/decks'}>
            <li>DECKS</li>
          </NavLink>
          <NavLink className={'text-black text-decoration-none'} to={'/products/trucks'}>
            <li>TRUCKS</li>
          </NavLink>
          <NavLink className={'text-black text-decoration-none'} to={'/products/wheels'}>
            <li>WHEELS</li>
          </NavLink>

          <li>FEATURED</li>
        </ul>
      </div>
    </div>
  );
}

export default ListedProductsMenu;
