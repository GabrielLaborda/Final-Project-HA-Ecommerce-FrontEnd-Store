import './ShoppingCart.css';

import { NavLink } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';
import { useState } from 'react';

function ShoppintCart() {
  const [comment, setComment] = useState('');
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const prods = true;
  const cartProducts = [
    {
      name: 'STRAND SQUALL',
      description: `THE DEEP COLLECTION
  
      It/s time to broaden your perspective with a trip down below, to The Deep. Our friend Nate Reifke, a.k.a. Salty Timbers, is back with some mind-bending graphics from the abyss for the all new The Deep Collection. Reach to the depths of your senses, with Nate’s signature style of black and white illustration positioned over colorful splattered backdrops. To top it off, or should we say bottom it off, we’ve taken these boards even deeper with exposed Black Burle veneers. While you’re all probably familiar with the Fat Wave and Fault Line shapes, we’re also introducing the Strand for the first time ever in a 7 ply Maple construction. Some vivid graphics on some solid shapes are sure to make all your trips wild with The Deep Collection.
      
       
      
      RIDING STYLE
      
      Carving
      Cruiser
       
      
      DIMENSIONS
      
      Length: 34.0”
      Width: 8.7”
      Wheelbase: 20.5”
       
      
      COMPONENTS
      
      8.375” Gullwing Mission Trucks
      61mm 78a Nineballs
      ABEC 5 Greaseball Bearings
      0.25” Recycled Plastic Risers
      1.25” Hardened Steel Bolts
      Custom Screened Grip Tape
       
      
      FEATURES
      
      7 Ply Maple
      Black Burle Bottom Veneer
      Two-Tone Swirled Wheels
      Printed Grip Tape
      Kicktail
      Art by Nate Reifke`,
      picture: ['STRANDSQUAL01_2048x.webp'],
      price: 198.95,
      stock: 89,
      category: '6501ce57c918f5ce0a3cdb2e',
      featured: true,
      categorySlug: 'completes',
      slug: 'strand-squall',
      quantity: 1,
    },
    {
      name: '74MM 78A NINEBALLS GREY',
      description: `Our Nineballs have been a long-time favorite of skaters from all walks of life. From cruising kids to freeriding chargers, we’ve got something for everyone in this collection. All these wheels provide good roll speed and come with either a natural finish for speed and grip, or a stone-ground finish for immediate slides.
  
      *All wheels are sold as a set of 4
      
      SPECS
      74mm Diameter
      78A Durometer
      50mm Contact Patch
      
      FEATURES
      Nineball Urethane
      Better Roll Speed
      Sharp Lip Shape for Extra Grip
      Offset Core
      Natural Finish Provides Extra Grip
      Larger Size Rolls Over Debris and Imperfections
      Larger Size Helps Hold Speed Longer`,
      picture: [
        '74MM-78A-NINEBALLS-GREY-temporary_2048x.webp',
        '74MM-78A-NINEBALLS-GREY-ANGLE-temporary_2048x.webp',
      ],
      price: 49.95,
      stock: 83,
      category: '6501ce57c918f5ce0a3cdb31',
      featured: false,
      categorySlug: 'wheels',
      slug: '74mm-78a-nineballs-grey',
      quantity: 3,
    },
  ];
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
            {prods ? (
              <div className="right-section vh-100 flex-column d-flex  justify-content-center">
                {cartProducts.map((product) => (
                  <div className="">
                    <div className=" d-flex flex-row w-75 mx-auto mb-5">
                      <img
                        src={`${baseURL}/img/${product.picture[0]}`}
                        alt="Product Picture"
                        height={150}
                        className="d-none d-md-inline"
                      />
                      <div className="w-100 ms-3">
                        <NavLink
                          to={`/products/${product.categorySlug}/${product.slug}`}
                          className={'text-decoration-none'}
                        >
                          <p className="mb-0">{product.name}</p>
                        </NavLink>
                        <p>USD {product.price}</p>
                      </div>
                      <div className="m-auto d-flex align-items-center justify-content-end w-100  ">
                        <span className="bg-secondary-subtle py-1 px-3 mx-3">
                          {product.quantity}
                        </span>
                        <TiDelete size={30} />
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
                    <span className="fw-bold">
                      USD{' '}
                      {cartProducts.reduce((total, prod) => total + prod.quantity * prod.price, 0)}
                    </span>
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
