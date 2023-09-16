import CheckoutPayments from './CheckoutPayments';
import CheckoutUserData from './CheckoutUserData';
import { NavLink, useNavigate } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';
import { useState } from 'react';
import { deleteItem } from '../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import './Checkout.css';

function Checkout() {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const orderInstruction = useSelector((state) => state.orderInstruction);

  const [comment, setComment] = useState(orderInstruction);

  const handleRemove = (slug) => {
    dispatch(deleteItem(slug));
  };

  // const handlePayNow = () => {
  //   return;
  // };

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-sm-12 col-lg-6 d-flex flex-column checkout-left-container pt-5"
          id="left-container-alignment"
        >
          <div className="pt-5 left-container-content">
            <div className="d-flex justify-content-center pt-5">
              <p>Express chechout</p>
            </div>
            <div className="d-flex w-100 py-4">
              <button className="btn btn-primary w-100 me-2">SHOPPay</button>
              <button className="btn btn-warning w-100 me-2">PayPal</button>
              <button className="btn btn-warning w-100 me-2">amazon pay</button>
              <button className="btn btn-light w-100 me-2">G Pay</button>
            </div>
            <div className="d-flex justify-content-center">
              <p>OR</p>
            </div>
            <CheckoutUserData />
            <CheckoutPayments />
            <button
              // onClick={handlePayNow}
              className="btn btn-outline-secondary w-100 my-3 p-3 custom-button-colour"
            >
              Pay Now
            </button>
          </div>
        </div>

        <div className="col-6">
          <div className="right-section vh-100 d-flex flex-column justify-content-center">
            <div className="cart-prods-container flex-column d-flex">
              {cart.map((item) => (
                <div key={item.product.slug} className="">
                  <div className=" d-flex flex-row w-75 mx-auto mt-5">
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
            </div>
            <textarea
              className="w-75 mx-auto border-0 bg-secondary-subtle fs-5 fw-light mt-5 p-3 mb-5"
              name="orderComment"
              id="orderComment"
              rows="2"
              value={comment}
              disabled
            ></textarea>
            <div className="w-75 mx-auto">
              <p className="mb-0 pb-0">
                <span className="fs-5 fw-light">Total: </span>
                {cart && (
                  <span className="fw-bold">
                    USD{' '}
                    {Math.round(
                      cart.reduce((total, item) => total + item.quantity * item.product.price, 0) *
                        100
                    ) / 100}
                  </span>
                )}
              </p>
              <p className="small-text fw-lighter mt-0">Shipping & taxes included</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
