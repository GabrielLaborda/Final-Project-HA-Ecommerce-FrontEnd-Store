function Login() {
  return (
    <div className="body-login-sign">
      <div className="container">
        <div className="row row-login-sign justify-content-center">
          <div className="col-sm-11 col-md-7 col-lg-4 text-start sign-div borderRoundedCol my-5 p-3 justify-content-center align-items-center">
            <div className="m-5">
              <div className="m-0">
                <h4 className="mb-1 mt-4 sign-up-login-title">Login</h4>
                <p className="little-text">Hey! Nice to see you again</p>
                <form action="" method="">
                  <div className="nada">
                    <label htmlFor="email" className="form-label"></label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                    />
                    <label htmlFor="firstName" className="form-label"></label>
                    <label htmlFor="password" className="form-label"></label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <div className="d-grid gap-1">
                    <button
                      className="btn btn-dark rounded-pill btn-lg signLogButton"
                      type="submit"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
                <p className="text-center mt-4 little-text">
                  Don't have an account?<a href="#"> Sign up</a>
                </p>
                <p className="text-center mt-4 little-text">
                  <a href="#">Forgot your password?</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
