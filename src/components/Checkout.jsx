import "./Checkout.css";
import CheckoutPayments from "./CheckoutPayments";
import CheckoutUserData from "./CheckoutUserData";

function Checkout() {
  return (
    <>
      <div className="row">
        <div className="col-7 d-flex flex-column align-items-end checkout-left-container pt-5">
          <div className="w-75 pt-5 left-container-content">
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
            <button className="btn btn-outline-secondary w-100 my-3 p-3 custom-button-colour">Pay Now</button>
          </div>
        </div>

        <div className="col-5"></div>
      </div>
    </>
  );
}

export default Checkout;
