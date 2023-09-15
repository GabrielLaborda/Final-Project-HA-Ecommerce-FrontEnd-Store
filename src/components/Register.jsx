import "./RegisterYLogin.css";
import { Link } from "react-router-dom";
function Register(props) {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col d-none d-sm-none d-lg-flex text-start justify-content-center align-items-center imgLogin">
          <div className="m-5">
            <div className="m-0">
              <h2 className="textTitle">Costumer</h2>
              <h2 className="textTitle">Register</h2>
            </div>
          </div>
        </div>

        {/* Responsive */}
        <div className="col d-sm-flex d-lg-none text-center justify-content-center align-items-center imgLogin responsiveHeight">
          <div className="mt-2">
            <h2 className="textTitleResponsive">Costumer</h2>
            <h2 className="textTitleResponsive">Register</h2>
          </div>
        </div>

        {/* Termina Responsive */}

        <div className="container-fluid col-sm-12 col-lg-6 text-start d-flex justify-content-center  align-items-center">
          <div className="px-3 inputWidth mt-2">
            <div>
              <form method="">
                <div>
                  <label htmlFor="firstname">Firstname</label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="form-control my-1 rounded-0"
                    id="firstname"
                    name="firstname"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastname">Lastname</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="form-control my-1 rounded-0"
                    id="lastname"
                    name="lastname"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control my-1 rounded-0"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address">Address</label>
                  <input
                    type="tetx"
                    className="form-control my-1 rounded-0"
                    id="address"
                    name="address"
                    placeholder="Address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tetx"
                    className="form-control my-1 rounded-0"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control my-1 rounded-0"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                <br />
                <div className="d-grid p-0">
                  <button className="btn btn-dark rounded-0 btn-lg p-1">
                    Sign up
                  </button>
                </div>
              </form>
              <p className="text-center my-4">
                Alerady have an account?<Link to={"/login"}> Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
