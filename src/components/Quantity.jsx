import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

function Quantity({ product }) {
  const cart = useSelector((state) => state.cart);
  const params = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const handleAddone = () => setQuantity(quantity + 1);
  const handleSubstractOne = () => {
    if (quantity >= 2) setQuantity(quantity - 1);
  };

  const notifyError = () =>
    toast.error('Ops, insufficient stock!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  const notifySuccess = () =>
    toast.success('Item added to cart!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const hanldeAddToCart = () => {
    const cartItem = cart.find((item) => item.product.slug === product.slug);

    if (cartItem) {
      if (product.stock >= quantity && product.stock > cartItem.quantity) {
        dispatch(addItem({ product, categorySlug: params.categorySlug, quantity: quantity }));
        return notifySuccess();
      } else {
        return notifyError();
      }
    } else {
      if (product.stock >= quantity) {
        dispatch(addItem({ product, categorySlug: params.categorySlug, quantity: quantity }));
        return notifySuccess();
      } else {
        return notifyError();
      }
    }
  };

  return (
    <>
      <div>
        <label htmlFor="quantity">Quantity</label>
        <div className="mt-2 buttonsQuantity">
          <div className="d-flex">
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="form-control w-25 rounded-0"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={handleSubstractOne} className="ms-2 btn btn-outline-dark rounded-0">
              <i className="bi bi-dash-circle"></i>
            </button>
            <button onClick={handleAddone} className="ms-2 btn btn-outline-dark rounded-0">
              <i className="bi bi-plus-circle"></i>
            </button>
          </div>
          <button className="mt-3 btn btn-dark rounded-0 w-100" onClick={hanldeAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Quantity;
