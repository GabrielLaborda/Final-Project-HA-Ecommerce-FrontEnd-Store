import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function CheckoutUserData() {
  const user = useSelector((state) => state.user);
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('United States');

  const getUser = async () => {
    const response = await axios({
      method: 'GET',
      url: `${baseURL}/users/${user.id}`,
    });
    setEmail(response.data.email);
    setFirstname(response.data.firstname);
    setLastname(response.data.lastname);
    setAddress(response.data.address);
    setPhone(response.data.phone);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="row">
      <div className="d-flex flex-column justify-content-center align-items-end">
        <div className="d-flex flex-column w-100">
          <div className="d-flex flex-column w-100">
            {/* <label htmlFor="email">Contact</label> */}
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              className="form-control p-3 my-2"
              disabled
              onChange={() => {
                return;
              }}
              autoComplete="off"
            />
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-end w-100">
          <div className="w-100">
            <div className="row">
              <div className="col-6">
                {/* <label htmlFor="firstname">Contact</label> */}
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  required
                  value={firstname}
                  className="form-control p-3 mt-2"
                  disabled
                  onChange={() => {
                    return;
                  }}
                  autoComplete="off"
                />
              </div>
              <div className="col-6 ps-0">
                {/* <label htmlFor="lastname">Contact</label> */}
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  required
                  value={lastname}
                  className="form-control p-3 mt-2"
                  disabled
                  onChange={() => {
                    return;
                  }}
                  autoComplete="off"
                />
              </div>
            </div>
            {/* <label htmlFor="country">Contact</label> */}
            <input
              type="text"
              name="country"
              id="country"
              placeholder="United States"
              value={country}
              className="form-control p-3 my-2"
              disabled
              onChange={() => {
                return;
              }}
              autoComplete="off"
            />
            {/* <label htmlFor="address">Contact</label> */}
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              required
              value={address}
              className="form-control p-3 my-2"
              disabled
              onChange={() => {
                return;
              }}
              autoComplete="off"
            />
            <p>+ Add apartment, suite, etc.</p>
          </div>
          {/* <label htmlFor="phone">Contact</label> */}
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="(+1) 310-688-5717"
            required
            value={phone}
            className="form-control p-3 my-2"
            disabled
            onChange={() => {
              return;
            }}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}

export default CheckoutUserData;
