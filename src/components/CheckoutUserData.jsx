import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function CheckoutUserData() {
  const user = useSelector((state) => state.user);
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('United States');
   const notifyError = (message) =>
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const getUser = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `${baseURL}/users/${user.id}`,
      });
      setEmail(response.data.email);
      setFirstname(response.data.firstname);
      setLastname(response.data.lastname);
      setAddress(response.data.address);
      setPhone(response.data.phone);
    } catch (err) {
      notifyError(err.response.data.msg);
      console.log(err.response.data.msg);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="row">
      <div className="d-flex flex-column justify-content-center align-items-end">
        <div className="d-flex flex-column w-100">
          <div className="d-flex flex-column w-100">
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
