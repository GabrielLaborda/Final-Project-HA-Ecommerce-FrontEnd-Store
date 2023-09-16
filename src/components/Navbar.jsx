import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navbar.css";
import { AiOutlineShopping } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";

import { useSelector } from "react-redux";

function NavbardNuevo(props) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  const handleClick = () => {
    if (user) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  };

  const handleNavbarToggle = () => {
    setIsNavbarTransparent(!isNavbarTransparent);
  };
  const navbarClassName = isNavbarTransparent ? "" : "transparent-navbar";
  return (
    <>
      <header className={`w-100 ${navbarClassName}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link to={"/"} className="navbar-brand">
              <h2 className="navbardTitleBold">
                <span className="navbardTitle">URBAN</span>RUSH
              </h2>
            </Link>
            <button
              className="navbar-toggler bg-black"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleNavbarToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-list text scrolling-white"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ms-auto my-2 my-lg-0">
                <li className="nav-item">
                  <Link
                    to={"/products/"}
                    className="nav-link scrolling-white text"
                    href="#"
                    aria-disabled="true"
                  >
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/about"}
                    className="nav-link scrolling-white text about"
                    href="#"
                    aria-disabled="true"
                  >
                    About This Project
                  </Link>
                </li>
                <li className="nav-item">
                  <span
                    onClick={handleClick}
                    className="nav-link  scrolling-white text"
                    aria-disabled="true"
                  >
                    <BiSolidUser size={30} />
                  </span>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/cart"}
                    className="nav-link  scrolling-white text"
                    aria-disabled="true"
                  >
                    <AiOutlineShopping size={30} />{" "}
                    <span>
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <script type="text/javascript">
        {window.addEventListener("scroll", function () {
          let header = document.querySelector("header");
          header.classList.toggle("scrolling", window.scrollY > 0);
        })}
      </script>
    </>
  );
}
export default NavbardNuevo;
