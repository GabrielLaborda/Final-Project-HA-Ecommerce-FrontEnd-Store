import { useState } from "react";

function CheckoutUserData() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="row">
      <div className="d-flex flex-column justify-content-center align-items-end">
        <div className="d-flex flex-column w-100">
          <div className="d-flex flex-column w-100">
            <label htmlFor="">Contact</label>
            <input
              type="email"
              placeholder="Email"
              required
              value={"john.doe@cocacola.com"}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control p-3 my-2"
            />
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-end w-100">
          <div className="w-100">
            <label htmlFor="">Delivery</label>
            <div className="row">
              <div className="col-6">
                <input
                  type="text"
                  name="FirstName"
                  id="FirstName"
                  placeholder="First Name"
                  required
                  value={"John"}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="form-control p-3 mt-2"
                />
              </div>
              <div className="col-6 ps-0">
                <input
                  type="text"
                  name="LastName"
                  id="LastName"
                  placeholder="Last Name"
                  required
                  value={"Doe"}
                  onChange={(e) => setLastname(e.target.value)}
                  className="form-control p-3 mt-2"
                />
              </div>
            </div>
            <input
              type="text"
              name="Company"
              id="Company"
              placeholder="Company"
              required
              value={"Coca-Cola"}
              onChange={(e) => setCompany(e.target.value)}
              className="form-control p-3 my-2"
            />
            <input
              disabled
              type="text"
              name="Country/Region"
              id="Country/Region"
              placeholder="United States"
              value={"United States"}
              className="form-control p-3 my-2"
            />
            <input
              type="text"
              name="Address"
              id="Address"
              placeholder="Address"
              required
              value={"5th Ave 175"}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control p-3 my-2"
            />
            <p>+ Add apartment, suite, etc.</p>
          </div>
          <div className="row w-100 m-0">
            <div className="col-4 ps-0">
              <input
                type="text"
                name="City"
                id="City"
                placeholder="City"
                required
                value={"NY"}
                onChange={(e) => setCity(e.target.value)}
                className="form-control p-3 mt-2"
              />
            </div>
            <div className="col-4 ps-0">
              <select
                name="states"
                id="states"
                className="form-select p-3 mt-2"
              >
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className="col-4 px-0">
              <input
                type="text"
                name="ZIPcode"
                id="ZIPcode"
                placeholder="ZIP code"
                required
                value={"11016"}
                onChange={(e) => setZipCode(e.target.value)}
                className="form-control p-3 mt-2"
              />
            </div>
          </div>

          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="(+1) 310-688-5717"
            required
            value={"(+1) 310-688-5717"}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control p-3 my-2"
          />
        </div>
      </div>
    </div>
  );
}

export default CheckoutUserData;
