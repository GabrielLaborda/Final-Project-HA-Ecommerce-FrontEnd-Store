import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function ModalCart({ placement }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow} className="me-2 modal-cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          className="bi bi-cart-plus"
          viewBox="0 0 16 16"
        >
          <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"></path>
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
        </svg>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={placement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column justify-content-center align-items-center h-50 p-3 mt-2 border border-2 rounded-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              className="bi bi-bag-plus"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
              />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
            <h5 className="my-3">Your cart is empty!</h5>
            <p className="text-center">
              Looks like your shopping cart is empty, give it some love!
            </p>
          </div>
        </Offcanvas.Body>
        <div className="d-flex flex-column mb-5 border-top ">
          <div className="d-flex mx-4">
            <h6 className="mt-2">Subtotal</h6>
            <h6 className="mt-2 ms-auto">USD 0</h6>
          </div>
          <div className="mx-4 mt-2">
            <p>Shipping and taxes calculated at checkout.</p>
            <button className="w-100">Checkout</button>
            <p className="text-center">
              or{" "}
              <span className="text-primary" onClick={handleClose}>
                Continue Shopping
              </span>
            </p>
          </div>
        </div>
      </Offcanvas>
    </>
  );
}
export default ModalCart;
