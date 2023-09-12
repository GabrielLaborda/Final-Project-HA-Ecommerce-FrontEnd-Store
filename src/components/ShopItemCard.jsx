import React from 'react'
import { NavLink } from 'react-router-dom';
import "./ShopItemCard.css"

function ShopItemCard() {
    return (
      <div className='col'>
            <div className="cardContainer text-black d-flex justify-content-center p-3 m-2">
                <div className='itemCard'>
                    <button className="featured-button">Featured</button>
                    <button className='card-btn1'>Add to cart</button>
                    <button className='card-btn2'>More info</button>
                    <img src="../ImgHome/Features_1.webp" className="card-img" alt="..." />
                    <div className='card-body text-black'>
                    <h1 className='card-title fs-5'>Bambino Skipper</h1>
                    <p className='card-sub-title'>USD 118.95</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ShopItemCard