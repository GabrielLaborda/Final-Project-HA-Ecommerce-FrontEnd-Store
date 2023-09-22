import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BiLogoVisa, BiLogoPaypal, BiLogoMastercard } from 'react-icons/bi';
import { LiaApplePay, LiaCcDinersClub } from 'react-icons/lia';
import {
  FaCcDinersClub,
  FaCcMastercard,
  FaShopify,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa6';
import { SiAmericanexpress } from 'react-icons/si';
import { TfiYoutube } from 'react-icons/tfi';
import './Footer.css';
import { toast } from 'react-toastify';

const notifyAlert = () =>
  toast.warn('Sory, this feature is still under development!', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

const handleNotify = () => {
  notifyAlert();
};

function Footer() {
  return (
    <>
      <div className="bg-black">
        <div className="container footer">
          <div className="row text-white py-5 g-0">
            <div className="col-12 col-md-6 py-3">
              <h6 className="fw-bold fs-5">URBAN RUSH</h6>
              <p className="w-75">
                Urban Rush stocks the highest quality Skateboard Decks, Completes, Wheels, Trucks,
                Tools & Accessories for the surf and skate lifestyle!
              </p>
              <div className="d-flex justify-content-around w-50">
                <FaFacebookF color="white" size={20} onClick={handleNotify} role="button" />
                <FaXTwitter color="white" size={20} onClick={handleNotify} role="button" />
                <FaInstagram color="white" size={20} onClick={handleNotify} role="button" />
                <TfiYoutube color="white" size={20} onClick={handleNotify} role="button" />
              </div>
            </div>
            <div className="col-12 col-md-3  d-flex flex-column justify-content-star py-3">
              <h6 className="fw-bold fs-5">CUSTOMER SERVICE</h6>
              <ul className="list-unstyled">
                <li className="p-0 fw-normal" onClick={handleNotify} role="button">
                  FAQs
                </li>
                <li className="p-0 fw-normal" onClick={handleNotify} role="button">
                  Contact Us
                </li>
                <li className="p-0 fw-normal" onClick={handleNotify} role="button">
                  Privacy Policy
                </li>
                <li className="p-0 fw-normal" onClick={handleNotify} role="button">
                  Shipping Policy
                </li>
                <li className="p-0 fw-normal" onClick={handleNotify} role="button">
                  Contact Us
                </li>
                <li className="p-0 fw-normal" onClick={handleNotify} role="button">
                  Returns/Refunds
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-3 py-3">
              <h6 className="fw-bold fs-5">ABOUT</h6>
              <ul className="list-unstyled footer-ul">
                <li className="p-0 fw-normal" onClick={handleNotify} role="button">
                  Smash It!
                </li>
                <li className="p-0 fw-normal" onClick={handleNotify} role="button">
                  Certified Completes
                </li>
                <li className="p-0 fw-normal" onClick={handleNotify} role="button">
                  Affiliate Program
                </li>
                <li className="p-0 fw-normal" onClick={handleNotify} role="button">
                  Warranty
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col">
              <div>
                <div className="d-flex align-items-center justify-content-between pb-5">
                  <BiLogoVisa color="white" size={60} onClick={handleNotify} role="button" />
                  <BiLogoPaypal color="white" size={40} onClick={handleNotify} role="button" />
                  <LiaApplePay color="white" size={60} onClick={handleNotify} role="button" />
                  <FaCcDinersClub color="white" size={40} onClick={handleNotify} role="button" />
                  <BiLogoMastercard color="white" size={60} onClick={handleNotify} role="button" />
                  <SiAmericanexpress color="white" size={40} onClick={handleNotify} role="button" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
