import "./EditAccount.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logout, login } from "../redux/userSlice";

function EditAccount(props) {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      setFirstname(user.firstname);
      setLastname(user.lastname);
      setEmail(user.email);
      setAddress(user.address);
      setPhone(user.phone);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios({
        method: "PATCH",
        url: `${baseURL}/users/${params.id}`,
        data: { firstname, lastname, email, address, phone, password },
      });
      dispatch(logout());
      const response = await axios({
        url: `${baseURL}/login/user`,
        method: "POST",
        data: { password, email },
      });
      dispatch(login(response.data));
      navigate(`/account`);
    } catch (error) {}
  };

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col d-none d-sm-none d-lg-flex text-start justify-content-center align-items-center imgLogin">
          <div className="m-5">
            <div className="m-0">
              <h2 className="textTitle">Edit</h2>
              <h2 className="textTitle">Account</h2>
            </div>
          </div>
        </div>

        {/* Responsive */}
        <div className="col d-sm-flex d-lg-none text-center justify-content-center align-items-center imgLogin responsiveHeight">
          <div className="mt-2">
            <h2 className="textTitleResponsive">Edit</h2>
            <h2 className="textTitleResponsive">Account</h2>
          </div>
        </div>

        {/* Termina Responsive */}

        <div className="container-fluid col-sm-12 col-lg-6 text-start d-flex justify-content-center  align-items-center">
          <div className="px-3 inputWidth mt-2">
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label hidden htmlFor="firstname">
                    Firstname
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="form-control my-2 rounded-0"
                    id="firstname"
                    name="firstname"
                    required
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div>
                  <label hidden htmlFor="lastname">
                    Lastname
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="form-control my-2 rounded-0"
                    id="lastname"
                    name="lastname"
                    required
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <div>
                  <label hidden htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control my-2 rounded-0"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label hidden htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control my-2 rounded-0"
                    id="address"
                    name="address"
                    placeholder="Address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div>
                  <label hidden htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control my-2 rounded-0"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label hidden htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control my-2 rounded-0"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <br />
                <div className="d-grid p-0">
                  <button
                    type="submit"
                    className="btn btn-dark rounded-0 btn-lg p-1"
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditAccount;
