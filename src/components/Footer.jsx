import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BiLogoVisa, BiLogoPaypal } from 'react-icons/bi';
import { LiaApplePay } from 'react-icons/lia';
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

function Footer() {
  return (
    <>
      <div className="container-fluid bg-black">
        <div className="row text-white py-5 mx-5">
          <div className="d-flex w-100 justify-content-between">
            <div className="col-2">
              <h6>CUSTOMER SERVICE</h6>
              <ul className="list-unstyled">
                <li>FAQs</li>
                <li>Dealers</li>
                <li>Dealer Inquiries</li>
                <li>Privacy Policy</li>
                <li>Shipping Policy</li>
                <li>Contact Us</li>
                <li>Returns/Refunds</li>
                <li>Sitemap</li>
                <li>Thank You Supply</li>
              </ul>
            </div>
            <div className="col-2">
              <h6>ABOUT</h6>
              <ul className="list-unstyled">
                <li>Smash It!</li>
                <li>The 9 Ball</li>
                <li>Certified Completes</li>
                <li>Affiliate Program</li>
                <li>Warranty</li>
              </ul>
            </div>
            <div className="col-2">
              <h6>Urban Rush</h6>
              <p>
                Urban Rush stocks the highest quality Skateboard Decks, Completes, Wheels, Trucks,
                Tools & Accessories for the surf and skate lifestyle!
              </p>
            </div>
            <div className="col-6 text-center">
              <h6>SUSCRIBE</h6>
              <p>Sign up to our mailing list!</p>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <div className="d-flex">
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        className="w-75 rounded-end-0 py-1"
                      />
                      <Button
                        className="text-white  rounded-start-0 py-1"
                        variant="warning"
                        type="submit"
                      >
                        OK
                      </Button>
                    </div>
                    <Form.Text className="d-block text-white">
                      I have read and accept the Privacy Policy
                    </Form.Text>
                  </Form.Group>
                </Form>
                <div className="d-flex justify-content-around w-50">
                  <FaFacebookF color="white" size={20} />
                  <FaXTwitter color="white" size={20} />
                  <FaInstagram color="white" size={20} />
                  <TfiYoutube color="white" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between pb-5 mx-5">
          <BiLogoVisa color="white" size={60} className="d-inline" />
          <BiLogoPaypal color="white" size={40} />
          <LiaApplePay color="white" size={60} />
          <FaCcDinersClub color="white" size={40} />
          <FaCcMastercard color="white" size={40} />
          <FaShopify color="white" size={40} />
          <SiAmericanexpress color="white" size={40} />
        </div>
      </div>
    </>
  );
}

export default Footer;
