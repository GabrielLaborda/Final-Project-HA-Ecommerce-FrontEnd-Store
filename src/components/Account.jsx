import React from 'react';
import './Account.css';
import { logout } from '../redux/userSlice';
import AccountOrders from './AccountOrders';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Account() {
  const user = useSelector((state) => state.user);
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [account, setAccount] = useState('');

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: `${baseURL}/users/${params.id}`,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        console.log(response.data);
        setAccount(response.data);
      } catch (err) {
        console.log(err.msg);
      }
    };
    getUser();
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center vh-100 background-image">
            <h1 className="account-h1">My Account</h1>
            <span onClick={handleLogout} className="account-logOut">
              Log out
            </span>
          </div>
          <div className=" col-md-6 col-lg-6 d-flex flex-column align-items-center">
            <div className=" d-flex flex-column justify-content-center align-items-start vh-100 px-2">
              <div className="order-details mt-5 pt-5">
                <h3 className="account-data mb-3 ">ORDER HISTORY</h3>
                <AccountOrders />
              </div>
              <div className="mb-5">
                <h3 className="mt-5 mb-3 account-data">ACCOUNT DETAILS</h3>
                <p className="account-data-p">Name: {user.firstname}</p>
                <p className="account-data-p">Lastname: {account.lastname}</p>
                <p className="account-data-p">Email: {account.email}</p>
                <p className="account-data-p">Phone: {account.phone}</p>
                <p className="account-data-p">Address: {account.address}</p>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-outline-dark border-secondary-subtle rounded-0 account-btn"
                >
                  Edit your Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
