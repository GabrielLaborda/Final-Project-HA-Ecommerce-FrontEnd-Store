import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BiLogoVisa, BiLogoPaypal, BiLogoMastercard } from "react-icons/bi";
import { LiaApplePay, LiaCcDinersClub } from "react-icons/lia";
import {
  FaCcDinersClub,
  FaCcMastercard,
  FaShopify,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
import { SiAmericanexpress } from "react-icons/si";
import { TfiYoutube } from "react-icons/tfi";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="bg-black">
        <div className="container footer">
          <div className="row text-white py-5 g-0">
            <div className="col-12 col-md-6 py-3">
              <h6 className="fw-bold fs-5">URBAN RUSH</h6>
              <p className="w-75">
                Urban Rush stocks the highest quality Skateboard Decks,
                Completes, Wheels, Trucks, Tools & Accessories for the surf and
                skate lifestyle!
              </p>
              <div className="d-flex justify-content-around w-50">
                <FaFacebookF color="white" size={20} />
                <FaXTwitter color="white" size={20} />
                <FaInstagram color="white" size={20} />
                <TfiYoutube color="white" size={20} />
              </div>
            </div>
            <div className="col-12 col-md-3  d-flex flex-column justify-content-star py-3">
              <h6 className="fw-bold fs-5">CUSTOMER SERVICE</h6>
              <ul className="list-unstyled">
                <li className="p-0 fw-normal">FAQs</li>
                <li className="p-0 fw-normal">Contact Us</li>
                <li className="p-0 fw-normal">Privacy Policy</li>
                <li className="p-0 fw-normal">Shipping Policy</li>
                <li className="p-0 fw-normal">Contact Us</li>
                <li className="p-0 fw-normal">Returns/Refunds</li>
              </ul>
            </div>
            <div className="col-12 col-md-3 py-3">
              <h6 className="fw-bold fs-5">ABOUT</h6>
              <ul className="list-unstyled footer-ul">
                <li className="p-0 fw-normal">Smash It!</li>
                <li className="p-0 fw-normal">Certified Completes</li>
                <li className="p-0 fw-normal">Affiliate Program</li>
                <li className="p-0 fw-normal">Warranty</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col">
              <div>
                <div className="d-flex align-items-center justify-content-between pb-5">
                  <BiLogoVisa color="white" size={60} />
                  <BiLogoPaypal color="white" size={40} />
                  <LiaApplePay color="white" size={60} />
                  <FaCcDinersClub color="white" size={40} />
                  <BiLogoMastercard color="white" size={60} />
                  <SiAmericanexpress color="white" size={40} />
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

/*
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
                </div>
                */
