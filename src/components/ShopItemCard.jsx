import React from 'react'
import { NavLink } from 'react-router-dom';
import "./ShopItemCard.css"

function ShopItemCard(product) {
    return (
      <div className='col'>
            <div className="cardContainer text-black d-flex justify-content-center p-3 m-2">
                <div className='itemCard'>
                    <button className='card-btn1'>Add to cart</button>
                    <img src="../ImgHome/Features_1.webp" className="card-img" alt="product-image" />
                    <div className='card-body text-black'>
                        <h1 className='card-title fs-5'>product.name</h1>
                    <p className='card-sub-title'>product.price</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ShopItemCard