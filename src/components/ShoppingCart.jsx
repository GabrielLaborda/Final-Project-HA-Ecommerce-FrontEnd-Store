import './ShoppingCart.css';

import { NavLink } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../redux/cartSlice';

function ShoppintCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [comment, setComment] = useState('');
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const handleRemove = (slug) => {
    dispatch(deleteItem(slug));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-12 p-0">
          <div className="left-section vh-100 d-none d-lg-flex flex-column align-items-center justify-content-center">
            <h2 className="title w-50">Shopping Cart</h2>
            <p className="text-white w-50 fw-bold">
              We are shipping daily (M-F), and orders are expected to process in 1-2 business days.
              Orders must be placed by 9am (Pacific Standard Time) on a business day to ship same
              day. International shipments may be subject to import duties, taxes or other customs
              fees. Transit times are estimates only; USPS and UPS are currently experiencing
              extended delivery times. See Shipping & Handling for more details.
            </p>
          </div>
          <div className="left-section d-lg-none d-flex flex-column align-items-center justify-content-center">
            <h2 className="title w-50 fs-1 py-5 my-5">Shopping Cart</h2>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="right-section">
            {cart.length > 0 ? (
              <div className="right-section vh-100 flex-column d-flex  justify-content-center">
                {cart.map((item) => (
                  <div className="">
                    <div className=" d-flex flex-row w-75 mx-auto mb-5">
                      {item.product.picture && (
                        <img
                          src={`${baseURL}/img/${item.product.picture[0]}`}
                          alt="Product Picture"
                          height={150}
                          className="d-none d-md-inline"
                        />
                      )}
                      <div className="w-100 ms-3">
                        <NavLink
                          to={`/products/${item.categorySlug}/${item.product.slug}`}
                          className={'text-decoration-none'}
                        >
                          <p className="mb-0">{item.product.name}</p>
                        </NavLink>
                        <p>USD {item.product.price}</p>
                      </div>
                      <div className="m-auto d-flex align-items-center justify-content-end w-100  ">
                        <span className="bg-secondary-subtle py-1 px-3 mx-3">{item.quantity}</span>
                        <TiDelete size={30} onClick={() => handleRemove(item.product.slug)} />
                      </div>
                    </div>
                  </div>
                ))}
                <textarea
                  className="w-75 mx-auto border-0 bg-secondary-subtle fs-5 fw-light p-3 mb-5"
                  name="orderComment"
                  id="orderComment"
                  rows="2"
                  placeholder="Special instructions for seller"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <div className="w-75 mx-auto">
                  <p className="mb-0 pb-0">
                    <span className="fs-5 fw-light">Total: </span>
                    {cart && (
                      <span className="fw-bold">
                        USD{' '}
                        {Math.round(
                          cart.reduce(
                            (total, item) => total + item.quantity * item.product.price,
                            0
                          ) * 100
                        ) / 100}
                      </span>
                    )}
                  </p>
                  <p className="small-text fw-lighter mt-0">Shipping & taxes included</p>
                  <button className="btn btn-dark rounded-0 w-100 py-3">CHECKOUT</button>
                </div>
              </div>
            ) : (
              <div className="right-section vh-100 flex-column d-flex align-items-center justify-content-center">
                <p>Your cart is currently empty.</p>
                <NavLink to={'/products/'}>
                  <button className="btn btn-dark rounded-0">CONTINUE BROWSING</button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppintCart;
