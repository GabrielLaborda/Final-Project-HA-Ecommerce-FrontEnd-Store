/* import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; */
import { Link } from "react-router-dom";
import "./RegisterYLogin.css";

function Login() {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col d-none d-sm-none d-lg-flex text-start justify-content-center align-items-center imgLogin">
          <div className="m-5">
            <div className="m-0">
              <h2 className="textTitle">Costumer</h2>
              <h2 className="textTitle">Login</h2>
            </div>
          </div>
        </div>

        {/* Responsive */}

        <div className="col d-sm-flex d-lg-none text-center justify-content-center align-items-center imgLogin responsiveHeight ">
          <div className="mt-2">
            <h2 className="textTitleResponsive">Costumer</h2>
            <h2 className="textTitleResponsive">Login</h2>
          </div>
        </div>

        {/* Termina Responsive */}

        <div className="col-sm-12 col-lg-6 text-start d-flex justify-content-center container-fluid align-items-center">
          <div className="inputWidth">
            <form action="" method="">
              <div className="nada">
                <label htmlFor="email" className="form-label"></label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control rounded-0"
                  placeholder="user@example.com"
                />
                <label htmlFor="firstName" className="form-label"></label>
                <label htmlFor="password" className="form-label"></label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control rounded-0"
                  placeholder="123456"
                />
              </div>
              <br />
              <div className="d-grid gap-1">
                <button className="btn btn-dark rounded-0 btn-lg" type="submit">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mt-4 little-text">
              Don't have an account?<Link to={"/register"}> Sign up</Link>
            </p>
            <p className="text-center mt-4 little-text">
              <Link href="#">Forgot your password?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
