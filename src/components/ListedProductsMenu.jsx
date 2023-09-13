import React from 'react'
import { NavLink } from 'react-router-dom'

function ListedProductsMenu() {
  return (
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
  )
}

export default ListedProductsMenu