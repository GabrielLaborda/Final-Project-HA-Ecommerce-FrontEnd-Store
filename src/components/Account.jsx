import React from "react";
import "./Account.css";
import { logout } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center vh-100 prueba">
            <h1 className="account-h1">My Account</h1>
            <span onClick={handleLogout} className="account-logOut">
              Log out
            </span>
          </div>
          <div className="col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center vh-100">
            <div>
              <h3 className="account-data mb-3">ORDER HISTORY</h3>
              <p className="account-data-p">
                You haven't placed any orders yet.
              </p>
            </div>
            <div>
              <h3 className="mt-5 mb-3 account-data">ACCOUNT DETAILS</h3>
              <p className="account-data-p">Name: Luis</p>
              <p className="account-data-p">Lastname: Suarez</p>
              <p className="account-data-p">Email: Lucho@gmail.com</p>
              <p className="account-data-p">Phone: 1589647</p>
              <p className="account-data-p">Address: Bulevar Artigas 1182</p>
              <button className="btn btn-outline-dark border-secondary-subtle rounded-0 account-btn">
                Edit your Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
