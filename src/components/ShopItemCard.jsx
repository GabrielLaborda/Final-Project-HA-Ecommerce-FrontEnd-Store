import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './ShopItemCard.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function ShopItemCard({ product, categorySlug }) {
  const storageURL = import.meta.env.VITE_API_SUPABASE_URL;
  const dispatch = useDispatch();

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
    if (product.stock >= 1) {
      dispatch(addItem({ product, categorySlug: categorySlug, quantity: 1 }));
      return notifySuccess();
    } else {
      return notifyError();
    }
  };

  const baseURL = import.meta.env.VITE_API_BASE_URL;
  return (
    <div className="d-flex col-sm-12 col-md-6 col-lg-4 col-xl-3 h-100">
      <div className="card border-0 mb-3 h-100">
        <div className="swiper-slide p-1">
          <div className="card m-0 py-3 px-3 rounded-0 border-0">
            <NavLink
              className={'text-decoration-none text-black'}
              to={`/products/${categorySlug}/${product.slug}`}
            >
              <div className="img-container">
                <img
                  src={`${storageURL}/${product.picture[0]}`}
                  className="card-img-top"
                  alt="..."
                />
                {product.stock <= 5 && (
                  <img src="/last5Units.svg" alt="last5units" className="last-units" />
                )}
                {product.featured && product.stock >= 5 && (
                  <img src="/featured.svg" alt="featured" className="last-units" />
                )}
              </div>
            </NavLink>
            <button
              type="button"
              className="btn btn-outline-dark rounded-0 w-100 border-secondary-subtle mt-4"
              onClick={() => hanldeAddToCart(product)}
            >
              Add to cart
            </button>
            <div className="card-body">
              <h5 className="card-title">USD {product.price}</h5>
              <p className="card-text text-center w-100 card-data">{product.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopItemCard;
