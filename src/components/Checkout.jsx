import CheckoutPayments from './CheckoutPayments';
import CheckoutUserData from './CheckoutUserData';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { emptyCart } from '../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addInstruction } from '../redux/orderInstructionSlice';
import './Checkout.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import ScrollArrow from './ScrollArrow';

function Checkout() {
  const storageURL = import.meta.env.VITE_API_SUPABASE_URL;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const orderInstruction = useSelector((state) => state.orderInstruction);
  const [comment, setComment] = useState(orderInstruction);

  const notifyError = (message) =>
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const notifySuccess = (message) =>
    toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const handleCheckOut = async () => {
    try {
      for (const item of cart) {
        await axios({
          method: 'PATCH',
          url: `${baseURL}/products/${item.product.slug}`,
          params: { transaction: 'buy' },
          data: { quantity: item.quantity },
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
      }
      const orderStatuses = await axios({
        method: 'GET',
        url: `${baseURL}/orderstatus`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const response = await axios({
        method: 'POST',
        url: `${baseURL}/orders`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        data: {
          products: cart.map((item) => ({
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
          })),
          status: orderStatuses.data[0],
          subtotal:
            Math.round(
              cart.reduce((total, item) => total + item.quantity * item.product.price, 0) * 100
            ) / 100,
        },
      });

      await axios({
        method: 'PATCH',
        url: `${baseURL}/users/${user.id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        params: { transaction: 'newOrder' },
        data: { orderId: response.data.orderId },
      });
      notifySuccess('Your order has been received!');
      dispatch(emptyCart());
      dispatch(addInstruction(''));
      navigate(`/account/${user.id}`);
    } catch (error) {
      notifyError(error.response.data.msg);
      console.log(error.response.data.msg);
    }
  };

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
              <button className="btn btn-light w-100 me-2">
                <img src={`${storageURL}/shopPay.svg`} alt="ShopPay" className="payIcon" />
              </button>
              <button className="btn btn-warning w-100 me-2">
                <img src={`${storageURL}/payPal.svg`} alt="PayPal" className="payIconL" />
              </button>
              <button className="btn btn-warning w-100 me-2">
                <img src={`${storageURL}/amazonPay.svg`} alt="AmazonPay" className="payIconL" />
              </button>
              <button className="btn btn-light w-100 me-2">
                <img
                  src={`${storageURL}/google-pay-logo.svg`}
                  alt="GooglePay"
                  className="payIcon"
                />
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <p>OR</p>
            </div>
            <CheckoutUserData />
            <CheckoutPayments />
            <button
              onClick={handleCheckOut}
              className="btn btn-outline-secondary w-100 my-3 p-3 custom-button-colour"
            >
              Pay Now
            </button>
          </div>
          <ScrollArrow colour={'white'} />
        </div>

        <div className="col-sm-12 col-lg-6">
          <div className="right-section vh-100 d-flex flex-column justify-content-center">
            <div className="cart-prods-container flex-column d-flex">
              <div className="d-flex ps-5 back" onClick={() => navigate(-1)}>
                <i className="bi bi-arrow-left"></i>
                <p className="ms-2">Back</p>
              </div>
              {cart.map((item) => (
                <div key={item.product.slug} className="">
                  <div className=" d-flex flex-row w-75 mx-auto mt-5 align-items-center">
                    {item.product.picture && (
                      <>
                        <img
                          src={`${storageURL}/${item.product.picture[0]}`}
                          alt="Product Picture"
                          height={150}
                          className="d-none d-md-inline"
                        />
                        <img
                          src={`${storageURL}/${item.product.picture[0]}`}
                          alt="Product Picture"
                          height={100}
                          className="d-inline d-md-none"
                        />
                      </>
                    )}
                    <div className="w-100 ms-3 d-none d-md-inline">
                      <NavLink
                        to={`/products/${item.categorySlug}/${item.product.slug}`}
                        className={'text-decoration-none'}
                      >
                        <p className="mb-0">{item.product.name}</p>
                      </NavLink>
                      <p className="mb-0">USD {item.product.price}</p>
                      <p className="text-body-tertiary">Quantity: {item.quantity}</p>
                    </div>
                    <div className="w-100 ms-3 d-inline d-md-none small-text">
                      <NavLink
                        to={`/products/${item.categorySlug}/${item.product.slug}`}
                        className={'text-decoration-none'}
                      >
                        <p className="mb-0">{item.product.name}</p>
                      </NavLink>
                      <p className="mb-0">USD {item.product.price}</p>
                      <p className="text-body-tertiary">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
              <ScrollArrow colour={'black'} />
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
                    {(
                      cart.reduce((total, item) => total + item.quantity * item.product.price, 0).toFixed(2))}
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
