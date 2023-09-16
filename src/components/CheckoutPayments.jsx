function CheckoutPayments() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-end">
      <div className="d-flex flex-column w-100 align-items-start">
        <h2>Payment</h2>
        <p>All transactions are secure and encrypted.</p>
      </div>
      <div className="form-control bg-light">
        <div className="d-flex justify-content-between py-3">
          <div className="d-flex justify-content-center align-items-center">
            <input type="radio" className="me-2" />
            <p className="m-0">Credit Card</p>
          </div>
          <div className="d-flex checkout-credit-cards">
            <img src="./visa.svg" alt="Visa" />
            <img src="./master.svg" alt="Master Card" />
            <img src="./amex.svg" alt="American Express" />
            <img src="./discover.svg" alt="Discover" />
            <img src="./diners.svg" alt="Diners" />
          </div>
        </div>
        <input
          type="number"
          name="cardNumber"
          id="cardNumber"
          value={378282246310005}
          className="form-control p-3 mt-2"
        />
        <div className="row checkout-form-triple-col">
          <div className="col-4">
            <select
              name="expMonth"
              id="expMonth"
              className="form-select p-3 mt-2"
            >
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <div className="col-4">
            <select
              name="expYear"
              id="expYear"
              className="form-select p-3 mt-2"
            >
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
              <option value="2031">2031</option>
              <option value="2032">2032</option>
              <option value="2033">2033</option>
            </select>
          </div>
          <div className="col-4">
            <input
              type="number"
              name="securityCode"
              id="securityCode"
              placeholder={123}
              className="form-control p-3 mt-2"
            />
          </div>
        </div>
        <input
          type="text"
          name="nameOnCard"
          id="nameOnCard"
          placeholder={"John Doe"}
          className="form-control p-3 mt-2"
        />
        <div className="form-control mt-5">
          <div className="d-flex justify-content-between py-3 border-bottomo">
            <div className="d-flex justify-content-center align-items-center">
              <input type="radio" className="me-2" disabled />
              <p className="m-0">PayPal</p>
            </div>
            <div className="d-flex checkout-credit-cards">
              <img src="./visa.svg" alt="Visa" />
            </div>
          </div>
        </div>
        <div className="form-control mt-2">
          <div className="d-flex justify-content-between py-3">
            <div className="d-flex justify-content-center align-items-center">
              <input type="radio" className="me-2" disabled />
              <p className="m-0">Amazon Pay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPayments;
